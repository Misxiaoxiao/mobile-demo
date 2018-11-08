import { UserResource } from '../../api.config'
import { SubscribeForm } from './subscribe.model'

export default {
    getSubscribe: () => {
        return UserResource().get('/subscribe')
    },
    createSubscribe: (info: SubscribeForm) => {
        return info.subscribe_id ? UserResource().put('/subscribe', info) : UserResource().post('/subscribe', info)
    }
}