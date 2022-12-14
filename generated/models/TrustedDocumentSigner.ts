/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TrustedDocumentSigner = {
    id: string;
    certificateKid?: string;
    certificateFingeprint?: string;
    /**
     * PEM encoded X.509 certificate
     */
    certificatePem?: string;
    certificateData?: {
        notBefore?: string;
        notAfter?: string;
        keyUsage?: {
            vaccination?: boolean;
            test?: boolean;
            recovery?: boolean;
        };
        country?: string;
    };
};

