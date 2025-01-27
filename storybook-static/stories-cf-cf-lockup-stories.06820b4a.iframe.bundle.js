"use strict";(self.webpackChunkaces_maverick=self.webpackChunkaces_maverick||[]).push([[713],{"./src/stories/cf/cf-lockup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LockupImage:()=>LockupImage,LockupVideo:()=>LockupVideo,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_maverick_cf__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/libs/cf/index.ts"),_assets_testing_png__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/assets/testing.png");const data={sys:{id:"4PDygO94cKt2Akim5pGwZY",__typename:"Sys"},__typename:"Lockup",bodyCopy:{json:{data:{},content:[{data:{},content:[{data:{},marks:[],value:"Whether you're building a corporate website, a content hub, or a dynamic marketing platform, Maverick is your go-to solution for:",nodeType:"text"}],nodeType:"paragraph"},{data:{},content:[{data:{},content:[{data:{},content:[{data:{},marks:[],value:"Intuitive page-building components",nodeType:"text"}],nodeType:"paragraph"}],nodeType:"list-item"},{data:{},content:[{data:{},content:[{data:{},marks:[],value:"Flexible page templates for faster launches",nodeType:"text"}],nodeType:"paragraph"}],nodeType:"list-item"},{data:{},content:[{data:{},content:[{data:{},marks:[],value:"Advanced site search and SEO tools",nodeType:"text"}],nodeType:"paragraph"}],nodeType:"list-item"},{data:{},content:[{data:{},content:[{data:{},marks:[],value:"Scalable content types like Articles and Events",nodeType:"text"}],nodeType:"paragraph"}],nodeType:"list-item"},{data:{},content:[{data:{},content:[{data:{},marks:[],value:"Seamless integration with Contentful's composable architecture",nodeType:"text"}],nodeType:"paragraph"}],nodeType:"list-item"}],nodeType:"unordered-list"},{data:{},content:[{data:{},marks:[],value:"",nodeType:"text"}],nodeType:"paragraph"}],nodeType:"document"},__typename:"LockupBodyCopy"},internalTitle:"Maverick Key Features Lockup",headline:"Maverick: Key Features",mediaSize:"Default",mediaAlignment:"Right",media:{}},__WEBPACK_DEFAULT_EXPORT__={title:"CF/Lockup",component:_maverick_cf__WEBPACK_IMPORTED_MODULE_1__.mX,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{mediaSize:{control:{type:"select"},options:["Default","Wide","Narrow"]},mediaAlignment:{control:{type:"select"},options:["Left","Right"]},buttonsCollection:{control:{type:"select"},options:["No Buttons","Single Button","Multiple Buttons"],mapping:{"No Buttons":null,"Single Button":{__typename:"LockupButtonsCollection",items:[{sys:{id:"7ptlRiLOobN5A6GyzPJmkk",__typename:"Sys"},__typename:"Button",internalTitle:"See All Features Primary Button",title:"See All Features",buttonStyle:"Primary",link:{__typename:"Link",internalTitle:"Features Page Link",linkType:"Page Link",customLink:null,target:"_self",pageLink:{__typename:"Page",slug:"features"}}}]},"Multiple Buttons":{__typename:"LockupButtonsCollection",items:[{sys:{id:"7ptlRiLOobN5A6GyzPJmkk",__typename:"Sys"},__typename:"Button",internalTitle:"See All Features Primary Button",title:"See All Features",buttonStyle:"Primary",link:{__typename:"Link",internalTitle:"Features Page Link",linkType:"Page Link",customLink:null,target:"_self",pageLink:{__typename:"Page",slug:"features"}}},{sys:{id:"38FyOYYGK6rJCVVllBpSfM",__typename:"Sys"},__typename:"Button",internalTitle:"Test Button",title:"Test",buttonStyle:"Primary Outline",link:{__typename:"Link",internalTitle:"Test Link",linkType:"Custom Link",pageLink:null,customLink:"https://google.com",target:"_self"}}]}}},id:{table:{disable:!0}},lang:{table:{disable:!0}},preview:{table:{disable:!0}},mock:{table:{disable:!0}},mockData:{table:{disable:!0}},__typename:{table:{disable:!0}},internalTitle:{table:{disable:!0}},sys:{table:{disable:!0}},bodyCopy:{table:{disable:!0}},nested:{table:{disable:!0}}},args:{headline:data.headline,mediaSize:data.mediaSize,mediaAlignment:data.mediaAlignment,nested:!1,id:data.sys.id,lang:"en-US",preview:!1,mock:!0,buttonsCollection:"Single Button"}},MockImage=({media})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:media,alt:"MockImage",style:{width:"100%"}})}),LockupImage={args:{media:_assets_testing_png__WEBPACK_IMPORTED_MODULE_2__.A.src},argTypes:{media:{control:{type:"text"}}},render:({headline,mediaSize,mediaAlignment,media,nested,buttonsCollection,id,lang,preview})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_cf__WEBPACK_IMPORTED_MODULE_1__.mX,{internalTitle:data.internalTitle,headline,bodyCopy:data.bodyCopy,buttonsCollection,media:data.media,mediaSize,mediaAlignment,nested,mock:!0,mockData:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockImage,{media}),__typename:data.__typename,id,lang,preview})},MockVideo=({media})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{width:"100%",height:"100%"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("iframe",{src:media,style:{width:"100%",height:"100%",aspectRatio:"16 / 9"}})}),LockupVideo={args:{media:"https://www.youtube.com/embed/jfKfPfyJRdk?si=9fIKzXmC1LsLSzDj"},argTypes:{media:{control:{type:"text"}}},render:({headline,mediaSize,mediaAlignment,media,nested,buttonsCollection,id,lang,preview})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_cf__WEBPACK_IMPORTED_MODULE_1__.mX,{internalTitle:data.internalTitle,headline,bodyCopy:data.bodyCopy,buttonsCollection,media:data.media,mediaSize,mediaAlignment,nested,mock:!0,mockData:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MockVideo,{media}),__typename:data.__typename,id,lang,preview})},__namedExportsOrder=["LockupImage","LockupVideo"];LockupImage.parameters={...LockupImage.parameters,docs:{...LockupImage.parameters?.docs,source:{originalSource:'{\n  args: {\n    media: AssetsImage.src\n  },\n  argTypes: {\n    media: {\n      control: {\n        type: "text"\n      }\n    }\n  },\n  render({\n    headline,\n    mediaSize,\n    mediaAlignment,\n    media,\n    nested,\n    buttonsCollection,\n    id,\n    lang,\n    preview\n  }: CfLockupProps) {\n    return <CfLockup internalTitle={data.internalTitle} headline={headline} bodyCopy={data.bodyCopy} buttonsCollection={buttonsCollection} media={data.media} mediaSize={mediaSize} mediaAlignment={mediaAlignment} nested={nested} mock={true} mockData={<MockImage media={media} />} __typename={data.__typename} id={id} lang={lang} preview={preview} />;\n  }\n}',...LockupImage.parameters?.docs?.source}}},LockupVideo.parameters={...LockupVideo.parameters,docs:{...LockupVideo.parameters?.docs,source:{originalSource:'{\n  args: {\n    media: defaultIframeSrc\n  },\n  argTypes: {\n    media: {\n      control: {\n        type: "text"\n      }\n    }\n  },\n  render({\n    headline,\n    mediaSize,\n    mediaAlignment,\n    media,\n    nested,\n    buttonsCollection,\n    id,\n    lang,\n    preview\n  }: CfLockupProps) {\n    return <CfLockup internalTitle={data.internalTitle} headline={headline} bodyCopy={data.bodyCopy} buttonsCollection={buttonsCollection} media={data.media} mediaSize={mediaSize} mediaAlignment={mediaAlignment} nested={nested} mock={true} mockData={<MockVideo media={media} />} __typename={data.__typename} id={id} lang={lang} preview={preview} />;\n  }\n}',...LockupVideo.parameters?.docs?.source}}}},"./src/stories/assets/testing.png":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/testing.6f11ce8b.png",height:520,width:890,blurDataURL:"static/media/testing.6f11ce8b.png"}}}]);