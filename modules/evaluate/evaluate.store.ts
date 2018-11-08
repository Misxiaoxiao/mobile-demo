import {
    REQUESTING_EVALUATE_LIST,
    REQUESTING_EVALUATE_LIST_SUCCESS,
    REQUESTING_EVALUATE_LIST_FAIL
} from './evaluate.types'

export class EvaluateState {
    requesting: boolean = false
    total: number = 0
    page: number = 0
    list: any[] = []
}

const mutations = {
    [REQUESTING_EVALUATE_LIST] (state: EvaluateState, action: any) {
        state.requesting = true
        state.page = action.page
        if (state.page <= 1) state.list = []
    },
    [REQUESTING_EVALUATE_LIST_SUCCESS] (state: EvaluateState, action: any) {
        state.total = action.result.total_page
        state.list = state.list.concat(action.result.items)
        state.requesting = false
    },
    [REQUESTING_EVALUATE_LIST_FAIL] (state: EvaluateState) {
        state.requesting = false
    }
}

export default {
    state: new EvaluateState(),
    mutations
}