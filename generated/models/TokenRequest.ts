/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TokenRequest = ({
    client_id?: ;
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
});

