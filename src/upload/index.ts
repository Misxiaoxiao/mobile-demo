import { checkFiles } from './core/check'
import { uploadFile } from './core/upload'

interface UploadOptions {
    fileType: string;
    ifResize?: boolean;
    canvas?: string;
    start?: any;
    success?: any;
    fail?: any;
    complete?: any;
}

export default class Upload {
    private UPLOAD_URL: string
    constructor (url: string) {
        this.UPLOAD_URL = url
    }
    init (el: string, getTokens: any, options: UploadOptions) {
        let inputFile = <HTMLInputElement>document.getElementById(el)
        inputFile.addEventListener('change', async () => {
            try {
                let files = inputFile.files
                let check_result = checkFiles(files, options.fileType)
                let res = await getTokens(check_result.list.length)
                let tokens = res.data.result
                let current_count = 0

                if (check_result.list.length > 0 && options.start) options.start()

                check_result.list.forEach(async (file: any, index: number) => {
                    let token = typeof(tokens) == 'string' ? tokens : tokens[index]
                    let _res = await uploadFile(this.UPLOAD_URL, file, token)

                    if (options.success) options.success(_res.data.result)
                    
                    current_count ++
                    if (current_count >= check_result.list.length) {
                        inputFile.value = ''
                        if (options.complete) options.complete()
                    }
                })
            } catch (e) {
                if (options.fail) options.fail(e)
                console.error(e)
            }
        })
    }
}