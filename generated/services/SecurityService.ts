/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SecurityService {

    /**
     * Create API Auth Token
     * Authorization endpoint for gaining token used for API requests requiring `bearerAuth`.
     *
     * You will be provided the required `client_id` and `client_secret` as part of onboarding.
     * @param requestBody
     * @returns any Successful response
     * @throws ApiError
     */
    public static authToken(
        requestBody?: {
            client_id: string;
            client_secret: string;
            audience: string;
            grant_type: string;
        },
    ): CancelablePromise<{
        access_token: string;
        expires_in: number;
        token_type: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/oauth/token',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
            },
        });
    }

}
