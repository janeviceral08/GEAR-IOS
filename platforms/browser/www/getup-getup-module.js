(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["getup-getup-module"],{

/***/ "./src/app/pages/getup/getup.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/getup/getup.module.ts ***!
  \*********************************************/
/*! exports provided: GetupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetupPageModule", function() { return GetupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _getup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getup.page */ "./src/app/pages/getup/getup.page.ts");







var routes = [
    {
        path: '',
        component: _getup_page__WEBPACK_IMPORTED_MODULE_6__["GetupPage"]
    }
];
var GetupPageModule = /** @class */ (function () {
    function GetupPageModule() {
    }
    GetupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_getup_page__WEBPACK_IMPORTED_MODULE_6__["GetupPage"]]
        })
    ], GetupPageModule);
    return GetupPageModule;
}());



/***/ }),

/***/ "./src/app/pages/getup/getup.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/getup/getup.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-buttons slot=\"start\">\n    <ion-button class=btnMenu ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n      <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n    </ion-button>\n    <ion-title mode=\"md\">Get Up</ion-title>\n  </ion-buttons>\n</ion-header>\n<ion-content>\n  <div *ngIf=\"noError; else error\">\n    <ion-card>\n      <ion-card-header class=\"cardHeader\">\n        <img class=\"imgChildrensHour\" src=\"/assets/img/childrens_hour.png\" alt=\"\">\n      </ion-card-header>\n      <ion-card-content class=\"cardContent\" *ngIf=\"!donePledge\">\n        <ion-item lines=\"none\">\n          <ion-checkbox class=\"chkPledge\" checked=\"{{isPledge}}\" (ionChange)=\"clickIsPledge()\"></ion-checkbox>\n          <ion-label class=\"lblPledge\"> Yes, I pledge to support Children's Hour in its pursuit of\n            meaningful programs committed to the welfare and development of underprivileged Filipino\n            children.\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-radio-group mode=\"md\" [(ngModel)]=\"rdoSelected\">\n            <ion-item *ngFor=\"let hour of rate; let i = index;\">\n              <ion-label class=\"lblDesc\">{{hour.Description}}</ion-label>\n              <ion-radio slot=\"start\" value=\"{{hour.seqno}}\" [checked]=\"i==0\" mode=\"md\"\n                (ionSelect)=\"rateChange(hour.seqno)\"></ion-radio>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-radio slot=\"start\" value=\"Others\" mode=\"md\" (ionSelect)=\"rateChange('Others')\"></ion-radio>\n              <ion-label class=\"lblOthers\">Others: Please specify amount</ion-label>\n            </ion-item>\n          </ion-radio-group>\n        </ion-item>\n        <ion-item class=\"itemOthers\" lines=\"none\" disabled=\"{{showOthersInput}}\">\n          <ion-input class=\"txtOthers rounded\" type=\"number\" [(ngModel)]=\"otherAmount\">\n          </ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-checkbox class=\"chkAuthorize\" checked=\"{{isAuthorize}}\" (ionChange)=\"clickIsAuthorize()\"></ion-checkbox>\n          <ion-label class=\"lblAuthorize\"> I hereby authorize Golden ABC Inc. to deduct the said donation\n            from the DECEMBER 25 payroll.\n          </ion-label>\n        </ion-item>\n        <ion-button block outline class=\"btnAgree\" size=\"large\" (click)=\"clickAgree()\" disabled=\"{{disableAgree}}\"\n          expand=\"block\">Agree\n        </ion-button>\n      </ion-card-content>\n      <ion-card-content class=\"cardContentThanks\" *ngIf=\"donePledge\">\n        <div>\n          <img class=\"imgGetUp\" src=\"/assets/img/getup.png\" alt=\"\"></div>\n        <div class=\"lblThankYou\">\n          <ion-label >THANK YOU FOR YOUR SUPPORT!</ion-label>\n        </div>\n        <div class=\"lblThanksMessage\">\n          <ion-label >{{thanksMessage}}</ion-label>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n<ng-template #error>\n  <ion-card lines=\"none\" class=\"errorbox2\">\n    <ion-avatar class=\"center\">\n      <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n    <span class=\"errorMessage\">{{errorMessage}}</span>\n    <br />\n    <span class=\"errorMessage\">\n      <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n      <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n        <ion-icon color=\"light\" name=\"home\"></ion-icon>\n      </ion-button>\n    </span>\n  </ion-card>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/getup/getup.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/getup/getup.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #F3F3F3; }\n\nion-header {\n  background-color: #558B2F;\n  padding-bottom: 5px; }\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px; }\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-top: 20px;\n  padding-bottom: 10px; }\n\nion-card {\n  margin: 10px;\n  background: white; }\n\n.imgChildrensHour {\n  position: relative;\n  display: block; }\n\n.imgGetUp {\n  position: relative;\n  display: block;\n  width: auto;\n  height: 250px;\n  margin: auto;\n  padding: 20px 0px; }\n\n.btnMenu {\n  --padding: 0px;\n  margin-top: 10px;\n  padding: 0 0 0 5px; }\n\n.cardHeader {\n  padding: 0px;\n  background: white; }\n\n.cardContent {\n  padding: 0px;\n  background: white; }\n\n.cardContentThanks {\n  padding: 0 0 30px 0;\n  background: white;\n  text-align-last: center; }\n\n.chkPledge {\n  --background-checked: #D3A828;\n  --border-color-checked: #D3A828;\n  --border-radius: 5px;\n  --border-color: gray;\n  height: 20px;\n  width: 20px; }\n\n.chkAuthorize {\n  --background-checked: #D3A828;\n  --border-color-checked: #D3A828;\n  --border-radius: 5px;\n  --border-color: gray;\n  height: 20px;\n  width: 20px; }\n\n.lblPledge,\n.lblAuthorize {\n  padding: 10px;\n  font-weight: bold;\n  font-size: 12px;\n  color: #2a2a2a;\n  white-space: pre-line !important; }\n\n.lblDesc {\n  font-size: 12px;\n  overflow: visible;\n  white-space: normal; }\n\n.lblOthers {\n  font-size: 12px; }\n\n.itemOthers {\n  padding-left: 35px;\n  padding-right: 10px; }\n\n.txtOthers {\n  --padding-start: 5px !important;\n  font-size: 14px !important; }\n\n.btnAgree {\n  --background: #D3A828;\n  font-size: 14px;\n  padding: 0px 30%;\n  margin-bottom: 15px; }\n\n.lblThankYou {\n  color: #2a2a2a;\n  font-size: 20px;\n  overflow: visible;\n  white-space: normal;\n  text-align: center;\n  font-weight: bold; }\n\n.lblThanksMessage {\n  color: #2a2a2a;\n  font-size: 12px;\n  overflow: visible;\n  white-space: normal;\n  text-align: center;\n  padding-top: 5px; }\n\n.rounded {\n  border: 1px solid gray;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  --padding-start: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMtZ2FiYy9Eb2N1bWVudHMvR0VBUi9HRUFSX2lPUy9zcmMvYXBwL3BhZ2VzL2dldHVwL2dldHVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhLEVBQUE7O0FBR2pCO0VBQ0kseUJBQXlCO0VBQ3pCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLHlCQUFhO0VBQ2Isb0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQjtFQUNsQixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxjQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSw2QkFBcUI7RUFDckIsK0JBQXVCO0VBQ3ZCLG9CQUFnQjtFQUNoQixvQkFBZTtFQUNmLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDSSw2QkFBcUI7RUFDckIsK0JBQXVCO0VBQ3ZCLG9CQUFnQjtFQUNoQixvQkFBZTtFQUNmLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7O0VBRUksYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztFQUNkLGdDQUFnQyxFQUFBOztBQUdwQztFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSwrQkFBZ0I7RUFDaEIsMEJBQTBCLEVBQUE7O0FBRzlCO0VBQ0kscUJBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLHFCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2V0dXAvZ2V0dXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI0YzRjNGMztcbn1cblxuaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1OEIyRjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5pbWdDaGlsZHJlbnNIb3VyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5pbWdHZXRVcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuXG4uYnRuTWVudSB7XG4gICAgLS1wYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nOiAwIDAgMCA1cHg7XG59XG5cbi5jYXJkSGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jYXJkQ29udGVudCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uY2FyZENvbnRlbnRUaGFua3Mge1xuICAgIHBhZGRpbmc6IDAgMCAzMHB4IDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XG59XG5cbi5jaGtQbGVkZ2Uge1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjRDNBODI4O1xuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLS1ib3JkZXItY29sb3I6IGdyYXk7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG4uY2hrQXV0aG9yaXplIHtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI0QzQTgyODtcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjRDNBODI4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC0tYm9yZGVyLWNvbG9yOiBncmF5O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbn1cblxuLmxibFBsZWRnZSxcbi5sYmxBdXRob3JpemUge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xufVxuXG4ubGJsRGVzYyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5sYmxPdGhlcnMge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLml0ZW1PdGhlcnMge1xuICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4udHh0T3RoZXJzIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuQWdyZWUge1xuICAgIC0tYmFja2dyb3VuZDogI0QzQTgyODtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMHB4IDMwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubGJsVGhhbmtZb3Uge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxibFRoYW5rc01lc3NhZ2Uge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4ucm91bmRlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/getup/getup.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/getup/getup.page.ts ***!
  \*******************************************/
