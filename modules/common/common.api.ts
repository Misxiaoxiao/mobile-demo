import { CommonResource } from '../../api.config'
import { DeviceModel } from './common.model'

interface TrafficParams {
    city: string;
}

export default {
    getTraffics: (info: TrafficParams) => {
        return CommonResource().get('/traffic', {params: {city: info.city}})
    },
    getCities: () => {
        return CommonResource().get('/city')
    },
    recordTerminal: () => {
        return CommonResource().get('/terminal', {params: new DeviceModel()})
    }
}
