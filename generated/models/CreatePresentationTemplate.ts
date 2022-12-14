/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreatePresentationTemplate = {
    /**
     * Must match domain of the tenant
     */
    domain: string;
    /**
     * Internal descriptor only
     */
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
};

