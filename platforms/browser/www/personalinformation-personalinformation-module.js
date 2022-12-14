(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["personalinformation-personalinformation-module"],{

/***/ "./src/app/pages/personalinformation/personalinformation.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/personalinformation/personalinformation.module.ts ***!
  \*************************************************************************/
/*! exports provided: PersonalinformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalinformationPageModule", function() { return PersonalinformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _personalinformation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personalinformation.page */ "./src/app/pages/personalinformation/personalinformation.page.ts");







var routes = [
    {
        path: '',
        component: _personalinformation_page__WEBPACK_IMPORTED_MODULE_6__["PersonalinformationPage"]
    }
];
var PersonalinformationPageModule = /** @class */ (function () {
    function PersonalinformationPageModule() {
    }
    PersonalinformationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_personalinformation_page__WEBPACK_IMPORTED_MODULE_6__["PersonalinformationPage"]]
        })
    ], PersonalinformationPageModule);
    return PersonalinformationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/personalinformation/personalinformation.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/personalinformation/personalinformation.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button *ngIf=\"fromPage == 'subordinate'\" class=\"button-light\" slot=\"start\" mode=\"md\">\n            </ion-back-button>\n            <ion-button *ngIf=\"fromPage != 'subordinate'\" class=\"btnMenu\" ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n                <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <div class=\"divPhoto\">\n        <img class=\"imgPhoto\" src=\"assets/icon/ic_pi_dp.png\" alt=\"\">\n    </div>\n    <!-- <div class=\"divTitle\">Personal Information</div> -->\n    <ion-label text-wrap>\n        <div class=\"lblName\">\n            <span class=\"lblFullName\">{{name}}</span>\n            <span class=\"lblPosition\">{{idShow}}</span>\n            <span class=\"lblPosition\">{{position}}</span>\n        </div>\n    </ion-label>\n</ion-header>\n<ion-content class=\"classContent\" hide-header header=\"header\">\n    <ion-card class=\"crdContent\" *ngIf=\"noError; else error\">\n        <ion-list lines=\"full\" class=\"list\" (click)=\"pageInfo('Personal')\">\n            <ion-item button detail>\n                <img class=\"imgLeave\" src=\"assets/icon/ic_pi_pb.png\" alt=\"\">\n                <ion-label text-wrap>\n                    <div class=\"divDetails\">\n                        <span class=\"className\">Personal Background</span>\n                    </div>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n        <ion-list lines=\"full\" class=\"list\" (click)=\"pageInfo('Family')\">\n            <ion-item button detail>\n                <img class=\"imgLeave\" src=\"assets/icon/ic_pi_fm.png\" alt=\"\">\n                <ion-label text-wrap>\n                    <div class=\"divDetails\">\n                        <span class=\"className\">Family</span>\n                    </div>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n        <ion-list lines=\"full\" class=\"list\" (click)=\"pageInfo('Education')\">\n            <ion-item button detail>\n                <img class=\"imgLeave\" src=\"assets/icon/ic_pi_ed.png\" alt=\"\">\n                <ion-label text-wrap>\n                    <div class=\"divDetails\">\n                        <span class=\"className\">Education</span>\n                    </div>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n        <ion-list lines=\"full\" class=\"list\" (click)=\"pageInfo('IDBank')\">\n            <ion-item button detail>\n                <img class=\"imgLeave\" src=\"assets/icon/ic_pi_id.png\" alt=\"\">\n                <ion-label text-wrap>\n                    <div class=\"divDetails\">\n                        <span class=\"className\">ID / Bank Info</span>\n                    </div>\n                </ion-label>\n            </ion-item>\n        </ion-list>\n    </ion-card>\n</ion-content>\n<ng-template #error>\n    <ion-item lines=\"none\">\n        <div class=\"errorbox\">\n            <ion-avatar class=\"center\">\n                <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n            <span class=\"errorMessage\">{{errorMessage}}</span>\n            <span class=\"errorMessage\">\n                <ion-button class=\"errorButton\" (click)=\"refresh()\">REFRESH</ion-button>\n                <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n                    <ion-icon color=\"light\" name=\"home\"></ion-icon>\n                </ion-button>\n            </span>\n        </div>\n    </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/personalinformation/personalinformation.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/personalinformation/personalinformation.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('homepageHeader.png') !important;\n  background-size: cover; }\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px;\n  --border-width: 0px !important; }\n\nion-back-button {\n  color: white;\n  padding-top: 15px; }\n\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important; }\n\n.btnMenu {\n  --padding: 0px;\n  padding: 0 0 0 5px;\n  margin-top: 30px; }\n\n.divTitle {\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  text-shadow: 1px 1px 1px #0000005c;\n  text-align: center;\n  line-height: 80px; }\n\n.divPhoto {\n  margin-top: -20px;\n  z-index: 10;\n  color: #2a2a2a;\n  text-align: center; }\n\n.imgPhoto {\n  height: 140px; }\n\n.lblName {\n  color: white;\n  text-align: center;\n  font-size: 20px;\n  text-shadow: 1px 1px 1px #0000005c;\n  padding: 10px 0px; }\n\n.lblFullName {\n  color: white;\n  font-size: 18px;\n  display: block;\n  margin-top: 5px;\n  font-family: \"RobotoMedium\"; }\n\n.lblPosition {\n  display: block;\n  font-size: 12px; }\n\n.classContent {\n  --background: #F3F3F3;\n  --padding-top: 10px !important; }\n\n.crdContent {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.imgLeave {\n  width: 40px;\n  height: 40px;\n  margin-right: 15px;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.className {\n  color: #2a2a2a;\n  font-size: 14px;\n  display: block;\n  font-weight: bold;\n  margin-top: 5px; }\n\n.cardEntry {\n  margin: 5px; }\n\n.cardContent {\n  padding: 0px 15px 0px 0px; }\n\n.EntryInfo {\n  vertical-align: top;\n  padding-left: 10px;\n  font-size: 13px; }\n\n.menuToggle {\n  float: right;\n  height: 18px;\n  width: 18px;\n  padding-left: 5px;\n  font-weight: bold;\n  color: #484848; }\n\n.EntryName {\n  color: #484848;\n  font-size: 10px;\n  display: block; }\n\n.EntryValue {\n  color: #2a2a2a;\n  font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMtZ2FiYy9Eb2N1bWVudHMvR0VBUi9HRUFSX2lPUy9zcmMvYXBwL3BhZ2VzL3BlcnNvbmFsaW5mb3JtYXRpb24vcGVyc29uYWxpbmZvcm1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzREFBMEU7RUFDMUUsc0JBQXNCLEVBQUE7O0FBSTFCO0VBQ0kseUJBQWE7RUFDYixvQkFBZ0I7RUFDaEIsOEJBQWUsRUFBQTs7QUFHbkI7RUFDSSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksd0NBQWUsRUFBQTs7QUFHbkI7RUFDSSxjQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFlBQVk7RUFDWixpQkFBaUI7RUFFakIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxxQkFBYTtFQUNiLDhCQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw0RUFBNEUsRUFBQTs7QUFHaEY7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFjO0VBQ2QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGVyc29uYWxpbmZvcm1hdGlvbi9wZXJzb25hbGluZm9ybWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9ob21lcGFnZUhlYWRlci5wbmcnKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDAgIWltcG9ydGFudDtcbn1cblxuLmJ0bk1lbnUge1xuICAgIC0tcGFkZGluZzogMHB4O1xuICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uZGl2VGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAvL21hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMDAwMDAwNWM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xufVxuXG4uZGl2UGhvdG8ge1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltZ1Bob3RvIHtcbiAgICBoZWlnaHQ6IDE0MHB4O1xufVxuXG4ubGJsTmFtZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA1YztcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cblxuLmxibEZ1bGxOYW1lIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLmxibFBvc2l0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jbGFzc0NvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI0YzRjNGMztcbiAgICAtLXBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jcmRDb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmltZ0xlYXZlIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNsYXNzTmFtZSB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmNhcmRFbnRyeSB7XG4gICAgbWFyZ2luOiA1cHg7XG59XG5cbi5jYXJkQ29udGVudCB7XG4gICAgcGFkZGluZzogMHB4IDE1cHggMHB4IDBweDtcbn1cblxuLkVudHJ5SW5mbyB7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ubWVudVRvZ2dsZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMThweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzQ4NDg0ODtcbn1cblxuLkVudHJ5TmFtZSB7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uRW50cnlWYWx1ZSB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/personalinformation/personalinformation.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/personalinformation/personalinformation.page.ts ***!
  \***********************************************************************/
