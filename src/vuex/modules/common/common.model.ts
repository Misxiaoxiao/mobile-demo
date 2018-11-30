interface CityModel {
    display: string;
    data: string;
    group: string;
}

export interface CityListModel {
    热门?: CityModel[];
    ABCD?: CityModel[];
    EFGH?: CityModel[];
    JKLM?: CityModel[];
    NOPQRS?: CityModel[];
    TUVWX?: CityModel[];
    YZ?: CityModel[];
}

const navigation = window.navigator

export class DeviceModel {
    device_manufacturer?: string = navigation.vendor
    device_platform?: string = navigation.platform	
    device_model?: string = navigation.userAgent
    device_version?: string = navigation.appVersion
}

interface AppInfoModel {
    version: string;
    int_version: number;
    if_force: boolean;
    prompt: boolean;
    download_url: string;
    description: string;
    [propName: string]: any;
}

export interface AppModel {
    android: AppInfoModel;
    ios: AppInfoModel;
}