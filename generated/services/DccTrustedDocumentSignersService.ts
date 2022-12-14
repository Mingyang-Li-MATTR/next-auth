/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DccTrustedDocumentSignersService {

    /**
     * Import an new Trusted Document Signer
     * Creates a trusted document signer from the provided PEM certificate that has been issued by a CSCA (or similar authority) to represent an entity that is authorised to sign a Digital Covid Certificate payload.
     *
     * The `certificatePem`, must be an encoded X.509 certificate for it to be accepted.
     *
     * For a DCC to be considered verified through the `verify` endpoint, the document signer that issued the DCC needs to be registered as a trusted issuer.
     *
     * A certificate that has been utilised by a `sign` operation will automatically be imported as a trust document signer.
     * @param requestBody
     * @returns any Trusted Document Signer Created
     * @throws ApiError
     */
    public static addTrustedDocumentSigner(
        requestBody?: {
            /**
             * PEM encoded X.509 certificate
             */
            certificatePem: string;
            public: boolean;
        },
    ): CancelablePromise<{
        id: string;
        certificateKid?: string;
        certificateFingeprint?: string;
        /**
         * PEM encoded X.509 certificate
         */
        certificatePem?: string;
        certificateData?: {
            notBefore?: string;
            notAfter?: string;
            keyUsage?: {
                vaccination?: boolean;
                test?: boolean;
                recovery?: boolean;
            };
            country?: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ext/dcc/v1/trusteddocumentsigners',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Retrieve list of Trusted Document Signers
     * Retrieves a list of trusted document signers which have been added through the DCC extension and are available and trusted as valid certificate signers when verifying a Digital Covid Certificate (DCC) via the `verify` API endpoint.
     * @param kid Filter by certificate kid
     * @param limit Range size of the list, default 100
     * @param cursor Starting point for the list
     * @returns any A list of trusted document signers
     * @throws ApiError
     */
    public static retrieveTrustedDocumentSigners(
        kid?: string,
        limit: number = 100,
        cursor?: string,
    ): CancelablePromise<{
        nextCursor?: string;
        data?: Array<{
            id: string;
            certificateKid?: string;
            certificateFingeprint?: string;
            /**
             * PEM encoded X.509 certificate
             */
            certificatePem?: string;
            certificateData?: {
                notBefore?: string;
                notAfter?: string;
                keyUsage?: {
                    vaccination?: boolean;
                    test?: boolean;
                    recovery?: boolean;
                };
                country?: string;
            };
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ext/dcc/v1/trusteddocumentsigners',
            query: {
                'kid': kid,
                'limit': limit,
                'cursor': cursor,
            },
        });
    }

    /**
     * Get a Trusted Document Signer by id
     * Get a trusted document signer by `id`
     * @param id Trusted Document Signer ID
     * @returns any The `certificatePem` and a `id` for the requested trusted document signer.
     * @throws ApiError
     */
    public static retrieveTrustedDocumentSignersById(
        id: string,
    ): CancelablePromise<{
        id: string;
        certificateKid?: string;
        certificateFingeprint?: string;
        /**
         * PEM encoded X.509 certificate
         */
        certificatePem?: string;
        certificateData?: {
            notBefore?: string;
            notAfter?: string;
            keyUsage?: {
                vaccination?: boolean;
                test?: boolean;
                recovery?: boolean;
            };
            country?: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ext/dcc/v1/trusteddocumentsigners/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a Trusted Document Signer by ID
     * Delete a trusted document signer by `id`
     * @param id Trusted Document Signer ID
     * @returns void
     * @throws ApiError
     */
    public static deleteTrustedDocumentSigner(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/ext/dcc/v1/trusteddocumentsigners/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * Update a Trusted Document Signer
     * Update a trusted document signer's `public` property to indicate this document signers public key can be included in the list of document signers returned via a `dccgateway` endpoint, for external relying parties/verifiers to utilise.
     *
     * Please note that this method may not be available on your tenant as it is dependent on MATTR VII environment configuration.
     * @param id Trusted Document Signer ID
     * @param requestBody
     * @returns any Trusted Document Signer Updated
     * @throws ApiError
     */
    public static updateTrustedDocumentSigner(
        id: string,
        requestBody?: {
            public?: boolean;
        },
    ): CancelablePromise<{
        id: string;
        certificateKid?: string;
        certificateFingeprint?: string;
        /**
         * PEM encoded X.509 certificate
         */
        certificatePem?: string;
        certificateData?: {
            notBefore?: string;
            notAfter?: string;
            keyUsage?: {
                vaccination?: boolean;
                test?: boolean;
                recovery?: boolean;
            };
            country?: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/ext/dcc/v1/trusteddocumentsigners/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
