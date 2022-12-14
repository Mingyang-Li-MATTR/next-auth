/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * VerifyCompactCredentialResponse
 */
export type VerifyCompactCredentialResponse = {
    verified: boolean;
    /**
     * CompactCredentialSignResponse
     */
    decoded: Record<string, (string | number | boolean)>;
    error?: {
        type: string;
        message: string;
        details?: any;
    };
};

