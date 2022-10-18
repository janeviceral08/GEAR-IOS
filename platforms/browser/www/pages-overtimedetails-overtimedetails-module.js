(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-overtimedetails-overtimedetails-module"],{

/***/ "./src/app/pages/overtimedetails/overtimedetails.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/overtimedetails/overtimedetails.module.ts ***!
  \*****************************************************************/
/*! exports provided: OvertimedetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimedetailsPageModule", function() { return OvertimedetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _overtimedetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overtimedetails.page */ "./src/app/pages/overtimedetails/overtimedetails.page.ts");
/* harmony import */ var _component_submit_approval_submit_approval_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/submit-approval/submit-approval.module */ "./src/app/component/submit-approval/submit-approval.module.ts");








var routes = [
    {
        path: '',
        component: _overtimedetails_page__WEBPACK_IMPORTED_MODULE_6__["OvertimedetailsPage"]
    }
];
var OvertimedetailsPageModule = /** @class */ (function () {
    function OvertimedetailsPageModule() {
    }
    OvertimedetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _component_submit_approval_submit_approval_module__WEBPACK_IMPORTED_MODULE_7__["SubmitApprovalComponentModule"]
            ],
            declarations: [_overtimedetails_page__WEBPACK_IMPORTED_MODULE_6__["OvertimedetailsPage"]]
        })
    ], OvertimedetailsPageModule);
    return OvertimedetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/overtimedetails/overtimedetails.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/overtimedetails/overtimedetails.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-buttons>\n        <ion-back-button class=\"button-light\" slot=\"start\" mode=\"md\"></ion-back-button>\n        <ion-title mode=\"md\">Overtime Details</ion-title>\n        <ion-button class=\"button-light actionButton\" title=\"EDIT\" slot=\"end\" *ngIf=\"statusDesc == 'FOR APPROVAL' && pageType == 'User'\" (click)=\"openEditOT()\">\n            <ion-icon name=\"create\" mode=\"md\"></ion-icon>\n        </ion-button>\n        <ion-button class=\"button-light actionButton\" title=\"DELETE\" slot=\"end\" *ngIf=\"statusDesc == 'FOR APPROVAL' && pageType == 'User'\" (click)=\"showDeleteDialog()\">\n            <ion-icon name=\"trash\" mode=\"md\"></ion-icon>\n        </ion-button>\n        <ion-button class=\"button-light actionButton\" title=\"CANCEL\" slot=\"end\" *ngIf=\"statusDesc == 'APPROVED' && pageType == 'User'\" (click)=\"showCancelDialog()\">\n            <ion-icon name=\"close-circle\" mode=\"md\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n</ion-header>\n<ion-content padding>\n    <ion-item class=\"classMainDetails\" lines=\"full\">\n        <ion-avatar class=\"divOTFrom\">\n            <div class=\"OTFromMonth\">\n                {{getDateMonth(startDate,1)}}\n            </div>\n            <div class=\"OTFromDate\">\n                {{getDateDate(startDate)}}\n            </div>\n        </ion-avatar>\n        <ion-label text-wrap>\n            <div class=\"divOTDesc\">\n                <div class=\"StatusDesc\">\n                    <span>{{attendanceDesc}}</span>\n                </div>\n                <span class=\"RequestType\">{{statusDesc}}</span>\n                <br>\n                <div *ngIf=\"paidHours != null\">\n                    <span class=\"LeaveDay\" *ngIf=\"paidHours > 1 \">{{ paidHours }} hours</span>\n                    <span class=\"LeaveDay\" *ngIf=\"paidHours <= 1 \">{{ paidHours }} hour</span>\n                </div>\n                <div *ngIf=\"paidHours == null\">\n                    <span class=\"LeaveDay\" *ngIf=\"appliedOTHours > 1 \">{{ appliedOTHours }} hours</span>\n                    <span class=\"LeaveDay\" *ngIf=\"appliedOTHours <= 1 \">{{ appliedOTHours }} hour</span>\n                </div>\n            </div>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">SHIFT SCHEDULE</span>\n            <span class=\"EntryValue\">{{ workSchedule }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">START DATE</span>\n            <span class=\"EntryValue\">{{ startDate }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">START TIME</span>\n            <span class=\"EntryValue\">{{ startTime }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">END DATE</span>\n            <span class=\"EntryValue\">{{ endDate }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">END TIME</span>\n            <span class=\"EntryValue\">{{ endTime }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">REMARKS</span>\n            <span class=\"EntryValue\" *ngIf=\"remarks != null || remarks != ''\">{{ remarks }}</span>\n            <span class=\"EntryValue\" *ngIf=\"remarks == null || remarks == ''\">&nbsp;</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">CREATED BY</span>\n            <span class=\"EntryValue\">{{ createdBy }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">CREATED DATE</span>\n            <span class=\"EntryValue\">{{ createdDate }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">APPROVED BY</span>\n            <span class=\"EntryValue\" *ngIf=\"approvedBy != null || approvedBy != ''\">{{ approvedBy }}</span>\n            <span class=\"EntryValue\" *ngIf=\"approvedBy == null || approvedBy == ''\">&nbsp;</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">APPROVED DATE</span>\n            <span class=\"EntryValue\" *ngIf=\"approvedDate != null || approvedDate != ''\">{{ approvedDate }}</span>\n            <span class=\"EntryValue\" *ngIf=\"approvedDate == null || approvedDate == ''\">&nbsp;</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">APPROVED REMARKS</span>\n            <span class=\"EntryValue\" *ngIf=\"approvedRemarks != null || approvedRemarks != ''\">{{ approvedRemarks }}</span>\n            <span class=\"EntryValue\" *ngIf=\"approvedRemarks == null || approvedRemarks == ''\">&nbsp;</span>\n        </ion-label>\n    </ion-item>\n    <ion-fab *ngIf=\"pageType == 'Approver'\" vertical=\"bottom\" horizontal=\"end\" edge slot=\"fixed\">\n        <ion-fab-button (click)=\"openModal()\">\n            <ion-icon name=\"send\" mode=\"md\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/overtimedetails/overtimedetails.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/overtimedetails/overtimedetails.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-color: #558B2F;\n  padding-bottom: 15px;\n  padding-top: 30px; }\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-left: 0px; }\n\nion-back-button {\n  color: white;\n  margin-left: -10px; }\n\nion-fab {\n  margin-bottom: 40px; }\n\nion-fab-button {\n  --background: #D3A828;\n  font-size: 35px; }\n\n.sc-ion-buttons-md-h {\n  float: left; }\n\nion-item {\n  --padding-start: 0px !important;\n  padding-top: 3px;\n  padding-bottom: 3px; }\n\nion-label {\n  margin: 0px; }\n\n.actionButton {\n  color: white;\n  padding-right: 10px; }\n\n.classMainDetails {\n  --padding-bottom: 12px; }\n\n.divOTFrom {\n  margin-top: -60px;\n  width: 85px; }\n\n.OTFromMonth {\n  font-size: 13px;\n  padding-top: 3px;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  margin-top: 15px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  background: #E8554D;\n  width: 65px;\n  height: 20px; }\n\n.OTFromDate {\n  font-size: 35px;\n  color: #5C5C5C;\n  vertical-align: middle;\n  text-align: center;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background: #F3F3F3;\n  width: 65px;\n  height: 45px; }\n\n.btnMenu {\n  padding: 0 0 0 5px;\n  font-size: 20px;\n  margin-top: 14px; }\n\n.divOTDesc {\n  overflow: hidden; }\n\n.StatusDescAnimated {\n  white-space: nowrap;\n  -webkit-transform: translateX(100%);\n  transform: translateX(100%);\n  /* Apply animation to this element */\n  -webkit-animation: rightToLeft 15s linear infinite;\n  animation: rightToLeft 15s linear infinite;\n  color: #2a2a2a;\n  font-size: 18px;\n  font-family: \"RobotoMedium\"; }\n\n.StatusDesc {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #2a2a2a;\n  font-size: 17px;\n  font-family: \"RobotoMedium\"; }\n\n.RequestType {\n  color: #808080;\n  font-size: 14px; }\n\n.LeaveDay {\n  color: #808080;\n  font-size: 14px; }\n\n.EntryName {\n  color: #676767;\n  font-size: 10px;\n  display: block; }\n\n.EntryValue {\n  color: #2a2a2a;\n  font-size: 14px;\n  font-family: \"RobotoRegular\"; }\n\n.EntryValueRed {\n  color: #F44336;\n  font-size: 14px;\n  font-family: \"RobotoRegular\"; }\n\n@-webkit-keyframes rightToLeft {\n  0% {\n    -webkit-transform: translateX(100%); }\n  100% {\n    -webkit-transform: translateX(-100%); } }\n\n@keyframes rightToLeft {\n  0% {\n    /* Firefox bug fix */\n    -webkit-transform: translateX(100%);\n    /* Firefox bug fix */\n    transform: translateX(100%); }\n  100% {\n    /* Firefox bug fix */\n    -webkit-transform: translateX(-100%);\n    /* Firefox bug fix */\n    transform: translateX(-100%); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMtZ2FiYy9Eb2N1bWVudHMvR0VBUi9HRUFSX2lPUy9zcmMvYXBwL3BhZ2VzL292ZXJ0aW1lZGV0YWlscy9vdmVydGltZWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxxQkFBYTtFQUNiLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSwrQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxzQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQ0osRUFBQTs7QUFFQTtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksbUJBQW1CO0VBRW5CLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0Isb0NBQUE7RUFFQSxrREFBa0Q7RUFDbEQsMENBQTBDO0VBQzFDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGVBQWU7RUFDZiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUduQjtFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZiw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLDRCQUE0QixFQUFBOztBQVloQztFQUNJO0lBQ0ksbUNBQW1DLEVBQUE7RUFFdkM7SUFDSSxvQ0FBb0MsRUFBQSxFQUFBOztBQUk1QztFQUNJO0lBRUksb0JBQUE7SUFDQSxtQ0FBbUM7SUFDbkMsb0JBQUE7SUFDQSwyQkFBMkIsRUFBQTtFQUUvQjtJQUVJLG9CQUFBO0lBQ0Esb0NBQW9DO0lBQ3BDLG9CQUFBO0lBQ0EsNEJBQTRCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL292ZXJ0aW1lZGV0YWlscy9vdmVydGltZWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1OEIyRjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbmlvbi1mYWIge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQ6ICNEM0E4Mjg7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtaCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLmFjdGlvbkJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jbGFzc01haW5EZXRhaWxzIHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuXG4uZGl2T1RGcm9tIHtcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcbiAgICB3aWR0aDogODVweDtcbn1cblxuLk9URnJvbU1vbnRoIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNFODU1NEQ7XG4gICAgd2lkdGg6IDY1cHg7XG4gICAgaGVpZ2h0OiAyMHB4XG59XG5cbi5PVEZyb21EYXRlIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgY29sb3I6ICM1QzVDNUM7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xuICAgIHdpZHRoOiA2NXB4O1xuICAgIGhlaWdodDogNDVweDtcbn1cblxuLmJ0bk1lbnUge1xuICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuLmRpdk9URGVzYyB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLlN0YXR1c0Rlc2NBbmltYXRlZCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgLyogQXBwbHkgYW5pbWF0aW9uIHRvIHRoaXMgZWxlbWVudCAqL1xuICAgIC1tb3otYW5pbWF0aW9uOiByaWdodFRvTGVmdCAxNXMgbGluZWFyIGluZmluaXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiByaWdodFRvTGVmdCAxNXMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogcmlnaHRUb0xlZnQgMTVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5TdGF0dXNEZXNjIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4uUmVxdWVzdFR5cGUge1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLkxlYXZlRGF5IHtcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5FbnRyeU5hbWUge1xuICAgIGNvbG9yOiAjNjc2NzY3O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLkVudHJ5VmFsdWUge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi5FbnRyeVZhbHVlUmVkIHtcbiAgICBjb2xvcjogI0Y0NDMzNjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvUmVndWxhclwiO1xufVxuXG5ALW1vei1rZXlmcmFtZXMgcmlnaHRUb0xlZnQge1xuICAgIDAlIHtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcmlnaHRUb0xlZnQge1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJpZ2h0VG9MZWZ0IHtcbiAgICAwJSB7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgICAgIC8qIEZpcmVmb3ggYnVnIGZpeCAqL1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIC8qIEZpcmVmb3ggYnVnIGZpeCAqL1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIC8qIEZpcmVmb3ggYnVnIGZpeCAqL1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/overtimedetails/overtimedetails.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/overtimedetails/overtimedetails.page.ts ***!
  \***************************************************************/
