(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["healthtrack-healthtrack-module"],{

/***/ "./src/app/pages/healthtrack/healthtrack.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/healthtrack/healthtrack.module.ts ***!
  \*********************************************************/
/*! exports provided: HealthtrackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthtrackPageModule", function() { return HealthtrackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _healthtrack_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./healthtrack.page */ "./src/app/pages/healthtrack/healthtrack.page.ts");







var routes = [
    {
        path: '',
        component: _healthtrack_page__WEBPACK_IMPORTED_MODULE_6__["HealthtrackPage"]
    }
];
var HealthtrackPageModule = /** @class */ (function () {
    function HealthtrackPageModule() {
    }
    HealthtrackPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_healthtrack_page__WEBPACK_IMPORTED_MODULE_6__["HealthtrackPage"]]
        })
    ], HealthtrackPageModule);
    return HealthtrackPageModule;
}());



/***/ }),

/***/ "./src/app/pages/healthtrack/healthtrack.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/healthtrack/healthtrack.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-button icon-only menuToggle fill=\"clear\" (click)=\"toggleMenu()\">\n            <ion-icon color=\"dark\" name=\"menu\"></ion-icon>\n          </ion-button>\n        </ion-col>\n\n        <ion-col size=\"8\">\n          <img src=\"/assets/img/banner_heathtrack.png\" alt=\"\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div *ngIf=\"loadingDone; else shimmerAnnouncement\">\n    <div *ngIf=\"firstVaccine;\">\n      <ion-card>\n        <img src=\"/assets/img/bg_vaccine_gold.png\">\n\n        <div class=\"card-title_1\">I GOT MY</div>\n        <div class=\"card-title_2\">FIRST DOSE</div>\n        <div class=\"card-subtitle\"> <b>{{vaccineDate}}</b></div>\n\n        <ion-button class=\"card-button\" expand=\"block\" shape=\"round\" color=\"primary\"\n          [routerLink]=\"['/','vaccinehistory']\"> Details</ion-button>\n\n        <img class=\"card-vaccinated\" src=\"/assets/img/icon_vaccinated_image.png\">\n\n      </ion-card>\n    </div>\n\n    <div *ngIf=\"fullVaccine;\">\n      <ion-card>\n        <img src=\"/assets/img/bg_vaccine_banner.png\">\n\n        <div class=\"card-title_1\">I'M FULLY</div>\n        <div class=\"card-title_2\">VACCINATED</div>\n        <div class=\"card-subtitle\"> <b>{{vaccineDate}}</b></div>\n\n        <ion-button class=\"card-button\" expand=\"block\" shape=\"round\" color=\"primary\"\n          [routerLink]=\"['/','vaccinehistory']\"> Details</ion-button>\n\n        <img class=\"card-vaccinated\" src=\"/assets/img/icon_vaccinated_image.png\">\n\n      </ion-card>\n    </div>\n\n\n    <div *ngIf=\"!vaccinated\">\n      <ion-card>\n        <img src=\"/assets/img/bg_banner_no_vaccine.png\">\n\n        <div class=\"card-title_1\">{{ vaccineTitle }}</div>\n        <div class=\"card-title_2\">{{ vaccineBody }}</div>\n\n        <img class=\"card-vaccinated\" src=\"/assets/img/image_no_vaccine.png\">\n\n      </ion-card>\n    </div>\n  </div>\n\n    <div *ngIf=\"antigenNegative;\">\n      <ion-card>\n        <img src=\"/assets/img/bg_antigen_badge.png\">\n\n        <ion-avatar class=\"divDate\">\n          <div class=\"DateMonth\">\n            {{getDateMonth(testDate,1)}}\n\n          </div>\n          <div class=\"DateDate\">\n            {{getDateDate(testDate)}}\n\n          </div>\n        </ion-avatar>\n\n        <div class=\"card-antigen-title\">ANTIGEN TEST</div>\n        <div class=\"card-antigen-result\"> <b>NEGATIVE</b></div>\n        <div class=\"card-antigen-next\">Next Test: {{ nextAntigenTest }}</div>\n\n      </ion-card>\n    </div>\n\n    <div *ngIf=\"antigenPositive;\">\n      <ion-card>\n        <img src=\"/assets/img/bg_antigen_positive.png\">\n        <img class=\"card-antigen-warning\" src=\"/assets/img/image_need_test.png\">\n\n        <div class=\"card-antigen-title\">ANTIGEN TEST</div>\n        <div class=\"card-antigen-result\"> <b>POSITIVE</b></div>\n        <div class=\"card-antigen-next\">Last Test: {{ latestAntigenTest }}</div>\n\n      </ion-card>\n    </div>\n\n    <div *ngIf=\"antigenNeedTest;\">\n      <ion-card>\n        <img src=\"/assets/img/bg_antigen_need_test.png\">\n        <img class=\"card-antigen-warning\" src=\"/assets/img/image_need_test.png\">\n\n        <div class=\"card-antigen-title\">{{ needTestTitle }}</div>\n        <div class=\"card-antigen-result\"> <b>{{ needTestBody }}</b></div>\n        <div class=\"card-antigen-next\">Last Test: {{ latestAntigenTest }}</div>\n\n      </ion-card>\n    </div>\n\n\n  <ion-grid>\n    <ion-row class=\"top-row\">\n      <ion-col class=\"top-col\" [routerLink]=\"['/','antigentesthistory']\">\n        <img src=\"/assets/img/icon_test_history.png\">\n\n        <div class=\"ion-text-center label-user\">\n          Antigen Test History\n        </div>\n\n      </ion-col>\n      <ion-col class=\"top-col\" [routerLink]=\"['/','vaccinehistory']\">\n        <img src=\"/assets/img/icon_vaccine_history.png\">\n\n        <div class=\"ion-text-center label-user\">Vaccination History</div>\n      </ion-col>\n      <!-- <ion-col class=\"top-col\" [routerLink]=\"['/','antigentestqa']\">\n\n        <img src=\"/assets/img/ic_user_test_questionairre.png\">\n\n        <div class=\"ion-text-center label-user-qa\">Antigen Test Questionnaire</div>\n      </ion-col> -->\n      <ion-col class=\"top-col\">\n        <div></div>\n      </ion-col>\n\n      <ion-col class=\"top-col\">\n        <div></div>\n      </ion-col>\n\n    </ion-row>\n    <!-- \n    <ion-row class=\"top-row\">\n      <ion-col class=\"top-col divider-label\" size=\"2\">\n        <img src=\"/assets/img/icon_admin.png\">\n  \n      </ion-col>\n      <ion-col size=\"10\"> \n        <div class=\"label-admin-label\">\n          Admin\n        </div>\n      </ion-col>\n  \n    </ion-row> -->\n  </ion-grid>\n\n</ion-content>\n\n<ng-template #shimmerAnnouncement>\n  <div class=\"divEvent shine\">\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/healthtrack/healthtrack.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/healthtrack/healthtrack.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  position: unset; }\n\nion-toolbar {\n  --border-width: 0px !important;\n  margin-top: 30px; }\n\nion-card {\n  position: relative;\n  text-align: center; }\n\n.divEvent {\n  height: 150px;\n  margin: 0px 20px;\n  border-radius: 10px;\n  z-index: 1;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19); }\n\n.card-vaccinated {\n  position: absolute;\n  width: 35%;\n  top: 17%;\n  margin-right: 5%;\n  right: 0%; }\n\n.card-title_1 {\n  position: absolute;\n  top: 18%;\n  font-size: 1.8em;\n  font-weight: bold;\n  color: #F79321;\n  margin-left: 5%;\n  text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF; }\n\n.vaccine-shimmer {\n  position: absolute; }\n\n.card-title_2 {\n  position: absolute;\n  top: 35%;\n  font-size: 1.8em;\n  font-weight: bold;\n  color: #F79321;\n  margin-left: 5%;\n  text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF; }\n\n.card-subtitle {\n  font-size: 1.3em;\n  position: absolute;\n  top: 52%;\n  color: #fff;\n  margin-left: 5%; }\n\n.card-button {\n  font-size: 1.0em;\n  position: absolute;\n  top: 64%;\n  width: 35%;\n  margin-left: 5%; }\n\n.divDate {\n  margin-left: 5%;\n  position: absolute;\n  top: 20%; }\n\n.DateMonth {\n  font-size: 19px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 83px;\n  height: 27px; }\n\n.DateDate {\n  font-size: 43px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 83px;\n  height: 55px; }\n\n.card-antigen-title {\n  position: absolute;\n  top: 18%;\n  font-size: 1.8em;\n  font-weight: bold;\n  color: #F79321;\n  margin-left: 39%;\n  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff; }\n\n.card-antigen-result {\n  font-size: 1.8em;\n  position: absolute;\n  top: 40%;\n  color: #fff;\n  margin-left: 38%; }\n\n.card-antigen-next {\n  font-size: 1.1em;\n  position: absolute;\n  top: 65%;\n  color: #fff;\n  margin-left: 38%; }\n\n.card-antigen-warning {\n  position: absolute;\n  width: 26%;\n  top: 20%;\n  margin-left: 5%;\n  left: 0%; }\n\n.top-row {\n  margin-left: 3%;\n  margin-right: 3%; }\n\n.top-col {\n  padding: 2%; }\n\n.icon-user {\n  margin-left: 5%;\n  margin-right: 5%; }\n\n.label-user {\n  font-size: 13px;\n  color: #D9A921;\n  font-weight: bold; }\n\n.label-user-qa {\n  font-size: 12px;\n  color: #D9A921;\n  font-weight: bold; }\n\n.divider-label {\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMtZ2FiYy9Eb2N1bWVudHMvR0VBUi9HRUFSX2lPUy9zcmMvYXBwL3BhZ2VzL2hlYWx0aHRyYWNrL2hlYWx0aHRyYWNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSw4QkFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsNEVBQTRFLEVBQUE7O0FBSWhGO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLFNBQVMsRUFBQTs7QUFHYjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUVmLCtFQUljLEVBQUE7O0FBR2xCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBRWYsK0VBSWMsRUFBQTs7QUFHbEI7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUluQjtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRLEVBQUE7O0FBR1o7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsK0VBQStFLEVBQUE7O0FBR25GO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUlwQjtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFJcEI7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixlQUFlO0VBQ2YsUUFBUSxFQUFBOztBQUdaO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGVhbHRodHJhY2svaGVhbHRodHJhY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgcG9zaXRpb246IHVuc2V0O1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmRpdkV2ZW50IHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIG1hcmdpbjogMHB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cblxuLmNhcmQtdmFjY2luYXRlZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNSU7XG4gICAgdG9wOiAxNyU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICByaWdodDogMCU7XG59XG5cbi5jYXJkLXRpdGxlXzEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE4JTtcbiAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjRjc5MzIxO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcblxuICAgIHRleHQtc2hhZG93OlxuICAgIC0xcHggLTFweCAwICNGRkYsXG4gICAgMXB4IC0xcHggMCAjRkZGLFxuICAgIC0xcHggMXB4IDAgI0ZGRixcbiAgICAxcHggMXB4IDAgI0ZGRjsgIFxufVxuXG4udmFjY2luZS1zaGltbWVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cblxuLmNhcmQtdGl0bGVfMiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzUlO1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNGNzkzMjE7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuXG4gICAgdGV4dC1zaGFkb3c6XG4gICAgLTFweCAtMXB4IDAgI0ZGRixcbiAgICAxcHggLTFweCAwICNGRkYsXG4gICAgLTFweCAxcHggMCAjRkZGLFxuICAgIDFweCAxcHggMCAjRkZGOyAgXG59XG5cbi5jYXJkLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUyJTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG5cbn1cblxuLmNhcmQtYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEuMGVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDY0JTtcbiAgICB3aWR0aDogMzUlO1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmRpdkRhdGUge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMCU7XG59XG5cbi5EYXRlTW9udGgge1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gICAgd2lkdGg6IDgzcHg7XG4gICAgaGVpZ2h0OiAyN3B4O1xufVxuXG4uRGF0ZURhdGUge1xuICAgIGZvbnQtc2l6ZTogNDNweDtcbiAgICBjb2xvcjogIzVDNUM1QztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gICAgd2lkdGg6IDgzcHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xufVxuXG4uY2FyZC1hbnRpZ2VuLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxOCU7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI0Y3OTMyMTtcbiAgICBtYXJnaW4tbGVmdDogMzklO1xuICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjZmZmLCAxcHggLTFweCAwICNmZmYsIC0xcHggMXB4IDAgI2ZmZiwgMXB4IDFweCAwICNmZmY7IFxufVxuXG4uY2FyZC1hbnRpZ2VuLXJlc3VsdCB7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MCU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IDM4JTtcblxufVxuXG4uY2FyZC1hbnRpZ2VuLW5leHQge1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjUlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiAzOCU7XG5cbn1cblxuLmNhcmQtYW50aWdlbi13YXJuaW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI2JTtcbiAgICB0b3A6IDIwJTtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbGVmdDogMCU7XG59XG5cbi50b3Atcm93IHtcbiAgICBtYXJnaW4tbGVmdDogMyU7XG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcbn1cblxuLnRvcC1jb2wge1xuICAgIHBhZGRpbmc6IDIlO1xufVxuXG4uaWNvbi11c2VyIHtcbiAgICBtYXJnaW4tbGVmdDogNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cbi5sYWJlbC11c2VyIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICNEOUE5MjE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sYWJlbC11c2VyLXFhIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNEOUE5MjE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kaXZpZGVyLWxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/healthtrack/healthtrack.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/healthtrack/healthtrack.page.ts ***!
  \*******************************************************/
