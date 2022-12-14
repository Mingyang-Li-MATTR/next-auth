/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignMessageRequest = {
    /**
     * The did keyId that will be used to sign the message with.
     */
    didUrl: string;
    /**
     * A JSON Object plaintext message
     */
    payload: any;
};

