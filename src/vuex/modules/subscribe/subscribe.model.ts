type SubscribeType = 'share' | 'exclusive'

export const SUBSCRIBE_TYPES = [
    { name: '合租', value: 'share' },
    { name: '整租', value: 'exclusive' }
]

interface Subscribe {
    city?: string;
    address?: string;
    longitude?: string;
    latitude?: string;
    is_work?: number;
    budget?: number;
    check_at?: string;
    type?: SubscribeType;
    bed_count?: number[];
    gender?: number;
    room_type_affirm?: string;
    [propName: string]: any;
}

export interface SubscribeModel extends Subscribe {
    id?: string;
    uid?: string;
    created_at?: string;
    updated_at?: string;
    deteted_at?: string;
}

export interface SubscribeForm extends Subscribe {
    subscribe_id?: string;
}