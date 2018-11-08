import { UserModel } from '@/vuex/models/user'
import { BedModel, RequireModel } from '@/vuex/models/bed'
import { LayoutModel } from '@/vuex/models/room'

interface AttributesModel extends LayoutModel {
    beds: BedModel[];
}

export interface DemandModal {
    demand: RequireModel;
    user: UserModel;
}

export interface RoomModel {
    room: {
        id: string;
        biz: boolean;
        client_attr?: AttributesModel;
        biz_attr?: AttributesModel;
        [propName: string]: any;
    }
}
