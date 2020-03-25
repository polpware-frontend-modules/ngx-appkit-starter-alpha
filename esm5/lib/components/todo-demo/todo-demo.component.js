/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/todo-demo/todo-demo.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { DialogType, MessageSeverity, Utilities } from '@polpware/ngx-appkit-contracts-alpha';
import { AlertService, AppTranslationService, LocalStoreManager } from '@polpware/ngx-appkit-services-alpha';
import { AuthService, } from '@polpware/ngx-oauth2';
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
        get: /**
         * @return {?}
         */
        function () {
            if (this.authService.currentUser) {
                this._currentUserId = this.authService.currentUser.id;
            }
            return this._currentUserId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TodoDemoComponent.prototype, "hideCompletedTasks", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hideCompletedTasks;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.rows = this.rowsCache.filter((/**
                 * @param {?} r
                 * @return {?}
                 */
                function (r) { return !r.completed; }));
            }
            else {
                this.rows = tslib_1.__spread(this.rowsCache);
            }
            this._hideCompletedTasks = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TodoDemoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loadingIndicator = true;
        this.fetch((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.refreshDataIndexes(data);
            _this.rows = data;
            _this.rowsCache = tslib_1.__spread(data);
            _this.isDataLoaded = true;
            setTimeout((/**
             * @return {?}
             */
            function () { _this.loadingIndicator = false; }), 1500);
        }));
        /** @type {?} */
        var gT = (/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return _this.translationService.getTranslation(key); });
        this.columns = [
            { prop: 'completed', name: '', width: 30, headerTemplate: this.statusHeaderTemplate, cellTemplate: this.statusTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
            { prop: 'name', name: gT('todoDemo.management.Task'), cellTemplate: this.nameTemplate, width: 200 },
            { prop: 'description', name: gT('todoDemo.management.Description'), cellTemplate: this.descriptionTemplate, width: 500 },
            { name: '', width: 80, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
        ];
    };
    /**
     * @return {?}
     */
    TodoDemoComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.saveToDisk();
    };
    /**
     * @param {?} cb
     * @return {?}
     */
    TodoDemoComponent.prototype.fetch = /**
     * @param {?} cb
     * @return {?}
     */
    function (cb) {
        var _this = this;
        /** @type {?} */
        var data = this.getFromDisk();
        if (data == null) {
            setTimeout((/**
             * @return {?}
             */
            function () {
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
            }), 1000);
        }
        else {
            cb(data);
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    TodoDemoComponent.prototype.refreshDataIndexes = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var e_1, _a;
        /** @type {?} */
        var index = 0;
        try {
            for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    TodoDemoComponent.prototype.onSearchChanged = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.rows = this.rowsCache.filter((/**
         * @param {?} r
         * @return {?}
         */
        function (r) { return Utilities.searchArray(value, false, r.name, r.description) || value == 'important' && r.important || value == 'not important' && !r.important; }));
    };
    /**
     * @param {?} caption
     * @param {?} message
     * @return {?}
     */
    TodoDemoComponent.prototype.showErrorAlert = /**
     * @param {?} caption
     * @param {?} message
     * @return {?}
     */
    function (caption, message) {
        this.alertService.showMessage(caption, message, MessageSeverity.error);
    };
    /**
     * @return {?}
     */
    TodoDemoComponent.prototype.addTask = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formResetToggle = false;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.formResetToggle = true;
            _this.taskEdit = {};
            _this.editorModal.show();
        }));
    };
    /**
     * @return {?}
     */
    TodoDemoComponent.prototype.save = /**
     * @return {?}
     */
    function () {
        this.rowsCache.splice(0, 0, this.taskEdit);
        this.rows.splice(0, 0, this.taskEdit);
        this.refreshDataIndexes(this.rowsCache);
        this.rows = tslib_1.__spread(this.rows);
        this.saveToDisk();
        this.editorModal.hide();
    };
    /**
     * @param {?} event
     * @param {?} cell
     * @param {?} cellValue
     * @param {?} row
     * @return {?}
     */
    TodoDemoComponent.prototype.updateValue = /**
     * @param {?} event
     * @param {?} cell
     * @param {?} cellValue
     * @param {?} row
     * @return {?}
     */
    function (event, cell, cellValue, row) {
        this.editing[row.$$index + '-' + cell] = false;
        this.rows[row.$$index][cell] = event.target.value;
        this.rows = tslib_1.__spread(this.rows);
        this.saveToDisk();
    };
    /**
     * @param {?} row
     * @return {?}
     */
    TodoDemoComponent.prototype.delete = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to delete the task?', DialogType.confirm, (/**
         * @return {?}
         */
        function () { return _this.deleteHelper(row); }));
    };
    /**
     * @param {?} row
     * @return {?}
     */
    TodoDemoComponent.prototype.deleteHelper = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.rowsCache = this.rowsCache.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item !== row; }));
        this.rows = this.rows.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item !== row; }));
        this.saveToDisk();
    };
    /**
     * @return {?}
     */
    TodoDemoComponent.prototype.getFromDisk = /**
     * @return {?}
     */
    function () {
        return this.localStorage.getDataObject(TodoDemoComponent.DBKeyTodoDemo + ":" + this.currentUserId);
    };
    /**
     * @return {?}
     */
    TodoDemoComponent.prototype.saveToDisk = /**
     * @return {?}
     */
    function () {
        if (this.isDataLoaded) {
            this.localStorage.saveSyncedSessionData(this.rowsCache, TodoDemoComponent.DBKeyTodoDemo + ":" + this.currentUserId);
        }
    };
    TodoDemoComponent.DBKeyTodoDemo = 'todo-demo.todo_list';
    TodoDemoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'todo-demo',
                    template: "<div>\n    <div class=\"row control-box\">\n        <div class=\"col-lg-8\">\n            <div class=\"form-group search-box\">\n                <search-box (searchChange)=\"onSearchChanged($event)\" placeholder=\"{{'todoDemo.management.Search' | translate}}\"></search-box>\n            </div>\n        </div>\n        <div class=\"col-lg-4\">\n            <ul class=\"nav flex-column flex-lg-row\">\n                <li [class.active]=\"hideCompletedTasks\" class=\"nav-item toolbaritem\">\n                    <a class=\"nav-link\" href=\"javascript:;\" (click)=\"hideCompletedTasks = !hideCompletedTasks\"><i class=\"fa fa-eye-slash\"></i> {{'todoDemo.management.HideCompleted' | translate}}</a>\n                </li>\n                <li class=\"nav-item toolbaritem\">\n                    <a class=\"nav-link\" href=\"javascript:;\" (click)=\"addTask()\"><i class=\"fa fa-plus\"></i> {{'todoDemo.management.AddTask' | translate}}</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <ngx-datatable class=\"material colored-header sm table-hover\"\n                   [loadingIndicator]=\"loadingIndicator\"\n                   [rows]=\"rows\"\n                   [rowHeight]=\"35\"\n                   [headerHeight]=\"35\"\n                   [footerHeight]=\"35\"\n                   [columns]=\"columns\"\n                   [scrollbarV]=\"verticalScrollbar\"\n                   [columnMode]=\"'force'\">\n    </ngx-datatable>\n\n    <ng-template #statusHeaderTemplate>\n        <i class=\"fa fa-check-square-o\"></i>\n    </ng-template>\n\n    <ng-template #statusTemplate let-row=\"row\" let-value=\"value\">\n        <div class=\"form-check\">\n            <input class=\"form-check-input\" attr.name=\"checkboxes-{{value}}\" type=\"checkbox\" [(ngModel)]=\"row.completed\">\n            <label class=\"form-check-label\"></label>\n        </div>\n    </ng-template>\n\n    <ng-template #nameTemplate let-row=\"row\" let-value=\"value\">\n        <span *ngIf=\"!editing[row.$$index + '-name']\" class=\"inline-label\" [class.completed]=\"row.completed\" attr.title=\"Double click to edit - {{value}}\" (dblclick)=\"editing[row.$$index + '-name'] = true\">\n            {{value}}\n        </span>\n        <input *ngIf=\"editing[row.$$index + '-name']\" class=\"inline-editor\" autofocus (blur)=\"updateValue($event, 'name', value, row)\" type=\"text\" [value]=\"value\" />\n    </ng-template>\n\n    <ng-template #descriptionTemplate let-row=\"row\" let-value=\"value\">\n        <span *ngIf=\"!editing[row.$$index + '-description']\" class=\"inline-label\" [class.completed]=\"row.completed\" attr.title=\"Double click to edit - {{value}}\" (dblclick)=\"editing[row.$$index + '-description'] = true\">\n            {{value}}\n        </span>\n        <input *ngIf=\"editing[row.$$index + '-description']\" class=\"inline-editor\" autofocus (blur)=\"updateValue($event, 'description', value, row)\" type=\"text\" [value]=\"value\" />\n    </ng-template>\n\n\n    <ng-template #actionsTemplate let-row=\"row\">\n        <a class=\"btn btn-link btn-sm\" href=\"javascript:;\" tooltip=\"{{'todoDemo.management.Delete' | translate}}\" container=\"body\" (click)=\"delete(row)\"><i class=\"fa fa-times\"></i></a>\n        <a class=\"btn btn-link btn-sm\" href=\"javascript:;\" tooltip=\"{{'todoDemo.management.Important' | translate}}\" container=\"body\" (click)=\"row.important = !row.important\" (mouseover)=\"row.isMouseOver=true\" (mouseout)=\"row.isMouseOver=false\">\n            <i *ngIf=\"row.important || row.isMouseOver\" class=\"fa fa-bookmark\"></i>\n            <i *ngIf=\"!row.important && !row.isMouseOver\" class=\"fa fa-bookmark-o\"></i>\n        </a>\n    </ng-template>\n\n\n\n\n\n    <div class=\"modal fade\" bsModal #editorModal=\"bs-modal\" tabindex=\"-1\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title float-left\"><i class=\"fa fa-tasks\"></i> {{'todoDemo.editor.NewTask' | translate}}</h4>\n                    <button type=\"button\" class=\"close\" title=\"Close\" (click)=\"editorModal.hide()\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form *ngIf=\"formResetToggle\" name=\"taskEditorForm\" #f=\"ngForm\" novalidate\n                          (ngSubmit)=\"f.form.valid ? save() :\n                      (!taskName.valid && showErrorAlert('Task name is required', 'Please enter a name for the task'));\">\n\n\n                        <div class=\"form-group row has-feedback-icon\">\n                            <label class=\"col-form-label col-md-3\" for=\"taskName\">{{'todoDemo.editor.Name' | translate}}:</label>\n                            <div class=\"col-md-9\">\n                                <input autofocus type=\"text\" id=\"taskName\" name=\"taskName\" placeholder=\"Enter task name\" class=\"form-control\" [ngClass]=\"{'is-valid': f.submitted && taskName.valid, 'is-invalid' : f.submitted && !taskName.valid}\"\n                                       [(ngModel)]=\"taskEdit.name\" #taskName=\"ngModel\" required />\n                                <i *ngIf=\"f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': taskName.valid, 'fa-times' : !taskName.valid}\" aria-hidden=\"true\"></i>\n                                <span *ngIf=\"f.submitted && !taskName.valid\" class=\"invalid-feedback\">\n                                    {{'todoDemo.editor.TaskNameRequired' | translate}}\n                                </span>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row description-form-group\">\n                            <label class=\"col-form-label col-md-3\" for=\"taskDescription\">{{'todoDemo.editor.Description' | translate}}:</label>\n                            <div class=\"col-md-9\">\n                                <input type=\"text\" id=\"taskDescription\" name=\"taskDescription\" placeholder=\"Enter task description\" class=\"form-control\" [(ngModel)]=\"taskEdit.description\" />\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <label class=\"col-form-label col-md-3\"> </label>\n                            <div class=\"col-md-9\">\n                                <div class=\"form-check\">\n                                    <input class=\"form-check-input\" id=\"isImportant\" name=\"isImportant\" type=\"checkbox\" [(ngModel)]=\"taskEdit.important\">\n                                    <label for=\"isImportant\" class=\"form-check-label\">{{'todoDemo.editor.Important' | translate}}</label>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <hr class=\"edit-last-separator-hr\" />\n                            </div>\n                        </div>\n\n\n                        <div class=\"form-group actionBtn-form-group\">\n                            <div class=\"float-right\">\n                                <button type=\"submit\" class=\"btn btn-primary\">{{'todoDemo.editor.AddTask' | translate}}</button>\n                            </div>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>",
                    styles: ["input.form-control{border-left-width:5px}.control-box{margin-bottom:5px}.search-box{margin:0}.nav-item.toolbaritem a{padding-top:3px;padding-bottom:3px;min-width:100px;font-weight:700}.completed{text-decoration:line-through}.form-check{margin:0}.inline-label{width:100%;min-height:1rem;display:inline-block}.inline-editor{width:100%}.description-form-group{margin-bottom:5px}.actionBtn-form-group{margin:0}.edit-last-separator-hr{margin:10px 0}"]
                }] }
    ];
    /** @nocollapse */
    TodoDemoComponent.ctorParameters = function () { return [
        { type: AlertService },
        { type: AppTranslationService },
        { type: LocalStoreManager },
        { type: AuthService }
    ]; };
    TodoDemoComponent.propDecorators = {
        verticalScrollbar: [{ type: Input }],
        statusHeaderTemplate: [{ type: ViewChild, args: ['statusHeaderTemplate', { static: true },] }],
        statusTemplate: [{ type: ViewChild, args: ['statusTemplate', { static: true },] }],
        nameTemplate: [{ type: ViewChild, args: ['nameTemplate', { static: true },] }],
        descriptionTemplate: [{ type: ViewChild, args: ['descriptionTemplate', { static: true },] }],
        actionsTemplate: [{ type: ViewChild, args: ['actionsTemplate', { static: true },] }],
        editorModal: [{ type: ViewChild, args: ['editorModal', { static: true },] }]
    };
    return TodoDemoComponent;
}());
export { TodoDemoComponent };
if (false) {
    /** @type {?} */
    TodoDemoComponent.DBKeyTodoDemo;
    /** @type {?} */
    TodoDemoComponent.prototype.rows;
    /** @type {?} */
    TodoDemoComponent.prototype.rowsCache;
    /** @type {?} */
    TodoDemoComponent.prototype.columns;
    /** @type {?} */
    TodoDemoComponent.prototype.editing;
    /** @type {?} */
    TodoDemoComponent.prototype.taskEdit;
    /** @type {?} */
    TodoDemoComponent.prototype.isDataLoaded;
    /** @type {?} */
    TodoDemoComponent.prototype.loadingIndicator;
    /** @type {?} */
    TodoDemoComponent.prototype.formResetToggle;
    /** @type {?} */
    TodoDemoComponent.prototype._currentUserId;
    /** @type {?} */
    TodoDemoComponent.prototype._hideCompletedTasks;
    /** @type {?} */
    TodoDemoComponent.prototype.verticalScrollbar;
    /** @type {?} */
    TodoDemoComponent.prototype.statusHeaderTemplate;
    /** @type {?} */
    TodoDemoComponent.prototype.statusTemplate;
    /** @type {?} */
    TodoDemoComponent.prototype.nameTemplate;
    /** @type {?} */
    TodoDemoComponent.prototype.descriptionTemplate;
    /** @type {?} */
    TodoDemoComponent.prototype.actionsTemplate;
    /** @type {?} */
    TodoDemoComponent.prototype.editorModal;
    /**
     * @type {?}
     * @private
     */
    TodoDemoComponent.prototype.alertService;
    /**
     * @type {?}
     * @private
     */
    TodoDemoComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    TodoDemoComponent.prototype.localStorage;
    /**
     * @type {?}
     * @private
     */
    TodoDemoComponent.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1kZW1vLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b2RvLWRlbW8vdG9kby1kZW1vLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXJELE9BQU8sRUFDSCxVQUFVLEVBQUUsZUFBZSxFQUMzQixTQUFTLEVBQ1osTUFBTSxzQ0FBc0MsQ0FBQztBQUU5QyxPQUFPLEVBQ0gsWUFBWSxFQUNaLHFCQUFxQixFQUNyQixpQkFBaUIsRUFDcEIsTUFBTSxxQ0FBcUMsQ0FBQztBQUU3QyxPQUFPLEVBQ0gsV0FBVyxHQUVkLE1BQU0sc0JBQXNCLENBQUM7QUFHOUI7SUFxRUksMkJBQW9CLFlBQTBCLEVBQVUsa0JBQXlDLEVBQVUsWUFBK0IsRUFBVSxXQUF3QjtRQUF4SixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQTdENUssU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBRXZCLHdCQUFtQixHQUFHLEtBQUssQ0FBQztRQThCNUIs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Q3JCLDZDQUF3Qjs7SUFDeEIsNENBQXVCOztJQUN2QiwyQ0FBdUI7O0lBQ3ZCLGdEQUE0Qjs7SUE2QjVCLDhDQUMwQjs7SUFHMUIsaURBQ3VDOztJQUV2QywyQ0FDaUM7O0lBRWpDLHlDQUMrQjs7SUFFL0IsZ0RBQ3NDOztJQUV0Qyw0Q0FDa0M7O0lBRWxDLHdDQUM0Qjs7Ozs7SUFHaEIseUNBQWtDOzs7OztJQUFFLCtDQUFpRDs7Ozs7SUFBRSx5Q0FBdUM7Ozs7O0lBQUUsd0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcblxuaW1wb3J0IHtcbiAgICBEaWFsb2dUeXBlLCBNZXNzYWdlU2V2ZXJpdHksXG4gICAgVXRpbGl0aWVzXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgQWxlcnRTZXJ2aWNlLFxuICAgIEFwcFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBMb2NhbFN0b3JlTWFuYWdlclxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1zZXJ2aWNlcy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgQXV0aFNlcnZpY2UsXG4gICAgUGVybWlzc2lvbixcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1vYXV0aDInO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndG9kby1kZW1vJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdG9kby1kZW1vLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi90b2RvLWRlbW8uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUb2RvRGVtb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERCS2V5VG9kb0RlbW8gPSAndG9kby1kZW1vLnRvZG9fbGlzdCc7XG5cbiAgICByb3dzID0gW107XG4gICAgcm93c0NhY2hlID0gW107XG4gICAgY29sdW1ucyA9IFtdO1xuICAgIGVkaXRpbmcgPSB7fTtcbiAgICB0YXNrRWRpdDogYW55ID0ge307XG4gICAgaXNEYXRhTG9hZGVkID0gZmFsc2U7XG4gICAgbG9hZGluZ0luZGljYXRvciA9IHRydWU7XG4gICAgZm9ybVJlc2V0VG9nZ2xlID0gdHJ1ZTtcbiAgICBfY3VycmVudFVzZXJJZDogc3RyaW5nO1xuICAgIF9oaWRlQ29tcGxldGVkVGFza3MgPSBmYWxzZTtcblxuXG4gICAgZ2V0IGN1cnJlbnRVc2VySWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50VXNlcklkID0gdGhpcy5hdXRoU2VydmljZS5jdXJyZW50VXNlci5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50VXNlcklkO1xuICAgIH1cblxuXG4gICAgc2V0IGhpZGVDb21wbGV0ZWRUYXNrcyh2YWx1ZTogYm9vbGVhbikge1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5yb3dzQ2FjaGUuZmlsdGVyKHIgPT4gIXIuY29tcGxldGVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucm93cyA9IFsuLi50aGlzLnJvd3NDYWNoZV07XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuX2hpZGVDb21wbGV0ZWRUYXNrcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBoaWRlQ29tcGxldGVkVGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oaWRlQ29tcGxldGVkVGFza3M7XG4gICAgfVxuXG5cbiAgICBASW5wdXQoKVxuICAgIHZlcnRpY2FsU2Nyb2xsYmFyID0gZmFsc2U7XG5cblxuICAgIEBWaWV3Q2hpbGQoJ3N0YXR1c0hlYWRlclRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBzdGF0dXNIZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ3N0YXR1c1RlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBzdGF0dXNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ25hbWVUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgbmFtZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnZGVzY3JpcHRpb25UZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgZGVzY3JpcHRpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2FjdGlvbnNUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgYWN0aW9uc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnZWRpdG9yTW9kYWwnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGVkaXRvck1vZGFsOiBNb2RhbERpcmVjdGl2ZTtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSwgcHJpdmF0ZSB0cmFuc2xhdGlvblNlcnZpY2U6IEFwcFRyYW5zbGF0aW9uU2VydmljZSwgcHJpdmF0ZSBsb2NhbFN0b3JhZ2U6IExvY2FsU3RvcmVNYW5hZ2VyLCBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xuICAgIH1cblxuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmZldGNoKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hEYXRhSW5kZXhlcyhkYXRhKTtcbiAgICAgICAgICAgIHRoaXMucm93cyA9IGRhdGE7XG4gICAgICAgICAgICB0aGlzLnJvd3NDYWNoZSA9IFsuLi5kYXRhXTtcbiAgICAgICAgICAgIHRoaXMuaXNEYXRhTG9hZGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlOyB9LCAxNTAwKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICBjb25zdCBnVCA9IChrZXk6IHN0cmluZykgPT4gdGhpcy50cmFuc2xhdGlvblNlcnZpY2UuZ2V0VHJhbnNsYXRpb24oa2V5KTtcblxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXG4gICAgICAgICAgICB7IHByb3A6ICdjb21wbGV0ZWQnLCBuYW1lOiAnJywgd2lkdGg6IDMwLCBoZWFkZXJUZW1wbGF0ZTogdGhpcy5zdGF0dXNIZWFkZXJUZW1wbGF0ZSwgY2VsbFRlbXBsYXRlOiB0aGlzLnN0YXR1c1RlbXBsYXRlLCByZXNpemVhYmxlOiBmYWxzZSwgY2FuQXV0b1Jlc2l6ZTogZmFsc2UsIHNvcnRhYmxlOiBmYWxzZSwgZHJhZ2dhYmxlOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBwcm9wOiAnbmFtZScsIG5hbWU6IGdUKCd0b2RvRGVtby5tYW5hZ2VtZW50LlRhc2snKSwgY2VsbFRlbXBsYXRlOiB0aGlzLm5hbWVUZW1wbGF0ZSwgd2lkdGg6IDIwMCB9LFxuICAgICAgICAgICAgeyBwcm9wOiAnZGVzY3JpcHRpb24nLCBuYW1lOiBnVCgndG9kb0RlbW8ubWFuYWdlbWVudC5EZXNjcmlwdGlvbicpLCBjZWxsVGVtcGxhdGU6IHRoaXMuZGVzY3JpcHRpb25UZW1wbGF0ZSwgd2lkdGg6IDUwMCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnJywgd2lkdGg6IDgwLCBjZWxsVGVtcGxhdGU6IHRoaXMuYWN0aW9uc1RlbXBsYXRlLCByZXNpemVhYmxlOiBmYWxzZSwgY2FuQXV0b1Jlc2l6ZTogZmFsc2UsIHNvcnRhYmxlOiBmYWxzZSwgZHJhZ2dhYmxlOiBmYWxzZSB9XG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc2F2ZVRvRGlzaygpO1xuICAgIH1cblxuXG5cbiAgICBmZXRjaChjYikge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0RnJvbURpc2soKTtcblxuICAgICAgICBpZiAoZGF0YSA9PSBudWxsKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLmdldEZyb21EaXNrKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNvbXBsZXRlZDogdHJ1ZSwgaW1wb3J0YW50OiB0cnVlLCBuYW1lOiAnQ3JlYXRlIHZpc3VhbCBzdHVkaW8gZXh0ZW5zaW9uJywgZGVzY3JpcHRpb246ICdDcmVhdGUgYSB2aXN1YWwgc3R1ZGlvIFZTSVggZXh0ZW5zaW9uIHBhY2thZ2UgdGhhdCB3aWxsIGFkZCB0aGlzIHByb2plY3QgYXMgYW4gYXNwbmV0LWNvcmUgcHJvamVjdCB0ZW1wbGF0ZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY29tcGxldGVkOiBmYWxzZSwgaW1wb3J0YW50OiB0cnVlLCBuYW1lOiAnRG8gYSBxdWljayBob3ctdG8gd3JpdGV1cCcsIGRlc2NyaXB0aW9uOiAnJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsIGltcG9ydGFudDogZmFsc2UsIG5hbWU6ICdDcmVhdGUgYXNwbmV0LWNvcmUvQW5ndWxhcjggdHV0b3JpYWxzIGJhc2VkIG9uIHRoaXMgcHJvamVjdCcsIGRlc2NyaXB0aW9uOiAnQ3JlYXRlIHR1dG9yaWFscyAoYmxvZy92aWRlby95b3V0dWJlKSBvbiBob3cgdG8gYnVpbGQgYXBwbGljYXRpb25zIChmdWxsIHN0YWNrKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIHVzaW5nIGFzcG5ldC1jb3JlL0FuZ3VsYXI4LiBUaGUgdHV0b3JpYWwgd2lsbCBmb2N1cyBvbiBnZXR0aW5nIHByb2R1Y3RpdmUgd2l0aCB0aGUgdGVjaG5vbG9neSByaWdodCBhd2F5IHJhdGhlciB0aGFuIHRoZSBkZXRhaWxzIG9uIGhvdyBhbmQgd2h5IHRoZXkgd29yayBzbyBhdWRpZW5jZSBjYW4gZ2V0IG9uYm9hcmQgcXVpY2tseS4nXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNiKGRhdGEpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYihkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVmcmVzaERhdGFJbmRleGVzKGRhdGEpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcblxuICAgICAgICBmb3IgKGNvbnN0IGkgb2YgZGF0YSkge1xuICAgICAgICAgICAgaS4kJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25TZWFyY2hDaGFuZ2VkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5yb3dzQ2FjaGUuZmlsdGVyKHIgPT4gVXRpbGl0aWVzLnNlYXJjaEFycmF5KHZhbHVlLCBmYWxzZSwgci5uYW1lLCByLmRlc2NyaXB0aW9uKSB8fCB2YWx1ZSA9PSAnaW1wb3J0YW50JyAmJiByLmltcG9ydGFudCB8fCB2YWx1ZSA9PSAnbm90IGltcG9ydGFudCcgJiYgIXIuaW1wb3J0YW50KTtcbiAgICB9XG5cblxuICAgIHNob3dFcnJvckFsZXJ0KGNhcHRpb246IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKGNhcHRpb24sIG1lc3NhZ2UsIE1lc3NhZ2VTZXZlcml0eS5lcnJvcik7XG4gICAgfVxuXG5cbiAgICBhZGRUYXNrKCkge1xuICAgICAgICB0aGlzLmZvcm1SZXNldFRvZ2dsZSA9IGZhbHNlO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb3JtUmVzZXRUb2dnbGUgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnRhc2tFZGl0ID0ge307XG4gICAgICAgICAgICB0aGlzLmVkaXRvck1vZGFsLnNob3coKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgdGhpcy5yb3dzQ2FjaGUuc3BsaWNlKDAsIDAsIHRoaXMudGFza0VkaXQpO1xuICAgICAgICB0aGlzLnJvd3Muc3BsaWNlKDAsIDAsIHRoaXMudGFza0VkaXQpO1xuICAgICAgICB0aGlzLnJlZnJlc2hEYXRhSW5kZXhlcyh0aGlzLnJvd3NDYWNoZSk7XG4gICAgICAgIHRoaXMucm93cyA9IFsuLi50aGlzLnJvd3NdO1xuXG4gICAgICAgIHRoaXMuc2F2ZVRvRGlzaygpO1xuICAgICAgICB0aGlzLmVkaXRvck1vZGFsLmhpZGUoKTtcbiAgICB9XG5cblxuICAgIHVwZGF0ZVZhbHVlKGV2ZW50LCBjZWxsLCBjZWxsVmFsdWUsIHJvdykge1xuICAgICAgICB0aGlzLmVkaXRpbmdbcm93LiQkaW5kZXggKyAnLScgKyBjZWxsXSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvd3Nbcm93LiQkaW5kZXhdW2NlbGxdID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnJvd3MgPSBbLi4udGhpcy5yb3dzXTtcblxuICAgICAgICB0aGlzLnNhdmVUb0Rpc2soKTtcbiAgICB9XG5cblxuICAgIGRlbGV0ZShyb3cpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd0RpYWxvZygnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgdGFzaz8nLCBEaWFsb2dUeXBlLmNvbmZpcm0sICgpID0+IHRoaXMuZGVsZXRlSGVscGVyKHJvdykpO1xuICAgIH1cblxuXG4gICAgZGVsZXRlSGVscGVyKHJvdykge1xuICAgICAgICB0aGlzLnJvd3NDYWNoZSA9IHRoaXMucm93c0NhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHJvdyk7XG4gICAgICAgIHRoaXMucm93cyA9IHRoaXMucm93cy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSByb3cpO1xuXG4gICAgICAgIHRoaXMuc2F2ZVRvRGlzaygpO1xuICAgIH1cblxuICAgIGdldEZyb21EaXNrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbFN0b3JhZ2UuZ2V0RGF0YU9iamVjdChgJHtUb2RvRGVtb0NvbXBvbmVudC5EQktleVRvZG9EZW1vfToke3RoaXMuY3VycmVudFVzZXJJZH1gKTtcbiAgICB9XG5cbiAgICBzYXZlVG9EaXNrKCkge1xuICAgICAgICBpZiAodGhpcy5pc0RhdGFMb2FkZWQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnNhdmVTeW5jZWRTZXNzaW9uRGF0YSh0aGlzLnJvd3NDYWNoZSwgYCR7VG9kb0RlbW9Db21wb25lbnQuREJLZXlUb2RvRGVtb306JHt0aGlzLmN1cnJlbnRVc2VySWR9YCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=