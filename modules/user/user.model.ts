import { UserModel } from '@/vuex/models/user'
import { RoomModel } from '@/vuex/models/room'

interface TagModel {
    id: string;
    name: string;
}

export interface UserDetail {
    user?: UserModel;
    evaluate_count?: number;
    is_self?: boolean;
    user_follow?: boolean;
    rooms?: RoomModel[];
    tags?: TagModel[]
}