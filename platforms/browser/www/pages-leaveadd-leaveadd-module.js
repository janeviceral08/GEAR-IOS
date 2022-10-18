(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-leaveadd-leaveadd-module"],{

/***/ "./src/app/pages/leaveadd/leaveadd.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/leaveadd/leaveadd.module.ts ***!
  \***************************************************/
/*! exports provided: LeaveaddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveaddPageModule", function() { return LeaveaddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _leaveadd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leaveadd.page */ "./src/app/pages/leaveadd/leaveadd.page.ts");







var routes = [
    {
        path: '',
        component: _leaveadd_page__WEBPACK_IMPORTED_MODULE_6__["LeaveaddPage"]
    }
];
var LeaveaddPageModule = /** @class */ (function () {
    function LeaveaddPageModule() {
    }
    LeaveaddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_leaveadd_page__WEBPACK_IMPORTED_MODULE_6__["LeaveaddPage"]]
        })
    ], LeaveaddPageModule);
    return LeaveaddPageModule;
}());



/***/ }),

/***/ "./src/app/pages/leaveadd/leaveadd.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/leaveadd/leaveadd.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-buttons class=\"buttonHeaderClass\" mode=\"md\">\n        <ion-back-button class=\"button-light\" slot=\"start\" mode=\"md\"></ion-back-button>\n        <ion-title mode=\"md\">{{title}}</ion-title>\n        <ion-button class=\"btnSubmit\" slot=\"end\" (click)=\"sendLeaveRequest()\">\n            <ion-icon name=\"send\" mode=\"md\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n</ion-header>\n<ion-content class=\"ContentClass\">\n    <ion-list lines=\"none\">\n        <ion-grid>\n            <ion-row>\n                <ion-col size=\"12\" *ngIf=\"subId != ''\">\n                    <ion-item id=\"subId\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">SUBORDINATE</ion-label>\n                        <ion-select id=\"rounded\" [(ngModel)]=\"subId\" (ionChange)=\"onSubordinateChange()\">\n                            <div *ngFor=\"let item of (subordinates)\">\n                                <ion-select-option value=\"{{ item.EMPLOYEEID }}\">{{ item.EMPNAME }}</ion-select-option>\n                            </div>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"8\">\n                    <ion-item id=\"leavetype\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">LEAVE TYPE</ion-label>\n                        <ion-select id=\"rounded\" [(ngModel)]=\"type\" (ionChange)=\"onLeaveTypeChange()\">\n                            <div *ngFor=\"let item of (results)\">\n                                <ion-select-option value=\"{{ item.SEQNO }}\">{{ item.DESCRIPTION }}</ion-select-option>\n                            </div>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <ion-item class=\"duration\" [disabled]=\"isDurationDisabled\">\n                        <ion-label class=\"EntityName\" position=\"stacked\">DURATION</ion-label>\n                        <ion-input id=\"rounded\" type=\"num\" [(ngModel)]=\"duration\" (ionBlur)=\"onDurationChanged()\">\n                        </ion-input>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"8\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">LEAVE FROM</ion-label>\n                        <ion-datetime id=\"rounded\" [(ngModel)]=\"dateFrom\" display-format=\"MM/DD/YYYY\" picker-format=\"MMMM DD YYYY\" placeholder=\"mm/dd/yyyy\" min=\"2016\" max=\"2099\" (ionChange)=\"getAddLeaveEndDate()\">\n                            mm/dd/yyyy</ion-datetime>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">&nbsp;</ion-label>\n                        <ion-select [(ngModel)]=\"timeFrom\" id=\"rounded\" (ionChange)=\"getAddLeaveEndDate()\">\n                            <ion-select-option value=\"AM\">AM</ion-select-option>\n                            <ion-select-option value=\"PM\">PM</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col size=\"8\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">LEAVE TO</ion-label>\n                        <ion-datetime id=\"rounded\" [(ngModel)]=\"dateTo\" display-format=\"MM/DD/YYYY\" picker-format=\"MMMM DD YYYY\" min=\"2016\" max=\"2099\" disabled>\n                            mm/dd/yyyy</ion-datetime>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"4\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">&nbsp;</ion-label>\n                        <ion-select [(ngModel)]=\"timeTo\" id=\"rounded\" disabled>\n                            <ion-select-option value=\"AM\">AM</ion-select-option>\n                            <ion-select-option value=\"PM\">PM</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">REASON</ion-label>\n                        <ion-select [(ngModel)]=\"reason\" id=\"rounded\" [disabled]=\"isReasonDisabled\">\n                            <ion-select-option value=\"LVR00001\">Personal</ion-select-option>\n                            <ion-select-option value=\"LVR00002\">Not feeling well</ion-select-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\">\n                    <ion-item>\n                        <ion-label class=\"EntityName\" position=\"stacked\">REMARKS</ion-label>\n                        <ion-textarea id=\"rounded\" rows=\"3\" maxlength=\"500\" [(ngModel)]=\"remarks\"></ion-textarea>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"6\">\n                    <ion-item>\n                        <ion-button class=\"AttachButton\" shape=\"round\" (click)=\"attachFile()\">\n                            Attach File\n                            <ion-icon slot=\"start\" name=\"attach\"></ion-icon>\n                        </ion-button>\n                    </ion-item>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <ion-item class=\"FileName\">\n                        <ion-label>{{ fileName }}\n                        </ion-label>\n                        <ion-icon class=\"FileNameClose\" slot=\"end\" name=\"close-circle\" *ngIf=\"hasAttachment\" (click)=\"removeAttachment()\"></ion-icon>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-item [hidden]=\"isEdited\">\n                        <ion-checkbox [(ngModel)]=\"isPlanned\" (ionChange)=\"onPlannedChecked()\"></ion-checkbox>\n                        <ion-label> Leave Planning</ion-label>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-label class=\"lblTakeNote\">Please take note that once you have exceeded your available leave credits, it will automatically be tagged as\n                    <ion-label class=\"lblTakeNoteWithoutPay\">WITHOUT PAY</ion-label>.</ion-label>\n            </ion-row>\n        </ion-grid>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/leaveadd/leaveadd.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/leaveadd/leaveadd.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-color: #558B2F;\n  padding-bottom: 15px;\n  padding-top: 30px; }\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-left: 0px; }\n\nion-back-button {\n  color: white;\n  margin-left: -10px; }\n\n.AttachButton {\n  font-size: inherit;\n  height: 90%;\n  width: 100%;\n  color: #484848;\n  --background: #D6D7D7; }\n\n.FileName {\n  --padding-start: 0;\n  font-size: 13px; }\n\n.FileNameClose {\n  height: 20px;\n  width: 20px;\n  color: #484848; }\n\nion-select {\n  height: 40px !important; }\n\nion-input {\n  height: 40px !important; }\n\nion-datetime {\n  height: 40px !important; }\n\nion-checkbox {\n  --background-checked: #D3A828;\n  --border-color-checked: #D3A828;\n  --border-radius: 5px;\n  --border-color: gray; }\n\n.btnSubmit {\n  color: white;\n  padding-right: 5px; }\n\n#rounded {\n  border: 1px solid gray;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important; }\n\ninput {\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important; }\n\n.EntityName {\n  font-size: 11px;\n  color: #676767; }\n\n.duration.ng-invalid {\n  border-bottom-color: transparent; }\n\n.duration.ng-valid {\n  border-bottom-color: transparent; }\n\n.calendarClass {\n  position: absolute;\n  right: 5px;\n  bottom: 4px; }\n\n.lblTakeNote {\n  font-size: 11px;\n  font-style: italic;\n  padding-left: 20px; }\n\n.lblTakeNoteWithoutPay {\n  color: #F44336; }\n\n.AttachButton {\n  font-size: inherit;\n  height: 90%;\n  width: 100%;\n  color: #484848;\n  --background: #D6D7D7; }\n\n.FileName {\n  --padding-start: 0;\n  font-size: 13px; }\n\n.FileNameClose {\n  height: 20px;\n  width: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMtZ2FiYy9Eb2N1bWVudHMvR0VBUi9HRUFSX2lPUy9zcmMvYXBwL3BhZ2VzL2xlYXZlYWRkL2xlYXZlYWRkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLHFCQUFhLEVBQUE7O0FBR2pCO0VBQ0ksa0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSw2QkFBcUI7RUFDckIsK0JBQXVCO0VBQ3ZCLG9CQUFnQjtFQUNoQixvQkFBZSxFQUFBOztBQUduQjtFQUNJLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLHFDQUFvQztVQUFwQyxvQ0FBb0MsRUFBQTs7QUFHeEM7RUFDSSxxQ0FBb0M7VUFBcEMsb0NBQW9DLEVBQUE7O0FBR3hDO0VBQ0ksZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxnQ0FBZ0MsRUFBQTs7QUFHcEM7RUFDSSxnQ0FBZ0MsRUFBQTs7QUFHcEM7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxxQkFBYSxFQUFBOztBQUdqQjtFQUNJLGtCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBR25CO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xlYXZlYWRkL2xlYXZlYWRkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NThCMkY7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuaW9uLWJhY2stYnV0dG9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4uQXR0YWNoQnV0dG9uIHtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRDZEN0Q3O1xufVxuXG4uRmlsZU5hbWUge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5GaWxlTmFtZUNsb3NlIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY2hlY2tib3gge1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjRDNBODI4O1xuICAgIC0tYm9yZGVyLWNvbG9yLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLS1ib3JkZXItY29sb3I6IGdyYXk7XG59XG5cbi5idG5TdWJtaXQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbiNyb3VuZGVkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuaW5wdXQge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLkVudGl0eU5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogIzY3Njc2Nztcbn1cblxuLmR1cmF0aW9uLm5nLWludmFsaWQge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZHVyYXRpb24ubmctdmFsaWQge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY2FsZW5kYXJDbGFzcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgYm90dG9tOiA0cHg7XG59XG5cbi5sYmxUYWtlTm90ZSB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5sYmxUYWtlTm90ZVdpdGhvdXRQYXkge1xuICAgIGNvbG9yOiAjRjQ0MzM2O1xufVxuXG4uQXR0YWNoQnV0dG9uIHtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICM0ODQ4NDg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRDZEN0Q3O1xufVxuXG4uRmlsZU5hbWUge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5GaWxlTmFtZUNsb3NlIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/leaveadd/leaveadd.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/leaveadd/leaveadd.page.ts ***!
  \*************************************************/