/*! exports provided: PersonalinformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalinformationPage", function() { return PersonalinformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var PersonalinformationPage = /** @class */ (function () {
    function PersonalinformationPage(navCtrl, storage, activatedRoute, loginService, menuCtrl, httpApi, router) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
        this.menuCtrl = menuCtrl;
        this.httpApi = httpApi;
        this.router = router;
        this.loadingDone = false;
        this.noError = true;
        this.clickedPIBG = false;
        this.clickedPersonal = false;
        this.clickedAddress = false;
        this.clickedContact = false;
    }
    PersonalinformationPage.prototype.ngOnInit = function () {
    };
    PersonalinformationPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingDone = false;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.fromPage = _this.activatedRoute.snapshot.paramMap.get('page');
            _this.getInfo();
            if (_this.fromPage == 'subordinate') {
                _this.subId = _this.activatedRoute.snapshot.paramMap.get('id');
                _this.name = _this.activatedRoute.snapshot.paramMap.get('name');
                _this.position = _this.activatedRoute.snapshot.paramMap.get('position');
                _this.idShow = _this.subId;
            }
            else {
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_EMPDETAILS"]).then(function (val) {
                    _this.name = val['0']['FULLNAME'];
                    _this.position = val['0']['POSITIONDESC'];
                    _this.idShow = _this.empId;
                });
            }
        });
    };
    PersonalinformationPage.prototype.getInfo = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            var postData = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"],
                IsActive: true,
                UserID: _this.empId,
                EmployeeID: _this.fromPage == 'subordinate' ? _this.subId : _this.empId
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/BasicInfo/GetPersonalInformation", postData, {})
                    .then(function (data) {
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
                    _this.personalInfo = jsonData['Value']['tblPersonalInfo']['0'];
                    _this.mobileInfo = jsonData['Value']['tblMobileInfo'];
                    _this.familyInfo = jsonData['Value']['tblFamily'];
                    _this.familyContactInfo = jsonData['Value']['tblFamilyContactPerson'];
                    _this.educationInfo = jsonData['Value']['tblEducation'];
                    if ((_this.personalInfo == null || _this.personalInfo == undefined) &&
                        (_this.familyInfo.length == 0) &&
                        (_this.educationInfo.length == 0)) {
                        _this.noError = false;
                        _this.errorMessage = "EMPTY";
                    }
                    _this.loadingDone = true;
                })
                    .catch(function (error) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    PersonalinformationPage.prototype.refresh = function () {
        this.ionViewWillEnter();
    };
    PersonalinformationPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    PersonalinformationPage.prototype.pageInfo = function (item) {
        if (this.fromPage == 'subordinate') {
            this.router.navigate(['/personalbackground',
                this.subId,
                item
            ]);
        }
        else {
            this.router.navigate(['/personalbackground',
                this.empId,
                item
            ]);
        }
    };
    PersonalinformationPage.prototype.goBack = function () { this.navCtrl.back(); };
    PersonalinformationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-personalinformation',
            template: __webpack_require__(/*! ./personalinformation.page.html */ "./src/app/pages/personalinformation/personalinformation.page.html"),
            styles: [__webpack_require__(/*! ./personalinformation.page.scss */ "./src/app/pages/personalinformation/personalinformation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], PersonalinformationPage);
    return PersonalinformationPage;
}());



/***/ })

}]);
//# sourceMappingURL=personalinformation-personalinformation-module.js.map