/*! exports provided: GetupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetupPage", function() { return GetupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");







var GetupPage = /** @class */ (function () {
    function GetupPage(loginService, menuCtrl, storage, navCtrl, loadingCtrl, alertController, httpApi) {
        this.loginService = loginService;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.httpApi = httpApi;
        this.loadingDone = false;
        this.noError = true;
        this.donePledge = false;
        this.isPledge = false;
        this.isAuthorize = false;
        this.showOthersInput = true;
        this.disableAgree = true;
    }
    GetupPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_CHILDRENHOURRATE"]).then(function (val) {
                _this.rate = val;
                _this.rate.pop();
                _this.getDonation();
            });
        });
        this.rdoSelected = "0";
    };
    GetupPage.prototype.getDonation = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            var postData = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"],
                IsActive: true,
                UserID: _this.empId
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/ChildrenHour/GetEmployeeDonation", postData, {})
                    .then(function (data) {
                    console.log(data.data);
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
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
                    _this.noError = true;
                    _this.empDonation = jsonData['Value'];
                    console.log(_this.empDonation);
                    if (_this.empDonation == null || _this.empDonation == undefined || _this.empDonation.length == 0) {
                        _this.donePledge = false;
                    }
                    else {
                        _this.donePledge = true;
                        if (_this.empDonation['0']['CHamount'] == "0") {
                            _this.donatedValue = _this.rate[_this.empDonation['0']['CHdonation']]['Description'].substring(_this.rate[_this.empDonation['0']['CHdonation']]['Description'].indexOf("(") + 1, _this.rate[_this.empDonation['0']['CHdonation']]['Description'].indexOf(")"));
                        }
                        else {
                            _this.donatedValue = "P" + _this.empDonation['0']['CHamount'];
                        }
                        _this.thanksMessage = "You have pledged " + _this.donatedValue;
                    }
                    _this.loadingDone = true;
                })
                    .catch(function (error) {
                    console.log(_this.errorMessage);
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    GetupPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    GetupPage.prototype.rateChange = function (seqNo) {
        if (seqNo == "Others") {
            this.showOthersInput = false;
        }
        else {
            this.showOthersInput = true;
        }
    };
    GetupPage.prototype.clickIsPledge = function () {
        this.isPledge = !this.isPledge;
        if (this.isPledge && this.isAuthorize) {
            this.disableAgree = false;
        }
        else {
            this.disableAgree = true;
        }
    };
    GetupPage.prototype.clickIsAuthorize = function () {
        this.isAuthorize = !this.isAuthorize;
        if (this.isPledge && this.isAuthorize) {
            this.disableAgree = false;
        }
        else {
            this.disableAgree = true;
        }
    };
    GetupPage.prototype.clickAgree = function () {
        if (this.rdoSelected == null || this.rdoSelected == undefined) {
            alert("Please select donation amount");
            return;
        }
        if (this.rdoSelected == 'Others') {
            if (this.otherAmount == null || this.otherAmount == undefined || this.otherAmount == "0" || this.otherAmount == "") {
                alert("Please input amount");
                return;
            }
            this.donation = (this.rate.length).toString();
        }
        else {
            this.donation = this.rdoSelected;
            this.otherAmount = "";
        }
        this.donateSubmit();
    };
    GetupPage.prototype.donateSubmit = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            var donate = {
                UserID: _this.empId,
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"],
                CreatedDate: null,
                IsActive: true,
                Donation: _this.donation,
                Amount: _this.otherAmount,
                IsAgree: true,
                IsPledge: true,
                IsAccept: true,
                strIsAgree: "1",
                strIsPledge: "1",
                strIsAccept: "1",
            };
            console.log(donate);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/ChildrenHour/ProcessDonation", donate, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], false, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_SUCCESS"]) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], false, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_YES"]) {
                        _this.loading.dismiss();
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
                        _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                        return;
                    }
                    _this.showDialog("DONE!", "Your pledge has been submitted!", true, "Great!");
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["CONNECTION_ERROR"], false, "Okay");
                });
            });
        });
    };
    GetupPage.prototype.showDialog = function (title, message, refreshPage, buttonText) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: message,
                            buttons: [{
                                    text: buttonText,
                                    handler: function () {
                                        if (refreshPage) {
                                            _this.ngOnInit();
                                        }
                                    }
                                }],
                            backdropDismiss: false
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GetupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-getup',
            template: __webpack_require__(/*! ./getup.page.html */ "./src/app/pages/getup/getup.page.html"),
            styles: [__webpack_require__(/*! ./getup.page.scss */ "./src/app/pages/getup/getup.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"]])
    ], GetupPage);
    return GetupPage;
}());



/***/ })

}]);
//# sourceMappingURL=getup-getup-module.js.map