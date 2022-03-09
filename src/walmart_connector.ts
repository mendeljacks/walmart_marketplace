import { json_to_query_string, generate_correlation_id, generate_signature } from './helpers'

declare var Partial

/* International Shipping */
// The International Shipping API enables sellers to use the Ship with Walmart (SWW) International shipping programs to ship their goods from the US to Canada. These APIs provide support for two SWW Programs : SWW Express & SWW Ground
export type get_shipment_consolidation_type = undefined
export const get_shipment_consolidation = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    query: {
        'domestic tracking no.': string
        'carrier id': number
    },
    headers: Partial<{
        'WM.TEST_MODE'?: boolean
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
        Accept: string
        'Content-Type': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/shipment/international/consolidation${json_to_query_string(
        query
    )}`
    const method = 'get'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, headers: enhanced_headers }
}
export type create_shipment_consolidation_type = undefined
export const create_shipment_consolidation = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    data: any,
    headers: Partial<{
        'WM.TEST_MODE'?: boolean
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
        Accept: string
        'Content-Type': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/shipment/international/consolidation`
    const method = 'post'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, data, headers: enhanced_headers }
}
export type get_international_shipment_type = undefined
export const get_international_shipment = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    query: {
        'shipment id': string
    },
    headers: Partial<{
        'WM.TEST_MODE'?: boolean
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
        Accept: string
        'Content-Type': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/shipment/international${json_to_query_string(
        query
    )}`
    const method = 'get'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, headers: enhanced_headers }
}
export type create_international_shipment_type = undefined
export const create_international_shipment = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    data: any,
    headers: Partial<{
        'WM.TEST_MODE'?: boolean
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
        Accept: string
        'Content-Type': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/shipment/international`
    const method = 'post'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, data, headers: enhanced_headers }
}
export type get_document_type = undefined
export const get_document = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    query: {
        'shipment id': string
        'Document Type'?: string
    },
    headers: Partial<{
        'WM.TEST_MODE'?: boolean
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
        Accept: string
        'Content-Type': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/shipment/international/document${json_to_query_string(
        query
    )}`
    const method = 'get'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, headers: enhanced_headers }
}

/* Feed Management */
// Feeds are constructed to handle bulk functions. A feed consists of an HTTP request with an attached file. The attached file contains the XML representing the objects that need to be created or updated.
export type get_all_feed_statuses_type = {
    errors?: {
        code: string
        field?: string
        description?: string
        info?: string
        severity?: 'INFO' | 'WARN' | 'ERROR'
        category?: 'APPLICATION' | 'SYSTEM' | 'REQUEST' | 'DATA'
        causes?: { code?: string; field?: string; type?: string; description?: string }[]
        errorIdentifiers?: {}
        component?: string
        type?: string
        serviceName?: string
        gatewayErrorCategory?: 'INTERNAL_DATA_ERROR' | 'EXTERNAL_DATA_ERROR' | 'SYSTEM_ERROR'
    }[]
    totalResults?: number
    offset?: number
    limit?: number
    results?: {
        feed?: {
            feedId?: string
            feedSource?: string
            feedType?: string
            partnerId?: string
            itemsReceived?: number
            itemsSucceeded?: number
            itemsFailed?: number
            itemsProcessing?: number
            feedStatus?: string
            feedDate?: number
            batchId?: string
            modifiedDtm?: number
        }[]
    }
}
export const get_all_feed_statuses = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    query: {
        feedId?: string
        offset?: string
        limit?: string
    },
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/feeds${json_to_query_string(query)}`
    const method = 'get'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, headers: enhanced_headers }
}
export type bulk_content_setup_type = { feedId?: string; additionalAttributes?: {}; errors?: {} }
export const bulk_content_setup = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    query: {
        feedType: string
    },
    data: any,
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/feeds${json_to_query_string(query)}`
    const method = 'post'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, data, headers: enhanced_headers }
}
export type get_feed_item_status_type = {
    errors?: {
        code: string
        field?: string
        description?: string
        info?: string
        severity?: 'INFO' | 'WARN' | 'ERROR'
        category?: 'APPLICATION' | 'SYSTEM' | 'REQUEST' | 'DATA'
        causes?: { code?: string; field?: string; type?: string; description?: string }[]
        errorIdentifiers?: {}
        component?: string
        type?: string
        serviceName?: string
        gatewayErrorCategory?: 'INTERNAL_DATA_ERROR' | 'EXTERNAL_DATA_ERROR' | 'SYSTEM_ERROR'
    }[]
    feedId?: string
    feedStatus?: 'RECEIVED' | 'INPROGRESS' | 'PROCESSED' | 'ERROR'
    ingestionErrors?: {
        ingestionError?: {
            type: 'DATA_ERROR' | 'SYSTEM_ERROR' | 'TIMEOUT_ERROR'
            code: string
            description?: string
        }[]
    }
    itemsReceived?: number
    itemsSucceeded?: number
    itemsFailed?: number
    itemsProcessing?: number
    offset?: number
    limit?: number
    itemDetails?: {
        itemIngestionStatus?: {
            martId?: number
            sku?: string
            wpid?: string
            index?: number
            ingestionStatus:
                | 'INPROGRESS'
                | 'SUCCESS'
                | 'DATA_ERROR'
                | 'SYSTEM_ERROR'
                | 'TIMEOUT_ERROR'
            ingestionErrors?: {
                ingestionError?: {
                    type: 'DATA_ERROR' | 'SYSTEM_ERROR' | 'TIMEOUT_ERROR'
                    code: string
                    description?: string
                }[]
            }
        }[]
    }
}
export const get_feed_item_status = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    query: {
        includeDetails?: string
        offset?: string
        limit?: string
    },
    path: {
        feedId: string
    },
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/feeds/${
        path.feedId
    }${json_to_query_string(query)}`
    const method = 'get'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, headers: enhanced_headers }
}