/*! exports provided: OvertimedetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OvertimedetailsPage", function() { return OvertimedetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _component_submit_approval_submit_approval_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/submit-approval/submit-approval.component */ "./src/app/component/submit-approval/submit-approval.component.ts");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");










var OvertimedetailsPage = /** @class */ (function () {
    function OvertimedetailsPage(activatedRoute, httpApi, router, navCtrl, loginService, loadingCtrl, alertController, storage, modalController, events) {
        this.activatedRoute = activatedRoute;
        this.httpApi = httpApi;
        this.router = router;
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.storage = storage;
        this.modalController = modalController;
        this.events = events;
        this.noError = true;
    }
    OvertimedetailsPage.prototype.ngOnInit = function () {
    };
    OvertimedetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.fromPage = this.activatedRoute.snapshot.paramMap.get('page');
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_OTDETAILS"]).then(function (val) {
                console.log(val.PageType);
                _this.pageType = val.PageType;
                _this.id = val.ID;
                _this.startDate = val.STARTDATE;
                _this.endDate = val.ENDDATE;
                _this.startTime = val.STARTTIME;
                _this.endTime = val.ENDTIME;
                _this.remarks = val.REMARKS;
                _this.createdBy = val.CREATEDBY;
                _this.createdDate = val.CREATEDDATE;
                _this.status = val.STATUS;
                _this.statusDesc = val.STATUSDESC;
                _this.empID = val.EmployeeId;
                _this.corp = val.CORP;
                _this.groupCode = val.GROUPCODE;
                _this.deptCode = val.DEPTCODE;
                _this.secCode = val.SECCODE;
                _this.divCode = val.DIVCODE;
                _this.region = val.REGION;
                _this.district = val.District;
                _this.departmentCode = val.DEPARTMENTCODE;
                _this.departmentDesc = val.DEPARTMENTDESC;
                _this.paidHours = val.PAIDHOURS;
                _this.approvedRemarks = val.APPROVERREMARKS;
                _this.approvedBy = val.APPROVEDBY;
                _this.approvedDate = val.APPROVEDDATE;
                _this.rth = val.RTH;
                _this.attendanceCode = val.ATTENDANCECODE;
                _this.attendanceDesc = val.ATTENDANCEDESC;
                _this.appliedOTHours = val.APPLIEDOTHOURS;
                _this.existsFlag = val.EXISTS_FLAG;
                _this.workSchedule = val.WORKSCHEDULE;
                _this.isActive = val.IsActive;
                _this.overtimeDateFrom = val.OvertimeDateFrom;
                _this.overtimeDateTo = val.OvertimeDateTo;
                _this.lastName = val.LastName;
                _this.firstName = val.FirstName;
                _this.otEmployeeID = val.OTEmployeeId;
                _this.createdID = val.CreatedId;
                _this.isCancel = val.ISCANCEL;
                _this.referenceID = val.REFERENCEID;
                _this.postedDate = val.POSTEDDATE;
                _this.areaDesc = val.AREADESC;
                _this.loading.dismiss();
            });
        });
    };
    OvertimedetailsPage.prototype.openEditOT = function () {
        this.router.navigate(['/overtimeadd',
            this.id == null ? '' : this.id,
            this.scheduledType == null ? 'RD' : this.scheduledType,
            this.startDate == null ? '' : this.startDate,
            this.startTime == null ? '' : this.startTime,
            this.endDate == null ? '' : this.endDate,
            this.endTime == null ? '' : this.endTime,
            this.remarks == null ? '' : this.remarks,
            ''
        ]);
    };
    OvertimedetailsPage.prototype.showDeleteDialog = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Delete Overtime',
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
                                            _this.deleteOT();
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
    OvertimedetailsPage.prototype.showCancelDialog = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Cancel Overtime',
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
                                        _this.cancelOT(data['remarks']);
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
    OvertimedetailsPage.prototype.cancelOT = function (remarks) {
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
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
                var postData = {
                    UserID: _this.empID,
                    RecordID: _this.id,
                    CancelRemarks: remarks,
                    SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                    SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                    Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                    AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                    AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
                    CreatedDate: '',
                    IsActive: true
                };
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/OTRequest/CancelOT", postData, {})
                        .then(function (data) {
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                            _this.loading.dismiss();
                            return;
                        }
                        if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_YES"]) {
                            _this.loading.dismiss();
                            switch (jsonData['Message']) {
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["OUTDATED_ERROR"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["OUTDATED_MESSAGE"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OTHER_DEVICE"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_EXPIRED"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_EXPIRED"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_REQUIRED"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_REQUIRED"]);
                                    return;
                            }
                            _this.showDialog("ERROR!", jsonData['Message'], true, "Okay");
                            return;
                        }
                        _this.showDialog("DONE!", "Your changes have been saved for processing", true, "Great!");
                        _this.loading.dismiss();
                    })
                        .catch(function (error) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                    });
                });
            });
        });
    };
    OvertimedetailsPage.prototype.deleteOT = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
            var request = {
                UserID: _this.empID,
                EMPNO: _this.empID,
                RecordID: _this.id,
                STATUS: _this.status,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
                CreatedDate: '',
                IsActive: true
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/OTRequest/DeleteOT", request, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_YES"]) {
                        _this.loading.dismiss();
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.showDialog("ERROR!", jsonData['Message'], true, "Okay");
                        return;
                    }
                    _this.showDialog("DONE!", "You have deleted this request", true, "Okay");
                    _this.loading.dismiss();
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                    _this.loading.dismiss();
                });
            });
        });
    };
    OvertimedetailsPage.prototype.showDialog = function (title, message, closePage, buttonText) {
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
                                        if (closePage) {
                                            _this.events.publish('reloadDetails');
                                            if (_this.fromPage != "subprofile")
                                                _this.navCtrl.navigateBack(["/main//" + _this.fromPage]);
                                            else
                                                _this.navCtrl.back();
                                        }
                                    }
                                }],
                            backdropDismiss: false
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
    OvertimedetailsPage.prototype.openModal = function () {
        if (!this.modalIsOpen)
            this.showModal();
    };
    OvertimedetailsPage.prototype.showModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalIsOpen = true;
                        return [4 /*yield*/, this.modalController.create({
                                component: _component_submit_approval_submit_approval_component__WEBPACK_IMPORTED_MODULE_7__["SubmitApprovalComponent"],
                                cssClass: 'modalSubmitApproval',
                                animated: true,
                                backdropDismiss: false,
                                componentProps: {
                                    data: "otapproval"
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                if (detail.data['isDismissed'] == 0) {
                                    _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SESSION"]).then(function (val) {
                                        _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_EMPID"]).then(function (eID) {
                                            var otForApproval = {
                                                RecordID: _this.id,
                                                UserID: eID,
                                                ApproverRemarks: (!detail.data['remarks'] ? "" : detail.data['remarks']),
                                                ApprovalStatus: detail.data['status'],
                                                AppliedHours: detail.data['appliedhours'],
                                                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_RECORD_ID"]],
                                                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SECURITY_STAMP"]],
                                                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_TOKEN"]],
                                                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["APP_PLATFORM"],
                                                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["VERSION"],
                                                IsActive: true,
                                            };
                                            _this.loadingCtrl.create({
                                                message: "Loading..."
                                            }).then(function (overlay) {
                                                console.log(otForApproval);
                                                _this.loading = overlay;
                                                _this.loading.present();
                                                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["KEY_SERVER_SETTINGS"]).then(function (value) {
                                                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["SERVER_URL"]] + "/api/OTApproval/ApprovalProcess", otForApproval, {})
                                                        .then(function (data) {
                                                        if (data.data == null || data.data == undefined || !data.data) {
                                                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                                                            _this.loading.dismiss();
                                                            return;
                                                        }
                                                        var jsonData = JSON.parse(data.data);
                                                        console.log(jsonData);
                                                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_SUCCESS"]) {
                                                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                                                            _this.loading.dismiss();
                                                            return;
                                                        }
                                                        if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["POST_YES"]) {
                                                            _this.loading.dismiss();
                                                            switch (jsonData['Message']) {
                                                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["OUTDATED_ERROR"]:
                                                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["OUTDATED_MESSAGE"]);
                                                                    return;
                                                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OTHER_DEVICE"]:
                                                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                                                    return;
                                                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_EXPIRED"]:
                                                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_EXPIRED"]);
                                                                    return;
                                                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_REQUIRED"]:
                                                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["ERROR_MESSAGE_REQUIRED"]);
                                                                    return;
                                                            }
                                                            _this.showDialog("ERROR!", jsonData['Message'], true, "Okay");
                                                            return;
                                                        }
                                                        _this.loading.dismiss();
                                                        _this.showDialog("DONE!", "You have processed this request", true, "Great!");
                                                    })
                                                        .catch(function (error) {
                                                        _this.loading.dismiss();
                                                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_8__["CONNECTION_ERROR"], true, "Okay");
                                                    });
                                                });
                                            });
                                        });
                                    });
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
    OvertimedetailsPage.prototype.getDateMonth = function (datename, procedure) {
        var date = new Date(datename.toString().substring(0, 10));
        var CurrntMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (procedure == 1)
            return CurrntMonth[date.getMonth()].toString().toUpperCase();
        else
            return CurrntMonth[date.getMonth()];
    };
    OvertimedetailsPage.prototype.getDateDate = function (datename) {
        var date = new Date(datename.toString().substring(0, 10));
        return date.getDate().toString();
    };
    OvertimedetailsPage.prototype.getDateYear = function (datename) {
        var date = new Date(datename.toString().substring(0, 10));
        return date.getFullYear().toString();
    };
    OvertimedetailsPage.prototype.toTitleCase = function (txt) {
        return txt.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    };
    OvertimedetailsPage.prototype.ngOnDestroy = function () {
        if (this.loading) {
            this.loading.dismiss();
        }
    };
    OvertimedetailsPage.prototype.back = function () {
        this.navCtrl.back();
    };
    OvertimedetailsPage.prototype.goBack = function () { this.navCtrl.back(); };
    OvertimedetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overtimedetails',
            template: __webpack_require__(/*! ./overtimedetails.page.html */ "./src/app/pages/overtimedetails/overtimedetails.page.html"),
            styles: [__webpack_require__(/*! ./overtimedetails.page.scss */ "./src/app/pages/overtimedetails/overtimedetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Events"]])
    ], OvertimedetailsPage);
    return OvertimedetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-overtimedetails-overtimedetails-module.js.map