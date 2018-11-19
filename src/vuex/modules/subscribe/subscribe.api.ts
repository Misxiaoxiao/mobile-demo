import { UserResource } from '../../api/config'
import { SubscribeForm } from './subscribe.model'

interface RejectParams {
    subscribe_id: string;
    reason: string;
}

interface PageParams {
    page: number;
    per_page: number;
}

export default {
    getSubscribe: () => {
        return UserResource().get('/subscribe')
    },
    createSubscribe: (info: SubscribeForm) => {
        return info.subscribe_id ? UserResource().put('/subscribe', info) : UserResource().post('/subscribe', info)
    },
    removeSubscribe: (info: RejectParams) => {
        return UserResource().delete('/subscribe', {params: info})
    },
    getRecommends: (info: PageParams) => {
        return UserResource().get('/recommend', {params: info})
    }
}