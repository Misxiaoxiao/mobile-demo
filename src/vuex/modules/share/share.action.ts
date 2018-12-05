import api from './share.api'
import * as types from './share.types'
import { ActionContext } from 'vuex';

const Window: any = window;

const configShareInfo = ({commit}: ActionContext<any, any>, info: any) => {
    console.log(info)
    api.getWeixinAuth(window.location.href).then(res => {
        let wxAuth = res.data.result
        const wx = Window.wx
        if (wx) {
            wx.config({
				debug: !(process.env.NODE_ENV === 'production'),
				appId: wxAuth.appid,
				timestamp: wxAuth.timestamp,
				nonceStr: wxAuth.noncestr,
				signature: wxAuth.signature,
				jsApiList: [
					'onMenuShareAppMessage',
					'onMenuShareTimeline',
					'onMenuShareQQ',
					'onMenuShareWeibo',
					'onMenuShareQZone'
				]
            })
            wx.ready(() => {
				wx.onMenuShareAppMessage(info)
				wx.onMenuShareQQ(info)
				wx.onMenuShareWeibo(info)
				wx.onMenuShareQZone(info)
				wx.onMenuShareTimeline(info)
				commit(types.CONFIG_SHARE_SUCCESS, {
					info: info
				})
			})
        }
    })
}

export default {
	actions: {
		configShareInfo
	}
}
