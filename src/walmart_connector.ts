import { json_to_query_string, generate_correlation_id, generate_signature } from './helpers'
    
declare var Partial;

/* International Shipping */
// The International Shipping API enables sellers to use the Ship with Walmart (SWW) International shipping programs to ship their goods from the US to Canada. These APIs provide support for two SWW Programs : SWW Express & SWW Ground
export const get_shipment_consolidation = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    query: {
        "domestic tracking no.": string,
		"carrier id": number
    },
    headers: Partial<{
        "WM.TEST_MODE"?: boolean,
		"WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string,
		"Accept": string,
		"Content-Type": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/shipment/international/consolidation${json_to_query_string(query)}`
    const method = 'get'
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
    
    return { method, url, headers: enhanced_headers }
}
export const create_shipment_consolidation = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    data: any,
    headers: Partial<{
        "WM.TEST_MODE"?: boolean,
		"WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string,
		"Accept": string,
		"Content-Type": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/shipment/international/consolidation`
    const method = 'post'
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
    
    return { method, url, data, headers: enhanced_headers }
}
export const get_international_shipment = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    query: {
        "shipment id": string
    },
    headers: Partial<{
        "WM.TEST_MODE"?: boolean,
		"WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string,
		"Accept": string,
		"Content-Type": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/shipment/international${json_to_query_string(query)}`
    const method = 'get'
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
    
    return { method, url, headers: enhanced_headers }
}
export const create_international_shipment = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    data: any,
    headers: Partial<{
        "WM.TEST_MODE"?: boolean,
		"WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string,
		"Accept": string,
		"Content-Type": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/shipment/international`
    const method = 'post'
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
    
    return { method, url, data, headers: enhanced_headers }
}
export const get_document = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    query: {
        "shipment id": string,
		"Document Type"?: string
    },
    headers: Partial<{
        "WM.TEST_MODE"?: boolean,
		"WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string,
		"Accept": string,
		"Content-Type": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/shipment/international/document${json_to_query_string(query)}`
    const method = 'get'
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
    
    return { method, url, headers: enhanced_headers }
}
    
/* Feed Management */
// Feeds are constructed to handle bulk functions. A feed consists of an HTTP request with an attached file. The attached file contains the XML representing the objects that need to be created or updated.
export const get_all_feed_statuses = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    query: {
        "feedId"?: string,
		"offset"?: string,
		"limit"?: string
    },
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/feeds${json_to_query_string(query)}`
    const method = 'get'
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
    
    return { method, url, headers: enhanced_headers }
}
export const bulk_content_setup = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    query: {
        "feedType": string
    },
    data: any,
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/feeds${json_to_query_string(query)}`
    const method = 'post'
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
    
    return { method, url, data, headers: enhanced_headers }
}
export const get_feed_item_status = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    query: {
        "includeDetails"?: string,
		"offset"?: string,
		"limit"?: string
    },
    path: {
        "feedId": string
    },
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/feeds/${path.feedId}${json_to_query_string(query)}`
    const method = 'get'
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
    
    return { method, url, headers: enhanced_headers }
}
    
