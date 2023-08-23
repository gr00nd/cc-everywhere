"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[6786],{86493:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return u}});var a,r=n(87462),i=n(63366),d=(n(15007),n(64983)),o=n(91515),l=["components"],m={},s=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),p={_frontmatter:m},c=o.Z;function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,d.mdx)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"quickstart-guide"},"Quickstart Guide"),(0,d.mdx)(s,{variant:"warning",slots:"header, text1, text2",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"IMPORTANT: Deprecation Warning"),(0,d.mdx)("p",null,"We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated later this year."),(0,d.mdx)("p",null,"While we are in beta, all v3 clients are disabled by default. ",(0,d.mdx)("strong",{parentName:"p"},"Please share your API key with ",(0,d.mdx)("a",{parentName:"strong",href:"mailto:amandah@adobe.com"},"amandah@adobe.com")," to begin development.")),(0,d.mdx)("p",null,"This guide explains how to start using the Adobe Express Embed SDK in your own application."),(0,d.mdx)("h2",{id:"step-1-get-an-api-key"},"Step 1: Get an API Key"),(0,d.mdx)("p",null,"Create a new project in the ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/console"},"Developer Console"),'. Select "Add an API" > "Adobe Express Embed SDK".'),(0,d.mdx)("p",null,'Then, choose "Single-Page App" and register your domain in the "Allowed Domains" fields.'),(0,d.mdx)(s,{variant:"info",slots:"text1, text2",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"Note: As of March 2023, the ",(0,d.mdx)("inlineCode",{parentName:"p"},"redirectUri")," parameter is no longer used. You do not need to include it in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"initialize()")," method. The ",(0,d.mdx)("inlineCode",{parentName:"p"},"exchangeAuthCodeForToken()")," API no longer needs to be called."),(0,d.mdx)("p",null,"If you created a project prior to March 2023, please ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/console"},"create a new project")," and register your allowed domains."),(0,d.mdx)("h2",{id:"step-2-embed-the-sdk"},"Step 2: Embed the SDK"),(0,d.mdx)("p",null,"The latest ",(0,d.mdx)("a",{parentName:"p",href:"https://sdk.cc-embed.adobe.com/v3/version.json"},"version")," of the SDK is available on Adobe's CDN:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'var CDN_URL = "https://sdk.cc-embed.adobe.com/v3/CCEverywhere.js";\n')),(0,d.mdx)("p",null,"You can read the ",(0,d.mdx)("a",{parentName:"p",href:"/cc-everywhere/src/pages/guides/changelog/index.md"},"changelog")," to understand known issues as well as what changes have been made."),(0,d.mdx)("h3",{id:"load-via-script-tag"},"Load via script tag"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'<script src="https://sdk.cc-embed.adobe.com/v3/CCEverywhere.js"><\/script>\n<script>\n  (async () => {\n    const ccEverywhere = await window.CCEverywhere.initialize();\n  })();\n<\/script>\n')),(0,d.mdx)("h3",{id:"using-import"},"Using import"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},"await import(CDN_URL);\nconst ccEverywhere = await window.CCEverywhere.initialize();\n")),(0,d.mdx)("h3",{id:"dynamic-script"},"Dynamic script"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'((document, url) => {\n    const script = document.createElement("script");\n    script.src = url;\n    script.onload = async () => {\n      if (!window.CCEverywhere) {\n          return;\n        }\n        const ccEverywhere = await window.CCEverywhere.initialize();\n    };\n    document.body.appendChild(script);\n  })(document, CDN_URL);\n')),(0,d.mdx)("h2",{id:"step-3-initialize-the-sdk"},"Step 3: Initialize the SDK"),(0,d.mdx)("p",null,"The SDK should only be initialized once each page. To initialize the SDK, pass the default method ",(0,d.mdx)("inlineCode",{parentName:"p"},"initialize()"),":"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"CLIENT_ID")," (string): API key from Developer Console"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"APP_NAME")," (string): Name of your integration/app. This name corresponds with the project folder created for your end users in Adobe Express.")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},"(async () => {\n    const ccEverywhere = await window.CCEverywhere.initialize({\n      clientId: <CLIENT_ID>,\n      appName: <APP_NAME>,\n    });\n})();\n")),(0,d.mdx)("p",null,"This returns a ",(0,d.mdx)("inlineCode",{parentName:"p"},"CCEverywhere")," Class object, with three methods:"),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("inlineCode",{parentName:"li"},"openQuickAction()"),": Launch an Adobe Express quick action"),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("inlineCode",{parentName:"li"},"createDesign()"),": Create a new project or start editing an image in an embedded editor"),(0,d.mdx)("li",{parentName:"ol"},(0,d.mdx)("inlineCode",{parentName:"li"},"editDesign()"),": Edit an existing project in an embedded editor")),(0,d.mdx)("p",null,"The SDK can be initialized with a customized locale. Read more about the initialize API ",(0,d.mdx)("a",{parentName:"p",href:"../../reference/initialize/index.md"},"here"),"."),(0,d.mdx)("h2",{id:"next-steps-explore-the-sdk"},"Next Steps: Explore the SDK"),(0,d.mdx)("p",null,"Our guides along with the ",(0,d.mdx)("a",{parentName:"p",href:"../../reference/index.md"},"SDK references")," can help you start working with the SDK in a way that best suits your needs."),(0,d.mdx)("h3",{id:"full-editor"},(0,d.mdx)("a",{parentName:"h3",href:"../guides/full_editor/index.md"},"Full editor")),(0,d.mdx)("p",null,"With the full editor component, your users are able to:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"How to ",(0,d.mdx)("a",{parentName:"li",href:"../guides/full_editor/create_project/"},"create new projects")),(0,d.mdx)("li",{parentName:"ul"},"How to ",(0,d.mdx)("a",{parentName:"li",href:"../guides/full_editor/edit_project/"},"edit existing projects"))),(0,d.mdx)("p",null,"Users can access Adobe Express's huge template and asset library when starting with a blank new project in the editor. Pre-selected images can also be loaded into the editor for further designing. The editor can also load previous projects (created using your integration) by taking an existing project ID as input."),(0,d.mdx)("h3",{id:"quick-actions"},(0,d.mdx)("a",{parentName:"h3",href:"../guides/quick_actions/index.md"},"Quick actions")),(0,d.mdx)("p",null,"Once the selected quick action loads in the iframe, users can browse their filesystem for an asset. At this time, only image quick actions can pass a pre-selected asset as input. After the quick action is completed, a download button will appear. You can configure other export options such as taking the user into a full editor component to further customize the modified asset, or saving it back onto your application."),(0,d.mdx)("h2",{id:"browser-support"},"Browser support"),(0,d.mdx)("p",null,"Here are the minimum browser requirements for the SDK:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Browser name"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Supported"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Minimum version"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Safari"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"16 and above")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Google Chrome"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"100 and above")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Microsoft Edge"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"107 and above")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"Firefox"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"No"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"N/A")))),(0,d.mdx)("p",null,"The SDK will ",(0,d.mdx)("em",{parentName:"p"},"not")," work in incognito windows."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-quickstart-index-md-4551fc3adfefb14b5f2a.js.map