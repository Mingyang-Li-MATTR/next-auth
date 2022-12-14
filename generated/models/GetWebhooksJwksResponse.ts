/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetWebhooksJwksResponse = {
    keys?: Array<{
        /**
         * Key type
         */
        kty?: string;
        /**
         * Elliptic curve used to generate the key
         */
        crv?: string;
        'x'?: string;
        use?: string;
        /**
         * Key ID
         */
        kid?: string;
    }>;
};

