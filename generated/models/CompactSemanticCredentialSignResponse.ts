/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CompactSemanticCredentialSignResponse
 */
export type CompactSemanticCredentialSignResponse = {
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

