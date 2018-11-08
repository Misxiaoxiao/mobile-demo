export interface Geometry {
    lat: string | number;
    lng: string | number;
    [propName: string]: any;
}

export interface Photo {
    src: string;
    small: string;
    medium: string;
    large: string;
}

export interface Share {
    url: string;
    weibo: string;
    weixin: string;
    weixin_miniapp?: string;
}