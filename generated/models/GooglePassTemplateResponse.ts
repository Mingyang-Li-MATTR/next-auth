/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GooglePassTemplateResponse = {
    id?: string;
    /**
     * Digital pass type
     */
    passType?: GooglePassTemplateResponse.passType;
    name?: string;
    metadata?: {
        issuerId?: string;
        serviceAccountClientEmail?: string;
        payPassId?: string;
    };
};

export namespace GooglePassTemplateResponse {

    /**
     * Digital pass type
     */
    export enum passType {
        APPLE = 'apple',
        GOOGLE = 'google',
    }


}

