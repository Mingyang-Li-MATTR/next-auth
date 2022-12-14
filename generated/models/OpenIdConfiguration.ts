/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OpenIdConfiguration = {
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
};

