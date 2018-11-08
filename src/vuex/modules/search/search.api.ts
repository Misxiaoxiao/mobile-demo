import { SearchResource } from '../../api.config'

interface SearchCondition {
    city: string;
    sequence: string;
    gender?: string;
    cost1?: string;
    cost2?: string;
    has_short_rent?: number;
    type?: string;
    longitude?: number;
    latitude?: number;
    bed_count?: number;
}

export default {
    searchBeds: (filters: SearchCondition) => {
        return SearchResource().get('/bed', {params: filters})
    },
    searchDemands: (filters: SearchCondition) => {
        return SearchResource().get('/demand', {params: filters})
    }
}
