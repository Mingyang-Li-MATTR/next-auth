/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ErrorResponse = {
    code: string;
    message: string;
    details?: Array<{
        /**
         * The value that was provided
         */
        value?: string;
        /**
         * Description of why the request is invalid
         */
        msg?: string;
        /**
         * The parameter that is invalid
         */
        param?: string;
        /**
         * The location in either body, query, path or params
         */
        location?: string;
    }>;
};

