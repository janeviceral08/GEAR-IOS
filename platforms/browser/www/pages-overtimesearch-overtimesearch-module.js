(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-overtimesearch-overtimesearch-module"],{

/***/ "./src/app/pages/overtimesearch/overtimesearch.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/overtimesearch/overtimesearch.module.ts ***!
  \***************************************************************/
/*! exports provided: OvertimesearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimesearchPageModule", function() { return OvertimesearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _overtimesearch_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overtimesearch.page */ "./src/app/pages/overtimesearch/overtimesearch.page.ts");
/* harmony import */ var _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.module */ "./src/app/component/filter-menu/filter-menu.module.ts");








var routes = [
    {
        path: '',
        component: _overtimesearch_page__WEBPACK_IMPORTED_MODULE_6__["OvertimesearchPage"]
    }
];
var OvertimesearchPageModule = /** @class */ (function () {
    function OvertimesearchPageModule() {
    }
    OvertimesearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__["FilterMenuComponentModule"]
            ],
            declarations: [_overtimesearch_page__WEBPACK_IMPORTED_MODULE_6__["OvertimesearchPage"]]
        })
    ], OvertimesearchPageModule);
    return OvertimesearchPageModule;
}());



/***/ }),

/***/ "./src/app/pages/overtimesearch/overtimesearch.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/overtimesearch/overtimesearch.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n<div>\n  <ion-button class=\"backClass\" color=\"light\" slot=\"start\" (click)=\"backPressed()\">\n    <ion-icon name=\"arrow-back\"></ion-icon>\n  </ion-button>\n  <ion-button class=\"filterClass\" color=\"light\" slot=\"end\" (click)=\"openModal()\">\n    <ion-icon class=\"icnFilter\" slot=\"start\" name=\"funnel\" mode=\"md\"></ion-icon>Filter List\n  </ion-button>\n</div>\n<ion-content padding>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card>\n    <div *ngIf=\"noError; else error\">\n      <div *ngIf=\"loadingDone; else shimmer\">\n        <ion-list>\n          <div *ngFor=\"let item of (results)\">\n            <ion-item button lines=\"full\" detail=\"false\" (click)=\"setOTDetails(item)\">\n              <ion-avatar class=\"divOTFrom\">\n                <div class=\"OTFromMonth\">\n                  {{getDateMonth(item.STARTDATE,1)}}\n                </div>\n                <div class=\"OTFromDate\">\n                  {{getDateDate(item.STARTDATE)}}\n                </div>\n              </ion-avatar>\n              <ion-label text-wrap>\n                <div class=\"divOTDesc\">\n                  <div class=\"divDateCreated\">{{ getLongDate(item.CREATEDDATE) }}</div>\n                  <div class=\"divOTTime\">{{ item.STARTTIME }} - {{item.ENDTIME}}</div>\n                  <span [ngClass]=\"{'classForApprovalLabel': item.STATUSDESC == 'FOR APPROVAL', \n                  'classApprovedLabel': item.STATUSDESC == 'APPROVED',\n                  'classOnHoldLabel': item.STATUSDESC == 'ON HOLD',\n                  'classPlannedLabel': item.STATUSDESC == 'PLANNED',\n                  'classCancelledLabel': item.STATUSDESC == 'CANCELLED',\n                  'classDisapprovedLabel': item.STATUSDESC == 'DISAPPROVED',\n                  'classPostedLabel': item.STATUSDESC == 'POSTED'}\" class=\"RequestType\">\n                    {{ item.STATUSDESC }}</span>\n                  <div class=\"divOTHours\" *ngIf=\"item.APPLIEDOTHOURS > 1 \">{{ item.APPLIEDOTHOURS }} Hours</div>\n                  <div class=\"divOTHours\" *ngIf=\"item.APPLIEDOTHOURS <= 1 \">{{ item.APPLIEDOTHOURS }} Hour</div>\n                </div>\n              </ion-label>\n            </ion-item>\n          </div>\n        </ion-list>\n      </div>\n    </div>\n  </ion-card>\n</ion-content>\n<ng-template #shimmer>\n  <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0,1,2,3,4,5]\">\n    <div id=\"box\" class=\"shine\"></div>\n    <div class=\"divShimmer\">\n      <div id=\"lines1\" class=\"shine\"></div>\n      <div id=\"lines2\" class=\"shine\"></div>\n    </div>\n  </ion-item>\n</ng-template>\n<ng-template #error>\n  <ion-item lines=\"none\">\n    <div class=\"errorbox\">\n      <ion-avatar class=\"center\">\n        <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n      <span class=\"errorMessage\">{{errorMessage}}</span>\n      <span class=\"errorMessage\">\n        <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n          <ion-icon color=\"light\" name=\"home\"></ion-icon>\n        </ion-button>\n      </span>\n    </div>\n  </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/overtimesearch/overtimesearch.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/overtimesearch/overtimesearch.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\n  ion-modal.show-page {\n    background-color: #0000006e;\n    text-align: -webkit-center; }\n  .modal-wrapper {\n    width: 90%;\n    border-radius: 5px;\n    height: 70%;\n    margin-top: 20%; } }\n\nion-content {\n  --padding-top: 0; }\n\nion-back-button {\n  color: white;\n  padding-top: 15px; }\n\nion-card {\n  margin: 0px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\nion-item {\n  --inner-padding-end: 0px !important; }\n\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important; }\n\nion-thumbnail {\n  height: 90px;\n  width: 90px;\n  margin: 10px;\n  margin-left: 15x; }\n\nion-segment-button {\n  min-width: 70px; }\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px; }\n\n.backClass {\n  --inner-padding-top: 5px;\n  --inner-padding-bottom: 5px;\n  margin: 16px 16px;\n  color: #2a2a2a;\n  height: 45px;\n  margin-top: 30px; }\n\n.filterClass {\n  float: right;\n  --border-radius: 5px;\n  --color: #6B6969 !important;\n  --inner-padding-top: 5px;\n  --inner-padding-bottom: 5px;\n  margin: 16px 16px;\n  font-size: 13px;\n  height: 45px;\n  margin-top: 30px; }\n\n.icnFilter {\n  color: #2a2a2a; }\n\n.divOTFrom {\n  margin-top: -20px; }\n\n.OTFromMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px; }\n\n.OTFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px; }\n\n.divOTDesc {\n  margin-left: 40px;\n  padding-bottom: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-height: 70px; }\n\n.divDateCreated {\n  font-size: 12px;\n  float: right;\n  color: #808080; }\n\n.divOTTime {\n  font-size: 14px; }\n\n.divOTHours {\n  color: #808080;\n  font-size: 11px; }\n\n.RequestType {\n  font-size: 11px;\n  margin-bottom: 10px;\n  display: inline-block; }\n\n.sc-ion-buttons-md-h {\n  float: left; }\n\n.list-md-lines-full .item,\n.list-md .item-lines-full {\n  --border-width: 1px 0 0 0 !important; }\n\n.list-md {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important; }\n\n.header-items {\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMtZ2FiYy9Eb2N1bWVudHMvR0VBUi9HRUFSX2lPUy9zcmMvYXBwL3BhZ2VzL292ZXJ0aW1lc2VhcmNoL292ZXJ0aW1lc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0UsMkJBQTJCO0lBQzNCLDBCQUEwQixFQUFBO0VBRzVCO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZSxFQUFBLEVBQ2hCOztBQUdIO0VBQ0UsZ0JBQWMsRUFBQTs7QUFHaEI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsV0FBVztFQUNYLDRFQUE0RSxFQUFBOztBQUc5RTtFQUNFLG1DQUFvQixFQUFBOztBQUd0QjtFQUNJLHdDQUFlLEVBQUE7O0FBR25CO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHFCQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUdqQjtFQUNFLHdCQUFvQjtFQUNwQiwyQkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGNBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsWUFBWTtFQUNaLG9CQUFnQjtFQUNoQiwyQkFBUTtFQUNSLHdCQUFvQjtFQUNwQiwyQkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBYSxFQUFBOztBQUdmO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFDRixFQUFBOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDSSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUdsQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUduQjtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsV0FBVyxFQUFBOztBQUdiOztFQUVFLG9DQUFlLEVBQUE7O0FBR2pCO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL292ZXJ0aW1lc2VhcmNoL292ZXJ0aW1lc2VhcmNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGlvbi1tb2RhbC5zaG93LXBhZ2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDZlO1xuICAgICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gICAgfVxuICBcbiAgICAubW9kYWwtd3JhcHBlciB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgfVxuICB9XG4gIFxuICBpb24tY29udGVudHtcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xuICB9XG4gIFxuICBpb24tYmFjay1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgfVxuICBcbiAgaW9uLWNhcmR7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgfVxuICBcbiAgaW9uLWl0ZW0ge1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgICAtLWJvcmRlci13aWR0aDogMHB4IDBweCAxcHggMCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICBpb24tdGh1bWJuYWlsIHtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXg7XG4gIH1cbiAgXG4gIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgbWluLXdpZHRoOiA3MHB4O1xuICB9XG4gIFxuICBpb24tZmFiLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgfVxuICBcbiAgLmJhY2tDbGFzcyB7XG4gICAgLS1pbm5lci1wYWRkaW5nLXRvcDogNXB4O1xuICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBtYXJnaW46IDE2cHggMTZweDtcbiAgICBjb2xvcjojMmEyYTJhO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG4gIFxuICAuZmlsdGVyQ2xhc3Mge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtLWNvbG9yOiAjNkI2OTY5ICFpbXBvcnRhbnQ7XG4gICAgLS1pbm5lci1wYWRkaW5nLXRvcDogNXB4O1xuICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBtYXJnaW46IDE2cHggMTZweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbiAgXG4gIC5pY25GaWx0ZXJ7XG4gICAgY29sb3I6IzJhMmEyYTtcbiAgfVxuICBcbiAgLmRpdk9URnJvbSB7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIH1cbiAgXG4gIC5PVEZyb21Nb250aCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDIwcHhcbiAgfVxuICBcbiAgLk9URnJvbURhdGUge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogIzVDNUM1QztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICB9XG5cbiAgLmRpdk9URGVzYyB7XG4gICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgbWluLWhlaWdodDogNzBweDtcbiAgfVxuXG4gIC5kaXZEYXRlQ3JlYXRlZCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBjb2xvcjogIzgwODA4MDtcbiAgfVxuICBcbiAgLmRpdk9UVGltZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAuZGl2T1RIb3VycyB7XG4gICAgICBjb2xvcjogIzgwODA4MDtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuICBcbiAgLlJlcXVlc3RUeXBlIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgXG4gIC5zYy1pb24tYnV0dG9ucy1tZC1oIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICBcbiAgLmxpc3QtbWQtbGluZXMtZnVsbCAuaXRlbSxcbiAgLmxpc3QtbWQgLml0ZW0tbGluZXMtZnVsbCB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweCAwIDAgMCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAubGlzdC1tZCB7XG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmhlYWRlci1pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/overtimesearch/overtimesearch.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/overtimesearch/overtimesearch.page.ts ***!
  \*************************************************************/
