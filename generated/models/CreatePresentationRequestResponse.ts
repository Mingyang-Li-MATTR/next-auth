/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreatePresentationRequestResponse = {
    /**
     * Presentation Request id
     */
    id?: string;
    /**
     * Endpoint that will receive the Verifiable Presentation
     */
    callbackUrl?: string;
    /**
     * Presentation Request Details
     */
    request?: {
        /**
         * Presentation Request id
         */
        id?: string;
        /**
         * Presentation Request schema
         */
        type?: string;
        /**
         * Verifier DID
         */
        from?: string;
        /**
         * Creation time
         */
        created_time?: number;
        /**
         * Expiry time
         */
        expires_time?: number;
        /**
         * Endpoint that will receive the Verifiable Presentation
         */
        reply_url?: string;
        /**
         * Verifier DID
         */
        reply_to?: Array<string>;
        /**
         * Definition of what type of Credential is being requested
         */
        body?: ({
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
        } & {
            /**
             * Challenge to match the response to a request
             */
            challenge?: string;
        });
    };
};

