/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/user-preferences/user-preferences.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, ViewChild } from '@angular/core';
import { DialogType, MessageSeverity, Utilities } from '@polpware/ngx-appkit-contracts-alpha';
import { AlertService, AppTranslationService, ConfigurationService, ThemeManager } from '@polpware/ngx-appkit-services-alpha';
import { Permission } from '@polpware/ngx-oauth2';
import { BootstrapSelectDirective } from '../../directives/bootstrap-select.directive';
import { AccountService } from '../../services/account.service';
var UserPreferencesComponent = /** @class */ (function () {
    function UserPreferencesComponent(alertService, translationService, accountService, themeManager, configurations) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.themeManager = themeManager;
        this.configurations = configurations;
        this.themeSelectorToggle = true;
    }
    /**
     * @return {?}
     */
    UserPreferencesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.languageChangedSubscription = this.translationService.languageChanged$.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.themeSelectorToggle = false;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.languageSelector.refresh();
                _this.homePageSelector.refresh();
                _this.themeSelectorToggle = true;
            }));
        }));
    };
    /**
     * @return {?}
     */
    UserPreferencesComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.languageChangedSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    UserPreferencesComponent.prototype.reloadFromServer = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.alertService.startLoadingMessage();
        this.accountService.getUserPreferences()
            .subscribe((/**
         * @param {?} results
         * @return {?}
         */
        function (results) {
            _this.alertService.stopLoadingMessage();
            _this.configurations.import(results);
            _this.alertService.showMessage('Defaults loaded!', '', MessageSeverity.info);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.alertService.stopLoadingMessage();
            _this.alertService.showStickyMessage('Load Error', "Unable to retrieve user preferences from the server.\r\nErrors: \"" + Utilities.getHttpResponseMessages(error) + "\"", MessageSeverity.error, error);
        }));
    };
    /**
     * @return {?}
     */
    UserPreferencesComponent.prototype.setAsDefault = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to set the current configuration as your new defaults?', DialogType.confirm, (/**
         * @return {?}
         */
        function () { return _this.setAsDefaultHelper(); }), (/**
         * @return {?}
         */
        function () { return _this.alertService.showMessage('Operation Cancelled!', '', MessageSeverity.default); }));
    };
    /**
     * @return {?}
     */
    UserPreferencesComponent.prototype.setAsDefaultHelper = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.alertService.startLoadingMessage('', 'Saving new defaults');
        this.accountService.updateUserPreferences(this.configurations.export())
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.alertService.stopLoadingMessage();
            _this.alertService.showMessage('New Defaults', 'Account defaults updated successfully', MessageSeverity.success);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.alertService.stopLoadingMessage();
            _this.alertService.showStickyMessage('Save Error', "An error occured whilst saving configuration defaults.\r\nErrors: \"" + Utilities.getHttpResponseMessages(error) + "\"", MessageSeverity.error, error);
        }));
    };
    /**
     * @return {?}
     */
    UserPreferencesComponent.prototype.resetDefault = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to reset your defaults?', DialogType.confirm, (/**
         * @return {?}
         */
        function () { return _this.resetDefaultHelper(); }), (/**
         * @return {?}
         */
        function () { return _this.alertService.showMessage('Operation Cancelled!', '', MessageSeverity.default); }));
    };
    /**
     * @return {?}
     */
    UserPreferencesComponent.prototype.resetDefaultHelper = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.alertService.startLoadingMessage('', 'Resetting defaults');
        this.accountService.updateUserPreferences(null)
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.alertService.stopLoadingMessage();
            _this.configurations.import(null);
            _this.alertService.showMessage('Defaults Reset', 'Account defaults reset completed successfully', MessageSeverity.success);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.alertService.stopLoadingMessage();
            _this.alertService.showStickyMessage('Save Error', "An error occured whilst resetting configuration defaults.\r\nErrors: \"" + Utilities.getHttpResponseMessages(error) + "\"", MessageSeverity.error, error);
        }));
    };
    Object.defineProperty(UserPreferencesComponent.prototype, "canViewCustomers", {
        get: /**
         * @return {?}
         */
        function () {
            return this.accountService.userHasPermission(Permission.viewUsersPermission); // eg. viewCustomersPermission
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPreferencesComponent.prototype, "canViewProducts", {
        get: /**
         * @return {?}
         */
        function () {
            return this.accountService.userHasPermission(Permission.viewUsersPermission); // eg. viewProductsPermission
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPreferencesComponent.prototype, "canViewOrders", {
        get: /**
         * @return {?}
         */
        function () {
            return true; // eg. viewOrdersPermission
        },
        enumerable: true,
        configurable: true
    });
    UserPreferencesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'user-preferences',
                    template: "<div>\n    <div class=\"form-group row\">\n        <label for=\"refreshButton\" class=\"col-sm-3 col-form-label\">{{'preferences.ReloadPreferences' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <button id=\"refreshButton\" class=\"btn btn-outline-secondary\" (click)=\"reloadFromServer()\">\n                <i class=\"fa fa-refresh\"></i>\n            </button>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.ReloadPreferencesHint' | translate}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"separator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label for=\"language\" class=\"col-sm-3 col-form-label\">{{'preferences.Language' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <select id=\"language\" [(ngModel)]=\"configurations.language\" #languageSelector=\"bootstrap-select\" bootstrapSelect class=\"selectpicker form-control\">\n                <option data-subtext=\"(Default)\" value=\"en\">{{'preferences.English' | translate}}</option>\n                <option value=\"fr\">{{'preferences.French' | translate}}</option>\n                <option value=\"de\">{{'preferences.German' | translate}}</option>\n                <option value=\"pt\">{{'preferences.Portuguese' | translate}}</option>\n                <option value=\"ar\">{{'preferences.Arabic' | translate}}</option>\n                <option value=\"ko\">{{'preferences.Korean' | translate}}</option>\n            </select>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.LanguageHint' | translate}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"separator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label for=\"homePage\" class=\"col-sm-3 col-form-label\">{{'preferences.HomePage' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <select id=\"homePage\" [(ngModel)]=\"configurations.homeUrl\" #homePageSelector=\"bootstrap-select\" bootstrapSelect class=\"selectpicker form-control\">\n                <option data-icon=\"fa fa-tachometer\" data-subtext=\"(Default)\" value=\"/\">{{'preferences.Dashboard' | translate}}</option>\n                <option *ngIf=\"canViewCustomers\" data-icon=\"fa fa-handshake-o\" value=\"/customers\">{{'preferences.Customers' | translate}}</option>\n                <option *ngIf=\"canViewProducts\" data-icon=\"fa fa-truck\" value=\"/products\">{{'preferences.Products' | translate}}</option>\n                <option *ngIf=\"canViewOrders\" data-icon=\"fa fa-shopping-cart\" value=\"/orders\">{{'preferences.Orders' | translate}}</option>\n                <option data-icon=\"fa fa-info-circle\" value=\"/about\">{{'preferences.About' | translate}}</option>\n                <option data-icon=\"fa fa-cog\" value=\"/settings\">{{'preferences.Settings' | translate}}</option>\n            </select>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.HomePageHint' | translate}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"separator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label for=\"defaultTheme\" class=\"col-sm-3 col-form-label\">{{'preferences.Theme' | translate}} </label>\n        <div *ngIf=\"themeSelectorToggle\" class=\"col-sm-4\">\n            <select id=\"defaultTheme\" [(ngModel)]=\"configurations.themeId\" bootstrapSelect class=\"selectpicker theme-picker form-control\">\n                <option *ngFor=\"let theme of themeManager.themes\"\n                attr.data-content=\"<div class='theme-item' style='background-color: {{theme.background}}; color: {{theme.color}}'>{{'preferences.' + theme.name + 'Theme' | translate}}\n                <span class='small'>{{theme.isDark ? '(Dark)' : ''}}</span></div>\">\n                {{theme.id}}\n                </option>\n            </select>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.ThemeHint' | translate}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"separator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"dashboardStatistics\">{{'preferences.DashboardStatistics' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <div class=\"checkbox\">\n                <input name=\"dashboardStatistics\" [(ngModel)]=\"configurations.showDashboardStatistics\" class=\"form-control\" type=\"checkbox\" bootstrapToggle data-size=\"small\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.DashboardStatisticsHint' | translate}}</p>\n        </div>\n    </div>\n    <!--  -->\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"subseparator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"dashboardTodo\">{{'preferences.DashboardNotifications' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <div class=\"checkbox\">\n                <input name=\"dashboardNotifications\" [(ngModel)]=\"configurations.showDashboardNotifications\" class=\"form-control\" type=\"checkbox\" bootstrapToggle data-size=\"small\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.DashboardNotificationsHint' | translate}}</p>\n        </div>\n    </div>\n    <!--  -->\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"subseparator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"dashboardTodo\">{{'preferences.DashboardTodo' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <div class=\"checkbox\">\n                <input name=\"dashboardTodo\" [(ngModel)]=\"configurations.showDashboardTodo\" class=\"form-control\" type=\"checkbox\" bootstrapToggle data-size=\"small\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.DashboardTodoHint' | translate}}</p>\n        </div>\n    </div>\n    <!--  -->\n\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"subseparator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"dashboardBanner\">{{'preferences.DashboardBanner' | translate}}</label>\n        <div class=\"col-sm-4\">\n            <div class=\"checkbox\">\n                <input name=\"dashboardBanner\" [(ngModel)]=\"configurations.showDashboardBanner\" class=\"form-control\" type=\"checkbox\" bootstrapToggle data-size=\"small\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.DashboardBannerHint' | translate}}</p>\n        </div>\n    </div>\n    <!--  -->\n\n\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"last-separator-hr\" />\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <div class=\"col-sm-3\">\n\n        </div>\n        <div class=\"col-sm-9\">\n            <div class=\"row float-left\">\n                <div class=\"col-sm-6 col-reset-default\">\n                    <button type=\"button\" (click)=\"resetDefault()\" class=\"btn btn-success\">\n                        <i class='fa fa-circle-o-notch'></i> {{'preferences.ResetDefault' | translate}}\n                    </button>\n                </div>\n                <div class=\"col-sm-6 col-set-default\">\n                    <button type=\"button\" (click)=\"setAsDefault()\" class=\"btn btn-primary\">\n                        <i class='fa fa-hdd-o'></i> {{'preferences.SetDefault' | translate}}\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n",
                    styles: [".separator-hr{margin:7px 5px;border-top-style:dashed}.subseparator-hr{margin:7px 5px;border-top-style:none}.last-separator-hr{margin-top:7px}.form-group{margin-top:0;margin-bottom:0}.form-control-plaintext{min-height:0}.checkbox{padding-top:0}.col-reset-default{padding-right:0}.col-set-default{padding-left:5px}.col-reset-default .btn,.col-set-default .btn{min-width:150px}@media (min-width:768px){.col-form-label{padding-top:5px}}"]
                }] }
    ];
    /** @nocollapse */
    UserPreferencesComponent.ctorParameters = function () { return [
        { type: AlertService },
        { type: AppTranslationService },
        { type: AccountService },
        { type: ThemeManager },
        { type: ConfigurationService }
    ]; };
    UserPreferencesComponent.propDecorators = {
        languageSelector: [{ type: ViewChild, args: ['languageSelector', { static: true },] }],
        homePageSelector: [{ type: ViewChild, args: ['homePageSelector', { static: true },] }]
    };
    return UserPreferencesComponent;
}());
export { UserPreferencesComponent };
if (false) {
    /** @type {?} */
    UserPreferencesComponent.prototype.themeSelectorToggle;
    /** @type {?} */
    UserPreferencesComponent.prototype.languageChangedSubscription;
    /** @type {?} */
    UserPreferencesComponent.prototype.languageSelector;
    /** @type {?} */
    UserPreferencesComponent.prototype.homePageSelector;
    /**
     * @type {?}
     * @private
     */
    UserPreferencesComponent.prototype.alertService;
    /**
     * @type {?}
     * @private
     */
    UserPreferencesComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    UserPreferencesComponent.prototype.accountService;
    /** @type {?} */
    UserPreferencesComponent.prototype.themeManager;
    /** @type {?} */
    UserPreferencesComponent.prototype.configurations;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcmVmZXJlbmNlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXNlci1wcmVmZXJlbmNlcy91c2VyLXByZWZlcmVuY2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEUsT0FBTyxFQUNILFVBQVUsRUFBRSxlQUFlLEVBQzNCLFNBQVMsRUFDWixNQUFNLHNDQUFzQyxDQUFDO0FBRTlDLE9BQU8sRUFDSCxZQUFZLEVBQ1oscUJBQXFCLEVBRXJCLG9CQUFvQixFQUNwQixZQUFZLEVBQ2YsTUFBTSxxQ0FBcUMsQ0FBQztBQUU3QyxPQUFPLEVBRUgsVUFBVSxFQUNiLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRWhFO0lBaUJJLGtDQUNZLFlBQTBCLEVBQzFCLGtCQUF5QyxFQUN6QyxjQUE4QixFQUMvQixZQUEwQixFQUMxQixjQUFvQztRQUpuQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXVCO1FBQ3pDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7UUFmL0Msd0JBQW1CLEdBQUcsSUFBSSxDQUFDO0lBZ0IzQixDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7UUFB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QUFlOzs7O1FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsNkJBQTZCO1FBQy9HLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbURBQWE7Ozs7UUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxDQUFDLDJCQUEyQjtRQUM1QyxDQUFDOzs7T0FBQTs7Z0JBeEhKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixnOFFBQWdEOztpQkFFbkQ7Ozs7Z0JBbkJHLFlBQVk7Z0JBQ1oscUJBQXFCO2dCQVloQixjQUFjO2dCQVRuQixZQUFZO2dCQURaLG9CQUFvQjs7O21DQXVCbkIsU0FBUyxTQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTttQ0FHOUMsU0FBUyxTQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUEyR25ELCtCQUFDO0NBQUEsQUF6SEQsSUF5SEM7U0FwSFksd0JBQXdCOzs7SUFFakMsdURBQTJCOztJQUUzQiwrREFBaUM7O0lBRWpDLG9EQUMyQzs7SUFFM0Msb0RBQzJDOzs7OztJQUd2QyxnREFBa0M7Ozs7O0lBQ2xDLHNEQUFpRDs7Ozs7SUFDakQsa0RBQXNDOztJQUN0QyxnREFBaUM7O0lBQ2pDLGtEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgRGlhbG9nVHlwZSwgTWVzc2FnZVNldmVyaXR5LFxuICAgIFV0aWxpdGllc1xufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1jb250cmFjdHMtYWxwaGEnO1xuXG5pbXBvcnQge1xuICAgIEFsZXJ0U2VydmljZSxcbiAgICBBcHBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgTG9jYWxTdG9yZU1hbmFnZXIsXG4gICAgQ29uZmlndXJhdGlvblNlcnZpY2UsXG4gICAgVGhlbWVNYW5hZ2VyXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXNlcnZpY2VzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBBdXRoU2VydmljZSxcbiAgICBQZXJtaXNzaW9uXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtb2F1dGgyJztcblxuaW1wb3J0IHsgQm9vdHN0cmFwU2VsZWN0RGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9ib290c3RyYXAtc2VsZWN0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjY291bnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndXNlci1wcmVmZXJlbmNlcycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3VzZXItcHJlZmVyZW5jZXMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3VzZXItcHJlZmVyZW5jZXMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVc2VyUHJlZmVyZW5jZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICB0aGVtZVNlbGVjdG9yVG9nZ2xlID0gdHJ1ZTtcblxuICAgIGxhbmd1YWdlQ2hhbmdlZFN1YnNjcmlwdGlvbjogYW55O1xuXG4gICAgQFZpZXdDaGlsZCgnbGFuZ3VhZ2VTZWxlY3RvcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgbGFuZ3VhZ2VTZWxlY3RvcjogQm9vdHN0cmFwU2VsZWN0RGlyZWN0aXZlO1xuXG4gICAgQFZpZXdDaGlsZCgnaG9tZVBhZ2VTZWxlY3RvcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgaG9tZVBhZ2VTZWxlY3RvcjogQm9vdHN0cmFwU2VsZWN0RGlyZWN0aXZlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBBcHBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlLFxuICAgICAgICBwdWJsaWMgdGhlbWVNYW5hZ2VyOiBUaGVtZU1hbmFnZXIsXG4gICAgICAgIHB1YmxpYyBjb25maWd1cmF0aW9uczogQ29uZmlndXJhdGlvblNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sYW5ndWFnZUNoYW5nZWRTdWJzY3JpcHRpb24gPSB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5sYW5ndWFnZUNoYW5nZWQkLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgIHRoaXMudGhlbWVTZWxlY3RvclRvZ2dsZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlU2VsZWN0b3IucmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9tZVBhZ2VTZWxlY3Rvci5yZWZyZXNoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVtZVNlbGVjdG9yVG9nZ2xlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5sYW5ndWFnZUNoYW5nZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cblxuXG4gICAgcmVsb2FkRnJvbVNlcnZlcigpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RhcnRMb2FkaW5nTWVzc2FnZSgpO1xuXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuZ2V0VXNlclByZWZlcmVuY2VzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25zLmltcG9ydChyZXN1bHRzKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdEZWZhdWx0cyBsb2FkZWQhJywgJycsIE1lc3NhZ2VTZXZlcml0eS5pbmZvKTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZSgnTG9hZCBFcnJvcicsIGBVbmFibGUgdG8gcmV0cmlldmUgdXNlciBwcmVmZXJlbmNlcyBmcm9tIHRoZSBzZXJ2ZXIuXFxyXFxuRXJyb3JzOiBcIiR7VXRpbGl0aWVzLmdldEh0dHBSZXNwb25zZU1lc3NhZ2VzKGVycm9yKX1cImAsXG4gICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRBc0RlZmF1bHQoKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dEaWFsb2coJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBzZXQgdGhlIGN1cnJlbnQgY29uZmlndXJhdGlvbiBhcyB5b3VyIG5ldyBkZWZhdWx0cz8nLCBEaWFsb2dUeXBlLmNvbmZpcm0sXG4gICAgICAgICAgICAoKSA9PiB0aGlzLnNldEFzRGVmYXVsdEhlbHBlcigpLFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ09wZXJhdGlvbiBDYW5jZWxsZWQhJywgJycsIE1lc3NhZ2VTZXZlcml0eS5kZWZhdWx0KSk7XG4gICAgfVxuXG4gICAgc2V0QXNEZWZhdWx0SGVscGVyKCkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCcnLCAnU2F2aW5nIG5ldyBkZWZhdWx0cycpO1xuXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UudXBkYXRlVXNlclByZWZlcmVuY2VzKHRoaXMuY29uZmlndXJhdGlvbnMuZXhwb3J0KCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93TWVzc2FnZSgnTmV3IERlZmF1bHRzJywgJ0FjY291bnQgZGVmYXVsdHMgdXBkYXRlZCBzdWNjZXNzZnVsbHknLCBNZXNzYWdlU2V2ZXJpdHkuc3VjY2Vzcyk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ1NhdmUgRXJyb3InLCBgQW4gZXJyb3Igb2NjdXJlZCB3aGlsc3Qgc2F2aW5nIGNvbmZpZ3VyYXRpb24gZGVmYXVsdHMuXFxyXFxuRXJyb3JzOiBcIiR7VXRpbGl0aWVzLmdldEh0dHBSZXNwb25zZU1lc3NhZ2VzKGVycm9yKX1cImAsXG4gICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgcmVzZXREZWZhdWx0KCkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93RGlhbG9nKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVzZXQgeW91ciBkZWZhdWx0cz8nLCBEaWFsb2dUeXBlLmNvbmZpcm0sXG4gICAgICAgICAgICAoKSA9PiB0aGlzLnJlc2V0RGVmYXVsdEhlbHBlcigpLFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ09wZXJhdGlvbiBDYW5jZWxsZWQhJywgJycsIE1lc3NhZ2VTZXZlcml0eS5kZWZhdWx0KSk7XG4gICAgfVxuXG4gICAgcmVzZXREZWZhdWx0SGVscGVyKCkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCcnLCAnUmVzZXR0aW5nIGRlZmF1bHRzJyk7XG5cbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS51cGRhdGVVc2VyUHJlZmVyZW5jZXMobnVsbClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbnMuaW1wb3J0KG51bGwpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdEZWZhdWx0cyBSZXNldCcsICdBY2NvdW50IGRlZmF1bHRzIHJlc2V0IGNvbXBsZXRlZCBzdWNjZXNzZnVsbHknLCBNZXNzYWdlU2V2ZXJpdHkuc3VjY2Vzcyk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ1NhdmUgRXJyb3InLCBgQW4gZXJyb3Igb2NjdXJlZCB3aGlsc3QgcmVzZXR0aW5nIGNvbmZpZ3VyYXRpb24gZGVmYXVsdHMuXFxyXFxuRXJyb3JzOiBcIiR7VXRpbGl0aWVzLmdldEh0dHBSZXNwb25zZU1lc3NhZ2VzKGVycm9yKX1cImAsXG4gICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGdldCBjYW5WaWV3Q3VzdG9tZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50U2VydmljZS51c2VySGFzUGVybWlzc2lvbihQZXJtaXNzaW9uLnZpZXdVc2Vyc1Blcm1pc3Npb24pOyAvLyBlZy4gdmlld0N1c3RvbWVyc1Blcm1pc3Npb25cbiAgICB9XG5cbiAgICBnZXQgY2FuVmlld1Byb2R1Y3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50U2VydmljZS51c2VySGFzUGVybWlzc2lvbihQZXJtaXNzaW9uLnZpZXdVc2Vyc1Blcm1pc3Npb24pOyAvLyBlZy4gdmlld1Byb2R1Y3RzUGVybWlzc2lvblxuICAgIH1cblxuICAgIGdldCBjYW5WaWV3T3JkZXJzKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTsgLy8gZWcuIHZpZXdPcmRlcnNQZXJtaXNzaW9uXG4gICAgfVxufVxuIl19