(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-subprofile-subprofile-module"],{

/***/ "./src/app/pages/subprofile/subprofile.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/subprofile/subprofile.module.ts ***!
  \*******************************************************/
/*! exports provided: SubprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubprofilePageModule", function() { return SubprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _subprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subprofile.page */ "./src/app/pages/subprofile/subprofile.page.ts");







var routes = [
    {
        path: '',
        component: _subprofile_page__WEBPACK_IMPORTED_MODULE_6__["SubprofilePage"]
    }
];
var SubprofilePageModule = /** @class */ (function () {
    function SubprofilePageModule() {
    }
    SubprofilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_subprofile_page__WEBPACK_IMPORTED_MODULE_6__["SubprofilePage"]]
        })
    ], SubprofilePageModule);
    return SubprofilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/subprofile/subprofile.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/subprofile/subprofile.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header #header>\n    <ion-buttons slot=\"start\">\n        <ion-back-button class=\"button-light\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n</ion-header>\n<ion-fab horizontal=\"end\">\n    <ion-fab-button (click)=\"moreOptions()\">\n        <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n</ion-fab>\n<ion-card class=divCardHeader>\n    <ion-item lines=\"full\">\n        <ion-avatar>\n            <ion-icon class=\"divPhoto\" name=\"person\" mode=\"md\"></ion-icon>\n        </ion-avatar>\n        <ion-label text-wrap>\n            <span class=\"leaveDesc\">{{ idDesc }}</span>\n            <ion-grid class=\"leaveCreditsNameInfo\" (click)=\"setViewProfile()\">\n                <ion-row class=\"leaveCreditsName\">\n                    {{name}}\n                </ion-row>\n                <ion-row>\n                </ion-row>\n                <ion-row class=\"subViewInfo\">\n                    View Personal Info\n                </ion-row>\n            </ion-grid>\n        </ion-label>\n    </ion-item>\n</ion-card>\n<ion-content padding>\n    <ion-card class=divCardSegment mode=\"md\">\n        <div *ngIf=\"loadingDone; else shimmer\">\n            <div *ngIf=\"noError; else error\">\n                <ion-segment class=\"sgmtLeaveType\" mode=\"md\" scrollable [(ngModel)]=\"listType\">\n                    <div *ngFor=\"let list of segments\">\n                        <ion-segment-button mode=\"md\" value={{list}}>\n                            {{list}}\n                        </ion-segment-button>\n                    </div>\n                </ion-segment>\n\n                <div [ngSwitch]=\"listType\">\n                    <div *ngFor=\"let list of segments\">\n                        <ion-list mode=\"md\" *ngSwitchCase=\"list\">\n                            <div *ngIf=\"list == 'Leave Credits'\">\n                                <div *ngIf=\"leaveCredits.length > 0; else empty\">\n                                    <ion-item button detail=\"false\" *ngFor=\"let item of (leaveCredits);\">\n                                        <img class=\"imgLeave\" src={{getLeaveTypeSrc(item.LEAVECODE)}} alt=\"\">\n                                        <ion-label text-wrap>\n                                            <div class=\"leaveDetails\">\n                                                <span class=\"leaveName\">{{ item.LEAVE_DESC }}</span>\n                                            </div>\n                                            <ion-grid class=\"leaveCreditsInfo\">\n                                                <ion-row>\n                                                    <ion-col class=\"leaveCreditsInfoNameFirstRow\">\n                                                        Balance :\n                                                    </ion-col>\n                                                    <ion-col size=\"2\">\n                                                        {{item.BALANCE}}\n                                                    </ion-col>\n                                                    <ion-col class=\"leaveCreditsInfoNameSecondRow\">\n                                                        For Approval :\n                                                    </ion-col>\n                                                    <ion-col size=\"2\">\n                                                        {{item.APPROVAL}}\n                                                    </ion-col>\n                                                </ion-row>\n                                                <ion-row>\n                                                    <ion-col class=\"leaveCreditsInfoNameFirstRow\">\n                                                        Credit :\n                                                    </ion-col>\n                                                    <ion-col size=\"2\">\n                                                        {{item.CREDITS}}\n                                                    </ion-col>\n                                                    <ion-col class=\"leaveCreditsInfoNameSecondRow\">\n                                                        Approved :\n                                                    </ion-col>\n                                                    <ion-col size=\"2\">\n                                                        {{item.APPROVED}}\n                                                    </ion-col>\n                                                </ion-row>\n                                                <ion-row>\n                                                    <ion-col class=\"leaveCreditsInfoNameFirstRow\">\n                                                        Posted :\n                                                    </ion-col>\n                                                    <ion-col size=\"2\">\n                                                        {{item.AVAILED}}\n                                                    </ion-col>\n                                                </ion-row>\n                                            </ion-grid>\n                                        </ion-label>\n                                    </ion-item>\n                                </div>\n                            </div>\n                            <div *ngIf=\"list == 'Leaves'\">\n                                <div *ngIf=\"leaveList.length > 0; else empty\">\n                                    <div *ngFor=\"let item of (leaveList)\">\n                                        <ion-item button lines=\"full\" detail=\"false\"\n                                            (click)=\"setLeaveDetails(item,'subleave')\">\n                                            <ion-avatar class=\"divLeaveFrom\">\n                                                <div class=\"LeaveFromMonth\">\n                                                    {{getDateMonth(item.LEAVEFROM,1)}}\n                                                </div>\n                                                <div class=\"LeaveFromDate\">\n                                                    {{getDateDate(item.LEAVEFROM)}}\n                                                </div>\n                                            </ion-avatar>\n                                            <ion-label text-wrap>\n                                                <div class=\"divLeaveDesc\">\n                                                    <div class=\"divStat\">\n                                                        <div class=\"StatusDesc\">{{ item.LEAVEDESC }}</div>\n                                                        <div class=\"DateFile\">{{ getLongDate(item.DATEFILE) }}</div>\n                                                    </div>\n                                                    <span [ngClass]=\"{'classForApprovalLabel': item.LEAVESTATUSDESC == 'FOR APPROVAL', \n                          'classApprovedLabel': item.LEAVESTATUSDESC == 'APPROVED',\n                          'classOnHoldLabel': item.LEAVESTATUSDESC == 'ON HOLD',\n                          'classPlannedLabel': item.LEAVESTATUSDESC == 'PLANNED',\n                          'classCancelledLabel': item.LEAVESTATUSDESC == 'CANCELLED',\n                          'classDisapprovedLabel': item.LEAVESTATUSDESC == 'DISAPPROVED',\n                          'classPostedLabel': item.LEAVESTATUSDESC == 'POSTED'}\" class=\"RequestType\">\n                                                        {{ item.LEAVESTATUSDESC }}\n                                                    </span>\n                                                    <ion-item button class=\"buttonMoreOptions\" lines=\"none\"\n                                                        detail=\"false\"\n                                                        (click)=\"$event.stopPropagation();MoreOptions($event, item);\"\n                                                        *ngIf=\"leaveList == 'FOR APPROVAL' || leaveList == 'APPROVED' || leaveList == 'PLANNED'\">\n                                                        &#8942;\n                                                    </ion-item>\n                                                    <ion-item button class=\"buttonMoreOptionsDetails\" lines=\"none\"\n                                                        detail=\"true\"\n                                                        *ngIf=\"leaveList != 'FOR APPROVAL' && leaveList != 'APPROVED' && leaveList != 'PLANNED'\">\n                                                    </ion-item>\n                                                    <br>\n                                                    <span class=\"LeaveDay\"\n                                                        *ngIf=\"item.LEAVEDAY > 1 \">{{ item.LEAVEDAY }} days\n                                                        duration</span>\n                                                    <span class=\"LeaveDay\"\n                                                        *ngIf=\"item.LEAVEDAY <= 1 \">{{ item.LEAVEDAY }} day\n                                                        duration</span>\n                                                </div>\n                                            </ion-label>\n                                        </ion-item>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"list == 'Attendance Advisory'\">\n                                <div *ngIf=\"advisoryList.length > 0; else empty\">\n                                    <div *ngFor=\"let item of (advisoryList)\">\n                                        <ion-item button lines=\"full\" detail=\"false\"\n                                            (click)=\"setAdvisoryDetail(item, 'subadvisory')\">\n                                            <ion-avatar class=\"divLeaveFrom\">\n                                                <div class=\"LeaveFromMonth\">\n                                                    {{getDateMonth(item.REQUESTDATE,1)}}\n                                                </div>\n                                                <div class=\"LeaveFromDate\">\n                                                    {{getDateDate(item.REQUESTDATE)}}\n                                                </div>\n                                            </ion-avatar>\n                                            <ion-label text-wrap>\n                                                <div class=\"divLeaveDesc\">\n                                                    <div class=\"divStat\">\n                                                        <span class=\"StatusDesc\">{{ item.REQUESTTYPEDESC }}</span>\n                                                    </div>\n                                                    <span class=\"RequestType\" [ngClass]=\"{'classForApprovalLabel': item.STATUS == 'FOR APPROVAL', \n                          'classApprovedLabel': item.STATUS == 'APPROVED',\n                          'classOnHoldLabel': item.STATUS == 'ON HOLD',\n                          'classPlannedLabel': item.STATUS == 'PLANNED',\n                          'classCancelledLabel': item.STATUS == 'CANCELLED',\n                          'classDisapprovedLabel': item.STATUS == 'DISAPPROVED',\n                          'classPostedLabel': item.STATUS == 'POSTED'}\">{{ item.STATUS }}\n                                                    </span>\n                                                    <ion-item button class=\"buttonMoreOptions\" lines=\"none\"\n                                                        detail=\"false\"\n                                                        (click)=\"$event.stopPropagation();MoreOptions($event, item);\"\n                                                        *ngIf=\"advisoryList == 'FOR APPROVAL' || advisoryList == 'APPROVED' || advisoryList == 'PLANNED'\">\n                                                        &#8942;\n                                                    </ion-item>\n                                                    <ion-item button class=\"buttonMoreOptionsDetails\" lines=\"none\"\n                                                        detail=\"true\"\n                                                        *ngIf=\"advisoryList != 'FOR APPROVAL' && advisoryList != 'APPROVED' && advisoryList != 'PLANNED'\">\n                                                    </ion-item>\n                                                    <br>\n                                                    <span class=\"LeaveDay\">{{ item.REQUESTTIME }} </span>\n                                                </div>\n                                            </ion-label>\n                                        </ion-item>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"list == 'Overtime'\">\n                                <div *ngIf=\"OvertimeList.length > 0; else empty\">\n                                    <div *ngFor=\"let ot of OvertimeList\">\n                                        <ion-item button detail=\"false\" lines=\"full\" (click)=\"setOvertimeDetails(ot)\">\n                                            <ion-avatar class=\"divDate\">\n                                                <div class=\"DateMonth\">\n                                                    {{getDateMonth(ot.OvertimeDateFrom,1)}}\n                                                </div>\n                                                <div class=\"DateDate\">\n                                                    {{getDateDate(ot.OvertimeDateFrom)}}\n                                                </div>\n                                            </ion-avatar>\n                                            <ion-label text-wrap>\n                                                <div class=\"divLeaveDesc\">\n                                                    <div class=\"divStat\">\n                                                        <span class=\"StatusDesc\">{{ot.STARTTIME}} -\n                                                            {{ot.ENDTIME}}</span>\n                                                    </div>\n                                                    <span class=\"RequestType\" [ngClass]=\"{'classForApprovalLabel': ot.STATUSDESC == 'FOR APPROVAL', \n                          'classApprovedLabel': ot.STATUSDESC == 'APPROVED',\n                          'classOnHoldLabel': ot.STATUSDESC == 'ON HOLD',\n                          'classPlannedLabel': ot.STATUSDESC == 'PLANNED',\n                          'classCancelledLabel': ot.STATUSDESC == 'CANCELLED',\n                          'classDisapprovedLabel': ot.STATUSDESC == 'DISAPPROVED',\n                          'classPostedLabel': ot.STATUSDESC == 'POSTED'}\">{{ ot.STATUSDESC }}\n                                                    </span>\n                                                    <div *ngIf=\"ot.PAIDHOURS != null\">\n                                                        <div class=\"LeaveDay\" *ngIf=\"ot.PAIDHOURS > 1 \">\n                                                            {{ ot.PAIDHOURS }} hours</div>\n                                                        <div class=\"LeaveDay\" *ngIf=\"ot.PAIDHOURS <= 1 \">\n                                                            {{ ot.PAIDHOURS }} hour</div>\n                                                    </div>\n                                                    <div *ngIf=\"ot.PAIDHOURS == null\">\n                                                        <div class=\"LeaveDay\" *ngIf=\"ot.APPLIEDOTHOURS > 1 \">\n                                                            {{ ot.APPLIEDOTHOURS }} hours</div>\n                                                        <div class=\"LeaveDay\" *ngIf=\"ot.APPLIEDOTHOURS <= 1 \">\n                                                            {{ ot.APPLIEDOTHOURS }} hour</div>\n                                                    </div>\n                                                    <ion-item button class=\"buttonMoreOptionsDetails2\" lines=\"none\">\n                                                    </ion-item>\n                                                </div>\n                                            </ion-label>\n                                        </ion-item>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"list == 'Work From Home'\">\n                                <div *ngIf=\"WorkFromHome.length > 0; else empty\">\n                                    <div *ngFor=\"let wfh of WorkFromHome\">\n                                    <ion-item class=\"itmClass\" button lines=\"none\" detail=\"false\">\n                                        <ion-avatar class=\"divWfhDate\" (click)=\"setWfhDetails(wfh)\">\n                                            <div class=\"DateMonth\">\n                                                {{getDateMonth(wfh.AttendanceRequestDate,1)}}\n                                            </div>\n                                            <div class=\"DateDate\">\n                                                {{getDateDate(wfh.AttendanceRequestDate)}}\n                                            </div>\n                                        </ion-avatar>\n                                        <ion-label class=\"lblWFH\" text-wrap>\n                                            <div class=\"divWFHDesc\">\n                                                <div class=\"divWFHStatus\" (click)=\"setWfhDetails(wfh)\">\n                                                    <span class=\"RequestWfhType\"\n                                                        [ngClass]=\"{'classForApprovalLabel': wfh.AttendanceStatus == 'FOR APPROVAL', \n                                                              'classApprovedLabel': wfh.AttendanceStatus == 'APPROVED',\n                                                              'classOnHoldLabel': wfh.AttendanceStatus == 'ON HOLD',\n                                                              'classPlannedLabel': wfh.AttendanceStatus == 'PLANNED',\n                                                              'classCancelledLabel': wfh.AttendanceStatus== 'CANCELLED',\n                                                              'classDisapprovedLabel': wfh.AttendanceStatus == 'DISAPPROVED',\n                                                              'classPostedLabel': wfh.AttendanceStatus == 'POSTED'}\">{{ toTitleCase(wfh.AttendanceStatus) }}</span>\n                                                </div>\n                                                <div class=\"divWFHTimeIn\" (click)=\"setWfhDetails(wfh)\">\n                                                    <span> {{ wfh.NOOFDAYS }} days</span>\n                                                </div>\n                                                <div class=\"divWFHTimeIn\" (click)=\"setWfhDetails(wfh)\">\n                                                    <span>Time In :{{wfh.DateTimeIn}}</span>\n                                                </div>\n                                                <div class=\"divWFHTimeOut\" (click)=\"setWfhDetails(wfh)\">\n                                                    <span>Time Out :{{wfh.DateTimeOut}}</span>\n                                                </div>\n                                            </div>\n                                        </ion-label>\n                                    </ion-item>\n                                </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"list == 'DTR'\">\n                                <div *ngIf=\"DTRList.length > 0; else empty\">\n                                    <div *ngFor=\"let dtr of DTRList\">\n                                        <ion-item button detail=\"false\" lines=\"full\" (click)=\"setDTRDetails(dtr)\">\n                                            <ion-avatar class=\"divDate\">\n                                                <div class=\"DateMonth\">\n                                                    {{getDateMonth(dtr.DTR_date,1)}}\n                                                </div>\n                                                <div class=\"DateDate\">\n                                                    {{getDateDate(dtr.DTR_date)}}\n                                                </div>\n                                            </ion-avatar>\n                                            <ion-label text-wrap>\n                                                <div class=\"divDTRDesc\">\n                                                    <span *ngIf=\"dtr.Leave_rem != ''\"\n                                                        class=\"divLeave\">{{dtr.Leave_rem}}</span>\n                                                    <div class=\"divDTRTime\">\n                                                        <span *ngIf=\"dtr.Am_In != ''\">{{dtr.Am_In}}</span>\n                                                        <span *ngIf=\"dtr.Am_In == ''\">-</span>\n                                                        <span *ngIf=\"dtr.Am_Out != ''\"> - {{dtr.Am_Out}}</span>\n                                                    </div>\n                                                    <div class=\"divDTRDay\">\n                                                        <span>{{dtr.Att_Code}}</span>\n                                                    </div>\n                                                    <div class=\"divDTRHours\">\n                                                        <span>Shift: {{dtr.ShiftSchedule}}</span>\n                                                    </div>\n                                                    <ion-item button class=\"buttonMoreOptionsDetails2\" lines=\"none\">\n                                                    </ion-item>\n                                                </div>\n                                            </ion-label>\n                                        </ion-item>\n                                    </div>\n                                </div>\n                            </div>\n                            <div *ngIf=\"list == 'OB'\">\n                                <div *ngIf=\"OBList.length > 0; else empty\">\n                                    <div *ngFor=\"let ob of OBList\">\n                                        <ion-item class=\"itmClass\" button lines=\"full\" detail=\"false\">\n                                            <ion-avatar class=\"divDate\">\n                                                <div class=\"DateMonth\">\n                                                    {{getDateMonth(ob.Log_Date,1)}}\n                                                </div>\n                                                <div class=\"DateDate\">\n                                                    {{getDateDate(ob.Log_Date)}}\n                                                </div>\n                                            </ion-avatar>\n                                            <ion-label text-wrap>\n                                                <div class=\"divDTRDesc\">\n                                                    <div class=\"divOBTime\">\n                                                        <span *ngIf=\"ob.Log_Time != ''\">{{ob.Log_Time}}</span>\n                                                        <span *ngIf=\"ob.Log_Time == ''\">-</span>\n                                                        <span *ngIf=\"ob.Log_Time_In != ''\"> - {{ob.Log_Time_In}}</span>\n                                                    </div>\n                                                    <div class=\"divOBRemarks\">\n                                                        <span *ngIf=\"ob.Remarks != ''\">{{ob.Log_Remark}}</span>\n                                                    </div>\n                                                </div>\n                                            </ion-label>\n                                        </ion-item>\n                                    </div>\n                                </div>\n                            </div>\n                        </ion-list>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </ion-card>\n</ion-content>\n<ng-template #shimmer>\n    <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n    <ion-list>\n        <ion-item class=\"shimmeritem\" *ngFor=\"let number of [0,1,2,3,4,5]\">\n            <div id=\"box\" class=\"shine\"></div>\n            <div class=\"divShimmer\">\n                <div id=\"lines1\" class=\"shine\"></div>\n                <div id=\"lines2\" class=\"shine\"></div>\n                <div id=\"lines2\" class=\"shine\"></div>\n                <div id=\"lines2\" class=\"shine\"></div>\n            </div>\n        </ion-item>\n    </ion-list>\n</ng-template>\n<ng-template #error>\n    <ion-item lines=\"none\">\n        <div class=\"errorbox\">\n            <ion-avatar class=\"center\">\n                <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n            <span class=\"errorMessage\">{{errorMessage}}</span>\n            <span class=\"errorMessage\">\n                <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n            </span>\n        </div>\n    </ion-item>\n</ng-template>\n<ng-template #empty>\n    <ion-item lines=\"none\">\n        <div class=\"errorbox\">\n            <ion-avatar class=\"center\">\n                <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n            <span class=\"errorMessage\">EMPTY</span>\n            <span class=\"errorMessage\">\n                <!-- <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button> -->\n            </span>\n        </div>\n    </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/subprofile/subprofile.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/subprofile/subprofile.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-image: url('banner_large_dark_green.png') !important;\n  background-size: cover;\n  background-position: center;\n  height: 100px;\n  z-index: -1; }\n\nion-content {\n  --background: #F3F3F3; }\n\nion-back-button {\n  color: white;\n  padding-top: 30px; }\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n  margin-top: 70px; }\n\nion-item {\n  --inner-padding-end: 0px !important; }\n\nion-item:last-child {\n  --border-width: 0px 0px 1px 0 !important; }\n\nion-thumbnail {\n  height: 90px;\n  width: 90px;\n  margin: 10px;\n  margin-left: 15x; }\n\nion-col {\n  padding: 0px; }\n\n.sc-ion-buttons-md-h {\n  float: left; }\n\n.divCardHeader {\n  margin-top: 0px;\n  margin-left: -15px;\n  margin-right: -15px;\n  margin-bottom: 1px; }\n\n.imgType {\n  width: 60px;\n  height: 60px;\n  margin-left: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.leaveDesc {\n  color: #2a2a2a;\n  font-size: 18px;\n  font-weight: bold;\n  margin-left: 10px;\n  margin-right: 70px;\n  display: block;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.leaveCreditsInfo {\n  font-size: 11px;\n  margin-left: 10px;\n  margin-top: -1px;\n  display: block;\n  color: #484848; }\n\n.leaveCreditsNameInfo {\n  margin-left: 30px;\n  margin-top: -1px;\n  display: block;\n  color: #484848; }\n\n.leaveCreditsName {\n  font-size: 13px;\n  font-family: \"RobotoMedium\"; }\n\n.subViewInfo {\n  color: #388AFF; }\n\n.leaveCreditsProfile {\n  font-size: 12px; }\n\n.leaveCreditsInfoNameFirstRow {\n  max-width: 55px; }\n\n.leaveCreditsInfoNameSecondRow {\n  max-width: 75px; }\n\n.sgmtLeaveType {\n  min-width: 70px;\n  background: white;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: #cecccc; }\n\n.classContent {\n  --background: #F5F5F5;\n  --padding-top: 10px !important; }\n\n.divCardSegment {\n  margin-left: -5px;\n  margin-right: -5px;\n  margin-top: 0px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.divLeaveFrom {\n  margin-top: -30px; }\n\n.LeaveFromMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px; }\n\n.LeaveFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px; }\n\n.divLeaveDesc {\n  margin-left: 10px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.divStat {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: -8px; }\n\n.StatusDesc {\n  color: #2a2a2a;\n  font-size: 14px;\n  padding-left: 30px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.DateFile {\n  font-size: 12px;\n  float: right;\n  color: #808080;\n  padding-right: 5px; }\n\n.RequestType {\n  font-size: 11px;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  margin-top: 5px;\n  display: inline-block;\n  max-width: 85%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.RequestWfhType {\n  font-size: 11px;\n  display: inline-block;\n  max-width: 85%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.RequestTypeRed {\n  font-size: 11px;\n  padding-left: 30px;\n  margin-bottom: 10px;\n  margin-top: 5px;\n  display: inline-block;\n  color: #F44336;\n  max-width: 85%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.buttonMoreOptions {\n  font-size: 30px;\n  float: right;\n  color: #808080;\n  padding: 5px 5px 0 0; }\n\n.buttonMoreOptionsDetails {\n  font-size: 30px;\n  float: right;\n  padding-right: 5px; }\n\n.buttonMoreOptionsDetails2 {\n  margin-top: -53px;\n  font-size: 30px;\n  float: right;\n  padding-right: 5px; }\n\n.LeaveDay {\n  font-size: 11px;\n  margin-left: 30px;\n  color: #808080; }\n\n.list {\n  margin-bottom: -8px !important; }\n\n.list-md {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important; }\n\n.header-items {\n  display: flex;\n  align-items: center; }\n\n.divPhoto {\n  padding-left: 20px;\n  height: 40px;\n  width: 40px;\n  color: #656464; }\n\n.imgLeave {\n  width: 50px;\n  height: 50px;\n  margin: 10px 20px;\n  margin-left: 5px; }\n\n.leaveDetails {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-family: \"RobotoRegular\"; }\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px;\n  margin-top: 70px; }\n\n.leaveCreditsInfo {\n  font-size: 11px;\n  margin-top: -1px;\n  display: block;\n  color: #808080;\n  padding: 0px; }\n\n.leaveCreditsInfoNameFirstRow {\n  max-width: 56px;\n  color: #808080; }\n\n.leaveCreditsInfoNameSecondRow {\n  max-width: 80px;\n  color: #808080; }\n\n.divDTRDesc {\n  margin-left: 40px;\n  padding-bottom: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-height: 70px; }\n\n.divDate {\n  margin-top: -30px; }\n\n.divWfhDate {\n  margin-top: -18px; }\n\n.DateMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px; }\n\n.DateDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px; }\n\n.divLeave {\n  font-size: 11px;\n  float: right; }\n\n.divDTRTime {\n  font-size: 14px; }\n\n.divDTRDay {\n  color: #808080;\n  font-size: 11px;\n  margin-bottom: 12px; }\n\n.divDTRHours {\n  color: #808080;\n  font-size: 11px; }\n\n.divOBTime {\n  font-size: 14px;\n  margin-bottom: 5px; }\n\n.divOBRemarks {\n  color: #808080;\n  font-size: 11px;\n  white-space: normal; }\n\n.divWFHStatus {\n  font-size: 14px;\n  font-family: \"RobotoRegular\"; }\n\n.divWFHTimeIn {\n  color: #808080;\n  font-size: 11px; }\n\n.divWFHDesc {\n  margin-left: 40px;\n  padding-bottom: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  min-height: 70px; }\n\n.divDTRStat {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  margin-bottom: -8px; }\n\n.divWFHTimeOut {\n  color: #808080;\n  font-size: 11px; }\n\n.lblWFH {\n  margin-right: 5px; }\n\n.divWFH {\n  width: 0;\n  height: 0;\n  font-size: 11px;\n  float: right;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMtZ2FiYy9Eb2N1bWVudHMvR0VBUi9HRUFSX2lPUy9zcmMvYXBwL3BhZ2VzL3N1YnByb2ZpbGUvc3VicHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrREFBbUY7RUFDbkYsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsV0FBVyxFQUFBOztBQUdmO0VBQ0kscUJBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0kscUJBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksbUNBQW9CLEVBQUE7O0FBR3hCO0VBQ0ksd0NBQWUsRUFBQTs7QUFHbkI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVyxFQUFBOztBQUlmO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksZUFBZTtFQUNmLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlLEVB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aWxlIjoic3JjL2FwcC9wYWdlcy9zdWJwcm9maWxlL3N1YnByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2Jhbm5lcl9sYXJnZV9kYXJrX2dyZWVuLnBuZycpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI0YzRjNGMztcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICNEM0E4Mjg7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAwcHggMXB4IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLXRodW1ibmFpbCB7XG4gICAgaGVpZ2h0OiA5MHB4O1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTV4O1xufVxuXG5pb24tY29sIHtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi5zYy1pb24tYnV0dG9ucy1tZC1oIHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLy9DYXJkIEhlYWRlclxuLmRpdkNhcmRIZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi5pbWdUeXBlIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubGVhdmVEZXNjIHtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxlYXZlQ3JlZGl0c0luZm8ge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjNDg0ODQ4O1xufVxuXG4ubGVhdmVDcmVkaXRzTmFtZUluZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG59XG5cbi5sZWF2ZUNyZWRpdHNOYW1lIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5zdWJWaWV3SW5mbyB7XG4gICAgY29sb3I6ICMzODhBRkY7XG59XG5cbi5sZWF2ZUNyZWRpdHNQcm9maWxlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvTmFtZUZpcnN0Um93IHtcbiAgICBtYXgtd2lkdGg6IDU1cHg7XG59XG5cbi5sZWF2ZUNyZWRpdHNJbmZvTmFtZVNlY29uZFJvdyB7XG4gICAgbWF4LXdpZHRoOiA3NXB4O1xufVxuXG4uc2dtdExlYXZlVHlwZSB7XG4gICAgbWluLXdpZHRoOiA3MHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjY2VjY2NjO1xufVxuXG4vL0l0ZW0gRGV0YWlsc1xuLmNsYXNzQ29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICAgIC0tcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmRpdkNhcmRTZWdtZW50IHtcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC01cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5kaXZMZWF2ZUZyb20ge1xuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4uTGVhdmVGcm9tTW9udGgge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiAyMHB4XG59XG5cbi5MZWF2ZUZyb21EYXRlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICM1QzVDNUM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNDVweDtcbn1cblxuLmRpdkxlYXZlRGVzYyB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZGl2U3RhdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1hcmdpbi1ib3R0b206IC04cHg7XG59XG5cbi5TdGF0dXNEZXNjIHtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLkRhdGVGaWxlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLlJlcXVlc3RUeXBlIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAvLyBjb2xvcjogIzgwODA4MDtcbiAgICBtYXgtd2lkdGg6IDg1JTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5SZXF1ZXN0V2ZoVHlwZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIC8vIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLy8gY29sb3I6ICM4MDgwODA7XG4gICAgbWF4LXdpZHRoOiA4NSU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uUmVxdWVzdFR5cGVSZWQge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjRjQ0MzM2O1xuICAgIG1heC13aWR0aDogODUlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmJ1dHRvbk1vcmVPcHRpb25zIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIHBhZGRpbmc6IDVweCA1cHggMCAwO1xufVxuXG4uYnV0dG9uTW9yZU9wdGlvbnNEZXRhaWxzIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLmJ1dHRvbk1vcmVPcHRpb25zRGV0YWlsczIge1xuICAgIG1hcmdpbi10b3A6IC01M3B4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uTGVhdmVEYXkge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IC04cHggIWltcG9ydGFudDtcbn1cblxuLmxpc3QtbWQge1xuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItaXRlbXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRpdlBob3RvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGNvbG9yOiAjNjU2NDY0O1xufVxuXG4uaW1nTGVhdmUge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDEwcHggMjBweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubGVhdmVEZXRhaWxzIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuXG4ubGVhdmVDcmVkaXRzSW5mbyB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4ubGVhdmVDcmVkaXRzSW5mb05hbWVGaXJzdFJvdyB7XG4gICAgbWF4LXdpZHRoOiA1NnB4O1xuICAgIGNvbG9yOiAjODA4MDgwO1xufVxuXG4ubGVhdmVDcmVkaXRzSW5mb05hbWVTZWNvbmRSb3cge1xuICAgIG1heC13aWR0aDogODBweDtcbiAgICBjb2xvcjogIzgwODA4MDtcbn1cblxuLmRpdkRUUkRlc2Mge1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1pbi1oZWlnaHQ6IDcwcHg7XG59XG5cbi5kaXZEYXRlIHtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLmRpdldmaERhdGUge1xuICAgIG1hcmdpbi10b3A6IC0xOHB4O1xufVxuXG4uRGF0ZU1vbnRoIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRTg1NTREO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogMjBweFxufVxuXG4uRGF0ZURhdGUge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogIzVDNUM1QztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNGM0YzRjM7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uZGl2TGVhdmUge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5kaXZEVFJUaW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kaXZEVFJEYXkge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZGl2RFRSSG91cnMge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmRpdk9CVGltZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmRpdk9CUmVtYXJrcyB7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5kaXZXRkhTdGF0dXMge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5kaXZXRkhUaW1lSW4ge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmRpdldGSERlc2Mge1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1pbi1oZWlnaHQ6IDcwcHg7XG59XG5cbi5kaXZEVFJTdGF0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbWFyZ2luLWJvdHRvbTogLThweDtcbn1cblxuLmRpdldGSFRpbWVPdXQge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmxibFdGSCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5kaXZXRkgge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/subprofile/subprofile.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/subprofile/subprofile.page.ts ***!
  \*****************************************************/
