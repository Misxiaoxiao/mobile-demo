import { ActionContext } from 'vuex'
import api from './locate.api'
import * as types from './locate.types'
import { ActionBuilder } from '../../action.common'
import { GeoLocation, GeoError } from './locate.model'
import { LocateState } from './locate.store'

declare const window: Window & { AMap: any }

const AMap = window.AMap

const locateCurrentCity = ({commit}: ActionContext<LocateState, any>) => {
    commit(types.LOCATING_CURRENT_CITY)
    let geo = new AMap.CitySearch()
    geo.getLocalCity((status: string, result: any) => {
        if (status === 'complete' && result.info === 'OK') {
            commit(types.LOCATING_CURRENT_CITY_SUCCESS, {
                city: result.city
            })
        } else {
            commit(types.LOCATING_CURRENT_CITY_FAIL, {
                err: result
            })
        }
    })
}

const getGeoLocation = ({commit}: ActionContext<LocateState, any>) => {
    commit(types.LOCATING_CURRENT_POSITION)
    let geo = new AMap.Geolocation({
        enableHighAccuracy: true,
        timeout: 10000
    })
    geo.getCurrentPosition((status: string, result: GeoLocation | GeoError) => {
        if (status === 'complete' && result.info === 'SUCCESS') {
            commit(types.LOCATING_CURRENT_POSITION_SUCCESS, {
                location: result
            })
        } else {
            commit(types.LOCATING_CURRENT_POSITION_ERROR, {
                err: result
            })
        }
    })
}

const setCurrentCity = ActionBuilder({
    actionSuccess: types.LOCATING_CURRENT_CITY_SUCCESS
})

const searchAddressByKeyword = ActionBuilder({
    method: api.searchAddress,
    actionStart: types.SEARCHING_SUGGESTED_ADDRESSES,
    actionSuccess: types.SEARCHING_SUGGESTED_ADDRESSES_SUCCESS,
    actionFail: types.SEARCHING_SUGGESTED_ADDRESSES_FAIL
})

export default {
    actions: {
        getGeoLocation,
        searchAddressByKeyword,
        locateCurrentCity,
        setCurrentCity
    }
}
