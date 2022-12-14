/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OidcIssuerAuthService {

    /**
     * Well Known OpenId Configuration
     * The standard OpenID Connect Well Known configuration metadata endpoint.
     *
     * This endpoint is unprotected, public facing and can be used by any party wishing to discover the OpenID Connect capabilities.
     *
     * @param id Issuer ID
     * @returns any Returns OpenID configuration
     * @throws ApiError
     */
    public static issuerWellKnownOidcConfig(
        id: string,
    ): CancelablePromise<{
        authorization_endpoint?: string;
        claims_parameter_supported?: boolean;
        claims_supported?: Array<string>;
        code_challenge_methods_supported?: Array<string>;
        end_session_endpoint?: string;
        grant_types_supported?: Array<string>;
        id_token_signing_alg_values_supported?: Array<string>;
        issuer?: string;
        jwks_uri?: string;
        registration_endpoint?: string;
        request_object_signing_alg_values_supported?: Array<string>;
        request_parameter_supported?: boolean;
        request_uri_parameter_supported?: boolean;
        require_request_uri_registration?: boolean;
        response_modes_supported?: Array<string>;
        response_types_supported?: Array<string>;
        scopes_supported?: Array<string>;
        subject_types_supported?: Array<string>;
        token_endpoint_auth_methods_supported?: Array<string>;
        token_endpoint_auth_signing_alg_values_supported?: Array<string>;
        token_endpoint?: string;
        userinfo_endpoint?: string;
        userinfo_signing_alg_values_supported?: Array<string>;
        claim_types_supported?: Array<string>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/ext/oidc/v1/issuers/{id}/.well-known/openid-configuration',
            path: {
                'id': id,
            },
        });
    }

}
