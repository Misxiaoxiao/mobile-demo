import { MapResource } from '../../api/config'

interface QueryParams {
    keyword: string;
    city: string;
}

export default {
    searchAddress: (info: QueryParams) => {
        return MapResource().get('/suggestion', {params: {query: info.keyword, region: info.city}})
    }
}