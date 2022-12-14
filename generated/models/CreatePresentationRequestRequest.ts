/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreatePresentationRequestRequest = {
    /**
     * Challenge can be used to match the response to a request
     */
    challenge?: string;
    /**
     * DID of the Verifier
     */
    did: string;
    /**
     * Presentation Request Template id
     */
    templateId: string;
    /**
     * Unix timestamp in ms after which the request will be expired
     */
    expiresTime?: number;
    /**
     * Endpoint that will receive the Verifiable Presentation
     */
    callbackUrl?: string;
};

