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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _upload_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.module.css */ \"./components/upload/upload.module.css\");\n/* harmony import */ var _upload_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_upload_module_css__WEBPACK_IMPORTED_MODULE_2__);\n// import React, { useState } from 'react'\n// import styles from './upload.module.css'\n// const Upload = (props: any) => {\n//   return (\n//     <>\n//       <div className={`${styles.mainContainer} ${styles.mainContainer}`}>\n//         hello from upload\n//       </div>\n//     </>\n//   )\n// }\n// export default Upload\n// Upload.tsx\n// upload.module.tsx\n\nvar _s = $RefreshSig$();\n\n\nconst Upload = ()=>{\n    _s();\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [textFields, setTextFields] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        field1: \"\",\n        field2: \"\",\n        field3: \"\"\n    });\n    const handleFileChange = (event)=>{\n        var _event_target_files;\n        const selectedFile = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];\n        if (selectedFile) {\n            setFile(selectedFile);\n        }\n    };\n    const handleTextChange = (event)=>{\n        const { name , value  } = event.target;\n        setTextFields((prevFields)=>({\n                ...prevFields,\n                [name]: value\n            }));\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        // Create a FormData object to append the file and text fields\n        const formData = new FormData();\n        formData.append(\"image\", file);\n        formData.append(\"school\", textFields.field1);\n        formData.append(\"student\", textFields.field2);\n        formData.append(\"subject\", textFields.field3);\n        try {\n            const response = await fetch(\"/api/drawings\", {\n                method: \"POST\",\n                body: formData\n            });\n            if (response.ok) {\n                console.log(\"POST request successful\");\n            // Handle success, e.g., show a success message\n            } else {\n                console.error(\"POST request failed\");\n            // Handle failure, e.g., show an error message\n            }\n        } catch (error) {\n            console.error(\"Error during POST request:\", error);\n        // Handle error, e.g., show an error message\n        }\n        // Perform your POST request here using fetch or a library like Axios\n        // Include file and textFields in the request payload\n        console.log(\"File:\", file);\n        console.log(\"Text Fields:\", textFields);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().uploadContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().dashedRectangle),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().uploadlabel),\n                                children: \"Upload your file here\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                accept: \".pdf, .jpeg, .jpg, .png\",\n                                onChange: handleFileChange\n                            }, void 0, false, {\n                                fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().textClass),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                            children: \"School Name:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"field1\",\n                            value: textFields.field1,\n                            onChange: handleTextChange,\n                            className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().input)\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().textClass),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                            children: \"Student Name:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"field2\",\n                            value: textFields.field2,\n                            onChange: handleTextChange,\n                            className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().input)\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().textClass),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                            children: \"Art subject:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"field3\",\n                            value: textFields.field3,\n                            onChange: handleTextChange,\n                            className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().input)\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n            lineNumber: 86,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Upload, \"/WQrXuOEShneDq5n/3z9qiZCXSQ=\");\n_c = Upload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Upload);\nvar _c;\n$RefreshReg$(_c, \"Upload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STNCLDhEQUFDK0I7b0JBQUlDLFdBQVdoQyxxRUFBZ0I7O3NDQUM5Qiw4REFBQ3NDOzRCQUFNTixXQUFXaEMsaUVBQVk7c0NBQUU7Ozs7OztzQ0FDaEMsOERBQUN3Qzs0QkFDQ0MsTUFBSzs0QkFDTDFCLE1BQUs7NEJBQ0xDLE9BQU9aLFdBQVdHLE1BQU07NEJBQ3hCb0MsVUFBVTdCOzRCQUNWa0IsV0FBV2hDLGlFQUFZOzs7Ozs7Ozs7Ozs7OEJBSTNCLDhEQUFDK0I7b0JBQUlDLFdBQVdoQyxxRUFBZ0I7O3NDQUM5Qiw4REFBQ3NDOzRCQUFNTixXQUFXaEMsaUVBQVk7c0NBQUU7Ozs7OztzQ0FDaEMsOERBQUN3Qzs0QkFDQ0MsTUFBSzs0QkFDTDFCLE1BQUs7NEJBQ0xDLE9BQU9aLFdBQVdJLE1BQU07NEJBQ3hCbUMsVUFBVTdCOzRCQUNWa0IsV0FBV2hDLGlFQUFZOzs7Ozs7Ozs7Ozs7OEJBSzNCLDhEQUFDNkM7b0JBQU9KLE1BQUs7b0JBQVNULFdBQVdoQyxrRUFBYTs4QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEQ7R0FqSE1DO0tBQUFBO0FBbUhOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdXBsb2FkL3VwbG9hZC5tb2R1bGUudHN4PzNiN2IiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gJy4vdXBsb2FkLm1vZHVsZS5jc3MnXG5cblxuLy8gY29uc3QgVXBsb2FkID0gKHByb3BzOiBhbnkpID0+IHtcblxuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPD5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWFpbkNvbnRhaW5lcn0gJHtzdHlsZXMubWFpbkNvbnRhaW5lcn1gfT5cbi8vICAgICAgICAgaGVsbG8gZnJvbSB1cGxvYWRcbi8vICAgICAgIDwvZGl2PlxuXG4vLyAgICAgPC8+XG4vLyAgIClcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgVXBsb2FkXG4vLyBVcGxvYWQudHN4XG4vLyB1cGxvYWQubW9kdWxlLnRzeFxuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi91cGxvYWQubW9kdWxlLmNzcyc7XG5cbmNvbnN0IFVwbG9hZDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlPEZpbGUgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW3RleHRGaWVsZHMsIHNldFRleHRGaWVsZHNdID0gdXNlU3RhdGUoe1xuICAgIGZpZWxkMTogJycsXG4gICAgZmllbGQyOiAnJyxcbiAgICBmaWVsZDM6ICcnXG4gICAgLy8gQWRkIG1vcmUgZmllbGRzIGFzIG5lZWRlZFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IGV2ZW50LnRhcmdldC5maWxlcz8uWzBdO1xuICAgIGlmIChzZWxlY3RlZEZpbGUpIHtcbiAgICAgIHNldEZpbGUoc2VsZWN0ZWRGaWxlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVGV4dENoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgc2V0VGV4dEZpZWxkcygocHJldkZpZWxkcykgPT4gKHtcbiAgICAgIC4uLnByZXZGaWVsZHMsXG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIENyZWF0ZSBhIEZvcm1EYXRhIG9iamVjdCB0byBhcHBlbmQgdGhlIGZpbGUgYW5kIHRleHQgZmllbGRzXG4gIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlIGFzIEJsb2IpO1xuICBmb3JtRGF0YS5hcHBlbmQoJ3NjaG9vbCcsIHRleHRGaWVsZHMuZmllbGQxKTtcbiAgZm9ybURhdGEuYXBwZW5kKCdzdHVkZW50JywgdGV4dEZpZWxkcy5maWVsZDIpO1xuICBmb3JtRGF0YS5hcHBlbmQoJ3N1YmplY3QnLCB0ZXh0RmllbGRzLmZpZWxkMyk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2RyYXdpbmdzJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICB9KTtcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgY29uc29sZS5sb2coJ1BPU1QgcmVxdWVzdCBzdWNjZXNzZnVsJyk7XG4gICAgICAvLyBIYW5kbGUgc3VjY2VzcywgZS5nLiwgc2hvdyBhIHN1Y2Nlc3MgbWVzc2FnZVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdQT1NUIHJlcXVlc3QgZmFpbGVkJyk7XG4gICAgICAvLyBIYW5kbGUgZmFpbHVyZSwgZS5nLiwgc2hvdyBhbiBlcnJvciBtZXNzYWdlXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBQT1NUIHJlcXVlc3Q6JywgZXJyb3IpO1xuICAgIC8vIEhhbmRsZSBlcnJvciwgZS5nLiwgc2hvdyBhbiBlcnJvciBtZXNzYWdlXG4gIH1cblxuICAgIC8vIFBlcmZvcm0geW91ciBQT1NUIHJlcXVlc3QgaGVyZSB1c2luZyBmZXRjaCBvciBhIGxpYnJhcnkgbGlrZSBBeGlvc1xuICAgIC8vIEluY2x1ZGUgZmlsZSBhbmQgdGV4dEZpZWxkcyBpbiB0aGUgcmVxdWVzdCBwYXlsb2FkXG5cbiAgICBjb25zb2xlLmxvZygnRmlsZTonLCBmaWxlKTtcbiAgICBjb25zb2xlLmxvZygnVGV4dCBGaWVsZHM6JywgdGV4dEZpZWxkcyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVwbG9hZENvbnRhaW5lcn0+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGFzaGVkUmVjdGFuZ2xlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtR3JvdXB9PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy51cGxvYWRsYWJlbH0+VXBsb2FkIHlvdXIgZmlsZSBoZXJlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIGFjY2VwdD1cIi5wZGYsIC5qcGVnLCAuanBnLCAucG5nXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRDbGFzc30+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5TY2hvb2wgTmFtZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImZpZWxkMVwiXG4gICAgICAgICAgICB2YWx1ZT17dGV4dEZpZWxkcy5maWVsZDF9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGV4dENoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dENsYXNzfT5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PlN0dWRlbnQgTmFtZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgbmFtZT1cImZpZWxkMlwiXG4gICAgICAgICAgICB2YWx1ZT17dGV4dEZpZWxkcy5maWVsZDJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGV4dENoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dENsYXNzfT5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PkFydCBzdWJqZWN0OjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiZmllbGQzXCJcbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0RmllbGRzLmZpZWxkM31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUZXh0Q2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBBZGQgbW9yZSB0ZXh0IGZpZWxkcyBhcyBuZWVkZWQgKi99XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWQ7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJVcGxvYWQiLCJmaWxlIiwic2V0RmlsZSIsInRleHRGaWVsZHMiLCJzZXRUZXh0RmllbGRzIiwiZmllbGQxIiwiZmllbGQyIiwiZmllbGQzIiwiaGFuZGxlRmlsZUNoYW5nZSIsImV2ZW50Iiwic2VsZWN0ZWRGaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJoYW5kbGVUZXh0Q2hhbmdlIiwibmFtZSIsInZhbHVlIiwicHJldkZpZWxkcyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwib2siLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJ1cGxvYWRDb250YWluZXIiLCJmb3JtIiwib25TdWJtaXQiLCJkYXNoZWRSZWN0YW5nbGUiLCJmb3JtR3JvdXAiLCJsYWJlbCIsInVwbG9hZGxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJ0ZXh0Q2xhc3MiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/upload/upload.module.tsx\n"));

/***/ })

});