/* Inventory Management */
// Maintaining up-to-date inventory for your items on Walmart.com ensures a great experience for your customers and greater sales opportunities for you.
export const get_inventory = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    query: {
        "sku": string
    },
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/inventory${json_to_query_string(query)}`
    const method = 'get'
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
    
    return { method, url, headers: enhanced_headers }
}
export const update_inventory_for_an_item_ca = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    query: {
        "sku": string
    },
    data: any,
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/inventory${json_to_query_string(query)}`
    const method = 'put'
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
    
    return { method, url, data, headers: enhanced_headers }
}
export const update_bulk_inventory = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    query: {
        "feedType": string
    },
    data: any,
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/feeds${json_to_query_string(query)}`
    const method = 'post'
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
    
    return { method, url, data, headers: enhanced_headers }
}
    
/* Item Management */
// The Item Management APIs enable you to set up and manage items on Walmart.com. Once you have completed Registration and have access to your Consumer ID and Private Key, you can get started with the integration process
export const get_all_items = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    query: {
        "nextCursor"?: string,
		"sku"?: string,
		"offset"?: string,
		"limit"?: string
    },
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/items${json_to_query_string(query)}`
    const method = 'get'
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
    
    return { method, url, headers: enhanced_headers }
}
export const get_an_item = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    path: {
        "sku": string
    },
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/items/${path.sku}`
    const method = 'get'
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
    
    return { method, url, headers: enhanced_headers }
}
export const retire_an_item = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    path: {
        "SKU": string
    },
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/items/${path.SKU}`
    const method = 'delete'
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
    
    return { method, url, headers: enhanced_headers }
}
export const bulk_item_setup_ca = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    query: {
        "feedType": string
    },
    data: any,
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/feeds${json_to_query_string(query)}`
    const method = 'post'
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
    
    return { method, url, data, headers: enhanced_headers }
}
    
/* Order Management */
// The Walmart Order Management APIs help Sellers to manage customer’s Sales Orders and to stay up-to-date on orders fulfillment, which orders to fulfill, and when to fulfill them.
export const get_all_released_orders = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    query: {
        "createdStartDate"?: string,
		"createdEndDate"?: string,
		"limit"?: string,
		"productInfo"?: string
    },
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/orders/released${json_to_query_string(query)}`
    const method = 'get'
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
    
    return { method, url, headers: enhanced_headers }
}
export const get_all_orders = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    query: {
        "sku"?: string,
		"customerOrderId"?: string,
		"purchaseOrderId"?: string,
		"status"?: string,
		"createdStartDate": string,
		"createdEndDate"?: string,
		"fromExpectedShipDate"?: string,
		"toExpectedShipDate"?: string,
		"limit"?: string,
		"productInfo"?: string
    },
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/orders${json_to_query_string(query)}`
    const method = 'get'
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
    
    return { method, url, headers: enhanced_headers }
}
export const get_an_order = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    query: {
        "productInfo"?: string
    },
    path: {
        "purchaseOrderId": string
    },
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/orders/${path.purchaseOrderId}${json_to_query_string(query)}`
    const method = 'get'
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
    
    return { method, url, headers: enhanced_headers }
}
export const cancel_order_lines_ca = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    path: {
        "purchaseOrderId": string
    },
    data: any,
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/orders/${path.purchaseOrderId}/cancel`
    const method = 'post'
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
    
    return { method, url, data, headers: enhanced_headers }
}
export const refund_order_lines_ca = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    path: {
        "purchaseOrderId": string
    },
    data: any,
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/orders/${path.purchaseOrderId}/refund`
    const method = 'post'
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
    
    return { method, url, data, headers: enhanced_headers }
}
export const shipping_updates_ca = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    path: {
        "purchaseOrderId": string
    },
    data: any,
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/orders/${path.purchaseOrderId}/shipping`
    const method = 'post'
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
    
    return { method, url, data, headers: enhanced_headers }
}
export const acknowledge_orders_ca = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    path: {
        "purchaseOrderId": string
    },
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/orders/${path.purchaseOrderId}/acknowledge`
    const method = 'post'
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
    
    return { method, url, headers: enhanced_headers }
}
    
/* Price Management */
// The price is a fundamental building block for your listing on Walmart.com. You can use the price management APIs to set up and manage the price for a given item
export const update_price_ca = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    data: any,
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/price`
    const method = 'put'
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
    
    return { method, url, data, headers: enhanced_headers }
}
export const price_bulk_uploads = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    query: {
        "feedType": string
    },
    data: any,
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/feeds${json_to_query_string(query)}`
    const method = 'post'
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
    
    return { method, url, data, headers: enhanced_headers }
}
    
/* Promotion Management */
// Sellers can set regular or promotional prices for their items. Setting the Promotional prices is an option to create unique pricing for events such as clearance sales or to call out a comparison price
export const update_promotional_prices_ca = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    query: {
        "promo": boolean
    },
    data: any,
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/price${json_to_query_string(query)}`
    const method = 'put'
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
    
    return { method, url, data, headers: enhanced_headers }
}
export const get_promotional_prices = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    path: {
        "sku": string
    },
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/promo/sku/${path.sku}`
    const method = 'get'
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
    
    return { method, url, headers: enhanced_headers }
}
export const update_bulk_promotional_price = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    query: {
        "feedType": string
    },
    data: any,
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/ca/feeds${json_to_query_string(query)}`
    const method = 'post'
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
    
    return { method, url, data, headers: enhanced_headers }
}
    
/* Item report */
// Returns all the information associated with Seller's items that are set up on Walmart’s platform.
export const get_item_report = (
    auth: {
        walmart_consumer: string,
        walmart_channel: string,
        walmart_secret: string,
    },
    query: {
        "type": string,
		"version"?: string
    },
    headers: Partial<{
        "WM_CONSUMER.CHANNEL.TYPE": string,
		"WM_QOS.CORRELATION_ID": string,
		"WM_SVC.NAME": string,
		"WM_SEC.TIMESTAMP": string,
		"WM_SEC.AUTH_SIGNATURE": string,
		"WM_CONSUMER.ID": string
    }>) => {
    const url = `https://marketplace.walmartapis.com/v3/getReport${json_to_query_string(query)}`
    const method = 'get'
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
    
    return { method, url, headers: enhanced_headers }
}
    