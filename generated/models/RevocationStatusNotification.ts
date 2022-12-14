/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RevocationStatusNotification = {
    id: string;
    type: string;
    to: Array<any>;
    from: string;
    created_time: number;
    body: {
        revocationListCredential: string;
        revocationListIndex: string;
        isRevoked: boolean;
    };
};

