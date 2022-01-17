// nodemon --exec 'node -r sucrase/register -e "require(`./walmart/generate_walmart_connector.ts`).generate_walmart_connector()"' --ext ts --ignore walmart_connector.ts
// Docs: https://developer.walmart.com/ca/ca-mp/
// https://seller.walmart.ca/items-and-inventory/feed-status/item
// @ts-ignore
import { createSign, randomBytes } from 'crypto'
// @ts-ignore
import fs from 'fs'

const snake_case = word => {
    let arr = word.split('')
    let new_arr = arr.map((char, i) => {
        if (char.match(/[A-Z]/)) {
            const prefix = !arr[i - 1]?.match(/[A-Z_]/) ? '_' : ''

            return prefix + char.toLowerCase()
        }
        return char
    })
    return new_arr.join('')
}
const parameterize_path = path => {
    const arr = path.split('')
    let new_arr = arr.map((char, i) => {
        if (arr[i - 1] === '{') {
            return `path.${char}`
        }
        if (arr[i] === '{') {
            return '${'
        }
        return char
    })
    return new_arr.join('')
}

export const generate_walmart_connector = () => {
    const routes_directory = './src/schemas/routes'
    const generated_client_filename = './src/walmart_connector.ts'

    const file_names = fs.readdirSync(routes_directory)
    const files = file_names
        .map(file_name => fs.readFileSync(`${routes_directory}/${file_name}`, 'utf8'))
        .map(JSON.parse)

    const type_to_typescript_type = type => {
        if (type === 'integer') {
            return 'number'
        }
        return type
    }

    const param_to_obj = (file, path, method, param_in) => {
        return file.paths[path][method]?.parameters
            .filter(el => el.in === param_in)
            .map(
                parameter =>
                    `"${parameter.name}"${parameter.required ? '' : '?'}: ${type_to_typescript_type(
                        parameter.schema.type
                    )}`
            )
            .join(',\n\t\t')
    }

    const output = `import { json_to_query_string, generate_correlation_id, generate_signature } from './helpers'
    
declare var Partial;

${files
    .map(
        file => `/* ${file.info.title} */
// ${file.info.description}
${Object.keys(file.paths)
    .flatMap(path =>
        Object.keys(file.paths[path]).flatMap(method => {
            const url = `${file.servers[0].url}${parameterize_path(path)}`
            return `export const ${snake_case(file.paths[path][method]?.operationId)} = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },${
        param_to_obj(file, path, method, 'query').length
            ? `
    query: {
        ${param_to_obj(file, path, method, 'query')}
    },`
            : ''
    }${
                param_to_obj(file, path, method, 'path').length
                    ? `
    path: {
        ${param_to_obj(file, path, method, 'path')}
    },`
                    : ''
            }${
                file.paths[path][method].requestBody?.required
                    ? `
    data: any,`
                    : ''
            }${
                param_to_obj(file, path, method, 'header').length
                    ? `
    headers: Partial<{
        ${param_to_obj(file, path, method, 'header')}
    }>`
                    : ''
            }) => {
    const url = \`${url}${ param_to_obj(file, path, method, 'query').length ? '${json_to_query_string(query)}' : ''}\`
    const method = '${method}'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(), 
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(url, method, auth.walmart_secret, auth.walmart_consumer, timestamp),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }
    
    return { method, url, ${file.paths[path][method].requestBody?.required ? `data, ` : ''}headers: enhanced_headers }
}`
        })
    )
    .join('\n')}
    `
    )
    .join('\n')}`

    fs.writeFileSync(generated_client_filename, output)
}
