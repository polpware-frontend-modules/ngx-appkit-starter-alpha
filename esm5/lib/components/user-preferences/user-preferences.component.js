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
var _c0 = ["languageSelector"];
var _c1 = ["homePageSelector"];
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
    var theme_r7 = ctx.$implicit;
    i0.ɵɵattributeInterpolate4("data-content", "<div class='theme-item' style='background-color: ", theme_r7.background, "; color: ", theme_r7.color, "'>", i0.ɵɵpipeBind1(1, 5, "preferences." + theme_r7.name + "Theme"), "\n                <span class='small'>", theme_r7.isDark ? "(Dark)" : "", "</span></div>");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", theme_r7.id, " ");
} }
function UserPreferencesComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    var _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "select", 52);
    i0.ɵɵlistener("ngModelChange", function UserPreferencesComponent_div_77_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r9); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.configurations.themeId = $event; });
    i0.ɵɵtemplate(2, UserPreferencesComponent_div_77_option_2_Template, 3, 7, "option", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r5.configurations.themeId);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.themeManager.themes);
} }
var UserPreferencesComponent = /** @class */ (function () {
    function UserPreferencesComponent(alertService, translationService, accountService, themeManager, configurations) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.themeManager = themeManager;
        this.configurations = configurations;
        this.themeSelectorToggle = true;
    }
    UserPreferencesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.languageChangedSubscription = this.translationService.languageChanged$.subscribe(function (data) {
            _this.themeSelectorToggle = false;
            setTimeout(function () {
                _this.languageSelector.refresh();
                _this.homePageSelector.refresh();
                _this.themeSelectorToggle = true;
            });
        });
    };
    UserPreferencesComponent.prototype.ngOnDestroy = function () {
        this.languageChangedSubscription.unsubscribe();
    };
    UserPreferencesComponent.prototype.reloadFromServer = function () {
        var _this = this;
        this.alertService.startLoadingMessage();
        this.accountService.getUserPreferences()
            .subscribe(function (results) {
            _this.alertService.stopLoadingMessage();
            _this.configurations.import(results);
            _this.alertService.showMessage('Defaults loaded!', '', MessageSeverity.info);
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            _this.alertService.showStickyMessage('Load Error', "Unable to retrieve user preferences from the server.\r\nErrors: \"" + Utilities.getHttpResponseMessages(error) + "\"", MessageSeverity.error, error);
        });
    };
    UserPreferencesComponent.prototype.setAsDefault = function () {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to set the current configuration as your new defaults?', DialogType.confirm, function () { return _this.setAsDefaultHelper(); }, function () { return _this.alertService.showMessage('Operation Cancelled!', '', MessageSeverity.default); });
    };
    UserPreferencesComponent.prototype.setAsDefaultHelper = function () {
        var _this = this;
        this.alertService.startLoadingMessage('', 'Saving new defaults');
        this.accountService.updateUserPreferences(this.configurations.export())
            .subscribe(function (response) {
            _this.alertService.stopLoadingMessage();
            _this.alertService.showMessage('New Defaults', 'Account defaults updated successfully', MessageSeverity.success);
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            _this.alertService.showStickyMessage('Save Error', "An error occured whilst saving configuration defaults.\r\nErrors: \"" + Utilities.getHttpResponseMessages(error) + "\"", MessageSeverity.error, error);
        });
    };
    UserPreferencesComponent.prototype.resetDefault = function () {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to reset your defaults?', DialogType.confirm, function () { return _this.resetDefaultHelper(); }, function () { return _this.alertService.showMessage('Operation Cancelled!', '', MessageSeverity.default); });
    };
    UserPreferencesComponent.prototype.resetDefaultHelper = function () {
        var _this = this;
        this.alertService.startLoadingMessage('', 'Resetting defaults');
        this.accountService.updateUserPreferences(null)
            .subscribe(function (response) {
            _this.alertService.stopLoadingMessage();
            _this.configurations.import(null);
            _this.alertService.showMessage('Defaults Reset', 'Account defaults reset completed successfully', MessageSeverity.success);
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            _this.alertService.showStickyMessage('Save Error', "An error occured whilst resetting configuration defaults.\r\nErrors: \"" + Utilities.getHttpResponseMessages(error) + "\"", MessageSeverity.error, error);
        });
    };
    Object.defineProperty(UserPreferencesComponent.prototype, "canViewCustomers", {
        get: function () {
            return this.accountService.userHasPermission(Permission.viewUsersPermission); // eg. viewCustomersPermission
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPreferencesComponent.prototype, "canViewProducts", {
        get: function () {
            return this.accountService.userHasPermission(Permission.viewUsersPermission); // eg. viewProductsPermission
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserPreferencesComponent.prototype, "canViewOrders", {
        get: function () {
            return true; // eg. viewOrdersPermission
        },
        enumerable: true,
        configurable: true
    });
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
    return UserPreferencesComponent;
}());
export { UserPreferencesComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wcmVmZXJlbmNlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXNlci1wcmVmZXJlbmNlcy91c2VyLXByZWZlcmVuY2VzLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3VzZXItcHJlZmVyZW5jZXMvdXNlci1wcmVmZXJlbmNlcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixnQ0FBZ0M7QUFFaEMsT0FBTyxFQUFFLFNBQVMsRUFBcUIsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhFLE9BQU8sRUFDSCxVQUFVLEVBQUUsZUFBZSxFQUMzQixTQUFTLEVBQ1osTUFBTSxzQ0FBc0MsQ0FBQztBQVU5QyxPQUFPLEVBRUgsVUFBVSxFQUNiLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7OztJQ3dCZCxrQ0FBa0Y7SUFBQSxZQUF1Qzs7SUFBQSxpQkFBUzs7SUFBaEQsZUFBdUM7SUFBdkMsbUVBQXVDOzs7SUFDekgsa0NBQTBFO0lBQUEsWUFBc0M7O0lBQUEsaUJBQVM7O0lBQS9DLGVBQXNDO0lBQXRDLGtFQUFzQzs7O0lBQ2hILGtDQUE4RTtJQUFBLFlBQW9DOztJQUFBLGlCQUFTOztJQUE3QyxlQUFvQztJQUFwQyxnRUFBb0M7OztJQW9CbEgsOEJBR0E7O0lBQUEsWUFDQTtJQUFBLGlCQUFTOzs7SUFIVCxtVEFDa0U7SUFDbEUsZUFDQTtJQURBLDRDQUNBOzs7O0lBTlIsOEJBQ0k7SUFBQSxrQ0FDSTtJQURzQixvT0FBb0M7SUFDMUQsdUZBR0E7SUFFSixpQkFBUztJQUNiLGlCQUFNOzs7SUFQd0IsZUFBb0M7SUFBcEMsdURBQW9DO0lBQ2xELGVBQXlDO0lBQXpDLG9EQUF5Qzs7QUR6Q2pFO0lBaUJJLGtDQUNZ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dkMscUVBQXVDO1lBVzdCLGVBQWtEO1lBQWxELHlGQUFrRDtZQUd6RSxlQUFvRDtZQUFwRCxvRUFBb0Q7WUFJdkMsZUFBcUQ7WUFBckQsbUZBQXFEO1lBWWpELGVBQXFEO1lBQXJELDZGQUFxRDtZQUduRSxlQUF1RDtZQUF2RCx1RUFBdUQ7WUFJN0MsZUFBd0Q7WUFBeEQsdUZBQXdEO1lBWXBELGVBQTRDO1lBQTVDLG9GQUE0QztZQUduRSxlQUE4QztZQUE5Qyw4REFBOEM7WUFJM0IsZUFBK0M7WUFBL0MsOEVBQStDO1lBYXpDLGVBQTZDO1lBQTdDLDRFQUE2QztZQUdwRSxlQUFnRDtZQUFoRCxnRUFBZ0Q7WUFJL0IsZUFBaUQ7WUFBakQsZ0ZBQWlEO1lBb0JuRCxnQkFDekM7WUFEeUMsb0ZBQ3pDO1lBSWdDLGVBQ2hDO1lBRGdDLGtGQUNoQzs7bUNEbkxwQjtDQXFKQyxBQXpIRCxJQXlIQztTQXBIWSx3QkFBd0I7a0RBQXhCLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDbkQ7O2tCQU9JLFNBQVM7bUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFHOUMsU0FBUzttQkFBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIERpYWxvZ1R5cGUsIE1lc3NhZ2VTZXZlcml0eSxcbiAgICBVdGlsaXRpZXNcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBBbGVydFNlcnZpY2UsXG4gICAgQXBwVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIExvY2FsU3RvcmVNYW5hZ2VyLFxuICAgIENvbmZpZ3VyYXRpb25TZXJ2aWNlLFxuICAgIFRoZW1lTWFuYWdlclxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1zZXJ2aWNlcy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgQXV0aFNlcnZpY2UsXG4gICAgUGVybWlzc2lvblxufSBmcm9tICdAcG9scHdhcmUvbmd4LW9hdXRoMic7XG5cbmltcG9ydCB7IEJvb3RzdHJhcFNlbGVjdERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvYm9vdHN0cmFwLXNlbGVjdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3VzZXItcHJlZmVyZW5jZXMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyLXByZWZlcmVuY2VzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi91c2VyLXByZWZlcmVuY2VzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVXNlclByZWZlcmVuY2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgdGhlbWVTZWxlY3RvclRvZ2dsZSA9IHRydWU7XG5cbiAgICBsYW5ndWFnZUNoYW5nZWRTdWJzY3JpcHRpb246IGFueTtcblxuICAgIEBWaWV3Q2hpbGQoJ2xhbmd1YWdlU2VsZWN0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGxhbmd1YWdlU2VsZWN0b3I6IEJvb3RzdHJhcFNlbGVjdERpcmVjdGl2ZTtcblxuICAgIEBWaWV3Q2hpbGQoJ2hvbWVQYWdlU2VsZWN0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGhvbWVQYWdlU2VsZWN0b3I6IEJvb3RzdHJhcFNlbGVjdERpcmVjdGl2ZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHRyYW5zbGF0aW9uU2VydmljZTogQXBwVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSxcbiAgICAgICAgcHVibGljIHRoZW1lTWFuYWdlcjogVGhlbWVNYW5hZ2VyLFxuICAgICAgICBwdWJsaWMgY29uZmlndXJhdGlvbnM6IENvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VDaGFuZ2VkU3Vic2NyaXB0aW9uID0gdGhpcy50cmFuc2xhdGlvblNlcnZpY2UubGFuZ3VhZ2VDaGFuZ2VkJC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRoZW1lU2VsZWN0b3JUb2dnbGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZVNlbGVjdG9yLnJlZnJlc2goKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvbWVQYWdlU2VsZWN0b3IucmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgIHRoaXMudGhlbWVTZWxlY3RvclRvZ2dsZSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMubGFuZ3VhZ2VDaGFuZ2VkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG5cblxuICAgIHJlbG9hZEZyb21TZXJ2ZXIoKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0YXJ0TG9hZGluZ01lc3NhZ2UoKTtcblxuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmdldFVzZXJQcmVmZXJlbmNlcygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9ucy5pbXBvcnQocmVzdWx0cyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93TWVzc2FnZSgnRGVmYXVsdHMgbG9hZGVkIScsICcnLCBNZXNzYWdlU2V2ZXJpdHkuaW5mbyk7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ0xvYWQgRXJyb3InLCBgVW5hYmxlIHRvIHJldHJpZXZlIHVzZXIgcHJlZmVyZW5jZXMgZnJvbSB0aGUgc2VydmVyLlxcclxcbkVycm9yczogXCIke1V0aWxpdGllcy5nZXRIdHRwUmVzcG9uc2VNZXNzYWdlcyhlcnJvcil9XCJgLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0QXNEZWZhdWx0KCkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93RGlhbG9nKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gc2V0IHRoZSBjdXJyZW50IGNvbmZpZ3VyYXRpb24gYXMgeW91ciBuZXcgZGVmYXVsdHM/JywgRGlhbG9nVHlwZS5jb25maXJtLFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5zZXRBc0RlZmF1bHRIZWxwZXIoKSxcbiAgICAgICAgICAgICgpID0+IHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdPcGVyYXRpb24gQ2FuY2VsbGVkIScsICcnLCBNZXNzYWdlU2V2ZXJpdHkuZGVmYXVsdCkpO1xuICAgIH1cblxuICAgIHNldEFzRGVmYXVsdEhlbHBlcigpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RhcnRMb2FkaW5nTWVzc2FnZSgnJywgJ1NhdmluZyBuZXcgZGVmYXVsdHMnKTtcblxuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLnVwZGF0ZVVzZXJQcmVmZXJlbmNlcyh0aGlzLmNvbmZpZ3VyYXRpb25zLmV4cG9ydCgpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ05ldyBEZWZhdWx0cycsICdBY2NvdW50IGRlZmF1bHRzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5JywgTWVzc2FnZVNldmVyaXR5LnN1Y2Nlc3MpO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdTYXZlIEVycm9yJywgYEFuIGVycm9yIG9jY3VyZWQgd2hpbHN0IHNhdmluZyBjb25maWd1cmF0aW9uIGRlZmF1bHRzLlxcclxcbkVycm9yczogXCIke1V0aWxpdGllcy5nZXRIdHRwUmVzcG9uc2VNZXNzYWdlcyhlcnJvcil9XCJgLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIHJlc2V0RGVmYXVsdCgpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd0RpYWxvZygnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlc2V0IHlvdXIgZGVmYXVsdHM/JywgRGlhbG9nVHlwZS5jb25maXJtLFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5yZXNldERlZmF1bHRIZWxwZXIoKSxcbiAgICAgICAgICAgICgpID0+IHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdPcGVyYXRpb24gQ2FuY2VsbGVkIScsICcnLCBNZXNzYWdlU2V2ZXJpdHkuZGVmYXVsdCkpO1xuICAgIH1cblxuICAgIHJlc2V0RGVmYXVsdEhlbHBlcigpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RhcnRMb2FkaW5nTWVzc2FnZSgnJywgJ1Jlc2V0dGluZyBkZWZhdWx0cycpO1xuXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UudXBkYXRlVXNlclByZWZlcmVuY2VzKG51bGwpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25zLmltcG9ydChudWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93TWVzc2FnZSgnRGVmYXVsdHMgUmVzZXQnLCAnQWNjb3VudCBkZWZhdWx0cyByZXNldCBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5JywgTWVzc2FnZVNldmVyaXR5LnN1Y2Nlc3MpO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdTYXZlIEVycm9yJywgYEFuIGVycm9yIG9jY3VyZWQgd2hpbHN0IHJlc2V0dGluZyBjb25maWd1cmF0aW9uIGRlZmF1bHRzLlxcclxcbkVycm9yczogXCIke1V0aWxpdGllcy5nZXRIdHRwUmVzcG9uc2VNZXNzYWdlcyhlcnJvcil9XCJgLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBnZXQgY2FuVmlld0N1c3RvbWVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudFNlcnZpY2UudXNlckhhc1Blcm1pc3Npb24oUGVybWlzc2lvbi52aWV3VXNlcnNQZXJtaXNzaW9uKTsgLy8gZWcuIHZpZXdDdXN0b21lcnNQZXJtaXNzaW9uXG4gICAgfVxuXG4gICAgZ2V0IGNhblZpZXdQcm9kdWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudFNlcnZpY2UudXNlckhhc1Blcm1pc3Npb24oUGVybWlzc2lvbi52aWV3VXNlcnNQZXJtaXNzaW9uKTsgLy8gZWcuIHZpZXdQcm9kdWN0c1Blcm1pc3Npb25cbiAgICB9XG5cbiAgICBnZXQgY2FuVmlld09yZGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIGVnLiB2aWV3T3JkZXJzUGVybWlzc2lvblxuICAgIH1cbn1cbiIsIjxkaXY+XG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJyZWZyZXNoQnV0dG9uXCIgY2xhc3M9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiPnt7J3ByZWZlcmVuY2VzLlJlbG9hZFByZWZlcmVuY2VzJyB8IHRyYW5zbGF0ZX19IDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInJlZnJlc2hCdXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIiAoY2xpY2spPVwicmVsb2FkRnJvbVNlcnZlcigpXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1yZWZyZXNoXCI+PC9pPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTVcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9ybS1jb250cm9sLXBsYWludGV4dCB0ZXh0LW11dGVkIHNtYWxsXCI+e3sncHJlZmVyZW5jZXMuUmVsb2FkUHJlZmVyZW5jZXNIaW50JyB8IHRyYW5zbGF0ZX19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgPGhyIGNsYXNzPVwic2VwYXJhdG9yLWhyXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImxhbmd1YWdlXCIgY2xhc3M9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiPnt7J3ByZWZlcmVuY2VzLkxhbmd1YWdlJyB8IHRyYW5zbGF0ZX19IDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cImxhbmd1YWdlXCIgWyhuZ01vZGVsKV09XCJjb25maWd1cmF0aW9ucy5sYW5ndWFnZVwiICNsYW5ndWFnZVNlbGVjdG9yPVwiYm9vdHN0cmFwLXNlbGVjdFwiIGJvb3RzdHJhcFNlbGVjdCBjbGFzcz1cInNlbGVjdHBpY2tlciBmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIGRhdGEtc3VidGV4dD1cIihEZWZhdWx0KVwiIHZhbHVlPVwiZW5cIj57eydwcmVmZXJlbmNlcy5FbmdsaXNoJyB8IHRyYW5zbGF0ZX19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImZyXCI+e3sncHJlZmVyZW5jZXMuRnJlbmNoJyB8IHRyYW5zbGF0ZX19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRlXCI+e3sncHJlZmVyZW5jZXMuR2VybWFuJyB8IHRyYW5zbGF0ZX19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInB0XCI+e3sncHJlZmVyZW5jZXMuUG9ydHVndWVzZScgfCB0cmFuc2xhdGV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhclwiPnt7J3ByZWZlcmVuY2VzLkFyYWJpYycgfCB0cmFuc2xhdGV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJrb1wiPnt7J3ByZWZlcmVuY2VzLktvcmVhbicgfCB0cmFuc2xhdGV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTVcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9ybS1jb250cm9sLXBsYWludGV4dCB0ZXh0LW11dGVkIHNtYWxsXCI+e3sncHJlZmVyZW5jZXMuTGFuZ3VhZ2VIaW50JyB8IHRyYW5zbGF0ZX19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgPGhyIGNsYXNzPVwic2VwYXJhdG9yLWhyXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cImhvbWVQYWdlXCIgY2xhc3M9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiPnt7J3ByZWZlcmVuY2VzLkhvbWVQYWdlJyB8IHRyYW5zbGF0ZX19IDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cImhvbWVQYWdlXCIgWyhuZ01vZGVsKV09XCJjb25maWd1cmF0aW9ucy5ob21lVXJsXCIgI2hvbWVQYWdlU2VsZWN0b3I9XCJib290c3RyYXAtc2VsZWN0XCIgYm9vdHN0cmFwU2VsZWN0IGNsYXNzPVwic2VsZWN0cGlja2VyIGZvcm0tY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gZGF0YS1pY29uPVwiZmEgZmEtdGFjaG9tZXRlclwiIGRhdGEtc3VidGV4dD1cIihEZWZhdWx0KVwiIHZhbHVlPVwiL1wiPnt7J3ByZWZlcmVuY2VzLkRhc2hib2FyZCcgfCB0cmFuc2xhdGV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nSWY9XCJjYW5WaWV3Q3VzdG9tZXJzXCIgZGF0YS1pY29uPVwiZmEgZmEtaGFuZHNoYWtlLW9cIiB2YWx1ZT1cIi9jdXN0b21lcnNcIj57eydwcmVmZXJlbmNlcy5DdXN0b21lcnMnIHwgdHJhbnNsYXRlfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0lmPVwiY2FuVmlld1Byb2R1Y3RzXCIgZGF0YS1pY29uPVwiZmEgZmEtdHJ1Y2tcIiB2YWx1ZT1cIi9wcm9kdWN0c1wiPnt7J3ByZWZlcmVuY2VzLlByb2R1Y3RzJyB8IHRyYW5zbGF0ZX19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdJZj1cImNhblZpZXdPcmRlcnNcIiBkYXRhLWljb249XCJmYSBmYS1zaG9wcGluZy1jYXJ0XCIgdmFsdWU9XCIvb3JkZXJzXCI+e3sncHJlZmVyZW5jZXMuT3JkZXJzJyB8IHRyYW5zbGF0ZX19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiBkYXRhLWljb249XCJmYSBmYS1pbmZvLWNpcmNsZVwiIHZhbHVlPVwiL2Fib3V0XCI+e3sncHJlZmVyZW5jZXMuQWJvdXQnIHwgdHJhbnNsYXRlfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIGRhdGEtaWNvbj1cImZhIGZhLWNvZ1wiIHZhbHVlPVwiL3NldHRpbmdzXCI+e3sncHJlZmVyZW5jZXMuU2V0dGluZ3MnIHwgdHJhbnNsYXRlfX08L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS01XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImZvcm0tY29udHJvbC1wbGFpbnRleHQgdGV4dC1tdXRlZCBzbWFsbFwiPnt7J3ByZWZlcmVuY2VzLkhvbWVQYWdlSGludCcgfCB0cmFuc2xhdGV9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgIDxociBjbGFzcz1cInNlcGFyYXRvci1oclwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJkZWZhdWx0VGhlbWVcIiBjbGFzcz1cImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXCI+e3sncHJlZmVyZW5jZXMuVGhlbWUnIHwgdHJhbnNsYXRlfX0gPC9sYWJlbD5cbiAgICAgICAgPGRpdiAqbmdJZj1cInRoZW1lU2VsZWN0b3JUb2dnbGVcIiBjbGFzcz1cImNvbC1zbS00XCI+XG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwiZGVmYXVsdFRoZW1lXCIgWyhuZ01vZGVsKV09XCJjb25maWd1cmF0aW9ucy50aGVtZUlkXCIgYm9vdHN0cmFwU2VsZWN0IGNsYXNzPVwic2VsZWN0cGlja2VyIHRoZW1lLXBpY2tlciBmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCB0aGVtZSBvZiB0aGVtZU1hbmFnZXIudGhlbWVzXCJcbiAgICAgICAgICAgICAgICBhdHRyLmRhdGEtY29udGVudD1cIjxkaXYgY2xhc3M9J3RoZW1lLWl0ZW0nIHN0eWxlPSdiYWNrZ3JvdW5kLWNvbG9yOiB7e3RoZW1lLmJhY2tncm91bmR9fTsgY29sb3I6IHt7dGhlbWUuY29sb3J9fSc+e3sncHJlZmVyZW5jZXMuJyArIHRoZW1lLm5hbWUgKyAnVGhlbWUnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nc21hbGwnPnt7dGhlbWUuaXNEYXJrID8gJyhEYXJrKScgOiAnJ319PC9zcGFuPjwvZGl2PlwiPlxuICAgICAgICAgICAgICAgIHt7dGhlbWUuaWR9fVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTVcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9ybS1jb250cm9sLXBsYWludGV4dCB0ZXh0LW11dGVkIHNtYWxsXCI+e3sncHJlZmVyZW5jZXMuVGhlbWVIaW50JyB8IHRyYW5zbGF0ZX19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgPGhyIGNsYXNzPVwic2VwYXJhdG9yLWhyXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTMgY29sLWZvcm0tbGFiZWxcIiBmb3I9XCJkYXNoYm9hcmRTdGF0aXN0aWNzXCI+e3sncHJlZmVyZW5jZXMuRGFzaGJvYXJkU3RhdGlzdGljcycgfCB0cmFuc2xhdGV9fSA8L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZGFzaGJvYXJkU3RhdGlzdGljc1wiIFsobmdNb2RlbCldPVwiY29uZmlndXJhdGlvbnMuc2hvd0Rhc2hib2FyZFN0YXRpc3RpY3NcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJjaGVja2JveFwiIGJvb3RzdHJhcFRvZ2dsZSBkYXRhLXNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTVcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9ybS1jb250cm9sLXBsYWludGV4dCB0ZXh0LW11dGVkIHNtYWxsXCI+e3sncHJlZmVyZW5jZXMuRGFzaGJvYXJkU3RhdGlzdGljc0hpbnQnIHwgdHJhbnNsYXRlfX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwhLS0gIC0tPlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICA8aHIgY2xhc3M9XCJzdWJzZXBhcmF0b3ItaHJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiIGZvcj1cImRhc2hib2FyZFRvZG9cIj57eydwcmVmZXJlbmNlcy5EYXNoYm9hcmROb3RpZmljYXRpb25zJyB8IHRyYW5zbGF0ZX19IDwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJkYXNoYm9hcmROb3RpZmljYXRpb25zXCIgWyhuZ01vZGVsKV09XCJjb25maWd1cmF0aW9ucy5zaG93RGFzaGJvYXJkTm90aWZpY2F0aW9uc1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cImNoZWNrYm94XCIgYm9vdHN0cmFwVG9nZ2xlIGRhdGEtc2l6ZT1cInNtYWxsXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJmb3JtLWNvbnRyb2wtcGxhaW50ZXh0IHRleHQtbXV0ZWQgc21hbGxcIj57eydwcmVmZXJlbmNlcy5EYXNoYm9hcmROb3RpZmljYXRpb25zSGludCcgfCB0cmFuc2xhdGV9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPCEtLSAgLS0+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgIDxociBjbGFzcz1cInN1YnNlcGFyYXRvci1oclwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1zbS0zIGNvbC1mb3JtLWxhYmVsXCIgZm9yPVwiZGFzaGJvYXJkVG9kb1wiPnt7J3ByZWZlcmVuY2VzLkRhc2hib2FyZFRvZG8nIHwgdHJhbnNsYXRlfX0gPC9sYWJlbD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cImRhc2hib2FyZFRvZG9cIiBbKG5nTW9kZWwpXT1cImNvbmZpZ3VyYXRpb25zLnNob3dEYXNoYm9hcmRUb2RvXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwiY2hlY2tib3hcIiBib290c3RyYXBUb2dnbGUgZGF0YS1zaXplPVwic21hbGxcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS01XCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImZvcm0tY29udHJvbC1wbGFpbnRleHQgdGV4dC1tdXRlZCBzbWFsbFwiPnt7J3ByZWZlcmVuY2VzLkRhc2hib2FyZFRvZG9IaW50JyB8IHRyYW5zbGF0ZX19PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8IS0tICAtLT5cblxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICA8aHIgY2xhc3M9XCJzdWJzZXBhcmF0b3ItaHJcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMyBjb2wtZm9ybS1sYWJlbFwiIGZvcj1cImRhc2hib2FyZEJhbm5lclwiPnt7J3ByZWZlcmVuY2VzLkRhc2hib2FyZEJhbm5lcicgfCB0cmFuc2xhdGV9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJkYXNoYm9hcmRCYW5uZXJcIiBbKG5nTW9kZWwpXT1cImNvbmZpZ3VyYXRpb25zLnNob3dEYXNoYm9hcmRCYW5uZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJjaGVja2JveFwiIGJvb3RzdHJhcFRvZ2dsZSBkYXRhLXNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTVcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZm9ybS1jb250cm9sLXBsYWludGV4dCB0ZXh0LW11dGVkIHNtYWxsXCI+e3sncHJlZmVyZW5jZXMuRGFzaGJvYXJkQmFubmVySGludCcgfCB0cmFuc2xhdGV9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPCEtLSAgLS0+XG5cblxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICA8aHIgY2xhc3M9XCJsYXN0LXNlcGFyYXRvci1oclwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS05XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZsb2F0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgY29sLXJlc2V0LWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInJlc2V0RGVmYXVsdCgpXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPSdmYSBmYS1jaXJjbGUtby1ub3RjaCc+PC9pPiB7eydwcmVmZXJlbmNlcy5SZXNldERlZmF1bHQnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGNvbC1zZXQtZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwic2V0QXNEZWZhdWx0KClcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9J2ZhIGZhLWhkZC1vJz48L2k+IHt7J3ByZWZlcmVuY2VzLlNldERlZmF1bHQnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==