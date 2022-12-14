/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CompactCredentialsService {

    /**
     * Sign a Compact Credential
     * Create a Compact Credential by providing a valid payload.
     *
     * The `iss` contains the DID of the issuer, this must be a did:web using a P-256 key type available on the tenant.
     *
     * The `nbf` (not before), `exp` (expiry) and `iat` (issued at) are all dates expressed as a Unix timestamp in seconds that control the validity period of the credential once it has been issued.
     *
     * `aud` and `sub` are optional fields in the credential.
     * The `sub` attribute can be used if the credential only needs to contain a single claim, and that claim is unique and understood within the context of the issuer and the credential’s use.
     *
     * Any additional claims to be represented by the credential should then be added in the payload object after the `sub` attribute.
     *
     * A separate option can be provided to specify if the credential should be revocable, this is `false` by default.
     * @param requestBody Compact Credential payload to sign
     * @returns any The signed Compact Credential will be returned as encoded string and decoded payload
     * @throws ApiError
     */
    public static signCompactCredential(
        requestBody: {
            /**
             * CompactCredentialSignRequest
             */
            payload: Record<string, (string | number | boolean)>;
            revocable?: boolean;
        },
    ): CancelablePromise<{
        id: string;
        /**
         * URL Encoded Compact Credential payload
         */
        encoded: string;
        /**
         * CompactCredentialSignResponse
         */
        decoded: Record<string, (string | number | boolean)>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/credentials/compact/sign',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Failed to sign Compact Credential, invalid payload, etc`,
            },
        });
    }

    /**
     * Verify a compact credential
     * Verify a compact credential by sending the encoded payload and specifying options that could determine the resulting verification checks.
     *
     * Standard checks performed on all verification requests:
     * - Conformance of the string and encoded data, all compact credentials must be pre-fixed with `csc/1`
     * - Decode the CWT structure and validate attributes
     * - Fetch the public key from the `did.json` of the issuer `did:web` and validate the proof signature
     *
     * Optional paramter checks:
     * - `trustedIssuers` if provided will compare the `iss` field against the array of trusted issuers and only return verified if found in the array.
     * - `assertNotBefore` is a Unix timestamp provided in seconds, verify will fail if the current time is before the `nbf` value
     * - `assertNotAfter` is a Unix timestamp provided in seconds, verify will fail if the current time is after the `exp` value
     * - `checkRevocation` if the provided compact credential contains a revocation status list, this will be checked and verify will fail if the credential has been set to revoked
     * @param requestBody
     * @returns any Verification response that shows the `verified` status of the credential along with the decoded `payload`.
     * @throws ApiError
     */
    public static verifyCompactCredential(
        requestBody: {
            /**
             * a compact credential encoded payload
             */
            payload: string;
            trustedIssuers?: Array<string>;
            assertNotBefore?: boolean;
            assertExpiry?: boolean;
            checkRevocation?: boolean;
        },
    ): CancelablePromise<{
        verified: boolean;
        /**
         * CompactCredentialSignResponse
         */
        decoded: Record<string, (string | number | boolean)>;
        error?: {
            type: string;
            message: string;
            details?: any;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/credentials/compact/verify',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                413: `Payload Too Large`,
                415: `Unsupported Media Type`,
            },
        });
    }

    /**
     * Public revocation list discovery
     * Every revocable credential issued will reference a Revocation List, this is automatically created and held on the tenant for the Issuer.
     *
     * The public revocation list endpoint can be obtained from the public revocation list discovery endpoint.
     * @returns any The public endpoint of the revocation list
     * @throws ApiError
     */
    public static compactCredentialRevocationListDiscovery(): CancelablePromise<Array<{
        nextCursor?: string;
        data?: Array<{
            id?: string;
            issuer?: string;
            url?: string;
        }>;
    }>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/credentials/compact/revocation-lists',
        });
    }

    /**
     * Public revocation list
     * The public endpoint that retrieves the revocation list that contains the revocation status of a number of credentials.
     * @param listId ID of the revocation list
     * @returns binary Binary COSE Revocation List
     * @throws ApiError
     */
    public static compactCredentialRevocationList(
        listId: string,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/credentials/compact/revocation-lists/{listId}',
            path: {
                'listId': listId,
            },
        });
    }

    /**
     * Update revocation status
     * A credential can be revoked by setting isRevoked to true. The status can be set back to false to reactivate the credential.
     * @param id Unique ID of the credential - JTI
     * @param requestBody Update revocation status
     * @returns any The revocation status has been set
     * @throws ApiError
     */
    public static updateRevocationCompactCredential(
        id: string,
        requestBody: {
            isRevoked: boolean;
        },
    ): CancelablePromise<{
        id: string;
        isRevoked: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/credentials/compact/{id}/revocation-status',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Id not found`,
            },
        });
    }

    /**
     * Retrieve revocation status
     * Retrieve the revocation status of a credential.
     * @param id Unique ID of the credential - JTI
     * @returns any Revocation status
     * @throws ApiError
     */
    public static getRevocationCompactCredential(
        id: string,
    ): CancelablePromise<{
        isRevoked?: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/credentials/compact/{id}/revocation-status',
            path: {
                'id': id,
            },
            errors: {
                404: `Id not found`,
            },
        });
    }

    /**
     * Generate a QR Code
     * Generate a QR Code to represent a Compact Credential from the `base32` encoded string provided as the `payload` and an optional `width`.
     *
     * * The maximum length of the payload is 3391 characters.
     *
     * The width of the output QR code can be specified using the optional `width` parameter.
     * * The maximum size of the width is 1000px.
     * If not provided the QR code library will generate a QR code with optimised width based on the size of the payload in the request.
     * @param requestBody
     * @returns binary QR Code generated as a PNG image
     * @throws ApiError
     */
    public static generateQrCodeCompactCredential(
        requestBody: {
            /**
             * String payload of the encoded compact credential
             */
            payload: string;
            /**
             * Width in pixels of the output png image
             */
            width?: number;
        },
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/credentials/compact/qrcode',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
