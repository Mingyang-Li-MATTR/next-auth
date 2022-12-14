/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * VerifyNZCPResponse
 */
export type VerifyNZCPResponse = {
    verified: boolean;
    /**
     * NZCPPayload
     */
    payload?: {
        givenName: string;
        familyName?: string;
        dob: string;
    };
    /**
     * Metadata response from NZCP verify
     */
    metadata?: {
        expiry?: string;
        notBefore?: string;
        id?: string;
        issuer?: string;
        type?: string;
    };
    error?: {
        type: string;
        message: string;
        details?: any;
    };
};

