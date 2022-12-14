/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DigitalCovidCertificateRecovery = ({
    /**
     * Disease Targeted
     */
    tg: string;
    /**
     * Complete date of first positive NAA test result
     */
    fr: string;
    /**
     * Country of test
     */
    co: string;
    /**
     * Certificate Issuer
     */
    is: string;
    /**
     * Certificate valid from
     */
    df: string;
    /**
     * Certificate valid until
     */
    du: string;
} & {
    /**
     * Certificate Identifier
     */
    ci: string;
});

