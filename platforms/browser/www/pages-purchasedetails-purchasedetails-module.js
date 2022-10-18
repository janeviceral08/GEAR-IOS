(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-purchasedetails-purchasedetails-module"],{

/***/ "./src/app/pages/purchasedetails/purchasedetails.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/purchasedetails/purchasedetails.module.ts ***!
  \*****************************************************************/
/*! exports provided: PurchasedetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedetailsPageModule", function() { return PurchasedetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _purchasedetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchasedetails.page */ "./src/app/pages/purchasedetails/purchasedetails.page.ts");
/* harmony import */ var _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.module */ "./src/app/component/filter-menu/filter-menu.module.ts");








var routes = [
    {
        path: '',
        component: _purchasedetails_page__WEBPACK_IMPORTED_MODULE_6__["PurchasedetailsPage"]
    }
];
var PurchasedetailsPageModule = /** @class */ (function () {
    function PurchasedetailsPageModule() {
    }
    PurchasedetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _component_filter_menu_filter_menu_module__WEBPACK_IMPORTED_MODULE_7__["FilterMenuComponentModule"]
            ],
            declarations: [_purchasedetails_page__WEBPACK_IMPORTED_MODULE_6__["PurchasedetailsPage"]]
        })
    ], PurchasedetailsPageModule);
    return PurchasedetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/purchasedetails/purchasedetails.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/purchasedetails/purchasedetails.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-buttons>\n        <ion-back-button class=\"button-light\" slot=\"start\" mode=\"md\"></ion-back-button>\n        <ion-title mode=\"md\">Purchase Details</ion-title>\n        <ion-button class=btnFilter slot=\"end\" color=\"light\" (click)=\"openModal()\">\n            <ion-icon slot=\"start\" name=\"search\" mode=\"md\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n</ion-header>\n<ion-content padding>\n    <div *ngIf=\"noError; else error\">\n        <ion-item class=\"classMainDetails\" lines=\"full\" *ngIf=\"fromPage=='Online'\">\n            <img class=\"imgEmployee \" src=\"assets/icon/ic_purchase_online.png\" alt=\" \">\n            <ion-label class=\"EmpDetails \" text-wrap>\n                <div class=\"EmpName \">\n                    Online Purchases\n                </div>\n                <ion-grid class=\"EmpInfo \">\n                    <ion-row class=\"rowEmpDetails\">\n                        <ion-col>\n                            TOTAL AMOUNT:\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"rowEmpAmount\">\n                        <ion-col *ngIf=\"results[['Table2']].length > 0\">\n                            {{results['Table2'][0].TotalAmount}}\n                        </ion-col>\n                        <ion-col *ngIf=\"results['Table2'].length == 0\">\n                            0\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-label>\n        </ion-item>\n        <ion-item class=\"classMainDetails\" lines=\"full\" *ngIf=\"fromPage=='Canteen'\">\n            <img class=\"imgEmployee \" src=\"assets/icon/ic_purchase_canteen.png\" alt=\" \">\n            <ion-label class=\"EmpDetails \" text-wrap>\n                <div class=\"EmpName \">\n                    Canteen Credits\n                </div>\n                <ion-grid class=\"EmpInfo \">\n                    <ion-row class=\"rowEmpDetails\">\n                        <ion-col>\n                            GRAND TOTAL:\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class=\"rowEmpAmount\">\n                        <ion-col *ngIf=\"results['Table2'][0].Column1 != null\">\n                            {{results['Table2'][0].Column1}}\n                        </ion-col>\n                        <ion-col *ngIf=\"results['Table2'][0].Column1 == null\">\n                            0\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-label>\n        </ion-item>\n        <ion-card *ngIf=\"fromPage=='Online'\">\n            <ion-item *ngFor=\"let item of (results['Table1']);\">\n                <img class=\"imgPhp \" src=\"assets/icon/ic_currency_php.png\" alt=\" \">\n                <ion-label text-wrap>\n                    <span class=\"lblOrderDate\">{{ item.OrderDate }}</span>\n                    <div class=\"lblAmount\">{{ item.ItemTotal }}</div>\n                    <div class=\"lblItemName\">{{ item.ItemName }}</div>\n                    <div class=\"lblQuantity\">Quantity: {{ item.ItemQty }}</div>\n                </ion-label>\n            </ion-item>\n        </ion-card>\n        <ion-card *ngIf=\"fromPage=='Canteen'\">\n            <ion-item *ngFor=\"let item of (results['Table1']);\">\n                <img class=\"imgPhp \" src=\"assets/icon/ic_currency_php.png\" alt=\" \">\n                <ion-label text-wrap>\n                    <span class=\"lblMealDate\">{{ item.Date }}</span>\n                    <div class=\"lblAmount\">{{ item.Total }}</div>\n                    <span class=\"lblPrice\">Price: {{ item.Price }}</span>\n                    <div class=\"lblItemName\">{{ item.MealName }}</div>\n                    <div class=\"lblQuantity\">Quantity: {{ item.Qty }}</div>\n                </ion-label>\n            </ion-item>\n        </ion-card>\n    </div>\n</ion-content>\n<ng-template #error>\n    <ion-item lines=\"none\">\n        <div class=\"errorbox\">\n            <ion-avatar class=\"center\">\n                <img src=\"assets/img/logo_gabc_gray.png\"></ion-avatar>\n            <span class=\"errorMessage\">{{errorMessage}}</span>\n            <span class=\"errorMessage\">\n                <ion-button class=\"errorButton\" (click)=\"refresh()\">RETRY</ion-button>\n                <ion-button class=\"errorButton\" style=\"margin-left:10px\" [routerLink]=\" ['/main/home']\">\n                    <ion-icon color=\"light\" name=\"home\"></ion-icon>\n                </ion-button>\n            </span>\n        </div>\n    </ion-item>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/purchasedetails/purchasedetails.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/purchasedetails/purchasedetails.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-header {\n  background-color: #558B2F;\n  padding-bottom: 15px;\n  padding-top: 30px; }\n\nion-title {\n  color: white;\n  font-size: 20px;\n  padding-left: 0px; }\n\nion-back-button {\n  color: white;\n  margin-left: -10px; }\n\nion-item {\n  --padding-start: 0px !important;\n  padding-top: 6px; }\n\nion-label {\n  margin: 0px; }\n\nion-col {\n  padding-left: 0px;\n  padding-bottom: 0px;\n  padding-top: 0px; }\n\nion-card {\n  margin: 10px 0px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.classMainDetails {\n  --padding-bottom: 12px; }\n\n.imgEmployee {\n  width: 50px;\n  height: 50px;\n  margin: 10px 20px;\n  margin-left: 5px; }\n\n.EmpDetails {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.EmpName {\n  color: #2a2a2a;\n  font-size: 15px;\n  display: block;\n  font-family: \"RobotoMedium\";\n  margin-bottom: 5px; }\n\n.EmpInfo {\n  display: block;\n  color: #808080;\n  padding: 0px; }\n\n.rowEmpDetails {\n  font-size: 11px; }\n\n.rowEmpAmount {\n  color: #2a2a2a;\n  font-size: 15px;\n  font-family: \"RobotoMedium\"; }\n\n.EntryName {\n  color: #676767;\n  font-size: 10px;\n  display: block; }\n\n.EntryValue {\n  color: #2a2a2a;\n  font-size: 14px;\n  font-family: \"RobotoRegular\"; }\n\n.lblAmount {\n  color: #2a2a2a;\n  font-size: 16px;\n  font-family: \"RobotoMedium\"; }\n\n.lblItemName {\n  color: #2a2a2a;\n  font-size: 12px; }\n\n.lblQuantity {\n  color: #2a2a2a;\n  font-size: 14px;\n  margin-bottom: 5px;\n  font-family: \"RobotoMedium\"; }\n\n.lblOrderDate {\n  float: right;\n  color: #2a2a2a;\n  font-size: 14px;\n  font-family: \"RobotoMedium\"; }\n\n.lblMealDate {\n  float: right;\n  color: #2a2a2a;\n  font-size: 14px; }\n\n.lblPrice {\n  float: right;\n  color: #2a2a2a;\n  font-size: 14px;\n  font-family: \"RobotoMedium\"; }\n\n.imgPhp {\n  width: 25px;\n  margin: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMtZ2FiYy9Eb2N1bWVudHMvR0VBUi9HRUFSX2lPUy9zcmMvYXBwL3BhZ2VzL3B1cmNoYXNlZGV0YWlscy9wdXJjaGFzZWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSwrQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0I7RUFDaEIsNEVBQTRFLEVBQUE7O0FBS2hGO0VBQ0ksc0JBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0Isa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksY0FBYztFQUNkLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZiw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2YsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2YsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3B1cmNoYXNlZGV0YWlscy9wdXJjaGFzZWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1OEIyRjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi1jb2wge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmJ0bkZpbHRlciB7fVxuXG4uY2xhc3NNYWluRGV0YWlscyB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cblxuLmltZ0VtcGxveWVlIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLkVtcERldGFpbHMge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLkVtcE5hbWUge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5FbXBJbmZvIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzgwODA4MDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbi5yb3dFbXBEZXRhaWxzIHtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG5cbi5yb3dFbXBBbW91bnQge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLkVudHJ5TmFtZSB7XG4gICAgY29sb3I6ICM2NzY3Njc7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uRW50cnlWYWx1ZSB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLmxibEFtb3VudCB7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4ubGJsSXRlbU5hbWUge1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmxibFF1YW50aXR5IHtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4ubGJsT3JkZXJEYXRlIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICMyYTJhMmE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xufVxuXG4ubGJsTWVhbERhdGUge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogIzJhMmEyYTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5sYmxQcmljZSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjMmEyYTJhO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLmltZ1BocCB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgbWFyZ2luOiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/purchasedetails/purchasedetails.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/purchasedetails/purchasedetails.page.ts ***!
  \***************************************************************/
