import Token from './token'
import md5 from '../utils/md5'

const SCENE: string = '2567a5ec9705eb7ac2c984033e06189d'

const timeStamp: () => number = function (): number {
    return Math.round(new Date().getTime() / 1000)
};

export default class Signature {
    private _scene: string;
    private _version: string;
    private _key: string;
    token: Token;
    constructor (token: Token, version: string, deployKey?: string) {
        this.token = token;
        this._scene = SCENE;
        this._version = version;
        this._key = deployKey ? deployKey : '';
    }
    generate (route: string, method: string | undefined, params: any): string {
        let _timestamp = timeStamp()
        let _secret = this.token.getValue('secret')
        let _oauth = this.token.getValue('token') ? this.token.getValue('token') : md5(_timestamp)
        let _method = method ? method.toLowerCase() : 'get'
        let _params = (_method === 'get' || _method === 'delete') ? '{}' : JSON.stringify(params)

        let _source = 'request_url=' + this._version + route +
                      '&content=' + _params +
                      '&request_method=' + _method +
                      '&timestamp=' + _timestamp +
                      '&secret=' + (_secret ? _secret : '')

        let _signature = md5(_source)

        return 'timestamp=' + _timestamp + ';oauth2=' + _oauth + ';signature=' + _signature + ';scene=' + this._scene + ';deployKey=' + this._key
    }
}