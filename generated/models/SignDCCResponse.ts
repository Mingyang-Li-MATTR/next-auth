/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SignDCCResponse = {
    metadata?: {
        expiry: string;
        issuedAt: string;
        documentSignerId?: string;
        /**
         * Generated certificate identifier, format as per UVCI
         */
        certificateId?: string;
    };
    /**
     * Base 45 DCC string
     */
    payload: string;
};

