/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Request to convert into a CBOR-LD document
 * JSON-LD input encoding defaults to none, while CBOR-LD input encoding defaults to base64
 *
 */
export type LinkedDataRequest = {
    options: {
        inputFormat: LinkedDataRequest.inputFormat;
        outputFormat: LinkedDataRequest.outputFormat;
        /**
         * When output format is `cborld`, the output encoding is `base64`.
         * If output format is `jsonld`, the output encoding can be either `none` (object) or `base64` (string)
         *
         */
        outputEncoding?: LinkedDataRequest.outputEncoding;
    };
    data: string;
};

export namespace LinkedDataRequest {

    export enum inputFormat {
        JSONLD = 'jsonld',
        CBORLD = 'cborld',
    }

    export enum outputFormat {
        JSONLD = 'jsonld',
        CBORLD = 'cborld',
    }

    /**
     * When output format is `cborld`, the output encoding is `base64`.
     * If output format is `jsonld`, the output encoding can be either `none` (object) or `base64` (string)
     *
     */
    export enum outputEncoding {
        BASE64 = 'base64',
        NONE = 'none',
    }


}

