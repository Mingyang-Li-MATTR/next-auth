/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class IssuerTokenService {

    /**
     * IssuerToken
     * Internal only
     * @param id Issuer ID
     * @returns any OK
     * @throws ApiError
     */
    public static issuertoken(
        id: string,
    ): CancelablePromise<{
        token?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ext/oidc/v1/issuers/{id}/token',
            path: {
                'id': id,
            },
        });
    }

}
