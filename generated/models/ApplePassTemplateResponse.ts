/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApplePassTemplateResponse = {
    id?: string;
    /**
     * Digital pass type
     */
    passType?: ApplePassTemplateResponse.passType;
    name?: string;
    metadata?: {
        fileName?: string;
        teamIdentifier?: string;
        passTypeIdentifier?: string;
    };
};

export namespace ApplePassTemplateResponse {

    /**
     * Digital pass type
     */
    export enum passType {
        APPLE = 'apple',
        GOOGLE = 'google',
    }


}

