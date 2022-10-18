(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/pages/about/about.page.ts");







var routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]
    }
];
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n<ion-content>\n    <div class=\"bgTop\">\n    </div>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button class=btnMenu ion-button icon-only menuToggle slot=\"start\" (click)=\"toggleMenu()\">\n                <ion-icon color=\"light\" name=\"menu\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n    <img class=\"imgGEARicon\" src=\"/assets/img/icon.png\" alt=\"\">\n    <img class=\"imgGEARtext\" src=\"/assets/img/gear_name.png\" alt=\"\">\n    <ion-label class=\"lblVersion\">\n        {{CurrentVersion}}\n    </ion-label>\n    <ion-card class=\"cardAboutSmall\">\n        <ion-card-header class=\"divAboutHeader\" (click)=\"toggleAboutSection()\">\n            <ion-icon class=\"icnAbout\" name=\"information-circle\"></ion-icon>\n            <ion-label class=\"lblTitleCard\">\n                {{lblAboutStatus}}</ion-label>\n            <ion-icon class=\"menuAboutToggle\" *ngIf=\"noError\" name=\"{{clickedAbout ? 'arrow-dropup': 'arrow-dropdown'}}\">\n            </ion-icon>\n        </ion-card-header>\n        <ion-progress-bar type=\"indeterminate\" *ngIf=\"lblAboutStatus == 'LOADING ABOUT...'\">\n        </ion-progress-bar>\n        <ion-card-content class='cardOnDesc' *ngIf=\"clickedAbout\">\n            <p class=\"lblDetails\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GEAR – GOLDEN ABC Electronic Access and Resource is a tool for all GABC employees that provides a more interactive and efficient way of accessing employee benefits and services. In addition, this is focused\n                on providing better service to the employees in line with the organization’s digital transformation efforts.</p>\n            <br>\n            <p class=\"lblDetails\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GEAR currently allows all GABC employees to view and file their leaves and attendance advisories and view their daily time record via their mobile phones. In addition, all GEAR users will now be able to\n                view their epayslips, loans and employee purchases.\n            </p>\n            <br>\n            <p class=\"lblDetails lblViewOnboarding\" (click)=\"toggleViewOnboarding()\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; View Onboarding\n        </ion-card-content>\n    </ion-card>\n    <ion-card class=\"cardWhatsNextSmall\">\n        <ion-card-header class=\"divWhatsNextHeader\" (click)=\"toggleWhatsNextSection()\">\n            <ion-icon class=\"icnWhatsNext\" name=\"megaphone\"></ion-icon>\n            <ion-label class=\"lblTitleCard\">\n                {{lblWhatsNextStatus}}</ion-label>\n            <ion-icon class=\"menuWhatsNextToggle\" *ngIf=\"noError\" name=\"{{clickedWhatsNext ? 'arrow-dropup': 'arrow-dropdown'}}\">\n            </ion-icon>\n        </ion-card-header>\n        <ion-progress-bar type=\"indeterminate\" *ngIf=\"lblWhatsNextStatus == 'LOADING WHATS NEXT...'\">\n        </ion-progress-bar>\n        <ion-card-content class='cardOnDesc' *ngIf=\"clickedWhatsNext\">\n            <div>\n                <p class=\"lblDetails\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GEAR will continuously be updated to completely mirror its web version through several phases.\n                </p>\n                <br>\n                <p class=\"lblDetails\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; GEAR is now on its second phase with its new additional features. The commitment to continuously enhance its features is in full swing in the next phases. Exciting changes ahead for GEAR and GABC.</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card class=\"cardPrivacyPolicy\">\n        <ion-card-header class=\"divPrivacyPolicy\" (click)=\"togglePrivacyPolicy()\">\n            <ion-icon class=\"icnPrivacyPolicy\" name=\"list-box\"></ion-icon>\n            <ion-label class=\"lblTitleCard\">\n                {{lblPrivacyPolicyStatus}}</ion-label>\n            <ion-icon class=\"menuPrivacyPolicy\" *ngIf=\"noError\" name=\"{{clickedPrivacyPolicy ? 'arrow-dropup': 'arrow-dropdown'}}\">\n            </ion-icon>\n        </ion-card-header>\n        <ion-progress-bar type=\"indeterminate\" *ngIf=\"lblPrivacyPolicy == 'LOADING PRIVACY STATEMENT...'\">\n        </ion-progress-bar>\n        <ion-card-content class='cardOnDesc' *ngIf=\"clickedPrivacyPolicy\">\n            <div>\n                <p class=\"lblDetails\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This mobile app may be accessed and used only for official business purposes by authorized Con-way personnel. Unauthorized access or use of this mobile app may subject violators to disciplinary, and/or\n                    civil action or criminal prosecution.\n                </p>\n                <br>\n                <p class=\"lblDetails\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Any information on this mobile app may be intercepted, recorded, read, copied, and disclosed by and to authorized personnel for official purposes, including criminal investigations.</p>\n            </div>\n        </ion-card-content>\n    </ion-card>\n\n    <ion-card class=\"cardFeedbackSmall\">\n        <ion-card-header class=\"divFeedbackHeader\" (click)=\"toggleFeedbackSection()\">\n            <ion-icon class=\"icnFeedback\" name=\"chatbubbles\"></ion-icon>\n            <ion-label class=\"lblTitleCard\">\n                {{lblFeedbackStatus}}</ion-label>\n            <ion-icon class=\"menuFeedbackToggle\" *ngIf=\"noError\" name=\"{{clickedFeedback ? 'arrow-dropup': 'arrow-dropdown'}}\">\n            </ion-icon>\n        </ion-card-header>\n        <ion-progress-bar type=\"indeterminate\" *ngIf=\"lblFeedbackStatus == 'LOADING FEEDBACK...'\">\n        </ion-progress-bar>\n        <ion-card-content class='cardOnDesc' *ngIf=\"clickedFeedback\">\n            <ion-list>\n                <ion-item lines=\"none\">\n                    <ion-textarea class=\"txtFeedback\" id=\"rounded\" rows=\"1\" maxlength=\"200\" (ionChange)=\"feedbackLength()\" [(ngModel)]=\"feedbackText\"></ion-textarea>\n                </ion-item>\n                <ion-item lines=\"none\">\n                    <!-- <ion-label class=\"lblfeedbackLength\">{{currentFeedbackLength}}/200</ion-label> -->\n                    <ion-label></ion-label>\n                    <ion-button class=\"btnSubmit\" size=\"small\" (click)=\"feedbackSubmit()\">SUBMIT</ion-button>\n                </ion-item>\n            </ion-list>\n        </ion-card-content>\n    </ion-card>\n    <div *ngIf=\"noError; else error\">\n    </div>\n</ion-content>\n<ng-template #error>\n    <ion-card lines=\"none\" class=\"errorbox2\">\n        <ion-avatar class=\"center\">\n            <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n        <span class=\"errorMessage\">{{errorMessage}}</span>\n        <br />\n        <span class=\"errorMessage\">\n      <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n      <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n        <ion-icon color=\"light\" name=\"home\"></ion-icon>\n      </ion-button>\n    </span>\n    </ion-card>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/about/about.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #F3F3F3; }\n\nion-toolbar {\n  --background: transparent;\n  --min-height: 35px;\n  --padding: 0px; }\n\nion-title {\n  color: white;\n  margin-left: 10px;\n  font-size: 20px;\n  text-shadow: 1px 1px 1px #0000005c; }\n\nion-card-content {\n  padding: 0px 0px 10px 0px;\n  -webkit-animation: fadeIn 0.3s;\n  animation: fadeIn 0.3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both; }\n\n.bgTop {\n  background-image: url('homepageHeader.png') !important;\n  z-index: 0;\n  background-size: cover;\n  position: absolute;\n  height: 370px;\n  width: 100%; }\n\n.imgGEARicon {\n  height: 225px;\n  position: relative;\n  display: block;\n  margin: -20px auto;\n  z-index: 10; }\n\n.imgGEARtext {\n  height: 70px;\n  position: relative;\n  display: block;\n  margin: 25px auto;\n  z-index: 10; }\n\n.lblVersion {\n  text-align: center;\n  display: block;\n  padding-top: 5px;\n  color: #514B4B;\n  font-size: 12px;\n  font-weight: bold;\n  margin-top: 10px; }\n\n.cardOnDesc {\n  color: #2a2a2a;\n  padding: 0px 15px 15px;\n  white-space: pre-line !important; }\n\n.cardOffAbout {\n  -webkit-animation: fadeOut 0.3s;\n  animation: fadeOut 0.3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both; }\n\n.cardOffWhatsNext {\n  -webkit-animation: fadeOut 0.3s;\n  animation: fadeOut 0.3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both; }\n\n.cardOffPrivacyPolicy {\n  -webkit-animation: fadeOut 0.3s;\n  animation: fadeOut 0.3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both; }\n\n.cardOffFeedback {\n  -webkit-animation: fadeOut 0.3s;\n  animation: fadeOut 0.3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both; }\n\n#rounded {\n  border: 1px solid gray;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important; }\n\n.btnMenu {\n  --padding: 0px;\n  margin-top: 30px; }\n\n.menuAboutToggle {\n  float: right;\n  height: 18px;\n  width: 18px;\n  padding-top: 3px;\n  font-weight: bold;\n  color: #514B4B; }\n\n.cardAboutSmall {\n  margin: 10px 15px;\n  font-size: 12px;\n  font-weight: bold;\n  --background: rgba(255, 255, 255, 1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.divAboutHeader {\n  color: #514B4B;\n  --background: rgba(255, 255, 255, 1); }\n\n.headAbout {\n  color: #2a2a2a;\n  padding: 10px 10px 0 10px; }\n\n.icnAbout {\n  height: 20px;\n  width: 20px; }\n\n.lblTitleCard {\n  vertical-align: super;\n  font-size: 13px;\n  margin-left: 5px;\n  font-family: \"RobotoRegular\"; }\n\n.menuWhatsNextToggle {\n  float: right;\n  height: 18px;\n  width: 18px;\n  padding-top: 3px;\n  font-weight: bold;\n  color: #514B4B; }\n\n.cardWhatsNextSmall {\n  margin: 10px 15px;\n  font-size: 12px;\n  font-weight: bold;\n  --background: rgba(255, 255, 255, 1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.divWhatsNextHeader {\n  color: #514B4B;\n  --background: rgba(255, 255, 255, 1); }\n\n.headWhatsNext {\n  color: #2a2a2a;\n  padding: 10px 10px 0 10px; }\n\n.icnWhatsNext {\n  height: 20px;\n  width: 20px; }\n\n.lblWhatsNext {\n  vertical-align: super; }\n\n.cardPrivacyPolicy {\n  margin: 10px 15px;\n  font-size: 12px;\n  font-weight: bold;\n  --background: rgba(255, 255, 255, 1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.divPrivacyPolicy {\n  color: #514B4B;\n  --background: rgba(255, 255, 255, 1); }\n\n.icnPrivacyPolicy {\n  height: 20px;\n  width: 20px; }\n\n.lblPrivacyPolicy {\n  vertical-align: super; }\n\n.menuPrivacyPolicy {\n  float: right;\n  height: 18px;\n  width: 18px;\n  padding-top: 3px;\n  font-weight: bold;\n  color: #514B4B; }\n\n.menuFeedbackToggle {\n  float: right;\n  height: 18px;\n  width: 18px;\n  padding-top: 3px;\n  font-weight: bold;\n  color: #514B4B; }\n\n.cardFeedbackSmall {\n  margin: 10px 15px;\n  font-size: 12px;\n  font-weight: bold;\n  --background: rgba(255, 255, 255, 1);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.divFeedbackHeader {\n  color: #514B4B;\n  --background: rgba(255, 255, 255, 1); }\n\n.headFeedback {\n  color: #2a2a2a;\n  padding: 10px 10px 0 10px; }\n\n.icnFeedback {\n  height: 20px;\n  width: 20px; }\n\n.lblFeedback {\n  vertical-align: super; }\n\n.txtFeedback {\n  font-size: 12px; }\n\n.lblfeedbackLength {\n  margin-top: 0px !important;\n  font-size: 10px; }\n\n.btnSubmit {\n  --background: linear-gradient(to bottom, #D3A828, #E0861F);\n  height: 35px;\n  width: 100px;\n  font-size: 11px;\n  margin: 10px 0px 0px;\n  float: right;\n  font-family: \"RobotoRegular\"; }\n\n.EntityName {\n  font-size: 11px;\n  color: #676767; }\n\n.lblTitle {\n  font-size: 16px;\n  font-weight: bold; }\n\n.lblDetails {\n  font-size: 12px;\n  white-space: pre-line !important; }\n\n.lblViewOnboarding {\n  color: #388AFF; }\n\n.alertMessage {\n  white-space: pre-line !important; }\n\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  90% {\n    opacity: 0.02;\n    width: 100%;\n    height: 100%; }\n  99% {\n    opacity: 0.01;\n    width: 100%;\n    height: 50%; }\n  100% {\n    opacity: 0;\n    width: 0;\n    height: 0; } }\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  90% {\n    opacity: 0.02;\n    width: 100%;\n    height: 100%; }\n  99% {\n    opacity: 0.01;\n    width: 100%;\n    height: 50%; }\n  100% {\n    opacity: 0;\n    width: 0;\n    height: 0; } }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1;\n    width: 100%;\n    height: 100%; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1;\n    width: 100%;\n    height: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMtZ2FiYy9Eb2N1bWVudHMvR0VBUi9HRUFSX2lPUy9zcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhLEVBQUE7O0FBR2pCO0VBQ0kseUJBQWE7RUFDYixrQkFBYTtFQUNiLGNBQVUsRUFBQTs7QUFHZDtFQUNJLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxzREFBMEU7RUFDMUUsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYztFQUNkLHNCQUFzQjtFQUN0QixnQ0FBZ0MsRUFBQTs7QUFHcEM7RUFDSSwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSwrQkFBK0I7RUFDL0IsdUJBQXVCO0VBQ3ZCLGlDQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSwrQkFBK0I7RUFDL0IsdUJBQXVCO0VB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QUE7RUFFZjtJQUNJLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUyxFQUFBLEVBQUE7O0FBSWpCO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFFZDtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWSxFQUFBLEVBQUE7O0FBSXBCO0VBQ0k7SUFDSSxVQUFVLEVBQUE7RUFFZDtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjNGM0YzO1xufVxuXG5pb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLW1pbi1oZWlnaHQ6IDM1cHg7XG4gICAgLS1wYWRkaW5nOiAwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAwMDAwMDVjO1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMHB4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMC4zcztcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjNzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5iZ1RvcCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2hvbWVwYWdlSGVhZGVyLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogMDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDM3MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1nR0VBUmljb24ge1xuICAgIGhlaWdodDogMjI1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogLTIwcHggYXV0bztcbiAgICB6LWluZGV4OiAxMDtcbn1cblxuLmltZ0dFQVJ0ZXh0IHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMjVweCBhdXRvO1xuICAgIHotaW5kZXg6IDEwO1xufVxuXG4ubGJsVmVyc2lvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgY29sb3I6ICM1MTRCNEI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jYXJkT25EZXNjIHtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBwYWRkaW5nOiAwcHggMTVweCAxNXB4O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZE9mZkFib3V0IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZU91dCAwLjNzO1xuICAgIGFuaW1hdGlvbjogZmFkZU91dCAwLjNzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5jYXJkT2ZmV2hhdHNOZXh0IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZU91dCAwLjNzO1xuICAgIGFuaW1hdGlvbjogZmFkZU91dCAwLjNzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5jYXJkT2ZmUHJpdmFjeVBvbGljeSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVPdXQgMC4zcztcbiAgICBhbmltYXRpb246IGZhZGVPdXQgMC4zcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG4uY2FyZE9mZkZlZWRiYWNrIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZU91dCAwLjNzO1xuICAgIGFuaW1hdGlvbjogZmFkZU91dCAwLjNzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbiNyb3VuZGVkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLmJ0bk1lbnUge1xuICAgIC0tcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5tZW51QWJvdXRUb2dnbGUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzUxNEI0Qjtcbn1cblxuLmNhcmRBYm91dFNtYWxsIHtcbiAgICBtYXJnaW46IDEwcHggMTVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5kaXZBYm91dEhlYWRlciB7XG4gICAgY29sb3I6ICM1MTRCNEI7XG4gICAgLy8gcGFkZGluZzogMTVweCAxNXB4IDBweCAxNXB4O1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbn1cblxuLmhlYWRBYm91dCB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcbn1cblxuLmljbkFib3V0IHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi5sYmxUaXRsZUNhcmQge1xuICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5tZW51V2hhdHNOZXh0VG9nZ2xlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM1MTRCNEI7XG59XG5cbi5jYXJkV2hhdHNOZXh0U21hbGwge1xuICAgIG1hcmdpbjogMTBweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmRpdldoYXRzTmV4dEhlYWRlciB7XG4gICAgY29sb3I6ICM1MTRCNEI7XG4gICAgLy8gcGFkZGluZzogMTVweCAxNXB4IDBweCAxNXB4O1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbn1cblxuLmhlYWRXaGF0c05leHQge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwIDEwcHg7XG59XG5cbi5pY25XaGF0c05leHQge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbn1cblxuLmxibFdoYXRzTmV4dCB7XG4gICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xufVxuXG4uY2FyZFByaXZhY3lQb2xpY3kge1xuICAgIG1hcmdpbjogMTBweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmRpdlByaXZhY3lQb2xpY3kge1xuICAgIGNvbG9yOiAjNTE0QjRCO1xuICAgIC8vIHBhZGRpbmc6IDE1cHggMTVweCAwcHggMTVweDtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG59XG5cbi5pY25Qcml2YWN5UG9saWN5IHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cbi5sYmxQcml2YWN5UG9saWN5IHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG59XG5cbi5tZW51UHJpdmFjeVBvbGljeSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMThweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNTE0QjRCO1xufVxuXG4ubWVudUZlZWRiYWNrVG9nZ2xlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICM1MTRCNEI7XG59XG5cbi5jYXJkRmVlZGJhY2tTbWFsbCB7XG4gICAgbWFyZ2luOiAxMHB4IDE1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xufVxuXG4uZGl2RmVlZGJhY2tIZWFkZXIge1xuICAgIGNvbG9yOiAjNTE0QjRCO1xuICAgIC8vIHBhZGRpbmc6IDE1cHggMTVweCAwcHggMTVweDtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG59XG5cbi5oZWFkRmVlZGJhY2sge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIHBhZGRpbmc6IDEwcHggMTBweCAwIDEwcHg7XG59XG5cbi5pY25GZWVkYmFjayB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG4ubGJsRmVlZGJhY2sge1xuICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbn1cblxuLnR4dEZlZWRiYWNrIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sYmxmZWVkYmFja0xlbmd0aCB7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uYnRuU3VibWl0IHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNEM0E4MjgsICNFMDg2MUYpO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbjogMTBweCAwcHggMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5FbnRpdHlOYW1lIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6ICM2NzY3Njc7XG59XG5cbi5sYmxUaXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubGJsRGV0YWlscyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZSAhaW1wb3J0YW50O1xufVxuXG4ubGJsVmlld09uYm9hcmRpbmcge1xuICAgIGNvbG9yOiAjMzg4QUZGO1xufVxuXG4uYWxlcnRNZXNzYWdlIHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXQge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgOTAlIHtcbiAgICAgICAgb3BhY2l0eTogMC4wMjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgOTklIHtcbiAgICAgICAgb3BhY2l0eTogMC4wMTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZU91dCB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICA5MCUge1xuICAgICAgICBvcGFjaXR5OiAwLjAyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICA5OSUge1xuICAgICAgICBvcGFjaXR5OiAwLjAxO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/about/about.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/about/about.page.ts ***!
  \*******************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");








