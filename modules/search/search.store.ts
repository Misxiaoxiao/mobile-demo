import {
    SEARCHING_BED_LIST,
    SEARCHING_BED_LIST_SUCCESS,
    SEARCHING_BED_LIST_FAIL,
    SEARCHING_DEMAND_LIST,
    SEARCHING_DEMAND_LIST_SUCCESS,
    SEARCHING_DEMAND_LIST_FAIL
} from './search.types'

import { RoomItem, DemandModal } from './search.model'

export class SearchState {
    searching: boolean = false
    rent_sequence: string = ''
    demand_sequence: string =  ''
    has_next_rent_page: boolean = false
    has_next_demand_page: boolean = false
    rent_list: RoomItem[] = []
    demand_list: DemandModal[] = []
}

const mutations = {
    [SEARCHING_BED_LIST] (state: SearchState, action: any) {
        state.searching = true
        if (action.sequence === '') state.rent_list = []
    },
    [SEARCHING_BED_LIST_SUCCESS] (state: SearchState, action: any) {
        state.rent_sequence = action.result.sequence
        state.has_next_rent_page = action.result.has_next_page
        state.rent_list = state.rent_list.concat(action.result.items)
        state.searching = false
    },
    [SEARCHING_BED_LIST_FAIL] (state: SearchState) {
        state.searching = false
        state.has_next_rent_page = false
    },
    [SEARCHING_DEMAND_LIST] (state: SearchState, action: any) {
        state.searching = true
        if (action.sequence === '') state.demand_list = []
    },
    [SEARCHING_DEMAND_LIST_SUCCESS] (state: SearchState, action: any) {
        state.demand_sequence = action.result.sequence
        state.has_next_demand_page = action.result.has_next_page
        state.demand_list = state.demand_list.concat(action.result.items)
        state.searching = false
    },
    [SEARCHING_DEMAND_LIST_FAIL] (state: SearchState, action: any) {
        state.searching = false
        state.has_next_demand_page = false
    }
}

export default {
    state: new SearchState(),
    mutations
}