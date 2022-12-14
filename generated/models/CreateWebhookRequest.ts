/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateWebhookRequest = {
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
};

