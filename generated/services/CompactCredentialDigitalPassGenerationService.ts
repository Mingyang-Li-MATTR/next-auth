/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CompactCredentialDigitalPassGenerationService {

    /**
     * Generate Apple Pass
     * Creates an Apple Pass based on provided credential payload and selected template
     * @param requestBody
     * @returns binary Digital Pass containing the CWT encoded compact credential
     * @throws ApiError
     */
    public static generateCcApplePass(
        requestBody: any,
    ): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/credentials/compact/digitalpass/apple',
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
     * @returns any Digital Pass containing the CWT encoded compact credential
     * @throws ApiError
     */
    public static createCcDigitalPass(
        requestBody: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/credentials/compact/digitalpass/google',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
