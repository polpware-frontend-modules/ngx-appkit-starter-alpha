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
export class LoginComponent {
    /**
     * @param {?} alertService
     * @param {?} authService
     * @param {?} configurations
     */
    constructor(alertService, authService, configurations) {
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
    ngOnInit() {
        this.userLogin.rememberMe = this.authService.rememberMe;
        if (this.getShouldRedirect()) {
            this.authService.redirectLoginUser();
        }
        else {
            this.loginStatusSubscription = this.authService.getLoginStatusEvent().subscribe((/**
             * @param {?} isLoggedIn
             * @return {?}
             */
            isLoggedIn => {
                if (this.getShouldRedirect()) {
                    this.authService.redirectLoginUser();
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.loginStatusSubscription) {
            this.loginStatusSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    getShouldRedirect() {
        return !this.isModal && this.authService.isLoggedIn && !this.authService.isSessionExpired;
    }
    /**
     * @param {?} caption
     * @param {?} message
     * @return {?}
     */
    showErrorAlert(caption, message) {
        this.alertService.showMessage(caption, message, MessageSeverity.error);
    }
    /**
     * @return {?}
     */
    closeModal() {
        if (this.modalClosedCallback) {
            this.modalClosedCallback();
        }
    }
    /**
     * @return {?}
     */
    login() {
        this.isLoading = true;
        this.alertService.startLoadingMessage('', 'Attempting login...');
        this.authService.loginWithPassword(this.userLogin.userName, this.userLogin.password, this.userLogin.rememberMe)
            .subscribe((/**
         * @param {?} user
         * @return {?}
         */
        user => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.alertService.stopLoadingMessage();
                this.isLoading = false;
                this.reset();
                if (!this.isModal) {
                    this.alertService.showMessage('Login', `Welcome ${user.userName}!`, MessageSeverity.success);
                }
                else {
                    this.alertService.showMessage('Login', `Session for ${user.userName} restored!`, MessageSeverity.success);
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.alertService.showStickyMessage('Session Restored', 'Please try your last operation again', MessageSeverity.default);
                    }), 500);
                    this.closeModal();
                }
            }), 500);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.alertService.stopLoadingMessage();
            if (Utilities.checkNoNetwork(error)) {
                this.alertService.showStickyMessage(Utilities.noNetworkMessageCaption, Utilities.noNetworkMessageDetail, MessageSeverity.error, error);
                this.offerAlternateHost();
            }
            else {
                /** @type {?} */
                const errorMessage = Utilities.getHttpResponseMessage(error);
                if (errorMessage) {
                    this.alertService.showStickyMessage('Unable to login', this.mapLoginErrorMessage(errorMessage), MessageSeverity.error, error);
                }
                else {
                    this.alertService.showStickyMessage('Unable to login', 'An error occured whilst logging in, please try again later.\nError: ' + Utilities.getResponseBody(error), MessageSeverity.error, error);
                }
            }
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.isLoading = false;
            }), 500);
        }));
    }
    /**
     * @return {?}
     */
    offerAlternateHost() {
        if (Utilities.checkIsLocalHost(location.origin) && Utilities.checkIsLocalHost(this.configurations.baseUrl)) {
            this.alertService.showDialog('Dear Developer!\nIt appears your backend Web API service is not running...\n' +
                'Would you want to temporarily switch to the online Demo API below?(Or specify another)', DialogType.prompt, (/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                this.configurations.baseUrl = value;
                this.configurations.tokenUrl = value;
                this.alertService.showStickyMessage('API Changed!', 'The target Web API has been changed to: ' + value, MessageSeverity.warn);
            }), null, null, null, this.configurations.fallbackBaseUrl);
        }
    }
    /**
     * @param {?} error
     * @return {?}
     */
    mapLoginErrorMessage(error) {
        if (error == 'invalid_username_or_password') {
            return 'Invalid username or password';
        }
        if (error == 'invalid_grant') {
            return 'This account has been disabled';
        }
        return error;
    }
    /**
     * @return {?}
     */
    reset() {
        this.formResetToggle = false;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.formResetToggle = true;
        }));
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-login',
                template: "<div class=\"d-flex h-90\">\n  <div class=\"login-container m-auto\">\n    <div class=\"card boxshadow\">\n      <div class=\"card-header bg-primary dark text-white clearfix\">\n        <i class=\"fa fa-lock\" aria-hidden=\"true\"></i> Login\n        <button *ngIf=\"isModal\" type=\"button\" class=\"close float-right text-light\" aria-label=\"Close\" (click)=\"closeModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"col-md-8 offset-md-2\">\n          <form *ngIf=\"formResetToggle\" class=\"login\" name=\"loginForm\" #f=\"ngForm\" novalidate\n                (ngSubmit)=\"f.form.valid ? login() :\n                          (!username.valid && showErrorAlert('Username is required', 'Please enter a valid username'));\n                          (!password.valid && showErrorAlert('Password is required', 'Please enter a valid password'))\">\n            <div class=\"form-group row has-feedback-icon\">\n              <label class=\"col-form-label col-md-3\" for=\"login-username\">Username:</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" id=\"login-username\" name=\"username\" placeholder=\"Enter username\" autocomplete=\"username\" class=\"form-control\" [ngClass]=\"{'is-valid': f.submitted && username.valid, 'is-invalid' : f.submitted && !username.valid}\"\n                       [(ngModel)]=\"userLogin.userName\" #username=\"ngModel\" required />\n                <i *ngIf=\"f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': username.valid, 'fa-times' : !username.valid}\" aria-hidden=\"true\"></i>\n                <span class=\"invalid-feedback\" *ngIf=\"f.submitted && !username.valid\">\n                  Username is required\n                </span>\n              </div>\n            </div>\n            <div class=\"form-group row has-feedback-icon\">\n              <label class=\"col-form-label col-md-3\" for=\"login-password\">Password:</label>\n              <div class=\"col-md-9\">\n                <input type=\"password\" id=\"login-password\" name=\"password\" placeholder=\"Enter password\" autocomplete=\"current-password\" class=\"form-control\" [ngClass]=\"{'is-valid': f.submitted && password.valid, 'is-invalid' : f.submitted && !password.valid}\"\n                       [(ngModel)]=\"userLogin.password\" #password=\"ngModel\" required />\n                <i *ngIf=\"f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': password.valid, 'fa-times' : !password.valid}\" aria-hidden=\"true\"></i>\n                <span class=\"invalid-feedback\" *ngIf=\"f.submitted && !password.valid\">\n                  Password is required\n                </span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"offset-md-3 col-md-9\">\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"login-rememberme\" name=\"rememberMe\" [(ngModel)]=\"userLogin.rememberMe\">\n                  <label class=\"form-check-label\" for=\"login-rememberme\">Remember me</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"offset-md-3 col-md-9\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"isLoading\">\n                  <i *ngIf=\"isLoading\" class='fa fa-circle-o-notch fa-spin'></i> {{isLoading ? 'Logging in...' : 'Login'}}\n                </button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".boxshadow{position:relative;box-shadow:1px 2px 4px rgba(0,0,0,.5);padding:10px;background:#fff}.boxshadow::after{content:\"\";position:absolute;z-index:-1;box-shadow:0 15px 20px rgba(0,0,0,.3);width:70%;left:15%;height:100px;bottom:0}.cardshadow{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.last-control-group{margin-bottom:-.75rem}.h-90{height:90%}@media (min-width:768px){.login-container{width:700px}}@media (min-width:1200px){.login-container{width:730px}}"]
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: AlertService },
    { type: AuthService },
    { type: ConfigurationService }
];
LoginComponent.propDecorators = {
    isModal: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFDSCxVQUFVLEVBQUUsZUFBZSxFQUMzQixTQUFTLEVBQ1osTUFBTSxzQ0FBc0MsQ0FBQztBQUU5QyxPQUFPLEVBQ0gsWUFBWSxFQUNaLG9CQUFvQixFQUN2QixNQUFNLHFDQUFxQyxDQUFDO0FBRTdDLE9BQU8sRUFDSCxXQUFXLEVBRWQsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFRMUQsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQVl2QixZQUFvQixZQUEwQixFQUFVLFdBQXdCLEVBQVUsY0FBb0M7UUFBMUcsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQVY5SCxjQUFTLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUM1QixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBS3ZCLFlBQU8sR0FBRyxLQUFLLENBQUM7SUFLaEIsQ0FBQzs7OztJQUdELFFBQVE7UUFFSixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQztRQUV4RCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUN4QzthQUFNO1lBQ0gsSUFBSSxDQUFDLHVCQUF1QixH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QUksQ0FBQyxDQUFDO1lBQ2xJLENBQUMsR0FDRCxJQUFJLEVBQ0osSUFBSSxFQUNKLElBQUksRUFDSixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzVDO0lBQ0wsQ0FBQzs7Ozs7SUFHRCxvQkFBb0IsQ0FBQyxLQUFhO1FBRTlCLElBQUksS0FBSyxJQUFJLDhCQUE4QixFQUFFO1lBQ3pDLE9BQU8sOEJBQThCLENBQUM7U0FDekM7UUFFRCxJQUFJLEtBQUssSUFBSSxlQUFlLEVBQUU7WUFDMUIsT0FBTyxnQ0FBZ0MsQ0FBQztTQUMzQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFHRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFFN0IsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDaEMsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7WUFySkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxXQUFXO2dCQUNyQix1cUhBQXFDOzthQUV4Qzs7OztZQWZHLFlBQVk7WUFLWixXQUFXO1lBSlgsb0JBQW9COzs7c0JBd0JuQixLQUFLOzs7O0lBTk4sbUNBQTRCOztJQUM1QixtQ0FBa0I7O0lBQ2xCLHlDQUF1Qjs7SUFDdkIsNkNBQWdDOztJQUNoQyxpREFBNkI7O0lBRTdCLGlDQUNnQjs7Ozs7SUFHSixzQ0FBa0M7Ozs7O0lBQUUscUNBQWdDOzs7OztJQUFFLHdDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBEaWFsb2dUeXBlLCBNZXNzYWdlU2V2ZXJpdHksXG4gICAgVXRpbGl0aWVzXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgQWxlcnRTZXJ2aWNlLFxuICAgIENvbmZpZ3VyYXRpb25TZXJ2aWNlXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXNlcnZpY2VzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBBdXRoU2VydmljZSxcbiAgICBQZXJtaXNzaW9uXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtb2F1dGgyJztcblxuaW1wb3J0IHsgVXNlckxvZ2luIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXItbG9naW4ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1sb2dpbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICB1c2VyTG9naW4gPSBuZXcgVXNlckxvZ2luKCk7XG4gICAgaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgZm9ybVJlc2V0VG9nZ2xlID0gdHJ1ZTtcbiAgICBtb2RhbENsb3NlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICAgIGxvZ2luU3RhdHVzU3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgICBASW5wdXQoKVxuICAgIGlzTW9kYWwgPSBmYWxzZTtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgY29uZmlndXJhdGlvbnM6IENvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7XG5cbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIHRoaXMudXNlckxvZ2luLnJlbWVtYmVyTWUgPSB0aGlzLmF1dGhTZXJ2aWNlLnJlbWVtYmVyTWU7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0U2hvdWxkUmVkaXJlY3QoKSkge1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5yZWRpcmVjdExvZ2luVXNlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2dpblN0YXR1c1N1YnNjcmlwdGlvbiA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0TG9naW5TdGF0dXNFdmVudCgpLnN1YnNjcmliZShpc0xvZ2dlZEluID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRTaG91bGRSZWRpcmVjdCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UucmVkaXJlY3RMb2dpblVzZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmxvZ2luU3RhdHVzU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luU3RhdHVzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGdldFNob3VsZFJlZGlyZWN0KCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNNb2RhbCAmJiB0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4gJiYgIXRoaXMuYXV0aFNlcnZpY2UuaXNTZXNzaW9uRXhwaXJlZDtcbiAgICB9XG5cblxuICAgIHNob3dFcnJvckFsZXJ0KGNhcHRpb246IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKGNhcHRpb24sIG1lc3NhZ2UsIE1lc3NhZ2VTZXZlcml0eS5lcnJvcik7XG4gICAgfVxuXG4gICAgY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgaWYgKHRoaXMubW9kYWxDbG9zZWRDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5tb2RhbENsb3NlZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGxvZ2luKCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0YXJ0TG9hZGluZ01lc3NhZ2UoJycsICdBdHRlbXB0aW5nIGxvZ2luLi4uJyk7XG5cbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dpbldpdGhQYXNzd29yZCh0aGlzLnVzZXJMb2dpbi51c2VyTmFtZSwgdGhpcy51c2VyTG9naW4ucGFzc3dvcmQsIHRoaXMudXNlckxvZ2luLnJlbWVtYmVyTWUpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTW9kYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93TWVzc2FnZSgnTG9naW4nLCBgV2VsY29tZSAke3VzZXIudXNlck5hbWV9IWAsIE1lc3NhZ2VTZXZlcml0eS5zdWNjZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ0xvZ2luJywgYFNlc3Npb24gZm9yICR7dXNlci51c2VyTmFtZX0gcmVzdG9yZWQhYCwgTWVzc2FnZVNldmVyaXR5LnN1Y2Nlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZSgnU2Vzc2lvbiBSZXN0b3JlZCcsICdQbGVhc2UgdHJ5IHlvdXIgbGFzdCBvcGVyYXRpb24gYWdhaW4nLCBNZXNzYWdlU2V2ZXJpdHkuZGVmYXVsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChVdGlsaXRpZXMuY2hlY2tOb05ldHdvcmsoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZShVdGlsaXRpZXMubm9OZXR3b3JrTWVzc2FnZUNhcHRpb24sIFV0aWxpdGllcy5ub05ldHdvcmtNZXNzYWdlRGV0YWlsLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2ZmZXJBbHRlcm5hdGVIb3N0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBVdGlsaXRpZXMuZ2V0SHR0cFJlc3BvbnNlTWVzc2FnZShlcnJvcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZSgnVW5hYmxlIHRvIGxvZ2luJywgdGhpcy5tYXBMb2dpbkVycm9yTWVzc2FnZShlcnJvck1lc3NhZ2UpLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ1VuYWJsZSB0byBsb2dpbicsICdBbiBlcnJvciBvY2N1cmVkIHdoaWxzdCBsb2dnaW5nIGluLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlxcbkVycm9yOiAnICsgVXRpbGl0aWVzLmdldFJlc3BvbnNlQm9keShlcnJvciksIE1lc3NhZ2VTZXZlcml0eS5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgb2ZmZXJBbHRlcm5hdGVIb3N0KCkge1xuXG4gICAgICAgIGlmIChVdGlsaXRpZXMuY2hlY2tJc0xvY2FsSG9zdChsb2NhdGlvbi5vcmlnaW4pICYmIFV0aWxpdGllcy5jaGVja0lzTG9jYWxIb3N0KHRoaXMuY29uZmlndXJhdGlvbnMuYmFzZVVybCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dEaWFsb2coJ0RlYXIgRGV2ZWxvcGVyIVxcbkl0IGFwcGVhcnMgeW91ciBiYWNrZW5kIFdlYiBBUEkgc2VydmljZSBpcyBub3QgcnVubmluZy4uLlxcbicgK1xuICAgICAgICAgICAgICAgICdXb3VsZCB5b3Ugd2FudCB0byB0ZW1wb3JhcmlseSBzd2l0Y2ggdG8gdGhlIG9ubGluZSBEZW1vIEFQSSBiZWxvdz8oT3Igc3BlY2lmeSBhbm90aGVyKScsXG4gICAgICAgICAgICAgICAgRGlhbG9nVHlwZS5wcm9tcHQsXG4gICAgICAgICAgICAgICAgKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9ucy5iYXNlVXJsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbnMudG9rZW5VcmwgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ0FQSSBDaGFuZ2VkIScsICdUaGUgdGFyZ2V0IFdlYiBBUEkgaGFzIGJlZW4gY2hhbmdlZCB0bzogJyArIHZhbHVlLCBNZXNzYWdlU2V2ZXJpdHkud2Fybik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25zLmZhbGxiYWNrQmFzZVVybCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG1hcExvZ2luRXJyb3JNZXNzYWdlKGVycm9yOiBzdHJpbmcpIHtcblxuICAgICAgICBpZiAoZXJyb3IgPT0gJ2ludmFsaWRfdXNlcm5hbWVfb3JfcGFzc3dvcmQnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yID09ICdpbnZhbGlkX2dyYW50Jykge1xuICAgICAgICAgICAgcmV0dXJuICdUaGlzIGFjY291bnQgaGFzIGJlZW4gZGlzYWJsZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuZm9ybVJlc2V0VG9nZ2xlID0gZmFsc2U7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvcm1SZXNldFRvZ2dsZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==