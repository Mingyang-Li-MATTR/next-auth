/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetDidResponse = {
    didDocument?: any;
    registrationStatus?: string;
    localMetadata?: {
        /**
         * Timestamp of when the DID was registered
         */
        registered?: number;
        /**
         * An array of keys that describe the relationship between keys listed in the DID document and keys that exist in a connected KMS.
         */
        keys: Array<{
            kmsKeyId?: string;
            didDocumentKeyId?: string;
        }>;
        /**
         * The DID document that was created for the DID
         */
        initialDidDocument?: any;
    };
};