/*! exports provided: PurchasedetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasedetailsPage", function() { return PurchasedetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/filter-menu/filter-menu.component */ "./src/app/component/filter-menu/filter-menu.component.ts");











var PurchasedetailsPage = /** @class */ (function () {
    function PurchasedetailsPage(router, activatedRoute, loadingCtrl, httpApi, loginService, modalController, navCtrl, alertController, storage) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loadingCtrl = loadingCtrl;
        this.httpApi = httpApi;
        this.loginService = loginService;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.storage = storage;
        this.noError = true;
        this.fromPage = "Online";
        this.canteenStatus = "U";
        this.purchaseModal = [];
    }
    PurchasedetailsPage.prototype.ngOnInit = function () {
    };
    PurchasedetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.fromPage = this.activatedRoute.snapshot.paramMap.get('purchase');
        this.dateTo = (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear();
        this.dateFrom = (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + (new Date().getFullYear() - 1);
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_EMPID"]).then(function (val) {
                _this.empId = val;
                _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_PURCHASEDETAILS"]).then(function (val) {
                    _this.results = val;
                    console.log(_this.results);
                    _this.loading.dismiss();
                });
            });
        });
    };
    PurchasedetailsPage.prototype.getOnlinePurchases = function () {
        var _this = this;
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SESSION"]).then(function (val) {
                var postData = {
                    RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_RECORD_ID"]],
                    SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SECURITY_STAMP"]],
                    Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_TOKEN"]],
                    AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["APP_PLATFORM"],
                    AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["VERSION"],
                    IsActive: true,
                    UserID: _this.empId,
                    EmployeeId: _this.empId,
                    DateFrom: _this.dateFrom,
                    DateTo: _this.dateTo
                };
                console.log(postData);
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["SERVER_URL"]] + "/api/OnlinePurchases/GetOnlinePurchasesDetails", postData, {})
                        .then(function (data) {
                        if (data.data == null || data.data == undefined) {
                            _this.noError = false;
                            _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["MESSAGE_CON_ERROR"];
                            _this.loading.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["POST_SUCCESS"]) {
                            _this.noError = false;
                            _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["MESSAGE_CON_ERROR"];
                            _this.loading.dismiss();
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
                            _this.loading.dismiss();
                            return;
                        }
                        if (jsonData['Value']['Table'][0]['rwcount'] == "0") {
                            _this.noError = false;
                            _this.errorMessage = "EMPTY";
                            _this.loading.dismiss();
                            return;
                        }
                        _this.noError = true;
                        _this.results = jsonData['Value'];
                        _this.loading.dismiss();
                        console.log(_this.results);
                    })
                        .catch(function (error) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["MESSAGE_CON_ERROR"];
                        _this.loading.dismiss();
                    });
                });
            });
        });
    };
    PurchasedetailsPage.prototype.getCanteenCredits = function () {
        var _this = this;
        this.loadingCtrl.create({
            message: "Loading..."
        }).then(function (overlay) {
            _this.loading = overlay;
            _this.loading.present();
            _this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SESSION"]).then(function (val) {
                var postData = {
                    RecordID: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_RECORD_ID"]],
                    SecurityStamp: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SECURITY_STAMP"]],
                    Token: val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_TOKEN"]],
                    AppPlatForm: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["APP_PLATFORM"],
                    AppVersion: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["VERSION"],
                    IsActive: true,
                    UserID: _this.empId,
                    EmployeeId: _this.empId,
                    DateFrom: _this.dateFrom,
                    DateTo: _this.dateTo,
                    Status: _this.canteenStatus,
                };
                _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["KEY_SERVER_SETTINGS"]).then(function (value) {
                    _this.httpApi.post(value[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["SERVER_URL"]] + "/api/Canteen/GetCanteenDetails", postData, {})
                        .then(function (data) {
                        if (data.data == null || data.data == undefined) {
                            _this.noError = false;
                            _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["MESSAGE_CON_ERROR"];
                            _this.loading.dismiss();
                            return;
                        }
                        var jsonData = JSON.parse(data.data);
                        if (jsonData['Status'] != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["POST_SUCCESS"]) {
                            _this.noError = false;
                            _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["MESSAGE_CON_ERROR"];
                            _this.loading.dismiss();
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
                            _this.loading.dismiss();
                            return;
                        }
                        if (jsonData['Value']['Table'][0]['Column1'] == "0") {
                            _this.noError = false;
                            _this.errorMessage = "EMPTY";
                            _this.loading.dismiss();
                            return;
                        }
                        _this.noError = true;
                        _this.results = jsonData['Value'];
                        _this.loading.dismiss();
                        console.log(_this.results);
                    })
                        .catch(function (error) {
                        _this.noError = false;
                        _this.errorMessage = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_7__["MESSAGE_CON_ERROR"];
                        _this.loading.dismiss();
                    });
                });
            });
        });
    };
    PurchasedetailsPage.prototype.showDialog = function (title, message, closePage, buttonText) {
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
    PurchasedetailsPage.prototype.openModal = function () {
        if (!this.modalIsOpen)
            this.showModal();
    };
    PurchasedetailsPage.prototype.showModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalIsOpen = true;
                        this.purchaseModal["purchaseDateFrom"] = this.dateFrom;
                        this.purchaseModal["purchaseDateTo"] = this.dateTo;
                        this.purchaseModal["canteenStatus"] = this.canteenStatus;
                        return [4 /*yield*/, this.modalController.create({
                                component: _component_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_8__["FilterMenuComponent"],
                                cssClass: 'modalFilterMenu',
                                animated: false,
                                backdropDismiss: false,
                                componentProps: {
                                    module: "PurchaseDetails" + this.fromPage,
                                    data: this.purchaseModal
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                if (detail.data['isDismissed'] == 0) {
                                    _this.dateFrom = detail.data['purchaseDateFrom'];
                                    _this.dateTo = detail.data['purchaseDateTo'];
                                    _this.canteenStatus = detail.data['canteenStatus'];
                                    if (_this.dateTo == undefined || _this.dateTo == null) {
                                        _this.dateTo = (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear();
                                    }
                                    if (_this.fromPage == "Online")
                                        _this.getOnlinePurchases();
                                    else
                                        _this.getCanteenCredits();
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
    PurchasedetailsPage.prototype.goBack = function () { this.navCtrl.back(); };
    PurchasedetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchasedetails',
            template: __webpack_require__(/*! ./purchasedetails.page.html */ "./src/app/pages/purchasedetails/purchasedetails.page.html"),
            styles: [__webpack_require__(/*! ./purchasedetails.page.scss */ "./src/app/pages/purchasedetails/purchasedetails.page.scss")]
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
    ], PurchasedetailsPage);
    return PurchasedetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-purchasedetails-purchasedetails-module.js.map