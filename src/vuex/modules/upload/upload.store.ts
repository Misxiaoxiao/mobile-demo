import {
    UPLOADING_PREVIEW_PHOTO,
    UPLOADING_PREVIEW_PHOTO_SUCCESS,
    UPLOADING_PREVIEW_PHOTO_COMPLETE
} from './upload.types'

import { PreviewPhoto } from './upload.model'

export class UploadState {
    uploading: boolean = false
    preview_album: PreviewPhoto[] = []
}

const mutations = {
    [UPLOADING_PREVIEW_PHOTO] (state: UploadState) {
        state.uploading = true
    },
    [UPLOADING_PREVIEW_PHOTO_SUCCESS] (state: UploadState, action: any) {
        state.preview_album.unshift(action.file)
    },
    [UPLOADING_PREVIEW_PHOTO_COMPLETE] (state: UploadState) {
        state.uploading = false
    }
}

export default {
    state: new UploadState(),
    mutations
}