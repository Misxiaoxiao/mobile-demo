import { ActionContext } from 'vuex'
import { AuthState } from './modules/auth/auth.store'
import { AccountState } from './modules/account/account.store'
import { CommonState } from './modules/common/common.store'
import { SearchState } from './modules/search/search.store'
import { LocateState } from './modules/locate/locate.store'
import { ResidenceState } from './modules/residence/residence.store'
import { UserState } from './modules/user/user.store'
import { UploadState } from './modules/upload/upload.store'
import { SubscribeState } from './modules/subscribe/subscribe.store'
import { ContractState } from './modules/contract/contract.store'
import { EvaluateState } from './modules/evaluate/evaluate.store'

interface RootState extends 
    AuthState,
    AccountState,
    CommonState,
    SearchState,
    LocateState,
    ResidenceState,
    UserState,
    UploadState,
    SubscribeState,
    ContractState,
    EvaluateState
    {}

interface ActionOptions {
    method?: any;
    actionStart?: string;
    actionSuccess: string;
    actionFail?: string;
}

interface ActionParams {
    data?: any;
    success?(res?: any): void;
    fail?(e?: any): void;
    [propName: string]: any;
}

export const ActionBuilder = (options: ActionOptions) => {
    const fetch = async ({commit}: ActionContext<RootState, any>, params: ActionParams) => {
        try {
            if (options.actionStart) commit(options.actionStart, params ? params.data : {})
            // if has method, excute
            if (options.method) {
                let res = await options.method(params ? params.data : {})
                let result = res.data.result
                commit(options.actionSuccess, {
                    result: result
                })
                if (params && params.success) params.success(result)
            } else {
                commit(options.actionSuccess, params ? params.data : {})
                if (params && params.success) params.success()
            }
        } catch (e) {
            console.log(e)
            // window.alert(e)
            if (options.actionFail) commit(options.actionFail, e)
            if (params && params.fail) params.fail(e)
        }
    }
    return fetch
}