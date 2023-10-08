"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/upload",{

/***/ "./components/upload/upload.module.tsx":
/*!*********************************************!*\
  !*** ./components/upload/upload.module.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _upload_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.module.css */ \"./components/upload/upload.module.css\");\n/* harmony import */ var _upload_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_upload_module_css__WEBPACK_IMPORTED_MODULE_2__);\n// import React, { useState } from 'react'\n// import styles from './upload.module.css'\n// const Upload = (props: any) => {\n//   return (\n//     <>\n//       <div className={`${styles.mainContainer} ${styles.mainContainer}`}>\n//         hello from upload\n//       </div>\n//     </>\n//   )\n// }\n// export default Upload\n// Upload.tsx\n// upload.module.tsx\n\nvar _s = $RefreshSig$();\n\n\nconst Upload = ()=>{\n    _s();\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [textFields, setTextFields] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        field1: \"\",\n        field2: \"\",\n        field3: \"\"\n    });\n    const handleFileChange = (event)=>{\n        var _event_target_files;\n        const selectedFile = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];\n        if (selectedFile) {\n            setFile(selectedFile);\n        }\n    };\n    const handleTextChange = (event)=>{\n        const { name , value  } = event.target;\n        setTextFields((prevFields)=>({\n                ...prevFields,\n                [name]: value\n            }));\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        // Create a FormData object to append the file and text fields\n        const formData = new FormData();\n        formData.append(\"image\", file);\n        formData.append(\"school\", textFields.field1);\n        formData.append(\"student\", textFields.student);\n        formData.append(\"subject\", textFields.subject);\n        try {\n            const response = await fetch(\"your_backend_api_endpoint\", {\n                method: \"POST\",\n                body: formData\n            });\n            if (response.ok) {\n                console.log(\"POST request successful\");\n            // Handle success, e.g., show a success message\n            } else {\n                console.error(\"POST request failed\");\n            // Handle failure, e.g., show an error message\n            }\n        } catch (error) {\n            console.error(\"Error during POST request:\", error);\n        // Handle error, e.g., show an error message\n        }\n        // Perform your POST request here using fetch or a library like Axios\n        // Include file and textFields in the request payload\n        console.log(\"File:\", file);\n        console.log(\"Text Fields:\", textFields);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().uploadContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                            children: \"File Upload:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            accept: \".pdf, .jpeg, .jpg, .png\",\n                            onChange: handleFileChange\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                            children: \"Text Field 1:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"field1\",\n                            value: textFields.field1,\n                            onChange: handleTextChange,\n                            className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().input)\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                            children: \"Text Field 2:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"field2\",\n                            value: textFields.field2,\n                            onChange: handleTextChange,\n                            className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().input)\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                            children: \"Text Field 3:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"field3\",\n                            value: textFields.field3,\n                            onChange: handleTextChange,\n                            className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().input)\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                    lineNumber: 130,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n            lineNumber: 86,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Upload, \"/WQrXuOEShneDq5n/3z9qiZCXSQ=\");\n_c = Upload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Upload);\nvar _c;\n$RefreshReg$(_c, \"Upload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUN1Qzs0QkFBTUwsV0FBV2xDLGlFQUFZO3NDQUFFOzs7Ozs7c0NBQ2hDLDhEQUFDd0M7NEJBQ0NDLE1BQUs7NEJBQ0wxQixNQUFLOzRCQUNMQyxPQUFPWixXQUFXRyxNQUFNOzRCQUN4Qm9DLFVBQVU3Qjs0QkFDVm9CLFdBQVdsQyxpRUFBWTs7Ozs7Ozs7Ozs7OzhCQUkzQiw4REFBQ2lDO29CQUFJQyxXQUFXbEMscUVBQWdCOztzQ0FDOUIsOERBQUN1Qzs0QkFBTUwsV0FBV2xDLGlFQUFZO3NDQUFFOzs7Ozs7c0NBQ2hDLDhEQUFDd0M7NEJBQ0NDLE1BQUs7NEJBQ0wxQixNQUFLOzRCQUNMQyxPQUFPWixXQUFXSSxNQUFNOzRCQUN4Qm1DLFVBQVU3Qjs0QkFDVm9CLFdBQVdsQyxpRUFBWTs7Ozs7Ozs7Ozs7OzhCQUszQiw4REFBQzRDO29CQUFPSCxNQUFLO29CQUFTUCxXQUFXbEMsa0VBQWE7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhEO0dBL0dNQztLQUFBQTtBQWlITiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VwbG9hZC91cGxvYWQubW9kdWxlLnRzeD8zYjdiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuL3VwbG9hZC5tb2R1bGUuY3NzJ1xuXG5cbi8vIGNvbnN0IFVwbG9hZCA9IChwcm9wczogYW55KSA9PiB7XG5cblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm1haW5Db250YWluZXJ9ICR7c3R5bGVzLm1haW5Db250YWluZXJ9YH0+XG4vLyAgICAgICAgIGhlbGxvIGZyb20gdXBsb2FkXG4vLyAgICAgICA8L2Rpdj5cblxuLy8gICAgIDwvPlxuLy8gICApXG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFVwbG9hZFxuLy8gVXBsb2FkLnRzeFxuLy8gdXBsb2FkLm1vZHVsZS50c3hcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdXBsb2FkLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBVcGxvYWQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZTxGaWxlIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFt0ZXh0RmllbGRzLCBzZXRUZXh0RmllbGRzXSA9IHVzZVN0YXRlKHtcbiAgICBmaWVsZDE6ICcnLFxuICAgIGZpZWxkMjogJycsXG4gICAgZmllbGQzOiAnJ1xuICAgIC8vIEFkZCBtb3JlIGZpZWxkcyBhcyBuZWVkZWRcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEZpbGUgPSBldmVudC50YXJnZXQuZmlsZXM/LlswXTtcbiAgICBpZiAoc2VsZWN0ZWRGaWxlKSB7XG4gICAgICBzZXRGaWxlKHNlbGVjdGVkRmlsZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRleHRDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHNldFRleHRGaWVsZHMoKHByZXZGaWVsZHMpID0+ICh7XG4gICAgICAuLi5wcmV2RmllbGRzLFxuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBDcmVhdGUgYSBGb3JtRGF0YSBvYmplY3QgdG8gYXBwZW5kIHRoZSBmaWxlIGFuZCB0ZXh0IGZpZWxkc1xuICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZmlsZSBhcyBCbG9iKTtcbiAgZm9ybURhdGEuYXBwZW5kKCdzY2hvb2wnLCB0ZXh0RmllbGRzLmZpZWxkMSk7XG4gIGZvcm1EYXRhLmFwcGVuZCgnc3R1ZGVudCcsIHRleHRGaWVsZHMuc3R1ZGVudCk7XG4gIGZvcm1EYXRhLmFwcGVuZCgnc3ViamVjdCcsIHRleHRGaWVsZHMuc3ViamVjdCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCd5b3VyX2JhY2tlbmRfYXBpX2VuZHBvaW50Jywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICB9KTtcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgY29uc29sZS5sb2coJ1BPU1QgcmVxdWVzdCBzdWNjZXNzZnVsJyk7XG4gICAgICAvLyBIYW5kbGUgc3VjY2VzcywgZS5nLiwgc2hvdyBhIHN1Y2Nlc3MgbWVzc2FnZVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdQT1NUIHJlcXVlc3QgZmFpbGVkJyk7XG4gICAgICAvLyBIYW5kbGUgZmFpbHVyZSwgZS5nLiwgc2hvdyBhbiBlcnJvciBtZXNzYWdlXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBQT1NUIHJlcXVlc3Q6JywgZXJyb3IpO1xuICAgIC8vIEhhbmRsZSBlcnJvciwgZS5nLiwgc2hvdyBhbiBlcnJvciBtZXNzYWdlXG4gIH1cblxuICAgIC8vIFBlcmZvcm0geW91ciBQT1NUIHJlcXVlc3QgaGVyZSB1c2luZyBmZXRjaCBvciBhIGxpYnJhcnkgbGlrZSBBeGlvc1xuICAgIC8vIEluY2x1ZGUgZmlsZSBhbmQgdGV4dEZpZWxkcyBpbiB0aGUgcmVxdWVzdCBwYXlsb2FkXG5cbiAgICBjb25zb2xlLmxvZygnRmlsZTonLCBmaWxlKTtcbiAgICBjb25zb2xlLmxvZygnVGV4dCBGaWVsZHM6JywgdGV4dEZpZWxkcyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVwbG9hZENvbnRhaW5lcn0+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtR3JvdXB9PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+RmlsZSBVcGxvYWQ6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIGFjY2VwdD1cIi5wZGYsIC5qcGVnLCAuanBnLCAucG5nXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUdyb3VwfT5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PlRleHQgRmllbGQgMTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImZpZWxkMVwiXG4gICAgICAgICAgICB2YWx1ZT17dGV4dEZpZWxkcy5maWVsZDF9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGV4dENoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUdyb3VwfT5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PlRleHQgRmllbGQgMjo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImZpZWxkMlwiXG4gICAgICAgICAgICB2YWx1ZT17dGV4dEZpZWxkcy5maWVsZDJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGV4dENoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUdyb3VwfT5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PlRleHQgRmllbGQgMzo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImZpZWxkM1wiXG4gICAgICAgICAgICB2YWx1ZT17dGV4dEZpZWxkcy5maWVsZDN9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGV4dENoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogQWRkIG1vcmUgdGV4dCBmaWVsZHMgYXMgbmVlZGVkICovfVxuXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgICAgU3VibWl0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiVXBsb2FkIiwiZmlsZSIsInNldEZpbGUiLCJ0ZXh0RmllbGRzIiwic2V0VGV4dEZpZWxkcyIsImZpZWxkMSIsImZpZWxkMiIsImZpZWxkMyIsImhhbmRsZUZpbGVDaGFuZ2UiLCJldmVudCIsInNlbGVjdGVkRmlsZSIsInRhcmdldCIsImZpbGVzIiwiaGFuZGxlVGV4dENoYW5nZSIsIm5hbWUiLCJ2YWx1ZSIsInByZXZGaWVsZHMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJzdHVkZW50Iiwic3ViamVjdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwib2siLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJ1cGxvYWRDb250YWluZXIiLCJmb3JtIiwib25TdWJtaXQiLCJmb3JtR3JvdXAiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImFjY2VwdCIsIm9uQ2hhbmdlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/upload/upload.module.tsx\n"));

/***/ })

});