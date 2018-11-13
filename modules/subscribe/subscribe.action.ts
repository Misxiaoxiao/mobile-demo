import api from './subscribe.api'
import * as types from './subscribe.types'
import { ActionBuilder } from '../../action.common'

const getSubscribeDetail = ActionBuilder({
    method: api.getSubscribe,
    actionStart: types.REQUESTING_SUBSCRIBE_INFO,
    actionSuccess: types.REQUESTING_SUBSCRIBE_INFO_SUCCESS,
    actionFail: types.REQUESTING_SUBSCRIBE_INFO_FAIL
})

const updateUserSubscribe = ActionBuilder({
    method: api.createSubscribe,
    actionStart: types.SUBMITTING_SUBSCRIBE_INFO,
    actionSuccess: types.SUBMITTING_SUBSCRIBE_INFO_SUCCESS,
    actionFail: types.SUBMITTING_SUBSCRIBE_INFO_FAIL
})

const removeUserSubscribe = ActionBuilder({
    method: api.removeSubscribe,
    actionStart: types.REMOVING_SUBSCRIBE_INFO,
    actionSuccess: types.REMOVING_SUBSCRIBE_INFO_SUCCESS,
    actionFail: types.REMOVING_SUBSCRIBE_INFO_FAIL
})

const getRecommendList = ActionBuilder({
    method: api.getRecommends,
    actionStart: types.REQUESTING_SUBSCRIBE_RECOMMENDS,
    actionSuccess: types.REQUESTING_SUBSCRIBE_RECOMMENDS_SUCCESS,
    actionFail: types.REQUESTING_SUBSCRIBE_RECOMMENDS_FAIL,
})

export default {
    actions: {
        updateUserSubscribe,
        getSubscribeDetail,
        removeUserSubscribe,
        getRecommendList
    }
}