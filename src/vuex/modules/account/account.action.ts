import api from './account.api'
import * as types from './account.types'
import { ActionBuilder } from '../../action.common'

const getUserInfo = ActionBuilder({
    method: api.getInfo,
    actionSuccess: types.GET_USER_INFO_SUCCESS,
    actionFail: types.GET_USER_INFO_FAIL
})

const sendCaptchaMessage = ActionBuilder({
    method: api.getCaptcha,
    actionStart: types.GET_PHONE_CAPTCHA,
    actionSuccess: types.GET_PHONE_CAPTCHA_SUCCESS,
    actionFail: types.GET_PHONE_CAPTCHA_FAIL
})

const bindUserPhone = ActionBuilder({
    method: api.bind,
    actionStart: types.BINDING_USER_PHONE,
    actionSuccess: types.BINDING_USER_PHONE_SUCCESS,
    actionFail: types.BINDING_USER_PHONE_FAIL
})

const getUserValidate = ActionBuilder({
    method: api.getValidate,
    actionStart: types.GET_USER_VALIDATE,
    actionSuccess: types.GET_USER_VALIDATE_SUCCESS,
    actionFail: types.GET_USER_VALIDATE_FALI,
})

export default {
    actions: {
        getUserInfo,
        sendCaptchaMessage,
        bindUserPhone,
        getUserValidate
    }
}