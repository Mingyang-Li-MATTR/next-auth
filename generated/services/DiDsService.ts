/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DiDsService {

    /**
     * Well known DID configuration
     * Returns a list of Decentralized Identifier (DID) Configuration entries from the tenant.
     *
     * See https://identity.foundation/.well-known/resources/did-configuration/
     *
     * These entries are automatically configured for **all** DIDs created by the tenant and is used for any party wanting to establish the relationship between domain ownership and the DIDs by exposing cryptographic proofs.
     *
     * This endpoint is unprotected, public facing and can be deterministically found at the root of the tenant subdomain or alias by any party wishing to discover the domain to DID relationship.
     *
     * @returns any List of DID Configuration entries
     * @throws ApiError
     */
    public static wellKnownDidConfig(): CancelablePromise<{
        entries?: Array<{
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
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/.well-known/did-configuration',
        });
    }

    /**
     * Resolve a DID
     * When the DID is retrieved by the DID provided in the path, the DID Document is also attempted to be resolved by using the DID method and method identifier, this may involve a network call depending on the method involved.
     *
     * Example:
     *
     * `did:key:z6Mkjr7vfzBfamiN6Wi6cyQUgTq6CEMXP1MzWQawsUEXJoa9` - the public key is encapsulated in the DID
     * `did:ion:EiBbvWpBHPql_2W9sObr4vPFl9k9InEDYOEDXvPPRDRyBg` -  will be resolved on the ION network
     * `did:web:mattr.global` - will be resolved by accessing the `/.well-known/did.json` of the domain
     *
     * #### Returns
     *
     * If the DID Document is publicly resolvable it is returned along with meta-data already held about the DID by the tenant;
     * - `didDocument`: See our [tutorials on MATTR Learn](/tutorials/dids/use-did) to understand more about the anatomy of the DID Document for each method.
     * - `registrationStatus`: Ledger-based DIDs may incur a lag in processing to the ledger. Also for DIDs that require additional actions (e.g. `did:web`) this status will be update from `PROCESSING` to `COMPLETED` once publicly resolvable.
     * - `localMetadata`: This includes the initial DID document that the platform expects to find publicly resolvable.
     * @param id DID
     * @returns any A DID Document and meta-data
     * @throws ApiError
     */
    public static resolveDid(
        id: string,
    ): CancelablePromise<{
        didDocument?: any;
        registrationStatus?: string;
        localMetadata?: {
            /**
             * Timestamp of when the DID was registered
             */
            registered?: number;
            /**
             * An array of keys that describe the relationship between keys listed in the DID document and keys that exist in a connected KMS.
             */
            keys: Array<{
                kmsKeyId?: string;
                didDocumentKeyId?: string;
            }>;
            /**
             * The DID document that was created for the DID
             */
            initialDidDocument?: any;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/v1/dids/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a DID
     * Deletes a DID and all associated metadata including the Private keys from the platform and KMS.
     * For ledger-based DIDs the public DID Document will still be available.
     * For `did:web` you can remove the `did.json` from your hosted domain.
     * @param id DID
     * @returns void
     * @throws ApiError
     */
    public static deleteDid(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/core/v1/dids/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * Retrieve a list of DIDs
     * Returns a list of all DIDs (Decentralized Identifiers) managed by the tenant and their associated meta-data.
     *
     * @param limit Range size of the list, default 100
     * @param cursor Starting point for the list
     * @returns any A list of DIDs
     * @throws ApiError
     */
    public static retrieveListOfDids(
        limit: number = 100,
        cursor?: string,
    ): CancelablePromise<{
        /**
         * Starting point for next cursor to use in a page
         */
        nextCursor?: string;
        data?: Array<{
            did: string;
            localMetadata: {
                /**
                 * Timestamp of when the DID was registered
                 */
                registered?: number;
                /**
                 * An array of keys that describe the relationship between keys listed in the DID document and keys that exist in a connected KMS.
                 */
                keys: Array<{
                    kmsKeyId?: string;
                    didDocumentKeyId?: string;
                }>;
                /**
                 * The DID document that was created for the DID
                 */
                initialDidDocument?: any;
            };
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/v1/dids',
            query: {
                'limit': limit,
                'cursor': cursor,
            },
        });
    }

    /**
     * Create a DID
     * Takes a supported DID Method and generates keys and associated information for a new DID and registers the DID Document if applicable.
     *
     * Methods supported:
     * - key
     * - web
     * - ion
     *
     * **Options:**
     * The options parameter is used to define further configuration when creating the DID, the available options vary between methods.
     *
     * > Note: W3C DIDs are an emerging standard at the W3C, DIDs issued during a trial on the MATTR VII platform may be subject to change, as you move into production workloads please get in touch to discuss your needs.
     *
     * ### **Creating did:key**
     * A DID with a DID method of key can be created.
     *
     * If no options are provided, a DID will be created with an ed25519 key type.
     *
     * If the key type in options is set to `bls12381g2` a DID will be created with a BLS key type which supports BBS+ signatures for issuing ZKP-enabled credentials.
     *
     * > A DID Key created with an experimental `bls12381g2` key type can only be used for issuing credentials.
     *
     * ### **Creating did:web**
     * A DID with a DID method of web can be created by specifying the `domain` where the DID document is going to be hosted in the `options` body.
     *
     * If the key type in options is set to `P-256` a DID will be created with a P-256 key type which compact credentials.
     *
     * The returned initial DID Document then needs to be hosted so that it is accessible from the domain provided in the options, e.g. https://mattr.global/.well-known/did.json.
     *
     * When the DID Document is not available for download from the domain, the Registration Status of the DID is PROCESSING.
     *
     * Once the DID Document can be downloaded from the domain, the Registration Status will be COMPLETED.
     *
     * Note that the tenant will be able to prove ownership of the keys associated with the did:web DID Document through the well-known endpoint, i.e. https://tenant.vii.mattr.global/.well-known/did-configuration, while the DID Document hosted on the domain links the DID to a domain.
     *
     *
     * ### **Creating did:ion**
     * A DID with a DID method of ion can be created.
     *
     * Public DID Document is anchored by batching using the ION network, due to the lag incurred in registering the DID Document, which may take between 20-120 minutes, the `registrationStatus` will remain as `PROCESSING` until the DID Document can be retrieved from the public nodes.
     *
     * > Note: The creation of ION DIDs during a trial of the MATTR VII platform may be subject to change, as you move into production workloads please get in touch to discuss your needs.
     *
     *
     * #### Returns
     * The DID, associated metadata and registration status.
     *
     * Unsupported Methods result in a 400 response with an "Invalid value" message.
     * @param requestBody Options for creating the decentralized identifier
     * @returns any DID document created
     * @throws ApiError
     */
    public static createDid(
        requestBody: {
            method: 'key' | 'web' | 'ion';
            /**
             * To define a key type for a did:key or to define a domain for did:web
             */
            options?: any;
        },
    ): CancelablePromise<{
        registrationStatus?: string;
        did?: string;
        metadata?: {
            /**
             * Timestamp of when the DID was registered
             */
            registered?: number;
            /**
             * An array of keys that describe the relationship between keys listed in the DID document and keys that exist in a connected KMS.
             */
            keys: Array<{
                kmsKeyId?: string;
                didDocumentKeyId?: string;
            }>;
            /**
             * The DID document that was created for the DID
             */
            initialDidDocument?: any;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/v1/dids',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }

}
