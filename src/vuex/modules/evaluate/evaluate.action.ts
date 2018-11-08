import api from './evaluate.api'
import * as types from './evaluate.types'
import { ActionBuilder } from '../../action.common'

const getEvaluateList = ActionBuilder({
    method: api.getEvaluates,
    actionStart: types.REQUESTING_EVALUATE_LIST,
    actionSuccess: types.REQUESTING_EVALUATE_LIST_SUCCESS,
    actionFail: types.REQUESTING_EVALUATE_LIST_FAIL
})

export default {
    actions: {
        getEvaluateList
    }
}