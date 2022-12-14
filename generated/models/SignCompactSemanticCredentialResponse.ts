/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Sign Compact Semantic Credential response
 */
export type SignCompactSemanticCredentialResponse = {
    id: string;
    /**
     * URL Encoded Compact Credential payload
     */
    encoded: string;
    /**
     * CompactSemanticCredentialSignResponse
     */
    decoded: {
        iss: string;
        jti: string;
        nbf: number;
        exp?: number;
        iat?: number;
        aud?: string;
        sub?: string;
        vc: {
            '@context': Array<string>;
            type: Array<string>;
            credentialSubject: Record<string, (string | number | boolean)>;
        };
        status?: {
            url?: string;
            index?: number;
        };
    };
};

