import {
    REQUESTING_SUBSCRIBE_INFO,
    REQUESTING_SUBSCRIBE_INFO_SUCCESS,
    REQUESTING_SUBSCRIBE_INFO_FAIL,
    SUBMITTING_SUBSCRIBE_INFO,
    SUBMITTING_SUBSCRIBE_INFO_SUCCESS,
    SUBMITTING_SUBSCRIBE_INFO_FAIL
} from './subscribe.types'

import { SubscribeModel } from './subscribe.model'

export class SubscribeState {
    submitting: boolean = false
    requesting: boolean = false
    subscribe_detail: SubscribeModel = {}
}

const mutations = {
    [REQUESTING_SUBSCRIBE_INFO] (state: SubscribeState) {
        state.requesting = true
    },
    [REQUESTING_SUBSCRIBE_INFO_SUCCESS] (state: SubscribeState, action: any) {
        state.requesting = false
        state.subscribe_detail = action.result
    },
    [REQUESTING_SUBSCRIBE_INFO_FAIL] (state: SubscribeState) {
        state.requesting = false
    },
    [SUBMITTING_SUBSCRIBE_INFO] (state: SubscribeState) {
        state.submitting = true
    },
    [SUBMITTING_SUBSCRIBE_INFO_SUCCESS] (state: SubscribeState) {
        state.submitting = false
    },
    [SUBMITTING_SUBSCRIBE_INFO_FAIL] (state: SubscribeState) {
        state.submitting = false
    }
}

export default {
    state: new SubscribeState(),
    mutations
}