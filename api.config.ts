import Interface from '@/interface'

const API_VERSION = 'client';
const API_ROOT = 'http://services.api.zuker.im/client'

export const token = new Interface.Token('zuber-')

const api = new Interface.ApiResource(API_ROOT, API_VERSION, token)

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
