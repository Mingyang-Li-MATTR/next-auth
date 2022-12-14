/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LinkedDataService {

    /**
     * Convert linked-data documents
     * Convert a document like a JSON-LD Credential or a Verifiable Presentation into a CBOR-LD document, and vice versa.
     *
     * > This operation is in Technical Preview, you may experience some inconsistencies when converting linked-data documents between encoding formats and we may introduce breaking changes to this operation based on feedback.
     *
     * The Convert operation can accept JSON-LD documents as an input and convert them to a CBOR-LD document represented in Base64.
     * CBOR-LD documents can represent the same information in a smaller size that is more friendly for offline use-cases, such as embedding into a QR code printed onto physical media or a PDF.
     *
     * Documents can also be converted from CBOR-LD in Base64 format to JSON-LD, the response can either be encoded in Base 64 or plain JSON. This is useful for accepting compressed Credentials or Verifiable Presentations and converting them for use on other operations like [Verify a Credential](#operation/verify-credential) or [Verify a Presentation](#operation/verifyPres).
     *
     * **Wallet Presentations**
     * The MATTR mobile wallet can create verifiable presentations from a single credential in a CBOR-LD format and encode this into a QR, a further layer of GZip compression is performed.
     * The MATTR [Verify CBOR-LD Presentation sample app](https://github.com/mattrglobal/sample-apps/tree/main/verify-cborld-presentation) can be used as an example of how to verify these presentations using the MATTR VII APIs.
     *
     * **Limitations**
     * Calculating the exact size of a credential/document that can be encoded into a QR and safely read by a camera is not straightforward. Larger credentials are unlikely to work, including those with embedded images (photos), large nested claims, or credentials with large signatures like BBS+, it is generally best to confirm by testing across a range of devices.
     *
     * Deeply nested JSON-LD structures are currently unable to be converted to CBOR-LD due to limitations of the library, so it is possible to see errors.
     *
     * We are aware that inline contexts may affect the performance for CBOR-LD compression. The Create Credential endpoint uses an inline `@vocab` context, this may change in the future.
     * @param requestBody The request document data and options
     * @returns any CBOR-LD/JSON-LD document is converted
     * @throws ApiError
     */
    public static linkedDataConvert(
        requestBody: {
            options: {
                inputFormat: 'jsonld' | 'cborld';
                outputFormat: 'jsonld' | 'cborld';
                /**
                 * When output format is `cborld`, the output encoding is `base64`.
                 * If output format is `jsonld`, the output encoding can be either `none` (object) or `base64` (string)
                 *
                 */
                outputEncoding?: 'base64' | 'none';
            };
            data: string;
        },
    ): CancelablePromise<{
        metadata?: {
            /**
             * the encoding applied on top of actual result
             */
            encoding?: 'base64' | 'none';
            format?: 'cborld' | 'jsonld';
        };
        data?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/linkeddata/v1/convert',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request, Invalid request body`,
            },
        });
    }

}
