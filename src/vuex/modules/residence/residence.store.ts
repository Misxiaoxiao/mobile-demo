import {
    REQUESTING_BED_DETAIL,
    REQUESTING_BED_DETAIL_SUCCESS,
    REQUESTING_BED_DETAIL_FAIL,
    REQUESTING_DEMAND_DETAIL,
    REQUESTING_DEMAND_DETAIL_SUCCESS,
    REQUESTING_DEMAND_DETAIL_FAIL,
    FAVORING_BED_DETAIL,
    FAVORING_BED_DETAIL_SUCCESS,
    FAVORING_BED_DETAIL_FAIL,
    UNFAVORING_BED_DETAIL,
    UNFAVORING_BED_DETAIL_SUCCESS,
    UNFAVORING_BED_DETAIL_FAIL,
    CLAIM_ROOM
} from './residence.types'

import { DetailModel } from './residence.model'

export class ResidenceState {
    requesting: boolean = false
    bed_unexistance: boolean = false
    bed_detail: DetailModel = {}
    bed_photos: any[] = []
    demand_unexistance: boolean = false
    demand_detail: any = {}
    favoring: boolean = false
}

const mutations = {
    [REQUESTING_BED_DETAIL] (state: ResidenceState) {
        state.requesting = true
        state.bed_unexistance = false
    },
    [REQUESTING_BED_DETAIL_SUCCESS] (state: ResidenceState, action: any) {
        state.bed_detail = action.result
        state.requesting = false
        state.bed_unexistance = false
    },
    [REQUESTING_BED_DETAIL_FAIL] (state: ResidenceState) {
        state.bed_detail = {}
        state.requesting = false
        state.bed_unexistance = true
    },
    [REQUESTING_DEMAND_DETAIL] (state: ResidenceState, action: any) {
        state.requesting = true
        state.demand_unexistance = false
    },
    [REQUESTING_DEMAND_DETAIL_SUCCESS] (state: ResidenceState, action: any) {
        state.demand_detail = action.result
        state.requesting = false
        state.demand_unexistance = false
    },
    [REQUESTING_DEMAND_DETAIL_FAIL] (state: ResidenceState, action: any) {
        state.demand_detail = {}
        state.requesting = false
        state.demand_unexistance = true
    },
    [FAVORING_BED_DETAIL] (state: ResidenceState, action: any) {
        state.favoring = true
        action.type === 'demand'
            ? state.demand_detail.demand_follow = true
            : state.bed_detail.follow = true
    },
    [FAVORING_BED_DETAIL_SUCCESS] (state: ResidenceState) {
        state.favoring = false
    },
    [FAVORING_BED_DETAIL_FAIL] (state: ResidenceState) {
        state.favoring = false
    },
    [UNFAVORING_BED_DETAIL] (state: ResidenceState, action: any) {
        state.favoring = true
        action.type === 'demand'
            ? state.demand_detail.demand_follow = false
            : state.bed_detail.follow = false
    },
    [UNFAVORING_BED_DETAIL_SUCCESS] (state: ResidenceState) {
        state.favoring = false
    },
    [UNFAVORING_BED_DETAIL_FAIL] (state: ResidenceState) {
        state.favoring = false
    },
    [CLAIM_ROOM] (state: ResidenceState, action: any) {
        return action;
    }
}

export default {
    state: new ResidenceState(),
    mutations
}
