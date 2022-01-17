Walmart Marketplace CA
Generated Connector

The library is a set of typed functions
which accept walmart inputs and return
axios parameters to make the request

You should use the output in an axios function
and don't forget to:

Rate limit
Handle errors
Time requests
Log requests

```ts
// Docs: https://developer.walmart.com/ca/ca-mp/
// https://seller.walmart.ca/items-and-inventory/feed-status/item
import * as walmart from './walmart_connector'

export const main = async () => {
    const auth = {
        walmart_channel: '***',
        walmart_secret: '***',
        walmart_consumer: '***'
    }
    const headers: any = { accept: 'application/json' }

    const body = Buffer.from(JSON.stringify({
        InventoryHeader: {
            version: '1.4'
        },
        Inventory: [
            {
                sku: 'mysku',
                quantity: {
                    unit: 'EACH',
                    amount: '12'
                },
                fulfillmentLagTime: 2
            }
        ]
    }))

    const req =  walmart.update_bulk_inventory(auth,{feedType: 'inventory'}, body, headers)
    walmart.update_bulk_inventory

    const feed_response = await axios(req)

    let feedId = feed_response.data.feedId
    console.log(feed_id)

    // // @ts-ignore
    // const response2 = await doRequest(`/v3/ca/feeds/${feedId}?includeDetails=true`, 'get')
    // const queryString = json_to_query_string({
    //     createdStartDate: '2022-01-01',
    //     createdEndDate: '2022-01-31',
    //     productInfo: true
    // })
    // const orderResponse = await doRequest(
    //     `/v3/ca/orders${queryString}`,
    //     'get',
    //     {},
    //     { accept: 'application/json' }
    // )

    // const itemResponse = await doRequest('/v3/ca/items/2298', 'get')
    // const itemsResponse = await doRequest('/v3/ca/items', 'get')

    debugger
}

```