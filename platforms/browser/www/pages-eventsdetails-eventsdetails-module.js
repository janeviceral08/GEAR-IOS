(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-eventsdetails-eventsdetails-module"],{

/***/ "./src/app/pages/eventsdetails/eventsdetails.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/eventsdetails/eventsdetails.module.ts ***!
  \*************************************************************/
/*! exports provided: EventsdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsdetailsPageModule", function() { return EventsdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _eventsdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventsdetails.page */ "./src/app/pages/eventsdetails/eventsdetails.page.ts");







var routes = [
    {
        path: '',
        component: _eventsdetails_page__WEBPACK_IMPORTED_MODULE_6__["EventsdetailsPage"]
    }
];
var EventsdetailsPageModule = /** @class */ (function () {
    function EventsdetailsPageModule() {
    }
    EventsdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_eventsdetails_page__WEBPACK_IMPORTED_MODULE_6__["EventsdetailsPage"]]
        })
    ], EventsdetailsPageModule);
    return EventsdetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/eventsdetails/eventsdetails.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/eventsdetails/eventsdetails.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <!-- <ion-back-button class=\"imgBackButton button-light\" slot=\"start\" mode=\"md\"></ion-back-button> -->\n</ion-header>\n<ion-content>\n    <ion-button class=\"backIcon\" fill=\"clear\" (click)=\"goBack()\">\n        <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\n    </ion-button>\n    <img src=\"../../../assets/img/event_natcon.jpg\" />\n    <ion-item lines=\"full\">\n        <ion-avatar class=\"divDate\">\n            <div class=\"DateMonth\">\n                MAR\n            </div>\n            <div class=\"DateDate\">\n                5\n            </div>\n        </ion-avatar>\n        <ion-label text-wrap class=\"lblEvents\">\n            <div class=\"EventsTitle\">CX F.A.S.T. FORWARD: National Sales Conference 2020\n            </div>\n            <div class=\"EventsDetails\">GABC 1155 Quezon City\n            </div>\n        </ion-label>\n    </ion-item>\n    <ion-item>\n        <ion-icon name=\"time\" slot=\"start\" mode=\"md\"></ion-icon>\n        <ion-label text-wrap>\n            <div class=\"EventsTitle\">\n                March 5, 2020 - March 6, 2020\n            </div>\n            <div class=\"EventsDetails\">\n                9:00AM to 6:00PM\n            </div>\n            <div class=\"EventsDetails\">\n                Thursday - Friday\n            </div>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-icon name=\"pin\" slot=\"start\" mode=\"md\"></ion-icon>\n        <ion-label text-wrap>\n            <div class=\"EventsTitle\">\n                GABC 1155 Building\n            </div>\n            <div class=\"EventsDetails\">\n                5/F Multipurpose Hall, GABC 1155 North EDSA, Quezon City\n            </div>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <div class=\"EventsDetailsTitle\">\n                DETAILS\n            </div>\n            <div class=\"EventsDescription\">\n                <p>We are gearing up for the future of retail by focusing on the role of Customer Experience (CX), guided by the F.A.S.T. mindset.</p> <br />\n\n                <p>In the National Sales Conference 2020 with the theme “CX F.A.S.T. Forward,” you will learn the following:\n                </p>\n                <p class=\"pBullet\">• Better understand customer expectations, their role in creating positive, successful customer experiences, </p>\n                <p class=\"pBullet\">• Decide better and faster to address work challenges and customer concerns, </p>\n                <p class=\"pBullet\">• Develop and communicate their key messages and regularly reinforce them, and </p>\n                <p class=\"pBullet\">• Link their actions that reflect an F.A.S.T. and growth mindset.</p>\n            </div>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <div class=\"EventsDetailsTitle\">\n                SCHEDULE\n            </div>\n            <div class=\"EventsDescription\">\n                Day 01 - March 5, 2020\n            </div>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        07:30 am – 08:45 am\n                    </ion-col>\n                    <ion-col>\n                        Arrival and Registration\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        09:00 am – 10:00 am\n                    </ion-col>\n                    <ion-col>\n                        Eucharistic Celebration\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        10:00 am – 10:30 am\n                    </ion-col>\n                    <ion-col>\n                        Mobilization to Multipurpose Hall\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        10:30 am – 11:20 am\n                    </ion-col>\n                    <ion-col>\n                        Conference Introduction\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        11:25 am – 12:15 pm\n                    </ion-col>\n                    <ion-col>\n                        Future of Retail\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        12:16 pm – 01:30 pm\n                    </ion-col>\n                    <ion-col>\n                        Lunch\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        01:30 pm – 02:00 pm\n                    </ion-col>\n                    <ion-col>\n                        Plenary 1\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        02:00 pm – 02:15 pm\n                    </ion-col>\n                    <ion-col>\n                        Mobilization to Concurrent Sessions\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        02:15 pm – 05:30 pm\n                    </ion-col>\n                    <ion-col>\n                        Concurrent Session 1\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n\n            <div class=\"EventsDescription\">\n                Day 02 - March 6, 2020\n            </div>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        07:30 am – 08:30 am\n                    </ion-col>\n                    <ion-col>\n                        Registration\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        09:00 am – 09:15 am\n                    </ion-col>\n                    <ion-col>\n                        Recap of Day 1\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        09:15 am – 09:30 am\n                    </ion-col>\n                    <ion-col>\n                        Mobilization to Concurrent Session\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        09:30 am – 12:30 pm\n                    </ion-col>\n                    <ion-col>\n                        Concurrent Session 2\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        12:30 pm – 01:30 pm\n                    </ion-col>\n                    <ion-col>\n                        Lunch\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        01:45 pm – 04:45 pm\n                    </ion-col>\n                    <ion-col>\n                        Concurrent Session 3\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        04:45pm – 05:00 pm\n                    </ion-col>\n                    <ion-col>\n                        Mobilization to Multipurpose Hall\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        05:00 pm – 05:30 pm\n                    </ion-col>\n                    <ion-col>\n                        <p>Processing </p>\n                        <p>Conference Closing </p>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        06:30 pm – 09:00 pm\n                    </ion-col>\n                    <ion-col>\n                        Brands Session and Dinner\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <div class=\"EventsDetailsTitle\">\n                CONCURRENT SESSION\n            </div>\n            <!-- <div class=\"EventsSpeakerLocation\">\n                        PLENARY ONE\n                    </div> -->\n            <div class=\"EventsTopic\">\n                CUSTOMER EXPERIENCE\n            </div>\n            <div class=\"EventsTopic\">\n                Strengthening Customer Connections\n            </div>\n            <div class=\"EventsSpeaker\">\n                Mach Penarada\n            </div>\n            <div class=\"EventsSpeaker\">\n                Social Hall - Ground Floor\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                Strengthening Customer Connections will help you drive more positive, successful customer experiences. The workshop covers the following topics: Value of customer experience, Positive defining moments, Four customer expectations, Four respect responses,\n                Two customer needs.\n            </div>\n\n            <!-- <div class=\"EventsSpeakerLocation\">\n                        PLENARY TWO\n                    </div> -->\n            <div class=\"EventsTopic\">\n                OPERATIONAL EXCELLENCE\n            </div>\n            <div class=\"EventsTopic\">\n                Resolving Problems Better\n            </div>\n            <div class=\"EventsSpeaker\">\n                Paula Peralta\n            </div>\n            <div class=\"EventsSpeaker\">\n                Multipurpose Hall - 5th Floor\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                Resolving Problems Better will help you decide better and faster to address work challenges and customer concerns. You will learn techniques such as defusing tension, resolving customer issues, handling problems, and driving continuous improvement.\n            </div>\n\n            <!-- <div class=\"EventsSpeakerLocation\">\n                        PLENARY THREE\n                    </div> -->\n            <div class=\"EventsTopic\">\n                LEADERSHIP\n            </div>\n            <div class=\"EventsTopic\">\n                Communicating Compellingly and Convincingly\n            </div>\n            <div class=\"EventsSpeaker\">\n                Flip Corpus\n            </div>\n            <div class=\"EventsSpeaker\">\n                Training Hall\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                Communicating Compellingly and Convincingly will help you motivate and engage your sales team towards better customer experiences. You will learn techniques such as clarifying the strategy, connecting with your audience, and communicating in a compelling\n                and convincing way.\n            </div>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <div class=\"EventsDetailsTitle\">\n                CONCURRENT SESSION GROUPINGS\n            </div>\n            <div class=\"EventsTopic\">\n                GROUP 1\n            </div>\n            <div class=\"EventsSpeaker EventsGroupings\">\n                Area 5 to 12; International Sales; Modern Trade; Region 2; RSM; NSM\n            </div>\n\n            <div class=\"EventsTopic\">\n                GROUP 2\n            </div>\n            <div class=\"EventsSpeaker EventsGroupings\">\n                Area 1 to 4; Area 21 to 25; Region 1 RSM; Region 5 RSM\n            </div>\n\n            <div class=\"EventsTopic\">\n                GROUP 3\n            </div>\n            <div class=\"EventsSpeaker EventsGroupings\">\n                Area 13 to 15; Area 16 to 20; Region 3 RSM; Region 4 RSM\n            </div>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <div class=\"EventsDetailsTitle\">\n                CONCURRENT SESSION SCHEDULE\n            </div>\n\n            <div class=\"EventsTopic EventsBold\">\n                DAY 1 AFTERNOON\n            </div>\n            <div class=\"EventsSpeaker\">\n                02:15 PM to 05:30 PM\n            </div>\n            <div class=\"EventsSpeaker EventsGroupSession\">\n                GROUP 1\n            </div>\n            <div class=\"EventsTopic\">\n                Resolving Issues Better\n            </div>\n            <div class=\"EventsSpeaker\">\n                5/F Multipurpose Hall\n            </div>\n            <div class=\"EventsSpeaker EventsGroupSession\">\n                GROUP 2\n            </div>\n            <div class=\"EventsTopic\">\n                Communicating Convincingly & Compellingly\n            </div>\n            <div class=\"EventsSpeaker\">\n                5/F Training Hall\n            </div>\n            <div class=\"EventsSpeaker EventsGroupSession\">\n                GROUP 3\n            </div>\n            <div class=\"EventsTopic\">\n                Strengthening Customer Connections\n            </div>\n            <div class=\"EventsSpeaker\">\n                G/F Social Hall\n            </div>\n        </ion-label>\n    </ion-item>\n\n\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <div class=\"EventsTopic EventsBold EventsGroupSession\">\n                DAY 2 MORNING\n            </div>\n            <div class=\"EventsSpeaker\">\n                09:30 AM to 12:30 PM\n            </div>\n            <div class=\"EventsSpeaker EventsGroupSession\">\n                GROUP 1\n            </div>\n            <div class=\"EventsTopic\">\n                Communicating Convincingly & Compellingly\n            </div>\n            <div class=\"EventsSpeaker\">\n                5/F Training Hall\n            </div>\n            <div class=\"EventsSpeaker EventsGroupSession\">\n                GROUP 2\n            </div>\n            <div class=\"EventsTopic\">\n                Strengthening Customer Connections\n            </div>\n            <div class=\"EventsSpeaker\">\n                G/F Social Hall\n            </div>\n            <div class=\"EventsSpeaker EventsGroupSession\">\n                GROUP 3\n            </div>\n            <div class=\"EventsTopic\">\n                Resolving Issues Better\n            </div>\n            <div class=\"EventsSpeaker\">\n                5/F Multipurpose Hall\n            </div>\n        </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <div class=\"EventsTopic EventsBold EventsGroupSession\">\n                DAY 2 AFTERNOON\n            </div>\n            <div class=\"EventsSpeaker\">\n                01:30 PM to 04:30 PM\n            </div>\n            <div class=\"EventsSpeaker EventsGroupSession\">\n                GROUP 1\n            </div>\n            <div class=\"EventsTopic\">\n                Strengthening Customer Connections\n            </div>\n            <div class=\"EventsSpeaker\">\n                G/F Social Hall\n            </div>\n            <div class=\"EventsSpeaker EventsGroupSession\">\n                GROUP 2\n            </div>\n            <div class=\"EventsTopic\">\n                Resolving Issues Better\n            </div>\n            <div class=\"EventsSpeaker\">\n                5/F Multipurpose Hall\n            </div>\n            <div class=\"EventsSpeaker EventsGroupSession\">\n                GROUP 3\n            </div>\n            <div class=\"EventsTopic\">\n                Communicating Convincingly & Compellingly\n            </div>\n            <div class=\"EventsSpeaker\">\n                5/F Training Hall\n            </div>\n        </ion-label>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <div class=\"EventsDetailsTitle\">GUIDELINES\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                <p>• We strongly recommend you to bring a backpack or small luggage. </p>\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                <p>• There will be an imposed curfew of 12AM for all checked-in participants. This is to ensure your safety and participation. </p>\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                <p>• Available hotel facilities and amenities may be utilized by checked-in participants during their free time.Any additional charges incurred for the use and/or consumption of hotel facilities and amenities shall be charged accordingly.\n                </p>\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                <p>• Hang the make-up room sign on your doorknob should you require housekeeping services between 11:00AM to 2:00PM. Make-up room service shall be available from 2:00PM to 6:00PM.For housekeeping service requests beyond this time, corresponding\n                    charges will be applied and is charged to the employee. </p>\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                <p>• Complimentary breakfast is provided and will be served as early as 4:45AM by batch. </p>\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                <p>• Smoking in room is strictly prohibited inside the hotel premises. Violations for smoking inside the room will carry a penalty of Php 1,000.00 (One Thousand Pesos) for every infraction. </p>\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                <p>• Key cards will be provided for checked-in participant. Lost key cards will be charged to the participant’s personal account upon checkout. </p>\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                <p>• Avoid unnecessary noise and keep television volumes at a reasonable level as a courtesy to the other guests. </p>\n            </div>\n            <div class=\"EventsSpeakerDesc\">\n                <p>• Visitors may only be entertained in the hotel lobby. </p>\n            </div>\n        </ion-label>\n    </ion-item>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/eventsdetails/eventsdetails.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/eventsdetails/eventsdetails.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --padding-end: 16px; }\n\nion-grid {\n  padding: 0px; }\n\nion-row {\n  padding: 3px 0px 0px; }\n\nion-col {\n  padding: 0px; }\n\n.backIcon {\n  color: white;\n  position: absolute;\n  margin-top: 30px;\n  margin-left: -5px; }\n\n.imgBackButton {\n  --min-height: 45px;\n  color: white; }\n\n.divDate {\n  height: 90px;\n  padding: 10px 0px; }\n\n.DateMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px; }\n\n.DateDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px; }\n\n.pBullet {\n  margin-left: 15px; }\n\n.lblEvents {\n  margin: 0px 0px 0px 40px; }\n\n.EventsTitle {\n  font-size: 15px;\n  color: black;\n  font-family: \"RobotoBold\"; }\n\n.EventsDetails {\n  font-size: 13px;\n  color: #5C5C5C;\n  font-family: \"RobotoRegular\"; }\n\n.EventsDetailsTitle {\n  font-size: 13px;\n  color: #5C5C5C;\n  margin-bottom: 10px;\n  font-family: \"RobotoRegular\"; }\n\n.EventsDescription {\n  font-size: 15px;\n  color: black;\n  font-family: \"RobotoRegular\";\n  margin-top: 5px; }\n\n.EventsBold {\n  font-family: \"RobotoBold\" !important; }\n\n.EventsTopic {\n  font-size: 15px;\n  font-family: \"RobotoMedium\";\n  color: black; }\n\n.EventsSpeaker {\n  font-size: 14px;\n  color: #5C5C5C;\n  font-family: \"RobotoRegular\"; }\n\n.EventsGroupings {\n  margin-bottom: 10px; }\n\n.EventsGroupSession {\n  margin-top: 10px; }\n\n.EventsSpeakerLocation {\n  font-size: 14px;\n  color: #5C5C5C;\n  margin-top: 10px;\n  font-family: \"RobotoRegular\"; }\n\n.EventsSpeakerDesc {\n  font-size: 15px;\n  color: black;\n  font-family: \"RobotoRegular\";\n  margin: 5px 0px 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMtZ2FiYy9Eb2N1bWVudHMvR0VBUi9HRUFSX2lPUy9zcmMvYXBwL3BhZ2VzL2V2ZW50c2RldGFpbHMvZXZlbnRzZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxtQkFBYyxFQUFBOztBQUdsQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBRUksa0JBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQ0osRUFBQTs7QUFFQTtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1oseUJBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksb0NBQW9DLEVBQUE7O0FBR3hDO0VBQ0ksZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQiw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50c2RldGFpbHMvZXZlbnRzZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgIH1cbiAgICBcbiAgICBpb24tZ3JpZCB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICAgXG4gICAgaW9uLXJvdyB7XG4gICAgICAgIHBhZGRpbmc6IDNweCAwcHggMHB4O1xuICAgIH1cbiAgICBcbiAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICBcbiAgICAuYmFja0ljb24ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgfVxuICAgIFxuICAgIC5pbWdCYWNrQnV0dG9uIHtcbiAgICAgICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIC0tbWluLWhlaWdodDogNDVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAuZGl2RGF0ZSB7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgfVxuICAgIFxuICAgIC5EYXRlTW9udGgge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICAgICAgYmFja2dyb3VuZDogI0U4NTU0RDtcbiAgICAgICAgd2lkdGg6IDY1cHg7XG4gICAgICAgIGhlaWdodDogMjBweFxuICAgIH1cbiAgICBcbiAgICAuRGF0ZURhdGUge1xuICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgIGNvbG9yOiAjNUM1QzVDO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICAgICAgICB3aWR0aDogNjVweDtcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgIH1cbiAgICBcbiAgICAucEJ1bGxldCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIH1cbiAgICBcbiAgICAubGJsRXZlbnRzIHtcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCA0MHB4O1xuICAgIH1cbiAgICBcbiAgICAuRXZlbnRzVGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvQm9sZFwiO1xuICAgIH1cbiAgICBcbiAgICAuRXZlbnRzRGV0YWlscyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6ICM1QzVDNUM7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbiAgICB9XG4gICAgXG4gICAgLkV2ZW50c0RldGFpbHNUaXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6ICM1QzVDNUM7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbiAgICB9XG4gICAgXG4gICAgLkV2ZW50c0Rlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbiAgICBcbiAgICAuRXZlbnRzQm9sZCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b0JvbGRcIiAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAuRXZlbnRzVG9waWMge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuICAgIFxuICAgIC5FdmVudHNTcGVha2VyIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzVDNUM1QztcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xuICAgIH1cbiAgICBcbiAgICAuRXZlbnRzR3JvdXBpbmdzIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgXG4gICAgLkV2ZW50c0dyb3VwU2Vzc2lvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5FdmVudHNTcGVha2VyTG9jYXRpb24ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjNUM1QzVDO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG4gICAgfVxuICAgIFxuICAgIC5FdmVudHNTcGVha2VyRGVzYyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG4gICAgICAgIG1hcmdpbjogNXB4IDBweCAyNXB4O1xuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/eventsdetails/eventsdetails.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/eventsdetails/eventsdetails.page.ts ***!
  \***********************************************************/
/*! exports provided: EventsdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsdetailsPage", function() { return EventsdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var EventsdetailsPage = /** @class */ (function () {
    function EventsdetailsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EventsdetailsPage.prototype.ngOnInit = function () {
    };
    EventsdetailsPage.prototype.goBack = function () {
        this.navCtrl.back();
    };
    EventsdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eventsdetails',
            template: __webpack_require__(/*! ./eventsdetails.page.html */ "./src/app/pages/eventsdetails/eventsdetails.page.html"),
            styles: [__webpack_require__(/*! ./eventsdetails.page.scss */ "./src/app/pages/eventsdetails/eventsdetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], EventsdetailsPage);
    return EventsdetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-eventsdetails-eventsdetails-module.js.map