(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/404/page-not-found-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/404/page-not-found-routing.module.ts ***!
  \******************************************************/
/*! exports provided: PageNotFoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundRoutingModule", function() { return PageNotFoundRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/404/page-not-found.component.ts");





const routes = [
    { path: 'page-not-found', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
class PageNotFoundRoutingModule {
}
PageNotFoundRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageNotFoundRoutingModule });
PageNotFoundRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageNotFoundRoutingModule_Factory(t) { return new (t || PageNotFoundRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageNotFoundRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/404/page-not-found.component.ts":
/*!*************************************************!*\
  !*** ./src/app/404/page-not-found.component.ts ***!
  \*************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageNotFoundComponent {
    constructor() {
    }
    ngOnInit() { }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 38, vars: 0, consts: [[1, "page-not-found-text"], [1, "container"], [1, "caveman"], [1, "leg"], [1, "foot"], [1, "fingers"], [1, "shape"], [1, "circle"], [1, "head"], [1, "eye"], [1, "nose"], [1, "mouth"], [1, "arm-right"], [1, "club"], ["href", "/"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Go back to Home Page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["a[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  margin-top: 12em;\n  background-color: #3a5f8e;\n  border: 0;\n  color: #fff;\n  font-size: 20px;\n  padding: 10px;\n  border-radius: 15px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  text-decoration: none;\n  text-align: center;\n}\na[_ngcontent-%COMP%]:hover {\n  background-color: #2a3c52;\n}\n\n.page-not-found-text[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  color: rgba(42, 60, 82, 0.1);\n  font-size: 30em;\n  text-align: center;\n  top: 40%;\n  height: 400px;\n}\n.page-not-found-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.container[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  height: 300px;\n  width: 500px;\n}\n.container[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  background-color: rgba(42, 60, 82, 0.1);\n  border-radius: 12px;\n  bottom: 40px;\n  height: 12px;\n  left: 80px;\n  width: 350px;\n  z-index: -1;\n  -webkit-animation: shadow-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: shadow-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\n\n.caveman[_ngcontent-%COMP%] {\n  height: 300px;\n  position: absolute;\n  width: 250px;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1) {\n  right: 20px;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2) {\n  left: 20px;\n  transform: rotateY(180deg);\n}\n.head[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #2a3c52;\n  border-radius: 50px;\n  height: 140px;\n  left: 60px;\n  top: 25px;\n  width: 65px;\n}\n.head[_ngcontent-%COMP%]:after, .head[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  background-color: #2a3c52;\n  border-radius: 10px;\n  height: 20px;\n  width: 7px;\n}\n.head[_ngcontent-%COMP%]:after {\n  left: 35px;\n  top: -8px;\n  -ms-transform: rotate(20deg);\n      transform: rotate(20deg);\n}\n.head[_ngcontent-%COMP%]:before {\n  left: 30px;\n  top: -8px;\n  -ms-transform: rotate(-20deg);\n      transform: rotate(-20deg);\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  -ms-transform: translateX(-50%);\n      transform: translateX(-50%);\n  background-color: #e2af90;\n  border-radius: 50px;\n  height: 16px;\n  left: 45%;\n  top: 40px;\n  width: 48px;\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:after, .head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 50%;\n  -ms-transform: translateY(-50%);\n      transform: translateY(-50%);\n  content: \"\";\n  background-color: #2a3c52;\n  border-radius: 50%;\n  height: 5px;\n  width: 5px;\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:after {\n  left: 5px;\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]:before {\n  right: 9px;\n}\n.head[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%]   .nose[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  background-color: #d6a486;\n  border-left: 8px solid rgba(42, 60, 82, 0.1);\n  border-radius: 10px;\n  box-sizing: border-box;\n  height: 35px;\n  left: 45%;\n  top: 12px;\n  width: 15px;\n}\n.shape[_ngcontent-%COMP%] {\n  left: 50%;\n  position: absolute;\n  -ms-transform: translateX(-50%);\n      transform: translateX(-50%);\n  border-radius: 50%;\n  height: 140px;\n  overflow: hidden;\n  top: 70px;\n  width: 140px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:after, .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:after {\n  left: 50px;\n  top: 10px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  left: 60px;\n  top: 45px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(1) {\n  left: -12px;\n  top: 80px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2) {\n  right: 10px;\n  top: 0;\n  -ms-transform: rotate(90deg);\n      transform: rotate(90deg);\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2):after {\n  left: 65px;\n  top: 10px;\n}\n.shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:nth-child(2):before {\n  display: none;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .shape[_ngcontent-%COMP%] {\n  background-color: #3a5f8e;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background-color: #3f5571;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:after, .caveman[_ngcontent-%COMP%]:nth-child(1)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  background-color: #3f5571;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .shape[_ngcontent-%COMP%] {\n  background-color: #3f5571;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background-color: #3a5f8e;\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:after, .caveman[_ngcontent-%COMP%]:nth-child(2)   .shape[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  background-color: #3a5f8e;\n}\n.arm-right[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #e2af90;\n  border-left: 8px solid rgba(42, 60, 82, 0.1);\n  border-radius: 50px;\n  box-sizing: border-box;\n  height: 180px;\n  left: 135px;\n  top: 80px;\n  -ms-transform-origin: 30px 30px;\n      transform-origin: 30px 30px;\n  width: 60px;\n  z-index: 1;\n}\n.arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%] {\n  position: absolute;\n  border-bottom: 110px solid #601513;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  height: 0;\n  left: -60px;\n  top: 120px;\n  -ms-transform: rotate(70deg);\n      transform: rotate(70deg);\n  width: 20px;\n}\n.arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%]:after, .arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  background-color: #601513;\n  border-radius: 50%;\n  left: 0;\n}\n.arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%]:after {\n  height: 20px;\n  width: 20px;\n  top: -10px;\n}\n.arm-right[_ngcontent-%COMP%]   .club[_ngcontent-%COMP%]:before {\n  height: 40px;\n  width: 40px;\n  left: -10px;\n  top: 90px;\n}\n.leg[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 10px;\n  height: 55px;\n  top: 200px;\n  width: 10px;\n}\n.leg[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  border-radius: 50%;\n  height: 10px;\n  left: -5px;\n  top: 15px;\n  width: 10px;\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 25px 25px 0 0;\n  height: 25px;\n  left: -38px;\n  top: 30px;\n  width: 50px;\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]:after, .leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]:before, .leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .fingers[_ngcontent-%COMP%], .leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .fingers[_ngcontent-%COMP%]:after {\n  position: absolute;\n  background-color: #e2af90;\n  border-radius: 50%;\n  bottom: 0;\n  height: 15px;\n  -ms-transform-origin: bottom;\n      transform-origin: bottom;\n  width: 15px;\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]:after {\n  left: -6px;\n  content: \"\";\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]:before {\n  left: 8px;\n  -ms-transform: scale(0.6);\n      transform: scale(0.6);\n  content: \"\";\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .fingers[_ngcontent-%COMP%] {\n  left: 15px;\n  -ms-transform: scale(0.6);\n      transform: scale(0.6);\n}\n.leg[_ngcontent-%COMP%]   .foot[_ngcontent-%COMP%]   .fingers[_ngcontent-%COMP%]:after {\n  left: 11px;\n  content: \"\";\n}\n.leg[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #bf9176;\n  left: 95px;\n}\n.leg[_ngcontent-%COMP%]:nth-child(1):after {\n  background-color: #bf9176;\n}\n.leg[_ngcontent-%COMP%]:nth-child(1)   .foot[_ngcontent-%COMP%] {\n  background-color: #bf9176;\n}\n.leg[_ngcontent-%COMP%]:nth-child(1)   .foot[_ngcontent-%COMP%]:after {\n  background-color: #bf9176;\n}\n.leg[_ngcontent-%COMP%]:nth-child(1)   .foot[_ngcontent-%COMP%]:before {\n  display: none;\n}\n.leg[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #d6a486;\n  left: 115px;\n}\n.leg[_ngcontent-%COMP%]:nth-child(2):after {\n  background-color: #d6a486;\n}\n.leg[_ngcontent-%COMP%]:nth-child(2)   .foot[_ngcontent-%COMP%] {\n  background-color: #d6a486;\n}\n\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .arm-right[_ngcontent-%COMP%] {\n  -webkit-animation: arm-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: arm-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .arm-right[_ngcontent-%COMP%] {\n  -webkit-animation: arm-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: arm-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n@-webkit-keyframes arm-anima {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n@keyframes arm-anima {\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(-360deg);\n  }\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .head[_ngcontent-%COMP%] {\n  -webkit-animation: head-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: head-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .head[_ngcontent-%COMP%] {\n  -webkit-animation: head-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: head-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n@-webkit-keyframes head-anima {\n  0% {\n    top: 25px;\n  }\n  42% {\n    top: 25px;\n  }\n  45% {\n    top: 50px;\n  }\n  100% {\n    top: 25px;\n  }\n}\n@keyframes head-anima {\n  0% {\n    top: 25px;\n  }\n  42% {\n    top: 25px;\n  }\n  45% {\n    top: 50px;\n  }\n  100% {\n    top: 25px;\n  }\n}\n.caveman[_ngcontent-%COMP%]:nth-child(2)   .eye[_ngcontent-%COMP%]:after, .caveman[_ngcontent-%COMP%]:nth-child(2)   .eye[_ngcontent-%COMP%]:before {\n  -webkit-animation: eye-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: eye-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n}\n.caveman[_ngcontent-%COMP%]:nth-child(1)   .eye[_ngcontent-%COMP%]:after, .caveman[_ngcontent-%COMP%]:nth-child(1)   .eye[_ngcontent-%COMP%]:before {\n  -webkit-animation: eye-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n          animation: eye-anima 1.2s infinite cubic-bezier(0.55, 0.01, 0.16, 1.34);\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n@-webkit-keyframes eye-anima {\n  0% {\n    height: 5px;\n  }\n  42% {\n    height: 5px;\n  }\n  45% {\n    height: 1px;\n  }\n  100% {\n    height: 5px;\n  }\n}\n@keyframes eye-anima {\n  0% {\n    height: 5px;\n  }\n  42% {\n    height: 5px;\n  }\n  45% {\n    height: 1px;\n  }\n  100% {\n    height: 5px;\n  }\n}\n@-webkit-keyframes shadow-anima {\n  0% {\n    width: 350px;\n    left: 80px;\n  }\n  25% {\n    width: 450px;\n    left: 80px;\n  }\n  50% {\n    width: 350px;\n    left: 80px;\n  }\n  75% {\n    width: 450px;\n    left: 0;\n  }\n  100% {\n    width: 350px;\n    left: 80px;\n  }\n}\n@keyframes shadow-anima {\n  0% {\n    width: 350px;\n    left: 80px;\n  }\n  25% {\n    width: 450px;\n    left: 80px;\n  }\n  50% {\n    width: 350px;\n    left: 80px;\n  }\n  75% {\n    width: 450px;\n    left: 0;\n  }\n  100% {\n    width: 350px;\n    left: 80px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvNDA0L0M6XFxVc2Vyc1xcRXJpc1xcRG9jdW1lbnRzXFxsaXZlLXJlc3VtZS9zcmNcXGFwcFxcNDA0XFxwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvNDA0L3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCQTtFQU5FLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxvQ0FBQTtNQUFBLGdDQUFBO0VBTUUsZ0JBQUE7RUFDQSx5QkFoQ1c7RUFpQ1gsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUMzQko7QUQ2Qkk7RUFDSSx5QkFBQTtBQzNCUjtBRCtCQSxjQUFBO0FBQ0E7RUEzQkUsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO01BQUEsZ0NBQUE7RUEyQkEsNEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQzFCRjtBRDRCRTtFQUNJLFNBQUE7QUMxQk47QUQ4QkE7RUF6Q0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO01BQUEsZ0NBQUE7RUF5Q0EsYUFBQTtFQUNBLFlBQUE7QUN6QkY7QUQwQkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrRkFBQTtVQUFBLDBFQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtBQ3hCSjtBRDRCQSxZQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDekJGO0FENEJBO0VBQXdCLFdBQUE7QUN4QnhCO0FEeUJBO0VBQ0UsVUFBQTtFQUNBLDBCQUFBO0FDdEJGO0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSx5QkE1Rlc7RUE2RlgsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDckJGO0FEc0JFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBNUdVO0VBNkdWLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNwQko7QURzQkU7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO01BQUEsd0JBQUE7QUNwQko7QURzQkU7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO01BQUEseUJBQUE7QUNwQko7QURzQkU7RUF6R0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7TUFBQSwyQkFBQTtFQTBHRSx5QkExSFc7RUEySFgsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDbkJKO0FEb0JJO0VBeEhGLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO01BQUEsMkJBQUE7RUF5SEksV0FBQTtFQUNBLHlCQXhJUTtFQXlJUixrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDakJOO0FEbUJJO0VBQ0UsU0FBQTtBQ2pCTjtBRG1CSTtFQUNFLFVBQUE7QUNqQk47QURtQkk7RUEzSEYsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO01BQUEsZ0NBQUE7RUEySEkseUJBakpTO0VBa0pULDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNmTjtBRG9CQTtFQWhKRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtNQUFBLDJCQUFBO0VBaUpBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNoQkY7QURpQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNmSjtBRGdCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNkTjtBRGdCSTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FDZE47QURnQkk7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQ2ROO0FEaUJFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7QUNmSjtBRGtCRTtFQUNFLFdBQUE7RUFDQSxNQUFBO0VBQ0EsNEJBQUE7TUFBQSx3QkFBQTtBQ2hCSjtBRGlCSTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FDZk47QURpQkk7RUFDRSxhQUFBO0FDZk47QURvQkE7RUFDRSx5QkFqTmE7QUNnTWY7QURtQkU7RUFDRSx5QkFuTlc7QUNrTWY7QURrQkk7RUFBb0IseUJBcE5UO0FDcU1mO0FEbUJBO0VBQ0UseUJBek5hO0FDeU1mO0FEaUJFO0VBQ0kseUJBNU5TO0FDNk1mO0FEZ0JNO0VBQW9CLHlCQTdOWDtBQ2dOZjtBRGlCQTtFQUNFLGtCQUFBO0VBQ0EseUJBak9hO0VBa09iLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO01BQUEsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ2RGO0FEZ0JFO0VBQ0Usa0JBQUE7RUFDRCxrQ0FBQTtFQUNDLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtNQUFBLHdCQUFBO0VBQ0EsV0FBQTtBQ2RKO0FEZ0JJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBdFBTO0VBdVBULGtCQUFBO0VBQ0EsT0FBQTtBQ2ROO0FEZ0JJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDZE47QURnQkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDZE47QURtQkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDaEJGO0FEaUJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDZko7QURrQkU7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ2hCSjtBRGlCSTtFQUNFLGtCQUFBO0VBQ0EseUJBclNTO0VBc1NULGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtNQUFBLHdCQUFBO0VBQ0EsV0FBQTtBQ2ZOO0FEaUJJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNmTjtBRGlCSTtFQUNFLFNBQUE7RUFDQSx5QkFBQTtNQUFBLHFCQUFBO0VBQ0EsV0FBQTtBQ2ZOO0FEa0JJO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO01BQUEscUJBQUE7QUNoQk47QURrQkk7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ2hCTjtBRHFCQTtFQUNFLHlCQWhVYTtFQWlVYixVQUFBO0FDbEJGO0FEbUJFO0VBQVUseUJBbFVHO0FDa1RmO0FEaUJFO0VBQ0UseUJBcFVXO0FDcVRmO0FEZ0JJO0VBQVUseUJBclVDO0FDd1RmO0FEY0k7RUFBVyxhQUFBO0FDWGY7QURlQTtFQUNFLHlCQTVVYTtFQTZVYixXQUFBO0FDWkY7QURhRTtFQUFVLHlCQTlVRztBQ29VZjtBRFdFO0VBQVEseUJBL1VLO0FDdVVmO0FEV0EsY0FBQTtBQUNBO0VBQ0UsK0VBQUE7VUFBQSx1RUFBQTtBQ1JGO0FEV0E7RUFDRSwrRUFBQTtVQUFBLHVFQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtBQ1JGO0FEV0E7RUFDRTtJQUFLLG9CQUFBO0VDUEw7RURRQTtJQUFPLDBCQUFBO0VDTFA7QUFDRjtBREVBO0VBQ0U7SUFBSyxvQkFBQTtFQ1BMO0VEUUE7SUFBTywwQkFBQTtFQ0xQO0FBQ0Y7QURPQTtFQUNFLGdGQUFBO1VBQUEsd0VBQUE7QUNMRjtBRFFBO0VBQ0UsZ0ZBQUE7VUFBQSx3RUFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUNMRjtBRFFBO0VBQ0U7SUFBSyxTQUFBO0VDSkw7RURLQTtJQUFNLFNBQUE7RUNGTjtFREdBO0lBQU0sU0FBQTtFQ0FOO0VEQ0E7SUFBTyxTQUFBO0VDRVA7QUFDRjtBRFBBO0VBQ0U7SUFBSyxTQUFBO0VDSkw7RURLQTtJQUFNLFNBQUE7RUNGTjtFREdBO0lBQU0sU0FBQTtFQ0FOO0VEQ0E7SUFBTyxTQUFBO0VDRVA7QUFDRjtBREFBOztFQUVFLCtFQUFBO1VBQUEsdUVBQUE7QUNFRjtBRENBOztFQUVFLCtFQUFBO1VBQUEsdUVBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FDRUY7QURDQTtFQUNFO0lBQUssV0FBQTtFQ0dMO0VERkE7SUFBTSxXQUFBO0VDS047RURKQTtJQUFNLFdBQUE7RUNPTjtFRE5BO0lBQU8sV0FBQTtFQ1NQO0FBQ0Y7QURkQTtFQUNFO0lBQUssV0FBQTtFQ0dMO0VERkE7SUFBTSxXQUFBO0VDS047RURKQTtJQUFNLFdBQUE7RUNPTjtFRE5BO0lBQU8sV0FBQTtFQ1NQO0FBQ0Y7QURQQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNTRjtFRFBBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNTRjtFRFBBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNTRjtFRFBBO0lBQ0UsWUFBQTtJQUNBLE9BQUE7RUNTRjtFRFBBO0lBQ0UsWUFBQTtJQUNBLFVBQUE7RUNTRjtBQUNGO0FEN0JBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQ1NGO0VEUEE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQ1NGO0VEUEE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQ1NGO0VEUEE7SUFDRSxZQUFBO0lBQ0EsT0FBQTtFQ1NGO0VEUEE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtFQ1NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC80MDQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItYmxhY2s6ICMyYTNjNTI7XHJcbiRjb2xvci13aGl0ZTogI2ZmZjtcclxuJGNvbG9yLWJsdWUtMTogIzNhNWY4ZTtcclxuJGNvbG9yLWJsdWUtMjogIzNmNTU3MTtcclxuJGNvbG9yLXNraW4tMTogI2UyYWY5MDtcclxuJGNvbG9yLXNraW4tMjogI2Q2YTQ4NjtcclxuJGNvbG9yLXNraW4tMzogI2JmOTE3NjtcclxuJGNvbG9yLWhhaXI6ICMyYTNjNTI7XHJcbiRjb2xvci13b29kLTE6ICM2MDE1MTM7XHJcbiRjb2xvci13b29kLTI6ICM0MTBhMDk7XHJcblxyXG5AbWl4aW4gdG9wNTAge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbkBtaXhpbiBsZWZ0NTAge1xyXG4gIGxlZnQ6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcblxyXG5AbWl4aW4gY2VudGVyZWQge1xyXG4gIGxlZnQ6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgQGluY2x1ZGUgY2VudGVyZWQ7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMTJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTE7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEzYzUyO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBUaGUgc2NlbmUgKi9cclxuLnBhZ2Utbm90LWZvdW5kLXRleHQge1xyXG4gIEBpbmNsdWRlIGNlbnRlcmVkO1xyXG5cclxuICBjb2xvcjogcmdiYSgkY29sb3ItYmxhY2ssIDAuMSk7XHJcbiAgZm9udC1zaXplOiAzMGVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0b3A6IDQwJTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG5cclxuICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgQGluY2x1ZGUgY2VudGVyZWQ7XHJcblxyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gICY6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLWJsYWNrLCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJvdHRvbTogNDBweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICAgIGxlZnQ6IDgwcHg7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGFuaW1hdGlvbjogc2hhZG93LWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xyXG4gIH1cclxufVxyXG5cclxuLyogY2F2ZW1hbiAqL1xyXG4uY2F2ZW1hbiB7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgeyByaWdodDogMjBweDsgfVxyXG4uY2F2ZW1hbjpudGgtY2hpbGQoMikge1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbn1cclxuLmhlYWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItaGFpcjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgbGVmdDogNjBweDtcclxuICB0b3A6IDI1cHg7XHJcbiAgd2lkdGg6IDY1cHg7XHJcbiAgJjphZnRlciwgJjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgICBcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDdweDtcclxuICB9XHJcbiAgJjphZnRlciB7XHJcbiAgICBsZWZ0OiAzNXB4O1xyXG4gICAgdG9wOiAtOHB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xyXG4gIH1cclxuICAmOmJlZm9yZSB7XHJcbiAgICBsZWZ0OiAzMHB4O1xyXG4gICAgdG9wOiAtOHB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTtcclxuICB9XHJcbiAgLmV5ZSB7XHJcbiAgICBAaW5jbHVkZSBsZWZ0NTA7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNraW4tMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICBsZWZ0OiA0NSU7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgICY6YWZ0ZXIsICY6YmVmb3JlIHtcclxuICAgICAgQGluY2x1ZGUgdG9wNTA7XHJcbiAgICAgIFxyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmxhY2s7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICByaWdodDogOXB4O1xyXG4gICAgfVxyXG4gICAgLm5vc2Uge1xyXG4gICAgICBAaW5jbHVkZSBjZW50ZXJlZDtcclxuXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTI7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgcmdiYSgkY29sb3ItYmxhY2ssIDAuMSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgbGVmdDogNDUlO1xyXG4gICAgICB0b3A6IDEycHg7XHJcbiAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNoYXBlIHtcclxuICBAaW5jbHVkZSBsZWZ0NTA7IFxyXG5cclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRvcDogNzBweDtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgLmNpcmNsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgICY6YWZ0ZXIsICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGhlaWdodDogMjBweDsgICAgICBcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgbGVmdDogNTBweDtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBsZWZ0OiA2MHB4O1xyXG4gICAgICB0b3A6IDQ1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5jaXJjbGU6bnRoLWNoaWxkKDEpIHtcclxuICAgIGxlZnQ6IC0xMnB4O1xyXG4gICAgdG9wOiA4MHB4O1xyXG4gIH1cclxuXHJcbiAgLmNpcmNsZTpudGgtY2hpbGQoMikge1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgbGVmdDogNjVweDtcclxuICAgICAgdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNhdmVtYW46bnRoLWNoaWxkKDEpIC5zaGFwZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMTtcclxuXHJcbiAgLmNpcmNsZSB7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJsdWUtMjsgXHJcbiAgICAmOmFmdGVyLCAmOmJlZm9yZSB7IGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTI7IH1cclxuICB9XHJcbn1cclxuXHJcbi5jYXZlbWFuOm50aC1jaGlsZCgyKSAuc2hhcGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTI7XHJcbiAgLmNpcmNsZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTE7IFxyXG4gICAgICAmOmFmdGVyLCAmOmJlZm9yZSB7IGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1ibHVlLTE7IH1cclxuICB9XHJcbn1cclxuXHJcbi5hcm0tcmlnaHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2tpbi0xO1xyXG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgcmdiYSgkY29sb3ItYmxhY2ssIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgbGVmdDogMTM1cHg7IFxyXG4gIHRvcDogODBweDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAzMHB4IDMwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgei1pbmRleDogMTtcclxuXHJcbiAgLmNsdWIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cdCAgYm9yZGVyLWJvdHRvbTogMTEwcHggc29saWQgJGNvbG9yLXdvb2QtMTtcclxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgbGVmdDogLTYwcHg7XHJcbiAgICB0b3A6IDEyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNzBkZWcpO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcblxyXG4gICAgJjphZnRlciwgJjpiZWZvcmUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13b29kLTE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICB0b3A6IC0xMHB4O1xyXG4gICAgfVxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBsZWZ0OiAtMTBweDtcclxuICAgICAgdG9wOiA5MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxlZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgaGVpZ2h0OiA1NXB4OyAgXHJcbiAgdG9wOiAyMDBweDtcclxuICB3aWR0aDogMTBweDtcclxuICAmOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBsZWZ0OiAtNXB4O1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGVmdDogLTM4cHg7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgICY6YWZ0ZXIsICY6YmVmb3JlLCAuZmluZ2VycywgLmZpbmdlcnM6YWZ0ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgbGVmdDogLTZweDtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgIH1cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpbmdlcnMge1xyXG4gICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XHJcbiAgICB9XHJcbiAgICAuZmluZ2VyczphZnRlciB7XHJcbiAgICAgIGxlZnQ6IDExcHg7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGVnOm50aC1jaGlsZCgxKSB7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTM7XHJcbiAgbGVmdDogOTVweDtcclxuICAmOmFmdGVyIHsgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNraW4tMzsgfVxyXG4gIC5mb290IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTM7IFxyXG4gICAgJjphZnRlciB7IGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1za2luLTM7IH1cclxuICAgICY6YmVmb3JlIHsgZGlzcGxheTogbm9uZTsgfVxyXG4gIH1cclxufVxyXG5cclxuLmxlZzpudGgtY2hpbGQoMikgeyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2tpbi0yO1xyXG4gIGxlZnQ6IDExNXB4OyAgIFxyXG4gICY6YWZ0ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2tpbi0yOyB9XHJcbiAgLmZvb3QgeyBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2tpbi0yOyB9XHJcbn1cclxuXHJcbi8qIGFuaW1hdGlvbiAqL1xyXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLmFybS1yaWdodCB7XHJcbiAgYW5pbWF0aW9uOiBhcm0tYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XHJcbn1cclxuXHJcbi5jYXZlbWFuOm50aC1jaGlsZCgyKSAuYXJtLXJpZ2h0IHtcclxuICBhbmltYXRpb246IGFybS1hbmltYSAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjU1LCAwLjAxLCAwLjE2LCAxLjM0KTtcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYXJtLWFuaW1hIHtcclxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDApOyB9XHJcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpOyB9XHJcbn1cclxuXHJcbi5jYXZlbWFuOm50aC1jaGlsZCgyKSAuaGVhZCB7XHJcbiAgYW5pbWF0aW9uOiBoZWFkLWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xyXG59XHJcblxyXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLmhlYWQge1xyXG4gIGFuaW1hdGlvbjogaGVhZC1hbmltYSAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjU1LCAwLjAxLCAwLjE2LCAxLjM0KTtcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaGVhZC1hbmltYSB7XHJcbiAgMCUgeyB0b3A6IDI1cHg7IH1cclxuICA0MiUgeyB0b3A6IDI1cHg7IH1cclxuICA0NSUgeyB0b3A6IDUwcHg7IH1cclxuICAxMDAlIHsgdG9wOiAyNXB4OyB9XHJcbn1cclxuXHJcbi5jYXZlbWFuOm50aC1jaGlsZCgyKSAuZXllOmFmdGVyLCBcclxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIC5leWU6YmVmb3JlIHtcclxuICBhbmltYXRpb246IGV5ZS1hbmltYSAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjU1LCAwLjAxLCAwLjE2LCAxLjM0KTtcclxufVxyXG5cclxuLmNhdmVtYW46bnRoLWNoaWxkKDEpIC5leWU6YWZ0ZXIsIFxyXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLmV5ZTpiZWZvcmUge1xyXG4gIGFuaW1hdGlvbjogZXllLWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxufVxyXG5cclxuQGtleWZyYW1lcyBleWUtYW5pbWEge1xyXG4gIDAlIHsgaGVpZ2h0OiA1cHg7IH1cclxuICA0MiUgeyBoZWlnaHQ6IDVweDsgfVxyXG4gIDQ1JSB7IGhlaWdodDogMXB4OyB9XHJcbiAgMTAwJSB7IGhlaWdodDogNXB4OyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hhZG93LWFuaW1hIHtcclxuICAwJSB7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBsZWZ0OiA4MHB4O1xyXG4gIH1cclxuICAyNSUge1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgbGVmdDogODBweDtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGxlZnQ6IDgwcHg7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGxlZnQ6IDgwcHg7XHJcbiAgfVxyXG59IiwiYSB7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIG1hcmdpbi10b3A6IDEyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTVmOGU7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEzYzUyO1xufVxuXG4vKiBUaGUgc2NlbmUgKi9cbi5wYWdlLW5vdC1mb3VuZC10ZXh0IHtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6IHJnYmEoNDIsIDYwLCA4MiwgMC4xKTtcbiAgZm9udC1zaXplOiAzMGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogNDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuLnBhZ2Utbm90LWZvdW5kLXRleHQgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbn1cbi5jb250YWluZXI6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDYwLCA4MiwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm90dG9tOiA0MHB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGxlZnQ6IDgwcHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgei1pbmRleDogLTE7XG4gIGFuaW1hdGlvbjogc2hhZG93LWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xuICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XG59XG5cbi8qIGNhdmVtYW4gKi9cbi5jYXZlbWFuIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgxKSB7XG4gIHJpZ2h0OiAyMHB4O1xufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMikge1xuICBsZWZ0OiAyMHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmhlYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTNjNTI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIGxlZnQ6IDYwcHg7XG4gIHRvcDogMjVweDtcbiAgd2lkdGg6IDY1cHg7XG59XG4uaGVhZDphZnRlciwgLmhlYWQ6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEzYzUyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiA3cHg7XG59XG4uaGVhZDphZnRlciB7XG4gIGxlZnQ6IDM1cHg7XG4gIHRvcDogLThweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xufVxuLmhlYWQ6YmVmb3JlIHtcbiAgbGVmdDogMzBweDtcbiAgdG9wOiAtOHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xufVxuLmhlYWQgLmV5ZSB7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmFmOTA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGhlaWdodDogMTZweDtcbiAgbGVmdDogNDUlO1xuICB0b3A6IDQwcHg7XG4gIHdpZHRoOiA0OHB4O1xufVxuLmhlYWQgLmV5ZTphZnRlciwgLmhlYWQgLmV5ZTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTNjNTI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiA1cHg7XG59XG4uaGVhZCAuZXllOmFmdGVyIHtcbiAgbGVmdDogNXB4O1xufVxuLmhlYWQgLmV5ZTpiZWZvcmUge1xuICByaWdodDogOXB4O1xufVxuLmhlYWQgLmV5ZSAubm9zZSB7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmE0ODY7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgcmdiYSg0MiwgNjAsIDgyLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGxlZnQ6IDQ1JTtcbiAgdG9wOiAxMnB4O1xuICB3aWR0aDogMTVweDtcbn1cblxuLnNoYXBlIHtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDE0MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3A6IDcwcHg7XG4gIHdpZHRoOiAxNDBweDtcbn1cbi5zaGFwZSAuY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG59XG4uc2hhcGUgLmNpcmNsZTphZnRlciwgLnNoYXBlIC5jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG4uc2hhcGUgLmNpcmNsZTphZnRlciB7XG4gIGxlZnQ6IDUwcHg7XG4gIHRvcDogMTBweDtcbn1cbi5zaGFwZSAuY2lyY2xlOmJlZm9yZSB7XG4gIGxlZnQ6IDYwcHg7XG4gIHRvcDogNDVweDtcbn1cbi5zaGFwZSAuY2lyY2xlOm50aC1jaGlsZCgxKSB7XG4gIGxlZnQ6IC0xMnB4O1xuICB0b3A6IDgwcHg7XG59XG4uc2hhcGUgLmNpcmNsZTpudGgtY2hpbGQoMikge1xuICByaWdodDogMTBweDtcbiAgdG9wOiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4uc2hhcGUgLmNpcmNsZTpudGgtY2hpbGQoMik6YWZ0ZXIge1xuICBsZWZ0OiA2NXB4O1xuICB0b3A6IDEwcHg7XG59XG4uc2hhcGUgLmNpcmNsZTpudGgtY2hpbGQoMik6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNhdmVtYW46bnRoLWNoaWxkKDEpIC5zaGFwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTVmOGU7XG59XG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLnNoYXBlIC5jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1NTcxO1xufVxuLmNhdmVtYW46bnRoLWNoaWxkKDEpIC5zaGFwZSAuY2lyY2xlOmFmdGVyLCAuY2F2ZW1hbjpudGgtY2hpbGQoMSkgLnNoYXBlIC5jaXJjbGU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTU3MTtcbn1cblxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIC5zaGFwZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjU1NzE7XG59XG4uY2F2ZW1hbjpudGgtY2hpbGQoMikgLnNoYXBlIC5jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E1ZjhlO1xufVxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIC5zaGFwZSAuY2lyY2xlOmFmdGVyLCAuY2F2ZW1hbjpudGgtY2hpbGQoMikgLnNoYXBlIC5jaXJjbGU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhNWY4ZTtcbn1cblxuLmFybS1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyYWY5MDtcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2JhKDQyLCA2MCwgODIsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTgwcHg7XG4gIGxlZnQ6IDEzNXB4O1xuICB0b3A6IDgwcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDMwcHggMzBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIHotaW5kZXg6IDE7XG59XG4uYXJtLXJpZ2h0IC5jbHViIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItYm90dG9tOiAxMTBweCBzb2xpZCAjNjAxNTEzO1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDA7XG4gIGxlZnQ6IC02MHB4O1xuICB0b3A6IDEyMHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg3MGRlZyk7XG4gIHdpZHRoOiAyMHB4O1xufVxuLmFybS1yaWdodCAuY2x1YjphZnRlciwgLmFybS1yaWdodCAuY2x1YjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDE1MTM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGVmdDogMDtcbn1cbi5hcm0tcmlnaHQgLmNsdWI6YWZ0ZXIge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICB0b3A6IC0xMHB4O1xufVxuLmFybS1yaWdodCAuY2x1YjpiZWZvcmUge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBsZWZ0OiAtMTBweDtcbiAgdG9wOiA5MHB4O1xufVxuXG4ubGVnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIHRvcDogMjAwcHg7XG4gIHdpZHRoOiAxMHB4O1xufVxuLmxlZzphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDEwcHg7XG4gIGxlZnQ6IC01cHg7XG4gIHRvcDogMTVweDtcbiAgd2lkdGg6IDEwcHg7XG59XG4ubGVnIC5mb290IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMCAwO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGxlZnQ6IC0zOHB4O1xuICB0b3A6IDMwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmxlZyAuZm9vdDphZnRlciwgLmxlZyAuZm9vdDpiZWZvcmUsIC5sZWcgLmZvb3QgLmZpbmdlcnMsIC5sZWcgLmZvb3QgLmZpbmdlcnM6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmFmOTA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcbiAgd2lkdGg6IDE1cHg7XG59XG4ubGVnIC5mb290OmFmdGVyIHtcbiAgbGVmdDogLTZweDtcbiAgY29udGVudDogXCJcIjtcbn1cbi5sZWcgLmZvb3Q6YmVmb3JlIHtcbiAgbGVmdDogOHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG4ubGVnIC5mb290IC5maW5nZXJzIHtcbiAgbGVmdDogMTVweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xufVxuLmxlZyAuZm9vdCAuZmluZ2VyczphZnRlciB7XG4gIGxlZnQ6IDExcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5sZWc6bnRoLWNoaWxkKDEpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmOTE3NjtcbiAgbGVmdDogOTVweDtcbn1cbi5sZWc6bnRoLWNoaWxkKDEpOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmOTE3Njtcbn1cbi5sZWc6bnRoLWNoaWxkKDEpIC5mb290IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmOTE3Njtcbn1cbi5sZWc6bnRoLWNoaWxkKDEpIC5mb290OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmOTE3Njtcbn1cbi5sZWc6bnRoLWNoaWxkKDEpIC5mb290OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sZWc6bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2YTQ4NjtcbiAgbGVmdDogMTE1cHg7XG59XG4ubGVnOm50aC1jaGlsZCgyKTphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmE0ODY7XG59XG4ubGVnOm50aC1jaGlsZCgyKSAuZm9vdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmE0ODY7XG59XG5cbi8qIGFuaW1hdGlvbiAqL1xuLmNhdmVtYW46bnRoLWNoaWxkKDEpIC5hcm0tcmlnaHQge1xuICBhbmltYXRpb246IGFybS1hbmltYSAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjU1LCAwLjAxLCAwLjE2LCAxLjM0KTtcbn1cblxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIC5hcm0tcmlnaHQge1xuICBhbmltYXRpb246IGFybS1hbmltYSAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjU1LCAwLjAxLCAwLjE2LCAxLjM0KTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuXG5Aa2V5ZnJhbWVzIGFybS1hbmltYSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgfVxufVxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIC5oZWFkIHtcbiAgYW5pbWF0aW9uOiBoZWFkLWFuaW1hIDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDEsIDAuMTYsIDEuMzQpO1xufVxuXG4uY2F2ZW1hbjpudGgtY2hpbGQoMSkgLmhlYWQge1xuICBhbmltYXRpb246IGhlYWQtYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxuQGtleWZyYW1lcyBoZWFkLWFuaW1hIHtcbiAgMCUge1xuICAgIHRvcDogMjVweDtcbiAgfVxuICA0MiUge1xuICAgIHRvcDogMjVweDtcbiAgfVxuICA0NSUge1xuICAgIHRvcDogNTBweDtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDI1cHg7XG4gIH1cbn1cbi5jYXZlbWFuOm50aC1jaGlsZCgyKSAuZXllOmFmdGVyLFxuLmNhdmVtYW46bnRoLWNoaWxkKDIpIC5leWU6YmVmb3JlIHtcbiAgYW5pbWF0aW9uOiBleWUtYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG59XG5cbi5jYXZlbWFuOm50aC1jaGlsZCgxKSAuZXllOmFmdGVyLFxuLmNhdmVtYW46bnRoLWNoaWxkKDEpIC5leWU6YmVmb3JlIHtcbiAgYW5pbWF0aW9uOiBleWUtYW5pbWEgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC41NSwgMC4wMSwgMC4xNiwgMS4zNCk7XG4gIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cblxuQGtleWZyYW1lcyBleWUtYW5pbWEge1xuICAwJSB7XG4gICAgaGVpZ2h0OiA1cHg7XG4gIH1cbiAgNDIlIHtcbiAgICBoZWlnaHQ6IDVweDtcbiAgfVxuICA0NSUge1xuICAgIGhlaWdodDogMXB4O1xuICB9XG4gIDEwMCUge1xuICAgIGhlaWdodDogNXB4O1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNoYWRvdy1hbmltYSB7XG4gIDAlIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgbGVmdDogODBweDtcbiAgfVxuICAyNSUge1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBsZWZ0OiA4MHB4O1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGxlZnQ6IDgwcHg7XG4gIH1cbiAgNzUlIHtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgbGVmdDogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgbGVmdDogODBweDtcbiAgfVxufSJdfQ== */", "@media screen and (max-width: 990px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 23em;\n  }\n}\n@media screen and (max-width: 790px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 20em;\n  }\n}\n@media screen and (max-width: 690px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 18em;\n  }\n}\n@media screen and (max-width: 600px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 14em;\n  }\n}\n@media screen and (max-width: 500px) {\n  .page-not-found-text[_ngcontent-%COMP%] {\n    font-size: 10em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvNDA0L0M6XFxVc2Vyc1xcRXJpc1xcRG9jdW1lbnRzXFxsaXZlLXJlc3VtZS9zcmNcXGFwcFxcNDA0XFxwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiLCJzcmMvYXBwLzQwNC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSTtJQUNJLGVBQUE7RUNBTjtBQUNGO0FER0E7RUFFSTtJQUNJLGVBQUE7RUNGTjtBQUNGO0FES0E7RUFFSTtJQUNJLGVBQUE7RUNKTjtBQUNGO0FET0E7RUFFSTtJQUNJLGVBQUE7RUNOTjtBQUNGO0FEU0E7RUFFSTtJQUNJLGVBQUE7RUNSTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvNDA0L3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MHB4KSB7XHJcblxyXG4gICAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjNlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzkwcHgpIHtcclxuXHJcbiAgICAucGFnZS1ub3QtZm91bmQtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMGVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2OTBweCkge1xyXG5cclxuICAgIC5wYWdlLW5vdC1mb3VuZC10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDE4ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblxyXG4gICAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRlbTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuXHJcbiAgICAucGFnZS1ub3QtZm91bmQtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMGVtO1xyXG4gICAgfVxyXG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjNlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzkwcHgpIHtcbiAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMjBlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjkwcHgpIHtcbiAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMThlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTRlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgLnBhZ2Utbm90LWZvdW5kLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTBlbTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.html',
                styleUrls: ['./page-not-found.component.scss', './page-not-found.component.responsivity.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/404/page-not-found.module.ts":
/*!**********************************************!*\
  !*** ./src/app/404/page-not-found.module.ts ***!
  \**********************************************/
/*! exports provided: PageNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function() { return PageNotFoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found-routing.module */ "./src/app/404/page-not-found-routing.module.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/404/page-not-found.component.ts");




class PageNotFoundModule {
}
PageNotFoundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageNotFoundModule });
PageNotFoundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageNotFoundModule_Factory(t) { return new (t || PageNotFoundModule)(); }, imports: [[_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageNotFoundModule, { declarations: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]], imports: [_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundRoutingModule"]], exports: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_1__["PageNotFoundRoutingModule"]],
                declarations: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]],
                exports: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_aboutMe$$SRC_APP_ABOUT_ABOUT_COMPONENT_TS_1 = goog.getMsg("About me");
    I18N_0 = MSG_EXTERNAL_aboutMe$$SRC_APP_ABOUT_ABOUT_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:nav@@aboutMe␟1f3e393d5483be2d063bee208dbaa462793a59cd␟3562199946446423606:About me`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc about
     */ 
    const MSG_EXTERNAL_yearsOld$$SRC_APP_ABOUT_ABOUT_COMPONENT_TS_3 = goog.getMsg("years old");
    I18N_2 = MSG_EXTERNAL_yearsOld$$SRC_APP_ABOUT_ABOUT_COMPONENT_TS_3;
}
else {
    I18N_2 = $localize `:about@@yearsOld␟77280729e57b6f62675100eec0a0e00d8ec4fa5e␟2509424109113872121:years old`;
}
const _c4 = function (a1) { return ["fas", a1]; };
function AboutComponent_fa_icon_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 22);
} if (rf & 2) {
    const hobby_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", hobby_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, hobby_r4.icon));
} }
const _c5 = function (a1) { return ["fab", a1]; };
function AboutComponent_a_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const media_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", media_r5.http, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", media_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c5, media_r5.icon));
} }
class AboutComponent {
    constructor(dataService, library) {
        this.dataService = dataService;
        this.library = library;
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["fas"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["fab"]);
    }
    ngOnInit() {
        this.name = "Eris Aguilar"; // Sets here, your full name
        this.yearsOld = this.calcAge("1995-01-15"); // Sets here, your date birthday
        // Fetches the About information from the Data Service (about.json file).
        this.subscription = this.dataService
            .getAbout()
            .subscribe((about) => (this.aboutData = about));
    }
    ngOnDestroy() {
        // Only need to unsubscribe if its a multi event Observable
        this.subscription.unsubscribe();
    }
    calcAge(dateString) {
        const birthday = new Date(dateString);
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getFullYear() - 1970);
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconLibrary"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 44, vars: 4, consts: [["id", "about", "itemscope", "", "itemtype", "https://schema.org/AboutPage"], ["itemscope", "", "itemtype", "https://schema.org/Person", 1, "about-container"], ["itemprop", "jobTitle", "content", "Full-stack Java Developer"], ["itemprop", "knowsLanguage", "content", "en"], ["itemprop", "knowsLanguage", "content", "pt"], ["itemprop", "nationality", "content", "Brazil"], ["itemprop", "gender", "content", "Male"], ["itemprop", "email", "content", "itserisjohn@gmail.com"], ["itemprop", "birthDate", "content", "1993-06-29"], ["itemprop", "url", "content", "https://itserisjohn.github.io"], [1, "first-column"], ["itemprop", "name"], [1, "years-old"], ["itemprop", "yearsOld"], ["property", "description", "itemprop", "summary", 1, "text"], [1, "hobbies"], ["property", "description", "itemprop", "summary", 1, "text2"], ["class", "icon", "itemprop", "hobby", 3, "icon", "title", 4, "ngFor", "ngForOf"], [1, "second-column"], [1, "profile-picture"], [1, "social-media"], ["target", "_blank", "itemprop", "sameAs", 3, "href", 4, "ngFor", "ngForOf"], ["itemprop", "hobby", 1, "icon", 3, "icon", "title"], ["target", "_blank", "itemprop", "sameAs", 3, "href"], [1, "icon", 3, "icon", "title"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "meta", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "meta", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "meta", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "meta", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](21, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " I am an experienced software engineer/developer and UI/UX javascript specialist. I enjoy writing code both for fun and professionally. I have done work in software development, mobile application, front-end/back-end web, database server management, and game development. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Skilled in .NET Framework, C#, Entity Framework, SQL, ReactJS, Redux, AngularJS, Angular 7, HTML, Javascript, JQuery, VB.NET, Android using Java and Xamarin. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Bachelor of Science in Information Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Holy Cross of Davao College, Inc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " 2012-2016 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Hobbies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AboutComponent_fa_icon_39_Template, 1, 4, "fa-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AboutComponent_a_43_Template, 2, 5, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.yearsOld);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aboutData == null ? null : ctx.aboutData.hobbies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.aboutData == null ? null : ctx.aboutData.medias);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: ["#about[_ngcontent-%COMP%] {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  background-image: linear-gradient(0deg, #fff 44.44%, #d4e7fe 44.44%, #d4e7fe 0%, #fff 0%, #fff 94.44%, #d4e7fe 94.44%, #d4e7fe 100%);\n  background-size: 10px 1220px;\n}\n\n.about-container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  background-color: #fff;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  width: 85vw;\n  z-index: 2;\n  padding: 2em;\n  max-width: 1400px;\n}\n\n.about-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%] {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #7d7d7d;\n  font-size: 22px;\n  font-weight: normal;\n  text-transform: uppercase;\n  margin: 0;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: 600;\n  color: #222f5c;\n  margin: 5px 0 0 0;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  color: #7d7d7d;\n  margin-bottom: 10px;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.years-old[_ngcontent-%COMP%] {\n  color: #b2b6c6;\n  font-size: 18px;\n  font-style: italic;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #5e6788;\n  margin-right: 2em;\n  text-align: left;\n  min-height: 170px;\n  line-height: 1.5em;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text2[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #5e6788;\n  margin-right: 2em;\n  text-align: left;\n  line-height: 1.5em;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #555f81;\n  margin-right: 1em;\n  transition: 0.3s;\n}\n\n.about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #8087a1;\n}\n\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n  display: block;\n  width: 450px;\n  height: 450px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  border-radius: 99em;\n  background-image: url('eris-picture.jpg');\n  border: 3px solid #d4e7fe;\n}\n\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1em;\n}\n\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 60px;\n  color: #414c73;\n  margin: 0 20px 0 20px;\n  transition: 0.3s;\n}\n\n.about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #8087a1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFxFcmlzXFxEb2N1bWVudHNcXGxpdmUtcmVzdW1lL3NyY1xcYXBwXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7TUFBQSxzQkFBQTtFQUNBLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxvSUFBQTtFQVVBLDRCQUFBO0FDUkY7O0FEV0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxxQkFBQTtNQUFBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDUkY7O0FEVUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ1JKOztBRFdFO0VBQ0Usb0JBQUE7TUFBQSxZQUFBO0FDVEo7O0FEV0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FDVE47O0FEWUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNWTjs7QURhSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ1hOOztBRGVNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ2JSOztBRGdCTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDZFI7O0FEaUJNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDZlI7O0FEbUJJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDakJOOztBRG1CTTtFQUNFLGNBQUE7QUNqQlI7O0FEc0JFO0VBQ0Usb0JBQUE7TUFBQSxZQUFBO0FDcEJKOztBRHNCSTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUdBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFBQTtBQ3BCTjs7QUR1Qkk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNyQk47O0FEdUJNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDckJSOztBRHVCUTtFQUNFLGNBQUE7QUNyQlYiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhYm91dCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDBkZWcsXHJcbiAgICAjZmZmIDQ0LjQ0JSxcclxuICAgICNkNGU3ZmUgNDQuNDQlLFxyXG4gICAgI2Q0ZTdmZSAwJSxcclxuICAgICNmZmYgMCUsXHJcbiAgICAjZmZmIDk0LjQ0JSxcclxuICAgICNkNGU3ZmUgOTQuNDQlLFxyXG4gICAgI2Q0ZTdmZSAxMDAlXHJcbiAgKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMTIyMHB4O1xyXG59XHJcblxyXG4uYWJvdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xyXG4gIHdpZHRoOiA4NXZ3O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAuZmlyc3QtY29sdW1uIHtcclxuICAgIGZsZXgtZ3JvdzogMjtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGNvbG9yOiAjN2Q3ZDdkO1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICMyMjJmNWM7XHJcbiAgICAgIG1hcmdpbjogNXB4IDAgMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogIzdkN2Q3ZDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgJi55ZWFycy1vbGQge1xyXG4gICAgICAgIGNvbG9yOiAjYjJiNmM2O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYudGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogIzVlNjc4ODtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE3MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi50ZXh0MiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogIzVlNjc4ODtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICBjb2xvcjogIzU1NWY4MTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzgwODdhMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlY29uZC1jb2x1bW4ge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG5cclxuICAgIC5wcm9maWxlLXBpY3R1cmUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDk5ZW07XHJcbiAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogOTllbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOTllbTtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RlbXBsYXRlL2Fib3V0L2VyaXMtcGljdHVyZS5qcGdcIik7XHJcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNkNGU3ZmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvY2lhbC1tZWRpYSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG5cclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICBjb2xvcjogIzQxNGM3MztcclxuICAgICAgICBtYXJnaW46IDAgMjBweCAwIDIwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogIzgwODdhMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiI2Fib3V0IHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsICNmZmYgNDQuNDQlLCAjZDRlN2ZlIDQ0LjQ0JSwgI2Q0ZTdmZSAwJSwgI2ZmZiAwJSwgI2ZmZiA5NC40NCUsICNkNGU3ZmUgOTQuNDQlLCAjZDRlN2ZlIDEwMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMTIyMHB4O1xufVxuXG4uYWJvdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gIHdpZHRoOiA4NXZ3O1xuICB6LWluZGV4OiAyO1xuICBwYWRkaW5nOiAyZW07XG4gIG1heC13aWR0aDogMTQwMHB4O1xufVxuLmFib3V0LWNvbnRhaW5lciBwIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIHtcbiAgZmxleC1ncm93OiAyO1xufVxuLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIGgxIHtcbiAgY29sb3I6ICM3ZDdkN2Q7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwO1xufVxuLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIGgyIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIyMmY1YztcbiAgbWFyZ2luOiA1cHggMCAwIDA7XG59XG4uYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4gaDMge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjN2Q3ZDdkO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIHAueWVhcnMtb2xkIHtcbiAgY29sb3I6ICNiMmI2YzY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIHAudGV4dCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM1ZTY3ODg7XG4gIG1hcmdpbi1yaWdodDogMmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtaW4taGVpZ2h0OiAxNzBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIHAudGV4dDIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNWU2Nzg4O1xuICBtYXJnaW4tcmlnaHQ6IDJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIC5pY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogIzU1NWY4MTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4uYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4gLmljb246aG92ZXIge1xuICBjb2xvcjogIzgwODdhMTtcbn1cbi5hYm91dC1jb250YWluZXIgLnNlY29uZC1jb2x1bW4ge1xuICBmbGV4LWdyb3c6IDE7XG59XG4uYWJvdXQtY29udGFpbmVyIC5zZWNvbmQtY29sdW1uIC5wcm9maWxlLXBpY3R1cmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQ1MHB4O1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDk5ZW07XG4gIC1tb3otYm9yZGVyLXJhZGl1czogOTllbTtcbiAgYm9yZGVyLXJhZGl1czogOTllbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RlbXBsYXRlL2Fib3V0L2VyaXMtcGljdHVyZS5qcGdcIik7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNkNGU3ZmU7XG59XG4uYWJvdXQtY29udGFpbmVyIC5zZWNvbmQtY29sdW1uIC5zb2NpYWwtbWVkaWEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbi5hYm91dC1jb250YWluZXIgLnNlY29uZC1jb2x1bW4gLnNvY2lhbC1tZWRpYSAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgY29sb3I6ICM0MTRjNzM7XG4gIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5hYm91dC1jb250YWluZXIgLnNlY29uZC1jb2x1bW4gLnNvY2lhbC1tZWRpYSAuaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjODA4N2ExO1xufSJdfQ== */", "@media screen and (max-width: 1280px) {\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 380px;\n    height: 380px;\n  }\n}\n@media screen and (max-width: 1024px) {\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 370px;\n    height: 370px;\n  }\n}\n@media screen and (max-width: 960px) {\n  .about-container[_ngcontent-%COMP%] {\n    width: 80vw;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n\n  .first-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .first-column[_ngcontent-%COMP%]   p.years-old[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .first-column[_ngcontent-%COMP%]   .hobbies[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .second-column[_ngcontent-%COMP%] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column;\n    margin-top: 2em;\n  }\n  .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 360px;\n    height: 360px;\n    -ms-flex-item-align: center;\n        align-self: center;\n  }\n}\n@media screen and (max-width: 880px) {\n  #about[_ngcontent-%COMP%] {\n    background-size: 10px 1350px;\n  }\n\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    margin: 20px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-right: 0;\n  }\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 340px;\n    height: 340px;\n  }\n}\n@media screen and (max-width: 600px) {\n  #about[_ngcontent-%COMP%] {\n    background-size: 10px 1600px;\n  }\n\n  .about-container[_ngcontent-%COMP%] {\n    width: 75vw;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    margin: 0.5em;\n  }\n}\n@media screen and (max-width: 460px) {\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.years-old[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   p.text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin: 10px;\n  }\n\n  .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 280px;\n    height: 280px;\n  }\n  .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n@media screen and (max-width: 370px) {\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 300px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .about-container[_ngcontent-%COMP%] {\n    width: 80vw;\n    padding: 15px;\n  }\n  .about-container[_ngcontent-%COMP%]   .first-column[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .profile-picture[_ngcontent-%COMP%] {\n    width: 240px;\n    height: 240px;\n  }\n  .about-container[_ngcontent-%COMP%]   .second-column[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFxFcmlzXFxEb2N1bWVudHNcXGxpdmUtcmVzdW1lL3NyY1xcYXBwXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIiwic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUTtJQUNJLGVBQUE7RUNEVjtFRElNO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUNGVjtBQUNGO0FETUE7RUFFSTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDTE47QUFDRjtBRFFBO0VBRUk7SUFDSSxXQUFBO0lBQ0EsbUJBQUE7UUFBQSxlQUFBO0VDUE47O0VEWU07SUFDSSxlQUFBO0VDVFY7RURZTTtJQUNJLGVBQUE7RUNWVjtFRGFNO0lBQ0ksZUFBQTtFQ1hWO0VEY007SUFDSSxrQkFBQTtFQ1pWOztFRGdCRTtJQUNJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLDBCQUFBO1FBQUEsc0JBQUE7SUFDQSxlQUFBO0VDYk47RURlTTtJQUNJLFlBQUE7SUFDQSxhQUFBO0lBQ0EsMkJBQUE7UUFBQSxrQkFBQTtFQ2JWO0FBQ0Y7QURpQkE7RUFFSTtJQUNJLDRCQUFBO0VDaEJOOztFRHVCVTtJQUNJLGVBQUE7RUNwQmQ7RUR1QlU7SUFDSSxZQUFBO0VDckJkO0VEd0JVO0lBQ0ksZUFBQTtJQUNBLGVBQUE7RUN0QmQ7RUQwQk07SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ3hCVjtBQUNGO0FENEJBO0VBRUk7SUFDSSw0QkFBQTtFQzNCTjs7RUQ4QkU7SUFDSSxXQUFBO0VDM0JOO0VEK0JVO0lBQ0ksZUFBQTtFQzdCZDtFRGdDVTtJQUNJLGFBQUE7RUM5QmQ7QUFDRjtBRG1DQTtFQU1ZO0lBQ0ksZUFBQTtFQ3RDZDtFRHlDVTtJQUNJLGVBQUE7RUN2Q2Q7RUQ0Q2M7SUFDSSxlQUFBO0VDMUNsQjtFRDZDYztJQUNJLGVBQUE7RUMzQ2xCO0VEK0NVO0lBQ0ksZUFBQTtJQUNBLFlBQUE7RUM3Q2Q7O0VEb0RNO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUNqRFY7RURtRFU7SUFDSSxlQUFBO0VDakRkO0FBQ0Y7QURzREE7RUFFSTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDckROO0FBQ0Y7QUR3REE7RUFFSTtJQUNJLFdBQUE7SUFDQSxhQUFBO0VDdkROO0VEMkRVO0lBQ0ksZUFBQTtFQ3pEZDtFRCtEVTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDN0RkO0VEZ0VVO0lBQ0ksZUFBQTtFQzlEZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcblxyXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgLmZpcnN0LWNvbHVtbiBwLnRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2Vjb25kLWNvbHVtbiAucHJvZmlsZS1waWN0dXJlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDM4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM4MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBcclxuICAgIC5hYm91dC1jb250YWluZXIgLnNlY29uZC1jb2x1bW4gLnByb2ZpbGUtcGljdHVyZSB7XHJcbiAgICAgICAgd2lkdGg6IDM3MHB4O1xyXG4gICAgICAgIGhlaWdodDogMzcwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICBcclxuICAgIC5hYm91dC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuXHJcbiAgICAuZmlyc3QtY29sdW1uIHtcclxuICAgICAgICBcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcC55ZWFycy1vbGQgeyAgICBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmhvYmJpZXMge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWNvbmQtY29sdW1uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xyXG5cclxuICAgICAgICAucHJvZmlsZS1waWN0dXJlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM2MHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xyXG5cclxuICAgICNhYm91dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMHB4IDEzNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtY29udGFpbmVyIHtcclxuXHJcbiAgICAgICAgLmZpcnN0LWNvbHVtbiB7XHJcbiAgICBcclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLmljb24geyBcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIHAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuc2Vjb25kLWNvbHVtbiAucHJvZmlsZS1waWN0dXJlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDM0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM0MHB4O1xyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblxyXG4gICAgI2Fib3V0IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMTYwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA3NXZ3O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5maXJzdC1jb2x1bW4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuNWVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcclxuICAgIFxyXG4gICAgLmFib3V0LWNvbnRhaW5lciB7XHJcblxyXG4gICAgICAgIC5maXJzdC1jb2x1bW4ge1xyXG5cclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHAge1xyXG5cclxuICAgICAgICAgICAgICAgICYueWVhcnMtb2xkIHsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICYudGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY29uZC1jb2x1bW4ge1xyXG5cclxuICAgICAgICAucHJvZmlsZS1waWN0dXJlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG5cclxuICAgICAgICAgICAgLnNvY2lhbC1tZWRpYSAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XHJcblxyXG4gICAgLmFib3V0LWNvbnRhaW5lciAuc2Vjb25kLWNvbHVtbiAucHJvZmlsZS1waWN0dXJlIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuXHJcbiAgICAuYWJvdXQtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogODB2dztcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICAgICAgICAuZmlyc3QtY29sdW1uIHtcclxuXHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlY29uZC1jb2x1bW4ge1xyXG4gICAgXHJcbiAgICAgICAgICAgIC5wcm9maWxlLXBpY3R1cmUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNvY2lhbC1tZWRpYSAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5hYm91dC1jb250YWluZXIgLmZpcnN0LWNvbHVtbiBwLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuYWJvdXQtY29udGFpbmVyIC5zZWNvbmQtY29sdW1uIC5wcm9maWxlLXBpY3R1cmUge1xuICAgIHdpZHRoOiAzODBweDtcbiAgICBoZWlnaHQ6IDM4MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmFib3V0LWNvbnRhaW5lciAuc2Vjb25kLWNvbHVtbiAucHJvZmlsZS1waWN0dXJlIHtcbiAgICB3aWR0aDogMzcwcHg7XG4gICAgaGVpZ2h0OiAzNzBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLmFib3V0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgLmZpcnN0LWNvbHVtbiBoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5maXJzdC1jb2x1bW4gaDIge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuICAuZmlyc3QtY29sdW1uIHAueWVhcnMtb2xkIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmZpcnN0LWNvbHVtbiAuaG9iYmllcyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnNlY29uZC1jb2x1bW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG4gIH1cbiAgLnNlY29uZC1jb2x1bW4gLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgd2lkdGg6IDM2MHB4O1xuICAgIGhlaWdodDogMzYwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xuICAjYWJvdXQge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTBweCAxMzUwcHg7XG4gIH1cblxuICAuYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4gaDIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICAuYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4gLmljb24ge1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuICAuYWJvdXQtY29udGFpbmVyIC5maXJzdC1jb2x1bW4gcC50ZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIC5hYm91dC1jb250YWluZXIgLnNlY29uZC1jb2x1bW4gLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgd2lkdGg6IDM0MHB4O1xuICAgIGhlaWdodDogMzQwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICNhYm91dCB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMHB4IDE2MDBweDtcbiAgfVxuXG4gIC5hYm91dC1jb250YWluZXIge1xuICAgIHdpZHRoOiA3NXZ3O1xuICB9XG4gIC5hYm91dC1jb250YWluZXIgLmZpcnN0LWNvbHVtbiBoMiB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICB9XG4gIC5hYm91dC1jb250YWluZXIgLmZpcnN0LWNvbHVtbiAuaWNvbiB7XG4gICAgbWFyZ2luOiAwLjVlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIGgxIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIGgyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIHAueWVhcnMtb2xkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmFib3V0LWNvbnRhaW5lciAuZmlyc3QtY29sdW1uIHAudGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5hYm91dC1jb250YWluZXIgLmZpcnN0LWNvbHVtbiAuaWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgfVxuXG4gIC5zZWNvbmQtY29sdW1uIC5wcm9maWxlLXBpY3R1cmUge1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICB9XG4gIC5zZWNvbmQtY29sdW1uIC5wcm9maWxlLXBpY3R1cmUgLnNvY2lhbC1tZWRpYSAuaWNvbiB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuICAuYWJvdXQtY29udGFpbmVyIC5zZWNvbmQtY29sdW1uIC5wcm9maWxlLXBpY3R1cmUge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuYWJvdXQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogODB2dztcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC5hYm91dC1jb250YWluZXIgLmZpcnN0LWNvbHVtbiBoMiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5hYm91dC1jb250YWluZXIgLnNlY29uZC1jb2x1bW4gLnByb2ZpbGUtcGljdHVyZSB7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIGhlaWdodDogMjQwcHg7XG4gIH1cbiAgLmFib3V0LWNvbnRhaW5lciAuc2Vjb25kLWNvbHVtbiAuc29jaWFsLW1lZGlhIC5pY29uIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-about",
                templateUrl: "./about.component.html",
                styleUrls: ["./about.component.scss", "./about.component.responsivity.scss"],
            }]
    }], function () { return [{ type: _core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");





// Any URL apart from the root domain is going to be rendered as 'page-not-found'.
const routes = [
    { path: '', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_2__["ResumeComponent"] },
    { path: 'about', redirectTo: '/#about' },
    { path: 'experience', redirectTo: '/#experience' },
    { path: 'experiences', redirectTo: '/#experience' },
    { path: 'posts', redirectTo: '/#posts' },
    { path: 'contact', redirectTo: '/#contact' },
    { path: '**', redirectTo: '/page-not-found' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                // In order to get anchor / fragment scrolling to work at all, we need to
                // enable it on the router.
                anchorScrolling: "enabled",
                // Once the above is enabled, the fragment link will only work on the
                // first click. This is because, by default, the Router ignores requests
                // to navigate to the SAME URL that is currently rendered. Unfortunately,
                // the fragment scrolling is powered by Navigation Events. As such, we
                // have to tell the Router to re-trigger the Navigation Events even if we
                // are navigating to the same URL.
                onSameUrlNavigation: "reload"
            })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        // In order to get anchor / fragment scrolling to work at all, we need to
                        // enable it on the router.
                        anchorScrolling: "enabled",
                        // Once the above is enabled, the fragment link will only work on the
                        // first click. This is because, by default, the Router ignores requests
                        // to navigate to the SAME URL that is currently rendered. Unfortunately,
                        // the fragment scrolling is powered by Navigation Events. As such, we
                        // have to tell the Router to re-trigger the Navigation Events even if we
                        // are navigating to the same URL.
                        onSameUrlNavigation: "reload"
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(titleService, metaTagService) {
        this.titleService = titleService;
        this.metaTagService = metaTagService;
        this.title = "Eris Aguilar - Senior Software Developer";
    }
    ngOnInit() {
        this.titleService.setTitle(this.title);
        this.metaTagService.addTags([
            {
                name: "keywords",
                content: "Web Developer, Java Developer, Full-stack Java Developer, DevOps Engineer, Android Developer, Eris Aguilar Live Resume, Eris Aguilar Resume, Eris Aguilar CV, Curriculum Eris Aguilar, GBASTOS Resumo, gbastos live resume",
            },
            { name: "robots", content: "index, follow" },
            { name: "author", content: "Eris Aguilar" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { name: "date", content: "2020-05-12", scheme: "YYYY-MM-DD" },
            { charset: "UTF-8" },
        ]);
        this.metaTagService.updateTag({
            name: "description",
            content: "Hello, I'm a Full-stack Web Developer with 10+ years of experience designing web and mobile projects. Find out more in my live-resume!",
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.css"],
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _resume_resume_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume/resume.module */ "./src/app/resume/resume.module.ts");
/* harmony import */ var _404_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./404/page-not-found-routing.module */ "./src/app/404/page-not-found-routing.module.ts");
/* harmony import */ var _404_page_not_found_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./404/page-not-found.module */ "./src/app/404/page-not-found.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/en */ "./node_modules/@angular/common/locales/en.js");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common_locales_extra_pt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/extra/pt */ "./node_modules/@angular/common/locales/extra/pt.js");
/* harmony import */ var _angular_common_locales_extra_pt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_extra_pt__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/analytics */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-analytics.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_16__);



















Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_9___default.a, "en");
Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_10___default.a, "pt-BR", _angular_common_locales_extra_pt__WEBPACK_IMPORTED_MODULE_11___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
            _resume_resume_module__WEBPACK_IMPORTED_MODULE_5__["ResumeModule"],
            _404_page_not_found_module__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundModule"],
            _404_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"],
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_14__["AngularFireAnalyticsModule"],
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_16__["LightboxModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
        _resume_resume_module__WEBPACK_IMPORTED_MODULE_5__["ResumeModule"],
        _404_page_not_found_module__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundModule"],
        _404_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"],
        _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_14__["AngularFireAnalyticsModule"],
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_16__["LightboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                    _resume_resume_module__WEBPACK_IMPORTED_MODULE_5__["ResumeModule"],
                    _404_page_not_found_module__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundModule"],
                    _404_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundRoutingModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_15__["environment"].firebaseConfig),
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"],
                    _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_14__["AngularFireAnalyticsModule"],
                    ngx_lightbox__WEBPACK_IMPORTED_MODULE_16__["LightboxModule"],
                ],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.service */ "./src/app/contact/contact.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_successfulSubmit$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_1 = goog.getMsg("Thank you for contacting me, I'll reply to you very soon.");
    I18N_0 = MSG_EXTERNAL_successfulSubmit$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:contact@@successfulSubmit␟90838a03700282a0b032981a76d2139e51374649␟6695289924857055202:Thank you for contacting me, I'll reply to you very soon.`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_errorSubmit$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_3 = goog.getMsg("Sorry, there is an instability, try again later, or contact me via email or social media.");
    I18N_2 = MSG_EXTERNAL_errorSubmit$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_3;
}
else {
    I18N_2 = $localize `:contact@@errorSubmit␟506e037c9a29a4c49e9a86e982e285f6512427e9␟4877802083023114161:Sorry, there is an instability, try again later, or contact me via email or social media.`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_contact$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_5 = goog.getMsg("Contact");
    I18N_4 = MSG_EXTERNAL_contact$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_5;
}
else {
    I18N_4 = $localize `:nav@@contact␟34746fb1c7f3d2194d99652bdff89e6e14c9c4f4␟7922989125096435449:Contact`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_name$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_7 = goog.getMsg("Your name:");
    I18N_6 = MSG_EXTERNAL_name$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_7;
}
else {
    I18N_6 = $localize `:contact@@name␟78235c38d8f083b2e3b27c168b92fc389f22d5ea␟7961815355441875063:Your name:`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_namePlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_9 = goog.getMsg("Mark");
    I18N_8 = MSG_EXTERNAL_namePlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_9;
}
else {
    I18N_8 = $localize `:contact@@namePlaceholder␟b58719bcb9184e1a7884d00d22d10899d59bf295␟1226060325201042854:Mark`;
}
const _c10 = ["placeholder", I18N_8];
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_email$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_12 = goog.getMsg("Email:");
    I18N_11 = MSG_EXTERNAL_email$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_12;
}
else {
    I18N_11 = $localize `:contact@@email␟91b96d7228b6e05c238fa4e39abfc17ad51a6eef␟6631334172623029500:Email:`;
}
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_emailPlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_14 = goog.getMsg("mark@gmail.com");
    I18N_13 = MSG_EXTERNAL_emailPlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_14;
}
else {
    I18N_13 = $localize `:contact@@emailPlaceholder␟1673eb01cc5c903c16edba53a05ab6105d0856b0␟8840842909874223426:mark@gmail.com`;
}
const _c15 = ["placeholder", I18N_13];
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_message$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_17 = goog.getMsg("Your message:");
    I18N_16 = MSG_EXTERNAL_message$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_17;
}
else {
    I18N_16 = $localize `:contact@@message␟38b9c0422f08a662cb5cf4e2c3b7b006dc19ca46␟7108908926006173610:Your message:`;
}
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_messagePlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_19 = goog.getMsg("Write here your message... I will reply to you soon.");
    I18N_18 = MSG_EXTERNAL_messagePlaceholder$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_19;
}
else {
    I18N_18 = $localize `:contact@@messagePlaceholder␟5dbab65c47e2519c192302f4cd631f8f763d32a0␟4695044849168425148:Write here your message... I will reply to you soon.`;
}
const _c20 = ["placeholder", I18N_18];
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_send$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_22 = goog.getMsg("Send");
    I18N_21 = MSG_EXTERNAL_send$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS_22;
}
else {
    I18N_21 = $localize `:contact@@send␟2c5ff8fa9c9aaec93f97e37c9a0edcd797194573␟6490688569532630280:Send`;
}
const _c23 = ["value", I18N_21];
function ContactComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.name);
} }
function ContactComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r7.faEnvelope);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r7.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.email);
} }
function ContactComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r8.faPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.phone);
} }
function ContactComponent_p_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r9.faMapMarkerAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.location);
} }
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_requiredNameError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___25 = goog.getMsg("The name is required.");
    I18N_24 = MSG_EXTERNAL_requiredNameError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___25;
}
else {
    I18N_24 = $localize `:contact@@requiredNameError␟84dd68358deff2c306c9e1f1e1ea36ac1399187f␟2251827586065267500:The name is required.`;
}
function ContactComponent_div_30_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_invalidNameError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___27 = goog.getMsg("Please, provide a valid name.");
    I18N_26 = MSG_EXTERNAL_invalidNameError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___27;
}
else {
    I18N_26 = $localize `:contact@@invalidNameError␟563120cc8523ffbb5f3bdf377adae708bcfc7782␟8310581068201003485:Please, provide a valid name.`;
}
function ContactComponent_div_30_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_30_small_1_Template, 2, 0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactComponent_div_30_small_2_Template, 2, 0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.senderName.errors == null ? null : ctx_r11.senderName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.senderName.errors == null ? null : ctx_r11.senderName.errors.pattern);
} }
var I18N_28;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_requiredEmailError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___29 = goog.getMsg("The email is required.");
    I18N_28 = MSG_EXTERNAL_requiredEmailError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___29;
}
else {
    I18N_28 = $localize `:contact@@requiredEmailError␟02e28ad299c02273b0031dd65a1facf425b771c3␟6618823522652189267:The email is required.`;
}
function ContactComponent_div_36_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var I18N_30;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_invalidEmailError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___31 = goog.getMsg("Please, provide a valid email address.");
    I18N_30 = MSG_EXTERNAL_invalidEmailError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___31;
}
else {
    I18N_30 = $localize `:contact@@invalidEmailError␟18ede2f6adb0ef80114915c53dca42cb0c6a986f␟3304023609309135379:Please, provide a valid email address.`;
}
function ContactComponent_div_36_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_36_small_1_Template, 2, 0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactComponent_div_36_small_2_Template, 2, 0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.senderEmail.errors == null ? null : ctx_r12.senderEmail.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.senderEmail.errors == null ? null : ctx_r12.senderEmail.errors.pattern);
} }
var I18N_32;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc contact
     */ 
    const MSG_EXTERNAL_requiredMessageError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___33 = goog.getMsg("The message is required.");
    I18N_32 = MSG_EXTERNAL_requiredMessageError$$SRC_APP_CONTACT_CONTACT_COMPONENT_TS___33;
}
else {
    I18N_32 = $localize `:contact@@requiredMessageError␟24552e065fcea281bd42c77a67fb5932a27edbdf␟1849854291408426034:The message is required.`;
}
function ContactComponent_div_42_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_42_small_1_Template, 2, 0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.senderMessage.errors == null ? null : ctx_r13.senderMessage.errors.required);
} }
const _c34 = function (a0) { return { fade: a0 }; };
const _c35 = function (a0) { return { loading: a0 }; };
class ContactComponent {
    constructor(contactService) {
        this.contactService = contactService;
        this.isLoading = false;
        this.hasBeenSubmited = false;
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[A-zÀ-ú ]*"),
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
            ]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    get senderEmail() {
        return this.contactForm.get("email");
    }
    get senderName() {
        return this.contactForm.get("name");
    }
    get senderMessage() {
        return this.contactForm.get("message");
    }
    get options() {
        return this.contactForm.get("options");
    }
    ngOnInit() {
        this.name = "Eris Aguilar";
        this.email = "itserisjohn@gmail.com";
        this.phone = "";
        this.location = "Davao City - Philippines";
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"];
        this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPhone"];
        this.faMapMarkerAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMapMarkerAlt"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTimes"];
    }
    saveContact(contact) {
        this.contactService
            .createContact(contact)
            .then(() => {
            this.displayUserInterfaceMessage(true);
        })
            .catch((error) => {
            this.displayUserInterfaceMessage(false);
        });
    }
    displayUserInterfaceMessage(hasBeenSuccessfuly) {
        this.isLoading = false;
        this.hasBeenSubmited = true;
        this.feedbackStatus = hasBeenSuccessfuly ? "success" : "error";
        this.contactForm.reset();
    }
    closeFeedbackMessage() {
        this.hasBeenSubmited = false;
        this.feedbackStatus = "";
    }
    onSubmit(contactForm) {
        this.isLoading = true;
        const contactValues = {
            name: this.senderName.value,
            email: this.senderEmail.value,
            message: this.senderMessage.value,
            date: new Date(),
        };
        this.saveContact(contactValues);
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 47, vars: 23, consts: [["id", "contact", "itemscope", "", "itemtype", "https://schema.org/ContactPage"], [1, "feedback-container", 3, "ngClass"], [1, "success"], ["title", "Close", 1, "icon", 3, "icon", "click"], [1, "error"], [1, "container", 3, "ngClass"], [1, "left-side"], [1, "title"], [1, "top-container"], [1, "picture"], [1, "info"], ["class", "name", 4, "ngIf"], ["class", "email", 4, "ngIf"], ["class", "phone", 4, "ngIf"], ["class", "location", 4, "ngIf"], [1, "bottom-container"], [3, "formGroup", "ngClass", "ngSubmit"], ["contactNgForm", "ngForm"], [1, "form-group"], ["for", "name"], ["type", "text", "name", "name", "formControlName", "name", 6, "placeholder"], ["class", "warnings", 4, "ngIf"], ["for", "email"], ["type", "email", "name", "email", "formControlName", "email", "required", "", 6, "placeholder"], ["for", "message"], ["name", "message", "formControlName", "message", "required", "", 6, "placeholder"], ["type", "submit", 6, "value"], [1, "right-side"], [1, "half-circle"], [1, "name"], ["itemprop", "name"], [1, "email"], ["title", "Email", 1, "icon", 3, "icon"], ["itemprop", "email", 3, "href"], [1, "phone"], ["title", "Phone", 1, "icon", 3, "icon"], ["itemprop", "telephone"], [1, "location"], ["title", "City", 1, "icon", 3, "icon"], ["itemprop", "city"], [1, "warnings"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_fa_icon_click_5_listener() { return ctx.closeFeedbackMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_fa_icon_click_9_listener() { return ctx.closeFeedbackMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](14, I18N_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ContactComponent_p_18_Template, 3, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ContactComponent_p_19_Template, 4, 3, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ContactComponent_p_20_Template, 4, 2, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ContactComponent_p_21_Template, 4, 2, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return ctx.onSubmit(_r10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](27, I18N_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](29, _c10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ContactComponent_div_30_Template, 3, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](33, I18N_11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](35, _c15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ContactComponent_div_36_Template, 3, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](39, I18N_16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "textarea", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](41, _c20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ContactComponent_div_42_Template, 2, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](44, _c23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.feedbackStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTimes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTimes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c34, ctx.hasBeenSubmited));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c35, ctx.isLoading));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.senderName.invalid && ctx.senderName.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.senderName.invalid && ctx.senderName.touched || ctx.senderName.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.senderEmail.invalid && ctx.senderEmail.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.senderEmail.invalid && ctx.senderEmail.touched || ctx.senderEmail.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.senderMessage.invalid && ctx.senderMessage.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.senderMessage.invalid && ctx.senderMessage.touched || ctx.senderMessage.dirty);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: ["#contact[_ngcontent-%COMP%] {\n  top: -4em;\n  position: relative;\n  -ms-flex-pack: center;\n      justify-content: center;\n  background-color: #d4e7fe;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  padding: 1em;\n  border-radius: 15px;\n  z-index: 3;\n  top: 50%;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  margin: 0 1em;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  font-size: 22px;\n  top: 2px;\n  position: relative;\n  cursor: pointer;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #656565;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  display: none;\n  color: #77242c;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\n  display: none;\n  color: #373837;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container.success[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #c4e4c6;\n  border: 1px solid #cecece;\n  -webkit-animation: fadeIn 1s;\n  animation: fadeIn 1s;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container.success[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%] {\n  display: inline;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container.error[_ngcontent-%COMP%] {\n  display: block;\n  background-color: #e6adb2;\n  border: 1px solid #d49399;\n  -webkit-animation: fadeIn 1s;\n  animation: fadeIn 1s;\n}\n#contact[_ngcontent-%COMP%]   .feedback-container.error[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  display: inline;\n}\n#contact[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 105%;\n  bottom: -1em;\n  right: 0;\n  z-index: 1;\n}\n#contact[_ngcontent-%COMP%]   .half-circle[_ngcontent-%COMP%] {\n  width: 550px;\n  height: 450px;\n  background-color: #c1d5ee;\n  border-top-left-radius: 100%;\n  border: 0;\n  border-right: 0;\n  border-bottom: 0;\n  box-sizing: border-box;\n  position: absolute;\n  bottom: -1em;\n  right: 0;\n  z-index: 0;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  width: 85vw;\n  max-width: 1400px;\n  opacity: 1;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n  -ms-flex-positive: 4;\n      flex-grow: 4;\n  z-index: 2;\n  margin-bottom: 1em;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 600;\n  color: #222f5c;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #fff;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  padding: 1em;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n  display: block;\n  width: 110px;\n  height: 110px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  border-radius: 99em;\n  background-image: url('eris-picture.jpg');\n  border: 1px solid #d4e7fe;\n  margin-right: 1em;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: #222f5c;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #646d8d;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #646d8d;\n  font-weight: 600;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #222f5c;\n  margin-bottom: 10px;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  padding: 1em;\n  margin-top: 1em;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 1em;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .warnings[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  color: red;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #222f5c;\n  margin-bottom: 5px;\n  margin-left: 10px;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 10px 0 10px 15px;\n  border: 0;\n  border-radius: 15px;\n  background-color: #f6f6f6;\n  color: #848484;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text].is-invalid[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email].is-invalid[_ngcontent-%COMP%] {\n  border: 2px solid red;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  background-color: #70c576;\n  font-size: 22px;\n  color: #fff;\n  padding: 1em;\n  border: 0;\n  border-radius: 15px;\n  text-transform: uppercase;\n  font-weight: 600;\n  cursor: pointer;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit].is-invalid[_ngcontent-%COMP%] {\n  border: 2px solid red;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\n  color: #2c612f;\n  background-color: #68bd6e;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 10px 0 10px 15px;\n  border: 0;\n  border-radius: 15px;\n  background-color: #f6f6f6;\n  color: #848484;\n  font-weight: 600;\n  margin-bottom: 5px;\n  font-family: \"Montserrat\", sans-serif;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form.loading[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.6;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form.ng-invalid[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.6;\n  cursor: pointer;\n}\n#contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n  -ms-flex-positive: 6;\n      flex-grow: 6;\n}\n#contact[_ngcontent-%COMP%]   .container.fade[_ngcontent-%COMP%] {\n  pointer-events: none;\n  -webkit-animation: fadeOut 1s;\n  animation: fadeOut 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0.3;\n  }\n}\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0.3;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXEVyaXNcXERvY3VtZW50c1xcbGl2ZS1yZXN1bWUvc3JjXFxhcHBcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO01BQUEsdUJBQUE7RUFDQSx5QkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLCtDQUFBO0VBQ0EsYUFBQTtBQ0NKO0FEQ0k7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ047QURDTTtFQUNFLGNBQUE7QUNDUjtBREdJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDRE47QURJSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FDRk47QURLSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FDSE47QURNSTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQ0pOO0FETU07RUFDRSxlQUFBO0FDSlI7QURPSTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQ0xOO0FET007RUFDRSxlQUFBO0FDTFI7QURVRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ1JKO0FEV0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBR0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ1RKO0FEWUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ1ZKO0FEWUk7RUFDRSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNWTjtBRGFRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1hWO0FEZU07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxZQUFBO0FDYlI7QURlUTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDYlY7QURpQlU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNmWjtBRGtCVTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ2hCWjtBRG1CVTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDakJaO0FEb0JVO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDbEJaO0FEdUJNO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNyQlI7QUR1QlE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwwQkFBQTtNQUFBLHNCQUFBO0FDckJWO0FEdUJVO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtNQUFBLHNCQUFBO0FDckJaO0FEd0JjO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FDdEJoQjtBRDJCVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDekJaO0FENEJVO0VBQ0UscUNBQUE7QUMxQlo7QUQ2QlU7O0VBRUUsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQzNCWjtBRDZCWTs7RUFDRSxxQkFBQTtBQzFCZDtBRDhCVTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUM1Qlo7QUQ4Qlk7RUFDRSxxQkFBQTtBQzVCZDtBRCtCWTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQzdCZDtBRGlDVTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtBQy9CWjtBRGtDVTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQ2hDWjtBRG9DWTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNsQ2Q7QUR5Q0k7RUFDRSxvQkFBQTtNQUFBLFlBQUE7QUN2Q047QUQwQ0k7RUFDRSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FDeENOO0FENkNBO0VBQ0U7SUFDRSxVQUFBO0VDMUNGO0VENENBO0lBQ0UsVUFBQTtFQzFDRjtBQUNGO0FEb0NBO0VBQ0U7SUFDRSxVQUFBO0VDMUNGO0VENENBO0lBQ0UsVUFBQTtFQzFDRjtBQUNGO0FENkNBO0VBQ0U7SUFDRSxVQUFBO0VDM0NGO0VENkNBO0lBQ0UsWUFBQTtFQzNDRjtBQUNGO0FEcUNBO0VBQ0U7SUFDRSxVQUFBO0VDM0NGO0VENkNBO0lBQ0UsWUFBQTtFQzNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhY3Qge1xyXG4gIHRvcDogLTRlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZTdmZTtcclxuXHJcbiAgLmZlZWRiYWNrLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xyXG4gICAgbWFyZ2luOiAwIDFlbTtcclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIHRvcDogMnB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjNjU2NTY1O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5lcnJvciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjNzcyNDJjO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWNjZXNzIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgY29sb3I6ICMzNzM4Mzc7XHJcbiAgICB9XHJcblxyXG4gICAgJi5zdWNjZXNzIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjNGU0YzY7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWNlY2U7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMXM7XHJcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIDFzO1xyXG5cclxuICAgICAgLnN1Y2Nlc3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5lcnJvciB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZhZGIyO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDQ5Mzk5O1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDFzO1xyXG4gICAgICBhbmltYXRpb246IGZhZGVJbiAxcztcclxuXHJcbiAgICAgIC5lcnJvciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaWxsdXN0cmF0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTA1JTtcclxuICAgIGJvdHRvbTogLTFlbTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gIC5oYWxmLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MxZDVlZTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTFlbTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogODV2dztcclxuICAgIG1heC13aWR0aDogMTQwMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICAubGVmdC1zaWRlIHtcclxuICAgICAgZmxleC1ncm93OiA0O1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcblxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBjb2xvcjogIzIyMmY1YztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50b3AtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcblxyXG4gICAgICAgIC5waWN0dXJlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDk5ZW07XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGVtcGxhdGUvYWJvdXQvZXJpcy1waWN0dXJlLmpwZ1wiKTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGU3ZmU7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbmZvIHtcclxuICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogIzY0NmQ4ZDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgOHB4IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjQ2ZDhkO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYm90dG9tLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcblxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAud2FybmluZ3Mge1xyXG4gICAgICAgICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbiAgICAgICAgICBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgICAgICAgICAgY29sb3I6ICM4NDg0ODQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcbiAgICAgICAgICAgICYuaXMtaW52YWxpZCB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3MGM1NzY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAmLmlzLWludmFsaWQge1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMyYzYxMmY7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY4YmQ2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODQ4NDg0O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmLmxvYWRpbmcge1xyXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYubmctaW52YWxpZCB7XHJcbiAgICAgICAgICAgIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQtc2lkZSB7XHJcbiAgICAgIGZsZXgtZ3JvdzogNjtcclxuICAgIH1cclxuXHJcbiAgICAmLmZhZGUge1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVPdXQgMXM7XHJcbiAgICAgIGFuaW1hdGlvbjogZmFkZU91dCAxcztcclxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDAuMztcclxuICB9XHJcbn1cclxuIiwiI2NvbnRhY3Qge1xuICB0b3A6IC00ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGU3ZmU7XG59XG4jY29udGFjdCAuZmVlZGJhY2stY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHotaW5kZXg6IDM7XG4gIHRvcDogNTAlO1xuICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgbWFyZ2luOiAwIDFlbTtcbn1cbiNjb250YWN0IC5mZWVkYmFjay1jb250YWluZXIgLmljb24ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0b3A6IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jY29udGFjdCAuZmVlZGJhY2stY29udGFpbmVyIC5pY29uOmhvdmVyIHtcbiAgY29sb3I6ICM2NTY1NjU7XG59XG4jY29udGFjdCAuZmVlZGJhY2stY29udGFpbmVyIHAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiNjb250YWN0IC5mZWVkYmFjay1jb250YWluZXIgLmVycm9yIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgY29sb3I6ICM3NzI0MmM7XG59XG4jY29udGFjdCAuZmVlZGJhY2stY29udGFpbmVyIC5zdWNjZXNzIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgY29sb3I6ICMzNzM4Mzc7XG59XG4jY29udGFjdCAuZmVlZGJhY2stY29udGFpbmVyLnN1Y2Nlc3Mge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0ZTRjNjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlY2VjZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAxcztcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMXM7XG59XG4jY29udGFjdCAuZmVlZGJhY2stY29udGFpbmVyLnN1Y2Nlc3MgLnN1Y2Nlc3Mge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4jY29udGFjdCAuZmVlZGJhY2stY29udGFpbmVyLmVycm9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmFkYjI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNDkzOTk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMXM7XG4gIGFuaW1hdGlvbjogZmFkZUluIDFzO1xufVxuI2NvbnRhY3QgLmZlZWRiYWNrLWNvbnRhaW5lci5lcnJvciAuZXJyb3Ige1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4jY29udGFjdCAuaWxsdXN0cmF0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwNSU7XG4gIGJvdHRvbTogLTFlbTtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4jY29udGFjdCAuaGFsZi1jaXJjbGUge1xuICB3aWR0aDogNTUwcHg7XG4gIGhlaWdodDogNDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMWQ1ZWU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItYm90dG9tOiAwO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xZW07XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAwO1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiA4NXZ3O1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgb3BhY2l0eTogMTtcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSB7XG4gIGZsZXgtZ3JvdzogNDtcbiAgei1pbmRleDogMjtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC50aXRsZSBoMSB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyMjJmNWM7XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLnRvcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgcGFkZGluZzogMWVtO1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC50b3AtY29udGFpbmVyIC5waWN0dXJlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogOTllbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RlbXBsYXRlL2Fib3V0L2VyaXMtcGljdHVyZS5qcGdcIik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGU3ZmU7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC50b3AtY29udGFpbmVyIC5pbmZvIC5pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogIzIyMmY1Yztcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAudG9wLWNvbnRhaW5lciAuaW5mbyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzY0NmQ4ZDtcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAudG9wLWNvbnRhaW5lciAuaW5mbyBwIHtcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gIGNvbG9yOiAjNjQ2ZDhkO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC50b3AtY29udGFpbmVyIC5pbmZvIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyMjJmNWM7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgcGFkZGluZzogMWVtO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSAuZm9ybS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIC5mb3JtLWdyb3VwIC53YXJuaW5ncyBzbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogcmVkO1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMjIyZjVjO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXQge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBpbnB1dFt0eXBlPXRleHRdLFxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXRbdHlwZT1lbWFpbF0ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgY29sb3I6ICM4NDg0ODQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGlucHV0W3R5cGU9dGV4dF0uaXMtaW52YWxpZCxcbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGlucHV0W3R5cGU9ZW1haWxdLmlzLWludmFsaWQge1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBjNTc2O1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdLmlzLWludmFsaWQge1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICBjb2xvcjogIzJjNjEyZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4YmQ2ZTtcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIHRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGNvbG9yOiAjODQ4NDg0O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbn1cbiNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtLmxvYWRpbmcge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC42O1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0ubmctaW52YWxpZCBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jY29udGFjdCAuY29udGFpbmVyIC5yaWdodC1zaWRlIHtcbiAgZmxleC1ncm93OiA2O1xufVxuI2NvbnRhY3QgLmNvbnRhaW5lci5mYWRlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlT3V0IDFzO1xuICBhbmltYXRpb246IGZhZGVPdXQgMXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZU91dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxufSJdfQ== */", "@media screen and (max-width: 1400px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n    -ms-flex-positive: 3;\n        flex-grow: 3;\n  }\n}\n@media screen and (max-width: 1280px) {\n  #contact[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #contact[_ngcontent-%COMP%]   .half-circle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n    -ms-flex-positive: 0;\n        flex-grow: 0;\n  }\n}\n@media screen and (max-width: 600px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    padding: 0.7em;\n    -ms-flex-pack: center;\n        justify-content: center;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .picture[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 18px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n    padding: 0.7em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 0.7em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text].is-invalid[_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email].is-invalid[_ngcontent-%COMP%] {\n    border: 1px solid red;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit].is-invalid[_ngcontent-%COMP%] {\n    border: 1px solid red;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 420px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n    padding: 0.5em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n    padding: 0.5em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 0.5em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 370px) {\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n    padding: 0.5em;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  #contact[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXEVyaXNcXERvY3VtZW50c1xcbGl2ZS1yZXN1bWUvc3JjXFxhcHBcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSVE7SUFDSSxvQkFBQTtRQUFBLFlBQUE7RUNGVjtFREtNO0lBQ0ksb0JBQUE7UUFBQSxZQUFBO0VDSFY7QUFDRjtBRE9BO0VBSVE7SUFDRyxhQUFBO0VDUlQ7RURXTTtJQUNJLGFBQUE7RUNUVjtFRGNVO0lBQ0ksb0JBQUE7UUFBQSxZQUFBO0VDWmQ7RURlVTtJQUNJLG9CQUFBO1FBQUEsWUFBQTtFQ2JkO0FBQ0Y7QURtQkE7RUFNWTtJQUNJLGVBQUE7RUN0QmQ7RUR5QlU7SUFDSSxtQkFBQTtRQUFBLGVBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7UUFBQSx1QkFBQTtFQ3ZCZDtFRHlCYztJQUNJLGFBQUE7RUN2QmxCO0VENEJrQjtJQUNJLGVBQUE7RUMxQnRCO0VENkJrQjtJQUNJLGtCQUFBO0lBQ0EsZUFBQTtFQzNCdEI7RURnQ1U7SUFDSSxjQUFBO0VDOUJkO0VEa0NrQjtJQUNJLG9CQUFBO0VDaEN0QjtFRG1Da0I7SUFDSSxlQUFBO0VDakN0QjtFRG9Da0I7SUFDSSxlQUFBO0VDbEN0QjtFRG9Dc0I7SUFDSSxxQkFBQTtFQ2xDMUI7RURzQ2tCO0lBQ0ksZUFBQTtFQ3BDdEI7RURzQ3NCO0lBQ0kscUJBQUE7RUNwQzFCO0VEd0NrQjtJQUNJLGVBQUE7RUN0Q3RCO0FBQ0Y7QUQ4Q0E7RUFNWTtJQUNJLGNBQUE7RUNqRGQ7RURxRGtCO0lBQ0ksZUFBQTtFQ25EdEI7RURzRGtCO0lBQ0ksZUFBQTtFQ3BEdEI7RUR5RFU7SUFDSSxjQUFBO0VDdkRkO0VEMkRrQjtJQUNJLG9CQUFBO0VDekR0QjtFRDREa0I7SUFDSSxlQUFBO0VDMUR0QjtFRDZEa0I7SUFDSSxlQUFBO0VDM0R0QjtFRDhEa0I7SUFDSSxlQUFBO0VDNUR0QjtFRCtEa0I7SUFDSSxlQUFBO0VDN0R0QjtBQUNGO0FEb0VBO0VBVW9CO0lBQ0ksZUFBQTtFQzNFdEI7RUQ4RWtCO0lBQ0ksZUFBQTtFQzVFdEI7RURpRlU7SUFDSSxjQUFBO0VDL0VkO0VEa0ZrQjtJQUNJLGVBQUE7RUNoRnRCO0VEbUZrQjtJQUNJLGVBQUE7RUNqRnRCO0VEb0ZrQjtJQUNJLGVBQUE7RUNsRnRCO0VEcUZrQjtJQUNJLGVBQUE7RUNuRnRCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSB7XHJcblxyXG4gICAgI2NvbnRhY3QgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmxlZnQtc2lkZSB7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yaWdodC1zaWRlIHtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcblxyXG4gICAgI2NvbnRhY3Qge1xyXG4gICAgXHJcbiAgICAgICAgLmlsbHVzdHJhdGlvbiB7XHJcbiAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAuaGFsZi1jaXJjbGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAubGVmdC1zaWRlIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC5yaWdodC1zaWRlIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblxyXG4gICAgI2NvbnRhY3QgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmxlZnQtc2lkZSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAudGl0bGUgaDEge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAudG9wLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjdlbTtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAucGljdHVyZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLmJvdHRvbS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC43ZW07XHJcblxyXG4gICAgICAgICAgICAgICAgZm9ybSB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuN2VtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9ZW1haWxdIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuaXMtaW52YWxpZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5pcy1pbnZhbGlkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XHJcblxyXG4gICAgI2NvbnRhY3QgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmxlZnQtc2lkZSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAudG9wLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC5ib3R0b20tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBmb3JtIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1lbWFpbF0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzcwcHgpIHtcclxuXHJcbiAgICAjY29udGFjdCAuY29udGFpbmVyIHtcclxuICAgICAgICBcclxuICAgICAgICAubGVmdC1zaWRlIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC50b3AtY29udGFpbmVyIHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC5ib3R0b20tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPWVtYWlsXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCkge1xuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5yaWdodC1zaWRlIHtcbiAgICBmbGV4LWdyb3c6IDM7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAjY29udGFjdCAuaWxsdXN0cmF0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNjb250YWN0IC5oYWxmLWNpcmNsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5yaWdodC1zaWRlIHtcbiAgICBmbGV4LWdyb3c6IDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAudGl0bGUgaDEge1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLnRvcC1jb250YWluZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwYWRkaW5nOiAwLjdlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLnRvcC1jb250YWluZXIgLnBpY3R1cmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC50b3AtY29udGFpbmVyIC5pbmZvIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLnRvcC1jb250YWluZXIgLmluZm8gLm5hbWUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwLjdlbTtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC43ZW07XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBpbnB1dFt0eXBlPXRleHRdLCAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGlucHV0W3R5cGU9dGV4dF0uaXMtaW52YWxpZCwgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXRbdHlwZT1lbWFpbF0uaXMtaW52YWxpZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGlucHV0W3R5cGU9c3VibWl0XS5pcy1pbnZhbGlkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gdGV4dGFyZWEge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC50b3AtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLnRvcC1jb250YWluZXIgLmluZm8gcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAudG9wLWNvbnRhaW5lciAuaW5mbyAubmFtZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMC41ZW07XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXRbdHlwZT10ZXh0XSwgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gaW5wdXRbdHlwZT1lbWFpbF0ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSB0ZXh0YXJlYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLnRvcC1jb250YWluZXIgLmluZm8gcCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAudG9wLWNvbnRhaW5lciAuaW5mbyAubmFtZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMC41ZW07XG4gIH1cbiAgI2NvbnRhY3QgLmNvbnRhaW5lciAubGVmdC1zaWRlIC5ib3R0b20tY29udGFpbmVyIGZvcm0gbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBpbnB1dFt0eXBlPXRleHRdLCAjY29udGFjdCAuY29udGFpbmVyIC5sZWZ0LXNpZGUgLmJvdHRvbS1jb250YWluZXIgZm9ybSBpbnB1dFt0eXBlPWVtYWlsXSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIGlucHV0W3R5cGU9c3VibWl0XSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gICNjb250YWN0IC5jb250YWluZXIgLmxlZnQtc2lkZSAuYm90dG9tLWNvbnRhaW5lciBmb3JtIHRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-contact",
                templateUrl: "./contact.component.html",
                styleUrls: [
                    "./contact.component.scss",
                    "./contact.component.responsivity.scss",
                ],
            }]
    }], function () { return [{ type: _contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contact/contact.service.ts":
/*!********************************************!*\
  !*** ./src/app/contact/contact.service.ts ***!
  \********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");



class ContactService {
    constructor(database) {
        this.database = database;
    }
    createContact(contact) {
        return this.database.collection('contacts').add(contact);
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _sorter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sorter.service */ "./src/app/core/sorter.service.ts");
/* harmony import */ var _pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe/safari-date-formatter.pipe */ "./src/app/core/pipe/safari-date-formatter.pipe.ts");
/* harmony import */ var _pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipe/localized-date.pipe */ "./src/app/core/pipe/localized-date.pipe.ts");
/* harmony import */ var _directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directive/internationalization.directive */ "./src/app/core/directive/internationalization.directive.ts");
/* harmony import */ var _directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directive/on-viewport.directive */ "./src/app/core/directive/on-viewport.directive.ts");
/* harmony import */ var _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipe/ellipsis.pipe */ "./src/app/core/pipe/ellipsis.pipe.ts");










