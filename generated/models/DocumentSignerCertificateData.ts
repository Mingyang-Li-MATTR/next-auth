/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DocumentSignerCertificateData = {
    notBefore?: string;
    notAfter?: string;
    keyUsage?: {
        vaccination?: boolean;
        test?: boolean;
        recovery?: boolean;
    };
    country?: string;
};

