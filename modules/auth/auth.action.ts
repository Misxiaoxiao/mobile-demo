import api from './auth.api'
import * as types from './auth.types'
import { ActionBuilder } from '../../action.common'

const getUserAuth = ActionBuilder({
    method: api.getAuth,
    actionSuccess: types.GET_USER_AUTH_SUCCESS,
    actionFail: types.GET_USER_AUTH_FAIL
})

const cleanUserAuth = ({commit}: any, success?: any) => {
    commit(types.CLEAN_USER_AUTH)
    if (success) success()
}

export default {
    actions: {
        getUserAuth,
        cleanUserAuth
    }
}