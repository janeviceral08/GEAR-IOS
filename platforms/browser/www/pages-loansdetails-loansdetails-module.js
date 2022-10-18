(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-loansdetails-loansdetails-module"],{

/***/ "./src/app/pages/loansdetails/loansdetails.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/loansdetails/loansdetails.module.ts ***!
  \***********************************************************/
/*! exports provided: LoansdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansdetailsPageModule", function() { return LoansdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loansdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loansdetails.page */ "./src/app/pages/loansdetails/loansdetails.page.ts");







var routes = [
    {
        path: '',
        component: _loansdetails_page__WEBPACK_IMPORTED_MODULE_6__["LoansdetailsPage"]
    }
];
var LoansdetailsPageModule = /** @class */ (function () {
    function LoansdetailsPageModule() {
    }
    LoansdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_loansdetails_page__WEBPACK_IMPORTED_MODULE_6__["LoansdetailsPage"]]
        })
    ], LoansdetailsPageModule);
    return LoansdetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/loansdetails/loansdetails.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/loansdetails/loansdetails.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-buttons>\n        <ion-back-button class=\"button-light\" slot=\"start\" mode=\"md\"></ion-back-button>\n        <ion-title mode=\"md\">Loan Details</ion-title>\n    </ion-buttons>\n</ion-header>\n<ion-content padding>\n    <ion-item class=\"classMainDetails\" lines=\"full\">\n        <img class=\"imgLoan \" src=\"{{getLoansSrc(loanName)}}\" alt=\" \">\n        <ion-label class=\"loanDetails \" text-wrap>\n            <div class=\"loanName \">\n                {{ loanName }}\n            </div>\n            <ion-grid class=\"loanInfo \">\n                <ion-row class=\"rowLoanDetails\">\n                    <ion-col>\n                        LOAN AMOUNT:\n                    </ion-col>\n                    <ion-col>\n                        LOAN BALANCE:\n                    </ion-col>\n                </ion-row>\n                <ion-row class=\"rowLoanAmount\">\n                    <ion-col>\n                        {{loanAmount}}\n                    </ion-col>\n                    <ion-col>\n                        {{loanBalance}}\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">LOAN DATE</span>\n            <span class=\"EntryValue\">{{ loanDate }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">LOAN INTEREST</span>\n            <span class=\"EntryValue\">{{ loanInterest }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">LOAN TOTAL PAYMENT</span>\n            <span class=\"EntryValue\">{{ loanTotalPayment }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">PAYMENT START</span>\n            <span class=\"EntryValue\">{{ paymentStart }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">AMORTIZATION</span>\n            <span class=\"EntryValue\">{{ payment }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-item lines=\"full\">\n        <ion-label text-wrap>\n            <span class=\"EntryName\">TOTAL PAYMENT COUNT</span>\n            <span class=\"EntryValue\">{{ paymentCount }}</span>\n        </ion-label>\n    </ion-item>\n    <ion-card>\n        <ion-item *ngFor=\"let item of (results );\">\n            <img class=\"imgPhp \" src=\"assets/icon/ic_currency_php.png\" alt=\" \">\n            <ion-label text-wrap>\n                <span class=\"lblPayPeriod\">{{ item.PayPeriod }}</span>\n                <div class=\"lblDeductedAmount\">{{ item.DeductedAmount }}</div>\n                <div class=\"lblPayCount\">Payment number: {{ item.PaymentNo }}</div>\n            </ion-label>\n        </ion-item>\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/loansdetails/loansdetails.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/loansdetails/loansdetails.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-color: #558B2F;\n  padding-bottom: 15px;\n  padding-top: 30px; }\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-left: 0px; }\n\nion-back-button {\n  color: white;\n  margin-left: -10px; }\n\nion-item {\n  --padding-start: 0px !important;\n  padding-top: 6px; }\n\nion-label {\n  margin: 0px; }\n\nion-col {\n  padding-left: 0px;\n  padding-bottom: 0px; }\n\nion-card {\n  margin: 10px 0px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.classMainDetails {\n  --padding-bottom: 12px; }\n\n.imgLoan {\n  width: 50px;\n  height: 50px;\n  margin: 10px 20px;\n  margin-left: 5px; }\n\n.loanDetails {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.loanName {\n  color: #2a2a2a;\n  font-size: 15px;\n  display: block;\n  font-family: \"RobotoMedium\";\n  padding-bottom: 5px; }\n\n.loanInfo {\n  display: block;\n  color: #808080;\n  padding: 0px; }\n\n.rowLoanDetails {\n  font-size: 11px; }\n\n.rowLoanAmount {\n  color: #2a2a2a;\n  font-size: 15px;\n  font-family: \"RobotoMedium\"; }\n\n.EntryName {\n  color: #676767;\n  font-size: 10px;\n  display: block; }\n\n.EntryValue {\n  color: #2a2a2a;\n  font-size: 14px;\n  font-family: \"RobotoRegular\"; }\n\n.lblDeductedAmount {\n  color: #2a2a2a;\n  font-size: 16px;\n  font-family: \"RobotoMedium\"; }\n\n.lblPayCount {\n  color: #2a2a2a;\n  font-size: 12px; }\n\n.lblPayPeriod {\n  float: right;\n  color: #2a2a2a;\n  font-size: 14px;\n  font-family: \"RobotoMedium\"; }\n\n.imgPhp {\n  width: 25px;\n  margin: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMtZ2FiYy9Eb2N1bWVudHMvR0VBUi9HRUFSX2lPUy9zcmMvYXBwL3BhZ2VzL2xvYW5zZGV0YWlscy9sb2Fuc2RldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSwrQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGdCQUFnQjtFQUNoQiw0RUFBNEUsRUFBQTs7QUFHaEY7RUFDSSxzQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxjQUFjO0VBQ2QsY0FBYztFQUNkLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9hbnNkZXRhaWxzL2xvYW5zZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4QjJGO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDZweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuaW9uLWNvbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmNsYXNzTWFpbkRldGFpbHMge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbi5pbWdMb2FuIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmxvYW5EZXRhaWxzIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5sb2FuTmFtZSB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5sb2FuSW5mbyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4ucm93TG9hbkRldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnJvd0xvYW5BbW91bnQge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLkVudHJ5TmFtZSB7XG4gICAgY29sb3I6ICM2NzY3Njc7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uRW50cnlWYWx1ZSB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLmxibERlZHVjdGVkQW1vdW50IHtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvTWVkaXVtXCI7XG59XG5cbi5sYmxQYXlDb3VudCB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubGJsUGF5UGVyaW9kIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4uaW1nUGhwIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBtYXJnaW46IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/loansdetails/loansdetails.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/loansdetails/loansdetails.page.ts ***!
  \*********************************************************/
