import { BedModel } from './bed'

export const ROOM_TYPE_AFFIRMS: [string, string, string, string] = [
    '室友合租',
    '转租房源',
    '业主出租',
    '长租公寓'
]

export interface LayoutModel {
    elevator: number;
    bed_count: number;
    hall_count: number;
    bathroom_count: number;
    is_publish: boolean;
}

interface AttributesModel extends LayoutModel {
    beds: BedModel[];
}

export interface RoomModel {
    id?: string;
    biz?: boolean;
    client_attr?: AttributesModel;
    biz_attr?: AttributesModel;
    [propName: string]: any;
}