(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-main-main-module"],{

/***/ "./src/app/pages/main/main.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.module.ts ***!
  \*******************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/pages/main/main.page.ts");







var routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"],
        children: [
            {
                path: 'home',
                loadChildren: '../home/home.module#HomePageModule'
            },
            {
                path: 'leavecredits',
                loadChildren: '../leavecredits/leavecredits.module#LeavecreditsPageModule'
            },
            {
                path: 'leaveapproval',
                loadChildren: '../leaveapproval/leaveapproval.module#LeaveapprovalPageModule'
            },
            {
                path: 'calendar',
                loadChildren: '../calendar/calendar.module#CalendarPageModule'
            },
            {
                path: 'advisory',
                loadChildren: '../advisorytypelist/advisorytypelist.module#AdvisorytypelistPageModule'
            },
            {
                path: 'advisoryapproval',
                loadChildren: '../advisoryapproval/advisoryapproval.module#AdvisoryapprovalPageModule'
            },
            {
                path: 'subordinates',
                loadChildren: '../subordinates/subordinates.module#SubordinatesPageModule'
            },
            {
                path: 'about',
                loadChildren: '../about/about.module#AboutPageModule'
            },
            {
                path: 'personalinformation',
                loadChildren: '../personalinformation/personalinformation.module#PersonalinformationPageModule'
            },
            {
                path: 'dailytimerecord',
                loadChildren: '../dailytimerecord/dailytimerecord.module#DailytimerecordPageModule'
            },
            {
                path: 'dailytimerecord',
                loadChildren: '../dailytimerecord/dailytimerecord.module#DailytimerecordPageModule'
            },
            {
                path: 'dailytimerecord',
                loadChildren: '../dailytimerecord/dailytimerecord.module#DailytimerecordPageModule'
            },
            {
                path: 'overtime',
                loadChildren: '../overtime/overtime.module#OvertimePageModule'
            },
            {
                path: 'overtimeapproval',
                loadChildren: '../overtimeapproval/overtimeapproval.module#OvertimeapprovalPageModule'
            },
            {
                path: 'getup',
                loadChildren: '../getup/getup.module#GetupPageModule'
            },
            {
                path: 'epayslip',
                loadChildren: '../epayslip/epayslip.module#EpayslipPageModule'
            },
            {
                path: 'events',
                loadChildren: '../events/events.module#EventsPageModule'
            },
            {
                path: 'loans',
                loadChildren: '../loans/loans.module#LoansPageModule'
            },
            {
                path: 'purchases',
                loadChildren: '../purchases/purchases.module#PurchasesPageModule'
            },
            {
                path: 'workfromhome',
                loadChildren: '../workfromhome/workfromhome.module#WorkfromhomePageModule'
            },
            {
                path: 'forms',
                loadChildren: '../forms/forms.module#FormsPageModule'
            },
            {
                path: 'wfhapproval',
                loadChildren: '../wfhapproval/wfhapproval.module#WfhapprovalPageModule'
            },
            { path: 'healthtrack', loadChildren: '../healthtrack/healthtrack.module#HealthtrackPageModule' }
        ]
    },
    {
        path: '',
        redirectTo: 'home'
    }
];
var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
        })
    ], MainPageModule);
    return MainPageModule;
}());



/***/ }),

