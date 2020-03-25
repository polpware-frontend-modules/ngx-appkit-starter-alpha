/**
 * @fileoverview added by tsickle
 * Generated from: lib/pages/login/login.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, Input } from '@angular/core';
import { DialogType, MessageSeverity, Utilities } from '@polpware/ngx-appkit-contracts-alpha';
import { AlertService, ConfigurationService } from '@polpware/ngx-appkit-services-alpha';
import { AuthService } from '@polpware/ngx-oauth2';
import { UserLogin } from '../../models/user-login.model';
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
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.userLogin.rememberMe = this.authService.rememberMe;
        if (this.getShouldRedirect()) {
            this.authService.redirectLoginUser();
        }
        else {
            this.loginStatusSubscription = this.authService.getLoginStatusEvent().subscribe((/**
             * @param {?} isLoggedIn
             * @return {?}
             */
            function (isLoggedIn) {
                if (_this.getShouldRedirect()) {
                    _this.authService.redirectLoginUser();
                }
            }));
        }
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.loginStatusSubscription) {
            this.loginStatusSubscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.getShouldRedirect = /**
     * @return {?}
     */
    function () {
        return !this.isModal && this.authService.isLoggedIn && !this.authService.isSessionExpired;
    };
    /**
     * @param {?} caption
     * @param {?} message
     * @return {?}
     */
    LoginComponent.prototype.showErrorAlert = /**
     * @param {?} caption
     * @param {?} message
     * @return {?}
     */
    function (caption, message) {
        this.alertService.showMessage(caption, message, MessageSeverity.error);
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.closeModal = /**
     * @return {?}
     */
    function () {
        if (this.modalClosedCallback) {
            this.modalClosedCallback();
        }
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.login = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isLoading = true;
        this.alertService.startLoadingMessage('', 'Attempting login...');
        this.authService.loginWithPassword(this.userLogin.userName, this.userLogin.password, this.userLogin.rememberMe)
            .subscribe((/**
         * @param {?} user
         * @return {?}
         */
        function (user) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.alertService.stopLoadingMessage();
                _this.isLoading = false;
                _this.reset();
                if (!_this.isModal) {
                    _this.alertService.showMessage('Login', "Welcome " + user.userName + "!", MessageSeverity.success);
                }
                else {
                    _this.alertService.showMessage('Login', "Session for " + user.userName + " restored!", MessageSeverity.success);
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.alertService.showStickyMessage('Session Restored', 'Please try your last operation again', MessageSeverity.default);
                    }), 500);
                    _this.closeModal();
                }
            }), 500);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.alertService.stopLoadingMessage();
            if (Utilities.checkNoNetwork(error)) {
                _this.alertService.showStickyMessage(Utilities.noNetworkMessageCaption, Utilities.noNetworkMessageDetail, MessageSeverity.error, error);
                _this.offerAlternateHost();
            }
            else {
                /** @type {?} */
                var errorMessage = Utilities.getHttpResponseMessage(error);
                if (errorMessage) {
                    _this.alertService.showStickyMessage('Unable to login', _this.mapLoginErrorMessage(errorMessage), MessageSeverity.error, error);
                }
                else {
                    _this.alertService.showStickyMessage('Unable to login', 'An error occured whilst logging in, please try again later.\nError: ' + Utilities.getResponseBody(error), MessageSeverity.error, error);
                }
            }
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.isLoading = false;
            }), 500);
        }));
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.offerAlternateHost = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (Utilities.checkIsLocalHost(location.origin) && Utilities.checkIsLocalHost(this.configurations.baseUrl)) {
            this.alertService.showDialog('Dear Developer!\nIt appears your backend Web API service is not running...\n' +
                'Would you want to temporarily switch to the online Demo API below?(Or specify another)', DialogType.prompt, (/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.configurations.baseUrl = value;
                _this.configurations.tokenUrl = value;
                _this.alertService.showStickyMessage('API Changed!', 'The target Web API has been changed to: ' + value, MessageSeverity.warn);
            }), null, null, null, this.configurations.fallbackBaseUrl);
        }
    };
    /**
     * @param {?} error
     * @return {?}
     */
    LoginComponent.prototype.mapLoginErrorMessage = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (error == 'invalid_username_or_password') {
            return 'Invalid username or password';
        }
        if (error == 'invalid_grant') {
            return 'This account has been disabled';
        }
        return error;
    };
    /**
     * @return {?}
     */
    LoginComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formResetToggle = false;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.formResetToggle = true;
        }));
    };
    LoginComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-login',
                    template: "<div class=\"d-flex h-90\">\n  <div class=\"login-container m-auto\">\n    <div class=\"card boxshadow\">\n      <div class=\"card-header bg-primary dark text-white clearfix\">\n        <i class=\"fa fa-lock\" aria-hidden=\"true\"></i> Login\n        <button *ngIf=\"isModal\" type=\"button\" class=\"close float-right text-light\" aria-label=\"Close\" (click)=\"closeModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"col-md-8 offset-md-2\">\n          <form *ngIf=\"formResetToggle\" class=\"login\" name=\"loginForm\" #f=\"ngForm\" novalidate\n                (ngSubmit)=\"f.form.valid ? login() :\n                          (!username.valid && showErrorAlert('Username is required', 'Please enter a valid username'));\n                          (!password.valid && showErrorAlert('Password is required', 'Please enter a valid password'))\">\n            <div class=\"form-group row has-feedback-icon\">\n              <label class=\"col-form-label col-md-3\" for=\"login-username\">Username:</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" id=\"login-username\" name=\"username\" placeholder=\"Enter username\" autocomplete=\"username\" class=\"form-control\" [ngClass]=\"{'is-valid': f.submitted && username.valid, 'is-invalid' : f.submitted && !username.valid}\"\n                       [(ngModel)]=\"userLogin.userName\" #username=\"ngModel\" required />\n                <i *ngIf=\"f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': username.valid, 'fa-times' : !username.valid}\" aria-hidden=\"true\"></i>\n                <span class=\"invalid-feedback\" *ngIf=\"f.submitted && !username.valid\">\n                  Username is required\n                </span>\n              </div>\n            </div>\n            <div class=\"form-group row has-feedback-icon\">\n              <label class=\"col-form-label col-md-3\" for=\"login-password\">Password:</label>\n              <div class=\"col-md-9\">\n                <input type=\"password\" id=\"login-password\" name=\"password\" placeholder=\"Enter password\" autocomplete=\"current-password\" class=\"form-control\" [ngClass]=\"{'is-valid': f.submitted && password.valid, 'is-invalid' : f.submitted && !password.valid}\"\n                       [(ngModel)]=\"userLogin.password\" #password=\"ngModel\" required />\n                <i *ngIf=\"f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': password.valid, 'fa-times' : !password.valid}\" aria-hidden=\"true\"></i>\n                <span class=\"invalid-feedback\" *ngIf=\"f.submitted && !password.valid\">\n                  Password is required\n                </span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"offset-md-3 col-md-9\">\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"login-rememberme\" name=\"rememberMe\" [(ngModel)]=\"userLogin.rememberMe\">\n                  <label class=\"form-check-label\" for=\"login-rememberme\">Remember me</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"offset-md-3 col-md-9\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"isLoading\">\n                  <i *ngIf=\"isLoading\" class='fa fa-circle-o-notch fa-spin'></i> {{isLoading ? 'Logging in...' : 'Login'}}\n                </button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".boxshadow{position:relative;box-shadow:1px 2px 4px rgba(0,0,0,.5);padding:10px;background:#fff}.boxshadow::after{content:\"\";position:absolute;z-index:-1;box-shadow:0 15px 20px rgba(0,0,0,.3);width:70%;left:15%;height:100px;bottom:0}.cardshadow{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.last-control-group{margin-bottom:-.75rem}.h-90{height:90%}@media (min-width:768px){.login-container{width:700px}}@media (min-width:1200px){.login-container{width:730px}}"]
                }] }
    ];
    /** @nocollapse */
    LoginComponent.ctorParameters = function () { return [
        { type: AlertService },
        { type: AuthService },
        { type: ConfigurationService }
    ]; };
    LoginComponent.propDecorators = {
        isModal: [{ type: Input }]
    };
    return LoginComponent;
}());
export { LoginComponent };
if (false) {
    /** @type {?} */
    LoginComponent.prototype.userLogin;
    /** @type {?} */
    LoginComponent.prototype.isLoading;
    /** @type {?} */
    LoginComponent.prototype.formResetToggle;
    /** @type {?} */
    LoginComponent.prototype.modalClosedCallback;
    /** @type {?} */
    LoginComponent.prototype.loginStatusSubscription;
    /** @type {?} */
    LoginComponent.prototype.isModal;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.alertService;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.configurations;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFDSCxVQUFVLEVBQUUsZUFBZSxFQUMzQixTQUFTLEVBQ1osTUFBTSxzQ0FBc0MsQ0FBQztBQUU5QyxPQUFPLEVBQ0gsWUFBWSxFQUNaLG9CQUFvQixFQUN2QixNQUFNLHFDQUFxQyxDQUFDO0FBRTdDLE9BQU8sRUFDSCxXQUFXLEVBRWQsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFMUQ7SUFrQkksd0JBQW9CLFlBQTBCLEVBQVUsV0FBd0IsRUFBVSxjQUFvQztRQUExRyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQXNCO1FBVjlILGNBQVMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQzVCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFLdkIsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUtoQixDQUFDOzs7O0lBR0QsaUNBQVE7OztJQUFSO1FBQUEsaUJBYUM7UUFYRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQztRQUV4RCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUN4QzthQUFNO1lBQ0gsSUFBSSxDQUFDLHVCQUF1QixH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QUFLLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xJLENBQUMsR0FDRCxJQUFJLEVBQ0osSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzVDO0lBQ0wsQ0FBQzs7Ozs7SUFHRCw2Q0FBb0I7Ozs7SUFBcEIsVUFBcUIsS0FBYTtRQUU5QixJQUFJLEtBQUssSUFBSSw4QkFBOEIsRUFBRTtZQUN6QyxPQUFPLDhCQUE4QixDQUFDO1NBQ3pDO1FBRUQsSUFBSSxLQUFLLElBQUksZUFBZSxFQUFFO1lBQzFCLE9BQU8sZ0NBQWdDLENBQUM7U0FDM0M7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOzs7O0lBR0QsOEJBQUs7OztJQUFMO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUU3QixVQUFVOzs7UUFBQztZQUNQLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Z0JBckpKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsdXFIQUFxQzs7aUJBRXhDOzs7O2dCQWZHLFlBQVk7Z0JBS1osV0FBVztnQkFKWCxvQkFBb0I7OzswQkF3Qm5CLEtBQUs7O0lBd0lWLHFCQUFDO0NBQUEsQUF0SkQsSUFzSkM7U0FoSlksY0FBYzs7O0lBRXZCLG1DQUE0Qjs7SUFDNUIsbUNBQWtCOztJQUNsQix5Q0FBdUI7O0lBQ3ZCLDZDQUFnQzs7SUFDaEMsaURBQTZCOztJQUU3QixpQ0FDZ0I7Ozs7O0lBR0osc0NBQWtDOzs7OztJQUFFLHFDQUFnQzs7Ozs7SUFBRSx3Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgRGlhbG9nVHlwZSwgTWVzc2FnZVNldmVyaXR5LFxuICAgIFV0aWxpdGllc1xufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1jb250cmFjdHMtYWxwaGEnO1xuXG5pbXBvcnQge1xuICAgIEFsZXJ0U2VydmljZSxcbiAgICBDb25maWd1cmF0aW9uU2VydmljZVxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1zZXJ2aWNlcy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgQXV0aFNlcnZpY2UsXG4gICAgUGVybWlzc2lvblxufSBmcm9tICdAcG9scHdhcmUvbmd4LW9hdXRoMic7XG5cbmltcG9ydCB7IFVzZXJMb2dpbiB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyLWxvZ2luLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgdXNlckxvZ2luID0gbmV3IFVzZXJMb2dpbigpO1xuICAgIGlzTG9hZGluZyA9IGZhbHNlO1xuICAgIGZvcm1SZXNldFRvZ2dsZSA9IHRydWU7XG4gICAgbW9kYWxDbG9zZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBsb2dpblN0YXR1c1N1YnNjcmlwdGlvbjogYW55O1xuXG4gICAgQElucHV0KClcbiAgICBpc01vZGFsID0gZmFsc2U7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZ3VyYXRpb25zOiBDb25maWd1cmF0aW9uU2VydmljZSkge1xuXG4gICAgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICB0aGlzLnVzZXJMb2dpbi5yZW1lbWJlck1lID0gdGhpcy5hdXRoU2VydmljZS5yZW1lbWJlck1lO1xuXG4gICAgICAgIGlmICh0aGlzLmdldFNob3VsZFJlZGlyZWN0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UucmVkaXJlY3RMb2dpblVzZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9naW5TdGF0dXNTdWJzY3JpcHRpb24gPSB0aGlzLmF1dGhTZXJ2aWNlLmdldExvZ2luU3RhdHVzRXZlbnQoKS5zdWJzY3JpYmUoaXNMb2dnZWRJbiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0U2hvdWxkUmVkaXJlY3QoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLnJlZGlyZWN0TG9naW5Vc2VyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5sb2dpblN0YXR1c1N1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5sb2dpblN0YXR1c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBnZXRTaG91bGRSZWRpcmVjdCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzTW9kYWwgJiYgdGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluICYmICF0aGlzLmF1dGhTZXJ2aWNlLmlzU2Vzc2lvbkV4cGlyZWQ7XG4gICAgfVxuXG5cbiAgICBzaG93RXJyb3JBbGVydChjYXB0aW9uOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93TWVzc2FnZShjYXB0aW9uLCBtZXNzYWdlLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IpO1xuICAgIH1cblxuICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGFsQ2xvc2VkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMubW9kYWxDbG9zZWRDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCcnLCAnQXR0ZW1wdGluZyBsb2dpbi4uLicpO1xuXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9naW5XaXRoUGFzc3dvcmQodGhpcy51c2VyTG9naW4udXNlck5hbWUsIHRoaXMudXNlckxvZ2luLnBhc3N3b3JkLCB0aGlzLnVzZXJMb2dpbi5yZW1lbWJlck1lKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICB1c2VyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc01vZGFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ0xvZ2luJywgYFdlbGNvbWUgJHt1c2VyLnVzZXJOYW1lfSFgLCBNZXNzYWdlU2V2ZXJpdHkuc3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdMb2dpbicsIGBTZXNzaW9uIGZvciAke3VzZXIudXNlck5hbWV9IHJlc3RvcmVkIWAsIE1lc3NhZ2VTZXZlcml0eS5zdWNjZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ1Nlc3Npb24gUmVzdG9yZWQnLCAnUGxlYXNlIHRyeSB5b3VyIGxhc3Qgb3BlcmF0aW9uIGFnYWluJywgTWVzc2FnZVNldmVyaXR5LmRlZmF1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoVXRpbGl0aWVzLmNoZWNrTm9OZXR3b3JrKGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoVXRpbGl0aWVzLm5vTmV0d29ya01lc3NhZ2VDYXB0aW9uLCBVdGlsaXRpZXMubm9OZXR3b3JrTWVzc2FnZURldGFpbCwgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZmVyQWx0ZXJuYXRlSG9zdCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gVXRpbGl0aWVzLmdldEh0dHBSZXNwb25zZU1lc3NhZ2UoZXJyb3IpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ1VuYWJsZSB0byBsb2dpbicsIHRoaXMubWFwTG9naW5FcnJvck1lc3NhZ2UoZXJyb3JNZXNzYWdlKSwgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdVbmFibGUgdG8gbG9naW4nLCAnQW4gZXJyb3Igb2NjdXJlZCB3aGlsc3QgbG9nZ2luZyBpbiwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cXG5FcnJvcjogJyArIFV0aWxpdGllcy5nZXRSZXNwb25zZUJvZHkoZXJyb3IpLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIG9mZmVyQWx0ZXJuYXRlSG9zdCgpIHtcblxuICAgICAgICBpZiAoVXRpbGl0aWVzLmNoZWNrSXNMb2NhbEhvc3QobG9jYXRpb24ub3JpZ2luKSAmJiBVdGlsaXRpZXMuY2hlY2tJc0xvY2FsSG9zdCh0aGlzLmNvbmZpZ3VyYXRpb25zLmJhc2VVcmwpKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93RGlhbG9nKCdEZWFyIERldmVsb3BlciFcXG5JdCBhcHBlYXJzIHlvdXIgYmFja2VuZCBXZWIgQVBJIHNlcnZpY2UgaXMgbm90IHJ1bm5pbmcuLi5cXG4nICtcbiAgICAgICAgICAgICAgICAnV291bGQgeW91IHdhbnQgdG8gdGVtcG9yYXJpbHkgc3dpdGNoIHRvIHRoZSBvbmxpbmUgRGVtbyBBUEkgYmVsb3c/KE9yIHNwZWNpZnkgYW5vdGhlciknLFxuICAgICAgICAgICAgICAgIERpYWxvZ1R5cGUucHJvbXB0LFxuICAgICAgICAgICAgICAgICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbnMuYmFzZVVybCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25zLnRva2VuVXJsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdBUEkgQ2hhbmdlZCEnLCAnVGhlIHRhcmdldCBXZWIgQVBJIGhhcyBiZWVuIGNoYW5nZWQgdG86ICcgKyB2YWx1ZSwgTWVzc2FnZVNldmVyaXR5Lndhcm4pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9ucy5mYWxsYmFja0Jhc2VVcmwpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBtYXBMb2dpbkVycm9yTWVzc2FnZShlcnJvcjogc3RyaW5nKSB7XG5cbiAgICAgICAgaWYgKGVycm9yID09ICdpbnZhbGlkX3VzZXJuYW1lX29yX3Bhc3N3b3JkJykge1xuICAgICAgICAgICAgcmV0dXJuICdJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciA9PSAnaW52YWxpZF9ncmFudCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnVGhpcyBhY2NvdW50IGhhcyBiZWVuIGRpc2FibGVkJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmZvcm1SZXNldFRvZ2dsZSA9IGZhbHNlO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb3JtUmVzZXRUb2dnbGUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=