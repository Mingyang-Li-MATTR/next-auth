/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateDidDocument = {
    method: CreateDidDocument.method;
    /**
     * To define a key type for a did:key or to define a domain for did:web
     */
    options?: any;
};

export namespace CreateDidDocument {

    export enum method {
        KEY = 'key',
        WEB = 'web',
        ION = 'ion',
    }


}

