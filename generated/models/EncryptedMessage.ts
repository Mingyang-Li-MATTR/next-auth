/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EncryptedMessage = {
    jwe: {
        protected: string;
        recipients: Array<any>;
        ciphertext: string;
        iv: string;
        tag: string;
    };
};

