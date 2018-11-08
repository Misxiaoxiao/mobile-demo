import api from './search.api'
import * as types from './search.types'
import { ActionBuilder } from '../../action.common'

const getBedList = ActionBuilder({
    method: api.searchBeds,
    actionStart: types.SEARCHING_BED_LIST,
    actionSuccess: types.SEARCHING_BED_LIST_SUCCESS,
    actionFail: types.SEARCHING_BED_LIST_FAIL
})

const getDemandList = ActionBuilder({
    method: api.searchDemands,
    actionStart: types.SEARCHING_DEMAND_LIST,
    actionSuccess: types.SEARCHING_DEMAND_LIST_SUCCESS,
    actionFail: types.SEARCHING_DEMAND_LIST_FAIL
})

export default {
    actions: {
        getBedList,
        getDemandList
    }
}
