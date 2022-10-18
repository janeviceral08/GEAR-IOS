(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/component/server-settings/server-settings.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/server-settings/server-settings.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-list>\n    <ion-item class=\"itemFilter\" lines=\"full\">\n      <ion-label class=\"labelFilter\" slot=\"start\">Server Settings</ion-label>\n      <ion-icon class=\"buttonClose\" slot=\"end\" fill=\"clear\" (click)=\"myDismiss()\" color=\"medium\" name=\"close\">\n      </ion-icon>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label class=\"labelEntityName\" position=\"stacked\">Server URL</ion-label>\n      <ion-item class=\"itemInput\" lines=\"none\">\n        <ion-input class=\"roundedItems\" [(ngModel)]=\"UrlInput\" [disabled]=\"devMode || domainMode\"></ion-input>\n      </ion-item>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label class=\"labelEntityName\" position=\"stacked\">Password</ion-label>\n      <ion-item class=\"itemInput\" lines=\"none\">\n        <ion-input class=\"roundedItems\" [(ngModel)]=\"PasswordInput\" type=\"password\" [disabled]=\"!devMode\"></ion-input>\n      </ion-item>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-checkbox class=\"chkShowSub\" [(ngModel)]=\"devMode\" (ionChange)=\"devModeCheck()\"></ion-checkbox>\n      <ion-label class=\"lblShowSub\"> Dev Mode</ion-label>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-checkbox class=\"chkShowSub\" [(ngModel)]=\"domainMode\" (ionChange)=\"domainModeCheck()\"></ion-checkbox>\n      <ion-label class=\"lblShowSub\"> Domain Mode</ion-label>\n    </ion-item>\n\n\n  </ion-list>\n</ion-content>\n<ion-footer no-shadow>\n  <ion-toolbar position=\"bottom\">\n    <ion-button class=\"buttonFilter\" (click)=\"save()\">SAVE</ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n\n"

/***/ }),

/***/ "./src/app/component/server-settings/server-settings.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/component/server-settings/server-settings.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  margin: 0 15px 0;\n  --padding-start: 0px;\n  --inner-padding-end: 0px; }\n\nion-footer {\n  text-align: center; }\n\nion-datetime {\n  font-size: 14px; }\n\n.itemFilter {\n  margin: 10px; }\n\n.labelFilter {\n  font-size: 18px;\n  font-family: \"RobotoMedium\"; }\n\n.buttonClose {\n  margin-right: 0px;\n  font-size: 30px;\n  color: #7A7A7A; }\n\n.labelEntityName {\n  font-size: 13px; }\n\n.itemInput {\n  font-size: 14px;\n  margin: 0px !important;\n  width: calc(100% - 5px); }\n\n.itemDatetime {\n  margin: 0px !important; }\n\n.selectItems {\n  margin-left: 5px;\n  font-size: 14px;\n  width: calc(100% - 5px); }\n\n.roundedItems {\n  border: 1px solid #d1d1d1;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  -webkit-padding-start: 5px !important;\n          padding-inline-start: 5px !important; }\n\n.buttonClear {\n  --background: #D6D7D7;\n  width: 100%;\n  height: 35px; }\n\n.buttonFilter {\n  width: 95%;\n  height: 35px; }\n\n.chkShowSub {\n  --background-checked: #D3A828;\n  --border-color-checked: #D3A828;\n  --border-radius: 5px;\n  --border-color: gray;\n  margin-left: 5px;\n  height: 20px;\n  width: 20px; }\n\n.lblShowSub {\n  font-size: 12px;\n  margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMtZ2FiYy9Eb2N1bWVudHMvR0VBUi9HRUFSX2lPUy9zcmMvYXBwL2NvbXBvbmVudC9zZXJ2ZXItc2V0dGluZ3Mvc2VydmVyLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQWdCO0VBQ2hCLG9CQUFnQjtFQUNoQix3QkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlLEVBQUE7O0FBSW5CO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGVBQWU7RUFDZiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQ0osRUFBQTs7QUFHQTtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0kseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixxQ0FBb0M7VUFBcEMsb0NBQW9DLEVBQUE7O0FBR3hDO0VBQ0kscUJBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFVBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksNkJBQXFCO0VBQ3JCLCtCQUF1QjtFQUN2QixvQkFBZ0I7RUFDaEIsb0JBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGVBQWU7RUFDZixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zZXJ2ZXItc2V0dGluZ3Mvc2VydmVyLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24taXRlbSB7XG4gICAgbWFyZ2luOiAwIDE1cHggMDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG5cbmlvbi1mb290ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8vRmlsdGVyIEFyZWFcbi5pdGVtRmlsdGVyIHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5sYWJlbEZpbHRlciB7XG4gICAgZm9udC1zaXplOiAxOHB4OyAgICBcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9NZWRpdW1cIjtcbn1cblxuLmJ1dHRvbkNsb3NlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICM3QTdBN0Fcbn1cblxuLy9GaWx0ZXIgSXRlbXNcbi5sYWJlbEVudGl0eU5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLml0ZW1JbnB1dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDVweCk7XG59XG5cbi5pdGVtRGF0ZXRpbWUge1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWxlY3RJdGVtcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDVweCk7XG59XG5cbi5yb3VuZGVkSXRlbXMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMWQxZDE7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uQ2xlYXIge1xuICAgIC0tYmFja2dyb3VuZDogI0Q2RDdENztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5idXR0b25GaWx0ZXIge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uY2hrU2hvd1N1YiB7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNEM0E4Mjg7XG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI0QzQTgyODtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtLWJvcmRlci1jb2xvcjogZ3JheTtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbn1cblxuLmxibFNob3dTdWIge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/server-settings/server-settings.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/server-settings/server-settings.component.ts ***!
  \************************************************************************/
