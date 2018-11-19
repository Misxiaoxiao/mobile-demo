import {
    SEARCHING_SUGGESTED_ADDRESSES,
    SEARCHING_SUGGESTED_ADDRESSES_SUCCESS,
    SEARCHING_SUGGESTED_ADDRESSES_FAIL,
    LOCATING_CURRENT_CITY,
    LOCATING_CURRENT_CITY_SUCCESS,
    LOCATING_CURRENT_CITY_FAIL,
    LOCATING_CURRENT_POSITION,
    LOCATING_CURRENT_POSITION_SUCCESS,
    LOCATING_CURRENT_POSITION_ERROR
} from './locate.types'

import { Location } from './locate.model'
import {token} from '@/vuex/api/config'

export class LocateState {
    querying: boolean = false
    addresses: Location[] = []
    locating: boolean = false
    current_city: string = token.getValue('city') ? token.getValue('city') : '上海'
    locate_address: any = {}
}

const mutations = {
    [SEARCHING_SUGGESTED_ADDRESSES] (state: LocateState) {
        state.querying = true
    },
    [SEARCHING_SUGGESTED_ADDRESSES_SUCCESS] (state: LocateState, action: any) {
        state.addresses = action.result
        state.querying = false
    },
    [SEARCHING_SUGGESTED_ADDRESSES_FAIL] (state: LocateState) {
        state.addresses = []
        state.querying = false
    },
    [LOCATING_CURRENT_CITY] (state: LocateState) {
        state.locating = true
    },
    [LOCATING_CURRENT_CITY_SUCCESS] (state: LocateState, action: any) {
        let _city = action.city.replace('市', '')
        state.current_city = _city !== '全国' ? _city : '上海'
        token.setValue('city', state.current_city)
        state.locating = false
    },
    [LOCATING_CURRENT_CITY_FAIL] (state: LocateState) {
        state.locating = false
    },
    [LOCATING_CURRENT_POSITION] (state: LocateState) {
        state.locating = true
    },
    [LOCATING_CURRENT_POSITION_SUCCESS] (state: LocateState, action: any) {
        state.locating = false
        state.locate_address = action.location
    },
    [LOCATING_CURRENT_POSITION_ERROR] (state: LocateState) {
        state.locating = false
        state.locate_address = {}
    }
}

export default {
    state: new LocateState(),
    mutations
}
