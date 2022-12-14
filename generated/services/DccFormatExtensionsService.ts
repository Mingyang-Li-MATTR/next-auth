/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DccFormatExtensionsService {

    /**
     * Generate the QR to represent a Digital Covid Certificate
     * Generate a QR code to represent a digital covid certificate from the `base45` encoded string provided as the `payload`.
     * @param requestBody The signed DCC represented as a `base45` encoded string.
     * @returns any QR Code generated as a PNG image
     * @throws ApiError
     */
    public static generateDccqr(
        requestBody: {
            /**
             * Base45 encoded DCC
             */
            payload: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/ext/dcc/v1/qrcode',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
