import api from './residence.api'
import * as types from './residence.types'
import { ActionBuilder } from '../../action.common'

const viewBedDetail = ActionBuilder({
    method: api.viewBed,
    actionStart: types.REQUESTING_BED_DETAIL,
    actionSuccess: types.REQUESTING_BED_DETAIL_SUCCESS,
    actionFail: types.REQUESTING_BED_DETAIL_FAIL
})

const viewDemandDetail = ActionBuilder({
    method: api.viewDemand,
    actionStart: types.REQUESTING_DEMAND_DETAIL,
    actionSuccess: types.REQUESTING_DEMAND_DETAIL_SUCCESS,
    actionFail: types.REQUESTING_DEMAND_DETAIL_FAIL
})

const favorBed = ActionBuilder({
    method: api.followBed,
    actionStart: types.FAVORING_BED_DETAIL,
    actionSuccess: types.FAVORING_BED_DETAIL_SUCCESS,
    actionFail: types.FAVORING_BED_DETAIL_FAIL
})

const unfavorBed = ActionBuilder({
    method: api.unfollowBed,
    actionStart: types.UNFAVORING_BED_DETAIL,
    actionSuccess: types.UNFAVORING_BED_DETAIL_SUCCESS,
    actionFail: types.UNFAVORING_BED_DETAIL_FAIL
})

const favorDemand = ActionBuilder({
    method: api.followDemand,
    actionStart: types.FAVORING_BED_DETAIL,
    actionSuccess: types.FAVORING_BED_DETAIL_SUCCESS,
    actionFail: types.FAVORING_BED_DETAIL_FAIL
})

const unfavorDemand = ActionBuilder({
    method: api.unfollowDemand,
    actionStart: types.UNFAVORING_BED_DETAIL,
    actionSuccess: types.UNFAVORING_BED_DETAIL_SUCCESS,
    actionFail: types.UNFAVORING_BED_DETAIL_FAIL
})

export default {
    actions: {
        viewBedDetail,
        viewDemandDetail,
        favorBed,
        unfavorBed,
        favorDemand,
        unfavorDemand
    }
}