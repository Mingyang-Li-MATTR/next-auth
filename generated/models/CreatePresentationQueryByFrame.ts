/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreatePresentationQueryByFrame = {
    type: string;
    credentialQuery: Array<{
        reason: string;
        frame: {
            '@context': Array<any>;
            type: (string | Array<string>);
            credentialSubject: {
                '@explicit': boolean;
                educationalCredentialAwarded: any;
                familyName: any;
            };
        };
        trustedIssuer: Array<{
            required: boolean;
            issuer: string;
        }>;
    }>;
};

