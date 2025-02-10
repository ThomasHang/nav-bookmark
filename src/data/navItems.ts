export interface NavItemData {
  path: string;
  imgSrc: string;
  text: string;
  desc: string;
}

export const navItems: NavItemData[] = [
  {
    path: "https://mused.com/zh-hans/",
    imgSrc: "/assets/museum/egypt.svg",
    text: "3d博物馆",
    desc: "埃及金字塔、卢克索神庙等在线游览",
  },
];

export const mapItems: NavItemData[] = [
  {
    path: "https://openlayers.org/",
    imgSrc: "/assets/map/openlayers.svg",
    text: "openlayers",
    desc: "2d 地图",
  },
  {
    path: "https://cesium.com/learn/cesiumjs/ref-doc/",
    imgSrc: "/assets/museum/egypt",
    text: "cesium",
    desc: "三维地图",
  },
];

export const languageItems: NavItemData[] = [
  {
    path: "https://res.wokanxing.info/jpgramma/",
    imgSrc: "/assets/museum/egypt",
    text: "日语语法指南",
    desc: "直观",
  },
];

export const translateItems: NavItemData[] = [
  {
    path: "https://www.deepl.com/translator",
    imgSrc: "/assets/museum/egypt",
    text: "deepl",
    desc: "翻译",
  },
  {
    path: "https://translate.google.com/",
    imgSrc: "/assets/museum/egypt",
    text: "google",
    desc: "翻译",
  },
  {
    path: "https://www.bing.com/translator",
    imgSrc: "/assets/museum/egypt",
    text: "bing",
    desc: "翻译",
  },
];
