import { CommonResource } from '../../api/config';

export default {
    getWeixinAuth: (url: string) => {
        return CommonResource().get('/weixinjsapi', {params: {url: url}})
    }
}
