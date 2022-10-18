(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n<ion-content>\n    <div class=\"bgTop\">\n    </div>\n    <!-- <div class=\"bgBottom\"></div> -->\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button class=btnMenu ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n                <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <ion-item class=\"divHello\" lines=\"none\">\n        <ion-label class=\"lblHello\">\n            <h2 class=\"lblWelcome\">{{welcome}}</h2>\n            <h2 class=\"lblName\" (click)=\"togglePersonalInfo()\">{{toTitleCase(nickname)}}</h2>\n            <h2 class=\"lblToday\" (click)=\"toggleCalendar()\">\n                <ion-icon class=\"icnToday\" name=\"calendar\" mode=\"md\" slot=\"start\"></ion-icon>{{day}}\n            </h2>\n        </ion-label>\n        <div *ngIf=\"loadingTimeIn; else shimmerTimeIn\">\n            <ion-card class=\"{{classTimeIn}}\" *ngIf=\"lblClockedInStatus != 'NO CLOCKED IN'\" [routerDirection]=\"forward\" [routerLink]=\"['/main/dailytimerecord']\">\n                <div class=\"divTimeIn\">\n                    <ion-label class=\"lblTimeIn\">\n                        <ion-icon class=\"icnClockedIn\" name=\"time\" mode=\"md\" slot=\"start\"></ion-icon>\n                        {{clockedIn}}\n                    </ion-label>\n                    <ion-label class=\"lblTimeInLbl\">\n                        TIME-IN\n                    </ion-label>\n                </div>\n            </ion-card>\n        </div>\n    </ion-item>\n\n    <div *ngIf=\"loadingAlert; else shimmerAlert\">\n        <div *ngIf=\"lblAlertsStatus != 'NO ALERTS'\">\n            <div class=\"divTitleItem\">\n                <ion-label class=\"lblTitleItem\">\n                    ALERTS\n                </ion-label>\n            </div>\n            <ion-segment class=\"sgmtAlerts\" mode=\"md\" scrollable [(ngModel)]=\"alerts\">\n                <div *ngFor=\"let item of alerts\">\n                    <div *ngIf=\"item.POSITION == '4' || item.POSITION == '5' || item.POSITION == '6' || item.POSITION == '7' || item.POSITION == '8' || item.POSITION == '9'\n                    || item.POSITION == '17' || item.POSITION == '16' \">\n                        <ion-card class=\"cardAlerts {{item.Class}}\" [routerDirection]=\"forward\" [routerLink]=\" [item.RouterLink]\">\n                            <div class=\"divAlertIcon\">\n                                <img class=\"imgAlertIcon\" src=\"{{item.Icon}}\" alt=\"\">\n                            </div>\n                            <ion-label>\n                                <h2 class=\"lblAlertCount\">{{item.COUNT}}</h2>\n                                <h2 class=\"lblAlertName\">{{item.Name}}</h2>\n                            </ion-label>\n                        </ion-card>\n                    </div>\n                </div>\n            </ion-segment>\n        </div>\n    </div>\n\n    <div *ngIf=\"isManager == 1\">\n        <div *ngIf=\"loadingSubordinate; else shimmerSubordinate\">\n            <div *ngIf=\"!subIsEmpty\">\n                <div class=\"divTitleItem\">\n                    <ion-label class=\"lblTitleItem\">\n                        ON LEAVE\n                    </ion-label>\n                </div>\n                <ion-card class=\"cardSubordinate\">\n                    <ion-list class=\"listSubordinate\">\n                        <ion-item class=\"itemSubordinate\" *ngFor=\"let item of subOnLeave\" lines=\"full\">\n                            <ion-icon class=\"icnSubordinate\" name=\"contact\" mode=\"md\"></ion-icon>\n                            <ion-label class=\"lblSubordinate\">\n                                <h2 class=\"lblSubordinateName\">{{toTitleCase(item.FNAME)}} {{toTitleCase(item.LNAME)}}\n                                </h2>\n                                <h2 class=\"lblSubordinatePosition\">{{toTitleCase(item.POSITION)}}</h2>\n                            </ion-label>\n                        </ion-item>\n                    </ion-list>\n                </ion-card>\n            </div>\n        </div>\n    </div>\n\n    <div *ngIf=\"loadingEvent; else shimmerEvent\">\n        <div *ngIf=\"lblEventsStatus != 'NO EVENT'\">\n            <div class=\"divTitleItem\">\n                <ion-label class=\"lblTitleItem\">\n                    UPCOMING EVENTS\n                </ion-label>\n            </div>\n            <ion-slides [options]=\"slideOptsEvents\" pager=\"true\">\n                <ion-slide *ngFor=\"let item of events\" class=\"slideAnnounce\">\n\n                    <ion-card *ngIf=\"item.EventName == 'GREATAWARDS2020'\">\n                        <ion-card-header class=\"cardHeader\">\n                            <img class=\"eventImage\" src=\"../../../assets/img/event_great_awards.jpg\" />\n                        </ion-card-header>\n                        <ion-card-content class=\"cardContent\">\n                            <ion-item lines=\"none\">\n                                <ion-avatar class=\"divDate\">\n                                    <div class=\"DateMonth\">\n                                        MAR\n                                    </div>\n                                    <div class=\"DateDate\">\n                                        7\n                                    </div>\n                                </ion-avatar>\n                                <ion-label text-wrap class=\"lblEvents\">\n                                    <div class=\"EventsTitle\">17th Great Awards\n                                    </div>\n                                    <div class=\"EventsLoc\">SMX Convention Center, Pasay Halls 1 & 2\n                                    </div>\n                                </ion-label>\n                            </ion-item>\n                        </ion-card-content>\n                    </ion-card>\n\n                    <ion-card *ngIf=\"item.EventName == 'NATCON2020'\" (click)=\"toggleCard()\">\n                        <ion-card-header class=\"cardHeader\">\n                            <img class=\"eventImage\" src=\"../../../assets/img/event_natcon.jpg\" />\n                        </ion-card-header>\n                        <ion-card-content class=\"cardContent\">\n                            <ion-item lines=\"none\">\n                                <ion-avatar class=\"divDate\">\n                                    <div class=\"DateMonth\">\n                                        MAR\n                                    </div>\n                                    <div class=\"DateDate\">\n                                        5\n                                    </div>\n                                </ion-avatar>\n                                <ion-label text-wrap class=\"lblEvents\">\n                                    <div class=\"EventsTitle\">CX F.A.S.T. FORWARD: National Sales Conference 2020\n                                    </div>\n                                    <div class=\"EventsLoc\">GABC 1155 Quezon City\n                                    </div>\n                                </ion-label>\n                            </ion-item>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-slide>\n            </ion-slides>\n        </div>\n    </div>\n\n    <div *ngIf=\"loadingAnnouncement; else shimmerAnnouncement\">\n        <div *ngIf=\"lblAnnouncementsStatus != 'NO ANNOUNCEMENTS'\">\n            <div class=\"divTitleItem\">\n                <ion-label class=\"lblTitleItem\">\n                    ANNOUNCEMENTS\n                </ion-label>\n            </div>\n            <ion-slides pager=\"true\" [options]=\"slideOptsMany\">\n                <ion-slide class=\"slideAnnounce\" *ngFor=\"let item of announcement\">\n                    <ion-card class=\"cardAnnounce\">\n                        <ion-card-header class=\"cardAnnounceHeader cardAnnounceHeader{{item.Number}}\">\n                            <div class=\"lblAnnouncementTitle\">\n                                {{ trimText(item.Title) }}</div>\n                        </ion-card-header>\n                        <ion-card-content class=\"contentAnnounce\">\n                            <div class=\"lblAnnouncementDetails\">{{ trimText(item.Details) }}</div>\n                        </ion-card-content>\n                    </ion-card>\n                </ion-slide>\n            </ion-slides>\n        </div>\n    </div>\n\n    <div>\n        <div class=\"divTitleItem divGABCItem\">\n            <ion-label class=\"lblTitleItem\">\n                GABC\n            </ion-label>\n        </div>\n        <ion-slides pager=\"true\" [options]=\"slideOptsMany\">\n            <ion-slide>\n                <ion-card class=\"cardGABC\">\n                    <img src=\"/assets/img/purpose_preview.png\" alt=\"\">\n                </ion-card>\n            </ion-slide>\n            <ion-slide>\n                <ion-card class=\"cardGABC\">\n                    <img *ngIf=\"!clickedGabcCreed\" src=\"/assets/img/creed_preview.png\" alt=\"\" (click)=\"toggleGabcCreed()\">\n                    <img *ngIf=\"clickedGabcCreed\" src=\"/assets/img/creed_big.png\" alt=\"\" (click)=\"toggleGabcCreed()\">\n                </ion-card>\n            </ion-slide>\n            <ion-slide>\n                <ion-card class=\"cardGABC\">\n                    <img *ngIf=\"!clickedGabcMission\" src=\"/assets/img/missionvision_preview.png\" alt=\"\" (click)=\"toggleGabcMission()\">\n                    <img *ngIf=\"clickedGabcMission\" src=\"/assets/img/missionvision_big.png\" alt=\"\" (click)=\"toggleGabcMission()\">\n                </ion-card>\n            </ion-slide>\n        </ion-slides>\n    </div>\n\n    <!-- <ion-card class=\"cardClockedInSmall\" *ngIf=\"lblClockedInStatus != 'NO CLOCKED IN'\" [routerDirection]=\"forward\"\n    [routerLink]=\"['/main/dailytimerecord']\">\n    <ion-card-header class=\"divClockedInHeader\" (click)=\"toggleClockedInSection()\">\n      <ion-icon class=\"icnClockedIn\" name=\"timer\"></ion-icon>\n      <ion-label class=\"lblClockedInStatus\">\n        {{lblClockedInStatus}}</ion-label>\n      <ion-label class=\"lblClockedIn\">\n        {{clockedIn}}</ion-label>\n    </ion-card-header>\n    <ion-progress-bar type=\"indeterminate\" *ngIf=\"lblClockedInStatus == 'LOADING CLOCK IN...'\">\n    </ion-progress-bar>\n  </ion-card>\n  <ion-card class=\"cardSubordinateSmall\" *ngIf=\"isManager == 1 && !subIsEmpty\" (click)=\"toggleSubordinateSection()\">\n    <ion-card-header class=\"divSubordinateHeader\">\n      <ion-icon class=\"icnSubordinate\" name=\"people\"></ion-icon>\n      <ion-label class=\"lblSubordinate\">\n        {{lblSubordinatesStatus}}</ion-label>\n      <ion-icon class=\"menuSubordinateToggle\" *ngIf=\"noError\"\n        name=\"{{clickedSubordinate ? 'arrow-dropup': 'arrow-dropdown'}}\">\n      </ion-icon>\n    </ion-card-header>\n    <ion-progress-bar type=\"indeterminate\" *ngIf=\"lblSubordinatesStatus == 'LOADING SUBORDINATES...'\">\n    </ion-progress-bar>\n    <ion-card-content class=\"cardSubordinateContent\" [ngClass]=\"{'cardOff': !clickedSubordinate}\"\n      *ngIf=\"noError && lblSubordinatesStatus != 'LOADING SUBORDINATES...'\">\n      <ion-item class=\"cardSubordinate\" *ngFor=\"let item of subOnLeave\">\n        <ion-icon class=\"divPhoto\" name=\"person\" mode=\"md\"></ion-icon>\n        {{item.FNAME}} {{item.LNAME}}\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class=\"cardAlertsSmall\" *ngIf=\"lblAlertsStatus != 'NO ALERTS'\" (click)=\"toggleAlertsSection()\">\n    <ion-card-header class=\"divAlertsHeader\">\n      <ion-icon class=\"icnAlerts\" name=\"notifications-outline\"></ion-icon>\n      <ion-label class=\"lblAnnounce\">\n        {{lblAlertsStatus}}</ion-label>\n      <ion-icon class=\"menuAlertsToggle\" *ngIf=\"noError && lblAlertsStatus != 'NO ALERTS'\"\n        name=\"{{clickedAlerts ? 'arrow-dropup': 'arrow-dropdown'}}\"></ion-icon>\n    </ion-card-header>\n    <ion-progress-bar type=\"indeterminate\" *ngIf=\"lblAlertsStatus == 'LOADING ALERTS...'\"></ion-progress-bar>\n    <ion-card-content class=\"cardAlertsContent\" [ngClass]=\"{'cardOff': !clickedAlerts}\"\n      *ngIf=\"noError && lblAlertsStatus != 'NO ALERTS' && lblAlertsStatus != 'LOADING ALERTS...'\">\n      <div *ngFor=\"let item of alerts\">\n        <ion-item class=\"cardAlerts\" *ngIf=\"item.Name\" [routerDirection]=\"forward\" [routerLink]=\" [item.RouterLink]\">\n          <div class=\"divAlertsItem\">\n            <ion-icon class=\"icnAlerts\" name={{item.Icon}} mode={{item.Mode}}>\n            </ion-icon>\n            <ion-badge class=\"bdgAlerts\" color=\"accent\">{{ item.COUNT }}</ion-badge>\n          </div>\n          <ion-label class=\"lblAlerts\">\n            {{item.Name}}</ion-label>\n        </ion-item>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card class=\"cardAnnouncementSmall\">\n    <ion-card-header class=\"divAnnouncementHeader\" (click)=\"toggleAnnounceSection()\">\n      <ion-icon class=\"icnAnnounce\" name=\"chatboxes\"></ion-icon>\n      <ion-label class=\"lblAnnounce\">\n        {{lblAnnouncementsStatus}}</ion-label>\n      <ion-icon class=\"menuAnnouncementToggle\" *ngIf=\"noError && lblAnnouncementsStatus != 'NO ANNOUNCEMENTS'\"\n        name=\"{{clickedAnnounce ? 'arrow-dropup': 'arrow-dropdown'}}\">\n      </ion-icon>\n    </ion-card-header>\n    <ion-progress-bar type=\"indeterminate\" *ngIf=\"lblAnnouncementsStatus == 'LOADING ANNOUNCEMENTS...'\">\n    </ion-progress-bar>\n    <ion-card-content\n      *ngIf=\"noError && lblAnnouncementsStatus != 'NO ANNOUNCEMENTS' && lblAnnouncementsStatus != 'LOADING ANNOUNCEMENTS...' && clickedAnnounce\">\n      <div *ngFor=\"let item of announcement;\">\n        <ion-card class=\"cardAnnouncement\"\n          *ngIf=\"trimText(item.Title) != 'Our Purpose' && trimText(item.Title) != 'The GABC Creed'\">\n          <ion-card-content class=\"contentAnnounce\">\n            <h1 class=\"lblTitle\">{{ trimText(item.Title) }}</h1>\n            <p class=\"lblDetails\">{{ trimText(item.Details) }}</p>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-card (click)=\"viewPhoto(purpose_big)\">\n    <img src=\"/assets/img/purpose_preview.png\" alt=\"\">\n  </ion-card>\n  <ion-card (click)=\"viewPhoto(creed_big)\">\n    <img src=\"/assets/img/creed_preview.png\" alt=\"\">\n  </ion-card>\n  <ion-card (click)=\"viewPhoto(missionvision_big)\">\n    <img src=\"/assets/img/missionvision_preview.png\" alt=\"\">\n  </ion-card>\n  <div *ngIf=\"noError; else error\">\n  </div> -->\n    <div class=\"bgBottom\"></div>\n</ion-content>\n\n\n<ng-template #shimmerTimeIn>\n    <ion-card class=\"btnTimeInLoading\" *ngIf=\"lblClockedInStatus != 'NO CLOCKED IN'\">\n        <div class=\"divLoadingTimeIn shineClear\">\n            <ion-spinner name=\"crescent\" class=\"spinnerTimeIn\"></ion-spinner>\n            <h2 class=\"lblLoadingTimeIn\">LOADING TIME-IN</h2>\n        </div>\n    </ion-card>\n</ng-template>\n\n<ng-template #shimmerAlert>\n    <div class=\"divTitleItem\">\n        <ion-label class=\"lblTitleItem\">\n            ALERTS\n        </ion-label>\n    </div>\n    <!-- <ion-card class=\"cardProgressbar\">\n    <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  </ion-card> -->\n    <ion-segment class=\"sgmtAlerts shimmeritem\" mode=\"md\" scrollable>\n        <div *ngFor=\"let number of [0,1,2,3,4,5]\">\n            <ion-card class=\"cardAlerts shineClear\">\n            </ion-card>\n        </div>\n    </ion-segment>\n</ng-template>\n\n<ng-template #shimmerSubordinate>\n    <div class=\"divTitleItem\">\n        <ion-label class=\"lblTitleItem\">\n            ON LEAVE\n        </ion-label>\n    </div>\n    <!-- <ion-card class=\"cardProgressbar\">\n    <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  </ion-card> -->\n\n    <ion-card class=\"cardSubordinateLoading shineClear\">\n        <!-- <ion-list class=\"listSubordinate shineClear\">\n            <ion-item class=\"itemSubordinateLoading shineClear\" *ngFor=\"let number of [0,1]\" lines=\"full\">\n            </ion-item>\n        </ion-list> -->\n    </ion-card>\n</ng-template>\n\n<ng-template #shimmerEvent>\n    <div class=\"divTitleItem\">\n        <ion-label class=\"lblTitleItem\">\n            UPCOMING EVENTS\n        </ion-label>\n    </div>\n    <!-- <ion-card class=\"cardProgressbar\">\n    <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  </ion-card> -->\n    <div class=\"divEvent divShimmer shineClear\">\n\n    </div>\n</ng-template>\n\n<ng-template #shimmerAnnouncement>\n    <div class=\"divTitleItem\">\n        <ion-label class=\"lblTitleItem\">\n            ANNOUNCEMENTS\n        </ion-label>\n    </div>\n    <!-- <ion-card class=\"cardProgressbar\">\n    <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n  </ion-card> -->\n    <div class=\"divEvent divShimmer shineClear\">\n\n    </div>\n</ng-template>\n\n<ng-template #error>\n    <ion-card lines=\"none\" class=\"errorbox2\">\n        <ion-avatar class=\"center\">\n            <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n        <span class=\"errorMessage\">{{errorMessage}}</span>\n        <br />\n        <span class=\"errorMessage\">\n            <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n            <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n                <ion-icon color=\"light\" name=\"home\"></ion-icon>\n            </ion-button>\n        </span>\n    </ion-card>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: linear-gradient(to right bottom, #558B2F, #558B2F); }\n\nion-toolbar {\n  --background: transparent;\n  --min-height: 35px;\n  --padding: 0px;\n  margin-top: 30px;\n  top: 0%; }\n\nion-slide > :first-child {\n  width: 100%;\n  margin-top: 10px; }\n\nion-card {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19); }\n\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 0px !important;\n  left: 0;\n  width: 100%; }\n\n.divHello {\n  --background: rgba(255, 255, 255, 0);\n  width: 100%;\n  color: white; }\n\n.lblWelcome {\n  font-size: 21px;\n  margin-bottom: 0px; }\n\n.lblName {\n  font-size: 30px;\n  font-family: \"RobotoRegular\"; }\n\n.icnToday {\n  height: 20px;\n  width: 20px;\n  margin-left: -25px;\n  position: absolute; }\n\n.lblToday {\n  font-size: 17px;\n  margin-top: 15px;\n  margin-left: 25px; }\n\n.btnTimeIn {\n  width: 110px;\n  height: 45px;\n  color: white;\n  margin: 55px 10px 0px 0px;\n  --box-shadow: 1px 1px 10px gray;\n  border-radius: 35px;\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0 rgba(0, 0, 0, 0); }\n\n.btnTimeIn8 {\n  background-image: linear-gradient(to left, #999900, #B3B300); }\n\n.btnTimeIn9 {\n  background-image: linear-gradient(to left, #1777B3, #1E96E1); }\n\n.btnTimeIn10 {\n  background-image: linear-gradient(to left, #B34D8A, #CC589D); }\n\n.btnTimeInLate {\n  background-image: linear-gradient(to left, #B34D4D, #D25A5A); }\n\n.btnTimeInDefault {\n  background-image: linear-gradient(to left, #808080, #999999); }\n\n.btnTimeInLoading {\n  width: 110px;\n  height: 45px;\n  color: white;\n  margin: 55px 10px 0px 0px;\n  --box-shadow: 1px 1px 10px gray;\n  border-radius: 35px;\n  background-image: linear-gradient(to left, #808080, #999999);\n  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0), 0 0px 0px 0 rgba(0, 0, 0, 0); }\n\n.divTimeIn {\n  margin-left: 25px; }\n\n.icnClockedIn {\n  height: 35px;\n  width: 35px;\n  position: absolute;\n  left: 7px;\n  top: 5px; }\n\n.lblTimeIn {\n  font-size: 15px;\n  text-align: right;\n  font-family: \"RobotoRegular\";\n  margin: 7px 13px 0px 0px; }\n\n.lblTimeInLbl {\n  font-size: 11px;\n  text-align: right;\n  margin: 0px 24px 0px 0px; }\n\n.divLoadingTimeIn {\n  display: flex; }\n\n.spinnerTimeIn {\n  margin-top: 0px;\n  margin-left: 7px;\n  color: white;\n  width: 45px;\n  height: 45px; }\n\n.lblLoadingTimeIn {\n  font-size: 11px;\n  color: white;\n  margin: 12px 0 0 9px; }\n\n.divTitleItem {\n  margin: 10px 0px 0px 16px;\n  position: relative;\n  z-index: 1; }\n\n.divGABCItem {\n  margin-top: 0px; }\n\n.lblTitleItem {\n  font-size: 14px;\n  font-family: \"RobotoRegular\";\n  color: white; }\n\n.sgmtAlerts {\n  margin-left: 10px; }\n\n.cardAlerts {\n  height: 120px;\n  width: 105px;\n  margin: 10px 5px 10px 5px;\n  color: white; }\n\n.alertLeave {\n  background-image: linear-gradient(to right bottom, #4568dc, #9C27B0); }\n\n.alertAdvisory {\n  background-image: linear-gradient(to right bottom, #AD5048, #91443D); }\n\n.alertOvertime {\n  background-image: linear-gradient(to right bottom, #EF4656, #D94734); }\n\n.alertWFH {\n  background-image: linear-gradient(to right bottom, #F44336, #F44336); }\n\n.alertWFHApproval {\n  background-image: linear-gradient(to right bottom, #D3A828, #D3A828); }\n\n.alertLeaveApproval {\n  background-image: linear-gradient(to right bottom, #E77C2A, #F53E20); }\n\n.alertAdvisoryApproval {\n  background-image: linear-gradient(to right bottom, #009688, #007A6E); }\n\n.alertOvertimeApproval {\n  background-image: linear-gradient(to right bottom, #25BFCD, #1FA2AD); }\n\n.divAlertIcon {\n  text-align: -webkit-center;\n  margin-top: 10px; }\n\n.imgAlertIcon {\n  height: 50px;\n  width: 50px; }\n\n.lblAlertCount {\n  margin-top: 10px;\n  font-size: 22px;\n  font-family: \"RobotoRegular\"; }\n\n.lblAlertName {\n  font-size: 11px;\n  font-family: \"RobotoRegular\"; }\n\n.cardSubordinate {\n  margin-top: 10px;\n  z-index: 1; }\n\n.cardSubordinateLoading {\n  margin-top: 10px;\n  height: 120px;\n  --background: rgba(255, 255, 255, 0); }\n\n.listSubordinate {\n  border-radius: 10px !important; }\n\n.itemSubordinate {\n  --padding-start: 10px; }\n\n.itemSubordinateLoading {\n  --padding-start: 10px;\n  --background: rgba(255, 255, 255, 0); }\n\n.icnSubordinate {\n  width: 40px;\n  height: 40px;\n  color: #61636B; }\n\n.lblSubordinate {\n  margin-left: 10px;\n  font-family: \"RobotoRegular\"; }\n\n.lblSubordinateName {\n  font-size: 16px; }\n\n.lblSubordinatePosition {\n  font-size: 13px;\n  color: #61636B; }\n\n.eventImage {\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.divEvent {\n  height: 150px;\n  margin: 0px 20px;\n  border-radius: 10px;\n  z-index: 1;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19); }\n\n.divDate {\n  height: 70px; }\n\n.DateMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px; }\n\n.DateDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px; }\n\n.EventsTitle {\n  font-size: 15px;\n  font-family: \"RobotoBold\";\n  color: black; }\n\n.EventsLoc {\n  font-size: 13px;\n  color: #5C5C5C;\n  font-family: \"RobotoRegular\"; }\n\n.lblEvents {\n  margin: 0px 0px 0px 40px; }\n\n.cardHeader {\n  padding: 0px; }\n\n.cardContent {\n  padding: 10px 5px 10px 0px;\n  background-color: white; }\n\n.slideAnnounce {\n  margin-bottom: 10px; }\n\n.cardAnnounce {\n  display: flex;\n  flex-direction: column;\n  height: 300px;\n  background: white; }\n\n.cardAnnounceHeader {\n  display: flex;\n  flex-basis: auto;\n  flex-grow: 0;\n  flex-shrink: 0;\n  padding: 15px;\n  min-height: 70px;\n  justify-content: center;\n  align-items: center; }\n\n.contentAnnounce {\n  color: white;\n  padding: 0px;\n  flex-basis: auto;\n  flex-grow: 1;\n  flex-shrink: 1;\n  overflow: auto; }\n\n.lblAnnouncementTitle {\n  font-size: 15px;\n  font-family: \"RobotoMedium\";\n  color: white;\n  margin: 0px; }\n\n.lblAnnouncementDetails {\n  font-size: 13px;\n  background: white;\n  min-height: 100%;\n  color: black;\n  padding: 15px;\n  font-family: \"RobotoRegular\"; }\n\n.cardProgressbar {\n  margin: 0px 20px; }\n\n.cardGABC {\n  margin-bottom: 30px; }\n\n.cardAnnounceHeader0 {\n  background-image: linear-gradient(to top right, #5433FF, #20BDFF); }\n\n.cardAnnounceHeader1 {\n  background-image: linear-gradient(to bottom left, #4568dc, #b06ab3); }\n\n.cardAnnounceHeader2 {\n  background-image: linear-gradient(to top right, #314755, #26a0da); }\n\n.cardAnnounceHeader3 {\n  background-image: linear-gradient(to bottom left, #cc2b5e, #753a88); }\n\n.cardAnnounceHeader4 {\n  background-image: linear-gradient(to bottom right, #108dc7, #ef8e38); }\n\n.cardAnnounceHeader5 {\n  background-image: linear-gradient(to top right, #67B26F, #4ca2cd); }\n\n.cardAnnounceHeader6 {\n  background-image: linear-gradient(to left bottom, #16bffd, #19547b); }\n\n.cardAnnounceHeader7 {\n  background-image: linear-gradient(to top left, #ff512f, #dd2476); }\n\n.cardAnnounceHeader8 {\n  background-image: linear-gradient(to left bottom, #f953c6, #b91d73); }\n\n.cardAnnounceHeader9 {\n  background-image: linear-gradient(to left top, #ff5f6d, #E8985A); }\n\n.cardAnnounceHeader10 {\n  background-image: linear-gradient(to right bottom, #e96443, #904e95); }\n\n.cardAnnounceHeader11 {\n  background-image: linear-gradient(to right bottom, #00D3EB, #02C977); }\n\n@media screen and (max-width: 374px) {\n  .bgTop {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 70%;\n    top: -130px; }\n  .bgBottom {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 70%;\n    bottom: -30%;\n    left: -30%;\n    -webkit-transform: scaleX(-1);\n            transform: scaleX(-1); } }\n\n@media screen and (min-width: 375px) {\n  .bgTop {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 70%;\n    top: -23%; }\n  .bgBottom {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 70%;\n    bottom: -30%;\n    left: -30%;\n    -webkit-transform: scaleX(-1);\n            transform: scaleX(-1); } }\n\n@media screen and (min-width: 600px) {\n  .bgTop {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 125%;\n    height: 100%;\n    top: -40%; }\n  .bgBottom {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 70%;\n    bottom: -30%;\n    left: -50%;\n    -webkit-transform: scaleX(-1);\n            transform: scaleX(-1); } }\n\n@media screen and (min-width: 800px) {\n  .bgTop {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 75%;\n    top: -25%; }\n  .bgBottom {\n    background-image: url('coloredlogo.png') !important;\n    z-index: 0;\n    background-size: cover;\n    position: absolute;\n    width: 100%;\n    height: 70%;\n    bottom: -30%;\n    left: -50%;\n    -webkit-transform: scaleX(-1);\n            transform: scaleX(-1); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMtZ2FiYy9Eb2N1bWVudHMvR0VBUi9HRUFSX2lPUy9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnRUFBYSxFQUFBOztBQUdqQjtFQUNJLHlCQUFhO0VBQ2Isa0JBQWE7RUFDYixjQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLE9BQU8sRUFBQTs7QUFHWDtFQUNJLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSw0RUFBNEUsRUFBQTs7QUFHaEY7OztFQUdJLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AsV0FBVyxFQUFBOztBQUdmO0VBQ0ksb0NBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlO0VBQ2YsNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsK0JBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0VBQXNFLEVBQUE7O0FBRzFFO0VBQ0ksNERBQTRELEVBQUE7O0FBSWhFO0VBQ0ksNERBQTRELEVBQUE7O0FBSWhFO0VBQ0ksNERBQTRELEVBQUE7O0FBSWhFO0VBQ0ksNERBQTRELEVBQUE7O0FBSWhFO0VBQ0ksNERBQTRELEVBQUE7O0FBR2hFO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLCtCQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDREQUE0RDtFQUM1RCxzRUFBc0UsRUFBQTs7QUFHMUU7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUSxFQUFBOztBQUdaO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix3QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFHaEI7RUFFSSxvRUFBb0UsRUFBQTs7QUFHeEU7RUFFSSxvRUFBb0UsRUFBQTs7QUFHeEU7RUFFSSxvRUFBb0UsRUFBQTs7QUFHeEU7RUFFSSxvRUFBb0UsRUFBQTs7QUFHeEU7RUFDSSxvRUFBb0UsRUFBQTs7QUFHeEU7RUFFSSxvRUFBb0UsRUFBQTs7QUFHeEU7RUFFSSxvRUFBb0UsRUFBQTs7QUFHeEU7RUFFSSxvRUFBb0UsRUFBQTs7QUFHeEU7RUFDSSwwQkFBMEI7RUFDMUIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksZUFBZTtFQUNmLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBR2Q7RUFDSSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG9DQUFhLEVBQUE7O0FBR2pCO0VBQ0ksOEJBQThCLEVBQUE7O0FBR2xDO0VBQ0kscUJBQWdCLEVBQUE7O0FBR3BCO0VBQ0kscUJBQWdCO0VBQ2hCLG9DQUFhLEVBQUE7O0FBR2pCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksaUJBQWlCO0VBQ2pCLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGFBQWE7RUFDYixvQkFBaUI7S0FBakIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLDRFQUE0RSxFQUFBOztBQUdoRjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUNKLEVBQUE7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSwwQkFBMEI7RUFDMUIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksaUVBQWlFLEVBQUE7O0FBR3JFO0VBQ0ksbUVBQW1FLEVBQUE7O0FBR3ZFO0VBQ0ksaUVBQWlFLEVBQUE7O0FBR3JFO0VBQ0ksbUVBQW1FLEVBQUE7O0FBR3ZFO0VBQ0ksb0VBQW9FLEVBQUE7O0FBR3hFO0VBQ0ksaUVBQWlFLEVBQUE7O0FBR3JFO0VBQ0ksbUVBQW1FLEVBQUE7O0FBR3ZFO0VBQ0ksZ0VBQWdFLEVBQUE7O0FBR3BFO0VBQ0ksbUVBQW1FLEVBQUE7O0FBR3ZFO0VBQ0ksZ0VBQWdFLEVBQUE7O0FBR3BFO0VBQ0ksb0VBQW9FLEVBQUE7O0FBR3hFO0VBQ0ksb0VBQW9FLEVBQUE7O0FBR3hFO0VBQ0k7SUFDSSxtREFBdUU7SUFDdkUsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxXQUFXLEVBQUE7RUFFZjtJQUNJLG1EQUF1RTtJQUN2RSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsNkJBQXFCO1lBQXJCLHFCQUFxQixFQUFBLEVBQ3hCOztBQUdMO0VBQ0k7SUFDSSxtREFBdUU7SUFDdkUsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTLEVBQUE7RUFFYjtJQUNJLG1EQUF1RTtJQUN2RSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsNkJBQXFCO1lBQXJCLHFCQUFxQixFQUFBLEVBQ3hCOztBQUdMO0VBQ0k7SUFDSSxtREFBdUU7SUFDdkUsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTLEVBQUE7RUFFYjtJQUNJLG1EQUF1RTtJQUN2RSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsNkJBQXFCO1lBQXJCLHFCQUFxQixFQUFBLEVBQ3hCOztBQUdMO0VBQ0k7SUFDSSxtREFBdUU7SUFDdkUsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxTQUFTLEVBQUE7RUFFYjtJQUNJLG1EQUF1RTtJQUN2RSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsNkJBQXFCO1lBQXJCLHFCQUFxQixFQUFBLEVBQ3hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAvLy0tYmFja2dyb3VuZDogIzU1OEIyRjtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICM1NThCMkYsICM1NThCMkYpO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLW1pbi1oZWlnaHQ6IDM1cHg7XG4gICAgLS1wYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB0b3A6IDAlO1xufVxuXG5pb24tc2xpZGU+OmZpcnN0LWNoaWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uLFxuLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSxcbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWw+LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuICAgIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmRpdkhlbGxvIHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubGJsV2VsY29tZSB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmxibE5hbWUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5pY25Ub2RheSB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5sYmxUb2RheSB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG5cbi5idG5UaW1lSW4ge1xuICAgIHdpZHRoOiAxMTBweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogNTVweCAxMHB4IDBweCAwcHg7XG4gICAgLS1ib3gtc2hhZG93OiAxcHggMXB4IDEwcHggZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMHB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMCksIDAgMHB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5idG5UaW1lSW44IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzk5OTkwMCwgI0IzQjMwMCk7XG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGNsb3Nlc3Qtc2lkZSBhdCAyMiUsIHJnYmEoMjIwLCAyMjAsIDAsIDAuNSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSk7XG59XG5cbi5idG5UaW1lSW45IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzE3NzdCMywgIzFFOTZFMSk7XG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGNsb3Nlc3Qtc2lkZSBhdCAyMiUsICMxRTk2RTEsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSlcbn1cblxuLmJ0blRpbWVJbjEwIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0IzNEQ4QSwgI0NDNTg5RCk7XG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGNsb3Nlc3Qtc2lkZSBhdCAyMiUsIHJnYmEoMjMyLCAxLCAxMDIsIDAuNSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSlcbn1cblxuLmJ0blRpbWVJbkxhdGUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjQjM0RDRELCAjRDI1QTVBKTtcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgY2xvc2VzdC1zaWRlIGF0IDIyJSwgI0ZGMDAwMCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpKVxufVxuXG4uYnRuVGltZUluRGVmYXVsdCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM4MDgwODAsICM5OTk5OTkpO1xufVxuXG4uYnRuVGltZUluTG9hZGluZyB7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiA1NXB4IDEwcHggMHB4IDBweDtcbiAgICAtLWJveC1zaGFkb3c6IDFweCAxcHggMTBweCBncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM4MDgwODAsICM5OTk5OTkpO1xuICAgIGJveC1zaGFkb3c6IDAgMHB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMCksIDAgMHB4IDBweCAwIHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5kaXZUaW1lSW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4uaWNuQ2xvY2tlZEluIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDdweDtcbiAgICB0b3A6IDVweDtcbn1cblxuLmxibFRpbWVJbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbiAgICBtYXJnaW46IDdweCAxM3B4IDBweCAwcHg7XG59XG5cbi5sYmxUaW1lSW5MYmwge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW46IDBweCAyNHB4IDBweCAwcHg7XG59XG5cbi5kaXZMb2FkaW5nVGltZUluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3Bpbm5lclRpbWVJbiB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbn1cblxuLmxibExvYWRpbmdUaW1lSW4ge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAxMnB4IDAgMCA5cHg7XG59XG5cbi5kaXZUaXRsZUl0ZW0ge1xuICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDE2cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5kaXZHQUJDSXRlbSB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4ubGJsVGl0bGVJdGVtIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNnbXRBbGVydHMge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY2FyZEFsZXJ0cyB7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICB3aWR0aDogMTA1cHg7XG4gICAgbWFyZ2luOiAxMHB4IDVweCAxMHB4IDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5hbGVydExlYXZlIHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICM5QzI3QjA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgIzQ1NjhkYywgIzlDMjdCMCk7XG59XG5cbi5hbGVydEFkdmlzb3J5IHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICMxNDU1NzA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI0FENTA0OCwgIzkxNDQzRCk7XG59XG5cbi5hbGVydE92ZXJ0aW1lIHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNFRjQ2NTY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI0VGNDY1NiwgI0Q5NDczNCk7XG59XG5cbi5hbGVydFdGSCB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzI1QkZDRDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjRjQ0MzM2LCAjRjQ0MzM2KTtcbn1cblxuLmFsZXJ0V0ZIQXBwcm92YWwge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sICNEM0E4MjgsICNEM0E4MjgpO1xufVxuXG4uYWxlcnRMZWF2ZUFwcHJvdmFsIHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNFNzdDMkE7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI0U3N0MyQSwgI0Y1M0UyMCk7XG59XG5cbi5hbGVydEFkdmlzb3J5QXBwcm92YWwge1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjMDA5Njg4LCAjMDA3QTZFKTtcbn1cblxuLmFsZXJ0T3ZlcnRpbWVBcHByb3ZhbCB7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzI1QkZDRDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjMjVCRkNELCAjMUZBMkFEKTtcbn1cblxuLmRpdkFsZXJ0SWNvbiB7XG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmltZ0FsZXJ0SWNvbiB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xufVxuXG4ubGJsQWxlcnRDb3VudCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4ubGJsQWxlcnROYW1lIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG4uY2FyZFN1Ym9yZGluYXRlIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5jYXJkU3Vib3JkaW5hdGVMb2FkaW5nIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xufVxuXG4ubGlzdFN1Ym9yZGluYXRlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtU3Vib3JkaW5hdGUge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbn1cblxuLml0ZW1TdWJvcmRpbmF0ZUxvYWRpbmcge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG59XG5cbi5pY25TdWJvcmRpbmF0ZSB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGNvbG9yOiAjNjE2MzZCO1xufVxuXG4ubGJsU3Vib3JkaW5hdGUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLmxibFN1Ym9yZGluYXRlTmFtZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubGJsU3Vib3JkaW5hdGVQb3NpdGlvbiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjNjE2MzZCO1xufVxuXG4uZXZlbnRJbWFnZSB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmRpdkV2ZW50IHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIG1hcmdpbjogMHB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5kaXZEYXRlIHtcbiAgICBoZWlnaHQ6IDcwcHg7XG59XG5cbi5EYXRlTW9udGgge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiAyMHB4XG59XG5cbi5EYXRlRGF0ZSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjNUM1QzVDO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI0YzRjNGMztcbiAgICB3aWR0aDogNjVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5FdmVudHNUaXRsZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b0JvbGRcIjtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5FdmVudHNMb2Mge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzVDNUM1QztcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5sYmxFdmVudHMge1xuICAgIG1hcmdpbjogMHB4IDBweCAwcHggNDBweDtcbn1cblxuLmNhcmRIZWFkZXIge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLmNhcmRDb250ZW50IHtcbiAgICBwYWRkaW5nOiAxMHB4IDVweCAxMHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNsaWRlQW5ub3VuY2Uge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jYXJkQW5ub3VuY2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtYmFzaXM6IGF1dG87XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWluLWhlaWdodDogNzBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGVudEFubm91bmNlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGZsZXgtYmFzaXM6IGF1dG87XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubGJsQW5ub3VuY2VtZW50VGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbi5sYmxBbm5vdW5jZW1lbnREZXRhaWxzIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5jYXJkUHJvZ3Jlc3NiYXIge1xuICAgIG1hcmdpbjogMHB4IDIwcHg7XG59XG5cbi5jYXJkR0FCQyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlcjAge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICM1NDMzRkYsICMyMEJERkYpOyAvL1NleHkgQmx1ZVxufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyMSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjNDU2OGRjLCAjYjA2YWIzKTsgLy90b25pZ2h0XG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXIyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjMzE0NzU1LCAjMjZhMGRhKTsgLy9NYXV2ZVxufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyMyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSBsZWZ0LCAjY2MyYjVlLCAjNzUzYTg4KTsgLy9QdXJwbGUgXG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXI0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMTA4ZGM3LCAjZWY4ZTM4KTsgLy9UcmFucXVpbCBcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlcjUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICM2N0IyNkYsICM0Y2EyY2QpOyAvL0JlYWNoXG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXI2IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCBib3R0b20sICMxNmJmZmQsICMxOTU0N2IpOyAvL1JpdmVyXG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXI3IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsICNmZjUxMmYsICNkZDI0NzYpOyAvL0Jsb29keSBcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlcjgge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0IGJvdHRvbSwgI2Y5NTNjNiwgI2I5MWQ3Myk7IC8vRHVza1xufVxuXG4uY2FyZEFubm91bmNlSGVhZGVyOSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQgdG9wLCAjZmY1ZjZkLCAjRTg5ODVBKTsgLy9PcmFuZ2UgXG59XG5cbi5jYXJkQW5ub3VuY2VIZWFkZXIxMCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI2U5NjQ0MywgIzkwNGU5NSk7IC8vUGVhY2hcbn1cblxuLmNhcmRBbm5vdW5jZUhlYWRlcjExIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjMDBEM0VCLCAjMDJDOTc3KTsgLy9EZWNlbnQgXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NHB4KSB7XG4gICAgLmJnVG9wIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICB0b3A6IC0xMzBweDtcbiAgICB9XG4gICAgLmJnQm90dG9tIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICBib3R0b206IC0zMCU7XG4gICAgICAgIGxlZnQ6IC0zMCU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSB7XG4gICAgLmJnVG9wIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICB0b3A6IC0yMyU7XG4gICAgfVxuICAgIC5iZ0JvdHRvbSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmcnKSAhaW1wb3J0YW50O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgYm90dG9tOiAtMzAlO1xuICAgICAgICBsZWZ0OiAtMzAlO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIC5iZ1RvcCB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmcnKSAhaW1wb3J0YW50O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMjUlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHRvcDogLTQwJTtcbiAgICB9XG4gICAgLmJnQm90dG9tIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICBib3R0b206IC0zMCU7XG4gICAgICAgIGxlZnQ6IC01MCU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICAgLmJnVG9wIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNzUlO1xuICAgICAgICB0b3A6IC0yNSU7XG4gICAgfVxuICAgIC5iZ0JvdHRvbSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmcnKSAhaW1wb3J0YW50O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgYm90dG9tOiAtMzAlO1xuICAgICAgICBsZWZ0OiAtNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4gICAgfVxufVxuXG4vLyBpb24taGVhZGVyIHtcbi8vICAgLS1iYWNrZ3JvdW5kOiAjNTU4QjJGO1xuLy8gfVxuLy8gaW9uLXRvb2xiYXIge1xuLy8gICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAtLW1pbi1oZWlnaHQ6IDM1cHg7XG4vLyAgIC0tcGFkZGluZzogMHB4O1xuLy8gICBtYXJnaW4tdG9wOiAzMHB4O1xuLy8gfVxuLy8gaW9uLXRpdGxlIHtcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gICBtYXJnaW4tbGVmdDogMTBweDtcbi8vICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMDVjO1xuLy8gfVxuLy8gaW9uLWNvbnRlbnQge1xuLy8gICAtLWJhY2tncm91bmQ6ICM1NThCMkY7XG4vLyB9XG4vLyBpb24tY2FyZC1jb250ZW50IHtcbi8vICAgcGFkZGluZzogMHB4IDBweCAxNXB4IDBweDtcbi8vICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAwLjNzO1xuLy8gICBhbmltYXRpb246IGZhZGVJbiAwLjNzO1xuLy8gICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuLy8gfVxuLy8gLmNhcmRPZmYge1xuLy8gICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZU91dCAwLjNzO1xuLy8gICBhbmltYXRpb246IGZhZGVPdXQgMC4zcztcbi8vICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbi8vIH1cbi8vIC5jYXJkT2ZmQW5ub3VuY2Uge1xuLy8gICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZU91dCAwLjNzO1xuLy8gICBhbmltYXRpb246IGZhZGVPdXQgMC4zcztcbi8vICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbi8vICAgcGFkZGluZy1ib3R0b206IDBweDtcbi8vIH1cbi8vIC5iZ1RvcCB7XG4vLyAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9jb2xvcmVkbG9nby5wbmcnKSAhaW1wb3J0YW50O1xuLy8gICB6LWluZGV4OiAwO1xuLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBoZWlnaHQ6IDcwJTtcbi8vICAgdG9wOiAtMTMwcHg7XG4vLyB9XG4vLyAuYmdCb3R0b20ge1xuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nJykgIWltcG9ydGFudDtcbi8vICAgei1pbmRleDogMDtcbi8vICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgaGVpZ2h0OiA3MCU7XG4vLyAgIGJvdHRvbTogLTEwMHB4O1xuLy8gICBsZWZ0OiAtMTAwcHg7XG4vLyAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbi8vIH1cbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSB7XG4vLyAgIC5iZ1RvcCB7XG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZycpICFpbXBvcnRhbnQ7XG4vLyAgICAgei1pbmRleDogMDtcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBoZWlnaHQ6IDcwJTtcbi8vICAgICB0b3A6IC0xNjBweDtcbi8vICAgfVxuLy8gfVxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbi8vICAgLmJnVG9wIHtcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvY29sb3JlZGxvZ28ucG5nJykgIWltcG9ydGFudDtcbi8vICAgICB6LWluZGV4OiAwO1xuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogNzAlO1xuLy8gICAgIHRvcDogLTE4MHB4O1xuLy8gICB9XG4vLyAgIC5iZ0JvdHRvbSB7XG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZycpICFpbXBvcnRhbnQ7XG4vLyAgICAgei1pbmRleDogMDtcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogNzAlO1xuLy8gICAgIGJvdHRvbTogLTEwMHB4O1xuLy8gICAgIGxlZnQ6IC0xMDBweDtcbi8vICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4vLyAgIH1cbi8vIH1cbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4vLyAgIC5iZ1RvcCB7XG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZycpICFpbXBvcnRhbnQ7XG4vLyAgICAgei1pbmRleDogMDtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgd2lkdGg6IDEyNSU7XG4vLyAgICAgaGVpZ2h0OiA5MCU7XG4vLyAgICAgdG9wOiAtMTcwcHg7XG4vLyAgICAgbWFyZ2luLXRvcDogLTE2MHB4O1xuLy8gICB9XG4vLyAgIC5iZ0JvdHRvbSB7XG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZycpICFpbXBvcnRhbnQ7XG4vLyAgICAgei1pbmRleDogMDtcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogNzAlO1xuLy8gICAgIGJvdHRvbTogLTEwMHB4O1xuLy8gICAgIGxlZnQ6IC0xNTBweDtcbi8vICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG4vLyAgIH1cbi8vIH1cbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4vLyAgIC5iZ1RvcCB7XG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2NvbG9yZWRsb2dvLnBuZycpICFpbXBvcnRhbnQ7XG4vLyAgICAgei1pbmRleDogMDtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgd2lkdGg6IDEyNSU7XG4vLyAgICAgaGVpZ2h0OiA3MCU7XG4vLyAgICAgdG9wOiAtMTcwcHg7XG4vLyAgICAgbWFyZ2luLXRvcDogLTE2MHB4O1xuLy8gICB9XG4vLyB9XG4vLyAuYnRuTWVudSB7XG4vLyAgIC0tcGFkZGluZzogMHB4O1xuLy8gfVxuLy8gLmRpdkhlbGxvIHtcbi8vICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuLy8gfVxuLy8gLmxibEhlbGxvIHtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIG1hcmdpbjogMDtcbi8vICAgY29sb3I6IHdoaXRlO1xuLy8gICB0ZXh0LXNoYWRvdzogMXB4IDJweCBkYXJrc2xhdGVncmV5O1xuLy8gfVxuLy8gLmxibFdlbGNvbWUge1xuLy8gICBmb250LXNpemU6IDI0cHg7XG4vLyB9XG4vLyAubGJsTmFtZSB7XG4vLyAgIGZvbnQtc2l6ZTogMjZweDtcbi8vIH1cbi8vIC5sYmxUb2RheSB7XG4vLyAgIGZvbnQtc2l6ZTogMThweDtcbi8vIH1cbi8vIC5tZW51Q2xvY2tlZEluVG9nZ2xlIHtcbi8vICAgZmxvYXQ6IHJpZ2h0O1xuLy8gICBoZWlnaHQ6IDE4cHg7XG4vLyAgIHdpZHRoOiAxOHB4O1xuLy8gICBwYWRkaW5nLXRvcDogM3B4O1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgY29sb3I6ICM1MTRCNEI7XG4vLyB9XG4vLyAuY2FyZENsb2NrZWRJblNtYWxsIHtcbi8vICAgbWFyZ2luOiAxMHB4IDE1cHg7XG4vLyAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgIC0tYmFja2dyb3VuZDogI0E1QTVBNTtcbi8vIH1cbi8vIC5kaXZDbG9ja2VkSW5IZWFkZXIge1xuLy8gICBjb2xvcjogIzUxNEI0Qjtcbi8vICAgcGFkZGluZzogMTVweCAxNXB4IDEwcHggMTVweDtcbi8vICAgLS1iYWNrZ3JvdW5kOiAjQTVBNUE1O1xuLy8gfVxuLy8gLmljbkNsb2NrZWRJbiB7XG4vLyAgIGhlaWdodDogMjBweDtcbi8vICAgd2lkdGg6IDIwcHg7XG4vLyB9XG4vLyAubGJsQ2xvY2tlZEluU3RhdHVzIHtcbi8vICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xuLy8gfVxuLy8gLmxibENsb2NrZWRJbiB7XG4vLyAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyB9XG4vLyAubWVudVN1Ym9yZGluYXRlVG9nZ2xlIHtcbi8vICAgZmxvYXQ6IHJpZ2h0O1xuLy8gICBoZWlnaHQ6IDE4cHg7XG4vLyAgIHdpZHRoOiAxOHB4O1xuLy8gICBwYWRkaW5nLXRvcDogM3B4O1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgY29sb3I6ICM1MTRCNEI7XG4vLyB9XG4vLyAuY2FyZFN1Ym9yZGluYXRlU21hbGwge1xuLy8gICBtYXJnaW46IDEwcHggMTVweDtcbi8vICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuLy8gfVxuLy8gLmNhcmRTdWJvcmRpbmF0ZSB7XG4vLyAgIGNvbG9yOiAjNTE0QjRCO1xuLy8gICBmb250LXNpemU6IDEzcHg7XG4vLyAgIC0tYm9yZGVyLWNvbG9yOiAjNWY1ZjVmOGY7XG4vLyAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbi8vIH1cbi8vIC5jYXJkU3Vib3JkaW5hdGVDb250ZW50IHtcbi8vICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4vLyB9XG4vLyAuZGl2U3Vib3JkaW5hdGVIZWFkZXIge1xuLy8gICBjb2xvcjogIzUxNEI0Qjtcbi8vICAgcGFkZGluZzogMTVweCAxNXB4IDEwcHggMTVweDtcbi8vICAgLS1iYWNrZ3JvdW5kOiAjNWY1ZjVmOGY7XG4vLyB9XG4vLyAuaWNuU3Vib3JkaW5hdGUge1xuLy8gICBoZWlnaHQ6IDIwcHg7XG4vLyAgIHdpZHRoOiAyMHB4O1xuLy8gfVxuLy8gLmxibFN1Ym9yZGluYXRlIHtcbi8vICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xuLy8gfVxuLy8gLmRpdlBob3RvIHtcbi8vICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4vLyAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4vLyB9XG4vLyAubWVudUFsZXJ0c1RvZ2dsZSB7XG4vLyAgIGZsb2F0OiByaWdodDtcbi8vICAgaGVpZ2h0OiAxOHB4O1xuLy8gICB3aWR0aDogMThweDtcbi8vICAgcGFkZGluZy10b3A6IDNweDtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgIGNvbG9yOiAjNTE0QjRCO1xuLy8gfVxuLy8gLmNhcmRBbGVydHMge1xuLy8gICBmb250LXNpemU6IDEycHg7XG4vLyAgIGNvbG9yOiAjNTE0QjRCO1xuLy8gICAtLWJvcmRlci1jb2xvcjogIzVmNWY1ZjhmO1xuLy8gICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4vLyB9XG4vLyAuY2FyZEFsZXJ0c0NvbnRlbnQge1xuLy8gICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbi8vIH1cbi8vIC5jYXJkQWxlcnRzU21hbGwge1xuLy8gICBtYXJnaW46IDEwcHggMTVweDtcbi8vICAgZm9udC1zaXplOiAxMnB4O1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuLy8gfVxuLy8gLmRpdkFsZXJ0c0hlYWRlciB7XG4vLyAgIGNvbG9yOiAjNTE0QjRCO1xuLy8gICBwYWRkaW5nOiAxNXB4IDE1cHggMTBweCAxNXB4O1xuLy8gICAtLWJhY2tncm91bmQ6ICM1ZjVmNWY4Zjtcbi8vIH1cbi8vIC5kaXZBbGVydHNJdGVtIHtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICB3aWR0aDogMjhweDtcbi8vICAgdG9wOiAxcHg7XG4vLyAgIHJpZ2h0OiAxcHg7XG4vLyAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4vLyAgIG1hcmdpbi1yaWdodDogNXB4O1xuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyB9XG4vLyAuaXRlbUFsZXJ0IHtcbi8vICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuLy8gfVxuLy8gLmJkZ0FsZXJ0cyB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7XG4vLyAgIGNvbG9yOiB3aGl0ZTtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICB0b3A6IC02cHg7XG4vLyAgIHJpZ2h0OiAtMnB4O1xuLy8gICBmb250LXNpemU6IDlweDtcbi8vICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbi8vICAgcGFkZGluZzogNHB4IDZweDtcbi8vIH1cbi8vIC5pY25BbGVydHMge1xuLy8gICBoZWlnaHQ6IDIwcHg7XG4vLyAgIHdpZHRoOiAyMHB4O1xuLy8gfVxuLy8gLmxibEFsZXJ0cyB7XG4vLyAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbi8vIH1cbi8vIC5tZW51QW5ub3VuY2VtZW50VG9nZ2xlIHtcbi8vICAgZmxvYXQ6IHJpZ2h0O1xuLy8gICBoZWlnaHQ6IDE4cHg7XG4vLyAgIHdpZHRoOiAxOHB4O1xuLy8gICBwYWRkaW5nLXRvcDogM3B4O1xuLy8gICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgY29sb3I6ICM1MTRCNEI7XG4vLyB9XG4vLyAuY2FyZEFubm91bmNlbWVudFNtYWxsIHtcbi8vICAgbWFyZ2luOiAxMHB4IDE1cHg7XG4vLyAgIGZvbnQtc2l6ZTogMTJweDtcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgIC0tYmFja2dyb3VuZDogI0E1QTVBNTtcbi8vIH1cbi8vIC5jYXJkQW5ub3VuY2VtZW50IHtcbi8vICAgbWFyZ2luOiAxMHB4IDE1cHg7XG4vLyAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbi8vIH1cbi8vIC5kaXZBbm5vdW5jZW1lbnRIZWFkZXIge1xuLy8gICBjb2xvcjogIzUxNEI0Qjtcbi8vICAgcGFkZGluZzogMTVweCAxNXB4IDEwcHggMTVweDtcbi8vICAgLS1iYWNrZ3JvdW5kOiAjQTVBNUE1O1xuLy8gfVxuLy8gLmhlYWRBbm5vdW5jZSB7XG4vLyAgIGNvbG9yOiAjMmEyYTJhO1xuLy8gICBwYWRkaW5nOiAxMHB4IDEwcHggMCAxMHB4O1xuLy8gfVxuLy8gLmljbkFubm91bmNlIHtcbi8vICAgaGVpZ2h0OiAyMHB4O1xuLy8gICB3aWR0aDogMjBweDtcbi8vIH1cbi8vIC5sYmxBbm5vdW5jZSB7XG4vLyAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbi8vIH1cbi8vIC5jb250ZW50QW5ub3VuY2Uge1xuLy8gICBjb2xvcjogIzJhMmEyYTtcbi8vICAgcGFkZGluZzogMTVweDtcbi8vICAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG4vLyB9XG4vLyAubGJsVGl0bGUge1xuLy8gICBmb250LXNpemU6IDE2cHg7XG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gfVxuLy8gLmxibERldGFpbHMge1xuLy8gICBmb250LXNpemU6IDEycHg7XG4vLyB9XG4vLyAuYWxlcnRNZXNzYWdlIHtcbi8vICAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG4vLyB9XG4vLyBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZU91dCB7XG4vLyAgIDAlIHtcbi8vICAgICBvcGFjaXR5OiAxO1xuLy8gICB9XG4vLyAgIDkwJSB7XG4vLyAgICAgb3BhY2l0eTogMC4wMjtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgIH1cbi8vICAgOTklIHtcbi8vICAgICBvcGFjaXR5OiAwLjAxO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogNTAlO1xuLy8gICB9XG4vLyAgIDEwMCUge1xuLy8gICAgIG9wYWNpdHk6IDA7XG4vLyAgICAgd2lkdGg6IDA7XG4vLyAgICAgaGVpZ2h0OiAwO1xuLy8gICB9XG4vLyB9XG4vLyBAa2V5ZnJhbWVzIGZhZGVPdXQge1xuLy8gICAwJSB7XG4vLyAgICAgb3BhY2l0eTogMTtcbi8vICAgfVxuLy8gICA5MCUge1xuLy8gICAgIG9wYWNpdHk6IDAuMDI7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICB9XG4vLyAgIDk5JSB7XG4vLyAgICAgb3BhY2l0eTogMC4wMTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICBoZWlnaHQ6IDUwJTtcbi8vICAgfVxuLy8gICAxMDAlIHtcbi8vICAgICBvcGFjaXR5OiAwO1xuLy8gICAgIHdpZHRoOiAwO1xuLy8gICAgIGhlaWdodDogMDtcbi8vICAgfVxuLy8gfVxuLy8gQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4vLyAgIDAlIHtcbi8vICAgICBvcGFjaXR5OiAwO1xuLy8gICB9XG4vLyAgIDEwMCUge1xuLy8gICAgIG9wYWNpdHk6IDE7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICB9XG4vLyB9XG4vLyBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4vLyAgIDAlIHtcbi8vICAgICBvcGFjaXR5OiAwO1xuLy8gICB9XG4vLyAgIDEwMCUge1xuLy8gICAgIG9wYWNpdHk6IDE7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICB9XG4vLyB9Il19 */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");








