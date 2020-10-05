// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, Input } from '@angular/core';
import { DialogType, MessageSeverity, Utilities } from '@polpware/ngx-appkit-contracts-alpha';
import { UserLogin } from '../../models/user-login.model';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-appkit-services-alpha";
import * as i2 from "@polpware/ngx-oauth2";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
function LoginComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function LoginComponent_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.closeModal(); });
    i0.ɵɵelementStart(1, "span", 10);
    i0.ɵɵtext(2, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
var _c0 = function (a0, a1) { return { "fa-check": a0, "fa-times": a1 }; };
function LoginComponent_form_9_i_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 30);
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r5 = i0.ɵɵreference(7);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c0, _r5.valid, !_r5.valid));
} }
function LoginComponent_form_9_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1, " Username is required ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_form_9_i_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 30);
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r8 = i0.ɵɵreference(15);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c0, _r8.valid, !_r8.valid));
} }
function LoginComponent_form_9_span_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1, " Password is required ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_form_9_i_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 32);
} }
var _c1 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
function LoginComponent_form_9_Template(rf, ctx) { if (rf & 1) {
    var _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 11, 12);
    i0.ɵɵlistener("ngSubmit", function LoginComponent_form_9_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r13); var _r4 = i0.ɵɵreference(1); var _r5 = i0.ɵɵreference(7); var _r8 = i0.ɵɵreference(15); var ctx_r12 = i0.ɵɵnextContext(); _r4.form.valid ? ctx_r12.login() : !_r5.valid && ctx_r12.showErrorAlert("Username is required", "Please enter a valid username"); return !_r8.valid && ctx_r12.showErrorAlert("Password is required", "Please enter a valid password"); });
    i0.ɵɵelementStart(2, "div", 13);
    i0.ɵɵelementStart(3, "label", 14);
    i0.ɵɵtext(4, "Username:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 15);
    i0.ɵɵelementStart(6, "input", 16, 17);
    i0.ɵɵlistener("ngModelChange", function LoginComponent_form_9_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r13); var ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.userLogin.userName = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, LoginComponent_form_9_i_8_Template, 1, 4, "i", 18);
    i0.ɵɵtemplate(9, LoginComponent_form_9_span_9_Template, 2, 0, "span", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 13);
    i0.ɵɵelementStart(11, "label", 20);
    i0.ɵɵtext(12, "Password:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 15);
    i0.ɵɵelementStart(14, "input", 21, 22);
    i0.ɵɵlistener("ngModelChange", function LoginComponent_form_9_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r13); var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.userLogin.password = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, LoginComponent_form_9_i_16_Template, 1, 4, "i", 18);
    i0.ɵɵtemplate(17, LoginComponent_form_9_span_17_Template, 2, 0, "span", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 23);
    i0.ɵɵelementStart(19, "div", 24);
    i0.ɵɵelementStart(20, "div", 25);
    i0.ɵɵelementStart(21, "input", 26);
    i0.ɵɵlistener("ngModelChange", function LoginComponent_form_9_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r13); var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.userLogin.rememberMe = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "label", 27);
    i0.ɵɵtext(23, "Remember me");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 23);
    i0.ɵɵelementStart(25, "div", 24);
    i0.ɵɵelementStart(26, "button", 28);
    i0.ɵɵtemplate(27, LoginComponent_form_9_i_27_Template, 1, 0, "i", 29);
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r4 = i0.ɵɵreference(1);
    var _r5 = i0.ɵɵreference(7);
    var _r8 = i0.ɵɵreference(15);
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(12, _c1, _r4.submitted && _r5.valid, _r4.submitted && !_r5.valid))("ngModel", ctx_r1.userLogin.userName);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", _r4.submitted);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r4.submitted && !_r5.valid);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(15, _c1, _r4.submitted && _r8.valid, _r4.submitted && !_r8.valid))("ngModel", ctx_r1.userLogin.password);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", _r4.submitted);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r4.submitted && !_r8.valid);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r1.userLogin.rememberMe);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r1.isLoading);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.isLoading);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.isLoading ? "Logging in..." : "Login", " ");
} }
var LoginComponent = /** @class */ (function () {
    function LoginComponent(alertService, authService, configurations) {
        this.alertService = alertService;
        this.authService = authService;
        this.configurations = configurations;
        this.userLogin = new UserLogin();
        this.isLoading = false;
        this.formResetToggle = true;
        this.isModal = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userLogin.rememberMe = this.authService.rememberMe;
        if (this.getShouldRedirect()) {
            this.authService.redirectLoginUser();
        }
        else {
            this.loginStatusSubscription = this.authService.getLoginStatusEvent().subscribe(function (isLoggedIn) {
                if (_this.getShouldRedirect()) {
                    _this.authService.redirectLoginUser();
                }
            });
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.loginStatusSubscription) {
            this.loginStatusSubscription.unsubscribe();
        }
    };
    LoginComponent.prototype.getShouldRedirect = function () {
        return !this.isModal && this.authService.isLoggedIn && !this.authService.isSessionExpired;
    };
    LoginComponent.prototype.showErrorAlert = function (caption, message) {
        this.alertService.showMessage(caption, message, MessageSeverity.error);
    };
    LoginComponent.prototype.closeModal = function () {
        if (this.modalClosedCallback) {
            this.modalClosedCallback();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isLoading = true;
        this.alertService.startLoadingMessage('', 'Attempting login...');
        this.authService.loginWithPassword(this.userLogin.userName, this.userLogin.password, this.userLogin.rememberMe)
            .subscribe(function (user) {
            setTimeout(function () {
                _this.alertService.stopLoadingMessage();
                _this.isLoading = false;
                _this.reset();
                if (!_this.isModal) {
                    _this.alertService.showMessage('Login', "Welcome " + user.userName + "!", MessageSeverity.success);
                }
                else {
                    _this.alertService.showMessage('Login', "Session for " + user.userName + " restored!", MessageSeverity.success);
                    setTimeout(function () {
                        _this.alertService.showStickyMessage('Session Restored', 'Please try your last operation again', MessageSeverity.default);
                    }, 500);
                    _this.closeModal();
                }
            }, 500);
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            if (Utilities.checkNoNetwork(error)) {
                _this.alertService.showStickyMessage(Utilities.noNetworkMessageCaption, Utilities.noNetworkMessageDetail, MessageSeverity.error, error);
                _this.offerAlternateHost();
            }
            else {
                var errorMessage = Utilities.getHttpResponseMessage(error);
                if (errorMessage) {
                    _this.alertService.showStickyMessage('Unable to login', _this.mapLoginErrorMessage(errorMessage), MessageSeverity.error, error);
                }
                else {
                    _this.alertService.showStickyMessage('Unable to login', 'An error occured whilst logging in, please try again later.\nError: ' + Utilities.getResponseBody(error), MessageSeverity.error, error);
                }
            }
            setTimeout(function () {
                _this.isLoading = false;
            }, 500);
        });
    };
    LoginComponent.prototype.offerAlternateHost = function () {
        var _this = this;
        if (Utilities.checkIsLocalHost(location.origin) && Utilities.checkIsLocalHost(this.configurations.baseUrl)) {
            this.alertService.showDialog('Dear Developer!\nIt appears your backend Web API service is not running...\n' +
                'Would you want to temporarily switch to the online Demo API below?(Or specify another)', DialogType.prompt, function (value) {
                _this.configurations.baseUrl = value;
                _this.configurations.tokenUrl = value;
                _this.alertService.showStickyMessage('API Changed!', 'The target Web API has been changed to: ' + value, MessageSeverity.warn);
            }, null, null, null, this.configurations.fallbackBaseUrl);
        }
    };
    LoginComponent.prototype.mapLoginErrorMessage = function (error) {
        if (error == 'invalid_username_or_password') {
            return 'Invalid username or password';
        }
        if (error == 'invalid_grant') {
            return 'This account has been disabled';
        }
        return error;
    };
    LoginComponent.prototype.reset = function () {
        var _this = this;
        this.formResetToggle = false;
        setTimeout(function () {
            _this.formResetToggle = true;
        });
    };
    /** @nocollapse */ LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.AlertService), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i1.ConfigurationService)); };
    /** @nocollapse */ LoginComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], inputs: { isModal: "isModal" }, decls: 10, vars: 2, consts: [[1, "d-flex", "h-90"], [1, "login-container", "m-auto"], [1, "card", "boxshadow"], [1, "card-header", "bg-primary", "dark", "text-white", "clearfix"], ["aria-hidden", "true", 1, "fa", "fa-lock"], ["type", "button", "class", "close float-right text-light", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "card-body"], [1, "col-md-8", "offset-md-2"], ["class", "login", "name", "loginForm", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "close", "float-right", "text-light", 3, "click"], ["aria-hidden", "true"], ["name", "loginForm", "novalidate", "", 1, "login", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", "row", "has-feedback-icon"], ["for", "login-username", 1, "col-form-label", "col-md-3"], [1, "col-md-9"], ["type", "text", "id", "login-username", "name", "username", "placeholder", "Enter username", "autocomplete", "username", "required", "", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "fa form-control-feedback", "aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "login-password", 1, "col-form-label", "col-md-3"], ["type", "password", "id", "login-password", "name", "password", "placeholder", "Enter password", "autocomplete", "current-password", "required", "", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "form-group", "row"], [1, "offset-md-3", "col-md-9"], [1, "form-check"], ["type", "checkbox", "id", "login-rememberme", "name", "rememberMe", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "login-rememberme", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "form-control-feedback", 3, "ngClass"], [1, "invalid-feedback"], [1, "fa", "fa-circle-o-notch", "fa-spin"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵelement(4, "i", 4);
            i0.ɵɵtext(5, " Login ");
            i0.ɵɵtemplate(6, LoginComponent_button_6_Template, 3, 0, "button", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 6);
            i0.ɵɵelementStart(8, "div", 7);
            i0.ɵɵtemplate(9, LoginComponent_form_9_Template, 29, 18, "form", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.isModal);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.formResetToggle);
        } }, directives: [i3.NgIf, i4.ɵangular_packages_forms_forms_y, i4.NgControlStatusGroup, i4.NgForm, i4.DefaultValueAccessor, i4.RequiredValidator, i3.NgClass, i4.NgControlStatus, i4.NgModel, i4.CheckboxControlValueAccessor], styles: [".boxshadow[_ngcontent-%COMP%]{position:relative;box-shadow:1px 2px 4px rgba(0,0,0,.5);padding:10px;background:#fff}.boxshadow[_ngcontent-%COMP%]::after{content:\"\";position:absolute;z-index:-1;box-shadow:0 15px 20px rgba(0,0,0,.3);width:70%;left:15%;height:100px;bottom:0}.cardshadow[_ngcontent-%COMP%]{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.last-control-group[_ngcontent-%COMP%]{margin-bottom:-.75rem}.h-90[_ngcontent-%COMP%]{height:90%}@media (min-width:768px){.login-container[_ngcontent-%COMP%]{width:700px}}@media (min-width:1200px){.login-container[_ngcontent-%COMP%]{width:730px}}"] });
    return LoginComponent;
}());
export { LoginComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: i1.AlertService }, { type: i2.AuthService }, { type: i1.ConfigurationService }]; }, { isModal: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJsaWIvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBRWhDLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRSxPQUFPLEVBQ0gsVUFBVSxFQUFFLGVBQWUsRUFDM0IsU0FBUyxFQUNaLE1BQU0sc0NBQXNDLENBQUM7QUFZOUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7OztJQ2pCbEQsaUNBQ0U7SUFENEYsbUxBQXNCO0lBQ2xILGdDQUF5QjtJQUFBLHNCQUFPO0lBQUEsaUJBQU87SUFDekMsaUJBQVM7Ozs7SUFhRCx3QkFBc0o7Ozs7SUFBOUYsMkVBQXNFOzs7SUFDOUgsZ0NBQ0U7SUFBQSxzQ0FDRjtJQUFBLGlCQUFPOzs7SUFRUCx3QkFBc0o7Ozs7SUFBOUYsMkVBQXNFOzs7SUFDOUgsZ0NBQ0U7SUFBQSxzQ0FDRjtJQUFBLGlCQUFPOzs7SUFjTCx3QkFBOEQ7Ozs7O0lBckN0RSxvQ0FJRTtJQUhJLHlUQUM2QyxzQkFBc0IsRUFBRSwrQkFBK0IsK0NBQ3ZELHNCQUFzQixFQUFFLCtCQUErQixLQUFHO0lBQzNHLCtCQUNFO0lBQUEsaUNBQTREO0lBQUEseUJBQVM7SUFBQSxpQkFBUTtJQUM3RSwrQkFDRTtJQUFBLHFDQUVBO0lBRE8sd05BQWdDO0lBRHZDLGlCQUVBO0lBQUEsbUVBQWtKO0lBQ2xKLHlFQUNFO0lBRUosaUJBQU07SUFDUixpQkFBTTtJQUNOLGdDQUNFO0lBQUEsa0NBQTREO0lBQUEsMEJBQVM7SUFB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QUFRLEVBQUUsV0FBVztnQkFDckIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDeEM7O2tCQVVJLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgRGlhbG9nVHlwZSwgTWVzc2FnZVNldmVyaXR5LFxuICAgIFV0aWxpdGllc1xufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1jb250cmFjdHMtYWxwaGEnO1xuXG5pbXBvcnQge1xuICAgIEFsZXJ0U2VydmljZSxcbiAgICBDb25maWd1cmF0aW9uU2VydmljZVxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1zZXJ2aWNlcy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgQXV0aFNlcnZpY2UsXG4gICAgUGVybWlzc2lvblxufSBmcm9tICdAcG9scHdhcmUvbmd4LW9hdXRoMic7XG5cbmltcG9ydCB7IFVzZXJMb2dpbiB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyLWxvZ2luLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgdXNlckxvZ2luID0gbmV3IFVzZXJMb2dpbigpO1xuICAgIGlzTG9hZGluZyA9IGZhbHNlO1xuICAgIGZvcm1SZXNldFRvZ2dsZSA9IHRydWU7XG4gICAgbW9kYWxDbG9zZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBsb2dpblN0YXR1c1N1YnNjcmlwdGlvbjogYW55O1xuXG4gICAgQElucHV0KClcbiAgICBpc01vZGFsID0gZmFsc2U7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZ3VyYXRpb25zOiBDb25maWd1cmF0aW9uU2VydmljZSkge1xuXG4gICAgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICB0aGlzLnVzZXJMb2dpbi5yZW1lbWJlck1lID0gdGhpcy5hdXRoU2VydmljZS5yZW1lbWJlck1lO1xuXG4gICAgICAgIGlmICh0aGlzLmdldFNob3VsZFJlZGlyZWN0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UucmVkaXJlY3RMb2dpblVzZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9naW5TdGF0dXNTdWJzY3JpcHRpb24gPSB0aGlzLmF1dGhTZXJ2aWNlLmdldExvZ2luU3RhdHVzRXZlbnQoKS5zdWJzY3JpYmUoaXNMb2dnZWRJbiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0U2hvdWxkUmVkaXJlY3QoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnJlZGlyZWN0TG9naW5Vc2VyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5sb2dpblN0YXR1c1N1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5sb2dpblN0YXR1c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBnZXRTaG91bGRSZWRpcmVjdCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzTW9kYWwgJiYgdGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluICYmICF0aGlzLmF1dGhTZXJ2aWNlLmlzU2Vzc2lvbkV4cGlyZWQ7XG4gICAgfVxuXG5cbiAgICBzaG93RXJyb3JBbGVydChjYXB0aW9uOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93TWVzc2FnZShjYXB0aW9uLCBtZXNzYWdlLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IpO1xuICAgIH1cblxuICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGFsQ2xvc2VkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMubW9kYWxDbG9zZWRDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCcnLCAnQXR0ZW1wdGluZyBsb2dpbi4uLicpO1xuXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9naW5XaXRoUGFzc3dvcmQodGhpcy51c2VyTG9naW4udXNlck5hbWUsIHRoaXMudXNlckxvZ2luLnBhc3N3b3JkLCB0aGlzLnVzZXJMb2dpbi5yZW1lbWJlck1lKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICB1c2VyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc01vZGFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ0xvZ2luJywgYFdlbGNvbWUgJHt1c2VyLnVzZXJOYW1lfSFgLCBNZXNzYWdlU2V2ZXJpdHkuc3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdMb2dpbicsIGBTZXNzaW9uIGZvciAke3VzZXIudXNlck5hbWV9IHJlc3RvcmVkIWAsIE1lc3NhZ2VTZXZlcml0eS5zdWNjZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ1Nlc3Npb24gUmVzdG9yZWQnLCAnUGxlYXNlIHRyeSB5b3VyIGxhc3Qgb3BlcmF0aW9uIGFnYWluJywgTWVzc2FnZVNldmVyaXR5LmRlZmF1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoVXRpbGl0aWVzLmNoZWNrTm9OZXR3b3JrKGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoVXRpbGl0aWVzLm5vTmV0d29ya01lc3NhZ2VDYXB0aW9uLCBVdGlsaXRpZXMubm9OZXR3b3JrTWVzc2FnZURldGFpbCwgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZmVyQWx0ZXJuYXRlSG9zdCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gVXRpbGl0aWVzLmdldEh0dHBSZXNwb25zZU1lc3NhZ2UoZXJyb3IpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ1VuYWJsZSB0byBsb2dpbicsIHRoaXMubWFwTG9naW5FcnJvck1lc3NhZ2UoZXJyb3JNZXNzYWdlKSwgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdVbmFibGUgdG8gbG9naW4nLCAnQW4gZXJyb3Igb2NjdXJlZCB3aGlsc3QgbG9nZ2luZyBpbiwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cXG5FcnJvcjogJyArIFV0aWxpdGllcy5nZXRSZXNwb25zZUJvZHkoZXJyb3IpLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIG9mZmVyQWx0ZXJuYXRlSG9zdCgpIHtcblxuICAgICAgICBpZiAoVXRpbGl0aWVzLmNoZWNrSXNMb2NhbEhvc3QobG9jYXRpb24ub3JpZ2luKSAmJiBVdGlsaXRpZXMuY2hlY2tJc0xvY2FsSG9zdCh0aGlzLmNvbmZpZ3VyYXRpb25zLmJhc2VVcmwpKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93RGlhbG9nKCdEZWFyIERldmVsb3BlciFcXG5JdCBhcHBlYXJzIHlvdXIgYmFja2VuZCBXZWIgQVBJIHNlcnZpY2UgaXMgbm90IHJ1bm5pbmcuLi5cXG4nICtcbiAgICAgICAgICAgICAgICAnV291bGQgeW91IHdhbnQgdG8gdGVtcG9yYXJpbHkgc3dpdGNoIHRvIHRoZSBvbmxpbmUgRGVtbyBBUEkgYmVsb3c/KE9yIHNwZWNpZnkgYW5vdGhlciknLFxuICAgICAgICAgICAgICAgIERpYWxvZ1R5cGUucHJvbXB0LFxuICAgICAgICAgICAgICAgICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbnMuYmFzZVVybCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25zLnRva2VuVXJsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdBUEkgQ2hhbmdlZCEnLCAnVGhlIHRhcmdldCBXZWIgQVBJIGhhcyBiZWVuIGNoYW5nZWQgdG86ICcgKyB2YWx1ZSwgTWVzc2FnZVNldmVyaXR5Lndhcm4pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9ucy5mYWxsYmFja0Jhc2VVcmwpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBtYXBMb2dpbkVycm9yTWVzc2FnZShlcnJvcjogc3RyaW5nKSB7XG5cbiAgICAgICAgaWYgKGVycm9yID09ICdpbnZhbGlkX3VzZXJuYW1lX29yX3Bhc3N3b3JkJykge1xuICAgICAgICAgICAgcmV0dXJuICdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciA9PSAnaW52YWxpZF9ncmFudCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnVGhpcyBhY2NvdW50IGhhcyBiZWVuIGRpc2FibGVkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmZvcm1SZXNldFRvZ2dsZSA9IGZhbHNlO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb3JtUmVzZXRUb2dnbGUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZC1mbGV4IGgtOTBcIj5cbiAgPGRpdiBjbGFzcz1cImxvZ2luLWNvbnRhaW5lciBtLWF1dG9cIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3hzaGFkb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRlciBiZy1wcmltYXJ5IGRhcmsgdGV4dC13aGl0ZSBjbGVhcmZpeFwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWxvY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IExvZ2luXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJpc01vZGFsXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgZmxvYXQtcmlnaHQgdGV4dC1saWdodFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJjbG9zZU1vZGFsKClcIj5cbiAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggb2Zmc2V0LW1kLTJcIj5cbiAgICAgICAgICA8Zm9ybSAqbmdJZj1cImZvcm1SZXNldFRvZ2dsZVwiIGNsYXNzPVwibG9naW5cIiBuYW1lPVwibG9naW5Gb3JtXCIgI2Y9XCJuZ0Zvcm1cIiBub3ZhbGlkYXRlXG4gICAgICAgICAgICAgICAgKG5nU3VibWl0KT1cImYuZm9ybS52YWxpZCA/IGxvZ2luKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoIXVzZXJuYW1lLnZhbGlkICYmIHNob3dFcnJvckFsZXJ0KCdVc2VybmFtZSBpcyByZXF1aXJlZCcsICdQbGVhc2UgZW50ZXIgYSB2YWxpZCB1c2VybmFtZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKCFwYXNzd29yZC52YWxpZCAmJiBzaG93RXJyb3JBbGVydCgnUGFzc3dvcmQgaXMgcmVxdWlyZWQnLCAnUGxlYXNlIGVudGVyIGEgdmFsaWQgcGFzc3dvcmQnKSlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvdyBoYXMtZmVlZGJhY2staWNvblwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbCBjb2wtbWQtM1wiIGZvcj1cImxvZ2luLXVzZXJuYW1lXCI+VXNlcm5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC05XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsb2dpbi11c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdXNlcm5hbWVcIiBhdXRvY29tcGxldGU9XCJ1c2VybmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgW25nQ2xhc3NdPVwieydpcy12YWxpZCc6IGYuc3VibWl0dGVkICYmIHVzZXJuYW1lLnZhbGlkLCAnaXMtaW52YWxpZCcgOiBmLnN1Ym1pdHRlZCAmJiAhdXNlcm5hbWUudmFsaWR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyTG9naW4udXNlck5hbWVcIiAjdXNlcm5hbWU9XCJuZ01vZGVsXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICA8aSAqbmdJZj1cImYuc3VibWl0dGVkXCIgY2xhc3M9XCJmYSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIiBbbmdDbGFzc109XCJ7J2ZhLWNoZWNrJzogdXNlcm5hbWUudmFsaWQsICdmYS10aW1lcycgOiAhdXNlcm5hbWUudmFsaWR9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiICpuZ0lmPVwiZi5zdWJtaXR0ZWQgJiYgIXVzZXJuYW1lLnZhbGlkXCI+XG4gICAgICAgICAgICAgICAgICBVc2VybmFtZSBpcyByZXF1aXJlZFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvdyBoYXMtZmVlZGJhY2staWNvblwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbCBjb2wtbWQtM1wiIGZvcj1cImxvZ2luLXBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC05XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwibG9naW4tcGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHBhc3N3b3JkXCIgYXV0b2NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgW25nQ2xhc3NdPVwieydpcy12YWxpZCc6IGYuc3VibWl0dGVkICYmIHBhc3N3b3JkLnZhbGlkLCAnaXMtaW52YWxpZCcgOiBmLnN1Ym1pdHRlZCAmJiAhcGFzc3dvcmQudmFsaWR9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyTG9naW4ucGFzc3dvcmRcIiAjcGFzc3dvcmQ9XCJuZ01vZGVsXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICA8aSAqbmdJZj1cImYuc3VibWl0dGVkXCIgY2xhc3M9XCJmYSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIiBbbmdDbGFzc109XCJ7J2ZhLWNoZWNrJzogcGFzc3dvcmQudmFsaWQsICdmYS10aW1lcycgOiAhcGFzc3dvcmQudmFsaWR9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiICpuZ0lmPVwiZi5zdWJtaXR0ZWQgJiYgIXBhc3N3b3JkLnZhbGlkXCI+XG4gICAgICAgICAgICAgICAgICBQYXNzd29yZCBpcyByZXF1aXJlZFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib2Zmc2V0LW1kLTMgY29sLW1kLTlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwibG9naW4tcmVtZW1iZXJtZVwiIG5hbWU9XCJyZW1lbWJlck1lXCIgWyhuZ01vZGVsKV09XCJ1c2VyTG9naW4ucmVtZW1iZXJNZVwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImxvZ2luLXJlbWVtYmVybWVcIj5SZW1lbWJlciBtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9mZnNldC1tZC0zIGNvbC1tZC05XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiaXNMb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgICA8aSAqbmdJZj1cImlzTG9hZGluZ1wiIGNsYXNzPSdmYSBmYS1jaXJjbGUtby1ub3RjaCBmYS1zcGluJz48L2k+IHt7aXNMb2FkaW5nID8gJ0xvZ2dpbmcgaW4uLi4nIDogJ0xvZ2luJ319XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19