/* Inventory Management */
// Maintaining up-to-date inventory for your items on Walmart.com ensures a great experience for your customers and greater sales opportunities for you.
export type get_inventory_type = {
    sku: string
    quantity: { unit: 'EACH'; amount: number }
    fulfillmentLagTime: number
    partnerId?: string
    offerId?: string
}
export const get_inventory = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    query: {
        sku: string
    },
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/inventory${json_to_query_string(query)}`
    const method = 'get'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, headers: enhanced_headers }
}
export type update_inventory_for_an_item_ca_type = {
    sku: string
    quantity: { unit: 'EACH'; amount: number }
    fulfillmentLagTime: number
    partnerId?: string
    offerId?: string
}
export const update_inventory_for_an_item_ca = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    query: {
        sku: string
    },
    data: any,
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/inventory${json_to_query_string(query)}`
    const method = 'put'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, data, headers: enhanced_headers }
}
export type update_bulk_inventory_type = { feedId?: string; additionalAttributes?: {}; errors?: {} }
export const update_bulk_inventory = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    query: {
        feedType: string
    },
    data: any,
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/feeds${json_to_query_string(query)}`
    const method = 'post'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, data, headers: enhanced_headers }
}

/* Item Management */
// The Item Management APIs enable you to set up and manage items on Walmart.com. Once you have completed Registration and have access to your Consumer ID and Private Key, you can get started with the integration process
export type get_all_items_type = {
    errors?: {
        code: string
        field?: string
        description?: string
        info?: string
        severity?: 'INFO' | 'WARN' | 'ERROR'
        category?: 'APPLICATION' | 'SYSTEM' | 'REQUEST' | 'DATA'
        causes?: { code?: string; field?: string; type?: string; description?: string }[]
        errorIdentifiers?: {}
        component?: string
        type?: string
        serviceName?: string
        gatewayErrorCategory?: 'INTERNAL_DATA_ERROR' | 'EXTERNAL_DATA_ERROR' | 'SYSTEM_ERROR'
    }[]
    itemResponse: {
        mart?: 'WALMART_US' | 'WALMART_CA' | 'ASDA_GM' | 'WALMART_MEXICO'
        sku?: string
        wpid?: string
        upc?: string
        gtin?: string
        productName?: string
        shelf?: string
        productType?: string
        price?: {
            currency?:
                | 'AED'
                | 'AFN'
                | 'ALL'
                | 'AMD'
                | 'ANG'
                | 'AOA'
                | 'ARS'
                | 'AUD'
                | 'AWG'
                | 'AZN'
                | 'BAM'
                | 'BBD'
                | 'BDT'
                | 'BGN'
                | 'BHD'
                | 'BIF'
                | 'BMD'
                | 'BND'
                | 'BOB'
                | 'BRL'
                | 'BSD'
                | 'BTN'
                | 'BWP'
                | 'BYR'
                | 'BZD'
                | 'CAD'
                | 'CDF'
                | 'CHF'
                | 'CLP'
                | 'CNY'
                | 'COP'
                | 'CRC'
                | 'CUP'
                | 'CVE'
                | 'CZK'
                | 'DJF'
                | 'DKK'
                | 'DOP'
                | 'DZD'
                | 'EGP'
                | 'ERN'
                | 'ETB'
                | 'EUR'
                | 'FJD'
                | 'FKP'
                | 'GBP'
                | 'GEL'
                | 'GHS'
                | 'GIP'
                | 'GMD'
                | 'GNF'
                | 'GTQ'
                | 'GYD'
                | 'HKD'
                | 'HNL'
                | 'HRK'
                | 'HTG'
                | 'HUF'
                | 'IDR'
                | 'ILS'
                | 'INR'
                | 'IQD'
                | 'IRR'
                | 'ISK'
                | 'JMD'
                | 'JOD'
                | 'JPY'
                | 'KES'
                | 'KGS'
                | 'KHR'
                | 'KMF'
                | 'KPW'
                | 'KRW'
                | 'KWD'
                | 'KYD'
                | 'KZT'
                | 'LAK'
                | 'LBP'
                | 'LKR'
                | 'LRD'
                | 'LSL'
                | 'LTL'
                | 'LVL'
                | 'LYD'
                | 'MAD'
                | 'MDL'
                | 'MGA'
                | 'MKD'
                | 'MMK'
                | 'MNT'
                | 'MOP'
                | 'MRO'
                | 'MUR'
                | 'MVR'
                | 'MWK'
                | 'MXN'
                | 'MYR'
                | 'MZN'
                | 'NAD'
                | 'NGN'
                | 'NIO'
                | 'NOK'
                | 'NPR'
                | 'NZD'
                | 'OMR'
                | 'PAB'
                | 'PEN'
                | 'PGK'
                | 'PHP'
                | 'PKR'
                | 'PLN'
                | 'PYG'
                | 'QAR'
                | 'RON'
                | 'RSD'
                | 'RUB'
                | 'RUR'
                | 'RWF'
                | 'SAR'
                | 'SBD'
                | 'SCR'
                | 'SDG'
                | 'SEK'
                | 'SGD'
                | 'SHP'
                | 'SLL'
                | 'SOS'
                | 'SRD'
                | 'STD'
                | 'SYP'
                | 'SZL'
                | 'THB'
                | 'TJS'
                | 'TMT'
                | 'TND'
                | 'TOP'
                | 'TRY'
                | 'TTD'
                | 'TWD'
                | 'TZS'
                | 'UAH'
                | 'UGX'
                | 'USD'
                | 'UYU'
                | 'UZS'
                | 'VEF'
                | 'VND'
                | 'VUV'
                | 'WST'
                | 'XAF'
                | 'XAG'
                | 'XAU'
                | 'XBA'
                | 'XBB'
                | 'XBC'
                | 'XBD'
                | 'XCD'
                | 'XDR'
                | 'XFU'
                | 'XOF'
                | 'XPD'
                | 'XPF'
                | 'XPT'
                | 'XTS'
                | 'XXX'
                | 'YER'
                | 'ZAR'
                | 'ZMK'
                | 'ZWL'
            amount?: number
        }
        publishedStatus?: string
    }[]
    totalItems?: number
    nextCursor?: string
}
export const get_all_items = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    query: {
        nextCursor?: string
        sku?: string
        offset?: string
        limit?: string
    },
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/items${json_to_query_string(query)}`
    const method = 'get'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, headers: enhanced_headers }
}
export type get_an_item_type = {
    mart?: 'WALMART_US' | 'WALMART_CA' | 'ASDA_GM' | 'WALMART_MEXICO'
    sku?: string
    wpid?: string
    upc?: string
    gtin?: string
    productName?: string
    shelf?: string
    productType?: string
    price?: {
        currency?:
            | 'AED'
            | 'AFN'
            | 'ALL'
            | 'AMD'
            | 'ANG'
            | 'AOA'
            | 'ARS'
            | 'AUD'
            | 'AWG'
            | 'AZN'
            | 'BAM'
            | 'BBD'
            | 'BDT'
            | 'BGN'
            | 'BHD'
            | 'BIF'
            | 'BMD'
            | 'BND'
            | 'BOB'
            | 'BRL'
            | 'BSD'
            | 'BTN'
            | 'BWP'
            | 'BYR'
            | 'BZD'
            | 'CAD'
            | 'CDF'
            | 'CHF'
            | 'CLP'
            | 'CNY'
            | 'COP'
            | 'CRC'
            | 'CUP'
            | 'CVE'
            | 'CZK'
            | 'DJF'
            | 'DKK'
            | 'DOP'
            | 'DZD'
            | 'EGP'
            | 'ERN'
            | 'ETB'
            | 'EUR'
            | 'FJD'
            | 'FKP'
            | 'GBP'
            | 'GEL'
            | 'GHS'
            | 'GIP'
            | 'GMD'
            | 'GNF'
            | 'GTQ'
            | 'GYD'
            | 'HKD'
            | 'HNL'
            | 'HRK'
            | 'HTG'
            | 'HUF'
            | 'IDR'
            | 'ILS'
            | 'INR'
            | 'IQD'
            | 'IRR'
            | 'ISK'
            | 'JMD'
            | 'JOD'
            | 'JPY'
            | 'KES'
            | 'KGS'
            | 'KHR'
            | 'KMF'
            | 'KPW'
            | 'KRW'
            | 'KWD'
            | 'KYD'
            | 'KZT'
            | 'LAK'
            | 'LBP'
            | 'LKR'
            | 'LRD'
            | 'LSL'
            | 'LTL'
            | 'LVL'
            | 'LYD'
            | 'MAD'
            | 'MDL'
            | 'MGA'
            | 'MKD'
            | 'MMK'
            | 'MNT'
            | 'MOP'
            | 'MRO'
            | 'MUR'
            | 'MVR'
            | 'MWK'
            | 'MXN'
            | 'MYR'
            | 'MZN'
            | 'NAD'
            | 'NGN'
            | 'NIO'
            | 'NOK'
            | 'NPR'
            | 'NZD'
            | 'OMR'
            | 'PAB'
            | 'PEN'
            | 'PGK'
            | 'PHP'
            | 'PKR'
            | 'PLN'
            | 'PYG'
            | 'QAR'
            | 'RON'
            | 'RSD'
            | 'RUB'
            | 'RUR'
            | 'RWF'
            | 'SAR'
            | 'SBD'
            | 'SCR'
            | 'SDG'
            | 'SEK'
            | 'SGD'
            | 'SHP'
            | 'SLL'
            | 'SOS'
            | 'SRD'
            | 'STD'
            | 'SYP'
            | 'SZL'
            | 'THB'
            | 'TJS'
            | 'TMT'
            | 'TND'
            | 'TOP'
            | 'TRY'
            | 'TTD'
            | 'TWD'
            | 'TZS'
            | 'UAH'
            | 'UGX'
            | 'USD'
            | 'UYU'
            | 'UZS'
            | 'VEF'
            | 'VND'
            | 'VUV'
            | 'WST'
            | 'XAF'
            | 'XAG'
            | 'XAU'
            | 'XBA'
            | 'XBB'
            | 'XBC'
            | 'XBD'
            | 'XCD'
            | 'XDR'
            | 'XFU'
            | 'XOF'
            | 'XPD'
            | 'XPF'
            | 'XPT'
            | 'XTS'
            | 'XXX'
            | 'YER'
            | 'ZAR'
            | 'ZMK'
            | 'ZWL'
        amount?: number
    }
    publishedStatus?: string
}
export const get_an_item = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    path: {
        sku: string
    },
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/items/${path.sku}`
    const method = 'get'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, headers: enhanced_headers }
}
export type retire_an_item_type = {
    errors?: {
        code: string
        field?: string
        description?: string
        info?: string
        severity?: 'INFO' | 'WARN' | 'ERROR'
        category?: 'APPLICATION' | 'SYSTEM' | 'REQUEST' | 'DATA'
        causes?: { code?: string; field?: string; type?: string; description?: string }[]
        errorIdentifiers?: {}
        component?: string
        type?: string
        serviceName?: string
        gatewayErrorCategory?: 'INTERNAL_DATA_ERROR' | 'EXTERNAL_DATA_ERROR' | 'SYSTEM_ERROR'
    }[]
    sku: string
    message?: string
}
export const retire_an_item = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    path: {
        SKU: string
    },
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/items/${path.SKU}`
    const method = 'delete'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, headers: enhanced_headers }
}
export type bulk_item_setup_ca_type = { feedId?: string; additionalAttributes?: {}; errors?: {} }
export const bulk_item_setup_ca = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    query: {
        feedType: string
    },
    data: any,
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/feeds${json_to_query_string(query)}`
    const method = 'post'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, data, headers: enhanced_headers }
}

/* Order Management */
// The Walmart Order Management APIs help Sellers to manage customer’s Sales Orders and to stay up-to-date on orders fulfillment, which orders to fulfill, and when to fulfill them.
export type get_all_released_orders_type = {
    meta: { totalCount?: number; limit?: number; nextCursor?: string }
    elements: {
        order?: {
            purchaseOrderId: string
            customerOrderId: string
            customerEmailId: string
            orderDate: string
            shippingInfo: {
                phone: string
                estimatedDeliveryDate: string
                estimatedShipDate: string
                methodCode: 'STANDARD' | 'EXPRESS' | 'ONE_DAY' | 'FREIGHT' | 'WHITE_GLOVE' | 'VALUE'
                postalAddress: {
                    name: string
                    address1: string
                    address2?: string
                    city: string
                    state: string
                    postalCode: string
                    country: string
                    addressType?: string
                }
            }
            orderLines: {
                orderLine?: {
                    lineNumber: string
                    item: { productName: string; sku: string }
                    charges: {
                        charge?: {
                            chargeType: string
                            chargeName: string
                            chargeAmount: {
                                currency:
                                    | 'AED'
                                    | 'AFN'
                                    | 'ALL'
                                    | 'AMD'
                                    | 'ANG'
                                    | 'AOA'
                                    | 'ARS'
                                    | 'AUD'
                                    | 'AWG'
                                    | 'AZN'
                                    | 'BAM'
                                    | 'BBD'
                                    | 'BDT'
                                    | 'BGN'
                                    | 'BHD'
                                    | 'BIF'
                                    | 'BMD'
                                    | 'BND'
                                    | 'BOB'
                                    | 'BRL'
                                    | 'BSD'
                                    | 'BTN'
                                    | 'BWP'
                                    | 'BYR'
                                    | 'BZD'
                                    | 'CAD'
                                    | 'CDF'
                                    | 'CHF'
                                    | 'CLP'
                                    | 'CNY'
                                    | 'COP'
                                    | 'CRC'
                                    | 'CUP'
                                    | 'CVE'
                                    | 'CZK'
                                    | 'DJF'
                                    | 'DKK'
                                    | 'DOP'
                                    | 'DZD'
                                    | 'EGP'
                                    | 'ERN'
                                    | 'ETB'
                                    | 'EUR'
                                    | 'FJD'
                                    | 'FKP'
                                    | 'GBP'
                                    | 'GEL'
                                    | 'GHS'
                                    | 'GIP'
                                    | 'GMD'
                                    | 'GNF'
                                    | 'GTQ'
                                    | 'GYD'
                                    | 'HKD'
                                    | 'HNL'
                                    | 'HRK'
                                    | 'HTG'
                                    | 'HUF'
                                    | 'IDR'
                                    | 'ILS'
                                    | 'INR'
                                    | 'IQD'
                                    | 'IRR'
                                    | 'ISK'
                                    | 'JMD'
                                    | 'JOD'
                                    | 'JPY'
                                    | 'KES'
                                    | 'KGS'
                                    | 'KHR'
                                    | 'KMF'
                                    | 'KPW'
                                    | 'KRW'
                                    | 'KWD'
                                    | 'KYD'
                                    | 'KZT'
                                    | 'LAK'
                                    | 'LBP'
                                    | 'LKR'
                                    | 'LRD'
                                    | 'LSL'
                                    | 'LTL'
                                    | 'LVL'
                                    | 'LYD'
                                    | 'MAD'
                                    | 'MDL'
                                    | 'MGA'
                                    | 'MKD'
                                    | 'MMK'
                                    | 'MNT'
                                    | 'MOP'
                                    | 'MRO'
                                    | 'MUR'
                                    | 'MVR'
                                    | 'MWK'
                                    | 'MXN'
                                    | 'MYR'
                                    | 'MZN'
                                    | 'NAD'
                                    | 'NGN'
                                    | 'NIO'
                                    | 'NOK'
                                    | 'NPR'
                                    | 'NZD'
                                    | 'OMR'
                                    | 'PAB'
                                    | 'PEN'
                                    | 'PGK'
                                    | 'PHP'
                                    | 'PKR'
                                    | 'PLN'
                                    | 'PYG'
                                    | 'QAR'
                                    | 'RON'
                                    | 'RSD'
                                    | 'RUB'
                                    | 'RUR'
                                    | 'RWF'
                                    | 'SAR'
                                    | 'SBD'
                                    | 'SCR'
                                    | 'SDG'
                                    | 'SEK'
                                    | 'SGD'
                                    | 'SHP'
                                    | 'SLL'
                                    | 'SOS'
                                    | 'SRD'
                                    | 'STD'
                                    | 'SYP'
                                    | 'SZL'
                                    | 'THB'
                                    | 'TJS'
                                    | 'TMT'
                                    | 'TND'
                                    | 'TOP'
                                    | 'TRY'
                                    | 'TTD'
                                    | 'TWD'
                                    | 'TZS'
                                    | 'UAH'
                                    | 'UGX'
                                    | 'USD'
                                    | 'UYU'
                                    | 'UZS'
                                    | 'VEF'
                                    | 'VND'
                                    | 'VUV'
                                    | 'WST'
                                    | 'XAF'
                                    | 'XAG'
                                    | 'XAU'
                                    | 'XBA'
                                    | 'XBB'
                                    | 'XBC'
                                    | 'XBD'
                                    | 'XCD'
                                    | 'XDR'
                                    | 'XFU'
                                    | 'XOF'
                                    | 'XPD'
                                    | 'XPF'
                                    | 'XPT'
                                    | 'XTS'
                                    | 'XXX'
                                    | 'YER'
                                    | 'ZAR'
                                    | 'ZMK'
                                    | 'ZWL'
                                amount: number
                            }
                            tax?: {
                                taxName: string
                                taxAmount: {
                                    currency:
                                        | 'AED'
                                        | 'AFN'
                                        | 'ALL'
                                        | 'AMD'
                                        | 'ANG'
                                        | 'AOA'
                                        | 'ARS'
                                        | 'AUD'
                                        | 'AWG'
                                        | 'AZN'
                                        | 'BAM'
                                        | 'BBD'
                                        | 'BDT'
                                        | 'BGN'
                                        | 'BHD'
                                        | 'BIF'
                                        | 'BMD'
                                        | 'BND'
                                        | 'BOB'
                                        | 'BRL'
                                        | 'BSD'
                                        | 'BTN'
                                        | 'BWP'
                                        | 'BYR'
                                        | 'BZD'
                                        | 'CAD'
                                        | 'CDF'
                                        | 'CHF'
                                        | 'CLP'
                                        | 'CNY'
                                        | 'COP'
                                        | 'CRC'
                                        | 'CUP'
                                        | 'CVE'
                                        | 'CZK'
                                        | 'DJF'
                                        | 'DKK'
                                        | 'DOP'
                                        | 'DZD'
                                        | 'EGP'
                                        | 'ERN'
                                        | 'ETB'
                                        | 'EUR'
                                        | 'FJD'
                                        | 'FKP'
                                        | 'GBP'
                                        | 'GEL'
                                        | 'GHS'
                                        | 'GIP'
                                        | 'GMD'
                                        | 'GNF'
                                        | 'GTQ'
                                        | 'GYD'
                                        | 'HKD'
                                        | 'HNL'
                                        | 'HRK'
                                        | 'HTG'
                                        | 'HUF'
                                        | 'IDR'
                                        | 'ILS'
                                        | 'INR'
                                        | 'IQD'
                                        | 'IRR'
                                        | 'ISK'
                                        | 'JMD'
                                        | 'JOD'
                                        | 'JPY'
                                        | 'KES'
                                        | 'KGS'
                                        | 'KHR'
                                        | 'KMF'
                                        | 'KPW'
                                        | 'KRW'
                                        | 'KWD'
                                        | 'KYD'
                                        | 'KZT'
                                        | 'LAK'
                                        | 'LBP'
                                        | 'LKR'
                                        | 'LRD'
                                        | 'LSL'
                                        | 'LTL'
                                        | 'LVL'
                                        | 'LYD'
                                        | 'MAD'
                                        | 'MDL'
                                        | 'MGA'
                                        | 'MKD'
                                        | 'MMK'
                                        | 'MNT'
                                        | 'MOP'
                                        | 'MRO'
                                        | 'MUR'
                                        | 'MVR'
                                        | 'MWK'
                                        | 'MXN'
                                        | 'MYR'
                                        | 'MZN'
                                        | 'NAD'
                                        | 'NGN'
                                        | 'NIO'
                                        | 'NOK'
                                        | 'NPR'
                                        | 'NZD'
                                        | 'OMR'
                                        | 'PAB'
                                        | 'PEN'
                                        | 'PGK'
                                        | 'PHP'
                                        | 'PKR'
                                        | 'PLN'
                                        | 'PYG'
                                        | 'QAR'
                                        | 'RON'
                                        | 'RSD'
                                        | 'RUB'
                                        | 'RUR'
                                        | 'RWF'
                                        | 'SAR'
                                        | 'SBD'
                                        | 'SCR'
                                        | 'SDG'
                                        | 'SEK'
                                        | 'SGD'
                                        | 'SHP'
                                        | 'SLL'
                                        | 'SOS'
                                        | 'SRD'
                                        | 'STD'
                                        | 'SYP'
                                        | 'SZL'
                                        | 'THB'
                                        | 'TJS'
                                        | 'TMT'
                                        | 'TND'
                                        | 'TOP'
                                        | 'TRY'
                                        | 'TTD'
                                        | 'TWD'
                                        | 'TZS'
                                        | 'UAH'
                                        | 'UGX'
                                        | 'USD'
                                        | 'UYU'
                                        | 'UZS'
                                        | 'VEF'
                                        | 'VND'
                                        | 'VUV'
                                        | 'WST'
                                        | 'XAF'
                                        | 'XAG'
                                        | 'XAU'
                                        | 'XBA'
                                        | 'XBB'
                                        | 'XBC'
                                        | 'XBD'
                                        | 'XCD'
                                        | 'XDR'
                                        | 'XFU'
                                        | 'XOF'
                                        | 'XPD'
                                        | 'XPF'
                                        | 'XPT'
                                        | 'XTS'
                                        | 'XXX'
                                        | 'YER'
                                        | 'ZAR'
                                        | 'ZMK'
                                        | 'ZWL'
                                    amount: number
                                }
                            }
                        }[]
                    }
                    orderLineQuantity: { unitOfMeasurement: string; amount: string }
                    statusDate: string
                    orderLineStatuses: {
                        orderLineStatus?: {
                            status: 'CREATED' | 'ACKNOWLEDGED' | 'SHIPPED' | 'CANCELLED' | 'REFUND'
                            statusQuantity: { unitOfMeasurement: string; amount: string }
                            cancellationReason?: string
                            trackingInfo?: {
                                shipDateTime: string
                                carrierName: {
                                    otherCarrier?: string
                                    carrier?:
                                        | 'UPS'
                                        | 'USPS'
                                        | 'FED_EX'
                                        | 'CPC'
                                        | 'PCLINT'
                                        | 'DHL'
                                        | 'GLB'
                                        | 'PURINTL_SWWGROUND'
                                        | 'FEDEX_SWWEXPRESS'
                                }
                                methodCode:
                                    | 'STANDARD'
                                    | 'EXPRESS'
                                    | 'ONE_DAY'
                                    | 'FREIGHT'
                                    | 'WHITE_GLOVE'
                                    | 'VALUE'
                                trackingNumber: string
                                trackingURL?: string
                            }
                        }[]
                    }
                    refund?: {
                        refundId?: string
                        refundComments?: string
                        refundCharges: {
                            refundCharge?: {
                                refundReason:
                                    | 'BILLING_ERROR'
                                    | 'TAX_EXEMPT_CUSTOMER'
                                    | 'ITEM_NOT_AS_ADVERTISED'
                                    | 'INCORRECT_ITEM_RECEIVED'
                                    | 'CANCELLED_YET_SHIPPED'
                                    | 'ITEM_NOT_RECEIVED_BY_CUSTOMER'
                                    | 'INCORRECT_SHIPPING_PRICE'
                                    | 'DAMAGED_ITEM'
                                    | 'DEFECTIVE_ITEM'
                                    | 'CUSTOMER_CHANGED_MIND'
                                    | 'CUSTOMER_RECEIVED_ITEM_LATE'
                                    | 'FINANCE_GOODWILL'
                                    | 'FINANCE_ROLLBACK'
                                    | 'MISSING_PARTS_INSTRUCTIONS'
                                    | 'BUYER_CANCELED'
                                    | 'CUSTOMER_RETURNED_ITEM'
                                    | 'GENERAL_ADJUSTMENT'
                                    | 'MERCHANDISE_NOT_RECEIVED'
                                    | 'QUALITY_MISSING_PARTS_INSTRUCTIONS'
                                    | 'SHIPPING_DELIVERY_DAMAGED'
                                    | 'SHIPPING_DELIVERY_SHIPPING_PRICE_DISCREPANCY'
                                    | 'OTHERS'
                                charge: {
                                    chargeType: string
                                    chargeName: string
                                    chargeAmount: {
                                        currency:
                                            | 'AED'
                                            | 'AFN'
                                            | 'ALL'
                                            | 'AMD'
                                            | 'ANG'
                                            | 'AOA'
                                            | 'ARS'
                                            | 'AUD'
                                            | 'AWG'
                                            | 'AZN'
                                            | 'BAM'
                                            | 'BBD'
                                            | 'BDT'
                                            | 'BGN'
                                            | 'BHD'
                                            | 'BIF'
                                            | 'BMD'
                                            | 'BND'
                                            | 'BOB'
                                            | 'BRL'
                                            | 'BSD'
                                            | 'BTN'
                                            | 'BWP'
                                            | 'BYR'
                                            | 'BZD'
                                            | 'CAD'
                                            | 'CDF'
                                            | 'CHF'
                                            | 'CLP'
                                            | 'CNY'
                                            | 'COP'
                                            | 'CRC'
                                            | 'CUP'
                                            | 'CVE'
                                            | 'CZK'
                                            | 'DJF'
                                            | 'DKK'
                                            | 'DOP'
                                            | 'DZD'
                                            | 'EGP'
                                            | 'ERN'
                                            | 'ETB'
                                            | 'EUR'
                                            | 'FJD'
                                            | 'FKP'
                                            | 'GBP'
                                            | 'GEL'
                                            | 'GHS'
                                            | 'GIP'
                                            | 'GMD'
                                            | 'GNF'
                                            | 'GTQ'
                                            | 'GYD'
                                            | 'HKD'
                                            | 'HNL'
                                            | 'HRK'
                                            | 'HTG'
                                            | 'HUF'
                                            | 'IDR'
                                            | 'ILS'
                                            | 'INR'
                                            | 'IQD'
                                            | 'IRR'
                                            | 'ISK'
                                            | 'JMD'
                                            | 'JOD'
                                            | 'JPY'
                                            | 'KES'
                                            | 'KGS'
                                            | 'KHR'
                                            | 'KMF'
                                            | 'KPW'
                                            | 'KRW'
                                            | 'KWD'
                                            | 'KYD'
                                            | 'KZT'
                                            | 'LAK'
                                            | 'LBP'
                                            | 'LKR'
                                            | 'LRD'
                                            | 'LSL'
                                            | 'LTL'
                                            | 'LVL'
                                            | 'LYD'
                                            | 'MAD'
                                            | 'MDL'
                                            | 'MGA'
                                            | 'MKD'
                                            | 'MMK'
                                            | 'MNT'
                                            | 'MOP'
                                            | 'MRO'
                                            | 'MUR'
                                            | 'MVR'
                                            | 'MWK'
                                            | 'MXN'
                                            | 'MYR'
                                            | 'MZN'
                                            | 'NAD'
                                            | 'NGN'
                                            | 'NIO'
                                            | 'NOK'
                                            | 'NPR'
                                            | 'NZD'
                                            | 'OMR'
                                            | 'PAB'
                                            | 'PEN'
                                            | 'PGK'
                                            | 'PHP'
                                            | 'PKR'
                                            | 'PLN'
                                            | 'PYG'
                                            | 'QAR'
                                            | 'RON'
                                            | 'RSD'
                                            | 'RUB'
                                            | 'RUR'
                                            | 'RWF'
                                            | 'SAR'
                                            | 'SBD'
                                            | 'SCR'
                                            | 'SDG'
                                            | 'SEK'
                                            | 'SGD'
                                            | 'SHP'
                                            | 'SLL'
                                            | 'SOS'
                                            | 'SRD'
                                            | 'STD'
                                            | 'SYP'
                                            | 'SZL'
                                            | 'THB'
                                            | 'TJS'
                                            | 'TMT'
                                            | 'TND'
                                            | 'TOP'
                                            | 'TRY'
                                            | 'TTD'
                                            | 'TWD'
                                            | 'TZS'
                                            | 'UAH'
                                            | 'UGX'
                                            | 'USD'
                                            | 'UYU'
                                            | 'UZS'
                                            | 'VEF'
                                            | 'VND'
                                            | 'VUV'
                                            | 'WST'
                                            | 'XAF'
                                            | 'XAG'
                                            | 'XAU'
                                            | 'XBA'
                                            | 'XBB'
                                            | 'XBC'
                                            | 'XBD'
                                            | 'XCD'
                                            | 'XDR'
                                            | 'XFU'
                                            | 'XOF'
                                            | 'XPD'
                                            | 'XPF'
                                            | 'XPT'
                                            | 'XTS'
                                            | 'XXX'
                                            | 'YER'
                                            | 'ZAR'
                                            | 'ZMK'
                                            | 'ZWL'
                                        amount: number
                                    }
                                    tax?: {
                                        taxName: string
                                        taxAmount: {
                                            currency:
                                                | 'AED'
                                                | 'AFN'
                                                | 'ALL'
                                                | 'AMD'
                                                | 'ANG'
                                                | 'AOA'
                                                | 'ARS'
                                                | 'AUD'
                                                | 'AWG'
                                                | 'AZN'
                                                | 'BAM'
                                                | 'BBD'
                                                | 'BDT'
                                                | 'BGN'
                                                | 'BHD'
                                                | 'BIF'
                                                | 'BMD'
                                                | 'BND'
                                                | 'BOB'
                                                | 'BRL'
                                                | 'BSD'
                                                | 'BTN'
                                                | 'BWP'
                                                | 'BYR'
                                                | 'BZD'
                                                | 'CAD'
                                                | 'CDF'
                                                | 'CHF'
                                                | 'CLP'
                                                | 'CNY'
                                                | 'COP'
                                                | 'CRC'
                                                | 'CUP'
                                                | 'CVE'
                                                | 'CZK'
                                                | 'DJF'
                                                | 'DKK'
                                                | 'DOP'
                                                | 'DZD'
                                                | 'EGP'
                                                | 'ERN'
                                                | 'ETB'
                                                | 'EUR'
                                                | 'FJD'
                                                | 'FKP'
                                                | 'GBP'
                                                | 'GEL'
                                                | 'GHS'
                                                | 'GIP'
                                                | 'GMD'
                                                | 'GNF'
                                                | 'GTQ'
                                                | 'GYD'
                                                | 'HKD'
                                                | 'HNL'
                                                | 'HRK'
                                                | 'HTG'
                                                | 'HUF'
                                                | 'IDR'
                                                | 'ILS'
                                                | 'INR'
                                                | 'IQD'
                                                | 'IRR'
                                                | 'ISK'
                                                | 'JMD'
                                                | 'JOD'
                                                | 'JPY'
                                                | 'KES'
                                                | 'KGS'
                                                | 'KHR'
                                                | 'KMF'
                                                | 'KPW'
                                                | 'KRW'
                                                | 'KWD'
                                                | 'KYD'
                                                | 'KZT'
                                                | 'LAK'
                                                | 'LBP'
                                                | 'LKR'
                                                | 'LRD'
                                                | 'LSL'
                                                | 'LTL'
                                                | 'LVL'
                                                | 'LYD'
                                                | 'MAD'
                                                | 'MDL'
                                                | 'MGA'
                                                | 'MKD'
                                                | 'MMK'
                                                | 'MNT'
                                                | 'MOP'
                                                | 'MRO'
                                                | 'MUR'
                                                | 'MVR'
                                                | 'MWK'
                                                | 'MXN'
                                                | 'MYR'
                                                | 'MZN'
                                                | 'NAD'
                                                | 'NGN'
                                                | 'NIO'
                                                | 'NOK'
                                                | 'NPR'
                                                | 'NZD'
                                                | 'OMR'
                                                | 'PAB'
                                                | 'PEN'
                                                | 'PGK'
                                                | 'PHP'
                                                | 'PKR'
                                                | 'PLN'
                                                | 'PYG'
                                                | 'QAR'
                                                | 'RON'
                                                | 'RSD'
                                                | 'RUB'
                                                | 'RUR'
                                                | 'RWF'
                                                | 'SAR'
                                                | 'SBD'
                                                | 'SCR'
                                                | 'SDG'
                                                | 'SEK'
                                                | 'SGD'
                                                | 'SHP'
                                                | 'SLL'
                                                | 'SOS'
                                                | 'SRD'
                                                | 'STD'
                                                | 'SYP'
                                                | 'SZL'
                                                | 'THB'
                                                | 'TJS'
                                                | 'TMT'
                                                | 'TND'
                                                | 'TOP'
                                                | 'TRY'
                                                | 'TTD'
                                                | 'TWD'
                                                | 'TZS'
                                                | 'UAH'
                                                | 'UGX'
                                                | 'USD'
                                                | 'UYU'
                                                | 'UZS'
                                                | 'VEF'
                                                | 'VND'
                                                | 'VUV'
                                                | 'WST'
                                                | 'XAF'
                                                | 'XAG'
                                                | 'XAU'
                                                | 'XBA'
                                                | 'XBB'
                                                | 'XBC'
                                                | 'XBD'
                                                | 'XCD'
                                                | 'XDR'
                                                | 'XFU'
                                                | 'XOF'
                                                | 'XPD'
                                                | 'XPF'
                                                | 'XPT'
                                                | 'XTS'
                                                | 'XXX'
                                                | 'YER'
                                                | 'ZAR'
                                                | 'ZMK'
                                                | 'ZWL'
                                            amount: number
                                        }
                                    }
                                }
                            }[]
                        }
                    }
                    originalCarrierMethod?: string
                    referenceLineId?: string
                    fulfillment?: {
                        fulfillmentOption?: string
                        shipMethod?: string
                        storeId?: string
                        offerId?: string
                        pickUpDateTime?: string
                        pickUpBy?: string
                    }
                    intentToCancel?: string
                    configId?: string
                }[]
            }
        }[]
    }
}
export const get_all_released_orders = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    query: {
        createdStartDate?: string
        createdEndDate?: string
        limit?: string
        productInfo?: string
    },
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/orders/released${json_to_query_string(
        query
    )}`
    const method = 'get'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, headers: enhanced_headers }
}
export type get_all_orders_type = {
    meta: { totalCount?: number; limit?: number; nextCursor?: string }
    elements: {
        order?: {
            purchaseOrderId: string
            customerOrderId: string
            customerEmailId: string
            orderDate: string
            shippingInfo: {
                phone: string
                estimatedDeliveryDate: string
                estimatedShipDate: string
                methodCode: 'STANDARD' | 'EXPRESS' | 'ONE_DAY' | 'FREIGHT' | 'WHITE_GLOVE' | 'VALUE'
                postalAddress: {
                    name: string
                    address1: string
                    address2?: string
                    city: string
                    state: string
                    postalCode: string
                    country: string
                    addressType?: string
                }
            }
            orderLines: {
                orderLine?: {
                    lineNumber: string
                    item: { productName: string; sku: string }
                    charges: {
                        charge?: {
                            chargeType: string
                            chargeName: string
                            chargeAmount: {
                                currency:
                                    | 'AED'
                                    | 'AFN'
                                    | 'ALL'
                                    | 'AMD'
                                    | 'ANG'
                                    | 'AOA'
                                    | 'ARS'
                                    | 'AUD'
                                    | 'AWG'
                                    | 'AZN'
                                    | 'BAM'
                                    | 'BBD'
                                    | 'BDT'
                                    | 'BGN'
                                    | 'BHD'
                                    | 'BIF'
                                    | 'BMD'
                                    | 'BND'
                                    | 'BOB'
                                    | 'BRL'
                                    | 'BSD'
                                    | 'BTN'
                                    | 'BWP'
                                    | 'BYR'
                                    | 'BZD'
                                    | 'CAD'
                                    | 'CDF'
                                    | 'CHF'
                                    | 'CLP'
                                    | 'CNY'
                                    | 'COP'
                                    | 'CRC'
                                    | 'CUP'
                                    | 'CVE'
                                    | 'CZK'
                                    | 'DJF'
                                    | 'DKK'
                                    | 'DOP'
                                    | 'DZD'
                                    | 'EGP'
                                    | 'ERN'
                                    | 'ETB'
                                    | 'EUR'
                                    | 'FJD'
                                    | 'FKP'
                                    | 'GBP'
                                    | 'GEL'
                                    | 'GHS'
                                    | 'GIP'
                                    | 'GMD'
                                    | 'GNF'
                                    | 'GTQ'
                                    | 'GYD'
                                    | 'HKD'
                                    | 'HNL'
                                    | 'HRK'
                                    | 'HTG'
                                    | 'HUF'
                                    | 'IDR'
                                    | 'ILS'
                                    | 'INR'
                                    | 'IQD'
                                    | 'IRR'
                                    | 'ISK'
                                    | 'JMD'
                                    | 'JOD'
                                    | 'JPY'
                                    | 'KES'
                                    | 'KGS'
                                    | 'KHR'
                                    | 'KMF'
                                    | 'KPW'
                                    | 'KRW'
                                    | 'KWD'
                                    | 'KYD'
                                    | 'KZT'
                                    | 'LAK'
                                    | 'LBP'
                                    | 'LKR'
                                    | 'LRD'
                                    | 'LSL'
                                    | 'LTL'
                                    | 'LVL'
                                    | 'LYD'
                                    | 'MAD'
                                    | 'MDL'
                                    | 'MGA'
                                    | 'MKD'
                                    | 'MMK'
                                    | 'MNT'
                                    | 'MOP'
                                    | 'MRO'
                                    | 'MUR'
                                    | 'MVR'
                                    | 'MWK'
                                    | 'MXN'
                                    | 'MYR'
                                    | 'MZN'
                                    | 'NAD'
                                    | 'NGN'
                                    | 'NIO'
                                    | 'NOK'
                                    | 'NPR'
                                    | 'NZD'
                                    | 'OMR'
                                    | 'PAB'
                                    | 'PEN'
                                    | 'PGK'
                                    | 'PHP'
                                    | 'PKR'
                                    | 'PLN'
                                    | 'PYG'
                                    | 'QAR'
                                    | 'RON'
                                    | 'RSD'
                                    | 'RUB'
                                    | 'RUR'
                                    | 'RWF'
                                    | 'SAR'
                                    | 'SBD'
                                    | 'SCR'
                                    | 'SDG'
                                    | 'SEK'
                                    | 'SGD'
                                    | 'SHP'
                                    | 'SLL'
                                    | 'SOS'
                                    | 'SRD'
                                    | 'STD'
                                    | 'SYP'
                                    | 'SZL'
                                    | 'THB'
                                    | 'TJS'
                                    | 'TMT'
                                    | 'TND'
                                    | 'TOP'
                                    | 'TRY'
                                    | 'TTD'
                                    | 'TWD'
                                    | 'TZS'
                                    | 'UAH'
                                    | 'UGX'
                                    | 'USD'
                                    | 'UYU'
                                    | 'UZS'
                                    | 'VEF'
                                    | 'VND'
                                    | 'VUV'
                                    | 'WST'
                                    | 'XAF'
                                    | 'XAG'
                                    | 'XAU'
                                    | 'XBA'
                                    | 'XBB'
                                    | 'XBC'
                                    | 'XBD'
                                    | 'XCD'
                                    | 'XDR'
                                    | 'XFU'
                                    | 'XOF'
                                    | 'XPD'
                                    | 'XPF'
                                    | 'XPT'
                                    | 'XTS'
                                    | 'XXX'
                                    | 'YER'
                                    | 'ZAR'
                                    | 'ZMK'
                                    | 'ZWL'
                                amount: number
                            }
                            tax?: {
                                taxName: string
                                taxAmount: {
                                    currency:
                                        | 'AED'
                                        | 'AFN'
                                        | 'ALL'
                                        | 'AMD'
                                        | 'ANG'
                                        | 'AOA'
                                        | 'ARS'
                                        | 'AUD'
                                        | 'AWG'
                                        | 'AZN'
                                        | 'BAM'
                                        | 'BBD'
                                        | 'BDT'
                                        | 'BGN'
                                        | 'BHD'
                                        | 'BIF'
                                        | 'BMD'
                                        | 'BND'
                                        | 'BOB'
                                        | 'BRL'
                                        | 'BSD'
                                        | 'BTN'
                                        | 'BWP'
                                        | 'BYR'
                                        | 'BZD'
                                        | 'CAD'
                                        | 'CDF'
                                        | 'CHF'
                                        | 'CLP'
                                        | 'CNY'
                                        | 'COP'
                                        | 'CRC'
                                        | 'CUP'
                                        | 'CVE'
                                        | 'CZK'
                                        | 'DJF'
                                        | 'DKK'
                                        | 'DOP'
                                        | 'DZD'
                                        | 'EGP'
                                        | 'ERN'
                                        | 'ETB'
                                        | 'EUR'
                                        | 'FJD'
                                        | 'FKP'
                                        | 'GBP'
                                        | 'GEL'
                                        | 'GHS'
                                        | 'GIP'
                                        | 'GMD'
                                        | 'GNF'
                                        | 'GTQ'
                                        | 'GYD'
                                        | 'HKD'
                                        | 'HNL'
                                        | 'HRK'
                                        | 'HTG'
                                        | 'HUF'
                                        | 'IDR'
                                        | 'ILS'
                                        | 'INR'
                                        | 'IQD'
                                        | 'IRR'
                                        | 'ISK'
                                        | 'JMD'
                                        | 'JOD'
                                        | 'JPY'
                                        | 'KES'
                                        | 'KGS'
                                        | 'KHR'
                                        | 'KMF'
                                        | 'KPW'
                                        | 'KRW'
                                        | 'KWD'
                                        | 'KYD'
                                        | 'KZT'
                                        | 'LAK'
                                        | 'LBP'
                                        | 'LKR'
                                        | 'LRD'
                                        | 'LSL'
                                        | 'LTL'
                                        | 'LVL'
                                        | 'LYD'
                                        | 'MAD'
                                        | 'MDL'
                                        | 'MGA'
                                        | 'MKD'
                                        | 'MMK'
                                        | 'MNT'
                                        | 'MOP'
                                        | 'MRO'
                                        | 'MUR'
                                        | 'MVR'
                                        | 'MWK'
                                        | 'MXN'
                                        | 'MYR'
                                        | 'MZN'
                                        | 'NAD'
                                        | 'NGN'
                                        | 'NIO'
                                        | 'NOK'
                                        | 'NPR'
                                        | 'NZD'
                                        | 'OMR'
                                        | 'PAB'
                                        | 'PEN'
                                        | 'PGK'
                                        | 'PHP'
                                        | 'PKR'
                                        | 'PLN'
                                        | 'PYG'
                                        | 'QAR'
                                        | 'RON'
                                        | 'RSD'
                                        | 'RUB'
                                        | 'RUR'
                                        | 'RWF'
                                        | 'SAR'
                                        | 'SBD'
                                        | 'SCR'
                                        | 'SDG'
                                        | 'SEK'
                                        | 'SGD'
                                        | 'SHP'
                                        | 'SLL'
                                        | 'SOS'
                                        | 'SRD'
                                        | 'STD'
                                        | 'SYP'
                                        | 'SZL'
                                        | 'THB'
                                        | 'TJS'
                                        | 'TMT'
                                        | 'TND'
                                        | 'TOP'
                                        | 'TRY'
                                        | 'TTD'
                                        | 'TWD'
                                        | 'TZS'
                                        | 'UAH'
                                        | 'UGX'
                                        | 'USD'
                                        | 'UYU'
                                        | 'UZS'
                                        | 'VEF'
                                        | 'VND'
                                        | 'VUV'
                                        | 'WST'
                                        | 'XAF'
                                        | 'XAG'
                                        | 'XAU'
                                        | 'XBA'
                                        | 'XBB'
                                        | 'XBC'
                                        | 'XBD'
                                        | 'XCD'
                                        | 'XDR'
                                        | 'XFU'
                                        | 'XOF'
                                        | 'XPD'
                                        | 'XPF'
                                        | 'XPT'
                                        | 'XTS'
                                        | 'XXX'
                                        | 'YER'
                                        | 'ZAR'
                                        | 'ZMK'
                                        | 'ZWL'
                                    amount: number
                                }
                            }
                        }[]
                    }
                    orderLineQuantity: { unitOfMeasurement: string; amount: string }
                    statusDate: string
                    orderLineStatuses: {
                        orderLineStatus?: {
                            status: 'CREATED' | 'ACKNOWLEDGED' | 'SHIPPED' | 'CANCELLED' | 'REFUND'
                            statusQuantity: { unitOfMeasurement: string; amount: string }
                            cancellationReason?: string
                            trackingInfo?: {
                                shipDateTime: string
                                carrierName: {
                                    otherCarrier?: string
                                    carrier?:
                                        | 'UPS'
                                        | 'USPS'
                                        | 'FED_EX'
                                        | 'CPC'
                                        | 'PCLINT'
                                        | 'DHL'
                                        | 'GLB'
                                        | 'PURINTL_SWWGROUND'
                                        | 'FEDEX_SWWEXPRESS'
                                }
                                methodCode:
                                    | 'STANDARD'
                                    | 'EXPRESS'
                                    | 'ONE_DAY'
                                    | 'FREIGHT'
                                    | 'WHITE_GLOVE'
                                    | 'VALUE'
                                trackingNumber: string
                                trackingURL?: string
                            }
                        }[]
                    }
                    refund?: {
                        refundId?: string
                        refundComments?: string
                        refundCharges: {
                            refundCharge?: {
                                refundReason:
                                    | 'BILLING_ERROR'
                                    | 'TAX_EXEMPT_CUSTOMER'
                                    | 'ITEM_NOT_AS_ADVERTISED'
                                    | 'INCORRECT_ITEM_RECEIVED'
                                    | 'CANCELLED_YET_SHIPPED'
                                    | 'ITEM_NOT_RECEIVED_BY_CUSTOMER'
                                    | 'INCORRECT_SHIPPING_PRICE'
                                    | 'DAMAGED_ITEM'
                                    | 'DEFECTIVE_ITEM'
                                    | 'CUSTOMER_CHANGED_MIND'
                                    | 'CUSTOMER_RECEIVED_ITEM_LATE'
                                    | 'FINANCE_GOODWILL'
                                    | 'FINANCE_ROLLBACK'
                                    | 'MISSING_PARTS_INSTRUCTIONS'
                                    | 'BUYER_CANCELED'
                                    | 'CUSTOMER_RETURNED_ITEM'
                                    | 'GENERAL_ADJUSTMENT'
                                    | 'MERCHANDISE_NOT_RECEIVED'
                                    | 'QUALITY_MISSING_PARTS_INSTRUCTIONS'
                                    | 'SHIPPING_DELIVERY_DAMAGED'
                                    | 'SHIPPING_DELIVERY_SHIPPING_PRICE_DISCREPANCY'
                                    | 'OTHERS'
                                charge: {
                                    chargeType: string
                                    chargeName: string
                                    chargeAmount: {
                                        currency:
                                            | 'AED'
                                            | 'AFN'
                                            | 'ALL'
                                            | 'AMD'
                                            | 'ANG'
                                            | 'AOA'
                                            | 'ARS'
                                            | 'AUD'
                                            | 'AWG'
                                            | 'AZN'
                                            | 'BAM'
                                            | 'BBD'
                                            | 'BDT'
                                            | 'BGN'
                                            | 'BHD'
                                            | 'BIF'
                                            | 'BMD'
                                            | 'BND'
                                            | 'BOB'
                                            | 'BRL'
                                            | 'BSD'
                                            | 'BTN'
                                            | 'BWP'
                                            | 'BYR'
                                            | 'BZD'
                                            | 'CAD'
                                            | 'CDF'
                                            | 'CHF'
                                            | 'CLP'
                                            | 'CNY'
                                            | 'COP'
                                            | 'CRC'
                                            | 'CUP'
                                            | 'CVE'
                                            | 'CZK'
                                            | 'DJF'
                                            | 'DKK'
                                            | 'DOP'
                                            | 'DZD'
                                            | 'EGP'
                                            | 'ERN'
                                            | 'ETB'
                                            | 'EUR'
                                            | 'FJD'
                                            | 'FKP'
                                            | 'GBP'
                                            | 'GEL'
                                            | 'GHS'
                                            | 'GIP'
                                            | 'GMD'
                                            | 'GNF'
                                            | 'GTQ'
                                            | 'GYD'
                                            | 'HKD'
                                            | 'HNL'
                                            | 'HRK'
                                            | 'HTG'
                                            | 'HUF'
                                            | 'IDR'
                                            | 'ILS'
                                            | 'INR'
                                            | 'IQD'
                                            | 'IRR'
                                            | 'ISK'
                                            | 'JMD'
                                            | 'JOD'
                                            | 'JPY'
                                            | 'KES'
                                            | 'KGS'
                                            | 'KHR'
                                            | 'KMF'
                                            | 'KPW'
                                            | 'KRW'
                                            | 'KWD'
                                            | 'KYD'
                                            | 'KZT'
                                            | 'LAK'
                                            | 'LBP'
                                            | 'LKR'
                                            | 'LRD'
                                            | 'LSL'
                                            | 'LTL'
                                            | 'LVL'
                                            | 'LYD'
                                            | 'MAD'
                                            | 'MDL'
                                            | 'MGA'
                                            | 'MKD'
                                            | 'MMK'
                                            | 'MNT'
                                            | 'MOP'
                                            | 'MRO'
                                            | 'MUR'
                                            | 'MVR'
                                            | 'MWK'
                                            | 'MXN'
                                            | 'MYR'
                                            | 'MZN'
                                            | 'NAD'
                                            | 'NGN'
                                            | 'NIO'
                                            | 'NOK'
                                            | 'NPR'
                                            | 'NZD'
                                            | 'OMR'
                                            | 'PAB'
                                            | 'PEN'
                                            | 'PGK'
                                            | 'PHP'
                                            | 'PKR'
                                            | 'PLN'
                                            | 'PYG'
                                            | 'QAR'
                                            | 'RON'
                                            | 'RSD'
                                            | 'RUB'
                                            | 'RUR'
                                            | 'RWF'
                                            | 'SAR'
                                            | 'SBD'
                                            | 'SCR'
                                            | 'SDG'
                                            | 'SEK'
                                            | 'SGD'
                                            | 'SHP'
                                            | 'SLL'
                                            | 'SOS'
                                            | 'SRD'
                                            | 'STD'
                                            | 'SYP'
                                            | 'SZL'
                                            | 'THB'
                                            | 'TJS'
                                            | 'TMT'
                                            | 'TND'
                                            | 'TOP'
                                            | 'TRY'
                                            | 'TTD'
                                            | 'TWD'
                                            | 'TZS'
                                            | 'UAH'
                                            | 'UGX'
                                            | 'USD'
                                            | 'UYU'
                                            | 'UZS'
                                            | 'VEF'
                                            | 'VND'
                                            | 'VUV'
                                            | 'WST'
                                            | 'XAF'
                                            | 'XAG'
                                            | 'XAU'
                                            | 'XBA'
                                            | 'XBB'
                                            | 'XBC'
                                            | 'XBD'
                                            | 'XCD'
                                            | 'XDR'
                                            | 'XFU'
                                            | 'XOF'
                                            | 'XPD'
                                            | 'XPF'
                                            | 'XPT'
                                            | 'XTS'
                                            | 'XXX'
                                            | 'YER'
                                            | 'ZAR'
                                            | 'ZMK'
                                            | 'ZWL'
                                        amount: number
                                    }
                                    tax?: {
                                        taxName: string
                                        taxAmount: {
                                            currency:
                                                | 'AED'
                                                | 'AFN'
                                                | 'ALL'
                                                | 'AMD'
                                                | 'ANG'
                                                | 'AOA'
                                                | 'ARS'
                                                | 'AUD'
                                                | 'AWG'
                                                | 'AZN'
                                                | 'BAM'
                                                | 'BBD'
                                                | 'BDT'
                                                | 'BGN'
                                                | 'BHD'
                                                | 'BIF'
                                                | 'BMD'
                                                | 'BND'
                                                | 'BOB'
                                                | 'BRL'
                                                | 'BSD'
                                                | 'BTN'
                                                | 'BWP'
                                                | 'BYR'
                                                | 'BZD'
                                                | 'CAD'
                                                | 'CDF'
                                                | 'CHF'
                                                | 'CLP'
                                                | 'CNY'
                                                | 'COP'
                                                | 'CRC'
                                                | 'CUP'
                                                | 'CVE'
                                                | 'CZK'
                                                | 'DJF'
                                                | 'DKK'
                                                | 'DOP'
                                                | 'DZD'
                                                | 'EGP'
                                                | 'ERN'
                                                | 'ETB'
                                                | 'EUR'
                                                | 'FJD'
                                                | 'FKP'
                                                | 'GBP'
                                                | 'GEL'
                                                | 'GHS'
                                                | 'GIP'
                                                | 'GMD'
                                                | 'GNF'
                                                | 'GTQ'
                                                | 'GYD'
                                                | 'HKD'
                                                | 'HNL'
                                                | 'HRK'
                                                | 'HTG'
                                                | 'HUF'
                                                | 'IDR'
                                                | 'ILS'
                                                | 'INR'
                                                | 'IQD'
                                                | 'IRR'
                                                | 'ISK'
                                                | 'JMD'
                                                | 'JOD'
                                                | 'JPY'
                                                | 'KES'
                                                | 'KGS'
                                                | 'KHR'
                                                | 'KMF'
                                                | 'KPW'
                                                | 'KRW'
                                                | 'KWD'
                                                | 'KYD'
                                                | 'KZT'
                                                | 'LAK'
                                                | 'LBP'
                                                | 'LKR'
                                                | 'LRD'
                                                | 'LSL'
                                                | 'LTL'
                                                | 'LVL'
                                                | 'LYD'
                                                | 'MAD'
                                                | 'MDL'
                                                | 'MGA'
                                                | 'MKD'
                                                | 'MMK'
                                                | 'MNT'
                                                | 'MOP'
                                                | 'MRO'
                                                | 'MUR'
                                                | 'MVR'
                                                | 'MWK'
                                                | 'MXN'
                                                | 'MYR'
                                                | 'MZN'
                                                | 'NAD'
                                                | 'NGN'
                                                | 'NIO'
                                                | 'NOK'
                                                | 'NPR'
                                                | 'NZD'
                                                | 'OMR'
                                                | 'PAB'
                                                | 'PEN'
                                                | 'PGK'
                                                | 'PHP'
                                                | 'PKR'
                                                | 'PLN'
                                                | 'PYG'
                                                | 'QAR'
                                                | 'RON'
                                                | 'RSD'
                                                | 'RUB'
                                                | 'RUR'
                                                | 'RWF'
                                                | 'SAR'
                                                | 'SBD'
                                                | 'SCR'
                                                | 'SDG'
                                                | 'SEK'
                                                | 'SGD'
                                                | 'SHP'
                                                | 'SLL'
                                                | 'SOS'
                                                | 'SRD'
                                                | 'STD'
                                                | 'SYP'
                                                | 'SZL'
                                                | 'THB'
                                                | 'TJS'
                                                | 'TMT'
                                                | 'TND'
                                                | 'TOP'
                                                | 'TRY'
                                                | 'TTD'
                                                | 'TWD'
                                                | 'TZS'
                                                | 'UAH'
                                                | 'UGX'
                                                | 'USD'
                                                | 'UYU'
                                                | 'UZS'
                                                | 'VEF'
                                                | 'VND'
                                                | 'VUV'
                                                | 'WST'
                                                | 'XAF'
                                                | 'XAG'
                                                | 'XAU'
                                                | 'XBA'
                                                | 'XBB'
                                                | 'XBC'
                                                | 'XBD'
                                                | 'XCD'
                                                | 'XDR'
                                                | 'XFU'
                                                | 'XOF'
                                                | 'XPD'
                                                | 'XPF'
                                                | 'XPT'
                                                | 'XTS'
                                                | 'XXX'
                                                | 'YER'
                                                | 'ZAR'
                                                | 'ZMK'
                                                | 'ZWL'
                                            amount: number
                                        }
                                    }
                                }
                            }[]
                        }
                    }
                    originalCarrierMethod?: string
                    referenceLineId?: string
                    fulfillment?: {
                        fulfillmentOption?: string
                        shipMethod?: string
                        storeId?: string
                        offerId?: string
                        pickUpDateTime?: string
                        pickUpBy?: string
                    }
                    intentToCancel?: string
                    configId?: string
                }[]
            }
        }[]
    }
}
export const get_all_orders = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    query: {
        sku?: string
        customerOrderId?: string
        purchaseOrderId?: string
        status?: string
        createdStartDate: string
        createdEndDate?: string
        fromExpectedShipDate?: string
        toExpectedShipDate?: string
        limit?: string
        productInfo?: string
    },
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/orders${json_to_query_string(query)}`
    const method = 'get'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, headers: enhanced_headers }
}
export type get_an_order_type = {
    purchaseOrderId: string
    customerOrderId: string
    customerEmailId: string
    orderDate: string
    shippingInfo: {
        phone: string
        estimatedDeliveryDate: string
        estimatedShipDate: string
        methodCode: 'STANDARD' | 'EXPRESS' | 'ONE_DAY' | 'FREIGHT' | 'WHITE_GLOVE' | 'VALUE'
        postalAddress: {
            name: string
            address1: string
            address2?: string
            city: string
            state: string
            postalCode: string
            country: string
            addressType?: string
        }
    }
    orderLines: {
        orderLine?: {
            lineNumber: string
            item: { productName: string; sku: string }
            charges: {
                charge?: {
                    chargeType: string
                    chargeName: string
                    chargeAmount: {
                        currency:
                            | 'AED'
                            | 'AFN'
                            | 'ALL'
                            | 'AMD'
                            | 'ANG'
                            | 'AOA'
                            | 'ARS'
                            | 'AUD'
                            | 'AWG'
                            | 'AZN'
                            | 'BAM'
                            | 'BBD'
                            | 'BDT'
                            | 'BGN'
                            | 'BHD'
                            | 'BIF'
                            | 'BMD'
                            | 'BND'
                            | 'BOB'
                            | 'BRL'
                            | 'BSD'
                            | 'BTN'
                            | 'BWP'
                            | 'BYR'
                            | 'BZD'
                            | 'CAD'
                            | 'CDF'
                            | 'CHF'
                            | 'CLP'
                            | 'CNY'
                            | 'COP'
                            | 'CRC'
                            | 'CUP'
                            | 'CVE'
                            | 'CZK'
                            | 'DJF'
                            | 'DKK'
                            | 'DOP'
                            | 'DZD'
                            | 'EGP'
                            | 'ERN'
                            | 'ETB'
                            | 'EUR'
                            | 'FJD'
                            | 'FKP'
                            | 'GBP'
                            | 'GEL'
                            | 'GHS'
                            | 'GIP'
                            | 'GMD'
                            | 'GNF'
                            | 'GTQ'
                            | 'GYD'
                            | 'HKD'
                            | 'HNL'
                            | 'HRK'
                            | 'HTG'
                            | 'HUF'
                            | 'IDR'
                            | 'ILS'
                            | 'INR'
                            | 'IQD'
                            | 'IRR'
                            | 'ISK'
                            | 'JMD'
                            | 'JOD'
                            | 'JPY'
                            | 'KES'
                            | 'KGS'
                            | 'KHR'
                            | 'KMF'
                            | 'KPW'
                            | 'KRW'
                            | 'KWD'
                            | 'KYD'
                            | 'KZT'
                            | 'LAK'
                            | 'LBP'
                            | 'LKR'
                            | 'LRD'
                            | 'LSL'
                            | 'LTL'
                            | 'LVL'
                            | 'LYD'
                            | 'MAD'
                            | 'MDL'
                            | 'MGA'
                            | 'MKD'
                            | 'MMK'
                            | 'MNT'
                            | 'MOP'
                            | 'MRO'
                            | 'MUR'
                            | 'MVR'
                            | 'MWK'
                            | 'MXN'
                            | 'MYR'
                            | 'MZN'
                            | 'NAD'
                            | 'NGN'
                            | 'NIO'
                            | 'NOK'
                            | 'NPR'
                            | 'NZD'
                            | 'OMR'
                            | 'PAB'
                            | 'PEN'
                            | 'PGK'
                            | 'PHP'
                            | 'PKR'
                            | 'PLN'
                            | 'PYG'
                            | 'QAR'
                            | 'RON'
                            | 'RSD'
                            | 'RUB'
                            | 'RUR'
                            | 'RWF'
                            | 'SAR'
                            | 'SBD'
                            | 'SCR'
                            | 'SDG'
                            | 'SEK'
                            | 'SGD'
                            | 'SHP'
                            | 'SLL'
                            | 'SOS'
                            | 'SRD'
                            | 'STD'
                            | 'SYP'
                            | 'SZL'
                            | 'THB'
                            | 'TJS'
                            | 'TMT'
                            | 'TND'
                            | 'TOP'
                            | 'TRY'
                            | 'TTD'
                            | 'TWD'
                            | 'TZS'
                            | 'UAH'
                            | 'UGX'
                            | 'USD'
                            | 'UYU'
                            | 'UZS'
                            | 'VEF'
                            | 'VND'
                            | 'VUV'
                            | 'WST'
                            | 'XAF'
                            | 'XAG'
                            | 'XAU'
                            | 'XBA'
                            | 'XBB'
                            | 'XBC'
                            | 'XBD'
                            | 'XCD'
                            | 'XDR'
                            | 'XFU'
                            | 'XOF'
                            | 'XPD'
                            | 'XPF'
                            | 'XPT'
                            | 'XTS'
                            | 'XXX'
                            | 'YER'
                            | 'ZAR'
                            | 'ZMK'
                            | 'ZWL'
                        amount: number
                    }
                    tax?: {
                        taxName: string
                        taxAmount: {
                            currency:
                                | 'AED'
                                | 'AFN'
                                | 'ALL'
                                | 'AMD'
                                | 'ANG'
                                | 'AOA'
                                | 'ARS'
                                | 'AUD'
                                | 'AWG'
                                | 'AZN'
                                | 'BAM'
                                | 'BBD'
                                | 'BDT'
                                | 'BGN'
                                | 'BHD'
                                | 'BIF'
                                | 'BMD'
                                | 'BND'
                                | 'BOB'
                                | 'BRL'
                                | 'BSD'
                                | 'BTN'
                                | 'BWP'
                                | 'BYR'
                                | 'BZD'
                                | 'CAD'
                                | 'CDF'
                                | 'CHF'
                                | 'CLP'
                                | 'CNY'
                                | 'COP'
                                | 'CRC'
                                | 'CUP'
                                | 'CVE'
                                | 'CZK'
                                | 'DJF'
                                | 'DKK'
                                | 'DOP'
                                | 'DZD'
                                | 'EGP'
                                | 'ERN'
                                | 'ETB'
                                | 'EUR'
                                | 'FJD'
                                | 'FKP'
                                | 'GBP'
                                | 'GEL'
                                | 'GHS'
                                | 'GIP'
                                | 'GMD'
                                | 'GNF'
                                | 'GTQ'
                                | 'GYD'
                                | 'HKD'
                                | 'HNL'
                                | 'HRK'
                                | 'HTG'
                                | 'HUF'
                                | 'IDR'
                                | 'ILS'
                                | 'INR'
                                | 'IQD'
                                | 'IRR'
                                | 'ISK'
                                | 'JMD'
                                | 'JOD'
                                | 'JPY'
                                | 'KES'
                                | 'KGS'
                                | 'KHR'
                                | 'KMF'
                                | 'KPW'
                                | 'KRW'
                                | 'KWD'
                                | 'KYD'
                                | 'KZT'
                                | 'LAK'
                                | 'LBP'
                                | 'LKR'
                                | 'LRD'
                                | 'LSL'
                                | 'LTL'
                                | 'LVL'
                                | 'LYD'
                                | 'MAD'
                                | 'MDL'
                                | 'MGA'
                                | 'MKD'
                                | 'MMK'
                                | 'MNT'
                                | 'MOP'
                                | 'MRO'
                                | 'MUR'
                                | 'MVR'
                                | 'MWK'
                                | 'MXN'
                                | 'MYR'
                                | 'MZN'
                                | 'NAD'
                                | 'NGN'
                                | 'NIO'
                                | 'NOK'
                                | 'NPR'
                                | 'NZD'
                                | 'OMR'
                                | 'PAB'
                                | 'PEN'
                                | 'PGK'
                                | 'PHP'
                                | 'PKR'
                                | 'PLN'
                                | 'PYG'
                                | 'QAR'
                                | 'RON'
                                | 'RSD'
                                | 'RUB'
                                | 'RUR'
                                | 'RWF'
                                | 'SAR'
                                | 'SBD'
                                | 'SCR'
                                | 'SDG'
                                | 'SEK'
                                | 'SGD'
                                | 'SHP'
                                | 'SLL'
                                | 'SOS'
                                | 'SRD'
                                | 'STD'
                                | 'SYP'
                                | 'SZL'
                                | 'THB'
                                | 'TJS'
                                | 'TMT'
                                | 'TND'
                                | 'TOP'
                                | 'TRY'
                                | 'TTD'
                                | 'TWD'
                                | 'TZS'
                                | 'UAH'
                                | 'UGX'
                                | 'USD'
                                | 'UYU'
                                | 'UZS'
                                | 'VEF'
                                | 'VND'
                                | 'VUV'
                                | 'WST'
                                | 'XAF'
                                | 'XAG'
                                | 'XAU'
                                | 'XBA'
                                | 'XBB'
                                | 'XBC'
                                | 'XBD'
                                | 'XCD'
                                | 'XDR'
                                | 'XFU'
                                | 'XOF'
                                | 'XPD'
                                | 'XPF'
                                | 'XPT'
                                | 'XTS'
                                | 'XXX'
                                | 'YER'
                                | 'ZAR'
                                | 'ZMK'
                                | 'ZWL'
                            amount: number
                        }
                    }
                }[]
            }
            orderLineQuantity: { unitOfMeasurement: string; amount: string }
            statusDate: string
            orderLineStatuses: {
                orderLineStatus?: {
                    status: 'CREATED' | 'ACKNOWLEDGED' | 'SHIPPED' | 'CANCELLED' | 'REFUND'
                    statusQuantity: { unitOfMeasurement: string; amount: string }
                    cancellationReason?: string
                    trackingInfo?: {
                        shipDateTime: string
                        carrierName: {
                            otherCarrier?: string
                            carrier?:
                                | 'UPS'
                                | 'USPS'
                                | 'FED_EX'
                                | 'CPC'
                                | 'PCLINT'
                                | 'DHL'
                                | 'GLB'
                                | 'PURINTL_SWWGROUND'
                                | 'FEDEX_SWWEXPRESS'
                        }
                        methodCode:
                            | 'STANDARD'
                            | 'EXPRESS'
                            | 'ONE_DAY'
                            | 'FREIGHT'
                            | 'WHITE_GLOVE'
                            | 'VALUE'
                        trackingNumber: string
                        trackingURL?: string
                    }
                }[]
            }
            refund?: {
                refundId?: string
                refundComments?: string
                refundCharges: {
                    refundCharge?: {
                        refundReason:
                            | 'BILLING_ERROR'
                            | 'TAX_EXEMPT_CUSTOMER'
                            | 'ITEM_NOT_AS_ADVERTISED'
                            | 'INCORRECT_ITEM_RECEIVED'
                            | 'CANCELLED_YET_SHIPPED'
                            | 'ITEM_NOT_RECEIVED_BY_CUSTOMER'
                            | 'INCORRECT_SHIPPING_PRICE'
                            | 'DAMAGED_ITEM'
                            | 'DEFECTIVE_ITEM'
                            | 'CUSTOMER_CHANGED_MIND'
                            | 'CUSTOMER_RECEIVED_ITEM_LATE'
                            | 'FINANCE_GOODWILL'
                            | 'FINANCE_ROLLBACK'
                            | 'MISSING_PARTS_INSTRUCTIONS'
                            | 'BUYER_CANCELED'
                            | 'CUSTOMER_RETURNED_ITEM'
                            | 'GENERAL_ADJUSTMENT'
                            | 'MERCHANDISE_NOT_RECEIVED'
                            | 'QUALITY_MISSING_PARTS_INSTRUCTIONS'
                            | 'SHIPPING_DELIVERY_DAMAGED'
                            | 'SHIPPING_DELIVERY_SHIPPING_PRICE_DISCREPANCY'
                            | 'OTHERS'
                        charge: {
                            chargeType: string
                            chargeName: string
                            chargeAmount: {
                                currency:
                                    | 'AED'
                                    | 'AFN'
                                    | 'ALL'
                                    | 'AMD'
                                    | 'ANG'
                                    | 'AOA'
                                    | 'ARS'
                                    | 'AUD'
                                    | 'AWG'
                                    | 'AZN'
                                    | 'BAM'
                                    | 'BBD'
                                    | 'BDT'
                                    | 'BGN'
                                    | 'BHD'
                                    | 'BIF'
                                    | 'BMD'
                                    | 'BND'
                                    | 'BOB'
                                    | 'BRL'
                                    | 'BSD'
                                    | 'BTN'
                                    | 'BWP'
                                    | 'BYR'
                                    | 'BZD'
                                    | 'CAD'
                                    | 'CDF'
                                    | 'CHF'
                                    | 'CLP'
                                    | 'CNY'
                                    | 'COP'
                                    | 'CRC'
                                    | 'CUP'
                                    | 'CVE'
                                    | 'CZK'
                                    | 'DJF'
                                    | 'DKK'
                                    | 'DOP'
                                    | 'DZD'
                                    | 'EGP'
                                    | 'ERN'
                                    | 'ETB'
                                    | 'EUR'
                                    | 'FJD'
                                    | 'FKP'
                                    | 'GBP'
                                    | 'GEL'
                                    | 'GHS'
                                    | 'GIP'
                                    | 'GMD'
                                    | 'GNF'
                                    | 'GTQ'
                                    | 'GYD'
                                    | 'HKD'
                                    | 'HNL'
                                    | 'HRK'
                                    | 'HTG'
                                    | 'HUF'
                                    | 'IDR'
                                    | 'ILS'
                                    | 'INR'
                                    | 'IQD'
                                    | 'IRR'
                                    | 'ISK'
                                    | 'JMD'
                                    | 'JOD'
                                    | 'JPY'
                                    | 'KES'
                                    | 'KGS'
                                    | 'KHR'
                                    | 'KMF'
                                    | 'KPW'
                                    | 'KRW'
                                    | 'KWD'
                                    | 'KYD'
                                    | 'KZT'
                                    | 'LAK'
                                    | 'LBP'
                                    | 'LKR'
                                    | 'LRD'
                                    | 'LSL'
                                    | 'LTL'
                                    | 'LVL'
                                    | 'LYD'
                                    | 'MAD'
                                    | 'MDL'
                                    | 'MGA'
                                    | 'MKD'
                                    | 'MMK'
                                    | 'MNT'
                                    | 'MOP'
                                    | 'MRO'
                                    | 'MUR'
                                    | 'MVR'
                                    | 'MWK'
                                    | 'MXN'
                                    | 'MYR'
                                    | 'MZN'
                                    | 'NAD'
                                    | 'NGN'
                                    | 'NIO'
                                    | 'NOK'
                                    | 'NPR'
                                    | 'NZD'
                                    | 'OMR'
                                    | 'PAB'
                                    | 'PEN'
                                    | 'PGK'
                                    | 'PHP'
                                    | 'PKR'
                                    | 'PLN'
                                    | 'PYG'
                                    | 'QAR'
                                    | 'RON'
                                    | 'RSD'
                                    | 'RUB'
                                    | 'RUR'
                                    | 'RWF'
                                    | 'SAR'
                                    | 'SBD'
                                    | 'SCR'
                                    | 'SDG'
                                    | 'SEK'
                                    | 'SGD'
                                    | 'SHP'
                                    | 'SLL'
                                    | 'SOS'
                                    | 'SRD'
                                    | 'STD'
                                    | 'SYP'
                                    | 'SZL'
                                    | 'THB'
                                    | 'TJS'
                                    | 'TMT'
                                    | 'TND'
                                    | 'TOP'
                                    | 'TRY'
                                    | 'TTD'
                                    | 'TWD'
                                    | 'TZS'
                                    | 'UAH'
                                    | 'UGX'
                                    | 'USD'
                                    | 'UYU'
                                    | 'UZS'
                                    | 'VEF'
                                    | 'VND'
                                    | 'VUV'
                                    | 'WST'
                                    | 'XAF'
                                    | 'XAG'
                                    | 'XAU'
                                    | 'XBA'
                                    | 'XBB'
                                    | 'XBC'
                                    | 'XBD'
                                    | 'XCD'
                                    | 'XDR'
                                    | 'XFU'
                                    | 'XOF'
                                    | 'XPD'
                                    | 'XPF'
                                    | 'XPT'
                                    | 'XTS'
                                    | 'XXX'
                                    | 'YER'
                                    | 'ZAR'
                                    | 'ZMK'
                                    | 'ZWL'
                                amount: number
                            }
                            tax?: {
                                taxName: string
                                taxAmount: {
                                    currency:
                                        | 'AED'
                                        | 'AFN'
                                        | 'ALL'
                                        | 'AMD'
                                        | 'ANG'
                                        | 'AOA'
                                        | 'ARS'
                                        | 'AUD'
                                        | 'AWG'
                                        | 'AZN'
                                        | 'BAM'
                                        | 'BBD'
                                        | 'BDT'
                                        | 'BGN'
                                        | 'BHD'
                                        | 'BIF'
                                        | 'BMD'
                                        | 'BND'
                                        | 'BOB'
                                        | 'BRL'
                                        | 'BSD'
                                        | 'BTN'
                                        | 'BWP'
                                        | 'BYR'
                                        | 'BZD'
                                        | 'CAD'
                                        | 'CDF'
                                        | 'CHF'
                                        | 'CLP'
                                        | 'CNY'
                                        | 'COP'
                                        | 'CRC'
                                        | 'CUP'
                                        | 'CVE'
                                        | 'CZK'
                                        | 'DJF'
                                        | 'DKK'
                                        | 'DOP'
                                        | 'DZD'
                                        | 'EGP'
                                        | 'ERN'
                                        | 'ETB'
                                        | 'EUR'
                                        | 'FJD'
                                        | 'FKP'
                                        | 'GBP'
                                        | 'GEL'
                                        | 'GHS'
                                        | 'GIP'
                                        | 'GMD'
                                        | 'GNF'
                                        | 'GTQ'
                                        | 'GYD'
                                        | 'HKD'
                                        | 'HNL'
                                        | 'HRK'
                                        | 'HTG'
                                        | 'HUF'
                                        | 'IDR'
                                        | 'ILS'
                                        | 'INR'
                                        | 'IQD'
                                        | 'IRR'
                                        | 'ISK'
                                        | 'JMD'
                                        | 'JOD'
                                        | 'JPY'
                                        | 'KES'
                                        | 'KGS'
                                        | 'KHR'
                                        | 'KMF'
                                        | 'KPW'
                                        | 'KRW'
                                        | 'KWD'
                                        | 'KYD'
                                        | 'KZT'
                                        | 'LAK'
                                        | 'LBP'
                                        | 'LKR'
                                        | 'LRD'
                                        | 'LSL'
                                        | 'LTL'
                                        | 'LVL'
                                        | 'LYD'
                                        | 'MAD'
                                        | 'MDL'
                                        | 'MGA'
                                        | 'MKD'
                                        | 'MMK'
                                        | 'MNT'
                                        | 'MOP'
                                        | 'MRO'
                                        | 'MUR'
                                        | 'MVR'
                                        | 'MWK'
                                        | 'MXN'
                                        | 'MYR'
                                        | 'MZN'
                                        | 'NAD'
                                        | 'NGN'
                                        | 'NIO'
                                        | 'NOK'
                                        | 'NPR'
                                        | 'NZD'
                                        | 'OMR'
                                        | 'PAB'
                                        | 'PEN'
                                        | 'PGK'
                                        | 'PHP'
                                        | 'PKR'
                                        | 'PLN'
                                        | 'PYG'
                                        | 'QAR'
                                        | 'RON'
                                        | 'RSD'
                                        | 'RUB'
                                        | 'RUR'
                                        | 'RWF'
                                        | 'SAR'
                                        | 'SBD'
                                        | 'SCR'
                                        | 'SDG'
                                        | 'SEK'
                                        | 'SGD'
                                        | 'SHP'
                                        | 'SLL'
                                        | 'SOS'
                                        | 'SRD'
                                        | 'STD'
                                        | 'SYP'
                                        | 'SZL'
                                        | 'THB'
                                        | 'TJS'
                                        | 'TMT'
                                        | 'TND'
                                        | 'TOP'
                                        | 'TRY'
                                        | 'TTD'
                                        | 'TWD'
                                        | 'TZS'
                                        | 'UAH'
                                        | 'UGX'
                                        | 'USD'
                                        | 'UYU'
                                        | 'UZS'
                                        | 'VEF'
                                        | 'VND'
                                        | 'VUV'
                                        | 'WST'
                                        | 'XAF'
                                        | 'XAG'
                                        | 'XAU'
                                        | 'XBA'
                                        | 'XBB'
                                        | 'XBC'
                                        | 'XBD'
                                        | 'XCD'
                                        | 'XDR'
                                        | 'XFU'
                                        | 'XOF'
                                        | 'XPD'
                                        | 'XPF'
                                        | 'XPT'
                                        | 'XTS'
                                        | 'XXX'
                                        | 'YER'
                                        | 'ZAR'
                                        | 'ZMK'
                                        | 'ZWL'
                                    amount: number
                                }
                            }
                        }
                    }[]
                }
            }
            originalCarrierMethod?: string
            referenceLineId?: string
            fulfillment?: {
                fulfillmentOption?: string
                shipMethod?: string
                storeId?: string
                offerId?: string
                pickUpDateTime?: string
                pickUpBy?: string
            }
            intentToCancel?: string
            configId?: string
        }[]
    }
}
export const get_an_order = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    query: {
        productInfo?: string
    },
    path: {
        purchaseOrderId: string
    },
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/orders/${
        path.purchaseOrderId
    }${json_to_query_string(query)}`
    const method = 'get'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, headers: enhanced_headers }
}
export type cancel_order_lines_ca_type = {
    orderLines: {
        orderLine: {
            lineNumber: string
            orderLineStatuses: {
                orderLineStatus: {
                    status: 'CREATED' | 'ACKNOWLEDGED' | 'SHIPPED' | 'CANCELLED' | 'REFUND'
                    cancellationReason:
                        | 'CANCEL_BY_SELLER'
                        | 'CUSTOMER_REQUESTED_SELLER_TO_CANCEL'
                        | 'SUPPLIER_CANCEL'
                        | 'SUPPLIER_CANCEL_CUSTOMER_REQUEST'
                        | 'SUPPLIER_CANCEL_BACKORDER'
                        | 'SUPPLIER_CANCEL_DISCONTINUE'
                        | 'SUPPLIER_CANCEL_UNRECOGNIZED'
                    statusQuantity: { unitOfMeasurement: string; amount: string }
                }[]
            }
        }[]
    }
}
export const cancel_order_lines_ca = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    path: {
        purchaseOrderId: string
    },
    data: any,
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/orders/${path.purchaseOrderId}/cancel`
    const method = 'post'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, data, headers: enhanced_headers }
}
export type refund_order_lines_ca_type = {
    purchaseOrderId: string
    customerOrderId: string
    customerEmailId: string
    orderDate: string
    shippingInfo: {
        phone: string
        estimatedDeliveryDate: string
        estimatedShipDate: string
        methodCode: 'STANDARD' | 'EXPRESS' | 'ONE_DAY' | 'FREIGHT' | 'WHITE_GLOVE' | 'VALUE'
        postalAddress: {
            name: string
            address1: string
            address2?: string
            city: string
            state: string
            postalCode: string
            country: string
            addressType?: string
        }
    }
    orderLines: {
        orderLine?: {
            lineNumber: string
            item: { productName: string; sku: string }
            charges: {
                charge?: {
                    chargeType: string
                    chargeName: string
                    chargeAmount: {
                        currency:
                            | 'AED'
                            | 'AFN'
                            | 'ALL'
                            | 'AMD'
                            | 'ANG'
                            | 'AOA'
                            | 'ARS'
                            | 'AUD'
                            | 'AWG'
                            | 'AZN'
                            | 'BAM'
                            | 'BBD'
                            | 'BDT'
                            | 'BGN'
                            | 'BHD'
                            | 'BIF'
                            | 'BMD'
                            | 'BND'
                            | 'BOB'
                            | 'BRL'
                            | 'BSD'
                            | 'BTN'
                            | 'BWP'
                            | 'BYR'
                            | 'BZD'
                            | 'CAD'
                            | 'CDF'
                            | 'CHF'
                            | 'CLP'
                            | 'CNY'
                            | 'COP'
                            | 'CRC'
                            | 'CUP'
                            | 'CVE'
                            | 'CZK'
                            | 'DJF'
                            | 'DKK'
                            | 'DOP'
                            | 'DZD'
                            | 'EGP'
                            | 'ERN'
                            | 'ETB'
                            | 'EUR'
                            | 'FJD'
                            | 'FKP'
                            | 'GBP'
                            | 'GEL'
                            | 'GHS'
                            | 'GIP'
                            | 'GMD'
                            | 'GNF'
                            | 'GTQ'
                            | 'GYD'
                            | 'HKD'
                            | 'HNL'
                            | 'HRK'
                            | 'HTG'
                            | 'HUF'
                            | 'IDR'
                            | 'ILS'
                            | 'INR'
                            | 'IQD'
                            | 'IRR'
                            | 'ISK'
                            | 'JMD'
                            | 'JOD'
                            | 'JPY'
                            | 'KES'
                            | 'KGS'
                            | 'KHR'
                            | 'KMF'
                            | 'KPW'
                            | 'KRW'
                            | 'KWD'
                            | 'KYD'
                            | 'KZT'
                            | 'LAK'
                            | 'LBP'
                            | 'LKR'
                            | 'LRD'
                            | 'LSL'
                            | 'LTL'
                            | 'LVL'
                            | 'LYD'
                            | 'MAD'
                            | 'MDL'
                            | 'MGA'
                            | 'MKD'
                            | 'MMK'
                            | 'MNT'
                            | 'MOP'
                            | 'MRO'
                            | 'MUR'
                            | 'MVR'
                            | 'MWK'
                            | 'MXN'
                            | 'MYR'
                            | 'MZN'
                            | 'NAD'
                            | 'NGN'
                            | 'NIO'
                            | 'NOK'
                            | 'NPR'
                            | 'NZD'
                            | 'OMR'
                            | 'PAB'
                            | 'PEN'
                            | 'PGK'
                            | 'PHP'
                            | 'PKR'
                            | 'PLN'
                            | 'PYG'
                            | 'QAR'
                            | 'RON'
                            | 'RSD'
                            | 'RUB'
                            | 'RUR'
                            | 'RWF'
                            | 'SAR'
                            | 'SBD'
                            | 'SCR'
                            | 'SDG'
                            | 'SEK'
                            | 'SGD'
                            | 'SHP'
                            | 'SLL'
                            | 'SOS'
                            | 'SRD'
                            | 'STD'
                            | 'SYP'
                            | 'SZL'
                            | 'THB'
                            | 'TJS'
                            | 'TMT'
                            | 'TND'
                            | 'TOP'
                            | 'TRY'
                            | 'TTD'
                            | 'TWD'
                            | 'TZS'
                            | 'UAH'
                            | 'UGX'
                            | 'USD'
                            | 'UYU'
                            | 'UZS'
                            | 'VEF'
                            | 'VND'
                            | 'VUV'
                            | 'WST'
                            | 'XAF'
                            | 'XAG'
                            | 'XAU'
                            | 'XBA'
                            | 'XBB'
                            | 'XBC'
                            | 'XBD'
                            | 'XCD'
                            | 'XDR'
                            | 'XFU'
                            | 'XOF'
                            | 'XPD'
                            | 'XPF'
                            | 'XPT'
                            | 'XTS'
                            | 'XXX'
                            | 'YER'
                            | 'ZAR'
                            | 'ZMK'
                            | 'ZWL'
                        amount: number
                    }
                    tax?: {
                        taxName: string
                        taxAmount: {
                            currency:
                                | 'AED'
                                | 'AFN'
                                | 'ALL'
                                | 'AMD'
                                | 'ANG'
                                | 'AOA'
                                | 'ARS'
                                | 'AUD'
                                | 'AWG'
                                | 'AZN'
                                | 'BAM'
                                | 'BBD'
                                | 'BDT'
                                | 'BGN'
                                | 'BHD'
                                | 'BIF'
                                | 'BMD'
                                | 'BND'
                                | 'BOB'
                                | 'BRL'
                                | 'BSD'
                                | 'BTN'
                                | 'BWP'
                                | 'BYR'
                                | 'BZD'
                                | 'CAD'
                                | 'CDF'
                                | 'CHF'
                                | 'CLP'
                                | 'CNY'
                                | 'COP'
                                | 'CRC'
                                | 'CUP'
                                | 'CVE'
                                | 'CZK'
                                | 'DJF'
                                | 'DKK'
                                | 'DOP'
                                | 'DZD'
                                | 'EGP'
                                | 'ERN'
                                | 'ETB'
                                | 'EUR'
                                | 'FJD'
                                | 'FKP'
                                | 'GBP'
                                | 'GEL'
                                | 'GHS'
                                | 'GIP'
                                | 'GMD'
                                | 'GNF'
                                | 'GTQ'
                                | 'GYD'
                                | 'HKD'
                                | 'HNL'
                                | 'HRK'
                                | 'HTG'
                                | 'HUF'
                                | 'IDR'
                                | 'ILS'
                                | 'INR'
                                | 'IQD'
                                | 'IRR'
                                | 'ISK'
                                | 'JMD'
                                | 'JOD'
                                | 'JPY'
                                | 'KES'
                                | 'KGS'
                                | 'KHR'
                                | 'KMF'
                                | 'KPW'
                                | 'KRW'
                                | 'KWD'
                                | 'KYD'
                                | 'KZT'
                                | 'LAK'
                                | 'LBP'
                                | 'LKR'
                                | 'LRD'
                                | 'LSL'
                                | 'LTL'
                                | 'LVL'
                                | 'LYD'
                                | 'MAD'
                                | 'MDL'
                                | 'MGA'
                                | 'MKD'
                                | 'MMK'
                                | 'MNT'
                                | 'MOP'
                                | 'MRO'
                                | 'MUR'
                                | 'MVR'
                                | 'MWK'
                                | 'MXN'
                                | 'MYR'
                                | 'MZN'
                                | 'NAD'
                                | 'NGN'
                                | 'NIO'
                                | 'NOK'
                                | 'NPR'
                                | 'NZD'
                                | 'OMR'
                                | 'PAB'
                                | 'PEN'
                                | 'PGK'
                                | 'PHP'
                                | 'PKR'
                                | 'PLN'
                                | 'PYG'
                                | 'QAR'
                                | 'RON'
                                | 'RSD'
                                | 'RUB'
                                | 'RUR'
                                | 'RWF'
                                | 'SAR'
                                | 'SBD'
                                | 'SCR'
                                | 'SDG'
                                | 'SEK'
                                | 'SGD'
                                | 'SHP'
                                | 'SLL'
                                | 'SOS'
                                | 'SRD'
                                | 'STD'
                                | 'SYP'
                                | 'SZL'
                                | 'THB'
                                | 'TJS'
                                | 'TMT'
                                | 'TND'
                                | 'TOP'
                                | 'TRY'
                                | 'TTD'
                                | 'TWD'
                                | 'TZS'
                                | 'UAH'
                                | 'UGX'
                                | 'USD'
                                | 'UYU'
                                | 'UZS'
                                | 'VEF'
                                | 'VND'
                                | 'VUV'
                                | 'WST'
                                | 'XAF'
                                | 'XAG'
                                | 'XAU'
                                | 'XBA'
                                | 'XBB'
                                | 'XBC'
                                | 'XBD'
                                | 'XCD'
                                | 'XDR'
                                | 'XFU'
                                | 'XOF'
                                | 'XPD'
                                | 'XPF'
                                | 'XPT'
                                | 'XTS'
                                | 'XXX'
                                | 'YER'
                                | 'ZAR'
                                | 'ZMK'
                                | 'ZWL'
                            amount: number
                        }
                    }
                }[]
            }
            orderLineQuantity: { unitOfMeasurement: string; amount: string }
            statusDate: string
            orderLineStatuses: {
                orderLineStatus?: {
                    status: 'CREATED' | 'ACKNOWLEDGED' | 'SHIPPED' | 'CANCELLED' | 'REFUND'
                    statusQuantity: { unitOfMeasurement: string; amount: string }
                    cancellationReason?: string
                    trackingInfo?: {
                        shipDateTime: string
                        carrierName: {
                            otherCarrier?: string
                            carrier?:
                                | 'UPS'
                                | 'USPS'
                                | 'FED_EX'
                                | 'CPC'
                                | 'PCLINT'
                                | 'DHL'
                                | 'GLB'
                                | 'PURINTL_SWWGROUND'
                                | 'FEDEX_SWWEXPRESS'
                        }
                        methodCode:
                            | 'STANDARD'
                            | 'EXPRESS'
                            | 'ONE_DAY'
                            | 'FREIGHT'
                            | 'WHITE_GLOVE'
                            | 'VALUE'
                        trackingNumber: string
                        trackingURL?: string
                    }
                }[]
            }
            refund?: {
                refundId?: string
                refundComments?: string
                refundCharges: {
                    refundCharge?: {
                        refundReason:
                            | 'BILLING_ERROR'
                            | 'TAX_EXEMPT_CUSTOMER'
                            | 'ITEM_NOT_AS_ADVERTISED'
                            | 'INCORRECT_ITEM_RECEIVED'
                            | 'CANCELLED_YET_SHIPPED'
                            | 'ITEM_NOT_RECEIVED_BY_CUSTOMER'
                            | 'INCORRECT_SHIPPING_PRICE'
                            | 'DAMAGED_ITEM'
                            | 'DEFECTIVE_ITEM'
                            | 'CUSTOMER_CHANGED_MIND'
                            | 'CUSTOMER_RECEIVED_ITEM_LATE'
                            | 'FINANCE_GOODWILL'
                            | 'FINANCE_ROLLBACK'
                            | 'MISSING_PARTS_INSTRUCTIONS'
                            | 'BUYER_CANCELED'
                            | 'CUSTOMER_RETURNED_ITEM'
                            | 'GENERAL_ADJUSTMENT'
                            | 'MERCHANDISE_NOT_RECEIVED'
                            | 'QUALITY_MISSING_PARTS_INSTRUCTIONS'
                            | 'SHIPPING_DELIVERY_DAMAGED'
                            | 'SHIPPING_DELIVERY_SHIPPING_PRICE_DISCREPANCY'
                            | 'OTHERS'
                        charge: {
                            chargeType: string
                            chargeName: string
                            chargeAmount: {
                                currency:
                                    | 'AED'
                                    | 'AFN'
                                    | 'ALL'
                                    | 'AMD'
                                    | 'ANG'
                                    | 'AOA'
                                    | 'ARS'
                                    | 'AUD'
                                    | 'AWG'
                                    | 'AZN'
                                    | 'BAM'
                                    | 'BBD'
                                    | 'BDT'
                                    | 'BGN'
                                    | 'BHD'
                                    | 'BIF'
                                    | 'BMD'
                                    | 'BND'
                                    | 'BOB'
                                    | 'BRL'
                                    | 'BSD'
                                    | 'BTN'
                                    | 'BWP'
                                    | 'BYR'
                                    | 'BZD'
                                    | 'CAD'
                                    | 'CDF'
                                    | 'CHF'
                                    | 'CLP'
                                    | 'CNY'
                                    | 'COP'
                                    | 'CRC'
                                    | 'CUP'
                                    | 'CVE'
                                    | 'CZK'
                                    | 'DJF'
                                    | 'DKK'
                                    | 'DOP'
                                    | 'DZD'
                                    | 'EGP'
                                    | 'ERN'
                                    | 'ETB'
                                    | 'EUR'
                                    | 'FJD'
                                    | 'FKP'
                                    | 'GBP'
                                    | 'GEL'
                                    | 'GHS'
                                    | 'GIP'
                                    | 'GMD'
                                    | 'GNF'
                                    | 'GTQ'
                                    | 'GYD'
                                    | 'HKD'
                                    | 'HNL'
                                    | 'HRK'
                                    | 'HTG'
                                    | 'HUF'
                                    | 'IDR'
                                    | 'ILS'
                                    | 'INR'
                                    | 'IQD'
                                    | 'IRR'
                                    | 'ISK'
                                    | 'JMD'
                                    | 'JOD'
                                    | 'JPY'
                                    | 'KES'
                                    | 'KGS'
                                    | 'KHR'
                                    | 'KMF'
                                    | 'KPW'
                                    | 'KRW'
                                    | 'KWD'
                                    | 'KYD'
                                    | 'KZT'
                                    | 'LAK'
                                    | 'LBP'
                                    | 'LKR'
                                    | 'LRD'
                                    | 'LSL'
                                    | 'LTL'
                                    | 'LVL'
                                    | 'LYD'
                                    | 'MAD'
                                    | 'MDL'
                                    | 'MGA'
                                    | 'MKD'
                                    | 'MMK'
                                    | 'MNT'
                                    | 'MOP'
                                    | 'MRO'
                                    | 'MUR'
                                    | 'MVR'
                                    | 'MWK'
                                    | 'MXN'
                                    | 'MYR'
                                    | 'MZN'
                                    | 'NAD'
                                    | 'NGN'
                                    | 'NIO'
                                    | 'NOK'
                                    | 'NPR'
                                    | 'NZD'
                                    | 'OMR'
                                    | 'PAB'
                                    | 'PEN'
                                    | 'PGK'
                                    | 'PHP'
                                    | 'PKR'
                                    | 'PLN'
                                    | 'PYG'
                                    | 'QAR'
                                    | 'RON'
                                    | 'RSD'
                                    | 'RUB'
                                    | 'RUR'
                                    | 'RWF'
                                    | 'SAR'
                                    | 'SBD'
                                    | 'SCR'
                                    | 'SDG'
                                    | 'SEK'
                                    | 'SGD'
                                    | 'SHP'
                                    | 'SLL'
                                    | 'SOS'
                                    | 'SRD'
                                    | 'STD'
                                    | 'SYP'
                                    | 'SZL'
                                    | 'THB'
                                    | 'TJS'
                                    | 'TMT'
                                    | 'TND'
                                    | 'TOP'
                                    | 'TRY'
                                    | 'TTD'
                                    | 'TWD'
                                    | 'TZS'
                                    | 'UAH'
                                    | 'UGX'
                                    | 'USD'
                                    | 'UYU'
                                    | 'UZS'
                                    | 'VEF'
                                    | 'VND'
                                    | 'VUV'
                                    | 'WST'
                                    | 'XAF'
                                    | 'XAG'
                                    | 'XAU'
                                    | 'XBA'
                                    | 'XBB'
                                    | 'XBC'
                                    | 'XBD'
                                    | 'XCD'
                                    | 'XDR'
                                    | 'XFU'
                                    | 'XOF'
                                    | 'XPD'
                                    | 'XPF'
                                    | 'XPT'
                                    | 'XTS'
                                    | 'XXX'
                                    | 'YER'
                                    | 'ZAR'
                                    | 'ZMK'
                                    | 'ZWL'
                                amount: number
                            }
                            tax?: {
                                taxName: string
                                taxAmount: {
                                    currency:
                                        | 'AED'
                                        | 'AFN'
                                        | 'ALL'
                                        | 'AMD'
                                        | 'ANG'
                                        | 'AOA'
                                        | 'ARS'
                                        | 'AUD'
                                        | 'AWG'
                                        | 'AZN'
                                        | 'BAM'
                                        | 'BBD'
                                        | 'BDT'
                                        | 'BGN'
                                        | 'BHD'
                                        | 'BIF'
                                        | 'BMD'
                                        | 'BND'
                                        | 'BOB'
                                        | 'BRL'
                                        | 'BSD'
                                        | 'BTN'
                                        | 'BWP'
                                        | 'BYR'
                                        | 'BZD'
                                        | 'CAD'
                                        | 'CDF'
                                        | 'CHF'
                                        | 'CLP'
                                        | 'CNY'
                                        | 'COP'
                                        | 'CRC'
                                        | 'CUP'
                                        | 'CVE'
                                        | 'CZK'
                                        | 'DJF'
                                        | 'DKK'
                                        | 'DOP'
                                        | 'DZD'
                                        | 'EGP'
                                        | 'ERN'
                                        | 'ETB'
                                        | 'EUR'
                                        | 'FJD'
                                        | 'FKP'
                                        | 'GBP'
                                        | 'GEL'
                                        | 'GHS'
                                        | 'GIP'
                                        | 'GMD'
                                        | 'GNF'
                                        | 'GTQ'
                                        | 'GYD'
                                        | 'HKD'
                                        | 'HNL'
                                        | 'HRK'
                                        | 'HTG'
                                        | 'HUF'
                                        | 'IDR'
                                        | 'ILS'
                                        | 'INR'
                                        | 'IQD'
                                        | 'IRR'
                                        | 'ISK'
                                        | 'JMD'
                                        | 'JOD'
                                        | 'JPY'
                                        | 'KES'
                                        | 'KGS'
                                        | 'KHR'
                                        | 'KMF'
                                        | 'KPW'
                                        | 'KRW'
                                        | 'KWD'
                                        | 'KYD'
                                        | 'KZT'
                                        | 'LAK'
                                        | 'LBP'
                                        | 'LKR'
                                        | 'LRD'
                                        | 'LSL'
                                        | 'LTL'
                                        | 'LVL'
                                        | 'LYD'
                                        | 'MAD'
                                        | 'MDL'
                                        | 'MGA'
                                        | 'MKD'
                                        | 'MMK'
                                        | 'MNT'
                                        | 'MOP'
                                        | 'MRO'
                                        | 'MUR'
                                        | 'MVR'
                                        | 'MWK'
                                        | 'MXN'
                                        | 'MYR'
                                        | 'MZN'
                                        | 'NAD'
                                        | 'NGN'
                                        | 'NIO'
                                        | 'NOK'
                                        | 'NPR'
                                        | 'NZD'
                                        | 'OMR'
                                        | 'PAB'
                                        | 'PEN'
                                        | 'PGK'
                                        | 'PHP'
                                        | 'PKR'
                                        | 'PLN'
                                        | 'PYG'
                                        | 'QAR'
                                        | 'RON'
                                        | 'RSD'
                                        | 'RUB'
                                        | 'RUR'
                                        | 'RWF'
                                        | 'SAR'
                                        | 'SBD'
                                        | 'SCR'
                                        | 'SDG'
                                        | 'SEK'
                                        | 'SGD'
                                        | 'SHP'
                                        | 'SLL'
                                        | 'SOS'
                                        | 'SRD'
                                        | 'STD'
                                        | 'SYP'
                                        | 'SZL'
                                        | 'THB'
                                        | 'TJS'
                                        | 'TMT'
                                        | 'TND'
                                        | 'TOP'
                                        | 'TRY'
                                        | 'TTD'
                                        | 'TWD'
                                        | 'TZS'
                                        | 'UAH'
                                        | 'UGX'
                                        | 'USD'
                                        | 'UYU'
                                        | 'UZS'
                                        | 'VEF'
                                        | 'VND'
                                        | 'VUV'
                                        | 'WST'
                                        | 'XAF'
                                        | 'XAG'
                                        | 'XAU'
                                        | 'XBA'
                                        | 'XBB'
                                        | 'XBC'
                                        | 'XBD'
                                        | 'XCD'
                                        | 'XDR'
                                        | 'XFU'
                                        | 'XOF'
                                        | 'XPD'
                                        | 'XPF'
                                        | 'XPT'
                                        | 'XTS'
                                        | 'XXX'
                                        | 'YER'
                                        | 'ZAR'
                                        | 'ZMK'
                                        | 'ZWL'
                                    amount: number
                                }
                            }
                        }
                    }[]
                }
            }
            originalCarrierMethod?: string
            referenceLineId?: string
            fulfillment?: {
                fulfillmentOption?: string
                shipMethod?: string
                storeId?: string
                offerId?: string
                pickUpDateTime?: string
                pickUpBy?: string
            }
            intentToCancel?: string
            configId?: string
        }[]
    }
}
export const refund_order_lines_ca = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    path: {
        purchaseOrderId: string
    },
    data: any,
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/orders/${path.purchaseOrderId}/refund`
    const method = 'post'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, data, headers: enhanced_headers }
}
export type shipping_updates_ca_type = {
    purchaseOrderId: string
    customerOrderId: string
    customerEmailId: string
    orderDate: string
    shippingInfo: {
        phone: string
        estimatedDeliveryDate: string
        estimatedShipDate: string
        methodCode: 'STANDARD' | 'EXPRESS' | 'ONE_DAY' | 'FREIGHT' | 'WHITE_GLOVE' | 'VALUE'
        postalAddress: {
            name: string
            address1: string
            address2?: string
            city: string
            state: string
            postalCode: string
            country: string
            addressType?: string
        }
    }
    orderLines: {
        orderLine?: {
            lineNumber: string
            item: { productName: string; sku: string }
            charges: {
                charge?: {
                    chargeType: string
                    chargeName: string
                    chargeAmount: {
                        currency:
                            | 'AED'
                            | 'AFN'
                            | 'ALL'
                            | 'AMD'
                            | 'ANG'
                            | 'AOA'
                            | 'ARS'
                            | 'AUD'
                            | 'AWG'
                            | 'AZN'
                            | 'BAM'
                            | 'BBD'
                            | 'BDT'
                            | 'BGN'
                            | 'BHD'
                            | 'BIF'
                            | 'BMD'
                            | 'BND'
                            | 'BOB'
                            | 'BRL'
                            | 'BSD'
                            | 'BTN'
                            | 'BWP'
                            | 'BYR'
                            | 'BZD'
                            | 'CAD'
                            | 'CDF'
                            | 'CHF'
                            | 'CLP'
                            | 'CNY'
                            | 'COP'
                            | 'CRC'
                            | 'CUP'
                            | 'CVE'
                            | 'CZK'
                            | 'DJF'
                            | 'DKK'
                            | 'DOP'
                            | 'DZD'
                            | 'EGP'
                            | 'ERN'
                            | 'ETB'
                            | 'EUR'
                            | 'FJD'
                            | 'FKP'
                            | 'GBP'
                            | 'GEL'
                            | 'GHS'
                            | 'GIP'
                            | 'GMD'
                            | 'GNF'
                            | 'GTQ'
                            | 'GYD'
                            | 'HKD'
                            | 'HNL'
                            | 'HRK'
                            | 'HTG'
                            | 'HUF'
                            | 'IDR'
                            | 'ILS'
                            | 'INR'
                            | 'IQD'
                            | 'IRR'
                            | 'ISK'
                            | 'JMD'
                            | 'JOD'
                            | 'JPY'
                            | 'KES'
                            | 'KGS'
                            | 'KHR'
                            | 'KMF'
                            | 'KPW'
                            | 'KRW'
                            | 'KWD'
                            | 'KYD'
                            | 'KZT'
                            | 'LAK'
                            | 'LBP'
                            | 'LKR'
                            | 'LRD'
                            | 'LSL'
                            | 'LTL'
                            | 'LVL'
                            | 'LYD'
                            | 'MAD'
                            | 'MDL'
                            | 'MGA'
                            | 'MKD'
                            | 'MMK'
                            | 'MNT'
                            | 'MOP'
                            | 'MRO'
                            | 'MUR'
                            | 'MVR'
                            | 'MWK'
                            | 'MXN'
                            | 'MYR'
                            | 'MZN'
                            | 'NAD'
                            | 'NGN'
                            | 'NIO'
                            | 'NOK'
                            | 'NPR'
                            | 'NZD'
                            | 'OMR'
                            | 'PAB'
                            | 'PEN'
                            | 'PGK'
                            | 'PHP'
                            | 'PKR'
                            | 'PLN'
                            | 'PYG'
                            | 'QAR'
                            | 'RON'
                            | 'RSD'
                            | 'RUB'
                            | 'RUR'
                            | 'RWF'
                            | 'SAR'
                            | 'SBD'
                            | 'SCR'
                            | 'SDG'
                            | 'SEK'
                            | 'SGD'
                            | 'SHP'
                            | 'SLL'
                            | 'SOS'
                            | 'SRD'
                            | 'STD'
                            | 'SYP'
                            | 'SZL'
                            | 'THB'
                            | 'TJS'
                            | 'TMT'
                            | 'TND'
                            | 'TOP'
                            | 'TRY'
                            | 'TTD'
                            | 'TWD'
                            | 'TZS'
                            | 'UAH'
                            | 'UGX'
                            | 'USD'
                            | 'UYU'
                            | 'UZS'
                            | 'VEF'
                            | 'VND'
                            | 'VUV'
                            | 'WST'
                            | 'XAF'
                            | 'XAG'
                            | 'XAU'
                            | 'XBA'
                            | 'XBB'
                            | 'XBC'
                            | 'XBD'
                            | 'XCD'
                            | 'XDR'
                            | 'XFU'
                            | 'XOF'
                            | 'XPD'
                            | 'XPF'
                            | 'XPT'
                            | 'XTS'
                            | 'XXX'
                            | 'YER'
                            | 'ZAR'
                            | 'ZMK'
                            | 'ZWL'
                        amount: number
                    }
                    tax?: {
                        taxName: string
                        taxAmount: {
                            currency:
                                | 'AED'
                                | 'AFN'
                                | 'ALL'
                                | 'AMD'
                                | 'ANG'
                                | 'AOA'
                                | 'ARS'
                                | 'AUD'
                                | 'AWG'
                                | 'AZN'
                                | 'BAM'
                                | 'BBD'
                                | 'BDT'
                                | 'BGN'
                                | 'BHD'
                                | 'BIF'
                                | 'BMD'
                                | 'BND'
                                | 'BOB'
                                | 'BRL'
                                | 'BSD'
                                | 'BTN'
                                | 'BWP'
                                | 'BYR'
                                | 'BZD'
                                | 'CAD'
                                | 'CDF'
                                | 'CHF'
                                | 'CLP'
                                | 'CNY'
                                | 'COP'
                                | 'CRC'
                                | 'CUP'
                                | 'CVE'
                                | 'CZK'
                                | 'DJF'
                                | 'DKK'
                                | 'DOP'
                                | 'DZD'
                                | 'EGP'
                                | 'ERN'
                                | 'ETB'
                                | 'EUR'
                                | 'FJD'
                                | 'FKP'
                                | 'GBP'
                                | 'GEL'
                                | 'GHS'
                                | 'GIP'
                                | 'GMD'
                                | 'GNF'
                                | 'GTQ'
                                | 'GYD'
                                | 'HKD'
                                | 'HNL'
                                | 'HRK'
                                | 'HTG'
                                | 'HUF'
                                | 'IDR'
                                | 'ILS'
                                | 'INR'
                                | 'IQD'
                                | 'IRR'
                                | 'ISK'
                                | 'JMD'
                                | 'JOD'
                                | 'JPY'
                                | 'KES'
                                | 'KGS'
                                | 'KHR'
                                | 'KMF'
                                | 'KPW'
                                | 'KRW'
                                | 'KWD'
                                | 'KYD'
                                | 'KZT'
                                | 'LAK'
                                | 'LBP'
                                | 'LKR'
                                | 'LRD'
                                | 'LSL'
                                | 'LTL'
                                | 'LVL'
                                | 'LYD'
                                | 'MAD'
                                | 'MDL'
                                | 'MGA'
                                | 'MKD'
                                | 'MMK'
                                | 'MNT'
                                | 'MOP'
                                | 'MRO'
                                | 'MUR'
                                | 'MVR'
                                | 'MWK'
                                | 'MXN'
                                | 'MYR'
                                | 'MZN'
                                | 'NAD'
                                | 'NGN'
                                | 'NIO'
                                | 'NOK'
                                | 'NPR'
                                | 'NZD'
                                | 'OMR'
                                | 'PAB'
                                | 'PEN'
                                | 'PGK'
                                | 'PHP'
                                | 'PKR'
                                | 'PLN'
                                | 'PYG'
                                | 'QAR'
                                | 'RON'
                                | 'RSD'
                                | 'RUB'
                                | 'RUR'
                                | 'RWF'
                                | 'SAR'
                                | 'SBD'
                                | 'SCR'
                                | 'SDG'
                                | 'SEK'
                                | 'SGD'
                                | 'SHP'
                                | 'SLL'
                                | 'SOS'
                                | 'SRD'
                                | 'STD'
                                | 'SYP'
                                | 'SZL'
                                | 'THB'
                                | 'TJS'
                                | 'TMT'
                                | 'TND'
                                | 'TOP'
                                | 'TRY'
                                | 'TTD'
                                | 'TWD'
                                | 'TZS'
                                | 'UAH'
                                | 'UGX'
                                | 'USD'
                                | 'UYU'
                                | 'UZS'
                                | 'VEF'
                                | 'VND'
                                | 'VUV'
                                | 'WST'
                                | 'XAF'
                                | 'XAG'
                                | 'XAU'
                                | 'XBA'
                                | 'XBB'
                                | 'XBC'
                                | 'XBD'
                                | 'XCD'
                                | 'XDR'
                                | 'XFU'
                                | 'XOF'
                                | 'XPD'
                                | 'XPF'
                                | 'XPT'
                                | 'XTS'
                                | 'XXX'
                                | 'YER'
                                | 'ZAR'
                                | 'ZMK'
                                | 'ZWL'
                            amount: number
                        }
                    }
                }[]
            }
            orderLineQuantity: { unitOfMeasurement: string; amount: string }
            statusDate: string
            orderLineStatuses: {
                orderLineStatus?: {
                    status: 'CREATED' | 'ACKNOWLEDGED' | 'SHIPPED' | 'CANCELLED' | 'REFUND'
                    statusQuantity: { unitOfMeasurement: string; amount: string }
                    cancellationReason?: string
                    trackingInfo?: {
                        shipDateTime: string
                        carrierName: {
                            otherCarrier?: string
                            carrier?:
                                | 'UPS'
                                | 'USPS'
                                | 'FED_EX'
                                | 'CPC'
                                | 'PCLINT'
                                | 'DHL'
                                | 'GLB'
                                | 'PURINTL_SWWGROUND'
                                | 'FEDEX_SWWEXPRESS'
                        }
                        methodCode:
                            | 'STANDARD'
                            | 'EXPRESS'
                            | 'ONE_DAY'
                            | 'FREIGHT'
                            | 'WHITE_GLOVE'
                            | 'VALUE'
                        trackingNumber: string
                        trackingURL?: string
                    }
                }[]
            }
            refund?: {
                refundId?: string
                refundComments?: string
                refundCharges: {
                    refundCharge?: {
                        refundReason:
                            | 'BILLING_ERROR'
                            | 'TAX_EXEMPT_CUSTOMER'
                            | 'ITEM_NOT_AS_ADVERTISED'
                            | 'INCORRECT_ITEM_RECEIVED'
                            | 'CANCELLED_YET_SHIPPED'
                            | 'ITEM_NOT_RECEIVED_BY_CUSTOMER'
                            | 'INCORRECT_SHIPPING_PRICE'
                            | 'DAMAGED_ITEM'
                            | 'DEFECTIVE_ITEM'
                            | 'CUSTOMER_CHANGED_MIND'
                            | 'CUSTOMER_RECEIVED_ITEM_LATE'
                            | 'FINANCE_GOODWILL'
                            | 'FINANCE_ROLLBACK'
                            | 'MISSING_PARTS_INSTRUCTIONS'
                            | 'BUYER_CANCELED'
                            | 'CUSTOMER_RETURNED_ITEM'
                            | 'GENERAL_ADJUSTMENT'
                            | 'MERCHANDISE_NOT_RECEIVED'
                            | 'QUALITY_MISSING_PARTS_INSTRUCTIONS'
                            | 'SHIPPING_DELIVERY_DAMAGED'
                            | 'SHIPPING_DELIVERY_SHIPPING_PRICE_DISCREPANCY'
                            | 'OTHERS'
                        charge: {
                            chargeType: string
                            chargeName: string
                            chargeAmount: {
                                currency:
                                    | 'AED'
                                    | 'AFN'
                                    | 'ALL'
                                    | 'AMD'
                                    | 'ANG'
                                    | 'AOA'
                                    | 'ARS'
                                    | 'AUD'
                                    | 'AWG'
                                    | 'AZN'
                                    | 'BAM'
                                    | 'BBD'
                                    | 'BDT'
                                    | 'BGN'
                                    | 'BHD'
                                    | 'BIF'
                                    | 'BMD'
                                    | 'BND'
                                    | 'BOB'
                                    | 'BRL'
                                    | 'BSD'
                                    | 'BTN'
                                    | 'BWP'
                                    | 'BYR'
                                    | 'BZD'
                                    | 'CAD'
                                    | 'CDF'
                                    | 'CHF'
                                    | 'CLP'
                                    | 'CNY'
                                    | 'COP'
                                    | 'CRC'
                                    | 'CUP'
                                    | 'CVE'
                                    | 'CZK'
                                    | 'DJF'
                                    | 'DKK'
                                    | 'DOP'
                                    | 'DZD'
                                    | 'EGP'
                                    | 'ERN'
                                    | 'ETB'
                                    | 'EUR'
                                    | 'FJD'
                                    | 'FKP'
                                    | 'GBP'
                                    | 'GEL'
                                    | 'GHS'
                                    | 'GIP'
                                    | 'GMD'
                                    | 'GNF'
                                    | 'GTQ'
                                    | 'GYD'
                                    | 'HKD'
                                    | 'HNL'
                                    | 'HRK'
                                    | 'HTG'
                                    | 'HUF'
                                    | 'IDR'
                                    | 'ILS'
                                    | 'INR'
                                    | 'IQD'
                                    | 'IRR'
                                    | 'ISK'
                                    | 'JMD'
                                    | 'JOD'
                                    | 'JPY'
                                    | 'KES'
                                    | 'KGS'
                                    | 'KHR'
                                    | 'KMF'
                                    | 'KPW'
                                    | 'KRW'
                                    | 'KWD'
                                    | 'KYD'
                                    | 'KZT'
                                    | 'LAK'
                                    | 'LBP'
                                    | 'LKR'
                                    | 'LRD'
                                    | 'LSL'
                                    | 'LTL'
                                    | 'LVL'
                                    | 'LYD'
                                    | 'MAD'
                                    | 'MDL'
                                    | 'MGA'
                                    | 'MKD'
                                    | 'MMK'
                                    | 'MNT'
                                    | 'MOP'
                                    | 'MRO'
                                    | 'MUR'
                                    | 'MVR'
                                    | 'MWK'
                                    | 'MXN'
                                    | 'MYR'
                                    | 'MZN'
                                    | 'NAD'
                                    | 'NGN'
                                    | 'NIO'
                                    | 'NOK'
                                    | 'NPR'
                                    | 'NZD'
                                    | 'OMR'
                                    | 'PAB'
                                    | 'PEN'
                                    | 'PGK'
                                    | 'PHP'
                                    | 'PKR'
                                    | 'PLN'
                                    | 'PYG'
                                    | 'QAR'
                                    | 'RON'
                                    | 'RSD'
                                    | 'RUB'
                                    | 'RUR'
                                    | 'RWF'
                                    | 'SAR'
                                    | 'SBD'
                                    | 'SCR'
                                    | 'SDG'
                                    | 'SEK'
                                    | 'SGD'
                                    | 'SHP'
                                    | 'SLL'
                                    | 'SOS'
                                    | 'SRD'
                                    | 'STD'
                                    | 'SYP'
                                    | 'SZL'
                                    | 'THB'
                                    | 'TJS'
                                    | 'TMT'
                                    | 'TND'
                                    | 'TOP'
                                    | 'TRY'
                                    | 'TTD'
                                    | 'TWD'
                                    | 'TZS'
                                    | 'UAH'
                                    | 'UGX'
                                    | 'USD'
                                    | 'UYU'
                                    | 'UZS'
                                    | 'VEF'
                                    | 'VND'
                                    | 'VUV'
                                    | 'WST'
                                    | 'XAF'
                                    | 'XAG'
                                    | 'XAU'
                                    | 'XBA'
                                    | 'XBB'
                                    | 'XBC'
                                    | 'XBD'
                                    | 'XCD'
                                    | 'XDR'
                                    | 'XFU'
                                    | 'XOF'
                                    | 'XPD'
                                    | 'XPF'
                                    | 'XPT'
                                    | 'XTS'
                                    | 'XXX'
                                    | 'YER'
                                    | 'ZAR'
                                    | 'ZMK'
                                    | 'ZWL'
                                amount: number
                            }
                            tax?: {
                                taxName: string
                                taxAmount: {
                                    currency:
                                        | 'AED'
                                        | 'AFN'
                                        | 'ALL'
                                        | 'AMD'
                                        | 'ANG'
                                        | 'AOA'
                                        | 'ARS'
                                        | 'AUD'
                                        | 'AWG'
                                        | 'AZN'
                                        | 'BAM'
                                        | 'BBD'
                                        | 'BDT'
                                        | 'BGN'
                                        | 'BHD'
                                        | 'BIF'
                                        | 'BMD'
                                        | 'BND'
                                        | 'BOB'
                                        | 'BRL'
                                        | 'BSD'
                                        | 'BTN'
                                        | 'BWP'
                                        | 'BYR'
                                        | 'BZD'
                                        | 'CAD'
                                        | 'CDF'
                                        | 'CHF'
                                        | 'CLP'
                                        | 'CNY'
                                        | 'COP'
                                        | 'CRC'
                                        | 'CUP'
                                        | 'CVE'
                                        | 'CZK'
                                        | 'DJF'
                                        | 'DKK'
                                        | 'DOP'
                                        | 'DZD'
                                        | 'EGP'
                                        | 'ERN'
                                        | 'ETB'
                                        | 'EUR'
                                        | 'FJD'
                                        | 'FKP'
                                        | 'GBP'
                                        | 'GEL'
                                        | 'GHS'
                                        | 'GIP'
                                        | 'GMD'
                                        | 'GNF'
                                        | 'GTQ'
                                        | 'GYD'
                                        | 'HKD'
                                        | 'HNL'
                                        | 'HRK'
                                        | 'HTG'
                                        | 'HUF'
                                        | 'IDR'
                                        | 'ILS'
                                        | 'INR'
                                        | 'IQD'
                                        | 'IRR'
                                        | 'ISK'
                                        | 'JMD'
                                        | 'JOD'
                                        | 'JPY'
                                        | 'KES'
                                        | 'KGS'
                                        | 'KHR'
                                        | 'KMF'
                                        | 'KPW'
                                        | 'KRW'
                                        | 'KWD'
                                        | 'KYD'
                                        | 'KZT'
                                        | 'LAK'
                                        | 'LBP'
                                        | 'LKR'
                                        | 'LRD'
                                        | 'LSL'
                                        | 'LTL'
                                        | 'LVL'
                                        | 'LYD'
                                        | 'MAD'
                                        | 'MDL'
                                        | 'MGA'
                                        | 'MKD'
                                        | 'MMK'
                                        | 'MNT'
                                        | 'MOP'
                                        | 'MRO'
                                        | 'MUR'
                                        | 'MVR'
                                        | 'MWK'
                                        | 'MXN'
                                        | 'MYR'
                                        | 'MZN'
                                        | 'NAD'
                                        | 'NGN'
                                        | 'NIO'
                                        | 'NOK'
                                        | 'NPR'
                                        | 'NZD'
                                        | 'OMR'
                                        | 'PAB'
                                        | 'PEN'
                                        | 'PGK'
                                        | 'PHP'
                                        | 'PKR'
                                        | 'PLN'
                                        | 'PYG'
                                        | 'QAR'
                                        | 'RON'
                                        | 'RSD'
                                        | 'RUB'
                                        | 'RUR'
                                        | 'RWF'
                                        | 'SAR'
                                        | 'SBD'
                                        | 'SCR'
                                        | 'SDG'
                                        | 'SEK'
                                        | 'SGD'
                                        | 'SHP'
                                        | 'SLL'
                                        | 'SOS'
                                        | 'SRD'
                                        | 'STD'
                                        | 'SYP'
                                        | 'SZL'
                                        | 'THB'
                                        | 'TJS'
                                        | 'TMT'
                                        | 'TND'
                                        | 'TOP'
                                        | 'TRY'
                                        | 'TTD'
                                        | 'TWD'
                                        | 'TZS'
                                        | 'UAH'
                                        | 'UGX'
                                        | 'USD'
                                        | 'UYU'
                                        | 'UZS'
                                        | 'VEF'
                                        | 'VND'
                                        | 'VUV'
                                        | 'WST'
                                        | 'XAF'
                                        | 'XAG'
                                        | 'XAU'
                                        | 'XBA'
                                        | 'XBB'
                                        | 'XBC'
                                        | 'XBD'
                                        | 'XCD'
                                        | 'XDR'
                                        | 'XFU'
                                        | 'XOF'
                                        | 'XPD'
                                        | 'XPF'
                                        | 'XPT'
                                        | 'XTS'
                                        | 'XXX'
                                        | 'YER'
                                        | 'ZAR'
                                        | 'ZMK'
                                        | 'ZWL'
                                    amount: number
                                }
                            }
                        }
                    }[]
                }
            }
            originalCarrierMethod?: string
            referenceLineId?: string
            fulfillment?: {
                fulfillmentOption?: string
                shipMethod?: string
                storeId?: string
                offerId?: string
                pickUpDateTime?: string
                pickUpBy?: string
            }
            intentToCancel?: string
            configId?: string
        }[]
    }
}
export const shipping_updates_ca = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    path: {
        purchaseOrderId: string
    },
    data: any,
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/orders/${path.purchaseOrderId}/shipping`
    const method = 'post'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, data, headers: enhanced_headers }
}
export type acknowledge_orders_ca_type = {
    purchaseOrderId: string
    customerOrderId: string
    customerEmailId: string
    orderDate: string
    shippingInfo: {
        phone: string
        estimatedDeliveryDate: string
        estimatedShipDate: string
        methodCode: 'STANDARD' | 'EXPRESS' | 'ONE_DAY' | 'FREIGHT' | 'WHITE_GLOVE' | 'VALUE'
        postalAddress: {
            name: string
            address1: string
            address2?: string
            city: string
            state: string
            postalCode: string
            country: string
            addressType?: string
        }
    }
    orderLines: {
        orderLine?: {
            lineNumber: string
            item: { productName: string; sku: string }
            charges: {
                charge?: {
                    chargeType: string
                    chargeName: string
                    chargeAmount: {
                        currency:
                            | 'AED'
                            | 'AFN'
                            | 'ALL'
                            | 'AMD'
                            | 'ANG'
                            | 'AOA'
                            | 'ARS'
                            | 'AUD'
                            | 'AWG'
                            | 'AZN'
                            | 'BAM'
                            | 'BBD'
                            | 'BDT'
                            | 'BGN'
                            | 'BHD'
                            | 'BIF'
                            | 'BMD'
                            | 'BND'
                            | 'BOB'
                            | 'BRL'
                            | 'BSD'
                            | 'BTN'
                            | 'BWP'
                            | 'BYR'
                            | 'BZD'
                            | 'CAD'
                            | 'CDF'
                            | 'CHF'
                            | 'CLP'
                            | 'CNY'
                            | 'COP'
                            | 'CRC'
                            | 'CUP'
                            | 'CVE'
                            | 'CZK'
                            | 'DJF'
                            | 'DKK'
                            | 'DOP'
                            | 'DZD'
                            | 'EGP'
                            | 'ERN'
                            | 'ETB'
                            | 'EUR'
                            | 'FJD'
                            | 'FKP'
                            | 'GBP'
                            | 'GEL'
                            | 'GHS'
                            | 'GIP'
                            | 'GMD'
                            | 'GNF'
                            | 'GTQ'
                            | 'GYD'
                            | 'HKD'
                            | 'HNL'
                            | 'HRK'
                            | 'HTG'
                            | 'HUF'
                            | 'IDR'
                            | 'ILS'
                            | 'INR'
                            | 'IQD'
                            | 'IRR'
                            | 'ISK'
                            | 'JMD'
                            | 'JOD'
                            | 'JPY'
                            | 'KES'
                            | 'KGS'
                            | 'KHR'
                            | 'KMF'
                            | 'KPW'
                            | 'KRW'
                            | 'KWD'
                            | 'KYD'
                            | 'KZT'
                            | 'LAK'
                            | 'LBP'
                            | 'LKR'
                            | 'LRD'
                            | 'LSL'
                            | 'LTL'
                            | 'LVL'
                            | 'LYD'
                            | 'MAD'
                            | 'MDL'
                            | 'MGA'
                            | 'MKD'
                            | 'MMK'
                            | 'MNT'
                            | 'MOP'
                            | 'MRO'
                            | 'MUR'
                            | 'MVR'
                            | 'MWK'
                            | 'MXN'
                            | 'MYR'
                            | 'MZN'
                            | 'NAD'
                            | 'NGN'
                            | 'NIO'
                            | 'NOK'
                            | 'NPR'
                            | 'NZD'
                            | 'OMR'
                            | 'PAB'
                            | 'PEN'
                            | 'PGK'
                            | 'PHP'
                            | 'PKR'
                            | 'PLN'
                            | 'PYG'
                            | 'QAR'
                            | 'RON'
                            | 'RSD'
                            | 'RUB'
                            | 'RUR'
                            | 'RWF'
                            | 'SAR'
                            | 'SBD'
                            | 'SCR'
                            | 'SDG'
                            | 'SEK'
                            | 'SGD'
                            | 'SHP'
                            | 'SLL'
                            | 'SOS'
                            | 'SRD'
                            | 'STD'
                            | 'SYP'
                            | 'SZL'
                            | 'THB'
                            | 'TJS'
                            | 'TMT'
                            | 'TND'
                            | 'TOP'
                            | 'TRY'
                            | 'TTD'
                            | 'TWD'
                            | 'TZS'
                            | 'UAH'
                            | 'UGX'
                            | 'USD'
                            | 'UYU'
                            | 'UZS'
                            | 'VEF'
                            | 'VND'
                            | 'VUV'
                            | 'WST'
                            | 'XAF'
                            | 'XAG'
                            | 'XAU'
                            | 'XBA'
                            | 'XBB'
                            | 'XBC'
                            | 'XBD'
                            | 'XCD'
                            | 'XDR'
                            | 'XFU'
                            | 'XOF'
                            | 'XPD'
                            | 'XPF'
                            | 'XPT'
                            | 'XTS'
                            | 'XXX'
                            | 'YER'
                            | 'ZAR'
                            | 'ZMK'
                            | 'ZWL'
                        amount: number
                    }
                    tax?: {
                        taxName: string
                        taxAmount: {
                            currency:
                                | 'AED'
                                | 'AFN'
                                | 'ALL'
                                | 'AMD'
                                | 'ANG'
                                | 'AOA'
                                | 'ARS'
                                | 'AUD'
                                | 'AWG'
                                | 'AZN'
                                | 'BAM'
                                | 'BBD'
                                | 'BDT'
                                | 'BGN'
                                | 'BHD'
                                | 'BIF'
                                | 'BMD'
                                | 'BND'
                                | 'BOB'
                                | 'BRL'
                                | 'BSD'
                                | 'BTN'
                                | 'BWP'
                                | 'BYR'
                                | 'BZD'
                                | 'CAD'
                                | 'CDF'
                                | 'CHF'
                                | 'CLP'
                                | 'CNY'
                                | 'COP'
                                | 'CRC'
                                | 'CUP'
                                | 'CVE'
                                | 'CZK'
                                | 'DJF'
                                | 'DKK'
                                | 'DOP'
                                | 'DZD'
                                | 'EGP'
                                | 'ERN'
                                | 'ETB'
                                | 'EUR'
                                | 'FJD'
                                | 'FKP'
                                | 'GBP'
                                | 'GEL'
                                | 'GHS'
                                | 'GIP'
                                | 'GMD'
                                | 'GNF'
                                | 'GTQ'
                                | 'GYD'
                                | 'HKD'
                                | 'HNL'
                                | 'HRK'
                                | 'HTG'
                                | 'HUF'
                                | 'IDR'
                                | 'ILS'
                                | 'INR'
                                | 'IQD'
                                | 'IRR'
                                | 'ISK'
                                | 'JMD'
                                | 'JOD'
                                | 'JPY'
                                | 'KES'
                                | 'KGS'
                                | 'KHR'
                                | 'KMF'
                                | 'KPW'
                                | 'KRW'
                                | 'KWD'
                                | 'KYD'
                                | 'KZT'
                                | 'LAK'
                                | 'LBP'
                                | 'LKR'
                                | 'LRD'
                                | 'LSL'
                                | 'LTL'
                                | 'LVL'
                                | 'LYD'
                                | 'MAD'
                                | 'MDL'
                                | 'MGA'
                                | 'MKD'
                                | 'MMK'
                                | 'MNT'
                                | 'MOP'
                                | 'MRO'
                                | 'MUR'
                                | 'MVR'
                                | 'MWK'
                                | 'MXN'
                                | 'MYR'
                                | 'MZN'
                                | 'NAD'
                                | 'NGN'
                                | 'NIO'
                                | 'NOK'
                                | 'NPR'
                                | 'NZD'
                                | 'OMR'
                                | 'PAB'
                                | 'PEN'
                                | 'PGK'
                                | 'PHP'
                                | 'PKR'
                                | 'PLN'
                                | 'PYG'
                                | 'QAR'
                                | 'RON'
                                | 'RSD'
                                | 'RUB'
                                | 'RUR'
                                | 'RWF'
                                | 'SAR'
                                | 'SBD'
                                | 'SCR'
                                | 'SDG'
                                | 'SEK'
                                | 'SGD'
                                | 'SHP'
                                | 'SLL'
                                | 'SOS'
                                | 'SRD'
                                | 'STD'
                                | 'SYP'
                                | 'SZL'
                                | 'THB'
                                | 'TJS'
                                | 'TMT'
                                | 'TND'
                                | 'TOP'
                                | 'TRY'
                                | 'TTD'
                                | 'TWD'
                                | 'TZS'
                                | 'UAH'
                                | 'UGX'
                                | 'USD'
                                | 'UYU'
                                | 'UZS'
                                | 'VEF'
                                | 'VND'
                                | 'VUV'
                                | 'WST'
                                | 'XAF'
                                | 'XAG'
                                | 'XAU'
                                | 'XBA'
                                | 'XBB'
                                | 'XBC'
                                | 'XBD'
                                | 'XCD'
                                | 'XDR'
                                | 'XFU'
                                | 'XOF'
                                | 'XPD'
                                | 'XPF'
                                | 'XPT'
                                | 'XTS'
                                | 'XXX'
                                | 'YER'
                                | 'ZAR'
                                | 'ZMK'
                                | 'ZWL'
                            amount: number
                        }
                    }
                }[]
            }
            orderLineQuantity: { unitOfMeasurement: string; amount: string }
            statusDate: string
            orderLineStatuses: {
                orderLineStatus?: {
                    status: 'CREATED' | 'ACKNOWLEDGED' | 'SHIPPED' | 'CANCELLED' | 'REFUND'
                    statusQuantity: { unitOfMeasurement: string; amount: string }
                    cancellationReason?: string
                    trackingInfo?: {
                        shipDateTime: string
                        carrierName: {
                            otherCarrier?: string
                            carrier?:
                                | 'UPS'
                                | 'USPS'
                                | 'FED_EX'
                                | 'CPC'
                                | 'PCLINT'
                                | 'DHL'
                                | 'GLB'
                                | 'PURINTL_SWWGROUND'
                                | 'FEDEX_SWWEXPRESS'
                        }
                        methodCode:
                            | 'STANDARD'
                            | 'EXPRESS'
                            | 'ONE_DAY'
                            | 'FREIGHT'
                            | 'WHITE_GLOVE'
                            | 'VALUE'
                        trackingNumber: string
                        trackingURL?: string
                    }
                }[]
            }
            refund?: {
                refundId?: string
                refundComments?: string
                refundCharges: {
                    refundCharge?: {
                        refundReason:
                            | 'BILLING_ERROR'
                            | 'TAX_EXEMPT_CUSTOMER'
                            | 'ITEM_NOT_AS_ADVERTISED'
                            | 'INCORRECT_ITEM_RECEIVED'
                            | 'CANCELLED_YET_SHIPPED'
                            | 'ITEM_NOT_RECEIVED_BY_CUSTOMER'
                            | 'INCORRECT_SHIPPING_PRICE'
                            | 'DAMAGED_ITEM'
                            | 'DEFECTIVE_ITEM'
                            | 'CUSTOMER_CHANGED_MIND'
                            | 'CUSTOMER_RECEIVED_ITEM_LATE'
                            | 'FINANCE_GOODWILL'
                            | 'FINANCE_ROLLBACK'
                            | 'MISSING_PARTS_INSTRUCTIONS'
                            | 'BUYER_CANCELED'
                            | 'CUSTOMER_RETURNED_ITEM'
                            | 'GENERAL_ADJUSTMENT'
                            | 'MERCHANDISE_NOT_RECEIVED'
                            | 'QUALITY_MISSING_PARTS_INSTRUCTIONS'
                            | 'SHIPPING_DELIVERY_DAMAGED'
                            | 'SHIPPING_DELIVERY_SHIPPING_PRICE_DISCREPANCY'
                            | 'OTHERS'
                        charge: {
                            chargeType: string
                            chargeName: string
                            chargeAmount: {
                                currency:
                                    | 'AED'
                                    | 'AFN'
                                    | 'ALL'
                                    | 'AMD'
                                    | 'ANG'
                                    | 'AOA'
                                    | 'ARS'
                                    | 'AUD'
                                    | 'AWG'
                                    | 'AZN'
                                    | 'BAM'
                                    | 'BBD'
                                    | 'BDT'
                                    | 'BGN'
                                    | 'BHD'
                                    | 'BIF'
                                    | 'BMD'
                                    | 'BND'
                                    | 'BOB'
                                    | 'BRL'
                                    | 'BSD'
                                    | 'BTN'
                                    | 'BWP'
                                    | 'BYR'
                                    | 'BZD'
                                    | 'CAD'
                                    | 'CDF'
                                    | 'CHF'
                                    | 'CLP'
                                    | 'CNY'
                                    | 'COP'
                                    | 'CRC'
                                    | 'CUP'
                                    | 'CVE'
                                    | 'CZK'
                                    | 'DJF'
                                    | 'DKK'
                                    | 'DOP'
                                    | 'DZD'
                                    | 'EGP'
                                    | 'ERN'
                                    | 'ETB'
                                    | 'EUR'
                                    | 'FJD'
                                    | 'FKP'
                                    | 'GBP'
                                    | 'GEL'
                                    | 'GHS'
                                    | 'GIP'
                                    | 'GMD'
                                    | 'GNF'
                                    | 'GTQ'
                                    | 'GYD'
                                    | 'HKD'
                                    | 'HNL'
                                    | 'HRK'
                                    | 'HTG'
                                    | 'HUF'
                                    | 'IDR'
                                    | 'ILS'
                                    | 'INR'
                                    | 'IQD'
                                    | 'IRR'
                                    | 'ISK'
                                    | 'JMD'
                                    | 'JOD'
                                    | 'JPY'
                                    | 'KES'
                                    | 'KGS'
                                    | 'KHR'
                                    | 'KMF'
                                    | 'KPW'
                                    | 'KRW'
                                    | 'KWD'
                                    | 'KYD'
                                    | 'KZT'
                                    | 'LAK'
                                    | 'LBP'
                                    | 'LKR'
                                    | 'LRD'
                                    | 'LSL'
                                    | 'LTL'
                                    | 'LVL'
                                    | 'LYD'
                                    | 'MAD'
                                    | 'MDL'
                                    | 'MGA'
                                    | 'MKD'
                                    | 'MMK'
                                    | 'MNT'
                                    | 'MOP'
                                    | 'MRO'
                                    | 'MUR'
                                    | 'MVR'
                                    | 'MWK'
                                    | 'MXN'
                                    | 'MYR'
                                    | 'MZN'
                                    | 'NAD'
                                    | 'NGN'
                                    | 'NIO'
                                    | 'NOK'
                                    | 'NPR'
                                    | 'NZD'
                                    | 'OMR'
                                    | 'PAB'
                                    | 'PEN'
                                    | 'PGK'
                                    | 'PHP'
                                    | 'PKR'
                                    | 'PLN'
                                    | 'PYG'
                                    | 'QAR'
                                    | 'RON'
                                    | 'RSD'
                                    | 'RUB'
                                    | 'RUR'
                                    | 'RWF'
                                    | 'SAR'
                                    | 'SBD'
                                    | 'SCR'
                                    | 'SDG'
                                    | 'SEK'
                                    | 'SGD'
                                    | 'SHP'
                                    | 'SLL'
                                    | 'SOS'
                                    | 'SRD'
                                    | 'STD'
                                    | 'SYP'
                                    | 'SZL'
                                    | 'THB'
                                    | 'TJS'
                                    | 'TMT'
                                    | 'TND'
                                    | 'TOP'
                                    | 'TRY'
                                    | 'TTD'
                                    | 'TWD'
                                    | 'TZS'
                                    | 'UAH'
                                    | 'UGX'
                                    | 'USD'
                                    | 'UYU'
                                    | 'UZS'
                                    | 'VEF'
                                    | 'VND'
                                    | 'VUV'
                                    | 'WST'
                                    | 'XAF'
                                    | 'XAG'
                                    | 'XAU'
                                    | 'XBA'
                                    | 'XBB'
                                    | 'XBC'
                                    | 'XBD'
                                    | 'XCD'
                                    | 'XDR'
                                    | 'XFU'
                                    | 'XOF'
                                    | 'XPD'
                                    | 'XPF'
                                    | 'XPT'
                                    | 'XTS'
                                    | 'XXX'
                                    | 'YER'
                                    | 'ZAR'
                                    | 'ZMK'
                                    | 'ZWL'
                                amount: number
                            }
                            tax?: {
                                taxName: string
                                taxAmount: {
                                    currency:
                                        | 'AED'
                                        | 'AFN'
                                        | 'ALL'
                                        | 'AMD'
                                        | 'ANG'
                                        | 'AOA'
                                        | 'ARS'
                                        | 'AUD'
                                        | 'AWG'
                                        | 'AZN'
                                        | 'BAM'
                                        | 'BBD'
                                        | 'BDT'
                                        | 'BGN'
                                        | 'BHD'
                                        | 'BIF'
                                        | 'BMD'
                                        | 'BND'
                                        | 'BOB'
                                        | 'BRL'
                                        | 'BSD'
                                        | 'BTN'
                                        | 'BWP'
                                        | 'BYR'
                                        | 'BZD'
                                        | 'CAD'
                                        | 'CDF'
                                        | 'CHF'
                                        | 'CLP'
                                        | 'CNY'
                                        | 'COP'
                                        | 'CRC'
                                        | 'CUP'
                                        | 'CVE'
                                        | 'CZK'
                                        | 'DJF'
                                        | 'DKK'
                                        | 'DOP'
                                        | 'DZD'
                                        | 'EGP'
                                        | 'ERN'
                                        | 'ETB'
                                        | 'EUR'
                                        | 'FJD'
                                        | 'FKP'
                                        | 'GBP'
                                        | 'GEL'
                                        | 'GHS'
                                        | 'GIP'
                                        | 'GMD'
                                        | 'GNF'
                                        | 'GTQ'
                                        | 'GYD'
                                        | 'HKD'
                                        | 'HNL'
                                        | 'HRK'
                                        | 'HTG'
                                        | 'HUF'
                                        | 'IDR'
                                        | 'ILS'
                                        | 'INR'
                                        | 'IQD'
                                        | 'IRR'
                                        | 'ISK'
                                        | 'JMD'
                                        | 'JOD'
                                        | 'JPY'
                                        | 'KES'
                                        | 'KGS'
                                        | 'KHR'
                                        | 'KMF'
                                        | 'KPW'
                                        | 'KRW'
                                        | 'KWD'
                                        | 'KYD'
                                        | 'KZT'
                                        | 'LAK'
                                        | 'LBP'
                                        | 'LKR'
                                        | 'LRD'
                                        | 'LSL'
                                        | 'LTL'
                                        | 'LVL'
                                        | 'LYD'
                                        | 'MAD'
                                        | 'MDL'
                                        | 'MGA'
                                        | 'MKD'
                                        | 'MMK'
                                        | 'MNT'
                                        | 'MOP'
                                        | 'MRO'
                                        | 'MUR'
                                        | 'MVR'
                                        | 'MWK'
                                        | 'MXN'
                                        | 'MYR'
                                        | 'MZN'
                                        | 'NAD'
                                        | 'NGN'
                                        | 'NIO'
                                        | 'NOK'
                                        | 'NPR'
                                        | 'NZD'
                                        | 'OMR'
                                        | 'PAB'
                                        | 'PEN'
                                        | 'PGK'
                                        | 'PHP'
                                        | 'PKR'
                                        | 'PLN'
                                        | 'PYG'
                                        | 'QAR'
                                        | 'RON'
                                        | 'RSD'
                                        | 'RUB'
                                        | 'RUR'
                                        | 'RWF'
                                        | 'SAR'
                                        | 'SBD'
                                        | 'SCR'
                                        | 'SDG'
                                        | 'SEK'
                                        | 'SGD'
                                        | 'SHP'
                                        | 'SLL'
                                        | 'SOS'
                                        | 'SRD'
                                        | 'STD'
                                        | 'SYP'
                                        | 'SZL'
                                        | 'THB'
                                        | 'TJS'
                                        | 'TMT'
                                        | 'TND'
                                        | 'TOP'
                                        | 'TRY'
                                        | 'TTD'
                                        | 'TWD'
                                        | 'TZS'
                                        | 'UAH'
                                        | 'UGX'
                                        | 'USD'
                                        | 'UYU'
                                        | 'UZS'
                                        | 'VEF'
                                        | 'VND'
                                        | 'VUV'
                                        | 'WST'
                                        | 'XAF'
                                        | 'XAG'
                                        | 'XAU'
                                        | 'XBA'
                                        | 'XBB'
                                        | 'XBC'
                                        | 'XBD'
                                        | 'XCD'
                                        | 'XDR'
                                        | 'XFU'
                                        | 'XOF'
                                        | 'XPD'
                                        | 'XPF'
                                        | 'XPT'
                                        | 'XTS'
                                        | 'XXX'
                                        | 'YER'
                                        | 'ZAR'
                                        | 'ZMK'
                                        | 'ZWL'
                                    amount: number
                                }
                            }
                        }
                    }[]
                }
            }
            originalCarrierMethod?: string
            referenceLineId?: string
            fulfillment?: {
                fulfillmentOption?: string
                shipMethod?: string
                storeId?: string
                offerId?: string
                pickUpDateTime?: string
                pickUpBy?: string
            }
            intentToCancel?: string
            configId?: string
        }[]
    }
}
export const acknowledge_orders_ca = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    path: {
        purchaseOrderId: string
    },
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/orders/${path.purchaseOrderId}/acknowledge`
    const method = 'post'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, headers: enhanced_headers }
}

