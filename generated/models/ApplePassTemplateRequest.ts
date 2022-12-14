/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApplePassTemplateRequest = {
    template: Blob;
    /**
     * Name of the template
     */
    name: string;
    /**
     * File name for generated .pkpass bundles, should only include alphanumeric characters, '_', or '-', and ends with '.pkpass'.
     */
    fileName: string;
    /**
     * Apple team identifier
     */
    teamIdentifier: string;
    /**
     * Apple pass identifier
     */
    passTypeIdentifier: string;
    /**
     * Apple G1 or G4 WorldWide Developer Relations certificate
     */
    wwdr: string;
    /**
     * Apple Pass signer certificate
     */
    signerCert: string;
    /**
     * The encrypted key of the Apple Pass signer certificate
     */
    signerKey: string;
    /**
     * Passphrase for the encrypted signer certificate key
     */
    signerKeyPassphrase: string;
};

