import { __read, __spread, __values } from "tslib";
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, ViewChild } from '@angular/core';
import { DialogType, MessageSeverity, Utilities } from '@polpware/ngx-appkit-contracts-alpha';
import { Permission, User } from '@polpware/ngx-oauth2';
import { Role } from '../../models/role.model';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-appkit-services-alpha";
import * as i2 from "../../services/account.service";
import * as i3 from "../search-box/search-box.component";
import * as i4 from "@angular/common";
import * as i5 from "@swimlane/ngx-datatable";
import * as i6 from "ngx-bootstrap/modal";
import * as i7 from "../user-info/user-info.component";
import * as i8 from "@ngx-translate/core";
var _c0 = ["indexTemplate"];
var _c1 = ["userNameTemplate"];
var _c2 = ["rolesTemplate"];
var _c3 = ["actionsTemplate"];
var _c4 = ["editorModal"];
var _c5 = ["userEditor"];
function UsersManagementComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    var _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 23);
    i0.ɵɵelementStart(1, "a", 24);
    i0.ɵɵlistener("click", function UsersManagementComponent_li_9_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r14); var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.newUser(); });
    i0.ɵɵelement(2, "i", 25);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 1, "users.management.NewUser"), " ");
} }
function UsersManagementComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var value_r15 = ctx.value;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(value_r15);
} }
function UsersManagementComponent_ng_template_13_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 28);
} }
function UsersManagementComponent_ng_template_13_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 29);
} }
function UsersManagementComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, UsersManagementComponent_ng_template_13_i_1_Template, 1, 0, "i", 26);
    i0.ɵɵtemplate(2, UsersManagementComponent_ng_template_13_i_2_Template, 1, 0, "i", 27);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r16 = ctx.row;
    var value_r17 = ctx.value;
    i0.ɵɵclassProp("locked-out", row_r16.isLockedOut)("user-disabled", !row_r16.isEnabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r16.isLockedOut);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r16.isEnabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", value_r17, " ");
} }
function UsersManagementComponent_ng_template_15_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var role_r24 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(role_r24);
} }
function UsersManagementComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, UsersManagementComponent_ng_template_15_span_0_Template, 2, 1, "span", 30);
} if (rf & 2) {
    var value_r21 = ctx.value;
    i0.ɵɵproperty("ngForOf", value_r21);
} }
function UsersManagementComponent_ng_template_17_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "a", 33);
    i0.ɵɵlistener("click", function UsersManagementComponent_ng_template_17_div_0_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r31); var row_r25 = i0.ɵɵnextContext().row; var ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.editUser(row_r25); });
    i0.ɵɵelement(2, "i", 34);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, "| ");
    i0.ɵɵelementStart(6, "a", 33);
    i0.ɵɵlistener("click", function UsersManagementComponent_ng_template_17_div_0_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r31); var row_r25 = i0.ɵɵnextContext().row; var ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.deleteUser(row_r25); });
    i0.ɵɵelement(7, "i", 35);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 2, "users.management.Edit"), "");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(9, 4, "users.management.Delete"), "");
} }
function UsersManagementComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, UsersManagementComponent_ng_template_17_div_0_Template, 10, 6, "div", 32);
} if (rf & 2) {
    var ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r8.canManageUsers);
} }
function UsersManagementComponent_h4_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 36);
    i0.ɵɵelement(1, "i", 37);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, "users.management.NewUser"), "");
} }
function UsersManagementComponent_h4_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 36);
    i0.ɵɵelement(1, "i", 38);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(3, 1, "users.management.EditUser", ctx_r11.editingUserName), "");
} }
var _c6 = function () { return { backdrop: "static" }; };
var UsersManagementComponent = /** @class */ (function () {
    function UsersManagementComponent(alertService, translationService, accountService) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.columns = [];
        this.rows = [];
        this.rowsCache = [];
        this.allRoles = [];
    }
    UsersManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        var gT = function (key) { return _this.translationService.getTranslation(key); };
        this.columns = [
            { prop: 'index', name: '#', width: 40, cellTemplate: this.indexTemplate, canAutoResize: false },
            { prop: 'jobTitle', name: gT('users.management.Title'), width: 50 },
            { prop: 'userName', name: gT('users.management.UserName'), width: 90, cellTemplate: this.userNameTemplate },
            { prop: 'fullName', name: gT('users.management.FullName'), width: 120 },
            { prop: 'email', name: gT('users.management.Email'), width: 140 },
            { prop: 'roles', name: gT('users.management.Roles'), width: 120, cellTemplate: this.rolesTemplate },
            { prop: 'phoneNumber', name: gT('users.management.PhoneNumber'), width: 100 }
        ];
        if (this.canManageUsers) {
            this.columns.push({ name: '', width: 160, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false });
        }
        this.loadData();
    };
    UsersManagementComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.userEditor.changesSavedCallback = function () {
            _this.addNewUserToList();
            _this.editorModal.hide();
        };
        this.userEditor.changesCancelledCallback = function () {
            _this.editedUser = null;
            _this.sourceUser = null;
            _this.editorModal.hide();
        };
    };
    UsersManagementComponent.prototype.addNewUserToList = function () {
        var e_1, _a;
        if (this.sourceUser) {
            Object.assign(this.sourceUser, this.editedUser);
            var sourceIndex = this.rowsCache.indexOf(this.sourceUser, 0);
            if (sourceIndex > -1) {
                Utilities.moveArrayItem(this.rowsCache, sourceIndex, 0);
            }
            sourceIndex = this.rows.indexOf(this.sourceUser, 0);
            if (sourceIndex > -1) {
                Utilities.moveArrayItem(this.rows, sourceIndex, 0);
            }
            this.editedUser = null;
            this.sourceUser = null;
        }
        else {
            var user = new User();
            Object.assign(user, this.editedUser);
            this.editedUser = null;
            var maxIndex = 0;
            try {
                for (var _b = __values(this.rowsCache), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var u = _c.value;
                    if (u.index > maxIndex) {
                        maxIndex = u.index;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            user.index = maxIndex + 1;
            this.rowsCache.splice(0, 0, user);
            this.rows.splice(0, 0, user);
            this.rows = __spread(this.rows);
        }
    };
    UsersManagementComponent.prototype.loadData = function () {
        var _this = this;
        this.alertService.startLoadingMessage();
        this.loadingIndicator = true;
        if (this.canViewRoles) {
            this.accountService.getUsersAndRoles().subscribe(function (results) { return _this.onDataLoadSuccessful(results[0], results[1]); }, function (error) { return _this.onDataLoadFailed(error); });
        }
        else {
            this.accountService.getUsers().subscribe(function (users) { return _this.onDataLoadSuccessful(users, _this.accountService.currentUser.roles.map(function (x) { return new Role(x); })); }, function (error) { return _this.onDataLoadFailed(error); });
        }
    };
    UsersManagementComponent.prototype.onDataLoadSuccessful = function (users, roles) {
        this.alertService.stopLoadingMessage();
        this.loadingIndicator = false;
        users.forEach(function (user, index, users) {
            user.index = index + 1;
        });
        this.rowsCache = __spread(users);
        this.rows = users;
        this.allRoles = roles;
    };
    UsersManagementComponent.prototype.onDataLoadFailed = function (error) {
        this.alertService.stopLoadingMessage();
        this.loadingIndicator = false;
        this.alertService.showStickyMessage('Load Error', "Unable to retrieve users from the server.\r\nErrors: \"" + Utilities.getHttpResponseMessages(error) + "\"", MessageSeverity.error, error);
    };
    UsersManagementComponent.prototype.onSearchChanged = function (value) {
        this.rows = this.rowsCache.filter(function (r) { return Utilities.searchArray(value, false, r.userName, r.fullName, r.email, r.phoneNumber, r.jobTitle, r.roles); });
    };
    UsersManagementComponent.prototype.onEditorModalHidden = function () {
        this.editingUserName = null;
        this.userEditor.resetForm(true);
    };
    UsersManagementComponent.prototype.newUser = function () {
        this.editingUserName = null;
        this.sourceUser = null;
        this.editedUser = this.userEditor.newUser(this.allRoles);
        this.editorModal.show();
    };
    UsersManagementComponent.prototype.editUser = function (row) {
        this.editingUserName = { name: row.userName };
        this.sourceUser = row;
        this.editedUser = this.userEditor.editUser(row, this.allRoles);
        this.editorModal.show();
    };
    UsersManagementComponent.prototype.deleteUser = function (row) {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to delete \"' + row.userName + '\"?', DialogType.confirm, function () { return _this.deleteUserHelper(row); });
    };
    UsersManagementComponent.prototype.deleteUserHelper = function (row) {
        var _this = this;
        this.alertService.startLoadingMessage('Deleting...');
        this.loadingIndicator = true;
        this.accountService.deleteUser(row)
            .subscribe(function (results) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.rowsCache = _this.rowsCache.filter(function (item) { return item !== row; });
            _this.rows = _this.rows.filter(function (item) { return item !== row; });
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.alertService.showStickyMessage('Delete Error', "An error occured whilst deleting the user.\r\nError: \"" + Utilities.getHttpResponseMessages(error) + "\"", MessageSeverity.error, error);
        });
    };
    Object.defineProperty(UsersManagementComponent.prototype, "canAssignRoles", {
        get: function () {
            return this.accountService.userHasPermission(Permission.assignRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersManagementComponent.prototype, "canViewRoles", {
        get: function () {
            return this.accountService.userHasPermission(Permission.viewRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersManagementComponent.prototype, "canManageUsers", {
        get: function () {
            return this.accountService.userHasPermission(Permission.manageUsersPermission);
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */ UsersManagementComponent.ɵfac = function UsersManagementComponent_Factory(t) { return new (t || UsersManagementComponent)(i0.ɵɵdirectiveInject(i1.AlertService), i0.ɵɵdirectiveInject(i1.AppTranslationService), i0.ɵɵdirectiveInject(i2.AccountService)); };
    /** @nocollapse */ UsersManagementComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UsersManagementComponent, selectors: [["users-management"]], viewQuery: function UsersManagementComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
            i0.ɵɵstaticViewQuery(_c1, true);
            i0.ɵɵstaticViewQuery(_c2, true);
            i0.ɵɵstaticViewQuery(_c3, true);
            i0.ɵɵstaticViewQuery(_c4, true);
            i0.ɵɵstaticViewQuery(_c5, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.indexTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.userNameTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.rolesTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.actionsTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.editorModal = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.userEditor = _t.first);
        } }, decls: 32, vars: 17, consts: [[1, "row", "control-box"], [1, "col-lg-8"], [1, "form-group", "search-box"], [3, "placeholder", "searchChange"], [1, "col-lg-4", "pr-lg-5"], [1, "nav", "flex-column", "flex-lg-row", "justify-content-end"], ["class", "nav-item toolbaritem", 4, "ngIf"], [1, "material", "colored-header", "sm", "table", "table-striped", "table-hover", 3, "loadingIndicator", "rows", "rowHeight", "headerHeight", "footerHeight", "columns", "scrollbarV", "columnMode"], ["indexTemplate", ""], ["userNameTemplate", ""], ["rolesTemplate", ""], ["actionsTemplate", ""], ["bsModal", "", "tabindex", "-1", 1, "modal", "fade", 3, "config", "onHidden"], ["editorModal", "bs-modal"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["class", "modal-title float-left", 4, "ngIf"], ["type", "button", "title", "Close", 1, "close", "float-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "isGeneralEditor"], ["userEditor", ""], [1, "nav-item", "toolbaritem"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "fa", "fa-plus-circle"], ["class", "fa fa-exclamation-triangle", 4, "ngIf"], ["class", "fa fa-exclamation", 4, "ngIf"], [1, "fa", "fa-exclamation-triangle"], [1, "fa", "fa-exclamation"], ["class", "user-role badge badge-pill badge-secondary", 4, "ngFor", "ngForOf"], [1, "user-role", "badge", "badge-pill", "badge-secondary"], [4, "ngIf"], ["href", "javascript:;", 1, "btn", "btn-link", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o"], ["aria-hidden", "true", 1, "fa", "fa-trash-o"], [1, "modal-title", "float-left"], [1, "fa", "fa-user-plus"], [1, "fa", "fa-user-circle-o"]], template: function UsersManagementComponent_Template(rf, ctx) { if (rf & 1) {
            var _r34 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵelementStart(4, "search-box", 3);
            i0.ɵɵlistener("searchChange", function UsersManagementComponent_Template_search_box_searchChange_4_listener($event) { return ctx.onSearchChanged($event); });
            i0.ɵɵpipe(5, "translate");
            i0.ɵɵtext(6, ">");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 4);
            i0.ɵɵelementStart(8, "ul", 5);
            i0.ɵɵtemplate(9, UsersManagementComponent_li_9_Template, 5, 3, "li", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "ngx-datatable", 7);
            i0.ɵɵtemplate(11, UsersManagementComponent_ng_template_11_Template, 2, 1, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(13, UsersManagementComponent_ng_template_13_Template, 4, 7, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(15, UsersManagementComponent_ng_template_15_Template, 1, 1, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(17, UsersManagementComponent_ng_template_17_Template, 1, 1, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(19, "div", 12, 13);
            i0.ɵɵlistener("onHidden", function UsersManagementComponent_Template_div_onHidden_19_listener() { return ctx.onEditorModalHidden(); });
            i0.ɵɵelementStart(21, "div", 14);
            i0.ɵɵelementStart(22, "div", 15);
            i0.ɵɵelementStart(23, "div", 16);
            i0.ɵɵtemplate(24, UsersManagementComponent_h4_24_Template, 4, 3, "h4", 17);
            i0.ɵɵtemplate(25, UsersManagementComponent_h4_25_Template, 4, 4, "h4", 17);
            i0.ɵɵelementStart(26, "button", 18);
            i0.ɵɵlistener("click", function UsersManagementComponent_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r34); var _r9 = i0.ɵɵreference(20); return _r9.hide(); });
            i0.ɵɵelementStart(27, "span", 19);
            i0.ɵɵtext(28, "\u00D7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 20);
            i0.ɵɵelement(30, "user-info", 21, 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(5, 14, "users.management.Search"));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.canManageUsers && ctx.canAssignRoles);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("loadingIndicator", ctx.loadingIndicator)("rows", ctx.rows)("rowHeight", 35)("headerHeight", 35)("footerHeight", 35)("columns", ctx.columns)("scrollbarV", true)("columnMode", "force");
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("config", i0.ɵɵpureFunction0(16, _c6));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", !ctx.editingUserName);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.editingUserName);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("isGeneralEditor", true);
        } }, directives: [i3.SearchBoxComponent, i4.NgIf, i5.DatatableComponent, i6.ModalDirective, i7.UserInfoComponent, i4.NgForOf], pipes: [i8.TranslatePipe], styles: [".user-role[_ngcontent-%COMP%]{font-size:.8em!important;margin-right:1px}.control-box[_ngcontent-%COMP%]{margin-bottom:5px}.search-box[_ngcontent-%COMP%]{margin:0}.nav-item.toolbaritem[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-top:3px;padding-bottom:3px;min-width:100px}.user-disabled[_ngcontent-%COMP%]{color:#777;font-style:italic}.locked-out[_ngcontent-%COMP%]{background-color:#ff4500;color:#f5f5f5;width:100%;display:inline-block;padding-left:5px}"] });
    return UsersManagementComponent;
}());
export { UsersManagementComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UsersManagementComponent, [{
        type: Component,
        args: [{
                selector: 'users-management',
                templateUrl: './users-management.component.html',
                styleUrls: ['./users-management.component.scss']
            }]
    }], function () { return [{ type: i1.AlertService }, { type: i1.AppTranslationService }, { type: i2.AccountService }]; }, { indexTemplate: [{
            type: ViewChild,
            args: ['indexTemplate', { static: true }]
        }], userNameTemplate: [{
            type: ViewChild,
            args: ['userNameTemplate', { static: true }]
        }], rolesTemplate: [{
            type: ViewChild,
            args: ['rolesTemplate', { static: true }]
        }], actionsTemplate: [{
            type: ViewChild,
            args: ['actionsTemplate', { static: true }]
        }], editorModal: [{
            type: ViewChild,
            args: ['editorModal', { static: true }]
        }], userEditor: [{
            type: ViewChild,
            args: ['userEditor', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMtbWFuYWdlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXNlcnMtbWFuYWdlbWVudC91c2Vycy1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3VzZXJzLW1hbmFnZW1lbnQvdXNlcnMtbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBRWhDLE9BQU8sRUFBRSxTQUFTLEVBQXNDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUdoRyxPQUFPLEVBQ0gsVUFBVSxFQUFFLGVBQWUsRUFDM0IsU0FBUyxFQUNaLE1BQU0sc0NBQXNDLENBQUM7QUFPOUMsT0FBTyxFQUNILFVBQVUsRUFDVixJQUFJLEVBQ1AsTUFBTSxzQkFBc0IsQ0FBQztBQUc5QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2Z2Qyw4QkFDRTtJQUFBLDZCQUNFO0lBRHNDLG9MQUFtQjtJQUN6RCx3QkFBaUM7SUFBQyxZQUNwQzs7SUFBQSxpQkFBSTtJQUNOLGlCQUFLOztJQUZpQyxlQUNwQztJQURvQyxpRkFDcEM7OztJQWtCTiw4QkFBUTtJQUFBLFlBQVM7SUFBQSxpQkFBUzs7O0lBQWxCLGVBQVM7SUFBVCwrQkFBUzs7O0lBS2Ysd0JBQW1FOzs7SUFDbkUsd0JBQXlEOzs7SUFGM0QsNEJBQ0U7SUFBQSxxRkFBK0Q7SUFDL0QscUZBQXFEO0lBQ3JELFlBQ0Y7SUFBQSxpQkFBTzs7OztJQUpELGlEQUFvQyxxQ0FBQTtJQUNyQyxlQUF1QjtJQUF2QiwwQ0FBdUI7SUFDdkIsZUFBc0I7SUFBdEIseUNBQXNCO0lBQ3pCLGVBQ0Y7SUFERSww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LEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRzdDLFNBQVM7bUJBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBR3pDLFNBQVM7bUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuXG5pbXBvcnQge1xuICAgIERpYWxvZ1R5cGUsIE1lc3NhZ2VTZXZlcml0eSxcbiAgICBVdGlsaXRpZXNcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBBbGVydFNlcnZpY2UsXG4gICAgQXBwVHJhbnNsYXRpb25TZXJ2aWNlXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXNlcnZpY2VzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBQZXJtaXNzaW9uLFxuICAgIFVzZXJcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1vYXV0aDInO1xuXG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjY291bnQuc2VydmljZSc7XG5pbXBvcnQgeyBSb2xlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3JvbGUubW9kZWwnO1xuaW1wb3J0IHsgVXNlckVkaXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdXNlci1lZGl0Lm1vZGVsJztcbmltcG9ydCB7IFVzZXJJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi4vdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndXNlcnMtbWFuYWdlbWVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3VzZXJzLW1hbmFnZW1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3VzZXJzLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVc2Vyc01hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIGNvbHVtbnM6IGFueVtdID0gW107XG4gICAgcm93czogVXNlcltdID0gW107XG4gICAgcm93c0NhY2hlOiBVc2VyW10gPSBbXTtcbiAgICBlZGl0ZWRVc2VyOiBVc2VyRWRpdDtcbiAgICBzb3VyY2VVc2VyOiBVc2VyRWRpdDtcbiAgICBlZGl0aW5nVXNlck5hbWU6IHsgbmFtZTogc3RyaW5nIH07XG4gICAgbG9hZGluZ0luZGljYXRvcjogYm9vbGVhbjtcblxuICAgIGFsbFJvbGVzOiBSb2xlW10gPSBbXTtcblxuXG4gICAgQFZpZXdDaGlsZCgnaW5kZXhUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgaW5kZXhUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ3VzZXJOYW1lVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHVzZXJOYW1lVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdyb2xlc1RlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICByb2xlc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnYWN0aW9uc1RlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBhY3Rpb25zVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdlZGl0b3JNb2RhbCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgZWRpdG9yTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xuXG4gICAgQFZpZXdDaGlsZCgndXNlckVkaXRvcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgdXNlckVkaXRvcjogVXNlckluZm9Db21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLCBwcml2YXRlIHRyYW5zbGF0aW9uU2VydmljZTogQXBwVHJhbnNsYXRpb25TZXJ2aWNlLCBwcml2YXRlIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSkge1xuICAgIH1cblxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgY29uc3QgZ1QgPSAoa2V5OiBzdHJpbmcpID0+IHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGtleSk7XG5cbiAgICAgICAgdGhpcy5jb2x1bW5zID0gW1xuICAgICAgICAgICAgeyBwcm9wOiAnaW5kZXgnLCBuYW1lOiAnIycsIHdpZHRoOiA0MCwgY2VsbFRlbXBsYXRlOiB0aGlzLmluZGV4VGVtcGxhdGUsIGNhbkF1dG9SZXNpemU6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHByb3A6ICdqb2JUaXRsZScsIG5hbWU6IGdUKCd1c2Vycy5tYW5hZ2VtZW50LlRpdGxlJyksIHdpZHRoOiA1MCB9LFxuICAgICAgICAgICAgeyBwcm9wOiAndXNlck5hbWUnLCBuYW1lOiBnVCgndXNlcnMubWFuYWdlbWVudC5Vc2VyTmFtZScpLCB3aWR0aDogOTAsIGNlbGxUZW1wbGF0ZTogdGhpcy51c2VyTmFtZVRlbXBsYXRlIH0sXG4gICAgICAgICAgICB7IHByb3A6ICdmdWxsTmFtZScsIG5hbWU6IGdUKCd1c2Vycy5tYW5hZ2VtZW50LkZ1bGxOYW1lJyksIHdpZHRoOiAxMjAgfSxcbiAgICAgICAgICAgIHsgcHJvcDogJ2VtYWlsJywgbmFtZTogZ1QoJ3VzZXJzLm1hbmFnZW1lbnQuRW1haWwnKSwgd2lkdGg6IDE0MCB9LFxuICAgICAgICAgICAgeyBwcm9wOiAncm9sZXMnLCBuYW1lOiBnVCgndXNlcnMubWFuYWdlbWVudC5Sb2xlcycpLCB3aWR0aDogMTIwLCBjZWxsVGVtcGxhdGU6IHRoaXMucm9sZXNUZW1wbGF0ZSB9LFxuICAgICAgICAgICAgeyBwcm9wOiAncGhvbmVOdW1iZXInLCBuYW1lOiBnVCgndXNlcnMubWFuYWdlbWVudC5QaG9uZU51bWJlcicpLCB3aWR0aDogMTAwIH1cbiAgICAgICAgXTtcblxuICAgICAgICBpZiAodGhpcy5jYW5NYW5hZ2VVc2Vycykge1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goeyBuYW1lOiAnJywgd2lkdGg6IDE2MCwgY2VsbFRlbXBsYXRlOiB0aGlzLmFjdGlvbnNUZW1wbGF0ZSwgcmVzaXplYWJsZTogZmFsc2UsIGNhbkF1dG9SZXNpemU6IGZhbHNlLCBzb3J0YWJsZTogZmFsc2UsIGRyYWdnYWJsZTogZmFsc2UgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgfVxuXG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgICAgICAgdGhpcy51c2VyRWRpdG9yLmNoYW5nZXNTYXZlZENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGROZXdVc2VyVG9MaXN0KCk7XG4gICAgICAgICAgICB0aGlzLmVkaXRvck1vZGFsLmhpZGUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnVzZXJFZGl0b3IuY2hhbmdlc0NhbmNlbGxlZENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lZGl0ZWRVc2VyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc291cmNlVXNlciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmVkaXRvck1vZGFsLmhpZGUoKTtcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFkZE5ld1VzZXJUb0xpc3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnNvdXJjZVVzZXIpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zb3VyY2VVc2VyLCB0aGlzLmVkaXRlZFVzZXIpO1xuXG4gICAgICAgICAgICBsZXQgc291cmNlSW5kZXggPSB0aGlzLnJvd3NDYWNoZS5pbmRleE9mKHRoaXMuc291cmNlVXNlciwgMCk7XG4gICAgICAgICAgICBpZiAoc291cmNlSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIFV0aWxpdGllcy5tb3ZlQXJyYXlJdGVtKHRoaXMucm93c0NhY2hlLCBzb3VyY2VJbmRleCwgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNvdXJjZUluZGV4ID0gdGhpcy5yb3dzLmluZGV4T2YodGhpcy5zb3VyY2VVc2VyLCAwKTtcbiAgICAgICAgICAgIGlmIChzb3VyY2VJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgVXRpbGl0aWVzLm1vdmVBcnJheUl0ZW0odGhpcy5yb3dzLCBzb3VyY2VJbmRleCwgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZWRpdGVkVXNlciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZVVzZXIgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHVzZXIsIHRoaXMuZWRpdGVkVXNlcik7XG4gICAgICAgICAgICB0aGlzLmVkaXRlZFVzZXIgPSBudWxsO1xuXG4gICAgICAgICAgICBsZXQgbWF4SW5kZXggPSAwO1xuICAgICAgICAgICAgZm9yIChjb25zdCB1IG9mIHRoaXMucm93c0NhY2hlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh1IGFzIGFueSkuaW5kZXggPiBtYXhJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBtYXhJbmRleCA9ICh1IGFzIGFueSkuaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAodXNlciBhcyBhbnkpLmluZGV4ID0gbWF4SW5kZXggKyAxO1xuXG4gICAgICAgICAgICB0aGlzLnJvd3NDYWNoZS5zcGxpY2UoMCwgMCwgdXNlcik7XG4gICAgICAgICAgICB0aGlzLnJvd3Muc3BsaWNlKDAsIDAsIHVzZXIpO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gWy4uLnRoaXMucm93c107XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGxvYWREYXRhKCkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FuVmlld1JvbGVzKSB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmdldFVzZXJzQW5kUm9sZXMoKS5zdWJzY3JpYmUocmVzdWx0cyA9PiB0aGlzLm9uRGF0YUxvYWRTdWNjZXNzZnVsKHJlc3VsdHNbMF0sIHJlc3VsdHNbMV0pLCBlcnJvciA9PiB0aGlzLm9uRGF0YUxvYWRGYWlsZWQoZXJyb3IpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuZ2V0VXNlcnMoKS5zdWJzY3JpYmUodXNlcnMgPT4gdGhpcy5vbkRhdGFMb2FkU3VjY2Vzc2Z1bCh1c2VycywgdGhpcy5hY2NvdW50U2VydmljZS5jdXJyZW50VXNlci5yb2xlcy5tYXAoeCA9PiBuZXcgUm9sZSh4KSkpLCBlcnJvciA9PiB0aGlzLm9uRGF0YUxvYWRGYWlsZWQoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25EYXRhTG9hZFN1Y2Nlc3NmdWwodXNlcnM6IFVzZXJbXSwgcm9sZXM6IFJvbGVbXSkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG5cbiAgICAgICAgdXNlcnMuZm9yRWFjaCgodXNlciwgaW5kZXgsIHVzZXJzKSA9PiB7XG4gICAgICAgICAgICAodXNlciBhcyBhbnkpLmluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJvd3NDYWNoZSA9IFsuLi51c2Vyc107XG4gICAgICAgIHRoaXMucm93cyA9IHVzZXJzO1xuXG4gICAgICAgIHRoaXMuYWxsUm9sZXMgPSByb2xlcztcbiAgICB9XG5cblxuICAgIG9uRGF0YUxvYWRGYWlsZWQoZXJyb3I6IGFueSkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ0xvYWQgRXJyb3InLCBgVW5hYmxlIHRvIHJldHJpZXZlIHVzZXJzIGZyb20gdGhlIHNlcnZlci5cXHJcXG5FcnJvcnM6IFwiJHtVdGlsaXRpZXMuZ2V0SHR0cFJlc3BvbnNlTWVzc2FnZXMoZXJyb3IpfVwiYCxcbiAgICAgICAgICAgIE1lc3NhZ2VTZXZlcml0eS5lcnJvciwgZXJyb3IpO1xuICAgIH1cblxuXG4gICAgb25TZWFyY2hDaGFuZ2VkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5yb3dzQ2FjaGUuZmlsdGVyKHIgPT4gVXRpbGl0aWVzLnNlYXJjaEFycmF5KHZhbHVlLCBmYWxzZSwgci51c2VyTmFtZSwgci5mdWxsTmFtZSwgci5lbWFpbCwgci5waG9uZU51bWJlciwgci5qb2JUaXRsZSwgci5yb2xlcykpO1xuICAgIH1cblxuICAgIG9uRWRpdG9yTW9kYWxIaWRkZW4oKSB7XG4gICAgICAgIHRoaXMuZWRpdGluZ1VzZXJOYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy51c2VyRWRpdG9yLnJlc2V0Rm9ybSh0cnVlKTtcbiAgICB9XG5cblxuICAgIG5ld1VzZXIoKSB7XG4gICAgICAgIHRoaXMuZWRpdGluZ1VzZXJOYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5zb3VyY2VVc2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5lZGl0ZWRVc2VyID0gdGhpcy51c2VyRWRpdG9yLm5ld1VzZXIodGhpcy5hbGxSb2xlcyk7XG4gICAgICAgIHRoaXMuZWRpdG9yTW9kYWwuc2hvdygpO1xuICAgIH1cblxuXG4gICAgZWRpdFVzZXIocm93OiBVc2VyRWRpdCkge1xuICAgICAgICB0aGlzLmVkaXRpbmdVc2VyTmFtZSA9IHsgbmFtZTogcm93LnVzZXJOYW1lIH07XG4gICAgICAgIHRoaXMuc291cmNlVXNlciA9IHJvdztcbiAgICAgICAgdGhpcy5lZGl0ZWRVc2VyID0gdGhpcy51c2VyRWRpdG9yLmVkaXRVc2VyKHJvdywgdGhpcy5hbGxSb2xlcyk7XG4gICAgICAgIHRoaXMuZWRpdG9yTW9kYWwuc2hvdygpO1xuICAgIH1cblxuXG4gICAgZGVsZXRlVXNlcihyb3c6IFVzZXJFZGl0KSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dEaWFsb2coJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgXFxcIicgKyByb3cudXNlck5hbWUgKyAnXFxcIj8nLCBEaWFsb2dUeXBlLmNvbmZpcm0sICgpID0+IHRoaXMuZGVsZXRlVXNlckhlbHBlcihyb3cpKTtcbiAgICB9XG5cblxuICAgIGRlbGV0ZVVzZXJIZWxwZXIocm93OiBVc2VyRWRpdCkge1xuXG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0YXJ0TG9hZGluZ01lc3NhZ2UoJ0RlbGV0aW5nLi4uJyk7XG4gICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5kZWxldGVVc2VyKHJvdylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJvd3NDYWNoZSA9IHRoaXMucm93c0NhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHJvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5yb3dzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHJvdyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdEZWxldGUgRXJyb3InLCBgQW4gZXJyb3Igb2NjdXJlZCB3aGlsc3QgZGVsZXRpbmcgdGhlIHVzZXIuXFxyXFxuRXJyb3I6IFwiJHtVdGlsaXRpZXMuZ2V0SHR0cFJlc3BvbnNlTWVzc2FnZXMoZXJyb3IpfVwiYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXZlcml0eS5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICBnZXQgY2FuQXNzaWduUm9sZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRTZXJ2aWNlLnVzZXJIYXNQZXJtaXNzaW9uKFBlcm1pc3Npb24uYXNzaWduUm9sZXNQZXJtaXNzaW9uKTtcbiAgICB9XG5cbiAgICBnZXQgY2FuVmlld1JvbGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50U2VydmljZS51c2VySGFzUGVybWlzc2lvbihQZXJtaXNzaW9uLnZpZXdSb2xlc1Blcm1pc3Npb24pO1xuICAgIH1cblxuICAgIGdldCBjYW5NYW5hZ2VVc2VycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudFNlcnZpY2UudXNlckhhc1Blcm1pc3Npb24oUGVybWlzc2lvbi5tYW5hZ2VVc2Vyc1Blcm1pc3Npb24pO1xuICAgIH1cbn1cbiIsIjxkaXY+XG4gIDxkaXYgY2xhc3M9XCJyb3cgY29udHJvbC1ib3hcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLThcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNlYXJjaC1ib3hcIj5cbiAgICAgICAgPHNlYXJjaC1ib3ggKHNlYXJjaENoYW5nZSk9XCJvblNlYXJjaENoYW5nZWQoJGV2ZW50KVwiIHBsYWNlaG9sZGVyPVwie3sndXNlcnMubWFuYWdlbWVudC5TZWFyY2gnIHwgdHJhbnNsYXRlfX1cIj4+PC9zZWFyY2gtYm94PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1sZy00IHByLWxnLTVcIj5cbiAgICAgIDx1bCBjbGFzcz1cIm5hdiBmbGV4LWNvbHVtbiBmbGV4LWxnLXJvdyBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgIDxsaSAqbmdJZj1cImNhbk1hbmFnZVVzZXJzICYmIGNhbkFzc2lnblJvbGVzXCIgY2xhc3M9XCJuYXYtaXRlbSB0b29sYmFyaXRlbVwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiamF2YXNjcmlwdDo7XCIgKGNsaWNrKT1cIm5ld1VzZXIoKVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzLWNpcmNsZVwiPjwvaT4ge3sndXNlcnMubWFuYWdlbWVudC5OZXdVc2VyJyB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPG5neC1kYXRhdGFibGUgY2xhc3M9XCJtYXRlcmlhbCBjb2xvcmVkLWhlYWRlciBzbSB0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCJcbiAgICAgICAgICAgICAgICAgW2xvYWRpbmdJbmRpY2F0b3JdPVwibG9hZGluZ0luZGljYXRvclwiXG4gICAgICAgICAgICAgICAgIFtyb3dzXT1cInJvd3NcIlxuICAgICAgICAgICAgICAgICBbcm93SGVpZ2h0XT1cIjM1XCJcbiAgICAgICAgICAgICAgICAgW2hlYWRlckhlaWdodF09XCIzNVwiXG4gICAgICAgICAgICAgICAgIFtmb290ZXJIZWlnaHRdPVwiMzVcIlxuICAgICAgICAgICAgICAgICBbY29sdW1uc109XCJjb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgW3Njcm9sbGJhclZdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgIFtjb2x1bW5Nb2RlXT1cIidmb3JjZSdcIj5cbiAgPC9uZ3gtZGF0YXRhYmxlPlxuXG4gIDxuZy10ZW1wbGF0ZSAjaW5kZXhUZW1wbGF0ZSBsZXQtdmFsdWU9XCJ2YWx1ZVwiPlxuICAgIDxzdHJvbmc+e3t2YWx1ZX19PC9zdHJvbmc+XG4gIDwvbmctdGVtcGxhdGU+XG5cbiAgPG5nLXRlbXBsYXRlICN1c2VyTmFtZVRlbXBsYXRlIGxldC1yb3c9XCJyb3dcIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiPlxuICAgIDxzcGFuIFtjbGFzcy5sb2NrZWQtb3V0XT1cInJvdy5pc0xvY2tlZE91dFwiIFtjbGFzcy51c2VyLWRpc2FibGVkXT1cIiFyb3cuaXNFbmFibGVkXCI+XG4gICAgICA8aSAqbmdJZj1cInJvdy5pc0xvY2tlZE91dFwiIGNsYXNzPVwiZmEgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIj4gPC9pPlxuICAgICAgPGkgKm5nSWY9XCIhcm93LmlzRW5hYmxlZFwiIGNsYXNzPVwiZmEgZmEtZXhjbGFtYXRpb25cIj4gPC9pPlxuICAgICAge3t2YWx1ZX19XG4gICAgPC9zcGFuPlxuICA8L25nLXRlbXBsYXRlPlxuXG4gIDxuZy10ZW1wbGF0ZSAjcm9sZXNUZW1wbGF0ZSBsZXQtcm93PVwicm93XCIgbGV0LXZhbHVlPVwidmFsdWVcIiBsZXQtaT1cImluZGV4XCI+XG4gICAgPHNwYW4gY2xhc3M9XCJ1c2VyLXJvbGUgYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1zZWNvbmRhcnlcIiAqbmdGb3I9XCJsZXQgcm9sZSBvZiB2YWx1ZVwiPnt7cm9sZX19PC9zcGFuPlxuICA8L25nLXRlbXBsYXRlPlxuXG4gIDxuZy10ZW1wbGF0ZSAjYWN0aW9uc1RlbXBsYXRlIGxldC1yb3c9XCJyb3dcIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiIGxldC1pPVwiaW5kZXhcIj5cbiAgICA8ZGl2ICpuZ0lmPVwiY2FuTWFuYWdlVXNlcnNcIj5cbiAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiAoY2xpY2spPVwiZWRpdFVzZXIocm93KVwiPjxpIGNsYXNzPVwiZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiB7eyd1c2Vycy5tYW5hZ2VtZW50LkVkaXQnIHwgdHJhbnNsYXRlfX08L2E+fFxuICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLWxpbmsgYnRuLXNtXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiIChjbGljayk9XCJkZWxldGVVc2VyKHJvdylcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IHt7J3VzZXJzLm1hbmFnZW1lbnQuRGVsZXRlJyB8IHRyYW5zbGF0ZX19PC9hPlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuXG5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIiBic01vZGFsICNlZGl0b3JNb2RhbD1cImJzLW1vZGFsXCIgKG9uSGlkZGVuKT1cIm9uRWRpdG9yTW9kYWxIaWRkZW4oKVwiIFtjb25maWddPVwie2JhY2tkcm9wOiAnc3RhdGljJ31cIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgIDxoNCAqbmdJZj1cIiFlZGl0aW5nVXNlck5hbWVcIiBjbGFzcz1cIm1vZGFsLXRpdGxlIGZsb2F0LWxlZnRcIj48aSBjbGFzcz1cImZhIGZhLXVzZXItcGx1c1wiPjwvaT4ge3sndXNlcnMubWFuYWdlbWVudC5OZXdVc2VyJyB8IHRyYW5zbGF0ZX19PC9oND5cbiAgICAgICAgICA8aDQgKm5nSWY9XCJlZGl0aW5nVXNlck5hbWVcIiBjbGFzcz1cIm1vZGFsLXRpdGxlIGZsb2F0LWxlZnRcIj48aSBjbGFzcz1cImZhIGZhLXVzZXItY2lyY2xlLW9cIj48L2k+IHt7J3VzZXJzLm1hbmFnZW1lbnQuRWRpdFVzZXInIHwgdHJhbnNsYXRlOmVkaXRpbmdVc2VyTmFtZX19PC9oND5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlIGZsb2F0LXJpZ2h0XCIgdGl0bGU9XCJDbG9zZVwiIChjbGljayk9XCJlZGl0b3JNb2RhbC5oaWRlKClcIj5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgIDx1c2VyLWluZm8gI3VzZXJFZGl0b3IgW2lzR2VuZXJhbEVkaXRvcl09XCJ0cnVlXCI+PC91c2VyLWluZm8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=