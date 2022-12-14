/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateOidcVerifierRequest = {
    /**
     * The Verifier DID
     */
    verifierDid: string;
    /**
     * Presentation Template ID used to request certain credentials
     */
    presentationTemplateId: string;
    /**
     * Map OpenID Connect terms to JSON-LD terms
     */
    claimMappings: Array<{
        /**
         * Fully qualified JSON-LD term
         */
        jsonLdFqn: string;
        /**
         * The credential claim name in OIDC terms
         */
        oidcClaim: string;
    }>;
};

