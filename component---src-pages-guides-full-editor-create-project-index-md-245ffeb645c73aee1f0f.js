"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[2221],{66940:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return p},default:function(){return x}});var n,r=t(87462),d=t(63366),i=(t(15007),t(64983)),m=t(91515),l=["components"],p={},s=(n="InlineAlert",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),o={_frontmatter:p},c=m.Z;function x(e){var a=e.components,t=(0,d.Z)(e,l);return(0,i.mdx)(c,(0,r.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"creating-new-projects-using-the-full-editor"},"Creating new projects using the full editor"),(0,i.mdx)(s,{variant:"error",slots:"header, text1, text2",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"IMPORTANT: Deprecation Warning"),(0,i.mdx)("p",null,"We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated later this year."),(0,i.mdx)("p",null,"While we are in beta, all v3 clients are disabled by default. ",(0,i.mdx)("strong",{parentName:"p"},"Please share your API key with ",(0,i.mdx)("a",{parentName:"strong",href:"mailto:amandah@adobe.com"},"amandah@adobe.com")," to begin development.")),(0,i.mdx)("p",null,"This guide will demonstrate how to use the embedded full editor in your own application."),(0,i.mdx)("h2",{id:"createdesign"},"createDesign()"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"../../../reference/index.md#cceverywhere"},"CCEverywhere")," object exposes the ",(0,i.mdx)("inlineCode",{parentName:"p"},"createDesign()")," method, which loads the editor component in an iframe."),(0,i.mdx)("h3",{id:"flow"},"Flow"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"User triggers ",(0,i.mdx)("inlineCode",{parentName:"li"},"createDesign()")," function from within the host application, and an editor is loaded in an iframe."),(0,i.mdx)("li",{parentName:"ul"},"A pop-up window will appear and the user has to create or log into their Adobe Express account."),(0,i.mdx)("li",{parentName:"ul"},"Any projects are automatically created/saved in a new project folder ('app_name' specified in SDK initialization) in the user's Adobe Express account.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'// Initialize the SDK before this \nccEverywhere.createDesign(\n    // CreateDesignParams\n    {\n        outputParams: { \n            outputType: "base64"\n        },\n        inputParams: { \n            canvasSize: "1:2",\n            templateType: "brochure",\n            // You can also load an image into the project \n            // asset : "..."\n        }\n    }\n); \n')),(0,i.mdx)("h2",{id:"createdesignparams"},"CreateDesignParams"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"createDesign()")," takes an object of parameters, ",(0,i.mdx)("inlineCode",{parentName:"p"},"CreateDesignParams"),", composed of:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"callbacks"),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("a",{parentName:"td",href:"../../../reference/types/index.md#callbacks"},"Callbacks")),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Callback methods")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"modalParams"),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("a",{parentName:"td",href:"../../../reference/types/index.md#modalparams"},"ModalParams")),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Parameters to configure editor/modal UI")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"inputParams"),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("a",{parentName:"td",href:"#createinputparams"},"CreateInputParams")),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Input parameters when creating a design")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"outputParams"),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("a",{parentName:"td",href:"../../../reference/types/index.md#ccxoutputparams"},"CCXOutputParams")),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Desired output options when exporting assets from the editor")))),(0,i.mdx)("p",null,"All the properties in ",(0,i.mdx)("inlineCode",{parentName:"p"},"CreateDesignParams")," are optional."),(0,i.mdx)("h3",{id:"createinputparams"},"CreateInputParams"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"CreateInputParams")," allows you to configure the embedded editor."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"canvasSize"),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("a",{parentName:"td",href:"../../../reference/types/index.md#size"},"Size"),"/",(0,i.mdx)("a",{parentName:"td",href:"../../../reference/types/index.md#canvasaspectid"},"CanvasAspectId")),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Launch the editor with canvas set at this size.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"asset"),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("a",{parentName:"td",href:"../../../reference/types/index.md#asset"},"Asset")),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Asset object that contains the base64-encoded image data you want the editor to open.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"editorPanelView"),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("a",{parentName:"td",href:"../../../reference/types/index.md#editorpanelview"},"EditorPanelView")),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Determines which panel view to open by default.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"exportOptions"),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("a",{parentName:"td",href:"../../../reference/types/index.md#exportoptions"},"ExportOptions"),"[]"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Export options for the asset that is created. If no export options are specified, the editor falls back to the default layout options.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"panelSearchText"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"string"),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Search text to pass in the editor for selected panel.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},"templateType"),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("a",{parentName:"td",href:"../../../reference/types/index.md#templatetype"},"TemplateType")),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Specify template type for canvas.")))),(0,i.mdx)("p",null,"View the full list of ",(0,i.mdx)("a",{parentName:"p",href:"../../../reference/types/index.md#canvasaspectid"},"canvas sizes")," and ",(0,i.mdx)("a",{parentName:"p",href:"../../../reference/types/index.md#templatetype"},"template types")),(0,i.mdx)("h2",{id:"example-create-new-project"},"Example: Create new project"),(0,i.mdx)("p",null,"The following code will invoke the full editor. It appears in a modal. When the user finishes in the editor and saves/publishes their design, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"onPublish")," callback is invoked. Resulting project data is sent in ",(0,i.mdx)("inlineCode",{parentName:"p"},"publishParams"),". In this example, we save the project info (",(0,i.mdx)("inlineCode",{parentName:"p"},"project_id"),") and display the image data (of the first page of the user's design) in some image container ",(0,i.mdx)("inlineCode",{parentName:"p"},"image_data"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts",metastring:'title="create-new-project.js"',title:'"create-new-project.js"'},"ccEverywhere.createDesign(\n    {\n        callbacks: createDesignCallback,\n        outputParams: {\n            outputType: \"base64\",\n        }\n    }\n);  \nconst createDesignCallback = {\n    onCancel: () => {},\n    onPublish: (publishParams) => {\n        console.log(publishParams)\n        const localData = { project: publishParams.asset[0].projectId, image: publishParams.asset[0].data };\n        image_data.src = localData.image;\n        project_id = localData.project;\n    },\n    onError: (err) => {\n        console.error('Error received is', err.toString());\n    },\n};\n")),(0,i.mdx)("h2",{id:"example-create-from-asset"},"Example: Create from asset"),(0,i.mdx)("p",null,"To launch the editor with a starting asset, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"createDesign")," API takes a ",(0,i.mdx)("inlineCode",{parentName:"p"},"asset")," in ",(0,i.mdx)("inlineCode",{parentName:"p"},"inputParams"),". When the user finishes in the editor and saves/publishes their design, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"onPublish")," callback is invoked. Resulting project data is sent in ",(0,i.mdx)("inlineCode",{parentName:"p"},"publishParams"),". In this example, we save the project info (",(0,i.mdx)("inlineCode",{parentName:"p"},"project_id"),") and display the image data (of the first page of the user's design) in some image container ",(0,i.mdx)("inlineCode",{parentName:"p"},"image_data"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-ts",metastring:'title="create-from-asset.js" hl_lines="5"',title:'"create-from-asset.js"',hl_lines:'"5"'},'ccEverywhere.createDesign(\n    {\n        callbacks: createDesignCallback,\n        inputParams: {\n            asset: "<base-64 encoded image data>"\n        },\n        outputParams: {\n            outputType: "base64",\n        }\n    }\n);  \nconst createDesignCallback = {\n    onCancel: () => {},\n    onPublish: (publishParams) => {\n        const localData = { project: publishParams.asset[0].projectId, image: publishParams.asset[0].data };\n        image_data.src = localData.image;\n        project_id = localData.project;\n    },\n    onError: (err) => {\n        console.error(\'Error received is\', err.toString());\n    },\n};\n')))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-full-editor-create-project-index-md-245ffeb645c73aee1f0f.js.map