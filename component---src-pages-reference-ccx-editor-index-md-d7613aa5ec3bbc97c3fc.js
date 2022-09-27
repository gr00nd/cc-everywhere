"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[343],{8001:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return o}});var r=a(7462),n=a(3366),d=(a(5007),a(4983)),m=a(1515),p=["components"],i={},l={_frontmatter:i},s=m.Z;function o(e){var t=e.components,a=(0,n.Z)(e,p);return(0,d.mdx)(s,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"adobe-express-editor-reference"},"Adobe Express Editor Reference"),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"978px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"74.37499999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/cc-everywhere/static/21a2539a989a0d0be51d403207ecfce5/5530d/editor.webp 320w","/cc-everywhere/static/21a2539a989a0d0be51d403207ecfce5/0c8fb/editor.webp 640w","/cc-everywhere/static/21a2539a989a0d0be51d403207ecfce5/b9625/editor.webp 978w"],sizes:"(max-width: 978px) 100vw, 978px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/cc-everywhere/static/21a2539a989a0d0be51d403207ecfce5/dd4a7/editor.png 320w","/cc-everywhere/static/21a2539a989a0d0be51d403207ecfce5/0f09e/editor.png 640w","/cc-everywhere/static/21a2539a989a0d0be51d403207ecfce5/9b76f/editor.png 978w"],sizes:"(max-width: 978px) 100vw, 978px",type:"image/png"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/cc-everywhere/static/21a2539a989a0d0be51d403207ecfce5/9b76f/editor.png",alt:"Editor",title:"Editor",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("p",null,"The Adobe Express Editor component gives you access to two workflows: "),(0,d.mdx)("ol",null,(0,d.mdx)("li",{parentName:"ol"},"Launch with a new project: ",(0,d.mdx)("a",{parentName:"li",href:"#createdesign"},"createDesign()")),(0,d.mdx)("li",{parentName:"ol"},"Launch with a project ID to continue editing an existing CC Express project: ",(0,d.mdx)("a",{parentName:"li",href:"#editdesign"},"editDesign()"))),(0,d.mdx)("h2",{id:"createdesign"},"createDesign()"),(0,d.mdx)("p",null,"This method launches a new project in the Adobe Express editor component. The editor is loaded in an iframe."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},"createDesign(CreateDesignParams)\n")),(0,d.mdx)("h3",{id:"createdesignparams"},"CreateDesignParams"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"createDesign()")," takes a ",(0,d.mdx)("inlineCode",{parentName:"p"},"CreateDesignParams")," object with 4 properties."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Properties"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"inputParams"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"#createinputparams"},"CreateInputParams")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Specify canvas template layout ratio, canvas template type, and the search text to pass in the target application")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"modalParams"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"../shared_types/index.md#modalparams"},"ModalParams")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Specify CC Express editor modal dimensions")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"outputParams"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"../shared_types/index.md#ccxoutputparams"},"CCXOutputParams")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Specify output type and file type of created project")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"callbacks"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"../shared_types/index.md#callbacks"},"Callbacks")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"onCancel, onPublish, onError, onLoad, onLoadStart, onPublishStart")))),(0,d.mdx)("h4",{id:"createinputparams"},"CreateInputParams"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"CreateInputParams")," allows you to configure the editor to be launched for the user."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"canvasAspectId"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"string"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Initializes the Express editor loaded with templates that fit that layout ratio")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"templateType"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"string"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Initializes the Express editor loaded with templates of this specified type")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"templateSearchText"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"string"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Initializes the Express editor with this string value for template search")))),(0,d.mdx)("p",null,"To see the full list of canvas template layout ratios and template types, see the ",(0,d.mdx)("a",{parentName:"p",href:"../../guides/ccx_editor/customization/index.md"},"customization")," page."),(0,d.mdx)("h3",{id:"example"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},"ccEverywhere.createDesign(\n    {\n        modalParams: {},\n        callbacks: {\n            onCancel: () => {},\n            onError: (err) => {},\n            onLoadStart: () => {},\n            onLoad: () => {},\n            onPublishStart: () => {},\n            onPublish: (publishParams) => {},\n        },\n        outputParams: { \n            outputType: 'base64'\n        },\n        inputParams: { \n            canvasAspectId: '1:2',\n            templateType: 'Flyers',\n        }\n    }\n); \n")),(0,d.mdx)("h2",{id:"editdesign"},"editDesign()"),(0,d.mdx)("p",null,"This method launches a Adobe Express editor component with an existing Adobe Express project. The editor is loaded in an iframe."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},"editDesign(EditDesignParams)\n")),(0,d.mdx)("h3",{id:"editdesignparams"},"EditDesignParams"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"editDesign()")," takes a ",(0,d.mdx)("inlineCode",{parentName:"p"},"EditDesignParams")," object with 4 properties."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"inputParams"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"#editinputparams"},"EditInputParams")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"ID of CC Express project to open for editing")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"modalParams"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"../shared_types/index.md#modalparams"},"ModalParams")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Specify CC Express editor modal dimensions")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"outputParams"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"../shared_types/index.md#ccxoutputparams"},"CCXOutputParams")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Specify output type and file type of created project")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"callbacks"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"../shared_types/index.md#callbacks"},"Callbacks")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"onCancel, onPublish, onError, onLoad, onLoadStart, onPublishStart")))),(0,d.mdx)("h4",{id:"editinputparams"},"EditInputParams"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"EditInputParams")," is where you pass the associated projectId to launch in an editor component."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"projectId"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"string"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"CC Express project ID to send to the editor component")))),(0,d.mdx)("p",null,"Get ",(0,d.mdx)("strong",{parentName:"p"},"projectId")," from ",(0,d.mdx)("strong",{parentName:"p"},"publishParams")," of ",(0,d.mdx)("strong",{parentName:"p"},"onPublish")," (called after save/download finishes)."),(0,d.mdx)("h3",{id:"example-1"},"Example"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},"ccEverywhere.editDesign(\n    {\n        // inputParams.projectId is the only REQUIRED parameter\n        inputParams: { \n            projectId: CCX_PROJECT_ID \n        },\n        callbacks: {\n            onCancel: () => {},\n            onError: (err) => {},\n            onLoadStart: () => {},\n            onLoad: () => {},\n            onPublishStart: () => {},\n            onPublish: (publishParams) => {},\n        },\n        modalParams: {},\n        outputParams: { \n            outputType: 'base64'\n        },\n    }\n);\n")))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-reference-ccx-editor-index-md-d7613aa5ec3bbc97c3fc.js.map