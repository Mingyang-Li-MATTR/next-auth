/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SemanticCompactCredentialDigitalPassGenerationService {

    /**
     * Generate Apple Pass
     * Creates an Apple Pass based on provided credential payload and selected template
     * @param requestBody
     * @returns binary Digital Pass containing the CWT encoded semantic compact credential
     * @throws ApiError
     */
    public static generateScApplePass(
        requestBody: any,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/credentials/compact-semantic/digitalpass/apple',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

    /**
     * Generate Google Pay Pass
     * Creates a Digital Pass based on provided credential payload and selected template
     * @param requestBody
     * @returns any Digital Pass containing the CWT encoded semantic compact credential
     * @throws ApiError
     */
    public static createScDigitalPass(
        requestBody: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/credentials/compact-semantic/digitalpass/google',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
