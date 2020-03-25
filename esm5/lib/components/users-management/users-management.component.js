/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/users-management/users-management.component.ts
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
import { Permission, User } from '@polpware/ngx-oauth2';
import { AccountService } from '../../services/account.service';
import { Role } from '../../models/role.model';
import { UserInfoComponent } from '../user-info/user-info.component';
var UsersManagementComponent = /** @class */ (function () {
    function UsersManagementComponent(alertService, translationService, accountService) {
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
    UsersManagementComponent.prototype.ngOnInit = /**
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
    };
    /**
     * @return {?}
     */
    UsersManagementComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.userEditor.changesSavedCallback = (/**
         * @return {?}
         */
        function () {
            _this.addNewUserToList();
            _this.editorModal.hide();
        });
        this.userEditor.changesCancelledCallback = (/**
         * @return {?}
         */
        function () {
            _this.editedUser = null;
            _this.sourceUser = null;
            _this.editorModal.hide();
        });
    };
    /**
     * @return {?}
     */
    UsersManagementComponent.prototype.addNewUserToList = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        if (this.sourceUser) {
            Object.assign(this.sourceUser, this.editedUser);
            /** @type {?} */
            var sourceIndex = this.rowsCache.indexOf(this.sourceUser, 0);
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
            var user = new User();
            Object.assign(user, this.editedUser);
            this.editedUser = null;
            /** @type {?} */
            var maxIndex = 0;
            try {
                for (var _b = tslib_1.__values(this.rowsCache), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var u = _c.value;
                    if (((/** @type {?} */ (u))).index > maxIndex) {
                        maxIndex = ((/** @type {?} */ (u))).index;
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
            ((/** @type {?} */ (user))).index = maxIndex + 1;
            this.rowsCache.splice(0, 0, user);
            this.rows.splice(0, 0, user);
            this.rows = tslib_1.__spread(this.rows);
        }
    };
    /**
     * @return {?}
     */
    UsersManagementComponent.prototype.loadData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.alertService.startLoadingMessage();
        this.loadingIndicator = true;
        if (this.canViewRoles) {
            this.accountService.getUsersAndRoles().subscribe((/**
             * @param {?} results
             * @return {?}
             */
            function (results) { return _this.onDataLoadSuccessful(results[0], results[1]); }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return _this.onDataLoadFailed(error); }));
        }
        else {
            this.accountService.getUsers().subscribe((/**
             * @param {?} users
             * @return {?}
             */
            function (users) { return _this.onDataLoadSuccessful(users, _this.accountService.currentUser.roles.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return new Role(x); }))); }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return _this.onDataLoadFailed(error); }));
        }
    };
    /**
     * @param {?} users
     * @param {?} roles
     * @return {?}
     */
    UsersManagementComponent.prototype.onDataLoadSuccessful = /**
     * @param {?} users
     * @param {?} roles
     * @return {?}
     */
    function (users, roles) {
        this.alertService.stopLoadingMessage();
        this.loadingIndicator = false;
        users.forEach((/**
         * @param {?} user
         * @param {?} index
         * @param {?} users
         * @return {?}
         */
        function (user, index, users) {
            ((/** @type {?} */ (user))).index = index + 1;
        }));
        this.rowsCache = tslib_1.__spread(users);
        this.rows = users;
        this.allRoles = roles;
    };
    /**
     * @param {?} error
     * @return {?}
     */
    UsersManagementComponent.prototype.onDataLoadFailed = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        this.alertService.stopLoadingMessage();
        this.loadingIndicator = false;
        this.alertService.showStickyMessage('Load Error', "Unable to retrieve users from the server.\r\nErrors: \"" + Utilities.getHttpResponseMessages(error) + "\"", MessageSeverity.error, error);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    UsersManagementComponent.prototype.onSearchChanged = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.rows = this.rowsCache.filter((/**
         * @param {?} r
         * @return {?}
         */
        function (r) { return Utilities.searchArray(value, false, r.userName, r.fullName, r.email, r.phoneNumber, r.jobTitle, r.roles); }));
    };
    /**
     * @return {?}
     */
    UsersManagementComponent.prototype.onEditorModalHidden = /**
     * @return {?}
     */
    function () {
        this.editingUserName = null;
        this.userEditor.resetForm(true);
    };
    /**
     * @return {?}
     */
    UsersManagementComponent.prototype.newUser = /**
     * @return {?}
     */
    function () {
        this.editingUserName = null;
        this.sourceUser = null;
        this.editedUser = this.userEditor.newUser(this.allRoles);
        this.editorModal.show();
    };
    /**
     * @param {?} row
     * @return {?}
     */
    UsersManagementComponent.prototype.editUser = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.editingUserName = { name: row.userName };
        this.sourceUser = row;
        this.editedUser = this.userEditor.editUser(row, this.allRoles);
        this.editorModal.show();
    };
    /**
     * @param {?} row
     * @return {?}
     */
    UsersManagementComponent.prototype.deleteUser = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to delete \"' + row.userName + '\"?', DialogType.confirm, (/**
         * @return {?}
         */
        function () { return _this.deleteUserHelper(row); }));
    };
    /**
     * @param {?} row
     * @return {?}
     */
    UsersManagementComponent.prototype.deleteUserHelper = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        var _this = this;
        this.alertService.startLoadingMessage('Deleting...');
        this.loadingIndicator = true;
        this.accountService.deleteUser(row)
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
            _this.alertService.showStickyMessage('Delete Error', "An error occured whilst deleting the user.\r\nError: \"" + Utilities.getHttpResponseMessages(error) + "\"", MessageSeverity.error, error);
        }));
    };
    Object.defineProperty(UsersManagementComponent.prototype, "canAssignRoles", {
        get: /**
         * @return {?}
         */
        function () {
            return this.accountService.userHasPermission(Permission.assignRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersManagementComponent.prototype, "canViewRoles", {
        get: /**
         * @return {?}
         */
        function () {
            return this.accountService.userHasPermission(Permission.viewRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersManagementComponent.prototype, "canManageUsers", {
        get: /**
         * @return {?}
         */
        function () {
            return this.accountService.userHasPermission(Permission.manageUsersPermission);
        },
        enumerable: true,
        configurable: true
    });
    UsersManagementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'users-management',
                    template: "<div>\n  <div class=\"row control-box\">\n    <div class=\"col-lg-8\">\n      <div class=\"form-group search-box\">\n        <search-box (searchChange)=\"onSearchChanged($event)\" placeholder=\"{{'users.management.Search' | translate}}\">></search-box>\n      </div>\n    </div>\n    <div class=\"col-lg-4 pr-lg-5\">\n      <ul class=\"nav flex-column flex-lg-row justify-content-end\">\n        <li *ngIf=\"canManageUsers && canAssignRoles\" class=\"nav-item toolbaritem\">\n          <a class=\"nav-link\" href=\"javascript:;\" (click)=\"newUser()\">\n            <i class=\"fa fa-plus-circle\"></i> {{'users.management.NewUser' | translate}}\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <ngx-datatable class=\"material colored-header sm table table-striped table-hover\"\n                 [loadingIndicator]=\"loadingIndicator\"\n                 [rows]=\"rows\"\n                 [rowHeight]=\"35\"\n                 [headerHeight]=\"35\"\n                 [footerHeight]=\"35\"\n                 [columns]=\"columns\"\n                 [scrollbarV]=\"true\"\n                 [columnMode]=\"'force'\">\n  </ngx-datatable>\n\n  <ng-template #indexTemplate let-value=\"value\">\n    <strong>{{value}}</strong>\n  </ng-template>\n\n  <ng-template #userNameTemplate let-row=\"row\" let-value=\"value\">\n    <span [class.locked-out]=\"row.isLockedOut\" [class.user-disabled]=\"!row.isEnabled\">\n      <i *ngIf=\"row.isLockedOut\" class=\"fa fa-exclamation-triangle\"> </i>\n      <i *ngIf=\"!row.isEnabled\" class=\"fa fa-exclamation\"> </i>\n      {{value}}\n    </span>\n  </ng-template>\n\n  <ng-template #rolesTemplate let-row=\"row\" let-value=\"value\" let-i=\"index\">\n    <span class=\"user-role badge badge-pill badge-secondary\" *ngFor=\"let role of value\">{{role}}</span>\n  </ng-template>\n\n  <ng-template #actionsTemplate let-row=\"row\" let-value=\"value\" let-i=\"index\">\n    <div *ngIf=\"canManageUsers\">\n      <a class=\"btn btn-link btn-sm\" href=\"javascript:;\" (click)=\"editUser(row)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> {{'users.management.Edit' | translate}}</a>|\n      <a class=\"btn btn-link btn-sm\" href=\"javascript:;\" (click)=\"deleteUser(row)\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> {{'users.management.Delete' | translate}}</a>\n    </div>\n  </ng-template>\n\n\n  <div class=\"modal fade\" bsModal #editorModal=\"bs-modal\" (onHidden)=\"onEditorModalHidden()\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 *ngIf=\"!editingUserName\" class=\"modal-title float-left\"><i class=\"fa fa-user-plus\"></i> {{'users.management.NewUser' | translate}}</h4>\n          <h4 *ngIf=\"editingUserName\" class=\"modal-title float-left\"><i class=\"fa fa-user-circle-o\"></i> {{'users.management.EditUser' | translate:editingUserName}}</h4>\n          <button type=\"button\" class=\"close float-right\" title=\"Close\" (click)=\"editorModal.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <user-info #userEditor [isGeneralEditor]=\"true\"></user-info>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".user-role{font-size:.8em!important;margin-right:1px}.control-box{margin-bottom:5px}.search-box{margin:0}.nav-item.toolbaritem a{padding-top:3px;padding-bottom:3px;min-width:100px}.user-disabled{color:#777;font-style:italic}.locked-out{background-color:#ff4500;color:#f5f5f5;width:100%;display:inline-block;padding-left:5px}"]
                }] }
    ];
    /** @nocollapse */
    UsersManagementComponent.ctorParameters = function () { return [
        { type: AlertService },
        { type: AppTranslationService },
        { type: AccountService }
    ]; };
    UsersManagementComponent.propDecorators = {
        indexTemplate: [{ type: ViewChild, args: ['indexTemplate', { static: true },] }],
        userNameTemplate: [{ type: ViewChild, args: ['userNameTemplate', { static: true },] }],
        rolesTemplate: [{ type: ViewChild, args: ['rolesTemplate', { static: true },] }],
        actionsTemplate: [{ type: ViewChild, args: ['actionsTemplate', { static: true },] }],
        editorModal: [{ type: ViewChild, args: ['editorModal', { static: true },] }],
        userEditor: [{ type: ViewChild, args: ['userEditor', { static: true },] }]
    };
    return UsersManagementComponent;
}());
export { UsersManagementComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMtbWFuYWdlbWVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdXNlcnMtbWFuYWdlbWVudC91c2Vycy1tYW5hZ2VtZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBeUIsV0FBVyxFQUFFLFNBQVMsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFckQsT0FBTyxFQUNILFVBQVUsRUFBRSxlQUFlLEVBQzNCLFNBQVMsRUFDWixNQUFNLHNDQUFzQyxDQUFDO0FBRTlDLE9BQU8sRUFDSCxZQUFZLEVBQ1oscUJBQXFCLEVBQ3hCLE1BQU0scUNBQXFDLENBQUM7QUFFN0MsT0FBTyxFQUNILFVBQVUsRUFDVixJQUFJLEVBQ1AsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDaEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBR3JFO0lBbUNJLGtDQUFvQixZQUEwQixFQUFVLGtCQUF5QyxFQUFVLGNBQThCO1FBQXJILGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUF1QjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQTdCekksWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUNwQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFNdkIsYUFBUSxHQUFXLEVBQUUsQ0FBQztJQXNCdEIsQ0FBQzs7OztJQUdELDJDQUFROzs7SUFBUjtRQUFB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b0RBQWM7Ozs7UUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkYsQ0FBQzs7O09BQUE7O2dCQXROSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsaXlHQUFnRDs7aUJBRW5EOzs7O2dCQW5CRyxZQUFZO2dCQUNaLHFCQUFxQjtnQkFRaEIsY0FBYzs7O2dDQXVCbEIsU0FBUyxTQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7bUNBRzNDLFNBQVMsU0FBQyxrQkFBa0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0NBRzlDLFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2tDQUczQyxTQUFTLFNBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzhCQUc3QyxTQUFTLFNBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs2QkFHekMsU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBdUw3QywrQkFBQztDQUFBLEFBdk5ELElBdU5DO1NBbE5ZLHdCQUF3Qjs7O0lBQ2pDLDJDQUFvQjs7SUFDcEIsd0NBQWtCOztJQUNsQiw2Q0FBdUI7O0lBQ3ZCLDhDQUFxQjs7SUFDckIsOENBQXFCOztJQUNyQixtREFBa0M7O0lBQ2xDLG9EQUEwQjs7SUFFMUIsNENBQXNCOztJQUd0QixpREFDZ0M7O0lBRWhDLG9EQUNtQzs7SUFFbkMsaURBQ2dDOztJQUVoQyxtREFDa0M7O0lBRWxDLCtDQUM0Qjs7SUFFNUIsOENBQzhCOzs7OztJQUVsQixnREFBa0M7Ozs7O0lBQUUsc0RBQWlEOzs7OztJQUFFLGtEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEFmdGVyVmlld0luaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpcmVjdGl2ZSB9IGZyb20gJ25neC1ib290c3RyYXAvbW9kYWwnO1xuXG5pbXBvcnQge1xuICAgIERpYWxvZ1R5cGUsIE1lc3NhZ2VTZXZlcml0eSxcbiAgICBVdGlsaXRpZXNcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBBbGVydFNlcnZpY2UsXG4gICAgQXBwVHJhbnNsYXRpb25TZXJ2aWNlXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXNlcnZpY2VzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBQZXJtaXNzaW9uLFxuICAgIFVzZXJcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1vYXV0aDInO1xuXG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjY291bnQuc2VydmljZSc7XG5pbXBvcnQgeyBSb2xlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3JvbGUubW9kZWwnO1xuaW1wb3J0IHsgVXNlckVkaXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdXNlci1lZGl0Lm1vZGVsJztcbmltcG9ydCB7IFVzZXJJbmZvQ29tcG9uZW50IH0gZnJvbSAnLi4vdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndXNlcnMtbWFuYWdlbWVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3VzZXJzLW1hbmFnZW1lbnQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3VzZXJzLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVc2Vyc01hbmFnZW1lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIGNvbHVtbnM6IGFueVtdID0gW107XG4gICAgcm93czogVXNlcltdID0gW107XG4gICAgcm93c0NhY2hlOiBVc2VyW10gPSBbXTtcbiAgICBlZGl0ZWRVc2VyOiBVc2VyRWRpdDtcbiAgICBzb3VyY2VVc2VyOiBVc2VyRWRpdDtcbiAgICBlZGl0aW5nVXNlck5hbWU6IHsgbmFtZTogc3RyaW5nIH07XG4gICAgbG9hZGluZ0luZGljYXRvcjogYm9vbGVhbjtcblxuICAgIGFsbFJvbGVzOiBSb2xlW10gPSBbXTtcblxuXG4gICAgQFZpZXdDaGlsZCgnaW5kZXhUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgaW5kZXhUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ3VzZXJOYW1lVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHVzZXJOYW1lVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdyb2xlc1RlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICByb2xlc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnYWN0aW9uc1RlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBhY3Rpb25zVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdlZGl0b3JNb2RhbCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgZWRpdG9yTW9kYWw6IE1vZGFsRGlyZWN0aXZlO1xuXG4gICAgQFZpZXdDaGlsZCgndXNlckVkaXRvcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgdXNlckVkaXRvcjogVXNlckluZm9Db21wb25lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlLCBwcml2YXRlIHRyYW5zbGF0aW9uU2VydmljZTogQXBwVHJhbnNsYXRpb25TZXJ2aWNlLCBwcml2YXRlIGFjY291bnRTZXJ2aWNlOiBBY2NvdW50U2VydmljZSkge1xuICAgIH1cblxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgY29uc3QgZ1QgPSAoa2V5OiBzdHJpbmcpID0+IHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGtleSk7XG5cbiAgICAgICAgdGhpcy5jb2x1bW5zID0gW1xuICAgICAgICAgICAgeyBwcm9wOiAnaW5kZXgnLCBuYW1lOiAnIycsIHdpZHRoOiA0MCwgY2VsbFRlbXBsYXRlOiB0aGlzLmluZGV4VGVtcGxhdGUsIGNhbkF1dG9SZXNpemU6IGZhbHNlIH0sXG4gICAgICAgICAgICB7IHByb3A6ICdqb2JUaXRsZScsIG5hbWU6IGdUKCd1c2Vycy5tYW5hZ2VtZW50LlRpdGxlJyksIHdpZHRoOiA1MCB9LFxuICAgICAgICAgICAgeyBwcm9wOiAndXNlck5hbWUnLCBuYW1lOiBnVCgndXNlcnMubWFuYWdlbWVudC5Vc2VyTmFtZScpLCB3aWR0aDogOTAsIGNlbGxUZW1wbGF0ZTogdGhpcy51c2VyTmFtZVRlbXBsYXRlIH0sXG4gICAgICAgICAgICB7IHByb3A6ICdmdWxsTmFtZScsIG5hbWU6IGdUKCd1c2Vycy5tYW5hZ2VtZW50LkZ1bGxOYW1lJyksIHdpZHRoOiAxMjAgfSxcbiAgICAgICAgICAgIHsgcHJvcDogJ2VtYWlsJywgbmFtZTogZ1QoJ3VzZXJzLm1hbmFnZW1lbnQuRW1haWwnKSwgd2lkdGg6IDE0MCB9LFxuICAgICAgICAgICAgeyBwcm9wOiAncm9sZXMnLCBuYW1lOiBnVCgndXNlcnMubWFuYWdlbWVudC5Sb2xlcycpLCB3aWR0aDogMTIwLCBjZWxsVGVtcGxhdGU6IHRoaXMucm9sZXNUZW1wbGF0ZSB9LFxuICAgICAgICAgICAgeyBwcm9wOiAncGhvbmVOdW1iZXInLCBuYW1lOiBnVCgndXNlcnMubWFuYWdlbWVudC5QaG9uZU51bWJlcicpLCB3aWR0aDogMTAwIH1cbiAgICAgICAgXTtcblxuICAgICAgICBpZiAodGhpcy5jYW5NYW5hZ2VVc2Vycykge1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goeyBuYW1lOiAnJywgd2lkdGg6IDE2MCwgY2VsbFRlbXBsYXRlOiB0aGlzLmFjdGlvbnNUZW1wbGF0ZSwgcmVzaXplYWJsZTogZmFsc2UsIGNhbkF1dG9SZXNpemU6IGZhbHNlLCBzb3J0YWJsZTogZmFsc2UsIGRyYWdnYWJsZTogZmFsc2UgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgfVxuXG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgICAgICAgdGhpcy51c2VyRWRpdG9yLmNoYW5nZXNTYXZlZENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGROZXdVc2VyVG9MaXN0KCk7XG4gICAgICAgICAgICB0aGlzLmVkaXRvck1vZGFsLmhpZGUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnVzZXJFZGl0b3IuY2hhbmdlc0NhbmNlbGxlZENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lZGl0ZWRVc2VyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc291cmNlVXNlciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmVkaXRvck1vZGFsLmhpZGUoKTtcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFkZE5ld1VzZXJUb0xpc3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnNvdXJjZVVzZXIpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zb3VyY2VVc2VyLCB0aGlzLmVkaXRlZFVzZXIpO1xuXG4gICAgICAgICAgICBsZXQgc291cmNlSW5kZXggPSB0aGlzLnJvd3NDYWNoZS5pbmRleE9mKHRoaXMuc291cmNlVXNlciwgMCk7XG4gICAgICAgICAgICBpZiAoc291cmNlSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIFV0aWxpdGllcy5tb3ZlQXJyYXlJdGVtKHRoaXMucm93c0NhY2hlLCBzb3VyY2VJbmRleCwgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNvdXJjZUluZGV4ID0gdGhpcy5yb3dzLmluZGV4T2YodGhpcy5zb3VyY2VVc2VyLCAwKTtcbiAgICAgICAgICAgIGlmIChzb3VyY2VJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgVXRpbGl0aWVzLm1vdmVBcnJheUl0ZW0odGhpcy5yb3dzLCBzb3VyY2VJbmRleCwgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZWRpdGVkVXNlciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNvdXJjZVVzZXIgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHVzZXIsIHRoaXMuZWRpdGVkVXNlcik7XG4gICAgICAgICAgICB0aGlzLmVkaXRlZFVzZXIgPSBudWxsO1xuXG4gICAgICAgICAgICBsZXQgbWF4SW5kZXggPSAwO1xuICAgICAgICAgICAgZm9yIChjb25zdCB1IG9mIHRoaXMucm93c0NhY2hlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCh1IGFzIGFueSkuaW5kZXggPiBtYXhJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBtYXhJbmRleCA9ICh1IGFzIGFueSkuaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAodXNlciBhcyBhbnkpLmluZGV4ID0gbWF4SW5kZXggKyAxO1xuXG4gICAgICAgICAgICB0aGlzLnJvd3NDYWNoZS5zcGxpY2UoMCwgMCwgdXNlcik7XG4gICAgICAgICAgICB0aGlzLnJvd3Muc3BsaWNlKDAsIDAsIHVzZXIpO1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gWy4uLnRoaXMucm93c107XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGxvYWREYXRhKCkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FuVmlld1JvbGVzKSB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmdldFVzZXJzQW5kUm9sZXMoKS5zdWJzY3JpYmUocmVzdWx0cyA9PiB0aGlzLm9uRGF0YUxvYWRTdWNjZXNzZnVsKHJlc3VsdHNbMF0sIHJlc3VsdHNbMV0pLCBlcnJvciA9PiB0aGlzLm9uRGF0YUxvYWRGYWlsZWQoZXJyb3IpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuZ2V0VXNlcnMoKS5zdWJzY3JpYmUodXNlcnMgPT4gdGhpcy5vbkRhdGFMb2FkU3VjY2Vzc2Z1bCh1c2VycywgdGhpcy5hY2NvdW50U2VydmljZS5jdXJyZW50VXNlci5yb2xlcy5tYXAoeCA9PiBuZXcgUm9sZSh4KSkpLCBlcnJvciA9PiB0aGlzLm9uRGF0YUxvYWRGYWlsZWQoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25EYXRhTG9hZFN1Y2Nlc3NmdWwodXNlcnM6IFVzZXJbXSwgcm9sZXM6IFJvbGVbXSkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG5cbiAgICAgICAgdXNlcnMuZm9yRWFjaCgodXNlciwgaW5kZXgsIHVzZXJzKSA9PiB7XG4gICAgICAgICAgICAodXNlciBhcyBhbnkpLmluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJvd3NDYWNoZSA9IFsuLi51c2Vyc107XG4gICAgICAgIHRoaXMucm93cyA9IHVzZXJzO1xuXG4gICAgICAgIHRoaXMuYWxsUm9sZXMgPSByb2xlcztcbiAgICB9XG5cblxuICAgIG9uRGF0YUxvYWRGYWlsZWQoZXJyb3I6IGFueSkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ0xvYWQgRXJyb3InLCBgVW5hYmxlIHRvIHJldHJpZXZlIHVzZXJzIGZyb20gdGhlIHNlcnZlci5cXHJcXG5FcnJvcnM6IFwiJHtVdGlsaXRpZXMuZ2V0SHR0cFJlc3BvbnNlTWVzc2FnZXMoZXJyb3IpfVwiYCxcbiAgICAgICAgICAgIE1lc3NhZ2VTZXZlcml0eS5lcnJvciwgZXJyb3IpO1xuICAgIH1cblxuXG4gICAgb25TZWFyY2hDaGFuZ2VkKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5yb3dzQ2FjaGUuZmlsdGVyKHIgPT4gVXRpbGl0aWVzLnNlYXJjaEFycmF5KHZhbHVlLCBmYWxzZSwgci51c2VyTmFtZSwgci5mdWxsTmFtZSwgci5lbWFpbCwgci5waG9uZU51bWJlciwgci5qb2JUaXRsZSwgci5yb2xlcykpO1xuICAgIH1cblxuICAgIG9uRWRpdG9yTW9kYWxIaWRkZW4oKSB7XG4gICAgICAgIHRoaXMuZWRpdGluZ1VzZXJOYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy51c2VyRWRpdG9yLnJlc2V0Rm9ybSh0cnVlKTtcbiAgICB9XG5cblxuICAgIG5ld1VzZXIoKSB7XG4gICAgICAgIHRoaXMuZWRpdGluZ1VzZXJOYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5zb3VyY2VVc2VyID0gbnVsbDtcbiAgICAgICAgdGhpcy5lZGl0ZWRVc2VyID0gdGhpcy51c2VyRWRpdG9yLm5ld1VzZXIodGhpcy5hbGxSb2xlcyk7XG4gICAgICAgIHRoaXMuZWRpdG9yTW9kYWwuc2hvdygpO1xuICAgIH1cblxuXG4gICAgZWRpdFVzZXIocm93OiBVc2VyRWRpdCkge1xuICAgICAgICB0aGlzLmVkaXRpbmdVc2VyTmFtZSA9IHsgbmFtZTogcm93LnVzZXJOYW1lIH07XG4gICAgICAgIHRoaXMuc291cmNlVXNlciA9IHJvdztcbiAgICAgICAgdGhpcy5lZGl0ZWRVc2VyID0gdGhpcy51c2VyRWRpdG9yLmVkaXRVc2VyKHJvdywgdGhpcy5hbGxSb2xlcyk7XG4gICAgICAgIHRoaXMuZWRpdG9yTW9kYWwuc2hvdygpO1xuICAgIH1cblxuXG4gICAgZGVsZXRlVXNlcihyb3c6IFVzZXJFZGl0KSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dEaWFsb2coJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgXFxcIicgKyByb3cudXNlck5hbWUgKyAnXFxcIj8nLCBEaWFsb2dUeXBlLmNvbmZpcm0sICgpID0+IHRoaXMuZGVsZXRlVXNlckhlbHBlcihyb3cpKTtcbiAgICB9XG5cblxuICAgIGRlbGV0ZVVzZXJIZWxwZXIocm93OiBVc2VyRWRpdCkge1xuXG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0YXJ0TG9hZGluZ01lc3NhZ2UoJ0RlbGV0aW5nLi4uJyk7XG4gICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5kZWxldGVVc2VyKHJvdylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJvd3NDYWNoZSA9IHRoaXMucm93c0NhY2hlLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHJvdyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5yb3dzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHJvdyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdEZWxldGUgRXJyb3InLCBgQW4gZXJyb3Igb2NjdXJlZCB3aGlsc3QgZGVsZXRpbmcgdGhlIHVzZXIuXFxyXFxuRXJyb3I6IFwiJHtVdGlsaXRpZXMuZ2V0SHR0cFJlc3BvbnNlTWVzc2FnZXMoZXJyb3IpfVwiYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXZlcml0eS5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG5cbiAgICBnZXQgY2FuQXNzaWduUm9sZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRTZXJ2aWNlLnVzZXJIYXNQZXJtaXNzaW9uKFBlcm1pc3Npb24uYXNzaWduUm9sZXNQZXJtaXNzaW9uKTtcbiAgICB9XG5cbiAgICBnZXQgY2FuVmlld1JvbGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50U2VydmljZS51c2VySGFzUGVybWlzc2lvbihQZXJtaXNzaW9uLnZpZXdSb2xlc1Blcm1pc3Npb24pO1xuICAgIH1cblxuICAgIGdldCBjYW5NYW5hZ2VVc2VycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudFNlcnZpY2UudXNlckhhc1Blcm1pc3Npb24oUGVybWlzc2lvbi5tYW5hZ2VVc2Vyc1Blcm1pc3Npb24pO1xuICAgIH1cbn1cbiJdfQ==