import {AuthResource} from '../../api/config'

type Source = 'weixin' | 'weibo'

interface OauthTicket {
    code: string;
    scene: string;
    state: string;
    source: Source;
    user_source?: Source;
    redirect?: boolean;
    [propName: string]: any;
}

export default {
    getAuth: (ticket: OauthTicket) => {
        return AuthResource().post('/oauth', ticket)
    }
}