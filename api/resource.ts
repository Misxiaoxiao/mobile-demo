import axios from 'axios'
import Signature from '@/interface/authorization/signature'
import Token from '@/interface/authorization/token'

export default class ApiResource extends Signature {
    baseUrl: string;
    constructor (baseUrl: string, version: string, token: Token, deployKey?: string) {
        super(token, version, deployKey);
        this.baseUrl = baseUrl;
    }
    handle (res: any) {
        if (res.status === 200) {
            switch (res.data.code) {
                case 0:
                    return res.data.result ? res : Promise.reject(res.data.msg)
                case 401:
                    super.token.clean();
                    // window.location.reload();
                    return Promise.reject(res.data.msg);
                default:
                    return Promise.reject(res.data.msg);
            }
        }
    }
    resource (route: string) {
        let _resource = axios.create({
            baseURL: this.baseUrl + route
        })
        // authentication
        _resource.interceptors.request.use(config => {
            config.headers.common['Authorization'] = super.generate(route + config.url, config.method, config.data);
            return config;
        }, error => {
            return Promise.reject(error);
        })
        // handle reponse
        _resource.interceptors.response.use(res => {
            return this.handle(res);
        }, error => {
            return Promise.reject(error);
        })
        return _resource;
    }
}