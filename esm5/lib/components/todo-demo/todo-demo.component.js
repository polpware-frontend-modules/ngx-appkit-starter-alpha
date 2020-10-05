import { __read, __spread, __values } from "tslib";
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, Input, ViewChild } from '@angular/core';
import { DialogType, MessageSeverity, Utilities } from '@polpware/ngx-appkit-contracts-alpha';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-appkit-services-alpha";
import * as i2 from "@polpware/ngx-oauth2";
import * as i3 from "../search-box/search-box.component";
import * as i4 from "@swimlane/ngx-datatable";
import * as i5 from "ngx-bootstrap/modal";
import * as i6 from "@angular/common";
import * as i7 from "@angular/forms";
import * as i8 from "../../directives/autofocus.directive";
import * as i9 from "ngx-bootstrap/tooltip";
import * as i10 from "@ngx-translate/core";
var _c0 = ["statusHeaderTemplate"];
var _c1 = ["statusTemplate"];
var _c2 = ["nameTemplate"];
var _c3 = ["descriptionTemplate"];
var _c4 = ["actionsTemplate"];
var _c5 = ["editorModal"];
function TodoDemoComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 27);
} }
function TodoDemoComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    var _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelementStart(1, "input", 29);
    i0.ɵɵlistener("ngModelChange", function TodoDemoComponent_ng_template_21_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r15); var row_r12 = ctx.row; return row_r12.completed = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "label", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r12 = ctx.row;
    var value_r13 = ctx.value;
    i0.ɵɵadvance(1);
    i0.ɵɵattributeInterpolate1("name", "checkboxes-", value_r13, "");
    i0.ɵɵproperty("ngModel", row_r12.completed);
} }
function TodoDemoComponent_ng_template_23_span_0_Template(rf, ctx) { if (rf & 1) {
    var _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵlistener("dblclick", function TodoDemoComponent_ng_template_23_span_0_Template_span_dblclick_0_listener() { i0.ɵɵrestoreView(_r21); var row_r16 = i0.ɵɵnextContext().row; var ctx_r20 = i0.ɵɵnextContext(); return (ctx_r20.editing[row_r16.$$index + "-name"] = true); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r23 = i0.ɵɵnextContext();
    var row_r16 = ctx_r23.row;
    var value_r17 = ctx_r23.value;
    i0.ɵɵclassProp("completed", row_r16.completed);
    i0.ɵɵattributeInterpolate1("title", "Double click to edit - ", value_r17, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", value_r17, " ");
} }
function TodoDemoComponent_ng_template_23_input_1_Template(rf, ctx) { if (rf & 1) {
    var _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 34);
    i0.ɵɵlistener("blur", function TodoDemoComponent_ng_template_23_input_1_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r25); var ctx_r26 = i0.ɵɵnextContext(); var value_r17 = ctx_r26.value; var row_r16 = ctx_r26.row; var ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.updateValue($event, "name", value_r17, row_r16); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var value_r17 = i0.ɵɵnextContext().value;
    i0.ɵɵproperty("value", value_r17);
} }
function TodoDemoComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TodoDemoComponent_ng_template_23_span_0_Template, 2, 4, "span", 31);
    i0.ɵɵtemplate(1, TodoDemoComponent_ng_template_23_input_1_Template, 1, 1, "input", 32);
} if (rf & 2) {
    var row_r16 = ctx.row;
    var ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", !ctx_r5.editing[row_r16.$$index + "-name"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.editing[row_r16.$$index + "-name"]);
} }
function TodoDemoComponent_ng_template_25_span_0_Template(rf, ctx) { if (rf & 1) {
    var _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵlistener("dblclick", function TodoDemoComponent_ng_template_25_span_0_Template_span_dblclick_0_listener() { i0.ɵɵrestoreView(_r33); var row_r28 = i0.ɵɵnextContext().row; var ctx_r32 = i0.ɵɵnextContext(); return (ctx_r32.editing[row_r28.$$index + "-description"] = true); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r35 = i0.ɵɵnextContext();
    var row_r28 = ctx_r35.row;
    var value_r29 = ctx_r35.value;
    i0.ɵɵclassProp("completed", row_r28.completed);
    i0.ɵɵattributeInterpolate1("title", "Double click to edit - ", value_r29, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", value_r29, " ");
} }
function TodoDemoComponent_ng_template_25_input_1_Template(rf, ctx) { if (rf & 1) {
    var _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 34);
    i0.ɵɵlistener("blur", function TodoDemoComponent_ng_template_25_input_1_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r37); var ctx_r38 = i0.ɵɵnextContext(); var value_r29 = ctx_r38.value; var row_r28 = ctx_r38.row; var ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.updateValue($event, "description", value_r29, row_r28); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var value_r29 = i0.ɵɵnextContext().value;
    i0.ɵɵproperty("value", value_r29);
} }
function TodoDemoComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TodoDemoComponent_ng_template_25_span_0_Template, 2, 4, "span", 31);
    i0.ɵɵtemplate(1, TodoDemoComponent_ng_template_25_input_1_Template, 1, 1, "input", 32);
} if (rf & 2) {
    var row_r28 = ctx.row;
    var ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", !ctx_r7.editing[row_r28.$$index + "-description"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.editing[row_r28.$$index + "-description"]);
} }
function TodoDemoComponent_ng_template_27_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 40);
} }
function TodoDemoComponent_ng_template_27_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 41);
} }
function TodoDemoComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    var _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 35);
    i0.ɵɵlistener("click", function TodoDemoComponent_ng_template_27_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r44); var row_r40 = ctx.row; var ctx_r43 = i0.ɵɵnextContext(); return ctx_r43.delete(row_r40); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "i", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 37);
    i0.ɵɵlistener("click", function TodoDemoComponent_ng_template_27_Template_a_click_3_listener() { var row_r40 = ctx.row; return row_r40.important = !row_r40.important; })("mouseover", function TodoDemoComponent_ng_template_27_Template_a_mouseover_3_listener() { var row_r40 = ctx.row; return row_r40.isMouseOver = true; })("mouseout", function TodoDemoComponent_ng_template_27_Template_a_mouseout_3_listener() { var row_r40 = ctx.row; return row_r40.isMouseOver = false; });
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵtemplate(5, TodoDemoComponent_ng_template_27_i_5_Template, 1, 0, "i", 38);
    i0.ɵɵtemplate(6, TodoDemoComponent_ng_template_27_i_6_Template, 1, 0, "i", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r40 = ctx.row;
    i0.ɵɵpropertyInterpolate("tooltip", i0.ɵɵpipeBind1(1, 4, "todoDemo.management.Delete"));
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("tooltip", i0.ɵɵpipeBind1(4, 6, "todoDemo.management.Important"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", row_r40.important || row_r40.isMouseOver);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r40.important && !row_r40.isMouseOver);
} }
var _c6 = function (a0, a1) { return { "fa-check": a0, "fa-times": a1 }; };
function TodoDemoComponent_form_42_i_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 64);
} if (rf & 2) {
    i0.ɵɵnextContext();
    var _r49 = i0.ɵɵreference(8);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c6, _r49.valid, !_r49.valid));
} }
function TodoDemoComponent_form_42_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 65);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "todoDemo.editor.TaskNameRequired"), " ");
} }
var _c7 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
function TodoDemoComponent_form_42_Template(rf, ctx) { if (rf & 1) {
    var _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 42, 43);
    i0.ɵɵlistener("ngSubmit", function TodoDemoComponent_form_42_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r53); var _r48 = i0.ɵɵreference(1); var _r49 = i0.ɵɵreference(8); var ctx_r52 = i0.ɵɵnextContext(); return _r48.form.valid ? ctx_r52.save() : !_r49.valid && ctx_r52.showErrorAlert("Task name is required", "Please enter a name for the task"); });
    i0.ɵɵelementStart(2, "div", 44);
    i0.ɵɵelementStart(3, "label", 45);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 46);
    i0.ɵɵelementStart(7, "input", 47, 48);
    i0.ɵɵlistener("ngModelChange", function TodoDemoComponent_form_42_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r53); var ctx_r54 = i0.ɵɵnextContext(); return ctx_r54.taskEdit.name = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, TodoDemoComponent_form_42_i_9_Template, 1, 4, "i", 49);
    i0.ɵɵtemplate(10, TodoDemoComponent_form_42_span_10_Template, 3, 3, "span", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 51);
    i0.ɵɵelementStart(12, "label", 52);
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 46);
    i0.ɵɵelementStart(16, "input", 53);
    i0.ɵɵlistener("ngModelChange", function TodoDemoComponent_form_42_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r53); var ctx_r55 = i0.ɵɵnextContext(); return ctx_r55.taskEdit.description = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 54);
    i0.ɵɵelement(18, "label", 55);
    i0.ɵɵelementStart(19, "div", 46);
    i0.ɵɵelementStart(20, "div", 28);
    i0.ɵɵelementStart(21, "input", 56);
    i0.ɵɵlistener("ngModelChange", function TodoDemoComponent_form_42_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r53); var ctx_r56 = i0.ɵɵnextContext(); return ctx_r56.taskEdit.important = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "label", 57);
    i0.ɵɵtext(23);
    i0.ɵɵpipe(24, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 54);
    i0.ɵɵelementStart(26, "div", 58);
    i0.ɵɵelement(27, "hr", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 60);
    i0.ɵɵelementStart(29, "div", 61);
    i0.ɵɵelementStart(30, "button", 62);
    i0.ɵɵtext(31);
    i0.ɵɵpipe(32, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelement(33, "div", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var _r48 = i0.ɵɵreference(1);
    var _r49 = i0.ɵɵreference(8);
    var ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(5, 10, "todoDemo.editor.Name"), ":");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(18, _c7, _r48.submitted && _r49.valid, _r48.submitted && !_r49.valid))("ngModel", ctx_r11.taskEdit.name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", _r48.submitted);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r48.submitted && !_r49.valid);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(14, 12, "todoDemo.editor.Description"), ":");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r11.taskEdit.description);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r11.taskEdit.important);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(24, 14, "todoDemo.editor.Important"));
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(32, 16, "todoDemo.editor.AddTask"));
} }
var TodoDemoComponent = /** @class */ (function () {
    function TodoDemoComponent(alertService, translationService, localStorage, authService) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.localStorage = localStorage;
        this.authService = authService;
        this.rows = [];
        this.rowsCache = [];
        this.columns = [];
        this.editing = {};
        this.taskEdit = {};
        this.isDataLoaded = false;
        this.loadingIndicator = true;
        this.formResetToggle = true;
        this._hideCompletedTasks = false;
        this.verticalScrollbar = false;
    }
    Object.defineProperty(TodoDemoComponent.prototype, "currentUserId", {
        get: function () {
            if (this.authService.currentUser) {
                this._currentUserId = this.authService.currentUser.id;
            }
            return this._currentUserId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodoDemoComponent.prototype, "hideCompletedTasks", {
        get: function () {
            return this._hideCompletedTasks;
        },
        set: function (value) {
            if (value) {
                this.rows = this.rowsCache.filter(function (r) { return !r.completed; });
            }
            else {
                this.rows = __spread(this.rowsCache);
            }
            this._hideCompletedTasks = value;
        },
        enumerable: true,
        configurable: true
    });
    TodoDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadingIndicator = true;
        this.fetch(function (data) {
            _this.refreshDataIndexes(data);
            _this.rows = data;
            _this.rowsCache = __spread(data);
            _this.isDataLoaded = true;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        });
        var gT = function (key) { return _this.translationService.getTranslation(key); };
        this.columns = [
            { prop: 'completed', name: '', width: 30, headerTemplate: this.statusHeaderTemplate, cellTemplate: this.statusTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
            { prop: 'name', name: gT('todoDemo.management.Task'), cellTemplate: this.nameTemplate, width: 200 },
            { prop: 'description', name: gT('todoDemo.management.Description'), cellTemplate: this.descriptionTemplate, width: 500 },
            { name: '', width: 80, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
        ];
    };
    TodoDemoComponent.prototype.ngOnDestroy = function () {
        this.saveToDisk();
    };
    TodoDemoComponent.prototype.fetch = function (cb) {
        var _this = this;
        var data = this.getFromDisk();
        if (data == null) {
            setTimeout(function () {
                data = _this.getFromDisk();
                if (data == null) {
                    data = [
                        { completed: true, important: true, name: 'Create visual studio extension', description: 'Create a visual studio VSIX extension package that will add this project as an aspnet-core project template' },
                        { completed: false, important: true, name: 'Do a quick how-to writeup', description: '' },
                        {
                            completed: false, important: false, name: 'Create aspnet-core/Angular8 tutorials based on this project', description: 'Create tutorials (blog/video/youtube) on how to build applications (full stack)' +
                                ' using aspnet-core/Angular8. The tutorial will focus on getting productive with the technology right away rather than the details on how and why they work so audience can get onboard quickly.'
                        },
                    ];
                }
                cb(data);
            }, 1000);
        }
        else {
            cb(data);
        }
    };
    TodoDemoComponent.prototype.refreshDataIndexes = function (data) {
        var e_1, _a;
        var index = 0;
        try {
            for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                var i = data_1_1.value;
                i.$$index = index++;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    TodoDemoComponent.prototype.onSearchChanged = function (value) {
        this.rows = this.rowsCache.filter(function (r) { return Utilities.searchArray(value, false, r.name, r.description) || value == 'important' && r.important || value == 'not important' && !r.important; });
    };
    TodoDemoComponent.prototype.showErrorAlert = function (caption, message) {
        this.alertService.showMessage(caption, message, MessageSeverity.error);
    };
    TodoDemoComponent.prototype.addTask = function () {
        var _this = this;
        this.formResetToggle = false;
        setTimeout(function () {
            _this.formResetToggle = true;
            _this.taskEdit = {};
            _this.editorModal.show();
        });
    };
    TodoDemoComponent.prototype.save = function () {
        this.rowsCache.splice(0, 0, this.taskEdit);
        this.rows.splice(0, 0, this.taskEdit);
        this.refreshDataIndexes(this.rowsCache);
        this.rows = __spread(this.rows);
        this.saveToDisk();
        this.editorModal.hide();
    };
    TodoDemoComponent.prototype.updateValue = function (event, cell, cellValue, row) {
        this.editing[row.$$index + '-' + cell] = false;
        this.rows[row.$$index][cell] = event.target.value;
        this.rows = __spread(this.rows);
        this.saveToDisk();
    };
    TodoDemoComponent.prototype.delete = function (row) {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to delete the task?', DialogType.confirm, function () { return _this.deleteHelper(row); });
    };
    TodoDemoComponent.prototype.deleteHelper = function (row) {
        this.rowsCache = this.rowsCache.filter(function (item) { return item !== row; });
        this.rows = this.rows.filter(function (item) { return item !== row; });
        this.saveToDisk();
    };
    TodoDemoComponent.prototype.getFromDisk = function () {
        return this.localStorage.getDataObject(TodoDemoComponent.DBKeyTodoDemo + ":" + this.currentUserId);
    };
    TodoDemoComponent.prototype.saveToDisk = function () {
        if (this.isDataLoaded) {
            this.localStorage.saveSyncedSessionData(this.rowsCache, TodoDemoComponent.DBKeyTodoDemo + ":" + this.currentUserId);
        }
    };
    TodoDemoComponent.DBKeyTodoDemo = 'todo-demo.todo_list';
    /** @nocollapse */ TodoDemoComponent.ɵfac = function TodoDemoComponent_Factory(t) { return new (t || TodoDemoComponent)(i0.ɵɵdirectiveInject(i1.AlertService), i0.ɵɵdirectiveInject(i1.AppTranslationService), i0.ɵɵdirectiveInject(i1.LocalStoreManager), i0.ɵɵdirectiveInject(i2.AuthService)); };
    /** @nocollapse */ TodoDemoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TodoDemoComponent, selectors: [["todo-demo"]], viewQuery: function TodoDemoComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
            i0.ɵɵstaticViewQuery(_c1, true);
            i0.ɵɵstaticViewQuery(_c2, true);
            i0.ɵɵstaticViewQuery(_c3, true);
            i0.ɵɵstaticViewQuery(_c4, true);
            i0.ɵɵstaticViewQuery(_c5, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.statusHeaderTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.statusTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nameTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.descriptionTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.actionsTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.editorModal = _t.first);
        } }, inputs: { verticalScrollbar: "verticalScrollbar" }, decls: 43, vars: 23, consts: [[1, "row", "control-box"], [1, "col-lg-8"], [1, "form-group", "search-box"], [3, "placeholder", "searchChange"], [1, "col-lg-4"], [1, "nav", "flex-column", "flex-lg-row"], [1, "nav-item", "toolbaritem"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "fa", "fa-eye-slash"], [1, "fa", "fa-plus"], [1, "material", "colored-header", "sm", "table-hover", 3, "loadingIndicator", "rows", "rowHeight", "headerHeight", "footerHeight", "columns", "scrollbarV", "columnMode"], ["statusHeaderTemplate", ""], ["statusTemplate", ""], ["nameTemplate", ""], ["descriptionTemplate", ""], ["actionsTemplate", ""], ["bsModal", "", "tabindex", "-1", 1, "modal", "fade"], ["editorModal", "bs-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "float-left"], [1, "fa", "fa-tasks"], ["type", "button", "title", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["name", "taskEditorForm", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], [1, "fa", "fa-check-square-o"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelChange"], [1, "form-check-label"], ["class", "inline-label", 3, "completed", "dblclick", 4, "ngIf"], ["class", "inline-editor", "autofocus", "", "type", "text", 3, "value", "blur", 4, "ngIf"], [1, "inline-label", 3, "dblclick"], ["autofocus", "", "type", "text", 1, "inline-editor", 3, "value", "blur"], ["href", "javascript:;", "container", "body", 1, "btn", "btn-link", "btn-sm", 3, "tooltip", "click"], [1, "fa", "fa-times"], ["href", "javascript:;", "container", "body", 1, "btn", "btn-link", "btn-sm", 3, "tooltip", "click", "mouseover", "mouseout"], ["class", "fa fa-bookmark", 4, "ngIf"], ["class", "fa fa-bookmark-o", 4, "ngIf"], [1, "fa", "fa-bookmark"], [1, "fa", "fa-bookmark-o"], ["name", "taskEditorForm", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", "row", "has-feedback-icon"], ["for", "taskName", 1, "col-form-label", "col-md-3"], [1, "col-md-9"], ["autofocus", "", "type", "text", "id", "taskName", "name", "taskName", "placeholder", "Enter task name", "required", "", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["taskName", "ngModel"], ["class", "fa form-control-feedback", "aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "row", "description-form-group"], ["for", "taskDescription", 1, "col-form-label", "col-md-3"], ["type", "text", "id", "taskDescription", "name", "taskDescription", "placeholder", "Enter task description", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-form-label", "col-md-3"], ["id", "isImportant", "name", "isImportant", "type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "isImportant", 1, "form-check-label"], [1, "col-md-12"], [1, "edit-last-separator-hr"], [1, "form-group", "actionBtn-form-group"], [1, "float-right"], ["type", "submit", 1, "btn", "btn-primary"], [1, "clearfix"], ["aria-hidden", "true", 1, "fa", "form-control-feedback", 3, "ngClass"], [1, "invalid-feedback"]], template: function TodoDemoComponent_Template(rf, ctx) { if (rf & 1) {
            var _r57 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "div", 0);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵelementStart(4, "search-box", 3);
            i0.ɵɵlistener("searchChange", function TodoDemoComponent_Template_search_box_searchChange_4_listener($event) { return ctx.onSearchChanged($event); });
            i0.ɵɵpipe(5, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵelementStart(7, "ul", 5);
            i0.ɵɵelementStart(8, "li", 6);
            i0.ɵɵelementStart(9, "a", 7);
            i0.ɵɵlistener("click", function TodoDemoComponent_Template_a_click_9_listener() { return ctx.hideCompletedTasks = !ctx.hideCompletedTasks; });
            i0.ɵɵelement(10, "i", 8);
            i0.ɵɵtext(11);
            i0.ɵɵpipe(12, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "li", 6);
            i0.ɵɵelementStart(14, "a", 7);
            i0.ɵɵlistener("click", function TodoDemoComponent_Template_a_click_14_listener() { return ctx.addTask(); });
            i0.ɵɵelement(15, "i", 9);
            i0.ɵɵtext(16);
            i0.ɵɵpipe(17, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(18, "ngx-datatable", 10);
            i0.ɵɵtemplate(19, TodoDemoComponent_ng_template_19_Template, 1, 0, "ng-template", null, 11, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(21, TodoDemoComponent_ng_template_21_Template, 3, 2, "ng-template", null, 12, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(23, TodoDemoComponent_ng_template_23_Template, 2, 2, "ng-template", null, 13, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(25, TodoDemoComponent_ng_template_25_Template, 2, 2, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(27, TodoDemoComponent_ng_template_27_Template, 7, 8, "ng-template", null, 15, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(29, "div", 16, 17);
            i0.ɵɵelementStart(31, "div", 18);
            i0.ɵɵelementStart(32, "div", 19);
            i0.ɵɵelementStart(33, "div", 20);
            i0.ɵɵelementStart(34, "h4", 21);
            i0.ɵɵelement(35, "i", 22);
            i0.ɵɵtext(36);
            i0.ɵɵpipe(37, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "button", 23);
            i0.ɵɵlistener("click", function TodoDemoComponent_Template_button_click_38_listener() { i0.ɵɵrestoreView(_r57); var _r10 = i0.ɵɵreference(30); return _r10.hide(); });
            i0.ɵɵelementStart(39, "span", 24);
            i0.ɵɵtext(40, "\u00D7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "div", 25);
            i0.ɵɵtemplate(42, TodoDemoComponent_form_42_Template, 34, 21, "form", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind1(5, 15, "todoDemo.management.Search"));
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("active", ctx.hideCompletedTasks);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(12, 17, "todoDemo.management.HideCompleted"), "");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(17, 19, "todoDemo.management.AddTask"), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("loadingIndicator", ctx.loadingIndicator)("rows", ctx.rows)("rowHeight", 35)("headerHeight", 35)("footerHeight", 35)("columns", ctx.columns)("scrollbarV", ctx.verticalScrollbar)("columnMode", "force");
            i0.ɵɵadvance(18);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(37, 21, "todoDemo.editor.NewTask"), "");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.formResetToggle);
        } }, directives: [i3.SearchBoxComponent, i4.DatatableComponent, i5.ModalDirective, i6.NgIf, i7.CheckboxControlValueAccessor, i7.NgControlStatus, i7.NgModel, i8.AutofocusDirective, i9.TooltipDirective, i7.ɵangular_packages_forms_forms_y, i7.NgControlStatusGroup, i7.NgForm, i7.DefaultValueAccessor, i7.RequiredValidator, i6.NgClass], pipes: [i10.TranslatePipe], styles: ["input.form-control[_ngcontent-%COMP%]{border-left-width:5px}.control-box[_ngcontent-%COMP%]{margin-bottom:5px}.search-box[_ngcontent-%COMP%]{margin:0}.nav-item.toolbaritem[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-top:3px;padding-bottom:3px;min-width:100px;font-weight:700}.completed[_ngcontent-%COMP%]{text-decoration:line-through}.form-check[_ngcontent-%COMP%]{margin:0}.inline-label[_ngcontent-%COMP%]{width:100%;min-height:1rem;display:inline-block}.inline-editor[_ngcontent-%COMP%]{width:100%}.description-form-group[_ngcontent-%COMP%]{margin-bottom:5px}.actionBtn-form-group[_ngcontent-%COMP%]{margin:0}.edit-last-separator-hr[_ngcontent-%COMP%]{margin:10px 0}"] });
    return TodoDemoComponent;
}());
export { TodoDemoComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TodoDemoComponent, [{
        type: Component,
        args: [{
                selector: 'todo-demo',
                templateUrl: './todo-demo.component.html',
                styleUrls: ['./todo-demo.component.scss']
            }]
    }], function () { return [{ type: i1.AlertService }, { type: i1.AppTranslationService }, { type: i1.LocalStoreManager }, { type: i2.AuthService }]; }, { verticalScrollbar: [{
            type: Input
        }], statusHeaderTemplate: [{
            type: ViewChild,
            args: ['statusHeaderTemplate', { static: true }]
        }], statusTemplate: [{
            type: ViewChild,
            args: ['statusTemplate', { static: true }]
        }], nameTemplate: [{
            type: ViewChild,
            args: ['nameTemplate', { static: true }]
        }], descriptionTemplate: [{
            type: ViewChild,
            args: ['descriptionTemplate', { static: true }]
        }], actionsTemplate: [{
            type: ViewChild,
            args: ['actionsTemplate', { static: true }]
        }], editorModal: [{
            type: ViewChild,
            args: ['editorModal', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1kZW1vLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b2RvLWRlbW8vdG9kby1kZW1vLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3RvZG8tZGVtby90b2RvLWRlbW8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdDQUFnQztBQUNoQyw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLGdDQUFnQztBQUVoQyxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQWUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzVGLE9BQU8sRUFDSCxVQUFVLEVBQUUsZUFBZSxFQUMzQixTQUFTLEVBQ1osTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ21CdEMsd0JBQW9DOzs7O0lBSXBDLCtCQUNJO0lBQUEsaUNBQ0E7SUFEaUYsK01BQTJCO0lBQTVHLGlCQUNBO0lBQUEsNEJBQXdDO0lBQzVDLGlCQUFNOzs7O0lBRjhCLGVBQWdDO0lBQWhDLGdFQUFnQztJQUFpQiwyQ0FBMkI7Ozs7SUFNaEgsZ0NBQ0k7SUFEK0ksMlBBQWtDLE9BQU8sSUFBSSxJQUFJLEtBQUM7SUFDak0sWUFDSjtJQUFBLGlCQUFPOzs7OztJQUY0RCw4Q0FBaUM7SUFBQyw2RUFBNkM7SUFDOUksZUFDSjtJQURJLDBDQUNKOzs7O0lBQ0EsaUNBQ0o7SUFEa0YsMFNBQTRCLE1BQU0seUJBQWM7SUFBOUgsaUJBQ0o7OztJQUQrSSxpQ0FBZTs7O0lBSDFKLG9GQUNJO0lBRUosc0ZBQ0o7Ozs7SUFKVSxpRUFBdUM7SUFHdEMsZUFBc0M7SUFBdEMsZ0VBQXNDOzs7O0lBSTdDLGdDQUNJO0lBRHNKLDJQQUFrQyxjQUFjLElBQUksSUFBSSxLQUFDO0lBQy9NLFlBQ0o7SUFBQSxpQkFBTzs7Ozs7SUFGbUUsOENBQWlD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QkFBTTtZQUNWLGlCQUFNO1lBQ1YsaUJBQU07O1lBN0grRCxlQUEwRDtZQUExRCw0RkFBMEQ7WUFLM0csZUFBbUM7WUFBbkMsZ0RBQW1DO1lBQ3dGLGVBQW1EO1lBQW5ELDJGQUFtRDtZQUd2RixlQUE2QztZQUE3QyxxRkFBNkM7WUFNckksZUFBcUM7WUFBckMsdURBQXFDLGtCQUFBLGlCQUFBLG9CQUFBLG9CQUFBLHdCQUFBLHFDQUFBLHVCQUFBO1lBb0QyQixnQkFBeUM7WUFBekMsaUZBQXlDO1lBTWxHLGVBQXVCO1lBQXZCLDBDQUF1Qjs7NEJEN0VqRDtDQWtPQyxBQXpNRCxJQXlNQztTQXBNWSxpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUw3QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzVDOztrQkEwQ0ksS0FBSzs7a0JBSUwsU0FBUzttQkFBQyxzQkFBc0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUdsRCxTQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRzVDLFNBQVM7bUJBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRzFDLFNBQVM7bUJBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFHakQsU0FBUzttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUc3QyxTQUFTO21CQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuXG5pbXBvcnQge1xuICAgIERpYWxvZ1R5cGUsIE1lc3NhZ2VTZXZlcml0eSxcbiAgICBVdGlsaXRpZXNcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBBbGVydFNlcnZpY2UsXG4gICAgQXBwVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIExvY2FsU3RvcmVNYW5hZ2VyXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXNlcnZpY2VzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBBdXRoU2VydmljZSxcbiAgICBQZXJtaXNzaW9uLFxufSBmcm9tICdAcG9scHdhcmUvbmd4LW9hdXRoMic7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0b2RvLWRlbW8nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90b2RvLWRlbW8uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3RvZG8tZGVtby5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRvZG9EZW1vQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREJLZXlUb2RvRGVtbyA9ICd0b2RvLWRlbW8udG9kb19saXN0JztcblxuICAgIHJvd3MgPSBbXTtcbiAgICByb3dzQ2FjaGUgPSBbXTtcbiAgICBjb2x1bW5zID0gW107XG4gICAgZWRpdGluZyA9IHt9O1xuICAgIHRhc2tFZGl0OiBhbnkgPSB7fTtcbiAgICBpc0RhdGFMb2FkZWQgPSBmYWxzZTtcbiAgICBsb2FkaW5nSW5kaWNhdG9yID0gdHJ1ZTtcbiAgICBmb3JtUmVzZXRUb2dnbGUgPSB0cnVlO1xuICAgIF9jdXJyZW50VXNlcklkOiBzdHJpbmc7XG4gICAgX2hpZGVDb21wbGV0ZWRUYXNrcyA9IGZhbHNlO1xuXG5cbiAgICBnZXQgY3VycmVudFVzZXJJZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRVc2VySWQgPSB0aGlzLmF1dGhTZXJ2aWNlLmN1cnJlbnRVc2VyLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRVc2VySWQ7XG4gICAgfVxuXG5cbiAgICBzZXQgaGlkZUNvbXBsZXRlZFRhc2tzKHZhbHVlOiBib29sZWFuKSB7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLnJvd3NDYWNoZS5maWx0ZXIociA9PiAhci5jb21wbGV0ZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gWy4uLnRoaXMucm93c0NhY2hlXTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5faGlkZUNvbXBsZXRlZFRhc2tzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGhpZGVDb21wbGV0ZWRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpZGVDb21wbGV0ZWRUYXNrcztcbiAgICB9XG5cblxuICAgIEBJbnB1dCgpXG4gICAgdmVydGljYWxTY3JvbGxiYXIgPSBmYWxzZTtcblxuXG4gICAgQFZpZXdDaGlsZCgnc3RhdHVzSGVhZGVyVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHN0YXR1c0hlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnc3RhdHVzVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHN0YXR1c1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnbmFtZVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBuYW1lVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdkZXNjcmlwdGlvblRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBkZXNjcmlwdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnYWN0aW9uc1RlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBhY3Rpb25zVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdlZGl0b3JNb2RhbCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgZWRpdG9yTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLCBwcml2YXRlIHRyYW5zbGF0aW9uU2VydmljZTogQXBwVHJhbnNsYXRpb25TZXJ2aWNlLCBwcml2YXRlIGxvY2FsU3RvcmFnZTogTG9jYWxTdG9yZU1hbmFnZXIsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XG4gICAgfVxuXG5cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZmV0Y2goKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaERhdGFJbmRleGVzKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gZGF0YTtcbiAgICAgICAgICAgIHRoaXMucm93c0NhY2hlID0gWy4uLmRhdGFdO1xuICAgICAgICAgICAgdGhpcy5pc0RhdGFMb2FkZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7IH0sIDE1MDApO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IGdUID0gKGtleTogc3RyaW5nKSA9PiB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5nZXRUcmFuc2xhdGlvbihrZXkpO1xuXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtcbiAgICAgICAgICAgIHsgcHJvcDogJ2NvbXBsZXRlZCcsIG5hbWU6ICcnLCB3aWR0aDogMzAsIGhlYWRlclRlbXBsYXRlOiB0aGlzLnN0YXR1c0hlYWRlclRlbXBsYXRlLCBjZWxsVGVtcGxhdGU6IHRoaXMuc3RhdHVzVGVtcGxhdGUsIHJlc2l6ZWFibGU6IGZhbHNlLCBjYW5BdXRvUmVzaXplOiBmYWxzZSwgc29ydGFibGU6IGZhbHNlLCBkcmFnZ2FibGU6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHByb3A6ICduYW1lJywgbmFtZTogZ1QoJ3RvZG9EZW1vLm1hbmFnZW1lbnQuVGFzaycpLCBjZWxsVGVtcGxhdGU6IHRoaXMubmFtZVRlbXBsYXRlLCB3aWR0aDogMjAwIH0sXG4gICAgICAgICAgICB7IHByb3A6ICdkZXNjcmlwdGlvbicsIG5hbWU6IGdUKCd0b2RvRGVtby5tYW5hZ2VtZW50LkRlc2NyaXB0aW9uJyksIGNlbGxUZW1wbGF0ZTogdGhpcy5kZXNjcmlwdGlvblRlbXBsYXRlLCB3aWR0aDogNTAwIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICcnLCB3aWR0aDogODAsIGNlbGxUZW1wbGF0ZTogdGhpcy5hY3Rpb25zVGVtcGxhdGUsIHJlc2l6ZWFibGU6IGZhbHNlLCBjYW5BdXRvUmVzaXplOiBmYWxzZSwgc29ydGFibGU6IGZhbHNlLCBkcmFnZ2FibGU6IGZhbHNlIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zYXZlVG9EaXNrKCk7XG4gICAgfVxuXG5cblxuICAgIGZldGNoKGNiKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRGcm9tRGlzaygpO1xuXG4gICAgICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMuZ2V0RnJvbURpc2soKTtcblxuICAgICAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY29tcGxldGVkOiB0cnVlLCBpbXBvcnRhbnQ6IHRydWUsIG5hbWU6ICdDcmVhdGUgdmlzdWFsIHN0dWRpbyBleHRlbnNpb24nLCBkZXNjcmlwdGlvbjogJ0NyZWF0ZSBhIHZpc3VhbCBzdHVkaW8gVlNJWCBleHRlbnNpb24gcGFja2FnZSB0aGF0IHdpbGwgYWRkIHRoaXMgcHJvamVjdCBhcyBhbiBhc3BuZXQtY29yZSBwcm9qZWN0IHRlbXBsYXRlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjb21wbGV0ZWQ6IGZhbHNlLCBpbXBvcnRhbnQ6IHRydWUsIG5hbWU6ICdEbyBhIHF1aWNrIGhvdy10byB3cml0ZXVwJywgZGVzY3JpcHRpb246ICcnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSwgaW1wb3J0YW50OiBmYWxzZSwgbmFtZTogJ0NyZWF0ZSBhc3BuZXQtY29yZS9Bbmd1bGFyOCB0dXRvcmlhbHMgYmFzZWQgb24gdGhpcyBwcm9qZWN0JywgZGVzY3JpcHRpb246ICdDcmVhdGUgdHV0b3JpYWxzIChibG9nL3ZpZGVvL3lvdXR1YmUpIG9uIGhvdyB0byBidWlsZCBhcHBsaWNhdGlvbnMgKGZ1bGwgc3RhY2spJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgdXNpbmcgYXNwbmV0LWNvcmUvQW5ndWxhcjguIFRoZSB0dXRvcmlhbCB3aWxsIGZvY3VzIG9uIGdldHRpbmcgcHJvZHVjdGl2ZSB3aXRoIHRoZSB0ZWNobm9sb2d5IHJpZ2h0IGF3YXkgcmF0aGVyIHRoYW4gdGhlIGRldGFpbHMgb24gaG93IGFuZCB3aHkgdGhleSB3b3JrIHNvIGF1ZGllbmNlIGNhbiBnZXQgb25ib2FyZCBxdWlja2x5LidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2IoZGF0YSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNiKGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZWZyZXNoRGF0YUluZGV4ZXMoZGF0YSkge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgICAgIGZvciAoY29uc3QgaSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpLiQkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvblNlYXJjaENoYW5nZWQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLnJvd3NDYWNoZS5maWx0ZXIociA9PiBVdGlsaXRpZXMuc2VhcmNoQXJyYXkodmFsdWUsIGZhbHNlLCByLm5hbWUsIHIuZGVzY3JpcHRpb24pIHx8IHZhbHVlID09ICdpbXBvcnRhbnQnICYmIHIuaW1wb3J0YW50IHx8IHZhbHVlID09ICdub3QgaW1wb3J0YW50JyAmJiAhci5pbXBvcnRhbnQpO1xuICAgIH1cblxuXG4gICAgc2hvd0Vycm9yQWxlcnQoY2FwdGlvbjogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoY2FwdGlvbiwgbWVzc2FnZSwgTWVzc2FnZVNldmVyaXR5LmVycm9yKTtcbiAgICB9XG5cblxuICAgIGFkZFRhc2soKSB7XG4gICAgICAgIHRoaXMuZm9ybVJlc2V0VG9nZ2xlID0gZmFsc2U7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvcm1SZXNldFRvZ2dsZSA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMudGFza0VkaXQgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yTW9kYWwuc2hvdygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICB0aGlzLnJvd3NDYWNoZS5zcGxpY2UoMCwgMCwgdGhpcy50YXNrRWRpdCk7XG4gICAgICAgIHRoaXMucm93cy5zcGxpY2UoMCwgMCwgdGhpcy50YXNrRWRpdCk7XG4gICAgICAgIHRoaXMucmVmcmVzaERhdGFJbmRleGVzKHRoaXMucm93c0NhY2hlKTtcbiAgICAgICAgdGhpcy5yb3dzID0gWy4uLnRoaXMucm93c107XG5cbiAgICAgICAgdGhpcy5zYXZlVG9EaXNrKCk7XG4gICAgICAgIHRoaXMuZWRpdG9yTW9kYWwuaGlkZSgpO1xuICAgIH1cblxuXG4gICAgdXBkYXRlVmFsdWUoZXZlbnQsIGNlbGwsIGNlbGxWYWx1ZSwgcm93KSB7XG4gICAgICAgIHRoaXMuZWRpdGluZ1tyb3cuJCRpbmRleCArICctJyArIGNlbGxdID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm93c1tyb3cuJCRpbmRleF1bY2VsbF0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMucm93cyA9IFsuLi50aGlzLnJvd3NdO1xuXG4gICAgICAgIHRoaXMuc2F2ZVRvRGlzaygpO1xuICAgIH1cblxuXG4gICAgZGVsZXRlKHJvdykge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93RGlhbG9nKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSB0YXNrPycsIERpYWxvZ1R5cGUuY29uZmlybSwgKCkgPT4gdGhpcy5kZWxldGVIZWxwZXIocm93KSk7XG4gICAgfVxuXG5cbiAgICBkZWxldGVIZWxwZXIocm93KSB7XG4gICAgICAgIHRoaXMucm93c0NhY2hlID0gdGhpcy5yb3dzQ2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gcm93KTtcbiAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5yb3dzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHJvdyk7XG5cbiAgICAgICAgdGhpcy5zYXZlVG9EaXNrKCk7XG4gICAgfVxuXG4gICAgZ2V0RnJvbURpc2soKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsU3RvcmFnZS5nZXREYXRhT2JqZWN0KGAke1RvZG9EZW1vQ29tcG9uZW50LkRCS2V5VG9kb0RlbW99OiR7dGhpcy5jdXJyZW50VXNlcklkfWApO1xuICAgIH1cblxuICAgIHNhdmVUb0Rpc2soKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGF0YUxvYWRlZCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2Uuc2F2ZVN5bmNlZFNlc3Npb25EYXRhKHRoaXMucm93c0NhY2hlLCBgJHtUb2RvRGVtb0NvbXBvbmVudC5EQktleVRvZG9EZW1vfToke3RoaXMuY3VycmVudFVzZXJJZH1gKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIjxkaXY+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBjb250cm9sLWJveFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNlYXJjaC1ib3hcIj5cbiAgICAgICAgICAgICAgICA8c2VhcmNoLWJveCAoc2VhcmNoQ2hhbmdlKT1cIm9uU2VhcmNoQ2hhbmdlZCgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJ7eyd0b2RvRGVtby5tYW5hZ2VtZW50LlNlYXJjaCcgfCB0cmFuc2xhdGV9fVwiPjwvc2VhcmNoLWJveD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgZmxleC1jb2x1bW4gZmxleC1sZy1yb3dcIj5cbiAgICAgICAgICAgICAgICA8bGkgW2NsYXNzLmFjdGl2ZV09XCJoaWRlQ29tcGxldGVkVGFza3NcIiBjbGFzcz1cIm5hdi1pdGVtIHRvb2xiYXJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiamF2YXNjcmlwdDo7XCIgKGNsaWNrKT1cImhpZGVDb21wbGV0ZWRUYXNrcyA9ICFoaWRlQ29tcGxldGVkVGFza3NcIj48aSBjbGFzcz1cImZhIGZhLWV5ZS1zbGFzaFwiPjwvaT4ge3sndG9kb0RlbW8ubWFuYWdlbWVudC5IaWRlQ29tcGxldGVkJyB8IHRyYW5zbGF0ZX19PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gdG9vbGJhcml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiAoY2xpY2spPVwiYWRkVGFzaygpXCI+PGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPiB7eyd0b2RvRGVtby5tYW5hZ2VtZW50LkFkZFRhc2snIHwgdHJhbnNsYXRlfX08L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxuZ3gtZGF0YXRhYmxlIGNsYXNzPVwibWF0ZXJpYWwgY29sb3JlZC1oZWFkZXIgc20gdGFibGUtaG92ZXJcIlxuICAgICAgICAgICAgICAgICAgIFtsb2FkaW5nSW5kaWNhdG9yXT1cImxvYWRpbmdJbmRpY2F0b3JcIlxuICAgICAgICAgICAgICAgICAgIFtyb3dzXT1cInJvd3NcIlxuICAgICAgICAgICAgICAgICAgIFtyb3dIZWlnaHRdPVwiMzVcIlxuICAgICAgICAgICAgICAgICAgIFtoZWFkZXJIZWlnaHRdPVwiMzVcIlxuICAgICAgICAgICAgICAgICAgIFtmb290ZXJIZWlnaHRdPVwiMzVcIlxuICAgICAgICAgICAgICAgICAgIFtjb2x1bW5zXT1cImNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgIFtzY3JvbGxiYXJWXT1cInZlcnRpY2FsU2Nyb2xsYmFyXCJcbiAgICAgICAgICAgICAgICAgICBbY29sdW1uTW9kZV09XCInZm9yY2UnXCI+XG4gICAgPC9uZ3gtZGF0YXRhYmxlPlxuXG4gICAgPG5nLXRlbXBsYXRlICNzdGF0dXNIZWFkZXJUZW1wbGF0ZT5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVjay1zcXVhcmUtb1wiPjwvaT5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPG5nLXRlbXBsYXRlICNzdGF0dXNUZW1wbGF0ZSBsZXQtcm93PVwicm93XCIgbGV0LXZhbHVlPVwidmFsdWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBhdHRyLm5hbWU9XCJjaGVja2JveGVzLXt7dmFsdWV9fVwiIHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwicm93LmNvbXBsZXRlZFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiPjwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctdGVtcGxhdGUgI25hbWVUZW1wbGF0ZSBsZXQtcm93PVwicm93XCIgbGV0LXZhbHVlPVwidmFsdWVcIj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCIhZWRpdGluZ1tyb3cuJCRpbmRleCArICctbmFtZSddXCIgY2xhc3M9XCJpbmxpbmUtbGFiZWxcIiBbY2xhc3MuY29tcGxldGVkXT1cInJvdy5jb21wbGV0ZWRcIiBhdHRyLnRpdGxlPVwiRG91YmxlIGNsaWNrIHRvIGVkaXQgLSB7e3ZhbHVlfX1cIiAoZGJsY2xpY2spPVwiZWRpdGluZ1tyb3cuJCRpbmRleCArICctbmFtZSddID0gdHJ1ZVwiPlxuICAgICAgICAgICAge3t2YWx1ZX19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGlucHV0ICpuZ0lmPVwiZWRpdGluZ1tyb3cuJCRpbmRleCArICctbmFtZSddXCIgY2xhc3M9XCJpbmxpbmUtZWRpdG9yXCIgYXV0b2ZvY3VzIChibHVyKT1cInVwZGF0ZVZhbHVlKCRldmVudCwgJ25hbWUnLCB2YWx1ZSwgcm93KVwiIHR5cGU9XCJ0ZXh0XCIgW3ZhbHVlXT1cInZhbHVlXCIgLz5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPG5nLXRlbXBsYXRlICNkZXNjcmlwdGlvblRlbXBsYXRlIGxldC1yb3c9XCJyb3dcIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIiFlZGl0aW5nW3Jvdy4kJGluZGV4ICsgJy1kZXNjcmlwdGlvbiddXCIgY2xhc3M9XCJpbmxpbmUtbGFiZWxcIiBbY2xhc3MuY29tcGxldGVkXT1cInJvdy5jb21wbGV0ZWRcIiBhdHRyLnRpdGxlPVwiRG91YmxlIGNsaWNrIHRvIGVkaXQgLSB7e3ZhbHVlfX1cIiAoZGJsY2xpY2spPVwiZWRpdGluZ1tyb3cuJCRpbmRleCArICctZGVzY3JpcHRpb24nXSA9IHRydWVcIj5cbiAgICAgICAgICAgIHt7dmFsdWV9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxpbnB1dCAqbmdJZj1cImVkaXRpbmdbcm93LiQkaW5kZXggKyAnLWRlc2NyaXB0aW9uJ11cIiBjbGFzcz1cImlubGluZS1lZGl0b3JcIiBhdXRvZm9jdXMgKGJsdXIpPVwidXBkYXRlVmFsdWUoJGV2ZW50LCAnZGVzY3JpcHRpb24nLCB2YWx1ZSwgcm93KVwiIHR5cGU9XCJ0ZXh0XCIgW3ZhbHVlXT1cInZhbHVlXCIgLz5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG5cbiAgICA8bmctdGVtcGxhdGUgI2FjdGlvbnNUZW1wbGF0ZSBsZXQtcm93PVwicm93XCI+XG4gICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiB0b29sdGlwPVwie3sndG9kb0RlbW8ubWFuYWdlbWVudC5EZWxldGUnIHwgdHJhbnNsYXRlfX1cIiBjb250YWluZXI9XCJib2R5XCIgKGNsaWNrKT1cImRlbGV0ZShyb3cpXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT48L2E+XG4gICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiB0b29sdGlwPVwie3sndG9kb0RlbW8ubWFuYWdlbWVudC5JbXBvcnRhbnQnIHwgdHJhbnNsYXRlfX1cIiBjb250YWluZXI9XCJib2R5XCIgKGNsaWNrKT1cInJvdy5pbXBvcnRhbnQgPSAhcm93LmltcG9ydGFudFwiIChtb3VzZW92ZXIpPVwicm93LmlzTW91c2VPdmVyPXRydWVcIiAobW91c2VvdXQpPVwicm93LmlzTW91c2VPdmVyPWZhbHNlXCI+XG4gICAgICAgICAgICA8aSAqbmdJZj1cInJvdy5pbXBvcnRhbnQgfHwgcm93LmlzTW91c2VPdmVyXCIgY2xhc3M9XCJmYSBmYS1ib29rbWFya1wiPjwvaT5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiIXJvdy5pbXBvcnRhbnQgJiYgIXJvdy5pc01vdXNlT3ZlclwiIGNsYXNzPVwiZmEgZmEtYm9va21hcmstb1wiPjwvaT5cbiAgICAgICAgPC9hPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cblxuXG5cblxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgYnNNb2RhbCAjZWRpdG9yTW9kYWw9XCJicy1tb2RhbFwiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlIGZsb2F0LWxlZnRcIj48aSBjbGFzcz1cImZhIGZhLXRhc2tzXCI+PC9pPiB7eyd0b2RvRGVtby5lZGl0b3IuTmV3VGFzaycgfCB0cmFuc2xhdGV9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiB0aXRsZT1cIkNsb3NlXCIgKGNsaWNrKT1cImVkaXRvck1vZGFsLmhpZGUoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gKm5nSWY9XCJmb3JtUmVzZXRUb2dnbGVcIiBuYW1lPVwidGFza0VkaXRvckZvcm1cIiAjZj1cIm5nRm9ybVwiIG5vdmFsaWRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKG5nU3VibWl0KT1cImYuZm9ybS52YWxpZCA/IHNhdmUoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgKCF0YXNrTmFtZS52YWxpZCAmJiBzaG93RXJyb3JBbGVydCgnVGFzayBuYW1lIGlzIHJlcXVpcmVkJywgJ1BsZWFzZSBlbnRlciBhIG5hbWUgZm9yIHRoZSB0YXNrJykpO1wiPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvdyBoYXMtZmVlZGJhY2staWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1mb3JtLWxhYmVsIGNvbC1tZC0zXCIgZm9yPVwidGFza05hbWVcIj57eyd0b2RvRGVtby5lZGl0b3IuTmFtZScgfCB0cmFuc2xhdGV9fTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYXV0b2ZvY3VzIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrTmFtZVwiIG5hbWU9XCJ0YXNrTmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGFzayBuYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbbmdDbGFzc109XCJ7J2lzLXZhbGlkJzogZi5zdWJtaXR0ZWQgJiYgdGFza05hbWUudmFsaWQsICdpcy1pbnZhbGlkJyA6IGYuc3VibWl0dGVkICYmICF0YXNrTmFtZS52YWxpZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ0YXNrRWRpdC5uYW1lXCIgI3Rhc2tOYW1lPVwibmdNb2RlbFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpICpuZ0lmPVwiZi5zdWJtaXR0ZWRcIiBjbGFzcz1cImZhIGZvcm0tY29udHJvbC1mZWVkYmFja1wiIFtuZ0NsYXNzXT1cInsnZmEtY2hlY2snOiB0YXNrTmFtZS52YWxpZCwgJ2ZhLXRpbWVzJyA6ICF0YXNrTmFtZS52YWxpZH1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZi5zdWJtaXR0ZWQgJiYgIXRhc2tOYW1lLnZhbGlkXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyd0b2RvRGVtby5lZGl0b3IuVGFza05hbWVSZXF1aXJlZCcgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93IGRlc2NyaXB0aW9uLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbCBjb2wtbWQtM1wiIGZvcj1cInRhc2tEZXNjcmlwdGlvblwiPnt7J3RvZG9EZW1vLmVkaXRvci5EZXNjcmlwdGlvbicgfCB0cmFuc2xhdGV9fTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2tEZXNjcmlwdGlvblwiIG5hbWU9XCJ0YXNrRGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRhc2sgZGVzY3JpcHRpb25cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwidGFza0VkaXQuZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbCBjb2wtbWQtM1wiPiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwiaXNJbXBvcnRhbnRcIiBuYW1lPVwiaXNJbXBvcnRhbnRcIiB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cInRhc2tFZGl0LmltcG9ydGFudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlzSW1wb3J0YW50XCIgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCI+e3sndG9kb0RlbW8uZWRpdG9yLkltcG9ydGFudCcgfCB0cmFuc2xhdGV9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzcz1cImVkaXQtbGFzdC1zZXBhcmF0b3ItaHJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgYWN0aW9uQnRuLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj57eyd0b2RvRGVtby5lZGl0b3IuQWRkVGFzaycgfCB0cmFuc2xhdGV9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+Il19