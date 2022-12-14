/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CompactCredentialCPdfTemplateManagementService {

    /**
     * Create PDF Template
     * Creates a custom PDF template based on composed .zip archive data. Each .zip archive should include:
     *
     * - A PDF template called `template.pdf`
     * - Font files in a font directory
     * - A JSON file called `config.json` describing fields, its validation rules and fonts.
     * @param requestBody
     * @returns any A PDF template is created
     * @throws ApiError
     */
    public static createCompactPdfTemplate(
        requestBody: Blob,
    ): CancelablePromise<{
        id?: string;
        name?: string;
        fileName?: string;
        metadata?: {
            title?: string;
        };
        fields?: Array<{
            key: string;
            value: string;
            isRequired?: boolean;
            alternativeText: string;
            fontName?: string;
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/credentials/compact/pdf/templates',
            body: requestBody,
            mediaType: 'application/zip',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

}
