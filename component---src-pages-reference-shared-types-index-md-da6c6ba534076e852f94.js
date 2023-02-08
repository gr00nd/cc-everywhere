"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[912],{21083:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return p},default:function(){return x}});var r=a(87462),n=a(63366),d=(a(15007),a(64983)),m=a(91515),l=["components"],p={},i={_frontmatter:p},o=m.Z;function x(t){var e=t.components,a=(0,n.Z)(t,l);return(0,d.mdx)(o,(0,r.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"shared-types"},"Shared Types"),(0,d.mdx)("h2",{id:"asset"},"Asset"),(0,d.mdx)("p",null,"Represents an asset that can be loaded into a full editor component, or loaded in for an image quick action."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Value(s)"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"type"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'image'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Type of asset (image)")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"dataType"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'base64'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Type of data representation (base64 only right now)")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"data"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"string"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Base 64 rendition of image asset")))),(0,d.mdx)("h2",{id:"callbacks"},"Callbacks"),(0,d.mdx)("p",null,"All the callbacks are optional and return void."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Callback Function"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"onCancel"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"() => {}"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Triggered when user closes the modal")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"onError"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"() => {}"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Triggered upon error with associated error code")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"onLoadStart"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"() => {}"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Triggered once modal begins to load")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"onLoad"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"() => {}"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Triggered once modal is loaded")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"onPublishStart"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"() => {}"),(0,d.mdx)("td",{parentName:"tr",align:"left"},'Triggered when "Publish"/"Download" is clicked')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"onPublish"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"(",(0,d.mdx)("a",{parentName:"td",href:"#publishparams"},"PublishParams")," or ",(0,d.mdx)("a",{parentName:"td",href:"#quickactionpublishparams"},"QuickActionPublishParams"),") => {}"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Triggered when publish/download is complete")))),(0,d.mdx)("h3",{id:"publishparams"},"PublishParams"),(0,d.mdx)("p",null,"Asset-related information received with ",(0,d.mdx)("inlineCode",{parentName:"p"},"onPublish")," callback."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"projectId"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"string generated for identifying the project")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"asset"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Resulting asset: ",(0,d.mdx)("a",{parentName:"td",href:"#outputasset"},"OutputAsset"))))),(0,d.mdx)("h3",{id:"quickactionpublishparams"},"QuickActionPublishParams"),(0,d.mdx)("p",null,"Asset-related information received with ",(0,d.mdx)("inlineCode",{parentName:"p"},"onPublish")," callback in quick actions."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"projectId"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"string generated for identifying the project")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"asset"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Resulting asset: ",(0,d.mdx)("a",{parentName:"td",href:"#outputasset"},"OutputAsset"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"exportButtonId"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("inlineCode",{parentName:"td"},"id")," passed in the ",(0,d.mdx)("inlineCode",{parentName:"td"},"CustomExportButton")," at time of invoking ",(0,d.mdx)("inlineCode",{parentName:"td"},"openQuickAction"))))),(0,d.mdx)("h2",{id:"ccxoutputparams"},"CCXOutputParams"),(0,d.mdx)("p",null,"All properties are optional. Allows you to define data type and file type of output asset."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Value"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"fileType"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'jpeg', 'png', 'mp4'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Output asset file type")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"outputType"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'base64'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Output data type")))),(0,d.mdx)("h2",{id:"modalparams"},"ModalParams"),(0,d.mdx)("p",null,"All properties are optional. Allows you to define the UI constraints of the modal."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Type/Value"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"parentElementId"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"string")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"size"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"#size"},"Size"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"padding"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"number")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"borderRadius"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"number")))),(0,d.mdx)("h2",{id:"outputasset"},"OutputAsset"),(0,d.mdx)("p",null,"Passed to the onPublish callback in PublishParams. Extends the ",(0,d.mdx)("a",{parentName:"p",href:"#asset"},"Asset")," type with 3 additional properties."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Value(s)"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"type"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'image', 'video'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Type of asset (image or video)")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"dataType"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'base64'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Type of data representation")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"data"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"string"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Base 64 rendition of video/image asset")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"fileType"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'jpeg', 'png', 'mp4'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Type of output asset")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"(optional) fileName"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"string"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Name of output asset")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"(optional) size"),(0,d.mdx)("td",{parentName:"tr",align:"left"},(0,d.mdx)("a",{parentName:"td",href:"#size"},"Size")),(0,d.mdx)("td",{parentName:"tr",align:"left"},"Dimensions of output asset")))),(0,d.mdx)("h2",{id:"size"},"Size"),(0,d.mdx)("p",null,"Allows you to define the canvas size of the project created in the full editor."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Value"),(0,d.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"width"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"number"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"minimum value = 0")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"height"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"number"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"minimum value = 0")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:"left"},"unit"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"'px'/'in'/'mm'"),(0,d.mdx)("td",{parentName:"tr",align:"left"},"pixels/inches/millimeters")))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-reference-shared-types-index-md-da6c6ba534076e852f94.js.map