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
const _c0 = ["indexTemplate"];
const _c1 = ["userNameTemplate"];
const _c2 = ["rolesTemplate"];
const _c3 = ["actionsTemplate"];
const _c4 = ["editorModal"];
const _c5 = ["userEditor"];
function UsersManagementComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 23);
    i0.ɵɵelementStart(1, "a", 24);
    i0.ɵɵlistener("click", function UsersManagementComponent_li_9_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.newUser(); });
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
    const value_r15 = ctx.value;
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
    const row_r16 = ctx.row;
    const value_r17 = ctx.value;
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
    const role_r24 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(role_r24);
} }
function UsersManagementComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, UsersManagementComponent_ng_template_15_span_0_Template, 2, 1, "span", 30);
} if (rf & 2) {
    const value_r21 = ctx.value;
    i0.ɵɵproperty("ngForOf", value_r21);
} }
function UsersManagementComponent_ng_template_17_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "a", 33);
    i0.ɵɵlistener("click", function UsersManagementComponent_ng_template_17_div_0_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r31); const row_r25 = i0.ɵɵnextContext().row; const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.editUser(row_r25); });
    i0.ɵɵelement(2, "i", 34);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, "| ");
    i0.ɵɵelementStart(6, "a", 33);
    i0.ɵɵlistener("click", function UsersManagementComponent_ng_template_17_div_0_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r31); const row_r25 = i0.ɵɵnextContext().row; const ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.deleteUser(row_r25); });
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
    const ctx_r8 = i0.ɵɵnextContext();
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
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(3, 1, "users.management.EditUser", ctx_r11.editingUserName), "");
} }
const _c6 = function () { return { backdrop: "static" }; };
export class UsersManagementComponent {
    constructor(alertService, translationService, accountService) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.columns = [];
        this.rows = [];
        this.rowsCache = [];
        this.allRoles = [];
    }
    ngOnInit() {
        const gT = (key) => this.translationService.getTranslation(key);
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
    }
    ngAfterViewInit() {
        this.userEditor.changesSavedCallback = () => {
            this.addNewUserToList();
            this.editorModal.hide();
        };
        this.userEditor.changesCancelledCallback = () => {
            this.editedUser = null;
            this.sourceUser = null;
            this.editorModal.hide();
        };
    }
    addNewUserToList() {
        if (this.sourceUser) {
            Object.assign(this.sourceUser, this.editedUser);
            let sourceIndex = this.rowsCache.indexOf(this.sourceUser, 0);
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
            const user = new User();
            Object.assign(user, this.editedUser);
            this.editedUser = null;
            let maxIndex = 0;
            for (const u of this.rowsCache) {
                if (u.index > maxIndex) {
                    maxIndex = u.index;
                }
            }
            user.index = maxIndex + 1;
            this.rowsCache.splice(0, 0, user);
            this.rows.splice(0, 0, user);
            this.rows = [...this.rows];
        }
    }
    loadData() {
        this.alertService.startLoadingMessage();
        this.loadingIndicator = true;
        if (this.canViewRoles) {
            this.accountService.getUsersAndRoles().subscribe(results => this.onDataLoadSuccessful(results[0], results[1]), error => this.onDataLoadFailed(error));
        }
        else {
            this.accountService.getUsers().subscribe(users => this.onDataLoadSuccessful(users, this.accountService.currentUser.roles.map(x => new Role(x))), error => this.onDataLoadFailed(error));
        }
    }
    onDataLoadSuccessful(users, roles) {
        this.alertService.stopLoadingMessage();
        this.loadingIndicator = false;
        users.forEach((user, index, users) => {
            user.index = index + 1;
        });
        this.rowsCache = [...users];
        this.rows = users;
        this.allRoles = roles;
    }
    onDataLoadFailed(error) {
        this.alertService.stopLoadingMessage();
        this.loadingIndicator = false;
        this.alertService.showStickyMessage('Load Error', `Unable to retrieve users from the server.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
    }
    onSearchChanged(value) {
        this.rows = this.rowsCache.filter(r => Utilities.searchArray(value, false, r.userName, r.fullName, r.email, r.phoneNumber, r.jobTitle, r.roles));
    }
    onEditorModalHidden() {
        this.editingUserName = null;
        this.userEditor.resetForm(true);
    }
    newUser() {
        this.editingUserName = null;
        this.sourceUser = null;
        this.editedUser = this.userEditor.newUser(this.allRoles);
        this.editorModal.show();
    }
    editUser(row) {
        this.editingUserName = { name: row.userName };
        this.sourceUser = row;
        this.editedUser = this.userEditor.editUser(row, this.allRoles);
        this.editorModal.show();
    }
    deleteUser(row) {
        this.alertService.showDialog('Are you sure you want to delete \"' + row.userName + '\"?', DialogType.confirm, () => this.deleteUserHelper(row));
    }
    deleteUserHelper(row) {
        this.alertService.startLoadingMessage('Deleting...');
        this.loadingIndicator = true;
        this.accountService.deleteUser(row)
            .subscribe(results => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.rowsCache = this.rowsCache.filter(item => item !== row);
            this.rows = this.rows.filter(item => item !== row);
        }, error => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.alertService.showStickyMessage('Delete Error', `An error occured whilst deleting the user.\r\nError: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        });
    }
    get canAssignRoles() {
        return this.accountService.userHasPermission(Permission.assignRolesPermission);
    }
    get canViewRoles() {
        return this.accountService.userHasPermission(Permission.viewRolesPermission);
    }
    get canManageUsers() {
        return this.accountService.userHasPermission(Permission.manageUsersPermission);
    }
}
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
        const _r34 = i0.ɵɵgetCurrentView();
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
        i0.ɵɵlistener("click", function UsersManagementComponent_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r34); const _r9 = i0.ɵɵreference(20); return _r9.hide(); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMtbWFuYWdlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXNlcnMtbWFuYWdlbWVudC91c2Vycy1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3VzZXJzLW1hbmFnZW1lbnQvdXNlcnMtbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixnQ0FBZ0M7QUFFaEMsT0FBTyxFQUFFLFNBQVMsRUFBc0MsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBR2hHLE9BQU8sRUFDSCxVQUFVLEVBQUUsZUFBZSxFQUMzQixTQUFTLEVBQ1osTUFBTSxzQ0FBc0MsQ0FBQztBQU85QyxPQUFPLEVBQ0gsVUFBVSxFQUNWLElBQUksRUFDUCxNQUFNLHNCQUFzQixDQUFDO0FBRzlCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDZnZDLDhCQUNFO0lBQUEsNkJBQ0U7SUFEc0Msc0xBQW1CO0lBQ3pELHdCQUFpQztJQUFDLFlBQ3BDOztJQUFBLGlCQUFJO0lBQ04saUJBQUs7O0lBRmlDLGVBQ3BDO0lBRG9DLGlGQUNwQzs7O0lBa0JOLDhCQUFRO0lBQUEsWUFBUztJQUFBLGlCQUFTOzs7SUFBbEIsZUFBUztJQUFULCtCQUFTOzs7SUFLZix3QkFBbUU7OztJQUNuRSx3QkFBeUQ7OztJQUYzRCw0QkFDRTtJQUFBLHFGQUErRDtJQUMvRCxxRkFBcUQ7SUFDckQsWUFDRjtJQUFBLGlCQUFPOzs7O0lBSkQsaURBQW9DLHFDQUFBO0lBQ3JDLGVBQXVCO0lBQXZCLDBDQUF1QjtJQUN2QixlQUFzQjtJQUF0Qix5Q0FBc0I7SUFDekIsZUFDRjtJQURFLDBD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UUFDTixnQ0FDRTtRQUFBLHFDQUE0RDtRQUM5RCxpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNOztRQWpFdUQsZUFBdUQ7UUFBdkQseUZBQXVEO1FBS3hHLGVBQXdDO1FBQXhDLCtEQUF3QztRQVVuQyxlQUFxQztRQUFyQyx1REFBcUMsa0JBQUEsaUJBQUEsb0JBQUEsb0JBQUEsd0JBQUEsb0JBQUEsdUJBQUE7UUFrQ3VDLGVBQStCO1FBQS9CLG9EQUErQjtRQUk5RyxlQUF3QjtRQUF4QiwyQ0FBd0I7UUFDeEIsZUFBdUI7UUFBdkIsMENBQXVCO1FBTUosZUFBd0I7UUFBeEIsc0NBQXdCOztrREQ5QjVDLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDbkQ7O2tCQWFJLFNBQVM7bUJBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRzNDLFNBQVM7bUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFHOUMsU0FBUzttQkFBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFHM0MsU0FBUzttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUc3QyxTQUFTO21CQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUd6QyxTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcblxuaW1wb3J0IHtcbiAgICBEaWFsb2dUeXBlLCBNZXNzYWdlU2V2ZXJpdHksXG4gICAgVXRpbGl0aWVzXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgQWxlcnRTZXJ2aWNlLFxuICAgIEFwcFRyYW5zbGF0aW9uU2VydmljZVxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1zZXJ2aWNlcy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgUGVybWlzc2lvbixcbiAgICBVc2VyXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtb2F1dGgyJztcblxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgUm9sZSB9IGZyb20gJy4uLy4uL21vZGVscy9yb2xlLm1vZGVsJztcbmltcG9ydCB7IFVzZXJFZGl0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXItZWRpdC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VySW5mb0NvbXBvbmVudCB9IGZyb20gJy4uL3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3VzZXJzLW1hbmFnZW1lbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2Vycy1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi91c2Vycy1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVXNlcnNNYW5hZ2VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICBjb2x1bW5zOiBhbnlbXSA9IFtdO1xuICAgIHJvd3M6IFVzZXJbXSA9IFtdO1xuICAgIHJvd3NDYWNoZTogVXNlcltdID0gW107XG4gICAgZWRpdGVkVXNlcjogVXNlckVkaXQ7XG4gICAgc291cmNlVXNlcjogVXNlckVkaXQ7XG4gICAgZWRpdGluZ1VzZXJOYW1lOiB7IG5hbWU6IHN0cmluZyB9O1xuICAgIGxvYWRpbmdJbmRpY2F0b3I6IGJvb2xlYW47XG5cbiAgICBhbGxSb2xlczogUm9sZVtdID0gW107XG5cblxuICAgIEBWaWV3Q2hpbGQoJ2luZGV4VGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGluZGV4VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCd1c2VyTmFtZVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICB1c2VyTmFtZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgncm9sZXNUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcm9sZXNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2FjdGlvbnNUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgYWN0aW9uc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnZWRpdG9yTW9kYWwnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGVkaXRvck1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcblxuICAgIEBWaWV3Q2hpbGQoJ3VzZXJFZGl0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHVzZXJFZGl0b3I6IFVzZXJJbmZvQ29tcG9uZW50O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSwgcHJpdmF0ZSB0cmFuc2xhdGlvblNlcnZpY2U6IEFwcFRyYW5zbGF0aW9uU2VydmljZSwgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UpIHtcbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIGNvbnN0IGdUID0gKGtleTogc3RyaW5nKSA9PiB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5nZXRUcmFuc2xhdGlvbihrZXkpO1xuXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtcbiAgICAgICAgICAgIHsgcHJvcDogJ2luZGV4JywgbmFtZTogJyMnLCB3aWR0aDogNDAsIGNlbGxUZW1wbGF0ZTogdGhpcy5pbmRleFRlbXBsYXRlLCBjYW5BdXRvUmVzaXplOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBwcm9wOiAnam9iVGl0bGUnLCBuYW1lOiBnVCgndXNlcnMubWFuYWdlbWVudC5UaXRsZScpLCB3aWR0aDogNTAgfSxcbiAgICAgICAgICAgIHsgcHJvcDogJ3VzZXJOYW1lJywgbmFtZTogZ1QoJ3VzZXJzLm1hbmFnZW1lbnQuVXNlck5hbWUnKSwgd2lkdGg6IDkwLCBjZWxsVGVtcGxhdGU6IHRoaXMudXNlck5hbWVUZW1wbGF0ZSB9LFxuICAgICAgICAgICAgeyBwcm9wOiAnZnVsbE5hbWUnLCBuYW1lOiBnVCgndXNlcnMubWFuYWdlbWVudC5GdWxsTmFtZScpLCB3aWR0aDogMTIwIH0sXG4gICAgICAgICAgICB7IHByb3A6ICdlbWFpbCcsIG5hbWU6IGdUKCd1c2Vycy5tYW5hZ2VtZW50LkVtYWlsJyksIHdpZHRoOiAxNDAgfSxcbiAgICAgICAgICAgIHsgcHJvcDogJ3JvbGVzJywgbmFtZTogZ1QoJ3VzZXJzLm1hbmFnZW1lbnQuUm9sZXMnKSwgd2lkdGg6IDEyMCwgY2VsbFRlbXBsYXRlOiB0aGlzLnJvbGVzVGVtcGxhdGUgfSxcbiAgICAgICAgICAgIHsgcHJvcDogJ3Bob25lTnVtYmVyJywgbmFtZTogZ1QoJ3VzZXJzLm1hbmFnZW1lbnQuUGhvbmVOdW1iZXInKSwgd2lkdGg6IDEwMCB9XG4gICAgICAgIF07XG5cbiAgICAgICAgaWYgKHRoaXMuY2FuTWFuYWdlVXNlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKHsgbmFtZTogJycsIHdpZHRoOiAxNjAsIGNlbGxUZW1wbGF0ZTogdGhpcy5hY3Rpb25zVGVtcGxhdGUsIHJlc2l6ZWFibGU6IGZhbHNlLCBjYW5BdXRvUmVzaXplOiBmYWxzZSwgc29ydGFibGU6IGZhbHNlLCBkcmFnZ2FibGU6IGZhbHNlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgIH1cblxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gICAgICAgIHRoaXMudXNlckVkaXRvci5jaGFuZ2VzU2F2ZWRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkTmV3VXNlclRvTGlzdCgpO1xuICAgICAgICAgICAgdGhpcy5lZGl0b3JNb2RhbC5oaWRlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy51c2VyRWRpdG9yLmNoYW5nZXNDYW5jZWxsZWRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWRpdGVkVXNlciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZVVzZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5lZGl0b3JNb2RhbC5oaWRlKCk7XG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhZGROZXdVc2VyVG9MaXN0KCkge1xuICAgICAgICBpZiAodGhpcy5zb3VyY2VVc2VyKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuc291cmNlVXNlciwgdGhpcy5lZGl0ZWRVc2VyKTtcblxuICAgICAgICAgICAgbGV0IHNvdXJjZUluZGV4ID0gdGhpcy5yb3dzQ2FjaGUuaW5kZXhPZih0aGlzLnNvdXJjZVVzZXIsIDApO1xuICAgICAgICAgICAgaWYgKHNvdXJjZUluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBVdGlsaXRpZXMubW92ZUFycmF5SXRlbSh0aGlzLnJvd3NDYWNoZSwgc291cmNlSW5kZXgsIDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzb3VyY2VJbmRleCA9IHRoaXMucm93cy5pbmRleE9mKHRoaXMuc291cmNlVXNlciwgMCk7XG4gICAgICAgICAgICBpZiAoc291cmNlSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIFV0aWxpdGllcy5tb3ZlQXJyYXlJdGVtKHRoaXMucm93cywgc291cmNlSW5kZXgsIDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmVkaXRlZFVzZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zb3VyY2VVc2VyID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih1c2VyLCB0aGlzLmVkaXRlZFVzZXIpO1xuICAgICAgICAgICAgdGhpcy5lZGl0ZWRVc2VyID0gbnVsbDtcblxuICAgICAgICAgICAgbGV0IG1heEluZGV4ID0gMDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdSBvZiB0aGlzLnJvd3NDYWNoZSkge1xuICAgICAgICAgICAgICAgIGlmICgodSBhcyBhbnkpLmluZGV4ID4gbWF4SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4SW5kZXggPSAodSBhcyBhbnkpLmluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgKHVzZXIgYXMgYW55KS5pbmRleCA9IG1heEluZGV4ICsgMTtcblxuICAgICAgICAgICAgdGhpcy5yb3dzQ2FjaGUuc3BsaWNlKDAsIDAsIHVzZXIpO1xuICAgICAgICAgICAgdGhpcy5yb3dzLnNwbGljZSgwLCAwLCB1c2VyKTtcbiAgICAgICAgICAgIHRoaXMucm93cyA9IFsuLi50aGlzLnJvd3NdO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBsb2FkRGF0YSgpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RhcnRMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLmNhblZpZXdSb2xlcykge1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5nZXRVc2Vyc0FuZFJvbGVzKCkuc3Vic2NyaWJlKHJlc3VsdHMgPT4gdGhpcy5vbkRhdGFMb2FkU3VjY2Vzc2Z1bChyZXN1bHRzWzBdLCByZXN1bHRzWzFdKSwgZXJyb3IgPT4gdGhpcy5vbkRhdGFMb2FkRmFpbGVkKGVycm9yKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmdldFVzZXJzKCkuc3Vic2NyaWJlKHVzZXJzID0+IHRoaXMub25EYXRhTG9hZFN1Y2Nlc3NmdWwodXNlcnMsIHRoaXMuYWNjb3VudFNlcnZpY2UuY3VycmVudFVzZXIucm9sZXMubWFwKHggPT4gbmV3IFJvbGUoeCkpKSwgZXJyb3IgPT4gdGhpcy5vbkRhdGFMb2FkRmFpbGVkKGVycm9yKSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG9uRGF0YUxvYWRTdWNjZXNzZnVsKHVzZXJzOiBVc2VyW10sIHJvbGVzOiBSb2xlW10pIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuXG4gICAgICAgIHVzZXJzLmZvckVhY2goKHVzZXIsIGluZGV4LCB1c2VycykgPT4ge1xuICAgICAgICAgICAgKHVzZXIgYXMgYW55KS5pbmRleCA9IGluZGV4ICsgMTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yb3dzQ2FjaGUgPSBbLi4udXNlcnNdO1xuICAgICAgICB0aGlzLnJvd3MgPSB1c2VycztcblxuICAgICAgICB0aGlzLmFsbFJvbGVzID0gcm9sZXM7XG4gICAgfVxuXG5cbiAgICBvbkRhdGFMb2FkRmFpbGVkKGVycm9yOiBhbnkpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdMb2FkIEVycm9yJywgYFVuYWJsZSB0byByZXRyaWV2ZSB1c2VycyBmcm9tIHRoZSBzZXJ2ZXIuXFxyXFxuRXJyb3JzOiBcIiR7VXRpbGl0aWVzLmdldEh0dHBSZXNwb25zZU1lc3NhZ2VzKGVycm9yKX1cImAsXG4gICAgICAgICAgICBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICB9XG5cblxuICAgIG9uU2VhcmNoQ2hhbmdlZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucm93cyA9IHRoaXMucm93c0NhY2hlLmZpbHRlcihyID0+IFV0aWxpdGllcy5zZWFyY2hBcnJheSh2YWx1ZSwgZmFsc2UsIHIudXNlck5hbWUsIHIuZnVsbE5hbWUsIHIuZW1haWwsIHIucGhvbmVOdW1iZXIsIHIuam9iVGl0bGUsIHIucm9sZXMpKTtcbiAgICB9XG5cbiAgICBvbkVkaXRvck1vZGFsSGlkZGVuKCkge1xuICAgICAgICB0aGlzLmVkaXRpbmdVc2VyTmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMudXNlckVkaXRvci5yZXNldEZvcm0odHJ1ZSk7XG4gICAgfVxuXG5cbiAgICBuZXdVc2VyKCkge1xuICAgICAgICB0aGlzLmVkaXRpbmdVc2VyTmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc291cmNlVXNlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZWRpdGVkVXNlciA9IHRoaXMudXNlckVkaXRvci5uZXdVc2VyKHRoaXMuYWxsUm9sZXMpO1xuICAgICAgICB0aGlzLmVkaXRvck1vZGFsLnNob3coKTtcbiAgICB9XG5cblxuICAgIGVkaXRVc2VyKHJvdzogVXNlckVkaXQpIHtcbiAgICAgICAgdGhpcy5lZGl0aW5nVXNlck5hbWUgPSB7IG5hbWU6IHJvdy51c2VyTmFtZSB9O1xuICAgICAgICB0aGlzLnNvdXJjZVVzZXIgPSByb3c7XG4gICAgICAgIHRoaXMuZWRpdGVkVXNlciA9IHRoaXMudXNlckVkaXRvci5lZGl0VXNlcihyb3csIHRoaXMuYWxsUm9sZXMpO1xuICAgICAgICB0aGlzLmVkaXRvck1vZGFsLnNob3coKTtcbiAgICB9XG5cblxuICAgIGRlbGV0ZVVzZXIocm93OiBVc2VyRWRpdCkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93RGlhbG9nKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIFxcXCInICsgcm93LnVzZXJOYW1lICsgJ1xcXCI/JywgRGlhbG9nVHlwZS5jb25maXJtLCAoKSA9PiB0aGlzLmRlbGV0ZVVzZXJIZWxwZXIocm93KSk7XG4gICAgfVxuXG5cbiAgICBkZWxldGVVc2VySGVscGVyKHJvdzogVXNlckVkaXQpIHtcblxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCdEZWxldGluZy4uLicpO1xuICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuZGVsZXRlVXNlcihyb3cpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzQ2FjaGUgPSB0aGlzLnJvd3NDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSByb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IHRoaXMucm93cy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSByb3cpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZSgnRGVsZXRlIEVycm9yJywgYEFuIGVycm9yIG9jY3VyZWQgd2hpbHN0IGRlbGV0aW5nIHRoZSB1c2VyLlxcclxcbkVycm9yOiBcIiR7VXRpbGl0aWVzLmdldEh0dHBSZXNwb25zZU1lc3NhZ2VzKGVycm9yKX1cImAsXG4gICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgZ2V0IGNhbkFzc2lnblJvbGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50U2VydmljZS51c2VySGFzUGVybWlzc2lvbihQZXJtaXNzaW9uLmFzc2lnblJvbGVzUGVybWlzc2lvbik7XG4gICAgfVxuXG4gICAgZ2V0IGNhblZpZXdSb2xlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudFNlcnZpY2UudXNlckhhc1Blcm1pc3Npb24oUGVybWlzc2lvbi52aWV3Um9sZXNQZXJtaXNzaW9uKTtcbiAgICB9XG5cbiAgICBnZXQgY2FuTWFuYWdlVXNlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRTZXJ2aWNlLnVzZXJIYXNQZXJtaXNzaW9uKFBlcm1pc3Npb24ubWFuYWdlVXNlcnNQZXJtaXNzaW9uKTtcbiAgICB9XG59XG4iLCI8ZGl2PlxuICA8ZGl2IGNsYXNzPVwicm93IGNvbnRyb2wtYm94XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1sZy04XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBzZWFyY2gtYm94XCI+XG4gICAgICAgIDxzZWFyY2gtYm94IChzZWFyY2hDaGFuZ2UpPVwib25TZWFyY2hDaGFuZ2VkKCRldmVudClcIiBwbGFjZWhvbGRlcj1cInt7J3VzZXJzLm1hbmFnZW1lbnQuU2VhcmNoJyB8IHRyYW5zbGF0ZX19XCI+Pjwvc2VhcmNoLWJveD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNCBwci1sZy01XCI+XG4gICAgICA8dWwgY2xhc3M9XCJuYXYgZmxleC1jb2x1bW4gZmxleC1sZy1yb3cganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICA8bGkgKm5nSWY9XCJjYW5NYW5hZ2VVc2VycyAmJiBjYW5Bc3NpZ25Sb2xlc1wiIGNsYXNzPVwibmF2LWl0ZW0gdG9vbGJhcml0ZW1cIj5cbiAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiIChjbGljayk9XCJuZXdVc2VyKClcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1cy1jaXJjbGVcIj48L2k+IHt7J3VzZXJzLm1hbmFnZW1lbnQuTmV3VXNlcicgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxuZ3gtZGF0YXRhYmxlIGNsYXNzPVwibWF0ZXJpYWwgY29sb3JlZC1oZWFkZXIgc20gdGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1ob3ZlclwiXG4gICAgICAgICAgICAgICAgIFtsb2FkaW5nSW5kaWNhdG9yXT1cImxvYWRpbmdJbmRpY2F0b3JcIlxuICAgICAgICAgICAgICAgICBbcm93c109XCJyb3dzXCJcbiAgICAgICAgICAgICAgICAgW3Jvd0hlaWdodF09XCIzNVwiXG4gICAgICAgICAgICAgICAgIFtoZWFkZXJIZWlnaHRdPVwiMzVcIlxuICAgICAgICAgICAgICAgICBbZm9vdGVySGVpZ2h0XT1cIjM1XCJcbiAgICAgICAgICAgICAgICAgW2NvbHVtbnNdPVwiY29sdW1uc1wiXG4gICAgICAgICAgICAgICAgIFtzY3JvbGxiYXJWXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICBbY29sdW1uTW9kZV09XCInZm9yY2UnXCI+XG4gIDwvbmd4LWRhdGF0YWJsZT5cblxuICA8bmctdGVtcGxhdGUgI2luZGV4VGVtcGxhdGUgbGV0LXZhbHVlPVwidmFsdWVcIj5cbiAgICA8c3Ryb25nPnt7dmFsdWV9fTwvc3Ryb25nPlxuICA8L25nLXRlbXBsYXRlPlxuXG4gIDxuZy10ZW1wbGF0ZSAjdXNlck5hbWVUZW1wbGF0ZSBsZXQtcm93PVwicm93XCIgbGV0LXZhbHVlPVwidmFsdWVcIj5cbiAgICA8c3BhbiBbY2xhc3MubG9ja2VkLW91dF09XCJyb3cuaXNMb2NrZWRPdXRcIiBbY2xhc3MudXNlci1kaXNhYmxlZF09XCIhcm93LmlzRW5hYmxlZFwiPlxuICAgICAgPGkgKm5nSWY9XCJyb3cuaXNMb2NrZWRPdXRcIiBjbGFzcz1cImZhIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCI+IDwvaT5cbiAgICAgIDxpICpuZ0lmPVwiIXJvdy5pc0VuYWJsZWRcIiBjbGFzcz1cImZhIGZhLWV4Y2xhbWF0aW9uXCI+IDwvaT5cbiAgICAgIHt7dmFsdWV9fVxuICAgIDwvc3Bhbj5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuICA8bmctdGVtcGxhdGUgI3JvbGVzVGVtcGxhdGUgbGV0LXJvdz1cInJvd1wiIGxldC12YWx1ZT1cInZhbHVlXCIgbGV0LWk9XCJpbmRleFwiPlxuICAgIDxzcGFuIGNsYXNzPVwidXNlci1yb2xlIGJhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utc2Vjb25kYXJ5XCIgKm5nRm9yPVwibGV0IHJvbGUgb2YgdmFsdWVcIj57e3JvbGV9fTwvc3Bhbj5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuICA8bmctdGVtcGxhdGUgI2FjdGlvbnNUZW1wbGF0ZSBsZXQtcm93PVwicm93XCIgbGV0LXZhbHVlPVwidmFsdWVcIiBsZXQtaT1cImluZGV4XCI+XG4gICAgPGRpdiAqbmdJZj1cImNhbk1hbmFnZVVzZXJzXCI+XG4gICAgICA8YSBjbGFzcz1cImJ0biBidG4tbGluayBidG4tc21cIiBocmVmPVwiamF2YXNjcmlwdDo7XCIgKGNsaWNrKT1cImVkaXRVc2VyKHJvdylcIj48aSBjbGFzcz1cImZhIGZhLXBlbmNpbC1zcXVhcmUtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4ge3sndXNlcnMubWFuYWdlbWVudC5FZGl0JyB8IHRyYW5zbGF0ZX19PC9hPnxcbiAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiAoY2xpY2spPVwiZGVsZXRlVXNlcihyb3cpXCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaC1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiB7eyd1c2Vycy5tYW5hZ2VtZW50LkRlbGV0ZScgfCB0cmFuc2xhdGV9fTwvYT5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuXG4gIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgYnNNb2RhbCAjZWRpdG9yTW9kYWw9XCJicy1tb2RhbFwiIChvbkhpZGRlbik9XCJvbkVkaXRvck1vZGFsSGlkZGVuKClcIiBbY29uZmlnXT1cIntiYWNrZHJvcDogJ3N0YXRpYyd9XCIgdGFiaW5kZXg9XCItMVwiPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICA8aDQgKm5nSWY9XCIhZWRpdGluZ1VzZXJOYW1lXCIgY2xhc3M9XCJtb2RhbC10aXRsZSBmbG9hdC1sZWZ0XCI+PGkgY2xhc3M9XCJmYSBmYS11c2VyLXBsdXNcIj48L2k+IHt7J3VzZXJzLm1hbmFnZW1lbnQuTmV3VXNlcicgfCB0cmFuc2xhdGV9fTwvaDQ+XG4gICAgICAgICAgPGg0ICpuZ0lmPVwiZWRpdGluZ1VzZXJOYW1lXCIgY2xhc3M9XCJtb2RhbC10aXRsZSBmbG9hdC1sZWZ0XCI+PGkgY2xhc3M9XCJmYSBmYS11c2VyLWNpcmNsZS1vXCI+PC9pPiB7eyd1c2Vycy5tYW5hZ2VtZW50LkVkaXRVc2VyJyB8IHRyYW5zbGF0ZTplZGl0aW5nVXNlck5hbWV9fTwvaDQ+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZSBmbG9hdC1yaWdodFwiIHRpdGxlPVwiQ2xvc2VcIiAoY2xpY2spPVwiZWRpdG9yTW9kYWwuaGlkZSgpXCI+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICA8dXNlci1pbmZvICN1c2VyRWRpdG9yIFtpc0dlbmVyYWxFZGl0b3JdPVwidHJ1ZVwiPjwvdXNlci1pbmZvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19