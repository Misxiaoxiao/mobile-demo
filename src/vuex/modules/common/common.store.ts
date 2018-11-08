import {
    GET_COMMON_CITIES_SUCCESS,
    GET_COMMON_CITIES_FAIL,
    GET_TRAFFIC_INFO_SUCCESS,
    GET_TRAFFIC_INFO_INFO
} from './common.types'

import {CityListModel} from './common.model'

export class CommonState {
    cities: CityListModel = {}
    city_traffic: any = {}
}

const mutations = {
    [GET_TRAFFIC_INFO_SUCCESS] (state: CommonState, action: any) {
        state.city_traffic = action.result
    },
    [GET_TRAFFIC_INFO_INFO] (state: CommonState) {
        state.city_traffic = {}
    },
    [GET_COMMON_CITIES_SUCCESS] (state: CommonState, action: any) {
        state.cities = action.result
    },
    [GET_COMMON_CITIES_FAIL] (state: CommonState) {
        state.cities = {}
    }
}

export default {
    state: new CommonState(),
    mutations
}