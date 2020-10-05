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
const _c0 = ["statusHeaderTemplate"];
const _c1 = ["statusTemplate"];
const _c2 = ["nameTemplate"];
const _c3 = ["descriptionTemplate"];
const _c4 = ["actionsTemplate"];
const _c5 = ["editorModal"];
function TodoDemoComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 27);
} }
function TodoDemoComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelementStart(1, "input", 29);
    i0.ɵɵlistener("ngModelChange", function TodoDemoComponent_ng_template_21_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r15); const row_r12 = ctx.row; return row_r12.completed = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "label", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r12 = ctx.row;
    const value_r13 = ctx.value;
    i0.ɵɵadvance(1);
    i0.ɵɵattributeInterpolate1("name", "checkboxes-", value_r13, "");
    i0.ɵɵproperty("ngModel", row_r12.completed);
} }
function TodoDemoComponent_ng_template_23_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵlistener("dblclick", function TodoDemoComponent_ng_template_23_span_0_Template_span_dblclick_0_listener() { i0.ɵɵrestoreView(_r21); const row_r16 = i0.ɵɵnextContext().row; const ctx_r20 = i0.ɵɵnextContext(); return (ctx_r20.editing[row_r16.$$index + "-name"] = true); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext();
    const row_r16 = ctx_r23.row;
    const value_r17 = ctx_r23.value;
    i0.ɵɵclassProp("completed", row_r16.completed);
    i0.ɵɵattributeInterpolate1("title", "Double click to edit - ", value_r17, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", value_r17, " ");
} }
function TodoDemoComponent_ng_template_23_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 34);
    i0.ɵɵlistener("blur", function TodoDemoComponent_ng_template_23_input_1_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r26 = i0.ɵɵnextContext(); const value_r17 = ctx_r26.value; const row_r16 = ctx_r26.row; const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.updateValue($event, "name", value_r17, row_r16); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r17 = i0.ɵɵnextContext().value;
    i0.ɵɵproperty("value", value_r17);
} }
function TodoDemoComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TodoDemoComponent_ng_template_23_span_0_Template, 2, 4, "span", 31);
    i0.ɵɵtemplate(1, TodoDemoComponent_ng_template_23_input_1_Template, 1, 1, "input", 32);
} if (rf & 2) {
    const row_r16 = ctx.row;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", !ctx_r5.editing[row_r16.$$index + "-name"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.editing[row_r16.$$index + "-name"]);
} }
function TodoDemoComponent_ng_template_25_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵlistener("dblclick", function TodoDemoComponent_ng_template_25_span_0_Template_span_dblclick_0_listener() { i0.ɵɵrestoreView(_r33); const row_r28 = i0.ɵɵnextContext().row; const ctx_r32 = i0.ɵɵnextContext(); return (ctx_r32.editing[row_r28.$$index + "-description"] = true); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r35 = i0.ɵɵnextContext();
    const row_r28 = ctx_r35.row;
    const value_r29 = ctx_r35.value;
    i0.ɵɵclassProp("completed", row_r28.completed);
    i0.ɵɵattributeInterpolate1("title", "Double click to edit - ", value_r29, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", value_r29, " ");
} }
function TodoDemoComponent_ng_template_25_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 34);
    i0.ɵɵlistener("blur", function TodoDemoComponent_ng_template_25_input_1_Template_input_blur_0_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r38 = i0.ɵɵnextContext(); const value_r29 = ctx_r38.value; const row_r28 = ctx_r38.row; const ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.updateValue($event, "description", value_r29, row_r28); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r29 = i0.ɵɵnextContext().value;
    i0.ɵɵproperty("value", value_r29);
} }
function TodoDemoComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TodoDemoComponent_ng_template_25_span_0_Template, 2, 4, "span", 31);
    i0.ɵɵtemplate(1, TodoDemoComponent_ng_template_25_input_1_Template, 1, 1, "input", 32);
} if (rf & 2) {
    const row_r28 = ctx.row;
    const ctx_r7 = i0.ɵɵnextContext();
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
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 35);
    i0.ɵɵlistener("click", function TodoDemoComponent_ng_template_27_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r44); const row_r40 = ctx.row; const ctx_r43 = i0.ɵɵnextContext(); return ctx_r43.delete(row_r40); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "i", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 37);
    i0.ɵɵlistener("click", function TodoDemoComponent_ng_template_27_Template_a_click_3_listener() { const row_r40 = ctx.row; return row_r40.important = !row_r40.important; })("mouseover", function TodoDemoComponent_ng_template_27_Template_a_mouseover_3_listener() { const row_r40 = ctx.row; return row_r40.isMouseOver = true; })("mouseout", function TodoDemoComponent_ng_template_27_Template_a_mouseout_3_listener() { const row_r40 = ctx.row; return row_r40.isMouseOver = false; });
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵtemplate(5, TodoDemoComponent_ng_template_27_i_5_Template, 1, 0, "i", 38);
    i0.ɵɵtemplate(6, TodoDemoComponent_ng_template_27_i_6_Template, 1, 0, "i", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r40 = ctx.row;
    i0.ɵɵpropertyInterpolate("tooltip", i0.ɵɵpipeBind1(1, 4, "todoDemo.management.Delete"));
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("tooltip", i0.ɵɵpipeBind1(4, 6, "todoDemo.management.Important"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", row_r40.important || row_r40.isMouseOver);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r40.important && !row_r40.isMouseOver);
} }
const _c6 = function (a0, a1) { return { "fa-check": a0, "fa-times": a1 }; };
function TodoDemoComponent_form_42_i_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 64);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r49 = i0.ɵɵreference(8);
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
const _c7 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
function TodoDemoComponent_form_42_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 42, 43);
    i0.ɵɵlistener("ngSubmit", function TodoDemoComponent_form_42_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r53); const _r48 = i0.ɵɵreference(1); const _r49 = i0.ɵɵreference(8); const ctx_r52 = i0.ɵɵnextContext(); return _r48.form.valid ? ctx_r52.save() : !_r49.valid && ctx_r52.showErrorAlert("Task name is required", "Please enter a name for the task"); });
    i0.ɵɵelementStart(2, "div", 44);
    i0.ɵɵelementStart(3, "label", 45);
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 46);
    i0.ɵɵelementStart(7, "input", 47, 48);
    i0.ɵɵlistener("ngModelChange", function TodoDemoComponent_form_42_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r53); const ctx_r54 = i0.ɵɵnextContext(); return ctx_r54.taskEdit.name = $event; });
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
    i0.ɵɵlistener("ngModelChange", function TodoDemoComponent_form_42_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r53); const ctx_r55 = i0.ɵɵnextContext(); return ctx_r55.taskEdit.description = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 54);
    i0.ɵɵelement(18, "label", 55);
    i0.ɵɵelementStart(19, "div", 46);
    i0.ɵɵelementStart(20, "div", 28);
    i0.ɵɵelementStart(21, "input", 56);
    i0.ɵɵlistener("ngModelChange", function TodoDemoComponent_form_42_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r53); const ctx_r56 = i0.ɵɵnextContext(); return ctx_r56.taskEdit.important = $event; });
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
    const _r48 = i0.ɵɵreference(1);
    const _r49 = i0.ɵɵreference(8);
    const ctx_r11 = i0.ɵɵnextContext();
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
export class TodoDemoComponent {
    constructor(alertService, translationService, localStorage, authService) {
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
    get currentUserId() {
        if (this.authService.currentUser) {
            this._currentUserId = this.authService.currentUser.id;
        }
        return this._currentUserId;
    }
    set hideCompletedTasks(value) {
        if (value) {
            this.rows = this.rowsCache.filter(r => !r.completed);
        }
        else {
            this.rows = [...this.rowsCache];
        }
        this._hideCompletedTasks = value;
    }
    get hideCompletedTasks() {
        return this._hideCompletedTasks;
    }
    ngOnInit() {
        this.loadingIndicator = true;
        this.fetch((data) => {
            this.refreshDataIndexes(data);
            this.rows = data;
            this.rowsCache = [...data];
            this.isDataLoaded = true;
            setTimeout(() => { this.loadingIndicator = false; }, 1500);
        });
        const gT = (key) => this.translationService.getTranslation(key);
        this.columns = [
            { prop: 'completed', name: '', width: 30, headerTemplate: this.statusHeaderTemplate, cellTemplate: this.statusTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
            { prop: 'name', name: gT('todoDemo.management.Task'), cellTemplate: this.nameTemplate, width: 200 },
            { prop: 'description', name: gT('todoDemo.management.Description'), cellTemplate: this.descriptionTemplate, width: 500 },
            { name: '', width: 80, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
        ];
    }
    ngOnDestroy() {
        this.saveToDisk();
    }
    fetch(cb) {
        let data = this.getFromDisk();
        if (data == null) {
            setTimeout(() => {
                data = this.getFromDisk();
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
    }
    refreshDataIndexes(data) {
        let index = 0;
        for (const i of data) {
            i.$$index = index++;
        }
    }
    onSearchChanged(value) {
        this.rows = this.rowsCache.filter(r => Utilities.searchArray(value, false, r.name, r.description) || value == 'important' && r.important || value == 'not important' && !r.important);
    }
    showErrorAlert(caption, message) {
        this.alertService.showMessage(caption, message, MessageSeverity.error);
    }
    addTask() {
        this.formResetToggle = false;
        setTimeout(() => {
            this.formResetToggle = true;
            this.taskEdit = {};
            this.editorModal.show();
        });
    }
    save() {
        this.rowsCache.splice(0, 0, this.taskEdit);
        this.rows.splice(0, 0, this.taskEdit);
        this.refreshDataIndexes(this.rowsCache);
        this.rows = [...this.rows];
        this.saveToDisk();
        this.editorModal.hide();
    }
    updateValue(event, cell, cellValue, row) {
        this.editing[row.$$index + '-' + cell] = false;
        this.rows[row.$$index][cell] = event.target.value;
        this.rows = [...this.rows];
        this.saveToDisk();
    }
    delete(row) {
        this.alertService.showDialog('Are you sure you want to delete the task?', DialogType.confirm, () => this.deleteHelper(row));
    }
    deleteHelper(row) {
        this.rowsCache = this.rowsCache.filter(item => item !== row);
        this.rows = this.rows.filter(item => item !== row);
        this.saveToDisk();
    }
    getFromDisk() {
        return this.localStorage.getDataObject(`${TodoDemoComponent.DBKeyTodoDemo}:${this.currentUserId}`);
    }
    saveToDisk() {
        if (this.isDataLoaded) {
            this.localStorage.saveSyncedSessionData(this.rowsCache, `${TodoDemoComponent.DBKeyTodoDemo}:${this.currentUserId}`);
        }
    }
}
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
        const _r57 = i0.ɵɵgetCurrentView();
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
        i0.ɵɵlistener("click", function TodoDemoComponent_Template_button_click_38_listener() { i0.ɵɵrestoreView(_r57); const _r10 = i0.ɵɵreference(30); return _r10.hide(); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1kZW1vLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b2RvLWRlbW8vdG9kby1kZW1vLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3RvZG8tZGVtby90b2RvLWRlbW8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBRWhDLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBZSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHNUYsT0FBTyxFQUNILFVBQVUsRUFBRSxlQUFlLEVBQzNCLFNBQVMsRUFDWixNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbUJ0Qyx3QkFBb0M7Ozs7SUFJcEMsK0JBQ0k7SUFBQSxpQ0FDQTtJQURpRixpTkFBMkI7SUFBNUcsaUJBQ0E7SUFBQSw0QkFBd0M7SUFDNUMsaUJBQU07Ozs7SUFGOEIsZUFBZ0M7SUFBaEMsZ0VBQWdDO0lBQWlCLDJDQUEyQjs7OztJQU1oSCxnQ0FDSTtJQUQrSSwrUEFBa0MsT0FBTyxJQUFJLElBQUksS0FBQztJQUNqTSxZQUNKO0lBQUEsaUJBQU87Ozs7O0lBRjRELDhDQUFpQztJQUFDLDZFQUE2QztJQUM5SSxlQUNKO0lBREksMENBQ0o7Ozs7SUFDQSxpQ0FDSjtJQURrRixrVEFBNEIsTUFBTSx5QkFBYztJQUE5SCxpQkFDSjs7O0lBRCtJLGlDQUFlOzs7SUFIMUosb0ZBQ0k7SUFFSixzRkFDSjs7OztJQUpVLGlFQUF1QztJQUd0QyxlQUFzQztJQUF0QyxnRUFBc0M7Ozs7SUFJN0MsZ0NBQ0k7SUFEc0osK1BBQWtDLGNBQWMsSUFBSSxJQUFJLEtBQUM7SUFDL00sWUFDSjtJQUFBLGlCQUFPOzs7OztJQUZtRSw4Q0FBaUM7SUFBQyw2RUFBNkM7SUFDckosZUFDSjtJQURJLDBDQUNKOzs7O0lBQ0EsaUNBQ0o7SUFEeUYsa1RBQTRCLGFBQWEseUJBQWM7SUFBNUksaUJBQ0o7OztJQUQ2SixpQ0FBZTs7O0lBSHhLLG9GQUNJO0lBRUosc0ZBQ0o7Ozs7SUFKVSx3RUFBOEM7SUFHN0MsZUFBNkM7SUFBN0MsdUVBQTZDOzs7SUFPaEQsd0JBQXVFOzs7SUFDdkUsd0JBQTJFOzs7O0lBSC9FLDZCQUFpSjtJQUF0Qix3TkFBcUI7O0lBQUMsd0JBQTJCO0lBQUEsaUJBQUk7SUFDaEwsNkJBQ0k7SUFEMEgsMktBQXdDLGtKQUE4QixJQUFJLElBQWxDLGdKQUFnRSxLQUFLLElBQXJFOztJQUNsSyw4RUFBbUU7SUFDbkUsOEVBQXVFO0lBQzNFLGlCQUFJOzs7SUFKK0MsdUZBQXNEO0lBQ3RELGVBQXlEO0lBQXpELDBGQUF5RDtJQUNyRyxlQUF3QztJQUF4QywrREFBd0M7SUFDeEMsZUFBMEM7SUFBMUMsaUVBQTBDOzs7O0lBNEJ6Qix3QkFBc0o7Ozs7SUFBOUYsNkVBQXNFOzs7SUFDOUgsZ0NBQ0k7SUFBQSxZQUNKOztJQUFBLGlCQUFPOztJQURILGVBQ0o7SUFESSx5RkFDSjs7Ozs7SUFiWixvQ0FLSTtJQUpFLCtTQUMrQix1QkFBdUIsRUFBRSxrQ0FBa0MsS0FBSTtJQUdoRywrQkFDSTtJQUFBLGlDQUFzRDtJQUFBLFlBQXVDOztJQUFBLGlCQUFRO0lBQ3JHLCtCQUNJO0lBQUEscUNBRUE7SUFETyx5TkFBMkI7SUFEbEMsaUJBRUE7SUFBQSx1RUFBa0o7SUFDbEosK0VBQ0k7SUFFUixpQkFBTTtJQUNWLGlCQUFNO0lBRU4sZ0NBQ0k7SUFBQSxrQ0FBNkQ7SUFBQSxhQUE4Qzs7SUFBQSxpQkFBUTtJQUNuSCxnQ0FDSTtJQUFBLGtDQUNKO0lBRDZILGlPQUFrQztJQUEzSixpQkFDSjtJQUFBLGlCQUFNO0lBQ1YsaUJBQU07SUFFTixnQ0FDSTtJQUFBLDZCQUFnRDtJQUNoRCxnQ0FDSTtJQUFBLGdDQUNJO0lBQUEsa0NBQ0E7SUFEb0YsK05BQWdDO0lBQXBILGlCQUNBO0lBQUEsa0NBQWtEO0lBQUEsYUFBMkM7O0lBQUEsaUJBQVE7SUFDekcsaUJBQU07SUFDVixpQkFBTTtJQUNWLGlCQUFNO0lBRU4sZ0NBQ0k7SUFBQSxnQ0FDSTtJQUFBLDBCQUNKO0lBQUEsaUJBQU07SUFDVixpQkFBTTtJQUdOLGdDQUNJO0lBQUEsZ0NBQ0k7SUFBQSxtQ0FBOEM7SUFBQSxhQUF5Qzs7SUFBQSxpQkFBUztJQUNwRyxpQkFBTTtJQUNWLGlCQUFNO0lBQ04sMkJBQTRCO0lBQ2hDLGlCQUFPOzs7OztJQXpDdUQsZUFBdUM7SUFBdkMsNkVBQXVDO0lBRXFCLGVBQXNHO0lBQXRHLGtIQUFzRyxrQ0FBQTtJQUVqTixlQUFtQjtJQUFuQixxQ0FBbUI7SUFDaEIsZUFBc0M7SUFBdEMsb0RBQXNDO0lBT2EsZUFBOEM7SUFBOUMscUZBQThDO0lBRWtCLGVBQWtDO0lBQWxDLHNEQUFrQztJQVFuRSxlQUFnQztJQUFoQyxvREFBZ0M7SUFDbEUsZUFBMkM7SUFBM0MseUVBQTJDO0lBY25ELGVBQXlDO0lBQXpDLHVFQUF5Qzs7QUQxRnZILE1BQU0sT0FBTyxpQkFBaUI7SUFnRTFCLFlBQW9CLFlBQTBCLEVBQVUsa0JBQXlDLEVBQVUsWUFBK0IsRUFBVSxXQUF3QjtRQUF4SixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQTdENUssU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBRXZCLHdCQUFtQixHQUFHLEtBQUssQ0FBQztRQThCNUIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO0lBdUIxQixDQUFDO0lBbERELElBQUksYUFBYTtRQUNiLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7U0FDekQ7UUFFRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUdELElBQUksa0JBQWtCLENBQUMsS0FBYztRQUVqQyxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN4RDthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ25DO1FBR0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBSSxrQkFBa0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDcEMsQ0FBQztJQStCRCxRQUFRO1FBQ0osSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUU3QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBRXpCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDO1FBR0gsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFeEUsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNYLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFO1lBQ3BNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLDBCQUEwQixDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtZQUNuRyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtZQUN4SCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFO1NBQzFJLENBQUM7SUFDTixDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBSUQsS0FBSyxDQUFDLEVBQUU7UUFDSixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFOUIsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2QsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFFWixJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUUxQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7b0JBQ2QsSUFBSSxHQUFHO3dCQUNILEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxnQ0FBZ0MsRUFBRSxXQUFXLEVBQUUsNkdBQTZHLEVBQUU7d0JBQ3hNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSwyQkFBMkIsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFO3dCQUN6Rjs0QkFDSSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLDZEQUE2RCxFQUFFLFdBQVcsRUFBRSxpRkFBaUY7Z0NBQ25NLGlNQUFpTTt5QkFDeE07cUJBQ0osQ0FBQztpQkFDTDtnQkFFRCxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDYixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDWjthQUFNO1lBQ0gsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ1o7SUFDTCxDQUFDO0lBR0Qsa0JBQWtCLENBQUMsSUFBSTtRQUNuQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFZCxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNsQixDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUdELGVBQWUsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLEtBQUssSUFBSSxlQUFlLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUwsQ0FBQztJQUdELGNBQWMsQ0FBQyxPQUFlLEVBQUUsT0FBZTtRQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBR0QsT0FBTztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBRTdCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUU1QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBR0QsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUc7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBR0QsTUFBTSxDQUFDLEdBQUc7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQywyQ0FBMkMsRUFBRSxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoSSxDQUFDO0lBR0QsWUFBWSxDQUFDLEdBQUc7UUFDWixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXO1FBQ1AsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBRUQsVUFBVTtRQUNOLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7U0FDdkg7SUFDTCxDQUFDOztBQWxNc0IsK0JBQWEsR0FBRyxxQkFBcUIsQ0FBQztxR0FEcEQsaUJBQWlCO3lFQUFqQixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDOUI5QiwyQkFDSTtRQUFBLDhCQUNJO1FBQUEsOEJBQ0k7UUFBQSw4QkFDSTtRQUFBLHFDQUE2SDtRQUFqSCxzSEFBZ0IsMkJBQXVCLElBQUM7O1FBQTRELGlCQUFhO1FBQ2pJLGlCQUFNO1FBQ1YsaUJBQU07UUFDTiw4QkFDSTtRQUFBLDZCQUNJO1FBQUEsNkJBQ0k7UUFBQSw0QkFBMkY7UUFBbkQsNklBQWtEO1FBQUMsd0JBQStCO1FBQUMsYUFBbUQ7O1FBQUEsaUJBQUk7UUFDdEwsaUJBQUs7UUFDTCw4QkFDSTtRQUFBLDZCQUE0RDtRQUFwQiwwRkFBUyxhQUFTLElBQUM7UUFBQyx3QkFBMEI7UUFBQyxhQUE2Qzs7UUFBQSxpQkFBSTtRQUM1SSxpQkFBSztRQUNULGlCQUFLO1FBQ1QsaUJBQU07UUFDVixpQkFBTTtRQUNOLHFDQVNnQjtRQUVoQixzSEFDSTtRQUdKLHNIQUNJO1FBTUosc0hBQ0k7UUFNSixzSEFDSTtRQU9KLHNIQUNJO1FBV0osb0NBQ0k7UUFBQSxnQ0FDSTtRQUFBLGdDQUNJO1FBQUEsZ0NBQ0k7UUFBQSwrQkFBbUM7UUFBQSx5QkFBMkI7UUFBQyxhQUF5Qzs7UUFBQSxpQkFBSztRQUM3RyxtQ0FDSTtRQUQ4Qyx3SkFBUyxXQUFrQixJQUFDO1FBQzFFLGlDQUF5QjtRQUFBLHVCQUFPO1FBQUEsaUJBQU87UUFDM0MsaUJBQVM7UUFDYixpQkFBTTtRQUNOLGdDQUNJO1FBQUEseUVBS0k7UUEyQ1IsaUJBQU07UUFDVixpQkFBTTtRQUNWLGlCQUFNO1FBQ1YsaUJBQU07UUFDVixpQkFBTTs7UUE3SCtELGVBQTBEO1FBQTFELDRGQUEwRDtRQUszRyxlQUFtQztRQUFuQyxnREFBbUM7UUFDd0YsZUFBbUQ7UUFBbkQsMkZBQW1EO1FBR3ZGLGVBQTZDO1FBQTdDLHFGQUE2QztRQU1ySSxlQUFxQztRQUFyQyx1REFBcUMsa0JBQUEsaUJBQUEsb0JBQUEsb0JBQUEsd0JBQUEscUNBQUEsdUJBQUE7UUFvRDJCLGdCQUF5QztRQUF6QyxpRkFBeUM7UUFNbEcsZUFBdUI7UUFBdkIsMENBQXVCOztrREQvQ3BDLGlCQUFpQjtjQUw3QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzVDOztrQkEwQ0ksS0FBSzs7a0JBSUwsU0FBUzttQkFBQyxzQkFBc0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUdsRCxTQUFTO21CQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRzVDLFNBQVM7bUJBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRzFDLFNBQVM7bUJBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFHakQsU0FBUzttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUc3QyxTQUFTO21CQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuXG5pbXBvcnQge1xuICAgIERpYWxvZ1R5cGUsIE1lc3NhZ2VTZXZlcml0eSxcbiAgICBVdGlsaXRpZXNcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBBbGVydFNlcnZpY2UsXG4gICAgQXBwVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIExvY2FsU3RvcmVNYW5hZ2VyXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXNlcnZpY2VzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBBdXRoU2VydmljZSxcbiAgICBQZXJtaXNzaW9uLFxufSBmcm9tICdAcG9scHdhcmUvbmd4LW9hdXRoMic7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd0b2RvLWRlbW8nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90b2RvLWRlbW8uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3RvZG8tZGVtby5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRvZG9EZW1vQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgREJLZXlUb2RvRGVtbyA9ICd0b2RvLWRlbW8udG9kb19saXN0JztcblxuICAgIHJvd3MgPSBbXTtcbiAgICByb3dzQ2FjaGUgPSBbXTtcbiAgICBjb2x1bW5zID0gW107XG4gICAgZWRpdGluZyA9IHt9O1xuICAgIHRhc2tFZGl0OiBhbnkgPSB7fTtcbiAgICBpc0RhdGFMb2FkZWQgPSBmYWxzZTtcbiAgICBsb2FkaW5nSW5kaWNhdG9yID0gdHJ1ZTtcbiAgICBmb3JtUmVzZXRUb2dnbGUgPSB0cnVlO1xuICAgIF9jdXJyZW50VXNlcklkOiBzdHJpbmc7XG4gICAgX2hpZGVDb21wbGV0ZWRUYXNrcyA9IGZhbHNlO1xuXG5cbiAgICBnZXQgY3VycmVudFVzZXJJZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRVc2VySWQgPSB0aGlzLmF1dGhTZXJ2aWNlLmN1cnJlbnRVc2VyLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRVc2VySWQ7XG4gICAgfVxuXG5cbiAgICBzZXQgaGlkZUNvbXBsZXRlZFRhc2tzKHZhbHVlOiBib29sZWFuKSB7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLnJvd3NDYWNoZS5maWx0ZXIociA9PiAhci5jb21wbGV0ZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gWy4uLnRoaXMucm93c0NhY2hlXTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5faGlkZUNvbXBsZXRlZFRhc2tzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IGhpZGVDb21wbGV0ZWRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpZGVDb21wbGV0ZWRUYXNrcztcbiAgICB9XG5cblxuICAgIEBJbnB1dCgpXG4gICAgdmVydGljYWxTY3JvbGxiYXIgPSBmYWxzZTtcblxuXG4gICAgQFZpZXdDaGlsZCgnc3RhdHVzSGVhZGVyVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHN0YXR1c0hlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnc3RhdHVzVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHN0YXR1c1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnbmFtZVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBuYW1lVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdkZXNjcmlwdGlvblRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBkZXNjcmlwdGlvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnYWN0aW9uc1RlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBhY3Rpb25zVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdlZGl0b3JNb2RhbCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgZWRpdG9yTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLCBwcml2YXRlIHRyYW5zbGF0aW9uU2VydmljZTogQXBwVHJhbnNsYXRpb25TZXJ2aWNlLCBwcml2YXRlIGxvY2FsU3RvcmFnZTogTG9jYWxTdG9yZU1hbmFnZXIsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XG4gICAgfVxuXG5cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuZmV0Y2goKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaERhdGFJbmRleGVzKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gZGF0YTtcbiAgICAgICAgICAgIHRoaXMucm93c0NhY2hlID0gWy4uLmRhdGFdO1xuICAgICAgICAgICAgdGhpcy5pc0RhdGFMb2FkZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7IH0sIDE1MDApO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIGNvbnN0IGdUID0gKGtleTogc3RyaW5nKSA9PiB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5nZXRUcmFuc2xhdGlvbihrZXkpO1xuXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtcbiAgICAgICAgICAgIHsgcHJvcDogJ2NvbXBsZXRlZCcsIG5hbWU6ICcnLCB3aWR0aDogMzAsIGhlYWRlclRlbXBsYXRlOiB0aGlzLnN0YXR1c0hlYWRlclRlbXBsYXRlLCBjZWxsVGVtcGxhdGU6IHRoaXMuc3RhdHVzVGVtcGxhdGUsIHJlc2l6ZWFibGU6IGZhbHNlLCBjYW5BdXRvUmVzaXplOiBmYWxzZSwgc29ydGFibGU6IGZhbHNlLCBkcmFnZ2FibGU6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHByb3A6ICduYW1lJywgbmFtZTogZ1QoJ3RvZG9EZW1vLm1hbmFnZW1lbnQuVGFzaycpLCBjZWxsVGVtcGxhdGU6IHRoaXMubmFtZVRlbXBsYXRlLCB3aWR0aDogMjAwIH0sXG4gICAgICAgICAgICB7IHByb3A6ICdkZXNjcmlwdGlvbicsIG5hbWU6IGdUKCd0b2RvRGVtby5tYW5hZ2VtZW50LkRlc2NyaXB0aW9uJyksIGNlbGxUZW1wbGF0ZTogdGhpcy5kZXNjcmlwdGlvblRlbXBsYXRlLCB3aWR0aDogNTAwIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICcnLCB3aWR0aDogODAsIGNlbGxUZW1wbGF0ZTogdGhpcy5hY3Rpb25zVGVtcGxhdGUsIHJlc2l6ZWFibGU6IGZhbHNlLCBjYW5BdXRvUmVzaXplOiBmYWxzZSwgc29ydGFibGU6IGZhbHNlLCBkcmFnZ2FibGU6IGZhbHNlIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zYXZlVG9EaXNrKCk7XG4gICAgfVxuXG5cblxuICAgIGZldGNoKGNiKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRGcm9tRGlzaygpO1xuXG4gICAgICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMuZ2V0RnJvbURpc2soKTtcblxuICAgICAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY29tcGxldGVkOiB0cnVlLCBpbXBvcnRhbnQ6IHRydWUsIG5hbWU6ICdDcmVhdGUgdmlzdWFsIHN0dWRpbyBleHRlbnNpb24nLCBkZXNjcmlwdGlvbjogJ0NyZWF0ZSBhIHZpc3VhbCBzdHVkaW8gVlNJWCBleHRlbnNpb24gcGFja2FnZSB0aGF0IHdpbGwgYWRkIHRoaXMgcHJvamVjdCBhcyBhbiBhc3BuZXQtY29yZSBwcm9qZWN0IHRlbXBsYXRlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjb21wbGV0ZWQ6IGZhbHNlLCBpbXBvcnRhbnQ6IHRydWUsIG5hbWU6ICdEbyBhIHF1aWNrIGhvdy10byB3cml0ZXVwJywgZGVzY3JpcHRpb246ICcnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSwgaW1wb3J0YW50OiBmYWxzZSwgbmFtZTogJ0NyZWF0ZSBhc3BuZXQtY29yZS9Bbmd1bGFyOCB0dXRvcmlhbHMgYmFzZWQgb24gdGhpcyBwcm9qZWN0JywgZGVzY3JpcHRpb246ICdDcmVhdGUgdHV0b3JpYWxzIChibG9nL3ZpZGVvL3lvdXR1YmUpIG9uIGhvdyB0byBidWlsZCBhcHBsaWNhdGlvbnMgKGZ1bGwgc3RhY2spJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgdXNpbmcgYXNwbmV0LWNvcmUvQW5ndWxhcjguIFRoZSB0dXRvcmlhbCB3aWxsIGZvY3VzIG9uIGdldHRpbmcgcHJvZHVjdGl2ZSB3aXRoIHRoZSB0ZWNobm9sb2d5IHJpZ2h0IGF3YXkgcmF0aGVyIHRoYW4gdGhlIGRldGFpbHMgb24gaG93IGFuZCB3aHkgdGhleSB3b3JrIHNvIGF1ZGllbmNlIGNhbiBnZXQgb25ib2FyZCBxdWlja2x5LidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2IoZGF0YSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNiKGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZWZyZXNoRGF0YUluZGV4ZXMoZGF0YSkge1xuICAgICAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgICAgIGZvciAoY29uc3QgaSBvZiBkYXRhKSB7XG4gICAgICAgICAgICBpLiQkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvblNlYXJjaENoYW5nZWQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLnJvd3NDYWNoZS5maWx0ZXIociA9PiBVdGlsaXRpZXMuc2VhcmNoQXJyYXkodmFsdWUsIGZhbHNlLCByLm5hbWUsIHIuZGVzY3JpcHRpb24pIHx8IHZhbHVlID09ICdpbXBvcnRhbnQnICYmIHIuaW1wb3J0YW50IHx8IHZhbHVlID09ICdub3QgaW1wb3J0YW50JyAmJiAhci5pbXBvcnRhbnQpO1xuICAgIH1cblxuXG4gICAgc2hvd0Vycm9yQWxlcnQoY2FwdGlvbjogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoY2FwdGlvbiwgbWVzc2FnZSwgTWVzc2FnZVNldmVyaXR5LmVycm9yKTtcbiAgICB9XG5cblxuICAgIGFkZFRhc2soKSB7XG4gICAgICAgIHRoaXMuZm9ybVJlc2V0VG9nZ2xlID0gZmFsc2U7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvcm1SZXNldFRvZ2dsZSA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMudGFza0VkaXQgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yTW9kYWwuc2hvdygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICB0aGlzLnJvd3NDYWNoZS5zcGxpY2UoMCwgMCwgdGhpcy50YXNrRWRpdCk7XG4gICAgICAgIHRoaXMucm93cy5zcGxpY2UoMCwgMCwgdGhpcy50YXNrRWRpdCk7XG4gICAgICAgIHRoaXMucmVmcmVzaERhdGFJbmRleGVzKHRoaXMucm93c0NhY2hlKTtcbiAgICAgICAgdGhpcy5yb3dzID0gWy4uLnRoaXMucm93c107XG5cbiAgICAgICAgdGhpcy5zYXZlVG9EaXNrKCk7XG4gICAgICAgIHRoaXMuZWRpdG9yTW9kYWwuaGlkZSgpO1xuICAgIH1cblxuXG4gICAgdXBkYXRlVmFsdWUoZXZlbnQsIGNlbGwsIGNlbGxWYWx1ZSwgcm93KSB7XG4gICAgICAgIHRoaXMuZWRpdGluZ1tyb3cuJCRpbmRleCArICctJyArIGNlbGxdID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm93c1tyb3cuJCRpbmRleF1bY2VsbF0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMucm93cyA9IFsuLi50aGlzLnJvd3NdO1xuXG4gICAgICAgIHRoaXMuc2F2ZVRvRGlzaygpO1xuICAgIH1cblxuXG4gICAgZGVsZXRlKHJvdykge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93RGlhbG9nKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSB0YXNrPycsIERpYWxvZ1R5cGUuY29uZmlybSwgKCkgPT4gdGhpcy5kZWxldGVIZWxwZXIocm93KSk7XG4gICAgfVxuXG5cbiAgICBkZWxldGVIZWxwZXIocm93KSB7XG4gICAgICAgIHRoaXMucm93c0NhY2hlID0gdGhpcy5yb3dzQ2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gcm93KTtcbiAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5yb3dzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHJvdyk7XG5cbiAgICAgICAgdGhpcy5zYXZlVG9EaXNrKCk7XG4gICAgfVxuXG4gICAgZ2V0RnJvbURpc2soKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsU3RvcmFnZS5nZXREYXRhT2JqZWN0KGAke1RvZG9EZW1vQ29tcG9uZW50LkRCS2V5VG9kb0RlbW99OiR7dGhpcy5jdXJyZW50VXNlcklkfWApO1xuICAgIH1cblxuICAgIHNhdmVUb0Rpc2soKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGF0YUxvYWRlZCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2Uuc2F2ZVN5bmNlZFNlc3Npb25EYXRhKHRoaXMucm93c0NhY2hlLCBgJHtUb2RvRGVtb0NvbXBvbmVudC5EQktleVRvZG9EZW1vfToke3RoaXMuY3VycmVudFVzZXJJZH1gKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIjxkaXY+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBjb250cm9sLWJveFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNlYXJjaC1ib3hcIj5cbiAgICAgICAgICAgICAgICA8c2VhcmNoLWJveCAoc2VhcmNoQ2hhbmdlKT1cIm9uU2VhcmNoQ2hhbmdlZCgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJ7eyd0b2RvRGVtby5tYW5hZ2VtZW50LlNlYXJjaCcgfCB0cmFuc2xhdGV9fVwiPjwvc2VhcmNoLWJveD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgZmxleC1jb2x1bW4gZmxleC1sZy1yb3dcIj5cbiAgICAgICAgICAgICAgICA8bGkgW2NsYXNzLmFjdGl2ZV09XCJoaWRlQ29tcGxldGVkVGFza3NcIiBjbGFzcz1cIm5hdi1pdGVtIHRvb2xiYXJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiamF2YXNjcmlwdDo7XCIgKGNsaWNrKT1cImhpZGVDb21wbGV0ZWRUYXNrcyA9ICFoaWRlQ29tcGxldGVkVGFza3NcIj48aSBjbGFzcz1cImZhIGZhLWV5ZS1zbGFzaFwiPjwvaT4ge3sndG9kb0RlbW8ubWFuYWdlbWVudC5IaWRlQ29tcGxldGVkJyB8IHRyYW5zbGF0ZX19PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gdG9vbGJhcml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiAoY2xpY2spPVwiYWRkVGFzaygpXCI+PGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPiB7eyd0b2RvRGVtby5tYW5hZ2VtZW50LkFkZFRhc2snIHwgdHJhbnNsYXRlfX08L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxuZ3gtZGF0YXRhYmxlIGNsYXNzPVwibWF0ZXJpYWwgY29sb3JlZC1oZWFkZXIgc20gdGFibGUtaG92ZXJcIlxuICAgICAgICAgICAgICAgICAgIFtsb2FkaW5nSW5kaWNhdG9yXT1cImxvYWRpbmdJbmRpY2F0b3JcIlxuICAgICAgICAgICAgICAgICAgIFtyb3dzXT1cInJvd3NcIlxuICAgICAgICAgICAgICAgICAgIFtyb3dIZWlnaHRdPVwiMzVcIlxuICAgICAgICAgICAgICAgICAgIFtoZWFkZXJIZWlnaHRdPVwiMzVcIlxuICAgICAgICAgICAgICAgICAgIFtmb290ZXJIZWlnaHRdPVwiMzVcIlxuICAgICAgICAgICAgICAgICAgIFtjb2x1bW5zXT1cImNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgIFtzY3JvbGxiYXJWXT1cInZlcnRpY2FsU2Nyb2xsYmFyXCJcbiAgICAgICAgICAgICAgICAgICBbY29sdW1uTW9kZV09XCInZm9yY2UnXCI+XG4gICAgPC9uZ3gtZGF0YXRhYmxlPlxuXG4gICAgPG5nLXRlbXBsYXRlICNzdGF0dXNIZWFkZXJUZW1wbGF0ZT5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVjay1zcXVhcmUtb1wiPjwvaT5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPG5nLXRlbXBsYXRlICNzdGF0dXNUZW1wbGF0ZSBsZXQtcm93PVwicm93XCIgbGV0LXZhbHVlPVwidmFsdWVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBhdHRyLm5hbWU9XCJjaGVja2JveGVzLXt7dmFsdWV9fVwiIHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwicm93LmNvbXBsZXRlZFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiPjwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctdGVtcGxhdGUgI25hbWVUZW1wbGF0ZSBsZXQtcm93PVwicm93XCIgbGV0LXZhbHVlPVwidmFsdWVcIj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCIhZWRpdGluZ1tyb3cuJCRpbmRleCArICctbmFtZSddXCIgY2xhc3M9XCJpbmxpbmUtbGFiZWxcIiBbY2xhc3MuY29tcGxldGVkXT1cInJvdy5jb21wbGV0ZWRcIiBhdHRyLnRpdGxlPVwiRG91YmxlIGNsaWNrIHRvIGVkaXQgLSB7e3ZhbHVlfX1cIiAoZGJsY2xpY2spPVwiZWRpdGluZ1tyb3cuJCRpbmRleCArICctbmFtZSddID0gdHJ1ZVwiPlxuICAgICAgICAgICAge3t2YWx1ZX19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGlucHV0ICpuZ0lmPVwiZWRpdGluZ1tyb3cuJCRpbmRleCArICctbmFtZSddXCIgY2xhc3M9XCJpbmxpbmUtZWRpdG9yXCIgYXV0b2ZvY3VzIChibHVyKT1cInVwZGF0ZVZhbHVlKCRldmVudCwgJ25hbWUnLCB2YWx1ZSwgcm93KVwiIHR5cGU9XCJ0ZXh0XCIgW3ZhbHVlXT1cInZhbHVlXCIgLz5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPG5nLXRlbXBsYXRlICNkZXNjcmlwdGlvblRlbXBsYXRlIGxldC1yb3c9XCJyb3dcIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIiFlZGl0aW5nW3Jvdy4kJGluZGV4ICsgJy1kZXNjcmlwdGlvbiddXCIgY2xhc3M9XCJpbmxpbmUtbGFiZWxcIiBbY2xhc3MuY29tcGxldGVkXT1cInJvdy5jb21wbGV0ZWRcIiBhdHRyLnRpdGxlPVwiRG91YmxlIGNsaWNrIHRvIGVkaXQgLSB7e3ZhbHVlfX1cIiAoZGJsY2xpY2spPVwiZWRpdGluZ1tyb3cuJCRpbmRleCArICctZGVzY3JpcHRpb24nXSA9IHRydWVcIj5cbiAgICAgICAgICAgIHt7dmFsdWV9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxpbnB1dCAqbmdJZj1cImVkaXRpbmdbcm93LiQkaW5kZXggKyAnLWRlc2NyaXB0aW9uJ11cIiBjbGFzcz1cImlubGluZS1lZGl0b3JcIiBhdXRvZm9jdXMgKGJsdXIpPVwidXBkYXRlVmFsdWUoJGV2ZW50LCAnZGVzY3JpcHRpb24nLCB2YWx1ZSwgcm93KVwiIHR5cGU9XCJ0ZXh0XCIgW3ZhbHVlXT1cInZhbHVlXCIgLz5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG5cbiAgICA8bmctdGVtcGxhdGUgI2FjdGlvbnNUZW1wbGF0ZSBsZXQtcm93PVwicm93XCI+XG4gICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiB0b29sdGlwPVwie3sndG9kb0RlbW8ubWFuYWdlbWVudC5EZWxldGUnIHwgdHJhbnNsYXRlfX1cIiBjb250YWluZXI9XCJib2R5XCIgKGNsaWNrKT1cImRlbGV0ZShyb3cpXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT48L2E+XG4gICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiB0b29sdGlwPVwie3sndG9kb0RlbW8ubWFuYWdlbWVudC5JbXBvcnRhbnQnIHwgdHJhbnNsYXRlfX1cIiBjb250YWluZXI9XCJib2R5XCIgKGNsaWNrKT1cInJvdy5pbXBvcnRhbnQgPSAhcm93LmltcG9ydGFudFwiIChtb3VzZW92ZXIpPVwicm93LmlzTW91c2VPdmVyPXRydWVcIiAobW91c2VvdXQpPVwicm93LmlzTW91c2VPdmVyPWZhbHNlXCI+XG4gICAgICAgICAgICA8aSAqbmdJZj1cInJvdy5pbXBvcnRhbnQgfHwgcm93LmlzTW91c2VPdmVyXCIgY2xhc3M9XCJmYSBmYS1ib29rbWFya1wiPjwvaT5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiIXJvdy5pbXBvcnRhbnQgJiYgIXJvdy5pc01vdXNlT3ZlclwiIGNsYXNzPVwiZmEgZmEtYm9va21hcmstb1wiPjwvaT5cbiAgICAgICAgPC9hPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cblxuXG5cblxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCIgYnNNb2RhbCAjZWRpdG9yTW9kYWw9XCJicy1tb2RhbFwiIHRhYmluZGV4PVwiLTFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlIGZsb2F0LWxlZnRcIj48aSBjbGFzcz1cImZhIGZhLXRhc2tzXCI+PC9pPiB7eyd0b2RvRGVtby5lZGl0b3IuTmV3VGFzaycgfCB0cmFuc2xhdGV9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiB0aXRsZT1cIkNsb3NlXCIgKGNsaWNrKT1cImVkaXRvck1vZGFsLmhpZGUoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gKm5nSWY9XCJmb3JtUmVzZXRUb2dnbGVcIiBuYW1lPVwidGFza0VkaXRvckZvcm1cIiAjZj1cIm5nRm9ybVwiIG5vdmFsaWRhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKG5nU3VibWl0KT1cImYuZm9ybS52YWxpZCA/IHNhdmUoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgKCF0YXNrTmFtZS52YWxpZCAmJiBzaG93RXJyb3JBbGVydCgnVGFzayBuYW1lIGlzIHJlcXVpcmVkJywgJ1BsZWFzZSBlbnRlciBhIG5hbWUgZm9yIHRoZSB0YXNrJykpO1wiPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvdyBoYXMtZmVlZGJhY2staWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1mb3JtLWxhYmVsIGNvbC1tZC0zXCIgZm9yPVwidGFza05hbWVcIj57eyd0b2RvRGVtby5lZGl0b3IuTmFtZScgfCB0cmFuc2xhdGV9fTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYXV0b2ZvY3VzIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0YXNrTmFtZVwiIG5hbWU9XCJ0YXNrTmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGFzayBuYW1lXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbbmdDbGFzc109XCJ7J2lzLXZhbGlkJzogZi5zdWJtaXR0ZWQgJiYgdGFza05hbWUudmFsaWQsICdpcy1pbnZhbGlkJyA6IGYuc3VibWl0dGVkICYmICF0YXNrTmFtZS52YWxpZH1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ0YXNrRWRpdC5uYW1lXCIgI3Rhc2tOYW1lPVwibmdNb2RlbFwiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpICpuZ0lmPVwiZi5zdWJtaXR0ZWRcIiBjbGFzcz1cImZhIGZvcm0tY29udHJvbC1mZWVkYmFja1wiIFtuZ0NsYXNzXT1cInsnZmEtY2hlY2snOiB0YXNrTmFtZS52YWxpZCwgJ2ZhLXRpbWVzJyA6ICF0YXNrTmFtZS52YWxpZH1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZi5zdWJtaXR0ZWQgJiYgIXRhc2tOYW1lLnZhbGlkXCIgY2xhc3M9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyd0b2RvRGVtby5lZGl0b3IuVGFza05hbWVSZXF1aXJlZCcgfCB0cmFuc2xhdGV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93IGRlc2NyaXB0aW9uLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbCBjb2wtbWQtM1wiIGZvcj1cInRhc2tEZXNjcmlwdGlvblwiPnt7J3RvZG9EZW1vLmVkaXRvci5EZXNjcmlwdGlvbicgfCB0cmFuc2xhdGV9fTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2tEZXNjcmlwdGlvblwiIG5hbWU9XCJ0YXNrRGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRhc2sgZGVzY3JpcHRpb25cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwidGFza0VkaXQuZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbCBjb2wtbWQtM1wiPiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwiaXNJbXBvcnRhbnRcIiBuYW1lPVwiaXNJbXBvcnRhbnRcIiB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cInRhc2tFZGl0LmltcG9ydGFudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlzSW1wb3J0YW50XCIgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCI+e3sndG9kb0RlbW8uZWRpdG9yLkltcG9ydGFudCcgfCB0cmFuc2xhdGV9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzcz1cImVkaXQtbGFzdC1zZXBhcmF0b3ItaHJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgYWN0aW9uQnRuLWZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj57eyd0b2RvRGVtby5lZGl0b3IuQWRkVGFzaycgfCB0cmFuc2xhdGV9fTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+Il19