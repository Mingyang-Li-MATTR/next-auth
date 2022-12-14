/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifyDCCMetadataResponse = {
    expiry?: string;
    issuedAt?: string;
    trustedDocumentSignerId?: string;
    /**
     * Certificate identifier, format as per UVCI
     */
    certificateId?: string;
};

