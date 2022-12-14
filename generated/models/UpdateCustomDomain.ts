/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UpdateCustomDomain = ({
    id?: string;
} & {
    /**
     * Name of the custom domain
     */
    name: string;
    /**
     * Url for the domain logo
     */
    logoUrl: string;
    /**
     * New domain
     */
    domain: string;
    /**
     * Homepage for the url
     */
    homepage: string;
});