/*! exports provided: LoansdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansdetailsPage", function() { return LoansdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");










var LoansdetailsPage = /** @class */ (function () {
    function LoansdetailsPage(router, activatedRoute, loadingCtrl, httpApi, loginService, modalController, navCtrl, alertController, storage) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loadingCtrl = loadingCtrl;
        this.httpApi = httpApi;
        this.loginService = loginService;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.storage = storage;
    }
    LoansdetailsPage.prototype.ngOnInit = function () {
    };
    LoansdetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_LOANDETAILS"]).then(function (val) {
                _this.id = val.RecordId;
                _this.empId = val.LkUpEmployeeName;
                _this.loanName = val.LoanName;
                _this.loanDate = val.LoanDate;
                _this.loanAmount = val.LoanAmount;
                _this.loanInterest = val.LoanInterest;
                _this.beginningPayment = val.BeginningPayment;
                _this.beginningPaymentDate = val.BeginningPaymentDate;
                _this.beginingPaymentRemark = val.BeginingPaymentRemark;
                _this.loanTotalPayment = val.LoanTotalPayment;
                _this.loanBalance1 = val.LoanBalance1;
                _this.paymentStart = val.PaymentStart;
                _this.payment = val.Payment;
                _this.paymentCount = val.PaymentCount;
                _this.status = val.Status;
                _this.loanBalance = val.LoanBalance;
                _this.loading.dismiss();
                _this.getLoanDetails();
            });
        });
    };
    LoansdetailsPage.prototype.getLoanDetails = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SESSION"]).then(function (val) {
            var request = {
                RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_RECORD_ID"]],
                USER: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_USER_ID"]],
                SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SECURITY_STAMP"]],
                Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_TOKEN"]],
                AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["APP_PLATFORM"],
                AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["VERSION"],
                EmployeeId: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_USER_ID"]],
                ReferenceNo: _this.id
            };
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SERVER_SETTINGS"]).then(function (value) {
                _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["SERVER_URL"]] + "/api/Loan/GetLoanDetails", request, {})
                    .then(function (data) {
                    if (data.data == null || data.data == undefined) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    var jsonData = JSON.parse(data.data);
                    if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["POST_SUCCESS"]) {
                        _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["CONNECTION_ERROR"], true, "Okay");
                        _this.loading.dismiss();
                        return;
                    }
                    if (jsonData['Success'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["POST_YES"]) {
                        _this.loading.dismiss();
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
                        _this.showDialog("ERROR!", jsonData['Message'], false, "Okay");
                        return;
                    }
                    _this.results = jsonData['Value']['Table'];
                    console.log(_this.results);
                    _this.loading.dismiss();
                })
                    .catch(function (error) {
                    _this.showDialog("ERROR!", src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["CONNECTION_ERROR"], true, "Okay");
                    _this.loading.dismiss();
                });
            });
        });
    };
    LoansdetailsPage.prototype.showDialog = function (title, message, closePage, buttonText) {
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
    LoansdetailsPage.prototype.getLoansSrc = function (loanName) {
        if (loanName.toUpperCase() == "SSS SALARY LOAN") {
            return "assets/icon/ic_loans_sss.png";
        }
        else if (loanName.toUpperCase() == "SSS CALAMITY LOANS") {
            return "assets/icon/ic_loans_sss.png";
        }
        else if (loanName.toUpperCase() == "GABC UKAY SALES") {
            return "assets/icon/ic_loans_gabc.png";
        }
        else if (loanName.toUpperCase() == "GABC IN-HOUSE SALES") {
            return "assets/icon/ic_loans_gabc.png";
        }
        else if (loanName.toUpperCase() == "GABC COMPANY STORE") {
            return "assets/icon/ic_loans_gabc.png";
        }
        else if (loanName.toUpperCase() == "GOLDEN ABC WAREHOUSE SALES") {
            return "assets/icon/ic_loans_gabc.png";
        }
        else if (loanName.toUpperCase() == "RL ONLINE ORDERING") {
            return "assets/icon/ic_loans_gabc.png";
        }
        else if (loanName.toUpperCase() == "FOR ME UKAY UKAY") {
            return "assets/icon/ic_loans_gabc.png";
        }
        else if (loanName.toUpperCase() == "PAGIBIG MULTIPURPOSE LOAN") {
            return "assets/icon/ic_loans_pagibig.png";
        }
        else if (loanName.toUpperCase() == "HDMF LOANS") {
            return "assets/icon/ic_loans_pagibig.png";
        }
        else if (loanName.toUpperCase() == "PHILCARE - HMO DEPENDENTS") {
            return "assets/icon/ic_loans_philcare.png";
        }
        else if (loanName.toUpperCase() == "SECURITY BANK LOAN") {
            return "assets/icon/ic_loans_bank.png";
        }
        else if (loanName.toUpperCase() == "EQUICOM LOAN") {
            return "assets/icon/ic_loans_bank.png";
        }
        else if (loanName.toUpperCase() == "CITIFINANCIAL SALARY LOAN") {
            return "assets/icon/ic_loans_bank.png";
        }
        else if (loanName.toUpperCase() == "ADVANCES") {
            return "assets/icon/ic_loans_advances.png";
        }
        else if (loanName.toUpperCase() == "TAX WITHHELD") {
            return "assets/icon/ic_loans_tax.png";
        }
        else if (loanName.toUpperCase() == "EYE GLASS LOAN") {
            return "assets/icon/ic_loans_eye.png";
        }
        else if (loanName.toUpperCase() == "CAR LOAN") {
            return "assets/icon/ic_loans_car.png";
        }
        else if (loanName.toUpperCase() == "VACCINATION") {
            return "assets/icon/ic_loans_vac.png";
        }
        else if (loanName.toUpperCase() == "UNIFORM") {
            return "assets/icon/ic_loans_uniform.png";
        }
        else if (loanName.toUpperCase() == "EMERGENCY LOAN") {
            return "assets/icon/ic_loans_emergency.png";
        }
        else if (loanName.toUpperCase() == "MISCELLANEOUS") {
            return "assets/icon/ic_loans_misc.png";
        }
        else if (loanName.toUpperCase() == "LIFE SCIENCE") {
            return "assets/icon/ic_loans_life.png";
        }
        else {
            return "assets/icon/ic_loans_tax.png";
        }
    };
    LoansdetailsPage.prototype.goBack = function () { this.navCtrl.back(); };
    LoansdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loansdetails',
            template: __webpack_require__(/*! ./loansdetails.page.html */ "./src/app/pages/loansdetails/loansdetails.page.html"),
            styles: [__webpack_require__(/*! ./loansdetails.page.scss */ "./src/app/pages/loansdetails/loansdetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__["HTTP"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], LoansdetailsPage);
    return LoansdetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-loansdetails-loansdetails-module.js.map