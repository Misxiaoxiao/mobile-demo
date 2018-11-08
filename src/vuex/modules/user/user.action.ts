import api from './user.api'
import * as types from './user.types'
import { ActionBuilder } from '../../action.common'

const viewUserDetail = ActionBuilder({
    method: api.viewUser,
    actionStart: types.REQUESTING_USER_DETAIL,
    actionSuccess: types.REQUESTING_USER_SUCCESS,
    actionFail: types.REQUESTING_USER_FAIL
})

const viewCompanyDetail = ActionBuilder({
    method: api.viewCompany,
    actionStart: types.REQUESTING_COMPANY_DETAIL,
    actionSuccess: types.REQUESTING_COMPANY_SUCCESS,
    actionFail: types.REQUESTING_COMPANY_FAIL
})

const favorUser = ActionBuilder({
    method: api.followUser,
    actionStart: types.FAVORING_USER_DETAIL,
    actionSuccess: types.FAVORING_USER_DETAIL_SUCCESS,
    actionFail: types.FAVORING_USER_DETAIL_FAIL
})

const unfavorUser = ActionBuilder({
    method: api.unfollowUser,
    actionStart: types.UNFAVORING_USER_DETAIL,
    actionSuccess: types.UNFAVORING_USER_DETAIL_SUCCESS,
    actionFail: types.UNFAVORING_USER_DETAIL_FAIL
})

export default {
    actions: {
        viewUserDetail,
        viewCompanyDetail,
        favorUser,
        unfavorUser
    }
}