class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _sorter_service__WEBPACK_IMPORTED_MODULE_3__["SorterService"]], imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__["SafariDateFormatterPipe"], _pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_5__["LocalizedDatePipe"], _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_8__["EllipsisPipe"], _directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_6__["InternationalizationDirective"], _directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_7__["InViewportDirective"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]], exports: [_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__["SafariDateFormatterPipe"], _pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_5__["LocalizedDatePipe"], _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_8__["EllipsisPipe"], _directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_6__["InternationalizationDirective"], _directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_7__["InViewportDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
                declarations: [_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__["SafariDateFormatterPipe"], _pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_5__["LocalizedDatePipe"], _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_8__["EllipsisPipe"], _directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_6__["InternationalizationDirective"], _directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_7__["InViewportDirective"]],
                providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _sorter_service__WEBPACK_IMPORTED_MODULE_3__["SorterService"]],
                exports: [_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_4__["SafariDateFormatterPipe"], _pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_5__["LocalizedDatePipe"], _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_8__["EllipsisPipe"], _directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_6__["InternationalizationDirective"], _directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_7__["InViewportDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/data.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class DataService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'assets/data/';
    }
    getExperiences() {
        return this.http.get(this.baseUrl + 'experiences.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getAbout() {
        return this.http.get(this.baseUrl + 'about.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getPosts() {
        return this.http.get(this.baseUrl + 'posts.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(error || 'Node.js server error');
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/directive/internationalization.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/directive/internationalization.directive.ts ***!
  \******************************************************************/
/*! exports provided: InternationalizationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternationalizationDirective", function() { return InternationalizationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipe/ellipsis.pipe */ "./src/app/core/pipe/ellipsis.pipe.ts");




class InternationalizationDirective {
    constructor(el, locale) {
        this.el = el;
        this.locale = locale;
        this._data = [];
    }
    get data() {
        return this._data;
    }
    set data(value) {
        if (value) {
            this._data = value;
            this.el.nativeElement.innerHTML = this.retrievePropertyValueByLocation();
        }
    }
    ngOnInit() { }
    retrievePropertyValueByLocation() {
        if (this._data) {
            const value = this._data
                .filter(element => element.language === (this.locale || 'en'))
                .map(element => element[this.property]) || [''];
            return this.ellipsis > 0 ? new _pipe_ellipsis_pipe__WEBPACK_IMPORTED_MODULE_1__["EllipsisPipe"]().transform(value[0], this.ellipsis) : value;
        }
    }
}
InternationalizationDirective.ɵfac = function InternationalizationDirective_Factory(t) { return new (t || InternationalizationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); };
InternationalizationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: InternationalizationDirective, selectors: [["", "internationalization", ""]], inputs: { property: "property", data: "data", ellipsis: "ellipsis" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InternationalizationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[internationalization]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }] }]; }, { property: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ellipsis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/directive/on-viewport.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/directive/on-viewport.directive.ts ***!
  \*********************************************************/
/*! exports provided: InViewportDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InViewportDirective", function() { return InViewportDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InViewportDirective {
    constructor(_el) {
        this._el = _el;
        this.inViewport = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges() {
        this.check();
    }
    ngOnInit() { }
    check(partial = true) {
        const el = this._el.nativeElement;
        const elSize = (el.offsetWidth * el.offsetHeight);
        const rec = el.getBoundingClientRect();
        const vp = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        const sectionMarging = 370;
        const tViz = rec.top >= 0 && rec.top < (vp.height - sectionMarging);
        const bViz = rec.bottom > 0 && rec.bottom <= (vp.height - sectionMarging);
        const vVisible = partial ? tViz || bViz : tViz && bViz;
        let event = {
            target: el,
            value: false
        };
        event['value'] = (elSize && vVisible);
        if (event['value']) {
            this.inViewport.emit(event);
        }
    }
}
InViewportDirective.ɵfac = function InViewportDirective_Factory(t) { return new (t || InViewportDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
InViewportDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: InViewportDirective, selectors: [["", "in-viewport", ""]], inputs: { pageYOffset: "pageYOffset" }, outputs: { inViewport: "inViewport" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InViewportDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[in-viewport]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { pageYOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['pageYOffset']
        }], inViewport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['inViewport']
        }] }); })();


/***/ }),

