import { UserModel } from '@/vuex/models/user'
import { RequireModel } from '@/vuex/models/bed'
import { RoomModel } from '@/vuex/models/room'

export interface DemandModal {
    demand: RequireModel;
    user: UserModel;
}

export interface RoomItem {
    room: RoomModel
}
