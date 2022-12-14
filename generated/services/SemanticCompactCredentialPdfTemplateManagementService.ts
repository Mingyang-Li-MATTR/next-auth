/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SemanticCompactCredentialPdfTemplateManagementService {

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
    public static createCompactSemanticPdfTemplate(
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
            url: '/v2/credentials/compact-semantic/pdf/templates',
            body: requestBody,
            mediaType: 'application/zip',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * List PDF Templates
     * Retrieves a list of all Compact Semanitc Credential PDF templates available for use.
     * @param limit Range size of the list, default 100
     * @param cursor Starting point for the list
     * @returns any A list of PDF templates
     * @throws ApiError
     */
    public static getCompactSemanticPdfTemplates(
        limit: number = 100,
        cursor?: string,
    ): CancelablePromise<{
        nextCursor?: string;
        data?: Array<{
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
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/credentials/compact-semantic/pdf/templates',
            query: {
                'limit': limit,
                'cursor': cursor,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Update PDF Template
     * Update a PDF template based on uploaded .zip archive data.
     * @param id
     * @param id PDF Template ID
     * @param requestBody
     * @returns any The PDF template is updated
     * @throws ApiError
     */
    public static updateCompactSemanticPdfTemplate(
        id: string,
        id: string,
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
            method: 'PUT',
            url: '/v2/credentials/compact-semantic/pdf/templates/{id}',
            path: {
                'id': id,
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/zip',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Retrieve PDF Template
     * Retrieves a specific compact semantic credential PDF template using its ID
     * @param id
     * @param id PDF Template ID
     * @returns any A PDF template
     * @throws ApiError
     */
    public static getCompactSemanticPdfTemplate(
        id: string,
        id: string,
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
            method: 'GET',
            url: '/v2/credentials/compact-semantic/pdf/templates/{id}',
            path: {
                'id': id,
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Remove PDF Template
     * Delete a PDF template by ID
     * @param id
     * @param id PDF Template ID
     * @returns void
     * @throws ApiError
     */
    public static deleteCompactSemanticPdfTemplate(
        id: string,
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/credentials/compact-semantic/pdf/templates/{id}',
            path: {
                'id': id,
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

}
