/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApplePassTemplatesResponse = {
    nextCursor?: string;
    data?: Array<{
        id?: string;
        /**
         * Digital pass type
         */
        passType?: 'apple' | 'google';
        name?: string;
        metadata?: {
            fileName?: string;
            teamIdentifier?: string;
            passTypeIdentifier?: string;
        };
    }>;
};

