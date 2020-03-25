/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/role-editor/role-editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, ViewChild } from '@angular/core';
import { MessageSeverity } from '@polpware/ngx-appkit-contracts-alpha';
import { AlertService } from '@polpware/ngx-appkit-services-alpha';
import { Permission } from '@polpware/ngx-oauth2';
import { AccountService } from '../../services/account.service';
import { Role } from '../../models/role.model';
var RoleEditorComponent = /** @class */ (function () {
    function RoleEditorComponent(alertService, accountService) {
        this.alertService = alertService;
        this.accountService = accountService;
        this.isNewRole = false;
        this.showValidationErrors = true;
        this.roleEdit = new Role();
        this.allPermissions = [];
        this.selectedValues = {};
        this.formResetToggle = true;
    }
    /**
     * @param {?} caption
     * @param {?} message
     * @return {?}
     */
    RoleEditorComponent.prototype.showErrorAlert = /**
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
    RoleEditorComponent.prototype.save = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isSaving = true;
        this.alertService.startLoadingMessage('Saving changes...');
        this.roleEdit.permissions = this.getSelectedPermissions();
        if (this.isNewRole) {
            this.accountService.newRole(this.roleEdit).subscribe((/**
             * @param {?} role
             * @return {?}
             */
            function (role) { return _this.saveSuccessHelper(role); }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return _this.saveFailedHelper(error); }));
        }
        else {
            this.accountService.updateRole(this.roleEdit).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return _this.saveSuccessHelper(); }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return _this.saveFailedHelper(error); }));
        }
    };
    /**
     * @private
     * @param {?=} role
     * @return {?}
     */
    RoleEditorComponent.prototype.saveSuccessHelper = /**
     * @private
     * @param {?=} role
     * @return {?}
     */
    function (role) {
        var _this = this;
        if (role) {
            Object.assign(this.roleEdit, role);
        }
        this.isSaving = false;
        this.alertService.stopLoadingMessage();
        this.showValidationErrors = false;
        if (this.isNewRole) {
            this.alertService.showMessage('Success', "Role \"" + this.roleEdit.name + "\" was created successfully", MessageSeverity.success);
        }
        else {
            this.alertService.showMessage('Success', "Changes to role \"" + this.roleEdit.name + "\" was saved successfully", MessageSeverity.success);
        }
        this.roleEdit = new Role();
        this.resetForm();
        if (!this.isNewRole && this.accountService.currentUser.roles.some((/**
         * @param {?} r
         * @return {?}
         */
        function (r) { return r == _this.editingRoleName; }))) {
            this.refreshLoggedInUser();
        }
        if (this.changesSavedCallback) {
            this.changesSavedCallback();
        }
    };
    /**
     * @private
     * @return {?}
     */
    RoleEditorComponent.prototype.refreshLoggedInUser = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.accountService.refreshLoggedInUser()
            .subscribe((/**
         * @param {?} user
         * @return {?}
         */
        function (user) { }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.alertService.resetStickyMessage();
            _this.alertService.showStickyMessage('Refresh failed', 'An error occured whilst refreshing logged in user information from the server', MessageSeverity.error, error);
        }));
    };
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    RoleEditorComponent.prototype.saveFailedHelper = /**
     * @private
     * @param {?} error
     * @return {?}
     */
    function (error) {
        this.isSaving = false;
        this.alertService.stopLoadingMessage();
        this.alertService.showStickyMessage('Save Error', 'The below errors occured whilst saving your changes:', MessageSeverity.error, error);
        this.alertService.showStickyMessage(error, null, MessageSeverity.error);
        if (this.changesFailedCallback) {
            this.changesFailedCallback();
        }
    };
    /**
     * @return {?}
     */
    RoleEditorComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.roleEdit = new Role();
        this.showValidationErrors = false;
        this.resetForm();
        this.alertService.showMessage('Cancelled', 'Operation cancelled by user', MessageSeverity.default);
        this.alertService.resetStickyMessage();
        if (this.changesCancelledCallback) {
            this.changesCancelledCallback();
        }
    };
    /**
     * @return {?}
     */
    RoleEditorComponent.prototype.selectAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.allPermissions.forEach((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return _this.selectedValues[p.value] = true; }));
    };
    /**
     * @return {?}
     */
    RoleEditorComponent.prototype.selectNone = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.allPermissions.forEach((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return _this.selectedValues[p.value] = false; }));
    };
    /**
     * @param {?} groupName
     * @return {?}
     */
    RoleEditorComponent.prototype.toggleGroup = /**
     * @param {?} groupName
     * @return {?}
     */
    function (groupName) {
        var _this = this;
        /** @type {?} */
        var firstMemberValue;
        this.allPermissions.forEach((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            if (p.groupName != groupName) {
                return;
            }
            if (firstMemberValue == null) {
                firstMemberValue = _this.selectedValues[p.value] == true;
            }
            _this.selectedValues[p.value] = !firstMemberValue;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    RoleEditorComponent.prototype.getSelectedPermissions = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return this.allPermissions.filter((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return _this.selectedValues[p.value] == true; }));
    };
    /**
     * @param {?=} replace
     * @return {?}
     */
    RoleEditorComponent.prototype.resetForm = /**
     * @param {?=} replace
     * @return {?}
     */
    function (replace) {
        var _this = this;
        if (replace === void 0) { replace = false; }
        if (!replace) {
            this.form.reset();
        }
        else {
            this.formResetToggle = false;
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.formResetToggle = true;
            }));
        }
    };
    /**
     * @param {?} allPermissions
     * @return {?}
     */
    RoleEditorComponent.prototype.newRole = /**
     * @param {?} allPermissions
     * @return {?}
     */
    function (allPermissions) {
        this.isNewRole = true;
        this.showValidationErrors = true;
        this.editingRoleName = null;
        this.allPermissions = allPermissions;
        this.selectedValues = {};
        this.roleEdit = new Role();
        return this.roleEdit;
    };
    /**
     * @param {?} role
     * @param {?} allPermissions
     * @return {?}
     */
    RoleEditorComponent.prototype.editRole = /**
     * @param {?} role
     * @param {?} allPermissions
     * @return {?}
     */
    function (role, allPermissions) {
        var _this = this;
        if (role) {
            this.isNewRole = false;
            this.showValidationErrors = true;
            this.editingRoleName = role.name;
            this.allPermissions = allPermissions;
            this.selectedValues = {};
            role.permissions.forEach((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return _this.selectedValues[p.value] = true; }));
            this.roleEdit = new Role();
            Object.assign(this.roleEdit, role);
            return this.roleEdit;
        }
        else {
            return this.newRole(allPermissions);
        }
    };
    Object.defineProperty(RoleEditorComponent.prototype, "canManageRoles", {
        get: /**
         * @return {?}
         */
        function () {
            return this.accountService.userHasPermission(Permission.manageRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    RoleEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'role-editor',
                    template: "<div>\n  <form *ngIf=\"formResetToggle\" name=\"roleEditorForm\" #f=\"ngForm\" novalidate\n        (ngSubmit)=\"f.form.valid ? save() :\n          (!roleName.valid && showErrorAlert('Role name is required', 'Please enter a role name (minimum of 2 and maximum of 200 characters)'));\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-5\">\n        <div class=\"form-group row has-feedback-icon\">\n          <label class=\"col-form-label col-md-3\" for=\"roleName\">{{'roles.editor.Name' | translate}}</label>\n          <div class=\"col-md-9\">\n            <input [disabled]=\"!canManageRoles\" type=\"text\" id=\"roleName\" name=\"roleName\" placeholder=\"Enter role name\" class=\"form-control\"\n                   [ngClass]=\"{'is-valid': f.submitted && roleName.valid, 'is-invalid' : f.submitted && !roleName.valid}\" [(ngModel)]=\"roleEdit.name\" #roleName=\"ngModel\" required minlength=\"2\" maxlength=\"200\" />\n            <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': roleName.valid, 'fa-times' : !roleName.valid}\" aria-hidden=\"true\"></i>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-7\">\n        <div class=\"form-group row\">\n          <label class=\"col-form-label col-md-3\" for=\"roleDescription\">{{'roles.editor.Description' | translate}}</label>\n          <div class=\"col-md-9\">\n            <input [disabled]=\"!canManageRoles\" type=\"text\" id=\"roleDescription\" name=\"roleDescription\" placeholder=\"Enter role description\" class=\"form-control\" [(ngModel)]=\"roleEdit.description\" />\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <span *ngIf=\"showValidationErrors && f.submitted && !roleName.valid\" class=\"invalid-feedback\">\n          {{'roles.editor.RoleNameRequired' | translate}}\n        </span>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <hr class=\"edit-separator-hr\" />\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-12 card card-body bg-light well-sm permissionsRow\">\n        <div class=\"row\">\n\n          <ng-template ngFor let-permissionGroup [ngForOf]=\"allPermissions | groupBy: 'groupName'\" let-i=\"index\">\n            <div class=\"form-group row col-sm-6 permissionsColumn\">\n              <label class=\"col-md-5 col-form-label group-name\" for=\"checkboxes\" (click)=\"toggleGroup(permissionGroup.key)\">{{permissionGroup.key}}</label>\n              <div class=\"col-md-7\">\n                <div class=\"form-check\" *ngFor=\"let permission of permissionGroup.value\">\n                  <input [disabled]=\"!canManageRoles\" name=\"checkboxes-{{permission.value}}\" id=\"checkboxes-{{permission.value}}\" type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"selectedValues[permission.value]\">\n                  <label class=\"form-check-label\" tooltip=\"{{permission.description}}\" for=\"checkboxes-{{permission.value}}\">{{permission.name}}</label>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"(i + 1) % 2 === 0\" class=\"clearfix\"></div>\n          </ng-template>\n\n        </div>\n      </div>\n\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <hr class=\"edit-last-separator-hr\" />\n      </div>\n    </div>\n\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-5\">\n        <div *ngIf=\"canManageRoles\" class=\"float-left\">\n          <a (click)=\"selectAll()\" href=\"javascript:;\" class=\"btn btn-link\">{{'roles.editor.SelectAll' | translate}}</a>|<a (click)=\"selectNone()\" href=\"javascript:;\" class=\"btn btn-link\">{{'roles.editor.SelectNone' | translate}}</a>\n        </div>\n      </div>\n\n      <div class=\"col-sm-7\">\n        <div ngPreserveWhitespaces class=\"float-right\">\n          <button *ngIf=\"!canManageRoles\" type=\"button\" (click)=\"cancel()\" class=\"btn btn-outline-secondary\">{{'roles.editor.Close' | translate}}</button>\n          <button *ngIf=\"canManageRoles\" type=\"button\" (click)=\"cancel()\" class=\"btn btn-danger\" [disabled]=\"isSaving\"><i class='fa fa-times'></i> {{'roles.editor.Cancel' | translate}}</button>\n          <button *ngIf=\"canManageRoles\" type=\"submit\" class=\"btn btn-primary\" [disabled]=\"isSaving\">\n            <i *ngIf=\"!isSaving\" class='fa fa-save'></i><i *ngIf=\"isSaving\" class='fa fa-circle-o-notch fa-spin'></i> {{isSaving ? ('roles.editor.Saving' | translate) : ('roles.editor.Save' | translate)}}\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n  </form>\n</div>\n",
                    styles: [".separator-hr{margin:0 5px;border-top-style:dashed}.edit-separator-hr{margin:10px 5px;border-top-style:dashed}.last-separator-hr{margin-top:5px}.edit-last-separator-hr{margin-top:15px}.form-group{margin-top:0;margin-bottom:0}input.form-control{border-left-width:5px}.invalid-feedback{display:block}.group-name{padding-top:0;font-weight:500;padding-right:0}.permissionsColumn{margin-bottom:20px}.permissionsRow{margin:0 15px}.well-sm{padding:.5rem}@media (min-width:992px){.user-enabled{margin-left:40px}}"]
                }] }
    ];
    /** @nocollapse */
    RoleEditorComponent.ctorParameters = function () { return [
        { type: AlertService },
        { type: AccountService }
    ]; };
    RoleEditorComponent.propDecorators = {
        form: [{ type: ViewChild, args: ['f', { static: false },] }]
    };
    return RoleEditorComponent;
}());
export { RoleEditorComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RoleEditorComponent.prototype.isNewRole;
    /** @type {?} */
    RoleEditorComponent.prototype.isSaving;
    /** @type {?} */
    RoleEditorComponent.prototype.showValidationErrors;
    /** @type {?} */
    RoleEditorComponent.prototype.roleEdit;
    /** @type {?} */
    RoleEditorComponent.prototype.allPermissions;
    /** @type {?} */
    RoleEditorComponent.prototype.selectedValues;
    /**
     * @type {?}
     * @private
     */
    RoleEditorComponent.prototype.editingRoleName;
    /** @type {?} */
    RoleEditorComponent.prototype.formResetToggle;
    /** @type {?} */
    RoleEditorComponent.prototype.changesSavedCallback;
    /** @type {?} */
    RoleEditorComponent.prototype.changesFailedCallback;
    /** @type {?} */
    RoleEditorComponent.prototype.changesCancelledCallback;
    /**
     * @type {?}
     * @private
     */
    RoleEditorComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    RoleEditorComponent.prototype.alertService;
    /**
     * @type {?}
     * @private
     */
    RoleEditorComponent.prototype.accountService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3JvbGUtZWRpdG9yL3JvbGUtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQ0gsZUFBZSxFQUNsQixNQUFNLHNDQUFzQyxDQUFDO0FBRTlDLE9BQU8sRUFDSCxZQUFZLEVBQ2YsTUFBTSxxQ0FBcUMsQ0FBQztBQUU3QyxPQUFPLEVBQ0gsVUFBVSxFQUNiLE1BQU0sc0JBQXNCLENBQUM7QUFHOUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUvQztJQTJCSSw2QkFBb0IsWUFBMEIsRUFBVSxjQUE4QjtRQUFsRSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQXBCOUUsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVuQix5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsYUFBUSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUIsbUJBQWMsR0FBaUIsRUFBRSxDQUFDO1FBQ2xDLG1CQUFjLEdBQWdDLEVBQUUsQ0FBQztRQUdqRCxvQkFBZSxHQUFHLElBQUksQ0FBQztJQWE5QixDQUFDOzs7Ozs7SUFJRCw0Q0FBYzs7Ozs7SUFBZCxVQUFlLE9BQWUsRUFBRSxPQUFlO1FBQzNDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7SUFHRCxrQ0FBSTs7O0lBQUo7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QyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRW5DLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN4QjthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUlELHNCQUFJLCtDQUFjOzs7O1FBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25GLENBQUM7OztPQUFBOztnQkExTUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO29CQUN2QixxcUpBQTJDOztpQkFFOUM7Ozs7Z0JBZkcsWUFBWTtnQkFRUCxjQUFjOzs7dUJBeUJsQixTQUFTLFNBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUFxTHJDLDBCQUFDO0NBQUEsQUEzTUQsSUEyTUM7U0F0TVksbUJBQW1COzs7Ozs7SUFFNUIsd0NBQTBCOztJQUMxQix1Q0FBeUI7O0lBQ3pCLG1EQUFtQzs7SUFDbkMsdUNBQW1DOztJQUNuQyw2Q0FBeUM7O0lBQ3pDLDZDQUF3RDs7Ozs7SUFDeEQsOENBQWdDOztJQUVoQyw4Q0FBOEI7O0lBRTlCLG1EQUF3Qzs7SUFDeEMsb0RBQXlDOztJQUN6Qyx1REFBNEM7Ozs7O0lBRzVDLG1DQUNhOzs7OztJQUlELDJDQUFrQzs7Ozs7SUFBRSw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgTWVzc2FnZVNldmVyaXR5XG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgQWxlcnRTZXJ2aWNlXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXNlcnZpY2VzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBQZXJtaXNzaW9uXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtb2F1dGgyJztcblxuXG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjY291bnQuc2VydmljZSc7XG5pbXBvcnQgeyBSb2xlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3JvbGUubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3JvbGUtZWRpdG9yJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcm9sZS1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3JvbGUtZWRpdG9yLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUm9sZUVkaXRvckNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIGlzTmV3Um9sZSA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc1NhdmluZzogYm9vbGVhbjtcbiAgICBwdWJsaWMgc2hvd1ZhbGlkYXRpb25FcnJvcnMgPSB0cnVlO1xuICAgIHB1YmxpYyByb2xlRWRpdDogUm9sZSA9IG5ldyBSb2xlKCk7XG4gICAgcHVibGljIGFsbFBlcm1pc3Npb25zOiBQZXJtaXNzaW9uW10gPSBbXTtcbiAgICBwdWJsaWMgc2VsZWN0ZWRWYWx1ZXM6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbjsgfSA9IHt9O1xuICAgIHByaXZhdGUgZWRpdGluZ1JvbGVOYW1lOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZm9ybVJlc2V0VG9nZ2xlID0gdHJ1ZTtcblxuICAgIHB1YmxpYyBjaGFuZ2VzU2F2ZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBwdWJsaWMgY2hhbmdlc0ZhaWxlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBjaGFuZ2VzQ2FuY2VsbGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG5cblxuICAgIEBWaWV3Q2hpbGQoJ2YnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwcml2YXRlIGZvcm07XG5cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSwgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UpIHtcbiAgICB9XG5cblxuXG4gICAgc2hvd0Vycm9yQWxlcnQoY2FwdGlvbjogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoY2FwdGlvbiwgbWVzc2FnZSwgTWVzc2FnZVNldmVyaXR5LmVycm9yKTtcbiAgICB9XG5cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCdTYXZpbmcgY2hhbmdlcy4uLicpO1xuXG4gICAgICAgIHRoaXMucm9sZUVkaXQucGVybWlzc2lvbnMgPSB0aGlzLmdldFNlbGVjdGVkUGVybWlzc2lvbnMoKTtcblxuICAgICAgICBpZiAodGhpcy5pc05ld1JvbGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UubmV3Um9sZSh0aGlzLnJvbGVFZGl0KS5zdWJzY3JpYmUocm9sZSA9PiB0aGlzLnNhdmVTdWNjZXNzSGVscGVyKHJvbGUpLCBlcnJvciA9PiB0aGlzLnNhdmVGYWlsZWRIZWxwZXIoZXJyb3IpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UudXBkYXRlUm9sZSh0aGlzLnJvbGVFZGl0KS5zdWJzY3JpYmUocmVzcG9uc2UgPT4gdGhpcy5zYXZlU3VjY2Vzc0hlbHBlcigpLCBlcnJvciA9PiB0aGlzLnNhdmVGYWlsZWRIZWxwZXIoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuICAgIHByaXZhdGUgc2F2ZVN1Y2Nlc3NIZWxwZXIocm9sZT86IFJvbGUpIHtcbiAgICAgICAgaWYgKHJvbGUpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5yb2xlRWRpdCwgcm9sZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNOZXdSb2xlKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93TWVzc2FnZSgnU3VjY2VzcycsIGBSb2xlIFxcXCIke3RoaXMucm9sZUVkaXQubmFtZX1cXFwiIHdhcyBjcmVhdGVkIHN1Y2Nlc3NmdWxseWAsIE1lc3NhZ2VTZXZlcml0eS5zdWNjZXNzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdTdWNjZXNzJywgYENoYW5nZXMgdG8gcm9sZSBcXFwiJHt0aGlzLnJvbGVFZGl0Lm5hbWV9XFxcIiB3YXMgc2F2ZWQgc3VjY2Vzc2Z1bGx5YCwgTWVzc2FnZVNldmVyaXR5LnN1Y2Nlc3MpO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLnJvbGVFZGl0ID0gbmV3IFJvbGUoKTtcbiAgICAgICAgdGhpcy5yZXNldEZvcm0oKTtcblxuXG4gICAgICAgIGlmICghdGhpcy5pc05ld1JvbGUgJiYgdGhpcy5hY2NvdW50U2VydmljZS5jdXJyZW50VXNlci5yb2xlcy5zb21lKHIgPT4gciA9PSB0aGlzLmVkaXRpbmdSb2xlTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaExvZ2dlZEluVXNlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlc1NhdmVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlc1NhdmVkQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSByZWZyZXNoTG9nZ2VkSW5Vc2VyKCkge1xuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLnJlZnJlc2hMb2dnZWRJblVzZXIoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSh1c2VyID0+IHsgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnJlc2V0U3RpY2t5TWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZSgnUmVmcmVzaCBmYWlsZWQnLCAnQW4gZXJyb3Igb2NjdXJlZCB3aGlsc3QgcmVmcmVzaGluZyBsb2dnZWQgaW4gdXNlciBpbmZvcm1hdGlvbiBmcm9tIHRoZSBzZXJ2ZXInLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSBzYXZlRmFpbGVkSGVscGVyKGVycm9yOiBhbnkpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ1NhdmUgRXJyb3InLCAnVGhlIGJlbG93IGVycm9ycyBvY2N1cmVkIHdoaWxzdCBzYXZpbmcgeW91ciBjaGFuZ2VzOicsIE1lc3NhZ2VTZXZlcml0eS5lcnJvciwgZXJyb3IpO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZShlcnJvciwgbnVsbCwgTWVzc2FnZVNldmVyaXR5LmVycm9yKTtcblxuICAgICAgICBpZiAodGhpcy5jaGFuZ2VzRmFpbGVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlc0ZhaWxlZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5yb2xlRWRpdCA9IG5ldyBSb2xlKCk7XG5cbiAgICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuXG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdDYW5jZWxsZWQnLCAnT3BlcmF0aW9uIGNhbmNlbGxlZCBieSB1c2VyJywgTWVzc2FnZVNldmVyaXR5LmRlZmF1bHQpO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5yZXNldFN0aWNreU1lc3NhZ2UoKTtcblxuICAgICAgICBpZiAodGhpcy5jaGFuZ2VzQ2FuY2VsbGVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlc0NhbmNlbGxlZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgc2VsZWN0QWxsKCkge1xuICAgICAgICB0aGlzLmFsbFBlcm1pc3Npb25zLmZvckVhY2gocCA9PiB0aGlzLnNlbGVjdGVkVmFsdWVzW3AudmFsdWVdID0gdHJ1ZSk7XG4gICAgfVxuXG5cbiAgICBzZWxlY3ROb25lKCkge1xuICAgICAgICB0aGlzLmFsbFBlcm1pc3Npb25zLmZvckVhY2gocCA9PiB0aGlzLnNlbGVjdGVkVmFsdWVzW3AudmFsdWVdID0gZmFsc2UpO1xuICAgIH1cblxuXG4gICAgdG9nZ2xlR3JvdXAoZ3JvdXBOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGZpcnN0TWVtYmVyVmFsdWU6IGJvb2xlYW47XG5cbiAgICAgICAgdGhpcy5hbGxQZXJtaXNzaW9ucy5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgaWYgKHAuZ3JvdXBOYW1lICE9IGdyb3VwTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZpcnN0TWVtYmVyVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZpcnN0TWVtYmVyVmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWVzW3AudmFsdWVdID09IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZXNbcC52YWx1ZV0gPSAhZmlyc3RNZW1iZXJWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGdldFNlbGVjdGVkUGVybWlzc2lvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbFBlcm1pc3Npb25zLmZpbHRlcihwID0+IHRoaXMuc2VsZWN0ZWRWYWx1ZXNbcC52YWx1ZV0gPT0gdHJ1ZSk7XG4gICAgfVxuXG5cbiAgICByZXNldEZvcm0ocmVwbGFjZSA9IGZhbHNlKSB7XG5cbiAgICAgICAgaWYgKCFyZXBsYWNlKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0ucmVzZXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybVJlc2V0VG9nZ2xlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybVJlc2V0VG9nZ2xlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBuZXdSb2xlKGFsbFBlcm1pc3Npb25zOiBQZXJtaXNzaW9uW10pIHtcbiAgICAgICAgdGhpcy5pc05ld1JvbGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmVkaXRpbmdSb2xlTmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMuYWxsUGVybWlzc2lvbnMgPSBhbGxQZXJtaXNzaW9ucztcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9IHt9O1xuICAgICAgICB0aGlzLnJvbGVFZGl0ID0gbmV3IFJvbGUoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yb2xlRWRpdDtcbiAgICB9XG5cbiAgICBlZGl0Um9sZShyb2xlOiBSb2xlLCBhbGxQZXJtaXNzaW9uczogUGVybWlzc2lvbltdKSB7XG4gICAgICAgIGlmIChyb2xlKSB7XG4gICAgICAgICAgICB0aGlzLmlzTmV3Um9sZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuZWRpdGluZ1JvbGVOYW1lID0gcm9sZS5uYW1lO1xuICAgICAgICAgICAgdGhpcy5hbGxQZXJtaXNzaW9ucyA9IGFsbFBlcm1pc3Npb25zO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9IHt9O1xuICAgICAgICAgICAgcm9sZS5wZXJtaXNzaW9ucy5mb3JFYWNoKHAgPT4gdGhpcy5zZWxlY3RlZFZhbHVlc1twLnZhbHVlXSA9IHRydWUpO1xuICAgICAgICAgICAgdGhpcy5yb2xlRWRpdCA9IG5ldyBSb2xlKCk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMucm9sZUVkaXQsIHJvbGUpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yb2xlRWRpdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5ld1JvbGUoYWxsUGVybWlzc2lvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGdldCBjYW5NYW5hZ2VSb2xlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudFNlcnZpY2UudXNlckhhc1Blcm1pc3Npb24oUGVybWlzc2lvbi5tYW5hZ2VSb2xlc1Blcm1pc3Npb24pO1xuICAgIH1cbn1cbiJdfQ==