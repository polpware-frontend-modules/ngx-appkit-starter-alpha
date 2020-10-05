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
var _c0 = ["tab"];
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
var _c1 = function () { return []; };
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
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fragmentSubscription = this.route.fragment.subscribe(function (anchor) { return _this.showContent(anchor); });
    };
    SettingsComponent.prototype.ngOnDestroy = function () {
        this.fragmentSubscription.unsubscribe();
    };
    SettingsComponent.prototype.showContent = function (anchor) {
        if (anchor) {
            anchor = anchor.toLowerCase();
        }
        if ((this.isFragmentEquals(anchor, this.usersTab) && !this.canViewUsers) ||
            (this.isFragmentEquals(anchor, this.rolesTab) && !this.canViewRoles)) {
            return;
        }
        this.tab.show("#" + (anchor || this.profileTab) + "Tab");
    };
    SettingsComponent.prototype.isFragmentEquals = function (fragment1, fragment2) {
        if (fragment1 == null) {
            fragment1 = '';
        }
        if (fragment2 == null) {
            fragment2 = '';
        }
        return fragment1.toLowerCase() == fragment2.toLowerCase();
    };
    SettingsComponent.prototype.onShowTab = function (event) {
        var activeTab = event.target.hash.split('#', 2).pop();
        this.isProfileActivated = activeTab == this.profileTab;
        this.isPreferencesActivated = activeTab == this.preferencesTab;
        this.isUsersActivated = activeTab == this.usersTab;
        this.isRolesActivated = activeTab == this.rolesTab;
        this.router.navigate([], { fragment: activeTab });
    };
    Object.defineProperty(SettingsComponent.prototype, "canViewUsers", {
        get: function () {
            return this.accountService.userHasPermission(Permission.viewUsersPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsComponent.prototype, "canViewRoles", {
        get: function () {
            return this.accountService.userHasPermission(Permission.viewRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
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
    return SettingsComponent;
}());
export { SettingsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQudHMiLCJsaWIvcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBRWhDLE9BQU8sRUFBRSxTQUFTLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7OztJQ2FsQywrQkFDSTtJQUFBLDRCQUF1QjtJQUMzQixpQkFBTTs7SUFGRCxzQ0FBWTs7O0lBUWpCLCtCQUNJO0lBQUEsbUNBQXFDO0lBQ3pDLGlCQUFNOztJQUZELHNDQUFZOzs7QURoQnJDO0lBeUJJLDJCQUFvQixNQUFjLEVBQVUsS0FBcUIsRUFBVSxjQUE4QjtRQUFyRixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFqQnpHLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUMxQiwyQkFBc0IsR0FBRyxLQUFLLENBQUM7UUFDL0IscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUloQixlQUFVLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLG1CQUFjLEdBQUcsYUFBYSxDQUFDO1FBQy9CLGFBQVEsR0FBRyxPQUFPLENBQUM7UUFDbkIsYUFBUSxHQUFHLE9BQU8sQ0FBQztJQVE1QixDQUFDO0lBR0Qsb0NBQVEsR0FBUjtRQUFBLGlC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WUFBQyxhQUMzRDs7WUFBQSxpQkFBSTtZQUNSLGlCQUFLO1lBQ1QsaUJBQUs7WUFDTCxnQ0FDSTtZQUFBLGdDQUNJO1lBQUEsMkJBQUk7WUFBQSxhQUE2Qzs7WUFBQSxpQkFBSztZQUN0RCwwQkFDQTtZQUFBLHFFQUNJO1lBR1IsaUJBQU07WUFDTixnQ0FDSTtZQUFBLDJCQUFJO1lBQUEsYUFBaUQ7O1lBQUEsaUJBQUs7WUFDMUQsMEJBQ0E7WUFBQSxxRUFDSTtZQUVSLGlCQUFNO1lBQ1YsaUJBQU07WUFDVixpQkFBTTtZQUNWLGlCQUFNO1lBQ1YsaUJBQU07O1lBcENzRSxlQUFxQztZQUFyQyw0RUFBcUM7WUFHeEcsZUFBWTtZQUFaLHNDQUFZO1lBSWtCLGVBQWlCO1lBQWpCLHdEQUFpQjtZQUM2QixlQUNqRTtZQURpRSwrRUFDakU7WUFHdUIsZUFBaUI7WUFBakIsd0RBQWlCO1lBQ21CLGVBQzNEO1lBRDJELG1GQUMzRDtZQUtJLGVBQTZDO1lBQTdDLDJFQUE2QztZQUUvQixlQUEwQjtZQUExQiw2Q0FBMEI7WUFNeEMsZUFBaUQ7WUFBakQsK0VBQWlEO1lBRW5DLGVBQThCO1lBQTlCLGlEQUE4Qjs4U0RacEQsQ0FBQyxTQUFTLENBQUM7NEJBbkIzQjtDQW9HQyxBQXJGRCxJQXFGQztTQS9FWSxpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQU43QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUN4QyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUM7YUFDMUI7O2tCQWdCSSxTQUFTO21CQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFBlcm1pc3Npb24gfSBmcm9tICdAcG9scHdhcmUvbmd4LW9hdXRoMic7XG5cbmltcG9ydCB7IGZhZGVJbk91dCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQm9vdHN0cmFwVGFiRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9ib290c3RyYXAtdGFiLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjY291bnQuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzZXR0aW5ncycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmdzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyddLFxuICAgIGFuaW1hdGlvbnM6IFtmYWRlSW5PdXRdXG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgaXNQcm9maWxlQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICBpc1ByZWZlcmVuY2VzQWN0aXZhdGVkID0gZmFsc2U7XG4gICAgaXNVc2Vyc0FjdGl2YXRlZCA9IGZhbHNlO1xuICAgIGlzUm9sZXNBY3RpdmF0ZWQgPSBmYWxzZTtcblxuICAgIGZyYWdtZW50U3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgICByZWFkb25seSBwcm9maWxlVGFiID0gJ3Byb2ZpbGUnO1xuICAgIHJlYWRvbmx5IHByZWZlcmVuY2VzVGFiID0gJ3ByZWZlcmVuY2VzJztcbiAgICByZWFkb25seSB1c2Vyc1RhYiA9ICd1c2Vycyc7XG4gICAgcmVhZG9ubHkgcm9sZXNUYWIgPSAncm9sZXMnO1xuXG5cbiAgICBAVmlld0NoaWxkKCd0YWInLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHRhYjogQm9vdHN0cmFwVGFiRGlyZWN0aXZlO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UpIHtcbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmZyYWdtZW50U3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0ZS5mcmFnbWVudC5zdWJzY3JpYmUoYW5jaG9yID0+IHRoaXMuc2hvd0NvbnRlbnQoYW5jaG9yKSk7XG4gICAgfVxuXG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5mcmFnbWVudFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHNob3dDb250ZW50KGFuY2hvcjogc3RyaW5nKSB7XG4gICAgICAgIGlmIChhbmNob3IpIHtcbiAgICAgICAgICAgIGFuY2hvciA9IGFuY2hvci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCh0aGlzLmlzRnJhZ21lbnRFcXVhbHMoYW5jaG9yLCB0aGlzLnVzZXJzVGFiKSAmJiAhdGhpcy5jYW5WaWV3VXNlcnMpIHx8XG4gICAgICAgICAgICAodGhpcy5pc0ZyYWdtZW50RXF1YWxzKGFuY2hvciwgdGhpcy5yb2xlc1RhYikgJiYgIXRoaXMuY2FuVmlld1JvbGVzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50YWIuc2hvdyhgIyR7YW5jaG9yIHx8IHRoaXMucHJvZmlsZVRhYn1UYWJgKTtcbiAgICB9XG5cblxuICAgIGlzRnJhZ21lbnRFcXVhbHMoZnJhZ21lbnQxOiBzdHJpbmcsIGZyYWdtZW50Mjogc3RyaW5nKSB7XG5cbiAgICAgICAgaWYgKGZyYWdtZW50MSA9PSBudWxsKSB7XG4gICAgICAgICAgICBmcmFnbWVudDEgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmcmFnbWVudDIgPT0gbnVsbCkge1xuICAgICAgICAgICAgZnJhZ21lbnQyID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQxLnRvTG93ZXJDYXNlKCkgPT0gZnJhZ21lbnQyLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG5cbiAgICBvblNob3dUYWIoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgYWN0aXZlVGFiID0gZXZlbnQudGFyZ2V0Lmhhc2guc3BsaXQoJyMnLCAyKS5wb3AoKTtcblxuICAgICAgICB0aGlzLmlzUHJvZmlsZUFjdGl2YXRlZCA9IGFjdGl2ZVRhYiA9PSB0aGlzLnByb2ZpbGVUYWI7XG4gICAgICAgIHRoaXMuaXNQcmVmZXJlbmNlc0FjdGl2YXRlZCA9IGFjdGl2ZVRhYiA9PSB0aGlzLnByZWZlcmVuY2VzVGFiO1xuICAgICAgICB0aGlzLmlzVXNlcnNBY3RpdmF0ZWQgPSBhY3RpdmVUYWIgPT0gdGhpcy51c2Vyc1RhYjtcbiAgICAgICAgdGhpcy5pc1JvbGVzQWN0aXZhdGVkID0gYWN0aXZlVGFiID09IHRoaXMucm9sZXNUYWI7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10sIHsgZnJhZ21lbnQ6IGFjdGl2ZVRhYiB9KTtcbiAgICB9XG5cblxuICAgIGdldCBjYW5WaWV3VXNlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRTZXJ2aWNlLnVzZXJIYXNQZXJtaXNzaW9uKFBlcm1pc3Npb24udmlld1VzZXJzUGVybWlzc2lvbik7XG4gICAgfVxuXG4gICAgZ2V0IGNhblZpZXdSb2xlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudFNlcnZpY2UudXNlckhhc1Blcm1pc3Npb24oUGVybWlzc2lvbi52aWV3Um9sZXNQZXJtaXNzaW9uKTtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHNldHRpbmdzLXBhZ2VcIj5cbiAgICA8aGVhZGVyIGNsYXNzPVwicGFnZUhlYWRlclwiPlxuICAgICAgICA8aDM+PGkgY2xhc3M9XCJmYSBmYS1jb2cgZmEtbGcgcGFnZS1jYXB0aW9uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiB7eydwYWdlSGVhZGVyLlNldHRpbmdzJyB8IHRyYW5zbGF0ZX19PC9oMz5cbiAgICA8L2hlYWRlcj5cblxuICAgIDxkaXYgW0BmYWRlSW5PdXRdPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1zbS1mbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICA8dWwgYm9vdHN0cmFwVGFiICN0YWI9XCJib290c3RyYXAtdGFiXCIgKHNob3dCU1RhYik9XCJvblNob3dUYWIoJGV2ZW50KVwiIGNsYXNzPVwibmF2IG5hdi10YWJzIG5hdi10YWJzLS12ZXJ0aWNhbCBuYXYtdGFicy0tbGVmdFwiIHJvbGU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaWQ9XCJwcm9maWxlVGFiXCIgW3JvdXRlckxpbmtdPVwiW11cIiBmcmFnbWVudD1cInByb2ZpbGVcIiBkYXRhLXRhcmdldD1cIiNwcm9maWxlXCIgaHJlZj1cIiNwcm9maWxlXCIgY2xhc3M9XCJuYXYtbGluayBhY3RpdmVcIiBkYXRhLXRvZ2dsZT1cInRhYlwiIHJvbGU9XCJ0YWJcIiBhcmlhLWNvbnRyb2xzPVwicHJvZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS11c2VyLWNpcmNsZS1vIGZhLWZ3XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiB7eydzZXR0aW5ncy50YWIuUHJvZmlsZScgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBpZD1cInByZWZlcmVuY2VzVGFiXCIgW3JvdXRlckxpbmtdPVwiW11cIiBmcmFnbWVudD1cInByZWZlcmVuY2VzXCIgZGF0YS10YXJnZXQ9XCIjcHJlZmVyZW5jZXNcIiBocmVmPVwiI3ByZWZlcmVuY2VzXCIgY2xhc3M9XCJuYXYtbGlua1wiIGRhdGEtdG9nZ2xlPVwidGFiXCIgcm9sZT1cInRhYlwiIGFyaWEtY29udHJvbHM9XCJwcmVmZXJlbmNlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zbGlkZXJzIGZhLWZ3XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiB7eydzZXR0aW5ncy50YWIuUHJlZmVyZW5jZXMnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50IHctMTAwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1wYW5lIHNob3cgYWN0aXZlXCIgaWQ9XCJwcm9maWxlXCIgcm9sZT1cInRhYnBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoND57eydzZXR0aW5ncy5oZWFkZXIuVXNlclByb2ZpbGUnIHwgdHJhbnNsYXRlfX08L2g0PlxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XCJzZXBhcmF0b3ItaHJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFtAZmFkZUluT3V0XSAqbmdJZj1cImlzUHJvZmlsZUFjdGl2YXRlZFwiIGNsYXNzPVwiY29udGVudC1jb250YWluZXIgcGwtbGctMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVzZXItaW5mbz48L3VzZXItaW5mbz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXBhbmVcIiBpZD1cInByZWZlcmVuY2VzXCIgcm9sZT1cInRhYnBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoND57eydzZXR0aW5ncy5oZWFkZXIuVXNlclByZWZlcmVuY2VzJyB8IHRyYW5zbGF0ZX19PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVwic2VwYXJhdG9yLWhyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBbQGZhZGVJbk91dF0gKm5nSWY9XCJpc1ByZWZlcmVuY2VzQWN0aXZhdGVkXCIgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lciBwbC1sZy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dXNlci1wcmVmZXJlbmNlcz48L3VzZXItcHJlZmVyZW5jZXM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=