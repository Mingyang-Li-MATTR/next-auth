/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetWebhooksResponse = {
    data?: Array<{
        /**
         * Webhook id
         */
        id?: string;
        /**
         * List of events that cause the webhook to fire
         */
        events?: Array<string>;
        /**
         * The destination url for the webhook
         */
        url?: string;
        /**
         * Whether or not the webhook is disabled
         */
        disabled?: boolean;
    }>;
    nextCursor?: string;
};
