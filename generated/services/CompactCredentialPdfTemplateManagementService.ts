/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CompactCredentialPdfTemplateManagementService {

    /**
     * List PDF Templates
     * Retrieves a list of all Compact Credential PDF templates available for use.
     * @param limit Range size of the list, default 100
     * @param cursor Starting point for the list
     * @returns any A list of PDF templates
     * @throws ApiError
     */
    public static getCompactPdfTemplates(
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
            url: '/v2/credentials/compact/pdf/templates',
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
    public static updateCompactPdfTemplate(
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
            url: '/v2/credentials/compact/pdf/templates/{id}',
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
     * Retrieves a specific Compact Credential PDF template using its ID
     * @param id
     * @param id PDF Template ID
     * @returns any A PDF template
     * @throws ApiError
     */
    public static getCompactPdfTemplate(
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
            url: '/v2/credentials/compact/pdf/templates/{id}',
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
    public static deleteCompactPdfTemplate(
        id: string,
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/credentials/compact/pdf/templates/{id}',
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
