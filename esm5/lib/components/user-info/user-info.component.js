import { __read, __spread, __values } from "tslib";
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
var _c0 = ["f"];
var _c1 = ["userName"];
var _c2 = ["userPassword"];
var _c3 = ["email"];
var _c4 = ["currentPassword"];
var _c5 = ["newPassword"];
var _c6 = ["confirmPassword"];
var _c7 = ["roles"];
var _c8 = ["rolesSelector"];
function UserInfoComponent_form_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "p", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("col-lg-9", ctx_r2.isViewOnly)("col-lg-10", !ctx_r2.isViewOnly);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.user.jobTitle);
} }
function UserInfoComponent_form_1_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "input", 14);
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_7_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r21); var ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.userEdit.jobTitle = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext(2);
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
    var ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("col-lg-9", ctx_r4.isViewOnly)("col-lg-10", !ctx_r4.isViewOnly);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r4.user.userName);
} }
var _c9 = function (a0, a1) { return { "fa-check": a0, "fa-times": a1 }; };
function UserInfoComponent_form_1_div_16_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 19);
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r22 = i0.ɵɵreference(2);
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
var _c10 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
function UserInfoComponent_form_1_div_16_Template(rf, ctx) { if (rf & 1) {
    var _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "input", 15, 16);
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_16_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r26); var ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.userEdit.userName = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, UserInfoComponent_form_1_div_16_i_3_Template, 1, 4, "i", 17);
    i0.ɵɵtemplate(4, UserInfoComponent_form_1_div_16_span_4_Template, 3, 3, "span", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r22 = i0.ɵɵreference(2);
    i0.ɵɵnextContext();
    var _r1 = i0.ɵɵreference(1);
    var ctx_r5 = i0.ɵɵnextContext();
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
    var _r27 = i0.ɵɵreference(6);
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
    var _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "label", 22);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 23);
    i0.ɵɵelementStart(5, "input", 24, 25);
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_18_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r31); var ctx_r30 = i0.ɵɵnextContext(2); return ctx_r30.userEdit.currentPassword = $event; });
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
    var _r27 = i0.ɵɵreference(6);
    i0.ɵɵnextContext();
    var _r1 = i0.ɵɵreference(1);
    var ctx_r7 = i0.ɵɵnextContext();
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
    var ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("col-lg-9", ctx_r8.isViewOnly)("col-lg-10", !ctx_r8.isViewOnly);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r8.user.email);
} }
function UserInfoComponent_form_1_div_27_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 19);
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r32 = i0.ɵɵreference(2);
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
    var _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "input", 27, 28);
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_27_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r37); var ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.userEdit.email = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, UserInfoComponent_form_1_div_27_i_3_Template, 1, 4, "i", 17);
    i0.ɵɵtemplate(4, UserInfoComponent_form_1_div_27_span_4_Template, 3, 3, "span", 18);
    i0.ɵɵtemplate(5, UserInfoComponent_form_1_div_27_span_5_Template, 3, 3, "span", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r32 = i0.ɵɵreference(2);
    i0.ɵɵnextContext();
    var _r1 = i0.ɵɵreference(1);
    var ctx_r9 = i0.ɵɵnextContext();
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
    var ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("separator-hr", !ctx_r10.isEditMode)("edit-separator-hr", ctx_r10.isEditMode);
} }
function UserInfoComponent_form_1_div_29_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelementStart(1, "button", 30);
    i0.ɵɵlistener("click", function UserInfoComponent_form_1_div_29_div_4_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r41); var ctx_r40 = i0.ɵɵnextContext(3); return ctx_r40.changePassword(); });
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
    var _r51 = i0.ɵɵreference(6);
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
    var _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "label", 32);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 33);
    i0.ɵɵelementStart(5, "input", 38, 39);
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_29_div_5_div_2_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r55); var ctx_r54 = i0.ɵɵnextContext(4); return ctx_r54.userEdit.currentPassword = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, UserInfoComponent_form_1_div_29_div_5_div_2_i_7_Template, 1, 4, "i", 17);
    i0.ɵɵtemplate(8, UserInfoComponent_form_1_div_29_div_5_div_2_span_8_Template, 3, 3, "span", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r51 = i0.ɵɵreference(6);
    i0.ɵɵnextContext(3);
    var _r1 = i0.ɵɵreference(1);
    var ctx_r42 = i0.ɵɵnextContext();
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
    var _r44 = i0.ɵɵreference(10);
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
    var _r47 = i0.ɵɵreference(22);
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
    var _r57 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_29_div_5_Template_input_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r57); var ctx_r56 = i0.ɵɵnextContext(3); return ctx_r56.userEdit.newPassword = $event; });
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
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_29_div_5_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r57); var ctx_r58 = i0.ɵɵnextContext(3); return ctx_r58.userEdit.confirmPassword = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(23, UserInfoComponent_form_1_div_29_div_5_i_23_Template, 1, 4, "i", 17);
    i0.ɵɵtemplate(24, UserInfoComponent_form_1_div_29_div_5_span_24_Template, 3, 3, "span", 18);
    i0.ɵɵtemplate(25, UserInfoComponent_form_1_div_29_div_5_span_25_Template, 3, 3, "span", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r44 = i0.ɵɵreference(10);
    var _r47 = i0.ɵɵreference(22);
    i0.ɵɵnextContext(2);
    var _r1 = i0.ɵɵreference(1);
    var ctx_r39 = i0.ɵɵnextContext();
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
    var ctx_r11 = i0.ɵɵnextContext(2);
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
    var ctx_r12 = i0.ɵɵnextContext(2);
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
    var role_r62 = ctx.$implicit;
    var ctx_r61 = i0.ɵɵnextContext(4);
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
    var ctx_r59 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("col-lg-9", ctx_r59.isViewOnly)("col-lg-10", !ctx_r59.isViewOnly);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r59.user.roles);
} }
function UserInfoComponent_form_1_div_31_div_5_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var role_r68 = ctx.$implicit;
    i0.ɵɵattributeInterpolate2("data-content", "<span title='", role_r68.description, "' class='badge badge-pill badge-secondary'>", role_r68.name, "</span>");
    i0.ɵɵattribute("value", role_r68.name);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", role_r68.name, " ");
} }
function UserInfoComponent_form_1_div_31_div_5_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 19);
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r63 = i0.ɵɵreference(2);
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
    var _r70 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵelementStart(1, "select", 45, 46);
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_31_div_5_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r70); var ctx_r69 = i0.ɵɵnextContext(3); return ctx_r69.userEdit.roles = $event; });
    i0.ɵɵtemplate(4, UserInfoComponent_form_1_div_31_div_5_option_4_Template, 2, 4, "option", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, UserInfoComponent_form_1_div_31_div_5_i_5_Template, 1, 4, "i", 17);
    i0.ɵɵtemplate(6, UserInfoComponent_form_1_div_31_div_5_span_6_Template, 3, 3, "span", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r63 = i0.ɵɵreference(2);
    i0.ɵɵnextContext(2);
    var _r1 = i0.ɵɵreference(1);
    var ctx_r60 = i0.ɵɵnextContext();
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
    var ctx_r13 = i0.ɵɵnextContext(2);
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
    var ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("col-lg-9", ctx_r14.isViewOnly)("col-lg-10", !ctx_r14.isViewOnly);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r14.user.fullName);
} }
function UserInfoComponent_form_1_div_40_Template(rf, ctx) { if (rf & 1) {
    var _r72 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "input", 47);
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_40_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r72); var ctx_r71 = i0.ɵɵnextContext(2); return ctx_r71.userEdit.fullName = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r15 = i0.ɵɵnextContext(2);
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
    var ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("col-lg-9", ctx_r16.isViewOnly)("col-lg-10", !ctx_r16.isViewOnly);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r16.user.phoneNumber);
} }
function UserInfoComponent_form_1_div_49_Template(rf, ctx) { if (rf & 1) {
    var _r74 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "input", 48);
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_49_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r74); var ctx_r73 = i0.ɵɵnextContext(2); return ctx_r73.userEdit.phoneNumber = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r17 = i0.ɵɵnextContext(2);
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
    var ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("last-separator-hr", !ctx_r18.isEditMode)("edit-last-separator-hr", ctx_r18.isEditMode);
} }
function UserInfoComponent_form_1_div_51_div_2_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r82 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 61);
    i0.ɵɵlistener("click", function UserInfoComponent_form_1_div_51_div_2_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r82); var ctx_r81 = i0.ɵɵnextContext(4); return ctx_r81.unlockUser(); });
    i0.ɵɵelement(1, "i", 62);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r80 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", ctx_r80.isSaving);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 2, "users.editor.Unblock"), "");
} }
function UserInfoComponent_form_1_div_51_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r84 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵelementStart(1, "div", 57);
    i0.ɵɵelementStart(2, "input", 58);
    i0.ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_51_div_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r84); var ctx_r83 = i0.ɵɵnextContext(3); return ctx_r83.userEdit.isEnabled = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 59);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, UserInfoComponent_form_1_div_51_div_2_button_6_Template, 4, 4, "button", 60);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r75 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r75.userEdit.isEnabled);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 3, "users.editor.Enabled"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r75.userEdit.isLockedOut);
} }
function UserInfoComponent_form_1_div_51_button_6_Template(rf, ctx) { if (rf & 1) {
    var _r86 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 63);
    i0.ɵɵlistener("click", function UserInfoComponent_form_1_div_51_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r86); var ctx_r85 = i0.ɵɵnextContext(3); return ctx_r85.close(); });
    i0.ɵɵelement(1, "i", 64);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, "users.editor.Close"), "");
} }
function UserInfoComponent_form_1_div_51_button_8_Template(rf, ctx) { if (rf & 1) {
    var _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 63);
    i0.ɵɵlistener("click", function UserInfoComponent_form_1_div_51_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r88); var ctx_r87 = i0.ɵɵnextContext(3); return ctx_r87.edit(); });
    i0.ɵɵelement(1, "i", 65);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 1, "users.editor.Edit"), "");
} }
function UserInfoComponent_form_1_div_51_button_10_Template(rf, ctx) { if (rf & 1) {
    var _r90 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 66);
    i0.ɵɵlistener("click", function UserInfoComponent_form_1_div_51_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r90); var ctx_r89 = i0.ɵɵnextContext(3); return ctx_r89.cancel(); });
    i0.ɵɵelement(1, "i", 67);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r78 = i0.ɵɵnextContext(3);
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
    var ctx_r79 = i0.ɵɵnextContext(3);
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
    var ctx_r19 = i0.ɵɵnextContext(2);
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
    var _r94 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 1, 2);
    i0.ɵɵlistener("ngSubmit", function UserInfoComponent_form_1_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r94); var _r1 = i0.ɵɵreference(1); var ctx_r93 = i0.ɵɵnextContext(); _r1.form.valid ? ctx_r93.save() : !ctx_r93.userName.valid && ctx_r93.showErrorAlert("User name is required", "Please enter a user name (minimum of 2 and maximum of 200 characters)"); ctx_r93.userPassword && !ctx_r93.userPassword.valid && ctx_r93.showErrorAlert("Password is required", "Please enter the current password"); (ctx_r93.email.errors == null ? null : ctx_r93.email.errors.required) && ctx_r93.showErrorAlert("Email is required", "Please enter an email address (maximum of 200 characters)"); (ctx_r93.email.errors == null ? null : ctx_r93.email.errors.pattern) && ctx_r93.showErrorAlert("Invalid Email", "Please enter a valid email address"); ctx_r93.isChangePassword && ctx_r93.isEditingSelf && !ctx_r93.currentPassword.valid && ctx_r93.showErrorAlert("Current password is required", "Please enter the current password"); (ctx_r93.isChangePassword || ctx_r93.isNewUser) && !ctx_r93.newPassword.valid && ctx_r93.showErrorAlert("New password is required", "Please enter the new password (minimum of 6 characters)"); (ctx_r93.isChangePassword || ctx_r93.isNewUser) && ctx_r93.newPassword.valid && (ctx_r93.confirmPassword.errors == null ? null : ctx_r93.confirmPassword.errors.required) && ctx_r93.showErrorAlert("Confirmation password is required", "Please enter the confirmation password"); (ctx_r93.isChangePassword || ctx_r93.isNewUser) && ctx_r93.newPassword.valid && (ctx_r93.confirmPassword.errors == null ? null : ctx_r93.confirmPassword.errors.validateEqual) && ctx_r93.showErrorAlert("Passwword mismatch", "New password and confirmation password do not match"); return ctx_r93.canAssignRoles && !ctx_r93.isEditingSelf && !ctx_r93.roles.valid && ctx_r93.showErrorAlert("Roles is required", "Please select a minimum of 1 role"); });
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
    var ctx_r0 = i0.ɵɵnextContext();
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
var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(alertService, accountService) {
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
    UserInfoComponent.prototype.ngOnInit = function () {
        if (!this.isGeneralEditor) {
            this.loadCurrentUserData();
        }
    };
    UserInfoComponent.prototype.loadCurrentUserData = function () {
        var _this = this;
        this.alertService.startLoadingMessage();
        if (this.canViewAllRoles) {
            this.accountService.getUserAndRoles().subscribe(function (results) { return _this.onCurrentUserDataLoadSuccessful(results[0], results[1]); }, function (error) { return _this.onCurrentUserDataLoadFailed(error); });
        }
        else {
            this.accountService.getUser().subscribe(function (user) { return _this.onCurrentUserDataLoadSuccessful(user, user.roles.map(function (x) { return new Role(x); })); }, function (error) { return _this.onCurrentUserDataLoadFailed(error); });
        }
    };
    UserInfoComponent.prototype.onCurrentUserDataLoadSuccessful = function (user, roles) {
        this.alertService.stopLoadingMessage();
        this.user = user;
        this.allRoles = roles;
    };
    UserInfoComponent.prototype.onCurrentUserDataLoadFailed = function (error) {
        this.alertService.stopLoadingMessage();
        this.alertService.showStickyMessage('Load Error', "Unable to retrieve user data from the server.\r\nErrors: \"" + Utilities.getHttpResponseMessages(error) + "\"", MessageSeverity.error, error);
        this.user = new User();
    };
    UserInfoComponent.prototype.getRoleByName = function (name) {
        return this.allRoles.find(function (r) { return r.name == name; });
    };
    UserInfoComponent.prototype.showErrorAlert = function (caption, message) {
        this.alertService.showMessage(caption, message, MessageSeverity.error);
    };
    UserInfoComponent.prototype.deletePasswordFromUser = function (user) {
        var userEdit = user;
        delete userEdit.currentPassword;
        delete userEdit.newPassword;
        delete userEdit.confirmPassword;
    };
    UserInfoComponent.prototype.edit = function () {
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
    };
    UserInfoComponent.prototype.save = function () {
        var _this = this;
        this.isSaving = true;
        this.alertService.startLoadingMessage('Saving changes...');
        if (this.isNewUser) {
            this.accountService.newUser(this.userEdit).subscribe(function (user) { return _this.saveSuccessHelper(user); }, function (error) { return _this.saveFailedHelper(error); });
        }
        else {
            this.accountService.updateUser(this.userEdit).subscribe(function (response) { return _this.saveSuccessHelper(); }, function (error) { return _this.saveFailedHelper(error); });
        }
    };
    UserInfoComponent.prototype.saveSuccessHelper = function (user) {
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
                this.alertService.showMessage('Success', "User \"" + this.user.userName + "\" was created successfully", MessageSeverity.success);
            }
            else if (!this.isEditingSelf) {
                this.alertService.showMessage('Success', "Changes to user \"" + this.user.userName + "\" was saved successfully", MessageSeverity.success);
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
    };
    UserInfoComponent.prototype.saveFailedHelper = function (error) {
        this.isSaving = false;
        this.alertService.stopLoadingMessage();
        this.alertService.showStickyMessage('Save Error', 'The below errors occured whilst saving your changes:', MessageSeverity.error, error);
        this.alertService.showStickyMessage(error, null, MessageSeverity.error);
        if (this.changesFailedCallback) {
            this.changesFailedCallback();
        }
    };
    UserInfoComponent.prototype.testIsRoleUserCountChanged = function (currentUser, editedUser) {
        var _this = this;
        var rolesAdded = this.isNewUser ? editedUser.roles : editedUser.roles.filter(function (role) { return currentUser.roles.indexOf(role) == -1; });
        var rolesRemoved = this.isNewUser ? [] : currentUser.roles.filter(function (role) { return editedUser.roles.indexOf(role) == -1; });
        var modifiedRoles = rolesAdded.concat(rolesRemoved);
        if (modifiedRoles.length) {
            setTimeout(function () { return _this.accountService.onRolesUserCountChanged(modifiedRoles); });
        }
    };
    UserInfoComponent.prototype.cancel = function () {
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
    };
    UserInfoComponent.prototype.close = function () {
        this.userEdit = this.user = new UserEdit();
        this.showValidationErrors = false;
        this.resetForm();
        this.isEditMode = false;
        if (this.changesSavedCallback) {
            this.changesSavedCallback();
        }
    };
    UserInfoComponent.prototype.refreshLoggedInUser = function () {
        var _this = this;
        this.accountService.refreshLoggedInUser()
            .subscribe(function (user) {
            _this.loadCurrentUserData();
        }, function (error) {
            _this.alertService.resetStickyMessage();
            _this.alertService.showStickyMessage('Refresh failed', 'An error occured whilst refreshing logged in user information from the server', MessageSeverity.error, error);
        });
    };
    UserInfoComponent.prototype.changePassword = function () {
        this.isChangePassword = true;
    };
    UserInfoComponent.prototype.unlockUser = function () {
        var _this = this;
        this.isSaving = true;
        this.alertService.startLoadingMessage('Unblocking user...');
        this.accountService.unblockUser(this.userEdit.id)
            .subscribe(function () {
            _this.isSaving = false;
            _this.userEdit.isLockedOut = false;
            _this.alertService.stopLoadingMessage();
            _this.alertService.showMessage('Success', 'User has been successfully unblocked', MessageSeverity.success);
        }, function (error) {
            _this.isSaving = false;
            _this.alertService.stopLoadingMessage();
            _this.alertService.showStickyMessage('Unblock Error', 'The below errors occured whilst unblocking the user:', MessageSeverity.error, error);
            _this.alertService.showStickyMessage(error, null, MessageSeverity.error);
        });
    };
    UserInfoComponent.prototype.resetForm = function (replace) {
        var _this = this;
        if (replace === void 0) { replace = false; }
        this.isChangePassword = false;
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
    UserInfoComponent.prototype.newUser = function (allRoles) {
        this.isGeneralEditor = true;
        this.isNewUser = true;
        this.allRoles = __spread(allRoles);
        this.user = this.userEdit = new UserEdit();
        this.userEdit.isEnabled = true;
        this.edit();
        return this.userEdit;
    };
    UserInfoComponent.prototype.editUser = function (user, allRoles) {
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
    };
    UserInfoComponent.prototype.displayUser = function (user, allRoles) {
        this.user = new User();
        Object.assign(this.user, user);
        this.deletePasswordFromUser(this.user);
        this.setRoles(user, allRoles);
        this.isEditMode = false;
    };
    UserInfoComponent.prototype.setRoles = function (user, allRoles) {
        var e_1, _a;
        var _this = this;
        this.allRoles = allRoles ? __spread(allRoles) : [];
        if (user.roles) {
            var _loop_1 = function (ur) {
                if (!this_1.allRoles.some(function (r) { return r.name == ur; })) {
                    this_1.allRoles.unshift(new Role(ur));
                }
            };
            var this_1 = this;
            try {
                for (var _b = __values(user.roles), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var ur = _c.value;
                    _loop_1(ur);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (allRoles == null || this.allRoles.length != allRoles.length) {
            setTimeout(function () {
                if (_this.rolesSelector) {
                    _this.rolesSelector.refresh();
                }
            });
        }
    };
    Object.defineProperty(UserInfoComponent.prototype, "canViewAllRoles", {
        get: function () {
            return this.accountService.userHasPermission(Permission.viewRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserInfoComponent.prototype, "canAssignRoles", {
        get: function () {
            return this.accountService.userHasPermission(Permission.assignRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
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
    return UserInfoComponent;
}());
export { UserInfoComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3VzZXItaW5mby91c2VyLWluZm8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdDQUFnQztBQUNoQyw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLGdDQUFnQztBQUVoQyxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEUsT0FBTyxFQUNILGVBQWUsRUFDZixTQUFTLEVBQ1osTUFBTSxzQ0FBc0MsQ0FBQztBQU05QyxPQUFPLEVBQ0gsVUFBVSxFQUNWLElBQUksRUFDUCxNQUFNLHNCQUFzQixDQUFDO0FBSTlCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRnpDLDJCQUNFO0lBQUEsNkJBQWtDO0lBQUEsWUFBaUI7SUFBQSxpQkFBSTtJQUN6RCxpQkFBTTs7O0lBRm1CLDZDQUE2QixpQ0FBQTtJQUNsQixlQUFpQjtJQUFqQiwwQ0FBaUI7Ozs7SUFFckQsMkJBQ0U7SUFBQSxpQ0FDRjtJQURrSSxpT0FBK0I7SUFBL0osaUJBQ0Y7SUFBQSxpQkFBTTs7O0lBRmtCLDZDQUE2QixpQ0FBQTtJQUN0QixlQUErQjtJQUEvQixrRUFBK0I7SUFBb0Usa0RBQStCOzs7SUFZakssMkJBQ0U7SUFBQSw2QkFBa0M7SUFBQSxZQUFpQjtJQUFBLGlCQUFJO0lBQ3pELGlCQUFNOzs7SUFGb0MsNkNBQTZCLGlDQUFBO0lBQ25DLGVBQWlCO0lBQWpCLDBDQUFpQjs7OztJQU1u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QUUsS0FBSyxFQUFFOztrQkFHOUMsU0FBUzttQkFBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztrQkFHcEMsU0FBUzttQkFBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIE1lc3NhZ2VTZXZlcml0eSxcbiAgICBVdGlsaXRpZXNcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBBbGVydFNlcnZpY2Vcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtc2VydmljZXMtYWxwaGEnO1xuXG5pbXBvcnQge1xuICAgIFBlcm1pc3Npb24sXG4gICAgVXNlclxufSBmcm9tICdAcG9scHdhcmUvbmd4LW9hdXRoMic7XG5cblxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckVkaXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdXNlci1lZGl0Lm1vZGVsJztcbmltcG9ydCB7IFJvbGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvcm9sZS5tb2RlbCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd1c2VyLWluZm8nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyLWluZm8uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3VzZXItaW5mby5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBpc0VkaXRNb2RlID0gZmFsc2U7XG4gICAgcHVibGljIGlzTmV3VXNlciA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc1NhdmluZyA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc0NoYW5nZVBhc3N3b3JkID0gZmFsc2U7XG4gICAgcHVibGljIGlzRWRpdGluZ1NlbGYgPSBmYWxzZTtcbiAgICBwdWJsaWMgc2hvd1ZhbGlkYXRpb25FcnJvcnMgPSBmYWxzZTtcbiAgICBwdWJsaWMgdW5pcXVlSWQ6IHN0cmluZyA9IFV0aWxpdGllcy51bmlxdWVJZCgpO1xuICAgIHB1YmxpYyB1c2VyOiBVc2VyID0gbmV3IFVzZXIoKTtcbiAgICBwdWJsaWMgdXNlckVkaXQ6IFVzZXJFZGl0O1xuICAgIHB1YmxpYyBhbGxSb2xlczogUm9sZVtdID0gW107XG5cbiAgICBwdWJsaWMgZm9ybVJlc2V0VG9nZ2xlID0gdHJ1ZTtcblxuICAgIHB1YmxpYyBjaGFuZ2VzU2F2ZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBwdWJsaWMgY2hhbmdlc0ZhaWxlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBjaGFuZ2VzQ2FuY2VsbGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG5cbiAgICBASW5wdXQoKVxuICAgIGlzVmlld09ubHk6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIGlzR2VuZXJhbEVkaXRvciA9IGZhbHNlO1xuXG5cblxuXG5cbiAgICBAVmlld0NoaWxkKCdmJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIGZvcm07XG5cbiAgICAvLyBWaWV3Q2hpbGRzIFJlcXVpcmVkIGJlY2F1c2UgbmdJZiBoaWRlcyB0ZW1wbGF0ZSB2YXJpYWJsZXMgZnJvbSBnbG9iYWwgc2NvcGVcbiAgICBAVmlld0NoaWxkKCd1c2VyTmFtZScsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyB1c2VyTmFtZTtcblxuICAgIEBWaWV3Q2hpbGQoJ3VzZXJQYXNzd29yZCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyB1c2VyUGFzc3dvcmQ7XG5cbiAgICBAVmlld0NoaWxkKCdlbWFpbCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBlbWFpbDtcblxuICAgIEBWaWV3Q2hpbGQoJ2N1cnJlbnRQYXNzd29yZCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBjdXJyZW50UGFzc3dvcmQ7XG5cbiAgICBAVmlld0NoaWxkKCduZXdQYXNzd29yZCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBuZXdQYXNzd29yZDtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbmZpcm1QYXNzd29yZCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBjb25maXJtUGFzc3dvcmQ7XG5cbiAgICBAVmlld0NoaWxkKCdyb2xlcycsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyByb2xlcztcblxuICAgIEBWaWV3Q2hpbGQoJ3JvbGVzU2VsZWN0b3InLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgcm9sZXNTZWxlY3RvcjtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSwgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzR2VuZXJhbEVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5sb2FkQ3VycmVudFVzZXJEYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSBsb2FkQ3VycmVudFVzZXJEYXRhKCkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FuVmlld0FsbFJvbGVzKSB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmdldFVzZXJBbmRSb2xlcygpLnN1YnNjcmliZShyZXN1bHRzID0+IHRoaXMub25DdXJyZW50VXNlckRhdGFMb2FkU3VjY2Vzc2Z1bChyZXN1bHRzWzBdLCByZXN1bHRzWzFdKSwgZXJyb3IgPT4gdGhpcy5vbkN1cnJlbnRVc2VyRGF0YUxvYWRGYWlsZWQoZXJyb3IpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuZ2V0VXNlcigpLnN1YnNjcmliZSh1c2VyID0+IHRoaXMub25DdXJyZW50VXNlckRhdGFMb2FkU3VjY2Vzc2Z1bCh1c2VyLCB1c2VyLnJvbGVzLm1hcCh4ID0+IG5ldyBSb2xlKHgpKSksIGVycm9yID0+IHRoaXMub25DdXJyZW50VXNlckRhdGFMb2FkRmFpbGVkKGVycm9yKSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByaXZhdGUgb25DdXJyZW50VXNlckRhdGFMb2FkU3VjY2Vzc2Z1bCh1c2VyOiBVc2VyLCByb2xlczogUm9sZVtdKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgICB0aGlzLmFsbFJvbGVzID0gcm9sZXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkN1cnJlbnRVc2VyRGF0YUxvYWRGYWlsZWQoZXJyb3I6IGFueSkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ0xvYWQgRXJyb3InLCBgVW5hYmxlIHRvIHJldHJpZXZlIHVzZXIgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuXFxyXFxuRXJyb3JzOiBcIiR7VXRpbGl0aWVzLmdldEh0dHBSZXNwb25zZU1lc3NhZ2VzKGVycm9yKX1cImAsXG4gICAgICAgICAgICBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcblxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgIH1cblxuXG5cbiAgICBnZXRSb2xlQnlOYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxSb2xlcy5maW5kKChyKSA9PiByLm5hbWUgPT0gbmFtZSk7XG4gICAgfVxuXG5cblxuICAgIHNob3dFcnJvckFsZXJ0KGNhcHRpb246IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKGNhcHRpb24sIG1lc3NhZ2UsIE1lc3NhZ2VTZXZlcml0eS5lcnJvcik7XG4gICAgfVxuXG5cbiAgICBkZWxldGVQYXNzd29yZEZyb21Vc2VyKHVzZXI6IFVzZXJFZGl0IHwgVXNlcikge1xuICAgICAgICBjb25zdCB1c2VyRWRpdCA9IHVzZXIgYXMgVXNlckVkaXQ7XG5cbiAgICAgICAgZGVsZXRlIHVzZXJFZGl0LmN1cnJlbnRQYXNzd29yZDtcbiAgICAgICAgZGVsZXRlIHVzZXJFZGl0Lm5ld1Bhc3N3b3JkO1xuICAgICAgICBkZWxldGUgdXNlckVkaXQuY29uZmlybVBhc3N3b3JkO1xuICAgIH1cblxuXG4gICAgZWRpdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzR2VuZXJhbEVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5pc0VkaXRpbmdTZWxmID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudXNlckVkaXQgPSBuZXcgVXNlckVkaXQoKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy51c2VyRWRpdCwgdGhpcy51c2VyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy51c2VyRWRpdCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckVkaXQgPSBuZXcgVXNlckVkaXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pc0VkaXRpbmdTZWxmID0gdGhpcy5hY2NvdW50U2VydmljZS5jdXJyZW50VXNlciA/IHRoaXMudXNlckVkaXQuaWQgPT0gdGhpcy5hY2NvdW50U2VydmljZS5jdXJyZW50VXNlci5pZCA6IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc0VkaXRNb2RlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNDaGFuZ2VQYXNzd29yZCA9IGZhbHNlO1xuICAgIH1cblxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0YXJ0TG9hZGluZ01lc3NhZ2UoJ1NhdmluZyBjaGFuZ2VzLi4uJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNOZXdVc2VyKSB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLm5ld1VzZXIodGhpcy51c2VyRWRpdCkuc3Vic2NyaWJlKHVzZXIgPT4gdGhpcy5zYXZlU3VjY2Vzc0hlbHBlcih1c2VyKSwgZXJyb3IgPT4gdGhpcy5zYXZlRmFpbGVkSGVscGVyKGVycm9yKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLnVwZGF0ZVVzZXIodGhpcy51c2VyRWRpdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHRoaXMuc2F2ZVN1Y2Nlc3NIZWxwZXIoKSwgZXJyb3IgPT4gdGhpcy5zYXZlRmFpbGVkSGVscGVyKGVycm9yKSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByaXZhdGUgc2F2ZVN1Y2Nlc3NIZWxwZXIodXNlcj86IFVzZXIpIHtcbiAgICAgICAgdGhpcy50ZXN0SXNSb2xlVXNlckNvdW50Q2hhbmdlZCh0aGlzLnVzZXIsIHRoaXMudXNlckVkaXQpO1xuXG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMudXNlckVkaXQsIHVzZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5pc0NoYW5nZVBhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmRlbGV0ZVBhc3N3b3JkRnJvbVVzZXIodGhpcy51c2VyRWRpdCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy51c2VyLCB0aGlzLnVzZXJFZGl0KTtcbiAgICAgICAgdGhpcy51c2VyRWRpdCA9IG5ldyBVc2VyRWRpdCgpO1xuICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuXG5cbiAgICAgICAgaWYgKHRoaXMuaXNHZW5lcmFsRWRpdG9yKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc05ld1VzZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93TWVzc2FnZSgnU3VjY2VzcycsIGBVc2VyIFxcXCIke3RoaXMudXNlci51c2VyTmFtZX1cXFwiIHdhcyBjcmVhdGVkIHN1Y2Nlc3NmdWxseWAsIE1lc3NhZ2VTZXZlcml0eS5zdWNjZXNzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNFZGl0aW5nU2VsZikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdTdWNjZXNzJywgYENoYW5nZXMgdG8gdXNlciBcXFwiJHt0aGlzLnVzZXIudXNlck5hbWV9XFxcIiB3YXMgc2F2ZWQgc3VjY2Vzc2Z1bGx5YCwgTWVzc2FnZVNldmVyaXR5LnN1Y2Nlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNFZGl0aW5nU2VsZikge1xuICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ1N1Y2Nlc3MnLCAnQ2hhbmdlcyB0byB5b3VyIFVzZXIgUHJvZmlsZSB3YXMgc2F2ZWQgc3VjY2Vzc2Z1bGx5JywgTWVzc2FnZVNldmVyaXR5LnN1Y2Nlc3MpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoTG9nZ2VkSW5Vc2VyKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzRWRpdE1vZGUgPSBmYWxzZTtcblxuXG4gICAgICAgIGlmICh0aGlzLmNoYW5nZXNTYXZlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZXNTYXZlZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByaXZhdGUgc2F2ZUZhaWxlZEhlbHBlcihlcnJvcjogYW55KSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdTYXZlIEVycm9yJywgJ1RoZSBiZWxvdyBlcnJvcnMgb2NjdXJlZCB3aGlsc3Qgc2F2aW5nIHlvdXIgY2hhbmdlczonLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoZXJyb3IsIG51bGwsIE1lc3NhZ2VTZXZlcml0eS5lcnJvcik7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlc0ZhaWxlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZXNGYWlsZWRDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHByaXZhdGUgdGVzdElzUm9sZVVzZXJDb3VudENoYW5nZWQoY3VycmVudFVzZXI6IFVzZXIsIGVkaXRlZFVzZXI6IFVzZXIpIHtcblxuICAgICAgICBjb25zdCByb2xlc0FkZGVkID0gdGhpcy5pc05ld1VzZXIgPyBlZGl0ZWRVc2VyLnJvbGVzIDogZWRpdGVkVXNlci5yb2xlcy5maWx0ZXIocm9sZSA9PiBjdXJyZW50VXNlci5yb2xlcy5pbmRleE9mKHJvbGUpID09IC0xKTtcbiAgICAgICAgY29uc3Qgcm9sZXNSZW1vdmVkID0gdGhpcy5pc05ld1VzZXIgPyBbXSA6IGN1cnJlbnRVc2VyLnJvbGVzLmZpbHRlcihyb2xlID0+IGVkaXRlZFVzZXIucm9sZXMuaW5kZXhPZihyb2xlKSA9PSAtMSk7XG5cbiAgICAgICAgY29uc3QgbW9kaWZpZWRSb2xlcyA9IHJvbGVzQWRkZWQuY29uY2F0KHJvbGVzUmVtb3ZlZCk7XG5cbiAgICAgICAgaWYgKG1vZGlmaWVkUm9sZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWNjb3VudFNlcnZpY2Uub25Sb2xlc1VzZXJDb3VudENoYW5nZWQobW9kaWZpZWRSb2xlcykpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNHZW5lcmFsRWRpdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJFZGl0ID0gdGhpcy51c2VyID0gbmV3IFVzZXJFZGl0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJFZGl0ID0gbmV3IFVzZXJFZGl0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG5cbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ0NhbmNlbGxlZCcsICdPcGVyYXRpb24gY2FuY2VsbGVkIGJ5IHVzZXInLCBNZXNzYWdlU2V2ZXJpdHkuZGVmYXVsdCk7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnJlc2V0U3RpY2t5TWVzc2FnZSgpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc0dlbmVyYWxFZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFZGl0TW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlc0NhbmNlbGxlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZXNDYW5jZWxsZWRDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy51c2VyRWRpdCA9IHRoaXMudXNlciA9IG5ldyBVc2VyRWRpdCgpO1xuICAgICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG4gICAgICAgIHRoaXMuaXNFZGl0TW9kZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmNoYW5nZXNTYXZlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZXNTYXZlZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSByZWZyZXNoTG9nZ2VkSW5Vc2VyKCkge1xuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLnJlZnJlc2hMb2dnZWRJblVzZXIoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSh1c2VyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRDdXJyZW50VXNlckRhdGEoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5yZXNldFN0aWNreU1lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ1JlZnJlc2ggZmFpbGVkJywgJ0FuIGVycm9yIG9jY3VyZWQgd2hpbHN0IHJlZnJlc2hpbmcgbG9nZ2VkIGluIHVzZXIgaW5mb3JtYXRpb24gZnJvbSB0aGUgc2VydmVyJywgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBjaGFuZ2VQYXNzd29yZCgpIHtcbiAgICAgICAgdGhpcy5pc0NoYW5nZVBhc3N3b3JkID0gdHJ1ZTtcbiAgICB9XG5cblxuICAgIHVubG9ja1VzZXIoKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCdVbmJsb2NraW5nIHVzZXIuLi4nKTtcblxuXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UudW5ibG9ja1VzZXIodGhpcy51c2VyRWRpdC5pZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJFZGl0LmlzTG9ja2VkT3V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ1N1Y2Nlc3MnLCAnVXNlciBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgdW5ibG9ja2VkJywgTWVzc2FnZVNldmVyaXR5LnN1Y2Nlc3MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdVbmJsb2NrIEVycm9yJywgJ1RoZSBiZWxvdyBlcnJvcnMgb2NjdXJlZCB3aGlsc3QgdW5ibG9ja2luZyB0aGUgdXNlcjonLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoZXJyb3IsIG51bGwsIE1lc3NhZ2VTZXZlcml0eS5lcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICByZXNldEZvcm0ocmVwbGFjZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaXNDaGFuZ2VQYXNzd29yZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghcmVwbGFjZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1SZXNldFRvZ2dsZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1SZXNldFRvZ2dsZSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgbmV3VXNlcihhbGxSb2xlczogUm9sZVtdKSB7XG4gICAgICAgIHRoaXMuaXNHZW5lcmFsRWRpdG9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc05ld1VzZXIgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuYWxsUm9sZXMgPSBbLi4uYWxsUm9sZXNdO1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLnVzZXJFZGl0ID0gbmV3IFVzZXJFZGl0KCk7XG4gICAgICAgIHRoaXMudXNlckVkaXQuaXNFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lZGl0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckVkaXQ7XG4gICAgfVxuXG4gICAgZWRpdFVzZXIodXNlcjogVXNlciwgYWxsUm9sZXM6IFJvbGVbXSkge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgdGhpcy5pc0dlbmVyYWxFZGl0b3IgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc05ld1VzZXIgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5zZXRSb2xlcyh1c2VyLCBhbGxSb2xlcyk7XG4gICAgICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICAgICAgdGhpcy51c2VyRWRpdCA9IG5ldyBVc2VyRWRpdCgpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnVzZXIsIHVzZXIpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnVzZXJFZGl0LCB1c2VyKTtcbiAgICAgICAgICAgIHRoaXMuZWRpdCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51c2VyRWRpdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5ld1VzZXIoYWxsUm9sZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBkaXNwbGF5VXNlcih1c2VyOiBVc2VyLCBhbGxSb2xlcz86IFJvbGVbXSkge1xuXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy51c2VyLCB1c2VyKTtcbiAgICAgICAgdGhpcy5kZWxldGVQYXNzd29yZEZyb21Vc2VyKHRoaXMudXNlcik7XG4gICAgICAgIHRoaXMuc2V0Um9sZXModXNlciwgYWxsUm9sZXMpO1xuXG4gICAgICAgIHRoaXMuaXNFZGl0TW9kZSA9IGZhbHNlO1xuICAgIH1cblxuXG5cbiAgICBwcml2YXRlIHNldFJvbGVzKHVzZXI6IFVzZXIsIGFsbFJvbGVzPzogUm9sZVtdKSB7XG5cbiAgICAgICAgdGhpcy5hbGxSb2xlcyA9IGFsbFJvbGVzID8gWy4uLmFsbFJvbGVzXSA6IFtdO1xuXG4gICAgICAgIGlmICh1c2VyLnJvbGVzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVyIG9mIHVzZXIucm9sZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWxsUm9sZXMuc29tZShyID0+IHIubmFtZSA9PSB1cikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxSb2xlcy51bnNoaWZ0KG5ldyBSb2xlKHVyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFsbFJvbGVzID09IG51bGwgfHwgdGhpcy5hbGxSb2xlcy5sZW5ndGggIT0gYWxsUm9sZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yb2xlc1NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9sZXNTZWxlY3Rvci5yZWZyZXNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgZ2V0IGNhblZpZXdBbGxSb2xlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudFNlcnZpY2UudXNlckhhc1Blcm1pc3Npb24oUGVybWlzc2lvbi52aWV3Um9sZXNQZXJtaXNzaW9uKTtcbiAgICB9XG5cbiAgICBnZXQgY2FuQXNzaWduUm9sZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRTZXJ2aWNlLnVzZXJIYXNQZXJtaXNzaW9uKFBlcm1pc3Npb24uYXNzaWduUm9sZXNQZXJtaXNzaW9uKTtcbiAgICB9XG59XG4iLCI8ZGl2PlxuICA8Zm9ybSAqbmdJZj1cImZvcm1SZXNldFRvZ2dsZVwiIFthdHRyLmF1dG9jb21wbGV0ZV09XCJpc0dlbmVyYWxFZGl0b3IgPyAnTmFOJyA6IG51bGxcIiBuYW1lPVwidXNlckluZm9Gb3JtXCIgI2Y9XCJuZ0Zvcm1cIiBub3ZhbGlkYXRlXG4gICAgICAgIChuZ1N1Ym1pdCk9XCJmLmZvcm0udmFsaWQgPyBzYXZlKCkgOlxuXG4gICAgICAgICAgKCF1c2VyTmFtZS52YWxpZCAmJiBzaG93RXJyb3JBbGVydCgnVXNlciBuYW1lIGlzIHJlcXVpcmVkJywgJ1BsZWFzZSBlbnRlciBhIHVzZXIgbmFtZSAobWluaW11bSBvZiAyIGFuZCBtYXhpbXVtIG9mIDIwMCBjaGFyYWN0ZXJzKScpKTtcblxuICAgICAgICAgICh1c2VyUGFzc3dvcmQgJiYgIXVzZXJQYXNzd29yZC52YWxpZCAmJiBzaG93RXJyb3JBbGVydCgnUGFzc3dvcmQgaXMgcmVxdWlyZWQnLCAnUGxlYXNlIGVudGVyIHRoZSBjdXJyZW50IHBhc3N3b3JkJykpO1xuXG4gICAgICAgICAgKGVtYWlsLmVycm9ycz8ucmVxdWlyZWQgJiYgc2hvd0Vycm9yQWxlcnQoJ0VtYWlsIGlzIHJlcXVpcmVkJywgJ1BsZWFzZSBlbnRlciBhbiBlbWFpbCBhZGRyZXNzIChtYXhpbXVtIG9mIDIwMCBjaGFyYWN0ZXJzKScpKTtcbiAgICAgICAgICAoZW1haWwuZXJyb3JzPy5wYXR0ZXJuICYmIHNob3dFcnJvckFsZXJ0KCdJbnZhbGlkIEVtYWlsJywgJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnKSk7XG5cbiAgICAgICAgICAoaXNDaGFuZ2VQYXNzd29yZCAmJiBpc0VkaXRpbmdTZWxmICYmICFjdXJyZW50UGFzc3dvcmQudmFsaWQgJiYgc2hvd0Vycm9yQWxlcnQoJ0N1cnJlbnQgcGFzc3dvcmQgaXMgcmVxdWlyZWQnLCAnUGxlYXNlIGVudGVyIHRoZSBjdXJyZW50IHBhc3N3b3JkJykpO1xuXG4gICAgICAgICAgKChpc0NoYW5nZVBhc3N3b3JkIHx8IGlzTmV3VXNlcikgJiYgIW5ld1Bhc3N3b3JkLnZhbGlkICYmIHNob3dFcnJvckFsZXJ0KCdOZXcgcGFzc3dvcmQgaXMgcmVxdWlyZWQnLCAnUGxlYXNlIGVudGVyIHRoZSBuZXcgcGFzc3dvcmQgKG1pbmltdW0gb2YgNiBjaGFyYWN0ZXJzKScpKTtcblxuICAgICAgICAgICgoaXNDaGFuZ2VQYXNzd29yZCB8fCBpc05ld1VzZXIpICYmIG5ld1Bhc3N3b3JkLnZhbGlkICYmIGNvbmZpcm1QYXNzd29yZC5lcnJvcnM/LnJlcXVpcmVkICYmIHNob3dFcnJvckFsZXJ0KCdDb25maXJtYXRpb24gcGFzc3dvcmQgaXMgcmVxdWlyZWQnLCAnUGxlYXNlIGVudGVyIHRoZSBjb25maXJtYXRpb24gcGFzc3dvcmQnKSk7XG4gICAgICAgICAgKChpc0NoYW5nZVBhc3N3b3JkIHx8IGlzTmV3VXNlcikgJiYgbmV3UGFzc3dvcmQudmFsaWQgJiYgY29uZmlybVBhc3N3b3JkLmVycm9ycz8udmFsaWRhdGVFcXVhbCAmJiBzaG93RXJyb3JBbGVydCgnUGFzc3d3b3JkIG1pc21hdGNoJywgJ05ldyBwYXNzd29yZCBhbmQgY29uZmlybWF0aW9uIHBhc3N3b3JkIGRvIG5vdCBtYXRjaCcpKTtcblxuICAgICAgICAgIChjYW5Bc3NpZ25Sb2xlcyAmJiAhaXNFZGl0aW5nU2VsZiAmJiAhcm9sZXMudmFsaWQgJiYgc2hvd0Vycm9yQWxlcnQoJ1JvbGVzIGlzIHJlcXVpcmVkJywgJ1BsZWFzZSBzZWxlY3QgYSBtaW5pbXVtIG9mIDEgcm9sZScpKTtcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgPGxhYmVsIFtjbGFzcy5jb2wtbGctM109XCJpc1ZpZXdPbmx5XCIgW2NsYXNzLmNvbC1sZy0yXT1cIiFpc1ZpZXdPbmx5XCIgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbFwiIGZvcj1cImpvYlRpdGxlLXt7dW5pcXVlSWR9fVwiPnt7J3VzZXJzLmVkaXRvci5Kb2JUaXRsZScgfCB0cmFuc2xhdGV9fTwvbGFiZWw+XG4gICAgICA8ZGl2ICpuZ0lmPVwiIWlzRWRpdE1vZGVcIiBbY2xhc3MuY29sLWxnLTldPVwiaXNWaWV3T25seVwiIFtjbGFzcy5jb2wtbGctMTBdPVwiIWlzVmlld09ubHlcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJmb3JtLWNvbnRyb2wtcGxhaW50ZXh0XCI+e3t1c2VyLmpvYlRpdGxlfX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCJpc0VkaXRNb2RlXCIgW2NsYXNzLmNvbC1sZy05XT1cImlzVmlld09ubHlcIiBbY2xhc3MuY29sLWxnLTEwXT1cIiFpc1ZpZXdPbmx5XCI+XG4gICAgICAgIDxpbnB1dCBhdXRvZm9jdXMgdHlwZT1cInRleHRcIiBhdHRyLmlkPVwiam9iVGl0bGUte3t1bmlxdWVJZH19XCIgbmFtZT1cImpvYlRpdGxlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBKb2IgVGl0bGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwidXNlckVkaXQuam9iVGl0bGVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgIDxociBbY2xhc3Muc2VwYXJhdG9yLWhyXT1cIiFpc0VkaXRNb2RlXCIgW2NsYXNzLmVkaXQtc2VwYXJhdG9yLWhyXT1cImlzRWRpdE1vZGVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3cgaGFzLWZlZWRiYWNrLWljb25cIj5cbiAgICAgIDxsYWJlbCBbY2xhc3MuY29sLWxnLTNdPVwiaXNWaWV3T25seVwiIFtjbGFzcy5jb2wtbGctMl09XCIhaXNWaWV3T25seVwiIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiBmb3I9XCJ1c2VyTmFtZS17e3VuaXF1ZUlkfX1cIj57eyd1c2Vycy5lZGl0b3IuVXNlck5hbWUnIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgPGRpdiAqbmdJZj1cIiFpc0VkaXRNb2RlIHx8IGlzRWRpdGluZ1NlbGZcIiBbY2xhc3MuY29sLWxnLTldPVwiaXNWaWV3T25seVwiIFtjbGFzcy5jb2wtbGctMTBdPVwiIWlzVmlld09ubHlcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJmb3JtLWNvbnRyb2wtcGxhaW50ZXh0XCI+e3t1c2VyLnVzZXJOYW1lfX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCJpc0VkaXRNb2RlICYmICFpc0VkaXRpbmdTZWxmXCIgW2NsYXNzLmNvbC1sZy05XT1cImlzVmlld09ubHlcIiBbY2xhc3MuY29sLWxnLTEwXT1cIiFpc1ZpZXdPbmx5XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGF0dHIuaWQ9XCJ1c2VyTmFtZS17e3VuaXF1ZUlkfX1cIiBuYW1lPVwidXNlck5hbWVcIiBbYXR0ci5hdXRvY29tcGxldGVdPVwiaXNHZW5lcmFsRWRpdG9yID8gJ25ldy1wYXNzd29yZCcgOiBudWxsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB1c2VyIG5hbWVcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbbmdDbGFzc109XCJ7J2lzLXZhbGlkJzogZi5zdWJtaXR0ZWQgJiYgdXNlck5hbWUudmFsaWQsICdpcy1pbnZhbGlkJyA6IGYuc3VibWl0dGVkICYmICF1c2VyTmFtZS52YWxpZH1cIlxuICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyRWRpdC51c2VyTmFtZVwiICN1c2VyTmFtZT1cIm5nTW9kZWxcIiByZXF1aXJlZCBtaW5sZW5ndGg9XCIyXCIgbWF4bGVuZ3RoPVwiMjAwXCIgLz5cbiAgICAgICAgPGkgKm5nSWY9XCJzaG93VmFsaWRhdGlvbkVycm9ycyAmJiBmLnN1Ym1pdHRlZFwiIGNsYXNzPVwiZmEgZm9ybS1jb250cm9sLWZlZWRiYWNrXCIgW25nQ2xhc3NdPVwieydmYS1jaGVjayc6IHVzZXJOYW1lLnZhbGlkLCAnZmEtdGltZXMnIDogIXVzZXJOYW1lLnZhbGlkfVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJzaG93VmFsaWRhdGlvbkVycm9ycyAmJiBmLnN1Ym1pdHRlZCAmJiAhdXNlck5hbWUudmFsaWRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICB7eyd1c2Vycy5lZGl0b3IuVXNlck5hbWVSZXF1aXJlZCcgfCB0cmFuc2xhdGV9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCJpc0VkaXRNb2RlICYmIGlzRWRpdGluZ1NlbGYgJiYgIWlzQ2hhbmdlUGFzc3dvcmQgJiYgdXNlci51c2VyTmFtZSAhPSB1c2VyRWRpdC51c2VyTmFtZVwiIGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgIDxociBjbGFzcz1cInBhc3N3b3JkLXNlcGFyYXRvci1oclwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2ICpuZ0lmPVwiaXNFZGl0TW9kZSAmJiBpc0VkaXRpbmdTZWxmICYmICFpc0NoYW5nZVBhc3N3b3JkICYmIHVzZXIudXNlck5hbWUgIT0gdXNlckVkaXQudXNlck5hbWVcIiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93IGhhcy1mZWVkYmFjay1pY29uXCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbCBjb2wtbGctMlwiIGZvcj1cInVzZXJQYXNzd29yZC17e3VuaXF1ZUlkfX1cIj57eyd1c2Vycy5lZGl0b3IuUGFzc3dvcmQnIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgYXR0ci5pZD1cInVzZXJQYXNzd29yZC17e3VuaXF1ZUlkfX1cIiBuYW1lPVwidXNlclBhc3N3b3JkXCIgW2F0dHIuYXV0b2NvbXBsZXRlXT1cImlzR2VuZXJhbEVkaXRvciA/ICduZXctcGFzc3dvcmQnIDogbnVsbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbbmdDbGFzc109XCJ7J2lzLXZhbGlkJzogZi5zdWJtaXR0ZWQgJiYgdXNlclBhc3N3b3JkLnZhbGlkLCAnaXMtaW52YWxpZCcgOiBmLnN1Ym1pdHRlZCAmJiAhdXNlclBhc3N3b3JkLnZhbGlkfVwiXG4gICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXJFZGl0LmN1cnJlbnRQYXNzd29yZFwiICN1c2VyUGFzc3dvcmQ9XCJuZ01vZGVsXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgPHNtYWxsIGNsYXNzPVwiaGludC1zbVwiPnt7J3VzZXJzLmVkaXRvci5QYXNzd29yZEhpbnQnIHwgdHJhbnNsYXRlfX08L3NtYWxsPlxuICAgICAgICA8aSAqbmdJZj1cInNob3dWYWxpZGF0aW9uRXJyb3JzICYmIGYuc3VibWl0dGVkXCIgY2xhc3M9XCJmYSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIiBbbmdDbGFzc109XCJ7J2ZhLWNoZWNrJzogdXNlclBhc3N3b3JkLnZhbGlkLCAnZmEtdGltZXMnIDogIXVzZXJQYXNzd29yZC52YWxpZH1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwic2hvd1ZhbGlkYXRpb25FcnJvcnMgJiYgZi5zdWJtaXR0ZWQgJiYgIXVzZXJQYXNzd29yZC52YWxpZFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgIHt7J3VzZXJzLmVkaXRvci5DdXJyZW50UGFzc3dvcmRSZXF1aXJlZCcgfCB0cmFuc2xhdGV9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICA8aHIgW2NsYXNzLnNlcGFyYXRvci1ocl09XCIhaXNFZGl0TW9kZVwiIFtjbGFzcy5lZGl0LXNlcGFyYXRvci1ocl09XCJpc0VkaXRNb2RlXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93IGhhcy1mZWVkYmFjay1pY29uXCI+XG4gICAgICA8bGFiZWwgW2NsYXNzLmNvbC1sZy0zXT1cImlzVmlld09ubHlcIiBbY2xhc3MuY29sLWxnLTJdPVwiIWlzVmlld09ubHlcIiBjbGFzcz1cImNvbC1mb3JtLWxhYmVsXCIgZm9yPVwiZW1haWwte3t1bmlxdWVJZH19XCI+e3sndXNlcnMuZWRpdG9yLkVtYWlsJyB8IHRyYW5zbGF0ZX19PC9sYWJlbD5cbiAgICAgIDxkaXYgKm5nSWY9XCIhaXNFZGl0TW9kZVwiIFtjbGFzcy5jb2wtbGctOV09XCJpc1ZpZXdPbmx5XCIgW2NsYXNzLmNvbC1sZy0xMF09XCIhaXNWaWV3T25seVwiPlxuICAgICAgICA8cCBjbGFzcz1cImZvcm0tY29udHJvbC1wbGFpbnRleHRcIj57e3VzZXIuZW1haWx9fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cImlzRWRpdE1vZGVcIiBbY2xhc3MuY29sLWxnLTldPVwiaXNWaWV3T25seVwiIFtjbGFzcy5jb2wtbGctMTBdPVwiIWlzVmlld09ubHlcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgYXR0ci5pZD1cImVtYWlsLXt7dW5pcXVlSWR9fVwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWwgYWRkcmVzc1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgW25nQ2xhc3NdPVwieydpcy12YWxpZCc6IGYuc3VibWl0dGVkICYmIGVtYWlsLnZhbGlkLCAnaXMtaW52YWxpZCcgOiBmLnN1Ym1pdHRlZCAmJiAhZW1haWwudmFsaWR9XCJcbiAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlckVkaXQuZW1haWxcIiAjZW1haWw9XCJuZ01vZGVsXCIgcmVxdWlyZWQgbWF4bGVuZ3RoPVwiMjAwXCIgcGF0dGVybj1cIl5bYS16QS1aMC05Xy4rLV0rQFthLXpBLVowLTktXStcXC5bYS16QS1aMC05LS5dKyRcIiAvPlxuICAgICAgICA8aSAqbmdJZj1cInNob3dWYWxpZGF0aW9uRXJyb3JzICYmIGYuc3VibWl0dGVkXCIgY2xhc3M9XCJmYSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIiBbbmdDbGFzc109XCJ7J2ZhLWNoZWNrJzogZW1haWwudmFsaWQsICdmYS10aW1lcycgOiAhZW1haWwudmFsaWR9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICA8c3BhbiAqbmdJZj1cInNob3dWYWxpZGF0aW9uRXJyb3JzICYmIGYuc3VibWl0dGVkICYmIGVtYWlsLmVycm9ycz8ucmVxdWlyZWRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICB7eyd1c2Vycy5lZGl0b3IuRW1haWxSZXF1aXJlZCcgfCB0cmFuc2xhdGV9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwic2hvd1ZhbGlkYXRpb25FcnJvcnMgJiYgZi5zdWJtaXR0ZWQgJiYgZW1haWwuZXJyb3JzPy5wYXR0ZXJuXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAge3sndXNlcnMuZWRpdG9yLkludmFsaWRFbWFpbCcgfCB0cmFuc2xhdGV9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCJpc0VkaXRNb2RlXCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cbiAgICAgICAgPGhyIFtjbGFzcy5zZXBhcmF0b3ItaHJdPVwiIWlzRWRpdE1vZGVcIiBbY2xhc3MuZWRpdC1zZXBhcmF0b3ItaHJdPVwiaXNFZGl0TW9kZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCJpc0VkaXRNb2RlXCIgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxuICAgICAgPGxhYmVsIGZvcj1cIm5ld1Bhc3N3b3JkLXt7dW5pcXVlSWR9fVwiIGNsYXNzPVwiY29sLWZvcm0tbGFiZWwgY29sLWxnLTJcIj57eyd1c2Vycy5lZGl0b3IuUGFzc3dvcmQnIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgPGRpdiAqbmdJZj1cIiFpc0NoYW5nZVBhc3N3b3JkICYmICFpc05ld1VzZXJcIiBjbGFzcz1cImNvbC1sZy0xMFwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiY2hhbmdlUGFzc3dvcmQoKVwiIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCI+e3sndXNlcnMuZWRpdG9yLkNoYW5nZVBhc3N3b3JkJyB8IHRyYW5zbGF0ZX19PC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiAqbmdJZj1cImlzQ2hhbmdlUGFzc3dvcmQgfHwgaXNOZXdVc2VyXCIgY2xhc3M9XCJjb2wtbGctMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhc3N3b3JkLXdlbGwgY2FyZCBjYXJkLWJvZHkgYmctbGlnaHRcIj5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNFZGl0aW5nU2VsZlwiIGNsYXNzPVwiZm9ybS1ncm91cCByb3cgaGFzLWZlZWRiYWNrLWljb25cIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1mb3JtLWxhYmVsIGNvbC1sZy0zXCIgZm9yPVwiY3VycmVudFBhc3N3b3JkLXt7dW5pcXVlSWR9fVwiPnt7J3VzZXJzLmVkaXRvci5DdXJyZW50UGFzc3dvcmQnIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy05XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBhdHRyLmlkPVwiY3VycmVudFBhc3N3b3JkLXt7dW5pcXVlSWR9fVwiIG5hbWU9XCJjdXJyZW50UGFzc3dvcmRcIiBbYXR0ci5hdXRvY29tcGxldGVdPVwiaXNHZW5lcmFsRWRpdG9yID8gJ25ldy1wYXNzd29yZCcgOiBudWxsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBjdXJyZW50IHBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpcy12YWxpZCc6IGYuc3VibWl0dGVkICYmIGN1cnJlbnRQYXNzd29yZC52YWxpZCwgJ2lzLWludmFsaWQnIDogZi5zdWJtaXR0ZWQgJiYgIWN1cnJlbnRQYXNzd29yZC52YWxpZH1cIiBbKG5nTW9kZWwpXT1cInVzZXJFZGl0LmN1cnJlbnRQYXNzd29yZFwiICNjdXJyZW50UGFzc3dvcmQ9XCJuZ01vZGVsXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPGkgKm5nSWY9XCJzaG93VmFsaWRhdGlvbkVycm9ycyAmJiBmLnN1Ym1pdHRlZFwiIGNsYXNzPVwiZmEgZm9ybS1jb250cm9sLWZlZWRiYWNrXCIgW25nQ2xhc3NdPVwieydmYS1jaGVjayc6IGN1cnJlbnRQYXNzd29yZC52YWxpZCwgJ2ZhLXRpbWVzJyA6ICFjdXJyZW50UGFzc3dvcmQudmFsaWR9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInNob3dWYWxpZGF0aW9uRXJyb3JzICYmIGYuc3VibWl0dGVkICYmICFjdXJyZW50UGFzc3dvcmQudmFsaWRcIiBjbGFzcz1cImludmFsaWQtZmVlZGJhY2tcIj5cbiAgICAgICAgICAgICAgICB7eyd1c2Vycy5lZGl0b3IuQ3VycmVudFBhc3N3b3JkUmVxdWlyZWQnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWlzTmV3VXNlclwiIGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgIDxociBjbGFzcz1cInBhc3N3b3JkLXNlcGFyYXRvci1oclwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvdyBoYXMtZmVlZGJhY2staWNvblwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWwgY29sLWxnLTNcIiBmb3I9XCJuZXdQYXNzd29yZC17e3VuaXF1ZUlkfX1cIj57eyd1c2Vycy5lZGl0b3IuTmV3UGFzc3dvcmQnIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy05XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBhdHRyLmlkPVwibmV3UGFzc3dvcmQte3t1bmlxdWVJZH19XCIgbmFtZT1cIm5ld1Bhc3N3b3JkXCIgW2F0dHIuYXV0b2NvbXBsZXRlXT1cImlzR2VuZXJhbEVkaXRvciA/ICduZXctcGFzc3dvcmQnIDogbnVsbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmV3IHBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpcy12YWxpZCc6IGYuc3VibWl0dGVkICYmIG5ld1Bhc3N3b3JkLnZhbGlkLCAnaXMtaW52YWxpZCcgOiBmLnN1Ym1pdHRlZCAmJiAhbmV3UGFzc3dvcmQudmFsaWR9XCIgWyhuZ01vZGVsKV09XCJ1c2VyRWRpdC5uZXdQYXNzd29yZFwiICNuZXdQYXNzd29yZD1cIm5nTW9kZWxcIlxuICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgbWlubGVuZ3RoPVwiNlwiIHZhbGlkYXRlRXF1YWw9XCJjb25maXJtUGFzc3dvcmRcIiByZXZlcnNlPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgIDxpICpuZ0lmPVwic2hvd1ZhbGlkYXRpb25FcnJvcnMgJiYgZi5zdWJtaXR0ZWRcIiBjbGFzcz1cImZhIGZvcm0tY29udHJvbC1mZWVkYmFja1wiIFtuZ0NsYXNzXT1cInsnZmEtY2hlY2snOiBuZXdQYXNzd29yZC52YWxpZCwgJ2ZhLXRpbWVzJyA6ICFuZXdQYXNzd29yZC52YWxpZH1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwic2hvd1ZhbGlkYXRpb25FcnJvcnMgJiYgZi5zdWJtaXR0ZWQgJiYgIW5ld1Bhc3N3b3JkLnZhbGlkXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAge3sndXNlcnMuZWRpdG9yLk5ld1Bhc3N3b3JkUmVxdWlyZWQnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgIDxociBjbGFzcz1cInBhc3N3b3JkLXNlcGFyYXRvci1oclwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvdyBoYXMtZmVlZGJhY2staWNvblwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWwgY29sLWxnLTNcIiBmb3I9XCJjb25maXJtUGFzc3dvcmQte3t1bmlxdWVJZH19XCI+e3sndXNlcnMuZWRpdG9yLkNvbmZpcm1QYXNzd29yZCcgfCB0cmFuc2xhdGV9fTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTlcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGF0dHIuaWQ9XCJjb25maXJtUGFzc3dvcmQte3t1bmlxdWVJZH19XCIgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiIFthdHRyLmF1dG9jb21wbGV0ZV09XCJpc0dlbmVyYWxFZGl0b3IgPyAnbmV3LXBhc3N3b3JkJyA6IG51bGxcIiBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gbmV3IHBhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydpcy12YWxpZCc6IGYuc3VibWl0dGVkICYmIGNvbmZpcm1QYXNzd29yZC52YWxpZCwgJ2lzLWludmFsaWQnIDogZi5zdWJtaXR0ZWQgJiYgIWNvbmZpcm1QYXNzd29yZC52YWxpZH1cIiBbKG5nTW9kZWwpXT1cInVzZXJFZGl0LmNvbmZpcm1QYXNzd29yZFwiICNjb25maXJtUGFzc3dvcmQ9XCJuZ01vZGVsXCJcbiAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIHZhbGlkYXRlRXF1YWw9XCJuZXdQYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgIDxpICpuZ0lmPVwic2hvd1ZhbGlkYXRpb25FcnJvcnMgJiYgZi5zdWJtaXR0ZWRcIiBjbGFzcz1cImZhIGZvcm0tY29udHJvbC1mZWVkYmFja1wiIFtuZ0NsYXNzXT1cInsnZmEtY2hlY2snOiBjb25maXJtUGFzc3dvcmQudmFsaWQsICdmYS10aW1lcycgOiAhY29uZmlybVBhc3N3b3JkLnZhbGlkfVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJzaG93VmFsaWRhdGlvbkVycm9ycyAmJiBmLnN1Ym1pdHRlZCAmJiBjb25maXJtUGFzc3dvcmQuZXJyb3JzPy5yZXF1aXJlZFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgIHt7J3VzZXJzLmVkaXRvci5Db25maXJtYXRpb25QYXNzd29yZFJlcXVpcmVkJyB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJzaG93VmFsaWRhdGlvbkVycm9ycyAmJiBmLnN1Ym1pdHRlZCAmJiBjb25maXJtUGFzc3dvcmQuZXJyb3JzPy52YWxpZGF0ZUVxdWFsICYmICFjb25maXJtUGFzc3dvcmQuZXJyb3JzPy5yZXF1aXJlZFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgIHt7J3VzZXJzLmVkaXRvci5QYXNzd29yZE1pc21hdGNoJyB8IHRyYW5zbGF0ZX19XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi0tPlxuXG4gICAgPGRpdiAqbmdJZj1cIiFpc0VkaXRNb2RlIHx8IGNhbkFzc2lnblJvbGVzIHx8IGlzRWRpdGluZ1NlbGZcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICA8aHIgW2NsYXNzLnNlcGFyYXRvci1ocl09XCIhaXNFZGl0TW9kZVwiIFtjbGFzcy5lZGl0LXNlcGFyYXRvci1ocl09XCJpc0VkaXRNb2RlXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiAqbmdJZj1cIiFpc0VkaXRNb2RlIHx8IGNhbkFzc2lnblJvbGVzIHx8IGlzRWRpdGluZ1NlbGZcIiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93IGhhcy1mZWVkYmFjay1pY29uXCI+XG4gICAgICA8bGFiZWwgW2NsYXNzLmNvbC1sZy0zXT1cImlzVmlld09ubHlcIiBbY2xhc3MuY29sLWxnLTJdPVwiIWlzVmlld09ubHlcIiBjbGFzcz1cImNvbC1mb3JtLWxhYmVsXCIgZm9yPVwicm9sZXMtdXNlci1pbmZvXCI+e3sndXNlcnMuZWRpdG9yLlJvbGVzJyB8IHRyYW5zbGF0ZX19PC9sYWJlbD5cbiAgICAgIDxkaXYgKm5nSWY9XCIhaXNFZGl0TW9kZVwiIFtjbGFzcy5jb2wtbGctOV09XCJpc1ZpZXdPbmx5XCIgW2NsYXNzLmNvbC1sZy0xMF09XCIhaXNWaWV3T25seVwiPlxuICAgICAgICA8cCBuZ1ByZXNlcnZlV2hpdGVzcGFjZXMgY2xhc3M9XCJmb3JtLWNvbnRyb2wtcGxhaW50ZXh0XCI+XG4gICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IHJvbGUgb2YgdXNlci5yb2xlc1wiPlxuICAgICAgICAgICAgPHNwYW4gdGl0bGU9J3t7Z2V0Um9sZUJ5TmFtZShyb2xlKT8uZGVzY3JpcHRpb259fScgY2xhc3M9XCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLXNlY29uZGFyeVwiPnt7cm9sZX19PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwiaXNFZGl0TW9kZSAmJiBjYW5Bc3NpZ25Sb2xlcyAmJiAhaXNFZGl0aW5nU2VsZlwiIFtuZ0NsYXNzXT1cInsnaXMtdmFsaWQnOiBmLnN1Ym1pdHRlZCAmJiByb2xlcy52YWxpZCwgJ2lzLWludmFsaWQnIDogZi5zdWJtaXR0ZWQgJiYgIXJvbGVzLnZhbGlkfVwiIFtjbGFzcy5jb2wtbGctOV09XCJpc1ZpZXdPbmx5XCIgW2NsYXNzLmNvbC1sZy0xMF09XCIhaXNWaWV3T25seVwiPlxuICAgICAgICA8c2VsZWN0IGlkPVwicm9sZXMtdXNlci1pbmZvXCIgbmFtZT1cInJvbGVzXCIgWyhuZ01vZGVsKV09XCJ1c2VyRWRpdC5yb2xlc1wiICNyb2xlcz1cIm5nTW9kZWxcIiAjcm9sZXNTZWxlY3Rvcj1cImJvb3RzdHJhcC1zZWxlY3RcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VsZWN0cGlja2VyIGZvcm0tY29udHJvbCBsZWZ0LXN0YXR1c1wiIGJvb3RzdHJhcFNlbGVjdCByZXF1aXJlZCBtdWx0aXBsZSBkYXRhLWxpdmUtc2VhcmNoPVwidHJ1ZVwiIGRhdGEtYWN0aW9ucy1ib3g9XCJmYWxzZVwiIGRhdGEtbGl2ZS1zZWFyY2gtcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiB0aXRsZT1cIlNlbGVjdCBSb2xlc1wiPlxuICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHJvbGUgb2YgYWxsUm9sZXNcIiBhdHRyLmRhdGEtY29udGVudD1cIjxzcGFuIHRpdGxlPSd7e3JvbGUuZGVzY3JpcHRpb259fScgY2xhc3M9J2JhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utc2Vjb25kYXJ5Jz57e3JvbGUubmFtZX19PC9zcGFuPlwiIGF0dHIudmFsdWU9XCJ7e3JvbGUubmFtZX19XCI+XG4gICAgICAgICAgICB7e3JvbGUubmFtZX19XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8aSAqbmdJZj1cInNob3dWYWxpZGF0aW9uRXJyb3JzICYmIGYuc3VibWl0dGVkXCIgY2xhc3M9XCJmYSBmb3JtLWNvbnRyb2wtZmVlZGJhY2tcIiBbbmdDbGFzc109XCJ7J2ZhLWNoZWNrJzogcm9sZXMudmFsaWQsICdmYS10aW1lcycgOiAhcm9sZXMudmFsaWR9XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICA8c3BhbiAqbmdJZj1cInNob3dWYWxpZGF0aW9uRXJyb3JzICYmIGYuc3VibWl0dGVkICYmICFyb2xlcy52YWxpZFwiIGNsYXNzPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuICAgICAgICAgIHt7J3VzZXJzLmVkaXRvci5Sb2xlUmVxdWlyZWQnIHwgdHJhbnNsYXRlfX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8IS0tKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqLS0+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgIDxociBbY2xhc3Muc2VwYXJhdG9yLWhyXT1cIiFpc0VkaXRNb2RlXCIgW2NsYXNzLmVkaXQtc2VwYXJhdG9yLWhyXT1cImlzRWRpdE1vZGVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgIDxsYWJlbCBbY2xhc3MuY29sLWxnLTNdPVwiaXNWaWV3T25seVwiIFtjbGFzcy5jb2wtbGctMl09XCIhaXNWaWV3T25seVwiIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiBmb3I9XCJmdWxsTmFtZS17e3VuaXF1ZUlkfX1cIj57eyd1c2Vycy5lZGl0b3IuRnVsbE5hbWUnIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgPGRpdiAqbmdJZj1cIiFpc0VkaXRNb2RlXCIgW2NsYXNzLmNvbC1sZy05XT1cImlzVmlld09ubHlcIiBbY2xhc3MuY29sLWxnLTEwXT1cIiFpc1ZpZXdPbmx5XCI+XG4gICAgICAgIDxwIGNsYXNzPVwiZm9ybS1jb250cm9sLXBsYWludGV4dFwiPnt7dXNlci5mdWxsTmFtZX19PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwiaXNFZGl0TW9kZVwiIFtjbGFzcy5jb2wtbGctOV09XCJpc1ZpZXdPbmx5XCIgW2NsYXNzLmNvbC1sZy0xMF09XCIhaXNWaWV3T25seVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBhdHRyLmlkPVwiZnVsbE5hbWUte3t1bmlxdWVJZH19XCIgbmFtZT1cImZ1bGxOYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBmdWxsIG5hbWVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwidXNlckVkaXQuZnVsbE5hbWVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgIDxociBbY2xhc3Muc2VwYXJhdG9yLWhyXT1cIiFpc0VkaXRNb2RlXCIgW2NsYXNzLmVkaXQtc2VwYXJhdG9yLWhyXT1cImlzRWRpdE1vZGVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgIDxsYWJlbCBbY2xhc3MuY29sLWxnLTNdPVwiaXNWaWV3T25seVwiIFtjbGFzcy5jb2wtbGctMl09XCIhaXNWaWV3T25seVwiIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiBmb3I9XCJwaG9uZU51bWJlci17e3VuaXF1ZUlkfX1cIj57eyd1c2Vycy5lZGl0b3IuUGhvbmVOdW1iZXInIHwgdHJhbnNsYXRlfX08L2xhYmVsPlxuICAgICAgPGRpdiAqbmdJZj1cIiFpc0VkaXRNb2RlXCIgW2NsYXNzLmNvbC1sZy05XT1cImlzVmlld09ubHlcIiBbY2xhc3MuY29sLWxnLTEwXT1cIiFpc1ZpZXdPbmx5XCI+XG4gICAgICAgIDxwIGNsYXNzPVwiZm9ybS1jb250cm9sLXBsYWludGV4dFwiPnt7dXNlci5waG9uZU51bWJlcn19PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwiaXNFZGl0TW9kZVwiIFtjbGFzcy5jb2wtbGctOV09XCJpc1ZpZXdPbmx5XCIgW2NsYXNzLmNvbC1sZy0xMF09XCIhaXNWaWV3T25seVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBhdHRyLmlkPVwicGhvbmVOdW1iZXIte3t1bmlxdWVJZH19XCIgbmFtZT1cInBob25lTnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBwaG9uZSBudW1iZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwidXNlckVkaXQucGhvbmVOdW1iZXJcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2ICpuZ0lmPVwiIWlzVmlld09ubHlcIiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICA8aHIgW2NsYXNzLmxhc3Qtc2VwYXJhdG9yLWhyXT1cIiFpc0VkaXRNb2RlXCIgW2NsYXNzLmVkaXQtbGFzdC1zZXBhcmF0b3ItaHJdPVwiaXNFZGl0TW9kZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgKm5nSWY9XCIhaXNWaWV3T25seVwiIGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNVwiPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNHZW5lcmFsRWRpdG9yICYmIGlzRWRpdE1vZGVcIiBjbGFzcz1cImZsb2F0LWxlZnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayB1c2VyLWVuYWJsZWRcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImlkRW5hYmxlZFwiIG5hbWU9XCJpc0VuYWJsZWRcIiBbKG5nTW9kZWwpXT1cInVzZXJFZGl0LmlzRW5hYmxlZFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlkRW5hYmxlZFwiIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiPnt7J3VzZXJzLmVkaXRvci5FbmFibGVkJyB8IHRyYW5zbGF0ZX19PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwidXNlckVkaXQuaXNMb2NrZWRPdXRcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInVubG9ja1VzZXIoKVwiIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nIHVuYmxvY2stdXNlclwiIFtkaXNhYmxlZF09XCJpc1NhdmluZ1wiPjxpIGNsYXNzPSdmYSBmYS11bmxvY2stYWx0Jz48L2k+IHt7J3VzZXJzLmVkaXRvci5VbmJsb2NrJyB8IHRyYW5zbGF0ZX19PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTdcIj5cbiAgICAgICAgPGRpdiBuZ1ByZXNlcnZlV2hpdGVzcGFjZXMgY2xhc3M9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhaXNFZGl0TW9kZSAmJiBpc0dlbmVyYWxFZGl0b3JcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImNsb3NlKClcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj48aSBjbGFzcz0nZmEgZmEtY2xvc2UnPjwvaT4ge3sndXNlcnMuZWRpdG9yLkNsb3NlJyB8IHRyYW5zbGF0ZX19PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFpc0VkaXRNb2RlICYmICFpc0dlbmVyYWxFZGl0b3JcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImVkaXQoKVwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPjxpIGNsYXNzPSdmYSBmYS1lZGl0Jz48L2k+IHt7J3VzZXJzLmVkaXRvci5FZGl0JyB8IHRyYW5zbGF0ZX19PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzRWRpdE1vZGVcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImNhbmNlbCgpXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIFtkaXNhYmxlZF09XCJpc1NhdmluZ1wiPjxpIGNsYXNzPSdmYSBmYS10aW1lcyc+PC9pPiB7eyd1c2Vycy5lZGl0b3IuQ2FuY2VsJyB8IHRyYW5zbGF0ZX19PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzRWRpdE1vZGVcIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwiaXNTYXZpbmdcIj5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiIWlzU2F2aW5nXCIgY2xhc3M9J2ZhIGZhLXNhdmUnPjwvaT48aSAqbmdJZj1cImlzU2F2aW5nXCIgY2xhc3M9J2ZhIGZhLWNpcmNsZS1vLW5vdGNoIGZhLXNwaW4nPjwvaT4ge3tpc1NhdmluZyA/ICgndXNlcnMuZWRpdG9yLlNhdmluZycgfCB0cmFuc2xhdGUpIDogKCd1c2Vycy5lZGl0b3IuU2F2ZScgfCB0cmFuc2xhdGUpfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cbiAgPC9mb3JtPlxuPC9kaXY+XG4iXX0=