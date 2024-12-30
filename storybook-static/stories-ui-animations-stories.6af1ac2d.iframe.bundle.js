"use strict";(self.webpackChunkaces_maverick=self.webpackChunkaces_maverick||[]).push([[263],{"./src/stories/ui/animations.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Collapse:()=>Collapse,Fade:()=>Fade,Grow:()=>Grow,Slide:()=>Slide,Zoom:()=>Zoom,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_maverick_ui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/libs/ui/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Animations",component:_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.SD,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{direction:{control:{type:"select"},options:["up","down","left","right"]}}},Collapse={render:()=>{const[checked,setChecked]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.az,{style:{height:"180px",paddingX:1,overflow:"hidden"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.ip,{control:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.dO,{checked,onChange:()=>setChecked((prev=>!prev))}),label:"Show Collapse",style:{marginBottom:7}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.SD,{in:checked,unmountOnExit:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.tu,{elevation:3,style:{padding:5},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.H6,{children:"Collapse Animation"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.EY,{children:"This content appears and collapses with animation."})]})})]})}},Fade={render:()=>{const[checked,setChecked]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.az,{style:{height:"180px",paddingX:1,overflow:"hidden"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.ip,{control:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.dO,{checked,onChange:()=>setChecked((prev=>!prev))}),label:"Show Fade",style:{marginBottom:7}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.zW,{in:checked,unmountOnExit:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.tu,{elevation:3,style:{padding:5},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.H6,{children:"Fade Animation"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.EY,{children:"This content appears with a fade-in effect."})]})})]})}},Grow={render:()=>{const[checked,setChecked]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.az,{style:{height:"180px",paddingX:1,overflow:"hidden"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.ip,{control:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.dO,{checked,onChange:()=>setChecked((prev=>!prev))}),label:"Show Grow",style:{marginBottom:7}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.Kx,{in:checked,unmountOnExit:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.tu,{elevation:3,style:{padding:5},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.H6,{children:"Grow Animation"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.EY,{children:"This content appears with a grow effect."})]})})]})}},Slide={args:{direction:"up"},render:({direction})=>{const[checked,setChecked]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.az,{style:{height:"180px",paddingX:1,overflow:"hidden"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.ip,{control:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.dO,{checked,onChange:()=>setChecked((prev=>!prev))}),label:"Show Slide",style:{marginBottom:7}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.q7,{direction,in:checked,unmountOnExit:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.tu,{elevation:3,style:{padding:5},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.H6,{children:"Slide Animation"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.EY,{children:"This content appears with a slide effect."})]})})]})}},Zoom={render:()=>{const[checked,setChecked]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.az,{style:{height:"180px",paddingX:1,overflow:"hidden"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.ip,{control:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.dO,{checked,onChange:()=>setChecked((prev=>!prev))}),label:"Show Zoom",style:{marginBottom:7}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.GP,{in:checked,unmountOnExit:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.tu,{elevation:3,style:{padding:5},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.H6,{children:"Zoom Animation"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_maverick_ui__WEBPACK_IMPORTED_MODULE_2__.EY,{children:"This content appears with a zoom effect."})]})})]})}},__namedExportsOrder=["Collapse","Fade","Grow","Slide","Zoom"];Collapse.parameters={...Collapse.parameters,docs:{...Collapse.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [checked, setChecked] = useState(false);\n    const handleChange = () => setChecked(prev => !prev);\n    return <Box style={{\n      height: "180px",\n      paddingX: 1,\n      overflow: "hidden"\n    }}>\n        <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Show Collapse" style={{\n        marginBottom: 7\n      }} />\n        <CollapseUI in={checked} unmountOnExit>\n          <Paper elevation={3} style={{\n          padding: 5\n        }}>\n            <H6>Collapse Animation</H6>\n            <Text>This content appears and collapses with animation.</Text>\n          </Paper>\n        </CollapseUI>\n      </Box>;\n  }\n}',...Collapse.parameters?.docs?.source}}},Fade.parameters={...Fade.parameters,docs:{...Fade.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [checked, setChecked] = useState(false);\n    return <Box style={{\n      height: "180px",\n      paddingX: 1,\n      overflow: "hidden"\n    }}>\n        <FormControlLabel control={<Switch checked={checked} onChange={() => setChecked(prev => !prev)} />} label="Show Fade" style={{\n        marginBottom: 7\n      }} />\n        <FadeUI in={checked} unmountOnExit>\n          <Paper elevation={3} style={{\n          padding: 5\n        }}>\n            <H6>Fade Animation</H6>\n            <Text>This content appears with a fade-in effect.</Text>\n          </Paper>\n        </FadeUI>\n      </Box>;\n  }\n}',...Fade.parameters?.docs?.source}}},Grow.parameters={...Grow.parameters,docs:{...Grow.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [checked, setChecked] = useState(false);\n    return <Box style={{\n      height: "180px",\n      paddingX: 1,\n      overflow: "hidden"\n    }}>\n        <FormControlLabel control={<Switch checked={checked} onChange={() => setChecked(prev => !prev)} />} label="Show Grow" style={{\n        marginBottom: 7\n      }} />\n        <GrowUI in={checked} unmountOnExit>\n          <Paper elevation={3} style={{\n          padding: 5\n        }}>\n            <H6>Grow Animation</H6>\n            <Text>This content appears with a grow effect.</Text>\n          </Paper>\n        </GrowUI>\n      </Box>;\n  }\n}',...Grow.parameters?.docs?.source}}},Slide.parameters={...Slide.parameters,docs:{...Slide.parameters?.docs,source:{originalSource:'{\n  args: {\n    direction: "up"\n  },\n  render: ({\n    direction\n  }) => {\n    const [checked, setChecked] = useState(false);\n    return <Box style={{\n      height: "180px",\n      paddingX: 1,\n      overflow: "hidden"\n    }}>\n        <FormControlLabel control={<Switch checked={checked} onChange={() => setChecked(prev => !prev)} />} label="Show Slide" style={{\n        marginBottom: 7\n      }} />\n        <SlideUI direction={direction} in={checked} unmountOnExit>\n          <Paper elevation={3} style={{\n          padding: 5\n        }}>\n            <H6>Slide Animation</H6>\n            <Text>This content appears with a slide effect.</Text>\n          </Paper>\n        </SlideUI>\n      </Box>;\n  }\n}',...Slide.parameters?.docs?.source}}},Zoom.parameters={...Zoom.parameters,docs:{...Zoom.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [checked, setChecked] = useState(false);\n    return <Box style={{\n      height: "180px",\n      paddingX: 1,\n      overflow: "hidden"\n    }}>\n        <FormControlLabel control={<Switch checked={checked} onChange={() => setChecked(prev => !prev)} />} label="Show Zoom" style={{\n        marginBottom: 7\n      }} />\n        <ZoomUI in={checked} unmountOnExit>\n          <Paper elevation={3} style={{\n          padding: 5\n        }}>\n            <H6>Zoom Animation</H6>\n            <Text>This content appears with a zoom effect.</Text>\n          </Paper>\n        </ZoomUI>\n      </Box>;\n  }\n}',...Zoom.parameters?.docs?.source}}}}}]);