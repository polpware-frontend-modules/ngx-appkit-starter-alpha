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
const _c0 = ["indexTemplate"];
const _c1 = ["actionsTemplate"];
const _c2 = ["editorModal"];
const _c3 = ["roleEditor"];
function RolesManagementComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 20);
    i0.ɵɵelementStart(1, "a", 21);
    i0.ɵɵlistener("click", function RolesManagementComponent_li_9_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.newRole(); });
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
    const value_r11 = ctx.value;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(value_r11);
} }
function RolesManagementComponent_ng_template_13_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 24);
    i0.ɵɵlistener("click", function RolesManagementComponent_ng_template_13_a_0_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r20); const row_r12 = i0.ɵɵnextContext().row; const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.editRole(row_r12); });
    i0.ɵɵelement(1, "i", 25);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, "roles.management.Edit"), "");
} }
function RolesManagementComponent_ng_template_13_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 24);
    i0.ɵɵlistener("click", function RolesManagementComponent_ng_template_13_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r23); const row_r12 = i0.ɵɵnextContext().row; const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.editRole(row_r12); });
    i0.ɵɵelement(1, "i", 26);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, "roles.management.Details"), "");
} }
function RolesManagementComponent_ng_template_13_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 24);
    i0.ɵɵlistener("click", function RolesManagementComponent_ng_template_13_a_3_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r26); const row_r12 = i0.ɵɵnextContext().row; const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.deleteRole(row_r12); });
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
    const ctx_r4 = i0.ɵɵnextContext();
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
    const ctx_r6 = i0.ɵɵnextContext();
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
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.editingRoleName ? i0.ɵɵpipeBind2(3, 1, "roles.management.EditRole", ctx_r7.editingRoleName) : i0.ɵɵpipeBind1(4, 4, "roles.management.NewRole"), "");
} }
const _c4 = function () { return { backdrop: "static" }; };
export class RolesManagementComponent {
    constructor(alertService, translationService, accountService) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.columns = [];
        this.rows = [];
        this.rowsCache = [];
        this.allPermissions = [];
    }
    ngOnInit() {
        const gT = (key) => this.translationService.getTranslation(key);
        this.columns = [
            { prop: 'index', name: '#', width: 50, cellTemplate: this.indexTemplate, canAutoResize: false },
            { prop: 'name', name: gT('roles.management.Name'), width: 180 },
            { prop: 'description', name: gT('roles.management.Description'), width: 320 },
            { prop: 'usersCount', name: gT('roles.management.Users'), width: 50 },
            { name: '', width: 160, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
        ];
        this.loadData();
    }
    ngAfterViewInit() {
        this.roleEditor.changesSavedCallback = () => {
            this.addNewRoleToList();
            this.editorModal.hide();
        };
        this.roleEditor.changesCancelledCallback = () => {
            this.editedRole = null;
            this.sourceRole = null;
            this.editorModal.hide();
        };
    }
    addNewRoleToList() {
        if (this.sourceRole) {
            Object.assign(this.sourceRole, this.editedRole);
            let sourceIndex = this.rowsCache.indexOf(this.sourceRole, 0);
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
            const role = new Role();
            Object.assign(role, this.editedRole);
            this.editedRole = null;
            let maxIndex = 0;
            for (const r of this.rowsCache) {
                if (r.index > maxIndex) {
                    maxIndex = r.index;
                }
            }
            role.index = maxIndex + 1;
            this.rowsCache.splice(0, 0, role);
            this.rows.splice(0, 0, role);
            this.rows = [...this.rows];
        }
    }
    loadData() {
        this.alertService.startLoadingMessage();
        this.loadingIndicator = true;
        this.accountService.getRolesAndPermissions()
            .subscribe(results => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            const roles = results[0];
            const permissions = results[1];
            roles.forEach((role, index, roles) => {
                role.index = index + 1;
            });
            this.rowsCache = [...roles];
            this.rows = roles;
            this.allPermissions = permissions;
        }, error => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.alertService.showStickyMessage('Load Error', `Unable to retrieve roles from the server.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        });
    }
    onSearchChanged(value) {
        this.rows = this.rowsCache.filter(r => Utilities.searchArray(value, false, r.name, r.description));
    }
    onEditorModalHidden() {
        this.editingRoleName = null;
        this.roleEditor.resetForm(true);
    }
    newRole() {
        this.editingRoleName = null;
        this.sourceRole = null;
        this.editedRole = this.roleEditor.newRole(this.allPermissions);
        this.editorModal.show();
    }
    editRole(row) {
        this.editingRoleName = { name: row.name };
        this.sourceRole = row;
        this.editedRole = this.roleEditor.editRole(row, this.allPermissions);
        this.editorModal.show();
    }
    deleteRole(row) {
        this.alertService.showDialog('Are you sure you want to delete the \"' + row.name + '\" role?', DialogType.confirm, () => this.deleteRoleHelper(row));
    }
    deleteRoleHelper(row) {
        this.alertService.startLoadingMessage('Deleting...');
        this.loadingIndicator = true;
        this.accountService.deleteRole(row)
            .subscribe(results => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.rowsCache = this.rowsCache.filter(item => item !== row);
            this.rows = this.rows.filter(item => item !== row);
        }, error => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.alertService.showStickyMessage('Delete Error', `An error occured whilst deleting the role.\r\nError: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        });
    }
    get canManageRoles() {
        return this.accountService.userHasPermission(Permission.manageRolesPermission);
    }
}
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
        const _r27 = i0.ɵɵgetCurrentView();
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
        i0.ɵɵlistener("click", function RolesManagementComponent_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r27); const _r5 = i0.ɵɵreference(16); return _r5.hide(); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZXMtbWFuYWdlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcm9sZXMtbWFuYWdlbWVudC9yb2xlcy1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3JvbGVzLW1hbmFnZW1lbnQvcm9sZXMtbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixnQ0FBZ0M7QUFFaEMsT0FBTyxFQUFFLFNBQVMsRUFBc0MsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBR2hHLE9BQU8sRUFDSCxVQUFVLEVBQUUsZUFBZSxFQUMzQixTQUFTLEVBQ1osTUFBTSxzQ0FBc0MsQ0FBQztBQVU5QyxPQUFPLEVBQ0gsVUFBVSxFQUNiLE1BQU0sc0JBQXNCLENBQUM7QUFHOUIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lDakJ2Qyw4QkFDRTtJQUFBLDZCQUNFO0lBRHNDLG9MQUFtQjtJQUN6RCx3QkFBaUM7SUFBQyxZQUNwQzs7SUFBQSxpQkFBSTtJQUNOLGlCQUFLOztJQUZpQyxlQUNwQztJQURvQyxpRkFDcEM7OztJQWtCTiw4QkFBUTtJQUFBLFlBQVM7SUFBQSxpQkFBUzs7O0lBQWxCLGVBQVM7SUFBVCwrQkFBUzs7OztJQUtqQiw2QkFBa0c7SUFBeEIsb1BBQXVCO0lBQUMsd0JBQXdEO0lBQUMsWUFBdUM7O0lBQUEsaUJBQUk7O0lBQTNDLGVBQXVDO0lBQXZDLDZFQUF1Qzs7OztJQUNsTSw2QkFBbUc7SUFBeEIsb1BBQXVCO0lBQUMsd0JBQTRDO0lBQUMsWUFBMEM7O0lBQUEsaUJBQUk7O0lBQTlDLGVBQTBDO0lBQTFDLGdGQUEwQzs7OztJQUUxTCw2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QkFDUCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNuRDs7a0JBYUksU0FBUzttQkFBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFHM0MsU0FBUzttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUc3QyxTQUFTO21CQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUd6QyxTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcblxuaW1wb3J0IHtcbiAgICBEaWFsb2dUeXBlLCBNZXNzYWdlU2V2ZXJpdHksXG4gICAgVXRpbGl0aWVzXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cblxuaW1wb3J0IHtcbiAgICBBbGVydFNlcnZpY2UsXG4gICAgQXBwVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIExvY2FsU3RvcmVNYW5hZ2VyLFxuICAgIENvbmZpZ3VyYXRpb25TZXJ2aWNlXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXNlcnZpY2VzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBQZXJtaXNzaW9uXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtb2F1dGgyJztcblxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgUm9sZSB9IGZyb20gJy4uLy4uL21vZGVscy9yb2xlLm1vZGVsJztcbmltcG9ydCB7IFJvbGVFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi9yb2xlLWVkaXRvci9yb2xlLWVkaXRvci5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm9sZXMtbWFuYWdlbWVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JvbGVzLW1hbmFnZW1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3JvbGVzLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSb2xlc01hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIGNvbHVtbnM6IGFueVtdID0gW107XG4gICAgcm93czogUm9sZVtdID0gW107XG4gICAgcm93c0NhY2hlOiBSb2xlW10gPSBbXTtcbiAgICBhbGxQZXJtaXNzaW9uczogUGVybWlzc2lvbltdID0gW107XG4gICAgZWRpdGVkUm9sZTogUm9sZTtcbiAgICBzb3VyY2VSb2xlOiBSb2xlO1xuICAgIGVkaXRpbmdSb2xlTmFtZTogeyBuYW1lOiBzdHJpbmcgfTtcbiAgICBsb2FkaW5nSW5kaWNhdG9yOiBib29sZWFuO1xuXG5cblxuICAgIEBWaWV3Q2hpbGQoJ2luZGV4VGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGluZGV4VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdhY3Rpb25zVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGFjdGlvbnNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2VkaXRvck1vZGFsJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBlZGl0b3JNb2RhbDogTW9kYWxEaXJlY3RpdmU7XG5cbiAgICBAVmlld0NoaWxkKCdyb2xlRWRpdG9yJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICByb2xlRWRpdG9yOiBSb2xlRWRpdG9yQ29tcG9uZW50O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSwgcHJpdmF0ZSB0cmFuc2xhdGlvblNlcnZpY2U6IEFwcFRyYW5zbGF0aW9uU2VydmljZSwgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UpIHtcbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIGNvbnN0IGdUID0gKGtleTogc3RyaW5nKSA9PiB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5nZXRUcmFuc2xhdGlvbihrZXkpO1xuXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtcbiAgICAgICAgICAgIHsgcHJvcDogJ2luZGV4JywgbmFtZTogJyMnLCB3aWR0aDogNTAsIGNlbGxUZW1wbGF0ZTogdGhpcy5pbmRleFRlbXBsYXRlLCBjYW5BdXRvUmVzaXplOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBwcm9wOiAnbmFtZScsIG5hbWU6IGdUKCdyb2xlcy5tYW5hZ2VtZW50Lk5hbWUnKSwgd2lkdGg6IDE4MCB9LFxuICAgICAgICAgICAgeyBwcm9wOiAnZGVzY3JpcHRpb24nLCBuYW1lOiBnVCgncm9sZXMubWFuYWdlbWVudC5EZXNjcmlwdGlvbicpLCB3aWR0aDogMzIwIH0sXG4gICAgICAgICAgICB7IHByb3A6ICd1c2Vyc0NvdW50JywgbmFtZTogZ1QoJ3JvbGVzLm1hbmFnZW1lbnQuVXNlcnMnKSwgd2lkdGg6IDUwIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICcnLCB3aWR0aDogMTYwLCBjZWxsVGVtcGxhdGU6IHRoaXMuYWN0aW9uc1RlbXBsYXRlLCByZXNpemVhYmxlOiBmYWxzZSwgY2FuQXV0b1Jlc2l6ZTogZmFsc2UsIHNvcnRhYmxlOiBmYWxzZSwgZHJhZ2dhYmxlOiBmYWxzZSB9XG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgIH1cblxuXG5cblxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gICAgICAgIHRoaXMucm9sZUVkaXRvci5jaGFuZ2VzU2F2ZWRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkTmV3Um9sZVRvTGlzdCgpO1xuICAgICAgICAgICAgdGhpcy5lZGl0b3JNb2RhbC5oaWRlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yb2xlRWRpdG9yLmNoYW5nZXNDYW5jZWxsZWRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWRpdGVkUm9sZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZVJvbGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5lZGl0b3JNb2RhbC5oaWRlKCk7XG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhZGROZXdSb2xlVG9MaXN0KCkge1xuICAgICAgICBpZiAodGhpcy5zb3VyY2VSb2xlKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuc291cmNlUm9sZSwgdGhpcy5lZGl0ZWRSb2xlKTtcblxuICAgICAgICAgICAgbGV0IHNvdXJjZUluZGV4ID0gdGhpcy5yb3dzQ2FjaGUuaW5kZXhPZih0aGlzLnNvdXJjZVJvbGUsIDApO1xuICAgICAgICAgICAgaWYgKHNvdXJjZUluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBVdGlsaXRpZXMubW92ZUFycmF5SXRlbSh0aGlzLnJvd3NDYWNoZSwgc291cmNlSW5kZXgsIDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzb3VyY2VJbmRleCA9IHRoaXMucm93cy5pbmRleE9mKHRoaXMuc291cmNlUm9sZSwgMCk7XG4gICAgICAgICAgICBpZiAoc291cmNlSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIFV0aWxpdGllcy5tb3ZlQXJyYXlJdGVtKHRoaXMucm93cywgc291cmNlSW5kZXgsIDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmVkaXRlZFJvbGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zb3VyY2VSb2xlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJvbGUgPSBuZXcgUm9sZSgpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihyb2xlLCB0aGlzLmVkaXRlZFJvbGUpO1xuICAgICAgICAgICAgdGhpcy5lZGl0ZWRSb2xlID0gbnVsbDtcblxuICAgICAgICAgICAgbGV0IG1heEluZGV4ID0gMDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvd3NDYWNoZSkge1xuICAgICAgICAgICAgICAgIGlmICgociBhcyBhbnkpLmluZGV4ID4gbWF4SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4SW5kZXggPSAociBhcyBhbnkpLmluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgKHJvbGUgYXMgYW55KS5pbmRleCA9IG1heEluZGV4ICsgMTtcblxuICAgICAgICAgICAgdGhpcy5yb3dzQ2FjaGUuc3BsaWNlKDAsIDAsIHJvbGUpO1xuICAgICAgICAgICAgdGhpcy5yb3dzLnNwbGljZSgwLCAwLCByb2xlKTtcbiAgICAgICAgICAgIHRoaXMucm93cyA9IFsuLi50aGlzLnJvd3NdO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG4gICAgbG9hZERhdGEoKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0YXJ0TG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmdldFJvbGVzQW5kUGVybWlzc2lvbnMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJvbGVzID0gcmVzdWx0c1swXTtcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJtaXNzaW9ucyA9IHJlc3VsdHNbMV07XG5cbiAgICAgICAgICAgICAgICByb2xlcy5mb3JFYWNoKChyb2xlLCBpbmRleCwgcm9sZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgKHJvbGUgYXMgYW55KS5pbmRleCA9IGluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzQ2FjaGUgPSBbLi4ucm9sZXNdO1xuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IHJvbGVzO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxQZXJtaXNzaW9ucyA9IHBlcm1pc3Npb25zO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZSgnTG9hZCBFcnJvcicsIGBVbmFibGUgdG8gcmV0cmlldmUgcm9sZXMgZnJvbSB0aGUgc2VydmVyLlxcclxcbkVycm9yczogXCIke1V0aWxpdGllcy5nZXRIdHRwUmVzcG9uc2VNZXNzYWdlcyhlcnJvcil9XCJgLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBvblNlYXJjaENoYW5nZWQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLnJvd3NDYWNoZS5maWx0ZXIociA9PiBVdGlsaXRpZXMuc2VhcmNoQXJyYXkodmFsdWUsIGZhbHNlLCByLm5hbWUsIHIuZGVzY3JpcHRpb24pKTtcbiAgICB9XG5cblxuICAgIG9uRWRpdG9yTW9kYWxIaWRkZW4oKSB7XG4gICAgICAgIHRoaXMuZWRpdGluZ1JvbGVOYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5yb2xlRWRpdG9yLnJlc2V0Rm9ybSh0cnVlKTtcbiAgICB9XG5cblxuICAgIG5ld1JvbGUoKSB7XG4gICAgICAgIHRoaXMuZWRpdGluZ1JvbGVOYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5zb3VyY2VSb2xlID0gbnVsbDtcbiAgICAgICAgdGhpcy5lZGl0ZWRSb2xlID0gdGhpcy5yb2xlRWRpdG9yLm5ld1JvbGUodGhpcy5hbGxQZXJtaXNzaW9ucyk7XG4gICAgICAgIHRoaXMuZWRpdG9yTW9kYWwuc2hvdygpO1xuICAgIH1cblxuXG4gICAgZWRpdFJvbGUocm93OiBSb2xlKSB7XG4gICAgICAgIHRoaXMuZWRpdGluZ1JvbGVOYW1lID0geyBuYW1lOiByb3cubmFtZSB9O1xuICAgICAgICB0aGlzLnNvdXJjZVJvbGUgPSByb3c7XG4gICAgICAgIHRoaXMuZWRpdGVkUm9sZSA9IHRoaXMucm9sZUVkaXRvci5lZGl0Um9sZShyb3csIHRoaXMuYWxsUGVybWlzc2lvbnMpO1xuICAgICAgICB0aGlzLmVkaXRvck1vZGFsLnNob3coKTtcbiAgICB9XG5cbiAgICBkZWxldGVSb2xlKHJvdzogUm9sZSkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93RGlhbG9nKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBcXFwiJyArIHJvdy5uYW1lICsgJ1xcXCIgcm9sZT8nLCBEaWFsb2dUeXBlLmNvbmZpcm0sICgpID0+IHRoaXMuZGVsZXRlUm9sZUhlbHBlcihyb3cpKTtcbiAgICB9XG5cblxuICAgIGRlbGV0ZVJvbGVIZWxwZXIocm93OiBSb2xlKSB7XG5cbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RhcnRMb2FkaW5nTWVzc2FnZSgnRGVsZXRpbmcuLi4nKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmRlbGV0ZVJvbGUocm93KVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHRoaXMucm93c0NhY2hlID0gdGhpcy5yb3dzQ2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gcm93KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLnJvd3MuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gcm93KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ0RlbGV0ZSBFcnJvcicsIGBBbiBlcnJvciBvY2N1cmVkIHdoaWxzdCBkZWxldGluZyB0aGUgcm9sZS5cXHJcXG5FcnJvcjogXCIke1V0aWxpdGllcy5nZXRIdHRwUmVzcG9uc2VNZXNzYWdlcyhlcnJvcil9XCJgLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBnZXQgY2FuTWFuYWdlUm9sZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRTZXJ2aWNlLnVzZXJIYXNQZXJtaXNzaW9uKFBlcm1pc3Npb24ubWFuYWdlUm9sZXNQZXJtaXNzaW9uKTtcbiAgICB9XG5cbn1cbiIsIjxkaXY+XG4gIDxkaXYgY2xhc3M9XCJyb3cgY29udHJvbC1ib3hcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLThcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNlYXJjaC1ib3hcIj5cbiAgICAgICAgPHNlYXJjaC1ib3ggKHNlYXJjaENoYW5nZSk9XCJvblNlYXJjaENoYW5nZWQoJGV2ZW50KVwiIHBsYWNlaG9sZGVyPVwie3sncm9sZXMubWFuYWdlbWVudC5TZWFyY2gnIHwgdHJhbnNsYXRlfX1cIj4+PC9zZWFyY2gtYm94PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1sZy00IHByLWxnLTVcIj5cbiAgICAgIDx1bCBjbGFzcz1cIm5hdiBmbGV4LWNvbHVtbiBmbGV4LWxnLXJvdyBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgIDxsaSAqbmdJZj1cImNhbk1hbmFnZVJvbGVzXCIgY2xhc3M9XCJuYXYtaXRlbSB0b29sYmFyaXRlbVwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiamF2YXNjcmlwdDo7XCIgKGNsaWNrKT1cIm5ld1JvbGUoKVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1wbHVzLWNpcmNsZVwiPjwvaT4ge3sncm9sZXMubWFuYWdlbWVudC5OZXdSb2xlJyB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPG5neC1kYXRhdGFibGUgY2xhc3M9XCJtYXRlcmlhbCBjb2xvcmVkLWhlYWRlciBzbSB0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLWhvdmVyXCJcbiAgICAgICAgICAgICAgICAgW2xvYWRpbmdJbmRpY2F0b3JdPVwibG9hZGluZ0luZGljYXRvclwiXG4gICAgICAgICAgICAgICAgIFtyb3dzXT1cInJvd3NcIlxuICAgICAgICAgICAgICAgICBbcm93SGVpZ2h0XT1cIjM1XCJcbiAgICAgICAgICAgICAgICAgW2hlYWRlckhlaWdodF09XCIzNVwiXG4gICAgICAgICAgICAgICAgIFtmb290ZXJIZWlnaHRdPVwiMzVcIlxuICAgICAgICAgICAgICAgICBbY29sdW1uc109XCJjb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgW3Njcm9sbGJhclZdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgIFtjb2x1bW5Nb2RlXT1cIidmb3JjZSdcIj5cbiAgPC9uZ3gtZGF0YXRhYmxlPlxuXG4gIDxuZy10ZW1wbGF0ZSAjaW5kZXhUZW1wbGF0ZSBsZXQtdmFsdWU9XCJ2YWx1ZVwiPlxuICAgIDxzdHJvbmc+e3t2YWx1ZX19PC9zdHJvbmc+XG4gIDwvbmctdGVtcGxhdGU+XG5cblxuICA8bmctdGVtcGxhdGUgI2FjdGlvbnNUZW1wbGF0ZSBsZXQtcm93PVwicm93XCIgbGV0LXZhbHVlPVwidmFsdWVcIiBsZXQtaT1cImluZGV4XCI+XG4gICAgPGEgKm5nSWY9XCJjYW5NYW5hZ2VSb2xlc1wiIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiAoY2xpY2spPVwiZWRpdFJvbGUocm93KVwiPjxpIGNsYXNzPVwiZmEgZmEtcGVuY2lsLXNxdWFyZS1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiB7eydyb2xlcy5tYW5hZ2VtZW50LkVkaXQnIHwgdHJhbnNsYXRlfX08L2E+XG4gICAgPGEgKm5nSWY9XCIhY2FuTWFuYWdlUm9sZXNcIiBjbGFzcz1cImJ0biBidG4tbGluayBidG4tc21cIiBocmVmPVwiamF2YXNjcmlwdDo7XCIgKGNsaWNrKT1cImVkaXRSb2xlKHJvdylcIj48aSBjbGFzcz1cImZhIGZhLWV5ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4ge3sncm9sZXMubWFuYWdlbWVudC5EZXRhaWxzJyB8IHRyYW5zbGF0ZX19PC9hPlxuICAgIHt7Y2FuTWFuYWdlUm9sZXMgPyAnfCcgOiAnJ319XG4gICAgPGEgKm5nSWY9XCJjYW5NYW5hZ2VSb2xlc1wiIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiAoY2xpY2spPVwiZGVsZXRlUm9sZShyb3cpXCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaC1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiB7eydyb2xlcy5tYW5hZ2VtZW50LkRlbGV0ZScgfCB0cmFuc2xhdGV9fTwvYT5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuXG4gIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgYnNNb2RhbCAjZWRpdG9yTW9kYWw9XCJicy1tb2RhbFwiIChvbkhpZGRlbik9XCJvbkVkaXRvck1vZGFsSGlkZGVuKClcIiBbY29uZmlnXT1cIntiYWNrZHJvcDogJ3N0YXRpYyd9XCIgdGFiaW5kZXg9XCItMVwiPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtbGdcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICA8aDQgKm5nSWY9XCIhY2FuTWFuYWdlUm9sZXNcIiBjbGFzcz1cIm1vZGFsLXRpdGxlIGZsb2F0LWxlZnRcIj48aSBjbGFzcz1cImZhIGZhLXNoaWVsZFwiPjwvaT4ge3sncm9sZXMubWFuYWdlbWVudC5Sb2xlRGV0YWlscycgfCB0cmFuc2xhdGU6ZWRpdGluZ1JvbGVOYW1lfX08L2g0PlxuICAgICAgICAgIDxoNCAqbmdJZj1cImNhbk1hbmFnZVJvbGVzXCIgY2xhc3M9XCJtb2RhbC10aXRsZSBmbG9hdC1sZWZ0XCI+PGkgY2xhc3M9XCJmYSBmYS1zaGllbGRcIj48L2k+IHt7ZWRpdGluZ1JvbGVOYW1lID8gKCdyb2xlcy5tYW5hZ2VtZW50LkVkaXRSb2xlJyB8IHRyYW5zbGF0ZTplZGl0aW5nUm9sZU5hbWUpIDogKCdyb2xlcy5tYW5hZ2VtZW50Lk5ld1JvbGUnIHwgdHJhbnNsYXRlKX19PC9oND5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlIGZsb2F0LXJpZ2h0XCIgdGl0bGU9XCJDbG9zZVwiIChjbGljayk9XCJlZGl0b3JNb2RhbC5oaWRlKClcIj5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgIDxyb2xlLWVkaXRvciAjcm9sZUVkaXRvcj48L3JvbGUtZWRpdG9yPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19