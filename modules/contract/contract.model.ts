import { Share } from '@/vuex/models/common'
import { IdentityModel, UserModel } from '@/vuex/models/user'

export enum ContractStatus {
    等待,
    已签订,
    拒绝申请,
    已失效 = 7
}

interface ContractUser extends UserModel {
    phone: string;
    identity?: IdentityModel
}

export interface ContractModel {
    category?: number;
    negotiation_status?: number;
    rent_deposit?: number;
    rent_pay_type?: number;
    rent_price?: number;
    start_time?: string;
    end_time?: string;
    id?: string;
    invite?: boolean;
    is_owner?: boolean;
    is_self?: boolean;
    object_user?: ContractUser;
    owner_user?: ContractUser;
    self_user?: ContractUser;
    user?: ContractUser;
    share?: Share;
    create_time?: string;
    [propName: string]: any;
}