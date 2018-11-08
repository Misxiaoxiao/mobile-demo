import axios from 'axios'
declare const window: Window & { FormData: any }

export const uploadFile = async (url: string, file: any, token: string) => {
    let fileData = new window.FormData()
    fileData.append('file', file)
    fileData.append('token', token)
    let res = await axios.post(url, fileData)
    return res
}