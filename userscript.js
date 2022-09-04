// ==UserScript==
// @name         Zhihu Watermark Remover
// @namespace    http://overflow.cat/
// @version      0.1
// @description  Remove blind watermarks from Zhihu webpages
// @author       OverflowCat
// @match        https://www.zhihu.com/*
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
