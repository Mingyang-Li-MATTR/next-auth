/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * CompactSemanticCredentialSignRequest
 */
export type CompactSemanticCredentialSignRequest = {
    iss: string;
    /**
     * nbf is a mandatory field in W3C VC data model, if not provided, current timestamp will be used
     */
    nbf?: number;
    exp?: number;
    iat?: number;
    aud?: string;
    sub?: string;
    vc: {
        '@context'?: string;
        type?: string;
        credentialSubject: Record<string, (string | number | boolean)>;
    };
};

