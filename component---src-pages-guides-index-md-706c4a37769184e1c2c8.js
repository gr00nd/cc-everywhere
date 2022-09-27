"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[450],{5319:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return l}});var r=t(7462),i=t(3366),a=(t(5007),t(4983)),o=t(1515),d=["components"],s={},m={_frontmatter:s},c=o.Z;function l(e){var n=e.components,t=(0,i.Z)(e,d);return(0,a.mdx)(c,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"quickstart-guide"},"Quickstart Guide"),(0,a.mdx)("p",null,"This guide explains how to start using the SDK in your own application. "),(0,a.mdx)("h2",{id:"step-1-get-an-api-key"},"Step 1: Get an API Key"),(0,a.mdx)("p",null,"Create a new project in the ",(0,a.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/console"},"Developer Console"),'. Select "Add an API" > "Creative Cloud Everywhere". '),(0,a.mdx)("p",null,'Then, choose "Single-Page App" and register your domain in the "Redirect URI Patterns" and "Default Redirect URI" fields. You can read more ',(0,a.mdx)("a",{parentName:"p",href:"../guides/authorization/index.md"},"here"),". "),(0,a.mdx)("h2",{id:"step-2-embed-sdk"},"Step 2: Embed SDK"),(0,a.mdx)("p",null,"The latest ",(0,a.mdx)("a",{parentName:"p",href:"https://sdk.cc-embed.adobe.com/v1/version.json"},"version")," of the SDK is available on Adobe's CDN: "),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},'var CDN_URL = "https://sdk.cc-embed.adobe.com/v1/CCEverywhere.js";\n')),(0,a.mdx)("p",null,"You can read the ",(0,a.mdx)("a",{parentName:"p",href:"/cc-everywhere/src/pages/guides/changelog/index.md"},"changelog")," to understand what updates are being made."),(0,a.mdx)("h3",{id:"load-via-script-tag"},"Load via script tag"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},'<script src="https://sdk.cc-embed.adobe.com/v1/CCEverywhere.js"><\/script>\n<script>\n  (() => {\n    if (!window.CCEverywhere) {\n      return;\n    }\n    const ccEverywhere = window.CCEverywhere.initialize();\n  })();\n<\/script>\n')),(0,a.mdx)("h3",{id:"using-import"},"Using import"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"await import(CDN_URL);\nconst ccEverywhere = window.CCEverywhere.initialize();\n")),(0,a.mdx)("h3",{id:"dynamic-script"},"Dynamic script"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},'((document, url) => {\n    const script = document.createElement("script");\n    script.src = url;\n    script.onload = () => {\n      if (!window.CCEverywhere) {\n          return;\n        }\n        const ccEverywhere = window.CCEverywhere.initialize();\n    };\n    document.body.appendChild(script);\n  })(document, CDN_URL);\n')),(0,a.mdx)("h2",{id:"step-3-initialize-the-sdk"},"Step 3: Initialize the SDK"),(0,a.mdx)("p",null,"The SDK should only be initialized once each page. To initialize the SDK, pass the default method ",(0,a.mdx)("inlineCode",{parentName:"p"},"initialize()"),":"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"CLIENT_ID")," (string): API key from Console"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"APP_NAME")," (string): Name of the Express folder created for end users of your integration"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"REDIRECT_URI")," (string): Specify the redirect URI you registered for the project in Developer Console")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"(() => {\n    if (!window.CCEverywhere) {\n      return;\n    }\n    const ccEverywhere = window.CCEverywhere.initialize({\n      clientId: <CLIENT_ID>,\n      appName: <APP_NAME>, \n      appVersion: { major: 1, minor: 0 },\n      platformCategory: 'web',\n      redirectUri: <REDIRECT_URI>\n    });\n})();\n")),(0,a.mdx)("p",null,"This returns a ",(0,a.mdx)("inlineCode",{parentName:"p"},"CCEverywhere")," Class object, with four methods: "),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("inlineCode",{parentName:"li"},"openQuickAction()"),": Quick Actions Component"),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("inlineCode",{parentName:"li"},"createDesign()"),": Adobe Express Editor Component"),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("inlineCode",{parentName:"li"},"editDesign()"),": Adobe Express Editor Component"),(0,a.mdx)("li",{parentName:"ol"},(0,a.mdx)("inlineCode",{parentName:"li"},"exchangeAuthCodeForToken()"),": Authorization ")),(0,a.mdx)("h2",{id:"step-4-exchange-access-token"},"Step 4: Exchange Access Token"),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},(0,a.mdx)("strong",{parentName:"p"},"Note"),": To set up a local server, refer to the ",(0,a.mdx)("a",{parentName:"p",href:"./local/index.md"},"local development set-up guide")," ")),(0,a.mdx)("p",null,"After a user logs in, they are redirected back to the designated ",(0,a.mdx)("strong",{parentName:"p"},"redirect URL")," with an authorization code. At this redirect URL is hit, call the following method to exchange that code for an access token:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"ccEverywhere.exchangeAuthCodeForToken();\n")),(0,a.mdx)("p",null,"The returned authorization code is exchanged for an access token, which is saved for future requests to the SDK during this session."),(0,a.mdx)("h2",{id:"next-steps-explore-the-sdk"},"Next Steps: Explore the SDK"),(0,a.mdx)("p",null,"The Adobe Create Embed SDK can be initialized with a customized locale. The ",(0,a.mdx)("a",{parentName:"p",href:"../../guides/index.md"},"guides")," along with the ",(0,a.mdx)("a",{parentName:"p",href:"../../reference/index.md"},"SDK references")," can help you start working with the SDK in a way that best suits your needs."),(0,a.mdx)("h3",{id:"express-editor-component"},(0,a.mdx)("a",{parentName:"h3",href:"../../guides/ccx_editor/index.md"},"Express Editor Component")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"How to ",(0,a.mdx)("a",{parentName:"li",href:"../guides/ccx_editor/create_project/"},"create a project")," in an Express editor"),(0,a.mdx)("li",{parentName:"ul"},"How to ",(0,a.mdx)("a",{parentName:"li",href:"../guides/ccx_editor/edit_project/"},"edit an existing project")," in an Express editor")),(0,a.mdx)("p",null,"When the editor first appears in a modal, the user will be asked to either log in, or create a Adobe Express account. Once logged in, users can access Express's huge template and asset library and start creating in a new blank project. The editor can also be spun up taking an existing project ID as input, and users can continue working on a project within the editor."),(0,a.mdx)("h3",{id:"quick-actions-editor-component"},(0,a.mdx)("a",{parentName:"h3",href:"../../guides/quick_actions/index.md"},"Quick Actions Editor Component")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"How to ",(0,a.mdx)("a",{parentName:"li",href:"../guides/quick_actions/image/"},"use Image Quick Actions")),(0,a.mdx)("li",{parentName:"ul"},"How to ",(0,a.mdx)("a",{parentName:"li",href:"../guides/quick_actions/video/"},"use Video Quick Actions"))),(0,a.mdx)("p",null,"Users must select the desired Quick Action (QA) so the corresponding QA editor is spun up. Within the QA Editor, users can browse their filesystem for an asset, and then perform the selected QA. They can download the modified asset to their computer, or further customize the modified asset in an Adobe Express editor."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-index-md-706c4a37769184e1c2c8.js.map