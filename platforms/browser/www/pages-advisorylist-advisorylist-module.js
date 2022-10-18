(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-advisorylist-advisorylist-module"],{

/***/ "./src/app/pages/advisorylist/advisorylist.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/advisorylist/advisorylist.module.ts ***!
  \***********************************************************/
/*! exports provided: AdvisorylistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvisorylistPageModule", function() { return AdvisorylistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _advisorylist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advisorylist.page */ "./src/app/pages/advisorylist/advisorylist.page.ts");







var routes = [
    {
        path: '',
        component: _advisorylist_page__WEBPACK_IMPORTED_MODULE_6__["AdvisorylistPage"]
    }
];
var AdvisorylistPageModule = /** @class */ (function () {
    function AdvisorylistPageModule() {
    }
    AdvisorylistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_advisorylist_page__WEBPACK_IMPORTED_MODULE_6__["AdvisorylistPage"]]
        })
    ], AdvisorylistPageModule);
    return AdvisorylistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/advisorylist/advisorylist.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/advisorylist/advisorylist.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header #header>\n    <ion-buttons slot=\"start\">\n        <ion-back-button class=\"button-light\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n</ion-header>\n<ion-fab horizontal=\"end\">\n    <ion-fab-button (click)=\"openAdvisoryAdd()\">\n        <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n</ion-fab>\n<ion-card class=divCardHeader>\n    <ion-item lines=\"full\">\n        <ion-thumbnail class=\"imgType\" slot=\"start\">\n            <img src=\"{{ idSrc }}\" alt=\"\">\n        </ion-thumbnail>\n        <ion-label text-wrap>\n            <span class=\"leaveDesc\">{{ idDesc }}</span>\n        </ion-label>\n    </ion-item>\n</ion-card>\n<ion-content padding class=\"classContent\" hide-header header=\"header\">\n    <ion-card class=divCardSegment mode=\"md\">\n        <div *ngIf=\"noError; else error || advisoryTypeList.length <= 0; else error\">\n            <ion-segment class=\"sgmtAdvisoryType\" mode=\"md\" scrollable [(ngModel)]=\"advisoryType\">\n                <div *ngFor=\"let leave of advisoryTypeList\">\n                    <div *ngIf=\"leave == 'FOR APPROVAL'; else otherLeave\">\n                        <ion-segment-button mode=\"md\" value={{leave}} checked>\n                            {{leave}}\n                        </ion-segment-button>\n                    </div>\n                    <ng-template #otherLeave>\n                        <ion-segment-button mode=\"md\" value={{leave}}>\n                            {{leave}}\n                        </ion-segment-button>\n                    </ng-template>\n                </div>\n            </ion-segment>\n            <div [ngSwitch]=\"advisoryType\">\n                <div *ngIf=\"loadingDone; else shimmer\">\n                    <div *ngFor=\"let advisoryList of advisoryTypeList\">\n                        <ion-list mode=\"md\" *ngSwitchCase=\"advisoryList\">\n                            <div *ngFor=\"let item of (results)\" [routerLink]=\" ['/', 'advisorydetails', item.ID, 'useradvisory', item.STATUS,'','advisorylist']\">\n                                <div *ngIf=\"id == item.REQUESTTYPECODE && advisoryList == item.STATUS\">\n                                    <ion-item button lines=\"full\" detail=\"false\">\n                                        <ion-avatar class=\"divLeaveFrom\">\n                                            <div class=\"LeaveFromMonth\">\n                                                {{getDateMonth(item.REQUESTDATE,1)}}\n                                            </div>\n                                            <div class=\"LeaveFromDate\">\n                                                {{getDateDate(item.REQUESTDATE)}}\n                                            </div>\n                                        </ion-avatar>\n                                        <ion-label text-wrap>\n                                            <div class=\"divLeaveDesc\">\n                                                <ion-item button class=\"buttonMoreOptions\" lines=\"none\" detail=\"false\" (click)=\"$event.stopPropagation();MoreOptions($event, item);\" *ngIf=\"advisoryList == 'FOR APPROVAL' || advisoryList == 'APPROVED' || advisoryList == 'PLANNED'\">\n                                                    &#8942;</ion-item>\n                                                <ion-item button class=\"buttonMoreOptionsDetails\" lines=\"none\" detail=\"true\" *ngIf=\"advisoryList != 'FOR APPROVAL' && advisoryList != 'APPROVED' && advisoryList != 'PLANNED'\">\n                                                </ion-item>\n                                                <span class=\"StatusDesc\">{{ item.REASONDESC }}</span>\n                                                <br>\n                                                <span class=\"RequestType\">{{ item.REMARKS }}</span>\n                                                <br>\n                                                <span class=\"LeaveDay\">{{ item.REQUESTTIME }} </span>\n                                            </div>\n                                        </ion-label>\n                                    </ion-item>\n                                </div>\n                            </div>\n                        </ion-list>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ion-card>\n</ion-content>\n<ng-template #shimmer>\n    <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n    <div id=\"lines7\" class=\"shine\"></div>\n    <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0,1,2]\">\n        <ion-avatar class=\"divLeaveFrom\">\n            <div class=\"LeaveFromMonth\"></div>\n            <div class=\"LeaveFromDate\"></div>\n        </ion-avatar>\n        <ion-label>\n            <div id=\"lines3\" class=\"shine\"></div><br>\n            <div id=\"lines3\" class=\"shine\"></div><br>\n            <div id=\"lines4\" class=\"shine\"></div>\n        </ion-label>\n    </ion-item>\n</ng-template>\n<ng-template #error>\n    <ion-item lines=\"none\">\n        <div class=\"errorbox\">\n            <ion-avatar class=\"center\">\n                <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n            <span class=\"errorMessage\">{{errorMessage}}</span>\n            <span class=\"errorMessage\">\n        <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n        <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n          <ion-icon color=\"light\" name=\"home\"></ion-icon>\n        </ion-button>\n      </span>\n        </div>\n    </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/advisorylist/advisorylist.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/advisorylist/advisorylist.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('banner_large_dark_green.png') !important;\n  background-size: cover;\n  background-position: center;\n  height: 100px;\n  z-index: -1; }\n\nion-back-button {\n  color: white;\n  padding-top: 30px;\n  margin-left: -10px; }\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n  margin-top: 70px; }\n\nion-item {\n  --inner-padding-end: 0px !important; }\n\nion-thumbnail {\n  height: 90px;\n  width: 90px;\n  margin: 10px;\n  margin-left: 15x; }\n\nion-col {\n  padding: 0px; }\n\n.sc-ion-buttons-md-h {\n  float: left; }\n\n.divCardHeader {\n  margin-top: 0px;\n  margin-left: -15px;\n  margin-right: -15px;\n  margin-bottom: 1px; }\n\n.imgType {\n  width: 60px;\n  height: 60px;\n  margin-left: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.leaveDesc {\n  color: #2a2a2a;\n  font-size: 18px;\n  margin-left: 10px;\n  margin-right: 70px;\n  display: block;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  font-family: \"RobotoMedium\"; }\n\n.leaveCreditsInfo {\n  font-size: 11px;\n  margin-left: 10px;\n  margin-top: -1px;\n  display: block;\n  color: #484848; }\n\n.leaveCreditsInfoNameFirstRow {\n  max-width: 55px; }\n\n.leaveCreditsInfoNameSecondRow {\n  max-width: 75px; }\n\n.sgmtAdvisoryType {\n  min-width: 70px;\n  background: white;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: #cecccc;\n  font-family: \"RobotoRegular\"; }\n\n.classContent {\n  --background: #F5F5F5;\n  --padding-top: 10px !important; }\n\n.divCardSegment {\n  margin-left: -5px;\n  margin-right: -5px;\n  margin-top: 0px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.divLeaveFrom {\n  margin-top: -30px; }\n\n.LeaveFromMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px; }\n\n.LeaveFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px; }\n\n.divLeaveDesc {\n  margin-left: 10px; }\n\n.divStat {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: -8px; }\n\n.StatusDesc {\n  color: #2a2a2a;\n  font-size: 14px;\n  padding-left: 30px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.DateFile {\n  font-size: 12px;\n  float: right;\n  color: #808080;\n  padding-right: 5px; }\n\n.RequestType {\n  font-size: 11px;\n  padding-left: 30px;\n  display: inline-block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #808080;\n  max-width: 85%; }\n\n.buttonMoreOptions {\n  font-size: 30px;\n  float: right;\n  color: #808080;\n  padding: 5px 5px 0 0;\n  margin-top: 10px; }\n\n.buttonMoreOptionsDetails {\n  font-size: 30px;\n  float: right;\n  padding-right: 5px;\n  margin-top: 15px; }\n\n.LeaveDay {\n  font-size: 11px;\n  margin-left: 30px;\n  color: #808080; }\n\n.list-md {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important; }\n\n.header-items {\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMtZ2FiYy9Eb2N1bWVudHMvR0VBUi9HRUFSX2lPUy9zcmMvYXBwL3BhZ2VzL2Fkdmlzb3J5bGlzdC9hZHZpc29yeWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0RBQW1GO0VBQ25GLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQ0osRUFBQTs7QUFFQTtFQUNJLHFCQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLG1DQUFvQixFQUFBOztBQUd4QjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxXQUFXLEVBQUE7O0FBSWY7RUFDSSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1Qiw0QkFBNEIsRUFBQTs7QUFJaEM7RUFDSSxxQkFBYTtFQUNiLDhCQUFjLEVBQUE7O0FBR2xCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsNEVBQTRFLEVBQUE7O0FBR2hGO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFDSixFQUFBOztBQUVBO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLDJCQUEyQjtFQUMzQiw4QkFBOEIsRUFBQTs7QUFHbEM7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZHZpc29yeWxpc3QvYWR2aXNvcnlsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9iYW5uZXJfbGFyZ2VfZGFya19ncmVlbi5wbmcnKSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgei1pbmRleDogLTE7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweFxufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aHVtYm5haWwge1xuICAgIGhlaWdodDogOTBweDtcbiAgICB3aWR0aDogOTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1eDtcbn1cblxuaW9uLWNvbCB7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtaCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi8vQ2FyZCBIZWFkZXJcbi5kaXZDYXJkSGVhZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG4uaW1nVHlwZSB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmxlYXZlRGVzYyB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNzBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzQ4NDg0ODtcbn1cblxuLmxlYXZlQ3JlZGl0c0luZm9OYW1lRmlyc3RSb3cge1xuICAgIG1heC13aWR0aDogNTVweDtcbn1cblxuLmxlYXZlQ3JlZGl0c0luZm9OYW1lU2Vjb25kUm93IHtcbiAgICBtYXgtd2lkdGg6IDc1cHg7XG59XG5cbi5zZ210QWR2aXNvcnlUeXBlIHtcbiAgICBtaW4td2lkdGg6IDcwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNjZWNjY2M7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4vL0l0ZW0gRGV0YWlsc1xuLmNsYXNzQ29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICAgIC0tcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRpdkNhcmRTZWdtZW50IHtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC01cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5kaXZMZWF2ZUZyb20ge1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4uTGVhdmVGcm9tTW9udGgge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiAyMHB4XG59XG5cbi5MZWF2ZUZyb21EYXRlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICM1QzVDNUM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNDVweDtcbn1cblxuLmRpdkxlYXZlRGVzYyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5kaXZTdGF0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAtOHB4O1xufVxuXG4uU3RhdHVzRGVzYyB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5EYXRlRmlsZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5SZXF1ZXN0VHlwZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIG1heC13aWR0aDogODUlO1xufVxuXG4uYnV0dG9uTW9yZU9wdGlvbnMge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgcGFkZGluZzogNXB4IDVweCAwIDA7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJ1dHRvbk1vcmVPcHRpb25zRGV0YWlscyB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLkxlYXZlRGF5IHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgY29sb3I6ICM4MDgwODA7XG59XG5cbi5saXN0LW1kIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWl0ZW1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/advisorylist/advisorylist.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/advisorylist/advisorylist.page.ts ***!
  \*********************************************************/