/***/ "./src/app/core/pipe/ellipsis.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/core/pipe/ellipsis.pipe.ts ***!
  \********************************************/
/*! exports provided: EllipsisPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipsisPipe", function() { return EllipsisPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EllipsisPipe {
    transform(val, args = 60) {
        if (val.length > args) {
            return val.substring(0, args) + '...';
        }
        return val;
    }
}
EllipsisPipe.ɵfac = function EllipsisPipe_Factory(t) { return new (t || EllipsisPipe)(); };
EllipsisPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "ellipsis", type: EllipsisPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EllipsisPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'ellipsis'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/pipe/localized-date.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/core/pipe/localized-date.pipe.ts ***!
  \**************************************************/
/*! exports provided: LocalizedDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizedDatePipe", function() { return LocalizedDatePipe; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




class LocalizedDatePipe {
    constructor(locale) {
        this.locale = locale;
    }
    transform(value, pattern = 'mediumDate') {
        const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"](this.locale);
        // For now, the translation will be manual, further on, the i18n service will be injected to provide such capability...
        return datePipe.transform(value, pattern) || (this.locale === 'en' ? "Currently" : "Atualmente");
    }
}
LocalizedDatePipe.ɵfac = function LocalizedDatePipe_Factory(t) { return new (t || LocalizedDatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])); };
LocalizedDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "localizedDate", type: LocalizedDatePipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LocalizedDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'localizedDate',
                pure: false
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/pipe/safari-date-formatter.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/pipe/safari-date-formatter.pipe.ts ***!
  \*********************************************************/
/*! exports provided: SafariDateFormatterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafariDateFormatterPipe", function() { return SafariDateFormatterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/*
 * In order to make the Safari and IE understand the date format to be used in the 'date' pipe it is
 * necessary to replace '-' by '/'.
*/


class SafariDateFormatterPipe {
    transform(value) {
        if (value) {
            return value.replace(/-/g, '/');
        }
        return value;
    }
}
SafariDateFormatterPipe.ɵfac = function SafariDateFormatterPipe_Factory(t) { return new (t || SafariDateFormatterPipe)(); };
SafariDateFormatterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safariDateFormatter", type: SafariDateFormatterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafariDateFormatterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'safariDateFormatter' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/sorter.service.ts":
/*!****************************************!*\
  !*** ./src/app/core/sorter.service.ts ***!
  \****************************************/
/*! exports provided: SorterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorterService", function() { return SorterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SorterService {
    constructor() {
        this.property = null;
        this.direction = 1;
    }
    sort(key, order = 'asc') {
        return (a, b) => {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }
            const varA = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];
            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            }
            else if (varA < varB) {
                comparison = -1;
            }
            return ((order === 'desc') ? (comparison * -1) : comparison);
        };
    }
}
SorterService.ɵfac = function SorterService_Factory(t) { return new (t || SorterService)(); };
SorterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SorterService, factory: SorterService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SorterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/utils.ts":
/*!*******************************!*\
  !*** ./src/app/core/utils.ts ***!
  \*******************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
function debounce(delay = 300) {
    let interval;
    return function (target, propertyKey, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            clearTimeout(interval);
            interval = setTimeout(() => {
                interval = null;
                original.apply(this, args);
            }, delay);
        };
        return interval;
    };
}


/***/ }),

/***/ "./src/app/experience/experience-timeline/experience-timeline.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/experience/experience-timeline/experience-timeline.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ExperienceTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceTimelineComponent", function() { return ExperienceTimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/pipe/safari-date-formatter.pipe */ "./src/app/core/pipe/safari-date-formatter.pipe.ts");
/* harmony import */ var _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/pipe/localized-date.pipe */ "./src/app/core/pipe/localized-date.pipe.ts");




