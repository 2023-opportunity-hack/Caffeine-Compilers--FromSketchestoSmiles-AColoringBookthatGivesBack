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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _upload_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.module.css */ \"./components/upload/upload.module.css\");\n/* harmony import */ var _upload_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_upload_module_css__WEBPACK_IMPORTED_MODULE_2__);\n// import React, { useState } from 'react'\n// import styles from './upload.module.css'\n// const Upload = (props: any) => {\n//   return (\n//     <>\n//       <div className={`${styles.mainContainer} ${styles.mainContainer}`}>\n//         hello from upload\n//       </div>\n//     </>\n//   )\n// }\n// export default Upload\n// Upload.tsx\n// upload.module.tsx\n\nvar _s = $RefreshSig$();\n\n\nconst Upload = ()=>{\n    _s();\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [textFields, setTextFields] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        field1: \"\",\n        field2: \"\",\n        field3\n    });\n    const handleFileChange = (event)=>{\n        var _event_target_files;\n        const selectedFile = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];\n        if (selectedFile) {\n            setFile(selectedFile);\n        }\n    };\n    const handleTextChange = (event)=>{\n        const { name , value  } = event.target;\n        setTextFields((prevFields)=>({\n                ...prevFields,\n                [name]: value\n            }));\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        // Create a FormData object to append the file and text fields\n        const formData = new FormData();\n        formData.append(\"image\", file);\n        formData.append(\"school\", textFields.school);\n        formData.append(\"student\", textFields.student);\n        formData.append(\"subject\", textFields.subject);\n        try {\n            const response = await fetch(\"your_backend_api_endpoint\", {\n                method: \"POST\",\n                body: formData\n            });\n            if (response.ok) {\n                console.log(\"POST request successful\");\n            // Handle success, e.g., show a success message\n            } else {\n                console.error(\"POST request failed\");\n            // Handle failure, e.g., show an error message\n            }\n        } catch (error) {\n            console.error(\"Error during POST request:\", error);\n        // Handle error, e.g., show an error message\n        }\n        // Perform your POST request here using fetch or a library like Axios\n        // Include file and textFields in the request payload\n        console.log(\"File:\", file);\n        console.log(\"Text Fields:\", textFields);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().uploadContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                            children: \"File Upload:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"file\",\n                            accept: \".pdf, .jpeg, .jpg, .png\",\n                            onChange: handleFileChange\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                            children: \"Text Field 1:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"field1\",\n                            value: textFields.field1,\n                            onChange: handleTextChange,\n                            className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().input)\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                            children: \"Text Field 2:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"field2\",\n                            value: textFields.field2,\n                            onChange: handleTextChange,\n                            className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().input)\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().formGroup),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                            children: \"Text Field 3:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"field3\",\n                            value: textFields.field3,\n                            onChange: handleTextChange,\n                            className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().input)\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: (_upload_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n                    lineNumber: 130,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n            lineNumber: 86,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/upload/upload.module.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Upload, \"yHS9ptXCOaTVZv5/3qEVC7JGzXk=\");\n_c = Upload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Upload);\nvar _c;\n$RefreshReg$(_c, \"Upload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VwbG9hZC91cGxvYWQubW9kdWxlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsMENBQTBDO0FBQzFDLDJDQUEyQztBQUczQyxtQ0FBbUM7QUFHbkMsYUFBYTtBQUNiLFNBQVM7QUFDVCw0RUFBNEU7QUFDNUUsNEJBQTRCO0FBQzVCLGVBQWU7QUFFZixVQUFVO0FBQ1YsTUFBTTtBQUNOLElBQUk7QUFFSix3QkFBd0I7QUFDeEIsYUFBYTtBQUNiLG9CQUFvQjs7O0FBRWE7QUFDUTtBQUV6QyxNQUFNRSxTQUFtQixJQUFNOztJQUM3QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQWMsSUFBSTtJQUNsRCxNQUFNLENBQUNLLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7UUFDM0NPLFFBQVE7UUFDUkMsUUFBUTtRQUNSQztJQUVGO0lBRUEsTUFBTUMsbUJBQW1CLENBQUNDLFFBQStDO1lBQ2xEQTtRQUFyQixNQUFNQyxlQUFlRCxDQUFBQSxzQkFBQUEsTUFBTUUsTUFBTSxDQUFDQyxLQUFLLGNBQWxCSCxpQ0FBQUEsS0FBQUEsSUFBQUEsbUJBQW9CLENBQUMsRUFBRTtRQUM1QyxJQUFJQyxjQUFjO1lBQ2hCUixRQUFRUTtRQUNWLENBQUM7SUFDSDtJQUVBLE1BQU1HLG1CQUFtQixDQUFDSixRQUErQztRQUN2RSxNQUFNLEVBQUVLLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdOLE1BQU1FLE1BQU07UUFDcENQLGNBQWMsQ0FBQ1ksYUFBZ0I7Z0JBQzdCLEdBQUdBLFVBQVU7Z0JBQ2IsQ0FBQ0YsS0FBSyxFQUFFQztZQUNWO0lBQ0Y7SUFFQSxNQUFNRSxlQUFlLE9BQU9SLFFBQTRDO1FBQ3RFQSxNQUFNUyxjQUFjO1FBRXBCLDhEQUE4RDtRQUNoRSxNQUFNQyxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsU0FBU3BCO1FBQ3pCa0IsU0FBU0UsTUFBTSxDQUFDLFVBQVVsQixXQUFXbUIsTUFBTTtRQUMzQ0gsU0FBU0UsTUFBTSxDQUFDLFdBQVdsQixXQUFXb0IsT0FBTztRQUM3Q0osU0FBU0UsTUFBTSxDQUFDLFdBQVdsQixXQUFXcUIsT0FBTztRQUU3QyxJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLDZCQUE2QjtnQkFDeERDLFFBQVE7Z0JBQ1JDLE1BQU1UO1lBQ1I7WUFFQSxJQUFJTSxTQUFTSSxFQUFFLEVBQUU7Z0JBQ2ZDLFFBQVFDLEdBQUcsQ0FBQztZQUNaLCtDQUErQztZQUNqRCxPQUFPO2dCQUNMRCxRQUFRRSxLQUFLLENBQUM7WUFDZCw4Q0FBOEM7WUFDaEQsQ0FBQztRQUNILEVBQUUsT0FBT0EsT0FBTztZQUNkRixRQUFRRSxLQUFLLENBQUMsOEJBQThCQTtRQUM1Qyw0Q0FBNEM7UUFDOUM7UUFFRSxxRUFBcUU7UUFDckUscURBQXFEO1FBRXJERixRQUFRQyxHQUFHLENBQUMsU0FBUzlCO1FBQ3JCNkIsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQjVCO0lBQzlCO0lBRUEscUJBQ0UsOERBQUM4QjtRQUFJQyxXQUFXbkMsMkVBQXNCO2tCQUNwQyw0RUFBQ3FDO1lBQUtDLFVBQVVwQjs7OEJBQ2QsOERBQUNnQjtvQkFBSUMsV0FBV25DLHFFQUFnQjs7c0NBQzlCLDhEQUFDd0M7NEJBQU1MLFdBQVduQyxpRUFBWTtzQ0FBRTs7Ozs7O3NDQUNoQyw4REFBQ3lDOzRCQUNDQyxNQUFLOzRCQUNMQyxRQUFPOzRCQUNQQyxVQUFVbkM7Ozs7Ozs7Ozs7Ozs4QkFJZCw4REFBQ3lCO29CQUFJQyxXQUFXbkMscUVBQWdCOztzQ0FDOUIsOERBQUN3Qzs0QkFBTUwsV0FBV25DLGlFQUFZO3NDQUFFOzs7Ozs7c0NBQ2hDLDhEQUFDeUM7NEJBQ0NDLE1BQUs7NEJBQ0wzQixNQUFLOzRCQUNMQyxPQUFPWixXQUFXRSxNQUFNOzRCQUN4QnNDLFVBQVU5Qjs0QkFDVnFCLFdBQVduQyxpRUFBWTs7Ozs7Ozs7Ozs7OzhCQUkzQiw4REFBQ2tDO29CQUFJQyxXQUFXbkMscUVBQWdCOztzQ0FDOUIsOERBQUN3Qzs0QkFBTUwsV0FBV25DLGlFQUFZO3NDQUFFOzs7Ozs7c0NBQ2hDLDhEQUFDeUM7NEJBQ0NDLE1BQUs7NEJBQ0wzQixNQUFLOzRCQUNMQyxPQUFPWixXQUFXRyxNQUFNOzRCQUN4QnFDLFVBQVU5Qjs0QkFDVnFCLFdBQVduQyxpRUFBWTs7Ozs7Ozs7Ozs7OzhCQUkzQiw4REFBQ2tDO29CQUFJQyxXQUFXbkMscUVBQWdCOztzQ0FDOUIsOERBQUN3Qzs0QkFBTUwsV0FBV25DLGlFQUFZO3NDQUFFOzs7Ozs7c0NBQ2hDLDhEQUFDeUM7NEJBQ0NDLE1BQUs7NEJBQ0wzQixNQUFLOzRCQUNMQyxPQUFPWixXQUFXSSxNQUFNOzRCQUN4Qm9DLFVBQVU5Qjs0QkFDVnFCLFdBQVduQyxpRUFBWTs7Ozs7Ozs7Ozs7OzhCQUszQiw4REFBQzZDO29CQUFPSCxNQUFLO29CQUFTUCxXQUFXbkMsa0VBQWE7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhEO0dBL0dNQztLQUFBQTtBQWlITiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VwbG9hZC91cGxvYWQubW9kdWxlLnRzeD8zYjdiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuL3VwbG9hZC5tb2R1bGUuY3NzJ1xuXG5cbi8vIGNvbnN0IFVwbG9hZCA9IChwcm9wczogYW55KSA9PiB7XG5cblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDw+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm1haW5Db250YWluZXJ9ICR7c3R5bGVzLm1haW5Db250YWluZXJ9YH0+XG4vLyAgICAgICAgIGhlbGxvIGZyb20gdXBsb2FkXG4vLyAgICAgICA8L2Rpdj5cblxuLy8gICAgIDwvPlxuLy8gICApXG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFVwbG9hZFxuLy8gVXBsb2FkLnRzeFxuLy8gdXBsb2FkLm1vZHVsZS50c3hcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdXBsb2FkLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBVcGxvYWQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZTxGaWxlIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFt0ZXh0RmllbGRzLCBzZXRUZXh0RmllbGRzXSA9IHVzZVN0YXRlKHtcbiAgICBmaWVsZDE6ICcnLFxuICAgIGZpZWxkMjogJycsXG4gICAgZmllbGQzXG4gICAgLy8gQWRkIG1vcmUgZmllbGRzIGFzIG5lZWRlZFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IGV2ZW50LnRhcmdldC5maWxlcz8uWzBdO1xuICAgIGlmIChzZWxlY3RlZEZpbGUpIHtcbiAgICAgIHNldEZpbGUoc2VsZWN0ZWRGaWxlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVGV4dENoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgc2V0VGV4dEZpZWxkcygocHJldkZpZWxkcykgPT4gKHtcbiAgICAgIC4uLnByZXZGaWVsZHMsXG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIENyZWF0ZSBhIEZvcm1EYXRhIG9iamVjdCB0byBhcHBlbmQgdGhlIGZpbGUgYW5kIHRleHQgZmllbGRzXG4gIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlIGFzIEJsb2IpO1xuICBmb3JtRGF0YS5hcHBlbmQoJ3NjaG9vbCcsIHRleHRGaWVsZHMuc2Nob29sKTtcbiAgZm9ybURhdGEuYXBwZW5kKCdzdHVkZW50JywgdGV4dEZpZWxkcy5zdHVkZW50KTtcbiAgZm9ybURhdGEuYXBwZW5kKCdzdWJqZWN0JywgdGV4dEZpZWxkcy5zdWJqZWN0KTtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ3lvdXJfYmFja2VuZF9hcGlfZW5kcG9pbnQnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zb2xlLmxvZygnUE9TVCByZXF1ZXN0IHN1Y2Nlc3NmdWwnKTtcbiAgICAgIC8vIEhhbmRsZSBzdWNjZXNzLCBlLmcuLCBzaG93IGEgc3VjY2VzcyBtZXNzYWdlXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1BPU1QgcmVxdWVzdCBmYWlsZWQnKTtcbiAgICAgIC8vIEhhbmRsZSBmYWlsdXJlLCBlLmcuLCBzaG93IGFuIGVycm9yIG1lc3NhZ2VcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIFBPU1QgcmVxdWVzdDonLCBlcnJvcik7XG4gICAgLy8gSGFuZGxlIGVycm9yLCBlLmcuLCBzaG93IGFuIGVycm9yIG1lc3NhZ2VcbiAgfVxuXG4gICAgLy8gUGVyZm9ybSB5b3VyIFBPU1QgcmVxdWVzdCBoZXJlIHVzaW5nIGZldGNoIG9yIGEgbGlicmFyeSBsaWtlIEF4aW9zXG4gICAgLy8gSW5jbHVkZSBmaWxlIGFuZCB0ZXh0RmllbGRzIGluIHRoZSByZXF1ZXN0IHBheWxvYWRcblxuICAgIGNvbnNvbGUubG9nKCdGaWxlOicsIGZpbGUpO1xuICAgIGNvbnNvbGUubG9nKCdUZXh0IEZpZWxkczonLCB0ZXh0RmllbGRzKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBsb2FkQ29udGFpbmVyfT5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Hcm91cH0+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5GaWxlIFVwbG9hZDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgYWNjZXB0PVwiLnBkZiwgLmpwZWcsIC5qcGcsIC5wbmdcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtR3JvdXB9PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+VGV4dCBGaWVsZCAxOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiZmllbGQxXCJcbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0RmllbGRzLmZpZWxkMX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUZXh0Q2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtR3JvdXB9PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+VGV4dCBGaWVsZCAyOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiZmllbGQyXCJcbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0RmllbGRzLmZpZWxkMn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUZXh0Q2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtR3JvdXB9PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+VGV4dCBGaWVsZCAzOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwiZmllbGQzXCJcbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0RmllbGRzLmZpZWxkM31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUZXh0Q2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBBZGQgbW9yZSB0ZXh0IGZpZWxkcyBhcyBuZWVkZWQgKi99XG5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWQ7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJVcGxvYWQiLCJmaWxlIiwic2V0RmlsZSIsInRleHRGaWVsZHMiLCJzZXRUZXh0RmllbGRzIiwiZmllbGQxIiwiZmllbGQyIiwiZmllbGQzIiwiaGFuZGxlRmlsZUNoYW5nZSIsImV2ZW50Iiwic2VsZWN0ZWRGaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJoYW5kbGVUZXh0Q2hhbmdlIiwibmFtZSIsInZhbHVlIiwicHJldkZpZWxkcyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInNjaG9vbCIsInN0dWRlbnQiLCJzdWJqZWN0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJvayIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInVwbG9hZENvbnRhaW5lciIsImZvcm0iLCJvblN1Ym1pdCIsImZvcm1Hcm91cCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/upload/upload.module.tsx\n"));

/***/ })

});