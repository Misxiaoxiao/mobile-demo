import Token from '@/interface/authorization/token'
import ApiResource from './resource'

const storage = window.localStorage

const API_VERSION = 'client';
// const API_ROOT = 'https://services.api.zuker.im/client' // 测试
const API_ROOT = 'https://apiservices.zuber.im' // 线上
// const API_ROOT = 'http://preview.apiservices.zuber.im/client'
// const API_ROOT = 'https://preview-services.zuber.im/client'

export const token = new Token('zuber-', {
    getItem: (key: string): string | null => storage.getItem(key),
    setItem: (key: string, value: string): void => storage.setItem(key, value),
    removeItem: (key: string): void => storage.removeItem(key)
})

const api = new ApiResource(API_ROOT, API_VERSION, token)

export const AuthResource = () => api.resource('/users')
export const CommonResource = () => api.resource('/commons' + token.getToken('api'))
export const SearchResource = () => api.resource('/search' + token.getToken('api'))
export const UserResource = () => api.resource('/users' + token.getToken('api'))
export const MapResource = () => api.resource('/maps' + token.getToken('api'))
export const ViewResource = () => api.resource('/views' + token.getToken('api'))
export const BizResource = () => api.resource('/biz' + token.getToken('api'))
export const FollowResource = () => api.resource('/follows' + token.getToken('api'))
export const FileResource = () => api.resource('/files' + token.getToken('api'))
export const ContractResource = () => api.resource('/contracts' + token.getToken('api'))
export const EvaluateResource = () => api.resource('/evaluates' + token.getToken('api'))
export const ClaimResource = () => api.resource('/rooms' + token.getToken('api'))
