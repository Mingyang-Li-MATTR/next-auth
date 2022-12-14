/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetOidcVerifiersResponse = {
    /**
     * Starting point for next cursor to use in a page
     */
    nextCursor?: string;
    data?: ({
        /**
         * Verifier id
         */
        id?: string;
    } & {
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
    });
};

