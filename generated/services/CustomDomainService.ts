/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CustomDomainService {

    /**
     * Create custom domain
     * A custom domain allows the display of your credentials or presentation requests to be rendered under the domain your preference as a tenant on the Mattr VII platform.
     *
     * The verifiable custom domain can be mapped with that of the issuer or verifier stated in a credential or presentation and allow for the following attributes to be defined and returned:
     * - Organisation Name
     * - Domain Name
     * - Logo
     * - Home Page
     *
     *
     * ## Returns
     * On Success, the response from the endpoint always include the Custom Domain
     *
     * @param requestBody The custom domain payload
     * @returns any Custom domain created
     * @throws ApiError
     */
    public static createCustomDomain(
        requestBody: {
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
        },
    ): CancelablePromise<{
        name: string;
        logoUrl: string;
        domain: string;
        homepage: string;
        verificationToken: string;
        isVerified: boolean;
        verifiedAt?: string | null;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/v1/config/domain',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request, Invalid request body`,
            },
        });
    }

    /**
     * Retrieve custom domain
     * Retrieve the custom domain information and it's verification status for your Mattr VII tenant.
     * @returns any Custom domain returned
     * @throws ApiError
     */
    public static retrieveCustomDomain(): CancelablePromise<{
        name: string;
        logoUrl: string;
        domain: string;
        homepage: string;
        verificationToken: string;
        isVerified: boolean;
        verifiedAt?: string | null;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/core/v1/config/domain',
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * Delete custom domain
     * Delete the custom domain.
     *
     * By deleting your existing custom domain it will break the linkage with any credentials issued under the custom domain, in turn causing issues when holders of those credentials go to present them.
     * @returns void
     * @throws ApiError
     */
    public static removeCustomDomain(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/core/v1/config/domain',
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * Update custom domain
     * Update the custom domain.
     *
     * Follows the same structure as the Create a Custom Domain endpoint.
     * @param requestBody
     * @returns any Custom Domain updated
     * @throws ApiError
     */
    public static updateCustomDomain(
        requestBody?: ({
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
        }),
    ): CancelablePromise<{
        name: string;
        logoUrl: string;
        domain: string;
        homepage: string;
        verificationToken: string;
        isVerified: boolean;
        verifiedAt?: string | null;
    }> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/core/v1/config/domain',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }

    /**
     * Verify custom domain
     * Verifies that you have control of the custom domain by examining the TXT record of the domain.
     * @returns void
     * @throws ApiError
     */
    public static verifyCustomDomain(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/core/v1/config/domain/verify',
            errors: {
                400: `Bad Request`,
                404: `Not Found`,
            },
        });
    }

}
