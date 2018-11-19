export const POPULAR_CITIES: string[] = [
  '上海',
  '北京',
  '深圳',
  '广州',
  '杭州',
  '南京',
  '苏州',
  '成都',
  '武汉',
];

export const ROOM_CONDITION_GENDER: any[] = [
  {key: 'f', value: '允许女生'},
  {key: 'm', value: '允许男生'},
];

export const ROOM_CONDITION_TYPE: string[] = [
  '室友合租',
  '转租房源',
  '业主出租',
  '长租公寓',
];

export const ROOM_CONDITION_MONEY: any[] = [
  {value: '1500元以下', min: 0, max: 1500},
  {value: '1500-2500元', min: 1500, max: 2500},
  {value: '2500-4000元', min: 2500, max: 4000},
  {value: '4000-6000元', min: 4000, max: 6000},
  {value: '6000-8000元', min: 6000, max: 8000},
  {value: '8000-10000元', min: 8000, max: 10000},
  {value: '10000元以上', min: 10000, max: 0},
];

export const ROOM_CONDITION_TYPE_ITEMS: any[] = [
  {key: '整套', value: 3},
  {key: '单间', value: 1},
  {key: '床位', value: 2},
  {key: '不限', value: ''},
];

export const CONDITION_ROOM_TYPE = [
  '独立单间', '床位',
];

export const SHARE_INFO = {
  title: 'zuber-白领租房平台，租房必备',
  link: window.location.href,
  desc: '推荐给大家一款良心应用，出门在外，租房必备。信息真实，租房有保障',
  imgUrl: 'https://resources.zuber.im/mobile_share_logo.png',
};

export const BED_COUNT = [
  '1室', '2室', '3室', '4室+',
];

export const SUBSCRIPTION_ROOM_TYPE = [
  '室友合租', '转租房源', '业主出租', '长租公寓',
];

export const APP_URL = 'http://a.app.qq.com/o/simple.jsp?pkgname=im.zuber.app';
