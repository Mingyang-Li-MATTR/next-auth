/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WebhooksService {

    /**
     * Create a webhook
     * Create a new webhook for this tenant.
     *
     * The list of `events` are the names of the events that will trigger the request to the designated url.
     *
     * The `url` entered is where the request will be sent.
     *
     * @param requestBody The webhook payload
     * @returns any Webhook created
     * @throws ApiError
     */
    public static createWebhook(
        requestBody: {
            /**
             * List of events that cause the webhook to fire
             */
            events: Array<'OidcIssuerCredentialIssued'>;
            /**
             * The destination url for the webhook
             */
            url: string;
            /**
             * Whether or not the webhook is disabled
             */
            disabled?: boolean;
        },
    ): CancelablePromise<{
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
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/v1/webhooks',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Get a list of webhooks
     * Retrieve a list of webhooks for this tenant.
     *
     * @param limit Range size of returned webhook entries, default 100
     * @param cursor Starting point for the range of webhook entries
     * @returns any Returns a page of webhooks
     * @throws ApiError
     */
    public static getWebhooks(
        limit?: number,
        cursor?: string,
    ): CancelablePromise<{
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
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/v1/webhooks',
            query: {
                'limit': limit,
                'cursor': cursor,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Get a webhook
     * Retrieve a specific webhook from this tenant.
     *
     * @param id Webhook ID
     * @returns any Returns a webhook
     * @throws ApiError
     */
    public static getWebhook(
        id: string,
    ): CancelablePromise<{
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
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/v1/webhooks/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Update a webhook
     * Update the following attributes on an existing webhook for this tenant.
     *
     * `events` an array of events that will trigger the webhook to the designated url.
     *
     * `url` for where the webhook will send the event payload.
     *
     * `disabled` that specifies whether or not the webhook will listen for events.
     * @param id Webhook ID
     * @param requestBody Update a Webhook
     * @returns any Successfully updated the webhook
     * @throws ApiError
     */
    public static updateWebhook(
        id: string,
        requestBody: {
            /**
             * List of events that cause the webhook to fire
             */
            events: Array<'OidcIssuerCredentialIssued'>;
            /**
             * The destination url for the webhook
             */
            url: string;
            /**
             * Whether or not the webhook is disabled
             */
            disabled?: boolean;
        },
    ): CancelablePromise<{
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
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/core/v1/webhooks/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `The webhook is not found`,
            },
        });
    }

    /**
     * Remove a webhook
     * Removes a specific webhook from this tenant.
     *
     * @param id Webhook ID
     * @returns void
     * @throws ApiError
     */
    public static deleteWebhook(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/core/v1/webhooks/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `The webhook is not found`,
            },
        });
    }

    /**
     * Get a list of webhook JWKs
     * Retrieve a list of webhook JWKs for this tenant.
     *
     * @returns any Returns a page of webhook JWKs
     * @throws ApiError
     */
    public static getWebhookJwks(): CancelablePromise<{
        keys?: Array<{
            /**
             * Key type
             */
            kty?: string;
            /**
             * Elliptic curve used to generate the key
             */
            crv?: string;
            'x'?: string;
            use?: string;
            /**
             * Key ID
             */
            kid?: string;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/v1/webhooks/jwks',
        });
    }

}
