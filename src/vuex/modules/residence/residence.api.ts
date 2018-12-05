import { ViewResource, BizResource, FollowResource, ClaimResource } from '../../api/config'

interface IdParams {
    id: string;
    biz?: boolean;
    type?: string;
}

export default {
    viewBed: (info: IdParams) => {
        return info.biz ? BizResource().get('/bed', {params: {bed_id: info.id}}) : ViewResource().get('/bed', {params: {bed_id: info.id}})
    },
    viewDemand: (info: IdParams) => {
        return ViewResource().get('/demand', {params: {demand_id: info.id}})
    },
    followBed: (info: IdParams) => {
        return FollowResource().post('/bed', {bed_id: info.id})
    },
    unfollowBed: (info: IdParams) => {
        return FollowResource().delete('/bed', {params: {bed_id: info.id}})
    },
    followDemand: (info: IdParams) => {
        return FollowResource().post('/demand', {demand_id: info.id})
    },
    unfollowDemand: (info: IdParams) => {
        return FollowResource().delete('/demand', {params: {demand_id: info.id}})
    },
    claimRoom: (info: IdParams) => {
        return ClaimResource().post('/claim', {room_id: info.id})
    }
}