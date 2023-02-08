"use strict";(self.webpackChunkcc_everywhere=self.webpackChunkcc_everywhere||[]).push([[253],{4536:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return s}});var n=a(87462),i=a(63366),r=(a(15007),a(64983)),o=a(91515),m=["components"],d={},l={_frontmatter:d},p=o.Z;function s(e){var t=e.components,a=(0,i.Z)(e,m);return(0,r.mdx)(p,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"image-quick-actions"},"Image quick actions"),(0,r.mdx)("p",null,"Each quick actions component is loaded into the host application as an iframe, like the full editor component. Image quick actions can be launched with a pre-selected asset (jpg/png). If no input asset is provided, the modal will automatically prompt the user to browse their device for an image file."),(0,r.mdx)("h2",{id:"openquickaction"},"openQuickAction()"),(0,r.mdx)("p",null,"This API is responsible for embedding and launching the quick actions component in your application as an iframe."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"ccEverywhere.openQuickAction(\n    // QuickActionsParams\n    {\n        id: 'image-crop', \n        inputParams: {\n            exportOptions: []\n        },\n        callbacks: {\n            onCancel: () => {},\n            onError: (err) => {},\n            onLoadStart: () => {},\n            onLoad: () => {},\n            onPublishStart: () => {},\n            onPublish: (publishParams) => {},\n        },\n        modalParams: {},\n    }\n)\n")),(0,r.mdx)("h3",{id:"quickactionparams"},(0,r.mdx)("a",{parentName:"h3",href:"../../../reference/quick_actions/index.md#quickactionparams"},"QuickActionParams")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"openQuickAction()")," takes an object ",(0,r.mdx)("inlineCode",{parentName:"p"},"QuickActionParams")," with 4 parameters:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Property"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Description"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"id"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"ID of quick action"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"../../../reference/quick_actions/index.md#quickactionid"},"QuickActionId"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"inputParams"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"../../../reference/shared_types/index.md#asset"},"Launch with asset")," and ",(0,r.mdx)("a",{parentName:"td",href:"../../../reference/quick_actions/index.md#exportoption"},"export options")),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"../../../reference/quick_actions/index.mdquickactioninputparams"},"QuickActionInputParams"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"callbacks"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Callback functions"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"../../../reference/shared_types/index.md#callbacks"},"Callbacks"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"modalParams"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"Define size of modal"),(0,r.mdx)("td",{parentName:"tr",align:"left"},(0,r.mdx)("a",{parentName:"td",href:"../../../reference/shared_types/index.md#modalparams"},"ModalParams"))))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"inputParams.exportOptions"),' determines which export buttons are exposed to the user once the action is complete, and must be defined with at least an empty array. If given an empty array, the "Download" button will be surfaced as an export option.'),(0,r.mdx)("h3",{id:"quickactionid"},(0,r.mdx)("a",{parentName:"h3",href:"../../../reference/quick_actions/index.md#quickactionid"},"QuickActionId")),(0,r.mdx)("p",null,"Identifies which image quick action component should be loaded into the iframe."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:"left"},"Quick Action"),(0,r.mdx)("th",{parentName:"tr",align:"left"},"QuickActionId"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Crop Image"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"'image-crop'")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Convert to JPG"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"'convert-to-jpg'")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Convert to PNG"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"'convert-to-png'")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Resize Image"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"'image-resize'")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:"left"},"Remove Background"),(0,r.mdx)("td",{parentName:"tr",align:"left"},"'remove-background'")))),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)("h4",{id:"step-1a-user-uploads-an-image-asset-and-clicks-the-image-crop-button"},'Step 1a: User uploads an image asset, and clicks the "Image Crop" button'),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},'After a user uploads an image, a FileReader object is instantiated and converts the file to a base64 data type and saves it to the variable "imageUrl".'),(0,r.mdx)("li",{parentName:"ul"},"This ",(0,r.mdx)("inlineCode",{parentName:"li"},"imageUrl")," is passed as ",(0,r.mdx)("inlineCode",{parentName:"li"},"inputParams.asset")," when the ",(0,r.mdx)("inlineCode",{parentName:"li"},"openQuickAction()")," method is called."),(0,r.mdx)("li",{parentName:"ul"},"The image crop quick action component is launched in an iframe, and the user can crop the uploaded image as they wish.")),(0,r.mdx)("h4",{id:"step-1b-user-clicks-the-image-crop-button-with-no-asset-attached"},'Step 1b: User clicks the "Image Crop" button, with no asset attached'),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The image crop quick action component is launched in an iframe. The user will have to browse for an image asset to perform the image crop on.")),(0,r.mdx)("h4",{id:"step-2-export-modified-asset"},"Step 2: Export modified asset"),(0,r.mdx)("p",null,"Finally, users can choose between 3 export options:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Customize"),": to continue designing in a full editor component"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Download"),": to save the asset"),(0,r.mdx)("li",{parentName:"ul"},"Custom button that targets host app")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n  <title>Quick actions</title>\n  </head>\n    \n  <body>\n    <h1> Image quick action example </h1>\n    <input type=\"file\" id=\"fileInput\" />\n    <img id=\"image-container\" height=\"420\" width=\"420\" />\n    <button id=\"image-crop\"> Crop image </button>\n\n    <script src=\"https://sdk.cc-embed.adobe.com/v2/CCEverywhere.js\"><\/script>\n    <script type=\"text/javascript\" >\n    \n    (async() => {\n        const ccEverywhere = await window.CCEverywhere.initialize({\n            clientId: YOUR_CLIENT_ID,\n            appName: YOUR_APP_NAME,\n            appVersion: { major: 1, minor: 0 },\n            platformCategory: 'web',\n            redirectUri: YOUR_REDIRECT_URI\n            }\n        );\n        /* file: user uploaded file\n        imageUrl: base64 representation we pass into QA function */\n        var file, encodedImage;\n        /*  appImage is the image container displayed in sample */\n        var appImage = document.getElementById('image-container');\n\n        /* This event listener checks to see if the user uploaded a new file */\n        document.getElementById('fileInput')\n        .addEventListener('change', (e) => {\n            const reader = new FileReader();\n            file = e.target.files[0];\n            /* reads file into base 64 data type */\n            reader.readAsDataURL(file);\n            reader.onload = () => {\n                encodedImage = reader.result;\n            }\n            reader.onerror = (error) => {\n                console.log('error', error);\n            };\n        })\n\n        const exportOptions = [\n            /* Customize export button */\n            {\n                target: 'Editor',\n                variant: 'cta',\n                optionType: 'button',\n                buttonType: 'native'\n            },\n            /* Download export button */\n            {\n                target: 'Download',\n                variant: 'primary',\n                optionType: 'button',\n                buttonType: 'native'\n            },\n            /* Custom implementation in onPublish callback */\n            {\n                target: 'Host',\n                id: 'save-to-host-app',\n                label: 'Embed in app',\n                variant: 'cta',\n                optionType: 'button',\n                buttonType: 'custom'\n            }\n        ];\n\n        const callbacks = {\n            onCancel: () => {},\n            onPublish: (publishParams) => {\n                if(publishParams.exportButtonId==\"save-to-host-app\"){\n                    appImage.src = publishParams.asset.data;\n                    appImage.style.visibility=\"visible\";\n                }\n            },\n            onError: (err) => {\n                console.error('Error received is', err.toString())\n            }\n        }\n\n        document.getElementById('image-crop')\n        .addEventListener('click', () => {\n            ccEverywhere.openQuickAction({\n                id: 'image-crop', \n                inputParams: {\n                    asset: {\n                        data: encodedImage, \n                        dataType: 'base64', \n                        type: 'image'\n                    }, \n                    exportOptions: exportOptions\n                },\n                callbacks: callbacks,\n                modalParams: {},\n            })\n        })\n    })();\n    <\/script>\n  </body> \n</html>\n")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-quick-actions-image-index-md-c416b271dba3ddc863e4.js.map