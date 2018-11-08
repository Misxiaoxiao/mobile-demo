import { CommonResource, UserResource } from '../../api.config'

interface PhoneParams {
    phone: string;
    captcha?: string;
}

export default {
    getInfo: () => {
        return CommonResource().get('/user');
    },
    getCaptcha: (info: PhoneParams) => {
        return UserResource().post('/captcha', {phone: info.phone, type: 'sms', scene: 'register'})
    },
    bind: (info: PhoneParams) => {
        return UserResource().post('/bind', {phone: info.phone, captcha: info.captcha, force: 1})
    }
}