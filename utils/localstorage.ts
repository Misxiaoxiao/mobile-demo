const storage = window.localStorage

export default class LocalStorage {
    private prefix: string;
    constructor (prefix: string) {
        this.prefix = prefix;
    }
    getValue (key: string) {
        let _key = this.prefix + key
        let _val = storage.getItem(_key)
        try {
            return _val ? JSON.parse(_val) : _val;
        } catch (e) {
            return _val
        }
    }
    setValue (key: string, value: string) {
        let _key = this.prefix + key
        let _value: string;
        try {
            _value = JSON.stringify(value)
        } catch (e) {
            _value = value
        }
        storage.setItem(_key, _value)
    }
    removeValue (key: string) {
        let _key = this.prefix + key
        storage.removeItem(_key)
    }
}
