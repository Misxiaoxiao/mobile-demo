import { ActionContext } from 'vuex'
import api from './upload.api'
import * as types from './upload.types'
import Upload from '@/upload'
import { UploadState } from './upload.store'

const uploader = new Upload('https://up.qbox.me')

interface UploadOptions {
    el: string;
    start?: any;
    complete?: any;
}

const bindPreviewAlbum = ({commit}: ActionContext<UploadState, any>, options: UploadOptions) => {
    uploader.init(options.el, api.getTokens, {
        fileType: 'image',
        start: () => {
            commit(types.UPLOADING_PREVIEW_PHOTO)
            if (options.start) options.start()
        },
        success: (file: any) => {
            commit(types.UPLOADING_PREVIEW_PHOTO_SUCCESS, {
                file: file.image
            })
        },
        complete: () => {
            commit(types.UPLOADING_PREVIEW_PHOTO_COMPLETE)
            if (options.complete) options.complete()
        }
    })
}

export default {
    actions: {
        bindPreviewAlbum
    }
}