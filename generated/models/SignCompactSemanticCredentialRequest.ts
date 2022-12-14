/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Sign Compact Semantic Credential Request
 */
export type SignCompactSemanticCredentialRequest = {
    /**
     * CompactSemanticCredentialSignRequest
     */
    payload: {
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
    revocable?: boolean;
};

