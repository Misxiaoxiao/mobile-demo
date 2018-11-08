import { Photo, Share } from './common'

interface CheckinModel {
    id: string | string;
    uid: string;
    money: number;
    dateDetail: string;
    start_time: string;
    status: number;
    short_rent: number;
    sex?: number;
}

export interface BedModel extends CheckinModel {
    room_id: string;
    title: string;
    money: number;
    state: number;
    content: string;
    create_time: string;
    photo: Photo;
    [propName: string]: any;
}

export interface RequireModel extends CheckinModel {
    share: Share;
    format_last_modify_time: string;
    [propName: string]: any;
}