/*! exports provided: SubprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubprofilePage", function() { return SubprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");









var SubprofilePage = /** @class */ (function () {
    function SubprofilePage(navCtrl, storage, activatedRoute, loginService, httpApi, router, actionSheetController) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.loginService = loginService;
        this.httpApi = httpApi;
        this.router = router;
        this.actionSheetController = actionSheetController;
        this.segments = ["Leave Credits", "Leaves", "Attendance Advisory", "Overtime", "Work From Home", "DTR", "OB"];
        this.listType = "Leave Credits";
        this.activityResult = false;
    }
    SubprofilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingDone = false;
        this.noError = true;
        this.subid = this.activatedRoute.snapshot.paramMap.get('subid');
        this.name = this.activatedRoute.snapshot.paramMap.get('name');
        this.position = this.activatedRoute.snapshot.paramMap.get('position');
        this.department = this.activatedRoute.snapshot.paramMap.get('department');
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_EMPID"]).then(function (val) {
            _this.empId = val;
            _this.getSubProfile();
            _this.getSubWfh();
        });
        this.activityResult = true;
    };
    SubprofilePage.prototype.getSubProfile = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["VERSION"],
                UserID: _this.empId
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["SERVER_URL"]] + "/api/GetSubordinates/GetDetails?subordinateID=" + _this.subid + "&FromDateDTR=&ToDateDTR=&FromDate_OB=&ToDate_OB=&Remarks=", request, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["POST_YES"]) {
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.noError = true;
                    _this.leaveCredits = jsonData['Value']['tblLeaveCredits'];
                    _this.leaveList = jsonData['Value']['tblLeaveDetails'];
                    _this.advisoryList = jsonData['Value']['tblAttendanceAdvisory'];
                    _this.DTRList = jsonData['Value']['tblDTR'];
                    _this.OBList = jsonData['Value']['tblOB'];
                    _this.OvertimeList = jsonData['Value']['tblOT'];
                    _this.leaveListIsEmpty = _this.leaveList.length <= 0;
                    _this.advisoryListIsEmpty = _this.advisoryList <= 0;
                    _this.loadingDone = true;
                })
                    .catch(function (error) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    SubprofilePage.prototype.getSubWfh = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_SESSION"]).then(function (val) {
            var request = {
                USER: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_USER_ID"]],
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_TOKEN"]],
                AppPlatform: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["VERSION"],
                DateFrom: "",
                DateTo: "",
                Status: "",
                EmployeeID: _this.subid,
                EmployeeName: ""
            };
            console.log(request);
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["SERVER_URL"]] + "/api/WorkFromHome/GetSubordinatesWorkFromHomeDetails", request, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    console.log(jsonData);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["POST_SUCCESS"]) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["POST_YES"]) {
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["MESSAGE_CON_ERROR"];
                        return;
                    }
                    _this.WorkFromHome = jsonData['Value']['tblWFHDetails'];
                    _this.noError = true;
                    _this.loadingDone = true;
                })
                    .catch(function (error) {
                    _this.noError = false;
                    _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["MESSAGE_CON_ERROR"];
                    _this.loadingDone = true;
                });
            });
        });
    };
    SubprofilePage.prototype.getLeaveTypeSrc = function (leaveType) {
        if (leaveType == "BL") {
            return "assets/icon/ic_bl.png";
        }
        else if (leaveType == "EL") {
            return "assets/icon/ic_el.png";
        }
        else if (leaveType == "IL") {
            return "assets/icon/ic_il.png";
        }
        else if (leaveType == "MCW") {
            return "assets/icon/ic_mcw.png";
        }
        else if (leaveType == "ML") {
            return "assets/icon/ic_ml.png";
        }
        else if (leaveType == "PL") {
            return "assets/icon/ic_pl.png";
        }
        else if (leaveType == "SL") {
            return "assets/icon/ic_sl.png";
        }
        else if (leaveType == "SPL") {
            return "assets/icon/ic_spl.png";
        }
        else if (leaveType == "VL") {
            return "assets/icon/ic_vl.png";
        }
        else if (leaveType == "XS") {
            return "assets/icon/ic_xs.png";
        }
        else {
            return "assets/icon/ic_xs.png";
        }
    };
    SubprofilePage.prototype.getDateMonth = function (datename, procedure) {
        var date = new Date(datename);
        var CurrentMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrentMonth[date.getMonth()].toString().toUpperCase();
        else
            return CurrentMonth[date.getMonth()];
    };
    SubprofilePage.prototype.getDateDate = function (datename) {
        var date = new Date(datename);
        return date.getDate().toString();
    };
    SubprofilePage.prototype.getDateYear = function (datename) {
        var date = new Date(datename);
        return date.getFullYear().toString();
    };
    SubprofilePage.prototype.getLongDate = function (datename) {
        var month = this.getDateMonth(datename, 2);
        var date = this.getDateDate(datename);
        var year = this.getDateYear(datename);
        var fulldate = month + " " + date + ", " + year;
        return fulldate;
    };
    SubprofilePage.prototype.moreOptions = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_SUBORDINATESFOROT"]).then(function (val) {
            var foundOT = false;
            val.forEach(function (sub) {
                console.log(sub["EMPLOYEEID"]);
                if (sub["EMPLOYEEID"] == _this.subid) {
                    foundOT = true;
                }
            });
            if (foundOT) {
                _this.showActionsWithOT();
            }
            else {
                _this.showActions();
            }
        });
    };
    SubprofilePage.prototype.showActions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'File for ' + this.name + ' :',
                            buttons: [{
                                    text: 'Request Leave',
                                    icon: 'list-box',
                                    handler: function () {
                                        _this.router.navigate(['/leaveadd',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            _this.subid]);
                                    }
                                }, {
                                    text: 'Request Attendance Advisory',
                                    icon: 'bookmarks',
                                    handler: function () {
                                        _this.router.navigate(['/advisoryadd',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            _this.subid,
                                            '']);
                                    }
                                }, {
                                    text: 'Request Work From Home',
                                    icon: 'briefcase',
                                    handler: function () {
                                        console.log('wfh');
                                        _this.router.navigate(['/workfromhomeadd',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            _this.subid,
                                            '',
                                            '']);
                                    }
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
    SubprofilePage.prototype.showActionsWithOT = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'File for ' + this.name + ' :',
                            buttons: [{
                                    text: 'Request Leave',
                                    icon: 'list-box',
                                    handler: function () {
                                        _this.router.navigate(['/leaveadd',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            _this.subid]);
                                    }
                                }, {
                                    text: 'Request Attendance Advisory',
                                    icon: 'bookmarks',
                                    handler: function () {
                                        _this.router.navigate(['/advisoryadd',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            _this.subid,
                                            '']);
                                    }
                                },
                                {
                                    text: 'Request Overtime',
                                    icon: 'alarm',
                                    handler: function () {
                                        _this.router.navigate(['/overtimeadd', '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            _this.subid
                                        ]);
                                    }
                                },
                                {
                                    text: 'Request Work From Home',
                                    icon: 'briefcase',
                                    handler: function () {
                                        _this.router.navigate(['/workfromhomeadd',
                                            '',
                                            '',
                                            '',
                                            '',
                                            '',
                                            _this.subid,
                                            '',
                                            '']);
                                    }
                                },
                                {
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
    SubprofilePage.prototype.setLeaveDetails = function (item, type) {
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_LEAVEDETAILS"], item);
        var itemType = type;
        if (item['LEAVESTATUSDESC'] == 'FOR APPROVAL') {
            itemType = 'forapproval';
        }
        this.router.navigate(['/leavedetails', itemType, "subprofile"]);
    };
    SubprofilePage.prototype.setAdvisoryDetail = function (item, type) {
        var itemType = type;
        if (item['STATUS'] == 'FOR APPROVAL') {
            itemType = 'forapproval';
        }
        this.router.navigate(['/advisorydetails', item['ID'], itemType, item['ISCREATEDBYMANAGER'], item['EMPNO'], 'subprofile']);
    };
    SubprofilePage.prototype.setDTRDetails = function (item) {
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_DTRDETAILS"], item);
        this.router.navigate(['/dailytimerecorddetails', 'subprofile']);
    };
    SubprofilePage.prototype.setOvertimeDetails = function (item) {
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_OTDETAILS"], item);
        this.router.navigate(['/overtimedetails', 'subprofile']);
    };
    SubprofilePage.prototype.setViewProfile = function () {
        this.router.navigate(['/personalinformation',
            'subordinate',
            this.subid,
            this.name,
            this.position]);
    };
    SubprofilePage.prototype.ionViewWillEnter = function () {
        if (this.activityResult) {
            this.ngOnInit();
        }
    };
    SubprofilePage.prototype.goBack = function () { this.navCtrl.back(); };
    SubprofilePage.prototype.toTitleCase = function (txt) {
        return txt.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    SubprofilePage.prototype.setWfhDetails = function (item) {
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_3__["KEY_WFHDETAILS"], item);
        console.log(item);
        this.router.navigate(['/workfromhomedetails', 'subsprofile']);
    };
    SubprofilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subprofile',
            template: __webpack_require__(/*! ./subprofile.page.html */ "./src/app/pages/subprofile/subprofile.page.html"),
            styles: [__webpack_require__(/*! ./subprofile.page.scss */ "./src/app/pages/subprofile/subprofile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ActionSheetController"]])
    ], SubprofilePage);
    return SubprofilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-subprofile-subprofile-module.js.map