// ==UserScript==
// @name         假的知乎盲水印
// @namespace    http://overflow.cat/
// @version      0.1.1
// @description  把知乎网页版的水印改成假的
// @author       OverflowCat
// @match        https://www.zhihu.com/*
// @license      WTFPL
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    document.querySelectorAll("#root > div > div").forEach(ele => {
        if (getComputedStyle(ele).backgroundImage.startsWith(`url("data:image/svg+xml;`)) {
            ele.setAttribute('style',
                `background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMzYgNzUiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMDUiIHdpZHRoPSIzMzYiIGhlaWdodD0iNzUiIGZvbnQtc2l6ZT0iMTVweCI+PHRleHQgeD0iMTAiIHk9IjEuNWVtIj4xMTQ1MTQxOTE5ODEwYWFhYWFhYWFhYWFhYTwvdGV4dD48dGV4dCB4PSIxMCIgeT0iM2VtIj4xMTQ1MTQxOTE5ODEwPC90ZXh0Pjwvc3ZnPg==") !important`
            );
        }
    })
})();
