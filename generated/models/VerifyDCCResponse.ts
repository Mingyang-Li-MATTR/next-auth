/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifyDCCResponse = {
    verified: boolean;
    payload?: ({
        /**
         * Schema version of the DCC payload to use, only latest released version is supported
         */
        ver: VerifyDCCResponse.ver;
        nam: {
            /**
             * Surname
             */
            fn?: string;
            /**
             * Standardized Surname
             */
            fnt: string;
            /**
             * Forename
             */
            gn?: string;
            /**
             * Standardized Forename
             */
            gnt?: string;
        };
        /**
         * Date of Birth
         */
        dob: string;
        /**
         * Vaccination Group
         */
        'v'?: Array<{
            /**
             * Disease Targeted
             */
            tg: string;
            /**
             * Vaccine
             */
            vp: string;
            /**
             * Vaccine Medicinal Product
             */
            mp: string;
            /**
             * Market Authorization Holder
             */
            ma: string;
            /**
             * Dose Number
             */
            dn: number;
            /**
             * Total Series of Doses
             */
            sd: number;
            /**
             * Date Administered ISO8601
             */
            dt: string;
            /**
             * Country of adminisration
             */
            co: string;
            /**
             * Issuer
             */
            is: string;
        }>;
        /**
         * Test Group
         */
        't'?: Array<{
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
        }>;
        /**
         * Recovery Group
         */
        'r'?: Array<{
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
        }>;
    } & {
        'v'?: any;
        't'?: any;
        'r'?: any;
    });
    metadata?: {
        expiry?: string;
        issuedAt?: string;
        trustedDocumentSignerId?: string;
        /**
         * Certificate identifier, format as per UVCI
         */
        certificateId?: string;
    };
    error?: {
        type: string;
        message: string;
        details?: any;
    };
};

export namespace VerifyDCCResponse {

    /**
     * Schema version of the DCC payload to use, only latest released version is supported
     */
    export enum ver {
        _1_3_0 = '1.3.0',
    }


}

