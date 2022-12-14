/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateOidcIssuerClientResponse = ({
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

