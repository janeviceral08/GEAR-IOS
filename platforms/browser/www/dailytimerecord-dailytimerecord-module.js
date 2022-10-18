(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dailytimerecord-dailytimerecord-module"],{

/***/ "./src/app/pages/dailytimerecord/dailytimerecord.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dailytimerecord/dailytimerecord.module.ts ***!
  \*****************************************************************/
/*! exports provided: DailytimerecordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailytimerecordPageModule", function() { return DailytimerecordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dailytimerecord_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dailytimerecord.page */ "./src/app/pages/dailytimerecord/dailytimerecord.page.ts");
/* harmony import */ var _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.module */ "./src/app/component/filter-menu/filter-menu.module.ts");








var routes = [
    {
        path: '',
        component: _dailytimerecord_page__WEBPACK_IMPORTED_MODULE_6__["DailytimerecordPage"]
    }
];
var DailytimerecordPageModule = /** @class */ (function () {
    function DailytimerecordPageModule() {
    }
    DailytimerecordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__["FilterMenuComponentModule"]
            ],
            declarations: [_dailytimerecord_page__WEBPACK_IMPORTED_MODULE_6__["DailytimerecordPage"]]
        })
    ], DailytimerecordPageModule);
    return DailytimerecordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/dailytimerecord/dailytimerecord.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dailytimerecord/dailytimerecord.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button class=btnMenu ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n        <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button class=btnFilter slot=\"end\" color=\"light\" (click)=\"openModal()\">\n        <ion-icon slot=\"start\" name=\"search\" mode=\"md\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-title mode=\"md\" slot=\"start\">Daily Time Record</ion-title>\n</ion-header>\n<ion-content padding class=\"classContent\" hide-header header=\"header\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card class=divCardSegment mode=\"md\">\n    <div *ngIf=\"loadingDone; else shimmer\">\n      <div *ngIf=\"noError; else error\">\n        <ion-segment class=\"sgmtDTRType\" mode=\"md\" scrollable [(ngModel)]=\"DTRType\">\n          <div *ngFor=\"let type of DTRTypeList\">\n            <div *ngIf=\"type == 'DTR'; else otherType\">\n              <ion-segment-button mode=\"md\" value={{type}} checked>\n                {{type}}\n              </ion-segment-button>\n            </div>\n            <ng-template #otherType>\n              <ion-segment-button mode=\"md\" value={{type}}>\n                {{type}}\n              </ion-segment-button>\n            </ng-template>\n          </div>\n        </ion-segment>\n        <div [ngSwitch]=\"DTRType\">\n          <div *ngFor=\"let type of DTRTypeList\">\n            <ion-list mode=\"md\" *ngSwitchCase=\"type\">\n              <div *ngIf=\"type == 'DTR'\">\n                <div *ngIf=\"!dtrIsEmpty; else error\">\n                  <div *ngFor=\"let dtr of DTRList\">\n                    <ion-item class=\"itmClass\" button lines=\"full\" detail=\"false\" (click)=\"setDTRDetails(dtr)\">\n                      <ion-avatar class=\"divDate\">\n                        <div class=\"DateMonth\">\n                          {{getDateMonth(dtr.DTR_date,1)}}\n                        </div>\n                        <div class=\"DateDate\">\n                          {{getDateDate(dtr.DTR_date)}}\n                        </div>\n                      </ion-avatar>\n                      <ion-label class=\"lblDTR\" text-wrap>\n                        <div class=\"divDTRDesc\">\n                          <span *ngIf=\"dtr.Leave_rem != ''\" class=\"divLeave\">\n                            <img *ngIf=\"dtr.Leave_rem == 'BL'\" src=\"assets/icon/ic_bl.png\" alt=\"\" class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.Leave_rem == 'EL'\" src=\"assets/icon/ic_el.png\" alt=\"\" class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.Leave_rem == 'IL'\" src=\"assets/icon/ic_il.png\" alt=\"\" class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.Leave_rem == 'MCW'\" src=\"assets/icon/ic_mcw.png\" alt=\"\"\n                              class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.Leave_rem == 'ML'\" src=\"assets/icon/ic_ml.png\" alt=\"\" class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.Leave_rem == 'PL'\" src=\"assets/icon/ic_pl.png\" alt=\"\" class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.Leave_rem == 'SL'\" src=\"assets/icon/ic_sl.png\" alt=\"\" class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.Leave_rem == 'VL'\" src=\"assets/icon/ic_vl.png\" alt=\"\" class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.Leave_rem == 'XS'\" src=\"assets/icon/ic_xs.png\" alt=\"\" class=\"imgLeaveIcon\">\n                            <!-- {{dtr.Leave_rem}} -->\n                          </span>\n                          <span *ngIf=\"dtr.AttAdv_rem != ''\" class=\"divLeave\">\n                            <img *ngIf=\"dtr.AttAdv_rem == 'AUTHORIZED UNDER TIME '\" src=\"assets/icon/ic_au.png\" alt=\"\"\n                              class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.AttAdv_rem == 'AUTHORIZED LATE '\" src=\"assets/icon/ic_el.al\" alt=\"\"\n                              class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.AttAdv_rem == 'OFFSET '\" src=\"assets/icon/ic_os.png\" alt=\"\"\n                              class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.AttAdv_rem == 'CTO '\" src=\"assets/icon/ic_cto.png\" alt=\"\"\n                              class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.AttAdv_rem == 'OFFICIAL BUSINESS '\" src=\"assets/icon/ic_ob.png\" alt=\"\"\n                              class=\"imgLeaveIcon\">\n                            <img *ngIf=\"dtr.AttAdv_rem == 'AUTHORIZED SHIFT '\" src=\"assets/icon/ic_as.png\" alt=\"\"\n                              class=\"imgLeaveIcon\">\n                            <!-- {{dtr.AttAdv_rem}} -->\n                          </span>\n                          <div class=\"divDTRTime\">\n                            <span *ngIf=\"dtr.Am_In != ''\">{{dtr.Am_In}}</span>\n                            <span *ngIf=\"dtr.Am_In == ''\">-</span>\n                            <span *ngIf=\"dtr.Am_Out != ''\"> - {{dtr.Am_Out}}</span>\n                          </div>\n                          <div class=\"divDTRDay\">\n                            <span>{{dtr.Att_Code}}</span>\n                          </div>\n                          <div class=\"divDTRHours\">\n                            <span>Shift: {{dtr.ShiftSchedule}}</span>\n                          </div>\n                        </div>\n                      </ion-label>\n                    </ion-item>\n                  </div>\n                </div>\n              </div>\n              <div *ngIf=\"type == 'OFFICIAL BUSINESS'\">\n                <div *ngIf=\"!obIsEmpty; else error\">\n                  <div *ngFor=\"let ob of OBList\">\n                    <ion-item class=\"itmClass\" button lines=\"full\" detail=\"false\">\n                      <ion-avatar class=\"divDate\">\n                        <div class=\"DateMonth\">\n                          {{getDateMonth(ob.Log_Date,1)}}\n                        </div>\n                        <div class=\"DateDate\">\n                          {{getDateDate(ob.Log_Date)}}\n                        </div>\n                      </ion-avatar>\n                      <ion-label text-wrap>\n                        <div class=\"divDTRDesc\">\n                          <div class=\"divOBTime\">\n                            <span *ngIf=\"ob.Log_Time != ''\">{{ob.Log_Time}}</span>\n                            <span *ngIf=\"ob.Log_Time == ''\">-</span>\n                            <span *ngIf=\"ob.Log_Time_In != ''\"> - {{ob.Log_Time_In}}</span>\n                          </div>\n                          <div class=\"divOBRemarks\">\n                            <span *ngIf=\"ob.Remarks != ''\">{{ob.Log_Remark}}</span>\n                          </div>\n                        </div>\n                      </ion-label>\n                    </ion-item>\n                  </div>\n                </div>\n              </div>\n            </ion-list>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n<ng-template #shimmer>\n  <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  <div id=\"lines7\" class=\"shine\"></div>\n  <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0,1,2]\">\n    <ion-avatar class=\"divDate\">\n      <div class=\"DateMonth\"></div>\n      <div class=\"DateDate\"></div>\n    </ion-avatar>\n    <ion-label>\n      <div id=\"lines4\" class=\"shine\"></div><br>\n      <div id=\"lines3\" class=\"shine\"></div><br>\n      <div id=\"lines3\" class=\"shine\"></div>\n    </ion-label>\n  </ion-item>\n</ng-template>\n<ng-template #error>\n  <ion-item lines=\"none\">\n    <div class=\"errorbox\">\n      <ion-avatar class=\"center\">\n        <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n      <span class=\"errorMessage\">{{errorMessage}}</span>\n      <span class=\"errorMessage\">\n        <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n          <ion-icon color=\"light\" name=\"home\"></ion-icon>\n        </ion-button>\n      </span>\n    </div>\n  </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/dailytimerecord/dailytimerecord.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dailytimerecord/dailytimerecord.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('banner_dark_green.png') !important;\n  background-size: cover;\n  background-position: bottom;\n  padding: 10px 0px; }\n\nion-toolbar {\n  --background: transparent;\n  --padding-start: 0px; }\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 30px;\n  text-shadow: 1px 1px 1px #0000005c; }\n\nion-icon {\n  font-size: 24px !important; }\n\nion-list {\n  padding-bottom: 0px; }\n\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important; }\n\nion-card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.btnMenu {\n  padding: 0 0 0 5px; }\n\n.classContent {\n  --background: #F5F5F5;\n  --padding-top: 10px !important; }\n\n.divCardSegment {\n  margin-left: -5px;\n  margin-right: -5px;\n  margin-top: 0px; }\n\n.sgmtDTRType {\n  min-width: 70px;\n  background: white;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: #cecccc;\n  font-family: \"RobotoRegular\"; }\n\n.divDate {\n  margin-top: -30px; }\n\n.divDTRDesc {\n  margin-left: 40px;\n  padding-bottom: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-height: 70px; }\n\n.divDTRStat {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: -8px; }\n\n.DateMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px; }\n\n.DateDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px; }\n\n.divDTRTime {\n  font-size: 14px;\n  font-family: \"RobotoRegular\"; }\n\n.divDTRDay {\n  color: #808080;\n  font-size: 11px;\n  margin-bottom: 12px; }\n\n.divDTRHours {\n  color: #808080;\n  font-size: 11px; }\n\n.lblDTR {\n  margin-right: 5px; }\n\n.divLeave {\n  font-size: 11px;\n  float: right;\n  text-align: center; }\n\n.imgLeaveIcon {\n  height: 30px;\n  width: 30px;\n  border-radius: 15px; }\n\n.divOBTime {\n  font-size: 14px;\n  margin-bottom: 5px; }\n\n.divOBRemarks {\n  color: #808080;\n  font-size: 11px;\n  white-space: normal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMtZ2FiYy9Eb2N1bWVudHMvR0VBUi9HRUFSX2lPUy9zcmMvYXBwL3BhZ2VzL2RhaWx5dGltZXJlY29yZC9kYWlseXRpbWVyZWNvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseURBQTZFO0VBQzdFLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0kseUJBQWE7RUFDYixvQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxZQUFZO0VBQ1osaUJBQWlCO0VBRWpCLGVBQWU7RUFDZixrQ0FBa0MsRUFBQTs7QUFHdEM7RUFDSSwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSx3Q0FBZSxFQUFBOztBQUduQjtFQUNJLDRFQUE0RSxFQUFBOztBQUdoRjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHFCQUFhO0VBQ2IsOEJBQWMsRUFBQTs7QUFHbEI7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUNKLEVBQUE7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxlQUFlO0VBQ2YsNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUduQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhaWx5dGltZXJlY29yZC9kYWlseXRpbWVyZWNvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2Jhbm5lcl9kYXJrX2dyZWVuLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgLy8gaGVpZ2h0OiAxMDBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLy8gbWFyZ2luLXRvcDogMjBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgLy9tYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMDVjO1xufVxuXG5pb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG5pb24taXRlbTpsYXN0LWNoaWxkIHtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmJ0bk1lbnUge1xuICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbn1cblxuLmNsYXNzQ29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICAgIC0tcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRpdkNhcmRTZWdtZW50IHtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC01cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uc2dtdERUUlR5cGUge1xuICAgIG1pbi13aWR0aDogNzBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2NlY2NjYztcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5kaXZEYXRlIHtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLmRpdkRUUkRlc2Mge1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1pbi1oZWlnaHQ6IDcwcHg7XG59XG5cbi5kaXZEVFJTdGF0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcbn1cblxuLkRhdGVNb250aCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDIwcHhcbn1cblxuLkRhdGVEYXRlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICM1QzVDNUM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNDVweDtcbn1cblxuLmRpdkRUUlRpbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5kaXZEVFJEYXkge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZGl2RFRSSG91cnMge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmxibERUUiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5kaXZMZWF2ZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWdMZWF2ZUljb24ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uZGl2T0JUaW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZGl2T0JSZW1hcmtzIHtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/dailytimerecord/dailytimerecord.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/dailytimerecord/dailytimerecord.page.ts ***!
  \***************************************************************/
