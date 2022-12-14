/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SemanticCompactCredentialDigitalPassTemplateManagementService {

    /**
     * Create Apple Pass Template
     * Creates a custom Digital Pass template based on a composed `.zip` file in the `template` field.
     * Other form values are required to establish the connection to your Apple Developer account.
     *
     * **Apple Pass template uses the official Apple Pass bundle structure**
     * ```
     * ├── icon.png
     * ├── icon@2x.png
     * ├── logo.png
     * ├── logo@2x.png
     * └── pass.json
     * ```
     * @param formData
     * @returns any Successfully created the template
     * @throws ApiError
     */
    public static createScApplePassTemplate(
        formData: {
            template: Blob;
            /**
             * Name of the template
             */
            name: string;
            /**
             * File name for generated .pkpass bundles, should only include alphanumeric characters, '_', or '-', and ends with '.pkpass'.
             */
            fileName: string;
            /**
             * Apple team identifier
             */
            teamIdentifier: string;
            /**
             * Apple pass identifier
             */
            passTypeIdentifier: string;
            /**
             * Apple G1 or G4 WorldWide Developer Relations certificate
             */
            wwdr: string;
            /**
             * Apple Pass signer certificate
             */
            signerCert: string;
            /**
             * The encrypted key of the Apple Pass signer certificate
             */
            signerKey: string;
            /**
             * Passphrase for the encrypted signer certificate key
             */
            signerKeyPassphrase: string;
        },
    ): CancelablePromise<{
        id?: string;
        /**
         * Digital pass type
         */
        passType?: 'apple' | 'google';
        name?: string;
        metadata?: {
            fileName?: string;
            teamIdentifier?: string;
            passTypeIdentifier?: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/credentials/compact-semantic/digitalpass/apple/templates',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * List Apple Pass Templates
     * Retrieves a list of all Digital Pass template available for use.
     * @param limit Range size of the list, default 100
     * @param cursor Starting point for the list
     * @returns any Returns a page of templates
     * @throws ApiError
     */
    public static listScApplePassTemplates(
        limit: number = 100,
        cursor?: string,
    ): CancelablePromise<{
        nextCursor?: string;
        data?: Array<{
            id?: string;
            /**
             * Digital pass type
             */
            passType?: 'apple' | 'google';
            name?: string;
            metadata?: {
                fileName?: string;
                teamIdentifier?: string;
                passTypeIdentifier?: string;
            };
        }>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/credentials/compact-semantic/digitalpass/apple/templates',
            query: {
                'limit': limit,
                'cursor': cursor,
            },
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Update Apple Pass Template
     * Update an Apple Pass template based on the uploaded .zip archive data.
     * @param id Template ID
     * @param id Digital Pass Template ID
     * @param formData
     * @returns any Successfully updated the template
     * @throws ApiError
     */
    public static updateScApplePassTemplate(
        id: string,
        id: string,
        formData: {
            template: Blob;
            /**
             * Name of the template
             */
            name: string;
            /**
             * File name for generated .pkpass bundles, should only include alphanumeric characters, '_', or '-', and ends with '.pkpass'.
             */
            fileName: string;
            /**
             * Apple team identifier
             */
            teamIdentifier: string;
            /**
             * Apple pass identifier
             */
            passTypeIdentifier: string;
            /**
             * Apple G1 or G4 WorldWide Developer Relations certificate
             */
            wwdr: string;
            /**
             * Apple Pass signer certificate
             */
            signerCert: string;
            /**
             * The encrypted key of the Apple Pass signer certificate
             */
            signerKey: string;
            /**
             * Passphrase for the encrypted signer certificate key
             */
            signerKeyPassphrase: string;
        },
    ): CancelablePromise<{
        id?: string;
        /**
         * Digital pass type
         */
        passType?: 'apple' | 'google';
        name?: string;
        metadata?: {
            fileName?: string;
            teamIdentifier?: string;
            passTypeIdentifier?: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/credentials/compact-semantic/digitalpass/apple/templates/{id}',
            path: {
                'id': id,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Retrieve Apple Pass Template
     * Retrieves a specific Apple Pass template
     * @param id Template ID
     * @param id Digital Pass Template ID
     * @returns any Retrived template
     * @throws ApiError
     */
    public static retrieveScApplePassTemplate(
        id: string,
        id: string,
    ): CancelablePromise<{
        id?: string;
        /**
         * Digital pass type
         */
        passType?: 'apple' | 'google';
        name?: string;
        metadata?: {
            fileName?: string;
            teamIdentifier?: string;
            passTypeIdentifier?: string;
        };
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/credentials/compact-semantic/digitalpass/apple/templates/{id}',
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
     * Remove Apple Pass Template
     * Delete a Apple Pass template by ID
     * @param id Template ID
     * @param id Digital Pass Template ID
     * @returns void
     * @throws ApiError
     */
    public static deleteScApplePassTemplate(
        id: string,
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/credentials/compact-semantic/digitalpass/apple/templates/{id}',
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
     * Google Pay Pass Template creation endpoint
     * Creates a custom Digital Pass template based on composed `.zip` file.
     *
     * **Google Pay Pass template must include the pass class and object definitions to be defined in a `template.json` file:**
     *
     * ```json
     * {
         * "loyaltyClass": {
             * ...
             * },
             * "loyaltyObject": {
                 * ...
                 * }
                 * }
                 * ```
                 * @param formData
                 * @returns any Successfully created the template
                 * @throws ApiError
                 */
                public static createScGooglePassTemplate(
                    formData: {
                        template: Blob;
                        /**
                         * Name of the template
                         */
                        name: string;
                        /**
                         * Google Pay Pass signer issuer ID
                         */
                        issuerId: string;
                        /**
                         * Email address of the Google Cloud Platform service account for accessing the Google Pay Passes API and issue passes on-behalf of the pass issuer.
                         */
                        serviceAccountClientEmail: string;
                        /**
                         * Private key PEM of the Google Cloud Platform service account
                         */
                        serviceAccountPrivateKey: string;
                    },
                ): CancelablePromise<{
                    id?: string;
                    /**
                     * Digital pass type
                     */
                    passType?: 'apple' | 'google';
                    name?: string;
                    metadata?: {
                        issuerId?: string;
                        serviceAccountClientEmail?: string;
                        payPassId?: string;
                    };
                }> {
                    return __request(OpenAPI, {
                        method: 'POST',
                        url: '/v2/credentials/compact-semantic/digitalpass/google/templates',
                        formData: formData,
                        mediaType: 'multipart/form-data',
                        errors: {
                            400: `Bad Request`,
                        },
                    });
                }

                /**
                 * List Google Pay Pass Template
                 * Retrieves a list of all Digital Pass template available for use
                 * @param limit Range size of the list, default 100
                 * @param cursor Starting point for the list
                 * @returns any Returns a page of templates
                 * @throws ApiError
                 */
                public static getScGooglePassTemplates(
                    limit: number = 100,
                    cursor?: string,
                ): CancelablePromise<{
                    nextCursor?: string;
                    data?: Array<{
                        id?: string;
                        /**
                         * Digital pass type
                         */
                        passType?: 'apple' | 'google';
                        name?: string;
                        metadata?: {
                            issuerId?: string;
                            serviceAccountClientEmail?: string;
                            payPassId?: string;
                        };
                    }>;
                }> {
                    return __request(OpenAPI, {
                        method: 'GET',
                        url: '/v2/credentials/compact-semantic/digitalpass/google/templates',
                        query: {
                            'limit': limit,
                            'cursor': cursor,
                        },
                        errors: {
                            400: `Bad Request`,
                        },
                    });
                }

                /**
                 * Update Google Pay Pass Template
                 * Update a Google Pay Pass template based on the uploaded `.zip` file data.
                 * @param id Template ID
                 * @param id Digital Pass Template ID
                 * @param formData
                 * @returns any Successfully updated the template
                 * @throws ApiError
                 */
                public static updateScGooglePassTemplate(
                    id: string,
                    id: string,
                    formData: {
                        template: Blob;
                        /**
                         * Name of the template
                         */
                        name: string;
                        /**
                         * Google Pay Pass signer issuer ID
                         */
                        issuerId: string;
                        /**
                         * Email address of the Google Cloud Platform service account for accessing the Google Pay Passes API and issue passes on-behalf of the pass issuer.
                         */
                        serviceAccountClientEmail: string;
                        /**
                         * Private key PEM of the Google Cloud Platform service account
                         */
                        serviceAccountPrivateKey: string;
                    },
                ): CancelablePromise<{
                    id?: string;
                    /**
                     * Digital pass type
                     */
                    passType?: 'apple' | 'google';
                    name?: string;
                    metadata?: {
                        issuerId?: string;
                        serviceAccountClientEmail?: string;
                        payPassId?: string;
                    };
                }> {
                    return __request(OpenAPI, {
                        method: 'PUT',
                        url: '/v2/credentials/compact-semantic/digitalpass/google/templates/{id}',
                        path: {
                            'id': id,
                            'id': id,
                        },
                        formData: formData,
                        mediaType: 'multipart/form-data',
                        errors: {
                            400: `Bad Request`,
                            404: `Not Found`,
                        },
                    });
                }

                /**
                 * Retrieve Google Pay Pass Template
                 * Retrieves a specific Digital Pass template by ID.
                 * @param id Template ID
                 * @param id Digital Pass Template ID
                 * @returns any Retrived template
                 * @throws ApiError
                 */
                public static retrieveScGooglePassTemplate(
                    id: string,
                    id: string,
                ): CancelablePromise<{
                    id?: string;
                    /**
                     * Digital pass type
                     */
                    passType?: 'apple' | 'google';
                    name?: string;
                    metadata?: {
                        issuerId?: string;
                        serviceAccountClientEmail?: string;
                        payPassId?: string;
                    };
                }> {
                    return __request(OpenAPI, {
                        method: 'GET',
                        url: '/v2/credentials/compact-semantic/digitalpass/google/templates/{id}',
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
                 * Remove Google Pay Pass Template
                 * Delete a Google Pay Pass template by ID
                 * @param id Template ID
                 * @param id Digital Pass Template ID
                 * @returns void
                 * @throws ApiError
                 */
                public static deleteScGooglePassTemplate(
                    id: string,
                    id: string,
                ): CancelablePromise<void> {
                    return __request(OpenAPI, {
                        method: 'DELETE',
                        url: '/v2/credentials/compact-semantic/digitalpass/google/templates/{id}',
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