/*! exports provided: ServerSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerSettingsComponent", function() { return ServerSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");





var ServerSettingsComponent = /** @class */ (function () {
    function ServerSettingsComponent(modalController, storage, navParams) {
        this.modalController = modalController;
        this.storage = storage;
        this.navParams = navParams;
    }
    ServerSettingsComponent.prototype.ngOnInit = function () {
    };
    ServerSettingsComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("" + src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"]).then(function (val) {
            console.log(val);
            _this.param = _this.navParams.get('data');
            _this.module = _this.navParams.get('module');
            _this.devMode = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["IS_SERVER_DEV"]];
            _this.domainMode = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["IS_SERVER_DOMAIN"]];
            _this.isServerSetUrl = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["IS_SERVER_SET_URL"]];
            _this.serverUrl = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["SERVER_URL"]];
            _this.isServerDefault = val[src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["IS_SERVER_DEFAULT"]];
            if (_this.isServerSetUrl) {
                _this.UrlInput = _this.serverUrl;
            }
            if (_this.devMode) {
                _this.PasswordInput = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["DEV_PASSWORD"];
            }
        });
    };
    ServerSettingsComponent.prototype.devModeCheck = function () {
        if (!this.devMode) {
            this.PasswordInput = "";
            if (this.isServerSetUrl) {
                this.UrlInput = this.serverUrl;
            }
        }
        else {
            this.UrlInput = "";
        }
    };
    ServerSettingsComponent.prototype.domainModeCheck = function () {
        if (!this.domainMode) {
            this.UrlInput = "";
            if (this.isServerSetUrl) {
                this.UrlInput = this.serverUrl;
            }
        }
        else {
            this.UrlInput = "";
        }
    };
    ServerSettingsComponent.prototype.save = function () {
        var _this = this;
        var tempUrl = this.serverUrl;
        if (this.UrlInput) {
            this.isServerSetUrl = true;
            this.isServerDefault = false;
            tempUrl = this.UrlInput;
        }
        if (this.domainMode && !this.devMode) {
            tempUrl = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT_DOMAIN"];
            this.isServerDefault = false;
        }
        if (!this.domainMode && this.devMode) {
            if (!this.PasswordInput) {
                alert('Password is required');
                return;
            }
            if (this.PasswordInput != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["DEV_PASSWORD"]) {
                alert('Wrong password!');
                return;
            }
            tempUrl = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT_DEV"];
            this.isServerDefault = false;
        }
        if (this.domainMode && this.devMode) {
            if (!this.PasswordInput) {
                alert('Password is required');
                return;
            }
            if (this.PasswordInput != src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["DEV_PASSWORD"]) {
                alert('Wrong password!');
                return;
            }
            tempUrl = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT_DOMAIN_DEV"];
            this.isServerDefault = false;
        }
        if (this.UrlInput == "" && !this.devMode && !this.domainMode) {
            this.isServerSetUrl = false;
            this.isServerDefault = true;
            tempUrl = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"];
        }
        var server_settings = {
            is_server_domain: this.domainMode,
            is_server_default: this.isServerDefault,
            is_server_dev: this.devMode,
            is_server_set_url: this.isServerSetUrl,
            server_url: tempUrl,
        };
        console.log(server_settings);
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"], server_settings).then(function (result) {
            alert('Settings Saved!');
            _this.myDismiss();
        }).catch(function (e) {
            alert('Error saving settings. Please try again!');
            _this.myDismiss();
        });
    };
    ServerSettingsComponent.prototype.myDismiss = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = {
                            'isDismissed': 1,
                        };
                        return [4 /*yield*/, this.modalController.dismiss(result)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ServerSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-server-settings',
            template: __webpack_require__(/*! ./server-settings.component.html */ "./src/app/component/server-settings/server-settings.component.html"),
            styles: [__webpack_require__(/*! ./server-settings.component.scss */ "./src/app/component/server-settings/server-settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
    ], ServerSettingsComponent);
    return ServerSettingsComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _component_server_settings_server_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/server-settings/server-settings.component */ "./src/app/component/server-settings/server-settings.component.ts");








