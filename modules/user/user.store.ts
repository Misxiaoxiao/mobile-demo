import {
    REQUESTING_USER_DETAIL,
    REQUESTING_USER_SUCCESS,
    REQUESTING_USER_FAIL,
    REQUESTING_COMPANY_DETAIL,
    REQUESTING_COMPANY_SUCCESS,
    REQUESTING_COMPANY_FAIL,
    FAVORING_USER_DETAIL,
    FAVORING_USER_DETAIL_SUCCESS,
    FAVORING_USER_DETAIL_FAIL,
    UNFAVORING_USER_DETAIL,
    UNFAVORING_USER_DETAIL_SUCCESS,
    UNFAVORING_USER_DETAIL_FAIL
} from './user.types'

import { UserDetail } from './user.model'

export class UserState {
    requesting: boolean = false
    user_unexistance: boolean = false
    user_detail: any = {}
    company_unexistance: boolean = false
    company_detail: UserDetail = {}
    following: boolean = false
}

const mutations = {
    [REQUESTING_USER_DETAIL] (state:  UserState, action: any) {
        state.requesting = true
        state.user_unexistance = false     
    },
    [REQUESTING_USER_SUCCESS] (state:  UserState, action: any) {
        state.user_detail = action.result
        state.requesting = false
        state.user_unexistance = false
    },
    [REQUESTING_USER_FAIL] (state:  UserState, action: any) {
        state.user_detail = {}
        state.requesting = false
        state.user_unexistance = true
    },
    [REQUESTING_COMPANY_DETAIL] (state:  UserState, action: any) {
        state.requesting = true
        state.company_unexistance = false     
    },
    [REQUESTING_COMPANY_SUCCESS] (state:  UserState, action: any) {
        state.company_detail = action.result
        state.requesting = false
        state.company_unexistance = false
    },
    [REQUESTING_COMPANY_FAIL] (state:  UserState, action: any) {
        state.company_detail = {}
        state.requesting = false
        state.company_unexistance = true
    },
    [FAVORING_USER_DETAIL] (state: UserState) {
        state.following = true
        state.user_detail.user_follow = true
    },
    [FAVORING_USER_DETAIL_SUCCESS] (state: UserState) {
        state.following = false
    },
    [FAVORING_USER_DETAIL_FAIL] (state: UserState) {
        state.following = false
    },
    [UNFAVORING_USER_DETAIL] (state: UserState) {
        state.following = true
        state.user_detail.user_follow = false
    },
    [UNFAVORING_USER_DETAIL_SUCCESS] (state: UserState) {
        state.following = false
    },
    [UNFAVORING_USER_DETAIL_FAIL] (state: UserState) {
        state.following = false
    }
}

export default {
    state: new UserState(),
    mutations
}