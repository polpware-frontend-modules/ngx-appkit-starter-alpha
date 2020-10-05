// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, ViewChild, Input } from '@angular/core';
import { MessageSeverity, Utilities } from '@polpware/ngx-appkit-contracts-alpha';
import { Permission, User } from '@polpware/ngx-oauth2';
import { UserEdit } from '../../models/user-edit.model';
import { Role } from '../../models/role.model';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-appkit-services-alpha";
import * as i2 from "../../services/account.service";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
import * as i5 from "../../directives/autofocus.directive";
import * as i6 from "../../directives/equal-validator.directive";
import * as i7 from "../../directives/bootstrap-select.directive";
import * as i8 from "@ngx-translate/core";
const _c0 = ["f"];
const _c1 = ["userName"];
const _c2 = ["userPassword"];
const _c3 = ["email"];
const _c4 = ["currentPassword"];
const _c5 = ["newPassword"];
const _c6 = ["confirmPassword"];
const _c7 = ["roles"];
const _c8 = ["rolesSelector"];
function UserInfoComponent_form_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "p", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("col-lg-9", ctx_r2.isViewOnly)("col-lg-10", !ctx_r2.isViewOnly);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.user.jobTitle);
} }
function UserInfoComponent_form_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "input", 14);
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_7_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.userEdit.jobTitle = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("col-lg-9", ctx_r3.isViewOnly)("col-lg-10", !ctx_r3.isViewOnly);
    i0.ɵɵadvance(1);
    i0.ɵɵattributeInterpolate1("id", "jobTitle-", ctx_r3.uniqueId, "");
    i0.ɵɵproperty("ngModel", ctx_r3.userEdit.jobTitle);
} }
function UserInfoComponent_form_1_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "p", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("col-lg-9", ctx_r4.isViewOnly)("col-lg-10", !ctx_r4.isViewOnly);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.user.userName);
} }
const _c9 = function (a0, a1) { return { "fa-check": a0, "fa-times": a1 }; };
function UserInfoComponent_form_1_div_16_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 19);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r22 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c9, _r22.valid, !_r22.valid));
} }
function UserInfoComponent_form_1_div_16_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "users.editor.UserNameRequired"), " ");
} }
const _c10 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
function UserInfoComponent_form_1_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "input", 15, 16);
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_16_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.userEdit.userName = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, UserInfoComponent_form_1_div_16_i_3_Template, 1, 4, "i", 17);
    i0.ɵɵtemplate(4, UserInfoComponent_form_1_div_16_span_4_Template, 3, 3, "span", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r22 = i0.ɵɵreference(2);
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(1);
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("col-lg-9", ctx_r5.isViewOnly)("col-lg-10", !ctx_r5.isViewOnly);
    i0.ɵɵadvance(1);
    i0.ɵɵattributeInterpolate1("id", "userName-", ctx_r5.uniqueId, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(10, _c10, _r1.submitted && _r22.valid, _r1.submitted && !_r22.valid))("ngModel", ctx_r5.userEdit.userName);
    i0.ɵɵattribute("autocomplete", ctx_r5.isGeneralEditor ? "new-password" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r5.showValidationErrors && _r1.submitted);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showValidationErrors && _r1.submitted && !_r22.valid);
} }
function UserInfoComponent_form_1_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelement(2, "hr", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function UserInfoComponent_form_1_div_18_i_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 19);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r27 = i0.ɵɵreference(6);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c9, _r27.valid, !_r27.valid));
} }
function UserInfoComponent_form_1_div_18_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "users.editor.CurrentPasswordRequired"), " ");
} }
function UserInfoComponent_form_1_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "label", 22);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 23);
    i0.ɵɵelementStart(5, "input", 24, 25);
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_18_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(2); return ctx_r30.userEdit.currentPassword = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small", 26);
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, UserInfoComponent_form_1_div_18_i_10_Template, 1, 4, "i", 17);
    i0.ɵɵtemplate(11, UserInfoComponent_form_1_div_18_span_11_Template, 3, 3, "span", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r27 = i0.ɵɵreference(6);
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(1);
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("for", "userPassword-", ctx_r7.uniqueId, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 9, "users.editor.Password"));
    i0.ɵɵadvance(3);
    i0.ɵɵattributeInterpolate1("id", "userPassword-", ctx_r7.uniqueId, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(13, _c10, _r1.submitted && _r27.valid, _r1.submitted && !_r27.valid))("ngModel", ctx_r7.userEdit.currentPassword);
    i0.ɵɵattribute("autocomplete", ctx_r7.isGeneralEditor ? "new-password" : null);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(9, 11, "users.editor.PasswordHint"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r7.showValidationErrors && _r1.submitted);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.showValidationErrors && _r1.submitted && !_r27.valid);
} }
function UserInfoComponent_form_1_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "p", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("col-lg-9", ctx_r8.isViewOnly)("col-lg-10", !ctx_r8.isViewOnly);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r8.user.email);
} }
function UserInfoComponent_form_1_div_27_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 19);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r32 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c9, _r32.valid, !_r32.valid));
} }
function UserInfoComponent_form_1_div_27_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "users.editor.EmailRequired"), " ");
} }
function UserInfoComponent_form_1_div_27_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "users.editor.InvalidEmail"), " ");
} }
function UserInfoComponent_form_1_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "input", 27, 28);
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_27_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.userEdit.email = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, UserInfoComponent_form_1_div_27_i_3_Template, 1, 4, "i", 17);
    i0.ɵɵtemplate(4, UserInfoComponent_form_1_div_27_span_4_Template, 3, 3, "span", 18);
    i0.ɵɵtemplate(5, UserInfoComponent_form_1_div_27_span_5_Template, 3, 3, "span", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r32 = i0.ɵɵreference(2);
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(1);
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("col-lg-9", ctx_r9.isViewOnly)("col-lg-10", !ctx_r9.isViewOnly);
    i0.ɵɵadvance(1);
    i0.ɵɵattributeInterpolate1("id", "email-", ctx_r9.uniqueId, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(10, _c10, _r1.submitted && _r32.valid, _r1.submitted && !_r32.valid))("ngModel", ctx_r9.userEdit.email);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r9.showValidationErrors && _r1.submitted);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.showValidationErrors && _r1.submitted && (_r32.errors == null ? null : _r32.errors.required));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.showValidationErrors && _r1.submitted && (_r32.errors == null ? null : _r32.errors.pattern));
} }
function UserInfoComponent_form_1_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelement(2, "hr");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("separator-hr", !ctx_r10.isEditMode)("edit-separator-hr", ctx_r10.isEditMode);
} }
function UserInfoComponent_form_1_div_29_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelementStart(1, "button", 30);
    i0.ɵɵlistener("click", function UserInfoComponent_form_1_div_29_div_4_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r41); const ctx_r40 = i0.ɵɵnextContext(3); return ctx_r40.changePassword(); });
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, "users.editor.ChangePassword"));
} }
function UserInfoComponent_form_1_div_29_div_5_div_2_i_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 19);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r51 = i0.ɵɵreference(6);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c9, _r51.valid, !_r51.valid));
} }
function UserInfoComponent_form_1_div_29_div_5_div_2_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "users.editor.CurrentPasswordRequired"), " ");
} }
function UserInfoComponent_form_1_div_29_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "label", 32);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 33);
    i0.ɵɵelementStart(5, "input", 38, 39);
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_29_div_5_div_2_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r55); const ctx_r54 = i0.ɵɵnextContext(4); return ctx_r54.userEdit.currentPassword = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, UserInfoComponent_form_1_div_29_div_5_div_2_i_7_Template, 1, 4, "i", 17);
    i0.ɵɵtemplate(8, UserInfoComponent_form_1_div_29_div_5_div_2_span_8_Template, 3, 3, "span", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r51 = i0.ɵɵreference(6);
    i0.ɵɵnextContext(3);
    const _r1 = i0.ɵɵreference(1);
    const ctx_r42 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("for", "currentPassword-", ctx_r42.uniqueId, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 8, "users.editor.CurrentPassword"));
    i0.ɵɵadvance(3);
    i0.ɵɵattributeInterpolate1("id", "currentPassword-", ctx_r42.uniqueId, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(10, _c10, _r1.submitted && _r51.valid, _r1.submitted && !_r51.valid))("ngModel", ctx_r42.userEdit.currentPassword);
    i0.ɵɵattribute("autocomplete", ctx_r42.isGeneralEditor ? "new-password" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r42.showValidationErrors && _r1.submitted);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r42.showValidationErrors && _r1.submitted && !_r51.valid);
} }
function UserInfoComponent_form_1_div_29_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelement(2, "hr", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function UserInfoComponent_form_1_div_29_div_5_i_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 19);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r44 = i0.ɵɵreference(10);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c9, _r44.valid, !_r44.valid));
} }
function UserInfoComponent_form_1_div_29_div_5_span_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "users.editor.NewPasswordRequired"), " ");
} }
function UserInfoComponent_form_1_div_29_div_5_i_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 19);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r47 = i0.ɵɵreference(22);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c9, _r47.valid, !_r47.valid));
} }
function UserInfoComponent_form_1_div_29_div_5_span_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "users.editor.ConfirmationPasswordRequired"), " ");
} }
function UserInfoComponent_form_1_div_29_div_5_span_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "users.editor.PasswordMismatch"), " ");
} }
function UserInfoComponent_form_1_div_29_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelementStart(1, "div", 31);
    i0.ɵɵtemplate(2, UserInfoComponent_form_1_div_29_div_5_div_2_Template, 9, 13, "div", 10);
    i0.ɵɵtemplate(3, UserInfoComponent_form_1_div_29_div_5_div_3_Template, 3, 0, "div", 9);
    i0.ɵɵelementStart(4, "div", 8);
    i0.ɵɵelementStart(5, "label", 32);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 33);
    i0.ɵɵelementStart(9, "input", 34, 35);
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_29_div_5_Template_input_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r56 = i0.ɵɵnextContext(3); return ctx_r56.userEdit.newPassword = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, UserInfoComponent_form_1_div_29_div_5_i_11_Template, 1, 4, "i", 17);
    i0.ɵɵtemplate(12, UserInfoComponent_form_1_div_29_div_5_span_12_Template, 3, 3, "span", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 6);
    i0.ɵɵelementStart(14, "div", 7);
    i0.ɵɵelement(15, "hr", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 8);
    i0.ɵɵelementStart(17, "label", 32);
    i0.ɵɵtext(18);
    i0.ɵɵpipe(19, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 33);
    i0.ɵɵelementStart(21, "input", 36, 37);
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_29_div_5_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r58 = i0.ɵɵnextContext(3); return ctx_r58.userEdit.confirmPassword = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(23, UserInfoComponent_form_1_div_29_div_5_i_23_Template, 1, 4, "i", 17);
    i0.ɵɵtemplate(24, UserInfoComponent_form_1_div_29_div_5_span_24_Template, 3, 3, "span", 18);
    i0.ɵɵtemplate(25, UserInfoComponent_form_1_div_29_div_5_span_25_Template, 3, 3, "span", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r44 = i0.ɵɵreference(10);
    const _r47 = i0.ɵɵreference(22);
    i0.ɵɵnextContext(2);
    const _r1 = i0.ɵɵreference(1);
    const ctx_r39 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r39.isEditingSelf);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r39.isNewUser);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("for", "newPassword-", ctx_r39.uniqueId, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(7, 19, "users.editor.NewPassword"));
    i0.ɵɵadvance(3);
    i0.ɵɵattributeInterpolate1("id", "newPassword-", ctx_r39.uniqueId, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(23, _c10, _r1.submitted && _r44.valid, _r1.submitted && !_r44.valid))("ngModel", ctx_r39.userEdit.newPassword);
    i0.ɵɵattribute("autocomplete", ctx_r39.isGeneralEditor ? "new-password" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r39.showValidationErrors && _r1.submitted);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r39.showValidationErrors && _r1.submitted && !_r44.valid);
    i0.ɵɵadvance(5);
    i0.ɵɵpropertyInterpolate1("for", "confirmPassword-", ctx_r39.uniqueId, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(19, 21, "users.editor.ConfirmPassword"));
    i0.ɵɵadvance(3);
    i0.ɵɵattributeInterpolate1("id", "confirmPassword-", ctx_r39.uniqueId, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(26, _c10, _r1.submitted && _r47.valid, _r1.submitted && !_r47.valid))("ngModel", ctx_r39.userEdit.confirmPassword);
    i0.ɵɵattribute("autocomplete", ctx_r39.isGeneralEditor ? "new-password" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r39.showValidationErrors && _r1.submitted);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r39.showValidationErrors && _r1.submitted && (_r47.errors == null ? null : _r47.errors.required));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r39.showValidationErrors && _r1.submitted && (_r47.errors == null ? null : _r47.errors.validateEqual) && !(_r47.errors == null ? null : _r47.errors.required));
} }
function UserInfoComponent_form_1_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "label", 22);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, UserInfoComponent_form_1_div_29_div_4_Template, 4, 3, "div", 29);
    i0.ɵɵtemplate(5, UserInfoComponent_form_1_div_29_div_5_Template, 26, 29, "div", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate1("for", "newPassword-", ctx_r11.uniqueId, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, "users.editor.Password"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r11.isChangePassword && !ctx_r11.isNewUser);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r11.isChangePassword || ctx_r11.isNewUser);
} }
function UserInfoComponent_form_1_div_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelement(2, "hr");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("separator-hr", !ctx_r12.isEditMode)("edit-separator-hr", ctx_r12.isEditMode);
} }
function UserInfoComponent_form_1_div_31_div_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\n            ");
    i0.ɵɵelementStart(2, "span", 43);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, "\n          ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const role_r62 = ctx.$implicit;
    const ctx_r61 = i0.ɵɵnextContext(4);
    var tmp_0_0 = null;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("title", (tmp_0_0 = ctx_r61.getRoleByName(role_r62)) == null ? null : tmp_0_0.description);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(role_r62);
} }
function UserInfoComponent_form_1_div_31_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "p", 13);
    i0.ɵɵtext(2, "\n          ");
    i0.ɵɵtemplate(3, UserInfoComponent_form_1_div_31_div_4_span_3_Template, 5, 2, "span", 42);
    i0.ɵɵtext(4, "\n        ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r59 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("col-lg-9", ctx_r59.isViewOnly)("col-lg-10", !ctx_r59.isViewOnly);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r59.user.roles);
} }
function UserInfoComponent_form_1_div_31_div_5_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const role_r68 = ctx.$implicit;
    i0.ɵɵattributeInterpolate2("data-content", "<span title='", role_r68.description, "' class='badge badge-pill badge-secondary'>", role_r68.name, "</span>");
    i0.ɵɵattribute("value", role_r68.name);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", role_r68.name, " ");
} }
function UserInfoComponent_form_1_div_31_div_5_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 19);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r63 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c9, _r63.valid, !_r63.valid));
} }
function UserInfoComponent_form_1_div_31_div_5_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "users.editor.RoleRequired"), " ");
} }
function UserInfoComponent_form_1_div_31_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r70 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵelementStart(1, "select", 45, 46);
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_31_div_5_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r70); const ctx_r69 = i0.ɵɵnextContext(3); return ctx_r69.userEdit.roles = $event; });
    i0.ɵɵtemplate(4, UserInfoComponent_form_1_div_31_div_5_option_4_Template, 2, 4, "option", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, UserInfoComponent_form_1_div_31_div_5_i_5_Template, 1, 4, "i", 17);
    i0.ɵɵtemplate(6, UserInfoComponent_form_1_div_31_div_5_span_6_Template, 3, 3, "span", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r63 = i0.ɵɵreference(2);
    i0.ɵɵnextContext(2);
    const _r1 = i0.ɵɵreference(1);
    const ctx_r60 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("col-lg-9", ctx_r60.isViewOnly)("col-lg-10", !ctx_r60.isViewOnly);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(9, _c10, _r1.submitted && _r63.valid, _r1.submitted && !_r63.valid));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r60.userEdit.roles);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r60.allRoles);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r60.showValidationErrors && _r1.submitted);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r60.showValidationErrors && _r1.submitted && !_r63.valid);
} }
function UserInfoComponent_form_1_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "label", 40);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, UserInfoComponent_form_1_div_31_div_4_Template, 5, 5, "div", 5);
    i0.ɵɵtemplate(5, UserInfoComponent_form_1_div_31_div_5_Template, 7, 12, "div", 41);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("col-lg-3", ctx_r13.isViewOnly)("col-lg-2", !ctx_r13.isViewOnly);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 7, "users.editor.Roles"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r13.isEditMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r13.isEditMode && ctx_r13.canAssignRoles && !ctx_r13.isEditingSelf);
} }
function UserInfoComponent_form_1_div_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "p", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("col-lg-9", ctx_r14.isViewOnly)("col-lg-10", !ctx_r14.isViewOnly);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r14.user.fullName);
} }
function UserInfoComponent_form_1_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r72 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "input", 47);
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_40_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r72); const ctx_r71 = i0.ɵɵnextContext(2); return ctx_r71.userEdit.fullName = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("col-lg-9", ctx_r15.isViewOnly)("col-lg-10", !ctx_r15.isViewOnly);
    i0.ɵɵadvance(1);
    i0.ɵɵattributeInterpolate1("id", "fullName-", ctx_r15.uniqueId, "");
    i0.ɵɵproperty("ngModel", ctx_r15.userEdit.fullName);
} }
function UserInfoComponent_form_1_div_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "p", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("col-lg-9", ctx_r16.isViewOnly)("col-lg-10", !ctx_r16.isViewOnly);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r16.user.phoneNumber);
} }
function UserInfoComponent_form_1_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r74 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "input", 48);
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_49_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r74); const ctx_r73 = i0.ɵɵnextContext(2); return ctx_r73.userEdit.phoneNumber = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("col-lg-9", ctx_r17.isViewOnly)("col-lg-10", !ctx_r17.isViewOnly);
    i0.ɵɵadvance(1);
    i0.ɵɵattributeInterpolate1("id", "phoneNumber-", ctx_r17.uniqueId, "");
    i0.ɵɵproperty("ngModel", ctx_r17.userEdit.phoneNumber);
} }
function UserInfoComponent_form_1_div_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelement(2, "hr");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("last-separator-hr", !ctx_r18.isEditMode)("edit-last-separator-hr", ctx_r18.isEditMode);
} }
function UserInfoComponent_form_1_div_51_div_2_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r82 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 61);
    i0.ɵɵlistener("click", function UserInfoComponent_form_1_div_51_div_2_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r82); const ctx_r81 = i0.ɵɵnextContext(4); return ctx_r81.unlockUser(); });
    i0.ɵɵelement(1, "i", 62);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r80 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", ctx_r80.isSaving);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "users.editor.Unblock"), "");
} }
function UserInfoComponent_form_1_div_51_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r84 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵelementStart(1, "div", 57);
    i0.ɵɵelementStart(2, "input", 58);
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_51_div_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r84); const ctx_r83 = i0.ɵɵnextContext(3); return ctx_r83.userEdit.isEnabled = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 59);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, UserInfoComponent_form_1_div_51_div_2_button_6_Template, 4, 4, "button", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r75 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r75.userEdit.isEnabled);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 3, "users.editor.Enabled"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r75.userEdit.isLockedOut);
} }
function UserInfoComponent_form_1_div_51_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r86 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 63);
    i0.ɵɵlistener("click", function UserInfoComponent_form_1_div_51_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r86); const ctx_r85 = i0.ɵɵnextContext(3); return ctx_r85.close(); });
    i0.ɵɵelement(1, "i", 64);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, "users.editor.Close"), "");
} }
function UserInfoComponent_form_1_div_51_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 63);
    i0.ɵɵlistener("click", function UserInfoComponent_form_1_div_51_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r88); const ctx_r87 = i0.ɵɵnextContext(3); return ctx_r87.edit(); });
    i0.ɵɵelement(1, "i", 65);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, "users.editor.Edit"), "");
} }
function UserInfoComponent_form_1_div_51_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r90 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 66);
    i0.ɵɵlistener("click", function UserInfoComponent_form_1_div_51_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r90); const ctx_r89 = i0.ɵɵnextContext(3); return ctx_r89.cancel(); });
    i0.ɵɵelement(1, "i", 67);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r78 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", ctx_r78.isSaving);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "users.editor.Cancel"), "");
} }
function UserInfoComponent_form_1_div_51_button_12_i_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 71);
} }
function UserInfoComponent_form_1_div_51_button_12_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 72);
} }
function UserInfoComponent_form_1_div_51_button_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 68);
    i0.ɵɵtext(1, "\n            ");
    i0.ɵɵtemplate(2, UserInfoComponent_form_1_div_51_button_12_i_2_Template, 1, 0, "i", 69);
    i0.ɵɵtemplate(3, UserInfoComponent_form_1_div_51_button_12_i_3_Template, 1, 0, "i", 70);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵpipe(6, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r79 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", ctx_r79.isSaving);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r79.isSaving);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r79.isSaving);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r79.isSaving ? i0.ɵɵpipeBind1(5, 4, "users.editor.Saving") : i0.ɵɵpipeBind1(6, 6, "users.editor.Save"), "\n          ");
} }
function UserInfoComponent_form_1_div_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "div", 49);
    i0.ɵɵtemplate(2, UserInfoComponent_form_1_div_51_div_2_Template, 7, 5, "div", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 51);
    i0.ɵɵelementStart(4, "div", 52);
    i0.ɵɵtext(5, "\n          ");
    i0.ɵɵtemplate(6, UserInfoComponent_form_1_div_51_button_6_Template, 4, 3, "button", 53);
    i0.ɵɵtext(7, "\n          ");
    i0.ɵɵtemplate(8, UserInfoComponent_form_1_div_51_button_8_Template, 4, 3, "button", 53);
    i0.ɵɵtext(9, "\n          ");
    i0.ɵɵtemplate(10, UserInfoComponent_form_1_div_51_button_10_Template, 4, 4, "button", 54);
    i0.ɵɵtext(11, "\n          ");
    i0.ɵɵtemplate(12, UserInfoComponent_form_1_div_51_button_12_Template, 7, 8, "button", 55);
    i0.ɵɵtext(13, "\n        ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r19.isGeneralEditor && ctx_r19.isEditMode);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r19.isEditMode && ctx_r19.isGeneralEditor);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r19.isEditMode && !ctx_r19.isGeneralEditor);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r19.isEditMode);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r19.isEditMode);
} }
function UserInfoComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r94 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 1, 2);
    i0.ɵɵlistener("ngSubmit", function UserInfoComponent_form_1_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r94); const _r1 = i0.ɵɵreference(1); const ctx_r93 = i0.ɵɵnextContext(); _r1.form.valid ? ctx_r93.save() : !ctx_r93.userName.valid && ctx_r93.showErrorAlert("User name is required", "Please enter a user name (minimum of 2 and maximum of 200 characters)"); ctx_r93.userPassword && !ctx_r93.userPassword.valid && ctx_r93.showErrorAlert("Password is required", "Please enter the current password"); (ctx_r93.email.errors == null ? null : ctx_r93.email.errors.required) && ctx_r93.showErrorAlert("Email is required", "Please enter an email address (maximum of 200 characters)"); (ctx_r93.email.errors == null ? null : ctx_r93.email.errors.pattern) && ctx_r93.showErrorAlert("Invalid Email", "Please enter a valid email address"); ctx_r93.isChangePassword && ctx_r93.isEditingSelf && !ctx_r93.currentPassword.valid && ctx_r93.showErrorAlert("Current password is required", "Please enter the current password"); (ctx_r93.isChangePassword || ctx_r93.isNewUser) && !ctx_r93.newPassword.valid && ctx_r93.showErrorAlert("New password is required", "Please enter the new password (minimum of 6 characters)"); (ctx_r93.isChangePassword || ctx_r93.isNewUser) && ctx_r93.newPassword.valid && (ctx_r93.confirmPassword.errors == null ? null : ctx_r93.confirmPassword.errors.required) && ctx_r93.showErrorAlert("Confirmation password is required", "Please enter the confirmation password"); (ctx_r93.isChangePassword || ctx_r93.isNewUser) && ctx_r93.newPassword.valid && (ctx_r93.confirmPassword.errors == null ? null : ctx_r93.confirmPassword.errors.validateEqual) && ctx_r93.showErrorAlert("Passwword mismatch", "New password and confirmation password do not match"); return ctx_r93.canAssignRoles && !ctx_r93.isEditingSelf && !ctx_r93.roles.valid && ctx_r93.showErrorAlert("Roles is required", "Please select a minimum of 1 role"); });
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelementStart(3, "label", 4);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, UserInfoComponent_form_1_div_6_Template, 3, 5, "div", 5);
    i0.ɵɵtemplate(7, UserInfoComponent_form_1_div_7_Template, 2, 6, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 6);
    i0.ɵɵelementStart(9, "div", 7);
    i0.ɵɵelement(10, "hr");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 8);
    i0.ɵɵelementStart(12, "label", 4);
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, UserInfoComponent_form_1_div_15_Template, 3, 5, "div", 5);
    i0.ɵɵtemplate(16, UserInfoComponent_form_1_div_16_Template, 5, 13, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(17, UserInfoComponent_form_1_div_17_Template, 3, 0, "div", 9);
    i0.ɵɵtemplate(18, UserInfoComponent_form_1_div_18_Template, 12, 16, "div", 10);
    i0.ɵɵelementStart(19, "div", 6);
    i0.ɵɵelementStart(20, "div", 7);
    i0.ɵɵelement(21, "hr");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 8);
    i0.ɵɵelementStart(23, "label", 4);
    i0.ɵɵtext(24);
    i0.ɵɵpipe(25, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(26, UserInfoComponent_form_1_div_26_Template, 3, 5, "div", 5);
    i0.ɵɵtemplate(27, UserInfoComponent_form_1_div_27_Template, 6, 13, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(28, UserInfoComponent_form_1_div_28_Template, 3, 4, "div", 9);
    i0.ɵɵtemplate(29, UserInfoComponent_form_1_div_29_Template, 6, 6, "div", 11);
    i0.ɵɵtemplate(30, UserInfoComponent_form_1_div_30_Template, 3, 4, "div", 9);
    i0.ɵɵtemplate(31, UserInfoComponent_form_1_div_31_Template, 6, 9, "div", 10);
    i0.ɵɵelementStart(32, "div", 6);
    i0.ɵɵelementStart(33, "div", 7);
    i0.ɵɵelement(34, "hr");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "div", 3);
    i0.ɵɵelementStart(36, "label", 4);
    i0.ɵɵtext(37);
    i0.ɵɵpipe(38, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(39, UserInfoComponent_form_1_div_39_Template, 3, 5, "div", 5);
    i0.ɵɵtemplate(40, UserInfoComponent_form_1_div_40_Template, 2, 6, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "div", 6);
    i0.ɵɵelementStart(42, "div", 7);
    i0.ɵɵelement(43, "hr");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "div", 3);
    i0.ɵɵelementStart(45, "label", 4);
    i0.ɵɵtext(46);
    i0.ɵɵpipe(47, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(48, UserInfoComponent_form_1_div_48_Template, 3, 5, "div", 5);
    i0.ɵɵtemplate(49, UserInfoComponent_form_1_div_49_Template, 2, 6, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(50, UserInfoComponent_form_1_div_50_Template, 3, 4, "div", 9);
    i0.ɵɵtemplate(51, UserInfoComponent_form_1_div_51_Template, 14, 5, "div", 11);
    i0.ɵɵelement(52, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("autocomplete", ctx_r0.isGeneralEditor ? "NaN" : null);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("col-lg-3", ctx_r0.isViewOnly)("col-lg-2", !ctx_r0.isViewOnly);
    i0.ɵɵpropertyInterpolate1("for", "jobTitle-", ctx_r0.uniqueId, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 65, "users.editor.JobTitle"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.isEditMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isEditMode);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("separator-hr", !ctx_r0.isEditMode)("edit-separator-hr", ctx_r0.isEditMode);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("col-lg-3", ctx_r0.isViewOnly)("col-lg-2", !ctx_r0.isViewOnly);
    i0.ɵɵpropertyInterpolate1("for", "userName-", ctx_r0.uniqueId, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(14, 67, "users.editor.UserName"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.isEditMode || ctx_r0.isEditingSelf);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isEditMode && !ctx_r0.isEditingSelf);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isEditMode && ctx_r0.isEditingSelf && !ctx_r0.isChangePassword && ctx_r0.user.userName != ctx_r0.userEdit.userName);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isEditMode && ctx_r0.isEditingSelf && !ctx_r0.isChangePassword && ctx_r0.user.userName != ctx_r0.userEdit.userName);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("separator-hr", !ctx_r0.isEditMode)("edit-separator-hr", ctx_r0.isEditMode);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("col-lg-3", ctx_r0.isViewOnly)("col-lg-2", !ctx_r0.isViewOnly);
    i0.ɵɵpropertyInterpolate1("for", "email-", ctx_r0.uniqueId, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(25, 69, "users.editor.Email"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.isEditMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isEditMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isEditMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isEditMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.isEditMode || ctx_r0.canAssignRoles || ctx_r0.isEditingSelf);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.isEditMode || ctx_r0.canAssignRoles || ctx_r0.isEditingSelf);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("separator-hr", !ctx_r0.isEditMode)("edit-separator-hr", ctx_r0.isEditMode);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("col-lg-3", ctx_r0.isViewOnly)("col-lg-2", !ctx_r0.isViewOnly);
    i0.ɵɵpropertyInterpolate1("for", "fullName-", ctx_r0.uniqueId, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(38, 71, "users.editor.FullName"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.isEditMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isEditMode);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("separator-hr", !ctx_r0.isEditMode)("edit-separator-hr", ctx_r0.isEditMode);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("col-lg-3", ctx_r0.isViewOnly)("col-lg-2", !ctx_r0.isViewOnly);
    i0.ɵɵpropertyInterpolate1("for", "phoneNumber-", ctx_r0.uniqueId, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(47, 73, "users.editor.PhoneNumber"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.isEditMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isEditMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.isViewOnly);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.isViewOnly);
} }
export class UserInfoComponent {
    constructor(alertService, accountService) {
        this.alertService = alertService;
        this.accountService = accountService;
        this.isEditMode = false;
        this.isNewUser = false;
        this.isSaving = false;
        this.isChangePassword = false;
        this.isEditingSelf = false;
        this.showValidationErrors = false;
        this.uniqueId = Utilities.uniqueId();
        this.user = new User();
        this.allRoles = [];
        this.formResetToggle = true;
        this.isGeneralEditor = false;
    }
    ngOnInit() {
        if (!this.isGeneralEditor) {
            this.loadCurrentUserData();
        }
    }
    loadCurrentUserData() {
        this.alertService.startLoadingMessage();
        if (this.canViewAllRoles) {
            this.accountService.getUserAndRoles().subscribe(results => this.onCurrentUserDataLoadSuccessful(results[0], results[1]), error => this.onCurrentUserDataLoadFailed(error));
        }
        else {
            this.accountService.getUser().subscribe(user => this.onCurrentUserDataLoadSuccessful(user, user.roles.map(x => new Role(x))), error => this.onCurrentUserDataLoadFailed(error));
        }
    }
    onCurrentUserDataLoadSuccessful(user, roles) {
        this.alertService.stopLoadingMessage();
        this.user = user;
        this.allRoles = roles;
    }
    onCurrentUserDataLoadFailed(error) {
        this.alertService.stopLoadingMessage();
        this.alertService.showStickyMessage('Load Error', `Unable to retrieve user data from the server.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        this.user = new User();
    }
    getRoleByName(name) {
        return this.allRoles.find((r) => r.name == name);
    }
    showErrorAlert(caption, message) {
        this.alertService.showMessage(caption, message, MessageSeverity.error);
    }
    deletePasswordFromUser(user) {
        const userEdit = user;
        delete userEdit.currentPassword;
        delete userEdit.newPassword;
        delete userEdit.confirmPassword;
    }
    edit() {
        if (!this.isGeneralEditor) {
            this.isEditingSelf = true;
            this.userEdit = new UserEdit();
            Object.assign(this.userEdit, this.user);
        }
        else {
            if (!this.userEdit) {
                this.userEdit = new UserEdit();
            }
            this.isEditingSelf = this.accountService.currentUser ? this.userEdit.id == this.accountService.currentUser.id : false;
        }
        this.isEditMode = true;
        this.showValidationErrors = true;
        this.isChangePassword = false;
    }
    save() {
        this.isSaving = true;
        this.alertService.startLoadingMessage('Saving changes...');
        if (this.isNewUser) {
            this.accountService.newUser(this.userEdit).subscribe(user => this.saveSuccessHelper(user), error => this.saveFailedHelper(error));
        }
        else {
            this.accountService.updateUser(this.userEdit).subscribe(response => this.saveSuccessHelper(), error => this.saveFailedHelper(error));
        }
    }
    saveSuccessHelper(user) {
        this.testIsRoleUserCountChanged(this.user, this.userEdit);
        if (user) {
            Object.assign(this.userEdit, user);
        }
        this.isSaving = false;
        this.alertService.stopLoadingMessage();
        this.isChangePassword = false;
        this.showValidationErrors = false;
        this.deletePasswordFromUser(this.userEdit);
        Object.assign(this.user, this.userEdit);
        this.userEdit = new UserEdit();
        this.resetForm();
        if (this.isGeneralEditor) {
            if (this.isNewUser) {
                this.alertService.showMessage('Success', `User \"${this.user.userName}\" was created successfully`, MessageSeverity.success);
            }
            else if (!this.isEditingSelf) {
                this.alertService.showMessage('Success', `Changes to user \"${this.user.userName}\" was saved successfully`, MessageSeverity.success);
            }
        }
        if (this.isEditingSelf) {
            this.alertService.showMessage('Success', 'Changes to your User Profile was saved successfully', MessageSeverity.success);
            this.refreshLoggedInUser();
        }
        this.isEditMode = false;
        if (this.changesSavedCallback) {
            this.changesSavedCallback();
        }
    }
    saveFailedHelper(error) {
        this.isSaving = false;
        this.alertService.stopLoadingMessage();
        this.alertService.showStickyMessage('Save Error', 'The below errors occured whilst saving your changes:', MessageSeverity.error, error);
        this.alertService.showStickyMessage(error, null, MessageSeverity.error);
        if (this.changesFailedCallback) {
            this.changesFailedCallback();
        }
    }
    testIsRoleUserCountChanged(currentUser, editedUser) {
        const rolesAdded = this.isNewUser ? editedUser.roles : editedUser.roles.filter(role => currentUser.roles.indexOf(role) == -1);
        const rolesRemoved = this.isNewUser ? [] : currentUser.roles.filter(role => editedUser.roles.indexOf(role) == -1);
        const modifiedRoles = rolesAdded.concat(rolesRemoved);
        if (modifiedRoles.length) {
            setTimeout(() => this.accountService.onRolesUserCountChanged(modifiedRoles));
        }
    }
    cancel() {
        if (this.isGeneralEditor) {
            this.userEdit = this.user = new UserEdit();
        }
        else {
            this.userEdit = new UserEdit();
        }
        this.showValidationErrors = false;
        this.resetForm();
        this.alertService.showMessage('Cancelled', 'Operation cancelled by user', MessageSeverity.default);
        this.alertService.resetStickyMessage();
        if (!this.isGeneralEditor) {
            this.isEditMode = false;
        }
        if (this.changesCancelledCallback) {
            this.changesCancelledCallback();
        }
    }
    close() {
        this.userEdit = this.user = new UserEdit();
        this.showValidationErrors = false;
        this.resetForm();
        this.isEditMode = false;
        if (this.changesSavedCallback) {
            this.changesSavedCallback();
        }
    }
    refreshLoggedInUser() {
        this.accountService.refreshLoggedInUser()
            .subscribe(user => {
            this.loadCurrentUserData();
        }, error => {
            this.alertService.resetStickyMessage();
            this.alertService.showStickyMessage('Refresh failed', 'An error occured whilst refreshing logged in user information from the server', MessageSeverity.error, error);
        });
    }
    changePassword() {
        this.isChangePassword = true;
    }
    unlockUser() {
        this.isSaving = true;
        this.alertService.startLoadingMessage('Unblocking user...');
        this.accountService.unblockUser(this.userEdit.id)
            .subscribe(() => {
            this.isSaving = false;
            this.userEdit.isLockedOut = false;
            this.alertService.stopLoadingMessage();
            this.alertService.showMessage('Success', 'User has been successfully unblocked', MessageSeverity.success);
        }, error => {
            this.isSaving = false;
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Unblock Error', 'The below errors occured whilst unblocking the user:', MessageSeverity.error, error);
            this.alertService.showStickyMessage(error, null, MessageSeverity.error);
        });
    }
    resetForm(replace = false) {
        this.isChangePassword = false;
        if (!replace) {
            this.form.reset();
        }
        else {
            this.formResetToggle = false;
            setTimeout(() => {
                this.formResetToggle = true;
            });
        }
    }
    newUser(allRoles) {
        this.isGeneralEditor = true;
        this.isNewUser = true;
        this.allRoles = [...allRoles];
        this.user = this.userEdit = new UserEdit();
        this.userEdit.isEnabled = true;
        this.edit();
        return this.userEdit;
    }
    editUser(user, allRoles) {
        if (user) {
            this.isGeneralEditor = true;
            this.isNewUser = false;
            this.setRoles(user, allRoles);
            this.user = new User();
            this.userEdit = new UserEdit();
            Object.assign(this.user, user);
            Object.assign(this.userEdit, user);
            this.edit();
            return this.userEdit;
        }
        else {
            return this.newUser(allRoles);
        }
    }
    displayUser(user, allRoles) {
        this.user = new User();
        Object.assign(this.user, user);
        this.deletePasswordFromUser(this.user);
        this.setRoles(user, allRoles);
        this.isEditMode = false;
    }
    setRoles(user, allRoles) {
        this.allRoles = allRoles ? [...allRoles] : [];
        if (user.roles) {
            for (const ur of user.roles) {
                if (!this.allRoles.some(r => r.name == ur)) {
                    this.allRoles.unshift(new Role(ur));
                }
            }
        }
        if (allRoles == null || this.allRoles.length != allRoles.length) {
            setTimeout(() => {
                if (this.rolesSelector) {
                    this.rolesSelector.refresh();
                }
            });
        }
    }
    get canViewAllRoles() {
        return this.accountService.userHasPermission(Permission.viewRolesPermission);
    }
    get canAssignRoles() {
        return this.accountService.userHasPermission(Permission.assignRolesPermission);
    }
}
/** @nocollapse */ UserInfoComponent.ɵfac = function UserInfoComponent_Factory(t) { return new (t || UserInfoComponent)(i0.ɵɵdirectiveInject(i1.AlertService), i0.ɵɵdirectiveInject(i2.AccountService)); };
/** @nocollapse */ UserInfoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: UserInfoComponent, selectors: [["user-info"]], viewQuery: function UserInfoComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
        i0.ɵɵviewQuery(_c1, true);
        i0.ɵɵviewQuery(_c2, true);
        i0.ɵɵviewQuery(_c3, true);
        i0.ɵɵviewQuery(_c4, true);
        i0.ɵɵviewQuery(_c5, true);
        i0.ɵɵviewQuery(_c6, true);
        i0.ɵɵviewQuery(_c7, true);
        i0.ɵɵviewQuery(_c8, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.form = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.userName = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.userPassword = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.email = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.currentPassword = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.newPassword = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.confirmPassword = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.roles = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.rolesSelector = _t.first);
    } }, inputs: { isViewOnly: "isViewOnly", isGeneralEditor: "isGeneralEditor" }, decls: 2, vars: 1, consts: [["name", "userInfoForm", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["name", "userInfoForm", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", "row"], [1, "col-form-label", 3, "for"], [3, "col-lg-9", "col-lg-10", 4, "ngIf"], [1, "row"], [1, "col-lg-12"], [1, "form-group", "row", "has-feedback-icon"], ["class", "row", 4, "ngIf"], ["class", "form-group row has-feedback-icon", 4, "ngIf"], ["class", "form-group row", 4, "ngIf"], [1, "clearfix"], [1, "form-control-plaintext"], ["autofocus", "", "type", "text", "name", "jobTitle", "placeholder", "Enter Job Title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "userName", "placeholder", "Enter user name", "required", "", "minlength", "2", "maxlength", "200", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["userName", "ngModel"], ["class", "fa form-control-feedback", "aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "form-control-feedback", 3, "ngClass"], [1, "invalid-feedback"], [1, "password-separator-hr"], [1, "col-form-label", "col-lg-2", 3, "for"], [1, "col-lg-10"], ["type", "password", "name", "userPassword", "placeholder", "Enter password", "required", "", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["userPassword", "ngModel"], [1, "hint-sm"], ["type", "text", "name", "email", "placeholder", "Enter email address", "required", "", "maxlength", "200", "pattern", "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "col-lg-10", 4, "ngIf"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [1, "password-well", "card", "card-body", "bg-light"], [1, "col-form-label", "col-lg-3", 3, "for"], [1, "col-lg-9"], ["type", "password", "name", "newPassword", "placeholder", "Enter new password", "required", "", "minlength", "6", "validateEqual", "confirmPassword", "reverse", "true", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["newPassword", "ngModel"], ["type", "password", "name", "confirmPassword", "placeholder", "Confirm new password", "required", "", "validateEqual", "newPassword", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["confirmPassword", "ngModel"], ["type", "password", "name", "currentPassword", "placeholder", "Enter current password", "required", "", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["currentPassword", "ngModel"], ["for", "roles-user-info", 1, "col-form-label"], [3, "ngClass", "col-lg-9", "col-lg-10", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "badge", "badge-pill", "badge-secondary", 3, "title"], [3, "ngClass"], ["id", "roles-user-info", "name", "roles", "bootstrapSelect", "", "required", "", "multiple", "", "data-live-search", "true", "data-actions-box", "false", "data-live-search-placeholder", "Search...", "title", "Select Roles", 1, "selectpicker", "form-control", "left-status", 3, "ngModel", "ngModelChange"], ["roles", "ngModel", "rolesSelector", "bootstrap-select"], ["type", "text", "name", "fullName", "placeholder", "Enter full name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "phoneNumber", "placeholder", "Enter phone number", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-5"], ["class", "float-left", 4, "ngIf"], [1, "col-sm-7"], [1, "float-right"], ["type", "button", "class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary", 3, "disabled", 4, "ngIf"], [1, "float-left"], [1, "form-check", "user-enabled"], ["type", "checkbox", "id", "idEnabled", "name", "isEnabled", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "idEnabled", 1, "form-check-label"], ["type", "button", "class", "btn btn-warning unblock-user", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-warning", "unblock-user", 3, "disabled", "click"], [1, "fa", "fa-unlock-alt"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-close"], [1, "fa", "fa-edit"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], [1, "fa", "fa-times"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "fa fa-save", 4, "ngIf"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], [1, "fa", "fa-save"], [1, "fa", "fa-circle-o-notch", "fa-spin"]], template: function UserInfoComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtemplate(1, UserInfoComponent_form_1_Template, 53, 75, "form", 0);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.formResetToggle);
    } }, directives: [i3.NgIf, i4.ɵangular_packages_forms_forms_y, i4.NgControlStatusGroup, i4.NgForm, i4.DefaultValueAccessor, i5.AutofocusDirective, i4.NgControlStatus, i4.NgModel, i4.RequiredValidator, i4.MinLengthValidator, i4.MaxLengthValidator, i3.NgClass, i4.PatternValidator, i6.EqualValidator, i3.NgForOf, i4.SelectMultipleControlValueAccessor, i7.BootstrapSelectDirective, i4.NgSelectOption, i4.ɵangular_packages_forms_forms_x, i4.CheckboxControlValueAccessor], pipes: [i8.TranslatePipe], styles: [".separator-hr[_ngcontent-%COMP%]{margin:0 5px;border-top-style:dashed}.edit-separator-hr[_ngcontent-%COMP%]{margin:10px 5px;border-top-style:dashed}.last-separator-hr[_ngcontent-%COMP%]{margin-top:5px}.edit-last-separator-hr[_ngcontent-%COMP%]{margin-top:15px}.password-separator-hr[_ngcontent-%COMP%]{margin:5px;border-style:none}.form-group[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}input.form-control[_ngcontent-%COMP%]{border-left-width:5px}.invalid-feedback[_ngcontent-%COMP%]{display:block}.password-well[_ngcontent-%COMP%]{padding:.5rem}.hint-sm[_ngcontent-%COMP%]{display:block}.form-check.user-enabled[_ngcontent-%COMP%]{display:inline-block}.unblock-user[_ngcontent-%COMP%]{margin-left:34px}@media (min-width:992px){.user-enabled[_ngcontent-%COMP%]{margin-left:40px}}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(UserInfoComponent, [{
        type: Component,
        args: [{
                selector: 'user-info',
                templateUrl: './user-info.component.html',
                styleUrls: ['./user-info.component.scss']
            }]
    }], function () { return [{ type: i1.AlertService }, { type: i2.AccountService }]; }, { isViewOnly: [{
            type: Input
        }], isGeneralEditor: [{
            type: Input
        }], form: [{
            type: ViewChild,
            args: ['f', { static: false }]
        }], userName: [{
            type: ViewChild,
            args: ['userName', { static: false }]
        }], userPassword: [{
            type: ViewChild,
            args: ['userPassword', { static: false }]
        }], email: [{
            type: ViewChild,
            args: ['email', { static: false }]
        }], currentPassword: [{
            type: ViewChild,
            args: ['currentPassword', { static: false }]
        }], newPassword: [{
            type: ViewChild,
            args: ['newPassword', { static: false }]
        }], confirmPassword: [{
            type: ViewChild,
            args: ['confirmPassword', { static: false }]
        }], roles: [{
            type: ViewChild,
            args: ['roles', { static: false }]
        }], rolesSelector: [{
            type: ViewChild,
            args: ['rolesSelector', { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBRWhDLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwRSxPQUFPLEVBQ0gsZUFBZSxFQUNmLFNBQVMsRUFDWixNQUFNLHNDQUFzQyxDQUFDO0FBTTlDLE9BQU8sRUFDSCxVQUFVLEVBQ1YsSUFBSSxFQUNQLE1BQU0sc0JBQXNCLENBQUM7QUFJOUIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNGekMsMkJBQ0U7SUFBQSw2QkFBa0M7SUFBQSxZQUFpQjtJQUFBLGlCQUFJO0lBQ3pELGlCQUFNOzs7SUFGbUIsNkNBQTZCLGlDQUFBO0lBQ2xCLGVBQWlCO0lBQWpCLDBDQUFpQjs7OztJQUVyRCwyQkFDRTtJQUFBLGlDQUNGO0lBRGtJLG1PQUErQjtJQUEvSixpQkFDRjtJQUFBLGlCQUFNOzs7SUFGa0IsNkNBQTZCLGlDQUFBO0lBQ3RCLGVBQStCO0lBQS9CLGtFQUErQjtJQUFvRSxrREFBK0I7OztJQVlqSywyQkFDRTtJQUFBLDZCQUFrQztJQUFBLFlBQWlCO0lBQUEsaUJBQUk7SUFDekQsaUJBQU07OztJQUZvQyw2Q0FBNkIsaUNBQUE7SUFDbkMsZUFBaUI7SUFBakIsMENBQWlCOzs7O0lBTW5E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ZUFBQztnQkFDUCxRQUFRLEVBQUUsV0FBVztnQkFDckIsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7YUFDNUM7O2tCQW9CSSxLQUFLOztrQkFHTCxLQUFLOztrQkFPTCxTQUFTO21CQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tCQUloQyxTQUFTO21CQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tCQUd2QyxTQUFTO21CQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tCQUczQyxTQUFTO21CQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tCQUdwQyxTQUFTO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0JBRzlDLFNBQVM7bUJBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7a0JBRzFDLFNBQVM7bUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFHOUMsU0FBUzttQkFBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFHcEMsU0FBUzttQkFBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIE1lc3NhZ2VTZXZlcml0eSxcbiAgICBVdGlsaXRpZXNcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBBbGVydFNlcnZpY2Vcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtc2VydmljZXMtYWxwaGEnO1xuXG5pbXBvcnQge1xuICAgIFBlcm1pc3Npb24sXG4gICAgVXNlclxufSBmcm9tICdAcG9scHdhcmUvbmd4LW9hdXRoMic7XG5cblxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckVkaXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdXNlci1lZGl0Lm1vZGVsJztcbmltcG9ydCB7IFJvbGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvcm9sZS5tb2RlbCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd1c2VyLWluZm8nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyLWluZm8uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3VzZXItaW5mby5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBpc0VkaXRNb2RlID0gZmFsc2U7XG4gICAgcHVibGljIGlzTmV3VXNlciA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc1NhdmluZyA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc0NoYW5nZVBhc3N3b3JkID0gZmFsc2U7XG4gICAgcHVibGljIGlzRWRpdGluZ1NlbGYgPSBmYWxzZTtcbiAgICBwdWJsaWMgc2hvd1ZhbGlkYXRpb25FcnJvcnMgPSBmYWxzZTtcbiAgICBwdWJsaWMgdW5pcXVlSWQ6IHN0cmluZyA9IFV0aWxpdGllcy51bmlxdWVJZCgpO1xuICAgIHB1YmxpYyB1c2VyOiBVc2VyID0gbmV3IFVzZXIoKTtcbiAgICBwdWJsaWMgdXNlckVkaXQ6IFVzZXJFZGl0O1xuICAgIHB1YmxpYyBhbGxSb2xlczogUm9sZVtdID0gW107XG5cbiAgICBwdWJsaWMgZm9ybVJlc2V0VG9nZ2xlID0gdHJ1ZTtcblxuICAgIHB1YmxpYyBjaGFuZ2VzU2F2ZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBwdWJsaWMgY2hhbmdlc0ZhaWxlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBjaGFuZ2VzQ2FuY2VsbGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG5cbiAgICBASW5wdXQoKVxuICAgIGlzVmlld09ubHk6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIGlzR2VuZXJhbEVkaXRvciA9IGZhbHNlO1xuXG5cblxuXG5cbiAgICBAVmlld0NoaWxkKCdmJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIGZvcm07XG5cbiAgICAvLyBWaWV3Q2hpbGRzIFJlcXVpcmVkIGJlY2F1c2UgbmdJZiBoaWRlcyB0ZW1wbGF0ZSB2YXJpYWJsZXMgZnJvbSBnbG9iYWwgc2NvcGVcbiAgICBAVmlld0NoaWxkKCd1c2VyTmFtZScsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyB1c2VyTmFtZTtcblxuICAgIEBWaWV3Q2hpbGQoJ3VzZXJQYXNzd29yZCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyB1c2VyUGFzc3dvcmQ7XG5cbiAgICBAVmlld0NoaWxkKCdlbWFpbCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBlbWFpbDtcblxuICAgIEBWaWV3Q2hpbGQoJ2N1cnJlbnRQYXNzd29yZCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBjdXJyZW50UGFzc3dvcmQ7XG5cbiAgICBAVmlld0NoaWxkKCduZXdQYXNzd29yZCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBuZXdQYXNzd29yZDtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbmZpcm1QYXNzd29yZCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBjb25maXJtUGFzc3dvcmQ7XG5cbiAgICBAVmlld0NoaWxkKCdyb2xlcycsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyByb2xlcztcblxuICAgIEBWaWV3Q2hpbGQoJ3JvbGVzU2VsZWN0b3InLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgcm9sZXNTZWxlY3RvcjtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSwgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzR2VuZXJhbEVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5sb2FkQ3VycmVudFVzZXJEYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSBsb2FkQ3VycmVudFVzZXJEYXRhKCkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FuVmlld0FsbFJvbGVzKSB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmdldFVzZXJBbmRSb2xlcygpLnN1YnNjcmliZShyZXN1bHRzID0+IHRoaXMub25DdXJyZW50VXNlckRhdGFMb2FkU3VjY2Vzc2Z1bChyZXN1bHRzWzBdLCByZXN1bHRzWzFdKSwgZXJyb3IgPT4gdGhpcy5vbkN1cnJlbnRVc2VyRGF0YUxvYWRGYWlsZWQoZXJyb3IpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuZ2V0VXNlcigpLnN1YnNjcmliZSh1c2VyID0+IHRoaXMub25DdXJyZW50VXNlckRhdGFMb2FkU3VjY2Vzc2Z1bCh1c2VyLCB1c2VyLnJvbGVzLm1hcCh4ID0+IG5ldyBSb2xlKHgpKSksIGVycm9yID0+IHRoaXMub25DdXJyZW50VXNlckRhdGFMb2FkRmFpbGVkKGVycm9yKSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByaXZhdGUgb25DdXJyZW50VXNlckRhdGFMb2FkU3VjY2Vzc2Z1bCh1c2VyOiBVc2VyLCByb2xlczogUm9sZVtdKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgICB0aGlzLmFsbFJvbGVzID0gcm9sZXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkN1cnJlbnRVc2VyRGF0YUxvYWRGYWlsZWQoZXJyb3I6IGFueSkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ0xvYWQgRXJyb3InLCBgVW5hYmxlIHRvIHJldHJpZXZlIHVzZXIgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuXFxyXFxuRXJyb3JzOiBcIiR7VXRpbGl0aWVzLmdldEh0dHBSZXNwb25zZU1lc3NhZ2VzKGVycm9yKX1cImAsXG4gICAgICAgICAgICBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcblxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgIH1cblxuXG5cbiAgICBnZXRSb2xlQnlOYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxSb2xlcy5maW5kKChyKSA9PiByLm5hbWUgPT0gbmFtZSk7XG4gICAgfVxuXG5cblxuICAgIHNob3dFcnJvckFsZXJ0KGNhcHRpb246IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKGNhcHRpb24sIG1lc3NhZ2UsIE1lc3NhZ2VTZXZlcml0eS5lcnJvcik7XG4gICAgfVxuXG5cbiAgICBkZWxldGVQYXNzd29yZEZyb21Vc2VyKHVzZXI6IFVzZXJFZGl0IHwgVXNlcikge1xuICAgICAgICBjb25zdCB1c2VyRWRpdCA9IHVzZXIgYXMgVXNlckVkaXQ7XG5cbiAgICAgICAgZGVsZXRlIHVzZXJFZGl0LmN1cnJlbnRQYXNzd29yZDtcbiAgICAgICAgZGVsZXRlIHVzZXJFZGl0Lm5ld1Bhc3N3b3JkO1xuICAgICAgICBkZWxldGUgdXNlckVkaXQuY29uZmlybVBhc3N3b3JkO1xuICAgIH1cblxuXG4gICAgZWRpdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzR2VuZXJhbEVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5pc0VkaXRpbmdTZWxmID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudXNlckVkaXQgPSBuZXcgVXNlckVkaXQoKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy51c2VyRWRpdCwgdGhpcy51c2VyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy51c2VyRWRpdCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckVkaXQgPSBuZXcgVXNlckVkaXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pc0VkaXRpbmdTZWxmID0gdGhpcy5hY2NvdW50U2VydmljZS5jdXJyZW50VXNlciA/IHRoaXMudXNlckVkaXQuaWQgPT0gdGhpcy5hY2NvdW50U2VydmljZS5jdXJyZW50VXNlci5pZCA6IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc0VkaXRNb2RlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNDaGFuZ2VQYXNzd29yZCA9IGZhbHNlO1xuICAgIH1cblxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0YXJ0TG9hZGluZ01lc3NhZ2UoJ1NhdmluZyBjaGFuZ2VzLi4uJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNOZXdVc2VyKSB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLm5ld1VzZXIodGhpcy51c2VyRWRpdCkuc3Vic2NyaWJlKHVzZXIgPT4gdGhpcy5zYXZlU3VjY2Vzc0hlbHBlcih1c2VyKSwgZXJyb3IgPT4gdGhpcy5zYXZlRmFpbGVkSGVscGVyKGVycm9yKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLnVwZGF0ZVVzZXIodGhpcy51c2VyRWRpdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHRoaXMuc2F2ZVN1Y2Nlc3NIZWxwZXIoKSwgZXJyb3IgPT4gdGhpcy5zYXZlRmFpbGVkSGVscGVyKGVycm9yKSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByaXZhdGUgc2F2ZVN1Y2Nlc3NIZWxwZXIodXNlcj86IFVzZXIpIHtcbiAgICAgICAgdGhpcy50ZXN0SXNSb2xlVXNlckNvdW50Q2hhbmdlZCh0aGlzLnVzZXIsIHRoaXMudXNlckVkaXQpO1xuXG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMudXNlckVkaXQsIHVzZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5pc0NoYW5nZVBhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmRlbGV0ZVBhc3N3b3JkRnJvbVVzZXIodGhpcy51c2VyRWRpdCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy51c2VyLCB0aGlzLnVzZXJFZGl0KTtcbiAgICAgICAgdGhpcy51c2VyRWRpdCA9IG5ldyBVc2VyRWRpdCgpO1xuICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuXG5cbiAgICAgICAgaWYgKHRoaXMuaXNHZW5lcmFsRWRpdG9yKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc05ld1VzZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93TWVzc2FnZSgnU3VjY2VzcycsIGBVc2VyIFxcXCIke3RoaXMudXNlci51c2VyTmFtZX1cXFwiIHdhcyBjcmVhdGVkIHN1Y2Nlc3NmdWxseWAsIE1lc3NhZ2VTZXZlcml0eS5zdWNjZXNzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNFZGl0aW5nU2VsZikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdTdWNjZXNzJywgYENoYW5nZXMgdG8gdXNlciBcXFwiJHt0aGlzLnVzZXIudXNlck5hbWV9XFxcIiB3YXMgc2F2ZWQgc3VjY2Vzc2Z1bGx5YCwgTWVzc2FnZVNldmVyaXR5LnN1Y2Nlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNFZGl0aW5nU2VsZikge1xuICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ1N1Y2Nlc3MnLCAnQ2hhbmdlcyB0byB5b3VyIFVzZXIgUHJvZmlsZSB3YXMgc2F2ZWQgc3VjY2Vzc2Z1bGx5JywgTWVzc2FnZVNldmVyaXR5LnN1Y2Nlc3MpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoTG9nZ2VkSW5Vc2VyKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzRWRpdE1vZGUgPSBmYWxzZTtcblxuXG4gICAgICAgIGlmICh0aGlzLmNoYW5nZXNTYXZlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZXNTYXZlZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByaXZhdGUgc2F2ZUZhaWxlZEhlbHBlcihlcnJvcjogYW55KSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdTYXZlIEVycm9yJywgJ1RoZSBiZWxvdyBlcnJvcnMgb2NjdXJlZCB3aGlsc3Qgc2F2aW5nIHlvdXIgY2hhbmdlczonLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoZXJyb3IsIG51bGwsIE1lc3NhZ2VTZXZlcml0eS5lcnJvcik7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlc0ZhaWxlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZXNGYWlsZWRDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHByaXZhdGUgdGVzdElzUm9sZVVzZXJDb3VudENoYW5nZWQoY3VycmVudFVzZXI6IFVzZXIsIGVkaXRlZFVzZXI6IFVzZXIpIHtcblxuICAgICAgICBjb25zdCByb2xlc0FkZGVkID0gdGhpcy5pc05ld1VzZXIgPyBlZGl0ZWRVc2VyLnJvbGVzIDogZWRpdGVkVXNlci5yb2xlcy5maWx0ZXIocm9sZSA9PiBjdXJyZW50VXNlci5yb2xlcy5pbmRleE9mKHJvbGUpID09IC0xKTtcbiAgICAgICAgY29uc3Qgcm9sZXNSZW1vdmVkID0gdGhpcy5pc05ld1VzZXIgPyBbXSA6IGN1cnJlbnRVc2VyLnJvbGVzLmZpbHRlcihyb2xlID0+IGVkaXRlZFVzZXIucm9sZXMuaW5kZXhPZihyb2xlKSA9PSAtMSk7XG5cbiAgICAgICAgY29uc3QgbW9kaWZpZWRSb2xlcyA9IHJvbGVzQWRkZWQuY29uY2F0KHJvbGVzUmVtb3ZlZCk7XG5cbiAgICAgICAgaWYgKG1vZGlmaWVkUm9sZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWNjb3VudFNlcnZpY2Uub25Sb2xlc1VzZXJDb3VudENoYW5nZWQobW9kaWZpZWRSb2xlcykpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNHZW5lcmFsRWRpdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJFZGl0ID0gdGhpcy51c2VyID0gbmV3IFVzZXJFZGl0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJFZGl0ID0gbmV3IFVzZXJFZGl0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG5cbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ0NhbmNlbGxlZCcsICdPcGVyYXRpb24gY2FuY2VsbGVkIGJ5IHVzZXInLCBNZXNzYWdlU2V2ZXJpdHkuZGVmYXVsdCk7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnJlc2V0U3RpY2t5TWVzc2FnZSgpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc0dlbmVyYWxFZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFZGl0TW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlc0NhbmNlbGxlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZXNDYW5jZWxsZWRDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy51c2VyRWRpdCA9IHRoaXMudXNlciA9IG5ldyBVc2VyRWRpdCgpO1xuICAgICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG4gICAgICAgIHRoaXMuaXNFZGl0TW9kZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmNoYW5nZXNTYXZlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZXNTYXZlZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSByZWZyZXNoTG9nZ2VkSW5Vc2VyKCkge1xuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLnJlZnJlc2hMb2dnZWRJblVzZXIoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSh1c2VyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRDdXJyZW50VXNlckRhdGEoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5yZXNldFN0aWNreU1lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ1JlZnJlc2ggZmFpbGVkJywgJ0FuIGVycm9yIG9jY3VyZWQgd2hpbHN0IHJlZnJlc2hpbmcgbG9nZ2VkIGluIHVzZXIgaW5mb3JtYXRpb24gZnJvbSB0aGUgc2VydmVyJywgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBjaGFuZ2VQYXNzd29yZCgpIHtcbiAgICAgICAgdGhpcy5pc0NoYW5nZVBhc3N3b3JkID0gdHJ1ZTtcbiAgICB9XG5cblxuICAgIHVubG9ja1VzZXIoKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCdVbmJsb2NraW5nIHVzZXIuLi4nKTtcblxuXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UudW5ibG9ja1VzZXIodGhpcy51c2VyRWRpdC5pZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJFZGl0LmlzTG9ja2VkT3V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ1N1Y2Nlc3MnLCAnVXNlciBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgdW5ibG9ja2VkJywgTWVzc2FnZVNldmVyaXR5LnN1Y2Nlc3MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdVbmJsb2NrIEVycm9yJywgJ1RoZSBiZWxvdyBlcnJvcnMgb2NjdXJlZCB3aGlsc3QgdW5ibG9ja2luZyB0aGUgdXNlcjonLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoZXJyb3IsIG51bGwsIE1lc3NhZ2VTZXZlcml0eS5lcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICByZXNldEZvcm0ocmVwbGFjZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaXNDaGFuZ2VQYXNzd29yZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghcmVwbGFjZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1SZXNldFRvZ2dsZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1SZXNldFRvZ2dsZSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgbmV3VXNlcihhbGxSb2xlczogUm9sZVtdKSB7XG4gICAgICAgIHRoaXMuaXNHZW5lcmFsRWRpdG9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc05ld1VzZXIgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuYWxsUm9sZXMgPSBbLi4uYWxsUm9sZXNdO1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLnVzZXJFZGl0ID0gbmV3IFVzZXJFZGl0KCk7XG4gICAgICAgIHRoaXMudXNlckVkaXQuaXNFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lZGl0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckVkaXQ7XG4gICAgfVxuXG4gICAgZWRpdFVzZXIodXNlcjogVXNlciwgYWxsUm9sZXM6IFJvbGVbXSkge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgdGhpcy5pc0dlbmVyYWxFZGl0b3IgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc05ld1VzZXIgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5zZXRSb2xlcyh1c2VyLCBhbGxSb2xlcyk7XG4gICAgICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICAgICAgdGhpcy51c2VyRWRpdCA9IG5ldyBVc2VyRWRpdCgpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnVzZXIsIHVzZXIpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnVzZXJFZGl0LCB1c2VyKTtcbiAgICAgICAgICAgIHRoaXMuZWRpdCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51c2VyRWRpdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5ld1VzZXIoYWxsUm9sZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBkaXNwbGF5VXNlcih1c2VyOiBVc2VyLCBhbGxSb2xlcz86IFJvbGVbXSkge1xuXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy51c2VyLCB1c2VyKTtcbiAgICAgICAgdGhpcy5kZWxldGVQYXNzd29yZEZyb21Vc2VyKHRoaXMudXNlcik7XG4gICAgICAgIHRoaXMuc2V0Um9sZXModXNlciwgYWxsUm9sZXMpO1xuXG4gICAgICAgIHRoaXMuaXNFZGl0TW9kZSA9IGZhbHNlO1xuICAgIH1cblxuXG5cbiAgICBwcml2YXRlIHNldFJvbGVzKHVzZXI6IFVzZXIsIGFsbFJvbGVzPzogUm9sZVtdKSB7XG5cbiAgICAgICAgdGhpcy5hbGxSb2xlcyA9IGFsbFJvbGVzID8gWy4uLmFsbFJvbGVzXSA6IFtdO1xuXG4gICAgICAgIGlmICh1c2VyLnJvbGVzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVyIG9mIHVzZXIucm9sZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWxsUm9sZXMuc29tZShyID0+IHIubmFtZSA9PSB1cikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxSb2xlcy51bnNoaWZ0KG5ldyBSb2xlKHVyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFsbFJvbGVzID09IG51bGwgfHwgdGhpcy5hbGxSb2xlcy5sZW5ndGggIT0gYWxsUm9sZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yb2xlc1NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9sZXNTZWxlY3Rvci5yZWZyZXNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgZ2V0IGNhblZpZXdBbGxSb2xlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudFNlcnZpY2UudXNlckhhc1Blcm1pc3Npb24oUGVybWlzc2lvbi52aWV3Um9sZXNQZXJtaXNzaW9uKTtcbiAgICB9XG5cbiAgICBnZXQgY2FuQXNzaWduUm9sZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRTZXJ2aWNlLnVzZXJIYXNQZXJtaXNzaW9uKFBlcm1pc3Npb24uYXNzaWduUm9sZXNQZXJtaXNzaW9uKTtcbiAgICB9XG59XG4iLCI8ZGl2PlxuICA8Zm9ybSAqbmdJZj1cImZvcm1SZXNldFRvZ2dsZVwiIFthdHRyLmF1dG9jb21wbGV0ZV09XCJpc0dlbmVyYWxFZGl0b3IgPyAnTmFOJyA6IG51bGxcIiBuYW1lPVwidXNlckluZm9Gb3JtXCIgI2Y9XCJuZ0Zvcm1cIiBub3ZhbGlkYXRlXG4gICAgICAgIChuZ1N1Ym1pdCk9XCJmLmZvcm0udmFsaWQgPyBzYXZlKCkgOlxuXG4gICAgICAgICAgKCF1c2VyTmFtZS52YWxpZCAmJiBzaG93RXJyb3JBbGVydCgnVXNlciBuYW1lIGlzIHJlcXVpcmVkJywgJ1BsZWFzZSBlbnRlciBhIHVzZXIgbmFtZSAobWluaW11bSBvZiAyIGFuZCBtYXhpbXVtIG9mIDIwMCBjaGFyYWN0ZXJzKScpKTtcblxuICAgICAgICAgICh1c2VyUGFzc3dvcmQgJiYgIXVzZXJQYXNzd29yZC52YWxpZCAmJiBzaG93RXJyb3JBbGVydCgnUGFzc3dvcmQgaXMgcmVxdWlyZWQnLCAnUGxlYXNlIGVudGVyIHRoZSBjdXJyZW50IHBhc3N3b3JkJykpO1xuXG4gICAgICAgICAgKGVtYWlsLmVycm9ycz8ucmVxdWlyZWQgJiYgc2hvd0Vycm9yQWxlcnQoJ0VtYWlsIGlzIHJlcXVpcmVkJywgJ1BsZWFzZSBlbnRlciBhbiBlbWFpbCBhZGRyZXNzIChtYXhpbXVtIG9mIDIwMCBjaGFyYWN0ZXJzKScpKTtcbiAgICAgICAgICAoZW1haWwuZXJyb3JzPy5wYXR0ZXJuICYmIHNob3dFcnJvckFsZXJ0KCdJbnZhbGlkIEVtYWlsJywgJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnKSk7XG5cbiAgICAgICAgICAoaXNDaGFuZ2VQYXNzd29yZCAmJiBpc0VkaXRpbmdTZWxmICYmICFjdXJyZW50UGFzc3dvcmQudmFsaWQgJiYgc2hvd0Vycm9yQWxlcnQoJ0N1cnJlbnQgcGFzc3dvcmQgaXMgcmVxdWlyZWQnLCAnUGxlYXNlIGVudGVyIHRoZSBjdXJyZW50IHBhc3N3b3JkJykpO1xuXG4gICAgICAgICAgKChpc0NoYW5nZVBhc3N3b3JkIHx8IGlzTmV3VXNlcikgJiYgIW5ld1Bhc3N3b3JkLnZhbGlkICYmIHNob3dFcnJvckFsZXJ0KCdOZXcgcGFzc3dvcmQgaXMgcmVxdWlyZWQnLCAnUGxlYXNlIGVudGVyIHRoZSBuZXcgcGFzc3dvcmQgKG1pbmltdW0gb2YgNiBjaGFyYWN0ZXJzKScpKTtcblxuICAgICAgICAgICgoaXNDaGFuZ2VQYXNzd29yZCB8fCBpc05ld1VzZXIpICYmIG5ld1Bhc3N3b3JkLnZhbGlkICYmIGNvbmZpcm1QYXNzd29yZC5lcnJvcnM/LnJlcXVpcmVkICYmIHNob3dFcnJvckFsZXJ0KCdDb25maXJtYXRpb24gcGFzc3dvcmQgaXMgcmVxdWlyZWQnLCAnUGxlYXNlIGVudGVyIHRoZSBjb25maXJtYXRpb24gcGFzc3dvcmQnKSk7XG4gICAgICAgICAgKChpc0NoYW5nZVBhc3N3b3JkIHx8IGlzTmV3VXNlcikgJiYgbmV3UGFzc3dvcmQudmFsaWQgJiYgY29uZmlybVBhc3N3b3JkLmVycm9ycz8udmFsaWRhdGVFcXVhbCAmJiBzaG93RXJyb3JBbGVydCgnUGFzc3d3b3JkIG1pc21hdGNoJywgJ05ldyBwYXNzd29yZCBhbmQgY29uZmlybWF0aW9uIHBhc3N3b3JkIGRvIG5vdCBtYXRjaCcpKTtcblxuICAgICAgICAgIChjYW5Bc3NpZ25Sb2xlcyAmJiAhaXNFZGl0aW5nU2VsZiAmJiAhcm9sZXMudmFsaWQgJiYgc2hvd0Vycm9yQWxlcnQoJ1JvbGVzIGlzIHJlcXVpcmVkJywgJ1BsZWFzZSBzZWxlY3QgYSBtaW5pbXVtIG9mIDEgcm9sZScpKTtcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgPGxhYmVsIFtjbGFzcy5jb2wtbGctM109XCJpc1ZpZXdPbmx5XCIgW2NsYXNzLmNvbC1sZy0yXT1cIiFpc1ZpZXdPbmx5XCIgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbFwiIGZvcj1cImpvYlRpdGxlLXt7dW5pcXVlSWR9fVwiPnt7J3VzZXJzLmVkaXRvci5Kb2JUaXRsZScgfCB0cmFuc2xhdGV9fTwvbGFiZWw+XG4gICAgICA8ZGl2ICpuZ0lmPVwiIWlzRWRpdE1vZGVcIiBbY2xhc3MuY29sLWxnLTldPVwiaXNWaWV3T25seVwiIFtjbGFzcy5jb2wtbGctMTBdPVwiIWlzVmlld09ubHlcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJmb3JtLWNvbnRyb2wtcGxhaW50ZXh0XCI+e3t1c2VyLmpvYlRpdGxlfX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCJpc0VkaXRNb2RlXCIgW2NsYXNzLmNvbC1sZy05XT1cImlzVmlld09ubHlcIiBbY2xhc3MuY29sLWxnLTEwXT1cIiFpc1ZpZXdPbmx5XCI+XG4gICAgICAgIDxpbnB1dCBhdXRvZm9jdXMgdHlwZT1cInRleHRcIiBhdHRyLmlkPVwiam9iVGl0bGUte3t1bmlxdWVJZH19XCIgbmFtZT1cImpvYlRpdGxlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBKb2IgVGl0bGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwidXNlckVkaXQuam9iVGl0bGVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgIDxociBbY2xhc3Muc2VwYXJhdG9yLWhyXT1cIiFpc0VkaXRNb2RlXCIgW2NsYXNzLmVkaXQtc2VwYXJhdG9yLWhyXT1cImlzRWRpdE1vZGVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3cgaGFzLWZlZWRiYWNrLWljb25cIj5cbiAgICAgIDxsYWJlbCBbY2xhc3MuY29sLWxnLTNdPVwiaXNWaWV3T25seVwiIFtjbGFzcy5jb2wtbGctMl09XCIhaXNWaWV3T25seVwiIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiBmb3I9XCJ1c2VyTmFtZS17e3VuaXF1ZUlkfX1cIj57eyd1c2Vycy5lZGl0b3IuVXNlck5hbWUnIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgPGRpdiAqbmdJZj1cIiFpc0VkaXRNb2RlIHx8IGlzRWRpdGluZ1NlbGZcIiBbY2xhc3MuY29sLWxnLTldPVwiaXNWaWV3T25seVwiIFtjbGFzcy5jb2wtbGctMTBdPVwiIWlzVmlld09ubHlcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJmb3JtLWNvbnRyb2wtcGxhaW50ZXh0XCI+e3t1c2VyLnVzZXJOYW1lfX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCJpc0VkaXRNb2RlICYmICFpc0VkaXRpbmdTZWxmXCIgW2NsYXNzLmNvbC1sZy05XT1cImlzVmlld09ubHlcIiBbY2xhc3MuY29sLWxnLTEwXT1cIiFpc1ZpZXdPbmx5XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGF0dHIuaWQ9XCJ1c2VyTmFtZS17e3VuaXF1ZUlkfX1cIiBuYW1lPVwidXNlck5hbWVcIiBbYXR0ci5hdXRvY29tcGxldGVdPVwiaXNHZW5lcmFsRWRpdG9yID8gJ25ldy1wYXNzd29yZCcgOiBudWxsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB1c2VyIG5hbWVcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbbmdDbGFzc109XCJ7J2lzLXZhbGlkJzogZi5zdWJtaXR0ZWQgJiYgdXNlck5hbWUudmFsaWQsICdpcy1pbnZhbGlkJyA6IGYuc3VibWl0dGVkICYmICF1c2VyTmFtZS52YWxpZH1cIlxuICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyRWRpdC51c2VyTmFtZVwiICN1c2VyTmFtZT1cIm5nTW9kZWxcIiByZXF1aXJlZCBtaW5sZW5ndGg9XCIyXCIgbWF4bGVuZ3RoPVwiMjAwXCIgLz5cbiAgICAgICAgPGkgKm5nSWY9XCJzaG93VmFsaWRhdGlvbkVycm9ycyAmJiBmLnN1Ym1pdHRlZFwiIGNsYXNzPVwiZmEgZm9ybS1jb250cm9sLWZlZWRiYWNrXCIgW25nQ2xhc3NdPVwieydmYS1jaGVjayc6IHVzZXJOYW1lLnZhbGlkLCAnZmEtdGltZXMnIDogIXVzZXJOYW1lLnZhbGlkfVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJzaG93VmFsaWRhdGlvbkVycm9ycyAmJiBmLnN1Ym1pdHRlZCAmJiAhdXNlck5hbWUudmFsaWRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICB7eyd1c2Vycy5lZGl0b3IuVXNlck5hbWVSZXF1aXJlZCcgfCB0cmFuc2xhdGV9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCJpc0VkaXRNb2RlICYmIGlzRWRpdGluZ1NlbGYgJiYgIWlzQ2hhbmdlUGFzc3dvcmQgJiYgdXNlci51c2VyTmFtZSAhPSB1c2VyRWRpdC51c2VyTmFtZVwiIGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgIDxociBjbGFzcz1cInBhc3N3b3JkLXNlcGFyYXRvci1oclwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ICpuZ0lmPVwiaXNFZGl0TW9kZSAmJiBpc0VkaXRpbmdTZWxmICYmICFpc0NoYW5nZVBhc3N3b3JkICYmIHVzZXIudXNlck5hbWUgIT0gdXNlckVkaXQudXNlck5hbWVcIiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93IGhhcy1mZWVkYmFjay1pY29uXCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbCBjb2wtbGctMlwiIGZvcj1cInVzZXJQYXNzd29yZC17e3VuaXF1ZUlkfX1cIj57eyd1c2Vycy5lZGl0b3IuUGFzc3dvcmQnIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgYXR0ci5pZD1cInVzZXJQYXNzd29yZC17e3VuaXF1ZUlkfX1cIiBuYW1lPVwidXNlclBhc3N3b3JkXCIgW2F0dHIuYXV0b2NvbXBsZXRlXT1cImlzR2VuZXJhbEVkaXRvciA/ICduZXctcGFzc3dvcmQnIDogbnVsbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbbmdDbGFzc109XCJ7J2lzLXZhbGlkJzogZi5zdWJtaXR0ZWQgJiYgdXNlclBhc3N3b3JkLnZhbGlkLCAnaXMtaW52YWxpZCcgOiBmLnN1Ym1pdHRlZCAmJiAhdXNlclBhc3N3b3JkLnZhbGlkfVwiXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXJFZGl0LmN1cnJlbnRQYXNzd29yZFwiICN1c2VyUGFzc3dvcmQ9XCJuZ01vZGVsXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgPHNtYWxsIGNsYXNzPVwiaGludC1zbVwiPnt7J3VzZXJzLmVkaXRvci5QYXNzd29yZEhpbnQnIHwgdHJhbnNsYXRlfX08L3NtYWxsPlxuICAgICAgICA8aSAqbmdJZj1cInNob3dWYWxpZGF0aW9uRXJyb3JzICYmIGYuc3VibWl0dGVkXCIgY2xhc3M9XCJmYSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIiBbbmdDbGFzc109XCJ7J2ZhLWNoZWNrJzogdXNlclBhc3N3b3JkLnZhbGlkLCAnZmEtdGltZXMnIDogIXVzZXJQYXNzd29yZC52YWxpZH1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwic2hvd1ZhbGlkYXRpb25FcnJvcnMgJiYgZi5zdWJtaXR0ZWQgJiYgIXVzZXJQYXNzd29yZC52YWxpZFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgIHt7J3VzZXJzLmVkaXRvci5DdXJyZW50UGFzc3dvcmRSZXF1aXJlZCcgfCB0cmFuc2xhdGV9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICA8aHIgW2NsYXNzLnNlcGFyYXRvci1ocl09XCIhaXNFZGl0TW9kZVwiIFtjbGFzcy5lZGl0LXNlcGFyYXRvci1ocl09XCJpc0VkaXRNb2RlXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93IGhhcy1mZWVkYmFjay1pY29uXCI+XG4gICAgICA8bGFiZWwgW2NsYXNzLmNvbC1sZy0zXT1cImlzVmlld09ubHlcIiBbY2xhc3MuY29sLWxnLTJdPVwiIWlzVmlld09ubHlcIiBjbGFzcz1cImNvbC1mb3JtLWxhYmVsXCIgZm9yPVwiZW1haWwte3t1bmlxdWVJZH19XCI+e3sndXNlcnMuZWRpdG9yLkVtYWlsJyB8IHRyYW5zbGF0ZX19PC9sYWJlbD5cbiAgICAgIDxkaXYgKm5nSWY9XCIhaXNFZGl0TW9kZVwiIFtjbGFzcy5jb2wtbGctOV09XCJpc1ZpZXdPbmx5XCIgW2NsYXNzLmNvbC1sZy0xMF09XCIhaXNWaWV3T25seVwiPlxuICAgICAgICA8cCBjbGFzcz1cImZvcm0tY29udHJvbC1wbGFpbnRleHRcIj57e3VzZXIuZW1haWx9fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cImlzRWRpdE1vZGVcIiBbY2xhc3MuY29sLWxnLTldPVwiaXNWaWV3T25seVwiIFtjbGFzcy5jb2wtbGctMTBdPVwiIWlzVmlld09ubHlcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXR0ci5pZD1cImVtYWlsLXt7dW5pcXVlSWR9fVwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWwgYWRkcmVzc1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgW25nQ2xhc3NdPVwieydpcy12YWxpZCc6IGYuc3VibWl0dGVkICYmIGVtYWlsLnZhbGlkLCAnaXMtaW52YWxpZCcgOiBmLnN1Ym1pdHRlZCAmJiAhZW1haWwudmFsaWR9XCJcbiAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlckVkaXQuZW1haWxcIiAjZW1haWw9XCJuZ01vZGVsXCIgcmVxdWlyZWQgbWF4bGVuZ3RoPVwiMjAwXCIgcGF0dGVybj1cIl5bYS16QS1aMC05Xy4rLV0rQFthLXpBLVowLTktXStcXC5bYS16QS1aMC05LS5dKyRcIiAvPlxuICAgICAgICA8aSAqbmdJZj1cInNob3dWYWxpZGF0aW9uRXJyb3JzICYmIGYuc3VibWl0dGVkXCIgY2xhc3M9XCJmYSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIiBbbmdDbGFzc109XCJ7J2ZhLWNoZWNrJzogZW1haWwudmFsaWQsICdmYS10aW1lcycgOiAhZW1haWwudmFsaWR9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICA8c3BhbiAqbmdJZj1cInNob3dWYWxpZGF0aW9uRXJyb3JzICYmIGYuc3VibWl0dGVkICYmIGVtYWlsLmVycm9ycz8ucmVxdWlyZWRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICB7eyd1c2Vycy5lZGl0b3IuRW1haWxSZXF1aXJlZCcgfCB0cmFuc2xhdGV9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwic2hvd1ZhbGlkYXRpb25FcnJvcnMgJiYgZi5zdWJtaXR0ZWQgJiYgZW1haWwuZXJyb3JzPy5wYXR0ZXJuXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAge3sndXNlcnMuZWRpdG9yLkludmFsaWRFbWFpbCcgfCB0cmFuc2xhdGV9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCJpc0VkaXRNb2RlXCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cbiAgICAgICAgPGhyIFtjbGFzcy5zZXBhcmF0b3ItaHJdPVwiIWlzRWRpdE1vZGVcIiBbY2xhc3MuZWRpdC1zZXBhcmF0b3ItaHJdPVwiaXNFZGl0TW9kZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCJpc0VkaXRNb2RlXCIgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgPGxhYmVsIGZvcj1cIm5ld1Bhc3N3b3JkLXt7dW5pcXVlSWR9fVwiIGNsYXNzPVwiY29sLWZvcm0tbGFiZWwgY29sLWxnLTJcIj57eyd1c2Vycy5lZGl0b3IuUGFzc3dvcmQnIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgPGRpdiAqbmdJZj1cIiFpc0NoYW5nZVBhc3N3b3JkICYmICFpc05ld1VzZXJcIiBjbGFzcz1cImNvbC1sZy0xMFwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2hhbmdlUGFzc3dvcmQoKVwiIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCI+e3sndXNlcnMuZWRpdG9yLkNoYW5nZVBhc3N3b3JkJyB8IHRyYW5zbGF0ZX19PC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiAqbmdJZj1cImlzQ2hhbmdlUGFzc3dvcmQgfHwgaXNOZXdVc2VyXCIgY2xhc3M9XCJjb2wtbGctMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhc3N3b3JkLXdlbGwgY2FyZCBjYXJkLWJvZHkgYmctbGlnaHRcIj5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNFZGl0aW5nU2VsZlwiIGNsYXNzPVwiZm9ybS1ncm91cCByb3cgaGFzLWZlZWRiYWNrLWljb25cIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1mb3JtLWxhYmVsIGNvbC1sZy0zXCIgZm9yPVwiY3VycmVudFBhc3N3b3JkLXt7dW5pcXVlSWR9fVwiPnt7J3VzZXJzLmVkaXRvci5DdXJyZW50UGFzc3dvcmQnIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy05XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBhdHRyLmlkPVwiY3VycmVudFBhc3N3b3JkLXt7dW5pcXVlSWR9fVwiIG5hbWU9XCJjdXJyZW50UGFzc3dvcmRcIiBbYXR0ci5hdXRvY29tcGxldGVdPVwiaXNHZW5lcmFsRWRpdG9yID8gJ25ldy1wYXNzd29yZCcgOiBudWxsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBjdXJyZW50IHBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpcy12YWxpZCc6IGYuc3VibWl0dGVkICYmIGN1cnJlbnRQYXNzd29yZC52YWxpZCwgJ2lzLWludmFsaWQnIDogZi5zdWJtaXR0ZWQgJiYgIWN1cnJlbnRQYXNzd29yZC52YWxpZH1cIiBbKG5nTW9kZWwpXT1cInVzZXJFZGl0LmN1cnJlbnRQYXNzd29yZFwiICNjdXJyZW50UGFzc3dvcmQ9XCJuZ01vZGVsXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPGkgKm5nSWY9XCJzaG93VmFsaWRhdGlvbkVycm9ycyAmJiBmLnN1Ym1pdHRlZFwiIGNsYXNzPVwiZmEgZm9ybS1jb250cm9sLWZlZWRiYWNrXCIgW25nQ2xhc3NdPVwieydmYS1jaGVjayc6IGN1cnJlbnRQYXNzd29yZC52YWxpZCwgJ2ZhLXRpbWVzJyA6ICFjdXJyZW50UGFzc3dvcmQudmFsaWR9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInNob3dWYWxpZGF0aW9uRXJyb3JzICYmIGYuc3VibWl0dGVkICYmICFjdXJyZW50UGFzc3dvcmQudmFsaWRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICB7eyd1c2Vycy5lZGl0b3IuQ3VycmVudFBhc3N3b3JkUmVxdWlyZWQnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWlzTmV3VXNlclwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgIDxociBjbGFzcz1cInBhc3N3b3JkLXNlcGFyYXRvci1oclwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvdyBoYXMtZmVlZGJhY2staWNvblwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWwgY29sLWxnLTNcIiBmb3I9XCJuZXdQYXNzd29yZC17e3VuaXF1ZUlkfX1cIj57eyd1c2Vycy5lZGl0b3IuTmV3UGFzc3dvcmQnIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy05XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBhdHRyLmlkPVwibmV3UGFzc3dvcmQte3t1bmlxdWVJZH19XCIgbmFtZT1cIm5ld1Bhc3N3b3JkXCIgW2F0dHIuYXV0b2NvbXBsZXRlXT1cImlzR2VuZXJhbEVkaXRvciA/ICduZXctcGFzc3dvcmQnIDogbnVsbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmV3IHBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpcy12YWxpZCc6IGYuc3VibWl0dGVkICYmIG5ld1Bhc3N3b3JkLnZhbGlkLCAnaXMtaW52YWxpZCcgOiBmLnN1Ym1pdHRlZCAmJiAhbmV3UGFzc3dvcmQudmFsaWR9XCIgWyhuZ01vZGVsKV09XCJ1c2VyRWRpdC5uZXdQYXNzd29yZFwiICNuZXdQYXNzd29yZD1cIm5nTW9kZWxcIlxuICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgbWlubGVuZ3RoPVwiNlwiIHZhbGlkYXRlRXF1YWw9XCJjb25maXJtUGFzc3dvcmRcIiByZXZlcnNlPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgIDxpICpuZ0lmPVwic2hvd1ZhbGlkYXRpb25FcnJvcnMgJiYgZi5zdWJtaXR0ZWRcIiBjbGFzcz1cImZhIGZvcm0tY29udHJvbC1mZWVkYmFja1wiIFtuZ0NsYXNzXT1cInsnZmEtY2hlY2snOiBuZXdQYXNzd29yZC52YWxpZCwgJ2ZhLXRpbWVzJyA6ICFuZXdQYXNzd29yZC52YWxpZH1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwic2hvd1ZhbGlkYXRpb25FcnJvcnMgJiYgZi5zdWJtaXR0ZWQgJiYgIW5ld1Bhc3N3b3JkLnZhbGlkXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAge3sndXNlcnMuZWRpdG9yLk5ld1Bhc3N3b3JkUmVxdWlyZWQnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgIDxociBjbGFzcz1cInBhc3N3b3JkLXNlcGFyYXRvci1oclwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvdyBoYXMtZmVlZGJhY2staWNvblwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWwgY29sLWxnLTNcIiBmb3I9XCJjb25maXJtUGFzc3dvcmQte3t1bmlxdWVJZH19XCI+e3sndXNlcnMuZWRpdG9yLkNvbmZpcm1QYXNzd29yZCcgfCB0cmFuc2xhdGV9fTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTlcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGF0dHIuaWQ9XCJjb25maXJtUGFzc3dvcmQte3t1bmlxdWVJZH19XCIgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiIFthdHRyLmF1dG9jb21wbGV0ZV09XCJpc0dlbmVyYWxFZGl0b3IgPyAnbmV3LXBhc3N3b3JkJyA6IG51bGxcIiBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gbmV3IHBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpcy12YWxpZCc6IGYuc3VibWl0dGVkICYmIGNvbmZpcm1QYXNzd29yZC52YWxpZCwgJ2lzLWludmFsaWQnIDogZi5zdWJtaXR0ZWQgJiYgIWNvbmZpcm1QYXNzd29yZC52YWxpZH1cIiBbKG5nTW9kZWwpXT1cInVzZXJFZGl0LmNvbmZpcm1QYXNzd29yZFwiICNjb25maXJtUGFzc3dvcmQ9XCJuZ01vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIHZhbGlkYXRlRXF1YWw9XCJuZXdQYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgIDxpICpuZ0lmPVwic2hvd1ZhbGlkYXRpb25FcnJvcnMgJiYgZi5zdWJtaXR0ZWRcIiBjbGFzcz1cImZhIGZvcm0tY29udHJvbC1mZWVkYmFja1wiIFtuZ0NsYXNzXT1cInsnZmEtY2hlY2snOiBjb25maXJtUGFzc3dvcmQudmFsaWQsICdmYS10aW1lcycgOiAhY29uZmlybVBhc3N3b3JkLnZhbGlkfVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJzaG93VmFsaWRhdGlvbkVycm9ycyAmJiBmLnN1Ym1pdHRlZCAmJiBjb25maXJtUGFzc3dvcmQuZXJyb3JzPy5yZXF1aXJlZFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgIHt7J3VzZXJzLmVkaXRvci5Db25maXJtYXRpb25QYXNzd29yZFJlcXVpcmVkJyB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJzaG93VmFsaWRhdGlvbkVycm9ycyAmJiBmLnN1Ym1pdHRlZCAmJiBjb25maXJtUGFzc3dvcmQuZXJyb3JzPy52YWxpZGF0ZUVxdWFsICYmICFjb25maXJtUGFzc3dvcmQuZXJyb3JzPy5yZXF1aXJlZFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgIHt7J3VzZXJzLmVkaXRvci5QYXNzd29yZE1pc21hdGNoJyB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi0tPlxuXG4gICAgPGRpdiAqbmdJZj1cIiFpc0VkaXRNb2RlIHx8IGNhbkFzc2lnblJvbGVzIHx8IGlzRWRpdGluZ1NlbGZcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICA8aHIgW2NsYXNzLnNlcGFyYXRvci1ocl09XCIhaXNFZGl0TW9kZVwiIFtjbGFzcy5lZGl0LXNlcGFyYXRvci1ocl09XCJpc0VkaXRNb2RlXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiAqbmdJZj1cIiFpc0VkaXRNb2RlIHx8IGNhbkFzc2lnblJvbGVzIHx8IGlzRWRpdGluZ1NlbGZcIiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93IGhhcy1mZWVkYmFjay1pY29uXCI+XG4gICAgICA8bGFiZWwgW2NsYXNzLmNvbC1sZy0zXT1cImlzVmlld09ubHlcIiBbY2xhc3MuY29sLWxnLTJdPVwiIWlzVmlld09ubHlcIiBjbGFzcz1cImNvbC1mb3JtLWxhYmVsXCIgZm9yPVwicm9sZXMtdXNlci1pbmZvXCI+e3sndXNlcnMuZWRpdG9yLlJvbGVzJyB8IHRyYW5zbGF0ZX19PC9sYWJlbD5cbiAgICAgIDxkaXYgKm5nSWY9XCIhaXNFZGl0TW9kZVwiIFtjbGFzcy5jb2wtbGctOV09XCJpc1ZpZXdPbmx5XCIgW2NsYXNzLmNvbC1sZy0xMF09XCIhaXNWaWV3T25seVwiPlxuICAgICAgICA8cCBuZ1ByZXNlcnZlV2hpdGVzcGFjZXMgY2xhc3M9XCJmb3JtLWNvbnRyb2wtcGxhaW50ZXh0XCI+XG4gICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IHJvbGUgb2YgdXNlci5yb2xlc1wiPlxuICAgICAgICAgICAgPHNwYW4gdGl0bGU9J3t7Z2V0Um9sZUJ5TmFtZShyb2xlKT8uZGVzY3JpcHRpb259fScgY2xhc3M9XCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLXNlY29uZGFyeVwiPnt7cm9sZX19PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwiaXNFZGl0TW9kZSAmJiBjYW5Bc3NpZ25Sb2xlcyAmJiAhaXNFZGl0aW5nU2VsZlwiIFtuZ0NsYXNzXT1cInsnaXMtdmFsaWQnOiBmLnN1Ym1pdHRlZCAmJiByb2xlcy52YWxpZCwgJ2lzLWludmFsaWQnIDogZi5zdWJtaXR0ZWQgJiYgIXJvbGVzLnZhbGlkfVwiIFtjbGFzcy5jb2wtbGctOV09XCJpc1ZpZXdPbmx5XCIgW2NsYXNzLmNvbC1sZy0xMF09XCIhaXNWaWV3T25seVwiPlxuICAgICAgICA8c2VsZWN0IGlkPVwicm9sZXMtdXNlci1pbmZvXCIgbmFtZT1cInJvbGVzXCIgWyhuZ01vZGVsKV09XCJ1c2VyRWRpdC5yb2xlc1wiICNyb2xlcz1cIm5nTW9kZWxcIiAjcm9sZXNTZWxlY3Rvcj1cImJvb3RzdHJhcC1zZWxlY3RcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VsZWN0cGlja2VyIGZvcm0tY29udHJvbCBsZWZ0LXN0YXR1c1wiIGJvb3RzdHJhcFNlbGVjdCByZXF1aXJlZCBtdWx0aXBsZSBkYXRhLWxpdmUtc2VhcmNoPVwidHJ1ZVwiIGRhdGEtYWN0aW9ucy1ib3g9XCJmYWxzZVwiIGRhdGEtbGl2ZS1zZWFyY2gtcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiB0aXRsZT1cIlNlbGVjdCBSb2xlc1wiPlxuICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHJvbGUgb2YgYWxsUm9sZXNcIiBhdHRyLmRhdGEtY29udGVudD1cIjxzcGFuIHRpdGxlPSd7e3JvbGUuZGVzY3JpcHRpb259fScgY2xhc3M9J2JhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utc2Vjb25kYXJ5Jz57e3JvbGUubmFtZX19PC9zcGFuPlwiIGF0dHIudmFsdWU9XCJ7e3JvbGUubmFtZX19XCI+XG4gICAgICAgICAgICB7e3JvbGUubmFtZX19XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8aSAqbmdJZj1cInNob3dWYWxpZGF0aW9uRXJyb3JzICYmIGYuc3VibWl0dGVkXCIgY2xhc3M9XCJmYSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIiBbbmdDbGFzc109XCJ7J2ZhLWNoZWNrJzogcm9sZXMudmFsaWQsICdmYS10aW1lcycgOiAhcm9sZXMudmFsaWR9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICA8c3BhbiAqbmdJZj1cInNob3dWYWxpZGF0aW9uRXJyb3JzICYmIGYuc3VibWl0dGVkICYmICFyb2xlcy52YWxpZFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgIHt7J3VzZXJzLmVkaXRvci5Sb2xlUmVxdWlyZWQnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqLS0+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgIDxociBbY2xhc3Muc2VwYXJhdG9yLWhyXT1cIiFpc0VkaXRNb2RlXCIgW2NsYXNzLmVkaXQtc2VwYXJhdG9yLWhyXT1cImlzRWRpdE1vZGVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgIDxsYWJlbCBbY2xhc3MuY29sLWxnLTNdPVwiaXNWaWV3T25seVwiIFtjbGFzcy5jb2wtbGctMl09XCIhaXNWaWV3T25seVwiIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiBmb3I9XCJmdWxsTmFtZS17e3VuaXF1ZUlkfX1cIj57eyd1c2Vycy5lZGl0b3IuRnVsbE5hbWUnIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgPGRpdiAqbmdJZj1cIiFpc0VkaXRNb2RlXCIgW2NsYXNzLmNvbC1sZy05XT1cImlzVmlld09ubHlcIiBbY2xhc3MuY29sLWxnLTEwXT1cIiFpc1ZpZXdPbmx5XCI+XG4gICAgICAgIDxwIGNsYXNzPVwiZm9ybS1jb250cm9sLXBsYWludGV4dFwiPnt7dXNlci5mdWxsTmFtZX19PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwiaXNFZGl0TW9kZVwiIFtjbGFzcy5jb2wtbGctOV09XCJpc1ZpZXdPbmx5XCIgW2NsYXNzLmNvbC1sZy0xMF09XCIhaXNWaWV3T25seVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBhdHRyLmlkPVwiZnVsbE5hbWUte3t1bmlxdWVJZH19XCIgbmFtZT1cImZ1bGxOYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBmdWxsIG5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwidXNlckVkaXQuZnVsbE5hbWVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgIDxociBbY2xhc3Muc2VwYXJhdG9yLWhyXT1cIiFpc0VkaXRNb2RlXCIgW2NsYXNzLmVkaXQtc2VwYXJhdG9yLWhyXT1cImlzRWRpdE1vZGVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgIDxsYWJlbCBbY2xhc3MuY29sLWxnLTNdPVwiaXNWaWV3T25seVwiIFtjbGFzcy5jb2wtbGctMl09XCIhaXNWaWV3T25seVwiIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiBmb3I9XCJwaG9uZU51bWJlci17e3VuaXF1ZUlkfX1cIj57eyd1c2Vycy5lZGl0b3IuUGhvbmVOdW1iZXInIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgPGRpdiAqbmdJZj1cIiFpc0VkaXRNb2RlXCIgW2NsYXNzLmNvbC1sZy05XT1cImlzVmlld09ubHlcIiBbY2xhc3MuY29sLWxnLTEwXT1cIiFpc1ZpZXdPbmx5XCI+XG4gICAgICAgIDxwIGNsYXNzPVwiZm9ybS1jb250cm9sLXBsYWludGV4dFwiPnt7dXNlci5waG9uZU51bWJlcn19PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwiaXNFZGl0TW9kZVwiIFtjbGFzcy5jb2wtbGctOV09XCJpc1ZpZXdPbmx5XCIgW2NsYXNzLmNvbC1sZy0xMF09XCIhaXNWaWV3T25seVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBhdHRyLmlkPVwicGhvbmVOdW1iZXIte3t1bmlxdWVJZH19XCIgbmFtZT1cInBob25lTnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBwaG9uZSBudW1iZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwidXNlckVkaXQucGhvbmVOdW1iZXJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2ICpuZ0lmPVwiIWlzVmlld09ubHlcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICA8aHIgW2NsYXNzLmxhc3Qtc2VwYXJhdG9yLWhyXT1cIiFpc0VkaXRNb2RlXCIgW2NsYXNzLmVkaXQtbGFzdC1zZXBhcmF0b3ItaHJdPVwiaXNFZGl0TW9kZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCIhaXNWaWV3T25seVwiIGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNVwiPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNHZW5lcmFsRWRpdG9yICYmIGlzRWRpdE1vZGVcIiBjbGFzcz1cImZsb2F0LWxlZnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayB1c2VyLWVuYWJsZWRcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImlkRW5hYmxlZFwiIG5hbWU9XCJpc0VuYWJsZWRcIiBbKG5nTW9kZWwpXT1cInVzZXJFZGl0LmlzRW5hYmxlZFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlkRW5hYmxlZFwiIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiPnt7J3VzZXJzLmVkaXRvci5FbmFibGVkJyB8IHRyYW5zbGF0ZX19PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwidXNlckVkaXQuaXNMb2NrZWRPdXRcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInVubG9ja1VzZXIoKVwiIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIHVuYmxvY2stdXNlclwiIFtkaXNhYmxlZF09XCJpc1NhdmluZ1wiPjxpIGNsYXNzPSdmYSBmYS11bmxvY2stYWx0Jz48L2k+IHt7J3VzZXJzLmVkaXRvci5VbmJsb2NrJyB8IHRyYW5zbGF0ZX19PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTdcIj5cbiAgICAgICAgPGRpdiBuZ1ByZXNlcnZlV2hpdGVzcGFjZXMgY2xhc3M9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhaXNFZGl0TW9kZSAmJiBpc0dlbmVyYWxFZGl0b3JcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImNsb3NlKClcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj48aSBjbGFzcz0nZmEgZmEtY2xvc2UnPjwvaT4ge3sndXNlcnMuZWRpdG9yLkNsb3NlJyB8IHRyYW5zbGF0ZX19PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFpc0VkaXRNb2RlICYmICFpc0dlbmVyYWxFZGl0b3JcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImVkaXQoKVwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPjxpIGNsYXNzPSdmYSBmYS1lZGl0Jz48L2k+IHt7J3VzZXJzLmVkaXRvci5FZGl0JyB8IHRyYW5zbGF0ZX19PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzRWRpdE1vZGVcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImNhbmNlbCgpXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIFtkaXNhYmxlZF09XCJpc1NhdmluZ1wiPjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiB7eyd1c2Vycy5lZGl0b3IuQ2FuY2VsJyB8IHRyYW5zbGF0ZX19PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzRWRpdE1vZGVcIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiaXNTYXZpbmdcIj5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiIWlzU2F2aW5nXCIgY2xhc3M9J2ZhIGZhLXNhdmUnPjwvaT48aSAqbmdJZj1cImlzU2F2aW5nXCIgY2xhc3M9J2ZhIGZhLWNpcmNsZS1vLW5vdGNoIGZhLXNwaW4nPjwvaT4ge3tpc1NhdmluZyA/ICgndXNlcnMuZWRpdG9yLlNhdmluZycgfCB0cmFuc2xhdGUpIDogKCd1c2Vycy5lZGl0b3IuU2F2ZScgfCB0cmFuc2xhdGUpfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cbiAgPC9mb3JtPlxuPC9kaXY+XG4iXX0=