/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OidcVerifierClientService {

    /**
     * Create a Client
     * Relying party clients are required to be created in the system for Authorization and VC Verify flows that are enabled through OIDC.
     *
     * The Create Client endpoint accepts OpenID Connect standard registration parameters.
     *
     * > When dealing with personal identity information it is strongly recommended to follow the Authorization Code Flow which ensures sensitive data is transmitted via the `/token` endpoint back-channel.
     *
     * @param id Verifier ID
     * @param requestBody The client payload
     * @returns any Client created
     * @throws ApiError
     */
    public static createOidcVerifierClient(
        id: string,
        requestBody: {
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
            /**
             * The logo to display above the QR code
             */
            logoUri?: string;
        },
    ): CancelablePromise<({
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
        /**
         * The logo to display above the QR code
         */
        logoUri?: string;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ext/oidc/v1/verifiers/{id}/clients',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Retrieve list of Clients
     * Returns a list of all OIDC Verifier Clients in the Tenant.
     *
     * @param id Verifier ID
     * @param limit Range size of returned client entries, default 100
     * @param cursor Starting point for the range of client entries
     * @returns any Returns a page of clients
     * @throws ApiError
     */
    public static getOidcVerifierClients(
        id: string,
        limit?: number,
        cursor?: string,
    ): CancelablePromise<{
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
            /**
             * The logo to display above the QR code
             */
            logoUri?: string;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ext/oidc/v1/verifiers/{id}/clients',
            path: {
                'id': id,
            },
            query: {
                'limit': limit,
                'cursor': cursor,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Retrieve a Client
     * Retrieve an OIDC Verifier Client by providing a Client ID.
     * @param id Verifier ID
     * @param clientId Client ID
     * @returns any Retrieved Client
     * @throws ApiError
     */
    public static getOidcVerifierClient(
        id: string,
        clientId: string,
    ): CancelablePromise<({
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
        /**
         * The logo to display above the QR code
         */
        logoUri?: string;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ext/oidc/v1/verifiers/{id}/clients/{clientId}',
            path: {
                'id': id,
                'clientId': clientId,
            },
            errors: {
                400: `Bad Request`,
                404: `The Client is not found`,
            },
        });
    }

    /**
     * Update a Client
     * Update an OIDC Verifier Client.
     *
     * The Client endpoint accepts OpenID Connect standard registration parameters.
     *
     * > When dealing with personal identity information it is strongly recommended to follow the Authorization Code Flow which ensures sensitive data is transmitted via the `/token` endpoint back-channel.
     *
     * @param id Verifier ID
     * @param clientId Client ID
     * @param requestBody Update a client
     * @returns any Successfully updated a Client
     * @throws ApiError
     */
    public static updateOidcVerifierClient(
        id: string,
        clientId: string,
        requestBody: {
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
            /**
             * The logo to display above the QR code
             */
            logoUri?: string;
        },
    ): CancelablePromise<({
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
        /**
         * The logo to display above the QR code
         */
        logoUri?: string;
    })> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/ext/oidc/v1/verifiers/{id}/clients/{clientId}',
            path: {
                'id': id,
                'clientId': clientId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `The Client is not found`,
            },
        });
    }

    /**
     * Remove a Client
     * Removes an OIDC Verifier Client by providing a Client ID.
     *
     * @param id Verifier ID
     * @param clientId Client ID
     * @returns void
     * @throws ApiError
     */
    public static deleteOidcVerifierClient(
        id: string,
        clientId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/ext/oidc/v1/verifiers/{id}/clients/{clientId}',
            path: {
                'id': id,
                'clientId': clientId,
            },
            errors: {
                400: `Bad Request`,
                404: `The Client is not found`,
            },
        });
    }

}