var AboutPage = /** @class */ (function () {
    function AboutPage(loginService, menuCtrl, storage, router, loadingCtrl, alertController, httpApi) {
        this.loginService = loginService;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.httpApi = httpApi;
        this.loadingDone = false;
        this.noError = true;
        this.lblAboutStatus = "LOADING ABOUT...";
        this.clickedAbout = false;
        this.lblWhatsNextStatus = "LOADING WHAT'S NEXT...";
        this.clickedWhatsNext = false;
        this.lblFeedbackStatus = "LOADING FEEDBACK...";
        this.clickedPrivacyPolicy = false;
        this.lblPrivacyPolicyStatus = "LOADING PRIVACY STATEMENT...";
        this.clickedFeedback = false;
        this.currentFeedbackLength = "0";
    }
    AboutPage.prototype.ngOnInit = function () {
        var _this = this;
        this.noError = true;
        this.feedbackText = "";
        this.lblAboutStatus = "LOADING ABOUT...";
        this.lblWhatsNextStatus = "LOADING WHATS NEXT...";
        this.lblFeedbackStatus = "LOADING FEEDBACK...";
        this.getAbout('');
        this.getWhatsNext('');
        this.getFeedback('');
        this.getPrivacyPolicy('');
        this.CurrentVersion = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_VERSION"];
        this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
        });
    };
    AboutPage.prototype.getAbout = function (employeeid) {
        this.noError = true;
        this.loadingDone = true;
        this.lblAboutStatus = "ABOUT";
    };
    AboutPage.prototype.getWhatsNext = function (employeeid) {
        this.noError = true;
        this.loadingDone = true;
        this.lblWhatsNextStatus = "WHATS NEXT";
    };
    AboutPage.prototype.getPrivacyPolicy = function (employeeid) {
        this.noError = true;
        this.loadingDone = true;
        this.lblPrivacyPolicyStatus = "PRIVACY STATEMENT";
    };
    AboutPage.prototype.getFeedback = function (employeeid) {
        this.noError = true;
        this.loadingDone = true;
        this.lblFeedbackStatus = "FEEDBACK";
    };
    AboutPage.prototype.feedbackLength = function () {
        this.currentFeedbackLength = this.feedbackText.length.toString();
    };
    AboutPage.prototype.feedbackSubmit = function () {
        var _this = this;
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            if (_this.feedbackText == "" || _this.feedbackText == undefined || _this.feedbackText == null) {
                alert("Feedback is empty");
                return;
            }
            _this.loading.present();
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["KEY_SERVER_SETTINGS"]).then(function (value) {
                var uri = value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["SERVER_URL"]] + "/api/Feedback/SubmitFeedBack?userid=" + _this.empId + "&feedback=" + _this.feedbackText + "&isAnonymous=false&appPlatform=" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["APP_PLATFORM"] + "&appVersion=" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_5__["VERSION"];
                var url = encodeURI(uri);
                _this.httpApi.post(url, {}, {})
                    .then(function (data) {
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Success'] == "Yes") {
                        _this.showDialog("DONE!", "Success. Thanks for sending your feedback!", "GREAT!", true);
                    }
                    else {
                        _this.showDialog("ERROR!", "Connection error. Please try again later.", "Okay", false);
                    }
                    if (_this.loading) {
                        _this.loading.dismiss();
                    }
                })
                    .catch(function (error) {
                    if (_this.loading) {
                        _this.loading.dismiss();
                    }
                    _this.showDialog("ERROR!", "Connection error. Please try again later.", "Okay", false);
                });
            });
        });
    };
    AboutPage.prototype.showDialog = function (title, message, buttonText, isSuccess) {
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
                                        alert.dismiss();
                                        if (isSuccess) {
                                            _this.feedbackText = "";
                                        }
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
    AboutPage.prototype.toTitleCase = function (str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    AboutPage.prototype.removeExtraSpace = function (str) {
        return str.replace(/(\r\n|\n|\r)/gm, "");
    };
    AboutPage.prototype.toggleAboutSection = function () {
        this.clickedAbout = !this.clickedAbout;
    };
    AboutPage.prototype.toggleWhatsNextSection = function () {
        this.clickedWhatsNext = !this.clickedWhatsNext;
    };
    AboutPage.prototype.togglePrivacyPolicy = function () {
        this.clickedPrivacyPolicy = !this.clickedPrivacyPolicy;
    };
    AboutPage.prototype.toggleFeedbackSection = function () {
        this.clickedFeedback = !this.clickedFeedback;
    };
    AboutPage.prototype.toggleViewOnboarding = function () {
        this.router.navigate(['/onboarding']);
    };
    AboutPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    AboutPage.prototype.refresh = function () {
        this.ngOnInit();
    };
    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/pages/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/pages/about/about.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map