/*! exports provided: OvertimesearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimesearchPage", function() { return OvertimesearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.component */ "./src/app/component/filter-menu/filter-menu.component.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var OvertimesearchPage = /** @class */ (function () {
    function OvertimesearchPage(modalController, httpApi, storage, router, loginService, actionSheetController, alertController, navCtrl, loadingCtrl) {
        this.modalController = modalController;
        this.httpApi = httpApi;
        this.storage = storage;
        this.router = router;
        this.loginService = loginService;
        this.actionSheetController = actionSheetController;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.loadingDone = false;
        this.noError = true;
    }
    OvertimesearchPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingDone = false;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.status = "";
            _this.startDate = "";
            _this.endDate = "";
            _this.getOTList();
        });
    };
    OvertimesearchPage.prototype.getOTList = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SESSION"]).then(function (val) {
            var postData = {
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["VERSION"],
                IsActive: true,
                UserID: _this.empId,
                EMPNO: _this.empId,
                STARTDATE: _this.startDate,
                ENDDATE: _this.endDate,
                STATUS: _this.status
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["SERVER_URL"]] + "/api/OTRequest/GetOTFiled", postData, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["POST_YES"]) {
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.noError = true;
                    _this.results = jsonData['Value'];
                    _this.loadingDone = true;
                })
                    .catch(function (error) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    OvertimesearchPage.prototype.getDateMonth = function (datename, procedure) {
        var date = new Date(datename);
        var CurrntMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrntMonth[date.getMonth()].toString().toUpperCase();
        else
            return CurrntMonth[date.getMonth()];
    };
    OvertimesearchPage.prototype.getDateDate = function (datename) {
        var date = new Date(datename);
        return date.getDate().toString();
    };
    OvertimesearchPage.prototype.getDateYear = function (datename) {
        var date = new Date(datename);
        return date.getFullYear().toString();
    };
    OvertimesearchPage.prototype.getLongDate = function (datename) {
        var month = this.getDateMonth(datename, 2);
        var date = this.getDateDate(datename);
        var year = this.getDateYear(datename);
        var fulldate = month + " " + date + ", " + year;
        return fulldate;
    };
    OvertimesearchPage.prototype.setOTDetails = function (item) {
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_OTDETAILS"], item);
        this.router.navigate(['/overtimedetails', 'overtimesearch']);
    };
    OvertimesearchPage.prototype.openModal = function () {
        if (!this.modalIsOpen)
            this.showModal();
    };
    OvertimesearchPage.prototype.showModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalIsOpen = true;
                        data = [];
                        data["LeaveFrom"] = this.startDate;
                        data["LeaveTo"] = this.endDate;
                        return [4 /*yield*/, this.modalController.create({
                                component: _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_2__["FilterMenuComponent"],
                                cssClass: 'modalFilterMenu',
                                animated: false,
                                backdropDismiss: false,
                                componentProps: {
                                    module: "OTSearch",
                                    data: data
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                if (detail.data['isDismissed'] == 0) {
                                    _this.status = detail.data['status'];
                                    _this.startDate = detail.data['leaveFrom'];
                                    _this.endDate = detail.data['leaveTo'];
                                    _this.getOTList();
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
    OvertimesearchPage.prototype.backPressed = function () {
        this.navCtrl.pop();
    };
    OvertimesearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overtimesearch',
            template: __webpack_require__(/*! ./overtimesearch.page.html */ "./src/app/pages/overtimesearch/overtimesearch.page.html"),
            styles: [__webpack_require__(/*! ./overtimesearch.page.scss */ "./src/app/pages/overtimesearch/overtimesearch.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"]])
    ], OvertimesearchPage);
    return OvertimesearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-overtimesearch-overtimesearch-module.js.map