/*! exports provided: LeaveaddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveaddPage", function() { return LeaveaddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/leave.service */ "./src/app/services/leave.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-picker/ngx */ "./node_modules/@ionic-native/file-picker/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_ftp_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/ftp/ngx */ "./node_modules/@ionic-native/ftp/ngx/index.js");














var LeaveaddPage = /** @class */ (function () {
    function LeaveaddPage(storage, activatedRoute, datepipe, navCtrl, loginService, alertController, actionSheetController, loadingCtrl, filePicker, camera, fTP, imagePicker, httpApi) {
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.datepipe = datepipe;
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.alertController = alertController;
        this.actionSheetController = actionSheetController;
        this.loadingCtrl = loadingCtrl;
        this.filePicker = filePicker;
        this.camera = camera;
        this.fTP = fTP;
        this.imagePicker = imagePicker;
        this.httpApi = httpApi;
        this.types = [];
        this.timeFrom = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveTime"].AM;
        this.timeTo = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveTime"].AM;
        this.reason = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["Reason"].personal;
        this.dateFrom = new Date().toISOString();
        this.dateTo = new Date().toISOString();
        this.errorMessage = "CONNECTION ERROR";
        this.currentDate = new Date().toISOString();
        this.isDurationDisabled = false;
        this.isReasonDisabled = false;
        this.isPlanned = false;
        this.fileName = "No Attachment";
        this.hasAttachment = false;
        this.uploadSuccess = false;
    }
    LeaveaddPage.prototype.ngOnInit = function () {
        var _this = this;
        this.noError = true;
        this.loadingDone = false;
        this.id = this.activatedRoute.snapshot.paramMap.get('type');
        this.duration = this.activatedRoute.snapshot.paramMap.get('duration');
        this.currentDate = this.activatedRoute.snapshot.paramMap.get('datefrom');
        this.remarks = this.activatedRoute.snapshot.paramMap.get('remarks');
        this.leaveId = this.activatedRoute.snapshot.paramMap.get('id');
        this.subId = this.activatedRoute.snapshot.paramMap.get('subid');
        if (this.currentDate != '') {
            this.dateFrom = this.datepipe.transform((this.currentDate), 'yyyy-MM-dd');
            this.dateTo = this.datepipe.transform((this.currentDate), 'yyyy-MM-dd');
            this.isEdited = true;
            this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_EMPID"]).then(function (val) {
                _this.empId = val;
                _this.loadingCtrl.create({
                    message: "Loading..."
                }).then(function (overlay) {
                    _this.loading = overlay;
                    _this.getAddLeaveEndDate();
                });
            });
            this.title = "Edit Leave";
        }
        else if (this.subId != '') {
            this.dateFrom = this.datepipe.transform((this.currentDate), 'yyyy-MM-dd');
            this.dateTo = this.datepipe.transform((this.currentDate), 'yyyy-MM-dd');
            this.isEdited = true;
            this.title = "Post Leave";
            this.getConfigFiles(this.subId);
        }
        else {
            this.dateFrom = this.datepipe.transform((this.currentDate), 'yyyy-MM-dd');
            this.dateTo = this.datepipe.transform((this.currentDate), 'yyyy-MM-dd');
            this.isEdited = false;
            this.title = "Post Leave";
        }
        if (this.duration == '' || !this.duration || this.duration == null || this.duration == undefined) {
            this.duration = '1';
        }
        switch (this.activatedRoute.snapshot.paramMap.get('time')) {
            case "AM": {
                this.timeFrom = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveTime"].AM;
                break;
            }
            case "PM": {
                this.timeFrom = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveTime"].PM;
                break;
            }
            default: {
                this.timeFrom = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["LeaveTime"].AM;
                break;
            }
        }
        switch (this.activatedRoute.snapshot.paramMap.get('request')) {
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["REASON_CODE_PERSONAL"]: {
                this.reason = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["Reason"].personal;
                break;
            }
            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["REASON_CODE_NOT_FEEL"]: {
                this.reason = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["Reason"].notwell;
                break;
            }
        }
        if (!this.subId || this.subId != '') {
            this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_LEAVETYPES"]).then(function (val) {
                _this.results = val;
                if (_this.id == undefined || _this.id == null || _this.id == "") {
                    _this.type = val['0']['SEQNO'];
                    if (_this.type == "BL") {
                        _this.isDurationDisabled = true;
                        _this.isReasonDisabled = true;
                    }
                }
                else {
                    val.forEach(function (element) {
                        if (element['SEQNO'] == _this.id) {
                            _this.type = element['SEQNO'];
                            if (_this.type == "BL") {
                                _this.isDurationDisabled = true;
                                _this.isReasonDisabled = true;
                            }
                        }
                    });
                    if (!_this.type) {
                        _this.type = val['0']['SEQNO'];
                        if (_this.type == "BL") {
                            _this.isDurationDisabled = true;
                            _this.isReasonDisabled = true;
                        }
                    }
                }
            });
        }
        if (!this.empId) {
            this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_EMPID"]).then(function (val) {
                _this.empId = val;
            });
        }
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SUBORDINATES"]).then(function (val) {
            _this.subordinates = val;
        });
    };
    LeaveaddPage.prototype.getAddLeaveEndDate = function () {
        var _this = this;
        if (!this.duration) {
            return;
        }
        if (!this.datepipe.transform(this.dateFrom, 'MM/dd/yyyy')) {
            return;
        }
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SESSION"]).then(function (val) {
            var leave = {
                LeaveFrom: _this.datepipe.transform(_this.dateFrom, 'MM/dd/yyyy'),
                LeaveFromTime: _this.timeFrom,
                LeaveNoOfDays: _this.duration,
                EmployeeId: _this.empId,
                LeaveRequestType: _this.type,
                SessionID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_RECORD_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["VERSION"],
                User: _this.empId
            };
            if (_this.subId != '') {
                leave['EmployeeId'] = _this.subId;
            }
            _this.loadingCtrl.create({
                message: "Loading..."
            }).then(function (overlay) {
                _this.loadingGetLeaveFrom = overlay;
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["SERVER_URL"]] + "/api/LeaveRequest/GetAddLeaveEndDate", leave, {})
                        .then(function (data) {
                        if (data.data == null || data.data == undefined || !data.data) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                            _this.loadingGetLeaveFrom.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["POST_SUCCESS"]) {
                            _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                            _this.loadingGetLeaveFrom.dismiss();
                            return;
                        }
                        if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["POST_YES"]) {
                            _this.loadingGetLeaveFrom.dismiss();
                            switch (jsonData['Message']) {
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["OUTDATED_ERROR"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["OUTDATED_MESSAGE"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OTHER_DEVICE"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_EXPIRED"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_EXPIRED"]);
                                    return;
                                case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_REQUIRED"]:
                                    _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_REQUIRED"]);
                                    return;
                            }
                            _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                            return;
                        }
                        _this.dateFrom = _this.datepipe.transform(new Date(jsonData['Value'][0]['LEAVEFROM']).toString(), 'yyyy-MM-dd');
                        _this.dateTo = _this.datepipe.transform(new Date(jsonData['Value'][0]['LEAVETO']).toString(), 'yyyy-MM-dd');
                        _this.timeTo = jsonData['Value'][0]['LeaveToTime'];
                        _this.loadingGetLeaveFrom.dismiss();
                    })
                        .catch(function (error) {
                        _this.loadingGetLeaveFrom.dismiss();
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                    });
                });
            });
        });
    };
    LeaveaddPage.prototype.sendLeaveRequest = function () {
        var _this = this;
        if (this.duration == "" || this.duration == undefined) {
            alert('Duration is empty!');
            return;
        }
        if (this.dateFrom == null || this.dateFrom == undefined || this.dateFrom == '') {
            alert("Leave Date is empty");
            return;
        }
        var selectedDate = this.datepipe.transform(this.dateFrom, 'MM/dd/yyyy');
        var leave = {
            ID: 0,
            EmployeeId: Number(this.empId),
            LeaveType: this.type,
            LeaveRequestType: null,
            LeaveNoOfDays: this.duration,
            LeaveFrom: selectedDate,
            LeaveFromTime: this.timeFrom,
            LeaveTo: selectedDate,
            LeaveToTime: "PM",
            LeaveReturn: selectedDate,
            LeaveRemark: this.remarks,
            LeaveReason: this.reason,
            LeaveRequestStatus: this.getStatus(),
            Attachment: null,
            ApproverRemarks: null,
            CancelRemarks: null,
            ApprovalStatus: null,
            User: this.empId,
            DateFrom: null,
            DateTo: null,
            EmpName: null,
            ShowAll: false
        };
        if (this.subId != '') {
            leave['EmployeeId'] = Number(this.subId);
            leave['User'] = this.empId;
        }
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            console.log("Load");
            if (_this.hasAttachment) {
                leave['Attachment'] = _this.getNewName();
                console.log("Will connect to ftp");
                _this.connectToFtp(_this.uriName, leave);
                return;
            }
            if (_this.currentDate != '') {
                leave['ID'] = Number(_this.leaveId);
                _this.updateLeave(leave);
            }
            else {
                if (_this.subId != '') {
                    _this.requestLeaveForSubordinate(leave);
                }
                else {
                    _this.requestLeave(leave);
                }
            }
        });
    };
    LeaveaddPage.prototype.onUploadFinish = function (leave) {
        console.log("onUploadFinish");
        if (this.currentDate != '') {
            leave['ID'] = Number(this.leaveId);
            this.updateLeave(leave);
        }
        else {
            if (this.subId != '') {
                this.requestLeaveForSubordinate(leave);
            }
            else {
                this.requestLeave(leave);
            }
        }
    };
    LeaveaddPage.prototype.requestLeave = function (leave) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SESSION"]).then(function (val) {
            console.log("requestLeave");
            leave['SessionID'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_RECORD_ID"]];
            leave['SecurityStamp'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SECURITY_STAMP"]];
            leave['Token'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_TOKEN"]];
            leave['AppPlatForm'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["APP_PLATFORM"];
            leave['AppVersion'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["VERSION"];
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["SERVER_URL"]] + "/api/LeaveRequest/LeaveRequest", leave, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["POST_SUCCESS"]) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["POST_YES"]) {
                        _this.loading.dismiss();
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                        return;
                    }
                    _this.loading.dismiss();
                    _this.showDialog("DONE!", "Your leave has been saved", true, "Great!");
                })
                    .catch(function (error) {
                    _this.loading.dismiss();
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                });
            });
        });
    };
    LeaveaddPage.prototype.requestLeaveForSubordinate = function (leave) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SESSION"]).then(function (val) {
            leave['SessionID'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_RECORD_ID"]];
            leave['SecurityStamp'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SECURITY_STAMP"]];
            leave['Token'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_TOKEN"]];
            leave['AppPlatForm'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["APP_PLATFORM"];
            leave['AppVersion'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["VERSION"];
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["SERVER_URL"]] + "/api/GetSubordinates/LeaveRequest", leave, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["POST_SUCCESS"]) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["POST_YES"]) {
                        _this.loading.dismiss();
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                        return;
                    }
                    _this.loading.dismiss();
                    _this.showDialog("DONE!", "Requested leave has been saved", true, "Great!");
                })
                    .catch(function (error) {
                    _this.loading.dismiss();
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                });
            });
        });
    };
    LeaveaddPage.prototype.updateLeave = function (leave) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SESSION"]).then(function (val) {
            leave['SessionID'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_RECORD_ID"]];
            leave['SecurityStamp'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SECURITY_STAMP"]];
            leave['Token'] = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_TOKEN"]];
            leave['AppPlatForm'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["APP_PLATFORM"];
            leave['AppVersion'] = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["VERSION"];
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["SERVER_URL"]] + "/api/LeaveRequest/UpdateLeaveRequest", leave, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined || !data.data) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["POST_SUCCESS"]) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["POST_YES"]) {
                        _this.loading.dismiss();
                        switch (jsonData['Message']) {
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["OUTDATED_ERROR"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OUTDATED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["OUTDATED_MESSAGE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OTHER_DEVICE"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_OTHER_DEVICE_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_OTHER_DEVICE"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_EXPIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_EXPIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_EXPIRED"]);
                                return;
                            case src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_REQUIRED"]:
                                _this.loginService.showSessionError(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_REQUIRED_HEADER"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["ERROR_MESSAGE_REQUIRED"]);
                                return;
                        }
                        _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                        return;
                    }
                    _this.loading.dismiss();
                    _this.showDialog("DONE!", "Your leave has been saved", true, "Great!");
                })
                    .catch(function (error) {
                    _this.loading.dismiss();
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                });
            });
        });
    };
    LeaveaddPage.prototype.showDialog = function (title, message, closePage, buttonText) {
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
                                            _this.navCtrl.pop();
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
    LeaveaddPage.prototype.onLeaveTypeChange = function () {
        this.getAddLeaveEndDate();
        if (this.type == "BL") {
            this.isDurationDisabled = true;
            this.isReasonDisabled = true;
            this.duration = "1";
            this.reason = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["Reason"].personal;
        }
        else {
            this.isDurationDisabled = false;
            this.isReasonDisabled = false;
        }
    };
    LeaveaddPage.prototype.getStatus = function () {
        return (this.isPlanned ? src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["LEAVE_STATUS_PLANNED"] : src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["LEAVE_STATUS_FOR_APPROVAL"]);
    };
    LeaveaddPage.prototype.getConfigFiles = function (employeeID) {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_RECORD_ID"]],
                UserID: employeeID,
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["VERSION"]
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["SERVER_URL"]] + "/api/Config/GetConfigFiles", request, {})
                    .then(function (data) {
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Success'] == "Yes") {
                        _this.results = jsonData['Value']['tblLeaveTypeList'];
                        if (!_this.type) {
                            _this.type = _this.results['0']['SEQNO'];
                        }
                        if (_this.subId != '') {
                            _this.type = _this.results['0']['SEQNO'];
                        }
                    }
                    else {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                    }
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["CONNECTION_ERROR"], true, "Okay");
                });
            });
        });
    };
    LeaveaddPage.prototype.onSubordinateChange = function () {
        this.getConfigFiles(this.subId);
    };
    LeaveaddPage.prototype.attachFile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            quality: 100,
                            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                            saveToPhotoAlbum: false,
                            correctOrientation: true
                        };
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: 'Select Action',
                                buttons: [{
                                        text: 'Photos',
                                        icon: 'image',
                                        handler: function () {
                                            _this.imagePicker.getPictures(options).then(function (results) {
                                                if (results.length > 1) {
                                                    alert("Please select only 1 image/file");
                                                    return;
                                                }
                                                _this.getFileName(String(results[0]));
                                            }, function (err) {
                                                alert("Error attaching file. Please try again.");
                                            });
                                        }
                                    }, {
                                        text: 'Files/iCloud',
                                        icon: 'folder',
                                        handler: function () {
                                            _this.filePicker.pickFile()
                                                .then(function (uri) {
                                                return _this.getFileName(String(uri));
                                            })
                                                .catch(function (err) { return alert("Error attaching file. Please try again."); });
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
    LeaveaddPage.prototype.showUploadFailDialog = function (error) {
        console.log("showUploadFailDialog");
        console.log(error);
        if (this.loading) {
            this.loading.dismiss();
        }
        this.uploadSuccess = false;
        alert("Error attaching file. Please try again.");
    };
    LeaveaddPage.prototype.connectToFtp = function (file, leave) {
        var _this = this;
        console.log("connectToFtp");
        this.fTP.connect(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["FTP_HOST"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["FTP_USERNAME"], src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_9__["FTP_PASSWORD"])
            .then(function (res) { return _this.uploadFileToFtp(file, res, leave); })
            .catch(function (error) { return _this.showUploadFailDialog(error); });
    };
    LeaveaddPage.prototype.uploadFileToFtp = function (file, res, leave) {
        var _this = this;
        console.log("uploadFileToFtp");
        this.fTP.upload(file, "/Leave/" + this.getNewName())
            .subscribe(function (res) {
            if (res == 1) {
                _this.onUploadFinish(leave);
                _this.fTP.disconnect();
                _this.uploadSuccess = true;
            }
            else {
                console.log("Not Res 1");
                console.log(res);
            }
        }, function (error) {
            _this.showUploadFailDialog(error);
        });
        // .toPromise()
        // .then((res) => {
        //   if (res == 1) {
        //     this.onUploadFinish(leave);
        //     this.fTP.disconnect();
        //     this.uploadSuccess = true;
        //   }
        //   else{
        //     console.log("Not Res 1");
        //     console.log(res);
        //   }
        // })
        // .catch(err => { this.showUploadFailDialog(err) });
    };
    LeaveaddPage.prototype.getFileName = function (name) {
        this.hasAttachment = true;
        this.uriName = name;
        var temp = name.split("/");
        var awe = temp[temp.length - 1];
        this.fileName = awe;
        return awe;
    };
    LeaveaddPage.prototype.getPaddedName = function (name) {
        var paddedName = "";
        if (name.length <= 9) {
            paddedName = ("000000000" + name).substring(name.length);
        }
        return paddedName;
    };
    LeaveaddPage.prototype.getExtension = function (name) {
        var temp = name.split(".");
        var awe = temp[temp.length - 1];
        return awe;
    };
    LeaveaddPage.prototype.getNewName = function () {
        var newFileName = this.getFileName(this.uriName);
        newFileName = newFileName.replace(this.getExtension(this.uriName), "");
        newFileName = newFileName.replace(".", "");
        newFileName = newFileName.replace(" ", "");
        newFileName = newFileName.replace("  ", "");
        newFileName = newFileName.replace("/", "");
        newFileName = newFileName.replace("-", "");
        newFileName = newFileName.replace("'", "");
        newFileName = this.getPaddedName(String(this.empId)) + newFileName + this.getCurrentDate() + "." + this.getExtension(this.uriName);
        return newFileName;
    };
    LeaveaddPage.prototype.getCurrentDate = function () {
        return this.datepipe.transform(new Date().toString(), 'yyyyMMddHHmmss');
    };
    LeaveaddPage.prototype.removeAttachment = function () {
        this.fileName = "No ";
        this.hasAttachment = false;
    };
    LeaveaddPage.prototype.onPlannedChecked = function () {
        if (this.isPlanned) {
            this.reason = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["Reason"].personal;
            this.isReasonDisabled = true;
        }
        else if (this.type == "BL") {
            this.isReasonDisabled = true;
            this.reason = src_app_services_leave_service__WEBPACK_IMPORTED_MODULE_4__["Reason"].personal;
        }
        else if (!this.isPlanned && this.type != "BL") {
            this.isReasonDisabled = false;
        }
    };
    LeaveaddPage.prototype.isDivisibleByDot5 = function (number) {
        return number % .5 == 0;
    };
    LeaveaddPage.prototype.onDurationChanged = function () {
        if (!this.isDivisibleByDot5(Number(this.duration))) {
            alert("Leave Duration should be divisible by 0.50");
            this.duration = "1";
            return;
        }
        this.getAddLeaveEndDate();
    };
    LeaveaddPage.prototype.goBack = function () { this.navCtrl.back(); };
    LeaveaddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leaveadd',
            template: __webpack_require__(/*! ./leaveadd.page.html */ "./src/app/pages/leaveadd/leaveadd.page.html"),
            styles: [__webpack_require__(/*! ./leaveadd.page.scss */ "./src/app/pages/leaveadd/leaveadd.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["LoadingController"],
            _ionic_native_file_picker_ngx__WEBPACK_IMPORTED_MODULE_10__["IOSFilePicker"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_12__["Camera"],
            _ionic_native_ftp_ngx__WEBPACK_IMPORTED_MODULE_13__["FTP"],
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__["ImagePicker"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_7__["HTTP"]])
    ], LeaveaddPage);
    return LeaveaddPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-leaveadd-leaveadd-module.js.map