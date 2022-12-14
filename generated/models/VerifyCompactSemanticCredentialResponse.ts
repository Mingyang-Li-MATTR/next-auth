/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * VerifyCompactSemanticCredentialResponse
 */
export type VerifyCompactSemanticCredentialResponse = {
    verified: boolean;
    /**
     * CompactSemanticCredentialSignResponse
     */
    decoded?: {
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
    error?: {
        type: string;
        message: string;
        details?: any;
    };
};

