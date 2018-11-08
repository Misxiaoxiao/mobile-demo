import { UserModel } from '@/vuex/models/user'

interface Setting {
    receive_sms: boolean;
}

interface Account extends UserModel {
    bonus?: number;
    setting?: Setting;
    wallet_balance?:number;
    frozen_balance?: number;
    available_balance?: number;
}

export interface UserProfile {
    user: Account;
    room_count?: number;
    validate_room_count?: number;
    online_room_count?: number;
    contract_count?: number;
    unread_evalute_count?: number;
}