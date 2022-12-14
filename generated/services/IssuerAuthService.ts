/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class IssuerAuthService {

    /**
     * IssuerAuth
     * Internal only
     * @param id Issuer ID
     * @returns any OK
     * @throws ApiError
     */
    public static issuerAuth(
        id: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ext/oidc/v1/issuers/{id}/authorize',
            path: {
                'id': id,
            },
        });
    }

}
