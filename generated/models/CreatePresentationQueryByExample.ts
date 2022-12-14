/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreatePresentationQueryByExample = {
    type: string;
    credentialQuery: Array<{
        required: boolean;
        reason?: string;
        example: Array<{
            /**
             * array of contexts
             */
            '@context': Array<any>;
            type: (string | Array<string>);
            /**
             * array of trusted issuers
             */
            trustedIssuer: Array<{
                required: boolean;
                issuer: string;
            }>;
        }>;
    }>;
};

