import { CommonResource } from '../../api.config'

interface TrafficParams {
    city: string;
}

export default {
    getTraffics: (info: TrafficParams) => {
        return CommonResource().get('/traffic', {params: {city: info.city}})
    },
    getCities: () => {
        return CommonResource().get('/city')
    }
}
