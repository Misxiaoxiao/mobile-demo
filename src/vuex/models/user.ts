import { Photo, Share } from './common'

interface Profile {
    profession: string;
    xingzuo: string;
    born_province: string;
    born_city: string;
    college: string;
    company: string;
}

export interface IdentityModel {
    identity_number: string;
    identity_username: string;
    identity_validate?: Photo;
}

export interface UserModel {
    id: string;
    biz?: boolean;
    account_type?: number;
    phone?: string;
    username?: string;
    user_type?: number;
    avatar?: Photo;
    gender?: string;
    share?: Share;
    identity_validate_status?: number;
    client_attr?: Profile;
}