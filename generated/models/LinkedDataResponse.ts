/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LinkedDataResponse = {
    metadata?: {
        /**
         * the encoding applied on top of actual result
         */
        encoding?: LinkedDataResponse.encoding;
        format?: LinkedDataResponse.format;
    };
    data?: string;
};

export namespace LinkedDataResponse {

    /**
     * the encoding applied on top of actual result
     */
    export enum encoding {
        BASE64 = 'base64',
        NONE = 'none',
    }

    export enum format {
        CBORLD = 'cborld',
        JSONLD = 'jsonld',
    }


}

