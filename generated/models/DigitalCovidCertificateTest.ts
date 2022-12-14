/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DigitalCovidCertificateTest = ({
    /**
     * Disease Targeted
     */
    tg: string;
    /**
     * Type of test
     */
    tt: string;
    /**
     * NAA Test Name
     */
    nm?: string;
    /**
     * RAT Test name and manufacturer
     */
    ma?: string;
    /**
     * Date/Time of Sample Collection
     */
    sc: string;
    /**
     * Test result
     */
    tr: string;
    /**
     *  Testing Centre
     */
    tc?: string;
    /**
     * Country of test
     */
    co: string;
    /**
     * Certificate Issuer
     */
    is: string;
} & {
    /**
     * Certificate Identifier
     */
    ci: string;
});

