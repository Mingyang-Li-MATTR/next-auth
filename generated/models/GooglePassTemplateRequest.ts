/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GooglePassTemplateRequest = {
    template: Blob;
    /**
     * Name of the template
     */
    name: string;
    /**
     * Google Pay Pass signer issuer ID
     */
    issuerId: string;
    /**
     * Email address of the Google Cloud Platform service account for accessing the Google Pay Passes API and issue passes on-behalf of the pass issuer.
     */
    serviceAccountClientEmail: string;
    /**
     * Private key PEM of the Google Cloud Platform service account
     */
    serviceAccountPrivateKey: string;
};

