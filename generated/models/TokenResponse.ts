/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TokenResponse = {
    access_token?: string;
    token_type?: TokenResponse.token_type;
    refresh_token?: string;
    expires_in?: number;
    id_token?: string;
};

export namespace TokenResponse {

    export enum token_type {
        BEARER = 'bearer',
    }


}

