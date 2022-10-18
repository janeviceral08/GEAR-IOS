(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leavecredits-leavecredits-module"],{

/***/ "./src/app/pages/leavecredits/leavecredits.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/leavecredits/leavecredits.module.ts ***!
  \***********************************************************/
/*! exports provided: LeavecreditsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavecreditsPageModule", function() { return LeavecreditsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _leavecredits_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leavecredits.page */ "./src/app/pages/leavecredits/leavecredits.page.ts");







var routes = [
    {
        path: '',
        component: _leavecredits_page__WEBPACK_IMPORTED_MODULE_6__["LeavecreditsPage"]
    }
];
var LeavecreditsPageModule = /** @class */ (function () {
    function LeavecreditsPageModule() {
    }
    LeavecreditsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_leavecredits_page__WEBPACK_IMPORTED_MODULE_6__["LeavecreditsPage"]]
        })
    ], LeavecreditsPageModule);
    return LeavecreditsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/leavecredits/leavecredits.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/leavecredits/leavecredits.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button class=btnMenu ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n                <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button class=btnSearch slot=\"end\" [routerLink]=\"['/','leavesearch']\">\n                <ion-icon color=\"light\" slot=\"icon-only\" name=\"search\" icon-sm></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-title mode=\"md\" slot=\"start\">Leave Credits</ion-title>\n</ion-header>\n<ion-content padding class=\"contentClass\">\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n        <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n        </ion-refresher-content>\n    </ion-refresher>\n\n    <ion-card>\n        <div *ngIf=\"noError; else error\">\n            <div *ngIf=\"loadingDone; else shimmer\">\n                <ion-list class=\"listLeaves\" lines=\"full\" class=\"list\">\n                    <ion-item button detail *ngFor=\"let item of (results );\" [routerLink]=\" ['/', 'leavelist', item.LEAVE_DESC, item.LEAVECODE]\">\n                        <img class=\"imgLeave\" src={{getLeaveTypeSrc(item.LEAVECODE)}} alt=\"\">\n                        <ion-label text-wrap>\n                            <div class=\"leaveDetails\">\n                                <span class=\"leaveName\">{{ item.LEAVE_DESC }}</span>\n                            </div>\n                            <ion-grid class=\"leaveCreditsInfo\">\n                                <ion-row>\n                                    <ion-col class=\"leaveCreditsInfoNameFirstRow\">\n                                        Balance :\n                                    </ion-col>\n                                    <ion-col size=\"2\">\n                                        {{item.BALANCE}}\n                                    </ion-col>\n                                    <ion-col class=\"leaveCreditsInfoNameSecondRow\">\n                                        For Approval :\n                                    </ion-col>\n                                    <ion-col size=\"2\">\n                                        {{item.APPROVAL}}\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row>\n                                    <ion-col class=\"leaveCreditsInfoNameFirstRow\">\n                                        Credit :\n                                    </ion-col>\n                                    <ion-col size=\"2\">\n                                        {{item.CREDITS}}\n                                    </ion-col>\n                                    <ion-col class=\"leaveCreditsInfoNameSecondRow\">\n                                        Approved :\n                                    </ion-col>\n                                    <ion-col size=\"2\">\n                                        {{item.APPROVED}}\n                                    </ion-col>\n                                </ion-row>\n                                <ion-row>\n                                    <ion-col class=\"leaveCreditsInfoNameFirstRow\">\n                                        Posted :\n                                    </ion-col>\n                                    <ion-col size=\"2\">\n                                        {{item.AVAILED}}\n                                    </ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-label>\n                    </ion-item>\n                </ion-list>\n            </div>\n        </div>\n    </ion-card>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" edge slot=\"fixed\">\n        <ion-fab-button (click)=\"openAddLeave()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>\n<ng-template #shimmer>\n    <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n    <ion-list>\n        <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0,1,2,3,4,5]\">\n            <div id=\"box\" class=\"shine\"></div>\n            <div class=\"divShimmer\">\n                <div id=\"lines1\" class=\"shine\"></div>\n                <div id=\"lines2\" class=\"shine\"></div>\n                <div id=\"lines2\" class=\"shine\"></div>\n                <div id=\"lines2\" class=\"shine\"></div>\n            </div>\n        </ion-item>\n    </ion-list>\n</ng-template>\n<ng-template #error>\n    <ion-item lines=\"none\">\n        <div class=\"errorbox\">\n            <ion-avatar class=\"center\">\n                <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n            <span class=\"errorMessage\">{{errorMessage}}</span>\n            <span class=\"errorMessage\">\n        <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n          <ion-icon color=\"light\" name=\"home\"></ion-icon>\n        </ion-button>\n      </span>\n        </div>\n    </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/leavecredits/leavecredits.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/leavecredits/leavecredits.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  --background: #558B2F;\n  background-image: url('banner_dark_green.png') !important;\n  background-size: cover;\n  background-position: bottom;\n  padding: 10px 0px; }\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px; }\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  text-shadow: 1px 1px 1px #0000005c; }\n\nion-icon {\n  font-size: 24px !important;\n  text-shadow: 10px 10px 10px #0000005c; }\n\nion-card {\n  margin-top: -5px;\n  margin-left: -5px;\n  margin-right: -5px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\nion-col {\n  padding: 0px; }\n\nion-fab {\n  margin-bottom: 40px; }\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px; }\n\n.sc-ion-back-button-md-h {\n  color: white; }\n\n.btnMenu {\n  padding: 0 0 0 5px; }\n\n.contentClass {\n  --background: #F5F5F5; }\n\n.imgLeave {\n  width: 50px;\n  height: 50px;\n  margin: 10px 20px;\n  margin-left: 5px; }\n\n.leaveDetails {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.leaveName {\n  color: #2a2a2a;\n  font-size: 15px;\n  display: block;\n  font-family: \"RobotoMedium\"; }\n\n.leaveCreditsInfo {\n  font-size: 11px;\n  margin-top: -1px;\n  display: block;\n  color: #808080;\n  padding: 0px; }\n\n.leaveCreditsInfoNameFirstRow {\n  max-width: 48px;\n  color: #808080; }\n\n.leaveCreditsInfoNameSecondRow {\n  max-width: 75px;\n  color: #808080; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMtZ2FiYy9Eb2N1bWVudHMvR0VBUi9HRUFSX2lPUy9zcmMvYXBwL3BhZ2VzL2xlYXZlY3JlZGl0cy9sZWF2ZWNyZWRpdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWE7RUFDYix5REFBNkU7RUFDN0Usc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixpQkFBaUIsRUFBQTs7QUFJckI7RUFDSSx5QkFBYTtFQUNiLG9CQUFnQixFQUFBOztBQUlwQjtFQUNJLFlBQVk7RUFDWixpQkFBaUI7RUFFakIsZUFBZTtFQUNmLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLDBCQUEwQjtFQUMxQixxQ0FBcUMsRUFBQTs7QUFHekM7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw0RUFBNEUsRUFBQTs7QUFHaEY7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kscUJBQWE7RUFDYixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHFCQUFhLEVBQUE7O0FBR2pCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWM7RUFDZCwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYXZlY3JlZGl0cy9sZWF2ZWNyZWRpdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNTU4QjJGO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXJfZGFya19ncmVlbi5wbmcnKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIC8vIGhlaWdodDogMTAwcHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIC8vbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA1Yztcbn1cblxuaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICAgIHRleHQtc2hhZG93OiAxMHB4IDEwcHggMTBweCAjMDAwMDAwNWM7XG59XG5cbmlvbi1jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgIG1hcmdpbi1yaWdodDogLTVweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG5pb24tY29sIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1mYWIge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICNEM0E4Mjg7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uc2MtaW9uLWJhY2stYnV0dG9uLW1kLWgge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bk1lbnUge1xuICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbn1cblxuLmNvbnRlbnRDbGFzcyB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjVGNUY1O1xufVxuXG4uaW1nTGVhdmUge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDEwcHggMjBweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubGVhdmVEZXRhaWxzIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sZWF2ZU5hbWUge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLmxlYXZlQ3JlZGl0c0luZm8ge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLmxlYXZlQ3JlZGl0c0luZm9OYW1lRmlyc3RSb3cge1xuICAgIG1heC13aWR0aDogNDhweDtcbiAgICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmxlYXZlQ3JlZGl0c0luZm9OYW1lU2Vjb25kUm93IHtcbiAgICBtYXgtd2lkdGg6IDc1cHg7XG4gICAgY29sb3I6ICM4MDgwODA7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/leavecredits/leavecredits.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/leavecredits/leavecredits.page.ts ***!
  \*********************************************************/