const _c0 = ["line"];
class ExperienceTimelineComponent {
    constructor(elRef, renderer, locale) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.locale = locale;
        this._experiences = [];
        this.onTimelineChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get currentPosition() {
        return this._currentPosition;
    }
    set currentPosition(value) {
        if (value) {
            this._currentPosition = value;
            this.updateTimelineNavigation();
        }
    }
    get experiences() {
        return this._experiences;
    }
    set experiences(value) {
        if (value) {
            this._experiences = value;
            this.populateExperienceTimeline();
        }
    }
    ngOnInit() {
        this.offsetWidth = this.elRef.nativeElement.offsetWidth;
        this.removeEventListener = this.renderer.listen(this.elRef.nativeElement, 'click', (event) => {
            if (event.target && event.target.getAttribute('id-position')) {
                const targetId = event.target.getAttribute('id-position');
                this.onTimelineChanged.emit(targetId);
            }
        });
    }
    // Cleanup by removing the event listener on destroy
    ngOnDestroy() {
        this.removeEventListener();
    }
    updateTimelineNavigation() {
        const activePreviousElem = this.line.nativeElement.querySelector('.milestone.active.current');
        this.renderer.removeClass(activePreviousElem, 'current');
        const targetElem = this.line.nativeElement.querySelector('div[id-position="' + this.currentPosition + '"]');
        this.renderer.addClass(targetElem, 'current');
    }
    daysBetween(startDate, endDate) {
        // The .replace() is necessary in order to avoid issues in the Firefox browser.
        const pointA = new Date(startDate.replace(/-/g, '/'));
        const pointB = new Date(endDate.replace(/-/g, '/'));
        return Math.round(Math.abs(+pointA - +pointB) / 8.64e7);
    }
    retrieveTodayDateAsString() {
        const today = new Date();
        return `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`;
    }
    populateExperienceTimeline() {
        let dates = this._experiences.map(experience => experience.startAt);
        // Adding the current day in order to complete the timeline.
        dates.push(this.retrieveTodayDateAsString());
        if (dates && dates.length < 2) {
            this.renderer.setStyle(this.elRef.nativeElement, 'visibility', 'hidden');
        }
        else if (dates.length >= 2) {
            const daysBetween = this.daysBetween(dates[0], dates[dates.length - 1]);
            const oneDayInPixels = this.offsetWidth / daysBetween;
            // Draw first date milestone      
            this.renderer.appendChild(this.line.nativeElement, this.createMilestone(1, 0, dates[0]));
            let i;
            const lastFrameLoop = dates.length - 1;
            // Draw the middle date milestones
            for (i = 1; i < lastFrameLoop; i++) {
                const periodInDays = this.daysBetween(dates[0], dates[i]);
                const periodWidth = periodInDays * oneDayInPixels;
                const milestoneElement = this.createMilestone((i + 1), periodWidth, dates[i]);
                if (i == lastFrameLoop - 1) {
                    this.renderer.addClass(milestoneElement, 'current');
                }
                this.renderer.appendChild(this.line.nativeElement, milestoneElement);
            }
            // Draw last date milestone ( the current frame )
            const lastDataMilestone = this.createCurrentTriangle(i + 1);
            this.renderer.appendChild(this.line.nativeElement, lastDataMilestone);
        }
    }
    calculatePosition(leftPosition, offsetWidth) {
        return (leftPosition * 100) / offsetWidth;
    }
    createMilestone(index, left, date) {
        const milestoneElement = this.renderer.createElement('div');
        this.renderer.addClass(milestoneElement, 'milestone');
        this.renderer.addClass(milestoneElement, 'active');
        const leftPos = this.calculatePosition(left, this.offsetWidth);
        // Uses at most 95% instead of 100% in order to avoid collision to the arrow icon on the right side of the timeline.
        this.renderer.setStyle(milestoneElement, 'left', `${Math.min(95, leftPos)}%`);
        this.renderer.setAttribute(milestoneElement, 'id-position', index.toString());
        const labelElement = this.createLabelElement(date.toString());
        this.renderer.appendChild(milestoneElement, labelElement);
        return milestoneElement;
    }
    createCurrentTriangle(index) {
        const milestoneElement = this.renderer.createElement('div');
        this.renderer.addClass(milestoneElement, 'milestone');
        this.renderer.addClass(milestoneElement, 'active');
        this.renderer.addClass(milestoneElement, 'future');
        this.renderer.setStyle(milestoneElement, 'left', '100%');
        return milestoneElement;
    }
    // Update this function based on the desired date label formatting.
    createLabelElement(date) {
        const safariDateFormatterPipe = new _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_1__["SafariDateFormatterPipe"]();
        const safariDateFormatterPipeValue = safariDateFormatterPipe.transform(date);
        const localizedDatePipe = new _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_2__["LocalizedDatePipe"](this.locale);
        let month = localizedDatePipe.transform(safariDateFormatterPipeValue, 'MMM');
        const labelElement = this.renderer.createElement('div');
        this.renderer.addClass(labelElement, 'popupSpan');
        const monthSpan = this.renderer.createElement('span');
        this.renderer.addClass(monthSpan, 'month');
        this.renderer.appendChild(monthSpan, this.renderer.createText(month));
        const year = localizedDatePipe.transform(safariDateFormatterPipeValue, 'yyyy');
        const yearSpan = this.renderer.createElement('span');
        this.renderer.addClass(yearSpan, 'year');
        this.renderer.appendChild(yearSpan, this.renderer.createText(year));
        this.renderer.appendChild(labelElement, monthSpan);
        this.renderer.appendChild(labelElement, yearSpan);
        return labelElement; // year, E.g: May. 2020
    }
}
ExperienceTimelineComponent.ɵfac = function ExperienceTimelineComponent_Factory(t) { return new (t || ExperienceTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); };
ExperienceTimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceTimelineComponent, selectors: [["app-experience-timeline"]], viewQuery: function ExperienceTimelineComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.line = _t.first);
    } }, inputs: { currentPosition: "currentPosition", experiences: "experiences" }, outputs: { onTimelineChanged: "onTimelineChanged" }, decls: 5, vars: 0, consts: [[1, "bottom-container"], [1, "lineCont"], [1, "line"], ["line", ""], [1, "mainCont"]], template: function ExperienceTimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bottom-container[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: -75px;\n}\n\n.mainCont[_ngcontent-%COMP%] {\n  height: 80%;\n  width: 100%;\n  position: relative;\n  color: white;\n  font-size: 62px;\n  text-align: center;\n  transition: all 0.2s ease-out;\n}\n\n.lineCont[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20%;\n}\n\n.lineCont[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  height: 3px;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 5px;\n  margin: auto;\n  top: 50%;\n  -ms-transform: translateY(-50%);\n      transform: translateY(-50%);\n  position: relative;\n}\n\n.milestone[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  background: #fff;\n  border-radius: 15px;\n  position: absolute;\n  top: -6px;\n  border: 3px solid white;\n  cursor: pointer;\n  transition: text-shadow 0.3s linear;\n}\n\n.milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  padding: 10px;\n  white-space: nowrap;\n  color: white;\n  position: absolute;\n  top: 20px;\n  left: -35px;\n  transition: all 0.1s ease-out;\n  pointer-events: none;\n  \n}\n\n.milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  text-transform: capitalize;\n}\n\n.milestone.current[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  background: #414c73;\n  top: -8px;\n  font-size: 22px;\n  text-shadow: 0 0 15px white;\n}\n\n.milestone.active[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n  top: -40px;\n  display: block;\n}\n\n.milestone.active.future[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 1px;\n  border-top: 7px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-left: 13px solid white;\n  background: transparent;\n  border-radius: 0;\n  border-right: 0;\n  pointer-events: none;\n}\n\n.milestone.active.current[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n  left: -50px;\n  top: -50px;\n}\n\n@-webkit-keyframes grow {\n  0% {\n    -ms-transform: scale(0.98);\n    transform: scale(0.98);\n  }\n  50% {\n    -ms-transform: scale(0.99);\n    transform: scale(0.99);\n  }\n  100% {\n    -ms-transform: scale(0.98);\n    transform: scale(0.98);\n  }\n}\n\n@keyframes grow {\n  0% {\n    -ms-transform: scale(0.98);\n    transform: scale(0.98);\n  }\n  50% {\n    -ms-transform: scale(0.99);\n    transform: scale(0.99);\n  }\n  100% {\n    -ms-transform: scale(0.98);\n    transform: scale(0.98);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLXRpbWVsaW5lL0M6XFxVc2Vyc1xcRXJpc1xcRG9jdW1lbnRzXFxsaXZlLXJlc3VtZS9zcmNcXGFwcFxcZXhwZXJpZW5jZVxcZXhwZXJpZW5jZS10aW1lbGluZVxcZXhwZXJpZW5jZS10aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLXRpbWVsaW5lL2V4cGVyaWVuY2UtdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO01BQUEsMkJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUNBRjs7QURFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQXNCLDZEQUFBO0FDQzFCOztBRENJO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtBQ0NOOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUNBSjs7QURFRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURFRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDQUo7O0FESUE7RUFDRTtJQUlFLDBCQUFBO0lBQ0Esc0JBQUE7RUNERjtFRElBO0lBSUMsMEJBQUE7SUFDQSxzQkFBQTtFQ0ZEO0VES0E7SUFJRywwQkFBQTtJQUNBLHNCQUFBO0VDSEg7QUFDRjs7QURwQkE7RUFDRTtJQUlFLDBCQUFBO0lBQ0Esc0JBQUE7RUNERjtFRElBO0lBSUMsMEJBQUE7SUFDQSxzQkFBQTtFQ0ZEO0VES0E7SUFJRywwQkFBQTtJQUNBLHNCQUFBO0VDSEg7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS10aW1lbGluZS9leHBlcmllbmNlLXRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdHRvbS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IC03NXB4O1xyXG59XHJcblxyXG4ubWFpbkNvbnQge1xyXG4gIGhlaWdodDogODAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiA2MnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcclxufVxyXG5cclxuLmxpbmVDb250IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwJTtcclxuXHJcbiAgLmxpbmUge1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuXHJcbi5taWxlc3RvbmUge1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTZweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XHJcblxyXG4gIC5wb3B1cFNwYW4ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIGxlZnQ6IC0zNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1vdXQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogT25seSB0aGUgQ2lyY2xlcyBpbiB0aGUgdGltZWxpbmUgYXJlIGxpc3RlbmVkIGJ5IGV2ZW50cy4gKi9cclxuXHJcbiAgICAubW9udGgge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYuY3VycmVudCB7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICM0MTRjNzM7XHJcbiAgICB0b3A6IC04cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XHJcbiAgfVxyXG4gICYuYWN0aXZlIC5wb3B1cFNwYW4ge1xyXG4gICAgdG9wOiAtNDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAmLmFjdGl2ZS5mdXR1cmUge1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDEzcHggc29saWQgd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbiAgJi5hY3RpdmUuY3VycmVudCAucG9wdXBTcGFuIHtcclxuICAgIGxlZnQ6IC01MHB4O1xyXG4gICAgdG9wOiAtNTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZ3JvdyB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsgICAgXHJcbiAgfVxyXG4gICBcclxuICA1MCUge1xyXG4gICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OSk7XHJcbiAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcclxuICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcclxuICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45OSk7XHJcbiAgIHRyYW5zZm9ybTogc2NhbGUoMC45OSk7XHJcbiAgfVxyXG4gICBcclxuICAxMDAlIHtcclxuICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICB9XHJcbn0iLCIuYm90dG9tLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAtNzVweDtcbn1cblxuLm1haW5Db250IHtcbiAgaGVpZ2h0OiA4MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA2MnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuXG4ubGluZUNvbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMCU7XG59XG4ubGluZUNvbnQgLmxpbmUge1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5taWxlc3RvbmUge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTZweDtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG59XG4ubWlsZXN0b25lIC5wb3B1cFNwYW4ge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAtMzVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1vdXQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAvKiBPbmx5IHRoZSBDaXJjbGVzIGluIHRoZSB0aW1lbGluZSBhcmUgbGlzdGVuZWQgYnkgZXZlbnRzLiAqL1xufVxuLm1pbGVzdG9uZSAucG9wdXBTcGFuIC5tb250aCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5taWxlc3RvbmUuY3VycmVudCB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICM0MTRjNzM7XG4gIHRvcDogLThweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XG59XG4ubWlsZXN0b25lLmFjdGl2ZSAucG9wdXBTcGFuIHtcbiAgdG9wOiAtNDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWlsZXN0b25lLmFjdGl2ZS5mdXR1cmUge1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAxM3B4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5taWxlc3RvbmUuYWN0aXZlLmN1cnJlbnQgLnBvcHVwU3BhbiB7XG4gIGxlZnQ6IC01MHB4O1xuICB0b3A6IC01MHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGdyb3cge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45OSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk5KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbiAgfVxufSJdfQ== */", "@media screen and (max-width: 1024px) {\n  .bottom-container[_ngcontent-%COMP%] {\n    bottom: -90px;\n  }\n\n  .milestone[_ngcontent-%COMP%] {\n    width: 8px;\n    height: 8px;\n    top: -6px;\n  }\n  .milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    left: -40px;\n    font-size: 15px;\n  }\n  .milestone.current[_ngcontent-%COMP%] {\n    width: 12px;\n    height: 12px;\n    top: -8px;\n  }\n  .milestone.current[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .milestone.active.current[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    top: -45px;\n    left: -40px;\n  }\n}\n@media screen and (max-width: 880px) {\n  .bottom-container[_ngcontent-%COMP%] {\n    bottom: -60px;\n  }\n\n  .milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    left: -20px;\n  }\n  .milestone[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .milestone.active.current[_ngcontent-%COMP%]   .popupSpan[_ngcontent-%COMP%] {\n    left: -25px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .bottom-container[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLXRpbWVsaW5lL0M6XFxVc2Vyc1xcRXJpc1xcRG9jdW1lbnRzXFxsaXZlLXJlc3VtZS9zcmNcXGFwcFxcZXhwZXJpZW5jZVxcZXhwZXJpZW5jZS10aW1lbGluZVxcZXhwZXJpZW5jZS10aW1lbGluZS5jb21wb25lbnQucmVwb25zaXZpdHkuc2NzcyIsInNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLXRpbWVsaW5lL2V4cGVyaWVuY2UtdGltZWxpbmUuY29tcG9uZW50LnJlcG9uc2l2aXR5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSTtJQUNJLGFBQUE7RUNBTjs7RURHRTtJQUNJLFVBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtFQ0FOO0VERU07SUFDSSxXQUFBO0lBQ0EsZUFBQTtFQ0FWO0VERU07SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFNBQUE7RUNBVjtFREVVO0lBQ0ksZUFBQTtFQ0FkO0VER007SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQ0RWO0FBQ0Y7QURLQTtFQUVJO0lBQ0ksYUFBQTtFQ0pOOztFRFFNO0lBQ0ksV0FBQTtFQ0xWO0VET1U7SUFDSSxhQUFBO0VDTGQ7RURRTTtJQUNJLFdBQUE7RUNOVjtBQUNGO0FEVUE7RUFDSTtJQUNJLGFBQUE7RUNSTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLXRpbWVsaW5lL2V4cGVyaWVuY2UtdGltZWxpbmUuY29tcG9uZW50LnJlcG9uc2l2aXR5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuXHJcbiAgICAuYm90dG9tLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYm90dG9tOiAtOTBweDtcclxuICAgIH1cclxuICAgICAgXHJcbiAgICAubWlsZXN0b25lIHtcclxuICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgIHRvcDogLTZweDtcclxuICAgICAgICBcclxuICAgICAgICAucG9wdXBTcGFuIHtcclxuICAgICAgICAgICAgbGVmdDogLTQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jdXJyZW50IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgdG9wOiAtOHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIC5wb3B1cFNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYWN0aXZlLmN1cnJlbnQgLnBvcHVwU3BhbiB7XHJcbiAgICAgICAgICAgIHRvcDogLTQ1cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC00MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcclxuXHJcbiAgICAuYm90dG9tLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYm90dG9tOiAtNjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1pbGVzdG9uZSB7ICAgICAgICBcclxuICAgICAgICAucG9wdXBTcGFuIHtcclxuICAgICAgICAgICAgbGVmdDogLTIwcHg7XHJcblxyXG4gICAgICAgICAgICAubW9udGgge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmFjdGl2ZS5jdXJyZW50IC5wb3B1cFNwYW4ge1xyXG4gICAgICAgICAgICBsZWZ0OiAtMjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuYm90dG9tLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuYm90dG9tLWNvbnRhaW5lciB7XG4gICAgYm90dG9tOiAtOTBweDtcbiAgfVxuXG4gIC5taWxlc3RvbmUge1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgdG9wOiAtNnB4O1xuICB9XG4gIC5taWxlc3RvbmUgLnBvcHVwU3BhbiB7XG4gICAgbGVmdDogLTQwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIC5taWxlc3RvbmUuY3VycmVudCB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIHRvcDogLThweDtcbiAgfVxuICAubWlsZXN0b25lLmN1cnJlbnQgLnBvcHVwU3BhbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIC5taWxlc3RvbmUuYWN0aXZlLmN1cnJlbnQgLnBvcHVwU3BhbiB7XG4gICAgdG9wOiAtNDVweDtcbiAgICBsZWZ0OiAtNDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcbiAgLmJvdHRvbS1jb250YWluZXIge1xuICAgIGJvdHRvbTogLTYwcHg7XG4gIH1cblxuICAubWlsZXN0b25lIC5wb3B1cFNwYW4ge1xuICAgIGxlZnQ6IC0yMHB4O1xuICB9XG4gIC5taWxlc3RvbmUgLnBvcHVwU3BhbiAubW9udGgge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm1pbGVzdG9uZS5hY3RpdmUuY3VycmVudCAucG9wdXBTcGFuIHtcbiAgICBsZWZ0OiAtMjVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmJvdHRvbS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceTimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience-timeline',
                templateUrl: './experience-timeline.component.html',
                styleUrls: ['./experience-timeline.component.scss', 'experience-timeline.component.reponsivity.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }] }]; }, { onTimelineChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], line: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['line']
        }], currentPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], experiences: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _core_sorter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/sorter.service */ "./src/app/core/sorter.service.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _experience_timeline_experience_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./experience-timeline/experience-timeline.component */ "./src/app/experience/experience-timeline/experience-timeline.component.ts");
/* harmony import */ var _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/directive/internationalization.directive */ "./src/app/core/directive/internationalization.directive.ts");
/* harmony import */ var _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/pipe/localized-date.pipe */ "./src/app/core/pipe/localized-date.pipe.ts");
/* harmony import */ var _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/pipe/safari-date-formatter.pipe */ "./src/app/core/pipe/safari-date-formatter.pipe.ts");












const _c0 = ["orderedList"];
var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_experiences$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_2 = goog.getMsg("Experiences");
    I18N_1 = MSG_EXTERNAL_experiences$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_2;
}
else {
    I18N_1 = $localize `:nav@@experiences␟e7e0306bc19b679cb5d1bf586d6bd02fffb8c78f␟1824510134640326733:Experiences`;
}
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_4 = goog.getMsg("Previous");
    I18N_3 = MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_4;
}
else {
    I18N_3 = $localize `:exp.nav@@previous␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
}
const _c5 = ["title", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_7 = goog.getMsg("Previous");
    I18N_6 = MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_7;
}
else {
    I18N_6 = $localize `:exp.nav@@previous␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_9 = goog.getMsg("Next");
    I18N_8 = MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_9;
}
else {
    I18N_8 = $localize `:exp.nav@@next␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_11 = goog.getMsg("Next");
    I18N_10 = MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_11;
}
else {
    I18N_10 = $localize `:exp.nav@@next␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
}
const _c12 = ["title", I18N_10];
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_14 = goog.getMsg("Previous");
    I18N_13 = MSG_EXTERNAL_previous$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_14;
}
else {
    I18N_13 = $localize `:exp.nav@@previous␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
}
const _c15 = ["title", I18N_13];
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_17 = goog.getMsg("Next");
    I18N_16 = MSG_EXTERNAL_next$$SRC_APP_EXPERIENCE_EXPERIENCE_COMPONENT_TS_17;
}
else {
    I18N_16 = $localize `:exp.nav@@next␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
}
const _c18 = ["title", I18N_16];
function ExperienceComponent_li_43_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const technology_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](technology_r26);
} }
const _c19 = function (a1) { return ["fab", a1]; };
function ExperienceComponent_li_43_a_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const media_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", media_r27.http, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", media_r27.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c19, media_r27.icon));
} }
const _c20 = function (a0) { return { "selected": a0 }; };
function ExperienceComponent_li_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "localizedDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "safariDateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "localizedDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "safariDateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ",\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ExperienceComponent_li_43_span_32_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ExperienceComponent_li_43_a_34_Template, 2, 5, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exp_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", exp_r22.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c20, i_r23 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", exp_r22.website, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", exp_r22.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", exp_r22.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", exp_r22.website, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r22.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", exp_r22.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 18, exp_r22.startAt), "MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 23, exp_r22.endAt), "MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", exp_r22.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", exp_r22.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", exp_r22.internationalizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", exp_r22.technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", exp_r22.medias);
} }
const _c21 = function (a0) { return { "disabled": a0 }; };
const _c22 = function () { return ["fas", "chevron-left"]; };
const _c23 = function () { return ["fas", "chevron-right"]; };
class ExperienceComponent {
    constructor(dataService, sortService, renderer, library) {
        this.dataService = dataService;
        this.sortService = sortService;
        this.renderer = renderer;
        this.library = library;
        this.SELECTED_CLASS = 'selected';
        this.LEAVE_RIGHT_CLASS = 'leave-right';
        this.ENTER_RIGHT_CLASS = 'enter-right';
        this.LEAVE_LEFT_CLASS = 'leave-left';
        this.ENTER_LEFT_CLASS = 'enter-left';
        this.TRANSITION_TIME = 400;
        this.experiencesOrdered = [];
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["fas"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["fab"]);
    }
    ngOnInit() {
        // Fetch the Experiences from the Data Service
        this.dataService.getExperiences()
            .subscribe((experiences) => {
            this.currentPosition = experiences.length;
            this.experiences = experiences;
            this.experiencesOrdered = [...experiences];
            this.experiencesOrdered.sort(this.sortService.sort('position', 'desc'));
            this.backgroundUrl = this.retrieveBackgroundUrl();
            this.updateMobileNavigationView();
            this.preloadBounderyImages(experiences.map(xp => xp.backgroundUrl));
        });
    }
    // Preloads the boundaries images related to the current position in order to avoid the 'blinking' of the background while navigating.
    preloadBounderyImages(images) {
        images.forEach(function (image, i) {
            const preloadImages = new Array();
            preloadImages[i] = new Image();
            preloadImages[i].src = image;
        });
    }
    createListSelector(position) {
        return `li[id="${position}"]`;
    }
    onClickPrevious(targetPos) {
        const currElem = this.orderedList.nativeElement.querySelector(this.createListSelector(this.currentPosition));
        this.renderer.removeClass(currElem, this.SELECTED_CLASS);
        this.renderer.addClass(currElem, this.LEAVE_RIGHT_CLASS);
        setTimeout(() => {
            this.renderer.removeClass(currElem, this.LEAVE_RIGHT_CLASS);
        }, this.TRANSITION_TIME);
        // Subtracts one to the current position in order to move backwards in the timeline.
        this.currentPosition = (targetPos ? +targetPos : this.currentPosition - 1);
        this.backgroundUrl = this.retrieveBackgroundUrl();
        const targetElem = this.orderedList.nativeElement.querySelector(this.createListSelector(this.currentPosition));
        this.renderer.addClass(targetElem, this.SELECTED_CLASS);
        this.renderer.addClass(targetElem, this.ENTER_LEFT_CLASS);
        setTimeout(() => {
            this.renderer.removeClass(targetElem, this.ENTER_LEFT_CLASS);
        }, this.TRANSITION_TIME);
        this.updateMobileNavigationView();
    }
    onClickNext(targetPos) {
        const currElem = this.orderedList.nativeElement.querySelector(this.createListSelector(this.currentPosition));
        this.renderer.removeClass(currElem, this.SELECTED_CLASS);
        this.renderer.addClass(currElem, this.LEAVE_LEFT_CLASS);
        setTimeout(() => {
            this.renderer.removeClass(currElem, this.LEAVE_LEFT_CLASS);
        }, this.TRANSITION_TIME);
        // Sums one to the current position in order to move further in the timeline.
        this.currentPosition = (targetPos ? +targetPos : this.currentPosition + 1);
        this.backgroundUrl = this.retrieveBackgroundUrl();
        const targetElem = this.orderedList.nativeElement.querySelector(this.createListSelector(this.currentPosition));
        this.renderer.addClass(targetElem, this.SELECTED_CLASS);
        this.renderer.addClass(targetElem, this.ENTER_RIGHT_CLASS);
        setTimeout(() => {
            this.renderer.removeClass(targetElem, this.ENTER_RIGHT_CLASS);
        }, this.TRANSITION_TIME);
        this.updateMobileNavigationView();
    }
    updateNavigation(targetPos) {
        // in case of == nothing to do here
        if (targetPos > this.currentPosition) {
            this.onClickNext(targetPos);
        }
        else if (targetPos < this.currentPosition) {
            this.onClickPrevious(targetPos);
        }
    }
    retrieveBackgroundUrl() {
        return this.experiences[this.currentPosition - 1].backgroundUrl;
    }
    updateMobileNavigationView() {
        var _a, _b;
        this.previousYear =
            ((_a = this.experiences[this.currentPosition - 2]) === null || _a === void 0 ? void 0 : _a.startAt) || this.experiences[this.currentPosition - 1].startAt;
        this.currentYear =
            this.experiences[this.currentPosition - 1].startAt;
        this.nextYear =
            ((_b = this.experiences[this.currentPosition]) === null || _b === void 0 ? void 0 : _b.startAt) || this.experiences[this.currentPosition - 1].startAt;
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_sorter_service__WEBPACK_IMPORTED_MODULE_4__["SorterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconLibrary"])); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], viewQuery: function ExperienceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.orderedList = _t.first);
    } }, decls: 45, vars: 43, consts: [["id", "experience", 1, "landscape"], [1, "overlay"], [1, "container"], [1, "top-container"], [1, "title"], [1, "navigation"], ["href", "javascript:void(0)", 1, "previous", 3, "ngClass", "click"], [1, "icon", 3, "icon", 6, "title"], [1, "devider"], ["href", "javascript:void(0)", 1, "next", 3, "ngClass", "click"], [1, "navigation-mobile"], [1, "molding"], [3, "innerHtml"], [1, "current"], [1, "middle-container"], [1, "events-content"], ["orderedList", ""], [3, "ngClass", "id", 4, "ngFor", "ngForOf"], [3, "experiences", "currentPosition", "onTimelineChanged"], [3, "ngClass", "id"], [1, "header-block"], [1, "logo-block"], ["target", "_blank", 3, "href"], [3, "src", "alt"], [1, "info-block"], [1, "company-name"], ["internationalization", "", "property", "role", 1, "role", 3, "data"], [1, "period"], [1, "location"], ["internationalization", "", "property", "city", 1, "city", 3, "data"], ["internationalization", "", "property", "country", 1, "country", 3, "data"], ["internationalization", "", "property", "description", 1, "description", 3, "data"], [1, "technologies"], ["class", "hashtag", 4, "ngFor", "ngForOf"], [1, "social-media"], ["target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], [1, "hashtag"], [1, "icon", 3, "icon", "title"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, I18N_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_Template_a_click_8_listener() { return ctx.onClickPrevious(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](10, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, I18N_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_Template_a_click_15_listener() { return ctx.onClickNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](17, I18N_8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](19, _c12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_Template_a_click_21_listener() { return ctx.onClickPrevious(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "localizedDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "safariDateFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](27, _c15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "localizedDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "safariDateFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_Template_a_click_32_listener() { return ctx.onClickNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](35, _c18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "localizedDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "safariDateFormatter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ol", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ExperienceComponent_li_43_Template, 35, 27, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "app-experience-timeline", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onTimelineChanged", function ExperienceComponent_Template_app_experience_timeline_onTimelineChanged_44_listener($event) { return ctx.updateNavigation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.backgroundUrl + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c21, ctx.currentPosition == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c22));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c21, ctx.currentPosition == (ctx.experiencesOrdered == null ? null : ctx.experiencesOrdered.length)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c23));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](37, _c21, ctx.currentPosition == 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 19, ctx.previousYear), "yyyy"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c22));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 24, ctx.currentYear), "yyyy"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c21, ctx.currentPosition == (ctx.experiencesOrdered == null ? null : ctx.experiencesOrdered.length)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c23));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](37, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 29, ctx.nextYear), "yyyy"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiencesOrdered);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("experiences", ctx.experiences)("currentPosition", ctx.currentPosition);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _experience_timeline_experience_timeline_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceTimelineComponent"], _core_directive_internationalization_directive__WEBPACK_IMPORTED_MODULE_8__["InternationalizationDirective"]], pipes: [_core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_9__["LocalizedDatePipe"], _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_10__["SafariDateFormatterPipe"]], styles: [".overlay[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  background: #020024;\n  background: linear-gradient(180deg, rgba(2, 0, 36, 0.6418942577) 0%, rgba(0, 0, 0, 0.7735469188) 25%, rgba(0, 0, 0, 0.9079726891) 75%, rgba(0, 0, 0, 0.9924264706) 100%);\n  width: 100%;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: start;\n      justify-content: flex-start;\n  padding-top: 4em;\n  padding-bottom: 8em;\n}\n\n.landscape[_ngcontent-%COMP%] {\n  background-size: cover;\n  top: -4em;\n  position: relative;\n  background-position-x: center;\n  background-position-y: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-origin: initial;\n  background-clip: initial;\n  background-color: initial;\n  transition: background-image 0.3s ease-in-out;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  max-width: 1400px;\n  -ms-flex-item-align: center;\n      align-self: center;\n  width: 85vw;\n}\n\n.top-container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  color: #fff;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  -ms-flex-positive: 4;\n      flex-grow: 4;\n}\n\n.top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 600;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  font-size: 30px;\n  font-weight: 500;\n  -ms-flex-align: center;\n      align-items: center;\n  text-align: center;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%] {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n  cursor: pointer;\n  text-align: left;\n  transition: text-shadow 0.3s linear;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%]:hover {\n  text-shadow: 0 0 15px white;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .devider[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n  cursor: pointer;\n  text-align: right;\n  transition: text-shadow 0.3s linear;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover {\n  text-shadow: 0 0 15px white;\n}\n\n.middle-container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  text-align: right;\n  color: #fff;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  transition: height 0.4s;\n  min-height: 570px;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo-block[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: left;\n      justify-content: left;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 90px;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .info-block[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: 600;\n  line-height: 50px;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 300;\n  line-height: 20px;\n  margin-bottom: 1em;\n  font-style: italic;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 5px;\n  text-transform: capitalize;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  line-height: 1.5em;\n  font-size: 20px;\n  font-weight: normal;\n  text-align: left;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  -ms-transform: translateX(-100%);\n  transform: translateX(-100%);\n  -webkit-animation-duration: 0.4s;\n  animation-duration: 0.4s;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  opacity: 1;\n  -ms-transform: translateX(0);\n  transform: translateX(0);\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.enter-right[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.leave-right[_ngcontent-%COMP%] {\n  -webkit-animation-name: cd-enter-right;\n  animation-name: cd-enter-right;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.enter-left[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.leave-left[_ngcontent-%COMP%] {\n  -webkit-animation-name: cd-enter-left;\n  animation-name: cd-enter-left;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.leave-right[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li.leave-left[_ngcontent-%COMP%] {\n  -webkit-animation-direction: reverse;\n  animation-direction: reverse;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-top: 1em;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   span.hashtag[_ngcontent-%COMP%] {\n  padding: 2px 5px 2px 5px;\n  background-color: #414c73;\n  border-radius: 5px;\n  margin-right: 10px;\n  margin-top: 10px;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   span.hashtag[_ngcontent-%COMP%]:before {\n  content: \"#\";\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 1em;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  color: #fff;\n  margin: 0 20px 0 20px;\n  transition: 0.3s;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #8087a1;\n}\n\n@-webkit-keyframes cd-enter-right {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n  }\n}\n\n@keyframes cd-enter-right {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n  }\n}\n\n@keyframes cd-enter-right {\n  0% {\n    opacity: 0;\n    -ms-transform: translateX(100%);\n    transform: translateX(100%);\n  }\n  100% {\n    opacity: 1;\n    -ms-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n}\n\n@-webkit-keyframes cd-enter-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n  }\n}\n\n@keyframes cd-enter-left {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0%);\n  }\n}\n\n@keyframes cd-enter-left {\n  0% {\n    opacity: 0;\n    -ms-transform: translateX(-100%);\n    transform: translateX(-100%);\n  }\n  100% {\n    opacity: 1;\n    -ms-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9DOlxcVXNlcnNcXEVyaXNcXERvY3VtZW50c1xcbGl2ZS1yZXN1bWUvc3JjXFxhcHBcXGV4cGVyaWVuY2VcXGV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUxJLG9CQUFBO0VBRUEsYUFBQTtFQU1BLG1CQUFBO0VBQ0Esd0tBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7TUFBQSxzQkFBQTtFQUNBLG9CQUFBO01BQUEsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSko7O0FET0E7RUFJSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBT0EsNkNBQUE7QUNOSjs7QURTQTtFQXhDSSxvQkFBQTtFQUVBLGFBQUE7RUF5Q0EsMEJBQUE7TUFBQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7TUFBQSxrQkFBQTtFQUNBLFdBQUE7QUNISjs7QURNQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtNQUFBLGVBQUE7QUNISjs7QURLSTtFQUNJLG9CQUFBO01BQUEsWUFBQTtBQ0hSOztBREtRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDSFo7O0FEUUk7RUFDSSxhQUFBO0FDTlI7O0FEUVE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUNOWjs7QURVSTtFQXpFQSxvQkFBQTtFQUVBLGFBQUE7RUEwRUksb0JBQUE7TUFBQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7TUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FDTFI7O0FET1E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7QUNMWjs7QURRUTtFQUNJLG9CQUFBO01BQUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUtBLG1DQUFBO0FDTlo7O0FEUVk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDTmhCOztBRFNZO0VBQ0ksMkJBQUE7QUNQaEI7O0FEV1E7RUFDSSxZQUFBO0FDVFo7O0FEWVE7RUFDSSxvQkFBQTtNQUFBLFlBQUE7QUNWWjs7QURhUTtFQUNJLG9CQUFBO01BQUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUtBLG1DQUFBO0FDWFo7O0FEYVk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDWGhCOztBRGFZO0VBQ0ksMkJBQUE7QUNYaEI7O0FEaUJBO0VBMUlJLG9CQUFBO0VBRUEsYUFBQTtFQTJJQSwwQkFBQTtNQUFBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDWEo7O0FEYUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUdBLHVCQUFBO0VBQ0EsaUJBQUE7QUNYUjs7QURhUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO01BQUEsZUFBQTtBQ1haOztBRGFZO0VBQ0ksb0JBQUE7TUFBQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7TUFBQSxtQkFBQTtFQUNBLG1CQUFBO01BQUEscUJBQUE7QUNYaEI7O0FEYWdCO0VBQ0ksWUFBQTtBQ1hwQjs7QURlWTtFQUNJLG9CQUFBO01BQUEsWUFBQTtBQ2JoQjs7QURpQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ2ZaOztBRGlCWTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ2ZoQjs7QURtQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNqQlo7O0FEb0JRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDbEJaOztBRG9CWTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtBQ2xCaEI7O0FEc0JRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDcEJaOztBRHVCUTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDckJaOztBRHdCUTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUN0Qlo7O0FEd0JZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBR0EsZ0NBQUE7RUFFQSw0QkFBQTtFQUNBLGdDQUFBO0VBRUEsd0JBQUE7RUFDQSw4Q0FBQTtFQUVBLHNDQUFBO0FDdEJoQjs7QUR5Qlk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBR0EsNEJBQUE7RUFFQSx3QkFBQTtBQ3ZCaEI7O0FEMkJZO0VBQ0ksc0NBQUE7RUFFQSw4QkFBQTtBQ3pCaEI7O0FENEJZO0VBQ0kscUNBQUE7RUFFQSw2QkFBQTtBQzFCaEI7O0FENkJZO0VBQ0ksb0NBQUE7RUFFQSw0QkFBQTtBQzNCaEI7O0FEK0JRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7TUFBQSxtQkFBQTtFQUNBLG1CQUFBO01BQUEsZUFBQTtFQUNBLGVBQUE7QUM3Qlo7O0FEK0JZO0VBQ0ksd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQzdCaEI7O0FEK0JnQjtFQUNJLFlBQUE7QUM3QnBCOztBRGtDUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ2hDWjs7QURrQ1k7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNoQ2hCOztBRGtDZ0I7RUFDSSxlQUFBO0FDaENwQjs7QURrQ2dCO0VBQ0ksY0FBQTtBQ2hDcEI7O0FEdUNBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsbUNBQUE7RUNwQ047RURzQ0U7SUFDSSxVQUFBO0lBQ0EsaUNBQUE7RUNwQ047QUFDRjs7QUQ0QkE7RUFDSTtJQUNJLFVBQUE7SUFDQSxtQ0FBQTtFQ3BDTjtFRHNDRTtJQUNJLFVBQUE7SUFDQSxpQ0FBQTtFQ3BDTjtBQUNGOztBRGtEQTtFQUNJO0lBQ0ksVUFBQTtJQUdBLCtCQUFBO0lBRUEsMkJBQUE7RUN0Q047RUR3Q0U7SUFDSSxVQUFBO0lBR0EsNkJBQUE7SUFFQSx5QkFBQTtFQ3RDTjtBQUNGOztBRHlDQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLG9DQUFBO0VDdkNOO0VEeUNFO0lBQ0ksVUFBQTtJQUNBLGlDQUFBO0VDdkNOO0FBQ0Y7O0FEK0JBO0VBQ0k7SUFDSSxVQUFBO0lBQ0Esb0NBQUE7RUN2Q047RUR5Q0U7SUFDSSxVQUFBO0lBQ0EsaUNBQUE7RUN2Q047QUFDRjs7QURxREE7RUFDSTtJQUNJLFVBQUE7SUFHQSxnQ0FBQTtJQUVBLDRCQUFBO0VDekNOO0VEMkNFO0lBQ0ksVUFBQTtJQUdBLDZCQUFBO0lBRUEseUJBQUE7RUN6Q047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBkaXNwbGF5LWZsZXgge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gICAgQGluY2x1ZGUgZGlzcGxheS1mbGV4O1xyXG5cclxuICAgIGJhY2tncm91bmQ6IHJnYigyLCAwLCAzNik7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDIsIDAsIDM2LCAwLjY0MTg5NDI1NzcwMzA4MTMpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNzczNTQ2OTE4NzY3NTA3KSAyNSUsIHJnYmEoMCwgMCwgMCwgMC45MDc5NzI2ODkwNzU2MzAzKSA3NSUsIHJnYmEoMCwgMCwgMCwgMC45OTI0MjY0NzA1ODgyMzUzKSAxMDAlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmctdG9wOiA0ZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOGVtO1xyXG59XHJcblxyXG4ubGFuZHNjYXBlIHtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdG9wOiAtNGVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1vcmlnaW46IGluaXRpYWw7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGluaXRpYWw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xyXG4gICAgXHJcbiAgICAvLyBUaGlzIGlzIHN1cHBvcnRlZCBuYXRpdmVseSBieSBDaHJvbWUsIE9wZXJhIGFuZCBTYWZhcmkuIEZpcmVmb3ggYW5kIElFIGhhc24ndCBpbXBsZW1lbnRlZCBpdCB5ZXQgKGJ1Z3ppbC5sYSkuXHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBAaW5jbHVkZSBkaXNwbGF5LWZsZXg7XHJcblxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1heC13aWR0aDogMTQwMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDg1dnc7XHJcbn1cclxuXHJcbi50b3AtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZsZXgtZ3JvdzogNDtcclxuXHJcbiAgICAgICAgJiBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGlzYWJsZWQgZm9yIGRlc2t0b3AgcmVzb2x1dGlvbnMgb3IgaGlnaGVyLlxyXG4gICAgLm5hdmlnYXRpb24tbW9iaWxlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uYXZpZ2F0aW9uIHtcclxuICAgICAgICBAaW5jbHVkZSBkaXNwbGF5LWZsZXg7XHJcblxyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5wcmV2aW91cyB7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xyXG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcclxuICAgIFxyXG4gICAgICAgICAgICAmLmRpc2FibGVkIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGV2aWRlciB7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAubmV4dCB7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcclxuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcclxuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xyXG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmLmRpc2FibGVkIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubWlkZGxlLWNvbnRhaW5lciB7XHJcbiAgICBAaW5jbHVkZSBkaXNwbGF5LWZsZXg7XHJcblxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgLmV2ZW50cy1jb250ZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjRzO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogaGVpZ2h0IDAuNHM7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNHM7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTcwcHg7XHJcblxyXG4gICAgICAgIC5oZWFkZXItYmxvY2sge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgICAgICAgICAubG9nby1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmluZm8tYmxvY2sge1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29tcGFueS1uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuXHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yb2xlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGVyaW9kIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9jYXRpb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb2wge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICAgICAgICAgICAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBEZWZpbmVzIHRoZSBhbmltYXRpb25zIG9mIHRoZSBuYXZpZ2F0aW9uIG9yZGVyZWQgbGlzdC5cclxuICAgICAgICAgICAgbGkuZW50ZXItcmlnaHQsIGxpLmxlYXZlLXJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGNkLWVudGVyLXJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogY2QtZW50ZXItcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogY2QtZW50ZXItcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpLmVudGVyLWxlZnQsIGxpLmxlYXZlLWxlZnQge1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogY2QtZW50ZXItbGVmdDtcclxuICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGNkLWVudGVyLWxlZnQ7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogY2QtZW50ZXItbGVmdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGkubGVhdmUtcmlnaHQsIGxpLmxlYXZlLWxlZnQge1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xyXG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRlY2hub2xvZ2llcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG5cclxuICAgICAgICAgICAgc3Bhbi5oYXNodGFnIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCA1cHggMnB4IDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTRjNzM7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnIyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnNvY2lhbC1tZWRpYSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcblxyXG4gICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgwODdhMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBjZC1lbnRlci1yaWdodCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgY2QtZW50ZXItcmlnaHQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBjZC1lbnRlci1yaWdodCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNkLWVudGVyLWxlZnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBjZC1lbnRlci1sZWZ0IHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNkLWVudGVyLWxlZnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgfVxyXG59IiwiLm92ZXJsYXkge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICMwMjAwMjQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMiwgMCwgMzYsIDAuNjQxODk0MjU3NykgMCUsIHJnYmEoMCwgMCwgMCwgMC43NzM1NDY5MTg4KSAyNSUsIHJnYmEoMCwgMCwgMCwgMC45MDc5NzI2ODkxKSA3NSUsIHJnYmEoMCwgMCwgMCwgMC45OTI0MjY0NzA2KSAxMDAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZy10b3A6IDRlbTtcbiAgcGFkZGluZy1ib3R0b206IDhlbTtcbn1cblxuLmxhbmRzY2FwZSB7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0b3A6IC00ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jbGlwOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogODV2dztcbn1cblxuLnRvcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogI2ZmZjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnRvcC1jb250YWluZXIgLnRpdGxlIHtcbiAgZmxleC1ncm93OiA0O1xufVxuLnRvcC1jb250YWluZXIgLnRpdGxlIGgxIHtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24tbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uLW1vYmlsZSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG4udG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5wcmV2aW91cyB7XG4gIGZsZXgtZ3JvdzogMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5wcmV2aW91cy5kaXNhYmxlZCB7XG4gIGN1cnNvcjogbm8tZHJvcDtcbiAgb3BhY2l0eTogMC42O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5wcmV2aW91czpob3ZlciB7XG4gIHRleHQtc2hhZG93OiAwIDAgMTVweCB3aGl0ZTtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIHNwYW4ge1xuICBtYXJnaW46IDEwcHg7XG59XG4udG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiAuZGV2aWRlciB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5uZXh0IHtcbiAgZmxleC1ncm93OiAyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAtbW96LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICAtbXMtdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XG4gIC1vLXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xuICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjNzIGxpbmVhcjtcbn1cbi50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5uZXh0LmRpc2FibGVkIHtcbiAgY3Vyc29yOiBuby1kcm9wO1xuICBvcGFjaXR5OiAwLjY7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24gLm5leHQ6aG92ZXIge1xuICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XG59XG5cbi5taWRkbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICNmZmY7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjRzO1xuICAtbW96LXRyYW5zaXRpb246IGhlaWdodCAwLjRzO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC40cztcbiAgbWluLWhlaWdodDogNTcwcHg7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLmhlYWRlci1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuaGVhZGVyLWJsb2NrIC5sb2dvLWJsb2NrIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLmhlYWRlci1ibG9jayAubG9nby1ibG9jayBpbWcge1xuICBoZWlnaHQ6IDkwcHg7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLmhlYWRlci1ibG9jayAuaW5mby1ibG9jayB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuY29tcGFueS1uYW1lIHtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogNTBweDtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuY29tcGFueS1uYW1lIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5yb2xlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnBlcmlvZCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAucGVyaW9kIHNwYW4ge1xuICBtYXJnaW46IDVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLmxvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgb2wge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgb2wgbGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDAuNHM7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgb2wgLnNlbGVjdGVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IG9sIGxpLmVudGVyLXJpZ2h0LCAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgb2wgbGkubGVhdmUtcmlnaHQge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBjZC1lbnRlci1yaWdodDtcbiAgLW1vei1hbmltYXRpb24tbmFtZTogY2QtZW50ZXItcmlnaHQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBjZC1lbnRlci1yaWdodDtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCBvbCBsaS5lbnRlci1sZWZ0LCAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgb2wgbGkubGVhdmUtbGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGNkLWVudGVyLWxlZnQ7XG4gIC1tb3otYW5pbWF0aW9uLW5hbWU6IGNkLWVudGVyLWxlZnQ7XG4gIGFuaW1hdGlvbi1uYW1lOiBjZC1lbnRlci1sZWZ0O1xufVxuLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IG9sIGxpLmxlYXZlLXJpZ2h0LCAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgb2wgbGkubGVhdmUtbGVmdCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcbiAgLW1vei1hbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xufVxuLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC50ZWNobm9sb2dpZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAudGVjaG5vbG9naWVzIHNwYW4uaGFzaHRhZyB7XG4gIHBhZGRpbmc6IDJweCA1cHggMnB4IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNGM3MztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnRlY2hub2xvZ2llcyBzcGFuLmhhc2h0YWc6YmVmb3JlIHtcbiAgY29udGVudDogXCIjXCI7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnNvY2lhbC1tZWRpYSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnNvY2lhbC1tZWRpYSAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMCAyMHB4IDAgMjBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuc29jaWFsLW1lZGlhIC5pY29uOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4ubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnNvY2lhbC1tZWRpYSAuaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjODA4N2ExO1xufVxuXG5Aa2V5ZnJhbWVzIGNkLWVudGVyLXJpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBjZC1lbnRlci1yaWdodCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGNkLWVudGVyLXJpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY2QtZW50ZXItbGVmdCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGNkLWVudGVyLWxlZnQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY2QtZW50ZXItbGVmdCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIH1cbn0iXX0= */", "@media screen and (max-width: 1024px) {\n  .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   span.hashtag[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n\n  .landscape[_ngcontent-%COMP%] {\n    background-attachment: scroll;\n  }\n}\n@media screen and (max-width: 880px) {\n  .top-container[_ngcontent-%COMP%] {\n    -ms-flex-direction: column;\n        flex-direction: column;\n  }\n  .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0 0 30px 0;\n    text-align: center;\n  }\n\n  .middle-container[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n}\n@media screen and (max-width: 720px) {\n  .overlay[_ngcontent-%COMP%] {\n    padding-bottom: 1em;\n    padding-top: 6em;\n  }\n\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    text-align: center;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%] {\n    border: 3px solid #fff;\n    display: inline-block;\n    padding: 10px 1em 10px 1em;\n    border-radius: 10px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%] {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    cursor: pointer;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .previous.disabled[_ngcontent-%COMP%] {\n    cursor: no-drop;\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%]:hover {\n    text-shadow: 0 0 15px white;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    -ms-flex-item-align: center;\n        align-self: center;\n    font-size: 35px;\n    font-weight: 600;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    cursor: pointer;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .next.disabled[_ngcontent-%COMP%] {\n    cursor: no-drop;\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover {\n    text-shadow: 0 0 15px white;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo-block[_ngcontent-%COMP%] {\n    -ms-flex-pack: center;\n        justify-content: center;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%], .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-top: 2em;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .top-container[_ngcontent-%COMP%]   .navigation-mobile[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%] {\n    padding: 10px 5px 10px 6px;\n  }\n\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .header-block[_ngcontent-%COMP%]   .logo-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 70px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .technologies[_ngcontent-%COMP%]   span.hashtag[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%] {\n    margin-top: 1em;\n  }\n  .middle-container[_ngcontent-%COMP%]   .events-content[_ngcontent-%COMP%]   .social-media[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 35px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9DOlxcVXNlcnNcXEVyaXNcXERvY3VtZW50c1xcbGl2ZS1yZXN1bWUvc3JjXFxhcHBcXGV4cGVyaWVuY2VcXGV4cGVyaWVuY2UtY29tcG9uZW50LnJlcG9uc2l2aXR5LnNjc3MiLCJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS1jb21wb25lbnQucmVwb25zaXZpdHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUlRO0lBQ0ksZUFBQTtFQ1ZWO0VEYU07SUFDSSxlQUFBO0VDWFY7O0VEbUJVO0lBQ0ksZUFBQTtFQ2hCZDtFRG1CVTtJQUNJLGVBQUE7RUNqQmQ7RURvQlU7SUFDSSxlQUFBO0VDbEJkO0VEc0JNO0lBQ0ksZUFBQTtFQ3BCVjtFRHVCTTtJQUNJLGVBQUE7RUNyQlY7O0VEeUJFO0lBQ0ksNkJBQUE7RUN0Qk47QUFDRjtBRHlCQTtFQUVJO0lBQ0ksMEJBQUE7UUFBQSxzQkFBQTtFQ3hCTjtFRDBCTTtJQUNJLGtCQUFBO0lBQ0Esa0JBQUE7RUN4QlY7O0VENEJFO0lBQ0ksZ0JBQUE7RUN6Qk47RUQyQk07SUFDSSxlQUFBO0VDekJWO0FBQ0Y7QUQ2QkE7RUFFSTtJQUNJLG1CQUFBO0lBQ0EsZ0JBQUE7RUM1Qk47O0VEaUNNO0lBOUVKLG9CQUFBO0lBRUEsYUFBQTtJQStFUSx1QkFBQTtRQUFBLG1CQUFBO0lBQ0EscUJBQUE7UUFBQSxpQkFBQTtJQUNBLGtCQUFBO0VDM0JWO0VENkJVO0lBQ0ksc0JBQUE7SUFDQSxxQkFBQTtJQUNBLDBCQUFBO0lBQ0EsbUJBQUE7RUMzQmQ7RUQ2QmM7SUFDSSxXQUFBO0VDM0JsQjtFRCtCVTtJQUNJLG9CQUFBO1FBQUEsWUFBQTtJQUNBLGVBQUE7RUM3QmQ7RUQrQmM7SUFDSSxlQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO0VDN0JsQjtFRGdDYztJQUNJLDJCQUFBO0VDOUJsQjtFRGtDVTtJQUNJLG9CQUFBO1FBQUEsWUFBQTtJQUNBLDJCQUFBO1FBQUEsa0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUNoQ2Q7RURtQ1U7SUFDSSxvQkFBQTtRQUFBLFlBQUE7SUFDQSxlQUFBO0VDakNkO0VEbUNjO0lBQ0ksZUFBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtFQ2pDbEI7RURtQ2M7SUFDSSwyQkFBQTtFQ2pDbEI7RUR1Q007SUFDSSxhQUFBO0VDckNWOztFRDZDVTtJQUNJLGVBQUE7RUMxQ2Q7RUQ2Q1U7SUFDSSxxQkFBQTtRQUFBLHVCQUFBO0VDM0NkO0VEOENVO0lBQ0ksa0JBQUE7RUM1Q2Q7RUQrQ1U7SUFDSSxrQkFBQTtJQUNBLGVBQUE7RUM3Q2Q7RUQrQ2M7SUFDSSxlQUFBO0VDN0NsQjtBQUNGO0FEbURBO0VBSVE7SUFDSSxlQUFBO0VDcERWO0VEeURVO0lBQ0ksZUFBQTtFQ3ZEZDtFRDBEVTtJQUNJLDBCQUFBO0VDeERkOztFRGlFVTtJQUNJLFlBQUE7RUM5RGQ7RURpRVU7SUFDSSxlQUFBO0VDL0RkO0VEa0VVO0lBQ0ksZUFBQTtFQ2hFZDtFRG1FVTtJQUNJLGVBQUE7RUNqRWQ7RURtRWM7SUFDSSxlQUFBO0VDakVsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLWNvbXBvbmVudC5yZXBvbnNpdml0eS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGRpc3BsYXktZmxleCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIFxyXG4gICAgLnRvcC1jb250YWluZXIge1xyXG5cclxuICAgICAgICAudGl0bGUgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2aWdhdGlvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1pZGRsZS1jb250YWluZXIge1xyXG5cclxuICAgICAgICAuZXZlbnRzLWNvbnRlbnQge1xyXG5cclxuICAgICAgICAgICAgLmNvbXBhbnktbmFtZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5yb2xlLCAucGVyaW9kLCAubG9jYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGVjaG5vbG9naWVzIHNwYW4uaGFzaHRhZyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zb2NpYWwtbWVkaWEgLmljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sYW5kc2NhcGUge1xyXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xyXG5cclxuICAgIC50b3AtY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAudGl0bGUgaDEge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAzMHB4IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1pZGRsZS1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gICAgICAgIC5ldmVudHMtY29udGVudCAuc29jaWFsLW1lZGlhIC5pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICBcclxuICAgIC5vdmVybGF5IHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2ZW07XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50b3AtY29udGFpbmVyIHtcclxuXHJcbiAgICAgICAgLm5hdmlnYXRpb24tbW9iaWxlIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZGlzcGxheS1mbGV4O1xyXG5cclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC5tb2xkaW5nIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDFlbSAxMHB4IDFlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wcmV2aW91cyB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBuby1kcm9wO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmN1cnJlbnQge1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5leHQge1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICYuZGlzYWJsZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBEaXNhYmxlZCBmb3IgbW9iaWxlIHJlc29sdXRpb25zLlxyXG4gICAgICAgIC5uYXZpZ2F0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1pZGRsZS1jb250YWluZXIge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5ldmVudHMtY29udGVudCB7XHJcblxyXG4gICAgICAgICAgICAuY29tcGFueS1uYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmhlYWRlci1ibG9jayAubG9nby1ibG9jayB7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbXBhbnktbmFtZSwgLnJvbGUsIC5wZXJpb2QsIC5sb2NhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zb2NpYWwtbWVkaWEge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcblxyXG4gICAgLnRvcC1jb250YWluZXIge1xyXG5cclxuICAgICAgICAudGl0bGUgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmF2aWdhdGlvbi1tb2JpbGUge1xyXG4gICAgXHJcbiAgICAgICAgICAgIC5jdXJyZW50IHsgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4OyAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAubW9sZGluZyB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDZweDsgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5taWRkbGUtY29udGFpbmVyIHtcclxuXHJcbiAgICAgICAgLmV2ZW50cy1jb250ZW50IHtcclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXItYmxvY2sgLmxvZ28tYmxvY2sgaW1nIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRlY2hub2xvZ2llcyBzcGFuLmhhc2h0YWcge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc29jaWFsLW1lZGlhIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuXHJcbiAgICAgICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC50b3AtY29udGFpbmVyIC50aXRsZSBoMSB7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICB9XG4gIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cblxuICAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLmNvbXBhbnktbmFtZSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG4gIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAucm9sZSwgLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5wZXJpb2QsIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAubG9jYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgLm1pZGRsZS1jb250YWluZXIgLnRlY2hub2xvZ2llcyBzcGFuLmhhc2h0YWcge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAubWlkZGxlLWNvbnRhaW5lciAuc29jaWFsLW1lZGlhIC5pY29uIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cblxuICAubGFuZHNjYXBlIHtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcbiAgLnRvcC1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnRvcC1jb250YWluZXIgLnRpdGxlIGgxIHtcbiAgICBtYXJnaW46IDAgMCAzMHB4IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLm1pZGRsZS1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbiAgLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5zb2NpYWwtbWVkaWEgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLm92ZXJsYXkge1xuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgcGFkZGluZy10b3A6IDZlbTtcbiAgfVxuXG4gIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uLW1vYmlsZSB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24tbW9iaWxlIC5tb2xkaW5nIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4IDFlbSAxMHB4IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uLW1vYmlsZSAubW9sZGluZyBzcGFuIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbi1tb2JpbGUgLnByZXZpb3VzIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uLW1vYmlsZSAucHJldmlvdXMuZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24tbW9iaWxlIC5wcmV2aW91czpob3ZlciB7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHdoaXRlO1xuICB9XG4gIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uLW1vYmlsZSAuY3VycmVudCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuICAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbi1tb2JpbGUgLm5leHQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24tbW9iaWxlIC5uZXh0LmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vLWRyb3A7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uLW1vYmlsZSAubmV4dDpob3ZlciB7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHdoaXRlO1xuICB9XG4gIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5jb21wYW55LW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxuICAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLmhlYWRlci1ibG9jayAubG9nby1ibG9jayB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5jb21wYW55LW5hbWUsIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAucm9sZSwgLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5wZXJpb2QsIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAubG9jYXRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnNvY2lhbC1tZWRpYSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgfVxuICAubWlkZGxlLWNvbnRhaW5lciAuZXZlbnRzLWNvbnRlbnQgLnNvY2lhbC1tZWRpYSAuaWNvbiB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAudG9wLWNvbnRhaW5lciAudGl0bGUgaDEge1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgfVxuICAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbi1tb2JpbGUgLmN1cnJlbnQge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuICAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbi1tb2JpbGUgLm1vbGRpbmcge1xuICAgIHBhZGRpbmc6IDEwcHggNXB4IDEwcHggNnB4O1xuICB9XG5cbiAgLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5oZWFkZXItYmxvY2sgLmxvZ28tYmxvY2sgaW1nIHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gIH1cbiAgLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAudGVjaG5vbG9naWVzIHNwYW4uaGFzaHRhZyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5taWRkbGUtY29udGFpbmVyIC5ldmVudHMtY29udGVudCAuc29jaWFsLW1lZGlhIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gIH1cbiAgLm1pZGRsZS1jb250YWluZXIgLmV2ZW50cy1jb250ZW50IC5zb2NpYWwtbWVkaWEgLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-experience',
                templateUrl: './experience.component.html',
                styleUrls: ['./experience.component.scss', 'experience-component.reponsivity.scss']
            }]
    }], function () { return [{ type: _core_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _core_sorter_service__WEBPACK_IMPORTED_MODULE_4__["SorterService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconLibrary"] }]; }, { orderedList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['orderedList']
        }] }); })();


