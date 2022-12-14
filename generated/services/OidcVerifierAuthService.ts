/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OidcVerifierAuthService {

    /**
     * Well Known OpenId Configuration
     * The standard OpenID Connect Well Known configuration metadata endpoint.
     *
     * This endpoint is unprotected, public facing and can be used by any party wishing to discover the OpenID Connect capabilities.
     *
     * @param id Verifier ID
     * @returns any Returns OpenID configuration
     * @throws ApiError
     */
    public static verifierWellKnownOidcConfig(
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
            url: '/ext/oidc/v1/verifiers/{id}/.well-known/openid-configuration',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Retrieve Token
     * > OIDC Token endpoint
     *
     * The OpenId Connect `/token` endpoint is used to obtain the `access_token` and `id_token` by presenting a valid authorization `code`
     * @param id Verifier ID
     * @param formData Token endpoint request
     * @returns any OK
     * @throws ApiError
     */
    public static verifierRetrieveToken(
        id: string,
        formData?: ({
            client_id?: string;
            client_secret?: string;
            grant_type?: string;
            code?: string;
            redirect_uri?: string;
        } | {
            client_id?: string;
            client_secret?: string;
            grant_type?: string;
            refresh_token?: string;
            redirect_uri?: string;
        }),
    ): CancelablePromise<{
        access_token?: string;
        token_type?: 'bearer';
        refresh_token?: string;
        expires_in?: number;
        id_token?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ext/oidc/v1/verifiers/{id}/token',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                400: `Bad Request`,
            },
        });
    }

}
