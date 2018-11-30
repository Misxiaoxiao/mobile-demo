import api from './common.api'
import * as types from './common.types'
import { ActionBuilder } from '../../action.common'

const getCityTraffic = ActionBuilder({
    method: api.getTraffics,
    actionSuccess: types.GET_TRAFFIC_INFO_SUCCESS,
    actionFail: types.GET_TRAFFIC_INFO_INFO
})

const getCityList = ActionBuilder({
    method: api.getCities,
    actionSuccess: types.GET_COMMON_CITIES_SUCCESS,
    actionFail: types.GET_COMMON_CITIES_FAIL
})

const recordTerminalInfo = ActionBuilder({
    method: api.recordTerminal,
    actionSuccess: types.RECORD_TERMINAL_INFO_SUCCESS
})

const getApp = ActionBuilder({
    method: api.getApp,
    actionSuccess: types.GET_APP_INFO
})

export default {
    actions: {
        getApp,
        getCityList,
        getCityTraffic,
        recordTerminalInfo
    }
}
