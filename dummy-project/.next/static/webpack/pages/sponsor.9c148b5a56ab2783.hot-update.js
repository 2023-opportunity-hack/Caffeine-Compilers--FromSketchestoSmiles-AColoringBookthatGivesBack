"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sponsor",{

/***/ "./components/Sponsor/sponsor.module.tsx":
/*!***********************************************!*\
  !*** ./components/Sponsor/sponsor.module.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sponsor_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sponsor.module.css */ \"./components/Sponsor/sponsor.module.css\");\n/* harmony import */ var _sponsor_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sponsor_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _bookTemplate_bookTemplate_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bookTemplate/bookTemplate.module */ \"./components/bookTemplate/bookTemplate.module.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Sponsor = ()=>{\n    _s();\n    const [books, setBooks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedBooks, setSelectedBooks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getResponse = ()=>{\n        return {\n            ok: 1,\n            count: 2,\n            next: null,\n            previous: null,\n            results: [\n                {\n                    id: 1,\n                    name: \"book-1\",\n                    about: \"htis book is about something\",\n                    url: null,\n                    is_published: null,\n                    created_on: \"2023-10-08T01:31:31.196001Z\",\n                    modified_on: \"2023-10-08T01:31:31.196077Z\",\n                    sponsors: [\n                        2,\n                        3\n                    ],\n                    nonprofits: [\n                        2\n                    ],\n                    drawings: []\n                },\n                {\n                    id: 2,\n                    name: \"book-2\",\n                    about: \"htis book is about something\",\n                    url: \"https://opp-hack-asu.s3.amazonaws.com/pdf_uploads/book-2.pdf\",\n                    is_published: null,\n                    created_on: \"2023-10-08T04:14:14.632453Z\",\n                    modified_on: \"2023-10-08T04:14:14.632487Z\",\n                    sponsors: [\n                        2,\n                        3\n                    ],\n                    nonprofits: [\n                        2\n                    ],\n                    drawings: [\n                        1,\n                        2,\n                        3,\n                        4\n                    ]\n                }\n            ]\n        };\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                // const response = await fetch(\"api/books\"); // Replace with your API endpoint\n                const response = getResponse();\n                if (response.ok) {\n                    // const data = await response.json();\n                    // setBooks(data.results); // Assuming your response structure has a \"sponsors\" array\n                    setBooks(response.results);\n                } else {\n                    console.error(\"Failed to fetch sponsors\");\n                }\n            } catch (error) {\n                console.error(\"Error during sponsor fetch:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    const handleSelect = (bookId)=>{\n        // Toggle the selected state of the sponsor\n        setSelectedBooks((prevSelected)=>prevSelected.includes(bookId) ? prevSelected.filter((id)=>id !== bookId) : [\n                ...prevSelected,\n                bookId\n            ]);\n    };\n    const handleCheckout = async ()=>{\n        // Make the update call for selected sponsors\n        try {\n            const response = await fetch(\"https://api.example.com/updateSponsors\", {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    selectedBooks\n                })\n            });\n            if (response.ok) {\n                console.log(\"Selected sponsors updated successfully\");\n            } else {\n                console.error(\"Failed to update selected sponsors\");\n            }\n        } catch (error) {\n            console.error(\"Error during sponsor update:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_sponsor_module_css__WEBPACK_IMPORTED_MODULE_3___default().classMain),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_sponsor_module_css__WEBPACK_IMPORTED_MODULE_3___default().bookTemplateParent),\n                children: books.map((book)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_sponsor_module_css__WEBPACK_IMPORTED_MODULE_3___default().bookCards),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>handleSelect(book.id),\n                            className: selectedBooks.includes(book.id) ? (_sponsor_module_css__WEBPACK_IMPORTED_MODULE_3___default().selectedCard) : \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_bookTemplate_bookTemplate_module__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                name: book.name,\n                                description: book.about\n                            }, void 0, false, {\n                                fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/Sponsor/sponsor.module.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 8\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/Sponsor/sponsor.module.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 7\n                        }, undefined)\n                    }, book.id, false, {\n                        fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/Sponsor/sponsor.module.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 6\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/Sponsor/sponsor.module.tsx\",\n                lineNumber: 93,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_sponsor_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),\n                onClick: handleCheckout,\n                children: \"Checkout\"\n            }, void 0, false, {\n                fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/Sponsor/sponsor.module.tsx\",\n                lineNumber: 104,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jggoyaljayati/ASU-Projects/OppurtunityHackathon/Caffeine-Compilers--FromSketchestoSmiles-AColoringBookthatGivesBack/dummy-project/components/Sponsor/sponsor.module.tsx\",\n        lineNumber: 92,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Sponsor, \"Schdwozl8w6Hgc1L8t2rcuBUaKM=\");\n_c = Sponsor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sponsor);\nvar _c;\n$RefreshReg$(_c, \"Sponsor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nwb25zb3Ivc3BvbnNvci5tb2R1bGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDVDtBQUNxQjtBQUMvRCxNQUFNSyxVQUFVLElBQU07O0lBQ3JCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ08sZUFBZUMsaUJBQWlCLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFDckQsTUFBTVMsY0FBYyxJQUFNO1FBQ3pCLE9BQU87WUFDTkMsSUFBSTtZQUNKQyxPQUFPO1lBQ1BDLE1BQU0sSUFBSTtZQUNWQyxVQUFVLElBQUk7WUFDZEMsU0FBUztnQkFDUjtvQkFDQ0MsSUFBSTtvQkFDSkMsTUFBTTtvQkFDTkMsT0FBTztvQkFDUEMsS0FBSyxJQUFJO29CQUNUQyxjQUFjLElBQUk7b0JBQ2xCQyxZQUFZO29CQUNaQyxhQUFhO29CQUNiQyxVQUFVO3dCQUFDO3dCQUFHO3FCQUFFO29CQUNoQkMsWUFBWTt3QkFBQztxQkFBRTtvQkFDZkMsVUFBVSxFQUFFO2dCQUNiO2dCQUNBO29CQUNDVCxJQUFJO29CQUNKQyxNQUFNO29CQUNOQyxPQUFPO29CQUNQQyxLQUFLO29CQUNMQyxjQUFjLElBQUk7b0JBQ2xCQyxZQUFZO29CQUNaQyxhQUFhO29CQUNiQyxVQUFVO3dCQUFDO3dCQUFHO3FCQUFFO29CQUNoQkMsWUFBWTt3QkFBQztxQkFBRTtvQkFDZkMsVUFBVTt3QkFBQzt3QkFBRzt3QkFBRzt3QkFBRztxQkFBRTtnQkFDdkI7YUFDQTtRQUNGO0lBQ0Q7SUFDQXZCLGdEQUFTQSxDQUFDLElBQU07UUFDZixNQUFNd0IsWUFBWSxVQUFZO1lBQzdCLElBQUk7Z0JBQ0gsK0VBQStFO2dCQUMvRSxNQUFNQyxXQUFXakI7Z0JBQ2pCLElBQUlpQixTQUFTaEIsRUFBRSxFQUFFO29CQUNoQixzQ0FBc0M7b0JBQ3RDLHFGQUFxRjtvQkFDckZKLFNBQVNvQixTQUFTWixPQUFPO2dCQUMxQixPQUFPO29CQUNOYSxRQUFRQyxLQUFLLENBQUM7Z0JBQ2YsQ0FBQztZQUNGLEVBQUUsT0FBT0EsT0FBTztnQkFDZkQsUUFBUUMsS0FBSyxDQUFDLCtCQUErQkE7WUFDOUM7UUFDRDtRQUVBSDtJQUNELEdBQUcsRUFBRTtJQUVMLE1BQU1JLGVBQWUsQ0FBQ0MsU0FBVztRQUNoQywyQ0FBMkM7UUFDM0N0QixpQkFBaUIsQ0FBQ3VCLGVBQ2pCQSxhQUFhQyxRQUFRLENBQUNGLFVBQ25CQyxhQUFhRSxNQUFNLENBQUMsQ0FBQ2xCLEtBQU9BLE9BQU9lLFVBQ25DO21CQUFJQztnQkFBY0Q7YUFBTztJQUU5QjtJQUVBLE1BQU1JLGlCQUFpQixVQUFZO1FBQ2xDLDZDQUE2QztRQUM3QyxJQUFJO1lBQ0gsTUFBTVIsV0FBVyxNQUFNUyxNQUFNLDBDQUEwQztnQkFDdEVDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1IsZ0JBQWdCO2dCQUNqQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFakM7Z0JBQWM7WUFDdEM7WUFFQSxJQUFJbUIsU0FBU2hCLEVBQUUsRUFBRTtnQkFDaEJpQixRQUFRYyxHQUFHLENBQUM7WUFDYixPQUFPO2dCQUNOZCxRQUFRQyxLQUFLLENBQUM7WUFDZixDQUFDO1FBQ0YsRUFBRSxPQUFPQSxPQUFPO1lBQ2ZELFFBQVFDLEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQy9DO0lBQ0Q7SUFFQSxxQkFDQyw4REFBQ2M7UUFBSUMsV0FBV3pDLHNFQUFnQjs7MEJBQy9CLDhEQUFDd0M7Z0JBQUlDLFdBQVd6QywrRUFBeUI7MEJBQ3ZDRyxNQUFNeUMsR0FBRyxDQUFDLENBQUNDLHFCQUNYLDhEQUFDTDt3QkFBa0JDLFdBQVd6QyxzRUFBZ0I7a0NBQzdDLDRFQUFDK0M7NEJBQU9DLFNBQVMsSUFBTXJCLGFBQWFrQixLQUFLaEMsRUFBRTs0QkFBRzRCLFdBQVdwQyxjQUFjeUIsUUFBUSxDQUFDZSxLQUFLaEMsRUFBRSxJQUFJYix5RUFBbUIsR0FBRSxFQUFFO3NDQUNqSCw0RUFBQ0MseUVBQVlBO2dDQUFDYSxNQUFNK0IsS0FBSy9CLElBQUk7Z0NBQUVvQyxhQUFhTCxLQUFLOUIsS0FBSzs7Ozs7Ozs7Ozs7dUJBRjlDOEIsS0FBS2hDLEVBQUU7Ozs7Ozs7Ozs7MEJBU25CLDhEQUFDa0M7Z0JBQU9OLFdBQVd6QyxtRUFBYTtnQkFBRWdELFNBQVNoQjswQkFBZ0I7Ozs7Ozs7Ozs7OztBQUs5RDtHQXpHTTlCO0tBQUFBO0FBMkdOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3BvbnNvci9zcG9uc29yLm1vZHVsZS50c3g/NWExYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zcG9uc29yLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBCb29rVGVtcGxhdGUgZnJvbSBcIi4uL2Jvb2tUZW1wbGF0ZS9ib29rVGVtcGxhdGUubW9kdWxlXCI7XG5jb25zdCBTcG9uc29yID0gKCkgPT4ge1xuXHRjb25zdCBbYm9va3MsIHNldEJvb2tzXSA9IHVzZVN0YXRlKFtdKTtcblx0Y29uc3QgW3NlbGVjdGVkQm9va3MsIHNldFNlbGVjdGVkQm9va3NdID0gdXNlU3RhdGUoW10pO1xuXHRjb25zdCBnZXRSZXNwb25zZSA9ICgpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0b2s6IDEsXG5cdFx0XHRjb3VudDogMixcblx0XHRcdG5leHQ6IG51bGwsXG5cdFx0XHRwcmV2aW91czogbnVsbCxcblx0XHRcdHJlc3VsdHM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHRcdG5hbWU6IFwiYm9vay0xXCIsXG5cdFx0XHRcdFx0YWJvdXQ6IFwiaHRpcyBib29rIGlzIGFib3V0IHNvbWV0aGluZ1wiLFxuXHRcdFx0XHRcdHVybDogbnVsbCxcblx0XHRcdFx0XHRpc19wdWJsaXNoZWQ6IG51bGwsXG5cdFx0XHRcdFx0Y3JlYXRlZF9vbjogXCIyMDIzLTEwLTA4VDAxOjMxOjMxLjE5NjAwMVpcIixcblx0XHRcdFx0XHRtb2RpZmllZF9vbjogXCIyMDIzLTEwLTA4VDAxOjMxOjMxLjE5NjA3N1pcIixcblx0XHRcdFx0XHRzcG9uc29yczogWzIsIDNdLFxuXHRcdFx0XHRcdG5vbnByb2ZpdHM6IFsyXSxcblx0XHRcdFx0XHRkcmF3aW5nczogW10sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRpZDogMixcblx0XHRcdFx0XHRuYW1lOiBcImJvb2stMlwiLFxuXHRcdFx0XHRcdGFib3V0OiBcImh0aXMgYm9vayBpcyBhYm91dCBzb21ldGhpbmdcIixcblx0XHRcdFx0XHR1cmw6IFwiaHR0cHM6Ly9vcHAtaGFjay1hc3UuczMuYW1hem9uYXdzLmNvbS9wZGZfdXBsb2Fkcy9ib29rLTIucGRmXCIsXG5cdFx0XHRcdFx0aXNfcHVibGlzaGVkOiBudWxsLFxuXHRcdFx0XHRcdGNyZWF0ZWRfb246IFwiMjAyMy0xMC0wOFQwNDoxNDoxNC42MzI0NTNaXCIsXG5cdFx0XHRcdFx0bW9kaWZpZWRfb246IFwiMjAyMy0xMC0wOFQwNDoxNDoxNC42MzI0ODdaXCIsXG5cdFx0XHRcdFx0c3BvbnNvcnM6IFsyLCAzXSxcblx0XHRcdFx0XHRub25wcm9maXRzOiBbMl0sXG5cdFx0XHRcdFx0ZHJhd2luZ3M6IFsxLCAyLCAzLCA0XSxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fTtcblx0fTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiYXBpL2Jvb2tzXCIpOyAvLyBSZXBsYWNlIHdpdGggeW91ciBBUEkgZW5kcG9pbnRcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBnZXRSZXNwb25zZSgpO1xuXHRcdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0XHQvLyBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0XHRcdC8vIHNldEJvb2tzKGRhdGEucmVzdWx0cyk7IC8vIEFzc3VtaW5nIHlvdXIgcmVzcG9uc2Ugc3RydWN0dXJlIGhhcyBhIFwic3BvbnNvcnNcIiBhcnJheVxuXHRcdFx0XHRcdHNldEJvb2tzKHJlc3BvbnNlLnJlc3VsdHMpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggc3BvbnNvcnNcIik7XG5cdFx0XHRcdH1cblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkdXJpbmcgc3BvbnNvciBmZXRjaDpcIiwgZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRmZXRjaERhdGEoKTtcblx0fSwgW10pO1xuXG5cdGNvbnN0IGhhbmRsZVNlbGVjdCA9IChib29rSWQpID0+IHtcblx0XHQvLyBUb2dnbGUgdGhlIHNlbGVjdGVkIHN0YXRlIG9mIHRoZSBzcG9uc29yXG5cdFx0c2V0U2VsZWN0ZWRCb29rcygocHJldlNlbGVjdGVkKSA9PlxuXHRcdFx0cHJldlNlbGVjdGVkLmluY2x1ZGVzKGJvb2tJZClcblx0XHRcdFx0PyBwcmV2U2VsZWN0ZWQuZmlsdGVyKChpZCkgPT4gaWQgIT09IGJvb2tJZClcblx0XHRcdFx0OiBbLi4ucHJldlNlbGVjdGVkLCBib29rSWRdXG5cdFx0KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVDaGVja291dCA9IGFzeW5jICgpID0+IHtcblx0XHQvLyBNYWtlIHRoZSB1cGRhdGUgY2FsbCBmb3Igc2VsZWN0ZWQgc3BvbnNvcnNcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL3VwZGF0ZVNwb25zb3JzXCIsIHtcblx0XHRcdFx0bWV0aG9kOiBcIlBVVFwiLFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc2VsZWN0ZWRCb29rcyB9KSxcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAocmVzcG9uc2Uub2spIHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJTZWxlY3RlZCBzcG9uc29ycyB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gdXBkYXRlIHNlbGVjdGVkIHNwb25zb3JzXCIpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgZHVyaW5nIHNwb25zb3IgdXBkYXRlOlwiLCBlcnJvcik7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbGFzc01haW59PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib29rVGVtcGxhdGVQYXJlbnR9PlxuXHRcdFx0XHR7Ym9va3MubWFwKChib29rKSA9PiAoXG5cdFx0XHRcdFx0PGRpdiBrZXk9e2Jvb2suaWR9IGNsYXNzTmFtZT17c3R5bGVzLmJvb2tDYXJkc30+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNlbGVjdChib29rLmlkKX0gY2xhc3NOYW1lPXtzZWxlY3RlZEJvb2tzLmluY2x1ZGVzKGJvb2suaWQpID8gc3R5bGVzLnNlbGVjdGVkQ2FyZCA6XCJcIn0+XG5cdFx0XHRcdFx0XHRcdDxCb29rVGVtcGxhdGUgbmFtZT17Ym9vay5uYW1lfSBkZXNjcmlwdGlvbj17Ym9vay5hYm91dH0gLz5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0ey8qIHtib29rLm5hbWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2suYWJvdXR9ICovfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e2hhbmRsZUNoZWNrb3V0fT5cblx0XHRcdFx0Q2hlY2tvdXRcblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3BvbnNvcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiQm9va1RlbXBsYXRlIiwiU3BvbnNvciIsImJvb2tzIiwic2V0Qm9va3MiLCJzZWxlY3RlZEJvb2tzIiwic2V0U2VsZWN0ZWRCb29rcyIsImdldFJlc3BvbnNlIiwib2siLCJjb3VudCIsIm5leHQiLCJwcmV2aW91cyIsInJlc3VsdHMiLCJpZCIsIm5hbWUiLCJhYm91dCIsInVybCIsImlzX3B1Ymxpc2hlZCIsImNyZWF0ZWRfb24iLCJtb2RpZmllZF9vbiIsInNwb25zb3JzIiwibm9ucHJvZml0cyIsImRyYXdpbmdzIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVTZWxlY3QiLCJib29rSWQiLCJwcmV2U2VsZWN0ZWQiLCJpbmNsdWRlcyIsImZpbHRlciIsImhhbmRsZUNoZWNrb3V0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjbGFzc01haW4iLCJib29rVGVtcGxhdGVQYXJlbnQiLCJtYXAiLCJib29rIiwiYm9va0NhcmRzIiwiYnV0dG9uIiwib25DbGljayIsInNlbGVjdGVkQ2FyZCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sponsor/sponsor.module.tsx\n"));

/***/ })

});