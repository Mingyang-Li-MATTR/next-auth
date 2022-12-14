/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NzcpVerifyService {

    /**
     * Verify a NZCP
     * Verify a New Zealand COVID Pass (NZCP) issued by the New Zealand Ministry of Health using a payload of either a string or a document (image/PDF) containing the QR code.
     *
     * This service will only support a NZCP issued using the trusted issuer with public keys published by New Zealand Ministry of Health.
     *
     * An NZCP is constructed using the pattern:
     *
     * ```
     * NZCP:/<version-identifier>/<base32-encoded-CWT>
     * ```
     *
     * ### **Payload as a string**
     * Extract the entire content of an NZCP QR code and send as a string with content type:
     * - `application/json`
     *
     * ### **Payload as a document**
     * Send a binary form of a document that contains a single QR code respresenting the NZCP.
     * Choose the correct content type for the document type being uploaded:
     *
     * - `application/pdf`
     * - `image/jpeg`
     * - `image/png`
     *
     * The service will determine the QR code and read the contents by applying the following princples:
     * - There is a maximum size of 1MB
     * - For PDF documents, only the 1st page will be scanned
     * - The service will deterministically scan for QR codes and stop at the first one found
     * - Documents must be of sufficient quality for the service to be able to read the QR Code image - the service has been tested with published examples.
     *
     * ### **Checks performed**
     * The service will perform the follow validity checks on the uploaded payload:
     * - Validate the conformity of the payload to NZCP Version 1 in Base32
     * - Decode the CBOR structure
     * - Verification of header information present
     * - Verify the `iss` value is the New Zealand Ministry of Health trusted issuer
     * - Retrieve a valid public key from the trusted issuer's published document
     * - Using the public key, validate the signature of the payload over the CBOR structure
     * - Current datetime is within the `notBefore` and `expiry` values.
     *
     * ### **Response**
     * If all of the above checks are valid then the `verified` boolean is set to `true`, otherwise it will be classed as `false`.
     * Error reasons are given depending on the nature of the failure.
     *
     * If the NZCP CBOR structure can be decoded, then the NZCP payload will be returned, this is also the case for payloads that are outside the `notBefore` or `expiry` dates.
     *
     *
     *
     * @param requestBody
     * @returns any NZCP verification response that shows the `verified` status of the certificate along with the decoded `payload`.
     * @throws ApiError
     */
    public static verifyNzcp(
        requestBody: {
            /**
             * NZCP with a base 32 encoded CBOR structure
             */
            payload: string;
        },
    ): CancelablePromise<{
        verified: boolean;
        /**
         * NZCPPayload
         */
        payload?: {
            givenName: string;
            familyName?: string;
            dob: string;
        };
        /**
         * Metadata response from NZCP verify
         */
        metadata?: {
            expiry?: string;
            notBefore?: string;
            id?: string;
            issuer?: string;
            type?: string;
        };
        error?: {
            type: string;
            message: string;
            details?: any;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ext/nzcp/v1/verify',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                413: `Payload Too Large`,
                415: `Unsupported Media Type`,
            },
        });
    }

}
