import {
    REQUESTING_SUBSCRIBE_INFO,
    REQUESTING_SUBSCRIBE_INFO_SUCCESS,
    REQUESTING_SUBSCRIBE_INFO_FAIL,
    SUBMITTING_SUBSCRIBE_INFO,
    SUBMITTING_SUBSCRIBE_INFO_SUCCESS,
    SUBMITTING_SUBSCRIBE_INFO_FAIL,
    REMOVING_SUBSCRIBE_INFO,
    REMOVING_SUBSCRIBE_INFO_SUCCESS,
    REMOVING_SUBSCRIBE_INFO_FAIL,
    REQUESTING_SUBSCRIBE_RECOMMENDS,
    REQUESTING_SUBSCRIBE_RECOMMENDS_SUCCESS,
    REQUESTING_SUBSCRIBE_RECOMMENDS_FAIL
} from './subscribe.types'

import { SubscribeModel } from './subscribe.model'

export class SubscribeState {
    submitting: boolean = false
    requesting: boolean = false
    subscribe_detail: SubscribeModel = {}
    removing: boolean = false
    recommending: boolean = false
    page: number = 0
    has_next_page: boolean = false
    recommend_list: any[] = []
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
    },
    [REMOVING_SUBSCRIBE_INFO] (state: SubscribeState) {
        state.removing = true
    },
    [REMOVING_SUBSCRIBE_INFO_SUCCESS] (state: SubscribeState) {
        state.removing = false
    },
    [REMOVING_SUBSCRIBE_INFO_FAIL] (state: SubscribeState) {
        state.removing = false
    },
    [REQUESTING_SUBSCRIBE_RECOMMENDS] (state: SubscribeState, action: any) {
        state.page = action.page
        state.recommending = true
    },
    [REQUESTING_SUBSCRIBE_RECOMMENDS_SUCCESS] (state: SubscribeState, action: any) {
        state.recommend_list = state.recommend_list.concat(action.result.items)
        state.has_next_page = action.result.has_next_page
        state.recommending = false
    },
    [REQUESTING_SUBSCRIBE_RECOMMENDS_FAIL] (state: SubscribeState) {
        state.recommending = false
    }
}

export default {
    state: new SubscribeState(),
    mutations
}