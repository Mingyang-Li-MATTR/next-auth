/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OidcIssuersService {

    /**
     * Create an OIDC Issuer
     * Create a new OIDC Credential Issuer for this tenant.
     *
     * The Credential information defines a descriptive name for the Credential to be issued as well as the `issuerDid` and `type` that the issued Credential will contain. The `context` is used to define the JSON-LD schema for the JSON-LD terms.
     *
     * The Federated Provider details are used to obtain the values for the new credential. The OIDC provider will federate the authentication request to the OpenID Provider of the Issuer. The details of the Issuer OpenID Provider are provided in the `url`, `scope`, `clientId` and `clientSecret` attributes. If no `scope` is provided, the default value `openid profile email` will be used.
     *
     * > The `/.well-known/openid-configuration` endpoint of the federated provider needs to contain values for the `authorization_endpoint`, `token_endpoint` and `scopes_supported`.
     *
     * Claim mappings are used to map OpenID Connect terms used by federated providers and clients to JSON-LD terms used in a Credential. The defined claims are also used for display purposes in a client, like a Mobile Wallet.
     *
     * **ZKP-enabled BBS+ credential:**
     * If you wish to offer a ZKP-enabled Verifiable Credential, the provided issuer DID must be a DID with an `assertionMethod` using a key type of `bls12381g2`. The platform will automatically detect this capability and issue a ZKP-enabled BBS+ credential.
     *
     * > ZKP-enabled BBS+ credentials are an experimental feature, as the standard evolves credentials issued using the current BBS+ signature may cease to be able to be verified.
     *
     * @param requestBody The issuer payload
     * @returns any Issuer created
     * @throws ApiError
     */
    public static createOidcIssuer(
        requestBody: {
            /**
             * Credential information
             */
            credential: {
                /**
                 * The Issuer DID
                 */
                issuerDid: string;
                /**
                 * The location of the logo image. The supported formats are jpg, png, and svg.
                 */
                issuerLogoUrl?: string;
                /**
                 * The location of the icon image. The supported formats are jpg, png, and svg.
                 */
                issuerIconUrl?: string;
                /**
                 * Meaningful name for the Credential
                 */
                name: string;
                /**
                 * Description of the credential (a wallet must support W3C Credential Data Model v2 in order to display)
                 */
                description?: string;
                /**
                 * JSON-LD schema where the term is referenced
                 */
                context: Array<string>;
                /**
                 * The Credential Type
                 */
                type: (string | Array<string>);
                /**
                 * Includes optional credential branding properties.
                 */
                credentialBranding?: {
                    /**
                     * The background colour used for the credential card. The format is "#rrggbb" where "rrggbb" is a hex RGB triplet, such as "#FFCC00".
                     */
                    backgroundColor?: string;
                    /**
                     * The location of the watermark image. The supported formats are jpg, png, and svg.
                     */
                    watermarkImageUrl?: string;
                };
            };
            /**
             * Federated OIDC Provider details
             */
            federatedProvider: {
                /**
                 * Base url for provider well-known endpoint. Must not contain auth, or query parameters. Port and fragment parameters will be dropped. URL must use https and have a valid public TLD. Unicode will be converted to ASCII
                 */
                url: string;
                /**
                 * OIDC scope associated with claims in the provider
                 */
                scope?: Array<string>;
                /**
                 * Client ID configured in the provider
                 */
                clientId: string;
                /**
                 * Client secret configured in the provider
                 */
                clientSecret: string;
                /**
                 * IDP authentication mechanism used to get access token
                 */
                tokenEndpointAuthMethod?: string;
                /**
                 * Source of claims for issuing credentials
                 */
                claimsSource?: string;
            };
            /**
             * Parameters that should be included in the request to the IDP. Keys must be strings. Values of top level object keys must stringify to less than 1000 characters each
             */
            staticRequestParameters?: (string | number | boolean | any[]);
            /**
             * Parameters that can be provided by the client to be forwarded to the IDP. The forwarded parameter values are limited to under 1000 characters when stringified
             */
            forwardedRequestParameters?: Array<string>;
            /**
             * Map OpenID Connect terms to JSON-LD terms
             */
            claimMappings: Array<{
                /**
                 * The credential claim name in JSON-LD terms
                 */
                jsonLdTerm: string;
                /**
                 * The credential claim name in OIDC terms
                 */
                oidcClaim: string;
            }>;
        },
    ): CancelablePromise<({
        /**
         * Issuer id
         */
        id?: string;
        federatedProvider?: {
            /**
             * URL where the authorization code gets sent
             */
            callbackUrl?: string;
        };
    } & {
        /**
         * Credential information
         */
        credential: {
            /**
             * The Issuer DID
             */
            issuerDid: string;
            /**
             * The location of the logo image. The supported formats are jpg, png, and svg.
             */
            issuerLogoUrl?: string;
            /**
             * The location of the icon image. The supported formats are jpg, png, and svg.
             */
            issuerIconUrl?: string;
            /**
             * Meaningful name for the Credential
             */
            name: string;
            /**
             * Description of the credential (a wallet must support W3C Credential Data Model v2 in order to display)
             */
            description?: string;
            /**
             * JSON-LD schema where the term is referenced
             */
            context: Array<string>;
            /**
             * The Credential Type
             */
            type: (string | Array<string>);
            /**
             * Includes optional credential branding properties.
             */
            credentialBranding?: {
                /**
                 * The background colour used for the credential card. The format is "#rrggbb" where "rrggbb" is a hex RGB triplet, such as "#FFCC00".
                 */
                backgroundColor?: string;
                /**
                 * The location of the watermark image. The supported formats are jpg, png, and svg.
                 */
                watermarkImageUrl?: string;
            };
        };
        /**
         * Federated OIDC Provider details
         */
        federatedProvider: {
            /**
             * Base url for provider well-known endpoint. Must not contain auth, or query parameters. Port and fragment parameters will be dropped. URL must use https and have a valid public TLD. Unicode will be converted to ASCII
             */
            url: string;
            /**
             * OIDC scope associated with claims in the provider
             */
            scope?: Array<string>;
            /**
             * Client ID configured in the provider
             */
            clientId: string;
            /**
             * Client secret configured in the provider
             */
            clientSecret: string;
            /**
             * IDP authentication mechanism used to get access token
             */
            tokenEndpointAuthMethod?: string;
            /**
             * Source of claims for issuing credentials
             */
            claimsSource?: string;
        };
        /**
         * Parameters that should be included in the request to the IDP. Keys must be strings. Values of top level object keys must stringify to less than 1000 characters each
         */
        staticRequestParameters?: (string | number | boolean | any[]);
        /**
         * Parameters that can be provided by the client to be forwarded to the IDP. The forwarded parameter values are limited to under 1000 characters when stringified
         */
        forwardedRequestParameters?: Array<string>;
        /**
         * Map OpenID Connect terms to JSON-LD terms
         */
        claimMappings: Array<{
            /**
             * The credential claim name in JSON-LD terms
             */
            jsonLdTerm: string;
            /**
             * The credential claim name in OIDC terms
             */
            oidcClaim: string;
        }>;
    })> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ext/oidc/v1/issuers',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Retrieve list of OIDC Issuers
     * Returns a list of all OIDC Issuers in the Tenant.
     *
     * @param limit Range size of returned issuer entries, default 100
     * @param cursor Starting point for the range of issuer entries
     * @returns any Returns a page of issuers
     * @throws ApiError
     */
    public static getOidcIssuers(
        limit?: number,
        cursor?: string,
    ): CancelablePromise<{
        /**
         * Starting point for next cursor to use in a page
         */
        nextCursor?: string;
        data?: ({
            /**
             * Issuer id
             */
            id?: string;
            federatedProvider?: {
                /**
                 * URL where the authorization code gets sent
                 */
                callbackUrl?: string;
            };
        } & {
            /**
             * Credential information
             */
            credential: {
                /**
                 * The Issuer DID
                 */
                issuerDid: string;
                /**
                 * The location of the logo image. The supported formats are jpg, png, and svg.
                 */
                issuerLogoUrl?: string;
                /**
                 * The location of the icon image. The supported formats are jpg, png, and svg.
                 */
                issuerIconUrl?: string;
                /**
                 * Meaningful name for the Credential
                 */
                name: string;
                /**
                 * Description of the credential (a wallet must support W3C Credential Data Model v2 in order to display)
                 */
                description?: string;
                /**
                 * JSON-LD schema where the term is referenced
                 */
                context: Array<string>;
                /**
                 * The Credential Type
                 */
                type: (string | Array<string>);
                /**
                 * Includes optional credential branding properties.
                 */
                credentialBranding?: {
                    /**
                     * The background colour used for the credential card. The format is "#rrggbb" where "rrggbb" is a hex RGB triplet, such as "#FFCC00".
                     */
                    backgroundColor?: string;
                    /**
                     * The location of the watermark image. The supported formats are jpg, png, and svg.
                     */
                    watermarkImageUrl?: string;
                };
            };
            /**
             * Federated OIDC Provider details
             */
            federatedProvider: {
                /**
                 * Base url for provider well-known endpoint. Must not contain auth, or query parameters. Port and fragment parameters will be dropped. URL must use https and have a valid public TLD. Unicode will be converted to ASCII
                 */
                url: string;
                /**
                 * OIDC scope associated with claims in the provider
                 */
                scope?: Array<string>;
                /**
                 * Client ID configured in the provider
                 */
                clientId: string;
                /**
                 * Client secret configured in the provider
                 */
                clientSecret: string;
                /**
                 * IDP authentication mechanism used to get access token
                 */
                tokenEndpointAuthMethod?: string;
                /**
                 * Source of claims for issuing credentials
                 */
                claimsSource?: string;
            };
            /**
             * Parameters that should be included in the request to the IDP. Keys must be strings. Values of top level object keys must stringify to less than 1000 characters each
             */
            staticRequestParameters?: (string | number | boolean | any[]);
            /**
             * Parameters that can be provided by the client to be forwarded to the IDP. The forwarded parameter values are limited to under 1000 characters when stringified
             */
            forwardedRequestParameters?: Array<string>;
            /**
             * Map OpenID Connect terms to JSON-LD terms
             */
            claimMappings: Array<{
                /**
                 * The credential claim name in JSON-LD terms
                 */
                jsonLdTerm: string;
                /**
                 * The credential claim name in OIDC terms
                 */
                oidcClaim: string;
            }>;
        });
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ext/oidc/v1/issuers',
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
     * Retrieve an OIDC Issuer
     * Retrieve an OIDC Issuer by providing an Issuer ID.
     * @param id Issuer ID
     * @returns any Retrieved Issuer
     * @throws ApiError
     */
    public static getOidcIssuer(
        id: string,
    ): CancelablePromise<({
        /**
         * Issuer id
         */
        id?: string;
        federatedProvider?: {
            /**
             * URL where the authorization code gets sent
             */
            callbackUrl?: string;
        };
    } & {
        /**
         * Credential information
         */
        credential: {
            /**
             * The Issuer DID
             */
            issuerDid: string;
            /**
             * The location of the logo image. The supported formats are jpg, png, and svg.
             */
            issuerLogoUrl?: string;
            /**
             * The location of the icon image. The supported formats are jpg, png, and svg.
             */
            issuerIconUrl?: string;
            /**
             * Meaningful name for the Credential
             */
            name: string;
            /**
             * Description of the credential (a wallet must support W3C Credential Data Model v2 in order to display)
             */
            description?: string;
            /**
             * JSON-LD schema where the term is referenced
             */
            context: Array<string>;
            /**
             * The Credential Type
             */
            type: (string | Array<string>);
            /**
             * Includes optional credential branding properties.
             */
            credentialBranding?: {
                /**
                 * The background colour used for the credential card. The format is "#rrggbb" where "rrggbb" is a hex RGB triplet, such as "#FFCC00".
                 */
                backgroundColor?: string;
                /**
                 * The location of the watermark image. The supported formats are jpg, png, and svg.
                 */
                watermarkImageUrl?: string;
            };
        };
        /**
         * Federated OIDC Provider details
         */
        federatedProvider: {
            /**
             * Base url for provider well-known endpoint. Must not contain auth, or query parameters. Port and fragment parameters will be dropped. URL must use https and have a valid public TLD. Unicode will be converted to ASCII
             */
            url: string;
            /**
             * OIDC scope associated with claims in the provider
             */
            scope?: Array<string>;
            /**
             * Client ID configured in the provider
             */
            clientId: string;
            /**
             * Client secret configured in the provider
             */
            clientSecret: string;
            /**
             * IDP authentication mechanism used to get access token
             */
            tokenEndpointAuthMethod?: string;
            /**
             * Source of claims for issuing credentials
             */
            claimsSource?: string;
        };
        /**
         * Parameters that should be included in the request to the IDP. Keys must be strings. Values of top level object keys must stringify to less than 1000 characters each
         */
        staticRequestParameters?: (string | number | boolean | any[]);
        /**
         * Parameters that can be provided by the client to be forwarded to the IDP. The forwarded parameter values are limited to under 1000 characters when stringified
         */
        forwardedRequestParameters?: Array<string>;
        /**
         * Map OpenID Connect terms to JSON-LD terms
         */
        claimMappings: Array<{
            /**
             * The credential claim name in JSON-LD terms
             */
            jsonLdTerm: string;
            /**
             * The credential claim name in OIDC terms
             */
            oidcClaim: string;
        }>;
    })> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ext/oidc/v1/issuers/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `The Issuer is not found`,
            },
        });
    }

    /**
     * Update an OIDC Issuer
     * Update an OIDC Credential Issuer.
     *
     * The `issuerDid` is the Issuer DID that will be used in the issued Credential.
     *
     * The `credentialName` describes the Credential and `credentialTypes` defines the Credential Types for the issued Credential.
     *
     * In order for the tenant to issue a new credential, the OIDC bridge will federate the authentication request to the OpenID Provider of the Issuer. The details of the Issuer OpenID Provider are provided in the `federatedProviderUrl`, `federatedProviderScope`, `federatedProviderClientId` and `federatedProviderClientSecret` attributes. If no `federatedProviderScope` is provided, the default value `openid profile email` will be used.
     *
     * > The `/.well-known/openid-configuration` endpoint of the federated provider needs to contain values for the `authorization_endpoint`, `token_endpoint` and `scopes_supported` which needs to contain `openid` and `profile`.
     *
     * Claim mappings are used to map OpenID Connect terms used by federated providers and clients to JSON-LD terms used in a Credential. The `jsonLdContext` is used to define the JSON-LD schema for the JSON-LD terms. The defined claims are also used for display purposes in a client, like a Mobile Wallet.
     *
     * **ZKP-enabled BBS+ credential:**
     * If you wish to offer a ZKP-enabled Verifiable Credential, the provided issuer DID must be a DID with an `assertionMethod` using a key type of `bls12381g2`. The platform will automatically detect this capability and issue a ZKP-enabled BBS+ credential.
     *
     * > ZKP-enabled BBS+ credentials are an experimental feature, as the standard evolves credentials issued using the current BBS+ signature may cease to be able to be verified.
     *
     * @param id Issuer ID
     * @param requestBody Update an Issuer
     * @returns any Successfully updated the Issuer
     * @throws ApiError
     */
    public static updateOidcIssuer(
        id: string,
        requestBody: {
            /**
             * Credential information
             */
            credential: {
                /**
                 * The Issuer DID
                 */
                issuerDid: string;
                /**
                 * The location of the logo image. The supported formats are jpg, png, and svg.
                 */
                issuerLogoUrl?: string;
                /**
                 * The location of the icon image. The supported formats are jpg, png, and svg.
                 */
                issuerIconUrl?: string;
                /**
                 * Meaningful name for the Credential
                 */
                name: string;
                /**
                 * Description of the credential (a wallet must support W3C Credential Data Model v2 in order to display)
                 */
                description?: string;
                /**
                 * JSON-LD schema where the term is referenced
                 */
                context: Array<string>;
                /**
                 * The Credential Type
                 */
                type: (string | Array<string>);
                /**
                 * Includes optional credential branding properties.
                 */
                credentialBranding?: {
                    /**
                     * The background colour used for the credential card. The format is "#rrggbb" where "rrggbb" is a hex RGB triplet, such as "#FFCC00".
                     */
                    backgroundColor?: string;
                    /**
                     * The location of the watermark image. The supported formats are jpg, png, and svg.
                     */
                    watermarkImageUrl?: string;
                };
            };
            /**
             * Federated OIDC Provider details
             */
            federatedProvider: {
                /**
                 * Base url for provider well-known endpoint. Must not contain auth, or query parameters. Port and fragment parameters will be dropped. URL must use https and have a valid public TLD. Unicode will be converted to ASCII
                 */
                url: string;
                /**
                 * OIDC scope associated with claims in the provider
                 */
                scope?: Array<string>;
                /**
                 * Client ID configured in the provider
                 */
                clientId: string;
                /**
                 * Client secret configured in the provider
                 */
                clientSecret: string;
                /**
                 * IDP authentication mechanism used to get access token
                 */
                tokenEndpointAuthMethod?: string;
                /**
                 * Source of claims for issuing credentials
                 */
                claimsSource?: string;
            };
            /**
             * Parameters that should be included in the request to the IDP. Keys must be strings. Values of top level object keys must stringify to less than 1000 characters each
             */
            staticRequestParameters?: (string | number | boolean | any[]);
            /**
             * Parameters that can be provided by the client to be forwarded to the IDP. The forwarded parameter values are limited to under 1000 characters when stringified
             */
            forwardedRequestParameters?: Array<string>;
            /**
             * Map OpenID Connect terms to JSON-LD terms
             */
            claimMappings: Array<{
                /**
                 * The credential claim name in JSON-LD terms
                 */
                jsonLdTerm: string;
                /**
                 * The credential claim name in OIDC terms
                 */
                oidcClaim: string;
            }>;
        },
    ): CancelablePromise<({
        /**
         * Issuer id
         */
        id?: string;
        federatedProvider?: {
            /**
             * URL where the authorization code gets sent
             */
            callbackUrl?: string;
        };
    } & {
        /**
         * Credential information
         */
        credential: {
            /**
             * The Issuer DID
             */
            issuerDid: string;
            /**
             * The location of the logo image. The supported formats are jpg, png, and svg.
             */
            issuerLogoUrl?: string;
            /**
             * The location of the icon image. The supported formats are jpg, png, and svg.
             */
            issuerIconUrl?: string;
            /**
             * Meaningful name for the Credential
             */
            name: string;
            /**
             * Description of the credential (a wallet must support W3C Credential Data Model v2 in order to display)
             */
            description?: string;
            /**
             * JSON-LD schema where the term is referenced
             */
            context: Array<string>;
            /**
             * The Credential Type
             */
            type: (string | Array<string>);
            /**
             * Includes optional credential branding properties.
             */
            credentialBranding?: {
                /**
                 * The background colour used for the credential card. The format is "#rrggbb" where "rrggbb" is a hex RGB triplet, such as "#FFCC00".
                 */
                backgroundColor?: string;
                /**
                 * The location of the watermark image. The supported formats are jpg, png, and svg.
                 */
                watermarkImageUrl?: string;
            };
        };
        /**
         * Federated OIDC Provider details
         */
        federatedProvider: {
            /**
             * Base url for provider well-known endpoint. Must not contain auth, or query parameters. Port and fragment parameters will be dropped. URL must use https and have a valid public TLD. Unicode will be converted to ASCII
             */
            url: string;
            /**
             * OIDC scope associated with claims in the provider
             */
            scope?: Array<string>;
            /**
             * Client ID configured in the provider
             */
            clientId: string;
            /**
             * Client secret configured in the provider
             */
            clientSecret: string;
            /**
             * IDP authentication mechanism used to get access token
             */
            tokenEndpointAuthMethod?: string;
            /**
             * Source of claims for issuing credentials
             */
            claimsSource?: string;
        };
        /**
         * Parameters that should be included in the request to the IDP. Keys must be strings. Values of top level object keys must stringify to less than 1000 characters each
         */
        staticRequestParameters?: (string | number | boolean | any[]);
        /**
         * Parameters that can be provided by the client to be forwarded to the IDP. The forwarded parameter values are limited to under 1000 characters when stringified
         */
        forwardedRequestParameters?: Array<string>;
        /**
         * Map OpenID Connect terms to JSON-LD terms
         */
        claimMappings: Array<{
            /**
             * The credential claim name in JSON-LD terms
             */
            jsonLdTerm: string;
            /**
             * The credential claim name in OIDC terms
             */
            oidcClaim: string;
        }>;
    })> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/ext/oidc/v1/issuers/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `The Issuer is not found`,
            },
        });
    }

    /**
     * Remove an OIDC Issuer
     * Removes an OIDC Issuer by providing an Issuer ID.
     *
     * @param id Issuer ID
     * @returns void
     * @throws ApiError
     */
    public static deleteOidcIssuer(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/ext/oidc/v1/issuers/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `The Issuer is not found`,
            },
        });
    }

    /**
     * Create an OpenId credential offer payload
     * Create a payload that can form a message in the JWM format that can be used in sending notifications to subjects to start an OIDC Issuer credential offer flow.
     *
     * - Use a DID setup on the tenant as the `from` value, this should be a DID with a key type suitable for messaging (not a BLS key type)
     * - Include a SubjectDID as the `to` value - this value is only used in the message construction, it should be the same value as the intended recipient.
     *
     * To send a notification to the Subject DID holder, use the payload with the /messaging/encrypt and /messaging/send endpoints.
     * @param id Issuer ID
     * @param requestBody Create a message payload for an Offer
     * @returns any Created
     * @throws ApiError
     */
    public static createOidcOfferPayload(
        id: string,
        requestBody?: {
            /**
             * DID on the tenant used in a message
             */
            from: string;
            /**
             * List of SubjectDIDs
             */
            to: Array<string>;
        },
    ): CancelablePromise<{
        id: string;
        type: string;
        to: Array<any>;
        from: string;
        created_time: number;
        body: {
            uri: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ext/oidc/v1/issuers/{id}/offers',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
