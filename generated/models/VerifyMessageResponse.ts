/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifyMessageResponse = {
    /**
     * The didUrl included on the jws object
     */
    didUrl?: string;
    /**
     * The did parsed from the didUrl
     */
    did?: string;
    /**
     * Result of jws verification
     */
    verified?: boolean;
    /**
     * The payload of the verified message
     */
    payload?: string;
};

