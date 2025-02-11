export interface NavItemData {
  path: string;
  imgSrc: string;
  text: string;
  desc: string;
}

export const navItems: NavItemData[] = [
  {
    path: 'https://mused.com/zh-hans/',
    imgSrc: '/assets/museum/egypt.svg',
    text: '3d博物馆',
    desc: '埃及金字塔、卢克索神庙等在线游览',
  },
];

export const mapItems: NavItemData[] = [
  {
    path: 'https://openlayers.org/',
    imgSrc: '/assets/map/openlayers.svg',
    text: 'openlayers',
    desc: '2d 地图',
  },
  {
    path: 'https://cesium.com/learn/cesiumjs/ref-doc/',
    imgSrc: '/assets/map/vue-cesium.svg',
    text: 'cesium',
    desc: '三维地图',
  },
];

export const languageItems: NavItemData[] = [
  {
    path: 'https://res.wokanxing.info/jpgramma/',
    imgSrc: '/assets/languages/japan.svg',
    text: '日语语法指南',
    desc: '日语学习',
  },
  {
    path:"https://japanese-online.com/",
    imgSrc: '/assets/languages/japan.svg',
    text: 'japanese-online',
    desc: '日语学习',
  }
];

export const translateItems: NavItemData[] = [
  {
    path: 'https://translate.google.com/',
    imgSrc: '/assets/museum/egypt',
    text: 'google',
    desc: '翻译',
  },
  {
    path: 'https://www.bing.com/translator',
    imgSrc: '/assets/museum/egypt',
    text: 'bing',
    desc: '翻译',
  },
];

export const gameItems: NavItemData[] = [
  {
    path: 'https://minesweeper.online/cn/game/195201365',
    imgSrc: '/assets/game/minesweeper.svg',
    text: '扫雷',
    desc: '经典游戏',
  },
];

export const aiItems: NavItemData[] = [
  {
    path: 'https://chat.deepseek.com/',
    imgSrc: '/assets/AI/deepseek.svg',
    text: 'deepseek',
    desc: '',
  },
  {
    path: 'https://chatgpt.com/',
    imgSrc: '/assets/AI/ChatGPT.svg',
    text: 'chatgpt',
    desc: '',
  },
];

export const blogItems: NavItemData[] = [];

export const movieItems: NavItemData[] = [
  {
    path: 'https://www.iyf.tv/',
    imgSrc: '/assets/movie/iyf.png',
    text: '爱壹帆',
    desc: '海量高清视频观看',
  },
];

export const uiFrameItems: NavItemData[] = [
  {
    text: 'antd-react',
    path: 'https://ant.design/index-cn',
    imgSrc: '/assets/ui/antd.svg',
    desc: 'react UI框架',
  },
  {
    text: 'element',
    path: 'https://element.eleme.cn/#/zh-CN',
    imgSrc: '/assets/ui/element.svg',
    desc: 'vue UI框架',
  },
  {
    text: 'semi',
    path: 'https://semi.design/zh-CN/',
    imgSrc: '/assets/ui/semi-design.svg',
    desc: '',
  },
];

export const jsItems: NavItemData[] = [];
export const cssItems: NavItemData[] = [];
export const vueItems: NavItemData[] = [];