var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"], _component_server_settings_server_settings_component__WEBPACK_IMPORTED_MODULE_7__["ServerSettingsComponent"]],
            entryComponents: [_component_server_settings_server_settings_component__WEBPACK_IMPORTED_MODULE_7__["ServerSettingsComponent"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n    <ion-header>\n    </ion-header>\n    <ion-content>\n        <div class=\"bgSizeCoverTop\"></div>\n        <div class=\"bgSizeCoverBottom\"></div>\n        <ion-grid>\n            <ion-row class=\"rowGear\">\n                <ion-col size=\"12\" class=\"colGEARIcon\">\n                    <img class=\"imgGEARicon\" src=\"/assets/img/icon.png\" alt=\"\">\n                    <!-- <img class=\"imgGEARtext\" src=\"/assets/img/gear_name.png\" alt=\"\"> -->\n                </ion-col>\n            </ion-row>\n            <ion-row class=\"rowLogin\">\n                <ion-col size=\"12\">\n                    <div class=\"divLogin\">\n                        <div class=\"divimgGEARtext\">\n                            <img class=\"imgGEARtext\" src=\"/assets/img/gear_name.png\" alt=\"\">\n                        </div>\n                        <div class=\"divUsernamePassword\">\n                            <ion-item lines=\"inset\">\n                                <!-- <ion-icon class=\"linkIcon\" slot=\"start\" name=\"person\" mode=\"md\"></ion-icon> -->\n                                <ion-label class=\"EntityName\" position=\"stacked\">USERNAME</ion-label>\n                                <ion-input class=\"inputUsername\" type=\"number\" [(ngModel)]=\"user_name\"></ion-input>\n                            </ion-item>\n                            <ion-item lines=\"inset\">\n                                <!-- <ion-icon class=\"linkIcon\" slot=\"start\" name=\"key\"></ion-icon> -->\n                                <ion-label class=\"EntityName\" position=\"stacked\">PASSWORD</ion-label>\n                                <ion-input class=\"inputPassword\" type=\"password\" [(ngModel)]=\"user_password\" (keyup.enter)=\"attemptlogin()\"></ion-input>\n                            </ion-item>\n                        </div>\n                    </div>\n                </ion-col>\n            </ion-row>\n            <ion-row class=\"rowLoginButton\">\n                <ion-col size=\"12\">\n                    <ion-button block outline class=\"Login\" size=\"large\" (click)=\"attemptlogin()\" expand=\"block\">LOGIN\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"12\">\n                    <div class=\"forgotpass\" (click)=\"openForgotPass()\">Forgot Password?</div>\n                </ion-col>\n            </ion-row>\n\n            <ion-row class=\"rowVersion\">\n                <ion-col size=\"5\">\n                    <ion-icon name=\"settings\" (click) = \"showServerSettingsModal()\"></ion-icon>\n                </ion-col>\n                <ion-col size=\"7\">\n                        <div class=\"version\" >{{ version }}</div>\n                </ion-col>\n            </ion-row>\n        </ion-grid> \n    </ion-content>\n</ion-app>"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: 100%;\n  width: 100%;\n  min-width: 320px;\n  z-index: 5; }\n\nion-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  --background: rgba(0, 0, 0, 0);\n  --border-color: darkgray; }\n\nion-button {\n  font-weight: 300;\n  width: 100%;\n  margin-top: 30px !important; }\n\nion-input {\n  width: 100%;\n  height: 40px; }\n\nion-card {\n  margin: 10px 0;\n  position: relative;\n  text-align: center;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19); }\n\nion-card-title {\n  text-align: center;\n  font-size: 16px;\n  font-weight: normal; }\n\nion-icon {\n  color: darkslategray; }\n\n.bgSizeCoverTop {\n  z-index: 0;\n  background-image: url(/assets/img/login_top_bg.png);\n  background-size: cover;\n  position: absolute;\n  width: 30vh;\n  height: 21vh;\n  left: 0;\n  top: -5px;\n  -webkit-filter: drop-shadow(0.5px 0.5px 2px #808080);\n          filter: drop-shadow(0.5px 0.5px 2px #808080); }\n\n.bgSizeCoverBottom {\n  z-index: 0;\n  background-image: url(\"/assets/img/login_bot_bg.png\");\n  background-size: cover;\n  position: absolute;\n  width: 70vw;\n  height: 40vh;\n  right: 0;\n  bottom: -5px;\n  -webkit-filter: drop-shadow(0.5px 0.5px 2px #808080);\n          filter: drop-shadow(0.5px 0.5px 2px #808080); }\n\n.rowGear {\n  height: 50%;\n  min-height: 300px;\n  align-content: center;\n  align-items: center;\n  place-content: center;\n  place-items: center; }\n\n.colGEARIcon {\n  text-align: center; }\n\n.rowLogin {\n  height: 45%;\n  min-height: 280px; }\n\n.rowLoginButton {\n  height: 5%; }\n\n.rowVersion {\n  height: 0%;\n  margin-top: -30px; }\n\n.linkIcon {\n  color: #303030;\n  margin-right: 10px;\n  margin-top: 35px;\n  margin-left: 10px;\n  height: 20px; }\n\n.divimgGEARtext {\n  text-align: center; }\n\n.inputUsername {\n  --padding-start: 5px;\n  font-size: 18px;\n  font-family: \"RobotoRegular\"; }\n\n.inputPassword {\n  --padding-start: 5px;\n  font-size: 18px;\n  font-family: \"RobotoRegular\"; }\n\n.version {\n  font-size: 11px;\n  color: white;\n  text-align: right; }\n\n.rounded {\n  border: 1px solid #D3A828;\n  width: 100%;\n  --padding-start: 15px; }\n\n.txtGEAR {\n  font-size: 32px; }\n\n.divLogin {\n  padding: 15px 15px 0px;\n  margin: -60px 20px 0 20px;\n  height: 100%;\n  min-height: 270px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  background-color: white;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px); }\n\n.divLogin .divUsernamePassword {\n    margin-top: 5%; }\n\n.missionClass {\n  padding-bottom: 10px; }\n\n.card-desc-cvr {\n  float: left; }\n\n.card-title {\n  color: #838383;\n  font-size: 13px; }\n\n.Login {\n  --background: linear-gradient(to bottom, #D3A828, #E0861F);\n  height: 50px !important;\n  width: 70%;\n  margin: auto;\n  margin-top: -95px !important;\n  --border-radius: 40px;\n  font-size: 14px;\n  font-family: \"RobotoMedium\";\n  --box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19); }\n\n.EntityName {\n  color: #E0861F;\n  -webkit-padding-start: 5px;\n          padding-inline-start: 5px;\n  font-size: 12px;\n  font-family: \"RobotoBold\"; }\n\n.crdTitle {\n  text-align: center;\n  font-size: 18px; }\n\n@media (max-width: 767px) {\n  ion-col {\n    border: none; }\n  .imgGEARicon {\n    height: 200px;\n    margin-top: -20px; }\n  .imgGEARtext {\n    height: 60px; } }\n\n@media (min-width: 768px) {\n  .imgGEARicon {\n    height: 250px;\n    margin-top: -20px; }\n  .imgGEARtext {\n    height: 80px; } }\n\n.forgotpass {\n  margin-top: -50px;\n  float: right;\n  margin-right: 20px;\n  font-size: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMtZ2FiYy9Eb2N1bWVudHMvR0VBUi9HRUFSX2lPUy9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLG9CQUFnQjtFQUNoQix3QkFBb0I7RUFDcEIsOEJBQWE7RUFDYix3QkFBZSxFQUFBOztBQUduQjtFQUNJLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiw0RUFBNEUsRUFBQTs7QUFHaEY7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLFVBQVU7RUFDVixtREFBbUQ7RUFDbkQsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxTQUFTO0VBQ1Qsb0RBQTRDO1VBQTVDLDRDQUE0QyxFQUFBOztBQUdoRDtFQUNJLFVBQVU7RUFDVixxREFBcUQ7RUFDckQsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFFBQVE7RUFDUixZQUFZO0VBQ1osb0RBQTRDO1VBQTVDLDRDQUE0QyxFQUFBOztBQUdoRDtFQUVJLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUtyQjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxjQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksb0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw0QkFBNEIsRUFBQTs7QUFHaEM7RUFDSSxvQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0kseUJBQXlCO0VBS3pCLFdBQVc7RUFDWCxxQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBT0ksc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLDRFQUE0RTtFQUM1RSw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsdUJBQXdDO0VBQ3hDLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQTs7QUFqQi9CO0lBbUJRLGNBQWMsRUFBQTs7QUFJdEI7RUFDSSxvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUduQjtFQUtJLDBEQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLHFCQUFnQjtFQUNoQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLDhFQUFhLEVBQUE7O0FBR2pCO0VBQ0ksY0FBYztFQUNkLDBCQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR25CO0VBQ0k7SUFDSSxZQUFZLEVBQUE7RUFFaEI7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCLEVBQUE7RUFFckI7SUFDSSxZQUFZLEVBQUEsRUFDZjs7QUFHTDtFQUNJO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQixFQUFBO0VBRXJCO0lBQ0ksWUFBWSxFQUFBLEVBQ2Y7O0FBR0w7RUFDSSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgei1pbmRleDogNTtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgLS1ib3JkZXItY29sb3I6IGRhcmtncmF5O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbmlvbi1jYXJkLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmlvbi1pY29uIHtcbiAgICBjb2xvcjogZGFya3NsYXRlZ3JheTtcbn1cblxuLmJnU2l6ZUNvdmVyVG9wIHtcbiAgICB6LWluZGV4OiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9sb2dpbl90b3BfYmcucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzB2aDtcbiAgICBoZWlnaHQ6IDIxdmg7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IC01cHg7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjVweCAwLjVweCAycHggIzgwODA4MCk7XG59XG5cbi5iZ1NpemVDb3ZlckJvdHRvbSB7XG4gICAgei1pbmRleDogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9sb2dpbl9ib3RfYmcucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA3MHZ3O1xuICAgIGhlaWdodDogNDB2aDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IC01cHg7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwLjVweCAwLjVweCAycHggIzgwODA4MCk7XG59XG5cbi5yb3dHZWFyIHtcbiAgICAvL2hlaWdodDogY2FsYygxMDAlIC0gMjcwcHgpO1xuICAgIGhlaWdodDogNTAlO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG4uY29sR0VBUkljb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJvd0xvZ2luIHtcbiAgICBoZWlnaHQ6IDQ1JTtcbiAgICBtaW4taGVpZ2h0OiAyODBweDtcbiAgICAvL2FsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIC8vbWFyZ2luLXRvcDogLTQwcHg7XG59XG5cbi5yb3dMb2dpbkJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA1JTtcbn1cblxuLnJvd1ZlcnNpb24ge1xuICAgIGhlaWdodDogMCU7XG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5saW5rSWNvbiB7XG4gICAgY29sb3I6IHJnYig0OCwgNDgsIDQ4KTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5kaXZpbWdHRUFSdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5wdXRVc2VybmFtZSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1JlZ3VsYXJcIjtcbn1cblxuLmlucHV0UGFzc3dvcmQge1xuICAgIC0tcGFkZGluZy1zdGFydDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9SZWd1bGFyXCI7XG59XG5cbi52ZXJzaW9uIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucm91bmRlZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0QzQTgyODtcbiAgICAvLyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgLy8gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAvLyBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgLy8gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG59XG5cbi50eHRHRUFSIHtcbiAgICBmb250LXNpemU6IDMycHg7XG59XG5cbi5kaXZMb2dpbiB7XG4gICAgLy8gcGFkZGluZzogMCAzMHB4IDEwcHggMTVweDtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAvLyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgLy8gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICAvLyBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgLy8gYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMHB4O1xuICAgIG1hcmdpbjogLTYwcHggMjBweCAwIDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDI3MHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIC5kaXZVc2VybmFtZVBhc3N3b3JkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgfVxufVxuXG4ubWlzc2lvbkNsYXNzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmNhcmQtZGVzYy1jdnIge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4uY2FyZC10aXRsZSB7XG4gICAgY29sb3I6ICM4MzgzODM7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uTG9naW4ge1xuICAgIC8vLS1iYWNrZ3JvdW5kOiAjRDNBODI4O1xuICAgIC8vIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xuICAgIC8vIGZvbnQtc2l6ZTogMTZweDtcbiAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0QzQTgyOCwgI0UwODYxRik7XG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogLTk1cHggIWltcG9ydGFudDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b01lZGl1bVwiO1xuICAgIC0tYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLkVudGl0eU5hbWUge1xuICAgIGNvbG9yOiAjRTA4NjFGO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b0JvbGRcIjtcbn1cblxuLmNyZFRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBpb24tY29sIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICAuaW1nR0VBUmljb24ge1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICB9XG4gICAgLmltZ0dFQVJ0ZXh0IHtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmltZ0dFQVJpY29uIHtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgfVxuICAgIC5pbWdHRUFSdGV4dCB7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICB9XG59XG5cbi5mb3Jnb3RwYXNzIHtcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogOTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/constants.service */ "./src/app/utils/constants.service.ts");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _component_server_settings_server_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../component/server-settings/server-settings.component */ "./src/app/component/server-settings/server-settings.component.ts");







// import { Firebase } from '@ionic-native/firebase/ngx';



var LoginPage = /** @class */ (function () {
    /**
    * Constructor of our first page
    * @param loginService The Login Service to get authentication
    */
    function LoginPage(appVersion, storage, loginService, router, 
    // private firebase: Firebase,
    alertController, platform, notificationService, modalController) {
        this.appVersion = appVersion;
        this.storage = storage;
        this.loginService = loginService;
        this.router = router;
        this.alertController = alertController;
        this.platform = platform;
        this.notificationService = notificationService;
        this.modalController = modalController;
        this.modalIsOpen = false;
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            //this.connect();
            _this.showErrorClicked = 0;
            _this.storage.remove(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_ERROR_MESSAGE"]);
            _this.version = src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["APP_VERSION"];
            console.log(_this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_ISFIRSTTIME"]));
            _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_ISFIRSTTIME"]).then(function (val) {
                if (!val || val == null) {
                    console.log("Set Default Server Settings");
                    _this.setDefaultServerSettings();
                }
            });
            // this.firebase.onTokenRefresh()
            //   .subscribe((token: string) =>
            //     this.showAlert(token)
            //   );
            // this.firebase.getToken()
            //   .then(token =>
            //     this.showAlert(token)
            //   ) // save the token server-side and use it to push notifications to this device
            //   .catch(error => console.error('Error getting token', error));
        });
    };
    LoginPage.prototype.showAlert = function (message) {
        // console.log(`The token is ${message}`)
        // alert(message);
    };
    LoginPage.prototype.attemptlogin = function () {
        if (typeof (this.user_name) === "undefined" || this.user_name == "") {
            alert("Please enter your username!");
        }
        else if (typeof (this.user_password) === "undefined" || this.user_password == "") {
            alert("Please enter your password!");
        }
        else {
            this.loginService.attemptlogin(this.user_name, this.user_password);
        }
    };
    LoginPage.prototype.showErrorMessage = function () {
        // this.showErrorClicked = this.showErrorClicked + 1;
        // if (this.showErrorClicked == 5) {
        //   this.showErrorClicked = 0;
        //   this.showServerSettingsModal();
        //   this.storage.get(Constants.API_ENDPOINT).then((val) => {
        //     let currentServer: string;
        //     if (val == "http://146.88.74.66:20002"){
        //       currentServer = "Current Server: DEV";
        //     }
        //     else if (val == "http://210.5.69.249:29794"){
        //       currentServer = "Current Server: DEV";
        //     }
        //     else if (val == "http://146.88.74.69:9993"){
        //       currentServer = "Current Server: DEV";
        //     }
        //     else{
        //       currentServer = "Current Server: " + Constants.API_ENDPOINT;
        //     }
        //     this.showDialog("DEV OPTIONS", currentServer);
        //   });
        // }
    };
    LoginPage.prototype.showDialog = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: message,
                            inputs: [
                                // {
                                //   name: 'chkIsDev',
                                //   type: 'checkbox',
                                //   label: 'Dev Mode',
                                //   value: '',
                                //   checked: true
                                // },
                                {
                                    name: 'txtIsDev',
                                    type: 'text',
                                    placeholder: 'Username'
                                },
                                {
                                    name: 'txtPassword',
                                    type: 'password',
                                    placeholder: 'Password'
                                },
                                {
                                    name: 'checkbox1',
                                    type: 'checkbox',
                                    label: 'Checkbox 1',
                                    value: 'value1',
                                    checked: true
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Show Last Error',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        _this.storage.get(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_ERROR_MESSAGE"]).then(function (val) {
                                            if (val == "" || val == null || val == undefined) {
                                                _this.showDialogError("ERROR", "No Error");
                                            }
                                            else {
                                                _this.showDialogError("ERROR", val);
                                            }
                                        });
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                },
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        if (data.txtIsDev == "DEV" && data.txtPassword == "0729") {
                                            _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"], "http://146.88.74.66:20002");
                                        }
                                        else {
                                            _this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT"], "http://146.88.74.69:9993");
                                        }
                                    }
                                }
                            ],
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
    LoginPage.prototype.showDialogError = function (title, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: title,
                            message: message,
                            buttons: [
                                {
                                    text: 'Okay',
                                    handler: function () {
                                    }
                                }
                            ],
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
    LoginPage.prototype.showServerSettingsModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.modalIsOpen = true;
                        return [4 /*yield*/, this.modalController.create({
                                component: _component_server_settings_server_settings_component__WEBPACK_IMPORTED_MODULE_9__["ServerSettingsComponent"],
                                cssClass: 'modalServerSettings',
                                animated: false,
                                backdropDismiss: false,
                                componentProps: {
                                    module: "WfhApproval",
                                    data: this.advisory
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (detail) {
                            if (detail !== null) {
                                if (detail.data['isDismissed'] == 0) {
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
    LoginPage.prototype.setDefaultServerSettings = function () {
        var server_settings = {
            is_server_domain: true,
            is_server_default: false,
            is_server_dev: false,
            is_server_set_url: false,
            server_url: src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["API_ENDPOINT_DOMAIN"],
        };
        console.log(server_settings);
        this.storage.set(src_app_utils_constants_service__WEBPACK_IMPORTED_MODULE_4__["KEY_SERVER_SETTINGS"], server_settings).then(function (result) {
            console.log('Default Server Settings saved');
        }).catch(function (e) {
            console.log('Error saving default settings');
        });
    };
    LoginPage.prototype.openForgotPass = function () {
        this.router.navigate(['/forgotpass']);
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_5__["AppVersion"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
            src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");


// import { Firebase } from '@ionic-native/firebase/ngx';

var NotificationService = /** @class */ (function () {
    function NotificationService(
    // public firebaseNative: Firebase,
    platfrom) {
        this.platfrom = platfrom;
    }
    NotificationService.prototype.getToken = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var token;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // if( this.platfrom.is('ios')){
                // token = await this.firebaseNative.getToken();
                // const perm = await this.firebaseNative.grantPermission();
                // }
                return [2 /*return*/, token];
            });
        });
    };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map