var HomePage = /** @class */ (function () {
    function HomePage(loginService, menuCtrl, storage, alertController, router, httpApi) {
        this.loginService = loginService;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.alertController = alertController;
        this.router = router;
        this.httpApi = httpApi;
        this.welcomeArr = ["Hi,", "Hello,", "Welcome,", "Have a nice day,"];
        this.randomArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
        this.loadingTimeIn = false;
        this.loadingAlert = false;
        this.loadingAnnouncement = false;
        this.loadingEvent = false;
        this.loadingSubordinate = false;
        this.loadingDone = false;
        this.noError = true;
        this.nickname = "ツ";
        this.classTimeIn = "btnTimeIn btnTimeInDefault";
        this.lblClockedInStatus = "LOADING CLOCK IN...";
        this.lblSubordinatesStatus = "LOADING SUBORDINATES...";
        this.lblAlertsStatus = "LOADING ALERTS...";
        this.lblAnnouncementsStatus = "LOADING ANNOUNCEMENTS...";
        this.lblEventsStatus = "LOADING EVENTS...";
        this.clickedClockedIn = true;
        this.clickedAlerts = true;
        this.clickedAnnounce = false;
        this.clickedSubordinate = false;
        this.clickedGabcPreview = false;
        this.clickedGabcMission = false;
        this.clickedGabcCreed = false;
        this.subIsEmpty = false;
        this.slideOptsEvents = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: {
                disableOnInteraction: false
            },
            setWrapperSize: true,
            loop: true
        };
        this.slideOptsMany = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: {
                disableOnInteraction: false
            },
            loop: true,
            setWrapperSize: true
        };
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.noError = true;
        this.loadingTimeIn = false;
        this.loadingAlert = false;
        this.loadingAnnouncement = false;
        this.loadingEvent = false;
        this.loadingSubordinate = false;
        this.loadingDone = false;
        if (new Date().getHours() <= 12)
            this.welcomeArr.push("Good Morning,");
        else if (new Date().getHours() >= 13 && new Date().getHours() <= 17)
            this.welcomeArr.push("Good Afternoon,");
        else
            this.welcomeArr.push("Good Evening,");
        this.welcome = this.welcomeArr[Math.floor(Math.random() * this.welcomeArr.length)].toString();
        this.lblClockedInStatus = "LOADING CLOCK IN...";
        this.lblSubordinatesStatus = "LOADING SUBORDINATES...";
        this.lblAlertsStatus = "LOADING ALERTS...";
        this.lblAnnouncementsStatus = "LOADING ANNOUNCEMENTS...";
        var CurrentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        var CurrentDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.today = CurrentMonth[new Date().getMonth()] + " " + new Date().getDate();
        this.day = CurrentDay[new Date().getDay()] + ", " + this.today;
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_ISFIRSTTIME"]).then(function (val) {
            console.log(val);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (val) {
                console.log(val);
                if (!val || val == null) {
                    console.log("Set Default Server Settings");
                    _this.setDefaultServerSettings();
                }
            });
        });
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_ISFIRSTTIME"], false);
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_EMPDETAILS"]).then(function (val) {
            console.log(val);
            _this.name = val['0']['FULLNAME'];
            _this.firstname = _this.trimFirstName(val['0']['FULLNAME'].split(",")[1]);
            _this.nickname = val['0']['NICKNAME'];
            _this.department = val['0']['DEPARTMENT'];
            _this.isManager = val['0']['ISMANAGER'];
        });
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_EMPID"]).then(function (val2) {
            _this.empID = val2;
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SESSION"]).then(function (val) {
                _this.postRequest = {
                    SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_RECORD_ID"]],
                    SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SECURITY_STAMP"]],
                    Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_TOKEN"]],
                    AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["APP_PLATFORM"],
                    AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["VERSION"],
                    UserID: _this.empID
                };
                _this.getDTR();
                _this.getSubordinatesLeaves();
                _this.getAlerts();
                _this.getAnnouncement();
                _this.getEvents();
                // this.lblEventsStatus = "NO EVENT";
                //this.loadingTimeIn = true;
                //this.lblClockedInStatus = "CLOCKED IN";
                //this.clockedIn = "09:46 AM"
            });
        });
    };
    HomePage.prototype.setDefaultServerSettings = function () {
        var server_settings = {
            is_server_domain: true,
            is_server_default: false,
            is_server_dev: false,
            is_server_set_url: false,
            server_url: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["API_ENDPOINT_DOMAIN"],
        };
        console.log(server_settings);
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"], server_settings).then(function (result) {
            console.log('Default Server Settings saved');
        }).catch(function (e) {
            console.log('Error saving default settings');
        });
    };
    HomePage.prototype.trimFirstName = function (fname) {
        var capFirstname;
        var splitFname = fname.split(" ");
        for (var i = 0; i <= splitFname.length; i++) {
            if (splitFname[i] == "") {
                splitFname.splice(i, 1);
            }
        }
        if (splitFname.length >= 2) {
            capFirstname = splitFname[0] + " " + splitFname[1];
        }
        else {
            capFirstname = fname;
        }
        return capFirstname;
    };
    HomePage.prototype.getDTR = function () {
        var _this = this;
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (value) {
            var uri = value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"]] + "/api/HRISHomePage/GetClockIn";
            var url = encodeURI(uri);
            _this.httpApi.post(url, _this.postRequest, {})
                .then(function (data) {
                if (data.data == null || data.data == undefined) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingTimeIn = true;
                    return;
                }
                var jsonData = JSON.parse(data.data);
                if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_SUCCESS"]) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingTimeIn = true;
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
                    _this.loadingTimeIn = true;
                    return;
                }
                console.log(jsonData['Value']);
                if (jsonData['Value'].length != 0) {
                    _this.lblClockedInStatus = "YOU CLOCKED IN TODAY AT ";
                    _this.clockedIn = jsonData['Value']['0']['am_in'];
                    var timein = _this.clockedIn.substring(0, _this.clockedIn.length - 2).split(':');
                    var timeinAM = _this.clockedIn.substring(_this.clockedIn.length - 2, _this.clockedIn.length);
                    console.log(timein);
                    console.log(timeinAM);
                    if (timeinAM == "AM" && (parseInt(timein[0]) <= 7 || (parseInt(timein[0]) == 8 && parseInt(timein[1]) == 0))) {
                        _this.classTimeIn = "btnTimeIn btnTimeIn8";
                    }
                    else if (timeinAM == "AM" && ((parseInt(timein[0]) <= 8 && parseInt(timein[1]) < 60) || (parseInt(timein[0]) == 9 && parseInt(timein[1]) == 0))) {
                        _this.classTimeIn = "btnTimeIn btnTimeIn9";
                    }
                    else if (timeinAM == "AM" && ((parseInt(timein[0]) <= 9 && parseInt(timein[1]) < 60) || (parseInt(timein[0]) == 10 && parseInt(timein[1]) == 0))) {
                        _this.classTimeIn = "btnTimeIn btnTimeIn10";
                    }
                    else if (timeinAM == "AM" && ((parseInt(timein[0]) == 10 && parseInt(timein[1]) > 0) || (parseInt(timein[0]) == 11))) {
                        _this.classTimeIn = "btnTimeIn btnTimeInLate";
                    }
                    else {
                        _this.classTimeIn = "btnTimeIn btnTimeInDefault";
                    }
                }
                else {
                    _this.lblClockedInStatus = "NO CLOCKED IN";
                }
                _this.noError = true;
                _this.loadingTimeIn = true;
            })
                .catch(function (error) {
                _this.lblClockedInStatus = "NO CLOCKED IN";
                _this.noError = false;
                _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                _this.loadingTimeIn = true;
            });
        });
    };
    HomePage.prototype.getAlerts = function () {
        var _this = this;
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (value) {
            _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"]] + "/api/HRISHomePage/GetAlerts", _this.postRequest, {})
                .then(function (data) {
                if (data.data == null || data.data == undefined) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingAlert = true;
                    return;
                }
                var jsonData = JSON.parse(data.data);
                console.log(jsonData);
                if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_SUCCESS"]) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingAlert = true;
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
                    _this.loadingAlert = true;
                    return;
                }
                _this.alerts = jsonData['Value'];
                console.log(_this.alerts);
                _this.alerts.forEach(function (item) {
                    if (item["POSITION"] == "4") {
                        item["Icon"] = "/assets/icon/ic_al_lv.png";
                        item["Mode"] = "md";
                        item["RouterLink"] = "/main/leavecredits";
                        item["Name"] = "Leave Request";
                        item["Class"] = "alertLeave";
                    }
                    else if (item["POSITION"] == "5") {
                        item["Icon"] = "/assets/icon/ic_al_lvap.png";
                        item["Mode"] = "md";
                        item["RouterLink"] = "/main/leaveapproval";
                        item["Name"] = "Leave Approval";
                        item["Class"] = "alertLeaveApproval";
                    }
                    else if (item["POSITION"] == "6") {
                        item["Icon"] = "/assets/icon/ic_al_aa.png";
                        item["Mode"] = "md";
                        item["RouterLink"] = "/main/advisory";
                        item["Name"] = "Advisory Request";
                        item["Class"] = "alertAdvisory";
                    }
                    else if (item["POSITION"] == "7") {
                        item["Icon"] = "/assets/icon/ic_al_aaap.png";
                        item["Mode"] = "ios";
                        item["RouterLink"] = "/main/advisoryapproval";
                        item["Name"] = "Advisory Approval";
                        item["Class"] = "alertAdvisoryApproval";
                    }
                    else if (item["POSITION"] == "16") {
                        item["Icon"] = "/assets/icon/ic_alert_wfh_ap.png";
                        item["Mode"] = "ios";
                        item["RouterLink"] = "/main/wfhapproval";
                        item["Name"] = "WFH Approval";
                        item["Class"] = "alertWFHApproval";
                    }
                    else if (item["POSITION"] == "17") {
                        item["Icon"] = "/assets/icon/ic_alert_wfh.png";
                        item["Mode"] = "md";
                        item["RouterLink"] = "/main/workfromhome";
                        item["Name"] = "WFH Request";
                        item["Class"] = "alertWFH";
                    }
                    else if (item["POSITION"] == "8") {
                        item["Icon"] = "/assets/icon/ic_al_ot.png";
                        item["Mode"] = "md";
                        item["RouterLink"] = "/main/overtime";
                        item["Name"] = "Overtime Request";
                        item["Class"] = "alertOvertime";
                    }
                    else if (item["POSITION"] == "9") {
                        item["Icon"] = "/assets/icon/ic_al_otap.png";
                        item["Mode"] = "md";
                        item["RouterLink"] = "/main/overtimeapproval";
                        item["Name"] = "Overtime Approval";
                        item["Class"] = "alertOvertimeApproval";
                    }
                });
                console.log(_this.alerts);
                if (_this.alerts == undefined || _this.alerts == null)
                    _this.lblAlertsStatus = "NO ALERTS";
                else {
                    if (_this.alerts.length == 0)
                        _this.lblAlertsStatus = "NO ALERTS";
                    else
                        _this.lblAlertsStatus = "ALERTS";
                }
                _this.noError = true;
                _this.loadingAlert = true;
            })
                .catch(function (error) {
                _this.lblAlertsStatus = "NO ALERTS";
                _this.noError = false;
                _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                _this.loadingAlert = true;
            });
        });
    };
    HomePage.prototype.getAnnouncement = function () {
        var _this = this;
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (value) {
            _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"]] + "/api/HRISHomePage/GetAnnouncement", _this.postRequest, {})
                .then(function (data) {
                if (data.data == null || data.data == undefined) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingAnnouncement = true;
                    return;
                }
                var jsonData = JSON.parse(data.data);
                if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_SUCCESS"]) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingAnnouncement = true;
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
                    _this.loadingAnnouncement = true;
                    return;
                }
                if (jsonData['Value'].length > 0)
                    _this.lblAnnouncementsStatus = "ANNOUNCEMENTS";
                else
                    _this.lblAnnouncementsStatus = "NO ANNOUNCEMENTS";
                _this.announcement = jsonData['Value'];
                _this.announcement = _this.announcement.filter(function (item) { return _this.trimText(item["Title"]) != "Our Purpose" && _this.trimText(item["Title"]) != "The GABC Creed"; });
                _this.announcement.forEach(function (item) {
                    if (_this.randomArr.length <= 1) {
                        _this.randomArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
                    }
                    var num = Math.floor(Math.random() * _this.randomArr.length);
                    item["Number"] = _this.randomArr[num];
                    _this.randomArr.splice(num, 1);
                });
                console.log(_this.announcement);
                _this.noError = true;
                _this.loadingDone = true;
                _this.loadingAnnouncement = true;
                _this.clickedAnnounce = !_this.clickedAnnounce;
            })
                .catch(function (error) {
                _this.lblAnnouncementsStatus = "ANNOUNCEMENTS";
                _this.noError = false;
                _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                _this.loadingDone = true;
                _this.loadingAnnouncement = true;
            });
        });
    };
    HomePage.prototype.getSubordinatesLeaves = function () {
        var _this = this;
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (value) {
            _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"]] + "/api/HRISHomePage/GetSubordinatesOnLeave", _this.postRequest, {})
                .then(function (data) {
                if (data.data == null || data.data == undefined) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingSubordinate = true;
                    return;
                }
                var jsonData = JSON.parse(data.data);
                console.log(jsonData);
                if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_SUCCESS"]) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingSubordinate = true;
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
                    _this.loadingSubordinate = true;
                    return;
                }
                _this.noError = true;
                _this.subOnLeave = jsonData['Value'];
                _this.loadingDone = true;
                _this.loadingSubordinate = true;
                _this.lblSubordinatesStatus = _this.subOnLeave.length + " SUBORDINATES ON LEAVE TODAY";
                _this.subIsEmpty = _this.subOnLeave.length < 1;
            })
                .catch(function (error) {
                console.log(error);
                _this.subIsEmpty = true;
                _this.lblSubordinatesStatus = "0 SUBORDINATES ON LEAVE TODAY";
                _this.noError = false;
                _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                _this.loadingDone = true;
                _this.loadingSubordinate = true;
            });
        });
    };
    HomePage.prototype.getEvents = function () {
        var _this = this;
        this.postRequest["IsActive"] = 1;
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["KEY_SERVER_SETTINGS"]).then(function (value) {
            _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["SERVER_URL"]] + "/api/event/GetEvents", _this.postRequest, {})
                .then(function (data) {
                if (data.data == null || data.data == undefined) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.lblEventsStatus = "NO EVENT";
                    _this.loadingDone = true;
                    _this.loadingEvent = true;
                    return;
                }
                var jsonData = JSON.parse(data.data);
                console.log(jsonData);
                if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_SUCCESS"]) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                    _this.loadingEvent = true;
                    _this.lblEventsStatus = "NO EVENT";
                    return;
                }
                if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["POST_YES"]) {
                    switch (jsonData['Message']) {
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_ERROR"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["OUTDATED_MESSAGE"]);
                            _this.loadingEvent = true;
                            _this.lblEventsStatus = "NO EVENT";
                            return;
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_OTHER_DEVICE"]);
                            _this.loadingEvent = true;
                            _this.lblEventsStatus = "NO EVENT";
                            return;
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_EXPIRED"]);
                            _this.loadingEvent = true;
                            _this.lblEventsStatus = "NO EVENT";
                            return;
                        case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED"]:
                            _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["ERROR_MESSAGE_REQUIRED"]);
                            _this.loadingEvent = true;
                            _this.lblEventsStatus = "NO EVENT";
                            return;
                    }
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                    _this.loadingEvent = true;
                    _this.lblEventsStatus = "NO EVENT";
                    return;
                }
                if (jsonData['Value']['tblEventList'] == null || jsonData['Value']['tblEventList'] == undefined) {
                    _this.noError = false;
                    _this.errorMessage = "EMPTY";
                    _this.lblEventsStatus = "NO EVENT";
                    _this.loadingDone = true;
                    _this.loadingEvent = true;
                    return;
                }
                else if (jsonData['Value']['tblEventList'].length <= 0) {
                    _this.noError = false;
                    _this.errorMessage = "NO EVENTS";
                    _this.lblEventsStatus = "NO EVENT";
                    _this.loadingDone = true;
                    _this.loadingEvent = true;
                    return;
                }
                _this.noError = true;
                _this.events = jsonData['Value']['tblEventList'];
                if (_this.events.length > 1) {
                    _this.slideOptsEvents = {
                        initialSlide: 0,
                        slidesPerView: 1,
                        autoplay: {
                            disableOnInteraction: false
                        },
                        setWrapperSize: true,
                        loop: true
                    };
                }
                else {
                    _this.slideOptsEvents = {
                        initialSlide: 0,
                        slidesPerView: 1,
                        autoplay: {
                            disableOnInteraction: false
                        },
                        setWrapperSize: true,
                        loop: false
                    };
                }
                _this.loadingDone = true;
                _this.loadingEvent = true;
                _this.lblEventsStatus = "UPCOMING EVENTS";
            })
                .catch(function (error) {
                _this.noError = false;
                _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_6__["MESSAGE_CON_ERROR"];
                _this.loadingDone = true;
                _this.lblEventsStatus = "NO EVENT";
                _this.loadingEvent = true;
            });
        });
    };
    HomePage.prototype.showDialog = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: message,
                            cssClass: "contentAnnounce",
                            buttons: [{
                                    text: 'Okay',
                                    handler: function () {
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
    HomePage.prototype.toTitleCase = function (str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    HomePage.prototype.removeExtraSpace = function (str) {
        return str.replace(/(\r\n|\n|\r)/gm, "");
    };
    HomePage.prototype.toggleClockedInSection = function () {
        this.clickedClockedIn = !this.clickedClockedIn;
    };
    HomePage.prototype.toggleAlertsSection = function () {
        this.clickedAlerts = !this.clickedAlerts;
    };
    HomePage.prototype.toggleAnnounceSection = function () {
        this.clickedAnnounce = !this.clickedAnnounce;
    };
    HomePage.prototype.toggleSubordinateSection = function () {
        this.clickedSubordinate = !this.clickedSubordinate;
    };
    HomePage.prototype.toggleGabcPreview = function () {
        this.clickedGabcPreview = !this.clickedGabcPreview;
    };
    HomePage.prototype.toggleGabcMission = function () {
        this.clickedGabcMission = !this.clickedGabcMission;
    };
    HomePage.prototype.toggleGabcCreed = function () {
        this.clickedGabcCreed = !this.clickedGabcCreed;
    };
    HomePage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    HomePage.prototype.showExitDialog = function () {
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
    // refresh() {
    //   this.ngOnInit();
    // }
    HomePage.prototype.ionViewWillLeave = function () {
        this.showExitDialog();
    };
    HomePage.prototype.trimText = function (text) {
        return text.trim();
    };
    HomePage.prototype.toggleCard = function () {
        this.router.navigate(['/eventsdetails', 'natcon']);
    };
    HomePage.prototype.togglePersonalInfo = function () {
        this.router.navigate(['/main/personalinformation']);
    };
    HomePage.prototype.toggleCalendar = function () {
        this.router.navigate(['/main/calendar']);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map