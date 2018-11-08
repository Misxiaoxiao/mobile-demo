import { ContractResource } from '../../api.config'

interface IdParams {
    id?: string;
    order_no?: string;
}

interface ContractParams {
    id: string;
    phone: string;
    identity_username: string;
    identity_number: string;
    identity_validate: string;
}

export default {
    getContract: (info: IdParams) => {
        return ContractResource().get('/weixin', {params: {order_no: info.order_no}})
    },
    dealContract: (info: ContractParams) => {
        return ContractResource().post('/weixin', info)
    }
}