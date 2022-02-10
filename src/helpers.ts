// @ts-ignore
import { createSign, randomBytes } from 'crypto-browserify'

export const json_to_query_string = json => {
    const str = Object.entries(json)
        .map(([k, v]) => `${k}=${v}`)
        .join('&')
    // .replaceAll(':', '%3A')

    const prefix = str.length > 0 ? '?' : ''
    return prefix + str
}

export const generate_correlation_id = () => {
    return randomBytes(16).toString('hex')
}

export const generate_signature = (url, method, secret, consumer, timestamp) => {
    const pk_header = '\n-----BEGIN PRIVATE KEY-----\n'
    const pk_footer = '\n-----END PRIVATE KEY-----\n'

    const privateKey = `${pk_header}${secret}${pk_footer}`

    const stringToSign =
        consumer + '\n' + url + '\n' + method.toUpperCase() + '\n' + timestamp + '\n'

    const sign = createSign('RSA-SHA256')

    sign.update(stringToSign)

    return sign.sign(privateKey, 'base64')
}
