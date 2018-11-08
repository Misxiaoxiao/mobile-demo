import {
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAIL,
    GET_PHONE_CAPTCHA,
    GET_PHONE_CAPTCHA_SUCCESS,
    GET_PHONE_CAPTCHA_FAIL,
    BINDING_USER_PHONE,
    BINDING_USER_PHONE_SUCCESS,
    BINDING_USER_PHONE_FAIL
} from './account.types'

import { UserProfile } from './account.model'

export class AccountState {
    account: UserProfile = {
        user: { id: '' }
    }
    clock: any = {}
    sending: boolean = false
    countdown: number = 60
    submitting: boolean = false
}

const mutations = {
    [GET_USER_INFO_SUCCESS] (state: AccountState, action: any) {
        state.account = action.result
    },
    [GET_USER_INFO_FAIL] (state: AccountState) {
        state.account = {
            user: { id: '' }
        }
    },
    [GET_PHONE_CAPTCHA] (state: AccountState) {
        state.sending = true
        state.countdown --
        state.clock = setInterval(() => {
            if (state.countdown > 0) {
                state.countdown --
            } else {
                clearInterval(state.clock)
                state.countdown = 60
            }
        })
    },
    [GET_PHONE_CAPTCHA_SUCCESS] (state: AccountState) {
        state.sending = false
    },
    [GET_PHONE_CAPTCHA_FAIL] (state: AccountState) {
        state.sending = false
        clearInterval(state.clock)
        state.countdown = 60
    },
    [BINDING_USER_PHONE] (state: AccountState) {
        state.submitting = true
    },
    [BINDING_USER_PHONE_SUCCESS] (state: AccountState) {
        state.submitting = false
    },
    [BINDING_USER_PHONE_FAIL] (state: AccountState) {
        state.submitting = false
    }
}

export default {
    state: new AccountState(),
    mutations
}
