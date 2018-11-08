import { Photo } from '@/vuex/models/common'

export interface PreviewPhoto extends Photo {
    id: string;
    rotate: string;
    width: number;
    string: number;
    name: string;
}