/***/ }),

/***/ "./src/app/experience/experience.module.ts":
/*!*************************************************!*\
  !*** ./src/app/experience/experience.module.ts ***!
  \*************************************************/
/*! exports provided: ExperienceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceModule", function() { return ExperienceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _experience_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _experience_timeline_experience_timeline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience-timeline/experience-timeline.component */ "./src/app/experience/experience-timeline/experience-timeline.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");







class ExperienceModule {
}
ExperienceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExperienceModule });
ExperienceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExperienceModule_Factory(t) { return new (t || ExperienceModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExperienceModule, { declarations: [_experience_component__WEBPACK_IMPORTED_MODULE_1__["ExperienceComponent"], _experience_timeline_experience_timeline_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceTimelineComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]], exports: [_experience_component__WEBPACK_IMPORTED_MODULE_1__["ExperienceComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]],
                declarations: [_experience_component__WEBPACK_IMPORTED_MODULE_1__["ExperienceComponent"], _experience_timeline_experience_timeline_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceTimelineComponent"]],
                exports: [_experience_component__WEBPACK_IMPORTED_MODULE_1__["ExperienceComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class FooterComponent {
    constructor() {
    }
    ngOnInit() {
        this.faGithubSquare = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithubSquare"];
        this.year = new Date();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 4, consts: [["itemscope", "", "itemtype", "https://schema.org/WPFooter"], [1, "fork-github"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx.year, "yyyy"), " \u00A9 Copyright");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["footer[_ngcontent-%COMP%] {\r\n    background-color: #3a5f8e;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n\r\n.fork-github[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    font-weight: 500;\r\n    -ms-flex-positive: 1;\r\n        flex-grow: 1;\r\n}\r\n\r\n.fork-github[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\n.fork-github[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin-left: 0.5em;\r\n}\r\n\r\n.fork-github[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    color: #fff;\r\n}\r\n\r\n.copyright[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    color: #fff;\r\n    font-weight: 600;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLG1CQUFlO1FBQWYsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQVk7UUFBWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTVmOGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZm9yay1naXRodWIge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5mb3JrLWdpdGh1YiBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZm9yay1naXRodWIgc3BhbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XHJcbn1cclxuXHJcbi5mb3JrLWdpdGh1YiBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNvcHlyaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbn0iXX0= */", "@media screen and (max-width: 500px) {\r\n\r\n    .copyright[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 370px) {\r\n\r\n    .fork-github[_ngcontent-%COMP%] {\r\n        text-align: center;\r\n    }\r\n\r\n    .copyright[_ngcontent-%COMP%] {\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksb0JBQVk7WUFBWixZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuXHJcbiAgICAuY29weXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3MHB4KSB7XHJcblxyXG4gICAgLmZvcmstZ2l0aHViIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvcHlyaWdodCB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css', './footer.component.responsivity.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ng_navigator_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-navigator-share */ "./node_modules/ng-navigator-share/__ivy_ngcc__/fesm2015/ng-navigator-share.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");






const _c0 = ["nav"];
const _c1 = ["shareBtn"];
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_aboutMe$$SRC_APP_HEADER_HEADER_COMPONENT_TS_3 = goog.getMsg("{$startTagSpan}About me{$closeTagSpan}", { "startTagSpan": "\uFFFD#12\uFFFD", "closeTagSpan": "\uFFFD/#12\uFFFD" });
    I18N_2 = MSG_EXTERNAL_aboutMe$$SRC_APP_HEADER_HEADER_COMPONENT_TS_3;
}
else {
    I18N_2 = $localize `:nav@@aboutMe␟0c13ed142b2445758e753691dde293f1475c2f35␟4875492424371875416:${"\uFFFD#12\uFFFD"}:START_TAG_SPAN:About me${"\uFFFD/#12\uFFFD"}:CLOSE_TAG_SPAN:`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_posts$$SRC_APP_HEADER_HEADER_COMPONENT_TS_5 = goog.getMsg("{$startTagSpan}Projects{$closeTagSpan}", { "startTagSpan": "\uFFFD#16\uFFFD", "closeTagSpan": "\uFFFD/#16\uFFFD" });
    I18N_4 = MSG_EXTERNAL_posts$$SRC_APP_HEADER_HEADER_COMPONENT_TS_5;
}
else {
    I18N_4 = $localize `:nav@@posts␟35c99d959ec2c482a1b2910228c6fbf93e9ae08f␟811077579287290632:${"\uFFFD#16\uFFFD"}:START_TAG_SPAN:Projects${"\uFFFD/#16\uFFFD"}:CLOSE_TAG_SPAN:`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_contact$$SRC_APP_HEADER_HEADER_COMPONENT_TS_7 = goog.getMsg("{$startTagSpan}Contact{$closeTagSpan}", { "startTagSpan": "\uFFFD#20\uFFFD", "closeTagSpan": "\uFFFD/#20\uFFFD" });
    I18N_6 = MSG_EXTERNAL_contact$$SRC_APP_HEADER_HEADER_COMPONENT_TS_7;
}
else {
    I18N_6 = $localize `:nav@@contact␟70b4f26e29bfeacd38974c054e3a4fe925da00ad␟886825848084977844:${"\uFFFD#20\uFFFD"}:START_TAG_SPAN:Contact${"\uFFFD/#20\uFFFD"}:CLOSE_TAG_SPAN:`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_open_as_pdf$$SRC_APP_HEADER_HEADER_COMPONENT_TS_9 = goog.getMsg("Open Resume as PDF");
    I18N_8 = MSG_EXTERNAL_open_as_pdf$$SRC_APP_HEADER_HEADER_COMPONENT_TS_9;
}
else {
    I18N_8 = $localize `:nav@@open.as.pdf␟b656b39704aa388939be18cf921da9cb3974279c␟7857151276634971709:Open Resume as PDF`;
}
const _c10 = ["title", I18N_8];
class HeaderComponent {
    constructor(locale, renderer, ngNavigatorShareService) {
        this.locale = locale;
        this.renderer = renderer;
        this.ngNavigatorShareService = ngNavigatorShareService;
    }
    // use getter setter to define the properties
    get activeSection() {
        return this._activeSection;
    }
    get pageXOffset() {
        return this._pageXOffset;
    }
    set pageXOffset(value) {
        this._pageXOffset = value;
        this.onDetectScreenSize();
    }
    set activeSection(value) {
        this._activeSection = value;
        this.updateNavigation();
    }
    ngAfterViewInit() {
        // Share button available only for browsers that do support it.
        if (this.ngNavigatorShareService.canShare()) {
            this.shareBtn.nativeElement.style.display = "block";
        }
    }
    ngOnInit() {
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBars"];
        this.faShareAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faShareAlt"];
        this.faCloudDownloadAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCloudDownloadAlt"];
    }
    updateNavigation() {
        if (this._activeSection && this.renderer) {
            // Remove any selected anchor
            const activePreviousElem = this.nav.nativeElement.querySelector("a.active");
            if (activePreviousElem) {
                this.renderer.removeClass(activePreviousElem, "active");
            }
            const targetElem = this.nav.nativeElement.querySelector(`a[href^="#${this._activeSection}"]`);
            if (targetElem) {
                this.renderer.addClass(targetElem, "active");
            }
        }
    }
    /*
     * For media types such as tablets and mobile devices, the nav-bar navigation should be
     * collapsed by default.
     */
    onDetectScreenSize() {
        this.hasMenuToggled = this.pageXOffset > 1024;
    }
    onToggleBar() {
        this.hasMenuToggled = !this.hasMenuToggled;
    }
    resetMenu() {
        this.hasMenuToggled = this.pageXOffset > 1024;
    }
    share() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const sharedResponse = yield this.ngNavigatorShareService.share({
                    title: "`Eris Aguilar - Senior Software Developer",
                    text: `Hello, I'm a Senior Software Engineer/Developer with 5+ years of experience designing web and mobile projects. Find out more in my live-resume!`,
                    url: "https://itserisjohn.github.io",
                });
            }
            catch (error) {
                console.log("You app is not shared, reason: ", error);
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_navigator_share__WEBPACK_IMPORTED_MODULE_3__["NgNavigatorShareService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.nav = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.shareBtn = _t.first);
    } }, inputs: { pageXOffset: "pageXOffset", activeSection: "activeSection" }, decls: 28, vars: 4, consts: [["itemscope", "", "itemtype", "https://schema.org/WPHeader"], [1, "child", "navbar-toggle"], [1, "bar-icon", 3, "icon", "click"], ["itemprop", "brand", "itemscope", "", "itemtype", "https://schema.org/Brand", 1, "child", "logo-container"], ["href", "#", "itemprop", "name", "itemprop", "logo", 1, "logo", 3, "click"], ["itemscope", "", "itemtype", "https://schema.org/SiteNavigationElement", 1, "child", "nav-container", 3, "hidden"], ["nav", ""], ["href", "#about", "itemprop", "url", 3, "click"], ["itemprop", "name"], ["href", "#posts", "itemprop", "url", 3, "click"], ["href", "#contact", "itemprop", "url", 3, "click"], ["href", "https://www.dropbox.com/s/e8lfkmfiebaihnp/Aguilar_Resume.pdf?dl=0", "target", "_blank", 3, "click", 6, "title"], [1, "bar-icon", 3, "icon"], [1, "child", "share-container"], ["shareBtn", ""], ["alt", "share", "itemprop", "share", 1, "icon", 3, "icon", "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_fa_icon_click_2_listener() { return ctx.onToggleBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() { return ctx.resetMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "eaguilar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_10_listener() { return ctx.resetMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](11, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_14_listener() { return ctx.resetMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](15, I18N_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_18_listener() { return ctx.resetMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](19, I18N_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](23, _c10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_22_listener() { return ctx.resetMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "fa-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_fa_icon_click_27_listener() { return ctx.share(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faBars);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.hasMenuToggled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faCloudDownloadAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faShareAlt);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: ["@charset \"UTF-8\";\nheader[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  background: transparent;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  max-width: 1400px;\n  width: 100%;\n}\nheader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\nheader[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%] {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n  text-align: left;\n}\nheader[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 125px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 35px;\n  font-weight: 700;\n  color: #222f5c;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%] {\n  -ms-flex-positive: 5;\n      flex-grow: 5;\n  transition: 0.3s;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n  -ms-flex-align: center;\n      align-items: center;\n  height: 52px;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-right: 1em;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  text-decoration: none;\n  font-size: 20px;\n  font-weight: 600;\n  color: #222f5c;\n  padding: 14px;\n  border-radius: 15px;\n  transition: 0.3s;\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.active):hover {\n  background-color: #fff;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n}\nheader[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #222f5c;\n  color: #fff;\n  font-weight: 600;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: inline-block;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  height: 52px;\n  text-align: center;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  display: inline-block;\n  height: 25px;\n  margin: 14px 0 0 0;\n  border-right: 2px solid #bfbfbf3b;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 15px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 20px;\n  font-weight: 600;\n  color: #222f5c59;\n  transition: 0.3s;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #222f5c;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #222f5c;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type {\n  border-right: none;\n}\nheader[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:before {\n  content: \"\u202F\u202D\";\n}\nheader[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  display: none;\n  -ms-flex-pack: center;\n      justify-content: center;\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%] {\n  display: none;\n  margin-left: 10px;\n  background-color: #fff;\n  padding: 11px;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: #4e5562;\n}\nheader[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n  color: #222f5c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcRXJpc1xcRG9jdW1lbnRzXFxsaXZlLXJlc3VtZS9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FERUo7QUNBSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO01BQUEsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FERVI7QUNDSTtFQUNJLG9CQUFBO01BQUEsWUFBQTtFQUNBLGdCQUFBO0FEQ1I7QUNDUTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRENaO0FDR0k7RUFDSSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxnQkFBQTtBRERSO0FDR1E7RUFDSSxrQkFBQTtNQUFBLHlCQUFBO0VBQ0Esc0JBQUE7TUFBQSxtQkFBQTtFQUNBLFlBQUE7QUREWjtBQ0dZO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBRERoQjtBQ0dnQjtFQUNJLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUREcEI7QUNHb0I7RUFDSSxzQkFBQTtFQUVBLCtDQUFBO0FERHhCO0FDS2dCO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QURIcEI7QUNXUTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUVBLCtDQUFBO0FEVFo7QUNXWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBRFRoQjtBQ1dnQjtFQUNJLG9CQUFBO01BQUEsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QURUcEI7QUNXb0I7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRFR4QjtBQ1d3QjtFQUNJLGNBQUE7QURUNUI7QUNhb0I7RUFDSSxjQUFBO0FEWHhCO0FDY29CO0VBQ0ksa0JBQUE7QURaeEI7QUNnQmdCO0VBQ0ksYUFBQTtBRGRwQjtBQ29CSTtFQUNJLG9CQUFBO01BQUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtNQUFBLHVCQUFBO0VBQ0EsZUFBQTtBRGxCUjtBQ3FCSTtFQUVJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxlQUFBO0FEcEJSO0FDc0JRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QURwQlo7QUNzQlk7RUFDSSxjQUFBO0FEcEJoQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuaGVhZGVyIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5oZWFkZXIgLmNoaWxkLmxvZ28tY29udGFpbmVyIHtcbiAgZmxleC1ncm93OiAyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuaGVhZGVyIC5jaGlsZC5sb2dvLWNvbnRhaW5lciBhIHtcbiAgd2lkdGg6IDEyNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMyMjJmNWM7XG59XG5oZWFkZXIgLmNoaWxkLm5hdi1jb250YWluZXIge1xuICBmbGV4LWdyb3c6IDU7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5oZWFkZXIgLmNoaWxkLm5hdi1jb250YWluZXIgdWwge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUycHg7XG59XG5oZWFkZXIgLmNoaWxkLm5hdi1jb250YWluZXIgdWwgbGkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuaGVhZGVyIC5jaGlsZC5uYXYtY29udGFpbmVyIHVsIGxpIGEge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMjIyZjVjO1xuICBwYWRkaW5nOiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuaGVhZGVyIC5jaGlsZC5uYXYtY29udGFpbmVyIHVsIGxpIGE6bm90KC5hY3RpdmUpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG59XG5oZWFkZXIgLmNoaWxkLm5hdi1jb250YWluZXIgdWwgbGkgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjJmNWM7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuaGVhZGVyIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xuICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbn1cbmhlYWRlciAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIC5mcmFtZSB1bCB7XG4gIGhlaWdodDogNTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaGVhZGVyIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsIGxpIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luOiAxNHB4IDAgMCAwO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjYmZiZmJmM2I7XG59XG5oZWFkZXIgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciAuZnJhbWUgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIyMmY1YzU5O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuaGVhZGVyIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogIzIyMmY1Yztcbn1cbmhlYWRlciAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIC5mcmFtZSB1bCBsaSAuYWN0aXZlIHtcbiAgY29sb3I6ICMyMjJmNWM7XG59XG5oZWFkZXIgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciAuZnJhbWUgdWwgbGk6bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuaGVhZGVyIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4oCv4oCtXCI7XG59XG5oZWFkZXIgLmNoaWxkLm5hdmJhci10b2dnbGUge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5oZWFkZXIgLmNoaWxkLnNoYXJlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaGVhZGVyIC5jaGlsZC5zaGFyZS1jb250YWluZXIgLmljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjNGU1NTYyO1xufVxuaGVhZGVyIC5jaGlsZC5zaGFyZS1jb250YWluZXIgLmljb246aG92ZXIge1xuICBjb2xvcjogIzIyMmY1Yztcbn0iLCJoZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIG1heC13aWR0aDogMTQwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoaWxkLmxvZ28tY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWdyb3c6IDI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjVweDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2hpbGQubmF2LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1ncm93OiA1O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcblxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcblxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOm5vdCguYWN0aXZlKTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMmY1YztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIge1xyXG5cclxuICAgICAgICAuZnJhbWUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpOyBcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XHJcblxyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTRweCAwIDAgMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjYmZiZmJmM2I7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM1OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjJmNWM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcXDIwMmZcXDIwMmRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2hpbGQubmF2YmFyLXRvZ2dsZSB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGlsZC5zaGFyZS1jb250YWluZXIge1xyXG4gICAgICAgIC8vIHZpc2libGUgb25seSBmb3IgbW9iaWxlIGJyb3dzZXJzIHRoYXQgYWNjZXB0IHNoYXJlIGludGVudC5cclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMTFweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuMTYpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNGU1NTYyO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG59Il19 */", "@charset \"UTF-8\";\n@media screen and (max-width: 1420px) {\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%] {\n    margin-right: 1em;\n  }\n}\n@media screen and (max-width: 1024px) {\n  header[_ngcontent-%COMP%] {\n    background: #fff;\n    border-radius: 0 0 15px 15px;\n    box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.16);\n    padding: 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%] {\n    -ms-flex-positive: 4;\n        flex-grow: 4;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%] {\n    -ms-flex-order: 5;\n        order: 5;\n    border-top: 2px solid #bfbfbf1a;\n    padding-top: 1em;\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    -ms-flex-flow: column;\n        flex-flow: column;\n    height: inherit;\n    -ms-flex-align: start;\n        align-items: flex-start;\n    line-height: 35px;\n    padding-left: 1em;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: #5e81abbd;\n    padding-left: 25px;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #222f5c;\n    box-shadow: none;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n    background-color: #fff;\n    color: #222f5c;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(.active):hover {\n    box-shadow: none;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n    content: \"\u2022\";\n    font-size: 50px;\n    position: absolute;\n    color: #5e81abbd;\n    margin-top: -4px;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover::before {\n    color: #222f5c;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%] {\n    margin-right: 0;\n    -ms-flex-positive: initial;\n        flex-grow: initial;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%] {\n    background-color: transparent;\n    box-shadow: none;\n  }\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n  }\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n@media screen and (max-width: 500px) {\n  header[_ngcontent-%COMP%] {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n  }\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%] {\n    font-size: 20px;\n    border: 1px solid #b3b7c61f;\n    padding: 5px 10px 5px 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 21px;\n    margin: 15px 0 0 0;\n    border-right: 2px solid #bfbfbf3b;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin: 0 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%] {\n    padding: 8px;\n    border-radius: 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n}\n@media screen and (max-width: 460px) {\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%] {\n    font-size: 15px;\n    border: 1px solid #b3b7c61f;\n    padding: 5px 10px 5px 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    height: 35px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 20px;\n    margin: 8px 0 0 0;\n    border-right: 2px solid #bfbfbf3b;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin: 0 8px;\n  }\n}\n@media screen and (max-width: 380px) {\n  header[_ngcontent-%COMP%]   .child.navbar-toggle[_ngcontent-%COMP%]   .bar-icon[_ngcontent-%COMP%] {\n    font-size: 15px;\n    border: 1px solid #b3b7c61f;\n    padding: 5px 10px 5px 10px;\n  }\n  header[_ngcontent-%COMP%]   .child.logo-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  header[_ngcontent-%COMP%]   .child.nav-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    height: 35px;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    height: 20px;\n    margin: 8px 0 0 0;\n    border-right: 2px solid #bfbfbf3b;\n  }\n  header[_ngcontent-%COMP%]   .child.language-container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin: 0 8px;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%] {\n    padding: 0;\n    border-radius: 0;\n    margin-right: 5px;\n    box-shadow: none;\n  }\n  header[_ngcontent-%COMP%]   .child.share-container[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9DOlxcVXNlcnNcXEVyaXNcXERvY3VtZW50c1xcbGl2ZS1yZXN1bWUvc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFJUTtJQUNJLGtCQUFBO0VERFY7RUNJTTtJQUNJLGtCQUFBO0VERlY7RUNLTTtJQUNJLGlCQUFBO0VESFY7QUFDRjtBQ09BO0VBRUk7SUFDSSxnQkFBQTtJQUNBLDRCQUFBO0lBRUEsK0NBQUE7SUFDQSxhQUFBO0VETk47RUNRTTtJQUNJLG9CQUFBO1FBQUEsWUFBQTtFRE5WO0VDU007SUFDSSxpQkFBQTtRQUFBLFFBQUE7SUFDQSwrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsNkJBQUE7UUFBQSxnQkFBQTtFRFBWO0VDU1U7SUFDSSxxQkFBQTtRQUFBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO1FBQUEsdUJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VEUGQ7RUNXa0I7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFRFR0QjtFQ1dzQjtJQUNJLGNBQUE7SUFHQSxnQkFBQTtFRFQxQjtFQ1lzQjtJQUNJLHNCQUFBO0lBQ0EsY0FBQTtFRFYxQjtFQ2FzQjtJQUNJLGdCQUFBO0VEWDFCO0VDZWtCO0lBQ0ksWUFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RURidEI7RUNla0I7SUFDSSxjQUFBO0VEYnRCO0VDbUJNO0lBQ0ksZUFBQTtJQUNBLDBCQUFBO1FBQUEsa0JBQUE7RURqQlY7RUNtQlU7SUFDSSw2QkFBQTtJQUdBLGdCQUFBO0VEakJkO0VDcUJNO0lBQ0ksb0JBQUE7SUFBQSxhQUFBO0lBQ0Esc0JBQUE7UUFBQSxtQkFBQTtJQUNBLHFCQUFBO1FBQUEsdUJBQUE7RURuQlY7RUNxQlU7SUFDSSxlQUFBO0VEbkJkO0FBQ0Y7QUN3QkE7RUFFSTtJQUNJLG9CQUFBO0lBQUEsYUFBQTtJQUNBLHNCQUFBO1FBQUEsbUJBQUE7SUFDQSxxQkFBQTtRQUFBLHVCQUFBO0VEdkJOO0VDeUJNO0lBQ0ksZUFBQTtJQUNBLDJCQUFBO0lBQ0EsMEJBQUE7RUR2QlY7RUM0QlU7SUFDSSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQ0FBQTtFRDFCZDtFQzRCYztJQUNJLGVBQUE7SUFDQSxjQUFBO0VEMUJsQjtFQytCTTtJQUNJLFlBQUE7SUFDQSxtQkFBQTtFRDdCVjtFQytCVTtJQUNJLGVBQUE7RUQ3QmQ7QUFDRjtBQ21DQTtFQUlRO0lBQ0ksZUFBQTtJQUNBLDJCQUFBO0lBQ0EsMEJBQUE7RURwQ1Y7RUN1Q007SUFDSSxlQUFBO0VEckNWO0VDd0NNO0lBQ0ksZUFBQTtFRHRDVjtFQ3lDTTtJQUNJLFlBQUE7RUR2Q1Y7RUN5Q1U7SUFDSSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQ0FBQTtFRHZDZDtFQ3lDYztJQUNJLGVBQUE7SUFDQSxhQUFBO0VEdkNsQjtBQUNGO0FDOENBO0VBSVE7SUFDSSxlQUFBO0lBQ0EsMkJBQUE7SUFDQSwwQkFBQTtFRC9DVjtFQ2tETTtJQUNJLGVBQUE7RURoRFY7RUNtRE07SUFDSSxlQUFBO0VEakRWO0VDb0RNO0lBQ0ksWUFBQTtFRGxEVjtFQ29EVTtJQUNJLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGlDQUFBO0VEbERkO0VDb0RjO0lBQ0ksZUFBQTtJQUNBLGFBQUE7RURsRGxCO0VDdURNO0lBQ0ksVUFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFRHJEVjtFQ3VEVTtJQUNJLGVBQUE7RURyRGQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQyMHB4KSB7XG4gIGhlYWRlciAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5sb2dvLWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGhlYWRlciAuY2hpbGQuc2hhcmUtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gICAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLmxvZ28tY29udGFpbmVyIHtcbiAgICBmbGV4LWdyb3c6IDQ7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5uYXYtY29udGFpbmVyIHtcbiAgICBvcmRlcjogNTtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgI2JmYmZiZjFhO1xuICAgIHBhZGRpbmctdG9wOiAxZW07XG4gICAgZmxleC1iYXNpczogMTAwJTtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLm5hdi1jb250YWluZXIgdWwge1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLm5hdi1jb250YWluZXIgdWwgbGkgYSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNWU4MWFiYmQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICB9XG4gIGhlYWRlciAuY2hpbGQubmF2LWNvbnRhaW5lciB1bCBsaSBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzIyMmY1YztcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5uYXYtY29udGFpbmVyIHVsIGxpIGEuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjMjIyZjVjO1xuICB9XG4gIGhlYWRlciAuY2hpbGQubmF2LWNvbnRhaW5lciB1bCBsaSBhOm5vdCguYWN0aXZlKTpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLm5hdi1jb250YWluZXIgdWwgbGk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIuKAolwiO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICM1ZTgxYWJiZDtcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICB9XG4gIGhlYWRlciAuY2hpbGQubmF2LWNvbnRhaW5lciB1bCBsaTpob3Zlcjo6YmVmb3JlIHtcbiAgICBjb2xvcjogIzIyMmY1YztcbiAgfVxuICBoZWFkZXIgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIGZsZXgtZ3JvdzogaW5pdGlhbDtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciAuZnJhbWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLm5hdmJhci10b2dnbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLm5hdmJhci10b2dnbGUgLmJhci1pY29uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIGhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIGhlYWRlciAuY2hpbGQubmF2YmFyLXRvZ2dsZSAuYmFyLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiN2M2MWY7XG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsIGxpIHtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgbWFyZ2luOiAxNXB4IDAgMCAwO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNiZmJmYmYzYjtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciAuZnJhbWUgdWwgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG4gIGhlYWRlciAuY2hpbGQuc2hhcmUtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLnNoYXJlLWNvbnRhaW5lciAuaWNvbiB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xuICBoZWFkZXIgLmNoaWxkLm5hdmJhci10b2dnbGUgLmJhci1pY29uIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2IzYjdjNjFmO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xuICB9XG4gIGhlYWRlciAuY2hpbGQubG9nby1jb250YWluZXIgYSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG4gIGhlYWRlciAuY2hpbGQubmF2LWNvbnRhaW5lciB1bCBsaSBhIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsIGxpIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMCAwIDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2JmYmZiZjNiO1xuICB9XG4gIGhlYWRlciAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIC5mcmFtZSB1bCBsaSBhIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luOiAwIDhweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgaGVhZGVyIC5jaGlsZC5uYXZiYXItdG9nZ2xlIC5iYXItaWNvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiM2I3YzYxZjtcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLmxvZ28tY29udGFpbmVyIGEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLm5hdi1jb250YWluZXIgdWwgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIGhlYWRlciAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIC5mcmFtZSB1bCB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG4gIGhlYWRlciAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIC5mcmFtZSB1bCBsaSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDAgMCAwO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNiZmJmYmYzYjtcbiAgfVxuICBoZWFkZXIgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciAuZnJhbWUgdWwgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogMCA4cHg7XG4gIH1cbiAgaGVhZGVyIC5jaGlsZC5zaGFyZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG4gIGhlYWRlciAuY2hpbGQuc2hhcmUtY29udGFpbmVyIC5pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn0iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDIwcHgpIHtcclxuXHJcbiAgICBoZWFkZXIge1xyXG5cclxuICAgICAgICAuY2hpbGQubGFuZ3VhZ2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNoaWxkLmxvZ28tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNoaWxkLnNoYXJlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4gICAgaGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOXB4IDAgcmdiYSgxMTIsIDExMiwgMTEyLCAwLjE2KTsgXHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMTEyLCAxMTIsIDExMiwgMC4xNik7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAgICAgLmNoaWxkLmxvZ28tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZmxleC1ncm93OiA0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNoaWxkLm5hdi1jb250YWluZXIge1xyXG4gICAgICAgICAgICBvcmRlcjogNTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNiZmJmYmYxYTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG5cclxuICAgICAgICAgICAgICAgIGxpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1ZTgxYWJiZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4OyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMmY1YztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpub3QoLmFjdGl2ZSk6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFwyMDIyJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNWU4MWFiYmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgZmxleC1ncm93OiBpbml0aWFsO1xyXG5cclxuICAgICAgICAgICAgLmZyYW1lIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNoaWxkLm5hdmJhci10b2dnbGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC5iYXItaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcblxyXG4gICAgaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5jaGlsZC5uYXZiYXItdG9nZ2xlIC5iYXItaWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2IzYjdjNjFmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIge1xyXG5cclxuICAgICAgICAgICAgLmZyYW1lIHVsIGxpIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwIDAgMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNiZmJmYmYzYjtcclxuXHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jaGlsZC5zaGFyZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xyXG5cclxuICAgIGhlYWRlciB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNoaWxkLm5hdmJhci10b2dnbGUgLmJhci1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjNiN2M2MWY7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNoaWxkLmxvZ28tY29udGFpbmVyIGEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2hpbGQubmF2LWNvbnRhaW5lciB1bCBsaSBhIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNoaWxkLmxhbmd1YWdlLWNvbnRhaW5lciAuZnJhbWUgdWwge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwIDAgMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNiZmJmYmYzYjtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpIHtcclxuXHJcbiAgICBoZWFkZXIge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5jaGlsZC5uYXZiYXItdG9nZ2xlIC5iYXItaWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2IzYjdjNjFmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jaGlsZC5sb2dvLWNvbnRhaW5lciBhIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNoaWxkLm5hdi1jb250YWluZXIgdWwgbGkgYSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jaGlsZC5sYW5ndWFnZS1jb250YWluZXIgLmZyYW1lIHVsIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMCAwIDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjYmZiZmJmM2I7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuXHJcbiAgICAgICAgLmNoaWxkLnNoYXJlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG5cclxuICAgICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9ICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-header",
                templateUrl: "./header.component.html",
                styleUrls: [
                    "./header.component.scss",
                    "./header.component.responsivity.scss",
                ],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: ng_navigator_share__WEBPACK_IMPORTED_MODULE_3__["NgNavigatorShareService"] }]; }, { nav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["nav"]
        }], shareBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["shareBtn"]
        }], pageXOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], activeSection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/posts/posts-carousel/posts-carousel.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/posts/posts-carousel/posts-carousel.component.ts ***!
  \******************************************************************/
/*! exports provided: PostsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsCarouselComponent", function() { return PostsCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils */ "./src/app/core/utils.ts");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/pipe/localized-date.pipe */ "./src/app/core/pipe/localized-date.pipe.ts");
/* harmony import */ var _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/pipe/safari-date-formatter.pipe */ "./src/app/core/pipe/safari-date-formatter.pipe.ts");









var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc posts
     */ 
    const MSG_EXTERNAL_of$$SRC_APP_POSTS_POSTS_CAROUSEL_POSTS_CAROUSEL_COMPONENT_TS__1 = goog.getMsg("of");
    I18N_0 = MSG_EXTERNAL_of$$SRC_APP_POSTS_POSTS_CAROUSEL_POSTS_CAROUSEL_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:posts@@of␟169eed2bc3e08e1bea977bcc5d799379f6b8a758␟5881876145178332550:of`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_posts$$SRC_APP_POSTS_POSTS_CAROUSEL_POSTS_CAROUSEL_COMPONENT_TS__3 = goog.getMsg("posts");
    I18N_2 = MSG_EXTERNAL_posts$$SRC_APP_POSTS_POSTS_CAROUSEL_POSTS_CAROUSEL_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:nav@@posts␟7197f051d479dbfe2fa9732db540041536d3bddc␟7470893660683726788:posts`;
}
function PostsCarouselComponent_div_0_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostsCarouselComponent_div_0_li_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const post_r36 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r37.open(post_r36.thumbnail); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "meta", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "meta", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "localizedDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "safariDateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "meta", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "meta", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "meta", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", "url(" + post_r36.thumbnail + ")", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("content", post_r36.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("content", post_r36.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 10, post_r36.date), "yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r36.text, " ");
} }
const _c4 = function (a0) { return { partial: a0 }; };
function PostsCarouselComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "meta", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ol", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PostsCarouselComponent_div_0_li_4_Template, 16, 12, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](14, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](18, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c4, ctx_r33._posts.length < 3 && ctx_r33.currentPage >= ctx_r33._originalPosts.length / ctx_r33.resultsPerPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r33._postsSmall);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r33.start + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r33.end > (ctx_r33._originalPosts == null ? null : ctx_r33._originalPosts.length) ? ctx_r33._originalPosts == null ? null : ctx_r33._originalPosts.length : ctx_r33.end);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r33._originalPosts == null ? null : ctx_r33._originalPosts.length);
} }
function PostsCarouselComponent_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostsCarouselComponent_div_1_li_4_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const post_r41 = ctx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r42.open(post_r41.thumbnail); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "meta", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "meta", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "localizedDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "safariDateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "meta", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "meta", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "meta", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", "url(" + post_r41.thumbnail + ")", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("content", post_r41.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("content", post_r41.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 10, post_r41.date), "yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r41.text, " ");
} }
function PostsCarouselComponent_div_1_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostsCarouselComponent_div_1_li_6_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const post_r44 = ctx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r45.open(post_r44.thumbnail); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "meta", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "meta", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "localizedDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "safariDateFormatter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "meta", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "meta", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "meta", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h2", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-image", "url(" + post_r44.thumbnail + ")", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("content", post_r44.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("content", post_r44.thumbnail);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 10, post_r44.date), "yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r44.text, " ");
} }
function PostsCarouselComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "meta", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ol", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PostsCarouselComponent_div_1_li_4_Template, 16, 12, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ol", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PostsCarouselComponent_div_1_li_6_Template, 16, 12, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c4, ctx_r34._posts.length < 3 && ctx_r34.currentPage >= ctx_r34._originalPosts.length / ctx_r34.resultsPerPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r34._posts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c4, ctx_r34._posts.length < 3 && ctx_r34.currentPage >= ctx_r34._originalPosts.length / ctx_r34.resultsPerPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r34._posts2);
} }
class PostsCarouselComponent {
    constructor(elRef, _lightboxConfig, _lightbox) {
        this.elRef = elRef;
        this._lightboxConfig = _lightboxConfig;
        this._lightbox = _lightbox;
        this._postsSmall = [];
        this._posts = [];
        this._posts2 = [];
        this._originalPosts = [];
        this.onResultsPerPageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get currentPage() {
        return this._currentPage;
    }
    set currentPage(value) {
        if (value) {
            this._currentPage = value;
            this.populateCarousel();
        }
    }
    get posts() {
        return this._posts;
    }
    set posts(value) {
        if (value) {
            this._originalPosts = value;
            this.onResizeElement();
        }
    }
    ngOnInit() {
        console.log(window.screen.width);
        if (window.screen.width < 1500) {
            // 768px portrait
            this.mobile = true;
        }
    }
    onResize() {
        this.onResizeElement();
    }
    onResizeElement() {
        this.elWidth = this.elRef.nativeElement.clientWidth;
        this.resultsPerPage = Math.ceil(this.elWidth / 465);
        this.populateCarousel();
    }
    populateCarousel() {
        if (this._currentPage && this._posts) {
            this._posts = this._originalPosts.slice(0, 3);
            this._posts2 = this._originalPosts.slice(3);
            this.onResultsPerPageChanged.emit(this.resultsPerPage);
            this.start = (this._currentPage - 1) * this.resultsPerPage;
            this.end = this._currentPage * this.resultsPerPage;
            this._postsSmall = this._originalPosts.slice(this.start, this.end);
            this._postsSmall.sort((a, b) => +new Date(b.date) - +new Date(a.date));
            this.onResultsPerPageChanged.emit(this.resultsPerPage);
        }
    }
    open(source) {
        // open lightbox
        if (source == "../../assets/posts/optx.png") {
            source = "../../assets/posts/optx-blur.png";
        }
        if (source == "../../assets/posts/mfo.png") {
            source = "../../assets/posts/mfo-blur.png";
        }
        const albums = [
            {
                src: source,
                caption: "",
                thumb: source,
            },
        ];
        this._lightbox.open(albums, 0);
    }
    close() {
        // close lightbox programmatically
        this._lightbox.close();
    }
}
PostsCarouselComponent.ɵfac = function PostsCarouselComponent_Factory(t) { return new (t || PostsCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__["LightboxConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__["Lightbox"])); };
PostsCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PostsCarouselComponent, selectors: [["app-posts-carousel"]], hostBindings: function PostsCarouselComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function PostsCarouselComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, inputs: { currentPage: "currentPage", posts: "posts" }, outputs: { onResultsPerPageChanged: "onResultsPerPageChanged" }, decls: 2, vars: 2, consts: [["class", "events-content-small", "itemscope", "", "itemtype", "https://schema.org/Article", 4, "ngIf"], ["class", "events-content", "itemscope", "", "itemtype", "https://schema.org/Article", 4, "ngIf"], ["itemscope", "", "itemtype", "https://schema.org/Article", 1, "events-content-small"], ["itemprop", "publisher", "content", "Eris Aguilar"], ["itemprop", "author", "content", "Eris Aguilar"], [3, "ngClass"], ["itemprop", "techArticle", "itemscope", "", "itemtype", "https://schema.org/TechArticle", 4, "ngFor", "ngForOf"], [1, "paginator"], [1, "range"], [1, "start"], [1, "devider"], [1, "end"], [1, "label"], ["itemprop", "techArticle", "itemscope", "", "itemtype", "https://schema.org/TechArticle"], ["itemprop", "item", 1, "card", 3, "click"], ["rel", "nofollow", "target", "_blank", "itemprop", "url"], [1, "thumbnail"], ["itemprop", "thumbnailUrl", 3, "content"], ["itemprop", "image", 3, "content"], ["itemprop", "datePublished", 1, "date"], [1, "content"], ["itemprop", "creator", "content", "Eris Aguilar"], [1, "title"], ["itemscope", "", "itemtype", "https://schema.org/Article", 1, "events-content"]], template: function PostsCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PostsCarouselComponent_div_0_Template, 19, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PostsCarouselComponent_div_1_Template, 7, 8, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.mobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_core_pipe_localized_date_pipe__WEBPACK_IMPORTED_MODULE_6__["LocalizedDatePipe"], _core_pipe_safari_date_formatter_pipe__WEBPACK_IMPORTED_MODULE_7__["SafariDateFormatterPipe"]], styles: [".events-content-small[_ngcontent-%COMP%] {\n  -ms-flex-positive: 4;\n      flex-grow: 4;\n  position: relative;\n  width: 100%;\n  transition: height 0.4s;\n}\n.events-content-small[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.events-content-small[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 1em;\n  text-align: right;\n}\n.events-content-small[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.events-content-small[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  cursor: pointer;\n  background-color: #fff;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(240, 223, 223, 0.16);\n  border: 1px solid #c8cad547;\n  transition: all 0.2s ease-in-out;\n  width: 400px;\n}\n.events-content-small[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.events-content-small[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  height: 280px;\n  background-color: #c1c7dc;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 400px 280px;\n}\n.events-content-small[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #fff;\n  padding: 5px 5px 0 5px;\n  border-radius: 10px 0 0 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #222f5c;\n}\n.events-content-small[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 1em;\n  height: 60px;\n}\n.events-content-small[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #222f5c;\n  font-weight: 600;\n  font-size: 18px;\n  text-align: left;\n  height: 60px;\n  text-align: center;\n}\n.events-content-small[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #5e6788;\n  text-align: left;\n  line-height: 1.5em;\n}\n.events-content-small[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button.read-more[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  background-color: #fff;\n  padding: 5px 10px;\n  border-radius: 15px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  color: #3d4870;\n  cursor: pointer;\n  margin: 0 15px 15px 0;\n}\n.events-content-small[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button.read-more[_ngcontent-%COMP%]:hover {\n  background-color: #ededef;\n}\n.events-content-small[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  -ms-transform: scale(1.025);\n      transform: scale(1.025);\n}\n.events-content-small[_ngcontent-%COMP%]   ol.partial[_ngcontent-%COMP%] {\n  -ms-flex-pack: start;\n      justify-content: start;\n}\n.events-content-small[_ngcontent-%COMP%]   ol.partial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  max-width: 360px;\n}\n.events-content-small[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #222f5c;\n  font-style: italic;\n}\n.events-content-small[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-left: 5px;\n}\n.events-content-small[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.events-content-small[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n}\n.events-content[_ngcontent-%COMP%] {\n  -ms-flex-positive: 4;\n      flex-grow: 4;\n  position: relative;\n  width: 100%;\n  transition: height 0.4s;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: left;\n      justify-content: left;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 1em;\n  text-align: right;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  cursor: pointer;\n  background-color: #fff;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  border-radius: 15px;\n  box-shadow: 0 0 9px 0 rgba(240, 223, 223, 0.16);\n  border: 1px solid #c8cad547;\n  transition: all 0.2s ease-in-out;\n  width: 400px;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n  height: 280px;\n  background-color: #c1c7dc;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 400px 280px;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background-color: #fff;\n  padding: 5px 5px 0 5px;\n  border-radius: 10px 0 0 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #222f5c;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 1em;\n  height: 60px;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #222f5c;\n  font-weight: 600;\n  font-size: 18px;\n  text-align: left;\n  height: 60px;\n  text-align: center;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #5e6788;\n  text-align: left;\n  line-height: 1.5em;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button.read-more[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  background-color: #fff;\n  padding: 5px 10px;\n  border-radius: 15px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  color: #3d4870;\n  cursor: pointer;\n  margin: 0 15px 15px 0;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button.read-more[_ngcontent-%COMP%]:hover {\n  background-color: #ededef;\n}\n.events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  -ms-transform: scale(1.025);\n      transform: scale(1.025);\n}\n.events-content[_ngcontent-%COMP%]   ol.partial[_ngcontent-%COMP%] {\n  -ms-flex-pack: start;\n      justify-content: start;\n}\n.events-content[_ngcontent-%COMP%]   ol.partial[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  max-width: 360px;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%] {\n  text-align: right;\n  color: #222f5c;\n  font-style: italic;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-left: 5px;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  text-transform: lowercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdHMtY2Fyb3VzZWwvQzpcXFVzZXJzXFxFcmlzXFxEb2N1bWVudHNcXGxpdmUtcmVzdW1lL3NyY1xcYXBwXFxwb3N0c1xccG9zdHMtY2Fyb3VzZWxcXHBvc3RzLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3N0cy9wb3N0cy1jYXJvdXNlbC9wb3N0cy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO01BQUEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDQ0Y7QURDRTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO01BQUEsNkJBQUE7QUNDSjtBRENJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0NOO0FEQ007RUFDRSxlQUFBO0FDQ1I7QURHSTtFQUNFLG9CQUFBO01BQUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO01BQUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUNETjtBREdNO0VBQ0UscUJBQUE7QUNEUjtBRElNO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0FDRlI7QURJUTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRlY7QURNTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDSlI7QURNUTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSlY7QURPUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTFY7QURTTTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNQUjtBRFNRO0VBQ0UseUJBQUE7QUNQVjtBRFdNO0VBQ0UsMkJBQUE7TUFBQSx1QkFBQTtBQ1RSO0FEWUk7RUFDRSxvQkFBQTtNQUFBLHNCQUFBO0FDVk47QURZTTtFQUNFLGdCQUFBO0FDVlI7QURlRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDYko7QURlSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsZ0JBQUE7QUNkTjtBRGlCSTtFQUNFLHlCQUFBO0FDZk47QURvQkE7RUFDRSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNqQkY7QURtQkU7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtNQUFBLHFCQUFBO0FDakJKO0FEbUJJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ2pCTjtBRG1CTTtFQUNFLGVBQUE7QUNqQlI7QURxQkk7RUFDRSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDbkJOO0FEcUJNO0VBQ0UscUJBQUE7QUNuQlI7QURzQk07RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7QUNwQlI7QURzQlE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ3BCVjtBRHdCTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDdEJSO0FEd0JRO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUN0QlY7QUR5QlE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ3ZCVjtBRDJCTTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUN6QlI7QUQyQlE7RUFDRSx5QkFBQTtBQ3pCVjtBRDZCTTtFQUNFLDJCQUFBO01BQUEsdUJBQUE7QUMzQlI7QUQ4Qkk7RUFDRSxvQkFBQTtNQUFBLHNCQUFBO0FDNUJOO0FEOEJNO0VBQ0UsZ0JBQUE7QUM1QlI7QURpQ0U7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQy9CSjtBRGlDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQy9CTjtBRGtDSTtFQUNFLGdCQUFBO0FDaENOO0FEbUNJO0VBQ0UseUJBQUE7QUNqQ04iLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0cy1jYXJvdXNlbC9wb3N0cy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ldmVudHMtY29udGVudC1zbWFsbCB7XHJcbiAgZmxleC1ncm93OiA0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC40cztcclxuXHJcbiAgb2wge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDI0MCwgMjIzLCAyMjMsIDAuMTYpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjYWQ1NDc7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB3aWR0aDogNDAwcHg7XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzdkYztcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MDBweCAyODBweDtcclxuXHJcbiAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDVweCAwIDVweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgY29sb3I6ICMyMjJmNWM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuXHJcbiAgICAgICAgaDIudGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBjb2xvcjogIzVlNjc4ODtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ucmVhZC1tb3JlIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjM2Q0ODcwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBtYXJnaW46IDAgMTVweCAxNXB4IDA7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLnBhcnRpYWwge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG5cclxuICAgICAgLmNhcmQge1xyXG4gICAgICAgIG1heC13aWR0aDogMzYwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYWdpbmF0b3Ige1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzIyMmY1YztcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yYW5nZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ldmVudHMtY29udGVudCB7XHJcbiAgZmxleC1ncm93OiA0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC40cztcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG5cclxuICBvbCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDI0MCwgMjIzLCAyMjMsIDAuMTYpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjYWQ1NDc7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB3aWR0aDogNDAwcHg7XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2MxYzdkYztcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0MDBweCAyODBweDtcclxuXHJcbiAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDVweCAwIDVweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgY29sb3I6ICMyMjJmNWM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgIGhlaWdodDogNjBweDtcclxuXHJcbiAgICAgICAgaDIudGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIGNvbG9yOiAjMjIyZjVjO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBjb2xvcjogIzVlNjc4ODtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b24ucmVhZC1tb3JlIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjM2Q0ODcwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBtYXJnaW46IDAgMTVweCAxNXB4IDA7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLnBhcnRpYWwge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG5cclxuICAgICAgLmNhcmQge1xyXG4gICAgICAgIG1heC13aWR0aDogMzYwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYWdpbmF0b3Ige1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzIyMmY1YztcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yYW5nZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmV2ZW50cy1jb250ZW50LXNtYWxsIHtcbiAgZmxleC1ncm93OiA0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC40cztcbn1cbi5ldmVudHMtY29udGVudC1zbWFsbCBvbCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmV2ZW50cy1jb250ZW50LXNtYWxsIG9sIGxpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmV2ZW50cy1jb250ZW50LXNtYWxsIG9sIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4uZXZlbnRzLWNvbnRlbnQtc21hbGwgb2wgLmNhcmQge1xuICBmbGV4LWdyb3c6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMjQwLCAyMjMsIDIyMywgMC4xNik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGNhZDU0NztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHdpZHRoOiA0MDBweDtcbn1cbi5ldmVudHMtY29udGVudC1zbWFsbCBvbCAuY2FyZCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmV2ZW50cy1jb250ZW50LXNtYWxsIG9sIC5jYXJkIC50aHVtYm5haWwge1xuICBoZWlnaHQ6IDI4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjN2RjO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwMHB4IDI4MHB4O1xufVxuLmV2ZW50cy1jb250ZW50LXNtYWxsIG9sIC5jYXJkIC50aHVtYm5haWwgLmRhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweCA1cHggMCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyMjJmNWM7XG59XG4uZXZlbnRzLWNvbnRlbnQtc21hbGwgb2wgLmNhcmQgLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxZW07XG4gIGhlaWdodDogNjBweDtcbn1cbi5ldmVudHMtY29udGVudC1zbWFsbCBvbCAuY2FyZCAuY29udGVudCBoMi50aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjMjIyZjVjO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGhlaWdodDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmV2ZW50cy1jb250ZW50LXNtYWxsIG9sIC5jYXJkIC5jb250ZW50IHAuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNWU2Nzg4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMS41ZW07XG59XG4uZXZlbnRzLWNvbnRlbnQtc21hbGwgb2wgLmNhcmQgYnV0dG9uLnJlYWQtbW9yZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzNkNDg3MDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAgMTVweCAxNXB4IDA7XG59XG4uZXZlbnRzLWNvbnRlbnQtc21hbGwgb2wgLmNhcmQgYnV0dG9uLnJlYWQtbW9yZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWY7XG59XG4uZXZlbnRzLWNvbnRlbnQtc21hbGwgb2wgLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbn1cbi5ldmVudHMtY29udGVudC1zbWFsbCBvbC5wYXJ0aWFsIHtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cbi5ldmVudHMtY29udGVudC1zbWFsbCBvbC5wYXJ0aWFsIC5jYXJkIHtcbiAgbWF4LXdpZHRoOiAzNjBweDtcbn1cbi5ldmVudHMtY29udGVudC1zbWFsbCAucGFnaW5hdG9yIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjMjIyZjVjO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uZXZlbnRzLWNvbnRlbnQtc21hbGwgLnBhZ2luYXRvciBzcGFuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmV2ZW50cy1jb250ZW50LXNtYWxsIC5wYWdpbmF0b3IgLnJhbmdlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5ldmVudHMtY29udGVudC1zbWFsbCAucGFnaW5hdG9yIC5sYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59XG5cbi5ldmVudHMtY29udGVudCB7XG4gIGZsZXgtZ3JvdzogNDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNHM7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xufVxuLmV2ZW50cy1jb250ZW50IG9sIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuLmV2ZW50cy1jb250ZW50IG9sIGxpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmV2ZW50cy1jb250ZW50IG9sIGxpOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQge1xuICBmbGV4LWdyb3c6IDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMCAwIDlweCAwIHJnYmEoMjQwLCAyMjMsIDIyMywgMC4xNik7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGNhZDU0NztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHdpZHRoOiA0MDBweDtcbn1cbi5ldmVudHMtY29udGVudCBvbCAuY2FyZCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC50aHVtYm5haWwge1xuICBoZWlnaHQ6IDI4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFjN2RjO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDQwMHB4IDI4MHB4O1xufVxuLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC50aHVtYm5haWwgLmRhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweCA1cHggMCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyMjJmNWM7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgLmNvbnRlbnQge1xuICBwYWRkaW5nOiAxZW07XG4gIGhlaWdodDogNjBweDtcbn1cbi5ldmVudHMtY29udGVudCBvbCAuY2FyZCAuY29udGVudCBoMi50aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjMjIyZjVjO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGhlaWdodDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC5jb250ZW50IHAuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNWU2Nzg4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMS41ZW07XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgYnV0dG9uLnJlYWQtbW9yZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzNkNDg3MDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAgMTVweCAxNXB4IDA7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgYnV0dG9uLnJlYWQtbW9yZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWY7XG59XG4uZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcbn1cbi5ldmVudHMtY29udGVudCBvbC5wYXJ0aWFsIHtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cbi5ldmVudHMtY29udGVudCBvbC5wYXJ0aWFsIC5jYXJkIHtcbiAgbWF4LXdpZHRoOiAzNjBweDtcbn1cbi5ldmVudHMtY29udGVudCAucGFnaW5hdG9yIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjMjIyZjVjO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uZXZlbnRzLWNvbnRlbnQgLnBhZ2luYXRvciBzcGFuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmV2ZW50cy1jb250ZW50IC5wYWdpbmF0b3IgLnJhbmdlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5ldmVudHMtY29udGVudCAucGFnaW5hdG9yIC5sYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59Il19 */", "@media screen and (max-width: 1024px) {\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    min-height: initial;\n  }\n}\n@media screen and (max-width: 670px) {\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 0.7em;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   button.read-more[_ngcontent-%COMP%] {\n    border-radius: 15px;\n    font-size: 12px;\n  }\n}\n@media screen and (max-width: 550px) {\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2.title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .events-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p.description[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%], .events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%]   .range[_ngcontent-%COMP%]   .devider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 450px) {\n  .events-content[_ngcontent-%COMP%]   .paginator[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdHMtY2Fyb3VzZWwvQzpcXFVzZXJzXFxFcmlzXFxEb2N1bWVudHNcXGxpdmUtcmVzdW1lL3NyY1xcYXBwXFxwb3N0c1xccG9zdHMtY2Fyb3VzZWxcXHBvc3RzLWNhcm91c2VsLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuc2NzcyIsInNyYy9hcHAvcG9zdHMvcG9zdHMtY2Fyb3VzZWwvcG9zdHMtY2Fyb3VzZWwuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUk7SUFDSSxtQkFBQTtFQ0FOO0FBQ0Y7QURHQTtFQVFnQjtJQUNJLGFBQUE7RUNSbEI7RURXYztJQUNJLGNBQUE7RUNUbEI7RURXa0I7SUFDSSxlQUFBO0VDVHRCO0VEWWtCO0lBQ0ksZUFBQTtFQ1Z0QjtFRGFrQjtJQUNJLG1CQUFBO0lBQ0EsZUFBQTtFQ1h0QjtBQUNGO0FEa0JBO0VBUWdCO0lBQ0ksYUFBQTtFQ3ZCbEI7RUQ0QmtCO0lBQ0ksZUFBQTtFQzFCdEI7RUQ2QmtCO0lBQ0ksZUFBQTtFQzNCdEI7RURvQ2M7SUFDSSxhQUFBO0VDbENsQjtBQUNGO0FEd0NBO0VBSVE7SUFDSSxrQkFBQTtFQ3pDVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdHMtY2Fyb3VzZWwvcG9zdHMtY2Fyb3VzZWwuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4gICAgLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC5jb250ZW50IHtcclxuICAgICAgICBtaW4taGVpZ2h0OiBpbml0aWFsO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzBweCkge1xyXG5cclxuICAgIC5ldmVudHMtY29udGVudCB7XHJcbiAgICBcclxuICAgICAgICBvbCB7XHJcbiAgICBcclxuICAgICAgICAgICAgLmNhcmQge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAudGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC43ZW07XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBoMi50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBwLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5yZWFkLW1vcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG5cclxuICAgIC5ldmVudHMtY29udGVudCB7XHJcblxyXG4gICAgICAgIG9sIHtcclxuICAgIFxyXG4gICAgICAgICAgICAuY2FyZCB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGgyLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGFnaW5hdG9yIHtcclxuXHJcbiAgICAgICAgICAgIC5yYW5nZSB7XHJcbiAgICAgICAgICAgICAgICAuc3RhcnQsIC5kZXZpZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG5cclxuICAgIC5ldmVudHMtY29udGVudCB7XHJcblxyXG4gICAgICAgIC5wYWdpbmF0b3Ige1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5ldmVudHMtY29udGVudCBvbCAuY2FyZCAuY29udGVudCB7XG4gICAgbWluLWhlaWdodDogaW5pdGlhbDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjcwcHgpIHtcbiAgLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC50aHVtYm5haWwge1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbiAgLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwLjdlbTtcbiAgfVxuICAuZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgLmNvbnRlbnQgaDIudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuZXZlbnRzLWNvbnRlbnQgb2wgLmNhcmQgLmNvbnRlbnQgcC5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5ldmVudHMtY29udGVudCBvbCAuY2FyZCAuY29udGVudCBidXR0b24ucmVhZC1tb3JlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC50aHVtYm5haWwge1xuICAgIGhlaWdodDogMTgwcHg7XG4gIH1cbiAgLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC5jb250ZW50IGgyLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmV2ZW50cy1jb250ZW50IG9sIC5jYXJkIC5jb250ZW50IHAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuZXZlbnRzLWNvbnRlbnQgLnBhZ2luYXRvciAucmFuZ2UgLnN0YXJ0LCAuZXZlbnRzLWNvbnRlbnQgLnBhZ2luYXRvciAucmFuZ2UgLmRldmlkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5ldmVudHMtY29udGVudCAucGFnaW5hdG9yIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("fadeInOut", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("void", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: 0,
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("void <=> *", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(300)),
            ]),
        ] } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_utils__WEBPACK_IMPORTED_MODULE_3__["debounce"])(25)
], PostsCarouselComponent.prototype, "onResize", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PostsCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "app-posts-carousel",
                templateUrl: "./posts-carousel.component.html",
                styleUrls: [
                    "./posts-carousel.component.scss",
                    "./posts-carousel.component.responsivity.scss",
                ],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("fadeInOut", [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("void", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            opacity: 0,
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("void <=> *", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(300)),
                    ]),
                ],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__["LightboxConfig"] }, { type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__["Lightbox"] }]; }, { onResultsPerPageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], currentPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], posts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ["window:resize"]
        }] }); })();