/*! exports provided: LeavecreditsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeavecreditsPage", function() { return LeavecreditsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");








var LeavecreditsPage = /** @class */ (function () {
    function LeavecreditsPage(storage, menuCtrl, router, loginService, alertController, platform, httpApi) {
        var _this = this;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.loginService = loginService;
        this.alertController = alertController;
        this.platform = platform;
        this.httpApi = httpApi;
        this.loadingDone = false;
        this.noError = true;
        this.platform.ready().then(function () {
            _this.platform.backButton.subscribe(function () {
                _this.showExitDialog();
            });
        });
    }
    LeavecreditsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.platform.backButton.subscribe(function () {
                _this.showExitDialog();
            });
        });
        this.loadingDone = false;
        this.noError = true;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_EMPID"]).then(function (val) {
            _this.getLeaveCredits(val);
        });
    };
    LeavecreditsPage.prototype.getLeaveCredits = function (employeeid) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            var postData = {
                UserID: employeeid,
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/leaverequest/findall", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_YES"]) {
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Value']['tblLeaveCredit'] == null || jsonData['Value']['tblLeaveCredit'] == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.noError = true;
                    _this.results = jsonData['Value']['tblLeaveCredit'];
                    _this.loadingDone = true;
                })
                    .catch(function (error) {
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    LeavecreditsPage.prototype.getLeaveTypeSrc = function (leaveType) {
        if (leaveType == "BL") {
            return "assets/icon/ic_bl.png";
        }
        else if (leaveType == "EL") {
            return "assets/icon/ic_el.png";
        }
        else if (leaveType == "IL") {
            return "assets/icon/ic_il.png";
        }
        else if (leaveType == "MCW") {
            return "assets/icon/ic_mcw.png";
        }
        else if (leaveType == "ML") {
            return "assets/icon/ic_ml.png";
        }
        else if (leaveType == "PL") {
            return "assets/icon/ic_pl.png";
        }
        else if (leaveType == "SL") {
            return "assets/icon/ic_sl.png";
        }
        else if (leaveType == "SPL") {
            return "assets/icon/ic_spl.png";
        }
        else if (leaveType == "VL") {
            return "assets/icon/ic_vl.png";
        }
        else if (leaveType == "XS") {
            return "assets/icon/ic_xs.png";
        }
        else {
            return "assets/icon/ic_xs.png";
        }
    };
    LeavecreditsPage.prototype.refresh = function (event) {
        this.event = event;
        this.ngOnInit();
    };
    LeavecreditsPage.prototype.openAddLeave = function () {
        this.router.navigate(['/leaveadd',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
        ]);
    };
    LeavecreditsPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    LeavecreditsPage.prototype.showExitDialog = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Exit HRIS',
                            message: 'Are you sure you want to exit HRIS?',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel'
                                }, {
                                    text: 'Exit',
                                    handler: function () {
                                        navigator['HRIS'].exitApp();
                                    }
                                }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LeavecreditsPage.prototype.ionViewWillLeave = function () {
        this.showExitDialog();
    };
    LeavecreditsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leavecredits',
            template: __webpack_require__(/*! ./leavecredits.page.html */ "./src/app/pages/leavecredits/leavecredits.page.html"),
            styles: [__webpack_require__(/*! ./leavecredits.page.scss */ "./src/app/pages/leavecredits/leavecredits.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]])
    ], LeavecreditsPage);
    return LeavecreditsPage;
}());



/***/ })

}]);
//# sourceMappingURL=leavecredits-leavecredits-module.js.map