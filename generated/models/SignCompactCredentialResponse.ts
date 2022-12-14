/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Sign Compact Credential response
 */
export type SignCompactCredentialResponse = {
    id: string;
    /**
     * URL Encoded Compact Credential payload
     */
    encoded: string;
    /**
     * CompactCredentialSignResponse
     */
    decoded: Record<string, (string | number | boolean)>;
};

