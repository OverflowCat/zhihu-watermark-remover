// ==UserScript==
// @name         Zhihu Watermark Remover
// @name:zh-CN   删掉知乎网页版水印
// @name:zh-TW   移除知乎 Web 版水印
// @namespace    http://overflow.cat/
// @version      0.2
// @description  Remove blind watermarks from Zhihu webpages
// @description:zh-CN  删掉知乎网页版的水印
// @description:zh-TW  移除知乎 Web 版的水印
// @author       OverflowCat
// @match        https://*.zhihu.com/*
// @match        http://*.zhihu.com/*
// @match        https://zhihu.com/*
// @match        http://zhihu.com/*
// @license      WTFPL
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    document.querySelectorAll("#root > div > div").forEach(ele => {
        if (getComputedStyle(ele).backgroundImage.startsWith(`url("data:image/svg+xml;`)) ele.remove();
    })
})();
