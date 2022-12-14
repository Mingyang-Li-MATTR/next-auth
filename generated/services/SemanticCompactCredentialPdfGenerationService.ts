/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SemanticCompactCredentialPdfGenerationService {

    /**
     * Generate compact semantic credential PDF
     * Creates a PDF based on provided compact semantic credential payload as the encoded string and selected template
     * @param requestBody The credential payload
     * @returns any PDF containing the CWT-W3C encoded credential
     * @throws ApiError
     */
    public static genCompactSemanticPdf(
        requestBody: {
            /**
             * PDF Template identifier
             */
            templateId?: string;
            /**
             * Credential payload string
             */
            payload?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/credentials/compact-semantic/pdf',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

}
