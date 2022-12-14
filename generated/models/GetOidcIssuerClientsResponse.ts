/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetOidcIssuerClientsResponse = {
    /**
     * Starting point for next cursor to use in a page
     */
    nextCursor?: string;
    data?: ({
        /**
         * Client id
         */
        id?: string;
        /**
         * Client secret
         */
        secret?: string;
    } & {
        /**
         * Meaningful name for this Client
         */
        name: string;
        /**
         * Redirection URI to which the response will be sent
         */
        redirectUris: Array<string>;
        /**
         * Determines the authorization processing flow
         */
        responseTypes?: Array<string>;
        /**
         * OAuth Grant Type
         */
        grantTypes?: Array<string>;
        /**
         * OAuth Token Endpoint Authentication Method
         */
        tokenEndpointAuthMethod?: string;
        /**
         * Algorithm must match configured jwks, defaults to ES256
         */
        idTokenSignedResponseAlg?: string;
        applicationType?: string;
    });
};

