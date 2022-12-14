/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TrustedDocumentSignerRequest = {
    /**
     * PEM encoded X.509 certificate
     */
    certificatePem: string;
    public: boolean;
};

