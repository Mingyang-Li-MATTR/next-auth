/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CredentialsService {

    /**
     * Create a verifiable credential
     * Creates a Verifiable Credential (VC or just Credential) in a JSON-LD format adhering to the [W3C VC Data Model spec]( https://www.w3.org/TR/vc-data-model/).
     *
     *
     * **Creating the Payload:**
     *
     * The values required by the operation are validated where available and used to construct the Verifiable Credential.
     *
     * The Credential is issued using JSON-LD with linked data proofs, the `type` values of the Credential and the Subject Claims must be represented by a schema in `@context`.
     * > The schema `https://www3.org/2018/credentials/v1` is always required in addition any `@context` values, so that the Credential can be referenced.
     *
     * > The `type` value of `VerifiableCredential` must be used as the *first* value in the array to conform to the [W3C VC Data Model spec]( https://www.w3.org/TR/vc-data-model/).
     *
     * **Subject Identifiers**
     *
     * In general, the Subject identifier in the `subjectId` field should have been authentically bound to the subject and authenticated against the information used in the claims, for example by using an OpenID Connect authentication flow or another mechanism including out-of-band processes.
     *
     * Credentials may be issued without subject identifiers, this covers uses-cases, where the credential cannot or does not need to be adequately bound to a Subject DID and may be treated as a bearer credential or reissued at a later time once the credential can be bound.
     *
     * **ZKP-enabled BBS+ credential:**
     *
     * If you wish to issue a ZKP-enabled Verifiable Credential, the provided `issuer` `id` must be a did:key with a key type of `bls12381g2`. The platform will automatically detect this capability and issue a ZKP-enabled BBS+ credential. Note that the schema `https://w3c-ccg.github.io/ldp-bbs2020/context/v1` will automatically be added to the `@context` in the credential.
     *
     * > During Preview this feature is experimental. It may change over time and may require credentials to be reissued.
     *
     * **Credential meta-data:**
     *
     * Setting the `persist` value to `true` will store the entire credential contents as well as the meta-data on the platform. If set to `false` only the credential meta-data is held on the platform:
     * - `id`
     * - `tag` (optional)
     * - `credentialStatus` (optional)
     * - `issuanceDate`
     *
     * The optional `tag` value can be used to externally reference the issued credential.
     *
     * #### Returns
     * On success, the Verifiable Credential is always provided in the response along with meta-data.
     * Subject bound credential should be delivered to the intended subject.
     *
     * @param requestBody The credential payload
     * @returns any Credential created
     * @throws ApiError
     */
    public static createCredential(
        requestBody: {
            /**
             * Additional to any JSON-LD contexts 'https://www.w3.org/2018/credentials/v1' is always required.
             */
            '@context': Array<string>;
            /**
             * Generally a DID, identifier of who/what the subject is
             */
            subjectId?: string;
            /**
             * An optional tag to filter by, will not be part of the issued credential
             */
            tag?: string;
            /**
             * Type for the Credential, VerifiableCredential must be presented
             */
            type: (string | Array<string>);
            /**
             * Each value is a claim that is defined by one of the JSON-LD schemas.
             */
            claims: any;
            /**
             * Includes Issuer id (DID), domain name and optional branding properties.
             */
            issuer: {
                id: string;
                name: string;
                /**
                 * The location of the logo image. The supported formats are jpg, png, and svg.
                 */
                logoUrl?: string;
                /**
                 * The location of the icon image. The supported formats are jpg, png, and svg.
                 */
                iconUrl?: string;
            };
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
            /**
             * Flag to indicate whether the full credential should be stored in platform
             */
            persist?: boolean;
            /**
             * Flag to indicate if the credential needs to support revocation
             */
            revocable?: boolean;
            /**
             * Name of the credential (requires v2 data model)
             */
            name?: string;
            /**
             * Description of the credential (requires v2 data model)
             */
            description?: string;
        },
    ): CancelablePromise<{
        id: string;
        credential: {
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
        };
        tag?: string;
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
        issuanceDate: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/v1/credentials',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request, Invalid request body`,
            },
        });
    }

    /**
     * Retrieve list of credential data
     * Returns a list of all credential data stored in the tenant.
     *
     * **In the list**
     *
     * Inside the `data` array, there is an body for each credential issued on the platform, in addition to the `id` the body will contain optionally added meta-data and may contain the entire credential contents if `persist` was invoked during credential creation.
     *
     * > Credentials issued via the OIDC Bridge are set not to be persisted.
     *
     * **Pagination**
     *
     * Pagination can be controlled by a cursor method using the `cursor`and `limit` query parameters. The `nextCursor` is found at the start of each returned range of credential entries and the `limit` determines how many entries are returned in that request, with a maximum value of `1000`.
     *
     * Not using a query parameter defaults the response to return the first range of credential entries with a limit of 100.
     *
     * > The optional `tag` filter or the Credential `type` can be used to retrieve credential data.
     *
     * @param tag The optional external reference to filter on
     * @param type The optional credential type to filter on
     * @param limit Range size of returned credential entries, default 100
     * @param cursor Starting point for the range of credential entries
     * @returns any Returns a page of credentials
     * @throws ApiError
     */
    public static retrieveListCreds(
        tag?: string,
        type?: string,
        limit?: number,
        cursor?: string,
    ): CancelablePromise<{
        /**
         * Starting point for next cursor to use in a page
         */
        nextCursor?: string;
        data?: Array<{
            id: string;
            credential?: {
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
            };
            tag?: string;
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
            issuanceDate: string;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/v1/credentials',
            query: {
                'tag': tag,
                'type': type,
                'limit': limit,
                'cursor': cursor,
            },
            errors: {
                400: `Bad query parameters in request.`,
            },
        });
    }

    /**
     * Retrieve credential data
     * Get data for a previously created credential using its ID.
     *
     * In addition to the `id` the body will contain optionally added meta-data and may contain the entire credential contents if `persist` was invoked during credential creation.
     *
     * > Credentials issued via the OIDC Bridge do not have their contents persisted.
     * @param id Credential ID
     * @returns any Credential returned
     * @throws ApiError
     */
    public static retrieveCredential(
        id: string,
    ): CancelablePromise<{
        id: string;
        credential?: {
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
        };
        tag?: string;
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
        issuanceDate: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/v1/credentials/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Credential ID not in a UUID format`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Remove credential data
     * Remove all stored credential data from the tenant using its ID.
     *
     * > The entire entry including meta-data and the credential contents is removed from the system and cannot be recovered.
     * @param id Credential ID
     * @returns void
     * @throws ApiError
     */
    public static removeCredential(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/core/v1/credentials/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Invalid id parameter format`,
                404: `Credential ID not found`,
            },
        });
    }

    /**
     * Verify a credential
     * Send any JSON-LD Verifiable Credential that conforms to the [W3C Verifiable Credentials data model](https://www.w3.org/TR/vc-data-model/) to perform verification checks and return a response:
     * - Issuer DID can be resolved
     * - JSON-LD context is valid for subject claims
     * - Proof is valid & the credential has not been tampered with
     * - Is not in a revoked status on a RevocationList2020
     * This endpoint can be used to check any Credential issued by any service provider.
     * @param requestBody
     * @returns any Credential has been processed
     * @throws ApiError
     */
    public static verifyCredential(
        requestBody?: {
            credential?: {
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
            };
        },
    ): CancelablePromise<{
        verified: boolean;
        reason?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/v1/credentials/verify',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
