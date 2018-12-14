import api from './share.api'
import * as types from './share.types'
import { ActionContext } from 'vuex';

const Window: any = window;

const configShareInfo = ({commit}: ActionContext<any, any>, info: any) => {
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
				wx.onMenuShareAppMessage(info.info)
				wx.onMenuShareQQ(info.info)
				wx.onMenuShareWeibo(info.info)
				wx.onMenuShareQZone(info.info)
				wx.onMenuShareTimeline({
					title: info.info.desc,
					desc: info.info.desc,
					link: info.info.link,
					imgUrl: info.info.imgUrl,
				})
				commit(types.CONFIG_SHARE_SUCCESS, {
					info: info.info
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
