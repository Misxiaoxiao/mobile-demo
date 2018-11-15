import {
    GET_USER_AUTH_SUCCESS,
    GET_USER_AUTH_FAIL,
    CLEAN_USER_AUTH
} from './auth.types'

import { token } from '@/vuex/api.config'

export class AuthState {
    ifLogged: boolean = token.getToken('uid') && true
}

const mutations = {
    [GET_USER_AUTH_SUCCESS] (state: AuthState, action: any) {
        token.setToken(action.result.uid, action.result.token, action.result.secret)
        state.ifLogged = true
    },
    [GET_USER_AUTH_FAIL] (state: AuthState) {
        state.ifLogged = false
    },
    [CLEAN_USER_AUTH] (state: AuthState) {
        token.clean()
        state.ifLogged = false
    }
}

export default {
    state: new AuthState(),
    mutations
}