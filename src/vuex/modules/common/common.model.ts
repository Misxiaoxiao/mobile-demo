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
