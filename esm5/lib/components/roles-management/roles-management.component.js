/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/roles-management/roles-management.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { DialogType, MessageSeverity, Utilities } from '@polpware/ngx-appkit-contracts-alpha';
import { AlertService, AppTranslationService } from '@polpware/ngx-appkit-services-alpha';
import { Permission } from '@polpware/ngx-oauth2';
import { AccountService } from '../../services/account.service';
import { Role } from '../../models/role.model';
import { RoleEditorComponent } from '../role-editor/role-editor.component';
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
    /**
     * @return {?}
     */
    RolesManagementComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var gT = (/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return _this.translationService.getTranslation(key); });
        this.columns = [
            { prop: 'index', name: '#', width: 50, cellTemplate: this.indexTemplate, canAutoResize: false },
            { prop: 'name', name: gT('roles.management.Name'), width: 180 },
            { prop: 'description', name: gT('roles.management.Description'), width: 320 },
            { prop: 'usersCount', name: gT('roles.management.Users'), width: 50 },
            { name: '', width: 160, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
        ];
        this.loadData();
    };
    /**
     * @return {?}
     */
    RolesManagementComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.roleEditor.changesSavedCallback = (/**
         * @return {?}
         */
        function () {
            _this.addNewRoleToList();
            _this.editorModal.hide();
        });
        this.roleEditor.changesCancelledCallback = (/**
         * @return {?}
         */
        function () {
            _this.editedRole = null;
            _this.sourceRole = null;
            _this.editorModal.hide();
        });
    };
    /**
     * @return {?}
     */
    RolesManagementComponent.prototype.addNewRoleToList = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        if (this.sourceRole) {
            Object.assign(this.sourceRole, this.editedRole);
            /** @type {?} */
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
            /** @type {?} */
            var role = new Role();
            Object.assign(role, this.editedRole);
            this.editedRole = null;
            /** @type {?} */
            var maxIndex = 0;
            try {
                for (var _b = tslib_1.__values(this.rowsCache), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var r = _c.value;
                    if (((/** @type {?} */ (r))).index > maxIndex) {
                        maxIndex = ((/** @type {?} */ (r))).index;
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
            ((/** @type {?} */ (role))).index = maxIndex + 1;
            this.rowsCache.splice(0, 0, role);
            this.rows.splice(0, 0, role);
            this.rows = tslib_1.__spread(this.rows);
        }
    };
    /**
     * @return {?}
     */
    RolesManagementComponent.prototype.loadData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.alertService.startLoadingMessage();
        this.loadingIndicator = true;
        this.accountService.getRolesAndPermissions()
            .subscribe((/**
         * @param {?} results
         * @return {?}
         */
        function (results) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            /** @type {?} */
            var roles = results[0];
            /** @type {?} */
            var permissions = results[1];
            roles.forEach((/**
             * @param {?} role
             * @param {?} index
             * @param {?} roles
             * @return {?}
             */
            function (role, index, roles) {
                ((/** @type {?} */ (role))).index = index + 1;
            }));
            _this.rowsCache = tslib_1.__spread(roles);
            _this.rows = roles;
            _this.allPermissions = permissions;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.alertService.showStickyMessage('Load Error', "Unable to retrieve roles from the server.\r\nErrors: \"" + Utilities.getHttpResponseMessages(error) + "\"", MessageSeverity.error, error);
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RolesManagementComponent.prototype.onSearchChanged = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.rows = this.rowsCache.filter((/**
         * @param {?} r
         * @return {?}
         */
        function (r) { return Utilities.searchArray(value, false, r.name, r.description); }));
    };
    /**
     * @return {?}
     */
    RolesManagementComponent.prototype.onEditorModalHidden = /**
     * @return {?}
     */
    function () {
        this.editingRoleName = null;
        this.roleEditor.resetForm(true);
    };
    /**
     * @return {?}
     */
    RolesManagementComponent.prototype.newRole = /**
     * @return {?}
     */
    function () {
        this.editingRoleName = null;
        this.sourceRole = null;
        this.editedRole = this.roleEditor.newRole(this.allPermissions);
        this.editorModal.show();
    };
    /**
     * @param {?} row
     * @return {?}
     */
    RolesManagementComponent.prototype.editRole = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.editingRoleName = { name: row.name };
        this.sourceRole = row;
        this.editedRole = this.roleEditor.editRole(row, this.allPermissions);
        this.editorModal.show();
    };
    /**
     * @param {?} row
     * @return {?}
     */
    RolesManagementComponent.prototype.deleteRole = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to delete the \"' + row.name + '\" role?', DialogType.confirm, (/**
         * @return {?}
         */
        function () { return _this.deleteRoleHelper(row); }));
    };
    /**
     * @param {?} row
     * @return {?}
     */
    RolesManagementComponent.prototype.deleteRoleHelper = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        var _this = this;
        this.alertService.startLoadingMessage('Deleting...');
        this.loadingIndicator = true;
        this.accountService.deleteRole(row)
            .subscribe((/**
         * @param {?} results
         * @return {?}
         */
        function (results) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.rowsCache = _this.rowsCache.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item !== row; }));
            _this.rows = _this.rows.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item !== row; }));
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.alertService.showStickyMessage('Delete Error', "An error occured whilst deleting the role.\r\nError: \"" + Utilities.getHttpResponseMessages(error) + "\"", MessageSeverity.error, error);
        }));
    };
    Object.defineProperty(RolesManagementComponent.prototype, "canManageRoles", {
        get: /**
         * @return {?}
         */
        function () {
            return this.accountService.userHasPermission(Permission.manageRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    RolesManagementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'roles-management',
                    template: "<div>\n  <div class=\"row control-box\">\n    <div class=\"col-lg-8\">\n      <div class=\"form-group search-box\">\n        <search-box (searchChange)=\"onSearchChanged($event)\" placeholder=\"{{'roles.management.Search' | translate}}\">></search-box>\n      </div>\n    </div>\n    <div class=\"col-lg-4 pr-lg-5\">\n      <ul class=\"nav flex-column flex-lg-row justify-content-end\">\n        <li *ngIf=\"canManageRoles\" class=\"nav-item toolbaritem\">\n          <a class=\"nav-link\" href=\"javascript:;\" (click)=\"newRole()\">\n            <i class=\"fa fa-plus-circle\"></i> {{'roles.management.NewRole' | translate}}\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <ngx-datatable class=\"material colored-header sm table table-striped table-hover\"\n                 [loadingIndicator]=\"loadingIndicator\"\n                 [rows]=\"rows\"\n                 [rowHeight]=\"35\"\n                 [headerHeight]=\"35\"\n                 [footerHeight]=\"35\"\n                 [columns]=\"columns\"\n                 [scrollbarV]=\"true\"\n                 [columnMode]=\"'force'\">\n  </ngx-datatable>\n\n  <ng-template #indexTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n  </ng-template>\n\n\n  <ng-template #actionsTemplate let-row=\"row\" let-value=\"value\" let-i=\"index\">\n    <a *ngIf=\"canManageRoles\" class=\"btn btn-link btn-sm\" href=\"javascript:;\" (click)=\"editRole(row)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> {{'roles.management.Edit' | translate}}</a>\n    <a *ngIf=\"!canManageRoles\" class=\"btn btn-link btn-sm\" href=\"javascript:;\" (click)=\"editRole(row)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> {{'roles.management.Details' | translate}}</a>\n    {{canManageRoles ? '|' : ''}}\n    <a *ngIf=\"canManageRoles\" class=\"btn btn-link btn-sm\" href=\"javascript:;\" (click)=\"deleteRole(row)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> {{'roles.management.Delete' | translate}}</a>\n  </ng-template>\n\n\n  <div class=\"modal fade\" bsModal #editorModal=\"bs-modal\" (onHidden)=\"onEditorModalHidden()\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 *ngIf=\"!canManageRoles\" class=\"modal-title float-left\"><i class=\"fa fa-shield\"></i> {{'roles.management.RoleDetails' | translate:editingRoleName}}</h4>\n          <h4 *ngIf=\"canManageRoles\" class=\"modal-title float-left\"><i class=\"fa fa-shield\"></i> {{editingRoleName ? ('roles.management.EditRole' | translate:editingRoleName) : ('roles.management.NewRole' | translate)}}</h4>\n          <button type=\"button\" class=\"close float-right\" title=\"Close\" (click)=\"editorModal.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <role-editor #roleEditor></role-editor>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".control-box{margin-bottom:5px}.search-box{margin:0}.nav-item.toolbaritem a{padding-top:3px;padding-bottom:3px;min-width:100px}"]
                }] }
    ];
    /** @nocollapse */
    RolesManagementComponent.ctorParameters = function () { return [
        { type: AlertService },
        { type: AppTranslationService },
        { type: AccountService }
    ]; };
    RolesManagementComponent.propDecorators = {
        indexTemplate: [{ type: ViewChild, args: ['indexTemplate', { static: true },] }],
        actionsTemplate: [{ type: ViewChild, args: ['actionsTemplate', { static: true },] }],
        editorModal: [{ type: ViewChild, args: ['editorModal', { static: true },] }],
        roleEditor: [{ type: ViewChild, args: ['roleEditor', { static: true },] }]
    };
    return RolesManagementComponent;
}());
export { RolesManagementComponent };
if (false) {
    /** @type {?} */
    RolesManagementComponent.prototype.columns;
    /** @type {?} */
    RolesManagementComponent.prototype.rows;
    /** @type {?} */
    RolesManagementComponent.prototype.rowsCache;
    /** @type {?} */
    RolesManagementComponent.prototype.allPermissions;
    /** @type {?} */
    RolesManagementComponent.prototype.editedRole;
    /** @type {?} */
    RolesManagementComponent.prototype.sourceRole;
    /** @type {?} */
    RolesManagementComponent.prototype.editingRoleName;
    /** @type {?} */
    RolesManagementComponent.prototype.loadingIndicator;
    /** @type {?} */
    RolesManagementComponent.prototype.indexTemplate;
    /** @type {?} */
    RolesManagementComponent.prototype.actionsTemplate;
    /** @type {?} */
    RolesManagementComponent.prototype.editorModal;
    /** @type {?} */
    RolesManagementComponent.prototype.roleEditor;
    /**
     * @type {?}
     * @private
     */
    RolesManagementComponent.prototype.alertService;
    /**
     * @type {?}
     * @private
     */
    RolesManagementComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    RolesManagementComponent.prototype.accountService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZXMtbWFuYWdlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcm9sZXMtbWFuYWdlbWVudC9yb2xlcy1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBeUIsV0FBVyxFQUFFLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFckQsT0FBTyxFQUNILFVBQVUsRUFBRSxlQUFlLEVBQzNCLFNBQVMsRUFDWixNQUFNLHNDQUFzQyxDQUFDO0FBRzlDLE9BQU8sRUFDSCxZQUFZLEVBQ1oscUJBQXFCLEVBR3hCLE1BQU0scUNBQXFDLENBQUM7QUFFN0MsT0FBTyxFQUNILFVBQVUsRUFDYixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHM0U7SUE2Qkksa0NBQW9CLFlBQTBCLEVBQVUsa0JBQXlDLEVBQVUsY0FBOEI7UUFBckgsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXVCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBdkJ6SSxZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixtQkFBYyxHQUFpQixFQUFFLENBQUM7SUFxQmxDLENBQUM7Ozs7SUFHRCwyQ0FBUTs7O0lBQVI7UUFBQSxpQkFhQzs7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QUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs2QkFHekMsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBMEs3QywrQkFBQztDQUFBLEFBcE1ELElBb01DO1NBL0xZLHdCQUF3Qjs7O0lBQ2pDLDJDQUFvQjs7SUFDcEIsd0NBQWtCOztJQUNsQiw2Q0FBdUI7O0lBQ3ZCLGtEQUFrQzs7SUFDbEMsOENBQWlCOztJQUNqQiw4Q0FBaUI7O0lBQ2pCLG1EQUFrQzs7SUFDbEMsb0RBQTBCOztJQUkxQixpREFDZ0M7O0lBRWhDLG1EQUNrQzs7SUFFbEMsK0NBQzRCOztJQUU1Qiw4Q0FDZ0M7Ozs7O0lBRXBCLGdEQUFrQzs7Ozs7SUFBRSxzREFBaUQ7Ozs7O0lBQUUsa0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5cbmltcG9ydCB7XG4gICAgRGlhbG9nVHlwZSwgTWVzc2FnZVNldmVyaXR5LFxuICAgIFV0aWxpdGllc1xufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1jb250cmFjdHMtYWxwaGEnO1xuXG5cbmltcG9ydCB7XG4gICAgQWxlcnRTZXJ2aWNlLFxuICAgIEFwcFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBMb2NhbFN0b3JlTWFuYWdlcixcbiAgICBDb25maWd1cmF0aW9uU2VydmljZVxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1zZXJ2aWNlcy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgUGVybWlzc2lvblxufSBmcm9tICdAcG9scHdhcmUvbmd4LW9hdXRoMic7XG5cbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWNjb3VudC5zZXJ2aWNlJztcbmltcG9ydCB7IFJvbGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvcm9sZS5tb2RlbCc7XG5pbXBvcnQgeyBSb2xlRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi4vcm9sZS1lZGl0b3Ivcm9sZS1lZGl0b3IuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvbGVzLW1hbmFnZW1lbnQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9yb2xlcy1tYW5hZ2VtZW50LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9yb2xlcy1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUm9sZXNNYW5hZ2VtZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICBjb2x1bW5zOiBhbnlbXSA9IFtdO1xuICAgIHJvd3M6IFJvbGVbXSA9IFtdO1xuICAgIHJvd3NDYWNoZTogUm9sZVtdID0gW107XG4gICAgYWxsUGVybWlzc2lvbnM6IFBlcm1pc3Npb25bXSA9IFtdO1xuICAgIGVkaXRlZFJvbGU6IFJvbGU7XG4gICAgc291cmNlUm9sZTogUm9sZTtcbiAgICBlZGl0aW5nUm9sZU5hbWU6IHsgbmFtZTogc3RyaW5nIH07XG4gICAgbG9hZGluZ0luZGljYXRvcjogYm9vbGVhbjtcblxuXG5cbiAgICBAVmlld0NoaWxkKCdpbmRleFRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBpbmRleFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnYWN0aW9uc1RlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBhY3Rpb25zVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdlZGl0b3JNb2RhbCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgZWRpdG9yTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xuXG4gICAgQFZpZXdDaGlsZCgncm9sZUVkaXRvcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgcm9sZUVkaXRvcjogUm9sZUVkaXRvckNvbXBvbmVudDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsIHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBBcHBUcmFuc2xhdGlvblNlcnZpY2UsIHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlKSB7XG4gICAgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICBjb25zdCBnVCA9IChrZXk6IHN0cmluZykgPT4gdGhpcy50cmFuc2xhdGlvblNlcnZpY2UuZ2V0VHJhbnNsYXRpb24oa2V5KTtcblxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXG4gICAgICAgICAgICB7IHByb3A6ICdpbmRleCcsIG5hbWU6ICcjJywgd2lkdGg6IDUwLCBjZWxsVGVtcGxhdGU6IHRoaXMuaW5kZXhUZW1wbGF0ZSwgY2FuQXV0b1Jlc2l6ZTogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgcHJvcDogJ25hbWUnLCBuYW1lOiBnVCgncm9sZXMubWFuYWdlbWVudC5OYW1lJyksIHdpZHRoOiAxODAgfSxcbiAgICAgICAgICAgIHsgcHJvcDogJ2Rlc2NyaXB0aW9uJywgbmFtZTogZ1QoJ3JvbGVzLm1hbmFnZW1lbnQuRGVzY3JpcHRpb24nKSwgd2lkdGg6IDMyMCB9LFxuICAgICAgICAgICAgeyBwcm9wOiAndXNlcnNDb3VudCcsIG5hbWU6IGdUKCdyb2xlcy5tYW5hZ2VtZW50LlVzZXJzJyksIHdpZHRoOiA1MCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnJywgd2lkdGg6IDE2MCwgY2VsbFRlbXBsYXRlOiB0aGlzLmFjdGlvbnNUZW1wbGF0ZSwgcmVzaXplYWJsZTogZmFsc2UsIGNhbkF1dG9SZXNpemU6IGZhbHNlLCBzb3J0YWJsZTogZmFsc2UsIGRyYWdnYWJsZTogZmFsc2UgfVxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICB9XG5cblxuXG5cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgICAgICB0aGlzLnJvbGVFZGl0b3IuY2hhbmdlc1NhdmVkQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZE5ld1JvbGVUb0xpc3QoKTtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yTW9kYWwuaGlkZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucm9sZUVkaXRvci5jaGFuZ2VzQ2FuY2VsbGVkQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVkaXRlZFJvbGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zb3VyY2VSb2xlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yTW9kYWwuaGlkZSgpO1xuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYWRkTmV3Um9sZVRvTGlzdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc291cmNlUm9sZSkge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnNvdXJjZVJvbGUsIHRoaXMuZWRpdGVkUm9sZSk7XG5cbiAgICAgICAgICAgIGxldCBzb3VyY2VJbmRleCA9IHRoaXMucm93c0NhY2hlLmluZGV4T2YodGhpcy5zb3VyY2VSb2xlLCAwKTtcbiAgICAgICAgICAgIGlmIChzb3VyY2VJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgVXRpbGl0aWVzLm1vdmVBcnJheUl0ZW0odGhpcy5yb3dzQ2FjaGUsIHNvdXJjZUluZGV4LCAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc291cmNlSW5kZXggPSB0aGlzLnJvd3MuaW5kZXhPZih0aGlzLnNvdXJjZVJvbGUsIDApO1xuICAgICAgICAgICAgaWYgKHNvdXJjZUluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBVdGlsaXRpZXMubW92ZUFycmF5SXRlbSh0aGlzLnJvd3MsIHNvdXJjZUluZGV4LCAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5lZGl0ZWRSb2xlID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc291cmNlUm9sZSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCByb2xlID0gbmV3IFJvbGUoKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocm9sZSwgdGhpcy5lZGl0ZWRSb2xlKTtcbiAgICAgICAgICAgIHRoaXMuZWRpdGVkUm9sZSA9IG51bGw7XG5cbiAgICAgICAgICAgIGxldCBtYXhJbmRleCA9IDA7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHIgb2YgdGhpcy5yb3dzQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHIgYXMgYW55KS5pbmRleCA+IG1heEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIG1heEluZGV4ID0gKHIgYXMgYW55KS5pbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIChyb2xlIGFzIGFueSkuaW5kZXggPSBtYXhJbmRleCArIDE7XG5cbiAgICAgICAgICAgIHRoaXMucm93c0NhY2hlLnNwbGljZSgwLCAwLCByb2xlKTtcbiAgICAgICAgICAgIHRoaXMucm93cy5zcGxpY2UoMCwgMCwgcm9sZSk7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSBbLi4udGhpcy5yb3dzXTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuICAgIGxvYWREYXRhKCkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5nZXRSb2xlc0FuZFBlcm1pc3Npb25zKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByb2xlcyA9IHJlc3VsdHNbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgcGVybWlzc2lvbnMgPSByZXN1bHRzWzFdO1xuXG4gICAgICAgICAgICAgICAgcm9sZXMuZm9yRWFjaCgocm9sZSwgaW5kZXgsIHJvbGVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIChyb2xlIGFzIGFueSkuaW5kZXggPSBpbmRleCArIDE7XG4gICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgICAgIHRoaXMucm93c0NhY2hlID0gWy4uLnJvbGVzXTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSByb2xlcztcblxuICAgICAgICAgICAgICAgIHRoaXMuYWxsUGVybWlzc2lvbnMgPSBwZXJtaXNzaW9ucztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ0xvYWQgRXJyb3InLCBgVW5hYmxlIHRvIHJldHJpZXZlIHJvbGVzIGZyb20gdGhlIHNlcnZlci5cXHJcXG5FcnJvcnM6IFwiJHtVdGlsaXRpZXMuZ2V0SHR0cFJlc3BvbnNlTWVzc2FnZXMoZXJyb3IpfVwiYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXZlcml0eS5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgb25TZWFyY2hDaGFuZ2VkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5yb3dzQ2FjaGUuZmlsdGVyKHIgPT4gVXRpbGl0aWVzLnNlYXJjaEFycmF5KHZhbHVlLCBmYWxzZSwgci5uYW1lLCByLmRlc2NyaXB0aW9uKSk7XG4gICAgfVxuXG5cbiAgICBvbkVkaXRvck1vZGFsSGlkZGVuKCkge1xuICAgICAgICB0aGlzLmVkaXRpbmdSb2xlTmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMucm9sZUVkaXRvci5yZXNldEZvcm0odHJ1ZSk7XG4gICAgfVxuXG5cbiAgICBuZXdSb2xlKCkge1xuICAgICAgICB0aGlzLmVkaXRpbmdSb2xlTmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc291cmNlUm9sZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZWRpdGVkUm9sZSA9IHRoaXMucm9sZUVkaXRvci5uZXdSb2xlKHRoaXMuYWxsUGVybWlzc2lvbnMpO1xuICAgICAgICB0aGlzLmVkaXRvck1vZGFsLnNob3coKTtcbiAgICB9XG5cblxuICAgIGVkaXRSb2xlKHJvdzogUm9sZSkge1xuICAgICAgICB0aGlzLmVkaXRpbmdSb2xlTmFtZSA9IHsgbmFtZTogcm93Lm5hbWUgfTtcbiAgICAgICAgdGhpcy5zb3VyY2VSb2xlID0gcm93O1xuICAgICAgICB0aGlzLmVkaXRlZFJvbGUgPSB0aGlzLnJvbGVFZGl0b3IuZWRpdFJvbGUocm93LCB0aGlzLmFsbFBlcm1pc3Npb25zKTtcbiAgICAgICAgdGhpcy5lZGl0b3JNb2RhbC5zaG93KCk7XG4gICAgfVxuXG4gICAgZGVsZXRlUm9sZShyb3c6IFJvbGUpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd0RpYWxvZygnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgXFxcIicgKyByb3cubmFtZSArICdcXFwiIHJvbGU/JywgRGlhbG9nVHlwZS5jb25maXJtLCAoKSA9PiB0aGlzLmRlbGV0ZVJvbGVIZWxwZXIocm93KSk7XG4gICAgfVxuXG5cbiAgICBkZWxldGVSb2xlSGVscGVyKHJvdzogUm9sZSkge1xuXG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0YXJ0TG9hZGluZ01lc3NhZ2UoJ0RlbGV0aW5nLi4uJyk7XG4gICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5kZWxldGVSb2xlKHJvdylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJvd3NDYWNoZSA9IHRoaXMucm93c0NhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHJvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5yb3dzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHJvdyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdEZWxldGUgRXJyb3InLCBgQW4gZXJyb3Igb2NjdXJlZCB3aGlsc3QgZGVsZXRpbmcgdGhlIHJvbGUuXFxyXFxuRXJyb3I6IFwiJHtVdGlsaXRpZXMuZ2V0SHR0cFJlc3BvbnNlTWVzc2FnZXMoZXJyb3IpfVwiYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXZlcml0eS5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZ2V0IGNhbk1hbmFnZVJvbGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50U2VydmljZS51c2VySGFzUGVybWlzc2lvbihQZXJtaXNzaW9uLm1hbmFnZVJvbGVzUGVybWlzc2lvbik7XG4gICAgfVxuXG59XG4iXX0=