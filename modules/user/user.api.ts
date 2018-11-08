import { ViewResource, BizResource, FollowResource } from '../../api.config'

interface IdParams {
    id: string;
}

export default {
    viewUser: (info: IdParams) => {
        return ViewResource().get('/user', {params: {object_uid: info.id}})
    },
    viewCompany: (info: IdParams) => {
        return BizResource().get('/company', {params: {company_id: info.id}})
    },
    followUser: (info: IdParams) => {
        return FollowResource().post('', {object_uid: info.id})
    },
    unfollowUser: (info: IdParams) => {
        return FollowResource().delete('', {params: {object_uid: info.id}})
    }
}
