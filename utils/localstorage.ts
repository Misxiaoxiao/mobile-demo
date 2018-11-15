export interface Storage {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
}

export default class LocalStorage {
    private prefix: string
    private storage: Storage
    constructor (prefix: string, storage: Storage) {
        this.prefix = prefix
        this.storage = storage
    }
    getValue (key: string) {
        let _key = this.prefix + key
        let _val = this.storage.getItem(_key)
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
        this.storage.setItem(_key, _value)
    }
    removeValue (key: string) {
        let _key = this.prefix + key
        this.storage.removeItem(_key)
    }
}
