/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Credential status location information
 */
export type CredentialStatus = {
    /**
     * Unique ID for the credential status
     */
    id?: string;
    /**
     * Indicates that the status contains revocation information
     */
    type?: string;
    /**
     * The location within the revocation list for the credential
     */
    revocationListIndex?: number;
    /**
     * The location of the revocation list
     */
    revocationListCredential?: string;
};

