import { __read, __spread, __values } from "tslib";
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, ViewChild } from '@angular/core';
import { DialogType, MessageSeverity, Utilities } from '@polpware/ngx-appkit-contracts-alpha';
import { Permission } from '@polpware/ngx-oauth2';
import { Role } from '../../models/role.model';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-appkit-services-alpha";
import * as i2 from "../../services/account.service";
import * as i3 from "../search-box/search-box.component";
import * as i4 from "@angular/common";
import * as i5 from "@swimlane/ngx-datatable";
import * as i6 from "ngx-bootstrap/modal";
import * as i7 from "../role-editor/role-editor.component";
import * as i8 from "@ngx-translate/core";
var _c0 = ["indexTemplate"];
var _c1 = ["actionsTemplate"];
var _c2 = ["editorModal"];
var _c3 = ["roleEditor"];
function RolesManagementComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    var _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 20);
    i0.ɵɵelementStart(1, "a", 21);
    i0.ɵɵlistener("click", function RolesManagementComponent_li_9_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r10); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.newRole(); });
    i0.ɵɵelement(2, "i", 22);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 1, "roles.management.NewRole"), " ");
} }
function RolesManagementComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var value_r11 = ctx.value;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(value_r11);
} }
function RolesManagementComponent_ng_template_13_a_0_Template(rf, ctx) { if (rf & 1) {
    var _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 24);
    i0.ɵɵlistener("click", function RolesManagementComponent_ng_template_13_a_0_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r20); var row_r12 = i0.ɵɵnextContext().row; var ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.editRole(row_r12); });
    i0.ɵɵelement(1, "i", 25);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, "roles.management.Edit"), "");
} }
function RolesManagementComponent_ng_template_13_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 24);
    i0.ɵɵlistener("click", function RolesManagementComponent_ng_template_13_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r23); var row_r12 = i0.ɵɵnextContext().row; var ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.editRole(row_r12); });
    i0.ɵɵelement(1, "i", 26);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, "roles.management.Details"), "");
} }
function RolesManagementComponent_ng_template_13_a_3_Template(rf, ctx) { if (rf & 1) {
    var _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 24);
    i0.ɵɵlistener("click", function RolesManagementComponent_ng_template_13_a_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r26); var row_r12 = i0.ɵɵnextContext().row; var ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.deleteRole(row_r12); });
    i0.ɵɵelement(1, "i", 27);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, "roles.management.Delete"), "");
} }
function RolesManagementComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RolesManagementComponent_ng_template_13_a_0_Template, 4, 3, "a", 23);
    i0.ɵɵtemplate(1, RolesManagementComponent_ng_template_13_a_1_Template, 4, 3, "a", 23);
    i0.ɵɵtext(2);
    i0.ɵɵtemplate(3, RolesManagementComponent_ng_template_13_a_3_Template, 4, 3, "a", 23);
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r4.canManageRoles);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r4.canManageRoles);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.canManageRoles ? "|" : "", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.canManageRoles);
} }
function RolesManagementComponent_h4_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 28);
    i0.ɵɵelement(1, "i", 29);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(3, 1, "roles.management.RoleDetails", ctx_r6.editingRoleName), "");
} }
function RolesManagementComponent_h4_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h4", 28);
    i0.ɵɵelement(1, "i", 29);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.editingRoleName ? i0.ɵɵpipeBind2(3, 1, "roles.management.EditRole", ctx_r7.editingRoleName) : i0.ɵɵpipeBind1(4, 4, "roles.management.NewRole"), "");
} }
var _c4 = function () { return { backdrop: "static" }; };
var RolesManagementComponent = /** @class */ (function () {
    function RolesManagementComponent(alertService, translationService, accountService) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.columns = [];
        this.rows = [];
        this.rowsCache = [];
        this.allPermissions = [];
    }
    RolesManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        var gT = function (key) { return _this.translationService.getTranslation(key); };
        this.columns = [
            { prop: 'index', name: '#', width: 50, cellTemplate: this.indexTemplate, canAutoResize: false },
            { prop: 'name', name: gT('roles.management.Name'), width: 180 },
            { prop: 'description', name: gT('roles.management.Description'), width: 320 },
            { prop: 'usersCount', name: gT('roles.management.Users'), width: 50 },
            { name: '', width: 160, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
        ];
        this.loadData();
    };
    RolesManagementComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.roleEditor.changesSavedCallback = function () {
            _this.addNewRoleToList();
            _this.editorModal.hide();
        };
        this.roleEditor.changesCancelledCallback = function () {
            _this.editedRole = null;
            _this.sourceRole = null;
            _this.editorModal.hide();
        };
    };
    RolesManagementComponent.prototype.addNewRoleToList = function () {
        var e_1, _a;
        if (this.sourceRole) {
            Object.assign(this.sourceRole, this.editedRole);
            var sourceIndex = this.rowsCache.indexOf(this.sourceRole, 0);
            if (sourceIndex > -1) {
                Utilities.moveArrayItem(this.rowsCache, sourceIndex, 0);
            }
            sourceIndex = this.rows.indexOf(this.sourceRole, 0);
            if (sourceIndex > -1) {
                Utilities.moveArrayItem(this.rows, sourceIndex, 0);
            }
            this.editedRole = null;
            this.sourceRole = null;
        }
        else {
            var role = new Role();
            Object.assign(role, this.editedRole);
            this.editedRole = null;
            var maxIndex = 0;
            try {
                for (var _b = __values(this.rowsCache), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var r = _c.value;
                    if (r.index > maxIndex) {
                        maxIndex = r.index;
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
            role.index = maxIndex + 1;
            this.rowsCache.splice(0, 0, role);
            this.rows.splice(0, 0, role);
            this.rows = __spread(this.rows);
        }
    };
    RolesManagementComponent.prototype.loadData = function () {
        var _this = this;
        this.alertService.startLoadingMessage();
        this.loadingIndicator = true;
        this.accountService.getRolesAndPermissions()
            .subscribe(function (results) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            var roles = results[0];
            var permissions = results[1];
            roles.forEach(function (role, index, roles) {
                role.index = index + 1;
            });
            _this.rowsCache = __spread(roles);
            _this.rows = roles;
            _this.allPermissions = permissions;
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.alertService.showStickyMessage('Load Error', "Unable to retrieve roles from the server.\r\nErrors: \"" + Utilities.getHttpResponseMessages(error) + "\"", MessageSeverity.error, error);
        });
    };
    RolesManagementComponent.prototype.onSearchChanged = function (value) {
        this.rows = this.rowsCache.filter(function (r) { return Utilities.searchArray(value, false, r.name, r.description); });
    };
    RolesManagementComponent.prototype.onEditorModalHidden = function () {
        this.editingRoleName = null;
        this.roleEditor.resetForm(true);
    };
    RolesManagementComponent.prototype.newRole = function () {
        this.editingRoleName = null;
        this.sourceRole = null;
        this.editedRole = this.roleEditor.newRole(this.allPermissions);
        this.editorModal.show();
    };
    RolesManagementComponent.prototype.editRole = function (row) {
        this.editingRoleName = { name: row.name };
        this.sourceRole = row;
        this.editedRole = this.roleEditor.editRole(row, this.allPermissions);
        this.editorModal.show();
    };
    RolesManagementComponent.prototype.deleteRole = function (row) {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to delete the \"' + row.name + '\" role?', DialogType.confirm, function () { return _this.deleteRoleHelper(row); });
    };
    RolesManagementComponent.prototype.deleteRoleHelper = function (row) {
        var _this = this;
        this.alertService.startLoadingMessage('Deleting...');
        this.loadingIndicator = true;
        this.accountService.deleteRole(row)
            .subscribe(function (results) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.rowsCache = _this.rowsCache.filter(function (item) { return item !== row; });
            _this.rows = _this.rows.filter(function (item) { return item !== row; });
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.alertService.showStickyMessage('Delete Error', "An error occured whilst deleting the role.\r\nError: \"" + Utilities.getHttpResponseMessages(error) + "\"", MessageSeverity.error, error);
        });
    };
    Object.defineProperty(RolesManagementComponent.prototype, "canManageRoles", {
        get: function () {
            return this.accountService.userHasPermission(Permission.manageRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */ RolesManagementComponent.ɵfac = function RolesManagementComponent_Factory(t) { return new (t || RolesManagementComponent)(i0.ɵɵdirectiveInject(i1.AlertService), i0.ɵɵdirectiveInject(i1.AppTranslationService), i0.ɵɵdirectiveInject(i2.AccountService)); };
    /** @nocollapse */ RolesManagementComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RolesManagementComponent, selectors: [["roles-management"]], viewQuery: function RolesManagementComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
            i0.ɵɵstaticViewQuery(_c1, true);
            i0.ɵɵstaticViewQuery(_c2, true);
            i0.ɵɵstaticViewQuery(_c3, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.indexTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.actionsTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.editorModal = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.roleEditor = _t.first);
        } }, decls: 28, vars: 16, consts: [[1, "row", "control-box"], [1, "col-lg-8"], [1, "form-group", "search-box"], [3, "placeholder", "searchChange"], [1, "col-lg-4", "pr-lg-5"], [1, "nav", "flex-column", "flex-lg-row", "justify-content-end"], ["class", "nav-item toolbaritem", 4, "ngIf"], [1, "material", "colored-header", "sm", "table", "table-striped", "table-hover", 3, "loadingIndicator", "rows", "rowHeight", "headerHeight", "footerHeight", "columns", "scrollbarV", "columnMode"], ["indexTemplate", ""], ["actionsTemplate", ""], ["bsModal", "", "tabindex", "-1", 1, "modal", "fade", 3, "config", "onHidden"], ["editorModal", "bs-modal"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["class", "modal-title float-left", 4, "ngIf"], ["type", "button", "title", "Close", 1, "close", "float-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["roleEditor", ""], [1, "nav-item", "toolbaritem"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "fa", "fa-plus-circle"], ["class", "btn btn-link btn-sm", "href", "javascript:;", 3, "click", 4, "ngIf"], ["href", "javascript:;", 1, "btn", "btn-link", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["aria-hidden", "true", 1, "fa", "fa-trash-o"], [1, "modal-title", "float-left"], [1, "fa", "fa-shield"]], template: function RolesManagementComponent_Template(rf, ctx) { if (rf & 1) {
            var _r27 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵelementStart(4, "search-box", 3);
            i0.ɵɵlistener("searchChange", function RolesManagementComponent_Template_search_box_searchChange_4_listener($event) { return ctx.onSearchChanged($event); });
            i0.ɵɵpipe(5, "translate");
            i0.ɵɵtext(6, ">");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 4);
            i0.ɵɵelementStart(8, "ul", 5);
            i0.ɵɵtemplate(9, RolesManagementComponent_li_9_Template, 5, 3, "li", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "ngx-datatable", 7);
            i0.ɵɵtemplate(11, RolesManagementComponent_ng_template_11_Template, 2, 1, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(13, RolesManagementComponent_ng_template_13_Template, 4, 4, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(15, "div", 10, 11);
            i0.ɵɵlistener("onHidden", function RolesManagementComponent_Template_div_onHidden_15_listener() { return ctx.onEditorModalHidden(); });
            i0.ɵɵelementStart(17, "div", 12);
            i0.ɵɵelementStart(18, "div", 13);
            i0.ɵɵelementStart(19, "div", 14);
            i0.ɵɵtemplate(20, RolesManagementComponent_h4_20_Template, 4, 4, "h4", 15);
            i0.ɵɵtemplate(21, RolesManagementComponent_h4_21_Template, 5, 6, "h4", 15);
            i0.ɵɵelementStart(22, "button", 16);
            i0.ɵɵlistener("click", function RolesManagementComponent_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r27); var _r5 = i0.ɵɵreference(16); return _r5.hide(); });
            i0.ɵɵelementStart(23, "span", 17);
            i0.ɵɵtext(24, "\u00D7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 18);
            i0.ɵɵelement(26, "role-editor", null, 19);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(5, 13, "roles.management.Search"));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.canManageRoles);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("loadingIndicator", ctx.loadingIndicator)("rows", ctx.rows)("rowHeight", 35)("headerHeight", 35)("footerHeight", 35)("columns", ctx.columns)("scrollbarV", true)("columnMode", "force");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("config", i0.ɵɵpureFunction0(15, _c4));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", !ctx.canManageRoles);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.canManageRoles);
        } }, directives: [i3.SearchBoxComponent, i4.NgIf, i5.DatatableComponent, i6.ModalDirective, i7.RoleEditorComponent], pipes: [i8.TranslatePipe], styles: [".control-box[_ngcontent-%COMP%]{margin-bottom:5px}.search-box[_ngcontent-%COMP%]{margin:0}.nav-item.toolbaritem[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-top:3px;padding-bottom:3px;min-width:100px}"] });
    return RolesManagementComponent;
}());
export { RolesManagementComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RolesManagementComponent, [{
        type: Component,
        args: [{
                selector: 'roles-management',
                templateUrl: './roles-management.component.html',
                styleUrls: ['./roles-management.component.scss']
            }]
    }], function () { return [{ type: i1.AlertService }, { type: i1.AppTranslationService }, { type: i2.AccountService }]; }, { indexTemplate: [{
            type: ViewChild,
            args: ['indexTemplate', { static: true }]
        }], actionsTemplate: [{
            type: ViewChild,
            args: ['actionsTemplate', { static: true }]
        }], editorModal: [{
            type: ViewChild,
            args: ['editorModal', { static: true }]
        }], roleEditor: [{
            type: ViewChild,
            args: ['roleEditor', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZXMtbWFuYWdlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcm9sZXMtbWFuYWdlbWVudC9yb2xlcy1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3JvbGVzLW1hbmFnZW1lbnQvcm9sZXMtbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBRWhDLE9BQU8sRUFBRSxTQUFTLEVBQXNDLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUdoRyxPQUFPLEVBQ0gsVUFBVSxFQUFFLGVBQWUsRUFDM0IsU0FBUyxFQUNaLE1BQU0sc0NBQXNDLENBQUM7QUFVOUMsT0FBTyxFQUNILFVBQVUsRUFDYixNQUFNLHNCQUFzQixDQUFDO0FBRzlCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztJQ2pCdkMsOEJBQ0U7SUFBQSw2QkFDRTtJQURzQyxrTEFBbUI7SUFDekQsd0JBQWlDO0lBQUMsWUFDcEM7O0lBQUEsaUJBQUk7SUFDTixpQkFBSzs7SUFGaUMsZUFDcEM7SUFEb0MsaUZBQ3BDOzs7SUFrQk4sOEJBQVE7SUFBQSxZQUFTO0lBQUEsaUJBQVM7OztJQUFsQixlQUFTO0lBQVQsK0JBQVM7Ozs7SUFLakIsNkJBQWtHO0lBQXhCLGdQQUF1QjtJQUFDLHdCQUF3RDtJQUFDLFlBQXVDOztJQUFBLGlCQUFJOztJQUEzQyxlQUF1QztJQUF2Qyw2RUFBdUM7Ozs7SUFDbE0sNkJBQW1HO0lBQXhCLGdQQUF1QjtJQUFDLHdCQUE0QztJQUFDLFlBQTBDOztJQUFBLGlCQUFJOztJQUE5QyxlQUEwQztJQUExQyxnRkFBMEM7Ozs7SUFFMUwsNkJBQW9HO0lBQTFCLGtQQUF5QjtJQUFDLHdCQUFnRDtJQUFDLFlBQXlDOztJQUFBLGlCQUFJOztJQUE3QyxlQUF5QztJQUF6QywrRUFBeUM7OztJQUg5TCxxRkFBa0c7SUFDbEcscUZBQW1HO0lBQ25HLFlBQ0E7SUFBQSxxRkFBb0c7OztJQUhqRyw0Q0FBc0I7SUFDdEIsZUFBdUI7SUFBdkIsNkNBQXVCO0lBQzFCLGVBQ0E7SUFEQSxpRUFDQTtJQUFHLGVBQXNCO0lBQXRCLDRDQUFzQjs7O0lBUW5CLDhCQUEyRDtJQUFBLHdCQUE0QjtJQUFDLFlBQThEOztJQUFBLGlCQUFLOzs7SUFBbkUsZUFBOEQ7SUFBOUQsNEdBQThEOzs7SUFDdEosOEJBQTBEO0lBQUEsd0JBQTRCO0lBQUMsWUFBMEg7OztJQUFBLGlCQUFLOzs7SUFBL0gsZUFBMEg7SUFBMUgscUxBQTBIOzs7QURqQjNOO0lBNkJJLGtDQUFvQixZQUEwQixFQUFVLGtCQUF5QyxFQUFVLGNBQThCO1FBQXJILGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUF1QjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQXZCekksWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUNwQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsbUJBQWMsR0FBaUIsRUFBRSxDQUFDO0lBcUJsQyxDQUFDO0lBR0QsMkNBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWEcsSUFBTSxFQUFFLEdBQUcsVUFBQyxHQUFXLElBQUssT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDO1FBRXhFLElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUU7WUFDL0YsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsdUJBQXVCLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQy9ELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLDhCQUE4QixDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtZQUM3RSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDckUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtTQUMzSSxDQUFDO1FBRUYsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFNRCxrREFBZSxHQUFmO1FBQUEsaUJBWUM7UUFWRyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixHQUFHO1lBQ25DLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsR0FBRztZQUN2QyxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFHRCxtREFBZ0IsR0FBaEI7O1FBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFaEQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3RCxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDbEIsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMzRDtZQUVELFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3BELElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNsQixTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3REO1lBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDMUI7YUFBTTtZQUNILElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBRXZCLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQzs7Z0JBQ2pCLEtBQWdCLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxTQUFTLENBQUEsZ0JBQUEsNEJBQUU7b0JBQTNCLElBQU0sQ0FBQyxXQUFBO29CQUNSLElBQUssQ0FBUyxDQUFDLEtBQUssR0FBRyxRQUFRLEVBQUU7d0JBQzdCLFFBQVEsR0FBSSxDQUFTLENBQUMsS0FBSyxDQUFDO3FCQUMvQjtpQkFDSjs7Ozs7Ozs7O1lBRUEsSUFBWSxDQUFDLEtBQUssR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBRW5DLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxZQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFLRCwyQ0FBUSxHQUFSO1FBQUEsaUJBNkJDO1FBNUJHLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBRTdCLElBQUksQ0FBQyxjQUFjLENBQUMsc0JBQXNCLEVBQUU7YUFDdkMsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNkLEtBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUN2QyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBRTlCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSztnQkFDNUIsSUFBWSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1lBR0gsS0FBSSxDQUFDLFNBQVMsWUFBTyxLQUFLLENBQUMsQ0FBQztZQUM1QixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUVsQixLQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQztRQUN0QyxDQUFDLEVBQ0csVUFBQSxLQUFLO1lBQ0QsS0FBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFFOUIsS0FBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsNERBQXlELFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsT0FBRyxFQUNsSixlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUdELGtEQUFlLEdBQWYsVUFBZ0IsS0FBYTtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUExRCxDQUEwRCxDQUFDLENBQUM7SUFDdkcsQ0FBQztJQUdELHNEQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHRCwwQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBR0QsMkNBQVEsR0FBUixVQUFTLEdBQVM7UUFDZCxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsNkNBQVUsR0FBVixVQUFXLEdBQVM7UUFBcEIsaUJBRUM7UUFERyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3Q0FBd0MsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLFVBQVUsRUFBRSxVQUFVLENBQUMsT0FBTyxFQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztJQUN6SixDQUFDO0lBR0QsbURBQWdCLEdBQWhCLFVBQWlCLEdBQVM7UUFBMUIsaUJBb0JDO1FBbEJHLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUU3QixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7YUFDOUIsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNkLEtBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUN2QyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBRTlCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssR0FBRyxFQUFaLENBQVksQ0FBQyxDQUFDO1lBQzdELEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEtBQUssR0FBRyxFQUFaLENBQVksQ0FBQyxDQUFDO1FBQ3ZELENBQUMsRUFDRyxVQUFBLEtBQUs7WUFDRCxLQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDdkMsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztZQUU5QixLQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSw0REFBeUQsU0FBUyxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxPQUFHLEVBQ3BKLGVBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDZixDQUFDO0lBR0Qsc0JBQUksb0RBQWM7YUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkYsQ0FBQzs7O09BQUE7dUhBN0xRLHdCQUF3QjtvRkFBeEIsd0JBQXdCOzs7Ozs7Ozs7Ozs7O1lDbkNyQywyQkFDRTtZQUFBLDhCQUNFO1lBQUEsOEJBQ0U7WUFBQSw4QkFDRTtZQUFBLHFDQUE2RztZQUFqRyw2SEFBZ0IsMkJBQXVCLElBQUM7O1lBQXlELGlCQUFDO1lBQUEsaUJBQWE7WUFDN0gsaUJBQU07WUFDUixpQkFBTTtZQUNOLDhCQUNFO1lBQUEsNkJBQ0U7WUFBQSx1RUFDRTtZQUlKLGlCQUFLO1lBQ1AsaUJBQU07WUFDUixpQkFBTTtZQUVOLG9DQVNnQjtZQUVoQiw0SEFDRTtZQUlGLDRIQUNFO1lBT0Ysb0NBQ0U7WUFEc0QseUdBQVkseUJBQXFCLElBQUM7WUFDeEYsZ0NBQ0U7WUFBQSxnQ0FDRTtZQUFBLGdDQUNFO1lBQUEsMEVBQTJEO1lBQzNELDBFQUEwRDtZQUMxRCxtQ0FDRTtZQUQ0RCw0SkFBUyxVQUFrQixJQUFDO1lBQ3hGLGlDQUF5QjtZQUFBLHVCQUFPO1lBQUEsaUJBQU87WUFDekMsaUJBQVM7WUFDWCxpQkFBTTtZQUNOLGdDQUNFO1lBQUEseUNBQXVDO1lBQ3pDLGlCQUFNO1lBQ1IsaUJBQU07WUFDUixpQkFBTTtZQUNSLGlCQUFNO1lBQ1IsaUJBQU07O1lBdER1RCxlQUF1RDtZQUF2RCx5RkFBdUQ7WUFLeEcsZUFBc0I7WUFBdEIseUNBQXNCO1lBVWpCLGVBQXFDO1lBQXJDLHVEQUFxQyxrQkFBQSxpQkFBQSxvQkFBQSxvQkFBQSx3QkFBQSxvQkFBQSx1QkFBQTtZQXVCdUMsZUFBK0I7WUFBL0Isb0RBQStCO1lBSTlHLGVBQXVCO1lBQXZCLDBDQUF1QjtZQUN2QixlQUFzQjtZQUF0Qix5Q0FBc0I7O21DRC9DcEM7Q0FrT0MsQUFwTUQsSUFvTUM7U0EvTFksd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ25EOztrQkFhSSxTQUFTO21CQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUczQyxTQUFTO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRzdDLFNBQVM7bUJBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBR3pDLFNBQVM7bUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuXG5pbXBvcnQge1xuICAgIERpYWxvZ1R5cGUsIE1lc3NhZ2VTZXZlcml0eSxcbiAgICBVdGlsaXRpZXNcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuXG5pbXBvcnQge1xuICAgIEFsZXJ0U2VydmljZSxcbiAgICBBcHBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgTG9jYWxTdG9yZU1hbmFnZXIsXG4gICAgQ29uZmlndXJhdGlvblNlcnZpY2Vcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtc2VydmljZXMtYWxwaGEnO1xuXG5pbXBvcnQge1xuICAgIFBlcm1pc3Npb25cbn0gZnJvbSAnQHBvbHB3YXJlL25neC1vYXV0aDInO1xuXG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjY291bnQuc2VydmljZSc7XG5pbXBvcnQgeyBSb2xlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3JvbGUubW9kZWwnO1xuaW1wb3J0IHsgUm9sZUVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4uL3JvbGUtZWRpdG9yL3JvbGUtZWRpdG9yLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdyb2xlcy1tYW5hZ2VtZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcm9sZXMtbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcm9sZXMtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJvbGVzTWFuYWdlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgY29sdW1uczogYW55W10gPSBbXTtcbiAgICByb3dzOiBSb2xlW10gPSBbXTtcbiAgICByb3dzQ2FjaGU6IFJvbGVbXSA9IFtdO1xuICAgIGFsbFBlcm1pc3Npb25zOiBQZXJtaXNzaW9uW10gPSBbXTtcbiAgICBlZGl0ZWRSb2xlOiBSb2xlO1xuICAgIHNvdXJjZVJvbGU6IFJvbGU7XG4gICAgZWRpdGluZ1JvbGVOYW1lOiB7IG5hbWU6IHN0cmluZyB9O1xuICAgIGxvYWRpbmdJbmRpY2F0b3I6IGJvb2xlYW47XG5cblxuXG4gICAgQFZpZXdDaGlsZCgnaW5kZXhUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgaW5kZXhUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2FjdGlvbnNUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgYWN0aW9uc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnZWRpdG9yTW9kYWwnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGVkaXRvck1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcblxuICAgIEBWaWV3Q2hpbGQoJ3JvbGVFZGl0b3InLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHJvbGVFZGl0b3I6IFJvbGVFZGl0b3JDb21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLCBwcml2YXRlIHRyYW5zbGF0aW9uU2VydmljZTogQXBwVHJhbnNsYXRpb25TZXJ2aWNlLCBwcml2YXRlIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSkge1xuICAgIH1cblxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgY29uc3QgZ1QgPSAoa2V5OiBzdHJpbmcpID0+IHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGtleSk7XG5cbiAgICAgICAgdGhpcy5jb2x1bW5zID0gW1xuICAgICAgICAgICAgeyBwcm9wOiAnaW5kZXgnLCBuYW1lOiAnIycsIHdpZHRoOiA1MCwgY2VsbFRlbXBsYXRlOiB0aGlzLmluZGV4VGVtcGxhdGUsIGNhbkF1dG9SZXNpemU6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHByb3A6ICduYW1lJywgbmFtZTogZ1QoJ3JvbGVzLm1hbmFnZW1lbnQuTmFtZScpLCB3aWR0aDogMTgwIH0sXG4gICAgICAgICAgICB7IHByb3A6ICdkZXNjcmlwdGlvbicsIG5hbWU6IGdUKCdyb2xlcy5tYW5hZ2VtZW50LkRlc2NyaXB0aW9uJyksIHdpZHRoOiAzMjAgfSxcbiAgICAgICAgICAgIHsgcHJvcDogJ3VzZXJzQ291bnQnLCBuYW1lOiBnVCgncm9sZXMubWFuYWdlbWVudC5Vc2VycycpLCB3aWR0aDogNTAgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJycsIHdpZHRoOiAxNjAsIGNlbGxUZW1wbGF0ZTogdGhpcy5hY3Rpb25zVGVtcGxhdGUsIHJlc2l6ZWFibGU6IGZhbHNlLCBjYW5BdXRvUmVzaXplOiBmYWxzZSwgc29ydGFibGU6IGZhbHNlLCBkcmFnZ2FibGU6IGZhbHNlIH1cbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgfVxuXG5cblxuXG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgICAgICAgdGhpcy5yb2xlRWRpdG9yLmNoYW5nZXNTYXZlZENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGROZXdSb2xlVG9MaXN0KCk7XG4gICAgICAgICAgICB0aGlzLmVkaXRvck1vZGFsLmhpZGUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJvbGVFZGl0b3IuY2hhbmdlc0NhbmNlbGxlZENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lZGl0ZWRSb2xlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc291cmNlUm9sZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmVkaXRvck1vZGFsLmhpZGUoKTtcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFkZE5ld1JvbGVUb0xpc3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnNvdXJjZVJvbGUpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zb3VyY2VSb2xlLCB0aGlzLmVkaXRlZFJvbGUpO1xuXG4gICAgICAgICAgICBsZXQgc291cmNlSW5kZXggPSB0aGlzLnJvd3NDYWNoZS5pbmRleE9mKHRoaXMuc291cmNlUm9sZSwgMCk7XG4gICAgICAgICAgICBpZiAoc291cmNlSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIFV0aWxpdGllcy5tb3ZlQXJyYXlJdGVtKHRoaXMucm93c0NhY2hlLCBzb3VyY2VJbmRleCwgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNvdXJjZUluZGV4ID0gdGhpcy5yb3dzLmluZGV4T2YodGhpcy5zb3VyY2VSb2xlLCAwKTtcbiAgICAgICAgICAgIGlmIChzb3VyY2VJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgVXRpbGl0aWVzLm1vdmVBcnJheUl0ZW0odGhpcy5yb3dzLCBzb3VyY2VJbmRleCwgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZWRpdGVkUm9sZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZVJvbGUgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgcm9sZSA9IG5ldyBSb2xlKCk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHJvbGUsIHRoaXMuZWRpdGVkUm9sZSk7XG4gICAgICAgICAgICB0aGlzLmVkaXRlZFJvbGUgPSBudWxsO1xuXG4gICAgICAgICAgICBsZXQgbWF4SW5kZXggPSAwO1xuICAgICAgICAgICAgZm9yIChjb25zdCByIG9mIHRoaXMucm93c0NhY2hlKSB7XG4gICAgICAgICAgICAgICAgaWYgKChyIGFzIGFueSkuaW5kZXggPiBtYXhJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBtYXhJbmRleCA9IChyIGFzIGFueSkuaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAocm9sZSBhcyBhbnkpLmluZGV4ID0gbWF4SW5kZXggKyAxO1xuXG4gICAgICAgICAgICB0aGlzLnJvd3NDYWNoZS5zcGxpY2UoMCwgMCwgcm9sZSk7XG4gICAgICAgICAgICB0aGlzLnJvd3Muc3BsaWNlKDAsIDAsIHJvbGUpO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gWy4uLnRoaXMucm93c107XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG5cbiAgICBsb2FkRGF0YSgpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RhcnRMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuZ2V0Um9sZXNBbmRQZXJtaXNzaW9ucygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgcm9sZXMgPSByZXN1bHRzWzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBlcm1pc3Npb25zID0gcmVzdWx0c1sxXTtcblxuICAgICAgICAgICAgICAgIHJvbGVzLmZvckVhY2goKHJvbGUsIGluZGV4LCByb2xlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAocm9sZSBhcyBhbnkpLmluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgICAgICB0aGlzLnJvd3NDYWNoZSA9IFsuLi5yb2xlc107XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gcm9sZXM7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFsbFBlcm1pc3Npb25zID0gcGVybWlzc2lvbnM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdMb2FkIEVycm9yJywgYFVuYWJsZSB0byByZXRyaWV2ZSByb2xlcyBmcm9tIHRoZSBzZXJ2ZXIuXFxyXFxuRXJyb3JzOiBcIiR7VXRpbGl0aWVzLmdldEh0dHBSZXNwb25zZU1lc3NhZ2VzKGVycm9yKX1cImAsXG4gICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIG9uU2VhcmNoQ2hhbmdlZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucm93cyA9IHRoaXMucm93c0NhY2hlLmZpbHRlcihyID0+IFV0aWxpdGllcy5zZWFyY2hBcnJheSh2YWx1ZSwgZmFsc2UsIHIubmFtZSwgci5kZXNjcmlwdGlvbikpO1xuICAgIH1cblxuXG4gICAgb25FZGl0b3JNb2RhbEhpZGRlbigpIHtcbiAgICAgICAgdGhpcy5lZGl0aW5nUm9sZU5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLnJvbGVFZGl0b3IucmVzZXRGb3JtKHRydWUpO1xuICAgIH1cblxuXG4gICAgbmV3Um9sZSgpIHtcbiAgICAgICAgdGhpcy5lZGl0aW5nUm9sZU5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLnNvdXJjZVJvbGUgPSBudWxsO1xuICAgICAgICB0aGlzLmVkaXRlZFJvbGUgPSB0aGlzLnJvbGVFZGl0b3IubmV3Um9sZSh0aGlzLmFsbFBlcm1pc3Npb25zKTtcbiAgICAgICAgdGhpcy5lZGl0b3JNb2RhbC5zaG93KCk7XG4gICAgfVxuXG5cbiAgICBlZGl0Um9sZShyb3c6IFJvbGUpIHtcbiAgICAgICAgdGhpcy5lZGl0aW5nUm9sZU5hbWUgPSB7IG5hbWU6IHJvdy5uYW1lIH07XG4gICAgICAgIHRoaXMuc291cmNlUm9sZSA9IHJvdztcbiAgICAgICAgdGhpcy5lZGl0ZWRSb2xlID0gdGhpcy5yb2xlRWRpdG9yLmVkaXRSb2xlKHJvdywgdGhpcy5hbGxQZXJtaXNzaW9ucyk7XG4gICAgICAgIHRoaXMuZWRpdG9yTW9kYWwuc2hvdygpO1xuICAgIH1cblxuICAgIGRlbGV0ZVJvbGUocm93OiBSb2xlKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dEaWFsb2coJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIFxcXCInICsgcm93Lm5hbWUgKyAnXFxcIiByb2xlPycsIERpYWxvZ1R5cGUuY29uZmlybSwgKCkgPT4gdGhpcy5kZWxldGVSb2xlSGVscGVyKHJvdykpO1xuICAgIH1cblxuXG4gICAgZGVsZXRlUm9sZUhlbHBlcihyb3c6IFJvbGUpIHtcblxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCdEZWxldGluZy4uLicpO1xuICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuZGVsZXRlUm9sZShyb3cpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzQ2FjaGUgPSB0aGlzLnJvd3NDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSByb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IHRoaXMucm93cy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSByb3cpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZSgnRGVsZXRlIEVycm9yJywgYEFuIGVycm9yIG9jY3VyZWQgd2hpbHN0IGRlbGV0aW5nIHRoZSByb2xlLlxcclxcbkVycm9yOiBcIiR7VXRpbGl0aWVzLmdldEh0dHBSZXNwb25zZU1lc3NhZ2VzKGVycm9yKX1cImAsXG4gICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGdldCBjYW5NYW5hZ2VSb2xlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudFNlcnZpY2UudXNlckhhc1Blcm1pc3Npb24oUGVybWlzc2lvbi5tYW5hZ2VSb2xlc1Blcm1pc3Npb24pO1xuICAgIH1cblxufVxuIiwiPGRpdj5cbiAgPGRpdiBjbGFzcz1cInJvdyBjb250cm9sLWJveFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgc2VhcmNoLWJveFwiPlxuICAgICAgICA8c2VhcmNoLWJveCAoc2VhcmNoQ2hhbmdlKT1cIm9uU2VhcmNoQ2hhbmdlZCgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJ7eydyb2xlcy5tYW5hZ2VtZW50LlNlYXJjaCcgfCB0cmFuc2xhdGV9fVwiPj48L3NlYXJjaC1ib3g+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTQgcHItbGctNVwiPlxuICAgICAgPHVsIGNsYXNzPVwibmF2IGZsZXgtY29sdW1uIGZsZXgtbGctcm93IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgPGxpICpuZ0lmPVwiY2FuTWFuYWdlUm9sZXNcIiBjbGFzcz1cIm5hdi1pdGVtIHRvb2xiYXJpdGVtXCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiAoY2xpY2spPVwibmV3Um9sZSgpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXMtY2lyY2xlXCI+PC9pPiB7eydyb2xlcy5tYW5hZ2VtZW50Lk5ld1JvbGUnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8bmd4LWRhdGF0YWJsZSBjbGFzcz1cIm1hdGVyaWFsIGNvbG9yZWQtaGVhZGVyIHNtIHRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtaG92ZXJcIlxuICAgICAgICAgICAgICAgICBbbG9hZGluZ0luZGljYXRvcl09XCJsb2FkaW5nSW5kaWNhdG9yXCJcbiAgICAgICAgICAgICAgICAgW3Jvd3NdPVwicm93c1wiXG4gICAgICAgICAgICAgICAgIFtyb3dIZWlnaHRdPVwiMzVcIlxuICAgICAgICAgICAgICAgICBbaGVhZGVySGVpZ2h0XT1cIjM1XCJcbiAgICAgICAgICAgICAgICAgW2Zvb3RlckhlaWdodF09XCIzNVwiXG4gICAgICAgICAgICAgICAgIFtjb2x1bW5zXT1cImNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICBbc2Nyb2xsYmFyVl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgW2NvbHVtbk1vZGVdPVwiJ2ZvcmNlJ1wiPlxuICA8L25neC1kYXRhdGFibGU+XG5cbiAgPG5nLXRlbXBsYXRlICNpbmRleFRlbXBsYXRlIGxldC12YWx1ZT1cInZhbHVlXCI+XG4gICAgPHN0cm9uZz57e3ZhbHVlfX08L3N0cm9uZz5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuXG4gIDxuZy10ZW1wbGF0ZSAjYWN0aW9uc1RlbXBsYXRlIGxldC1yb3c9XCJyb3dcIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiIGxldC1pPVwiaW5kZXhcIj5cbiAgICA8YSAqbmdJZj1cImNhbk1hbmFnZVJvbGVzXCIgY2xhc3M9XCJidG4gYnRuLWxpbmsgYnRuLXNtXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiIChjbGljayk9XCJlZGl0Um9sZShyb3cpXCI+PGkgY2xhc3M9XCJmYSBmYS1wZW5jaWwtc3F1YXJlLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IHt7J3JvbGVzLm1hbmFnZW1lbnQuRWRpdCcgfCB0cmFuc2xhdGV9fTwvYT5cbiAgICA8YSAqbmdJZj1cIiFjYW5NYW5hZ2VSb2xlc1wiIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiAoY2xpY2spPVwiZWRpdFJvbGUocm93KVwiPjxpIGNsYXNzPVwiZmEgZmEtZXllXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiB7eydyb2xlcy5tYW5hZ2VtZW50LkRldGFpbHMnIHwgdHJhbnNsYXRlfX08L2E+XG4gICAge3tjYW5NYW5hZ2VSb2xlcyA/ICd8JyA6ICcnfX1cbiAgICA8YSAqbmdJZj1cImNhbk1hbmFnZVJvbGVzXCIgY2xhc3M9XCJidG4gYnRuLWxpbmsgYnRuLXNtXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiIChjbGljayk9XCJkZWxldGVSb2xlKHJvdylcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IHt7J3JvbGVzLm1hbmFnZW1lbnQuRGVsZXRlJyB8IHRyYW5zbGF0ZX19PC9hPlxuICA8L25nLXRlbXBsYXRlPlxuXG5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIiBic01vZGFsICNlZGl0b3JNb2RhbD1cImJzLW1vZGFsXCIgKG9uSGlkZGVuKT1cIm9uRWRpdG9yTW9kYWxIaWRkZW4oKVwiIFtjb25maWddPVwie2JhY2tkcm9wOiAnc3RhdGljJ31cIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZyBtb2RhbC1sZ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgIDxoNCAqbmdJZj1cIiFjYW5NYW5hZ2VSb2xlc1wiIGNsYXNzPVwibW9kYWwtdGl0bGUgZmxvYXQtbGVmdFwiPjxpIGNsYXNzPVwiZmEgZmEtc2hpZWxkXCI+PC9pPiB7eydyb2xlcy5tYW5hZ2VtZW50LlJvbGVEZXRhaWxzJyB8IHRyYW5zbGF0ZTplZGl0aW5nUm9sZU5hbWV9fTwvaDQ+XG4gICAgICAgICAgPGg0ICpuZ0lmPVwiY2FuTWFuYWdlUm9sZXNcIiBjbGFzcz1cIm1vZGFsLXRpdGxlIGZsb2F0LWxlZnRcIj48aSBjbGFzcz1cImZhIGZhLXNoaWVsZFwiPjwvaT4ge3tlZGl0aW5nUm9sZU5hbWUgPyAoJ3JvbGVzLm1hbmFnZW1lbnQuRWRpdFJvbGUnIHwgdHJhbnNsYXRlOmVkaXRpbmdSb2xlTmFtZSkgOiAoJ3JvbGVzLm1hbmFnZW1lbnQuTmV3Um9sZScgfCB0cmFuc2xhdGUpfX08L2g0PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2UgZmxvYXQtcmlnaHRcIiB0aXRsZT1cIkNsb3NlXCIgKGNsaWNrKT1cImVkaXRvck1vZGFsLmhpZGUoKVwiPlxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgPHJvbGUtZWRpdG9yICNyb2xlRWRpdG9yPjwvcm9sZS1lZGl0b3I+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=