/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/data.service */ "./src/app/core/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _posts_carousel_posts_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts-carousel/posts-carousel.component */ "./src/app/posts/posts-carousel/posts-carousel.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");







var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc nav
     */ 
    const MSG_EXTERNAL_posts$$SRC_APP_POSTS_POSTS_COMPONENT_TS_1 = goog.getMsg("Projects");
    I18N_0 = MSG_EXTERNAL_posts$$SRC_APP_POSTS_POSTS_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:nav@@posts␟d2a7deb7096cada2c3177157652680fe7e6de0ed␟7091571651222742304:Projects`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_previous$$SRC_APP_POSTS_POSTS_COMPONENT_TS__3 = goog.getMsg("Previous");
    I18N_2 = MSG_EXTERNAL_previous$$SRC_APP_POSTS_POSTS_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:exp.nav@@previous␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
}
const _c4 = ["title", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_previous$$SRC_APP_POSTS_POSTS_COMPONENT_TS__6 = goog.getMsg("Previous");
    I18N_5 = MSG_EXTERNAL_previous$$SRC_APP_POSTS_POSTS_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:exp.nav@@previous␟680d5c75b7fd8d37961083608b9fcdc4167b4c43␟4452427314943113135:Previous`;
}
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_next$$SRC_APP_POSTS_POSTS_COMPONENT_TS__8 = goog.getMsg("Next");
    I18N_7 = MSG_EXTERNAL_next$$SRC_APP_POSTS_POSTS_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:exp.nav@@next␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
}
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc exp.nav
     */ 
    const MSG_EXTERNAL_next$$SRC_APP_POSTS_POSTS_COMPONENT_TS__10 = goog.getMsg("Next");
    I18N_9 = MSG_EXTERNAL_next$$SRC_APP_POSTS_POSTS_COMPONENT_TS__10;
}
else {
    I18N_9 = $localize `:exp.nav@@next␟f732c304c7433e5a83ffcd862c3dce709a0f4982␟3885497195825665706:Next`;
}
const _c11 = ["title", I18N_9];
const _c12 = function (a0) { return { disabled: a0 }; };
function PostsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostsComponent_div_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.onClickPrevious(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostsComponent_div_6_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.onClickNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, I18N_7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](14, _c11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c12, ctx_r29.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r29.faChevronLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c12, ctx_r29.currentPage === ctx_r29.ceil((ctx_r29.posts == null ? null : ctx_r29.posts.length) / ctx_r29.resultsPerPage)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r29.faChevronRight);
} }
class PostsComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.currentPage = 1;
        this.posts = [];
    }
    ngOnInit() {
        this.faChevronLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronLeft"];
        this.faChevronRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronRight"];
        // Fetch the Posts from the Data Service
        this.dataService.getPosts().subscribe((posts) => {
            this.posts = posts;
        });
        if (window.screen.width < 1500) {
            this.mobile = true;
        }
    }
    ceil(val) {
        return Math.ceil(val);
    }
    onClickPrevious() {
        this.currentPage--;
    }
    onClickNext() {
        this.currentPage++;
    }
    updateNavigation(resultsPerPage) {
        this.resultsPerPage = resultsPerPage;
    }
}
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
PostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostsComponent, selectors: [["app-posts"]], decls: 10, vars: 3, consts: [["id", "posts"], [1, "container"], [1, "top-container"], [1, "title"], ["class", "navigation", 4, "ngIf"], [1, "synopsis"], [1, "middle-container"], [3, "posts", "currentPage", "onResultsPerPageChanged"], [1, "navigation"], ["href", "javascript:void(0)", 1, "previous", 3, "ngClass", "click"], [1, "molding"], [1, "icon", 3, "icon", 6, "title"], [1, "divider"], ["href", "javascript:void(0)", 1, "next", 3, "ngClass", "click"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PostsComponent_div_6_Template, 15, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-posts-carousel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onResultsPerPageChanged", function PostsComponent_Template_app_posts_carousel_onResultsPerPageChanged_9_listener($event) { return ctx.updateNavigation($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("posts", ctx.posts)("currentPage", ctx.currentPage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _posts_carousel_posts_carousel_component__WEBPACK_IMPORTED_MODULE_4__["PostsCarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: ["#posts[_ngcontent-%COMP%] {\n  top: -4em;\n  position: relative;\n  -ms-flex-pack: center;\n      justify-content: center;\n  background-color: #fbfafa;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  width: 85vw;\n  max-width: 1400px;\n}\n\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 600;\n  color: #222f5c;\n}\n\n.container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 500;\n  color: #5e6788;\n  text-align: left;\n  margin-top: 0;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  color: #fff;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-top: 60px;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  -ms-flex-positive: 4;\n      flex-grow: 4;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  font-size: 30px;\n  font-weight: 500;\n  -ms-flex-align: center;\n      align-items: center;\n  text-align: center;\n  color: #222f5c;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #222f5c;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%] {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n  cursor: pointer;\n  text-align: left;\n  transition: text-shadow 0.3s linear;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .previous.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n  -ms-flex-positive: 2;\n      flex-grow: 2;\n  cursor: pointer;\n  text-align: right;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next.disabled[_ngcontent-%COMP%] {\n  cursor: no-drop;\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover {\n  text-shadow: 0 0 15px white;\n}\n\n.container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.container[_ngcontent-%COMP%]   .middle-container[_ngcontent-%COMP%] {\n  padding-bottom: 2em;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.container[_ngcontent-%COMP%]   .middle-container[_ngcontent-%COMP%]   app-posts-carousel[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvQzpcXFVzZXJzXFxFcmlzXFxEb2N1bWVudHNcXGxpdmUtcmVzdW1lL3NyY1xcYXBwXFxwb3N0c1xccG9zdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7TUFBQSx1QkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwwQkFBQTtNQUFBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDQUo7O0FER0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7TUFBQSxlQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURHSTtFQUNFLG9CQUFBO01BQUEsWUFBQTtBQ0ROOztBRElJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esb0JBQUE7TUFBQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7TUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0ZOOztBRElNO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDRlI7O0FES007RUFDRSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtBQ0hSOztBREtRO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0hWOztBRE9NO0VBQ0Usb0JBQUE7TUFBQSxZQUFBO0FDTFI7O0FEUU07RUFDRSxvQkFBQTtNQUFBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNOUjs7QURRUTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNOVjs7QURRUTtFQUNFLDJCQUFBO0FDTlY7O0FEVU07RUFDRSxZQUFBO0FDUlI7O0FEYUU7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ1hKOztBRGFJO0VBQ0UsV0FBQTtBQ1hOIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcG9zdHMge1xyXG4gIHRvcDogLTRlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmFmYTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiA4NXZ3O1xyXG4gIG1heC13aWR0aDogMTQwMHB4O1xyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMyMjJmNWM7XHJcbiAgfVxyXG5cclxuICBwLnN5bm9wc2lzIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzVlNjc4ODtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnRvcC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmbGV4LWdyb3c6IDQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmlnYXRpb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzIyMmY1YztcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzIyMmY1YztcclxuICAgICAgfVxyXG5cclxuICAgICAgLnByZXZpb3VzIHtcclxuICAgICAgICBmbGV4LWdyb3c6IDI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4zcyBsaW5lYXI7XHJcblxyXG4gICAgICAgICYuZGlzYWJsZWQge1xyXG4gICAgICAgICAgY3Vyc29yOiBuby1kcm9wO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZGl2aWRlciB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmV4dCB7XHJcbiAgICAgICAgZmxleC1ncm93OiAyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICAgICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgICAgICBjdXJzb3I6IG5vLWRyb3A7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5taWRkbGUtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIGFwcC1wb3N0cy1jYXJvdXNlbCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIjcG9zdHMge1xuICB0b3A6IC00ZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZhZmE7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogODV2dztcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG59XG4uY29udGFpbmVyIGgxIHtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIyMmY1Yztcbn1cbi5jb250YWluZXIgcC5zeW5vcHNpcyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM1ZTY3ODg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uY29udGFpbmVyIC50b3AtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICNmZmY7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbi5jb250YWluZXIgLnRvcC1jb250YWluZXIgLnRpdGxlIHtcbiAgZmxleC1ncm93OiA0O1xufVxuLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMjIyZjVjO1xufVxuLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzIyMmY1Yztcbn1cbi5jb250YWluZXIgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24gLnByZXZpb3VzIHtcbiAgZmxleC1ncm93OiAyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuM3MgbGluZWFyO1xufVxuLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiAucHJldmlvdXMuZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vLWRyb3A7XG4gIG9wYWNpdHk6IDAuNjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5kaXZpZGVyIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiAubmV4dCB7XG4gIGZsZXgtZ3JvdzogMjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jb250YWluZXIgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24gLm5leHQuZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vLWRyb3A7XG4gIG9wYWNpdHk6IDAuNjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5uZXh0OmhvdmVyIHtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHdoaXRlO1xufVxuLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiBzcGFuIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLmNvbnRhaW5lciAubWlkZGxlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFpbmVyIC5taWRkbGUtY29udGFpbmVyIGFwcC1wb3N0cy1jYXJvdXNlbCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */", "@media screen and (max-width: 670px) {\n  .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n@media screen and (max-width: 550px) {\n  .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .container[_ngcontent-%COMP%]   .middle-container[_ngcontent-%COMP%] {\n    padding-bottom: 1em;\n  }\n}\n@media screen and (max-width: 450px) {\n  .container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin: 0.65em 0;\n  }\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%] {\n    border: 3px solid #414c73;\n    display: inline-block;\n    padding: 0 5px 5px 5px;\n    border-radius: 10px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .molding[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 5px;\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 360px) {\n  .container[_ngcontent-%COMP%]   p.synopsis[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvQzpcXFVzZXJzXFxFcmlzXFxEb2N1bWVudHNcXGxpdmUtcmVzdW1lL3NyY1xcYXBwXFxwb3N0c1xccG9zdHMuY29tcG9uZW50LnJlc3BvbnNpdml0eS5zY3NzIiwic3JjL2FwcC9wb3N0cy9wb3N0cy5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJUTtJQUNJLGVBQUE7RUNGVjtFREtNO0lBQ0ksZUFBQTtFQ0hWO0VEUVU7SUFDSSxlQUFBO0VDTmQ7QUFDRjtBRFdBO0VBSVE7SUFDSSxlQUFBO0VDWlY7RURlTTtJQUNJLGVBQUE7RUNiVjtFRGtCVTtJQUNJLGVBQUE7RUNoQmQ7RURrQmM7SUFDSSxXQUFBO0VDaEJsQjtFRHFCTTtJQUNJLG1CQUFBO0VDbkJWO0FBQ0Y7QUR1QkE7RUFJUTtJQUNJLGdCQUFBO0VDeEJWO0VEMkJNO0lBQ0ksYUFBQTtFQ3pCVjtFRDhCVTtJQUNJLGVBQUE7RUM1QmQ7RUQ4QmM7SUFDSSxXQUFBO0VDNUJsQjtFRCtCYztJQUNJLGFBQUE7RUM3QmxCO0VEZ0NjO0lBQ0kseUJBQUE7SUFDQSxxQkFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUM5QmxCO0VEZ0NrQjtJQUNJLGVBQUE7RUM5QnRCO0VEaUNrQjtJQUNJLFdBQUE7SUFDQSxlQUFBO0VDL0J0QjtBQUNGO0FEc0NBO0VBRUk7SUFDSSxhQUFBO0VDckNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0cy5jb21wb25lbnQucmVzcG9uc2l2aXR5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzBweCkge1xyXG5cclxuICAgIC5jb250YWluZXIge1xyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBwLnN5bm9wc2lzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRvcC1jb250YWluZXIge1xyXG4gICAgXHJcbiAgICAgICAgICAgIC5uYXZpZ2F0aW9uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcC5zeW5vcHNpcyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50b3AtY29udGFpbmVyIHtcclxuICAgIFxyXG4gICAgICAgICAgICAubmF2aWdhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5taWRkbGUtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcblxyXG4gICAgLmNvbnRhaW5lciB7XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjY1ZW0gMDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBwLnN5bm9wc2lzIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50b3AtY29udGFpbmVyIHtcclxuICAgIFxyXG4gICAgICAgICAgICAubmF2aWdhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRpdmlkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tb2xkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNDE0YzczO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweCA1cHggNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG5cclxuICAgIC5jb250YWluZXIgcC5zeW5vcHNpcyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3MHB4KSB7XG4gIC5jb250YWluZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgfVxuICAuY29udGFpbmVyIHAuc3lub3BzaXMge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIC5jb250YWluZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgfVxuICAuY29udGFpbmVyIHAuc3lub3BzaXMge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiBzcGFuIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICAuY29udGFpbmVyIC5taWRkbGUtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuY29udGFpbmVyIGgxIHtcbiAgICBtYXJnaW46IDAuNjVlbSAwO1xuICB9XG4gIC5jb250YWluZXIgcC5zeW5vcHNpcyB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICAuY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiBzcGFuIHtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuICAuY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5kaXZpZGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5jb250YWluZXIgLnRvcC1jb250YWluZXIgLm5hdmlnYXRpb24gLm1vbGRpbmcge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICM0MTRjNzM7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDAgNXB4IDVweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICAuY29udGFpbmVyIC50b3AtY29udGFpbmVyIC5uYXZpZ2F0aW9uIC5tb2xkaW5nIC5pY29uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmNvbnRhaW5lciAudG9wLWNvbnRhaW5lciAubmF2aWdhdGlvbiAubW9sZGluZyBzcGFuIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5jb250YWluZXIgcC5zeW5vcHNpcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-posts",
                templateUrl: "./posts.component.html",
                styleUrls: ["./posts.component.scss", "./posts.component.responsivity.scss"],
            }]
    }], function () { return [{ type: _core_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/posts/posts.molule.ts":
/*!***************************************!*\
  !*** ./src/app/posts/posts.molule.ts ***!
  \***************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _posts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _posts_carousel_posts_carousel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts-carousel/posts-carousel.component */ "./src/app/posts/posts-carousel/posts-carousel.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");








class PostsModule {
}
PostsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostsModule });
PostsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostsModule_Factory(t) { return new (t || PostsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostsModule, { declarations: [_posts_component__WEBPACK_IMPORTED_MODULE_2__["PostsComponent"], _posts_carousel_posts_carousel_component__WEBPACK_IMPORTED_MODULE_3__["PostsCarouselComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]], exports: [_posts_component__WEBPACK_IMPORTED_MODULE_2__["PostsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]],
                declarations: [_posts_component__WEBPACK_IMPORTED_MODULE_2__["PostsComponent"], _posts_carousel_posts_carousel_component__WEBPACK_IMPORTED_MODULE_3__["PostsCarouselComponent"]],
                exports: [_posts_component__WEBPACK_IMPORTED_MODULE_2__["PostsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils */ "./src/app/core/utils.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _core_directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/directive/on-viewport.directive */ "./src/app/core/directive/on-viewport.directive.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");












const _c0 = function (a0) { return { sticky: a0 }; };
class ResumeComponent {
    constructor() {
        this.isSticky = false;
        this.pageYOffset = 0;
        this.checkResize();
    }
    checkScroll() {
        this.pageYOffset = window.pageYOffset;
        this.isSticky = pageYOffset >= 250;
    }
    checkResize() {
        this.pageXOffset = window.innerWidth;
    }
    ngOnInit() { }
    onViewport(isOnViewPort, element) {
        this.activeSection = element;
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], hostBindings: function ResumeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function ResumeComponent_scroll_HostBindingHandler() { return ctx.checkScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("resize", function ResumeComponent_resize_HostBindingHandler() { return ctx.checkResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 6, vars: 9, consts: [[3, "activeSection", "pageXOffset", "ngClass"], ["in-viewport", "", 3, "pageYOffset", "inViewport"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-welcome", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("inViewport", function ResumeComponent_Template_app_welcome_inViewport_1_listener($event) { return ctx.onViewport($event.value, "welcome"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-about", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("inViewport", function ResumeComponent_Template_app_about_inViewport_2_listener($event) { return ctx.onViewport($event.value, "about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-posts", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("inViewport", function ResumeComponent_Template_app_posts_inViewport_3_listener($event) { return ctx.onViewport($event.value, "posts"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-contact", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("inViewport", function ResumeComponent_Template_app_contact_inViewport_4_listener($event) { return ctx.onViewport($event.value, "contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeSection", ctx.activeSection)("pageXOffset", ctx.pageXOffset)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.isSticky));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageYOffset", ctx.pageYOffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageYOffset", ctx.pageYOffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageYOffset", ctx.pageYOffset);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageYOffset", ctx.pageYOffset);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"], _core_directive_on_viewport_directive__WEBPACK_IMPORTED_MODULE_6__["InViewportDirective"], _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__["PostsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]], styles: ["app-header[_ngcontent-%COMP%] {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    position: absolute;\r\n    z-index: 1001;\r\n    width: 100%;\r\n    padding: 1em 0;\r\n    transition: 0.3s;\r\n}\r\n\r\n.sticky[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    background-color: #fff;\r\n    box-shadow: 0 0 9px 0 rgba(112, 112, 112, 0.43);\r\n}\r\n\r\napp-footer[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: -3em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IscUJBQXVCO1FBQXZCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QiwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxMDAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxZW0gMDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5zdGlja3kge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA5cHggMCByZ2JhKDExMiwgMTEyLCAxMTIsIDAuNDMpO1xyXG59XHJcblxyXG5hcHAtZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTNlbTtcclxufSJdfQ== */", "@media screen and (max-width: 1024px) {\r\n\r\n    app-header[_ngcontent-%COMP%] { padding: 0; }\r\n\r\n    .sticky[_ngcontent-%COMP%] {\r\n        background-color: transparent;\r\n        box-shadow: none;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQucmVzcG9uc2l2aXR5LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhLFVBQVUsRUFBRTs7SUFFekI7UUFDSSw2QkFBNkI7UUFDN0IsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5yZXNwb25zaXZpdHkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4gICAgYXBwLWhlYWRlciB7IHBhZGRpbmc6IDA7IH1cclxuXHJcbiAgICAuc3RpY2t5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG59Il19 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])()
], ResumeComponent.prototype, "checkScroll", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])(25)
], ResumeComponent.prototype, "checkResize", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_core_utils__WEBPACK_IMPORTED_MODULE_2__["debounce"])(150)
], ResumeComponent.prototype, "onViewport", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.css', './resume.component.responsivity.css']
            }]
    }], function () { return []; }, { checkScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:scroll']
        }], checkResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize']
        }], onViewport: [] }); })();


