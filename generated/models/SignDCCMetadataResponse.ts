/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignDCCMetadataResponse = {
    expiry: string;
    issuedAt: string;
    documentSignerId?: string;
    /**
     * Generated certificate identifier, format as per UVCI
     */
    certificateId?: string;
};

