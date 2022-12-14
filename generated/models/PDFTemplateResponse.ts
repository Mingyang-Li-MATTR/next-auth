/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PDFTemplateResponse = {
    id?: string;
    name?: string;
    fileName?: string;
    metadata?: {
        title?: string;
    };
    fields?: Array<{
        key: string;
        value: string;
        isRequired?: boolean;
        alternativeText: string;
        fontName?: string;
    }>;
};

