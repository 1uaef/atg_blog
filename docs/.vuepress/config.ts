//  vuepress.config.ts

import {defaultTheme} from '@vuepress/theme-default';
import {defineUserConfig} from 'vuepress';

import {viteBundler} from "@vuepress/bundler-vite";
import {slimsearchPlugin} from '@vuepress/plugin-slimsearch';
 // 导入 navbar 配置


export default defineUserConfig({
    templateDev: "",
    lang: 'zh-CN',
    title: '学海无涯，前路漫漫',    // 网站标题

    bundler: viteBundler(),
    theme: defaultTheme({
        logo: '/favicon.ico',  // 添加 logo 属性以在标题旁边显示图标
        // 顶部导航栏
        navbar: [],
    }),
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}], // 添加 favicon.ico 图标
        ['meta', {
            name: 'keywords',
            content: '前端,后端,算法,Vue,React,Node.js,Java,Python',
        }],
        // 百度统计
        [
            "script",
            {},
            `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?2675818a983a3131404cee835018f016";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `,
        ],

    ],

    // 开启热更新
    shouldPrefetch: false,

    plugins: [
        slimsearchPlugin({
            // 配置搜索插件的选项
            indexContent: true, // 是否索引页面内容

        }),
    ]
})