/***/ "./src/app/pages/main/main.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane>\n  <ion-menu>\n    <ion-header>\n      <ion-label class=\"labelName\">\n        {{name}}\n      </ion-label>\n      <ion-label class=\"labelDepartment\">\n        {{department}}\n      </ion-label>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\">\n          <div class=\"appTitle\">\n            <ion-label>User</ion-label>\n          </div>\n          <div *ngFor=\"let p of userPages\">\n            <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\">\n\n              <ion-icon *ngIf=\"p.title != 'Get Up' && \n              p.title != 'Leave Application' && \n              p.title != 'Attendance Advisory' && \n              p.title != 'Overtime Application'\" class=\"linkIcon\" slot=\"start\" [name]=\"p.icon\" [mode]=\"p.mode\">\n              </ion-icon>\n\n              <ion-icon *ngIf=\"p.title == 'Get Up' || \n              p.title == 'Leave Application' || \n              p.title == 'Attendance Advisory' || \n              p.title == 'Overtime Application'\" class=\"linkIcon2\" slot=\"start\" src=\"{{p.icon}}\"></ion-icon>\n\n              <ion-label class=\"linkName\">\n                {{p.title}}\n              </ion-label>\n            </ion-item>\n          </div>\n          <div class=\"appDivider\"></div>\n          <div class=\"appTitle\" *ngIf=\"isManager == 1\">\n            <ion-label>Manager</ion-label>\n          </div>\n          <div *ngIf=\"isManager == 1\">\n            <div *ngFor=\"let p of managerPages\">\n              <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\">\n\n                <ion-icon *ngIf=\"p.title != 'Leave Approval' && \n                p.title != 'Attendance Advisory Approval' && \n                p.title != 'Overtime Approval'\" class=\"linkIcon\" slot=\"start\" [name]=\"p.icon\" [mode]=\"p.mode\">\n                </ion-icon>\n\n                <ion-icon *ngIf=\"p.title == 'Leave Approval' || \n                p.title == 'Attendance Advisory Approval' || \n                p.title == 'Overtime Approval'\" class=\"linkIcon2\" slot=\"start\" src=\"{{p.icon}}\"></ion-icon>\n\n                <ion-label class=\"linkName\">\n                  {{p.title}}\n                </ion-label>\n              </ion-item>\n            </div>\n          </div>\n          <div class=\"appDivider\" *ngIf=\"isManager == 1\">\n          </div>\n          <ion-item [routerDirection]=\"'root'\" [routerLink]=\"'/main//about'\" lines=\"none\" detail=\"false\">\n            <ion-icon class=\"linkIcon\" slot=\"start\" name=\"information-circle-outline\" mode=\"ios\"></ion-icon>\n            <ion-label class=\"linkName\">\n              About\n            </ion-label>\n          </ion-item>\n          <ion-item (click)=\"logout()\" lines=\"none\" detail=\"false\">\n            <ion-icon class=\"linkIcon\" slot=\"start\" name=\"log-out\" mode=\"ios\"></ion-icon>\n            <ion-label class=\"linkName\">\n              Log Out\n            </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet main></ion-router-outlet>\n</ion-split-pane>"

/***/ }),

/***/ "./src/app/pages/main/main.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('homepageHeader.png') !important;\n  background-size: cover;\n  background-position: center center;\n  height: 150px; }\n\nion-toolbar {\n  --background: transparent;\n  --min-height: 32px;\n  --padding-top: 0px;\n  --padding-bottom: 0px; }\n\n.labelName {\n  color: white;\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  margin-bottom: 30px;\n  margin-left: 20px;\n  font-size: 14px;\n  text-shadow: 1px 1px 1px #0000005c;\n  font-family: \"RobotoRegular\"; }\n\n.version {\n  font-size: 13px;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  color: grey; }\n\n.labelDepartment {\n  color: white;\n  position: absolute;\n  bottom: 0;\n  margin-bottom: 10px;\n  margin-left: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 85%;\n  font-size: 14px;\n  text-shadow: 1px 1px 1px #0000005c; }\n\n.appTitle {\n  color: #706969;\n  font-size: 14px;\n  padding: 16px 0 10px 16px;\n  font-family: \"RobotoMedium\"; }\n\n.linkName {\n  color: #2A2A2A;\n  font-size: 13px;\n  font-family: \"RobotoRegular\"; }\n\n.linkIcon {\n  color: #706969; }\n\n.linkIcon2 {\n  stroke: none;\n  stroke-width: 0;\n  fill: #706969 !important;\n  height: 25px; }\n\n.appDivider {\n  margin-bottom: 10px;\n  border-style: solid;\n  border-width: 0.5px;\n  border-color: #707070; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMtZ2FiYy9Eb2N1bWVudHMvR0VBUi9HRUFSX2lPUy9zcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzREFBMEU7RUFDMUUsc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxhQUFhLEVBQUE7O0FBR2pCO0VBQ0kseUJBQWE7RUFDYixrQkFBYTtFQUNiLGtCQUFjO0VBQ2QscUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVyxFQUFBOztBQUdmO0VBQ0ksWUFBWTtFQUVaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUVqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZUFBZTtFQUNmLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vbWFpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvaG9tZXBhZ2VIZWFkZXIucG5nJykgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxNTBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1taW4taGVpZ2h0OiAzMnB4O1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5sYWJlbE5hbWUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMDAwMDA1YztcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi52ZXJzaW9uIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGNvbG9yOiBncmV5O1xufVxuXG4ubGFiZWxEZXBhcnRtZW50IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgLy8gb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aWR0aDogODUlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMDVjO1xufVxuXG4uYXBwVGl0bGUge1xuICAgIGNvbG9yOiAjNzA2OTY5O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAxNnB4IDAgMTBweCAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4ubGlua05hbWUge1xuICAgIGNvbG9yOiAjMkEyQTJBO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5saW5rSWNvbiB7XG4gICAgY29sb3I6ICM3MDY5Njk7XG59XG5cbi5saW5rSWNvbjIge1xuICAgIHN0cm9rZTogbm9uZTtcbiAgICBzdHJva2Utd2lkdGg6IDA7XG4gICAgZmlsbDogIzcwNjk2OSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjVweDtcbn1cblxuLmFwcERpdmlkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDAuNXB4O1xuICAgIGJvcmRlci1jb2xvcjogIzcwNzA3MDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/main/main.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/main/main.page.ts ***!
  \*****************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");








