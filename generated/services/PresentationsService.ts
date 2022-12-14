/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PresentationsService {

    /**
     * Create a presentation template
     * A Presentation Request Template defines which credentials are required for presentation. This is used to create the actual Presentation Request, which is used by the Mobile Wallet to select which credential it should display to the Holder, asking for confirmation to be used in the Presentation to be sent.
     *
     * ### Creating the payload
     * The `domain` value must always match the domain of the tenant being used.
     *
     * The `name` value is a convenience attribute for quickly determining the intended purpose of a created template.
     *
     * The Presentation Request `query` follows the  [Verifiable Presentation Request Specification](https://w3c-ccg.github.io/vp-request-spec/).
     *
     * The following query methods have been enabled:
     *
     * - Query by Example
     * - Query by Frame
     * - DID Auth
     *
     * Query can accept an array of types, which makes is possible to construct complex presentation requests from the template, however creating a valid Presentation Template does not ensure that logically valid Presentation Request is created or that a credential holder would be able to satisfy the request.
     *
     * ### Query by Example
     * This is a basic form of requesting credential information, it is possible to limit the request based on:
     * - Credential Type - based on the `type` of the credential
     * - Specific Trusted Issuer DIDs - an array of DIDs that the credential must have been issued by one of.
     *
     * ### Query by Frame
     * Used primary for requesting specific claims from ZKP-enabled credentials, only the claims requested in the frame will be derived and sent in the presentation.
     * - Credential Type - If an array should match the exact `type` used in the Credential otherwise a string is required to be `VerifiableCredential`.
     * - CredentialSubject - request specific claims from a credential subject.
     * - Specific Trusted Issuer DIDs - an array of DIDs that the credential must have been issued by one of, ensure this DID is of a BLS key type that has issued a ZKP-enabled credential.
     *
     * ### DID Auth
     * The type of Template will result in a DID Auth flow resulting in just the Subject DID from the holder to be provided in the response to the Presentation Request.
     * - DIDAuth
     *
     * ## Returns
     * On Success, the response from the endpoint always include the Presentation Template ID, this UUID is required in OIDC Bridge Verifier instance setup and using the Verify using a Callback method. The Presentation Request endpoint uses this ID to determine the exact type of request message to create.
     * @param requestBody The template
     * @returns any Template created
     * @throws ApiError
     */
    public static createPresTemplate(
        requestBody: {
            /**
             * Must match domain of the tenant
             */
            domain: string;
            /**
             * Internal descriptor only
             */
            name: string;
            query: Array<({
                type: string;
                credentialQuery: Array<{
                    required: boolean;
                    reason?: string;
                    example: Array<{
                        /**
                         * array of contexts
                         */
                        '@context': Array<any>;
                        type: (string | Array<string>);
                        /**
                         * array of trusted issuers
                         */
                        trustedIssuer: Array<{
                            required: boolean;
                            issuer: string;
                        }>;
                    }>;
                }>;
            } | {
                type: string;
                credentialQuery: Array<{
                    reason: string;
                    frame: {
                        '@context': Array<any>;
                        type: (string | Array<string>);
                        credentialSubject: {
                            '@explicit': boolean;
                            educationalCredentialAwarded: any;
                            familyName: any;
                        };
                    };
                    trustedIssuer: Array<{
                        required: boolean;
                        issuer: string;
                    }>;
                }>;
            } | {
                /**
                 * DIDAuth
                 */
                type: string;
            })>;
        },
    ): CancelablePromise<{
        id: string;
        domain: string;
        name: string;
        query: Array<({
            type: string;
            credentialQuery: Array<{
                required: boolean;
                reason?: string;
                example: Array<{
                    /**
                     * array of contexts
                     */
                    '@context': Array<any>;
                    type: (string | Array<string>);
                    /**
                     * array of trusted issuers
                     */
                    trustedIssuer: Array<{
                        required: boolean;
                        issuer: string;
                    }>;
                }>;
            }>;
        } | {
            type: string;
            credentialQuery: Array<{
                reason: string;
                frame: {
                    '@context': Array<any>;
                    type: (string | Array<string>);
                    credentialSubject: {
                        '@explicit': boolean;
                        educationalCredentialAwarded: any;
                        familyName: any;
                    };
                };
                trustedIssuer: Array<{
                    required: boolean;
                    issuer: string;
                }>;
            }>;
        } | {
            /**
             * DIDAuth
             */
            type: string;
        })>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/v1/presentations/templates',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request, Invalid request body`,
            },
        });
    }

    /**
     * Retrieve a list of presentation templates
     * Returns a list of all Presentation Templates on the tenant.
     *
     * Use the `name` value to determine the intended purpose of the templates.
     * @param limit Range size of the list, default 100
     * @param cursor Starting point for the list
     * @returns any All templates
     * @throws ApiError
     */
    public static retrievePresTemplates(
        limit: number = 100,
        cursor?: string,
    ): CancelablePromise<{
        /**
         * Starting point for next cursor to use in a page
         */
        nextCursor?: string;
        data?: Array<{
            id: string;
            domain: string;
            name: string;
            query: Array<({
                type: string;
                credentialQuery: Array<{
                    required: boolean;
                    reason?: string;
                    example: Array<{
                        /**
                         * array of contexts
                         */
                        '@context': Array<any>;
                        type: (string | Array<string>);
                        /**
                         * array of trusted issuers
                         */
                        trustedIssuer: Array<{
                            required: boolean;
                            issuer: string;
                        }>;
                    }>;
                }>;
            } | {
                type: string;
                credentialQuery: Array<{
                    reason: string;
                    frame: {
                        '@context': Array<any>;
                        type: (string | Array<string>);
                        credentialSubject: {
                            '@explicit': boolean;
                            educationalCredentialAwarded: any;
                            familyName: any;
                        };
                    };
                    trustedIssuer: Array<{
                        required: boolean;
                        issuer: string;
                    }>;
                }>;
            } | {
                /**
                 * DIDAuth
                 */
                type: string;
            })>;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/v1/presentations/templates',
            query: {
                'limit': limit,
                'cursor': cursor,
            },
        });
    }

    /**
     * Retrieve a presentation template
     * Retrieve a Presentation Template by providing a template ID
     * @param id Presentation template ID
     * @returns any Template returned
     * @throws ApiError
     */
    public static retrievePresTemplate(
        id: string,
    ): CancelablePromise<{
        id: string;
        domain: string;
        name: string;
        query: Array<({
            type: string;
            credentialQuery: Array<{
                required: boolean;
                reason?: string;
                example: Array<{
                    /**
                     * array of contexts
                     */
                    '@context': Array<any>;
                    type: (string | Array<string>);
                    /**
                     * array of trusted issuers
                     */
                    trustedIssuer: Array<{
                        required: boolean;
                        issuer: string;
                    }>;
                }>;
            }>;
        } | {
            type: string;
            credentialQuery: Array<{
                reason: string;
                frame: {
                    '@context': Array<any>;
                    type: (string | Array<string>);
                    credentialSubject: {
                        '@explicit': boolean;
                        educationalCredentialAwarded: any;
                        familyName: any;
                    };
                };
                trustedIssuer: Array<{
                    required: boolean;
                    issuer: string;
                }>;
            }>;
        } | {
            /**
             * DIDAuth
             */
            type: string;
        })>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/v1/presentations/templates/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid templateId parameter format`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete presentation template
     * Delete a Presentation Template
     * @param id Presentation template ID
     * @returns void
     * @throws ApiError
     */
    public static removePresTemplate(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/core/v1/presentations/templates/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid templateId parameter format`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Update presentation template
     * Update a Presentation Template using the template `id`.
     *
     * Follows the same structure as the Create a Presentation Template endpoint.
     * @param id Presentation template ID
     * @param requestBody
     * @returns any OK
     * @throws ApiError
     */
    public static updatePresTemplate(
        id: string,
        requestBody?: ({
            id?: string;
        } & {
            /**
             * Must match domain of the tenant
             */
            domain: string;
            /**
             * Internal descriptor only
             */
            name: string;
            query: Array<({
                type: string;
                credentialQuery: Array<{
                    required: boolean;
                    reason?: string;
                    example: Array<{
                        /**
                         * array of contexts
                         */
                        '@context': Array<any>;
                        type: (string | Array<string>);
                        /**
                         * array of trusted issuers
                         */
                        trustedIssuer: Array<{
                            required: boolean;
                            issuer: string;
                        }>;
                    }>;
                }>;
            } | {
                type: string;
                credentialQuery: Array<{
                    reason: string;
                    frame: {
                        '@context': Array<any>;
                        type: (string | Array<string>);
                        credentialSubject: {
                            '@explicit': boolean;
                            educationalCredentialAwarded: any;
                            familyName: any;
                        };
                    };
                    trustedIssuer: Array<{
                        required: boolean;
                        issuer: string;
                    }>;
                }>;
            } | {
                /**
                 * DIDAuth
                 */
                type: string;
            })>;
        }),
    ): CancelablePromise<{
        id: string;
        domain: string;
        name: string;
        query: Array<({
            type: string;
            credentialQuery: Array<{
                required: boolean;
                reason?: string;
                example: Array<{
                    /**
                     * array of contexts
                     */
                    '@context': Array<any>;
                    type: (string | Array<string>);
                    /**
                     * array of trusted issuers
                     */
                    trustedIssuer: Array<{
                        required: boolean;
                        issuer: string;
                    }>;
                }>;
            }>;
        } | {
            type: string;
            credentialQuery: Array<{
                reason: string;
                frame: {
                    '@context': Array<any>;
                    type: (string | Array<string>);
                    credentialSubject: {
                        '@explicit': boolean;
                        educationalCredentialAwarded: any;
                        familyName: any;
                    };
                };
                trustedIssuer: Array<{
                    required: boolean;
                    issuer: string;
                }>;
            }>;
        } | {
            /**
             * DIDAuth
             */
            type: string;
        })>;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/core/v1/presentations/templates/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Create a presentation request
     * Creates a short lived Presentation Request.
     *
     * ### Creating the payload
     * A `challenge` can be used to correlate requests
     * The `DID` is used a Verifier DID to prove the authenticity of the Request to holders
     * Any `callbackUrl` provide will be called on receipt of the response to the Presentation Request.
     * If no `expiresTime` is provided, a default of 5 minutes will be used.
     *
     * ### Returns
     * The `request` object holds the Presentation Request in the form of a constructed JWM message.
     *
     * The `request` needs to be [signed](#operation/signMessage) and conveyed to the holder, using techniques like a QR, deeplink or [encrypted](#operation/encryptMessage) and sent via a [notification message](#operation/sendMessage).
     *
     * @param requestBody The presentation request payload
     * @returns any Presentation Request created
     * @throws ApiError
     */
    public static createPresRequest(
        requestBody: {
            /**
             * Challenge can be used to match the response to a request
             */
            challenge?: string;
            /**
             * DID of the Verifier
             */
            did: string;
            /**
             * Presentation Request Template id
             */
            templateId: string;
            /**
             * Unix timestamp in ms after which the request will be expired
             */
            expiresTime?: number;
            /**
             * Endpoint that will receive the Verifiable Presentation
             */
            callbackUrl?: string;
        },
    ): CancelablePromise<{
        /**
         * Presentation Request id
         */
        id?: string;
        /**
         * Endpoint that will receive the Verifiable Presentation
         */
        callbackUrl?: string;
        /**
         * Presentation Request Details
         */
        request?: {
            /**
             * Presentation Request id
             */
            id?: string;
            /**
             * Presentation Request schema
             */
            type?: string;
            /**
             * Verifier DID
             */
            from?: string;
            /**
             * Creation time
             */
            created_time?: number;
            /**
             * Expiry time
             */
            expires_time?: number;
            /**
             * Endpoint that will receive the Verifiable Presentation
             */
            reply_url?: string;
            /**
             * Verifier DID
             */
            reply_to?: Array<string>;
            /**
             * Definition of what type of Credential is being requested
             */
            body?: ({
                id: string;
                domain: string;
                name: string;
                query: Array<({
                    type: string;
                    credentialQuery: Array<{
                        required: boolean;
                        reason?: string;
                        example: Array<{
                            /**
                             * array of contexts
                             */
                            '@context': Array<any>;
                            type: (string | Array<string>);
                            /**
                             * array of trusted issuers
                             */
                            trustedIssuer: Array<{
                                required: boolean;
                                issuer: string;
                            }>;
                        }>;
                    }>;
                } | {
                    type: string;
                    credentialQuery: Array<{
                        reason: string;
                        frame: {
                            '@context': Array<any>;
                            type: (string | Array<string>);
                            credentialSubject: {
                                '@explicit': boolean;
                                educationalCredentialAwarded: any;
                                familyName: any;
                            };
                        };
                        trustedIssuer: Array<{
                            required: boolean;
                            issuer: string;
                        }>;
                    }>;
                } | {
                    /**
                     * DIDAuth
                     */
                    type: string;
                })>;
            } & {
                /**
                 * Challenge to match the response to a request
                 */
                challenge?: string;
            });
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/v1/presentations/requests',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Create a presentation
     * Create a Verifiable Presentation on your tenant by providing one or more Verifiable Credentials.
     *
     * To successfully create a Verifiable Presentation using this endpoint you must supply;
     *
     * - a `holderDiDUrl` that is controlled by the tenant
     * - a credentials collection containing only subject-bound credentials
     * - a credentials collection containing only credentials with a subject DID that is controlled by the tenant
     *
     * The resulting Verifiable Presentation will contain a proof generated via the holder DID and each unique subject DID.
     *
     * > Non-subject-bound (bearer) credentials are not supported.
     *
     * @param requestBody
     * @returns any Presentation created
     * @throws ApiError
     */
    public static createPres(
        requestBody?: {
            domain: string;
            holderDidUrl: string;
            /**
             * Array of credentials for W3C VC Presentation or ignore for DIDAuth
             */
            credentials?: Array<{
                '@context': Array<string>;
                type: Array<string>;
                /**
                 * Includes issuer id (did) and its domain (inside name parameter)
                 */
                issuer?: ({
                    id?: string;
                    name?: string;
                } | string);
                issuanceDate: string;
                /**
                 * Credential status location information
                 */
                credentialStatus?: {
                    /**
                     * Unique ID for the credential status
                     */
                    id?: string;
                    /**
                     * Indicates that the status contains revocation information
                     */
                    type?: string;
                    /**
                     * The location within the revocation list for the credential
                     */
                    revocationListIndex?: number;
                    /**
                     * The location of the revocation list
                     */
                    revocationListCredential?: string;
                };
                credentialSubject: {
                    id?: string;
                    givenName?: string;
                    familyName?: string;
                    alumniOf?: string;
                };
                proof: {
                    type?: string;
                    created?: string;
                    /**
                     * Compact form of JWS
                     */
                    jws?: string;
                    proofPurpose?: string;
                    verificationMethod?: string;
                };
                /**
                 * Name of the credential (requires v2 data model)
                 */
                name?: string;
                /**
                 * Description of the credential (requires v2 data model)
                 */
                description?: string;
            }>;
            challenge: string;
        },
    ): CancelablePromise<{
        presentation: {
            '@context': Array<any>;
            type: Array<any>;
            verifiableCredential: Array<{
                '@context': Array<string>;
                type: Array<string>;
                /**
                 * Includes issuer id (did) and its domain (inside name parameter)
                 */
                issuer?: ({
                    id?: string;
                    name?: string;
                } | string);
                issuanceDate: string;
                /**
                 * Credential status location information
                 */
                credentialStatus?: {
                    /**
                     * Unique ID for the credential status
                     */
                    id?: string;
                    /**
                     * Indicates that the status contains revocation information
                     */
                    type?: string;
                    /**
                     * The location within the revocation list for the credential
                     */
                    revocationListIndex?: number;
                    /**
                     * The location of the revocation list
                     */
                    revocationListCredential?: string;
                };
                credentialSubject: {
                    id?: string;
                    givenName?: string;
                    familyName?: string;
                    alumniOf?: string;
                };
                proof: {
                    type?: string;
                    created?: string;
                    /**
                     * Compact form of JWS
                     */
                    jws?: string;
                    proofPurpose?: string;
                    verificationMethod?: string;
                };
                /**
                 * Name of the credential (requires v2 data model)
                 */
                name?: string;
                /**
                 * Description of the credential (requires v2 data model)
                 */
                description?: string;
            }>;
            id: string;
            holder: string;
            proof: Array<{
                type: string;
                created: string;
                challenge: string;
                domain: string;
                jws: string;
                proofPurpose: string;
                verificationMethod: string;
            }>;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/v1/presentations',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Verify a presentation
     * Use this endpoint to verify a Verifiable Presentation that has been generated by any platform that adheres to the [W3C Verifiable Credential Data Model](https://www.w3.org/TR/vc-data-model/#presentations).
     *
     * Provide a `presentation` in the Request
     *
     * The platform will perform these checks:
     *
     * Ensures the presentation conforms to the VC Data model
     * For each `verifiableCredential` objects;
     * - Issuer DID can be resolved
     * - JSON-LD context is valid for subject claims
     * - Proof is valid & the credential has not been tampered with
     * - Is not in a revoked status on a RevocationList2020
     * - The proof is valid for each subjectDID to prove ownership
     * Finally, a proof is valid for the holderDID for the Presentation
     *
     * ### Response
     *
     * If all checks are passed then the `verified` boolean is `true`
     * Otherwise it returns `false` with a basic `reason`
     *
     * > Further detailed reasons for verified false responses is a future roadmap item.
     *
     * @param requestBody Presentation to verify
     * @returns any Verify checks performed
     * @throws ApiError
     */
    public static verifyPres(
        requestBody?: {
            presentation: {
                '@context': Array<any>;
                type: Array<any>;
                verifiableCredential: Array<{
                    '@context': Array<string>;
                    type: Array<string>;
                    /**
                     * Includes issuer id (did) and its domain (inside name parameter)
                     */
                    issuer?: ({
                        id?: string;
                        name?: string;
                    } | string);
                    issuanceDate: string;
                    /**
                     * Credential status location information
                     */
                    credentialStatus?: {
                        /**
                         * Unique ID for the credential status
                         */
                        id?: string;
                        /**
                         * Indicates that the status contains revocation information
                         */
                        type?: string;
                        /**
                         * The location within the revocation list for the credential
                         */
                        revocationListIndex?: number;
                        /**
                         * The location of the revocation list
                         */
                        revocationListCredential?: string;
                    };
                    credentialSubject: {
                        id?: string;
                        givenName?: string;
                        familyName?: string;
                        alumniOf?: string;
                    };
                    proof: {
                        type?: string;
                        created?: string;
                        /**
                         * Compact form of JWS
                         */
                        jws?: string;
                        proofPurpose?: string;
                        verificationMethod?: string;
                    };
                    /**
                     * Name of the credential (requires v2 data model)
                     */
                    name?: string;
                    /**
                     * Description of the credential (requires v2 data model)
                     */
                    description?: string;
                }>;
                id: string;
                holder: string;
                proof: Array<{
                    type: string;
                    created: string;
                    challenge: string;
                    domain: string;
                    jws: string;
                    proofPurpose: string;
                    verificationMethod: string;
                }>;
            };
        },
    ): CancelablePromise<{
        verified: boolean;
        reason?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/v1/presentations/verify',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
