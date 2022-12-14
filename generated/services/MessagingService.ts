/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MessagingService {

    /**
     * Sign a message
     * Creates a signed message in the form of a JWS (JSON Web Signature) using the a specific Key from the DID (Decentralized Identifier) supplied in the request.
     *
     * `didUrl` must be a reference to a key that supports signing.
     * Use the `authentication` key value from the DID Document.
     *
     * ```
     * {
         * "didDocument": {
             * "@context": "https://w3.org/ns/did/v1",
             * "id": "did:key:z6MkjBWPPa1njEKygyr3LR3pRKkqv714vyTkfnUdP6ToFSH5#z6MkjBWPPa1njEKygyr3LR3pRKkqv714vyTkfnUdP6ToFSH5",
             * "authentication": [
                 * "did:key:z6MkjBWPPa1njEKygyr3LR3pRKkqv714vyTkfnUdP6ToFSH5#z6MkjBWPPa1njEKygyr3LR3pRKkqv714vyTkfnUdP6ToFSH5#z6MkjBWPPa1njEKygyr3LR3pRKkqv714vyTkfnUdP6ToFSH5#z6MkjBWPPa1njEKygyr3LR3pRKkqv714vyTkfnUdP6ToFSH5"
                 * ]
                 * }}
                 * ```
                 *
                 * #### Returns
                 *
                 * A JWS in compact serialization form signed by the did supplied in the request
                 * @param requestBody Sign message request
                 * @returns string Message signed
                 * @throws ApiError
                 */
                public static signMessage(
                    requestBody: {
                        /**
                         * The did keyId that will be used to sign the message with.
                         */
                        didUrl: string;
                        /**
                         * A JSON Object plaintext message
                         */
                        payload: any;
                    },
                ): CancelablePromise<string> {
                    return __request(OpenAPI, {
                        method: 'POST',
                        url: '/core/v1/messaging/sign',
                        body: requestBody,
                        mediaType: 'application/json',
                        errors: {
                            400: `Error signing message`,
                        },
                    });
                }

                /**
                 * Verify a message
                 * Provide a signed payload in the form of a JWS (JSON Web Signature) that has been signed by a DID (Decentralized Identifier) and get a response indicating if the signature verification was successful and the DID that was used to originally sign the payload.
                 *
                 * One use case for verifying a JWS with a DID is when the Mobile Wallet App sends a Request Object to an OpenID Provider as part of the Authorization Code Flow (as per https://openid.net/specs/openid-connect-core-1_0-final.html#RequestObject). The Request Object is wrapped in a JWS with a signature that is generated from the Subject DID on the mobile app. Therefore verifying the JWS proves that the mobile app has access to the private key of the Subject DID.
                 *
                 * #### Returns
                 *
                 * Indicates if the JWS payload was untampered and that the signature is valid by verifying that the kid in the JWS header is the same as the `iss` value in the Request Object, which could for instance be the Subject DID.
                 * The DID used is returned as both the full `didUrl` including fragment pointer to the DID Document and the `did` which can be used for Credential creation.
                 * @param requestBody JWS to verify
                 * @returns any Verification has been performed, see response body for result
                 * @throws ApiError
                 */
                public static verifyJws(
                    requestBody: {
                        /**
                         * Compact form of JWS
                         */
                        jws?: string;
                    },
                ): CancelablePromise<{
                    /**
                     * The didUrl included on the jws object
                     */
                    didUrl?: string;
                    /**
                     * The did parsed from the didUrl
                     */
                    did?: string;
                    /**
                     * Result of jws verification
                     */
                    verified?: boolean;
                    /**
                     * The payload of the verified message
                     */
                    payload?: string;
                }> {
                    return __request(OpenAPI, {
                        method: 'POST',
                        url: '/core/v1/messaging/verify',
                        body: requestBody,
                        mediaType: 'application/json',
                        errors: {
                            400: `Invalid JWS`,
                        },
                    });
                }

                /**
                 * Encrypt a message
                 * Encrypts a payload using a JWM format.
                 *
                 * The `senderDidUrl` must be a reference to a key that supports key agreement.
                 * Use the `id` value from the `keyAgreement` list in the DID Document.
                 *
                 * ```
                 * "keyAgreement": [
                     * {
                         * "id": "did:key:z6Mko4PvuwKzmjtaKTEV6ZhMSYqX5myTSe3L3Md4feiwCoua#z6LSkKk8HK73jYfUQRBHX3Qeb1Agv39qVNFn7n2PjRvjpPcy",
                         * "type": "X25519KeyAgreementKey2019",
                         * "controller": "did:key:z6Mko4PvuwKzmjtaKTEV6ZhMSYqX5myTSe3L3Md4feiwCoua",
                         * "publicKeyBase58": "9eZxm1JBe5wjK2oWzPthGQxD4tcinm5dEoJiEyHD71rD"
                         * }
                         * ]
                         * ```
                         *
                         * ### Returns
                         *
                         * @param requestBody Encryption params
                         * @returns any Message encrypted
                         * @throws ApiError
                         */
                        public static encryptMessage(
                            requestBody: {
                                senderDidUrl: string;
                                recipientDidUrls: Array<string>;
                                payload: any;
                            },
                        ): CancelablePromise<{
                            jwe: {
                                protected: string;
                                recipients: Array<any>;
                                ciphertext: string;
                                iv: string;
                                tag: string;
                            };
                        }> {
                            return __request(OpenAPI, {
                                method: 'POST',
                                url: '/core/v1/messaging/encrypt',
                                body: requestBody,
                                mediaType: 'application/json',
                                errors: {
                                    400: `Bad Request`,
                                },
                            });
                        }

                        /**
                         * Decrypt a message
                         * Decrypt a message where the tenant manages the Keys for the `recipientDidUrl`
                         * @param requestBody Decryption params
                         * @returns any Message Decrypted
                         * @throws ApiError
                         */
                        public static decryptMessage(
                            requestBody: {
                                jwe: string;
                            },
                        ): CancelablePromise<{
                            payload?: string;
                            senderDidUrl?: string;
                            senderPublicJwk?: any;
                            recipientDidUrl?: string;
                        }> {
                            return __request(OpenAPI, {
                                method: 'POST',
                                url: '/core/v1/messaging/decrypt',
                                body: requestBody,
                                mediaType: 'application/json',
                                errors: {
                                    400: `Bad Request`,
                                },
                            });
                        }

                        /**
                         * Send a message
                         * Send an encrypted JWM format DIDComm message to a DID service endpoint.
                         *
                         * In order to successfully route messages to their intended recipients the endpoint will resolve a public DID Document and look-up the service endpoint.
                         *
                         * This endpoint only accepts Encrypted JWM payloads to ensure that messages sent for recipients are encrypted-at-rest whilst in messaging inboxes.
                         * The JWM should be encrypted for the recipient based on a key available in the DID Document.
                         * @param requestBody
                         * @returns any Message sent
                         * @throws ApiError
                         */
                        public static sendMessage(
                            requestBody?: {
                                /**
                                 * recipient DID
                                 */
                                to?: string;
                                /**
                                 * JWE message
                                 */
                                message?: string;
                            },
                        ): CancelablePromise<any> {
                            return __request(OpenAPI, {
                                method: 'POST',
                                url: '/core/v1/messaging/send',
                                body: requestBody,
                                mediaType: 'application/json',
                                errors: {
                                    400: `Error sending message`,
                                },
                            });
                        }

                    }