/*! exports provided: AdvisorylistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvisorylistPage", function() { return AdvisorylistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var AdvisorylistPage = /** @class */ (function () {
    function AdvisorylistPage(httpApi, activatedRoute, actionSheetController, storage, loginService, alertController, navCtrl, loadingCtrl, router) {
        this.httpApi = httpApi;
        this.activatedRoute = activatedRoute;
        this.actionSheetController = actionSheetController;
        this.storage = storage;
        this.loginService = loginService;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.loadingDone = false;
        this.noError = true;
        this.advisoryTypeList = [];
        this.advisoryArrange = [];
        this.advisoryType = "FIRST";
        this.activityResult = false;
    }
    AdvisorylistPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingDone = false;
        this.noError = true;
        this.advisoryTypeList = [];
        this.advisoryArrange = [];
        this.advisoryType = "FIRST";
        this.id = this.activatedRoute.snapshot.paramMap.get('type');
        this.setImage(this.id);
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.getAdvisory();
        });
        this.activityResult = true;
    };
    AdvisorylistPage.prototype.getAdvisory = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_RECORD_ID"]],
                USER: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_USER_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["VERSION"],
                EMPNO: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_USER_ID"]]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"]] + "/api/HRISAttendanceAdvisory/GetAttendanceAdvisory", request, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_YES"]) {
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Value'] == null || jsonData['Value'] == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.noError = true;
                    _this.results = jsonData['Value'];
                    console.log(_this.results);
                    _this.showList();
                    _this.loadingDone = true;
                })
                    .catch(function (error) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    AdvisorylistPage.prototype.showList = function () {
        var _this = this;
        this.results.forEach(function (item) {
            if (_this.id == item["REQUESTTYPECODE"]) {
                if (_this.advisoryArrange.find(function (e) { return e === item["STATUS"]; })) {
                }
                else
                    _this.advisoryArrange.push(item["STATUS"]);
            }
        });
        this.advisoryTypeList = [];
        if (this.advisoryArrange.includes("FOR APPROVAL")) {
            this.advisoryTypeList.push("FOR APPROVAL");
            this.advisoryType = "FOR APPROVAL";
        }
        ;
        if (this.advisoryArrange.includes("PLANNED")) {
            this.advisoryTypeList.push("PLANNED");
            if (this.advisoryType == "FIRST")
                this.advisoryType = "PLANNED";
        }
        ;
        if (this.advisoryArrange.includes("APPROVED")) {
            this.advisoryTypeList.push("APPROVED");
            if (this.advisoryType == "FIRST")
                this.advisoryType = "APPROVED";
        }
        ;
        if (this.advisoryArrange.includes("POSTED")) {
            this.advisoryTypeList.push("POSTED");
            if (this.advisoryType == "FIRST")
                this.advisoryType = "POSTED";
        }
        ;
        this.advisoryArrange.forEach(function (item) {
            for (var ctr = 0; ctr < _this.advisoryArrange.length; ctr++) {
                if (!_this.advisoryTypeList.includes(item)) {
                    _this.advisoryTypeList.push(item);
                    if (_this.advisoryType == "FIRST")
                        _this.advisoryType = item;
                }
            }
        });
        if (this.advisoryTypeList.length <= 0) {
            this.noError = false;
            this.errorMessage = "EMPTY";
            return;
        }
    };
    AdvisorylistPage.prototype.setImage = function (type) {
        switch (type) {
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ATD_TYPE_CODE_AUT"]:
                this.idDesc = "Authorized Under Time";
                this.idSrc = "assets/icon/ic_au.png";
                break;
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ATD_TYPE_CODE_AL"]:
                this.idDesc = "Authorized Late";
                this.idSrc = "assets/icon/ic_al.png";
                break;
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ATD_TYPE_CODE_OS"]:
                this.idDesc = "Offset";
                this.idSrc = "assets/icon/ic_os.png";
                break;
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ATD_TYPE_CODE_CTO"]:
                this.idDesc = "CTO";
                this.idSrc = "assets/icon/ic_cto.png";
                break;
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ATD_TYPE_CODE_OB"]:
                this.idDesc = "Official Business";
                this.idSrc = "assets/icon/ic_ob.png";
                break;
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ATD_TYPE_CODE_AS"]:
                this.idDesc = "Authorized Shift";
                this.idSrc = "assets/icon/ic_as.png";
                break;
        }
    };
    AdvisorylistPage.prototype.getDateMonth = function (datename, procedure) {
        var date = new Date(datename);
        var CurrentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrentMonth[date.getMonth()].toString().toUpperCase();
        else
            return CurrentMonth[date.getMonth()];
    };
    AdvisorylistPage.prototype.getDateDate = function (datename) {
        var date = new Date(datename);
        return date.getDate().toString();
    };
    AdvisorylistPage.prototype.getDateYear = function (datename) {
        var date = new Date(datename);
        return date.getFullYear().toString();
    };
    AdvisorylistPage.prototype.getLongDate = function (datename) {
        var month = this.getDateMonth(datename, 2);
        var date = this.getDateDate(datename);
        var year = this.getDateYear(datename);
        var fulldate = month + " " + date + ", " + year;
        return fulldate;
    };
    AdvisorylistPage.prototype.MoreOptions = function (event, item) {
        event.stopPropagation();
        switch (item['STATUS']) {
            case "FOR APPROVAL": {
                this.showForApprovalActions(item);
                break;
            }
            case "APPROVED": {
                this.showApprovedActions(item);
                break;
            }
        }
    };
    AdvisorylistPage.prototype.showForApprovalActions = function (advisory) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Select Action',
                            buttons: [{
                                    text: 'Edit Advisory',
                                    icon: 'create',
                                    handler: function () {
                                        _this.router.navigate(['/advisoryadd',
                                            advisory['ID'] == null ? '' : advisory['ID'],
                                            advisory['REQUESTTYPECODE'] == null ? '' : advisory['REQUESTTYPECODE'],
                                            advisory['REQUESTDATE'] == null ? '' : advisory['REQUESTDATE'],
                                            advisory['REQTIME'] == null ? '' : advisory['REQTIME'],
                                            advisory['HRS'] == null ? '' : advisory['HRS'],
                                            advisory['DAYS'] == null ? '' : advisory['DAYS'],
                                            advisory['REASONCODE'] == null ? '' : advisory['REASONCODE'],
                                            advisory['REMARKS'] == null ? '' : advisory['REMARKS'],
                                            advisory['STARTTIME'] == null ? '' : advisory['STARTTIME'],
                                            advisory['DATEOFDUTY'] == null ? '' : advisory['DATEOFDUTY'],
                                            '',
                                            ''
                                        ]);
                                    }
                                }, {
                                    text: 'Delete Advisory',
                                    icon: 'trash',
                                    handler: function () {
                                        _this.showDeleteDialog(advisory);
                                    }
                                }, {
                                    text: 'Close',
                                    icon: 'close',
                                    role: 'cancel'
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvisorylistPage.prototype.showApprovedActions = function (advisory) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Select Action',
                            buttons: [{
                                    text: 'Cancel Advisory',
                                    icon: 'close-circle-outline',
                                    handler: function () {
                                        _this.showCancelDialog(advisory);
                                    }
                                }, {
                                    text: 'Close',
                                    icon: 'close',
                                    role: 'cancel'
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdvisorylistPage.prototype.showDeleteDialog = function (advisory) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Delete Attendance Advisory',
                            message: 'Are you sure you want to delete?',
                            buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary'
                                }, {
                                    text: 'Delete',
                                    handler: function () {
                                        _this.loadingCtrl.create({
                                            message: "Loading..."
                                        }).then(function (overlay) {
                                            _this.loading = overlay;
                                            _this.loading.present();
                                            _this.deleteAdvisory(advisory);
                                        });
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
    AdvisorylistPage.prototype.showCancelDialog = function (advisory) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cancel Attendance Advisory',
                            inputs: [
                                {
                                    name: 'remarks',
                                    type: 'text',
                                    placeholder: 'Cancel Remarks'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }, {
                                    text: 'Ok',
                                    handler: function (data) {
                                        _this.cancelAdvisory(advisory, data['remarks']);
                                    }
                                }
                            ]
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
    AdvisorylistPage.prototype.cancelAdvisory = function (advisory, remarks) {
        var _this = this;
        if (remarks == '' || remarks == null || remarks == undefined) {
            alert("Remarks is empty!");
            return;
        }
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SESSION"]).then(function (val) {
                var postData = {
                    ID: String(advisory['ID']),
                    CANCELREMARKS: remarks,
                    USER: _this.empId,
                    RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_RECORD_ID"]],
                    SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SECURITY_STAMP"]],
                    Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_TOKEN"]],
                    AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["APP_PLATFORM"],
                    AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["VERSION"]
                };
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"]] + "/api/HRISAttendanceAdvisory/CancelAttendanceAdvisory", postData, {})
                        .then(function (data) {
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["CONNECTION_ERROR"], "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["CONNECTION_ERROR"], "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_YES"]) {
                            _this.loading.dismiss();
                            switch (jsonData['Message']) {
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_ERROR"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_MESSAGE"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_EXPIRED"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_REQUIRED"]);
                                    return;
                            }
                            _this.showDialog("ERROR!", jsonData['Message'], "Okay");
                            return;
                        }
                        _this.showDialog("DONE!", "You have cancelled this request", "Okay");
                        _this.loading.dismiss();
                    })
                        .catch(function (error) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["CONNECTION_ERROR"], "Okay");
                        _this.loading.dismiss();
                    });
                });
            });
        });
    };
    AdvisorylistPage.prototype.deleteAdvisory = function (advisory) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["VERSION"],
                ID: String(advisory['ID']),
                EMPNO: Number(_this.empId),
                USER: _this.empId
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"]] + "/api/HRISAttendanceAdvisory/DeleteAttendanceAdvisory", request, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["CONNECTION_ERROR"], "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_SUCCESS"]) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["CONNECTION_ERROR"], "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_YES"]) {
                        _this.loading.dismiss();
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.showDialog("ERROR!", jsonData['Message'], "Okay");
                        return;
                    }
                    _this.showDialog("DONE!", "You have deleted this request", "Okay");
                    _this.loading.dismiss();
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["CONNECTION_ERROR"], "Okay");
                    _this.loading.dismiss();
                });
            });
        });
    };
    AdvisorylistPage.prototype.showDialog = function (title, message, buttonText) {
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
                                        _this.ngOnInit();
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
    AdvisorylistPage.prototype.openAdvisoryAdd = function () {
        this.router.navigate(['/advisoryadd',
            '',
            this.id,
            '',
            '',
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
    AdvisorylistPage.prototype.ionViewWillEnter = function () {
        if (this.activityResult) {
            this.ngOnInit();
        }
    };
    AdvisorylistPage.prototype.goBack = function () { this.navCtrl.back(); };
    AdvisorylistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-advisorylist',
            template: __webpack_require__(/*! ./advisorylist.page.html */ "./src/app/pages/advisorylist/advisorylist.page.html"),
            styles: [__webpack_require__(/*! ./advisorylist.page.scss */ "./src/app/pages/advisorylist/advisorylist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdvisorylistPage);
    return AdvisorylistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-advisorylist-advisorylist-module.js.map