import {
    CONFIG_SHARE_SUCCESS
} from './share.types'

const state = {
    share_record: []
}

const mutations = {
    [CONFIG_SHARE_SUCCESS] (state: any, action: any) {
		state.share_record.push(action.info)
	}
}

export default {
    state,
    mutations
}
