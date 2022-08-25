// ==UserScript==
// @name         teambition助手
// @namespace    https://github.com/CC11001100/teambition-helper-UserScript
// @version      0.2
// @description  提升teambition PC端的使用体验
// @author       CC11001100
// @match        https://www.teambition.com/*
// @grant        none
// ==/UserScript==
(async function () {
    'use strict';

    /**
     * 休眠给定的毫秒数
     *
     * @param mils
     * @returns {Promise<unknown>}
     */
    async function sleep(mils) {
        return new Promise((resolve) => setTimeout(resolve, mils));
    }

    /**
     * 看板修改为垂直高度无限拉伸
     */
    function dashboardTaskItemSlideDownIndefinitely() {
        const kanbanBucketArray = document.querySelectorAll(".kanban-bucket");
        if (!kanbanBucketArray.length) {
            return;
        }
        for (let x of kanbanBucketArray) {
            x.style = "height: auto !important;";
        }
    }

    /**
     * 干掉鼠标移动到完成上时出现的奇怪的按钮
     */
    function dashboardTaskItemCheckboxHoverClean() {
        // 这行是个什么奇怪的东西啊卧槽？
        // <span class="icon__vnGt icon dls-icon icon-triangle-down-s icon" data-role="icon"></span>
        let triangleElementArray = document.querySelectorAll(".icon-triangle-down-s");
        if (!triangleElementArray.length) {
            return;
        }
        for (let element of triangleElementArray) {
            element.remove();
        }
    }

    /**
     * 程序的主线程，循环运行一些检查之类的
     *
     * @returns {Promise<void>}
     */
    async function main() {

        // 要循环运行的函数
        const functionPointArray = [
            dashboardTaskItemSlideDownIndefinitely,
            dashboardTaskItemCheckboxHoverClean,
        ];

        while (true) {

            for (let functionPointer of functionPointArray) {
                try {
                    functionPointer();
                } catch (e) {
                    console.error(e);
                }
            }

            await sleep(1000);
        }
    }

    // 循环运行主线程，异步不等待，JS伪多线程
    main();

})();