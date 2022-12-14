/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VerifiablePresentation = {
    presentation: {
        '@context': Array<any>;
        type: Array<any>;
        verifiableCredential: Array<{
            '@context': Array<string>;
            type: Array<string>;
            /**
             * Includes issuer id (did) and its domain (inside name parameter)
             */
            issuer?: ({
                id?: string;
                name?: string;
            } | string);
            issuanceDate: string;
            /**
             * Credential status location information
             */
            credentialStatus?: {
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
            credentialSubject: {
                id?: string;
                givenName?: string;
                familyName?: string;
                alumniOf?: string;
            };
            proof: {
                type?: string;
                created?: string;
                /**
                 * Compact form of JWS
                 */
                jws?: string;
                proofPurpose?: string;
                verificationMethod?: string;
            };
            /**
             * Name of the credential (requires v2 data model)
             */
            name?: string;
            /**
             * Description of the credential (requires v2 data model)
             */
            description?: string;
        }>;
        id: string;
        holder: string;
        proof: Array<{
            type: string;
            created: string;
            challenge: string;
            domain: string;
            jws: string;
            proofPurpose: string;
            verificationMethod: string;
        }>;
    };
};

