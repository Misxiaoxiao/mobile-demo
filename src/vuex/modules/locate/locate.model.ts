import { Geometry } from '@/vuex/models/common'

interface Point {
    x: string;
    y: string;
}

interface AddressComponent {
    province: string;
    city: string;
    street: string;
    streetNumber: string;
    [propName: string]: any;
}

export interface GeoLocation {
    addressComponent: AddressComponent;
    position: Geometry;
    formattedAddress: string;
    info: string;
    type: string;
    [propName: string]: any;
}

export interface GeoError {
    info: string;
    message: string;
}

export interface Location {
    name: string;
    city: string;
    district: string;
    addr: string;
    road: string;
    location: Geometry;
    point: Point;
}
