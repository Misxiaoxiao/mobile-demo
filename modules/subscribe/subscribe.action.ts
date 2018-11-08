import api from './subscribe.api'
import * as types from './subscribe.types'
import { ActionBuilder } from '../../action.common'

const getSubscribeDetail = ActionBuilder({
    method: api.getSubscribe,
    actionStart: types.REQUESTING_SUBSCRIBE_INFO,
    actionSuccess: types.REQUESTING_SUBSCRIBE_INFO_SUCCESS,
    actionFail: types.REQUESTING_SUBSCRIBE_INFO_FAIL
})

const createUserSubscribe = ActionBuilder({
    method: api.createSubscribe,
    actionStart: types.SUBMITTING_SUBSCRIBE_INFO,
    actionSuccess: types.SUBMITTING_SUBSCRIBE_INFO_SUCCESS,
    actionFail: types.SUBMITTING_SUBSCRIBE_INFO_FAIL
})

export default {
    actions: {
        createUserSubscribe,
        getSubscribeDetail
    }
}