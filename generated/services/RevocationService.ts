/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RevocationService {

    /**
     * Set credential revocation status
     * A credential can be revoked by setting the revocation status.
     *
     * @param id Credential ID
     * @param requestBody Setting the revocation status
     * @returns any The revocation status has been set
     * @throws ApiError
     */
    public static setRevocationStatus(
        id: string,
        requestBody: {
            /**
             * true if the credential is revoked, false otherwise
             */
            isRevoked: boolean;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/v1/credentials/{id}/revocation-status',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * Retrieve credential revocation status
     * Retrieve the revocation status of a certain credential.
     *
     *
     * #### Returns
     * The revocation status of the credential
     * @param id Credential ID
     * @returns any Credential status
     * @throws ApiError
     */
    public static getRevocationStatus(
        id: string,
    ): CancelablePromise<{
        /**
         * true if the credential is revoked, false otherwise
         */
        isRevoked: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/v1/credentials/{id}/revocation-status',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * Retrieve revocation list
     * Retrieve the revocation list that contains the revocation status of a number of credentials.
     *
     *
     * #### Returns
     * The revocation list
     * @param id Revocation list ID
     * @returns any The revocation list
     * @throws ApiError
     */
    public static retrieveRevocationList(
        id: string,
    ): CancelablePromise<{
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
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/v1/revocation-lists/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * Create a revocation message payload
     * Create a payload that can form a message in the JWM format that can be used in sending notifications to subjects based on the revocation status of their issued credentials.
     *
     * - Use a DID setup on the tenant as the `from` value, this should be a DID with a key type suitable for messaging (not a BLS key type)
     * - Include a SubjectDID as the `to` value - this value is only used in the message construction, it should be the same value as the intended recipient.
     *
     *
     * To send a notification to the Subject DID holder, use the payload with the /messaging/encrypt and /messaging/send endpoints.
     * @param id Credential ID
     * @param requestBody Create a JWM message payload
     * @returns any Created
     * @throws ApiError
     */
    public static createRevNotification(
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
            revocationListCredential: string;
            revocationListIndex: string;
            isRevoked: boolean;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/v1/credentials/{id}/revocation-status/notification',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
