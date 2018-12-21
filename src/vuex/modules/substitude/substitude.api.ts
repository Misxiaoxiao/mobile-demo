import {
  SubstitudeResource,
  RefreshResource
} from '../../api/config'

interface SubstitudeParams {
  room_id: string;
  invite_uid: string;
  page?: string;
  is_self?: boolean;
}

export default {
  viewRefresh: (info: SubstitudeParams) => {
    return SubstitudeResource().get('/refresh', {params: info})
  },
  refresh: (info: SubstitudeParams) => {
    return info.is_self ? RefreshResource().post('/refresh', {id: info.room_id}) : SubstitudeResource().post('/refresh', {room_id: info.room_id, invite_uid: info.invite_uid})
  }
}
