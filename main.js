// ==UserScript==
// @name         teambition助手
// @namespace    https://github.com/CC11001100/teambition-helper-UserScript
// @version      0.1
// @description  提升teambition PC端的使用体验
// @author       CC11001100
// @match        https://www.teambition.com/*
// @grant        none
// ==/UserScript==
(async function () {
    'use strict';

    // 看板
    (async () => {
        while (true) {
            await sleep(1000);
            const kanbanBucketArray = document.querySelectorAll(".kanban-bucket");
            if (!kanbanBucketArray.length) {
                continue;
            }
            for (let x of kanbanBucketArray) {
                x.style = "height: auto !important;";
            }
        }
    })();


    /**
     *
     * @param mils
     * @returns {Promise<unknown>}
     */
    async function sleep(mils) {
        return new Promise((resolve) => setTimeout(resolve, mils));
    }

})();