/*! exports provided: DailytimerecordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailytimerecordPage", function() { return DailytimerecordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.component */ "./src/app/component/filter-menu/filter-menu.component.ts");









var DailytimerecordPage = /** @class */ (function () {
    function DailytimerecordPage(storage, router, menuCtrl, httpApi, loginService, modalController) {
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.httpApi = httpApi;
        this.loginService = loginService;
        this.modalController = modalController;
        this.DTRType = "DTR";
        this.DTRTypeList = ["DTR", "OFFICIAL BUSINESS"];
        this.DTRList = [];
        this.OBList = [];
        this.loadingDone = false;
        this.noError = true;
        this.dtrModal = [];
    }
    DailytimerecordPage.prototype.ngOnInit = function () {
    };
    DailytimerecordPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingDone = false;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.getDTR();
        });
    };
    DailytimerecordPage.prototype.getDTR = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SESSION"]).then(function (val) {
            var request = {
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["VERSION"],
                UserID: _this.empId,
                EmployeeId: _this.empId,
                Remarks: "",
                DateFrom_DTR: _this.dtrDateFrom,
                DateTo_DTR: _this.dtrDateTo,
                DateFrom_OB: _this.obDateFrom,
                DateTo_OB: _this.obDateTo
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (value) {
                var uri = value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]] + "/api/DTROB/GetDTROB";
                var url = encodeURI(uri);
                _this.httpApi.post(url, request, {})
                    .then(function (data) {
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["MESSAGE_CON_ERROR"];
                        _this.loadingDone = true;
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
                        _this.loadingDone = true;
                        return;
                    }
                    _this.tempResult = jsonData['Value']["tblDTR"];
                    if (_this.tempResult.length == 0) {
                        _this.dtrIsEmpty = true;
                        _this.errorMessage = "EMPTY";
                    }
                    _this.tempResult = jsonData['Value']["tblOB"];
                    if (_this.tempResult.length == 0) {
                        _this.obIsEmpty = true;
                        _this.errorMessage = "EMPTY";
                    }
                    _this.noError = true;
                    _this.DTRList = jsonData['Value']["tblDTR"];
                    _this.OBList = jsonData['Value']["tblOB"];
                    _this.loadingDone = true;
                    console.log(_this.DTRList);
                })
                    .catch(function (error) {
                    console.log(error);
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
    DailytimerecordPage.prototype.setDTRDetails = function (item) {
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_DTRDETAILS"], item);
        this.router.navigate(['/dailytimerecorddetails', 'dailytimerecord']);
    };
    DailytimerecordPage.prototype.getDateMonth = function (datename, procedure) {
        var date = new Date(datename);
        var CurrentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrentMonth[date.getMonth()].toString().toUpperCase();
        else
            return CurrentMonth[date.getMonth()];
    };
    DailytimerecordPage.prototype.getDateDate = function (datename) {
        var date = new Date(datename);
        return date.getDate().toString();
    };
    DailytimerecordPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    DailytimerecordPage.prototype.openModal = function () {
        if (!this.modalIsOpen)
            this.showModal();
    };
    DailytimerecordPage.prototype.showModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalIsOpen = true;
                        this.dtrModal["LeaveFrom"] = this.dtrDateFrom;
                        this.dtrModal["LeaveTo"] = this.dtrDateTo;
                        this.dtrModal["DateFrom"] = this.obDateFrom;
                        this.dtrModal["DateTo"] = this.obDateTo;
                        return [4 /*yield*/, this.modalController.create({
                                component: _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_8__["FilterMenuComponent"],
                                cssClass: 'modalFilterMenu',
                                animated: false,
                                backdropDismiss: false,
                                componentProps: {
                                    module: "DailyTimeRecord",
                                    data: this.dtrModal
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                if (detail.data['isDismissed'] == 0) {
                                    _this.dtrDateFrom = detail.data['leaveFrom'];
                                    _this.dtrDateTo = detail.data['leaveTo'];
                                    _this.obDateFrom = detail.data['dateFiledFrom'];
                                    _this.obDateTo = detail.data['dateFiledTo'];
                                    console.log(_this.dtrDateFrom, _this.dtrDateTo, _this.obDateFrom, _this.obDateTo);
                                    _this.loadingDone = false;
                                    _this.noError = true;
                                    _this.dtrIsEmpty = false;
                                    _this.obIsEmpty = false;
                                    _this.getDTR();
                                }
                            }
                            _this.modalIsOpen = false;
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DailytimerecordPage.prototype.refresh = function (event) {
        this.event = event;
        this.ionViewWillEnter();
    };
    DailytimerecordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dailytimerecord',
            template: __webpack_require__(/*! ./dailytimerecord.page.html */ "./src/app/pages/dailytimerecord/dailytimerecord.page.html"),
            styles: [__webpack_require__(/*! ./dailytimerecord.page.scss */ "./src/app/pages/dailytimerecord/dailytimerecord.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
    ], DailytimerecordPage);
    return DailytimerecordPage;
}());



/***/ })

}]);
//# sourceMappingURL=dailytimerecord-dailytimerecord-module.js.map