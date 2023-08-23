"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[7662],{15930:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return c}});var n,r=a(87462),i=a(63366),d=(a(15007),a(64983)),m=a(91515),l=["components"],o={},p=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),s={_frontmatter:o},x=m.Z;function c(e){var t=e.components,a=(0,i.Z)(e,l);return(0,d.mdx)(x,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"launching-existing-projects-in-the-full-editor"},"Launching existing projects in the full editor"),(0,d.mdx)(p,{variant:"error",slots:"header, text1, text2",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"IMPORTANT: Deprecation Warning"),(0,d.mdx)("p",null,"We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated later this year."),(0,d.mdx)("p",null,"While we are in beta, all v3 clients are disabled by default. ",(0,d.mdx)("strong",{parentName:"p"},"Please share your API key with ",(0,d.mdx)("a",{parentName:"strong",href:"mailto:amandah@adobe.com"},"amandah@adobe.com")," to begin development.")),(0,d.mdx)("p",null,"This guide will demonstrate how to launch a full editor component. The editor will appear in an iframe, pre-loaded with a specified Adobe Express project."),(0,d.mdx)("h2",{id:"editdesign"},"editDesign()"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("a",{parentName:"p",href:"../../../reference/index.md#cceverywhere"},"CCEverywhere")," object exposes the ",(0,d.mdx)("inlineCode",{parentName:"p"},"editDesign()")," method, which loads the full editor component in an iframe, with an existing project pre-loaded."),(0,d.mdx)("h3",{id:"flow"},"Flow"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"User triggers ",(0,d.mdx)("inlineCode",{parentName:"li"},"editDesign()")," function from within the host application, and the full editor is loaded in an iframe."),(0,d.mdx)("li",{parentName:"ul"},"To pre-load the editor with an existing project, you must pass the associated project ID to ",(0,d.mdx)("inlineCode",{parentName:"li"},"editDesignParams"),". This ID is returned in the ",(0,d.mdx)("inlineCode",{parentName:"li"},"project")," property of ",(0,d.mdx)("inlineCode",{parentName:"li"},"publishParams")," from the ",(0,d.mdx)("inlineCode",{parentName:"li"},"onPublish")," callback.")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'// Initialize SDK and save CCEverywhere object as ccEverywhere \nccEverywhere.editDesign(\n    {\n        inputParams: { \n            projectId: CCX_PROJECT_ID \n        },\n        callbacks: {\n            onCancel: () => {},\n            onError: (err) => {},\n            onLoadStart: () => {},\n            onLoad: () => {},\n            onPublishStart: () => {},\n            onPublish: (publishParams) => {},\n        },\n        modalParams: {},\n        outputParams: { \n            outputType: "base64"\n        },\n    }\n);\n')),(0,d.mdx)("h2",{id:"editdesignparams"},"EditDesignParams"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"editDesign()")," takes an object of parameters, ",(0,d.mdx)("inlineCode",{parentName:"p"},"EditDesignParams"),", composed of:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"modalParams"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Define size of editor modal"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"../../../reference/types/index.md#modalparams"},"ModalParams"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"inputParams"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Adobe Express project ID to initialize editor component"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"../../../reference/full_editor/index.md#editinputparams"},"EditInputParams"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"outputParams"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Configure output type"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"../../../reference/types/index.md#ccxoutputparams"},"CCXOutputParams"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"callbacks"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Callback functions"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"../../../reference/types/index.md#callbacks"},"Callbacks"))))),(0,d.mdx)("p",null,"The only required property is ",(0,d.mdx)("inlineCode",{parentName:"p"},"inputParams.projectId"),"."),(0,d.mdx)("h3",{id:"editinputparams"},"EditInputParams"),(0,d.mdx)("p",null,(0,d.mdx)("inlineCode",{parentName:"p"},"EditInputParams")," is where you pass the associated projectId to launch in an editor component."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"projectId"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"string"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Project ID of the asset returned from ",(0,d.mdx)("inlineCode",{parentName:"td"},"onPublish")," callback when ",(0,d.mdx)("inlineCode",{parentName:"td"},"createDesign")," was invoked.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"editorPanelView"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"../../../reference/types/index.md#editorpanelview"},"EditorPanelView")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Determines which panel view to open by default.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"exportOptions"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"../../../reference/types/index.md#exportoptions"},"ExportOptions"),"[]"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Export options for the asset that is created. If no export options are specified, the editor falls back to the default layout options.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"panelSearchText"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"string"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Search text to pass in the editor for selected panel.")))),(0,d.mdx)("p",null,"When a user completes their workflow in the editor, the associated ",(0,d.mdx)("strong",{parentName:"p"},"projectId")," is sent back in ",(0,d.mdx)("a",{parentName:"p",href:"../../../reference/types/index.md#publishparams"},"publishParams")," from the ",(0,d.mdx)("inlineCode",{parentName:"p"},"onPublish")," callback"),(0,d.mdx)("h2",{id:"example-edit-existing-project"},"Example: Edit existing project"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"editDesign")," API takes a saved ",(0,d.mdx)("inlineCode",{parentName:"p"},"projectId")," as input and launches an ",(0,d.mdx)("strong",{parentName:"p"},"existing")," project in the editor. When the user finishes in the editor and saves/publishes their design, the ",(0,d.mdx)("inlineCode",{parentName:"p"},"onPublish")," callback is invoked. Resulting project data is sent in ",(0,d.mdx)("inlineCode",{parentName:"p"},"publishParams"),". In this example, we save the project info (",(0,d.mdx)("inlineCode",{parentName:"p"},"project_id"),") and display the image data (of the first page of the user's design) in some image container ",(0,d.mdx)("inlineCode",{parentName:"p"},"image_data"),"."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-ts",metastring:'title="edit-project.js" hl_lines="15"',title:'"edit-project.js"',hl_lines:'"15"'},"const editDesignCallback = {\n    onCancel: () => {},\n    onPublish: (publishParams) => {\n        const pageData = { project: publishParams.asset[0].projectId, image: publishParams.asset[0].data };\n        image_data.src = pageData.image;\n        project_id = pageData.project;\n    },\n    onError: (err) => {\n        console.error('Error received is', err.toString());\n    },\n};\nccEverywhere.editDesign(\n    {\n        inputParams: { \n            projectId: project_id \n        },\n        callbacks: editDesignCallback\n    }\n);\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-full-editor-edit-project-index-md-4e9b0ae2cf5c645bf0f4.js.map