/***/ }),

/***/ "./src/app/resume/resume.module.ts":
/*!*****************************************!*\
  !*** ./src/app/resume/resume.module.ts ***!
  \*****************************************/
/*! exports provided: ResumeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeModule", function() { return ResumeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _welcome_welcome_molule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../welcome/welcome.molule */ "./src/app/welcome/welcome.molule.ts");
/* harmony import */ var _experience_experience_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../experience/experience.module */ "./src/app/experience/experience.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _posts_posts_molule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../posts/posts.molule */ "./src/app/posts/posts.molule.ts");
/* harmony import */ var _contact_contact_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../contact/contact.service */ "./src/app/contact/contact.service.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");















class ResumeModule {
}
ResumeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResumeModule });
ResumeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ResumeModule_Factory(t) { return new (t || ResumeModule)(); }, providers: [_contact_contact_service__WEBPACK_IMPORTED_MODULE_12__["ContactService"]], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
            _welcome_welcome_molule__WEBPACK_IMPORTED_MODULE_8__["WelcomeModule"],
            _experience_experience_module__WEBPACK_IMPORTED_MODULE_9__["ExperienceModule"],
            _posts_posts_molule__WEBPACK_IMPORTED_MODULE_11__["PostsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResumeModule, { declarations: [_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
        _welcome_welcome_molule__WEBPACK_IMPORTED_MODULE_8__["WelcomeModule"],
        _experience_experience_module__WEBPACK_IMPORTED_MODULE_9__["ExperienceModule"],
        _posts_posts_molule__WEBPACK_IMPORTED_MODULE_11__["PostsModule"]], exports: [_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"],
                    _welcome_welcome_molule__WEBPACK_IMPORTED_MODULE_8__["WelcomeModule"],
                    _experience_experience_module__WEBPACK_IMPORTED_MODULE_9__["ExperienceModule"],
                    _posts_posts_molule__WEBPACK_IMPORTED_MODULE_11__["PostsModule"]
                ],
                declarations: [
                    _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]
                ],
                exports: [_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"]],
                providers: [_contact_contact_service__WEBPACK_IMPORTED_MODULE_12__["ContactService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/welcome/welcome-background/welcome-background.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/welcome/welcome-background/welcome-background.component.ts ***!
  \****************************************************************************/
/*! exports provided: WelcomeBackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeBackgroundComponent", function() { return WelcomeBackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WelcomeBackgroundComponent {
    constructor() {
    }
    ngOnInit() { }
}
WelcomeBackgroundComponent.ɵfac = function WelcomeBackgroundComponent_Factory(t) { return new (t || WelcomeBackgroundComponent)(); };
WelcomeBackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeBackgroundComponent, selectors: [["app-welcome-background"]], decls: 11, vars: 0, consts: [[1, "skills"], ["loading", "lazy", "src", "/assets/template/welcome/illustration-back.png", "alt", "Background circle", 1, "background"], ["loading", "lazy", "src", "/assets/template/welcome/icons/docker.svg", "alt", "Docker", 1, "skill-icon", "first"], ["loading", "lazy", "src", "/assets/template/welcome/icons/css3.svg", "alt", "CSS3", 1, "skill-icon", "second"], ["loading", "lazy", "src", "/assets/template/welcome/icons/git.svg", "alt", "Git", 1, "skill-icon", "third"], ["loading", "lazy", "src", "/assets/template/welcome/icons/html5.svg", "alt", "HTML5", 1, "skill-icon", "fourth"], ["loading", "lazy", "src", "/assets/template/welcome/icons/sql.svg", "alt", "SQL", 1, "skill-icon", "fifth"], ["loading", "lazy", "src", "/assets/template/welcome/icons/php.svg", "alt", "PHP", 1, "skill-icon", "sixth"], ["loading", "lazy", "src", "/assets/template/welcome/icons/java.svg", "alt", "JAVA", 1, "skill-icon", "seventh"], ["loading", "lazy", "src", "/assets/template/welcome/icons/bitbucket.svg", "alt", "BitBucket", 1, "skill-icon", "eighth"], ["loading", "lazy", "src", "/assets/template/welcome/icons/android.svg", "alt", "Android", 1, "skill-icon", "ninth"]], template: function WelcomeBackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".skills[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150px;\n  left: 5px;\n  z-index: 0;\n}\n.skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n  width: 535px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50px;\n  animation-name: floating-icons;\n  -webkit-animation-name: floating-icons;\n  animation-iteration-count: infinite;\n  -webkit-animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-timing-function: ease-in-out;\n  -webkit-animation-duration: 4s;\n          animation-duration: 4s;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%]:nth-child(2n+3) {\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n  top: 385px;\n  left: -35px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n  top: 300px;\n  left: -65px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n  top: 205px;\n  left: -85px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n  top: 120px;\n  left: -65px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n  top: 40px;\n  left: -20px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n  top: -20px;\n  left: 50px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n  top: -20px;\n  right: 50px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n  bottom: 110px;\n  right: -30px;\n}\n.skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n  bottom: 40px;\n  right: 10px;\n}\n@-webkit-keyframes floating-icons {\n  0% {\n    transform: translate(0%, 0%);\n  }\n  25% {\n    transform: translate(5%, 15%);\n  }\n  50% {\n    transform: translate(10%, 5%);\n  }\n  75% {\n    transform: translate(0%, 15%);\n  }\n  100% {\n    transform: translate(0%, 0%);\n  }\n}\n@keyframes floating-icons {\n  0% {\n    transform: translate(0%, 0%);\n  }\n  25% {\n    transform: translate(5%, 15%);\n  }\n  50% {\n    transform: translate(10%, 5%);\n  }\n  75% {\n    transform: translate(0%, 15%);\n  }\n  100% {\n    transform: translate(0%, 0%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWJhY2tncm91bmQvQzpcXFVzZXJzXFxFcmlzXFxEb2N1bWVudHNcXGxpdmUtcmVzdW1lL3NyY1xcYXBwXFx3ZWxjb21lXFx3ZWxjb21lLWJhY2tncm91bmRcXHdlbGNvbWUtYmFja2dyb3VuZC5zY3NzIiwic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUtYmFja2dyb3VuZC93ZWxjb21lLWJhY2tncm91bmQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDSCxVQUFBO0FDQ0Q7QURDQztFQUNDLFlBQUE7QUNDRjtBREVDO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBR0EsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkNBQUE7RUFDQSxzQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQ0ZGO0FES0U7RUFDQyw4QkFBQTtVQUFBLHNCQUFBO0FDSEg7QURPRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FDTEg7QURRRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FDTkg7QURTRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FDUEg7QURVRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FDUkg7QURXRTtFQUNDLFNBQUE7RUFDQSxXQUFBO0FDVEg7QURZRTtFQUNDLFVBQUE7RUFDQSxVQUFBO0FDVkg7QURhRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0FDWEg7QURjRTtFQUNDLGFBQUE7RUFDQSxZQUFBO0FDWkg7QURlRTtFQUNDLFlBQUE7RUFDQSxXQUFBO0FDYkg7QURrQkE7RUFDQztJQUFLLDRCQUFBO0VDZEo7RURlRDtJQUFNLDZCQUFBO0VDWkw7RURhRDtJQUFNLDZCQUFBO0VDVkw7RURXRDtJQUFNLDZCQUFBO0VDUkw7RURTRDtJQUFPLDRCQUFBO0VDTk47QUFDRjtBREFBO0VBQ0M7SUFBSyw0QkFBQTtFQ2RKO0VEZUQ7SUFBTSw2QkFBQTtFQ1pMO0VEYUQ7SUFBTSw2QkFBQTtFQ1ZMO0VEV0Q7SUFBTSw2QkFBQTtFQ1JMO0VEU0Q7SUFBTyw0QkFBQTtFQ05OO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUtYmFja2dyb3VuZC93ZWxjb21lLWJhY2tncm91bmQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5za2lsbHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNTBweDtcclxuICAgIGxlZnQ6IDVweDtcclxuXHR6LWluZGV4OiAwO1xyXG5cdFxyXG5cdGltZy5iYWNrZ3JvdW5kIHtcclxuXHRcdHdpZHRoOiA1MzVweDtcclxuXHR9XHJcblxyXG5cdC5za2lsbC1pY29uIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHdpZHRoOiA1MHB4O1xyXG5cclxuXHRcdC8vIERlZmluZSB0aGUgYW5pbWF0aW9ucyBmb3IgdGhlIGljb25zXHJcblx0XHRhbmltYXRpb24tbmFtZTogZmxvYXRpbmctaWNvbnM7XHJcblx0XHQtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmbG9hdGluZy1pY29ucztcclxuXHRcdGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG5cdFx0LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuXHRcdGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG5cdFx0LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuXHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XHJcblxyXG5cdFx0Ly8gT2RkIGljb25zIGhhdmUgZGlmZmVyZW50IGFuaW1hdGlvbiBmcmFtZS5cclxuXHRcdCY6bnRoLWNoaWxkKDJuKzMpIHtcclxuXHRcdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcclxuXHRcdH1cclxuXHJcblx0XHQvLyBTcGVjaWZpY2F0aW9ucyBmb3IgZWFjaCBpY29uIHBvc2l0aW9uaW5nXHJcblx0XHQmLmZpcnN0IHtcclxuXHRcdFx0dG9wOiAzODVweDtcclxuXHRcdFx0bGVmdDogLTM1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0Ji5zZWNvbmQge1xyXG5cdFx0XHR0b3A6IDMwMHB4O1xyXG5cdFx0XHRsZWZ0OiAtNjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQmLnRoaXJkIHtcclxuXHRcdFx0dG9wOiAyMDVweDtcclxuXHRcdFx0bGVmdDogLTg1cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0Ji5mb3VydGgge1xyXG5cdFx0XHR0b3A6IDEyMHB4O1xyXG5cdFx0XHRsZWZ0OiAtNjVweDtcclxuXHRcdH1cclxuXHJcblx0XHQmLmZpZnRoIHtcclxuXHRcdFx0dG9wOiA0MHB4O1xyXG5cdFx0XHRsZWZ0OiAtMjBweDtcclxuXHRcdH1cclxuXHJcblx0XHQmLnNpeHRoIHtcclxuXHRcdFx0dG9wOiAtMjBweDtcclxuXHRcdFx0bGVmdDogNTBweDtcclxuXHRcdH1cclxuXHJcblx0XHQmLnNldmVudGgge1xyXG5cdFx0XHR0b3A6IC0yMHB4O1xyXG5cdFx0XHRyaWdodDogNTBweDtcclxuXHRcdH1cclxuXHJcblx0XHQmLmVpZ2h0aCB7XHJcblx0XHRcdGJvdHRvbTogMTEwcHg7XHJcblx0XHRcdHJpZ2h0OiAtMzBweDtcclxuXHRcdH1cclxuXHJcblx0XHQmLm5pbnRoIHtcclxuXHRcdFx0Ym90dG9tOiA0MHB4O1xyXG5cdFx0XHRyaWdodDogMTBweDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmxvYXRpbmctaWNvbnMge1xyXG5cdDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTsgfVxyXG5cdDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDUlLCAxNSUpOyB9XHRcclxuXHQ1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMCUsIDUlKTsgfVx0XHJcblx0NzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDE1JSk7IH1cdFxyXG5cdDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpOyB9XHRcdFx0XHJcbn0iLCIuc2tpbGxzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1MHB4O1xuICBsZWZ0OiA1cHg7XG4gIHotaW5kZXg6IDA7XG59XG4uc2tpbGxzIGltZy5iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDUzNXB4O1xufVxuLnNraWxscyAuc2tpbGwtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwcHg7XG4gIGFuaW1hdGlvbi1uYW1lOiBmbG9hdGluZy1pY29ucztcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmxvYXRpbmctaWNvbnM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcbn1cbi5za2lsbHMgLnNraWxsLWljb246bnRoLWNoaWxkKDJuKzMpIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbn1cbi5za2lsbHMgLnNraWxsLWljb24uZmlyc3Qge1xuICB0b3A6IDM4NXB4O1xuICBsZWZ0OiAtMzVweDtcbn1cbi5za2lsbHMgLnNraWxsLWljb24uc2Vjb25kIHtcbiAgdG9wOiAzMDBweDtcbiAgbGVmdDogLTY1cHg7XG59XG4uc2tpbGxzIC5za2lsbC1pY29uLnRoaXJkIHtcbiAgdG9wOiAyMDVweDtcbiAgbGVmdDogLTg1cHg7XG59XG4uc2tpbGxzIC5za2lsbC1pY29uLmZvdXJ0aCB7XG4gIHRvcDogMTIwcHg7XG4gIGxlZnQ6IC02NXB4O1xufVxuLnNraWxscyAuc2tpbGwtaWNvbi5maWZ0aCB7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogLTIwcHg7XG59XG4uc2tpbGxzIC5za2lsbC1pY29uLnNpeHRoIHtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogNTBweDtcbn1cbi5za2lsbHMgLnNraWxsLWljb24uc2V2ZW50aCB7XG4gIHRvcDogLTIwcHg7XG4gIHJpZ2h0OiA1MHB4O1xufVxuLnNraWxscyAuc2tpbGwtaWNvbi5laWdodGgge1xuICBib3R0b206IDExMHB4O1xuICByaWdodDogLTMwcHg7XG59XG4uc2tpbGxzIC5za2lsbC1pY29uLm5pbnRoIHtcbiAgYm90dG9tOiA0MHB4O1xuICByaWdodDogMTBweDtcbn1cblxuQGtleWZyYW1lcyBmbG9hdGluZy1pY29ucyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgMCUpO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNSUsIDE1JSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMCUsIDUlKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAxNSUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gIH1cbn0iXX0= */", "@media screen and (max-width: 1024px) {\n  .skills[_ngcontent-%COMP%] {\n    top: 140px;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 390px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 310px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 250px;\n    left: -50px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 175px;\n    left: -60px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 100px;\n    left: -45px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 30px;\n    left: -10px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -20px;\n    left: 50px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -20px;\n    right: 40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 80px;\n    right: -40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 30px;\n    right: 0;\n  }\n}\n@media screen and (max-width: 880px) {\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 220px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 170px;\n    left: -45px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 115px;\n    left: -50px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 60px;\n    left: -35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 10px;\n    left: 0;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -30px;\n    left: 40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -30px;\n    right: 15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 85px;\n    right: -40px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 45px;\n    right: -15px;\n  }\n}\n@media screen and (max-width: 720px) {\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 230px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 27px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 165px;\n    left: -20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 130px;\n    left: -35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 90px;\n    left: -35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 50px;\n    left: -30px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 10px;\n    left: -5px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -20px;\n    left: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: 0;\n    right: 0;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 85px;\n    right: -35px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 50px;\n    right: -25px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .skills[_ngcontent-%COMP%] {\n    top: 100px;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 22px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 135px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 105px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 70px;\n    left: -30px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 35px;\n    left: -20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 5px;\n    left: -3px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -20px;\n    left: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -5px;\n    right: 5px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 70px;\n    right: -30px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 40px;\n    right: -20px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .skills[_ngcontent-%COMP%] {\n    top: 70px;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 170px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 18px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 115px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 85px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 55px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 30px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 5px;\n    left: 0;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -10px;\n    left: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -10px;\n    right: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 55px;\n    right: -20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 30px;\n    right: -10px;\n  }\n}\n@media screen and (max-width: 320px) {\n  .skills[_ngcontent-%COMP%] {\n    top: 50px;\n  }\n  .skills[_ngcontent-%COMP%]   img.background[_ngcontent-%COMP%] {\n    width: 150px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon[_ngcontent-%COMP%] {\n    width: 16px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.first[_ngcontent-%COMP%] {\n    top: 110px;\n    left: -13px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.second[_ngcontent-%COMP%] {\n    top: 85px;\n    left: -20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.third[_ngcontent-%COMP%] {\n    top: 55px;\n    left: -25px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fourth[_ngcontent-%COMP%] {\n    top: 30px;\n    left: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.fifth[_ngcontent-%COMP%] {\n    top: 5px;\n    left: 0;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.sixth[_ngcontent-%COMP%] {\n    top: -10px;\n    left: 20px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.seventh[_ngcontent-%COMP%] {\n    top: -5px;\n    right: 15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.eighth[_ngcontent-%COMP%] {\n    bottom: 35px;\n    right: -15px;\n  }\n  .skills[_ngcontent-%COMP%]   .skill-icon.ninth[_ngcontent-%COMP%] {\n    bottom: 15px;\n    right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWJhY2tncm91bmQvQzpcXFVzZXJzXFxFcmlzXFxEb2N1bWVudHNcXGxpdmUtcmVzdW1lL3NyY1xcYXBwXFx3ZWxjb21lXFx3ZWxjb21lLWJhY2tncm91bmRcXHdlbGNvbWUtYmFja2dyb3VuZC5yZXBvbnNpdml0eS5zY3NzIiwic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUtYmFja2dyb3VuZC93ZWxjb21lLWJhY2tncm91bmQucmVwb25zaXZpdHkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJO0lBQ0ksVUFBQTtFQ0FOO0VERU07SUFDSSxZQUFBO0VDQVY7RURHTTtJQUNJLFdBQUE7RUNEVjtFRElVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUNGZDtFREtVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUNIZDtFRE1VO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUNKZDtFRE9VO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUNMZDtFRFFVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUNOZDtFRFNVO0lBQ0ksVUFBQTtJQUNBLFVBQUE7RUNQZDtFRFVVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUNSZDtFRFdVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUNUZDtFRFlVO0lBQ0ksWUFBQTtJQUNBLFFBQUE7RUNWZDtBQUNGO0FEZUE7RUFJUTtJQUNJLFlBQUE7RUNoQlY7RURtQk07SUFDSSxXQUFBO0VDakJWO0VEb0JVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUNsQmQ7RURxQlU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQ25CZDtFRHNCVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VDcEJkO0VEdUJVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUNyQmQ7RUR3QlU7SUFDSSxTQUFBO0lBQ0EsT0FBQTtFQ3RCZDtFRHlCVTtJQUNJLFVBQUE7SUFDQSxVQUFBO0VDdkJkO0VEMEJVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUN4QmQ7RUQyQlU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQ3pCZDtFRDRCVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VDMUJkO0FBQ0Y7QUQrQkE7RUFJUTtJQUNJLFlBQUE7RUNoQ1Y7RURtQ007SUFDSSxXQUFBO0VDakNWO0VEb0NVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUNsQ2Q7RURxQ1U7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQ25DZDtFRHNDVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VDcENkO0VEdUNVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUNyQ2Q7RUR3Q1U7SUFDSSxTQUFBO0lBQ0EsVUFBQTtFQ3RDZDtFRHlDVTtJQUNJLFVBQUE7SUFDQSxVQUFBO0VDdkNkO0VEMENVO0lBQ0ksTUFBQTtJQUNBLFFBQUE7RUN4Q2Q7RUQyQ1U7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQ3pDZDtFRDRDVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VDMUNkO0FBQ0Y7QUQrQ0E7RUFFSTtJQUNJLFVBQUE7RUM5Q047RURnRE07SUFDSSxZQUFBO0VDOUNWO0VEaURNO0lBQ0ksV0FBQTtFQy9DVjtFRGtEVTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VDaERkO0VEbURVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUNqRGQ7RURvRFU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQ2xEZDtFRHFEVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VDbkRkO0VEc0RVO0lBQ0ksUUFBQTtJQUNBLFVBQUE7RUNwRGQ7RUR1RFU7SUFDSSxVQUFBO0lBQ0EsVUFBQTtFQ3JEZDtFRHdEVTtJQUNJLFNBQUE7SUFDQSxVQUFBO0VDdERkO0VEeURVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUN2RGQ7RUQwRFU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQ3hEZDtBQUNGO0FENkRBO0VBRUk7SUFDSSxTQUFBO0VDNUROO0VEOERNO0lBQ0ksWUFBQTtFQzVEVjtFRCtETTtJQUNJLFdBQUE7RUM3RFY7RURnRVU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQzlEZDtFRGlFVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VDL0RkO0VEa0VVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUNoRWQ7RURtRVU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQ2pFZDtFRG9FVTtJQUNJLFFBQUE7SUFDQSxPQUFBO0VDbEVkO0VEcUVVO0lBQ0ksVUFBQTtJQUNBLFVBQUE7RUNuRWQ7RURzRVU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQ3BFZDtFRHVFVTtJQUNJLFlBQUE7SUFDQSxZQUFBO0VDckVkO0VEd0VVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUN0RWQ7QUFDRjtBRDJFQTtFQUVJO0lBQ0ksU0FBQTtFQzFFTjtFRDRFTTtJQUNJLFlBQUE7RUMxRVY7RUQ2RU07SUFDSSxXQUFBO0VDM0VWO0VEOEVVO0lBQ0ksVUFBQTtJQUNBLFdBQUE7RUM1RWQ7RUQrRVU7SUFDSSxTQUFBO0lBQ0EsV0FBQTtFQzdFZDtFRGdGVTtJQUNJLFNBQUE7SUFDQSxXQUFBO0VDOUVkO0VEaUZVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUMvRWQ7RURrRlU7SUFDSSxRQUFBO0lBQ0EsT0FBQTtFQ2hGZDtFRG1GVTtJQUNJLFVBQUE7SUFDQSxVQUFBO0VDakZkO0VEb0ZVO0lBQ0ksU0FBQTtJQUNBLFdBQUE7RUNsRmQ7RURxRlU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQ25GZDtFRHNGVTtJQUNJLFlBQUE7SUFDQSxRQUFBO0VDcEZkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUtYmFja2dyb3VuZC93ZWxjb21lLWJhY2tncm91bmQucmVwb25zaXZpdHkuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG5cclxuICAgIC5za2lsbHMge1xyXG4gICAgICAgIHRvcDogMTQwcHg7XHJcblxyXG4gICAgICAgIGltZy5iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgd2lkdGg6IDM5MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNraWxsLWljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuXHJcbiAgICAgICAgICAgIC8vIFNwZWNpZmljYXRpb25zIGZvciBlYWNoIGljb24gcG9zaXRpb25pbmcuXHJcbiAgICAgICAgICAgICYuZmlyc3Qge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzMTBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0xNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnNlY29uZCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYudGhpcmQge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxNzVweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC02MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmZvdXJ0aCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTQ1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZmlmdGgge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2l4dGgge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2V2ZW50aCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZWlnaHRoIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogODBweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtNDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5uaW50aCB7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcclxuXHJcbiAgICAuc2tpbGxzIHtcclxuXHJcbiAgICAgICAgaW1nLmJhY2tncm91bmQge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2tpbGwtaWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG5cclxuICAgICAgICAgICAgLy8gU3BlY2lmaWNhdGlvbnMgZm9yIGVhY2ggaWNvbiBwb3NpdGlvbmluZy5cclxuICAgICAgICAgICAgJi5maXJzdCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDIyMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2Vjb25kIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMTcwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNDVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi50aGlyZCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDExNXB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZm91cnRoIHtcclxuICAgICAgICAgICAgICAgIHRvcDogNjBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0zNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmZpZnRoIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2l4dGgge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMzBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2V2ZW50aCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0zMHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZWlnaHRoIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogODVweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtNDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5uaW50aCB7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcblxyXG4gICAgLnNraWxscyB7XHJcblxyXG4gICAgICAgIGltZy5iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNraWxsLWljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjdweDtcclxuXHJcbiAgICAgICAgICAgIC8vIFNwZWNpZmljYXRpb25zIGZvciBlYWNoIGljb24gcG9zaXRpb25pbmcuXHJcbiAgICAgICAgICAgICYuZmlyc3Qge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxNjVweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0yMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnNlY29uZCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEzMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTM1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYudGhpcmQge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTM1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZm91cnRoIHtcclxuICAgICAgICAgICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0zMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmZpZnRoIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC01cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2l4dGgge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2V2ZW50aCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5laWdodGgge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA4NXB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0zNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLm5pbnRoIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHJcbiAgICAuc2tpbGxzIHtcclxuICAgICAgICB0b3A6IDEwMHB4O1xyXG5cclxuICAgICAgICBpbWcuYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5za2lsbC1pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcblxyXG4gICAgICAgICAgICAvLyBTcGVjaWZpY2F0aW9ucyBmb3IgZWFjaCBpY29uIHBvc2l0aW9uaW5nLlxyXG4gICAgICAgICAgICAmLmZpcnN0IHtcclxuICAgICAgICAgICAgICAgIHRvcDogMTM1cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5zZWNvbmQge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxMDVweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnRoaXJkIHtcclxuICAgICAgICAgICAgICAgIHRvcDogNzBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0zMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmZvdXJ0aCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5maWZ0aCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0zcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2l4dGgge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMjBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2V2ZW50aCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmVpZ2h0aCB7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDcwcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYubmludGgge1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG5cclxuICAgIC5za2lsbHMge1xyXG4gICAgICAgIHRvcDogNzBweDtcclxuXHJcbiAgICAgICAgaW1nLmJhY2tncm91bmQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2tpbGwtaWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG5cclxuICAgICAgICAgICAgLy8gU3BlY2lmaWNhdGlvbnMgZm9yIGVhY2ggaWNvbiBwb3NpdGlvbmluZy5cclxuICAgICAgICAgICAgJi5maXJzdCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDExNXB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2Vjb25kIHtcclxuICAgICAgICAgICAgICAgIHRvcDogODVweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnRoaXJkIHtcclxuICAgICAgICAgICAgICAgIHRvcDogNTVweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmZvdXJ0aCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5maWZ0aCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2l4dGgge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuc2V2ZW50aCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZWlnaHRoIHtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogNTVweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5uaW50aCB7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiBcclxuICAgIC5za2lsbHMge1xyXG4gICAgICAgIHRvcDogNTBweDtcclxuXHJcbiAgICAgICAgaW1nLmJhY2tncm91bmQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2tpbGwtaWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgLy8gU3BlY2lmaWNhdGlvbnMgZm9yIGVhY2ggaWNvbiBwb3NpdGlvbmluZy5cclxuICAgICAgICAgICAgJi5maXJzdCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTEzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgJi5zZWNvbmQge1xyXG4gICAgICAgICAgICAgICAgdG9wOiA4NXB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgJi50aGlyZCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAmLmZvdXJ0aCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAmLmZpZnRoIHtcclxuICAgICAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAmLnNpeHRoIHtcclxuICAgICAgICAgICAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICYuc2V2ZW50aCB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC01cHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAmLmVpZ2h0aCB7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDM1cHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgJi5uaW50aCB7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuc2tpbGxzIHtcbiAgICB0b3A6IDE0MHB4O1xuICB9XG4gIC5za2lsbHMgaW1nLmJhY2tncm91bmQge1xuICAgIHdpZHRoOiAzOTBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uIHtcbiAgICB3aWR0aDogNDBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmZpcnN0IHtcbiAgICB0b3A6IDMxMHB4O1xuICAgIGxlZnQ6IC0xNXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uc2Vjb25kIHtcbiAgICB0b3A6IDI1MHB4O1xuICAgIGxlZnQ6IC01MHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24udGhpcmQge1xuICAgIHRvcDogMTc1cHg7XG4gICAgbGVmdDogLTYwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5mb3VydGgge1xuICAgIHRvcDogMTAwcHg7XG4gICAgbGVmdDogLTQ1cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5maWZ0aCB7XG4gICAgdG9wOiAzMHB4O1xuICAgIGxlZnQ6IC0xMHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uc2l4dGgge1xuICAgIHRvcDogLTIwcHg7XG4gICAgbGVmdDogNTBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnNldmVudGgge1xuICAgIHRvcDogLTIwcHg7XG4gICAgcmlnaHQ6IDQwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5laWdodGgge1xuICAgIGJvdHRvbTogODBweDtcbiAgICByaWdodDogLTQwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5uaW50aCB7XG4gICAgYm90dG9tOiAzMHB4O1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xuICAuc2tpbGxzIGltZy5iYWNrZ3JvdW5kIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbiB7XG4gICAgd2lkdGg6IDM1cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5maXJzdCB7XG4gICAgdG9wOiAyMjBweDtcbiAgICBsZWZ0OiAtMjVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnNlY29uZCB7XG4gICAgdG9wOiAxNzBweDtcbiAgICBsZWZ0OiAtNDVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnRoaXJkIHtcbiAgICB0b3A6IDExNXB4O1xuICAgIGxlZnQ6IC01MHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZm91cnRoIHtcbiAgICB0b3A6IDYwcHg7XG4gICAgbGVmdDogLTM1cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5maWZ0aCB7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5zaXh0aCB7XG4gICAgdG9wOiAtMzBweDtcbiAgICBsZWZ0OiA0MHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uc2V2ZW50aCB7XG4gICAgdG9wOiAtMzBweDtcbiAgICByaWdodDogMTVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmVpZ2h0aCB7XG4gICAgYm90dG9tOiA4NXB4O1xuICAgIHJpZ2h0OiAtNDBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLm5pbnRoIHtcbiAgICBib3R0b206IDQ1cHg7XG4gICAgcmlnaHQ6IC0xNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuc2tpbGxzIGltZy5iYWNrZ3JvdW5kIHtcbiAgICB3aWR0aDogMjMwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbiB7XG4gICAgd2lkdGg6IDI3cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5maXJzdCB7XG4gICAgdG9wOiAxNjVweDtcbiAgICBsZWZ0OiAtMjBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnNlY29uZCB7XG4gICAgdG9wOiAxMzBweDtcbiAgICBsZWZ0OiAtMzVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnRoaXJkIHtcbiAgICB0b3A6IDkwcHg7XG4gICAgbGVmdDogLTM1cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5mb3VydGgge1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiAtMzBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmZpZnRoIHtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogLTVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnNpeHRoIHtcbiAgICB0b3A6IC0yMHB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5zZXZlbnRoIHtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5laWdodGgge1xuICAgIGJvdHRvbTogODVweDtcbiAgICByaWdodDogLTM1cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5uaW50aCB7XG4gICAgYm90dG9tOiA1MHB4O1xuICAgIHJpZ2h0OiAtMjVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnNraWxscyB7XG4gICAgdG9wOiAxMDBweDtcbiAgfVxuICAuc2tpbGxzIGltZy5iYWNrZ3JvdW5kIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbiB7XG4gICAgd2lkdGg6IDIycHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5maXJzdCB7XG4gICAgdG9wOiAxMzVweDtcbiAgICBsZWZ0OiAtMTVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnNlY29uZCB7XG4gICAgdG9wOiAxMDVweDtcbiAgICBsZWZ0OiAtMjVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnRoaXJkIHtcbiAgICB0b3A6IDcwcHg7XG4gICAgbGVmdDogLTMwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5mb3VydGgge1xuICAgIHRvcDogMzVweDtcbiAgICBsZWZ0OiAtMjBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmZpZnRoIHtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiAtM3B4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uc2l4dGgge1xuICAgIHRvcDogLTIwcHg7XG4gICAgbGVmdDogMjBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnNldmVudGgge1xuICAgIHRvcDogLTVweDtcbiAgICByaWdodDogNXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZWlnaHRoIHtcbiAgICBib3R0b206IDcwcHg7XG4gICAgcmlnaHQ6IC0zMHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24ubmludGgge1xuICAgIGJvdHRvbTogNDBweDtcbiAgICByaWdodDogLTIwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5za2lsbHMge1xuICAgIHRvcDogNzBweDtcbiAgfVxuICAuc2tpbGxzIGltZy5iYWNrZ3JvdW5kIHtcbiAgICB3aWR0aDogMTcwcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbiB7XG4gICAgd2lkdGg6IDE4cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5maXJzdCB7XG4gICAgdG9wOiAxMTVweDtcbiAgICBsZWZ0OiAtMTVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnNlY29uZCB7XG4gICAgdG9wOiA4NXB4O1xuICAgIGxlZnQ6IC0yNXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24udGhpcmQge1xuICAgIHRvcDogNTVweDtcbiAgICBsZWZ0OiAtMjVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmZvdXJ0aCB7XG4gICAgdG9wOiAzMHB4O1xuICAgIGxlZnQ6IC0xNXB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZmlmdGgge1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5zaXh0aCB7XG4gICAgdG9wOiAtMTBweDtcbiAgICBsZWZ0OiAyMHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uc2V2ZW50aCB7XG4gICAgdG9wOiAtMTBweDtcbiAgICByaWdodDogMjBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmVpZ2h0aCB7XG4gICAgYm90dG9tOiA1NXB4O1xuICAgIHJpZ2h0OiAtMjBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLm5pbnRoIHtcbiAgICBib3R0b206IDMwcHg7XG4gICAgcmlnaHQ6IC0xMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAuc2tpbGxzIHtcbiAgICB0b3A6IDUwcHg7XG4gIH1cbiAgLnNraWxscyBpbWcuYmFja2dyb3VuZCB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24ge1xuICAgIHdpZHRoOiAxNnB4O1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uZmlyc3Qge1xuICAgIHRvcDogMTEwcHg7XG4gICAgbGVmdDogLTEzcHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5zZWNvbmQge1xuICAgIHRvcDogODVweDtcbiAgICBsZWZ0OiAtMjBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnRoaXJkIHtcbiAgICB0b3A6IDU1cHg7XG4gICAgbGVmdDogLTI1cHg7XG4gIH1cbiAgLnNraWxscyAuc2tpbGwtaWNvbi5mb3VydGgge1xuICAgIHRvcDogMzBweDtcbiAgICBsZWZ0OiAtMTVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmZpZnRoIHtcbiAgICB0b3A6IDVweDtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIC5za2lsbHMgLnNraWxsLWljb24uc2l4dGgge1xuICAgIHRvcDogLTEwcHg7XG4gICAgbGVmdDogMjBweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLnNldmVudGgge1xuICAgIHRvcDogLTVweDtcbiAgICByaWdodDogMTVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLmVpZ2h0aCB7XG4gICAgYm90dG9tOiAzNXB4O1xuICAgIHJpZ2h0OiAtMTVweDtcbiAgfVxuICAuc2tpbGxzIC5za2lsbC1pY29uLm5pbnRoIHtcbiAgICBib3R0b206IDE1cHg7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeBackgroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome-background',
                templateUrl: './welcome-background.component.html',
                styleUrls: ['./welcome-background.scss', './welcome-background.reponsivity.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typed.ts":
/*!***********************************************************************!*\
  !*** ./src/app/welcome/welcome-dialog/welcome-dialog-typing/typed.ts ***!
  \***********************************************************************/
/*! exports provided: Typed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Typed", function() { return Typed; });
class Typed {
    constructor(element, options, phrases) {
        const defaults = {
            typeSpeed: 250,
            startDelay: 2000,
            phrasePeriod: 200,
        };
        this.text = "";
        this.isDeleting = false;
        this.loopNum = 0;
        this.element = element;
        this.options = Object.assign(Object.assign({}, defaults), options);
        this.phrases = phrases;
        this.appendAnimationCss();
    }
    begin() {
        this.timeout = setTimeout(() => {
            this.typewrite();
        }, this.options.startDelay);
    }
    insertSpan(text) {
        this.element.innerHTML = '<span class="wrap">' + text + "</span>";
    }
    typewrite() {
        // console.log(this);
        let i = this.loopNum % this.phrases.length;
        let fullTxt = this.phrases[i];
        if (this.isDeleting) {
            this.text = fullTxt.substring(0, this.text.length - 1);
        }
        else {
            this.text = fullTxt.substring(0, this.text.length + 1);
        }
        this.insertSpan(this.text);
        let that = this;
        let delta = this.options.typeSpeed - Math.random() * 100;
        if (this.isDeleting) {
            delta /= 2;
        }
        if (!this.isDeleting && this.text === fullTxt) {
            delta = this.options.phrasePeriod;
            this.isDeleting = true;
        }
        else if (this.isDeleting && this.text === "") {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        setTimeout(function () {
            that.typewrite();
        }, delta);
    }
    appendAnimationCss() {
        let css = document.createElement("style");
        css.type = "text/css";
        css.id = "typing";
        const innerCss = `
            .txt-rotate > .wrap::after {
                content: "|";
                opacity: 1;
                animation: typedBlink 0.7s infinite;
                -webkit-animation: typedBlink 0.7s infinite;
                animation: typedBlink 0.7s infinite;
            }
            @keyframes typedBlink{
                50% { opacity: 0.0; }
            }
            @-webkit-keyframes typedBlink{
                0% { opacity: 1; }
                50% { opacity: 0.0; }
                100% { opacity: 1; }
            }
        `;
        css.innerHTML = innerCss;
        document.head.appendChild(css);
    }
}


/***/ }),

/***/ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.directive.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.directive.ts ***!
  \********************************************************************************************/
/*! exports provided: TypingAnimationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypingAnimationDirective", function() { return TypingAnimationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _typed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typed */ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typed.ts");



class TypingAnimationDirective {
    constructor(elRef, locale) {
        this.elRef = elRef;
        this.locale = locale;
        this.phrases = [];
        this._flatMap = (f, xs) => xs.reduce((acc, x) => acc.concat(f(x)), []);
    }
    ngOnInit() {
        // console.log(this);
        const nestedArr = this.data.filter((el) => el.language === "en");
        this.phrases = this._flatMap((el) => el.phrases, nestedArr);
        if (this.checkContent()) {
            this.createTyped();
        }
    }
    checkContent() {
        return this.phrases.length > 0;
    }
    createTyped() {
        this.typed = new _typed__WEBPACK_IMPORTED_MODULE_1__["Typed"](this.elRef.nativeElement, {
            typeSpeed: this.typeSpeed,
            startDelay: this.startDelay,
            phrasePeriod: this.phrasePeriod,
        }, this.phrases);
        this.typed.begin();
    }
}
TypingAnimationDirective.ɵfac = function TypingAnimationDirective_Factory(t) { return new (t || TypingAnimationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); };
TypingAnimationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TypingAnimationDirective, selectors: [["", "typingAnimation", ""]], inputs: { phrasePeriod: "phrasePeriod", typeSpeed: "typeSpeed", startDelay: "startDelay", data: "data" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypingAnimationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: "[typingAnimation]",
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }] }]; }, { phrasePeriod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["phrasePeriod"]
        }], typeSpeed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["typeSpeed"]
        }], startDelay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["startDelay"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["data"]
        }] }); })();


/***/ }),

