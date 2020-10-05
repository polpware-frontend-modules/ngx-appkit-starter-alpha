// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, ViewChild } from '@angular/core';
import { DialogType, MessageSeverity, Utilities } from '@polpware/ngx-appkit-contracts-alpha';
import { Permission } from '@polpware/ngx-oauth2';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-appkit-services-alpha";
import * as i2 from "../../services/account.service";
import * as i3 from "@angular/forms";
import * as i4 from "../../directives/bootstrap-select.directive";
import * as i5 from "@angular/common";
import * as i6 from "../../directives/bootstrap-toggle.directive";
import * as i7 from "@ngx-translate/core";
const _c0 = ["languageSelector"];
const _c1 = ["homePageSelector"];
function UserPreferencesComponent_option_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 49);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "preferences.Customers"));
} }
function UserPreferencesComponent_option_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 50);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "preferences.Products"));
} }
function UserPreferencesComponent_option_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 51);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "preferences.Orders"));
} }
function UserPreferencesComponent_div_77_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const theme_r7 = ctx.$implicit;
    i0.ɵɵattributeInterpolate4("data-content", "<div class='theme-item' style='background-color: ", theme_r7.background, "; color: ", theme_r7.color, "'>", i0.ɵɵpipeBind1(1, 5, "preferences." + theme_r7.name + "Theme"), "\n                <span class='small'>", theme_r7.isDark ? "(Dark)" : "", "</span></div>");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", theme_r7.id, " ");
} }
function UserPreferencesComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "select", 52);
    i0.ɵɵlistener("ngModelChange", function UserPreferencesComponent_div_77_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.configurations.themeId = $event; });
    i0.ɵɵtemplate(2, UserPreferencesComponent_div_77_option_2_Template, 3, 7, "option", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r5.configurations.themeId);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.themeManager.themes);
} }
export class UserPreferencesComponent {
    constructor(alertService, translationService, accountService, themeManager, configurations) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.themeManager = themeManager;
        this.configurations = configurations;
        this.themeSelectorToggle = true;
    }
    ngOnInit() {
        this.languageChangedSubscription = this.translationService.languageChanged$.subscribe(data => {
            this.themeSelectorToggle = false;
            setTimeout(() => {
                this.languageSelector.refresh();
                this.homePageSelector.refresh();
                this.themeSelectorToggle = true;
            });
        });
    }
    ngOnDestroy() {
        this.languageChangedSubscription.unsubscribe();
    }
    reloadFromServer() {
        this.alertService.startLoadingMessage();
        this.accountService.getUserPreferences()
            .subscribe(results => {
            this.alertService.stopLoadingMessage();
            this.configurations.import(results);
            this.alertService.showMessage('Defaults loaded!', '', MessageSeverity.info);
        }, error => {
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Load Error', `Unable to retrieve user preferences from the server.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        });
    }
    setAsDefault() {
        this.alertService.showDialog('Are you sure you want to set the current configuration as your new defaults?', DialogType.confirm, () => this.setAsDefaultHelper(), () => this.alertService.showMessage('Operation Cancelled!', '', MessageSeverity.default));
    }
    setAsDefaultHelper() {
        this.alertService.startLoadingMessage('', 'Saving new defaults');
        this.accountService.updateUserPreferences(this.configurations.export())
            .subscribe(response => {
            this.alertService.stopLoadingMessage();
            this.alertService.showMessage('New Defaults', 'Account defaults updated successfully', MessageSeverity.success);
        }, error => {
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Save Error', `An error occured whilst saving configuration defaults.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        });
    }
    resetDefault() {
        this.alertService.showDialog('Are you sure you want to reset your defaults?', DialogType.confirm, () => this.resetDefaultHelper(), () => this.alertService.showMessage('Operation Cancelled!', '', MessageSeverity.default));
    }
    resetDefaultHelper() {
        this.alertService.startLoadingMessage('', 'Resetting defaults');
        this.accountService.updateUserPreferences(null)
            .subscribe(response => {
            this.alertService.stopLoadingMessage();
            this.configurations.import(null);
            this.alertService.showMessage('Defaults Reset', 'Account defaults reset completed successfully', MessageSeverity.success);
        }, error => {
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Save Error', `An error occured whilst resetting configuration defaults.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        });
    }
    get canViewCustomers() {
        return this.accountService.userHasPermission(Permission.viewUsersPermission); // eg. viewCustomersPermission
    }
    get canViewProducts() {
        return this.accountService.userHasPermission(Permission.viewUsersPermission); // eg. viewProductsPermission
    }
    get canViewOrders() {
        return true; // eg. viewOrdersPermission
    }
}
/** @nocollapse */ UserPreferencesComponent.ɵfac = function UserPreferencesComponent_Factory(t) { return new (t || UserPreferencesComponent)(i0.ɵɵdirectiveInject(i1.AlertService), i0.ɵɵdirectiveInject(i1.AppTranslationService), i0.ɵɵdirectiveInject(i2.AccountService), i0.ɵɵdirectiveInject(i1.ThemeManager), i0.ɵɵdirectiveInject(i1.ConfigurationService)); };
/** @nocollapse */ UserPreferencesComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UserPreferencesComponent, selectors: [["user-preferences"]], viewQuery: function UserPreferencesComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
        i0.ɵɵstaticViewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.languageSelector = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.homePageSelector = _t.first);
    } }, decls: 155, vars: 91, consts: [[1, "form-group", "row"], ["for", "refreshButton", 1, "col-sm-3", "col-form-label"], [1, "col-sm-4"], ["id", "refreshButton", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-refresh"], [1, "col-sm-5"], [1, "form-control-plaintext", "text-muted", "small"], [1, "row"], [1, "col-md-12"], [1, "separator-hr"], ["for", "language", 1, "col-sm-3", "col-form-label"], ["id", "language", "bootstrapSelect", "", 1, "selectpicker", "form-control", 3, "ngModel", "ngModelChange"], ["languageSelector", "bootstrap-select"], ["data-subtext", "(Default)", "value", "en"], ["value", "fr"], ["value", "de"], ["value", "pt"], ["value", "ar"], ["value", "ko"], ["for", "homePage", 1, "col-sm-3", "col-form-label"], ["id", "homePage", "bootstrapSelect", "", 1, "selectpicker", "form-control", 3, "ngModel", "ngModelChange"], ["homePageSelector", "bootstrap-select"], ["data-icon", "fa fa-tachometer", "data-subtext", "(Default)", "value", "/"], ["data-icon", "fa fa-handshake-o", "value", "/customers", 4, "ngIf"], ["data-icon", "fa fa-truck", "value", "/products", 4, "ngIf"], ["data-icon", "fa fa-shopping-cart", "value", "/orders", 4, "ngIf"], ["data-icon", "fa fa-info-circle", "value", "/about"], ["data-icon", "fa fa-cog", "value", "/settings"], ["for", "defaultTheme", 1, "col-sm-3", "col-form-label"], ["class", "col-sm-4", 4, "ngIf"], ["for", "dashboardStatistics", 1, "col-sm-3", "col-form-label"], [1, "checkbox"], ["name", "dashboardStatistics", "type", "checkbox", "bootstrapToggle", "", "data-size", "small", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "subseparator-hr"], ["for", "dashboardTodo", 1, "col-sm-3", "col-form-label"], ["name", "dashboardNotifications", "type", "checkbox", "bootstrapToggle", "", "data-size", "small", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "dashboardTodo", "type", "checkbox", "bootstrapToggle", "", "data-size", "small", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "dashboardBanner", 1, "col-sm-3", "col-form-label"], ["name", "dashboardBanner", "type", "checkbox", "bootstrapToggle", "", "data-size", "small", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "last-separator-hr"], [1, "col-sm-3"], [1, "col-sm-9"], [1, "row", "float-left"], [1, "col-sm-6", "col-reset-default"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-circle-o-notch"], [1, "col-sm-6", "col-set-default"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-hdd-o"], ["data-icon", "fa fa-handshake-o", "value", "/customers"], ["data-icon", "fa fa-truck", "value", "/products"], ["data-icon", "fa fa-shopping-cart", "value", "/orders"], ["id", "defaultTheme", "bootstrapSelect", "", 1, "selectpicker", "theme-picker", "form-control", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"]], template: function UserPreferencesComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵelementStart(2, "label", 1);
        i0.ɵɵtext(3);
        i0.ɵɵpipe(4, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 2);
        i0.ɵɵelementStart(6, "button", 3);
        i0.ɵɵlistener("click", function UserPreferencesComponent_Template_button_click_6_listener() { return ctx.reloadFromServer(); });
        i0.ɵɵelement(7, "i", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 5);
        i0.ɵɵelementStart(9, "p", 6);
        i0.ɵɵtext(10);
        i0.ɵɵpipe(11, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 7);
        i0.ɵɵelementStart(13, "div", 8);
        i0.ɵɵelement(14, "hr", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 0);
        i0.ɵɵelementStart(16, "label", 10);
        i0.ɵɵtext(17);
        i0.ɵɵpipe(18, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "div", 2);
        i0.ɵɵelementStart(20, "select", 11, 12);
        i0.ɵɵlistener("ngModelChange", function UserPreferencesComponent_Template_select_ngModelChange_20_listener($event) { return ctx.configurations.language = $event; });
        i0.ɵɵelementStart(22, "option", 13);
        i0.ɵɵtext(23);
        i0.ɵɵpipe(24, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "option", 14);
        i0.ɵɵtext(26);
        i0.ɵɵpipe(27, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "option", 15);
        i0.ɵɵtext(29);
        i0.ɵɵpipe(30, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "option", 16);
        i0.ɵɵtext(32);
        i0.ɵɵpipe(33, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "option", 17);
        i0.ɵɵtext(35);
        i0.ɵɵpipe(36, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "option", 18);
        i0.ɵɵtext(38);
        i0.ɵɵpipe(39, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "div", 5);
        i0.ɵɵelementStart(41, "p", 6);
        i0.ɵɵtext(42);
        i0.ɵɵpipe(43, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(44, "div", 7);
        i0.ɵɵelementStart(45, "div", 8);
        i0.ɵɵelement(46, "hr", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(47, "div", 0);
        i0.ɵɵelementStart(48, "label", 19);
        i0.ɵɵtext(49);
        i0.ɵɵpipe(50, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(51, "div", 2);
        i0.ɵɵelementStart(52, "select", 20, 21);
        i0.ɵɵlistener("ngModelChange", function UserPreferencesComponent_Template_select_ngModelChange_52_listener($event) { return ctx.configurations.homeUrl = $event; });
        i0.ɵɵelementStart(54, "option", 22);
        i0.ɵɵtext(55);
        i0.ɵɵpipe(56, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(57, UserPreferencesComponent_option_57_Template, 3, 3, "option", 23);
        i0.ɵɵtemplate(58, UserPreferencesComponent_option_58_Template, 3, 3, "option", 24);
        i0.ɵɵtemplate(59, UserPreferencesComponent_option_59_Template, 3, 3, "option", 25);
        i0.ɵɵelementStart(60, "option", 26);
        i0.ɵɵtext(61);
        i0.ɵɵpipe(62, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(63, "option", 27);
        i0.ɵɵtext(64);
        i0.ɵɵpipe(65, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(66, "div", 5);
        i0.ɵɵelementStart(67, "p", 6);
        i0.ɵɵtext(68);
        i0.ɵɵpipe(69, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(70, "div", 7);
        i0.ɵɵelementStart(71, "div", 8);
        i0.ɵɵelement(72, "hr", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(73, "div", 0);
        i0.ɵɵelementStart(74, "label", 28);
        i0.ɵɵtext(75);
        i0.ɵɵpipe(76, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(77, UserPreferencesComponent_div_77_Template, 3, 2, "div", 29);
        i0.ɵɵelementStart(78, "div", 5);
        i0.ɵɵelementStart(79, "p", 6);
        i0.ɵɵtext(80);
        i0.ɵɵpipe(81, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(82, "div", 7);
        i0.ɵɵelementStart(83, "div", 8);
        i0.ɵɵelement(84, "hr", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(85, "div", 0);
        i0.ɵɵelementStart(86, "label", 30);
        i0.ɵɵtext(87);
        i0.ɵɵpipe(88, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(89, "div", 2);
        i0.ɵɵelementStart(90, "div", 31);
        i0.ɵɵelementStart(91, "input", 32);
        i0.ɵɵlistener("ngModelChange", function UserPreferencesComponent_Template_input_ngModelChange_91_listener($event) { return ctx.configurations.showDashboardStatistics = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(92, "div", 5);
        i0.ɵɵelementStart(93, "p", 6);
        i0.ɵɵtext(94);
        i0.ɵɵpipe(95, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(96, "div", 7);
        i0.ɵɵelementStart(97, "div", 8);
        i0.ɵɵelement(98, "hr", 33);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(99, "div", 0);
        i0.ɵɵelementStart(100, "label", 34);
        i0.ɵɵtext(101);
        i0.ɵɵpipe(102, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(103, "div", 2);
        i0.ɵɵelementStart(104, "div", 31);
        i0.ɵɵelementStart(105, "input", 35);
        i0.ɵɵlistener("ngModelChange", function UserPreferencesComponent_Template_input_ngModelChange_105_listener($event) { return ctx.configurations.showDashboardNotifications = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(106, "div", 5);
        i0.ɵɵelementStart(107, "p", 6);
        i0.ɵɵtext(108);
        i0.ɵɵpipe(109, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(110, "div", 7);
        i0.ɵɵelementStart(111, "div", 8);
        i0.ɵɵelement(112, "hr", 33);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(113, "div", 0);
        i0.ɵɵelementStart(114, "label", 34);
        i0.ɵɵtext(115);
        i0.ɵɵpipe(116, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(117, "div", 2);
        i0.ɵɵelementStart(118, "div", 31);
        i0.ɵɵelementStart(119, "input", 36);
        i0.ɵɵlistener("ngModelChange", function UserPreferencesComponent_Template_input_ngModelChange_119_listener($event) { return ctx.configurations.showDashboardTodo = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(120, "div", 5);
        i0.ɵɵelementStart(121, "p", 6);
        i0.ɵɵtext(122);
        i0.ɵɵpipe(123, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(124, "div", 7);
        i0.ɵɵelementStart(125, "div", 8);
        i0.ɵɵelement(126, "hr", 33);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(127, "div", 0);
        i0.ɵɵelementStart(128, "label", 37);
        i0.ɵɵtext(129);
        i0.ɵɵpipe(130, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(131, "div", 2);
        i0.ɵɵelementStart(132, "div", 31);
        i0.ɵɵelementStart(133, "input", 38);
        i0.ɵɵlistener("ngModelChange", function UserPreferencesComponent_Template_input_ngModelChange_133_listener($event) { return ctx.configurations.showDashboardBanner = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(134, "div", 5);
        i0.ɵɵelementStart(135, "p", 6);
        i0.ɵɵtext(136);
        i0.ɵɵpipe(137, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(138, "div", 7);
        i0.ɵɵelementStart(139, "div", 8);
        i0.ɵɵelement(140, "hr", 39);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(141, "div", 0);
        i0.ɵɵelement(142, "div", 40);
        i0.ɵɵelementStart(143, "div", 41);
        i0.ɵɵelementStart(144, "div", 42);
        i0.ɵɵelementStart(145, "div", 43);
        i0.ɵɵelementStart(146, "button", 44);
        i0.ɵɵlistener("click", function UserPreferencesComponent_Template_button_click_146_listener() { return ctx.resetDefault(); });
        i0.ɵɵelement(147, "i", 45);
        i0.ɵɵtext(148);
        i0.ɵɵpipe(149, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(150, "div", 46);
        i0.ɵɵelementStart(151, "button", 47);
        i0.ɵɵlistener("click", function UserPreferencesComponent_Template_button_click_151_listener() { return ctx.setAsDefault(); });
        i0.ɵɵelement(152, "i", 48);
        i0.ɵɵtext(153);
        i0.ɵɵpipe(154, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 37, "preferences.ReloadPreferences"), " ");
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(11, 39, "preferences.ReloadPreferencesHint"));
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(18, 41, "preferences.Language"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.configurations.language);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(24, 43, "preferences.English"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(27, 45, "preferences.French"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(30, 47, "preferences.German"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(33, 49, "preferences.Portuguese"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(36, 51, "preferences.Arabic"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(39, 53, "preferences.Korean"));
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(43, 55, "preferences.LanguageHint"));
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(50, 57, "preferences.HomePage"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.configurations.homeUrl);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(56, 59, "preferences.Dashboard"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.canViewCustomers);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.canViewProducts);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.canViewOrders);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(62, 61, "preferences.About"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(65, 63, "preferences.Settings"));
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(69, 65, "preferences.HomePageHint"));
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(76, 67, "preferences.Theme"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.themeSelectorToggle);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(81, 69, "preferences.ThemeHint"));
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(88, 71, "preferences.DashboardStatistics"), " ");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.configurations.showDashboardStatistics);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(95, 73, "preferences.DashboardStatisticsHint"));
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(102, 75, "preferences.DashboardNotifications"), " ");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.configurations.showDashboardNotifications);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(109, 77, "preferences.DashboardNotificationsHint"));
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(116, 79, "preferences.DashboardTodo"), " ");
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.configurations.showDashboardTodo);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(123, 81, "preferences.DashboardTodoHint"));
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(130, 83, "preferences.DashboardBanner"));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngModel", ctx.configurations.showDashboardBanner);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(137, 85, "preferences.DashboardBannerHint"));
        i0.ɵɵadvance(12);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(149, 87, "preferences.ResetDefault"), " ");
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(154, 89, "preferences.SetDefault"), " ");
    } }, directives: [i3.SelectControlValueAccessor, i4.BootstrapSelectDirective, i3.NgControlStatus, i3.NgModel, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i5.NgIf, i3.CheckboxControlValueAccessor, i6.BootstrapToggleDirective, i5.NgForOf], pipes: [i7.TranslatePipe], styles: [".separator-hr[_ngcontent-%COMP%]{margin:7px 5px;border-top-style:dashed}.subseparator-hr[_ngcontent-%COMP%]{margin:7px 5px;border-top-style:none}.last-separator-hr[_ngcontent-%COMP%]{margin-top:7px}.form-group[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.form-control-plaintext[_ngcontent-%COMP%]{min-height:0}.checkbox[_ngcontent-%COMP%]{padding-top:0}.col-reset-default[_ngcontent-%COMP%]{padding-right:0}.col-set-default[_ngcontent-%COMP%]{padding-left:5px}.col-reset-default[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .col-set-default[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{min-width:150px}@media (min-width:768px){.col-form-label[_ngcontent-%COMP%]{padding-top:5px}}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UserPreferencesComponent, [{
        type: Component,
        args: [{
                selector: 'user-preferences',
                templateUrl: './user-preferences.component.html',
                styleUrls: ['./user-preferences.component.scss']
            }]
    }], function () { return [{ type: i1.AlertService }, { type: i1.AppTranslationService }, { type: i2.AccountService }, { type: i1.ThemeManager }, { type: i1.ConfigurationService }]; }, { languageSelector: [{
            type: ViewChild,
            args: ['languageSelector', { static: true }]
        }], homePageSelector: [{
            type: ViewChild,
            args: ['homePageSelector', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcmVmZXJlbmNlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXNlci1wcmVmZXJlbmNlcy91c2VyLXByZWZlcmVuY2VzLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3VzZXItcHJlZmVyZW5jZXMvdXNlci1wcmVmZXJlbmNlcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixnQ0FBZ0M7QUFFaEMsT0FBTyxFQUFFLFNBQVMsRUFBcUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhFLE9BQU8sRUFDSCxVQUFVLEVBQUUsZUFBZSxFQUMzQixTQUFTLEVBQ1osTUFBTSxzQ0FBc0MsQ0FBQztBQVU5QyxPQUFPLEVBRUgsVUFBVSxFQUNiLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7OztJQ3dCZCxrQ0FBa0Y7SUFBQSxZQUF1Qzs7SUFBQSxpQkFBUzs7SUFBaEQsZUFBdUM7SUFBdkMsbUVBQXVDOzs7SUFDekgsa0NBQTBFO0lBQUEsWUFBc0M7O0lBQUEsaUJBQVM7O0lBQS9DLGVBQXNDO0lBQXRDLGtFQUFzQzs7O0lBQ2hILGtDQUE4RTtJQUFBLFlBQW9DOztJQUFBLGlCQUFTOztJQUE3QyxlQUFvQztJQUFwQyxnRUFBb0M7OztJQW9CbEgsOEJBR0E7O0lBQUEsWUFDQTtJQUFBLGlCQUFTOzs7SUFIVCxtVEFDa0U7SUFDbEUsZUFDQTtJQURBLDRDQUNBOzs7O0lBTlIsOEJBQ0k7SUFBQSxrQ0FDSTtJQURzQixzT0FBb0M7SUFDMUQsdUZBR0E7SUFFSixpQkFBUztJQUNiLGlCQUFNOzs7SUFQd0IsZUFBb0M7SUFBcEMsdURBQW9DO0lBQ2xELGVBQXlDO0lBQXpDLG9EQUF5Qzs7QURwQ2pFLE1BQU0sT0FBTyx3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ZUFBdUQ7UUFBdkQsdUVBQXVEO1FBSTdDLGVBQXdEO1FBQXhELHVGQUF3RDtRQVlwRCxlQUE0QztRQUE1QyxvRkFBNEM7UUFHbkUsZUFBOEM7UUFBOUMsOERBQThDO1FBSTNCLGVBQStDO1FBQS9DLDhFQUErQztRQWF6QyxlQUE2QztRQUE3Qyw0RUFBNkM7UUFHcEUsZUFBZ0Q7UUFBaEQsZ0VBQWdEO1FBSS9CLGVBQWlEO1FBQWpELGdGQUFpRDtRQW9CbkQsZ0JBQ3pDO1FBRHlDLG9GQUN6QztRQUlnQyxlQUNoQztRQURnQyxrRkFDaEM7O2tERGxKUCx3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ25EOztrQkFPSSxTQUFTO21CQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRzlDLFNBQVM7bUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBEaWFsb2dUeXBlLCBNZXNzYWdlU2V2ZXJpdHksXG4gICAgVXRpbGl0aWVzXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgQWxlcnRTZXJ2aWNlLFxuICAgIEFwcFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBMb2NhbFN0b3JlTWFuYWdlcixcbiAgICBDb25maWd1cmF0aW9uU2VydmljZSxcbiAgICBUaGVtZU1hbmFnZXJcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtc2VydmljZXMtYWxwaGEnO1xuXG5pbXBvcnQge1xuICAgIEF1dGhTZXJ2aWNlLFxuICAgIFBlcm1pc3Npb25cbn0gZnJvbSAnQHBvbHB3YXJlL25neC1vYXV0aDInO1xuXG5pbXBvcnQgeyBCb290c3RyYXBTZWxlY3REaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2Jvb3RzdHJhcC1zZWxlY3QuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWNjb3VudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd1c2VyLXByZWZlcmVuY2VzJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlci1wcmVmZXJlbmNlcy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdXNlci1wcmVmZXJlbmNlcy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJQcmVmZXJlbmNlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHRoZW1lU2VsZWN0b3JUb2dnbGUgPSB0cnVlO1xuXG4gICAgbGFuZ3VhZ2VDaGFuZ2VkU3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgICBAVmlld0NoaWxkKCdsYW5ndWFnZVNlbGVjdG9yJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBsYW5ndWFnZVNlbGVjdG9yOiBCb290c3RyYXBTZWxlY3REaXJlY3RpdmU7XG5cbiAgICBAVmlld0NoaWxkKCdob21lUGFnZVNlbGVjdG9yJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBob21lUGFnZVNlbGVjdG9yOiBCb290c3RyYXBTZWxlY3REaXJlY3RpdmU7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB0cmFuc2xhdGlvblNlcnZpY2U6IEFwcFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UsXG4gICAgICAgIHB1YmxpYyB0aGVtZU1hbmFnZXI6IFRoZW1lTWFuYWdlcixcbiAgICAgICAgcHVibGljIGNvbmZpZ3VyYXRpb25zOiBDb25maWd1cmF0aW9uU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxhbmd1YWdlQ2hhbmdlZFN1YnNjcmlwdGlvbiA9IHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmxhbmd1YWdlQ2hhbmdlZCQuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgdGhpcy50aGVtZVNlbGVjdG9yVG9nZ2xlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VTZWxlY3Rvci5yZWZyZXNoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ob21lUGFnZVNlbGVjdG9yLnJlZnJlc2goKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRoZW1lU2VsZWN0b3JUb2dnbGUgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmxhbmd1YWdlQ2hhbmdlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuXG5cbiAgICByZWxvYWRGcm9tU2VydmVyKCkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCk7XG5cbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5nZXRVc2VyUHJlZmVyZW5jZXMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbnMuaW1wb3J0KHJlc3VsdHMpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ0RlZmF1bHRzIGxvYWRlZCEnLCAnJywgTWVzc2FnZVNldmVyaXR5LmluZm8pO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdMb2FkIEVycm9yJywgYFVuYWJsZSB0byByZXRyaWV2ZSB1c2VyIHByZWZlcmVuY2VzIGZyb20gdGhlIHNlcnZlci5cXHJcXG5FcnJvcnM6IFwiJHtVdGlsaXRpZXMuZ2V0SHR0cFJlc3BvbnNlTWVzc2FnZXMoZXJyb3IpfVwiYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXZlcml0eS5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldEFzRGVmYXVsdCgpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd0RpYWxvZygnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHNldCB0aGUgY3VycmVudCBjb25maWd1cmF0aW9uIGFzIHlvdXIgbmV3IGRlZmF1bHRzPycsIERpYWxvZ1R5cGUuY29uZmlybSxcbiAgICAgICAgICAgICgpID0+IHRoaXMuc2V0QXNEZWZhdWx0SGVscGVyKCksXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmFsZXJ0U2VydmljZS5zaG93TWVzc2FnZSgnT3BlcmF0aW9uIENhbmNlbGxlZCEnLCAnJywgTWVzc2FnZVNldmVyaXR5LmRlZmF1bHQpKTtcbiAgICB9XG5cbiAgICBzZXRBc0RlZmF1bHRIZWxwZXIoKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0YXJ0TG9hZGluZ01lc3NhZ2UoJycsICdTYXZpbmcgbmV3IGRlZmF1bHRzJyk7XG5cbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS51cGRhdGVVc2VyUHJlZmVyZW5jZXModGhpcy5jb25maWd1cmF0aW9ucy5leHBvcnQoKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdOZXcgRGVmYXVsdHMnLCAnQWNjb3VudCBkZWZhdWx0cyB1cGRhdGVkIHN1Y2Nlc3NmdWxseScsIE1lc3NhZ2VTZXZlcml0eS5zdWNjZXNzKTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZSgnU2F2ZSBFcnJvcicsIGBBbiBlcnJvciBvY2N1cmVkIHdoaWxzdCBzYXZpbmcgY29uZmlndXJhdGlvbiBkZWZhdWx0cy5cXHJcXG5FcnJvcnM6IFwiJHtVdGlsaXRpZXMuZ2V0SHR0cFJlc3BvbnNlTWVzc2FnZXMoZXJyb3IpfVwiYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXZlcml0eS5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICByZXNldERlZmF1bHQoKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dEaWFsb2coJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZXNldCB5b3VyIGRlZmF1bHRzPycsIERpYWxvZ1R5cGUuY29uZmlybSxcbiAgICAgICAgICAgICgpID0+IHRoaXMucmVzZXREZWZhdWx0SGVscGVyKCksXG4gICAgICAgICAgICAoKSA9PiB0aGlzLmFsZXJ0U2VydmljZS5zaG93TWVzc2FnZSgnT3BlcmF0aW9uIENhbmNlbGxlZCEnLCAnJywgTWVzc2FnZVNldmVyaXR5LmRlZmF1bHQpKTtcbiAgICB9XG5cbiAgICByZXNldERlZmF1bHRIZWxwZXIoKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0YXJ0TG9hZGluZ01lc3NhZ2UoJycsICdSZXNldHRpbmcgZGVmYXVsdHMnKTtcblxuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLnVwZGF0ZVVzZXJQcmVmZXJlbmNlcyhudWxsKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9ucy5pbXBvcnQobnVsbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ0RlZmF1bHRzIFJlc2V0JywgJ0FjY291bnQgZGVmYXVsdHMgcmVzZXQgY29tcGxldGVkIHN1Y2Nlc3NmdWxseScsIE1lc3NhZ2VTZXZlcml0eS5zdWNjZXNzKTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZSgnU2F2ZSBFcnJvcicsIGBBbiBlcnJvciBvY2N1cmVkIHdoaWxzdCByZXNldHRpbmcgY29uZmlndXJhdGlvbiBkZWZhdWx0cy5cXHJcXG5FcnJvcnM6IFwiJHtVdGlsaXRpZXMuZ2V0SHR0cFJlc3BvbnNlTWVzc2FnZXMoZXJyb3IpfVwiYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXZlcml0eS5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZ2V0IGNhblZpZXdDdXN0b21lcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRTZXJ2aWNlLnVzZXJIYXNQZXJtaXNzaW9uKFBlcm1pc3Npb24udmlld1VzZXJzUGVybWlzc2lvbik7IC8vIGVnLiB2aWV3Q3VzdG9tZXJzUGVybWlzc2lvblxuICAgIH1cblxuICAgIGdldCBjYW5WaWV3UHJvZHVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRTZXJ2aWNlLnVzZXJIYXNQZXJtaXNzaW9uKFBlcm1pc3Npb24udmlld1VzZXJzUGVybWlzc2lvbik7IC8vIGVnLiB2aWV3UHJvZHVjdHNQZXJtaXNzaW9uXG4gICAgfVxuXG4gICAgZ2V0IGNhblZpZXdPcmRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBlZy4gdmlld09yZGVyc1Blcm1pc3Npb25cbiAgICB9XG59XG4iLCI8ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICA8bGFiZWwgZm9yPVwicmVmcmVzaEJ1dHRvblwiIGNsYXNzPVwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIj57eydwcmVmZXJlbmNlcy5SZWxvYWRQcmVmZXJlbmNlcycgfCB0cmFuc2xhdGV9fSA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJyZWZyZXNoQnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIgKGNsaWNrKT1cInJlbG9hZEZyb21TZXJ2ZXIoKVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcmVmcmVzaFwiPjwvaT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS01XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImZvcm0tY29udHJvbC1wbGFpbnRleHQgdGV4dC1tdXRlZCBzbWFsbFwiPnt7J3ByZWZlcmVuY2VzLlJlbG9hZFByZWZlcmVuY2VzSGludCcgfCB0cmFuc2xhdGV9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgIDxociBjbGFzcz1cInNlcGFyYXRvci1oclwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJsYW5ndWFnZVwiIGNsYXNzPVwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIj57eydwcmVmZXJlbmNlcy5MYW5ndWFnZScgfCB0cmFuc2xhdGV9fSA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJsYW5ndWFnZVwiIFsobmdNb2RlbCldPVwiY29uZmlndXJhdGlvbnMubGFuZ3VhZ2VcIiAjbGFuZ3VhZ2VTZWxlY3Rvcj1cImJvb3RzdHJhcC1zZWxlY3RcIiBib290c3RyYXBTZWxlY3QgY2xhc3M9XCJzZWxlY3RwaWNrZXIgZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBkYXRhLXN1YnRleHQ9XCIoRGVmYXVsdClcIiB2YWx1ZT1cImVuXCI+e3sncHJlZmVyZW5jZXMuRW5nbGlzaCcgfCB0cmFuc2xhdGV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmclwiPnt7J3ByZWZlcmVuY2VzLkZyZW5jaCcgfCB0cmFuc2xhdGV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZVwiPnt7J3ByZWZlcmVuY2VzLkdlcm1hbicgfCB0cmFuc2xhdGV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwdFwiPnt7J3ByZWZlcmVuY2VzLlBvcnR1Z3Vlc2UnIHwgdHJhbnNsYXRlfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXJcIj57eydwcmVmZXJlbmNlcy5BcmFiaWMnIHwgdHJhbnNsYXRlfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia29cIj57eydwcmVmZXJlbmNlcy5Lb3JlYW4nIHwgdHJhbnNsYXRlfX08L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS01XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImZvcm0tY29udHJvbC1wbGFpbnRleHQgdGV4dC1tdXRlZCBzbWFsbFwiPnt7J3ByZWZlcmVuY2VzLkxhbmd1YWdlSGludCcgfCB0cmFuc2xhdGV9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgIDxociBjbGFzcz1cInNlcGFyYXRvci1oclwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJob21lUGFnZVwiIGNsYXNzPVwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIj57eydwcmVmZXJlbmNlcy5Ib21lUGFnZScgfCB0cmFuc2xhdGV9fSA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJob21lUGFnZVwiIFsobmdNb2RlbCldPVwiY29uZmlndXJhdGlvbnMuaG9tZVVybFwiICNob21lUGFnZVNlbGVjdG9yPVwiYm9vdHN0cmFwLXNlbGVjdFwiIGJvb3RzdHJhcFNlbGVjdCBjbGFzcz1cInNlbGVjdHBpY2tlciBmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIGRhdGEtaWNvbj1cImZhIGZhLXRhY2hvbWV0ZXJcIiBkYXRhLXN1YnRleHQ9XCIoRGVmYXVsdClcIiB2YWx1ZT1cIi9cIj57eydwcmVmZXJlbmNlcy5EYXNoYm9hcmQnIHwgdHJhbnNsYXRlfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0lmPVwiY2FuVmlld0N1c3RvbWVyc1wiIGRhdGEtaWNvbj1cImZhIGZhLWhhbmRzaGFrZS1vXCIgdmFsdWU9XCIvY3VzdG9tZXJzXCI+e3sncHJlZmVyZW5jZXMuQ3VzdG9tZXJzJyB8IHRyYW5zbGF0ZX19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdJZj1cImNhblZpZXdQcm9kdWN0c1wiIGRhdGEtaWNvbj1cImZhIGZhLXRydWNrXCIgdmFsdWU9XCIvcHJvZHVjdHNcIj57eydwcmVmZXJlbmNlcy5Qcm9kdWN0cycgfCB0cmFuc2xhdGV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nSWY9XCJjYW5WaWV3T3JkZXJzXCIgZGF0YS1pY29uPVwiZmEgZmEtc2hvcHBpbmctY2FydFwiIHZhbHVlPVwiL29yZGVyc1wiPnt7J3ByZWZlcmVuY2VzLk9yZGVycycgfCB0cmFuc2xhdGV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gZGF0YS1pY29uPVwiZmEgZmEtaW5mby1jaXJjbGVcIiB2YWx1ZT1cIi9hYm91dFwiPnt7J3ByZWZlcmVuY2VzLkFib3V0JyB8IHRyYW5zbGF0ZX19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBkYXRhLWljb249XCJmYSBmYS1jb2dcIiB2YWx1ZT1cIi9zZXR0aW5nc1wiPnt7J3ByZWZlcmVuY2VzLlNldHRpbmdzJyB8IHRyYW5zbGF0ZX19PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJmb3JtLWNvbnRyb2wtcGxhaW50ZXh0IHRleHQtbXV0ZWQgc21hbGxcIj57eydwcmVmZXJlbmNlcy5Ib21lUGFnZUhpbnQnIHwgdHJhbnNsYXRlfX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICA8aHIgY2xhc3M9XCJzZXBhcmF0b3ItaHJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZGVmYXVsdFRoZW1lXCIgY2xhc3M9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiPnt7J3ByZWZlcmVuY2VzLlRoZW1lJyB8IHRyYW5zbGF0ZX19IDwvbGFiZWw+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJ0aGVtZVNlbGVjdG9yVG9nZ2xlXCIgY2xhc3M9XCJjb2wtc20tNFwiPlxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cImRlZmF1bHRUaGVtZVwiIFsobmdNb2RlbCldPVwiY29uZmlndXJhdGlvbnMudGhlbWVJZFwiIGJvb3RzdHJhcFNlbGVjdCBjbGFzcz1cInNlbGVjdHBpY2tlciB0aGVtZS1waWNrZXIgZm9ybS1jb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgdGhlbWUgb2YgdGhlbWVNYW5hZ2VyLnRoZW1lc1wiXG4gICAgICAgICAgICAgICAgYXR0ci5kYXRhLWNvbnRlbnQ9XCI8ZGl2IGNsYXNzPSd0aGVtZS1pdGVtJyBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjoge3t0aGVtZS5iYWNrZ3JvdW5kfX07IGNvbG9yOiB7e3RoZW1lLmNvbG9yfX0nPnt7J3ByZWZlcmVuY2VzLicgKyB0aGVtZS5uYW1lICsgJ1RoZW1lJyB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3NtYWxsJz57e3RoZW1lLmlzRGFyayA/ICcoRGFyayknIDogJyd9fTwvc3Bhbj48L2Rpdj5cIj5cbiAgICAgICAgICAgICAgICB7e3RoZW1lLmlkfX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS01XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImZvcm0tY29udHJvbC1wbGFpbnRleHQgdGV4dC1tdXRlZCBzbWFsbFwiPnt7J3ByZWZlcmVuY2VzLlRoZW1lSGludCcgfCB0cmFuc2xhdGV9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgIDxociBjbGFzcz1cInNlcGFyYXRvci1oclwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXCIgZm9yPVwiZGFzaGJvYXJkU3RhdGlzdGljc1wiPnt7J3ByZWZlcmVuY2VzLkRhc2hib2FyZFN0YXRpc3RpY3MnIHwgdHJhbnNsYXRlfX0gPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImRhc2hib2FyZFN0YXRpc3RpY3NcIiBbKG5nTW9kZWwpXT1cImNvbmZpZ3VyYXRpb25zLnNob3dEYXNoYm9hcmRTdGF0aXN0aWNzXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwiY2hlY2tib3hcIiBib290c3RyYXBUb2dnbGUgZGF0YS1zaXplPVwic21hbGxcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS01XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImZvcm0tY29udHJvbC1wbGFpbnRleHQgdGV4dC1tdXRlZCBzbWFsbFwiPnt7J3ByZWZlcmVuY2VzLkRhc2hib2FyZFN0YXRpc3RpY3NIaW50JyB8IHRyYW5zbGF0ZX19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8IS0tICAtLT5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgPGhyIGNsYXNzPVwic3Vic2VwYXJhdG9yLWhyXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIiBmb3I9XCJkYXNoYm9hcmRUb2RvXCI+e3sncHJlZmVyZW5jZXMuRGFzaGJvYXJkTm90aWZpY2F0aW9ucycgfCB0cmFuc2xhdGV9fSA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZGFzaGJvYXJkTm90aWZpY2F0aW9uc1wiIFsobmdNb2RlbCldPVwiY29uZmlndXJhdGlvbnMuc2hvd0Rhc2hib2FyZE5vdGlmaWNhdGlvbnNcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJjaGVja2JveFwiIGJvb3RzdHJhcFRvZ2dsZSBkYXRhLXNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTVcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9ybS1jb250cm9sLXBsYWludGV4dCB0ZXh0LW11dGVkIHNtYWxsXCI+e3sncHJlZmVyZW5jZXMuRGFzaGJvYXJkTm90aWZpY2F0aW9uc0hpbnQnIHwgdHJhbnNsYXRlfX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwhLS0gIC0tPlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICA8aHIgY2xhc3M9XCJzdWJzZXBhcmF0b3ItaHJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiIGZvcj1cImRhc2hib2FyZFRvZG9cIj57eydwcmVmZXJlbmNlcy5EYXNoYm9hcmRUb2RvJyB8IHRyYW5zbGF0ZX19IDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJkYXNoYm9hcmRUb2RvXCIgWyhuZ01vZGVsKV09XCJjb25maWd1cmF0aW9ucy5zaG93RGFzaGJvYXJkVG9kb1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cImNoZWNrYm94XCIgYm9vdHN0cmFwVG9nZ2xlIGRhdGEtc2l6ZT1cInNtYWxsXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJmb3JtLWNvbnRyb2wtcGxhaW50ZXh0IHRleHQtbXV0ZWQgc21hbGxcIj57eydwcmVmZXJlbmNlcy5EYXNoYm9hcmRUb2RvSGludCcgfCB0cmFuc2xhdGV9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPCEtLSAgLS0+XG5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgPGhyIGNsYXNzPVwic3Vic2VwYXJhdG9yLWhyXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIiBmb3I9XCJkYXNoYm9hcmRCYW5uZXJcIj57eydwcmVmZXJlbmNlcy5EYXNoYm9hcmRCYW5uZXInIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZGFzaGJvYXJkQmFubmVyXCIgWyhuZ01vZGVsKV09XCJjb25maWd1cmF0aW9ucy5zaG93RGFzaGJvYXJkQmFubmVyXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwiY2hlY2tib3hcIiBib290c3RyYXBUb2dnbGUgZGF0YS1zaXplPVwic21hbGxcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS01XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImZvcm0tY29udHJvbC1wbGFpbnRleHQgdGV4dC1tdXRlZCBzbWFsbFwiPnt7J3ByZWZlcmVuY2VzLkRhc2hib2FyZEJhbm5lckhpbnQnIHwgdHJhbnNsYXRlfX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwhLS0gIC0tPlxuXG5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgPGhyIGNsYXNzPVwibGFzdC1zZXBhcmF0b3ItaHJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmbG9hdC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGNvbC1yZXNldC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJyZXNldERlZmF1bHQoKVwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz0nZmEgZmEtY2lyY2xlLW8tbm90Y2gnPjwvaT4ge3sncHJlZmVyZW5jZXMuUmVzZXREZWZhdWx0JyB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBjb2wtc2V0LWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInNldEFzRGVmYXVsdCgpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPSdmYSBmYS1oZGQtbyc+PC9pPiB7eydwcmVmZXJlbmNlcy5TZXREZWZhdWx0JyB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=