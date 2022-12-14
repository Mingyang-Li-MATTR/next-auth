/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DccDocumentSignersService {

    /**
     * Create a Document Signer
     * Creates a document signer to represent an entity that is authorised to sign a Digital Covid Certificate payload.
     * The document signer is initially created as a self-signed certificate that can be updated after creation to be associated to a Country Signing Certification Authority (CSCA).
     *
     * The self-signed certificate can be used to sign a DCC for testing purposes without the associated to a CSCA.
     * However, to fit within the trust framework outlined for the EUDCC, the document signer should be chained to a CSCA.
     * This can be achieved by providing the `publicKey` and/or `certificatePem` to a CSCA to chain together and provide back a `certificatePem` that can then be updated against the created `documentSigner`.
     *
     * There must be at least one document signer created to allow for a DCC to be signed through the `sign` API endpoint.
     *
     * @returns any Document Signer Created
     * @throws ApiError
     */
    public static createDocumentSigner(): CancelablePromise<{
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
        publicKey?: {
            kty?: string;
            crv?: string;
            'x'?: string;
            'y'?: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ext/dcc/v1/documentsigners',
        });
    }

    /**
     * Retrieve list of Document Signers
     * Retrieves a list of document signers which have been added through the DCC extension and are available for use when signing a Digital Covid Certificate (DCC) via the `sign` API endpoint.
     * @param limit Range size of the list, default 100
     * @param cursor Starting point for the list
     * @returns any A list of document signers
     * @throws ApiError
     */
    public static retrieveDocumentSigners(
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
            publicKey?: {
                kty?: string;
                crv?: string;
                'x'?: string;
                'y'?: string;
            };
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ext/dcc/v1/documentsigners',
            query: {
                'limit': limit,
                'cursor': cursor,
            },
        });
    }

    /**
     * Retrieve a Document Signer by ID
     * Get a document signer by `id`
     * @param id Document Signer Id
     * @returns any A document signer along with the associated signing certificate.
     * @throws ApiError
     */
    public static retrieveDocumentSignerById(
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
        publicKey?: {
            kty?: string;
            crv?: string;
            'x'?: string;
            'y'?: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ext/dcc/v1/documentsigners/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete a Document Signer by ID
     * Remove a document signer by `id`
     * @param id Document Signer Id
     * @returns void
     * @throws ApiError
     */
    public static deleteDocumentSigner(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/ext/dcc/v1/documentsigners/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * Update a Document Signer
     * Update a document signer by `id` with a new or replacement `certificatePem` that represents the trusted chain between the document signer and root certificate of the associated CSCA.
     * @param id Document Signer Id
     * @param requestBody
     * @returns any Document Signer Updated
     * @throws ApiError
     */
    public static updateDocumentSigner(
        id: string,
        requestBody?: {
            /**
             * PEM encoded X.509 certificate
             */
            certificatePem?: string;
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
        publicKey?: {
            kty?: string;
            crv?: string;
            'x'?: string;
            'y'?: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/ext/dcc/v1/documentsigners/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
