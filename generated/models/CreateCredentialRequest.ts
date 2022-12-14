/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateCredentialRequest = {
    /**
     * Additional to any JSON-LD contexts 'https://www.w3.org/2018/credentials/v1' is always required.
     */
    '@context': Array<string>;
    /**
     * Generally a DID, identifier of who/what the subject is
     */
    subjectId?: string;
    /**
     * An optional tag to filter by, will not be part of the issued credential
     */
    tag?: string;
    /**
     * Type for the Credential, VerifiableCredential must be presented
     */
    type: (string | Array<string>);
    /**
     * Each value is a claim that is defined by one of the JSON-LD schemas.
     */
    claims: any;
    /**
     * Includes Issuer id (DID), domain name and optional branding properties.
     */
    issuer: {
        id: string;
        name: string;
        /**
         * The location of the logo image. The supported formats are jpg, png, and svg.
         */
        logoUrl?: string;
        /**
         * The location of the icon image. The supported formats are jpg, png, and svg.
         */
        iconUrl?: string;
    };
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
    /**
     * Flag to indicate whether the full credential should be stored in platform
     */
    persist?: boolean;
    /**
     * Flag to indicate if the credential needs to support revocation
     */
    revocable?: boolean;
    /**
     * Name of the credential (requires v2 data model)
     */
    name?: string;
    /**
     * Description of the credential (requires v2 data model)
     */
    description?: string;
};