/* Price Management */
// The price is a fundamental building block for your listing on Walmart.com. You can use the price management APIs to set up and manage the price for a given item
export type update_price_ca_type = {
    errors?: {
        code: string
        field?: string
        description?: string
        info?: string
        severity?: 'INFO' | 'WARN' | 'ERROR'
        category?: 'APPLICATION' | 'SYSTEM' | 'REQUEST' | 'DATA'
        causes?: { code?: string; field?: string; type?: string; description?: string }[]
        errorIdentifiers?: {}
        component?: string
        type?: string
        serviceName?: string
        gatewayErrorCategory?: 'INTERNAL_DATA_ERROR' | 'EXTERNAL_DATA_ERROR' | 'SYSTEM_ERROR'
    }[]
    mart?: string
    sku?: string
    currency?: string
    amount?: string
    message?: string
}
export const update_price_ca = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    data: any,
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/price`
    const method = 'put'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, data, headers: enhanced_headers }
}
export type price_bulk_uploads_type = { feedId?: string; additionalAttributes?: {}; errors?: {} }
export const price_bulk_uploads = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    query: {
        feedType: string
    },
    data: any,
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/feeds${json_to_query_string(query)}`
    const method = 'post'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, data, headers: enhanced_headers }
}

/* Promotion Management */
// Sellers can set regular or promotional prices for their items. Setting the Promotional prices is an option to create unique pricing for events such as clearance sales or to call out a comparison price
export type update_promotional_prices_ca_type = string
export const update_promotional_prices_ca = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    query: {
        promo: boolean
    },
    data: any,
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/price${json_to_query_string(query)}`
    const method = 'put'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, data, headers: enhanced_headers }
}
export type get_promotional_prices_type = string
export const get_promotional_prices = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    path: {
        sku: string
    },
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/promo/sku/${path.sku}`
    const method = 'get'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, headers: enhanced_headers }
}
export type update_bulk_promotional_price_type = {
    feedId?: string
    additionalAttributes?: {}
    errors?: {}
}
export const update_bulk_promotional_price = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    query: {
        feedType: string
    },
    data: any,
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/feeds${json_to_query_string(query)}`
    const method = 'post'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, data, headers: enhanced_headers }
}

/* Item report */
// Returns all the information associated with Seller's items that are set up on Walmart’s platform.
export type get_item_report_type = undefined
export const get_item_report = (
    auth: {
        walmart_consumer: string
        walmart_channel: string
        walmart_secret: string
    },
    query: {
        type: string
        version?: string
    },
    headers: Partial<{
        'WM_CONSUMER.CHANNEL.TYPE': string
        'WM_QOS.CORRELATION_ID': string
        'WM_SVC.NAME': string
        'WM_SEC.TIMESTAMP': string
        'WM_SEC.AUTH_SIGNATURE': string
        'WM_CONSUMER.ID': string
    }>
) => {
    const url = `https://marketplace.walmartapis.com/v3/getReport${json_to_query_string(query)}`
    const method = 'get'
    const timestamp = Date.now()
    const enhanced_headers = {
        'WM_QOS.CORRELATION_ID': generate_correlation_id(),
        'WM_SVC.NAME': 'Walmart Gateway API',
        'WM_SEC.TIMESTAMP': timestamp,
        'WM_SEC.AUTH_SIGNATURE': generate_signature(
            url,
            method,
            auth.walmart_secret,
            auth.walmart_consumer,
            timestamp
        ),
        'WM_CONSUMER.ID': auth.walmart_consumer,
        'WM_CONSUMER.CHANNEL.TYPE': auth.walmart_channel,
        ...headers
    }

    return { method, url, headers: enhanced_headers }
}
