/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DccSignService {

    /**
     * Sign a Digital Covid Certificate
     * Creates a signed DCC (Digital Covid Certificate) using either the specified document signer or selected default (if one isn't provided in the request payload).
     *
     * If supplied, `documentSignerId` must be a valid UUID for a document signer set up under the `documentsigners` endpoint.
     *
     * An `expiry` value can also be supplied specify to the expiration of the signed payload. If not provided, the sign operation will default the expiry to be one year from the current date - as recommended under the specification.
     *
     * The `payload` should conform with the JSON schema outlined in the [EUDCC specification](https://github.com/ehn-dcc-development/ehn-dcc-schema).
     *
     * The `payload.[v|r|t]` should be an array with only one item, and only one of the field `[v|r|t]` is supported at the same time, it depends on the type of certificate.
     *
     * The `payload.[v|r|t][0].ci` value will be automatically generated. If supplied an `400 Bad Request` response will be returned.
     *
     * The `metadata` is an optional map of key value pairs (string, string).
     *
     * Validation will be performed as part of this operation to ensure the payload is valid against the schema specified under the `payload.ver` in the request.
     *
     * @param requestBody DCC payload to sign
     * @returns any The signed DCC will be returned as a `base45` encoded string
     * @throws ApiError
     */
    public static signDcc(
        requestBody: {
            /**
             * Note - this field is optional and if not supplied MATTR VII will use the default expiry which is 1 year as recommended by the DCC specification
             */
            expiry?: string;
            /**
             * Note - this field is optional and if not supplied, MATTR VII will attempt to automatically decide which document signer to use.
             */
            documentSignerId?: string;
            payload: {
                /**
                 * Schema version of the DCC payload to use, only latest released version is supported
                 */
                ver: '1.3.0';
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
            };
            /**
             * Note - this field is an optional (string, string) map of metadata
             */
            metadata?: Record<string, string>;
        },
    ): CancelablePromise<{
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
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ext/dcc/v1/sign',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Failed to sign DCC, invalid schema, issuer not found, user defined value is not supported, this value will be generated etc`,
            },
        });
    }

}
