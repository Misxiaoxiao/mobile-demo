import { FileResource } from '../../api/config'

export default {
    getTokens: (count: number) => {
        return FileResource().get('/token', {params: {category: 'preview', count: count, photo_source: 'select'}})
    }
}