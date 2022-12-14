/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OidcVerifiersService {

    /**
     * Create an OIDC Verifier
     * Create a new OIDC Credential Verifier for this tenant.
     *
     * The `verifierDid` is the Verifier DID that will be used to securely send the Credential to.
     *
     * The `presentationTemplateId` references the Presentation Template that defines what Credential is being requested for presentation.
     *
     * Claim mappings are used to map JSON-LD terms used in a Credential to OpenID Connect terms used by clients.
     *
     * @param requestBody The verifier payload
     * @returns any Verifier created
     * @throws ApiError
     */
    public static createOidcVerifier(
        requestBody: {
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
        },
    ): CancelablePromise<({
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
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ext/oidc/v1/verifiers',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Retrieve list of OIDC Verifiers
     * Returns a list of all OIDC Verifiers in the Tenant.
     *
     * @param limit Range size of returned verifier entries, default 100
     * @param cursor Starting point for the range of verifier entries
     * @returns any Returns a page of Verifiers
     * @throws ApiError
     */
    public static getOidcVerifiers(
        limit?: number,
        cursor?: string,
    ): CancelablePromise<{
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
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ext/oidc/v1/verifiers',
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
     * Retrieve an OIDC Verifier
     * Retrieve an OIDC Verifier by providing a Verifier ID.
     * @param id Verifier ID
     * @returns any Retrieved Verifier
     * @throws ApiError
     */
    public static getOidcVerifier(
        id: string,
    ): CancelablePromise<({
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
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ext/oidc/v1/verifiers/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `The Verifier is not found`,
            },
        });
    }

    /**
     * Update an OIDC Verifier
     * Update an OIDC Credential Verifier.
     *
     * The `verifierDid` is the Verifier DID that will be used to securely send the Credential to.
     *
     * The `presentationTemplateId` references the Presentation Template that defines what Credential is being requested for presentation.
     *
     * Claim mappings are used to map JSON-LD terms used in a Credential to OpenID Connect terms used by clients.  The `jsonLdContext` is used to define the JSON-LD schema for the JSON-LD terms.
     *
     * @param id Verifier ID
     * @param requestBody Update a verifier
     * @returns any Successfully updated a Verifier
     * @throws ApiError
     */
    public static updateOidcVerifier(
        id: string,
        requestBody: {
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
        },
    ): CancelablePromise<({
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
    })> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/ext/oidc/v1/verifiers/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `The Verifier is not found`,
            },
        });
    }

    /**
     * Remove an OIDC Verifier
     * Removes an OIDC Verifier by providing a Verifier ID.
     *
     * @param id Verifier ID
     * @returns void
     * @throws ApiError
     */
    public static deleteOidcVerifier(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/ext/oidc/v1/verifiers/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `The Verifier is not found`,
            },
        });
    }

}
