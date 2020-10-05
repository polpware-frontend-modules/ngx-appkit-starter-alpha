// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, ViewChild } from '@angular/core';
import { Permission } from '@polpware/ngx-oauth2';
import { fadeInOut } from '../../services/animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../services/account.service";
import * as i3 from "../../directives/bootstrap-tab.directive";
import * as i4 from "@angular/common";
import * as i5 from "../../components/user-info/user-info.component";
import * as i6 from "../../components/user-preferences/user-preferences.component";
import * as i7 from "@ngx-translate/core";
const _c0 = ["tab"];
function SettingsComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelement(1, "user-info");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@fadeInOut", undefined);
} }
function SettingsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelement(1, "user-preferences");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("@fadeInOut", undefined);
} }
const _c1 = function () { return []; };
export class SettingsComponent {
    constructor(router, route, accountService) {
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
    ngOnInit() {
        this.fragmentSubscription = this.route.fragment.subscribe(anchor => this.showContent(anchor));
    }
    ngOnDestroy() {
        this.fragmentSubscription.unsubscribe();
    }
    showContent(anchor) {
        if (anchor) {
            anchor = anchor.toLowerCase();
        }
        if ((this.isFragmentEquals(anchor, this.usersTab) && !this.canViewUsers) ||
            (this.isFragmentEquals(anchor, this.rolesTab) && !this.canViewRoles)) {
            return;
        }
        this.tab.show(`#${anchor || this.profileTab}Tab`);
    }
    isFragmentEquals(fragment1, fragment2) {
        if (fragment1 == null) {
            fragment1 = '';
        }
        if (fragment2 == null) {
            fragment2 = '';
        }
        return fragment1.toLowerCase() == fragment2.toLowerCase();
    }
    onShowTab(event) {
        const activeTab = event.target.hash.split('#', 2).pop();
        this.isProfileActivated = activeTab == this.profileTab;
        this.isPreferencesActivated = activeTab == this.preferencesTab;
        this.isUsersActivated = activeTab == this.usersTab;
        this.isRolesActivated = activeTab == this.rolesTab;
        this.router.navigate([], { fragment: activeTab });
    }
    get canViewUsers() {
        return this.accountService.userHasPermission(Permission.viewUsersPermission);
    }
    get canViewRoles() {
        return this.accountService.userHasPermission(Permission.viewRolesPermission);
    }
}
/** @nocollapse */ SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.AccountService)); };
/** @nocollapse */ SettingsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SettingsComponent, selectors: [["settings"]], viewQuery: function SettingsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tab = _t.first);
    } }, decls: 33, vars: 22, consts: [[1, "container", "settings-page"], [1, "pageHeader"], ["aria-hidden", "true", 1, "fa", "fa-cog", "fa-lg", "page-caption"], [1, "d-sm-flex", "flex-row"], ["bootstrapTab", "", "role", "navigation", 1, "nav", "nav-tabs", "nav-tabs--vertical", "nav-tabs--left", 3, "showBSTab"], ["tab", "bootstrap-tab"], [1, "nav-item"], ["id", "profileTab", "fragment", "profile", "data-target", "#profile", "href", "#profile", "data-toggle", "tab", "role", "tab", "aria-controls", "profile", 1, "nav-link", "active", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-user-circle-o", "fa-fw"], ["id", "preferencesTab", "fragment", "preferences", "data-target", "#preferences", "href", "#preferences", "data-toggle", "tab", "role", "tab", "aria-controls", "preferences", 1, "nav-link", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-sliders", "fa-fw"], [1, "tab-content", "w-100"], ["id", "profile", "role", "tabpanel", 1, "tab-pane", "show", "active"], [1, "separator-hr"], ["class", "content-container pl-lg-2", 4, "ngIf"], ["id", "preferences", "role", "tabpanel", 1, "tab-pane"], [1, "content-container", "pl-lg-2"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "header", 1);
        i0.ɵɵelementStart(2, "h3");
        i0.ɵɵelement(3, "i", 2);
        i0.ɵɵtext(4);
        i0.ɵɵpipe(5, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div");
        i0.ɵɵelementStart(7, "div", 3);
        i0.ɵɵelementStart(8, "ul", 4, 5);
        i0.ɵɵlistener("showBSTab", function SettingsComponent_Template_ul_showBSTab_8_listener($event) { return ctx.onShowTab($event); });
        i0.ɵɵelementStart(10, "li", 6);
        i0.ɵɵelementStart(11, "a", 7);
        i0.ɵɵelement(12, "i", 8);
        i0.ɵɵtext(13);
        i0.ɵɵpipe(14, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "li", 6);
        i0.ɵɵelementStart(16, "a", 9);
        i0.ɵɵelement(17, "i", 10);
        i0.ɵɵtext(18);
        i0.ɵɵpipe(19, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "div", 11);
        i0.ɵɵelementStart(21, "div", 12);
        i0.ɵɵelementStart(22, "h4");
        i0.ɵɵtext(23);
        i0.ɵɵpipe(24, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(25, "hr", 13);
        i0.ɵɵtemplate(26, SettingsComponent_div_26_Template, 2, 1, "div", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "div", 15);
        i0.ɵɵelementStart(28, "h4");
        i0.ɵɵtext(29);
        i0.ɵɵpipe(30, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(31, "hr", 13);
        i0.ɵɵtemplate(32, SettingsComponent_div_32_Template, 2, 1, "div", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(5, 10, "pageHeader.Settings"), "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("@fadeInOut", undefined);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(20, _c1));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(14, 12, "settings.tab.Profile"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(21, _c1));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(19, 14, "settings.tab.Preferences"), " ");
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(24, 16, "settings.header.UserProfile"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.isProfileActivated);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(30, 18, "settings.header.UserPreferences"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.isPreferencesActivated);
    } }, directives: [i3.BootstrapTabDirective, i1.RouterLinkWithHref, i4.NgIf, i5.UserInfoComponent, i6.UserPreferencesComponent], pipes: [i7.TranslatePipe], styles: [".separator-hr[_ngcontent-%COMP%]{margin-top:0;margin-bottom:10px}[hidden][_ngcontent-%COMP%]{display:none}"], data: { animation: [fadeInOut] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SettingsComponent, [{
        type: Component,
        args: [{
                selector: 'settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss'],
                animations: [fadeInOut]
            }]
    }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }, { type: i2.AccountService }]; }, { tab: [{
            type: ViewChild,
            args: ['tab', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJsaWIvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBRWhDLE9BQU8sRUFBRSxTQUFTLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7OztJQ2FsQywrQkFDSTtJQUFBLDRCQUF1QjtJQUMzQixpQkFBTTs7SUFGRCxzQ0FBWTs7O0lBUWpCLCtCQUNJO0lBQUEsbUNBQXFDO0lBQ3pDLGlCQUFNOztJQUZELHNDQUFZOzs7QURWckMsTUFBTSxPQUFPLGlCQUFpQjtJQW1CMUIsWUFBb0IsTUFBYyxFQUFVLEtBQXFCLEVBQVUsY0FBOEI7UUFBckYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBakJ6Ryx1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDMUIsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFJaEIsZUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN2QixtQkFBYyxHQUFHLGFBQWEsQ0FBQztRQUMvQixhQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ25CLGFBQVEsR0FBRyxPQUFPLENBQUM7SUFRNUIsQ0FBQztJQUdELFFB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UUFBQSwyQkFBSTtRQUFBLGFBQTZDOztRQUFBLGlCQUFLO1FBQ3RELDBCQUNBO1FBQUEscUVBQ0k7UUFHUixpQkFBTTtRQUNOLGdDQUNJO1FBQUEsMkJBQUk7UUFBQSxhQUFpRDs7UUFBQSxpQkFBSztRQUMxRCwwQkFDQTtRQUFBLHFFQUNJO1FBRVIsaUJBQU07UUFDVixpQkFBTTtRQUNWLGlCQUFNO1FBQ1YsaUJBQU07UUFDVixpQkFBTTs7UUFwQ3NFLGVBQXFDO1FBQXJDLDRFQUFxQztRQUd4RyxlQUFZO1FBQVosc0NBQVk7UUFJa0IsZUFBaUI7UUFBakIsd0RBQWlCO1FBQzZCLGVBQ2pFO1FBRGlFLCtFQUNqRTtRQUd1QixlQUFpQjtRQUFqQix3REFBaUI7UUFDbUIsZUFDM0Q7UUFEMkQsbUZBQzNEO1FBS0ksZUFBNkM7UUFBN0MsMkVBQTZDO1FBRS9CLGVBQTBCO1FBQTFCLDZDQUEwQjtRQU14QyxlQUFpRDtRQUFqRCwrRUFBaUQ7UUFFbkMsZUFBOEI7UUFBOUIsaURBQThCOzBTRFpwRCxDQUFDLFNBQVMsQ0FBQztrREFFZCxpQkFBaUI7Y0FON0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDeEMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDO2FBQzFCOztrQkFnQkksU0FBUzttQkFBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBQZXJtaXNzaW9uIH0gZnJvbSAnQHBvbHB3YXJlL25neC1vYXV0aDInO1xuXG5pbXBvcnQgeyBmYWRlSW5PdXQgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hbmltYXRpb25zJztcbmltcG9ydCB7IEJvb3RzdHJhcFRhYkRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvYm9vdHN0cmFwLXRhYi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2V0dGluZ3MnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5ncy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2V0dGluZ3MuY29tcG9uZW50LnNjc3MnXSxcbiAgICBhbmltYXRpb25zOiBbZmFkZUluT3V0XVxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGlzUHJvZmlsZUFjdGl2YXRlZCA9IHRydWU7XG4gICAgaXNQcmVmZXJlbmNlc0FjdGl2YXRlZCA9IGZhbHNlO1xuICAgIGlzVXNlcnNBY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICBpc1JvbGVzQWN0aXZhdGVkID0gZmFsc2U7XG5cbiAgICBmcmFnbWVudFN1YnNjcmlwdGlvbjogYW55O1xuXG4gICAgcmVhZG9ubHkgcHJvZmlsZVRhYiA9ICdwcm9maWxlJztcbiAgICByZWFkb25seSBwcmVmZXJlbmNlc1RhYiA9ICdwcmVmZXJlbmNlcyc7XG4gICAgcmVhZG9ubHkgdXNlcnNUYWIgPSAndXNlcnMnO1xuICAgIHJlYWRvbmx5IHJvbGVzVGFiID0gJ3JvbGVzJztcblxuXG4gICAgQFZpZXdDaGlsZCgndGFiJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICB0YWI6IEJvb3RzdHJhcFRhYkRpcmVjdGl2ZTtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlKSB7XG4gICAgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5mcmFnbWVudFN1YnNjcmlwdGlvbiA9IHRoaXMucm91dGUuZnJhZ21lbnQuc3Vic2NyaWJlKGFuY2hvciA9PiB0aGlzLnNob3dDb250ZW50KGFuY2hvcikpO1xuICAgIH1cblxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZnJhZ21lbnRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBzaG93Q29udGVudChhbmNob3I6IHN0cmluZykge1xuICAgICAgICBpZiAoYW5jaG9yKSB7XG4gICAgICAgICAgICBhbmNob3IgPSBhbmNob3IudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgodGhpcy5pc0ZyYWdtZW50RXF1YWxzKGFuY2hvciwgdGhpcy51c2Vyc1RhYikgJiYgIXRoaXMuY2FuVmlld1VzZXJzKSB8fFxuICAgICAgICAgICAgKHRoaXMuaXNGcmFnbWVudEVxdWFscyhhbmNob3IsIHRoaXMucm9sZXNUYWIpICYmICF0aGlzLmNhblZpZXdSb2xlcykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGFiLnNob3coYCMke2FuY2hvciB8fCB0aGlzLnByb2ZpbGVUYWJ9VGFiYCk7XG4gICAgfVxuXG5cbiAgICBpc0ZyYWdtZW50RXF1YWxzKGZyYWdtZW50MTogc3RyaW5nLCBmcmFnbWVudDI6IHN0cmluZykge1xuXG4gICAgICAgIGlmIChmcmFnbWVudDEgPT0gbnVsbCkge1xuICAgICAgICAgICAgZnJhZ21lbnQxID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnJhZ21lbnQyID09IG51bGwpIHtcbiAgICAgICAgICAgIGZyYWdtZW50MiA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50MS50b0xvd2VyQ2FzZSgpID09IGZyYWdtZW50Mi50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuXG4gICAgb25TaG93VGFiKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhYiA9IGV2ZW50LnRhcmdldC5oYXNoLnNwbGl0KCcjJywgMikucG9wKCk7XG5cbiAgICAgICAgdGhpcy5pc1Byb2ZpbGVBY3RpdmF0ZWQgPSBhY3RpdmVUYWIgPT0gdGhpcy5wcm9maWxlVGFiO1xuICAgICAgICB0aGlzLmlzUHJlZmVyZW5jZXNBY3RpdmF0ZWQgPSBhY3RpdmVUYWIgPT0gdGhpcy5wcmVmZXJlbmNlc1RhYjtcbiAgICAgICAgdGhpcy5pc1VzZXJzQWN0aXZhdGVkID0gYWN0aXZlVGFiID09IHRoaXMudXNlcnNUYWI7XG4gICAgICAgIHRoaXMuaXNSb2xlc0FjdGl2YXRlZCA9IGFjdGl2ZVRhYiA9PSB0aGlzLnJvbGVzVGFiO1xuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7IGZyYWdtZW50OiBhY3RpdmVUYWIgfSk7XG4gICAgfVxuXG5cbiAgICBnZXQgY2FuVmlld1VzZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50U2VydmljZS51c2VySGFzUGVybWlzc2lvbihQZXJtaXNzaW9uLnZpZXdVc2Vyc1Blcm1pc3Npb24pO1xuICAgIH1cblxuICAgIGdldCBjYW5WaWV3Um9sZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRTZXJ2aWNlLnVzZXJIYXNQZXJtaXNzaW9uKFBlcm1pc3Npb24udmlld1JvbGVzUGVybWlzc2lvbik7XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNvbnRhaW5lciBzZXR0aW5ncy1wYWdlXCI+XG4gICAgPGhlYWRlciBjbGFzcz1cInBhZ2VIZWFkZXJcIj5cbiAgICAgICAgPGgzPjxpIGNsYXNzPVwiZmEgZmEtY29nIGZhLWxnIHBhZ2UtY2FwdGlvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4ge3sncGFnZUhlYWRlci5TZXR0aW5ncycgfCB0cmFuc2xhdGV9fTwvaDM+XG4gICAgPC9oZWFkZXI+XG5cbiAgICA8ZGl2IFtAZmFkZUluT3V0XT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImQtc20tZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgICAgPHVsIGJvb3RzdHJhcFRhYiAjdGFiPVwiYm9vdHN0cmFwLXRhYlwiIChzaG93QlNUYWIpPVwib25TaG93VGFiKCRldmVudClcIiBjbGFzcz1cIm5hdiBuYXYtdGFicyBuYXYtdGFicy0tdmVydGljYWwgbmF2LXRhYnMtLWxlZnRcIiByb2xlPVwibmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGlkPVwicHJvZmlsZVRhYlwiIFtyb3V0ZXJMaW5rXT1cIltdXCIgZnJhZ21lbnQ9XCJwcm9maWxlXCIgZGF0YS10YXJnZXQ9XCIjcHJvZmlsZVwiIGhyZWY9XCIjcHJvZmlsZVwiIGNsYXNzPVwibmF2LWxpbmsgYWN0aXZlXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiByb2xlPVwidGFiXCIgYXJpYS1jb250cm9scz1cInByb2ZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdXNlci1jaXJjbGUtbyBmYS1md1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4ge3snc2V0dGluZ3MudGFiLlByb2ZpbGUnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XCJwcmVmZXJlbmNlc1RhYlwiIFtyb3V0ZXJMaW5rXT1cIltdXCIgZnJhZ21lbnQ9XCJwcmVmZXJlbmNlc1wiIGRhdGEtdGFyZ2V0PVwiI3ByZWZlcmVuY2VzXCIgaHJlZj1cIiNwcmVmZXJlbmNlc1wiIGNsYXNzPVwibmF2LWxpbmtcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwicHJlZmVyZW5jZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2xpZGVycyBmYS1md1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4ge3snc2V0dGluZ3MudGFiLlByZWZlcmVuY2VzJyB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudCB3LTEwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItcGFuZSBzaG93IGFjdGl2ZVwiIGlkPVwicHJvZmlsZVwiIHJvbGU9XCJ0YWJwYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+e3snc2V0dGluZ3MuaGVhZGVyLlVzZXJQcm9maWxlJyB8IHRyYW5zbGF0ZX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVwic2VwYXJhdG9yLWhyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBbQGZhZGVJbk91dF0gKm5nSWY9XCJpc1Byb2ZpbGVBY3RpdmF0ZWRcIiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyIHBsLWxnLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2VyLWluZm8+PC91c2VyLWluZm8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1wYW5lXCIgaWQ9XCJwcmVmZXJlbmNlc1wiIHJvbGU9XCJ0YWJwYW5lbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+e3snc2V0dGluZ3MuaGVhZGVyLlVzZXJQcmVmZXJlbmNlcycgfCB0cmFuc2xhdGV9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzcz1cInNlcGFyYXRvci1oclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgW0BmYWRlSW5PdXRdICpuZ0lmPVwiaXNQcmVmZXJlbmNlc0FjdGl2YXRlZFwiIGNsYXNzPVwiY29udGVudC1jb250YWluZXIgcGwtbGctMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVzZXItcHJlZmVyZW5jZXM+PC91c2VyLXByZWZlcmVuY2VzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19