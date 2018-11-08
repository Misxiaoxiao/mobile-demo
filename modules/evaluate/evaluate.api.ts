import { EvaluateResource } from '../../api.config'

interface IdParams {
    object_uid?: string;
    company_id?: string;
    page: number;
}

export default {
    getEvaluates: (info: IdParams) => {
        return EvaluateResource().get(info.object_uid ? '/user' : '/company', {params: info})
    }
}
