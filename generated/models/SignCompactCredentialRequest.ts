/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Sign Compact Credential Request
 */
export type SignCompactCredentialRequest = {
    /**
     * CompactCredentialSignRequest
     */
    payload: Record<string, (string | number | boolean)>;
    revocable?: boolean;
};