var MainPage = /** @class */ (function () {
    function MainPage(http, router, loginService, storage, alertController, navCtrl) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.loginService = loginService;
        this.storage = storage;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.userPages = [
            {
                title: 'Home',
                url: '/main/home',
                icon: 'home',
                mode: 'md'
            },
            {
                title: 'Personal Information',
                url: '/main//personalinformation',
                icon: 'contact',
                mode: 'ios'
            },
            {
                title: 'Leave Application',
                url: '/main/leavecredits',
                icon: '/assets/icon/ic_menu_leave.svg',
                mode: 'md'
            },
            {
                title: 'Attendance Advisory',
                url: '/main/advisory',
                icon: '/assets/icon/ic_menu_att.svg',
                mode: 'md'
            },
            // {
            //   title: 'Work From Home',
            //   url: '/main/workfromhome',
            //   icon: 'briefcase',
            //   mode: 'md'
            // },
            {
                title: 'Daily Time Record',
                url: '/main//dailytimerecord',
                icon: 'time',
                mode: 'ios'
            },
            {
                title: 'E-Payslip',
                url: '/main/epayslip',
                icon: 'today',
                mode: 'md'
            },
            {
                title: 'Health Track',
                url: '/main/healthtrack',
                icon: 'heart-half',
                mode: 'md'
            },
            {
                title: 'Events',
                url: '/main//events',
                icon: 'star',
                mode: 'md'
            },
            {
                title: 'Loans',
                url: '/main//loans',
                icon: 'cash',
                mode: 'ios'
            },
            {
                title: 'Purchases',
                url: '/main//purchases',
                icon: 'basket',
                mode: 'ios'
            },
            {
                title: 'Forms',
                url: '/main//forms',
                icon: 'folder',
                mode: 'md'
            },
            {
                title: 'Calendar',
                url: '/main//calendar',
                icon: 'calendar',
                mode: 'md'
            }
        ];
        this.managerPages = [
            {
                title: 'Subordinates',
                url: '/main//subordinates',
                icon: 'people',
                mode: 'ios'
            },
            {
                title: 'Leave Approval',
                url: '/main//leaveapproval',
                icon: '/assets/icon/ic_menu_la.svg',
                mode: 'md'
            },
            {
                title: 'Work From Home Approval',
                url: '/main//wfhapproval',
                icon: 'briefcase',
                mode: 'ios'
            },
            {
                title: 'Attendance Advisory Approval',
                url: '/main/advisoryapproval',
                icon: '/assets/icon/ic_menu_aa.svg',
                mode: 'ios'
            }
        ];
        this.selectedPath = '';
        this.router.events.subscribe(function (event) {
            _this.selectedPath = event.url;
        });
    }
    MainPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getConfigFiles();
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_EMPDETAILS"]).then(function (val) {
            _this.name = val['0']['FULLNAME'];
            _this.department = val['0']['DEPARTMENT'];
            _this.isManager = val['0']['ISMANAGER'];
        });
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_MENU"]).then(function (val) {
            console.log(val);
            _this.isGetUp = val['0']['isGetUp'];
            _this.isOTUser = val['0']['isOTUser'];
            _this.isOTManager = val['0']['isOTManager'];
            _this.isWorkFromHome = val['0']['IsWorkFromHome'];
            if (_this.isGetUp == true) {
                var listAdd = {
                    title: 'Get Up',
                    url: '/main/getup',
                    icon: '/assets/icon/ic_getup.svg',
                    mode: 'md'
                };
                _this.userPages.splice(5, 0, listAdd);
            }
            if (_this.isWorkFromHome == true) {
                var listAdd = {
                    title: 'Work From Home',
                    url: '/main/workfromhome',
                    icon: 'briefcase',
                    mode: 'md'
                };
                _this.userPages.splice(3, 0, listAdd);
            }
            if (_this.isOTUser == true) {
                var listAdd = {
                    title: 'Overtime Application',
                    url: '/main/overtime',
                    icon: '/assets/icon/ic_menu_ot.svg',
                    mode: 'md'
                };
                _this.userPages.splice(4, 0, listAdd);
            }
            if (_this.isOTManager == true) {
                var listAdd = {
                    title: 'Overtime Approval',
                    url: '/main/overtimeapproval',
                    icon: '/assets/icon/ic_menu_oa.svg',
                    mode: 'md'
                };
                _this.managerPages.splice(3, 0, listAdd);
            }
        });
        console.log(this.userPages);
    };
    MainPage.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Log Out',
                            message: 'Are you sure you want to log out?',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel'
                                }, {
                                    text: 'Log Out',
                                    handler: function () {
                                        _this.loginService.logout();
                                    }
                                }]
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
    MainPage.prototype.toTitleCase = function (str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    MainPage.prototype.getConfigFiles = function () {
        var _this = this;
        console.log("getConfigFiles");
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_RECORD_ID"]],
                UserID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_USER_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["VERSION"],
                UserType: "GABC"
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.http.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["SERVER_URL"]] + "/api/Config/GetConfigFiles", request, {})
                    .then(function (data) {
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Success'] == "Yes") {
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_EMPID"], val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_USER_ID"]]);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_LEAVETYPES"], jsonData['Value']['tblLeaveTypeList']);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_DATEOFDUTY"], jsonData['Value']['tblDateOfDutyList']);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_EMPDETAILS"], jsonData['Value']['tblEmployeeDetails']);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_HOLIDAYS"], jsonData['Value']['tblHolidays']);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_REQTYPE"], jsonData['Value']['tblRequestType']);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_MENU"], jsonData['Value']['tblMenuItems']);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_OTTYPES"], jsonData['Value']['tblOTScheduledType']);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_CHILDRENHOURRATE"], jsonData['Value']['tblChildrenHourRate']);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_CALFILTER_HOLIDAY"], true);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_CALFILTER_LEAVES"], true);
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_CALFILTER_FORAPPROVAL_LEAVES"], true);
                    }
                    else {
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["OUTDATED_ERROR"]:
                                _this.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OTHER_DEVICE"]:
                                _this.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_EXPIRED"]:
                                _this.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_REQUIRED"]:
                                _this.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        alert("Connection failed. Please try again.");
                        _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_ERROR_MESSAGE"], "Response Message: " + jsonData['Message']);
                    }
                })
                    .catch(function (error) {
                    alert("Connection failed. Please try again.");
                    _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_ERROR_MESSAGE"], "Get Config Files: " + error.error);
                });
            });
        });
    };
    MainPage.prototype.showSessionError = function (headerMsge, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: headerMsge,
                            message: message,
                            backdropDismiss: false,
                            buttons: [{
                                    text: 'Okay',
                                    handler: function () {
                                        _this.logout();
                                    }
                                }]
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
    MainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.page.html */ "./src/app/pages/main/main.page.html"),
            styles: [__webpack_require__(/*! ./main.page.scss */ "./src/app/pages/main/main.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_2__["HTTP"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
    ], MainPage);
    return MainPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-main-main-module.js.map