/*! exports provided: HealthtrackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthtrackPage", function() { return HealthtrackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









var HealthtrackPage = /** @class */ (function () {
    function HealthtrackPage(storage, router, menuCtrl, httpApi, modalController, navCtrl, loginService, alertController, loadingCtrl, plt) {
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.httpApi = httpApi;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.plt = plt;
        this.loadingDone = false;
        this.noError = true;
        this.needTestTitle = "ANTIGEN TEST";
        this.needTestBody = "NEEDS TESTING";
        this.vaccineTitle = "NOT YET";
        this.vaccineBody = "VACCINATED";
        this.vaccineComplete = false;
        this.antigenComplete = false;
    }
    HealthtrackPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit');
        this.loadingDone = false;
        this.antigenLoadingDone = false;
        this.antigenNeedTest = false;
        this.antigenNegative = false;
        this.antigenPositive = false;
        this.plt.ready().then(function () {
            console.log('plt');
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_EMPID"]).then(function (val) {
                _this.empId = val;
                _this.getVaccineData();
                // this.getAntigenTestData();
            });
        });
    };
    HealthtrackPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    HealthtrackPage.prototype.getVaccineData = function () {
        var _this = this;
        console.log('getVaccineData');
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SESSION"]).then(function (val) {
            var request = {
                UserID: _this.empId,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_TOKEN"]],
                AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["VERSION"],
                UserType: "GABC",
                ProcessType: "employee-health-summary",
                EmployeeID: _this.empId,
            };
            console.log(request);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"]] + "/api/health/summary", request, {})
                    .then(function (data) {
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        _this.loadingDone = true;
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_YES"]) {
                        _this.vaccinated = false;
                        _this.loadingDone = true;
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                            case "No Available Data.":
                                _this.vaccinated = false;
                                return;
                            default:
                                _this.vaccineTitle = "ERROR";
                                _this.vaccineBody = "OCCURRED";
                                _this.noError = false;
                                _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                                return;
                        }
                    }
                    _this.vaccinated = true;
                    _this.firstVaccine = false;
                    _this.fullVaccine = true;
                    var vaccineStatus = jsonData['Value']['EmployeeVaccine'][0]['ResultStatus'];
                    switch (vaccineStatus) {
                        case "FV":
                            _this.vaccinated = true;
                            _this.firstVaccine = false;
                            _this.fullVaccine = true;
                            break;
                        case "1":
                            _this.vaccinated = true;
                            _this.firstVaccine = true;
                            _this.fullVaccine = false;
                            break;
                        case "2":
                            _this.vaccinated = true;
                            _this.firstVaccine = false;
                            _this.fullVaccine = true;
                            break;
                        case "E":
                            _this.vaccinated = false;
                            _this.firstVaccine = false;
                            _this.fullVaccine = false;
                            break;
                        default:
                            _this.vaccinated = false;
                            _this.firstVaccine = false;
                            _this.fullVaccine = false;
                            _this.vaccineTitle = "ERROR";
                            _this.vaccineBody = "OCCURRED";
                            break;
                    }
                    var vaccineDate = jsonData['Value']['EmployeeVaccine'][0]['LastVaccineDate'];
                    if (vaccineDate) {
                        _this.vaccineDate = moment__WEBPACK_IMPORTED_MODULE_8__(vaccineDate, "MM/DD/YYYY").format("MMM DD.YYYY");
                    }
                    else {
                        _this.vaccinated = false;
                        _this.firstVaccine = false;
                        _this.fullVaccine = false;
                        _this.vaccineTitle = "ERROR";
                        _this.vaccineBody = "OCCURRED";
                    }
                    _this.loadingDone = true;
                    _this.noError = true;
                })
                    .catch(function (error) {
                    console.log(error);
                    if (_this.event) {
                        _this.event.target.complete();
                    }
                    _this.vaccinated = false;
                    _this.firstVaccine = false;
                    _this.fullVaccine = false;
                    _this.vaccineTitle = "ERROR";
                    _this.vaccineBody = "OCCURRED";
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    HealthtrackPage.prototype.getAntigenTestData = function () {
        var _this = this;
        console.log('getAntigenTestData');
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SESSION"]).then(function (val) {
            var request = {
                UserID: _this.empId,
                EmployeeId: _this.empId,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_TOKEN"]],
                AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["VERSION"],
                ProcessType: "employee-covid-antigen-history",
                TestResult: ""
            };
            console.log(request);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"]] + "/api/health/covid/antigen", request, {})
                    .then(function (data) {
                    _this.antigenComplete = true;
                    _this.eventComplete();
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                        _this.antigenLoadingDone = true;
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["POST_YES"]) {
                        _this.antigenLoadingDone = true;
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                            case "No Available Data.":
                                _this.antigenNeedTest = true;
                                _this.antigenNegative = false;
                                _this.antigenPositive = false;
                                return;
                            default:
                                _this.antigenNeedTest = true;
                                _this.needTestTitle = "ERROR";
                                _this.needTestBody = "Try again later";
                                _this.noError = false;
                                _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                                return;
                        }
                    }
                    _this.needTestTitle = "ANTIGEN TEST";
                    _this.needTestBody = "NEEDS TESTING";
                    console.log(jsonData);
                    var now = moment__WEBPACK_IMPORTED_MODULE_8__();
                    var arr = jsonData['Value']['Table'];
                    var nextTestDateArr = [];
                    var nextTestDate;
                    var latestAntigenData;
                    arr.forEach(function (element) {
                        if (element.NextTestDate) {
                            nextTestDateArr.push(moment__WEBPACK_IMPORTED_MODULE_8__(element.NextTestDate, "MM/DD/YYYY"));
                        }
                    });
                    if (nextTestDateArr.length > 0) {
                        nextTestDate = moment__WEBPACK_IMPORTED_MODULE_8__["max"](nextTestDateArr);
                        console.log(nextTestDate);
                        arr.forEach(function (element) {
                            if (element.NextTestDate) {
                                console.log(element);
                                if (moment__WEBPACK_IMPORTED_MODULE_8__(element.NextTestDate, "MM/DD/YYYY").isSame(nextTestDate)) {
                                    console.log(element);
                                    latestAntigenData = element;
                                    _this.latestAntigenTest = moment__WEBPACK_IMPORTED_MODULE_8__(element.TestDate, "MM/DD/YYYY").format("MMM DD.YYYY");
                                    _this.nextAntigenTest = nextTestDate.format("MMM DD.YYYY");
                                    _this.testDate = element.TestDate;
                                }
                            }
                        });
                        if (nextTestDate.isBefore(now)) {
                            _this.antigenNeedTest = true;
                            _this.antigenNegative = false;
                            _this.antigenPositive = false;
                        }
                        else {
                            _this.antigenNegative = (latestAntigenData.TestResult == "NEGATIVE");
                            _this.antigenPositive = (latestAntigenData.TestResult == "POSITIVE");
                            _this.antigenNeedTest = false;
                        }
                    }
                    else {
                        _this.antigenNeedTest = true;
                        _this.antigenNegative = false;
                        _this.antigenPositive = false;
                    }
                    _this.antigenLoadingDone = true;
                })
                    .catch(function (error) {
                    console.log(error);
                    _this.eventComplete();
                    _this.antigenComplete = true;
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["MESSAGE_CON_ERROR"];
                    _this.antigenLoadingDone = true;
                });
            });
        });
    };
    HealthtrackPage.prototype.formatDate = function (date) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        return new Date(day + '-' + month + '-' + year);
    };
    HealthtrackPage.prototype.openVaccineHistory = function () {
        this.router.navigate(['/vaccinehistory']);
    };
    HealthtrackPage.prototype.getDateMonth = function (datename, procedure) {
        if (!datename) {
            return '';
        }
        var date = new Date(datename);
        var CurrentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrentMonth[date.getMonth()].toUpperCase();
        else
            return CurrentMonth[date.getMonth()];
    };
    HealthtrackPage.prototype.getDateDate = function (datename) {
        if (!datename) {
            return '';
        }
        var date = new Date(datename);
        return date.getDate().toString();
    };
    HealthtrackPage.prototype.toTitleCase = function (txt) {
        return txt.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    HealthtrackPage.prototype.refresh = function (event) {
        this.event = event;
        this.ngOnInit();
    };
    HealthtrackPage.prototype.eventComplete = function () {
        if (this.vaccineComplete && this.antigenComplete) {
            if (this.event) {
                this.event.target.complete();
            }
            this.vaccineComplete = false;
            this.antigenComplete = false;
        }
    };
    HealthtrackPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-healthtrack',
            template: __webpack_require__(/*! ./healthtrack.page.html */ "./src/app/pages/healthtrack/healthtrack.page.html"),
            styles: [__webpack_require__(/*! ./healthtrack.page.scss */ "./src/app/pages/healthtrack/healthtrack.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]])
    ], HealthtrackPage);
    return HealthtrackPage;
}());



/***/ })

}]);
//# sourceMappingURL=healthtrack-healthtrack-module.js.map