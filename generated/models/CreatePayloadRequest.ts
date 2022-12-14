/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Create a payload
 */
export type CreatePayloadRequest = {
    /**
     * DID on the tenant used in a message
     */
    from: string;
    /**
     * List of SubjectDIDs
     */
    to: Array<string>;
};

