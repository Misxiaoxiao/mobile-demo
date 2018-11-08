import {
    REQUESTING_CONTRACT_DETAIL,
    REQUESTING_CONTRACT_DETAIL_SUCCESS,
    REQUESTING_CONTRACT_DETAIL_FAIL,
    SIGNING_CONTRACT_INFO,
    SIGNING_CONTRACT_INFO_SUCCESS,
    SIGNING_CONTRACT_INFO_FAIL
} from './contract.types'

import { ContractModel } from './contract.model'

export class ContractState {
    requesting: boolean = false
    contract_unexistance: boolean = false
    contract_detail: ContractModel = {}
    signing: boolean = false
}

const mutations = {
    [REQUESTING_CONTRACT_DETAIL] (state: ContractState) {
        state.requesting = true
        state.contract_unexistance = false
    },
    [REQUESTING_CONTRACT_DETAIL_SUCCESS] (state: ContractState, action: any) {
        state.contract_detail = action.result
        state.contract_unexistance = false
        state.requesting = false
    },
    [REQUESTING_CONTRACT_DETAIL_FAIL] (state: ContractState) {
        state.requesting = false
        state.contract_unexistance = true
    },
    [SIGNING_CONTRACT_INFO] (state: ContractState) {
        state.signing = true
    },
    [SIGNING_CONTRACT_INFO_SUCCESS] (state: ContractState) {
        state.signing = false
    },
    [SIGNING_CONTRACT_INFO_FAIL] (state: ContractState) {
        state.signing = false
    }
}

export default {
    state: new ContractState(),
    mutations
}
