import api from './contract.api'
import * as types from './contract.types'
import { ActionBuilder } from '../../action.common'

const getContractDetail = ActionBuilder({
    method: api.getContract,
    actionStart: types.REQUESTING_CONTRACT_DETAIL,
    actionSuccess: types.REQUESTING_CONTRACT_DETAIL_SUCCESS,
    actionFail: types.REQUESTING_CONTRACT_DETAIL_FAIL
})

const signContract = ActionBuilder({
    method: api.dealContract,
    actionStart: types.SIGNING_CONTRACT_INFO,
    actionSuccess: types.SIGNING_CONTRACT_INFO_SUCCESS,
    actionFail: types.SIGNING_CONTRACT_INFO_FAIL
})

export default {
    actions: {
        getContractDetail,
        signContract
    }
}
