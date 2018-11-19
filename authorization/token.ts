import LocalStorage, { Storage } from '../utils/localstorage'

export default class Token extends LocalStorage {
    constructor (prefix: string, storage: Storage) {
        const _prefix:string = prefix ? prefix : ''
        super (_prefix, storage)
    }
    getToken (key: string) {
        if (key === 'api') {
            let _uid:string = super.getValue('uid')
            let _api = _uid ? '/' + _uid : ''
            return _api;
        } else {
            return super.getValue(key)
        }
    }
    setToken (uid: string, token: string, secret: string, username?: string) {
        super.setValue('uid', uid)
        super.setValue('token', token)
        super.setValue('secret', secret)
        if (username) super.setValue('username', username)
    }
    clean () {
        super.removeValue('uid')
        super.removeValue('token')
        super.removeValue('secret')
    }
} 