/***/ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: TypingAnimationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypingAnimationModule", function() { return TypingAnimationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typing-animation.directive */ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.directive.ts");



class TypingAnimationModule {
}
TypingAnimationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TypingAnimationModule });
TypingAnimationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TypingAnimationModule_Factory(t) { return new (t || TypingAnimationModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TypingAnimationModule, { declarations: [_typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__["TypingAnimationDirective"]], exports: [_typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__["TypingAnimationDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypingAnimationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__["TypingAnimationDirective"]
                ],
                exports: [
                    _typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__["TypingAnimationDirective"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/welcome/welcome-dialog/welcome-dialog.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/welcome/welcome-dialog/welcome-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: WelcomeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeDialogComponent", function() { return WelcomeDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _welcome_dialog_typing_typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-dialog-typing/typing-animation.directive */ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.directive.ts");



var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc dialog
     */ 
    const MSG_EXTERNAL_hello$$SRC_APP_WELCOME_WELCOME_DIALOG_WELCOME_DIALOG_COMPONENT_TS_1 = goog.getMsg("Hello!");
    I18N_0 = MSG_EXTERNAL_hello$$SRC_APP_WELCOME_WELCOME_DIALOG_WELCOME_DIALOG_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:dialog@@hello␟8b806f06ee7d72d91e642c7e6b94c064218606f3␟5221938886751387620:Hello!`;
}
const _c2 = function () { return ["My name is Eris Aguilar.", "Welcome to my Live Portfolio.", "Down below, you will know me better... :)"]; };
const _c3 = function (a1) { return { language: "en", phrases: a1 }; };
const _c4 = function (a0) { return [a0]; };
class WelcomeDialogComponent {
    constructor() {
    }
    ngOnInit() { }
}
WelcomeDialogComponent.ɵfac = function WelcomeDialogComponent_Factory(t) { return new (t || WelcomeDialogComponent)(); };
WelcomeDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeDialogComponent, selectors: [["app-welcome-dialog"]], decls: 6, vars: 9, consts: [[1, "dialog-container"], ["loading", "lazy", "src", "./assets/template/welcome/bubble-frame.png", "alt", "Welcome Speech Bobble"], [1, "console"], [1, "hello"], ["typingAnimation", "", 1, "txt-rotate", 3, "phrasePeriod", "startDelay", "typeSpeed", "data"]], template: function WelcomeDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("phrasePeriod", 2000)("startDelay", 1500)("typeSpeed", 200)("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2))));
    } }, directives: [_welcome_dialog_typing_typing_animation_directive__WEBPACK_IMPORTED_MODULE_1__["TypingAnimationDirective"]], styles: [".dialog-container[_ngcontent-%COMP%] {\r\n\tz-index: 2;\r\n\tmargin-top: 5em;\r\n\t-webkit-animation: float-dialog 6s ease-in-out infinite;\r\n\t        animation: float-dialog 6s ease-in-out infinite;\r\n}\r\n.dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 580px;\r\n    margin-left: -7em;\r\n}\r\n.dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n    top: 7em;\r\n    left: -5px;\r\n    width: 380px;\r\n\ttext-align: center;\r\n}\r\n.dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n}\r\n.dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\r\n\tfont-size: 60px;\r\n    font-weight: 600;\r\n    color: #222f5c;\r\n}\r\n.dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\r\n\tfont-size: 40px;\r\n    color: #576183;\r\n\tfont-weight: 600;\r\n\tmargin-top: 10px;\r\n}\r\n\r\n@-webkit-keyframes float-dialog {\r\n\t0% {\r\n\t\ttransform: translatey(0px);\r\n\t}\r\n\t50% {\r\n\t\ttransform: translatey(-20px);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translatey(0px);\r\n\t}\r\n}\r\n@keyframes float-dialog {\r\n\t0% {\r\n\t\ttransform: translatey(0px);\r\n\t}\r\n\t50% {\r\n\t\ttransform: translatey(-20px);\r\n\t}\r\n\t100% {\r\n\t\ttransform: translatey(0px);\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWRpYWxvZy93ZWxjb21lLWRpYWxvZy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHFCQUFxQjtBQUNyQjtDQUNDLFVBQVU7Q0FDVixlQUFlO0NBQ2YsdURBQStDO1NBQS9DLCtDQUErQztBQUNoRDtBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUVBO0NBQ0Msa0JBQWtCO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0NBQ2Ysa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxTQUFTO0lBQ04sVUFBVTtJQUNWLGtCQUFrQjtBQUN0QjtBQUVBO0NBQ0MsZUFBZTtJQUNaLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBRUE7Q0FDQyxlQUFlO0lBQ1osY0FBYztDQUNqQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCO0FBRUEsK0JBQStCO0FBQy9CO0NBQ0M7RUFDQywwQkFBMEI7Q0FDM0I7Q0FDQTtFQUNDLDRCQUE0QjtDQUM3QjtDQUNBO0VBQ0MsMEJBQTBCO0NBQzNCO0FBQ0Q7QUFWQTtDQUNDO0VBQ0MsMEJBQTBCO0NBQzNCO0NBQ0E7RUFDQyw0QkFBNEI7Q0FDN0I7Q0FDQTtFQUNDLDBCQUEwQjtDQUMzQjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWRpYWxvZy93ZWxjb21lLWRpYWxvZy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogRGlhbG9nIGNvbnRhaW5lciAqL1xyXG4uZGlhbG9nLWNvbnRhaW5lciB7XHJcblx0ei1pbmRleDogMjtcclxuXHRtYXJnaW4tdG9wOiA1ZW07XHJcblx0YW5pbWF0aW9uOiBmbG9hdC1kaWFsb2cgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5kaWFsb2ctY29udGFpbmVyIGltZyB7XHJcbiAgICB3aWR0aDogNTgwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTdlbTtcclxufVxyXG5cclxuLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogN2VtO1xyXG4gICAgbGVmdDogLTVweDtcclxuICAgIHdpZHRoOiAzODBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIHAge1xyXG5cdG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC5oZWxsbyB7XHJcblx0Zm9udC1zaXplOiA2MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMjIyZjVjO1xyXG59XHJcblxyXG4uZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAudHh0LXJvdGF0ZSB7XHJcblx0Zm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6ICM1NzYxODM7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4vKiBEaWFsb2cgY29udGFpbmVyIGFuaW1hdGlvbiAqL1xyXG5Aa2V5ZnJhbWVzIGZsb2F0LWRpYWxvZyB7XHJcblx0MCUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGV5KDBweCk7XHJcblx0fVxyXG5cdDUwJSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTIwcHgpO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRleSgwcHgpO1xyXG5cdH1cclxufSJdfQ== */", "@media screen and (max-width: 1024px) {\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 435px;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\r\n        top: 6em;\r\n        width: 280px;\r\n        left: -2em;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\r\n        font-size: 40px;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\r\n        font-size: 25px;\r\n    }\r\n\r\n}\r\n\r\n@media screen and (max-width: 880px) {\r\n    \r\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 325px;\r\n        margin-left: -5em;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\r\n        top: 4em;\r\n        width: 210px;\r\n        left: -1em;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\r\n        font-size: 22px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 720px) {\r\n        \r\n    .dialog-container[_ngcontent-%COMP%] {\r\n        margin-top: 2em;\r\n        margin-left: 0;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 310px;\r\n        margin-left: -4em;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\r\n        top: 4em;\r\n        width: 210px;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\r\n        font-size: 30px;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\r\n        font-size: 22px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n        \r\n    .dialog-container[_ngcontent-%COMP%] {\r\n        margin-top: 2em;\r\n        margin-left: 0;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 220px;\r\n        margin-left: -3em;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\r\n        top: 40px;\r\n        width: 130px;\r\n        left: 0;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\r\n        font-size: 22px;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n         \r\n    .dialog-container[_ngcontent-%COMP%] {\r\n        margin-top: 3em;\r\n        margin-left: 0;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 160px;\r\n        margin-left: -45px;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\r\n        top: 30px;\r\n        width: 120px;\r\n        left: -25px;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\r\n        font-size: 11px;\r\n        line-height: 15px;\r\n        display: inline-block;\r\n        margin-top: 5px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 320px) {\r\n       \r\n    .dialog-container[_ngcontent-%COMP%] {\r\n        margin-top: 3em;\r\n        margin-left: 0;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 160px;\r\n        margin-left: -45px;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%] {\r\n        top: 30px;\r\n        width: 120px;\r\n        left: -25px;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .hello[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n\r\n    .dialog-container[_ngcontent-%COMP%]   .console[_ngcontent-%COMP%]   .txt-rotate[_ngcontent-%COMP%] {\r\n        font-size: 12px;\r\n        line-height: 15px;\r\n        display: inline-block;\r\n        margin-top: 5px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWRpYWxvZy93ZWxjb21lLWRpYWxvZy5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFFBQVE7UUFDUixZQUFZO1FBQ1osVUFBVTtJQUNkOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLFlBQVk7UUFDWixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixPQUFPO0lBQ1g7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsZUFBZTtJQUNuQjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksU0FBUztRQUNULFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixxQkFBcUI7UUFDckIsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWRpYWxvZy93ZWxjb21lLWRpYWxvZy5yZXNwb25zaXZpdHkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcblxyXG4gICAgLmRpYWxvZy1jb250YWluZXIgaW1nIHtcclxuICAgICAgICB3aWR0aDogNDM1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUge1xyXG4gICAgICAgIHRvcDogNmVtO1xyXG4gICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICBsZWZ0OiAtMmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC5oZWxsbyB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC50eHQtcm90YXRlIHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xyXG4gICAgXHJcbiAgICAuZGlhbG9nLWNvbnRhaW5lciBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAzMjVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTVlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSB7XHJcbiAgICAgICAgdG9wOiA0ZW07XHJcbiAgICAgICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgICAgIGxlZnQ6IC0xZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLmhlbGxvIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLnR4dC1yb3RhdGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICBcclxuICAgIC5kaWFsb2ctY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpYWxvZy1jb250YWluZXIgaW1nIHtcclxuICAgICAgICB3aWR0aDogMzEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUge1xyXG4gICAgICAgIHRvcDogNGVtO1xyXG4gICAgICAgIHdpZHRoOiAyMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAuaGVsbG8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAudHh0LXJvdGF0ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIFxyXG4gICAgLmRpYWxvZy1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZGlhbG9nLWNvbnRhaW5lciBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTNlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSB7XHJcbiAgICAgICAgdG9wOiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC5oZWxsbyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kaWFsb2ctY29udGFpbmVyIC5jb25zb2xlIC50eHQtcm90YXRlIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgIFxyXG4gICAgLmRpYWxvZy1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZGlhbG9nLWNvbnRhaW5lciBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTQ1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUge1xyXG4gICAgICAgIHRvcDogMzBweDtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgbGVmdDogLTI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLmhlbGxvIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpYWxvZy1jb250YWluZXIgLmNvbnNvbGUgLnR4dC1yb3RhdGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgICAgXHJcbiAgICAuZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM2VtO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5kaWFsb2ctY29udGFpbmVyIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSB7XHJcbiAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICBsZWZ0OiAtMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAuaGVsbG8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGlhbG9nLWNvbnRhaW5lciAuY29uc29sZSAudHh0LXJvdGF0ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome-dialog',
                templateUrl: './welcome-dialog.component.html',
                styleUrls: ['./welcome-dialog.css', './welcome-dialog.responsivity.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _welcome_background_welcome_background_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome-background/welcome-background.component */ "./src/app/welcome/welcome-background/welcome-background.component.ts");
/* harmony import */ var _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome-dialog/welcome-dialog.component */ "./src/app/welcome/welcome-dialog/welcome-dialog.component.ts");




class WelcomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 6, vars: 0, consts: [["id", "welcome"], [1, "layer_one"], [1, "avatar-container"], ["loading", "lazy", "src", "../../../assets/template/welcome/Eris.png", "alt", "Eris Aguilar", 1, "illustration"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-welcome-background");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-welcome-dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_welcome_background_welcome_background_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeBackgroundComponent"], _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeDialogComponent"]], styles: ["#welcome[_ngcontent-%COMP%] {\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    height: 780px;\r\n    padding-top: 5em;\r\n}\r\n\r\n.layer_one[_ngcontent-%COMP%] {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n}\r\n\r\n.layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\r\n    height: 780px;\r\n    z-index: 1;\r\n    position: relative;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBc0I7UUFBdEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix1QkFBbUI7UUFBbkIsbUJBQW1CO0lBQ25CLHFCQUFpQjtRQUFqQixpQkFBaUI7SUFDakIscUJBQXVCO1FBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd2VsY29tZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiA3ODBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1ZW07XHJcbn1cclxuXHJcbi5sYXllcl9vbmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmxheWVyX29uZSAuYXZhdGFyLWNvbnRhaW5lciAuaWxsdXN0cmF0aW9uIHtcclxuICAgIGhlaWdodDogNzgwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59Il19 */", ".layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\r\n  margin-left: -50px;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n  #welcome[_ngcontent-%COMP%] {\r\n    height: 585px;\r\n  }\r\n\r\n  .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\r\n    height: 585px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 880px) {\r\n  #welcome[_ngcontent-%COMP%] {\r\n    height: 465px;\r\n  }\r\n\r\n  .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\r\n    height: 465px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 720px) {\r\n  #welcome[_ngcontent-%COMP%] {\r\n    height: 385px;\r\n  }\r\n\r\n  .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\r\n    height: 385px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  #welcome[_ngcontent-%COMP%] {\r\n    height: 290px;\r\n  }\r\n\r\n  .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\r\n    height: 290px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  #welcome[_ngcontent-%COMP%] {\r\n    height: 250px;\r\n  }\r\n\r\n  .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\r\n    height: 250px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 320px) {\r\n  #welcome[_ngcontent-%COMP%] {\r\n    height: 220px;\r\n  }\r\n\r\n  .layer_one[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\r\n    height: 220px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWNvbXBvbmVudC5yZXNwb25zaXZpdHkuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLWNvbXBvbmVudC5yZXNwb25zaXZpdHkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheWVyX29uZSAuYXZhdGFyLWNvbnRhaW5lciAuaWxsdXN0cmF0aW9uIHtcclxuICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICN3ZWxjb21lIHtcclxuICAgIGhlaWdodDogNTg1cHg7XHJcbiAgfVxyXG5cclxuICAubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xyXG4gICAgaGVpZ2h0OiA1ODVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XHJcbiAgI3dlbGNvbWUge1xyXG4gICAgaGVpZ2h0OiA0NjVweDtcclxuICB9XHJcblxyXG4gIC5sYXllcl9vbmUgLmF2YXRhci1jb250YWluZXIgLmlsbHVzdHJhdGlvbiB7XHJcbiAgICBoZWlnaHQ6IDQ2NXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAjd2VsY29tZSB7XHJcbiAgICBoZWlnaHQ6IDM4NXB4O1xyXG4gIH1cclxuXHJcbiAgLmxheWVyX29uZSAuYXZhdGFyLWNvbnRhaW5lciAuaWxsdXN0cmF0aW9uIHtcclxuICAgIGhlaWdodDogMzg1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICN3ZWxjb21lIHtcclxuICAgIGhlaWdodDogMjkwcHg7XHJcbiAgfVxyXG5cclxuICAubGF5ZXJfb25lIC5hdmF0YXItY29udGFpbmVyIC5pbGx1c3RyYXRpb24ge1xyXG4gICAgaGVpZ2h0OiAyOTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgI3dlbGNvbWUge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICB9XHJcblxyXG4gIC5sYXllcl9vbmUgLmF2YXRhci1jb250YWluZXIgLmlsbHVzdHJhdGlvbiB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAjd2VsY29tZSB7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxheWVyX29uZSAuYXZhdGFyLWNvbnRhaW5lciAuaWxsdXN0cmF0aW9uIHtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.css', './welcome-component.responsivity.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/welcome/welcome.molule.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.molule.ts ***!
  \*******************************************/
/*! exports provided: WelcomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _welcome_background_welcome_background_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome-background/welcome-background.component */ "./src/app/welcome/welcome-background/welcome-background.component.ts");
/* harmony import */ var _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome-dialog/welcome-dialog.component */ "./src/app/welcome/welcome-dialog/welcome-dialog.component.ts");
/* harmony import */ var _welcome_dialog_welcome_dialog_typing_typing_animation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome-dialog/welcome-dialog-typing/typing-animation.module */ "./src/app/welcome/welcome-dialog/welcome-dialog-typing/typing-animation.module.ts");






class WelcomeModule {
}
WelcomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WelcomeModule });
WelcomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WelcomeModule_Factory(t) { return new (t || WelcomeModule)(); }, imports: [[_welcome_dialog_welcome_dialog_typing_typing_animation_module__WEBPACK_IMPORTED_MODULE_4__["TypingAnimationModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WelcomeModule, { declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"], _welcome_background_welcome_background_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeBackgroundComponent"], _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeDialogComponent"]], imports: [_welcome_dialog_welcome_dialog_typing_typing_animation_module__WEBPACK_IMPORTED_MODULE_4__["TypingAnimationModule"]], exports: [_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_welcome_dialog_welcome_dialog_typing_typing_animation_module__WEBPACK_IMPORTED_MODULE_4__["TypingAnimationModule"]],
                declarations: [_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"], _welcome_background_welcome_background_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeBackgroundComponent"], _welcome_dialog_welcome_dialog_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeDialogComponent"]],
                exports: [_welcome_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyC2frVRAAltsVTmdwgFnATGHoVUzNHfzsM",
        authDomain: "live-resume-a575a.firebaseapp.com",
        databaseURL: "https://live-resume-a575a.firebaseio.com",
        projectId: "live-resume-a575a",
        storageBucket: "live-resume-a575a.appspot.com",
        messagingSenderId: "681076751855",
        appId: "1:681076751855:web:18bae3866ebfcc4fcd8a1a",
        measurementId: "G-00VXD77WNG"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Eris\Documents\live-resume\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map