const IMAGE_LIMITS = ['image/jpeg', 'image/gif', 'image/jpg', 'image/png']
const VIDEO_LIMITS = ['video/mp4']
const IMAGE_LIMITS_COUNT = 50
const VIDEO_LIMIT_COUNT = 1
const IMAGE_LIMITS_SIZE = 300
const VIDEO_LIMIT_SIZE = 1000

export const checkFiles = (files: any, fileType: string) => {
    let fileList: any[] = []
    let fileSize = 0

    const check = (typeLimits: any, lengthLimits: number, maxSize: number) => {
        if (files.length <= lengthLimits) {
            for (let i = 0; i < files.length; i++) {
                if (typeLimits.indexOf(files[i].type) >= 0 &&files[i].size / 1024 / 1024 <= maxSize) {
                    fileList.push(files[i])
                    fileSize += files[i].size
                }
            }
        }
    }

    fileType == 'video'
        ? check(VIDEO_LIMITS, VIDEO_LIMIT_COUNT, VIDEO_LIMIT_SIZE)
        : check(IMAGE_LIMITS, IMAGE_LIMITS_COUNT, IMAGE_LIMITS_SIZE)

    return {
        list: fileList,
        size: fileSize
    }
}