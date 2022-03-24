(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[444],{49395:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return c}});var a=n(22122),r=n(19756),o=(n(15007),n(64983)),i=n(99536),d=["components"],m={},l={_frontmatter:m},p=i.Z;function c(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.mdx)(p,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"video-quick-actions"},"Video Quick Actions"),(0,o.mdx)("p",null,"After the SDK has been initialized, the CCEverywhere object exposes these Video Quick Actions via the ",(0,o.mdx)("inlineCode",{parentName:"p"},"openQuickAction()")," method."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:"left"},"Quick Action"),(0,o.mdx)("th",{parentName:"tr",align:"left"},"QuickActionId"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},"Change Speed"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"'change-speed'")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},"Convert to GIF"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"'convert-to-gif'")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},"Convert to MP4"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"'convert-to-mp4'")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},"Crop Video"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"'crop-video'")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},"Merge Video"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"'merge-video'")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},"Resize Video"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"'resize-video'")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},"Reverse Video"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"'reverse-video'")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:"left"},"Trim Video"),(0,o.mdx)("td",{parentName:"tr",align:"left"},"'trim-video'")))),(0,o.mdx)("p",null,"Using the method ",(0,o.mdx)("inlineCode",{parentName:"p"},"openQuickAction()"),": "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"ccEverywhere.openQuickAction({\n    id: 'change-speed', \n    inputParams: {\n        exportOptions: []\n    },\n    callbacks: {\n        onCancel: () => {},\n        onError: (err) => {},\n        onLoadStart: () => {},\n        onLoad: () => {},\n        onPublishStart: () => {},\n        onPublish: (publishParams) => {},\n    },\n    modalParams: {},\n})\n")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Currently, you cannot pass a video asset for a video Quick Action. Instead users will be prompted to browse once the CCX QA modal is open. ")),(0,o.mdx)("h2",{id:"example"},"Example"),(0,o.mdx)("p",null,'They can then click the "Change Speed" button, which call the Quick Actions API. A CCX modal is launched, and user is presented with options for changing the speed. Then they can choose to further customize it in an CCX editor, or download the video asset.'),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n  <title>Quick Actions</title>\n  </head>\n    \n  <body>\n    <h1> Video Quick Action Example </h1>\n    <button id=\"change-speed\"> Change Speed </button>\n\n    <script type=\"text/javascript\" src=\"CCEverywhere.js\"><\/script>\n    <script type=\"text/javascript\" >\n\n    const PROJECT_NAME = 'cc everywhere';\n\n    var ccEverywhere = CCEverywhere.default.initialize(\n        {\n            clientId: YOUR_CLIENT_ID,\n            appName: PROJECT_NAME,\n            appVersion: { major: 1, minor: 0 },\n            platformCategory: 'web',\n            redirectUri: YOUR_REDIRECT_URI\n        }\n    );\n\n    const videoCallbacks = {\n        onCancel: () => {},\n        onPublish: (publishParams) => {\n        },\n        onError: (err) => {\n            console.error('Error received is', err.toString())\n        }\n    }\n\n    const exportOptions = [\n        {\n            target: 'Editor',\n            variant: 'cta',\n            optionType: 'button',\n            buttonType: 'native'\n        },\n        {\n            target: 'Download',\n            variant: 'primary',\n            optionType: 'button',\n            buttonType: 'native'\n        }\n    ];\n\n    document.getElementById('change-speed')\n    .addEventListener('click', () => {\n        ccEverywhere.openQuickAction({\n            id: 'change-speed', \n            inputParams: { \n                exportOptions: exportOptions\n            },\n            callbacks: videoCallbacks,\n            modalParams: {},\n        })\n    })\n    <\/script>\n  </body> \n</html>\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-quick-actions-video-index-md-13c1d495f988b8b5faf1.js.map