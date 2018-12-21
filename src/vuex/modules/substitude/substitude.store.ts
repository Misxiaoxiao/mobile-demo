import {
  REQUESTING_SUBSTITUDE_INFO,
  REQUESTING_SUBSTITUDE_INFO_SUCCESS,
  REQUESTING_SUBSTITUDE_INFO_FAIL,
  HANDLE_SUBSTITUDE,
} from './substitude.types'

export class SubstitudeState {
  requesting: boolean = false
  substitude_detail: any = ''
  substitude_refresh_list: any = []
}

const mutations = {
  [REQUESTING_SUBSTITUDE_INFO] (state: SubstitudeState) {
    state.requesting = true
  },
  [REQUESTING_SUBSTITUDE_INFO_SUCCESS] (state: SubstitudeState, action: any) {
    state.substitude_refresh_list = state.substitude_refresh_list.concat(action.result.items)
    if (state.substitude_detail === '') {
      state.substitude_detail = action.result
    }
    state.requesting = false
  },
  [REQUESTING_SUBSTITUDE_INFO_FAIL] (state: SubstitudeState) {
    state.requesting = false
  },
  [HANDLE_SUBSTITUDE] (state: SubstitudeState, action: any) {
    return action
  }
}

export default {
  state: new SubstitudeState(),
  mutations
}
