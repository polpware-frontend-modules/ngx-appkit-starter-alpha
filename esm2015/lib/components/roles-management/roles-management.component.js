/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/roles-management/roles-management.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class RolesManagementComponent {
    /**
     * @param {?} alertService
     * @param {?} translationService
     * @param {?} accountService
     */
    constructor(alertService, translationService, accountService) {
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
    ngOnInit() {
        /** @type {?} */
        const gT = (/**
         * @param {?} key
         * @return {?}
         */
        (key) => this.translationService.getTranslation(key));
        this.columns = [
            { prop: 'index', name: '#', width: 50, cellTemplate: this.indexTemplate, canAutoResize: false },
            { prop: 'name', name: gT('roles.management.Name'), width: 180 },
            { prop: 'description', name: gT('roles.management.Description'), width: 320 },
            { prop: 'usersCount', name: gT('roles.management.Users'), width: 50 },
            { name: '', width: 160, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
        ];
        this.loadData();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.roleEditor.changesSavedCallback = (/**
         * @return {?}
         */
        () => {
            this.addNewRoleToList();
            this.editorModal.hide();
        });
        this.roleEditor.changesCancelledCallback = (/**
         * @return {?}
         */
        () => {
            this.editedRole = null;
            this.sourceRole = null;
            this.editorModal.hide();
        });
    }
    /**
     * @return {?}
     */
    addNewRoleToList() {
        if (this.sourceRole) {
            Object.assign(this.sourceRole, this.editedRole);
            /** @type {?} */
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
            /** @type {?} */
            const role = new Role();
            Object.assign(role, this.editedRole);
            this.editedRole = null;
            /** @type {?} */
            let maxIndex = 0;
            for (const r of this.rowsCache) {
                if (((/** @type {?} */ (r))).index > maxIndex) {
                    maxIndex = ((/** @type {?} */ (r))).index;
                }
            }
            ((/** @type {?} */ (role))).index = maxIndex + 1;
            this.rowsCache.splice(0, 0, role);
            this.rows.splice(0, 0, role);
            this.rows = [...this.rows];
        }
    }
    /**
     * @return {?}
     */
    loadData() {
        this.alertService.startLoadingMessage();
        this.loadingIndicator = true;
        this.accountService.getRolesAndPermissions()
            .subscribe((/**
         * @param {?} results
         * @return {?}
         */
        results => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            /** @type {?} */
            const roles = results[0];
            /** @type {?} */
            const permissions = results[1];
            roles.forEach((/**
             * @param {?} role
             * @param {?} index
             * @param {?} roles
             * @return {?}
             */
            (role, index, roles) => {
                ((/** @type {?} */ (role))).index = index + 1;
            }));
            this.rowsCache = [...roles];
            this.rows = roles;
            this.allPermissions = permissions;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.alertService.showStickyMessage('Load Error', `Unable to retrieve roles from the server.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        }));
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
        r => Utilities.searchArray(value, false, r.name, r.description)));
    }
    /**
     * @return {?}
     */
    onEditorModalHidden() {
        this.editingRoleName = null;
        this.roleEditor.resetForm(true);
    }
    /**
     * @return {?}
     */
    newRole() {
        this.editingRoleName = null;
        this.sourceRole = null;
        this.editedRole = this.roleEditor.newRole(this.allPermissions);
        this.editorModal.show();
    }
    /**
     * @param {?} row
     * @return {?}
     */
    editRole(row) {
        this.editingRoleName = { name: row.name };
        this.sourceRole = row;
        this.editedRole = this.roleEditor.editRole(row, this.allPermissions);
        this.editorModal.show();
    }
    /**
     * @param {?} row
     * @return {?}
     */
    deleteRole(row) {
        this.alertService.showDialog('Are you sure you want to delete the \"' + row.name + '\" role?', DialogType.confirm, (/**
         * @return {?}
         */
        () => this.deleteRoleHelper(row)));
    }
    /**
     * @param {?} row
     * @return {?}
     */
    deleteRoleHelper(row) {
        this.alertService.startLoadingMessage('Deleting...');
        this.loadingIndicator = true;
        this.accountService.deleteRole(row)
            .subscribe((/**
         * @param {?} results
         * @return {?}
         */
        results => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
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
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.alertService.showStickyMessage('Delete Error', `An error occured whilst deleting the role.\r\nError: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        }));
    }
    /**
     * @return {?}
     */
    get canManageRoles() {
        return this.accountService.userHasPermission(Permission.manageRolesPermission);
    }
}
RolesManagementComponent.decorators = [
    { type: Component, args: [{
                selector: 'roles-management',
                template: "<div>\n  <div class=\"row control-box\">\n    <div class=\"col-lg-8\">\n      <div class=\"form-group search-box\">\n        <search-box (searchChange)=\"onSearchChanged($event)\" placeholder=\"{{'roles.management.Search' | translate}}\">></search-box>\n      </div>\n    </div>\n    <div class=\"col-lg-4 pr-lg-5\">\n      <ul class=\"nav flex-column flex-lg-row justify-content-end\">\n        <li *ngIf=\"canManageRoles\" class=\"nav-item toolbaritem\">\n          <a class=\"nav-link\" href=\"javascript:;\" (click)=\"newRole()\">\n            <i class=\"fa fa-plus-circle\"></i> {{'roles.management.NewRole' | translate}}\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <ngx-datatable class=\"material colored-header sm table table-striped table-hover\"\n                 [loadingIndicator]=\"loadingIndicator\"\n                 [rows]=\"rows\"\n                 [rowHeight]=\"35\"\n                 [headerHeight]=\"35\"\n                 [footerHeight]=\"35\"\n                 [columns]=\"columns\"\n                 [scrollbarV]=\"true\"\n                 [columnMode]=\"'force'\">\n  </ngx-datatable>\n\n  <ng-template #indexTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n  </ng-template>\n\n\n  <ng-template #actionsTemplate let-row=\"row\" let-value=\"value\" let-i=\"index\">\n    <a *ngIf=\"canManageRoles\" class=\"btn btn-link btn-sm\" href=\"javascript:;\" (click)=\"editRole(row)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> {{'roles.management.Edit' | translate}}</a>\n    <a *ngIf=\"!canManageRoles\" class=\"btn btn-link btn-sm\" href=\"javascript:;\" (click)=\"editRole(row)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> {{'roles.management.Details' | translate}}</a>\n    {{canManageRoles ? '|' : ''}}\n    <a *ngIf=\"canManageRoles\" class=\"btn btn-link btn-sm\" href=\"javascript:;\" (click)=\"deleteRole(row)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> {{'roles.management.Delete' | translate}}</a>\n  </ng-template>\n\n\n  <div class=\"modal fade\" bsModal #editorModal=\"bs-modal\" (onHidden)=\"onEditorModalHidden()\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 *ngIf=\"!canManageRoles\" class=\"modal-title float-left\"><i class=\"fa fa-shield\"></i> {{'roles.management.RoleDetails' | translate:editingRoleName}}</h4>\n          <h4 *ngIf=\"canManageRoles\" class=\"modal-title float-left\"><i class=\"fa fa-shield\"></i> {{editingRoleName ? ('roles.management.EditRole' | translate:editingRoleName) : ('roles.management.NewRole' | translate)}}</h4>\n          <button type=\"button\" class=\"close float-right\" title=\"Close\" (click)=\"editorModal.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <role-editor #roleEditor></role-editor>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".control-box{margin-bottom:5px}.search-box{margin:0}.nav-item.toolbaritem a{padding-top:3px;padding-bottom:3px;min-width:100px}"]
            }] }
];
/** @nocollapse */
RolesManagementComponent.ctorParameters = () => [
    { type: AlertService },
    { type: AppTranslationService },
    { type: AccountService }
];
RolesManagementComponent.propDecorators = {
    indexTemplate: [{ type: ViewChild, args: ['indexTemplate', { static: true },] }],
    actionsTemplate: [{ type: ViewChild, args: ['actionsTemplate', { static: true },] }],
    editorModal: [{ type: ViewChild, args: ['editorModal', { static: true },] }],
    roleEditor: [{ type: ViewChild, args: ['roleEditor', { static: true },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZXMtbWFuYWdlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcm9sZXMtbWFuYWdlbWVudC9yb2xlcy1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUF5QixXQUFXLEVBQUUsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVyRCxPQUFPLEVBQ0gsVUFBVSxFQUFFLGVBQWUsRUFDM0IsU0FBUyxFQUNaLE1BQU0sc0NBQXNDLENBQUM7QUFHOUMsT0FBTyxFQUNILFlBQVksRUFDWixxQkFBcUIsRUFHeEIsTUFBTSxxQ0FBcUMsQ0FBQztBQUU3QyxPQUFPLEVBQ0gsVUFBVSxFQUNiLE1BQU0sc0JBQXNCLENBQUM7QUFFOUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQVEzRSxNQUFNLE9BQU8sd0JBQXdCOzs7Ozs7SUF3QmpDLFlBQW9CLFlBQTBCLEVBQVUsa0JBQXlDLEVBQVUsY0FBOEI7UUFBckgsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXVCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBdkJ6SSxZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixtQkFBYyxHQUFpQixFQUFFLENBQUM7SUFxQmxDLENBQUM7Ozs7SUFHRCxRQUFR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Qjs7SUFDakIsbURBQWtDOztJQUNsQyxvREFBMEI7O0lBSTFCLGlEQUNnQzs7SUFFaEMsbURBQ2tDOztJQUVsQywrQ0FDNEI7O0lBRTVCLDhDQUNnQzs7Ozs7SUFFcEIsZ0RBQWtDOzs7OztJQUFFLHNEQUFpRDs7Ozs7SUFBRSxrREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaXJlY3RpdmUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcblxuaW1wb3J0IHtcbiAgICBEaWFsb2dUeXBlLCBNZXNzYWdlU2V2ZXJpdHksXG4gICAgVXRpbGl0aWVzXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cblxuaW1wb3J0IHtcbiAgICBBbGVydFNlcnZpY2UsXG4gICAgQXBwVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIExvY2FsU3RvcmVNYW5hZ2VyLFxuICAgIENvbmZpZ3VyYXRpb25TZXJ2aWNlXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXNlcnZpY2VzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBQZXJtaXNzaW9uXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtb2F1dGgyJztcblxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgUm9sZSB9IGZyb20gJy4uLy4uL21vZGVscy9yb2xlLm1vZGVsJztcbmltcG9ydCB7IFJvbGVFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi9yb2xlLWVkaXRvci9yb2xlLWVkaXRvci5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncm9sZXMtbWFuYWdlbWVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3JvbGVzLW1hbmFnZW1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3JvbGVzLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSb2xlc01hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIGNvbHVtbnM6IGFueVtdID0gW107XG4gICAgcm93czogUm9sZVtdID0gW107XG4gICAgcm93c0NhY2hlOiBSb2xlW10gPSBbXTtcbiAgICBhbGxQZXJtaXNzaW9uczogUGVybWlzc2lvbltdID0gW107XG4gICAgZWRpdGVkUm9sZTogUm9sZTtcbiAgICBzb3VyY2VSb2xlOiBSb2xlO1xuICAgIGVkaXRpbmdSb2xlTmFtZTogeyBuYW1lOiBzdHJpbmcgfTtcbiAgICBsb2FkaW5nSW5kaWNhdG9yOiBib29sZWFuO1xuXG5cblxuICAgIEBWaWV3Q2hpbGQoJ2luZGV4VGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGluZGV4VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdhY3Rpb25zVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGFjdGlvbnNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2VkaXRvck1vZGFsJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBlZGl0b3JNb2RhbDogTW9kYWxEaXJlY3RpdmU7XG5cbiAgICBAVmlld0NoaWxkKCdyb2xlRWRpdG9yJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICByb2xlRWRpdG9yOiBSb2xlRWRpdG9yQ29tcG9uZW50O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSwgcHJpdmF0ZSB0cmFuc2xhdGlvblNlcnZpY2U6IEFwcFRyYW5zbGF0aW9uU2VydmljZSwgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UpIHtcbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIGNvbnN0IGdUID0gKGtleTogc3RyaW5nKSA9PiB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5nZXRUcmFuc2xhdGlvbihrZXkpO1xuXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtcbiAgICAgICAgICAgIHsgcHJvcDogJ2luZGV4JywgbmFtZTogJyMnLCB3aWR0aDogNTAsIGNlbGxUZW1wbGF0ZTogdGhpcy5pbmRleFRlbXBsYXRlLCBjYW5BdXRvUmVzaXplOiBmYWxzZSB9LFxuICAgICAgICAgICAgeyBwcm9wOiAnbmFtZScsIG5hbWU6IGdUKCdyb2xlcy5tYW5hZ2VtZW50Lk5hbWUnKSwgd2lkdGg6IDE4MCB9LFxuICAgICAgICAgICAgeyBwcm9wOiAnZGVzY3JpcHRpb24nLCBuYW1lOiBnVCgncm9sZXMubWFuYWdlbWVudC5EZXNjcmlwdGlvbicpLCB3aWR0aDogMzIwIH0sXG4gICAgICAgICAgICB7IHByb3A6ICd1c2Vyc0NvdW50JywgbmFtZTogZ1QoJ3JvbGVzLm1hbmFnZW1lbnQuVXNlcnMnKSwgd2lkdGg6IDUwIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICcnLCB3aWR0aDogMTYwLCBjZWxsVGVtcGxhdGU6IHRoaXMuYWN0aW9uc1RlbXBsYXRlLCByZXNpemVhYmxlOiBmYWxzZSwgY2FuQXV0b1Jlc2l6ZTogZmFsc2UsIHNvcnRhYmxlOiBmYWxzZSwgZHJhZ2dhYmxlOiBmYWxzZSB9XG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgIH1cblxuXG5cblxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gICAgICAgIHRoaXMucm9sZUVkaXRvci5jaGFuZ2VzU2F2ZWRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkTmV3Um9sZVRvTGlzdCgpO1xuICAgICAgICAgICAgdGhpcy5lZGl0b3JNb2RhbC5oaWRlKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yb2xlRWRpdG9yLmNoYW5nZXNDYW5jZWxsZWRDYWxsYmFjayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWRpdGVkUm9sZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZVJvbGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5lZGl0b3JNb2RhbC5oaWRlKCk7XG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhZGROZXdSb2xlVG9MaXN0KCkge1xuICAgICAgICBpZiAodGhpcy5zb3VyY2VSb2xlKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuc291cmNlUm9sZSwgdGhpcy5lZGl0ZWRSb2xlKTtcblxuICAgICAgICAgICAgbGV0IHNvdXJjZUluZGV4ID0gdGhpcy5yb3dzQ2FjaGUuaW5kZXhPZih0aGlzLnNvdXJjZVJvbGUsIDApO1xuICAgICAgICAgICAgaWYgKHNvdXJjZUluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBVdGlsaXRpZXMubW92ZUFycmF5SXRlbSh0aGlzLnJvd3NDYWNoZSwgc291cmNlSW5kZXgsIDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzb3VyY2VJbmRleCA9IHRoaXMucm93cy5pbmRleE9mKHRoaXMuc291cmNlUm9sZSwgMCk7XG4gICAgICAgICAgICBpZiAoc291cmNlSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIFV0aWxpdGllcy5tb3ZlQXJyYXlJdGVtKHRoaXMucm93cywgc291cmNlSW5kZXgsIDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmVkaXRlZFJvbGUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zb3VyY2VSb2xlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHJvbGUgPSBuZXcgUm9sZSgpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihyb2xlLCB0aGlzLmVkaXRlZFJvbGUpO1xuICAgICAgICAgICAgdGhpcy5lZGl0ZWRSb2xlID0gbnVsbDtcblxuICAgICAgICAgICAgbGV0IG1heEluZGV4ID0gMDtcbiAgICAgICAgICAgIGZvciAoY29uc3QgciBvZiB0aGlzLnJvd3NDYWNoZSkge1xuICAgICAgICAgICAgICAgIGlmICgociBhcyBhbnkpLmluZGV4ID4gbWF4SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4SW5kZXggPSAociBhcyBhbnkpLmluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgKHJvbGUgYXMgYW55KS5pbmRleCA9IG1heEluZGV4ICsgMTtcblxuICAgICAgICAgICAgdGhpcy5yb3dzQ2FjaGUuc3BsaWNlKDAsIDAsIHJvbGUpO1xuICAgICAgICAgICAgdGhpcy5yb3dzLnNwbGljZSgwLCAwLCByb2xlKTtcbiAgICAgICAgICAgIHRoaXMucm93cyA9IFsuLi50aGlzLnJvd3NdO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG4gICAgbG9hZERhdGEoKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0YXJ0TG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmdldFJvbGVzQW5kUGVybWlzc2lvbnMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJvbGVzID0gcmVzdWx0c1swXTtcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJtaXNzaW9ucyA9IHJlc3VsdHNbMV07XG5cbiAgICAgICAgICAgICAgICByb2xlcy5mb3JFYWNoKChyb2xlLCBpbmRleCwgcm9sZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgKHJvbGUgYXMgYW55KS5pbmRleCA9IGluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzQ2FjaGUgPSBbLi4ucm9sZXNdO1xuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IHJvbGVzO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxQZXJtaXNzaW9ucyA9IHBlcm1pc3Npb25zO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZSgnTG9hZCBFcnJvcicsIGBVbmFibGUgdG8gcmV0cmlldmUgcm9sZXMgZnJvbSB0aGUgc2VydmVyLlxcclxcbkVycm9yczogXCIke1V0aWxpdGllcy5nZXRIdHRwUmVzcG9uc2VNZXNzYWdlcyhlcnJvcil9XCJgLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBvblNlYXJjaENoYW5nZWQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLnJvd3NDYWNoZS5maWx0ZXIociA9PiBVdGlsaXRpZXMuc2VhcmNoQXJyYXkodmFsdWUsIGZhbHNlLCByLm5hbWUsIHIuZGVzY3JpcHRpb24pKTtcbiAgICB9XG5cblxuICAgIG9uRWRpdG9yTW9kYWxIaWRkZW4oKSB7XG4gICAgICAgIHRoaXMuZWRpdGluZ1JvbGVOYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5yb2xlRWRpdG9yLnJlc2V0Rm9ybSh0cnVlKTtcbiAgICB9XG5cblxuICAgIG5ld1JvbGUoKSB7XG4gICAgICAgIHRoaXMuZWRpdGluZ1JvbGVOYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5zb3VyY2VSb2xlID0gbnVsbDtcbiAgICAgICAgdGhpcy5lZGl0ZWRSb2xlID0gdGhpcy5yb2xlRWRpdG9yLm5ld1JvbGUodGhpcy5hbGxQZXJtaXNzaW9ucyk7XG4gICAgICAgIHRoaXMuZWRpdG9yTW9kYWwuc2hvdygpO1xuICAgIH1cblxuXG4gICAgZWRpdFJvbGUocm93OiBSb2xlKSB7XG4gICAgICAgIHRoaXMuZWRpdGluZ1JvbGVOYW1lID0geyBuYW1lOiByb3cubmFtZSB9O1xuICAgICAgICB0aGlzLnNvdXJjZVJvbGUgPSByb3c7XG4gICAgICAgIHRoaXMuZWRpdGVkUm9sZSA9IHRoaXMucm9sZUVkaXRvci5lZGl0Um9sZShyb3csIHRoaXMuYWxsUGVybWlzc2lvbnMpO1xuICAgICAgICB0aGlzLmVkaXRvck1vZGFsLnNob3coKTtcbiAgICB9XG5cbiAgICBkZWxldGVSb2xlKHJvdzogUm9sZSkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93RGlhbG9nKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBcXFwiJyArIHJvdy5uYW1lICsgJ1xcXCIgcm9sZT8nLCBEaWFsb2dUeXBlLmNvbmZpcm0sICgpID0+IHRoaXMuZGVsZXRlUm9sZUhlbHBlcihyb3cpKTtcbiAgICB9XG5cblxuICAgIGRlbGV0ZVJvbGVIZWxwZXIocm93OiBSb2xlKSB7XG5cbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RhcnRMb2FkaW5nTWVzc2FnZSgnRGVsZXRpbmcuLi4nKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmRlbGV0ZVJvbGUocm93KVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHRoaXMucm93c0NhY2hlID0gdGhpcy5yb3dzQ2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gcm93KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLnJvd3MuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gcm93KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ0RlbGV0ZSBFcnJvcicsIGBBbiBlcnJvciBvY2N1cmVkIHdoaWxzdCBkZWxldGluZyB0aGUgcm9sZS5cXHJcXG5FcnJvcjogXCIke1V0aWxpdGllcy5nZXRIdHRwUmVzcG9uc2VNZXNzYWdlcyhlcnJvcil9XCJgLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBnZXQgY2FuTWFuYWdlUm9sZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRTZXJ2aWNlLnVzZXJIYXNQZXJtaXNzaW9uKFBlcm1pc3Npb24ubWFuYWdlUm9sZXNQZXJtaXNzaW9uKTtcbiAgICB9XG5cbn1cbiJdfQ==