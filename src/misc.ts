
const rate_limits = {
    feeds: {
        // Max requests | Max size per call | Processing time per request
        items: ['10 per hour', '25MB', '4 hours'],
        prices: ['10 per hour', '10MB', '30 mins'],
        promotion: ['6 per day', '10MB', '30 mins'],
        inventory: ['10 per hour', '5MB', '30 mins']
    }
}

/* Feeds */
// Recommended Calling Interval
// If a request returns a Feed status of INPROGRESS, you should continue calling until a different status is retrieved. The recommended calling intervals for Item is 15 minutes, 1 hour, 2 hours and every 4 hours.
const feed_statuses = {
    RECEIVED:
        'The feed has been received by the Walmart gateway but the(asynchronous) processing has not yet started.',
    INPROGRESS: 'The element processing in the feed has begun and is not yet completed.',
    PROCESSED:
        'The element processing in the feed is complete.Nothing is implied about the status of the individual elements.',
    ERROR: 'The feed, as a whole, has failed.No elements within the feed were processed.'
}

// Ingestion status (per object)
const ingestion_statuses = {
    DATA_ERROR:
        'This error means that there is either a malformed XML error or some system data is missing. If the XML passes validation against the relevant XSD, and the error persists, contact Walmart Partner Support.',
    SYSTEM_ERROR:
        'This error is returned when a downstream Walmart system returns an error to an attempted operation during submission. If this error occurs, wait for at least an hour and then try again. If the error persists contact Walmart Partner Support.',
    TIMEOUT_ERROR:
        'This error is returned when a downstream Walmart system is not available during ingestion. If this error occurs, wait for at least an hour and try again. If the error persists, contact Partner Support.',
    SUCCESS: 'The object has successfully been ingested.',
    INPROGRESS: 'The item ingestion has not been completed.'
}
