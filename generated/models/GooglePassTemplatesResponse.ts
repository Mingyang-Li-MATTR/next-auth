/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GooglePassTemplatesResponse = {
    nextCursor?: string;
    data?: Array<{
        id?: string;
        /**
         * Digital pass type
         */
        passType?: 'apple' | 'google';
        name?: string;
        metadata?: {
            issuerId?: string;
            serviceAccountClientEmail?: string;
            payPassId?: string;
        };
    }>;
};

