/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/todo-demo/todo-demo.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { DialogType, MessageSeverity, Utilities } from '@polpware/ngx-appkit-contracts-alpha';
import { AlertService, AppTranslationService, LocalStoreManager } from '@polpware/ngx-appkit-services-alpha';
import { AuthService, } from '@polpware/ngx-oauth2';
export class TodoDemoComponent {
    /**
     * @param {?} alertService
     * @param {?} translationService
     * @param {?} localStorage
     * @param {?} authService
     */
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
    /**
     * @return {?}
     */
    get currentUserId() {
        if (this.authService.currentUser) {
            this._currentUserId = this.authService.currentUser.id;
        }
        return this._currentUserId;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hideCompletedTasks(value) {
        if (value) {
            this.rows = this.rowsCache.filter((/**
             * @param {?} r
             * @return {?}
             */
            r => !r.completed));
        }
        else {
            this.rows = [...this.rowsCache];
        }
        this._hideCompletedTasks = value;
    }
    /**
     * @return {?}
     */
    get hideCompletedTasks() {
        return this._hideCompletedTasks;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loadingIndicator = true;
        this.fetch((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.refreshDataIndexes(data);
            this.rows = data;
            this.rowsCache = [...data];
            this.isDataLoaded = true;
            setTimeout((/**
             * @return {?}
             */
            () => { this.loadingIndicator = false; }), 1500);
        }));
        /** @type {?} */
        const gT = (/**
         * @param {?} key
         * @return {?}
         */
        (key) => this.translationService.getTranslation(key));
        this.columns = [
            { prop: 'completed', name: '', width: 30, headerTemplate: this.statusHeaderTemplate, cellTemplate: this.statusTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
            { prop: 'name', name: gT('todoDemo.management.Task'), cellTemplate: this.nameTemplate, width: 200 },
            { prop: 'description', name: gT('todoDemo.management.Description'), cellTemplate: this.descriptionTemplate, width: 500 },
            { name: '', width: 80, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
        ];
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.saveToDisk();
    }
    /**
     * @param {?} cb
     * @return {?}
     */
    fetch(cb) {
        /** @type {?} */
        let data = this.getFromDisk();
        if (data == null) {
            setTimeout((/**
             * @return {?}
             */
            () => {
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
            }), 1000);
        }
        else {
            cb(data);
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    refreshDataIndexes(data) {
        /** @type {?} */
        let index = 0;
        for (const i of data) {
            i.$$index = index++;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onSearchChanged(value) {
        this.rows = this.rowsCache.filter((/**
         * @param {?} r
         * @return {?}
         */
        r => Utilities.searchArray(value, false, r.name, r.description) || value == 'important' && r.important || value == 'not important' && !r.important));
    }
    /**
     * @param {?} caption
     * @param {?} message
     * @return {?}
     */
    showErrorAlert(caption, message) {
        this.alertService.showMessage(caption, message, MessageSeverity.error);
    }
    /**
     * @return {?}
     */
    addTask() {
        this.formResetToggle = false;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.formResetToggle = true;
            this.taskEdit = {};
            this.editorModal.show();
        }));
    }
    /**
     * @return {?}
     */
    save() {
        this.rowsCache.splice(0, 0, this.taskEdit);
        this.rows.splice(0, 0, this.taskEdit);
        this.refreshDataIndexes(this.rowsCache);
        this.rows = [...this.rows];
        this.saveToDisk();
        this.editorModal.hide();
    }
    /**
     * @param {?} event
     * @param {?} cell
     * @param {?} cellValue
     * @param {?} row
     * @return {?}
     */
    updateValue(event, cell, cellValue, row) {
        this.editing[row.$$index + '-' + cell] = false;
        this.rows[row.$$index][cell] = event.target.value;
        this.rows = [...this.rows];
        this.saveToDisk();
    }
    /**
     * @param {?} row
     * @return {?}
     */
    delete(row) {
        this.alertService.showDialog('Are you sure you want to delete the task?', DialogType.confirm, (/**
         * @return {?}
         */
        () => this.deleteHelper(row)));
    }
    /**
     * @param {?} row
     * @return {?}
     */
    deleteHelper(row) {
        this.rowsCache = this.rowsCache.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item !== row));
        this.rows = this.rows.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item !== row));
        this.saveToDisk();
    }
    /**
     * @return {?}
     */
    getFromDisk() {
        return this.localStorage.getDataObject(`${TodoDemoComponent.DBKeyTodoDemo}:${this.currentUserId}`);
    }
    /**
     * @return {?}
     */
    saveToDisk() {
        if (this.isDataLoaded) {
            this.localStorage.saveSyncedSessionData(this.rowsCache, `${TodoDemoComponent.DBKeyTodoDemo}:${this.currentUserId}`);
        }
    }
}
TodoDemoComponent.DBKeyTodoDemo = 'todo-demo.todo_list';
TodoDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'todo-demo',
                template: "<div>\n    <div class=\"row control-box\">\n        <div class=\"col-lg-8\">\n            <div class=\"form-group search-box\">\n                <search-box (searchChange)=\"onSearchChanged($event)\" placeholder=\"{{'todoDemo.management.Search' | translate}}\"></search-box>\n            </div>\n        </div>\n        <div class=\"col-lg-4\">\n            <ul class=\"nav flex-column flex-lg-row\">\n                <li [class.active]=\"hideCompletedTasks\" class=\"nav-item toolbaritem\">\n                    <a class=\"nav-link\" href=\"javascript:;\" (click)=\"hideCompletedTasks = !hideCompletedTasks\"><i class=\"fa fa-eye-slash\"></i> {{'todoDemo.management.HideCompleted' | translate}}</a>\n                </li>\n                <li class=\"nav-item toolbaritem\">\n                    <a class=\"nav-link\" href=\"javascript:;\" (click)=\"addTask()\"><i class=\"fa fa-plus\"></i> {{'todoDemo.management.AddTask' | translate}}</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <ngx-datatable class=\"material colored-header sm table-hover\"\n                   [loadingIndicator]=\"loadingIndicator\"\n                   [rows]=\"rows\"\n                   [rowHeight]=\"35\"\n                   [headerHeight]=\"35\"\n                   [footerHeight]=\"35\"\n                   [columns]=\"columns\"\n                   [scrollbarV]=\"verticalScrollbar\"\n                   [columnMode]=\"'force'\">\n    </ngx-datatable>\n\n    <ng-template #statusHeaderTemplate>\n        <i class=\"fa fa-check-square-o\"></i>\n    </ng-template>\n\n    <ng-template #statusTemplate let-row=\"row\" let-value=\"value\">\n        <div class=\"form-check\">\n            <input class=\"form-check-input\" attr.name=\"checkboxes-{{value}}\" type=\"checkbox\" [(ngModel)]=\"row.completed\">\n            <label class=\"form-check-label\"></label>\n        </div>\n    </ng-template>\n\n    <ng-template #nameTemplate let-row=\"row\" let-value=\"value\">\n        <span *ngIf=\"!editing[row.$$index + '-name']\" class=\"inline-label\" [class.completed]=\"row.completed\" attr.title=\"Double click to edit - {{value}}\" (dblclick)=\"editing[row.$$index + '-name'] = true\">\n            {{value}}\n        </span>\n        <input *ngIf=\"editing[row.$$index + '-name']\" class=\"inline-editor\" autofocus (blur)=\"updateValue($event, 'name', value, row)\" type=\"text\" [value]=\"value\" />\n    </ng-template>\n\n    <ng-template #descriptionTemplate let-row=\"row\" let-value=\"value\">\n        <span *ngIf=\"!editing[row.$$index + '-description']\" class=\"inline-label\" [class.completed]=\"row.completed\" attr.title=\"Double click to edit - {{value}}\" (dblclick)=\"editing[row.$$index + '-description'] = true\">\n            {{value}}\n        </span>\n        <input *ngIf=\"editing[row.$$index + '-description']\" class=\"inline-editor\" autofocus (blur)=\"updateValue($event, 'description', value, row)\" type=\"text\" [value]=\"value\" />\n    </ng-template>\n\n\n    <ng-template #actionsTemplate let-row=\"row\">\n        <a class=\"btn btn-link btn-sm\" href=\"javascript:;\" tooltip=\"{{'todoDemo.management.Delete' | translate}}\" container=\"body\" (click)=\"delete(row)\"><i class=\"fa fa-times\"></i></a>\n        <a class=\"btn btn-link btn-sm\" href=\"javascript:;\" tooltip=\"{{'todoDemo.management.Important' | translate}}\" container=\"body\" (click)=\"row.important = !row.important\" (mouseover)=\"row.isMouseOver=true\" (mouseout)=\"row.isMouseOver=false\">\n            <i *ngIf=\"row.important || row.isMouseOver\" class=\"fa fa-bookmark\"></i>\n            <i *ngIf=\"!row.important && !row.isMouseOver\" class=\"fa fa-bookmark-o\"></i>\n        </a>\n    </ng-template>\n\n\n\n\n\n    <div class=\"modal fade\" bsModal #editorModal=\"bs-modal\" tabindex=\"-1\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title float-left\"><i class=\"fa fa-tasks\"></i> {{'todoDemo.editor.NewTask' | translate}}</h4>\n                    <button type=\"button\" class=\"close\" title=\"Close\" (click)=\"editorModal.hide()\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form *ngIf=\"formResetToggle\" name=\"taskEditorForm\" #f=\"ngForm\" novalidate\n                          (ngSubmit)=\"f.form.valid ? save() :\n                      (!taskName.valid && showErrorAlert('Task name is required', 'Please enter a name for the task'));\">\n\n\n                        <div class=\"form-group row has-feedback-icon\">\n                            <label class=\"col-form-label col-md-3\" for=\"taskName\">{{'todoDemo.editor.Name' | translate}}:</label>\n                            <div class=\"col-md-9\">\n                                <input autofocus type=\"text\" id=\"taskName\" name=\"taskName\" placeholder=\"Enter task name\" class=\"form-control\" [ngClass]=\"{'is-valid': f.submitted && taskName.valid, 'is-invalid' : f.submitted && !taskName.valid}\"\n                                       [(ngModel)]=\"taskEdit.name\" #taskName=\"ngModel\" required />\n                                <i *ngIf=\"f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': taskName.valid, 'fa-times' : !taskName.valid}\" aria-hidden=\"true\"></i>\n                                <span *ngIf=\"f.submitted && !taskName.valid\" class=\"invalid-feedback\">\n                                    {{'todoDemo.editor.TaskNameRequired' | translate}}\n                                </span>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row description-form-group\">\n                            <label class=\"col-form-label col-md-3\" for=\"taskDescription\">{{'todoDemo.editor.Description' | translate}}:</label>\n                            <div class=\"col-md-9\">\n                                <input type=\"text\" id=\"taskDescription\" name=\"taskDescription\" placeholder=\"Enter task description\" class=\"form-control\" [(ngModel)]=\"taskEdit.description\" />\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <label class=\"col-form-label col-md-3\"> </label>\n                            <div class=\"col-md-9\">\n                                <div class=\"form-check\">\n                                    <input class=\"form-check-input\" id=\"isImportant\" name=\"isImportant\" type=\"checkbox\" [(ngModel)]=\"taskEdit.important\">\n                                    <label for=\"isImportant\" class=\"form-check-label\">{{'todoDemo.editor.Important' | translate}}</label>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <hr class=\"edit-last-separator-hr\" />\n                            </div>\n                        </div>\n\n\n                        <div class=\"form-group actionBtn-form-group\">\n                            <div class=\"float-right\">\n                                <button type=\"submit\" class=\"btn btn-primary\">{{'todoDemo.editor.AddTask' | translate}}</button>\n                            </div>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>",
                styles: ["input.form-control{border-left-width:5px}.control-box{margin-bottom:5px}.search-box{margin:0}.nav-item.toolbaritem a{padding-top:3px;padding-bottom:3px;min-width:100px;font-weight:700}.completed{text-decoration:line-through}.form-check{margin:0}.inline-label{width:100%;min-height:1rem;display:inline-block}.inline-editor{width:100%}.description-form-group{margin-bottom:5px}.actionBtn-form-group{margin:0}.edit-last-separator-hr{margin:10px 0}"]
            }] }
];
/** @nocollapse */
TodoDemoComponent.ctorParameters = () => [
    { type: AlertService },
    { type: AppTranslationService },
    { type: LocalStoreManager },
    { type: AuthService }
];
TodoDemoComponent.propDecorators = {
    verticalScrollbar: [{ type: Input }],
    statusHeaderTemplate: [{ type: ViewChild, args: ['statusHeaderTemplate', { static: true },] }],
    statusTemplate: [{ type: ViewChild, args: ['statusTemplate', { static: true },] }],
    nameTemplate: [{ type: ViewChild, args: ['nameTemplate', { static: true },] }],
    descriptionTemplate: [{ type: ViewChild, args: ['descriptionTemplate', { static: true },] }],
    actionsTemplate: [{ type: ViewChild, args: ['actionsTemplate', { static: true },] }],
    editorModal: [{ type: ViewChild, args: ['editorModal', { static: true },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1kZW1vLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90b2RvLWRlbW8vdG9kby1kZW1vLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFckQsT0FBTyxFQUNILFVBQVUsRUFBRSxlQUFlLEVBQzNCLFNBQVMsRUFDWixNQUFNLHNDQUFzQyxDQUFDO0FBRTlDLE9BQU8sRUFDSCxZQUFZLEVBQ1oscUJBQXFCLEVBQ3JCLGlCQUFpQixFQUNwQixNQUFNLHFDQUFxQyxDQUFDO0FBRTdDLE9BQU8sRUFDSCxXQUFXLEdBRWQsTUFBTSxzQkFBc0IsQ0FBQztBQVE5QixNQUFNLE9BQU8saUJBQWlCOzs7Ozs7O0lBZ0UxQixZQUFvQixZQUEwQixFQUFVLGtCQUF5QyxFQUFVLFlBQStCLEVBQVUsV0FBd0I7UUFBeEosaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXVCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQW1CO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUE3RDVLLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUV2Qix3QkFBbUIs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InNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5cbmltcG9ydCB7XG4gICAgRGlhbG9nVHlwZSwgTWVzc2FnZVNldmVyaXR5LFxuICAgIFV0aWxpdGllc1xufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1jb250cmFjdHMtYWxwaGEnO1xuXG5pbXBvcnQge1xuICAgIEFsZXJ0U2VydmljZSxcbiAgICBBcHBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgTG9jYWxTdG9yZU1hbmFnZXJcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtc2VydmljZXMtYWxwaGEnO1xuXG5pbXBvcnQge1xuICAgIEF1dGhTZXJ2aWNlLFxuICAgIFBlcm1pc3Npb24sXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtb2F1dGgyJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3RvZG8tZGVtbycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RvZG8tZGVtby5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdG9kby1kZW1vLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9kb0RlbW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEQktleVRvZG9EZW1vID0gJ3RvZG8tZGVtby50b2RvX2xpc3QnO1xuXG4gICAgcm93cyA9IFtdO1xuICAgIHJvd3NDYWNoZSA9IFtdO1xuICAgIGNvbHVtbnMgPSBbXTtcbiAgICBlZGl0aW5nID0ge307XG4gICAgdGFza0VkaXQ6IGFueSA9IHt9O1xuICAgIGlzRGF0YUxvYWRlZCA9IGZhbHNlO1xuICAgIGxvYWRpbmdJbmRpY2F0b3IgPSB0cnVlO1xuICAgIGZvcm1SZXNldFRvZ2dsZSA9IHRydWU7XG4gICAgX2N1cnJlbnRVc2VySWQ6IHN0cmluZztcbiAgICBfaGlkZUNvbXBsZXRlZFRhc2tzID0gZmFsc2U7XG5cblxuICAgIGdldCBjdXJyZW50VXNlcklkKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5jdXJyZW50VXNlcikge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFVzZXJJZCA9IHRoaXMuYXV0aFNlcnZpY2UuY3VycmVudFVzZXIuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFVzZXJJZDtcbiAgICB9XG5cblxuICAgIHNldCBoaWRlQ29tcGxldGVkVGFza3ModmFsdWU6IGJvb2xlYW4pIHtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMucm93cyA9IHRoaXMucm93c0NhY2hlLmZpbHRlcihyID0+ICFyLmNvbXBsZXRlZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSBbLi4udGhpcy5yb3dzQ2FjaGVdO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLl9oaWRlQ29tcGxldGVkVGFza3MgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgaGlkZUNvbXBsZXRlZFRhc2tzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGlkZUNvbXBsZXRlZFRhc2tzO1xuICAgIH1cblxuXG4gICAgQElucHV0KClcbiAgICB2ZXJ0aWNhbFNjcm9sbGJhciA9IGZhbHNlO1xuXG5cbiAgICBAVmlld0NoaWxkKCdzdGF0dXNIZWFkZXJUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgc3RhdHVzSGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdzdGF0dXNUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgc3RhdHVzVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCduYW1lVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIG5hbWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2Rlc2NyaXB0aW9uVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGRlc2NyaXB0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdhY3Rpb25zVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGFjdGlvbnNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2VkaXRvck1vZGFsJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBlZGl0b3JNb2RhbDogTW9kYWxEaXJlY3RpdmU7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsIHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBBcHBUcmFuc2xhdGlvblNlcnZpY2UsIHByaXZhdGUgbG9jYWxTdG9yYWdlOiBMb2NhbFN0b3JlTWFuYWdlciwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcbiAgICB9XG5cblxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5mZXRjaCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoRGF0YUluZGV4ZXMoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSBkYXRhO1xuICAgICAgICAgICAgdGhpcy5yb3dzQ2FjaGUgPSBbLi4uZGF0YV07XG4gICAgICAgICAgICB0aGlzLmlzRGF0YUxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTsgfSwgMTUwMCk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgY29uc3QgZ1QgPSAoa2V5OiBzdHJpbmcpID0+IHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGtleSk7XG5cbiAgICAgICAgdGhpcy5jb2x1bW5zID0gW1xuICAgICAgICAgICAgeyBwcm9wOiAnY29tcGxldGVkJywgbmFtZTogJycsIHdpZHRoOiAzMCwgaGVhZGVyVGVtcGxhdGU6IHRoaXMuc3RhdHVzSGVhZGVyVGVtcGxhdGUsIGNlbGxUZW1wbGF0ZTogdGhpcy5zdGF0dXNUZW1wbGF0ZSwgcmVzaXplYWJsZTogZmFsc2UsIGNhbkF1dG9SZXNpemU6IGZhbHNlLCBzb3J0YWJsZTogZmFsc2UsIGRyYWdnYWJsZTogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgcHJvcDogJ25hbWUnLCBuYW1lOiBnVCgndG9kb0RlbW8ubWFuYWdlbWVudC5UYXNrJyksIGNlbGxUZW1wbGF0ZTogdGhpcy5uYW1lVGVtcGxhdGUsIHdpZHRoOiAyMDAgfSxcbiAgICAgICAgICAgIHsgcHJvcDogJ2Rlc2NyaXB0aW9uJywgbmFtZTogZ1QoJ3RvZG9EZW1vLm1hbmFnZW1lbnQuRGVzY3JpcHRpb24nKSwgY2VsbFRlbXBsYXRlOiB0aGlzLmRlc2NyaXB0aW9uVGVtcGxhdGUsIHdpZHRoOiA1MDAgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJycsIHdpZHRoOiA4MCwgY2VsbFRlbXBsYXRlOiB0aGlzLmFjdGlvbnNUZW1wbGF0ZSwgcmVzaXplYWJsZTogZmFsc2UsIGNhbkF1dG9SZXNpemU6IGZhbHNlLCBzb3J0YWJsZTogZmFsc2UsIGRyYWdnYWJsZTogZmFsc2UgfVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnNhdmVUb0Rpc2soKTtcbiAgICB9XG5cblxuXG4gICAgZmV0Y2goY2IpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdldEZyb21EaXNrKCk7XG5cbiAgICAgICAgaWYgKGRhdGEgPT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5nZXRGcm9tRGlzaygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyBjb21wbGV0ZWQ6IHRydWUsIGltcG9ydGFudDogdHJ1ZSwgbmFtZTogJ0NyZWF0ZSB2aXN1YWwgc3R1ZGlvIGV4dGVuc2lvbicsIGRlc2NyaXB0aW9uOiAnQ3JlYXRlIGEgdmlzdWFsIHN0dWRpbyBWU0lYIGV4dGVuc2lvbiBwYWNrYWdlIHRoYXQgd2lsbCBhZGQgdGhpcyBwcm9qZWN0IGFzIGFuIGFzcG5ldC1jb3JlIHByb2plY3QgdGVtcGxhdGUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNvbXBsZXRlZDogZmFsc2UsIGltcG9ydGFudDogdHJ1ZSwgbmFtZTogJ0RvIGEgcXVpY2sgaG93LXRvIHdyaXRldXAnLCBkZXNjcmlwdGlvbjogJycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLCBpbXBvcnRhbnQ6IGZhbHNlLCBuYW1lOiAnQ3JlYXRlIGFzcG5ldC1jb3JlL0FuZ3VsYXI4IHR1dG9yaWFscyBiYXNlZCBvbiB0aGlzIHByb2plY3QnLCBkZXNjcmlwdGlvbjogJ0NyZWF0ZSB0dXRvcmlhbHMgKGJsb2cvdmlkZW8veW91dHViZSkgb24gaG93IHRvIGJ1aWxkIGFwcGxpY2F0aW9ucyAoZnVsbCBzdGFjayknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyB1c2luZyBhc3BuZXQtY29yZS9Bbmd1bGFyOC4gVGhlIHR1dG9yaWFsIHdpbGwgZm9jdXMgb24gZ2V0dGluZyBwcm9kdWN0aXZlIHdpdGggdGhlIHRlY2hub2xvZ3kgcmlnaHQgYXdheSByYXRoZXIgdGhhbiB0aGUgZGV0YWlscyBvbiBob3cgYW5kIHdoeSB0aGV5IHdvcmsgc28gYXVkaWVuY2UgY2FuIGdldCBvbmJvYXJkIHF1aWNrbHkuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjYihkYXRhKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2IoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlZnJlc2hEYXRhSW5kZXhlcyhkYXRhKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICAgICAgZm9yIChjb25zdCBpIG9mIGRhdGEpIHtcbiAgICAgICAgICAgIGkuJCRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG9uU2VhcmNoQ2hhbmdlZCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucm93cyA9IHRoaXMucm93c0NhY2hlLmZpbHRlcihyID0+IFV0aWxpdGllcy5zZWFyY2hBcnJheSh2YWx1ZSwgZmFsc2UsIHIubmFtZSwgci5kZXNjcmlwdGlvbikgfHwgdmFsdWUgPT0gJ2ltcG9ydGFudCcgJiYgci5pbXBvcnRhbnQgfHwgdmFsdWUgPT0gJ25vdCBpbXBvcnRhbnQnICYmICFyLmltcG9ydGFudCk7XG4gICAgfVxuXG5cbiAgICBzaG93RXJyb3JBbGVydChjYXB0aW9uOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93TWVzc2FnZShjYXB0aW9uLCBtZXNzYWdlLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IpO1xuICAgIH1cblxuXG4gICAgYWRkVGFzaygpIHtcbiAgICAgICAgdGhpcy5mb3JtUmVzZXRUb2dnbGUgPSBmYWxzZTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZm9ybVJlc2V0VG9nZ2xlID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy50YXNrRWRpdCA9IHt9O1xuICAgICAgICAgICAgdGhpcy5lZGl0b3JNb2RhbC5zaG93KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIHRoaXMucm93c0NhY2hlLnNwbGljZSgwLCAwLCB0aGlzLnRhc2tFZGl0KTtcbiAgICAgICAgdGhpcy5yb3dzLnNwbGljZSgwLCAwLCB0aGlzLnRhc2tFZGl0KTtcbiAgICAgICAgdGhpcy5yZWZyZXNoRGF0YUluZGV4ZXModGhpcy5yb3dzQ2FjaGUpO1xuICAgICAgICB0aGlzLnJvd3MgPSBbLi4udGhpcy5yb3dzXTtcblxuICAgICAgICB0aGlzLnNhdmVUb0Rpc2soKTtcbiAgICAgICAgdGhpcy5lZGl0b3JNb2RhbC5oaWRlKCk7XG4gICAgfVxuXG5cbiAgICB1cGRhdGVWYWx1ZShldmVudCwgY2VsbCwgY2VsbFZhbHVlLCByb3cpIHtcbiAgICAgICAgdGhpcy5lZGl0aW5nW3Jvdy4kJGluZGV4ICsgJy0nICsgY2VsbF0gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3dzW3Jvdy4kJGluZGV4XVtjZWxsXSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5yb3dzID0gWy4uLnRoaXMucm93c107XG5cbiAgICAgICAgdGhpcy5zYXZlVG9EaXNrKCk7XG4gICAgfVxuXG5cbiAgICBkZWxldGUocm93KSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dEaWFsb2coJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlIHRhc2s/JywgRGlhbG9nVHlwZS5jb25maXJtLCAoKSA9PiB0aGlzLmRlbGV0ZUhlbHBlcihyb3cpKTtcbiAgICB9XG5cblxuICAgIGRlbGV0ZUhlbHBlcihyb3cpIHtcbiAgICAgICAgdGhpcy5yb3dzQ2FjaGUgPSB0aGlzLnJvd3NDYWNoZS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSByb3cpO1xuICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLnJvd3MuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gcm93KTtcblxuICAgICAgICB0aGlzLnNhdmVUb0Rpc2soKTtcbiAgICB9XG5cbiAgICBnZXRGcm9tRGlzaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxTdG9yYWdlLmdldERhdGFPYmplY3QoYCR7VG9kb0RlbW9Db21wb25lbnQuREJLZXlUb2RvRGVtb306JHt0aGlzLmN1cnJlbnRVc2VySWR9YCk7XG4gICAgfVxuXG4gICAgc2F2ZVRvRGlzaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEYXRhTG9hZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5zYXZlU3luY2VkU2Vzc2lvbkRhdGEodGhpcy5yb3dzQ2FjaGUsIGAke1RvZG9EZW1vQ29tcG9uZW50LkRCS2V5VG9kb0RlbW99OiR7dGhpcy5jdXJyZW50VXNlcklkfWApO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19