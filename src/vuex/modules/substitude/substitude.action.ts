import api from './substitude.api'
import * as types from './substitude.types'
import { ActionBuilder } from '../../action.common'

const getSubstitudeDetail = ActionBuilder({
  method: api.viewRefresh,
  actionStart: types.REQUESTING_SUBSTITUDE_INFO,
  actionSuccess: types.REQUESTING_SUBSTITUDE_INFO_SUCCESS,
  actionFail: types.REQUESTING_SUBSTITUDE_INFO_FAIL
})

const refresh = ActionBuilder({
  method: api.refresh,
  actionSuccess: types.HANDLE_SUBSTITUDE,
})

export default {
  actions: {
    refresh,
    getSubstitudeDetail
  }
}
