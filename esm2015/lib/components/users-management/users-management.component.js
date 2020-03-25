/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/users-management/users-management.component.ts
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
import { Permission, User } from '@polpware/ngx-oauth2';
import { AccountService } from '../../services/account.service';
import { Role } from '../../models/role.model';
import { UserInfoComponent } from '../user-info/user-info.component';
export class UsersManagementComponent {
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
        this.allRoles = [];
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
            { prop: 'index', name: '#', width: 40, cellTemplate: this.indexTemplate, canAutoResize: false },
            { prop: 'jobTitle', name: gT('users.management.Title'), width: 50 },
            { prop: 'userName', name: gT('users.management.UserName'), width: 90, cellTemplate: this.userNameTemplate },
            { prop: 'fullName', name: gT('users.management.FullName'), width: 120 },
            { prop: 'email', name: gT('users.management.Email'), width: 140 },
            { prop: 'roles', name: gT('users.management.Roles'), width: 120, cellTemplate: this.rolesTemplate },
            { prop: 'phoneNumber', name: gT('users.management.PhoneNumber'), width: 100 }
        ];
        if (this.canManageUsers) {
            this.columns.push({ name: '', width: 160, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false });
        }
        this.loadData();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.userEditor.changesSavedCallback = (/**
         * @return {?}
         */
        () => {
            this.addNewUserToList();
            this.editorModal.hide();
        });
        this.userEditor.changesCancelledCallback = (/**
         * @return {?}
         */
        () => {
            this.editedUser = null;
            this.sourceUser = null;
            this.editorModal.hide();
        });
    }
    /**
     * @return {?}
     */
    addNewUserToList() {
        if (this.sourceUser) {
            Object.assign(this.sourceUser, this.editedUser);
            /** @type {?} */
            let sourceIndex = this.rowsCache.indexOf(this.sourceUser, 0);
            if (sourceIndex > -1) {
                Utilities.moveArrayItem(this.rowsCache, sourceIndex, 0);
            }
            sourceIndex = this.rows.indexOf(this.sourceUser, 0);
            if (sourceIndex > -1) {
                Utilities.moveArrayItem(this.rows, sourceIndex, 0);
            }
            this.editedUser = null;
            this.sourceUser = null;
        }
        else {
            /** @type {?} */
            const user = new User();
            Object.assign(user, this.editedUser);
            this.editedUser = null;
            /** @type {?} */
            let maxIndex = 0;
            for (const u of this.rowsCache) {
                if (((/** @type {?} */ (u))).index > maxIndex) {
                    maxIndex = ((/** @type {?} */ (u))).index;
                }
            }
            ((/** @type {?} */ (user))).index = maxIndex + 1;
            this.rowsCache.splice(0, 0, user);
            this.rows.splice(0, 0, user);
            this.rows = [...this.rows];
        }
    }
    /**
     * @return {?}
     */
    loadData() {
        this.alertService.startLoadingMessage();
        this.loadingIndicator = true;
        if (this.canViewRoles) {
            this.accountService.getUsersAndRoles().subscribe((/**
             * @param {?} results
             * @return {?}
             */
            results => this.onDataLoadSuccessful(results[0], results[1])), (/**
             * @param {?} error
             * @return {?}
             */
            error => this.onDataLoadFailed(error)));
        }
        else {
            this.accountService.getUsers().subscribe((/**
             * @param {?} users
             * @return {?}
             */
            users => this.onDataLoadSuccessful(users, this.accountService.currentUser.roles.map((/**
             * @param {?} x
             * @return {?}
             */
            x => new Role(x))))), (/**
             * @param {?} error
             * @return {?}
             */
            error => this.onDataLoadFailed(error)));
        }
    }
    /**
     * @param {?} users
     * @param {?} roles
     * @return {?}
     */
    onDataLoadSuccessful(users, roles) {
        this.alertService.stopLoadingMessage();
        this.loadingIndicator = false;
        users.forEach((/**
         * @param {?} user
         * @param {?} index
         * @param {?} users
         * @return {?}
         */
        (user, index, users) => {
            ((/** @type {?} */ (user))).index = index + 1;
        }));
        this.rowsCache = [...users];
        this.rows = users;
        this.allRoles = roles;
    }
    /**
     * @param {?} error
     * @return {?}
     */
    onDataLoadFailed(error) {
        this.alertService.stopLoadingMessage();
        this.loadingIndicator = false;
        this.alertService.showStickyMessage('Load Error', `Unable to retrieve users from the server.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
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
        r => Utilities.searchArray(value, false, r.userName, r.fullName, r.email, r.phoneNumber, r.jobTitle, r.roles)));
    }
    /**
     * @return {?}
     */
    onEditorModalHidden() {
        this.editingUserName = null;
        this.userEditor.resetForm(true);
    }
    /**
     * @return {?}
     */
    newUser() {
        this.editingUserName = null;
        this.sourceUser = null;
        this.editedUser = this.userEditor.newUser(this.allRoles);
        this.editorModal.show();
    }
    /**
     * @param {?} row
     * @return {?}
     */
    editUser(row) {
        this.editingUserName = { name: row.userName };
        this.sourceUser = row;
        this.editedUser = this.userEditor.editUser(row, this.allRoles);
        this.editorModal.show();
    }
    /**
     * @param {?} row
     * @return {?}
     */
    deleteUser(row) {
        this.alertService.showDialog('Are you sure you want to delete \"' + row.userName + '\"?', DialogType.confirm, (/**
         * @return {?}
         */
        () => this.deleteUserHelper(row)));
    }
    /**
     * @param {?} row
     * @return {?}
     */
    deleteUserHelper(row) {
        this.alertService.startLoadingMessage('Deleting...');
        this.loadingIndicator = true;
        this.accountService.deleteUser(row)
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
            this.alertService.showStickyMessage('Delete Error', `An error occured whilst deleting the user.\r\nError: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        }));
    }
    /**
     * @return {?}
     */
    get canAssignRoles() {
        return this.accountService.userHasPermission(Permission.assignRolesPermission);
    }
    /**
     * @return {?}
     */
    get canViewRoles() {
        return this.accountService.userHasPermission(Permission.viewRolesPermission);
    }
    /**
     * @return {?}
     */
    get canManageUsers() {
        return this.accountService.userHasPermission(Permission.manageUsersPermission);
    }
}
UsersManagementComponent.decorators = [
    { type: Component, args: [{
                selector: 'users-management',
                template: "<div>\n  <div class=\"row control-box\">\n    <div class=\"col-lg-8\">\n      <div class=\"form-group search-box\">\n        <search-box (searchChange)=\"onSearchChanged($event)\" placeholder=\"{{'users.management.Search' | translate}}\">></search-box>\n      </div>\n    </div>\n    <div class=\"col-lg-4 pr-lg-5\">\n      <ul class=\"nav flex-column flex-lg-row justify-content-end\">\n        <li *ngIf=\"canManageUsers && canAssignRoles\" class=\"nav-item toolbaritem\">\n          <a class=\"nav-link\" href=\"javascript:;\" (click)=\"newUser()\">\n            <i class=\"fa fa-plus-circle\"></i> {{'users.management.NewUser' | translate}}\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <ngx-datatable class=\"material colored-header sm table table-striped table-hover\"\n                 [loadingIndicator]=\"loadingIndicator\"\n                 [rows]=\"rows\"\n                 [rowHeight]=\"35\"\n                 [headerHeight]=\"35\"\n                 [footerHeight]=\"35\"\n                 [columns]=\"columns\"\n                 [scrollbarV]=\"true\"\n                 [columnMode]=\"'force'\">\n  </ngx-datatable>\n\n  <ng-template #indexTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n  </ng-template>\n\n  <ng-template #userNameTemplate let-row=\"row\" let-value=\"value\">\n    <span [class.locked-out]=\"row.isLockedOut\" [class.user-disabled]=\"!row.isEnabled\">\n      <i *ngIf=\"row.isLockedOut\" class=\"fa fa-exclamation-triangle\"> </i>\n      <i *ngIf=\"!row.isEnabled\" class=\"fa fa-exclamation\"> </i>\n      {{value}}\n    </span>\n  </ng-template>\n\n  <ng-template #rolesTemplate let-row=\"row\" let-value=\"value\" let-i=\"index\">\n    <span class=\"user-role badge badge-pill badge-secondary\" *ngFor=\"let role of value\">{{role}}</span>\n  </ng-template>\n\n  <ng-template #actionsTemplate let-row=\"row\" let-value=\"value\" let-i=\"index\">\n    <div *ngIf=\"canManageUsers\">\n      <a class=\"btn btn-link btn-sm\" href=\"javascript:;\" (click)=\"editUser(row)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> {{'users.management.Edit' | translate}}</a>|\n      <a class=\"btn btn-link btn-sm\" href=\"javascript:;\" (click)=\"deleteUser(row)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> {{'users.management.Delete' | translate}}</a>\n    </div>\n  </ng-template>\n\n\n  <div class=\"modal fade\" bsModal #editorModal=\"bs-modal\" (onHidden)=\"onEditorModalHidden()\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 *ngIf=\"!editingUserName\" class=\"modal-title float-left\"><i class=\"fa fa-user-plus\"></i> {{'users.management.NewUser' | translate}}</h4>\n          <h4 *ngIf=\"editingUserName\" class=\"modal-title float-left\"><i class=\"fa fa-user-circle-o\"></i> {{'users.management.EditUser' | translate:editingUserName}}</h4>\n          <button type=\"button\" class=\"close float-right\" title=\"Close\" (click)=\"editorModal.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <user-info #userEditor [isGeneralEditor]=\"true\"></user-info>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".user-role{font-size:.8em!important;margin-right:1px}.control-box{margin-bottom:5px}.search-box{margin:0}.nav-item.toolbaritem a{padding-top:3px;padding-bottom:3px;min-width:100px}.user-disabled{color:#777;font-style:italic}.locked-out{background-color:#ff4500;color:#f5f5f5;width:100%;display:inline-block;padding-left:5px}"]
            }] }
];
/** @nocollapse */
UsersManagementComponent.ctorParameters = () => [
    { type: AlertService },
    { type: AppTranslationService },
    { type: AccountService }
];
UsersManagementComponent.propDecorators = {
    indexTemplate: [{ type: ViewChild, args: ['indexTemplate', { static: true },] }],
    userNameTemplate: [{ type: ViewChild, args: ['userNameTemplate', { static: true },] }],
    rolesTemplate: [{ type: ViewChild, args: ['rolesTemplate', { static: true },] }],
    actionsTemplate: [{ type: ViewChild, args: ['actionsTemplate', { static: true },] }],
    editorModal: [{ type: ViewChild, args: ['editorModal', { static: true },] }],
    userEditor: [{ type: ViewChild, args: ['userEditor', { static: true },] }]
};
if (false) {
    /** @type {?} */
    UsersManagementComponent.prototype.columns;
    /** @type {?} */
    UsersManagementComponent.prototype.rows;
    /** @type {?} */
    UsersManagementComponent.prototype.rowsCache;
    /** @type {?} */
    UsersManagementComponent.prototype.editedUser;
    /** @type {?} */
    UsersManagementComponent.prototype.sourceUser;
    /** @type {?} */
    UsersManagementComponent.prototype.editingUserName;
    /** @type {?} */
    UsersManagementComponent.prototype.loadingIndicator;
    /** @type {?} */
    UsersManagementComponent.prototype.allRoles;
    /** @type {?} */
    UsersManagementComponent.prototype.indexTemplate;
    /** @type {?} */
    UsersManagementComponent.prototype.userNameTemplate;
    /** @type {?} */
    UsersManagementComponent.prototype.rolesTemplate;
    /** @type {?} */
    UsersManagementComponent.prototype.actionsTemplate;
    /** @type {?} */
    UsersManagementComponent.prototype.editorModal;
    /** @type {?} */
    UsersManagementComponent.prototype.userEditor;
    /**
     * @type {?}
     * @private
     */
    UsersManagementComponent.prototype.alertService;
    /**
     * @type {?}
     * @private
     */
    UsersManagementComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    UsersManagementComponent.prototype.accountService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMtbWFuYWdlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXNlcnMtbWFuYWdlbWVudC91c2Vycy1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUF5QixXQUFXLEVBQUUsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVyRCxPQUFPLEVBQ0gsVUFBVSxFQUFFLGVBQWUsRUFDM0IsU0FBUyxFQUNaLE1BQU0sc0NBQXNDLENBQUM7QUFFOUMsT0FBTyxFQUNILFlBQVksRUFDWixxQkFBcUIsRUFDeEIsTUFBTSxxQ0FBcUMsQ0FBQztBQUU3QyxPQUFPLEVBQ0gsVUFBVSxFQUNWLElBQUksRUFDUCxNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFRckUsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7O0lBOEJqQyxZQUFvQixZQUEwQixFQUFVLGtCQUF5QyxFQUFVLGNBQThCO1FBQXJILGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUF1QjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQTdCekksWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUNwQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFNdkIsYUFBUSxHQUFXLEVBQUUsQ0FBQztJQXNCdEIsQ0FBQzs7OztJ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QUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs0QkFHOUMsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7OEJBRzNDLFNBQVMsU0FBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MEJBRzdDLFNBQVMsU0FBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3lCQUd6QyxTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQTFCekMsMkNBQW9COztJQUNwQix3Q0FBa0I7O0lBQ2xCLDZDQUF1Qjs7SUFDdkIsOENBQXFCOztJQUNyQiw4Q0FBcUI7O0lBQ3JCLG1EQUFrQzs7SUFDbEMsb0RBQTBCOztJQUUxQiw0Q0FBc0I7O0lBR3RCLGlEQUNnQzs7SUFFaEMsb0RBQ21DOztJQUVuQyxpREFDZ0M7O0lBRWhDLG1EQUNrQzs7SUFFbEMsK0NBQzRCOztJQUU1Qiw4Q0FDOEI7Ozs7O0lBRWxCLGdEQUFrQzs7Ozs7SUFBRSxzREFBaUQ7Ozs7O0lBQUUsa0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XG5cbmltcG9ydCB7XG4gICAgRGlhbG9nVHlwZSwgTWVzc2FnZVNldmVyaXR5LFxuICAgIFV0aWxpdGllc1xufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1jb250cmFjdHMtYWxwaGEnO1xuXG5pbXBvcnQge1xuICAgIEFsZXJ0U2VydmljZSxcbiAgICBBcHBUcmFuc2xhdGlvblNlcnZpY2Vcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtc2VydmljZXMtYWxwaGEnO1xuXG5pbXBvcnQge1xuICAgIFBlcm1pc3Npb24sXG4gICAgVXNlclxufSBmcm9tICdAcG9scHdhcmUvbmd4LW9hdXRoMic7XG5cbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWNjb3VudC5zZXJ2aWNlJztcbmltcG9ydCB7IFJvbGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvcm9sZS5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyRWRpdCB9IGZyb20gJy4uLy4uL21vZGVscy91c2VyLWVkaXQubW9kZWwnO1xuaW1wb3J0IHsgVXNlckluZm9Db21wb25lbnQgfSBmcm9tICcuLi91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd1c2Vycy1tYW5hZ2VtZW50JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlcnMtbWFuYWdlbWVudC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdXNlcnMtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJzTWFuYWdlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgY29sdW1uczogYW55W10gPSBbXTtcbiAgICByb3dzOiBVc2VyW10gPSBbXTtcbiAgICByb3dzQ2FjaGU6IFVzZXJbXSA9IFtdO1xuICAgIGVkaXRlZFVzZXI6IFVzZXJFZGl0O1xuICAgIHNvdXJjZVVzZXI6IFVzZXJFZGl0O1xuICAgIGVkaXRpbmdVc2VyTmFtZTogeyBuYW1lOiBzdHJpbmcgfTtcbiAgICBsb2FkaW5nSW5kaWNhdG9yOiBib29sZWFuO1xuXG4gICAgYWxsUm9sZXM6IFJvbGVbXSA9IFtdO1xuXG5cbiAgICBAVmlld0NoaWxkKCdpbmRleFRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBpbmRleFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgndXNlck5hbWVUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgdXNlck5hbWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ3JvbGVzVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHJvbGVzVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdhY3Rpb25zVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGFjdGlvbnNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2VkaXRvck1vZGFsJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBlZGl0b3JNb2RhbDogTW9kYWxEaXJlY3RpdmU7XG5cbiAgICBAVmlld0NoaWxkKCd1c2VyRWRpdG9yJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICB1c2VyRWRpdG9yOiBVc2VySW5mb0NvbXBvbmVudDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsIHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBBcHBUcmFuc2xhdGlvblNlcnZpY2UsIHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlKSB7XG4gICAgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICBjb25zdCBnVCA9IChrZXk6IHN0cmluZykgPT4gdGhpcy50cmFuc2xhdGlvblNlcnZpY2UuZ2V0VHJhbnNsYXRpb24oa2V5KTtcblxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXG4gICAgICAgICAgICB7IHByb3A6ICdpbmRleCcsIG5hbWU6ICcjJywgd2lkdGg6IDQwLCBjZWxsVGVtcGxhdGU6IHRoaXMuaW5kZXhUZW1wbGF0ZSwgY2FuQXV0b1Jlc2l6ZTogZmFsc2UgfSxcbiAgICAgICAgICAgIHsgcHJvcDogJ2pvYlRpdGxlJywgbmFtZTogZ1QoJ3VzZXJzLm1hbmFnZW1lbnQuVGl0bGUnKSwgd2lkdGg6IDUwIH0sXG4gICAgICAgICAgICB7IHByb3A6ICd1c2VyTmFtZScsIG5hbWU6IGdUKCd1c2Vycy5tYW5hZ2VtZW50LlVzZXJOYW1lJyksIHdpZHRoOiA5MCwgY2VsbFRlbXBsYXRlOiB0aGlzLnVzZXJOYW1lVGVtcGxhdGUgfSxcbiAgICAgICAgICAgIHsgcHJvcDogJ2Z1bGxOYW1lJywgbmFtZTogZ1QoJ3VzZXJzLm1hbmFnZW1lbnQuRnVsbE5hbWUnKSwgd2lkdGg6IDEyMCB9LFxuICAgICAgICAgICAgeyBwcm9wOiAnZW1haWwnLCBuYW1lOiBnVCgndXNlcnMubWFuYWdlbWVudC5FbWFpbCcpLCB3aWR0aDogMTQwIH0sXG4gICAgICAgICAgICB7IHByb3A6ICdyb2xlcycsIG5hbWU6IGdUKCd1c2Vycy5tYW5hZ2VtZW50LlJvbGVzJyksIHdpZHRoOiAxMjAsIGNlbGxUZW1wbGF0ZTogdGhpcy5yb2xlc1RlbXBsYXRlIH0sXG4gICAgICAgICAgICB7IHByb3A6ICdwaG9uZU51bWJlcicsIG5hbWU6IGdUKCd1c2Vycy5tYW5hZ2VtZW50LlBob25lTnVtYmVyJyksIHdpZHRoOiAxMDAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIGlmICh0aGlzLmNhbk1hbmFnZVVzZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh7IG5hbWU6ICcnLCB3aWR0aDogMTYwLCBjZWxsVGVtcGxhdGU6IHRoaXMuYWN0aW9uc1RlbXBsYXRlLCByZXNpemVhYmxlOiBmYWxzZSwgY2FuQXV0b1Jlc2l6ZTogZmFsc2UsIHNvcnRhYmxlOiBmYWxzZSwgZHJhZ2dhYmxlOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICB9XG5cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgICAgICB0aGlzLnVzZXJFZGl0b3IuY2hhbmdlc1NhdmVkQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZE5ld1VzZXJUb0xpc3QoKTtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yTW9kYWwuaGlkZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMudXNlckVkaXRvci5jaGFuZ2VzQ2FuY2VsbGVkQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVkaXRlZFVzZXIgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zb3VyY2VVc2VyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yTW9kYWwuaGlkZSgpO1xuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYWRkTmV3VXNlclRvTGlzdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc291cmNlVXNlcikge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnNvdXJjZVVzZXIsIHRoaXMuZWRpdGVkVXNlcik7XG5cbiAgICAgICAgICAgIGxldCBzb3VyY2VJbmRleCA9IHRoaXMucm93c0NhY2hlLmluZGV4T2YodGhpcy5zb3VyY2VVc2VyLCAwKTtcbiAgICAgICAgICAgIGlmIChzb3VyY2VJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgVXRpbGl0aWVzLm1vdmVBcnJheUl0ZW0odGhpcy5yb3dzQ2FjaGUsIHNvdXJjZUluZGV4LCAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc291cmNlSW5kZXggPSB0aGlzLnJvd3MuaW5kZXhPZih0aGlzLnNvdXJjZVVzZXIsIDApO1xuICAgICAgICAgICAgaWYgKHNvdXJjZUluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBVdGlsaXRpZXMubW92ZUFycmF5SXRlbSh0aGlzLnJvd3MsIHNvdXJjZUluZGV4LCAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5lZGl0ZWRVc2VyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc291cmNlVXNlciA9IG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odXNlciwgdGhpcy5lZGl0ZWRVc2VyKTtcbiAgICAgICAgICAgIHRoaXMuZWRpdGVkVXNlciA9IG51bGw7XG5cbiAgICAgICAgICAgIGxldCBtYXhJbmRleCA9IDA7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHUgb2YgdGhpcy5yb3dzQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHUgYXMgYW55KS5pbmRleCA+IG1heEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIG1heEluZGV4ID0gKHUgYXMgYW55KS5pbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICh1c2VyIGFzIGFueSkuaW5kZXggPSBtYXhJbmRleCArIDE7XG5cbiAgICAgICAgICAgIHRoaXMucm93c0NhY2hlLnNwbGljZSgwLCAwLCB1c2VyKTtcbiAgICAgICAgICAgIHRoaXMucm93cy5zcGxpY2UoMCwgMCwgdXNlcik7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSBbLi4udGhpcy5yb3dzXTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgbG9hZERhdGEoKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0YXJ0TG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5jYW5WaWV3Um9sZXMpIHtcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuZ2V0VXNlcnNBbmRSb2xlcygpLnN1YnNjcmliZShyZXN1bHRzID0+IHRoaXMub25EYXRhTG9hZFN1Y2Nlc3NmdWwocmVzdWx0c1swXSwgcmVzdWx0c1sxXSksIGVycm9yID0+IHRoaXMub25EYXRhTG9hZEZhaWxlZChlcnJvcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5nZXRVc2VycygpLnN1YnNjcmliZSh1c2VycyA9PiB0aGlzLm9uRGF0YUxvYWRTdWNjZXNzZnVsKHVzZXJzLCB0aGlzLmFjY291bnRTZXJ2aWNlLmN1cnJlbnRVc2VyLnJvbGVzLm1hcCh4ID0+IG5ldyBSb2xlKHgpKSksIGVycm9yID0+IHRoaXMub25EYXRhTG9hZEZhaWxlZChlcnJvcikpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvbkRhdGFMb2FkU3VjY2Vzc2Z1bCh1c2VyczogVXNlcltdLCByb2xlczogUm9sZVtdKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcblxuICAgICAgICB1c2Vycy5mb3JFYWNoKCh1c2VyLCBpbmRleCwgdXNlcnMpID0+IHtcbiAgICAgICAgICAgICh1c2VyIGFzIGFueSkuaW5kZXggPSBpbmRleCArIDE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucm93c0NhY2hlID0gWy4uLnVzZXJzXTtcbiAgICAgICAgdGhpcy5yb3dzID0gdXNlcnM7XG5cbiAgICAgICAgdGhpcy5hbGxSb2xlcyA9IHJvbGVzO1xuICAgIH1cblxuXG4gICAgb25EYXRhTG9hZEZhaWxlZChlcnJvcjogYW55KSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZSgnTG9hZCBFcnJvcicsIGBVbmFibGUgdG8gcmV0cmlldmUgdXNlcnMgZnJvbSB0aGUgc2VydmVyLlxcclxcbkVycm9yczogXCIke1V0aWxpdGllcy5nZXRIdHRwUmVzcG9uc2VNZXNzYWdlcyhlcnJvcil9XCJgLFxuICAgICAgICAgICAgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgfVxuXG5cbiAgICBvblNlYXJjaENoYW5nZWQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLnJvd3NDYWNoZS5maWx0ZXIociA9PiBVdGlsaXRpZXMuc2VhcmNoQXJyYXkodmFsdWUsIGZhbHNlLCByLnVzZXJOYW1lLCByLmZ1bGxOYW1lLCByLmVtYWlsLCByLnBob25lTnVtYmVyLCByLmpvYlRpdGxlLCByLnJvbGVzKSk7XG4gICAgfVxuXG4gICAgb25FZGl0b3JNb2RhbEhpZGRlbigpIHtcbiAgICAgICAgdGhpcy5lZGl0aW5nVXNlck5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLnVzZXJFZGl0b3IucmVzZXRGb3JtKHRydWUpO1xuICAgIH1cblxuXG4gICAgbmV3VXNlcigpIHtcbiAgICAgICAgdGhpcy5lZGl0aW5nVXNlck5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLnNvdXJjZVVzZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmVkaXRlZFVzZXIgPSB0aGlzLnVzZXJFZGl0b3IubmV3VXNlcih0aGlzLmFsbFJvbGVzKTtcbiAgICAgICAgdGhpcy5lZGl0b3JNb2RhbC5zaG93KCk7XG4gICAgfVxuXG5cbiAgICBlZGl0VXNlcihyb3c6IFVzZXJFZGl0KSB7XG4gICAgICAgIHRoaXMuZWRpdGluZ1VzZXJOYW1lID0geyBuYW1lOiByb3cudXNlck5hbWUgfTtcbiAgICAgICAgdGhpcy5zb3VyY2VVc2VyID0gcm93O1xuICAgICAgICB0aGlzLmVkaXRlZFVzZXIgPSB0aGlzLnVzZXJFZGl0b3IuZWRpdFVzZXIocm93LCB0aGlzLmFsbFJvbGVzKTtcbiAgICAgICAgdGhpcy5lZGl0b3JNb2RhbC5zaG93KCk7XG4gICAgfVxuXG5cbiAgICBkZWxldGVVc2VyKHJvdzogVXNlckVkaXQpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd0RpYWxvZygnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBcXFwiJyArIHJvdy51c2VyTmFtZSArICdcXFwiPycsIERpYWxvZ1R5cGUuY29uZmlybSwgKCkgPT4gdGhpcy5kZWxldGVVc2VySGVscGVyKHJvdykpO1xuICAgIH1cblxuXG4gICAgZGVsZXRlVXNlckhlbHBlcihyb3c6IFVzZXJFZGl0KSB7XG5cbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RhcnRMb2FkaW5nTWVzc2FnZSgnRGVsZXRpbmcuLi4nKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmRlbGV0ZVVzZXIocm93KVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHRoaXMucm93c0NhY2hlID0gdGhpcy5yb3dzQ2FjaGUuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gcm93KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLnJvd3MuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gcm93KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ0RlbGV0ZSBFcnJvcicsIGBBbiBlcnJvciBvY2N1cmVkIHdoaWxzdCBkZWxldGluZyB0aGUgdXNlci5cXHJcXG5FcnJvcjogXCIke1V0aWxpdGllcy5nZXRIdHRwUmVzcG9uc2VNZXNzYWdlcyhlcnJvcil9XCJgLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIGdldCBjYW5Bc3NpZ25Sb2xlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudFNlcnZpY2UudXNlckhhc1Blcm1pc3Npb24oUGVybWlzc2lvbi5hc3NpZ25Sb2xlc1Blcm1pc3Npb24pO1xuICAgIH1cblxuICAgIGdldCBjYW5WaWV3Um9sZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRTZXJ2aWNlLnVzZXJIYXNQZXJtaXNzaW9uKFBlcm1pc3Npb24udmlld1JvbGVzUGVybWlzc2lvbik7XG4gICAgfVxuXG4gICAgZ2V0IGNhbk1hbmFnZVVzZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50U2VydmljZS51c2VySGFzUGVybWlzc2lvbihQZXJtaXNzaW9uLm1hbmFnZVVzZXJzUGVybWlzc2lvbik7XG4gICAgfVxufVxuIl19