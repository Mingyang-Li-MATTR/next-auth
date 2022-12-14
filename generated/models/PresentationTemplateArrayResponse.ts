/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PresentationTemplateArrayResponse = {
    /**
     * Starting point for next cursor to use in a page
     */
    nextCursor?: string;
    data?: Array<{
        id: string;
        domain: string;
        name: string;
        query: Array<({
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
        } | {
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
        } | {
            /**
             * DIDAuth
             */
            type: string;
        })>;
    }>;
};

