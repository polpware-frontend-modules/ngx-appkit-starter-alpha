// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, ViewChild } from '@angular/core';
import { MessageSeverity } from '@polpware/ngx-appkit-contracts-alpha';
import { Permission } from '@polpware/ngx-oauth2';
import { Role } from '../../models/role.model';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-appkit-services-alpha";
import * as i2 from "../../services/account.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "ngx-bootstrap/tooltip";
import * as i6 from "@ngx-translate/core";
import * as i7 from "../../pipes/group-by.pipe";
var _c0 = ["f"];
var _c1 = function (a0, a1) { return { "fa-check": a0, "fa-times": a1 }; };
function RoleEditorComponent_form_1_i_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 27);
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r2 = i0.ɵɵreference(10);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c1, _r2.valid, !_r2.valid));
} }
function RoleEditorComponent_form_1_span_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "roles.editor.RoleNameRequired"), " ");
} }
function RoleEditorComponent_form_1_ng_template_28_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵelementStart(1, "input", 35);
    i0.ɵɵlistener("ngModelChange", function RoleEditorComponent_form_1_ng_template_28_div_4_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r16); var permission_r14 = ctx.$implicit; var ctx_r15 = i0.ɵɵnextContext(3); return (ctx_r15.selectedValues[permission_r14.value] = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 36);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var permission_r14 = ctx.$implicit;
    var ctx_r12 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("name", "checkboxes-", permission_r14.value, "");
    i0.ɵɵpropertyInterpolate1("id", "checkboxes-", permission_r14.value, "");
    i0.ɵɵproperty("disabled", !ctx_r12.canManageRoles)("ngModel", ctx_r12.selectedValues[permission_r14.value]);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("tooltip", permission_r14.description);
    i0.ɵɵpropertyInterpolate1("for", "checkboxes-", permission_r14.value, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(permission_r14.name);
} }
function RoleEditorComponent_form_1_ng_template_28_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 26);
} }
function RoleEditorComponent_form_1_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    var _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵelementStart(1, "label", 30);
    i0.ɵɵlistener("click", function RoleEditorComponent_form_1_ng_template_28_Template_label_click_1_listener() { i0.ɵɵrestoreView(_r18); var permissionGroup_r10 = ctx.$implicit; var ctx_r17 = i0.ɵɵnextContext(2); return ctx_r17.toggleGroup(permissionGroup_r10.key); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 31);
    i0.ɵɵtemplate(4, RoleEditorComponent_form_1_ng_template_28_div_4_Template, 4, 7, "div", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RoleEditorComponent_form_1_ng_template_28_div_5_Template, 1, 0, "div", 33);
} if (rf & 2) {
    var permissionGroup_r10 = ctx.$implicit;
    var i_r11 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(permissionGroup_r10.key);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", permissionGroup_r10.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (i_r11 + 1) % 2 === 0);
} }
function RoleEditorComponent_form_1_div_35_Template(rf, ctx) { if (rf & 1) {
    var _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵelementStart(1, "a", 38);
    i0.ɵɵlistener("click", function RoleEditorComponent_form_1_div_35_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r20); var ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.selectAll(); });
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, "|");
    i0.ɵɵelementStart(5, "a", 38);
    i0.ɵɵlistener("click", function RoleEditorComponent_form_1_div_35_Template_a_click_5_listener() { i0.ɵɵrestoreView(_r20); var ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.selectNone(); });
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, "roles.editor.SelectAll"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 4, "roles.editor.SelectNone"));
} }
function RoleEditorComponent_form_1_button_39_Template(rf, ctx) { if (rf & 1) {
    var _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵlistener("click", function RoleEditorComponent_form_1_button_39_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r23); var ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.cancel(); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, "roles.editor.Close"));
} }
function RoleEditorComponent_form_1_button_41_Template(rf, ctx) { if (rf & 1) {
    var _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 40);
    i0.ɵɵlistener("click", function RoleEditorComponent_form_1_button_41_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r25); var ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.cancel(); });
    i0.ɵɵelement(1, "i", 41);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r8.isSaving);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "roles.editor.Cancel"), "");
} }
function RoleEditorComponent_form_1_button_43_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 45);
} }
function RoleEditorComponent_form_1_button_43_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 46);
} }
function RoleEditorComponent_form_1_button_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 42);
    i0.ɵɵtext(1, "\n            ");
    i0.ɵɵtemplate(2, RoleEditorComponent_form_1_button_43_i_2_Template, 1, 0, "i", 43);
    i0.ɵɵtemplate(3, RoleEditorComponent_form_1_button_43_i_3_Template, 1, 0, "i", 44);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r9.isSaving);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r9.isSaving);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.isSaving);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.isSaving ? i0.ɵɵpipeBind1(5, 4, "roles.editor.Saving") : i0.ɵɵpipeBind1(6, 6, "roles.editor.Save"), "\n          ");
} }
var _c2 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
function RoleEditorComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    var _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 1, 2);
    i0.ɵɵlistener("ngSubmit", function RoleEditorComponent_form_1_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r29); var _r1 = i0.ɵɵreference(1); var _r2 = i0.ɵɵreference(10); var ctx_r28 = i0.ɵɵnextContext(); return _r1.form.valid ? ctx_r28.save() : !_r2.valid && ctx_r28.showErrorAlert("Role name is required", "Please enter a role name (minimum of 2 and maximum of 200 characters)"); });
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelementStart(3, "div", 4);
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵelementStart(5, "label", 6);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 7);
    i0.ɵɵelementStart(9, "input", 8, 9);
    i0.ɵɵlistener("ngModelChange", function RoleEditorComponent_form_1_Template_input_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r29); var ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.roleEdit.name = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, RoleEditorComponent_form_1_i_11_Template, 1, 4, "i", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 11);
    i0.ɵɵelementStart(13, "div", 12);
    i0.ɵɵelementStart(14, "label", 13);
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 7);
    i0.ɵɵelementStart(18, "input", 14);
    i0.ɵɵlistener("ngModelChange", function RoleEditorComponent_form_1_Template_input_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r29); var ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.roleEdit.description = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 3);
    i0.ɵɵelementStart(20, "div", 15);
    i0.ɵɵtemplate(21, RoleEditorComponent_form_1_span_21_Template, 3, 3, "span", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 3);
    i0.ɵɵelementStart(23, "div", 15);
    i0.ɵɵelement(24, "hr", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 3);
    i0.ɵɵelementStart(26, "div", 18);
    i0.ɵɵelementStart(27, "div", 3);
    i0.ɵɵtemplate(28, RoleEditorComponent_form_1_ng_template_28_Template, 6, 3, "ng-template", 19);
    i0.ɵɵpipe(29, "groupBy");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "div", 3);
    i0.ɵɵelementStart(31, "div", 15);
    i0.ɵɵelement(32, "hr", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "div", 12);
    i0.ɵɵelementStart(34, "div", 4);
    i0.ɵɵtemplate(35, RoleEditorComponent_form_1_div_35_Template, 8, 6, "div", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "div", 11);
    i0.ɵɵelementStart(37, "div", 22);
    i0.ɵɵtext(38, "\n          ");
    i0.ɵɵtemplate(39, RoleEditorComponent_form_1_button_39_Template, 3, 3, "button", 23);
    i0.ɵɵtext(40, "\n          ");
    i0.ɵɵtemplate(41, RoleEditorComponent_form_1_button_41_Template, 4, 4, "button", 24);
    i0.ɵɵtext(42, "\n          ");
    i0.ɵɵtemplate(43, RoleEditorComponent_form_1_button_43_Template, 7, 8, "button", 25);
    i0.ɵɵtext(44, "\n        ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(45, "div", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r1 = i0.ɵɵreference(1);
    var _r2 = i0.ɵɵreference(10);
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 14, "roles.editor.Name"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", !ctx_r0.canManageRoles)("ngClass", i0.ɵɵpureFunction2(21, _c2, _r1.submitted && _r2.valid, _r1.submitted && !_r2.valid))("ngModel", ctx_r0.roleEdit.name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.showValidationErrors && _r1.submitted);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(16, 16, "roles.editor.Description"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", !ctx_r0.canManageRoles)("ngModel", ctx_r0.roleEdit.description);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.showValidationErrors && _r1.submitted && !_r2.valid);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(29, 18, ctx_r0.allPermissions, "groupName"));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r0.canManageRoles);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r0.canManageRoles);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.canManageRoles);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.canManageRoles);
} }
var RoleEditorComponent = /** @class */ (function () {
    function RoleEditorComponent(alertService, accountService) {
        this.alertService = alertService;
        this.accountService = accountService;
        this.isNewRole = false;
        this.showValidationErrors = true;
        this.roleEdit = new Role();
        this.allPermissions = [];
        this.selectedValues = {};
        this.formResetToggle = true;
    }
    RoleEditorComponent.prototype.showErrorAlert = function (caption, message) {
        this.alertService.showMessage(caption, message, MessageSeverity.error);
    };
    RoleEditorComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        this.alertService.startLoadingMessage('Saving changes...');
        this.roleEdit.permissions = this.getSelectedPermissions();
        if (this.isNewRole) {
            this.accountService.newRole(this.roleEdit).subscribe(function (role) { return _this.saveSuccessHelper(role); }, function (error) { return _this.saveFailedHelper(error); });
        }
        else {
            this.accountService.updateRole(this.roleEdit).subscribe(function (response) { return _this.saveSuccessHelper(); }, function (error) { return _this.saveFailedHelper(error); });
        }
    };
    RoleEditorComponent.prototype.saveSuccessHelper = function (role) {
        var _this = this;
        if (role) {
            Object.assign(this.roleEdit, role);
        }
        this.isSaving = false;
        this.alertService.stopLoadingMessage();
        this.showValidationErrors = false;
        if (this.isNewRole) {
            this.alertService.showMessage('Success', "Role \"" + this.roleEdit.name + "\" was created successfully", MessageSeverity.success);
        }
        else {
            this.alertService.showMessage('Success', "Changes to role \"" + this.roleEdit.name + "\" was saved successfully", MessageSeverity.success);
        }
        this.roleEdit = new Role();
        this.resetForm();
        if (!this.isNewRole && this.accountService.currentUser.roles.some(function (r) { return r == _this.editingRoleName; })) {
            this.refreshLoggedInUser();
        }
        if (this.changesSavedCallback) {
            this.changesSavedCallback();
        }
    };
    RoleEditorComponent.prototype.refreshLoggedInUser = function () {
        var _this = this;
        this.accountService.refreshLoggedInUser()
            .subscribe(function (user) { }, function (error) {
            _this.alertService.resetStickyMessage();
            _this.alertService.showStickyMessage('Refresh failed', 'An error occured whilst refreshing logged in user information from the server', MessageSeverity.error, error);
        });
    };
    RoleEditorComponent.prototype.saveFailedHelper = function (error) {
        this.isSaving = false;
        this.alertService.stopLoadingMessage();
        this.alertService.showStickyMessage('Save Error', 'The below errors occured whilst saving your changes:', MessageSeverity.error, error);
        this.alertService.showStickyMessage(error, null, MessageSeverity.error);
        if (this.changesFailedCallback) {
            this.changesFailedCallback();
        }
    };
    RoleEditorComponent.prototype.cancel = function () {
        this.roleEdit = new Role();
        this.showValidationErrors = false;
        this.resetForm();
        this.alertService.showMessage('Cancelled', 'Operation cancelled by user', MessageSeverity.default);
        this.alertService.resetStickyMessage();
        if (this.changesCancelledCallback) {
            this.changesCancelledCallback();
        }
    };
    RoleEditorComponent.prototype.selectAll = function () {
        var _this = this;
        this.allPermissions.forEach(function (p) { return _this.selectedValues[p.value] = true; });
    };
    RoleEditorComponent.prototype.selectNone = function () {
        var _this = this;
        this.allPermissions.forEach(function (p) { return _this.selectedValues[p.value] = false; });
    };
    RoleEditorComponent.prototype.toggleGroup = function (groupName) {
        var _this = this;
        var firstMemberValue;
        this.allPermissions.forEach(function (p) {
            if (p.groupName != groupName) {
                return;
            }
            if (firstMemberValue == null) {
                firstMemberValue = _this.selectedValues[p.value] == true;
            }
            _this.selectedValues[p.value] = !firstMemberValue;
        });
    };
    RoleEditorComponent.prototype.getSelectedPermissions = function () {
        var _this = this;
        return this.allPermissions.filter(function (p) { return _this.selectedValues[p.value] == true; });
    };
    RoleEditorComponent.prototype.resetForm = function (replace) {
        var _this = this;
        if (replace === void 0) { replace = false; }
        if (!replace) {
            this.form.reset();
        }
        else {
            this.formResetToggle = false;
            setTimeout(function () {
                _this.formResetToggle = true;
            });
        }
    };
    RoleEditorComponent.prototype.newRole = function (allPermissions) {
        this.isNewRole = true;
        this.showValidationErrors = true;
        this.editingRoleName = null;
        this.allPermissions = allPermissions;
        this.selectedValues = {};
        this.roleEdit = new Role();
        return this.roleEdit;
    };
    RoleEditorComponent.prototype.editRole = function (role, allPermissions) {
        var _this = this;
        if (role) {
            this.isNewRole = false;
            this.showValidationErrors = true;
            this.editingRoleName = role.name;
            this.allPermissions = allPermissions;
            this.selectedValues = {};
            role.permissions.forEach(function (p) { return _this.selectedValues[p.value] = true; });
            this.roleEdit = new Role();
            Object.assign(this.roleEdit, role);
            return this.roleEdit;
        }
        else {
            return this.newRole(allPermissions);
        }
    };
    Object.defineProperty(RoleEditorComponent.prototype, "canManageRoles", {
        get: function () {
            return this.accountService.userHasPermission(Permission.manageRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */ RoleEditorComponent.ɵfac = function RoleEditorComponent_Factory(t) { return new (t || RoleEditorComponent)(i0.ɵɵdirectiveInject(i1.AlertService), i0.ɵɵdirectiveInject(i2.AccountService)); };
    /** @nocollapse */ RoleEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RoleEditorComponent, selectors: [["role-editor"]], viewQuery: function RoleEditorComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.form = _t.first);
        } }, decls: 2, vars: 1, consts: [["name", "roleEditorForm", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["name", "roleEditorForm", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "row"], [1, "col-sm-5"], [1, "form-group", "row", "has-feedback-icon"], ["for", "roleName", 1, "col-form-label", "col-md-3"], [1, "col-md-9"], ["type", "text", "id", "roleName", "name", "roleName", "placeholder", "Enter role name", "required", "", "minlength", "2", "maxlength", "200", 1, "form-control", 3, "disabled", "ngClass", "ngModel", "ngModelChange"], ["roleName", "ngModel"], ["class", "fa form-control-feedback", "aria-hidden", "true", 3, "ngClass", 4, "ngIf"], [1, "col-sm-7"], [1, "form-group", "row"], ["for", "roleDescription", 1, "col-form-label", "col-md-3"], ["type", "text", "id", "roleDescription", "name", "roleDescription", "placeholder", "Enter role description", 1, "form-control", 3, "disabled", "ngModel", "ngModelChange"], [1, "col-md-12"], ["class", "invalid-feedback", 4, "ngIf"], [1, "edit-separator-hr"], [1, "col-sm-12", "card", "card-body", "bg-light", "well-sm", "permissionsRow"], ["ngFor", "", 3, "ngForOf"], [1, "edit-last-separator-hr"], ["class", "float-left", 4, "ngIf"], [1, "float-right"], ["type", "button", "class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary", 3, "disabled", 4, "ngIf"], [1, "clearfix"], ["aria-hidden", "true", 1, "fa", "form-control-feedback", 3, "ngClass"], [1, "invalid-feedback"], [1, "form-group", "row", "col-sm-6", "permissionsColumn"], ["for", "checkboxes", 1, "col-md-5", "col-form-label", "group-name", 3, "click"], [1, "col-md-7"], ["class", "form-check", 4, "ngFor", "ngForOf"], ["class", "clearfix", 4, "ngIf"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "disabled", "name", "id", "ngModel", "ngModelChange"], [1, "form-check-label", 3, "tooltip", "for"], [1, "float-left"], ["href", "javascript:;", 1, "btn", "btn-link", 3, "click"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], [1, "fa", "fa-times"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "fa fa-save", 4, "ngIf"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], [1, "fa", "fa-save"], [1, "fa", "fa-circle-o-notch", "fa-spin"]], template: function RoleEditorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, RoleEditorComponent_form_1_Template, 46, 24, "form", 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.formResetToggle);
        } }, directives: [i3.NgIf, i4.ɵangular_packages_forms_forms_y, i4.NgControlStatusGroup, i4.NgForm, i4.DefaultValueAccessor, i4.RequiredValidator, i4.MinLengthValidator, i4.MaxLengthValidator, i3.NgClass, i4.NgControlStatus, i4.NgModel, i3.NgForOf, i4.CheckboxControlValueAccessor, i5.TooltipDirective], pipes: [i6.TranslatePipe, i7.GroupByPipe], styles: [".separator-hr[_ngcontent-%COMP%]{margin:0 5px;border-top-style:dashed}.edit-separator-hr[_ngcontent-%COMP%]{margin:10px 5px;border-top-style:dashed}.last-separator-hr[_ngcontent-%COMP%]{margin-top:5px}.edit-last-separator-hr[_ngcontent-%COMP%]{margin-top:15px}.form-group[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}input.form-control[_ngcontent-%COMP%]{border-left-width:5px}.invalid-feedback[_ngcontent-%COMP%]{display:block}.group-name[_ngcontent-%COMP%]{padding-top:0;font-weight:500;padding-right:0}.permissionsColumn[_ngcontent-%COMP%]{margin-bottom:20px}.permissionsRow[_ngcontent-%COMP%]{margin:0 15px}.well-sm[_ngcontent-%COMP%]{padding:.5rem}@media (min-width:992px){.user-enabled[_ngcontent-%COMP%]{margin-left:40px}}"] });
    return RoleEditorComponent;
}());
export { RoleEditorComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RoleEditorComponent, [{
        type: Component,
        args: [{
                selector: 'role-editor',
                templateUrl: './role-editor.component.html',
                styleUrls: ['./role-editor.component.scss']
            }]
    }], function () { return [{ type: i1.AlertService }, { type: i2.AccountService }]; }, { form: [{
            type: ViewChild,
            args: ['f', { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3JvbGUtZWRpdG9yL3JvbGUtZWRpdG9yLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3JvbGUtZWRpdG9yL3JvbGUtZWRpdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQztBQUNoQyw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLGdDQUFnQztBQUVoQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQ0gsZUFBZSxFQUNsQixNQUFNLHNDQUFzQyxDQUFDO0FBTTlDLE9BQU8sRUFDSCxVQUFVLEVBQ2IsTUFBTSxzQkFBc0IsQ0FBQztBQUk5QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7OztJQ1RuQyx3QkFBOEs7Ozs7SUFBOUYsMkVBQXNFOzs7SUFpQjFKLGdDQUNFO0lBQUEsWUFDRjs7SUFBQSxpQkFBTzs7SUFETCxlQUNGO0lBREUsc0ZBQ0Y7Ozs7SUFrQlEsK0JBQ0U7SUFBQSxpQ0FDQTtJQUR5SiwyU0FBOEM7SUFBdk0saUJBQ0E7SUFBQSxpQ0FBMkc7SUFBQSxZQUFtQjtJQUFBLGlCQUFRO0lBQ3hJLGlCQUFNOzs7O0lBRmdDLGVBQXNDO0lBQXRDLDBFQUFzQztJQUFDLHdFQUFvQztJQUF4RyxrREFBNEIseURBQUE7SUFDSCxlQUFvQztJQUFwQywrREFBb0M7SUFBQyx5RUFBcUM7SUFBQyxlQUFtQjtJQUFuQix5Q0FBbUI7OztJQUlwSSwwQkFBc0Q7Ozs7SUFUdEQsK0JBQ0U7SUFBQSxpQ0FBOEc7SUFBM0MseVFBQTBDO0lBQUMsWUFBdUI7SUFBQSxpQkFBUTtJQUM3SSwrQkFDRTtJQUFBLDJGQUNFO0lBR0os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PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgTWVzc2FnZVNldmVyaXR5XG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgQWxlcnRTZXJ2aWNlXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXNlcnZpY2VzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBQZXJtaXNzaW9uXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtb2F1dGgyJztcblxuXG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjY291bnQuc2VydmljZSc7XG5pbXBvcnQgeyBSb2xlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3JvbGUubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvbGUtZWRpdG9yJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcm9sZS1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3JvbGUtZWRpdG9yLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUm9sZUVkaXRvckNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIGlzTmV3Um9sZSA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc1NhdmluZzogYm9vbGVhbjtcbiAgICBwdWJsaWMgc2hvd1ZhbGlkYXRpb25FcnJvcnMgPSB0cnVlO1xuICAgIHB1YmxpYyByb2xlRWRpdDogUm9sZSA9IG5ldyBSb2xlKCk7XG4gICAgcHVibGljIGFsbFBlcm1pc3Npb25zOiBQZXJtaXNzaW9uW10gPSBbXTtcbiAgICBwdWJsaWMgc2VsZWN0ZWRWYWx1ZXM6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbjsgfSA9IHt9O1xuICAgIHByaXZhdGUgZWRpdGluZ1JvbGVOYW1lOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZm9ybVJlc2V0VG9nZ2xlID0gdHJ1ZTtcblxuICAgIHB1YmxpYyBjaGFuZ2VzU2F2ZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBwdWJsaWMgY2hhbmdlc0ZhaWxlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBjaGFuZ2VzQ2FuY2VsbGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG5cblxuICAgIEBWaWV3Q2hpbGQoJ2YnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcml2YXRlIGZvcm07XG5cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSwgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UpIHtcbiAgICB9XG5cblxuXG4gICAgc2hvd0Vycm9yQWxlcnQoY2FwdGlvbjogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoY2FwdGlvbiwgbWVzc2FnZSwgTWVzc2FnZVNldmVyaXR5LmVycm9yKTtcbiAgICB9XG5cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCdTYXZpbmcgY2hhbmdlcy4uLicpO1xuXG4gICAgICAgIHRoaXMucm9sZUVkaXQucGVybWlzc2lvbnMgPSB0aGlzLmdldFNlbGVjdGVkUGVybWlzc2lvbnMoKTtcblxuICAgICAgICBpZiAodGhpcy5pc05ld1JvbGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UubmV3Um9sZSh0aGlzLnJvbGVFZGl0KS5zdWJzY3JpYmUocm9sZSA9PiB0aGlzLnNhdmVTdWNjZXNzSGVscGVyKHJvbGUpLCBlcnJvciA9PiB0aGlzLnNhdmVGYWlsZWRIZWxwZXIoZXJyb3IpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UudXBkYXRlUm9sZSh0aGlzLnJvbGVFZGl0KS5zdWJzY3JpYmUocmVzcG9uc2UgPT4gdGhpcy5zYXZlU3VjY2Vzc0hlbHBlcigpLCBlcnJvciA9PiB0aGlzLnNhdmVGYWlsZWRIZWxwZXIoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuICAgIHByaXZhdGUgc2F2ZVN1Y2Nlc3NIZWxwZXIocm9sZT86IFJvbGUpIHtcbiAgICAgICAgaWYgKHJvbGUpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5yb2xlRWRpdCwgcm9sZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNOZXdSb2xlKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93TWVzc2FnZSgnU3VjY2VzcycsIGBSb2xlIFxcXCIke3RoaXMucm9sZUVkaXQubmFtZX1cXFwiIHdhcyBjcmVhdGVkIHN1Y2Nlc3NmdWxseWAsIE1lc3NhZ2VTZXZlcml0eS5zdWNjZXNzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdTdWNjZXNzJywgYENoYW5nZXMgdG8gcm9sZSBcXFwiJHt0aGlzLnJvbGVFZGl0Lm5hbWV9XFxcIiB3YXMgc2F2ZWQgc3VjY2Vzc2Z1bGx5YCwgTWVzc2FnZVNldmVyaXR5LnN1Y2Nlc3MpO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLnJvbGVFZGl0ID0gbmV3IFJvbGUoKTtcbiAgICAgICAgdGhpcy5yZXNldEZvcm0oKTtcblxuXG4gICAgICAgIGlmICghdGhpcy5pc05ld1JvbGUgJiYgdGhpcy5hY2NvdW50U2VydmljZS5jdXJyZW50VXNlci5yb2xlcy5zb21lKHIgPT4gciA9PSB0aGlzLmVkaXRpbmdSb2xlTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaExvZ2dlZEluVXNlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlc1NhdmVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlc1NhdmVkQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSByZWZyZXNoTG9nZ2VkSW5Vc2VyKCkge1xuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLnJlZnJlc2hMb2dnZWRJblVzZXIoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSh1c2VyID0+IHsgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnJlc2V0U3RpY2t5TWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZSgnUmVmcmVzaCBmYWlsZWQnLCAnQW4gZXJyb3Igb2NjdXJlZCB3aGlsc3QgcmVmcmVzaGluZyBsb2dnZWQgaW4gdXNlciBpbmZvcm1hdGlvbiBmcm9tIHRoZSBzZXJ2ZXInLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSBzYXZlRmFpbGVkSGVscGVyKGVycm9yOiBhbnkpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ1NhdmUgRXJyb3InLCAnVGhlIGJlbG93IGVycm9ycyBvY2N1cmVkIHdoaWxzdCBzYXZpbmcgeW91ciBjaGFuZ2VzOicsIE1lc3NhZ2VTZXZlcml0eS5lcnJvciwgZXJyb3IpO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZShlcnJvciwgbnVsbCwgTWVzc2FnZVNldmVyaXR5LmVycm9yKTtcblxuICAgICAgICBpZiAodGhpcy5jaGFuZ2VzRmFpbGVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlc0ZhaWxlZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5yb2xlRWRpdCA9IG5ldyBSb2xlKCk7XG5cbiAgICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuXG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdDYW5jZWxsZWQnLCAnT3BlcmF0aW9uIGNhbmNlbGxlZCBieSB1c2VyJywgTWVzc2FnZVNldmVyaXR5LmRlZmF1bHQpO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5yZXNldFN0aWNreU1lc3NhZ2UoKTtcblxuICAgICAgICBpZiAodGhpcy5jaGFuZ2VzQ2FuY2VsbGVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlc0NhbmNlbGxlZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgc2VsZWN0QWxsKCkge1xuICAgICAgICB0aGlzLmFsbFBlcm1pc3Npb25zLmZvckVhY2gocCA9PiB0aGlzLnNlbGVjdGVkVmFsdWVzW3AudmFsdWVdID0gdHJ1ZSk7XG4gICAgfVxuXG5cbiAgICBzZWxlY3ROb25lKCkge1xuICAgICAgICB0aGlzLmFsbFBlcm1pc3Npb25zLmZvckVhY2gocCA9PiB0aGlzLnNlbGVjdGVkVmFsdWVzW3AudmFsdWVdID0gZmFsc2UpO1xuICAgIH1cblxuXG4gICAgdG9nZ2xlR3JvdXAoZ3JvdXBOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGZpcnN0TWVtYmVyVmFsdWU6IGJvb2xlYW47XG5cbiAgICAgICAgdGhpcy5hbGxQZXJtaXNzaW9ucy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgaWYgKHAuZ3JvdXBOYW1lICE9IGdyb3VwTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZpcnN0TWVtYmVyVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZpcnN0TWVtYmVyVmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWVzW3AudmFsdWVdID09IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXNbcC52YWx1ZV0gPSAhZmlyc3RNZW1iZXJWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGdldFNlbGVjdGVkUGVybWlzc2lvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbFBlcm1pc3Npb25zLmZpbHRlcihwID0+IHRoaXMuc2VsZWN0ZWRWYWx1ZXNbcC52YWx1ZV0gPT0gdHJ1ZSk7XG4gICAgfVxuXG5cbiAgICByZXNldEZvcm0ocmVwbGFjZSA9IGZhbHNlKSB7XG5cbiAgICAgICAgaWYgKCFyZXBsYWNlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybVJlc2V0VG9nZ2xlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybVJlc2V0VG9nZ2xlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBuZXdSb2xlKGFsbFBlcm1pc3Npb25zOiBQZXJtaXNzaW9uW10pIHtcbiAgICAgICAgdGhpcy5pc05ld1JvbGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmVkaXRpbmdSb2xlTmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMuYWxsUGVybWlzc2lvbnMgPSBhbGxQZXJtaXNzaW9ucztcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnJvbGVFZGl0ID0gbmV3IFJvbGUoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yb2xlRWRpdDtcbiAgICB9XG5cbiAgICBlZGl0Um9sZShyb2xlOiBSb2xlLCBhbGxQZXJtaXNzaW9uczogUGVybWlzc2lvbltdKSB7XG4gICAgICAgIGlmIChyb2xlKSB7XG4gICAgICAgICAgICB0aGlzLmlzTmV3Um9sZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuZWRpdGluZ1JvbGVOYW1lID0gcm9sZS5uYW1lO1xuICAgICAgICAgICAgdGhpcy5hbGxQZXJtaXNzaW9ucyA9IGFsbFBlcm1pc3Npb25zO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9IHt9O1xuICAgICAgICAgICAgcm9sZS5wZXJtaXNzaW9ucy5mb3JFYWNoKHAgPT4gdGhpcy5zZWxlY3RlZFZhbHVlc1twLnZhbHVlXSA9IHRydWUpO1xuICAgICAgICAgICAgdGhpcy5yb2xlRWRpdCA9IG5ldyBSb2xlKCk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMucm9sZUVkaXQsIHJvbGUpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb2xlRWRpdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5ld1JvbGUoYWxsUGVybWlzc2lvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGdldCBjYW5NYW5hZ2VSb2xlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudFNlcnZpY2UudXNlckhhc1Blcm1pc3Npb24oUGVybWlzc2lvbi5tYW5hZ2VSb2xlc1Blcm1pc3Npb24pO1xuICAgIH1cbn1cbiIsIjxkaXY+XG4gIDxmb3JtICpuZ0lmPVwiZm9ybVJlc2V0VG9nZ2xlXCIgbmFtZT1cInJvbGVFZGl0b3JGb3JtXCIgI2Y9XCJuZ0Zvcm1cIiBub3ZhbGlkYXRlXG4gICAgICAgIChuZ1N1Ym1pdCk9XCJmLmZvcm0udmFsaWQgPyBzYXZlKCkgOlxuICAgICAgICAgICghcm9sZU5hbWUudmFsaWQgJiYgc2hvd0Vycm9yQWxlcnQoJ1JvbGUgbmFtZSBpcyByZXF1aXJlZCcsICdQbGVhc2UgZW50ZXIgYSByb2xlIG5hbWUgKG1pbmltdW0gb2YgMiBhbmQgbWF4aW11bSBvZiAyMDAgY2hhcmFjdGVycyknKSk7XCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93IGhhcy1mZWVkYmFjay1pY29uXCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWwgY29sLW1kLTNcIiBmb3I9XCJyb2xlTmFtZVwiPnt7J3JvbGVzLmVkaXRvci5OYW1lJyB8IHRyYW5zbGF0ZX19PC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTlcIj5cbiAgICAgICAgICAgIDxpbnB1dCBbZGlzYWJsZWRdPVwiIWNhbk1hbmFnZVJvbGVzXCIgdHlwZT1cInRleHRcIiBpZD1cInJvbGVOYW1lXCIgbmFtZT1cInJvbGVOYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciByb2xlIG5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpcy12YWxpZCc6IGYuc3VibWl0dGVkICYmIHJvbGVOYW1lLnZhbGlkLCAnaXMtaW52YWxpZCcgOiBmLnN1Ym1pdHRlZCAmJiAhcm9sZU5hbWUudmFsaWR9XCIgWyhuZ01vZGVsKV09XCJyb2xlRWRpdC5uYW1lXCIgI3JvbGVOYW1lPVwibmdNb2RlbFwiIHJlcXVpcmVkIG1pbmxlbmd0aD1cIjJcIiBtYXhsZW5ndGg9XCIyMDBcIiAvPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJzaG93VmFsaWRhdGlvbkVycm9ycyAmJiBmLnN1Ym1pdHRlZFwiIGNsYXNzPVwiZmEgZm9ybS1jb250cm9sLWZlZWRiYWNrXCIgW25nQ2xhc3NdPVwieydmYS1jaGVjayc6IHJvbGVOYW1lLnZhbGlkLCAnZmEtdGltZXMnIDogIXJvbGVOYW1lLnZhbGlkfVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS03XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1mb3JtLWxhYmVsIGNvbC1tZC0zXCIgZm9yPVwicm9sZURlc2NyaXB0aW9uXCI+e3sncm9sZXMuZWRpdG9yLkRlc2NyaXB0aW9uJyB8IHRyYW5zbGF0ZX19PC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTlcIj5cbiAgICAgICAgICAgIDxpbnB1dCBbZGlzYWJsZWRdPVwiIWNhbk1hbmFnZVJvbGVzXCIgdHlwZT1cInRleHRcIiBpZD1cInJvbGVEZXNjcmlwdGlvblwiIG5hbWU9XCJyb2xlRGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkVudGVyIHJvbGUgZGVzY3JpcHRpb25cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwicm9sZUVkaXQuZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cInNob3dWYWxpZGF0aW9uRXJyb3JzICYmIGYuc3VibWl0dGVkICYmICFyb2xlTmFtZS52YWxpZFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgIHt7J3JvbGVzLmVkaXRvci5Sb2xlTmFtZVJlcXVpcmVkJyB8IHRyYW5zbGF0ZX19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgICA8aHIgY2xhc3M9XCJlZGl0LXNlcGFyYXRvci1oclwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgY2FyZCBjYXJkLWJvZHkgYmctbGlnaHQgd2VsbC1zbSBwZXJtaXNzaW9uc1Jvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LXBlcm1pc3Npb25Hcm91cCBbbmdGb3JPZl09XCJhbGxQZXJtaXNzaW9ucyB8IGdyb3VwQnk6ICdncm91cE5hbWUnXCIgbGV0LWk9XCJpbmRleFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93IGNvbC1zbS02IHBlcm1pc3Npb25zQ29sdW1uXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1tZC01IGNvbC1mb3JtLWxhYmVsIGdyb3VwLW5hbWVcIiBmb3I9XCJjaGVja2JveGVzXCIgKGNsaWNrKT1cInRvZ2dsZUdyb3VwKHBlcm1pc3Npb25Hcm91cC5rZXkpXCI+e3twZXJtaXNzaW9uR3JvdXAua2V5fX08L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiICpuZ0Zvcj1cImxldCBwZXJtaXNzaW9uIG9mIHBlcm1pc3Npb25Hcm91cC52YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IFtkaXNhYmxlZF09XCIhY2FuTWFuYWdlUm9sZXNcIiBuYW1lPVwiY2hlY2tib3hlcy17e3Blcm1pc3Npb24udmFsdWV9fVwiIGlkPVwiY2hlY2tib3hlcy17e3Blcm1pc3Npb24udmFsdWV9fVwiIHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRWYWx1ZXNbcGVybWlzc2lvbi52YWx1ZV1cIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiB0b29sdGlwPVwie3twZXJtaXNzaW9uLmRlc2NyaXB0aW9ufX1cIiBmb3I9XCJjaGVja2JveGVzLXt7cGVybWlzc2lvbi52YWx1ZX19XCI+e3twZXJtaXNzaW9uLm5hbWV9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiKGkgKyAxKSAlIDIgPT09IDBcIiBjbGFzcz1cImNsZWFyZml4XCI+PC9kaXY+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgPGhyIGNsYXNzPVwiZWRpdC1sYXN0LXNlcGFyYXRvci1oclwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTVcIj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImNhbk1hbmFnZVJvbGVzXCIgY2xhc3M9XCJmbG9hdC1sZWZ0XCI+XG4gICAgICAgICAgPGEgKGNsaWNrKT1cInNlbGVjdEFsbCgpXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCI+e3sncm9sZXMuZWRpdG9yLlNlbGVjdEFsbCcgfCB0cmFuc2xhdGV9fTwvYT58PGEgKGNsaWNrKT1cInNlbGVjdE5vbmUoKVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cImJ0biBidG4tbGlua1wiPnt7J3JvbGVzLmVkaXRvci5TZWxlY3ROb25lJyB8IHRyYW5zbGF0ZX19PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTdcIj5cbiAgICAgICAgPGRpdiBuZ1ByZXNlcnZlV2hpdGVzcGFjZXMgY2xhc3M9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhY2FuTWFuYWdlUm9sZXNcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImNhbmNlbCgpXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+e3sncm9sZXMuZWRpdG9yLkNsb3NlJyB8IHRyYW5zbGF0ZX19PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImNhbk1hbmFnZVJvbGVzXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJjYW5jZWwoKVwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiBbZGlzYWJsZWRdPVwiaXNTYXZpbmdcIj48aSBjbGFzcz0nZmEgZmEtdGltZXMnPjwvaT4ge3sncm9sZXMuZWRpdG9yLkNhbmNlbCcgfCB0cmFuc2xhdGV9fTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJjYW5NYW5hZ2VSb2xlc1wiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIFtkaXNhYmxlZF09XCJpc1NhdmluZ1wiPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCIhaXNTYXZpbmdcIiBjbGFzcz0nZmEgZmEtc2F2ZSc+PC9pPjxpICpuZ0lmPVwiaXNTYXZpbmdcIiBjbGFzcz0nZmEgZmEtY2lyY2xlLW8tbm90Y2ggZmEtc3Bpbic+PC9pPiB7e2lzU2F2aW5nID8gKCdyb2xlcy5lZGl0b3IuU2F2aW5nJyB8IHRyYW5zbGF0ZSkgOiAoJ3JvbGVzLmVkaXRvci5TYXZlJyB8IHRyYW5zbGF0ZSl9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiPjwvZGl2PlxuICA8L2Zvcm0+XG48L2Rpdj5cbiJdfQ==