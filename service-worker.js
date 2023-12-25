/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5a4d93973871012ee027db89a3a0a8c4"
  },
  {
    "url": "assets/css/0.styles.d07cf7c3.css",
    "revision": "facc1ee120a67105e8be5e4d6d49f0a8"
  },
  {
    "url": "assets/img/ABAC.65898cd8.svg",
    "revision": "65898cd8e222590a52de7faed74f1aef"
  },
  {
    "url": "assets/img/api.e9f8c58f.svg",
    "revision": "e9f8c58fa9da64cdda4348ecec07d5e3"
  },
  {
    "url": "assets/img/data_life_cycle.c5c3f545.svg",
    "revision": "c5c3f545d58bc65e0d5d2368b7499ad5"
  },
  {
    "url": "assets/img/database_extraction.c814b4fc.svg",
    "revision": "c814b4fcee5f85f20560fa7ac46064fa"
  },
  {
    "url": "assets/img/image-1.cf6ad3e6.png",
    "revision": "cf6ad3e6db21203d28881ad3600d1cf5"
  },
  {
    "url": "assets/img/image-11.0749a879.png",
    "revision": "0749a8798689431c7e8adfaf54ebf661"
  },
  {
    "url": "assets/img/image-12.8d9639b5.png",
    "revision": "8d9639b54887bc8ce583f7d1574a2f3f"
  },
  {
    "url": "assets/img/image-13.91fbcdaf.png",
    "revision": "91fbcdaf08096e623f15593423d95611"
  },
  {
    "url": "assets/img/image-14.0897f943.png",
    "revision": "0897f9439c747e36687305b084c83895"
  },
  {
    "url": "assets/img/image-15.bdaae322.png",
    "revision": "bdaae3228cf9a7b338f975b2d58fa771"
  },
  {
    "url": "assets/img/image-16.fbb4ad6f.png",
    "revision": "fbb4ad6fe7e5e6f83a0ed7d8fbfeff96"
  },
  {
    "url": "assets/img/image-17.8b5e4816.png",
    "revision": "8b5e4816c56c86500e8c39bc77195c0f"
  },
  {
    "url": "assets/img/image-18.86c28a41.png",
    "revision": "86c28a413ae1919f0f2e1fb60b1f1d4e"
  },
  {
    "url": "assets/img/image-19.bf142f20.png",
    "revision": "bf142f206892f2e7cc98d9a8a4eeca31"
  },
  {
    "url": "assets/img/image-2.b61676cf.png",
    "revision": "b61676cf7971db5337272872098d7f8d"
  },
  {
    "url": "assets/img/image-20.baaffc23.png",
    "revision": "baaffc23365a94f919d24cc038d4d5ac"
  },
  {
    "url": "assets/img/image-21.9e23e108.png",
    "revision": "9e23e108e8c4c5376f9e20712d4c337f"
  },
  {
    "url": "assets/img/image-22.42df6e7d.png",
    "revision": "42df6e7de95c2dcdd14de245a07ab19b"
  },
  {
    "url": "assets/img/image-23.0d0e8b99.png",
    "revision": "0d0e8b99ac9a76ec5c1472bcabde0777"
  },
  {
    "url": "assets/img/image-24.24ae137b.png",
    "revision": "24ae137bc6be7e4470d188c92e1ea478"
  },
  {
    "url": "assets/img/image-25.eea82f70.png",
    "revision": "eea82f70e197bfe3cb680e7551906987"
  },
  {
    "url": "assets/img/image-26.a5dc5cad.png",
    "revision": "a5dc5cadcba8d51503e8ebf8c62f8a7b"
  },
  {
    "url": "assets/img/image-27.adb97d45.png",
    "revision": "adb97d45300573f403f7cd8a46983700"
  },
  {
    "url": "assets/img/image-28.d7771483.png",
    "revision": "d77714831fdae8fe85f618f9113bb5a2"
  },
  {
    "url": "assets/img/image-29.75f3ed1e.png",
    "revision": "75f3ed1e5625e8344112624f2775139a"
  },
  {
    "url": "assets/img/image-30.af082dc0.png",
    "revision": "af082dc036ea5fdab635e669ae3d45a3"
  },
  {
    "url": "assets/img/image-31.9eb925cc.png",
    "revision": "9eb925ccb0b92a4cd7e2dada4dc2a0b7"
  },
  {
    "url": "assets/img/image-32.d5a98203.png",
    "revision": "d5a98203dbf3fcd31e13df2c00f48cdc"
  },
  {
    "url": "assets/img/image-33.76350c4d.png",
    "revision": "76350c4d3dc42cfc58c3cea690990317"
  },
  {
    "url": "assets/img/image-34.f1bd1c53.png",
    "revision": "f1bd1c53e319abb37a04ac7d80897377"
  },
  {
    "url": "assets/img/image-35.9b771604.png",
    "revision": "9b77160428fd2fdb624c64ad17ce8e5f"
  },
  {
    "url": "assets/img/image-36.0a03ab03.png",
    "revision": "0a03ab03a06e68f6094dcd1fe45b0226"
  },
  {
    "url": "assets/img/image-37.4c97009e.png",
    "revision": "4c97009e8a98a56c5d2edea3ebd1ac5a"
  },
  {
    "url": "assets/img/image-38.a41c8f43.png",
    "revision": "a41c8f43bf7755098c75f57e38819033"
  },
  {
    "url": "assets/img/image-39.a80a13ec.png",
    "revision": "a80a13ec8a638f1da8d9b94aa3a01ce1"
  },
  {
    "url": "assets/img/image-4.abfeef0e.png",
    "revision": "abfeef0ea78ced578bcc3a73f238b676"
  },
  {
    "url": "assets/img/image-40.1425f44b.png",
    "revision": "1425f44bfa9d6838e38f2cbc369503e6"
  },
  {
    "url": "assets/img/image-41.22d4cd41.png",
    "revision": "22d4cd4114e8f451879ca5bbe2b53b18"
  },
  {
    "url": "assets/img/image-42.89b8a66e.png",
    "revision": "89b8a66eda8affd5033af2e609a16b65"
  },
  {
    "url": "assets/img/image-43.c3899c44.png",
    "revision": "c3899c44b4ce18f296295fe1b6020197"
  },
  {
    "url": "assets/img/image-44.7453dc58.png",
    "revision": "7453dc58cba1cba0ca363437b7f2c590"
  },
  {
    "url": "assets/img/image-45.7de8563a.png",
    "revision": "7de8563a49819dd381017204c3342e2b"
  },
  {
    "url": "assets/img/image-46.318375fb.png",
    "revision": "318375fb36d5b0978f4d9d1fbf0a98d0"
  },
  {
    "url": "assets/img/image-47.cad64389.png",
    "revision": "cad643899ca005fccad4616713ff1b4f"
  },
  {
    "url": "assets/img/image-48.eb70e939.png",
    "revision": "eb70e939d81bc7dde3582a15d3ee870c"
  },
  {
    "url": "assets/img/image-49.5c0c529e.png",
    "revision": "5c0c529e2a70798726945ee9f0a6cb6c"
  },
  {
    "url": "assets/img/image-5.3d86143b.png",
    "revision": "3d86143be7b0dc781a7b023e98a0b004"
  },
  {
    "url": "assets/img/image-50.d59a8817.png",
    "revision": "d59a881749fde6e4524bb3064fc4c09d"
  },
  {
    "url": "assets/img/image-6.9fae0574.png",
    "revision": "9fae05740b5c8cba1dc90b349d20219e"
  },
  {
    "url": "assets/img/image.5e9d8717.png",
    "revision": "5e9d8717e5c0a9a35c359f68a89f3d24"
  },
  {
    "url": "assets/img/relation_diagram.6bf12150.svg",
    "revision": "6bf12150ad2ab768717f685501009648"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/webscraping.88223cb1.svg",
    "revision": "88223cb1f8ff7767300cbf1968dab084"
  },
  {
    "url": "assets/js/1.93919a36.js",
    "revision": "6c98c4692bd7645d51a2ed5d6f3800dd"
  },
  {
    "url": "assets/js/10.08723981.js",
    "revision": "2a733d928d540555935ac9154c067f9d"
  },
  {
    "url": "assets/js/13.be9df748.js",
    "revision": "b487bc717547688c98fe7e3d8c011477"
  },
  {
    "url": "assets/js/14.e2fddaa7.js",
    "revision": "b725766b663b7b6bce4a6de6ab39b178"
  },
  {
    "url": "assets/js/15.ad069845.js",
    "revision": "859b27d86036d0755357a75f878a1f10"
  },
  {
    "url": "assets/js/16.2bea537f.js",
    "revision": "604c26ffe25898d58b3109dd587daf23"
  },
  {
    "url": "assets/js/17.d4c72b9f.js",
    "revision": "68f641f94a18bc3f837b6c71a47e3e20"
  },
  {
    "url": "assets/js/18.516876e0.js",
    "revision": "b537a12e88372194329a1ede682809ab"
  },
  {
    "url": "assets/js/19.2e99fd3a.js",
    "revision": "5d3e05806b46930f7558774f25d2caaa"
  },
  {
    "url": "assets/js/2.4998dffb.js",
    "revision": "11e837c6ae3f6c1ce0e24351653df0c5"
  },
  {
    "url": "assets/js/20.326a463c.js",
    "revision": "9014eb594e436ccc85cfef6a66128c93"
  },
  {
    "url": "assets/js/21.e7276ac5.js",
    "revision": "abd60066886bad8b212bb46d020a4c5f"
  },
  {
    "url": "assets/js/22.e57cee46.js",
    "revision": "12310cf8cb5137e14ec928b6d3d02bce"
  },
  {
    "url": "assets/js/23.05a02883.js",
    "revision": "3585cc5430e211191a50cc6560da7ec1"
  },
  {
    "url": "assets/js/24.1677e51a.js",
    "revision": "f6d6f781e8e2c557209333ead22505ee"
  },
  {
    "url": "assets/js/25.3dad68cc.js",
    "revision": "6875f73c8b494abf60252a4be272dbb5"
  },
  {
    "url": "assets/js/26.4f0b3e42.js",
    "revision": "4ee966da3f6622efbb40cffd41d214ba"
  },
  {
    "url": "assets/js/27.7b15ab0b.js",
    "revision": "b1b85e0da372053430231ee6be735a6f"
  },
  {
    "url": "assets/js/28.8b1ecfa7.js",
    "revision": "ee14572762546e40ee723a56d01765b7"
  },
  {
    "url": "assets/js/29.9c72a9c6.js",
    "revision": "811aa139be1ff7e61faa88ae53321fc9"
  },
  {
    "url": "assets/js/3.ff62ff2a.js",
    "revision": "4c204f2bd9044de058e0a7e8f6cee946"
  },
  {
    "url": "assets/js/30.51aee618.js",
    "revision": "f2ecbd50874fde26b08202321ab38347"
  },
  {
    "url": "assets/js/31.ccf5af88.js",
    "revision": "2ef4860e88fa6321d2a6571c65e16451"
  },
  {
    "url": "assets/js/32.f75a6a42.js",
    "revision": "6779176aa681a0a165fbbba7efdd52e6"
  },
  {
    "url": "assets/js/33.e5462dfd.js",
    "revision": "764db508509c8a26bb90a601e408a843"
  },
  {
    "url": "assets/js/34.a745f7e7.js",
    "revision": "ed2580366880b56390000774256657ab"
  },
  {
    "url": "assets/js/36.931d3f85.js",
    "revision": "c72748cf5e73404be7942fb631e692fa"
  },
  {
    "url": "assets/js/4.8025a580.js",
    "revision": "959115dc444d90610495722a37439129"
  },
  {
    "url": "assets/js/5.b1d8ca5a.js",
    "revision": "b8dd6808fd013efb989af2afc5454074"
  },
  {
    "url": "assets/js/6.51bb5233.js",
    "revision": "0f74e84b1f7e6d6a236bbe8ba86de3f4"
  },
  {
    "url": "assets/js/7.eea8d483.js",
    "revision": "e8d69d5f088a2ace2e4fe38855ac2f83"
  },
  {
    "url": "assets/js/8.f9c18884.js",
    "revision": "6b4223c7174d87d6c951df293da05d73"
  },
  {
    "url": "assets/js/9.6d6cb0f7.js",
    "revision": "4a95fe10c08f9afa60ddcc63c2c85fd7"
  },
  {
    "url": "assets/js/app.07df8e5c.js",
    "revision": "526f07f6f756205deace45a7e889a489"
  },
  {
    "url": "assets/js/vendors~docsearch.6ec0293d.js",
    "revision": "7217d5a43688d70e4765ab82fff9b2a9"
  },
  {
    "url": "conclusion/index.html",
    "revision": "841ceddfc61f840b6d524a1c2ba5fddf"
  },
  {
    "url": "design/index.html",
    "revision": "5075e713a18d868931118be3d0a5453e"
  },
  {
    "url": "index.html",
    "revision": "ac78f87beec4f1dece55520da6eb3e2e"
  },
  {
    "url": "intro/index.html",
    "revision": "2c444e08c16b4fbf20ba829eec6743c5"
  },
  {
    "url": "requirements/index.html",
    "revision": "e6200b5858e9eea62297aecd55f6f921"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "bca5f0c5a19af995d9cf8609decec007"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ee7f599af0351a86c0084d8861b04cef"
  },
  {
    "url": "software/index.html",
    "revision": "b130522b50f4b69bba36047da735cf81"
  },
  {
    "url": "test/index.html",
    "revision": "dca8664465cfa15a0a4cd38c364469c1"
  },
  {
    "url": "use cases/index.html",
    "revision": "f180d5de2e44ee5d608d0eb6e5e1a0b3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
