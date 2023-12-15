// ==UserScript==
// @name         教评脚本
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       Juns
// @match        http://jwxt.neuq.edu.cn/eams/quality/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
    console.log("匹配成功");
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const baseUrl =
      "http://jwxt.neuq.edu.cn/eams/quality/stdEvaluate!innerIndex.action";

    // 具体评价页面执行的函数
    async function evaluate() {
      await delay(1000);
      let inputs = document.querySelectorAll("input");
      for (let i in inputs) if (inputs[i].value == 0) inputs[i].checked = true;
      document.querySelector("textarea").value = "无";
      await delay(500);
      document.querySelector("#sub").click();
    }

    // 在根页面跳转的函数
    function jumpFn() {
      const span = document.querySelector(".eval");
      span.click();
    }

    // 初始化运行的函数
    function init() {
      location.href === baseUrl ? jumpFn() : evaluate();
    }

    init();
  })();
