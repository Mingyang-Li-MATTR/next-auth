/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetOidcIssuersResponse = {
    /**
     * Starting point for next cursor to use in a page
     */
    nextCursor?: string;
    data?: ({
        /**
         * Issuer id
         */
        id?: string;
        federatedProvider?: {
            /**
             * URL where the authorization code gets sent
             */
            callbackUrl?: string;
        };
    } & {
        /**
         * Credential information
         */
        credential: {
            /**
             * The Issuer DID
             */
            issuerDid: string;
            /**
             * The location of the logo image. The supported formats are jpg, png, and svg.
             */
            issuerLogoUrl?: string;
            /**
             * The location of the icon image. The supported formats are jpg, png, and svg.
             */
            issuerIconUrl?: string;
            /**
             * Meaningful name for the Credential
             */
            name: string;
            /**
             * Description of the credential (a wallet must support W3C Credential Data Model v2 in order to display)
             */
            description?: string;
            /**
             * JSON-LD schema where the term is referenced
             */
            context: Array<string>;
            /**
             * The Credential Type
             */
            type: (string | Array<string>);
            /**
             * Includes optional credential branding properties.
             */
            credentialBranding?: {
                /**
                 * The background colour used for the credential card. The format is "#rrggbb" where "rrggbb" is a hex RGB triplet, such as "#FFCC00".
                 */
                backgroundColor?: string;
                /**
                 * The location of the watermark image. The supported formats are jpg, png, and svg.
                 */
                watermarkImageUrl?: string;
            };
        };
        /**
         * Federated OIDC Provider details
         */
        federatedProvider: {
            /**
             * Base url for provider well-known endpoint. Must not contain auth, or query parameters. Port and fragment parameters will be dropped. URL must use https and have a valid public TLD. Unicode will be converted to ASCII
             */
            url: string;
            /**
             * OIDC scope associated with claims in the provider
             */
            scope?: Array<string>;
            /**
             * Client ID configured in the provider
             */
            clientId: string;
            /**
             * Client secret configured in the provider
             */
            clientSecret: string;
            /**
             * IDP authentication mechanism used to get access token
             */
            tokenEndpointAuthMethod?: string;
            /**
             * Source of claims for issuing credentials
             */
            claimsSource?: string;
        };
        /**
         * Parameters that should be included in the request to the IDP. Keys must be strings. Values of top level object keys must stringify to less than 1000 characters each
         */
        staticRequestParameters?: (string | number | boolean | any[]);
        /**
         * Parameters that can be provided by the client to be forwarded to the IDP. The forwarded parameter values are limited to under 1000 characters when stringified
         */
        forwardedRequestParameters?: Array<string>;
        /**
         * Map OpenID Connect terms to JSON-LD terms
         */
        claimMappings: Array<{
            /**
             * The credential claim name in JSON-LD terms
             */
            jsonLdTerm: string;
            /**
             * The credential claim name in OIDC terms
             */
            oidcClaim: string;
        }>;
    });
};

