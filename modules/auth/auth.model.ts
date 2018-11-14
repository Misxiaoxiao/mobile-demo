export interface OauthToken {
    token: string;
    secret: string;
    uid: string;
    new?: boolean
}