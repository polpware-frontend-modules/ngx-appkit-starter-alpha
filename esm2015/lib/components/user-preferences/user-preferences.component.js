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
export class UserPreferencesComponent {
    /**
     * @param {?} alertService
     * @param {?} translationService
     * @param {?} accountService
     * @param {?} themeManager
     * @param {?} configurations
     */
    constructor(alertService, translationService, accountService, themeManager, configurations) {
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
    ngOnInit() {
        this.languageChangedSubscription = this.translationService.languageChanged$.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.themeSelectorToggle = false;
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.languageSelector.refresh();
                this.homePageSelector.refresh();
                this.themeSelectorToggle = true;
            }));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.languageChangedSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    reloadFromServer() {
        this.alertService.startLoadingMessage();
        this.accountService.getUserPreferences()
            .subscribe((/**
         * @param {?} results
         * @return {?}
         */
        results => {
            this.alertService.stopLoadingMessage();
            this.configurations.import(results);
            this.alertService.showMessage('Defaults loaded!', '', MessageSeverity.info);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Load Error', `Unable to retrieve user preferences from the server.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        }));
    }
    /**
     * @return {?}
     */
    setAsDefault() {
        this.alertService.showDialog('Are you sure you want to set the current configuration as your new defaults?', DialogType.confirm, (/**
         * @return {?}
         */
        () => this.setAsDefaultHelper()), (/**
         * @return {?}
         */
        () => this.alertService.showMessage('Operation Cancelled!', '', MessageSeverity.default)));
    }
    /**
     * @return {?}
     */
    setAsDefaultHelper() {
        this.alertService.startLoadingMessage('', 'Saving new defaults');
        this.accountService.updateUserPreferences(this.configurations.export())
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            this.alertService.stopLoadingMessage();
            this.alertService.showMessage('New Defaults', 'Account defaults updated successfully', MessageSeverity.success);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Save Error', `An error occured whilst saving configuration defaults.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        }));
    }
    /**
     * @return {?}
     */
    resetDefault() {
        this.alertService.showDialog('Are you sure you want to reset your defaults?', DialogType.confirm, (/**
         * @return {?}
         */
        () => this.resetDefaultHelper()), (/**
         * @return {?}
         */
        () => this.alertService.showMessage('Operation Cancelled!', '', MessageSeverity.default)));
    }
    /**
     * @return {?}
     */
    resetDefaultHelper() {
        this.alertService.startLoadingMessage('', 'Resetting defaults');
        this.accountService.updateUserPreferences(null)
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            this.alertService.stopLoadingMessage();
            this.configurations.import(null);
            this.alertService.showMessage('Defaults Reset', 'Account defaults reset completed successfully', MessageSeverity.success);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Save Error', `An error occured whilst resetting configuration defaults.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        }));
    }
    /**
     * @return {?}
     */
    get canViewCustomers() {
        return this.accountService.userHasPermission(Permission.viewUsersPermission); // eg. viewCustomersPermission
    }
    /**
     * @return {?}
     */
    get canViewProducts() {
        return this.accountService.userHasPermission(Permission.viewUsersPermission); // eg. viewProductsPermission
    }
    /**
     * @return {?}
     */
    get canViewOrders() {
        return true; // eg. viewOrdersPermission
    }
}
UserPreferencesComponent.decorators = [
    { type: Component, args: [{
                selector: 'user-preferences',
                template: "<div>\n    <div class=\"form-group row\">\n        <label for=\"refreshButton\" class=\"col-sm-3 col-form-label\">{{'preferences.ReloadPreferences' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <button id=\"refreshButton\" class=\"btn btn-outline-secondary\" (click)=\"reloadFromServer()\">\n                <i class=\"fa fa-refresh\"></i>\n            </button>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.ReloadPreferencesHint' | translate}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"separator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label for=\"language\" class=\"col-sm-3 col-form-label\">{{'preferences.Language' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <select id=\"language\" [(ngModel)]=\"configurations.language\" #languageSelector=\"bootstrap-select\" bootstrapSelect class=\"selectpicker form-control\">\n                <option data-subtext=\"(Default)\" value=\"en\">{{'preferences.English' | translate}}</option>\n                <option value=\"fr\">{{'preferences.French' | translate}}</option>\n                <option value=\"de\">{{'preferences.German' | translate}}</option>\n                <option value=\"pt\">{{'preferences.Portuguese' | translate}}</option>\n                <option value=\"ar\">{{'preferences.Arabic' | translate}}</option>\n                <option value=\"ko\">{{'preferences.Korean' | translate}}</option>\n            </select>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.LanguageHint' | translate}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"separator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label for=\"homePage\" class=\"col-sm-3 col-form-label\">{{'preferences.HomePage' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <select id=\"homePage\" [(ngModel)]=\"configurations.homeUrl\" #homePageSelector=\"bootstrap-select\" bootstrapSelect class=\"selectpicker form-control\">\n                <option data-icon=\"fa fa-tachometer\" data-subtext=\"(Default)\" value=\"/\">{{'preferences.Dashboard' | translate}}</option>\n                <option *ngIf=\"canViewCustomers\" data-icon=\"fa fa-handshake-o\" value=\"/customers\">{{'preferences.Customers' | translate}}</option>\n                <option *ngIf=\"canViewProducts\" data-icon=\"fa fa-truck\" value=\"/products\">{{'preferences.Products' | translate}}</option>\n                <option *ngIf=\"canViewOrders\" data-icon=\"fa fa-shopping-cart\" value=\"/orders\">{{'preferences.Orders' | translate}}</option>\n                <option data-icon=\"fa fa-info-circle\" value=\"/about\">{{'preferences.About' | translate}}</option>\n                <option data-icon=\"fa fa-cog\" value=\"/settings\">{{'preferences.Settings' | translate}}</option>\n            </select>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.HomePageHint' | translate}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"separator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label for=\"defaultTheme\" class=\"col-sm-3 col-form-label\">{{'preferences.Theme' | translate}} </label>\n        <div *ngIf=\"themeSelectorToggle\" class=\"col-sm-4\">\n            <select id=\"defaultTheme\" [(ngModel)]=\"configurations.themeId\" bootstrapSelect class=\"selectpicker theme-picker form-control\">\n                <option *ngFor=\"let theme of themeManager.themes\"\n                attr.data-content=\"<div class='theme-item' style='background-color: {{theme.background}}; color: {{theme.color}}'>{{'preferences.' + theme.name + 'Theme' | translate}}\n                <span class='small'>{{theme.isDark ? '(Dark)' : ''}}</span></div>\">\n                {{theme.id}}\n                </option>\n            </select>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.ThemeHint' | translate}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"separator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"dashboardStatistics\">{{'preferences.DashboardStatistics' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <div class=\"checkbox\">\n                <input name=\"dashboardStatistics\" [(ngModel)]=\"configurations.showDashboardStatistics\" class=\"form-control\" type=\"checkbox\" bootstrapToggle data-size=\"small\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.DashboardStatisticsHint' | translate}}</p>\n        </div>\n    </div>\n    <!--  -->\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"subseparator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"dashboardTodo\">{{'preferences.DashboardNotifications' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <div class=\"checkbox\">\n                <input name=\"dashboardNotifications\" [(ngModel)]=\"configurations.showDashboardNotifications\" class=\"form-control\" type=\"checkbox\" bootstrapToggle data-size=\"small\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.DashboardNotificationsHint' | translate}}</p>\n        </div>\n    </div>\n    <!--  -->\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"subseparator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"dashboardTodo\">{{'preferences.DashboardTodo' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <div class=\"checkbox\">\n                <input name=\"dashboardTodo\" [(ngModel)]=\"configurations.showDashboardTodo\" class=\"form-control\" type=\"checkbox\" bootstrapToggle data-size=\"small\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.DashboardTodoHint' | translate}}</p>\n        </div>\n    </div>\n    <!--  -->\n\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"subseparator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"dashboardBanner\">{{'preferences.DashboardBanner' | translate}}</label>\n        <div class=\"col-sm-4\">\n            <div class=\"checkbox\">\n                <input name=\"dashboardBanner\" [(ngModel)]=\"configurations.showDashboardBanner\" class=\"form-control\" type=\"checkbox\" bootstrapToggle data-size=\"small\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.DashboardBannerHint' | translate}}</p>\n        </div>\n    </div>\n    <!--  -->\n\n\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"last-separator-hr\" />\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <div class=\"col-sm-3\">\n\n        </div>\n        <div class=\"col-sm-9\">\n            <div class=\"row float-left\">\n                <div class=\"col-sm-6 col-reset-default\">\n                    <button type=\"button\" (click)=\"resetDefault()\" class=\"btn btn-success\">\n                        <i class='fa fa-circle-o-notch'></i> {{'preferences.ResetDefault' | translate}}\n                    </button>\n                </div>\n                <div class=\"col-sm-6 col-set-default\">\n                    <button type=\"button\" (click)=\"setAsDefault()\" class=\"btn btn-primary\">\n                        <i class='fa fa-hdd-o'></i> {{'preferences.SetDefault' | translate}}\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n",
                styles: [".separator-hr{margin:7px 5px;border-top-style:dashed}.subseparator-hr{margin:7px 5px;border-top-style:none}.last-separator-hr{margin-top:7px}.form-group{margin-top:0;margin-bottom:0}.form-control-plaintext{min-height:0}.checkbox{padding-top:0}.col-reset-default{padding-right:0}.col-set-default{padding-left:5px}.col-reset-default .btn,.col-set-default .btn{min-width:150px}@media (min-width:768px){.col-form-label{padding-top:5px}}"]
            }] }
];
/** @nocollapse */
UserPreferencesComponent.ctorParameters = () => [
    { type: AlertService },
    { type: AppTranslationService },
    { type: AccountService },
    { type: ThemeManager },
    { type: ConfigurationService }
];
UserPreferencesComponent.propDecorators = {
    languageSelector: [{ type: ViewChild, args: ['languageSelector', { static: true },] }],
    homePageSelector: [{ type: ViewChild, args: ['homePageSelector', { static: true },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcmVmZXJlbmNlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXNlci1wcmVmZXJlbmNlcy91c2VyLXByZWZlcmVuY2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEUsT0FBTyxFQUNILFVBQVUsRUFBRSxlQUFlLEVBQzNCLFNBQVMsRUFDWixNQUFNLHNDQUFzQyxDQUFDO0FBRTlDLE9BQU8sRUFDSCxZQUFZLEVBQ1oscUJBQXFCLEVBRXJCLG9CQUFvQixFQUNwQixZQUFZLEVBQ2YsTUFBTSxxQ0FBcUMsQ0FBQztBQUU3QyxPQUFPLEVBRUgsVUFBVSxFQUNiLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdkYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBT2hFLE1BQU0sT0FBTyx3QkFBd0I7Ozs7Ozs7O0lBWWpDLFlBQ1ksWUFBMEIsRUFDMUIsa0JBQXlDLEVBQ3pDLGNBQThCLEVBQy9CLFlBQTBCLEVBQzFCLGNBQW9DO1FBSm5DLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7UUFDekMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQy9CLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQWYvQyx3QkFBbUIsR0FBRyxJQUFJLENBQUM7SUFnQjNCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTOzs7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QUM7Ozs7SUFFRCxJQUFJLGFBQWE7UUFDYixPQUFPLElBQUksQ0FBQyxDQUFDLDJCQUEyQjtJQUM1QyxDQUFDOzs7WUF4SEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGc4UUFBZ0Q7O2FBRW5EOzs7O1lBbkJHLFlBQVk7WUFDWixxQkFBcUI7WUFZaEIsY0FBYztZQVRuQixZQUFZO1lBRFosb0JBQW9COzs7K0JBdUJuQixTQUFTLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOytCQUc5QyxTQUFTLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBUC9DLHVEQUEyQjs7SUFFM0IsK0RBQWlDOztJQUVqQyxvREFDMkM7O0lBRTNDLG9EQUMyQzs7Ozs7SUFHdkMsZ0RBQWtDOzs7OztJQUNsQyxzREFBaUQ7Ozs7O0lBQ2pELGtEQUFzQzs7SUFDdEMsZ0RBQWlDOztJQUNqQyxrREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIERpYWxvZ1R5cGUsIE1lc3NhZ2VTZXZlcml0eSxcbiAgICBVdGlsaXRpZXNcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBBbGVydFNlcnZpY2UsXG4gICAgQXBwVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIExvY2FsU3RvcmVNYW5hZ2VyLFxuICAgIENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIFRoZW1lTWFuYWdlclxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1zZXJ2aWNlcy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgQXV0aFNlcnZpY2UsXG4gICAgUGVybWlzc2lvblxufSBmcm9tICdAcG9scHdhcmUvbmd4LW9hdXRoMic7XG5cbmltcG9ydCB7IEJvb3RzdHJhcFNlbGVjdERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvYm9vdHN0cmFwLXNlbGVjdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3VzZXItcHJlZmVyZW5jZXMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyLXByZWZlcmVuY2VzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi91c2VyLXByZWZlcmVuY2VzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVXNlclByZWZlcmVuY2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgdGhlbWVTZWxlY3RvclRvZ2dsZSA9IHRydWU7XG5cbiAgICBsYW5ndWFnZUNoYW5nZWRTdWJzY3JpcHRpb246IGFueTtcblxuICAgIEBWaWV3Q2hpbGQoJ2xhbmd1YWdlU2VsZWN0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGxhbmd1YWdlU2VsZWN0b3I6IEJvb3RzdHJhcFNlbGVjdERpcmVjdGl2ZTtcblxuICAgIEBWaWV3Q2hpbGQoJ2hvbWVQYWdlU2VsZWN0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGhvbWVQYWdlU2VsZWN0b3I6IEJvb3RzdHJhcFNlbGVjdERpcmVjdGl2ZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHRyYW5zbGF0aW9uU2VydmljZTogQXBwVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSxcbiAgICAgICAgcHVibGljIHRoZW1lTWFuYWdlcjogVGhlbWVNYW5hZ2VyLFxuICAgICAgICBwdWJsaWMgY29uZmlndXJhdGlvbnM6IENvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VDaGFuZ2VkU3Vic2NyaXB0aW9uID0gdGhpcy50cmFuc2xhdGlvblNlcnZpY2UubGFuZ3VhZ2VDaGFuZ2VkJC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRoZW1lU2VsZWN0b3JUb2dnbGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVNlbGVjdG9yLnJlZnJlc2goKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVQYWdlU2VsZWN0b3IucmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbWVTZWxlY3RvclRvZ2dsZSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VDaGFuZ2VkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG5cblxuICAgIHJlbG9hZEZyb21TZXJ2ZXIoKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0YXJ0TG9hZGluZ01lc3NhZ2UoKTtcblxuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmdldFVzZXJQcmVmZXJlbmNlcygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9ucy5pbXBvcnQocmVzdWx0cyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93TWVzc2FnZSgnRGVmYXVsdHMgbG9hZGVkIScsICcnLCBNZXNzYWdlU2V2ZXJpdHkuaW5mbyk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ0xvYWQgRXJyb3InLCBgVW5hYmxlIHRvIHJldHJpZXZlIHVzZXIgcHJlZmVyZW5jZXMgZnJvbSB0aGUgc2VydmVyLlxcclxcbkVycm9yczogXCIke1V0aWxpdGllcy5nZXRIdHRwUmVzcG9uc2VNZXNzYWdlcyhlcnJvcil9XCJgLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0QXNEZWZhdWx0KCkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93RGlhbG9nKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gc2V0IHRoZSBjdXJyZW50IGNvbmZpZ3VyYXRpb24gYXMgeW91ciBuZXcgZGVmYXVsdHM/JywgRGlhbG9nVHlwZS5jb25maXJtLFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5zZXRBc0RlZmF1bHRIZWxwZXIoKSxcbiAgICAgICAgICAgICgpID0+IHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdPcGVyYXRpb24gQ2FuY2VsbGVkIScsICcnLCBNZXNzYWdlU2V2ZXJpdHkuZGVmYXVsdCkpO1xuICAgIH1cblxuICAgIHNldEFzRGVmYXVsdEhlbHBlcigpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RhcnRMb2FkaW5nTWVzc2FnZSgnJywgJ1NhdmluZyBuZXcgZGVmYXVsdHMnKTtcblxuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLnVwZGF0ZVVzZXJQcmVmZXJlbmNlcyh0aGlzLmNvbmZpZ3VyYXRpb25zLmV4cG9ydCgpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ05ldyBEZWZhdWx0cycsICdBY2NvdW50IGRlZmF1bHRzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5JywgTWVzc2FnZVNldmVyaXR5LnN1Y2Nlc3MpO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdTYXZlIEVycm9yJywgYEFuIGVycm9yIG9jY3VyZWQgd2hpbHN0IHNhdmluZyBjb25maWd1cmF0aW9uIGRlZmF1bHRzLlxcclxcbkVycm9yczogXCIke1V0aWxpdGllcy5nZXRIdHRwUmVzcG9uc2VNZXNzYWdlcyhlcnJvcil9XCJgLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIHJlc2V0RGVmYXVsdCgpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd0RpYWxvZygnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlc2V0IHlvdXIgZGVmYXVsdHM/JywgRGlhbG9nVHlwZS5jb25maXJtLFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5yZXNldERlZmF1bHRIZWxwZXIoKSxcbiAgICAgICAgICAgICgpID0+IHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdPcGVyYXRpb24gQ2FuY2VsbGVkIScsICcnLCBNZXNzYWdlU2V2ZXJpdHkuZGVmYXVsdCkpO1xuICAgIH1cblxuICAgIHJlc2V0RGVmYXVsdEhlbHBlcigpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RhcnRMb2FkaW5nTWVzc2FnZSgnJywgJ1Jlc2V0dGluZyBkZWZhdWx0cycpO1xuXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UudXBkYXRlVXNlclByZWZlcmVuY2VzKG51bGwpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25zLmltcG9ydChudWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93TWVzc2FnZSgnRGVmYXVsdHMgUmVzZXQnLCAnQWNjb3VudCBkZWZhdWx0cyByZXNldCBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5JywgTWVzc2FnZVNldmVyaXR5LnN1Y2Nlc3MpO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdTYXZlIEVycm9yJywgYEFuIGVycm9yIG9jY3VyZWQgd2hpbHN0IHJlc2V0dGluZyBjb25maWd1cmF0aW9uIGRlZmF1bHRzLlxcclxcbkVycm9yczogXCIke1V0aWxpdGllcy5nZXRIdHRwUmVzcG9uc2VNZXNzYWdlcyhlcnJvcil9XCJgLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBnZXQgY2FuVmlld0N1c3RvbWVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudFNlcnZpY2UudXNlckhhc1Blcm1pc3Npb24oUGVybWlzc2lvbi52aWV3VXNlcnNQZXJtaXNzaW9uKTsgLy8gZWcuIHZpZXdDdXN0b21lcnNQZXJtaXNzaW9uXG4gICAgfVxuXG4gICAgZ2V0IGNhblZpZXdQcm9kdWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudFNlcnZpY2UudXNlckhhc1Blcm1pc3Npb24oUGVybWlzc2lvbi52aWV3VXNlcnNQZXJtaXNzaW9uKTsgLy8gZWcuIHZpZXdQcm9kdWN0c1Blcm1pc3Npb25cbiAgICB9XG5cbiAgICBnZXQgY2FuVmlld09yZGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIGVnLiB2aWV3T3JkZXJzUGVybWlzc2lvblxuICAgIH1cbn1cbiJdfQ==