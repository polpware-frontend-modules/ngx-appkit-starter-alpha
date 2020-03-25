/**
 * @fileoverview added by tsickle
 * Generated from: lib/pages/settings/settings.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Permission } from '@polpware/ngx-oauth2';
import { fadeInOut } from '../../services/animations';
import { BootstrapTabDirective } from '../../directives/bootstrap-tab.directive';
import { AccountService } from '../../services/account.service';
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(router, route, accountService) {
        this.router = router;
        this.route = route;
        this.accountService = accountService;
        this.isProfileActivated = true;
        this.isPreferencesActivated = false;
        this.isUsersActivated = false;
        this.isRolesActivated = false;
        this.profileTab = 'profile';
        this.preferencesTab = 'preferences';
        this.usersTab = 'users';
        this.rolesTab = 'roles';
    }
    /**
     * @return {?}
     */
    SettingsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.fragmentSubscription = this.route.fragment.subscribe((/**
         * @param {?} anchor
         * @return {?}
         */
        function (anchor) { return _this.showContent(anchor); }));
    };
    /**
     * @return {?}
     */
    SettingsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.fragmentSubscription.unsubscribe();
    };
    /**
     * @param {?} anchor
     * @return {?}
     */
    SettingsComponent.prototype.showContent = /**
     * @param {?} anchor
     * @return {?}
     */
    function (anchor) {
        if (anchor) {
            anchor = anchor.toLowerCase();
        }
        if ((this.isFragmentEquals(anchor, this.usersTab) && !this.canViewUsers) ||
            (this.isFragmentEquals(anchor, this.rolesTab) && !this.canViewRoles)) {
            return;
        }
        this.tab.show("#" + (anchor || this.profileTab) + "Tab");
    };
    /**
     * @param {?} fragment1
     * @param {?} fragment2
     * @return {?}
     */
    SettingsComponent.prototype.isFragmentEquals = /**
     * @param {?} fragment1
     * @param {?} fragment2
     * @return {?}
     */
    function (fragment1, fragment2) {
        if (fragment1 == null) {
            fragment1 = '';
        }
        if (fragment2 == null) {
            fragment2 = '';
        }
        return fragment1.toLowerCase() == fragment2.toLowerCase();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SettingsComponent.prototype.onShowTab = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var activeTab = event.target.hash.split('#', 2).pop();
        this.isProfileActivated = activeTab == this.profileTab;
        this.isPreferencesActivated = activeTab == this.preferencesTab;
        this.isUsersActivated = activeTab == this.usersTab;
        this.isRolesActivated = activeTab == this.rolesTab;
        this.router.navigate([], { fragment: activeTab });
    };
    Object.defineProperty(SettingsComponent.prototype, "canViewUsers", {
        get: /**
         * @return {?}
         */
        function () {
            return this.accountService.userHasPermission(Permission.viewUsersPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "canViewRoles", {
        get: /**
         * @return {?}
         */
        function () {
            return this.accountService.userHasPermission(Permission.viewRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    SettingsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'settings',
                    template: "<div class=\"container settings-page\">\n    <header class=\"pageHeader\">\n        <h3><i class=\"fa fa-cog fa-lg page-caption\" aria-hidden=\"true\"></i> {{'pageHeader.Settings' | translate}}</h3>\n    </header>\n\n    <div [@fadeInOut]>\n        <div class=\"d-sm-flex flex-row\">\n            <ul bootstrapTab #tab=\"bootstrap-tab\" (showBSTab)=\"onShowTab($event)\" class=\"nav nav-tabs nav-tabs--vertical nav-tabs--left\" role=\"navigation\">\n                <li class=\"nav-item\">\n                    <a id=\"profileTab\" [routerLink]=\"[]\" fragment=\"profile\" data-target=\"#profile\" href=\"#profile\" class=\"nav-link active\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"profile\">\n                        <i class=\"fa fa-user-circle-o fa-fw\" aria-hidden=\"true\"></i> {{'settings.tab.Profile' | translate}}\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a id=\"preferencesTab\" [routerLink]=\"[]\" fragment=\"preferences\" data-target=\"#preferences\" href=\"#preferences\" class=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"preferences\">\n                        <i class=\"fa fa-sliders fa-fw\" aria-hidden=\"true\"></i> {{'settings.tab.Preferences' | translate}}\n                    </a>\n                </li>\n            </ul>\n            <div class=\"tab-content w-100\">\n                <div class=\"tab-pane show active\" id=\"profile\" role=\"tabpanel\">\n                    <h4>{{'settings.header.UserProfile' | translate}}</h4>\n                    <hr class=\"separator-hr\" />\n                    <div [@fadeInOut] *ngIf=\"isProfileActivated\" class=\"content-container pl-lg-2\">\n                        <user-info></user-info>\n                    </div>\n\n                </div>\n                <div class=\"tab-pane\" id=\"preferences\" role=\"tabpanel\">\n                    <h4>{{'settings.header.UserPreferences' | translate}}</h4>\n                    <hr class=\"separator-hr\" />\n                    <div [@fadeInOut] *ngIf=\"isPreferencesActivated\" class=\"content-container pl-lg-2\">\n                        <user-preferences></user-preferences>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n",
                    animations: [fadeInOut],
                    styles: [".separator-hr{margin-top:0;margin-bottom:10px}[hidden]{display:none}"]
                }] }
    ];
    /** @nocollapse */
    SettingsComponent.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: AccountService }
    ]; };
    SettingsComponent.propDecorators = {
        tab: [{ type: ViewChild, args: ['tab', { static: true },] }]
    };
    return SettingsComponent;
}());
export { SettingsComponent };
if (false) {
    /** @type {?} */
    SettingsComponent.prototype.isProfileActivated;
    /** @type {?} */
    SettingsComponent.prototype.isPreferencesActivated;
    /** @type {?} */
    SettingsComponent.prototype.isUsersActivated;
    /** @type {?} */
    SettingsComponent.prototype.isRolesActivated;
    /** @type {?} */
    SettingsComponent.prototype.fragmentSubscription;
    /** @type {?} */
    SettingsComponent.prototype.profileTab;
    /** @type {?} */
    SettingsComponent.prototype.preferencesTab;
    /** @type {?} */
    SettingsComponent.prototype.usersTab;
    /** @type {?} */
    SettingsComponent.prototype.rolesTab;
    /** @type {?} */
    SettingsComponent.prototype.tab;
    /**
     * @type {?}
     * @private
     */
    SettingsComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    SettingsComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    SettingsComponent.prototype.accountService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBcUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxNQUFNLEVBQW9CLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBR2hFO0lBeUJJLDJCQUFvQixNQUFjLEVBQVUsS0FBcUIsRUFBVSxjQUE4QjtRQUFyRixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFqQnpHLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUMxQiwyQkFBc0IsR0FBRyxLQUFLLENBQUM7UUFDL0IscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUloQixlQUFVLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsYUFBYSxDQUFDO1FBQy9CLGFBQVEsR0FBRyxPQUFPLENBQUM7UUFDbkIsYUFBUSxHQUFHLE9BQU8sQ0FBQztJQVE1QixDQUFDOzs7O0lBR0Qsb0NBQVE7OztJQUFSO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxR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MEI7O0lBRTFCLHVDQUFnQzs7SUFDaEMsMkNBQXdDOztJQUN4QyxxQ0FBNEI7O0lBQzVCLHFDQUE0Qjs7SUFHNUIsZ0NBQzJCOzs7OztJQUdmLG1DQUFzQjs7Ozs7SUFBRSxrQ0FBNkI7Ozs7O0lBQUUsMkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBQZXJtaXNzaW9uIH0gZnJvbSAnQHBvbHB3YXJlL25neC1vYXV0aDInO1xuXG5pbXBvcnQgeyBmYWRlSW5PdXQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmltYXRpb25zJztcbmltcG9ydCB7IEJvb3RzdHJhcFRhYkRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvYm9vdHN0cmFwLXRhYi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2V0dGluZ3MnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5ncy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2V0dGluZ3MuY29tcG9uZW50LnNjc3MnXSxcbiAgICBhbmltYXRpb25zOiBbZmFkZUluT3V0XVxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGlzUHJvZmlsZUFjdGl2YXRlZCA9IHRydWU7XG4gICAgaXNQcmVmZXJlbmNlc0FjdGl2YXRlZCA9IGZhbHNlO1xuICAgIGlzVXNlcnNBY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICBpc1JvbGVzQWN0aXZhdGVkID0gZmFsc2U7XG5cbiAgICBmcmFnbWVudFN1YnNjcmlwdGlvbjogYW55O1xuXG4gICAgcmVhZG9ubHkgcHJvZmlsZVRhYiA9ICdwcm9maWxlJztcbiAgICByZWFkb25seSBwcmVmZXJlbmNlc1RhYiA9ICdwcmVmZXJlbmNlcyc7XG4gICAgcmVhZG9ubHkgdXNlcnNUYWIgPSAndXNlcnMnO1xuICAgIHJlYWRvbmx5IHJvbGVzVGFiID0gJ3JvbGVzJztcblxuXG4gICAgQFZpZXdDaGlsZCgndGFiJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICB0YWI6IEJvb3RzdHJhcFRhYkRpcmVjdGl2ZTtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlKSB7XG4gICAgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5mcmFnbWVudFN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGUuZnJhZ21lbnQuc3Vic2NyaWJlKGFuY2hvciA9PiB0aGlzLnNob3dDb250ZW50KGFuY2hvcikpO1xuICAgIH1cblxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZnJhZ21lbnRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBzaG93Q29udGVudChhbmNob3I6IHN0cmluZykge1xuICAgICAgICBpZiAoYW5jaG9yKSB7XG4gICAgICAgICAgICBhbmNob3IgPSBhbmNob3IudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgodGhpcy5pc0ZyYWdtZW50RXF1YWxzKGFuY2hvciwgdGhpcy51c2Vyc1RhYikgJiYgIXRoaXMuY2FuVmlld1VzZXJzKSB8fFxuICAgICAgICAgICAgKHRoaXMuaXNGcmFnbWVudEVxdWFscyhhbmNob3IsIHRoaXMucm9sZXNUYWIpICYmICF0aGlzLmNhblZpZXdSb2xlcykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGFiLnNob3coYCMke2FuY2hvciB8fCB0aGlzLnByb2ZpbGVUYWJ9VGFiYCk7XG4gICAgfVxuXG5cbiAgICBpc0ZyYWdtZW50RXF1YWxzKGZyYWdtZW50MTogc3RyaW5nLCBmcmFnbWVudDI6IHN0cmluZykge1xuXG4gICAgICAgIGlmIChmcmFnbWVudDEgPT0gbnVsbCkge1xuICAgICAgICAgICAgZnJhZ21lbnQxID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnJhZ21lbnQyID09IG51bGwpIHtcbiAgICAgICAgICAgIGZyYWdtZW50MiA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50MS50b0xvd2VyQ2FzZSgpID09IGZyYWdtZW50Mi50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuXG4gICAgb25TaG93VGFiKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhYiA9IGV2ZW50LnRhcmdldC5oYXNoLnNwbGl0KCcjJywgMikucG9wKCk7XG5cbiAgICAgICAgdGhpcy5pc1Byb2ZpbGVBY3RpdmF0ZWQgPSBhY3RpdmVUYWIgPT0gdGhpcy5wcm9maWxlVGFiO1xuICAgICAgICB0aGlzLmlzUHJlZmVyZW5jZXNBY3RpdmF0ZWQgPSBhY3RpdmVUYWIgPT0gdGhpcy5wcmVmZXJlbmNlc1RhYjtcbiAgICAgICAgdGhpcy5pc1VzZXJzQWN0aXZhdGVkID0gYWN0aXZlVGFiID09IHRoaXMudXNlcnNUYWI7XG4gICAgICAgIHRoaXMuaXNSb2xlc0FjdGl2YXRlZCA9IGFjdGl2ZVRhYiA9PSB0aGlzLnJvbGVzVGFiO1xuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7IGZyYWdtZW50OiBhY3RpdmVUYWIgfSk7XG4gICAgfVxuXG5cbiAgICBnZXQgY2FuVmlld1VzZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50U2VydmljZS51c2VySGFzUGVybWlzc2lvbihQZXJtaXNzaW9uLnZpZXdVc2Vyc1Blcm1pc3Npb24pO1xuICAgIH1cblxuICAgIGdldCBjYW5WaWV3Um9sZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRTZXJ2aWNlLnVzZXJIYXNQZXJtaXNzaW9uKFBlcm1pc3Npb24udmlld1JvbGVzUGVybWlzc2lvbik7XG4gICAgfVxufVxuIl19