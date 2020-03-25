/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/user-info/user-info.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, ViewChild, Input } from '@angular/core';
import { MessageSeverity, Utilities } from '@polpware/ngx-appkit-contracts-alpha';
import { AlertService } from '@polpware/ngx-appkit-services-alpha';
import { Permission, User } from '@polpware/ngx-oauth2';
import { AccountService } from '../../services/account.service';
import { UserEdit } from '../../models/user-edit.model';
import { Role } from '../../models/role.model';
export class UserInfoComponent {
    /**
     * @param {?} alertService
     * @param {?} accountService
     */
    constructor(alertService, accountService) {
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
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.isGeneralEditor) {
            this.loadCurrentUserData();
        }
    }
    /**
     * @private
     * @return {?}
     */
    loadCurrentUserData() {
        this.alertService.startLoadingMessage();
        if (this.canViewAllRoles) {
            this.accountService.getUserAndRoles().subscribe((/**
             * @param {?} results
             * @return {?}
             */
            results => this.onCurrentUserDataLoadSuccessful(results[0], results[1])), (/**
             * @param {?} error
             * @return {?}
             */
            error => this.onCurrentUserDataLoadFailed(error)));
        }
        else {
            this.accountService.getUser().subscribe((/**
             * @param {?} user
             * @return {?}
             */
            user => this.onCurrentUserDataLoadSuccessful(user, user.roles.map((/**
             * @param {?} x
             * @return {?}
             */
            x => new Role(x))))), (/**
             * @param {?} error
             * @return {?}
             */
            error => this.onCurrentUserDataLoadFailed(error)));
        }
    }
    /**
     * @private
     * @param {?} user
     * @param {?} roles
     * @return {?}
     */
    onCurrentUserDataLoadSuccessful(user, roles) {
        this.alertService.stopLoadingMessage();
        this.user = user;
        this.allRoles = roles;
    }
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    onCurrentUserDataLoadFailed(error) {
        this.alertService.stopLoadingMessage();
        this.alertService.showStickyMessage('Load Error', `Unable to retrieve user data from the server.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        this.user = new User();
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getRoleByName(name) {
        return this.allRoles.find((/**
         * @param {?} r
         * @return {?}
         */
        (r) => r.name == name));
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
     * @param {?} user
     * @return {?}
     */
    deletePasswordFromUser(user) {
        /** @type {?} */
        const userEdit = (/** @type {?} */ (user));
        delete userEdit.currentPassword;
        delete userEdit.newPassword;
        delete userEdit.confirmPassword;
    }
    /**
     * @return {?}
     */
    edit() {
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
    }
    /**
     * @return {?}
     */
    save() {
        this.isSaving = true;
        this.alertService.startLoadingMessage('Saving changes...');
        if (this.isNewUser) {
            this.accountService.newUser(this.userEdit).subscribe((/**
             * @param {?} user
             * @return {?}
             */
            user => this.saveSuccessHelper(user)), (/**
             * @param {?} error
             * @return {?}
             */
            error => this.saveFailedHelper(error)));
        }
        else {
            this.accountService.updateUser(this.userEdit).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            response => this.saveSuccessHelper()), (/**
             * @param {?} error
             * @return {?}
             */
            error => this.saveFailedHelper(error)));
        }
    }
    /**
     * @private
     * @param {?=} user
     * @return {?}
     */
    saveSuccessHelper(user) {
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
                this.alertService.showMessage('Success', `User \"${this.user.userName}\" was created successfully`, MessageSeverity.success);
            }
            else if (!this.isEditingSelf) {
                this.alertService.showMessage('Success', `Changes to user \"${this.user.userName}\" was saved successfully`, MessageSeverity.success);
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
    }
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    saveFailedHelper(error) {
        this.isSaving = false;
        this.alertService.stopLoadingMessage();
        this.alertService.showStickyMessage('Save Error', 'The below errors occured whilst saving your changes:', MessageSeverity.error, error);
        this.alertService.showStickyMessage(error, null, MessageSeverity.error);
        if (this.changesFailedCallback) {
            this.changesFailedCallback();
        }
    }
    /**
     * @private
     * @param {?} currentUser
     * @param {?} editedUser
     * @return {?}
     */
    testIsRoleUserCountChanged(currentUser, editedUser) {
        /** @type {?} */
        const rolesAdded = this.isNewUser ? editedUser.roles : editedUser.roles.filter((/**
         * @param {?} role
         * @return {?}
         */
        role => currentUser.roles.indexOf(role) == -1));
        /** @type {?} */
        const rolesRemoved = this.isNewUser ? [] : currentUser.roles.filter((/**
         * @param {?} role
         * @return {?}
         */
        role => editedUser.roles.indexOf(role) == -1));
        /** @type {?} */
        const modifiedRoles = rolesAdded.concat(rolesRemoved);
        if (modifiedRoles.length) {
            setTimeout((/**
             * @return {?}
             */
            () => this.accountService.onRolesUserCountChanged(modifiedRoles)));
        }
    }
    /**
     * @return {?}
     */
    cancel() {
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
    }
    /**
     * @return {?}
     */
    close() {
        this.userEdit = this.user = new UserEdit();
        this.showValidationErrors = false;
        this.resetForm();
        this.isEditMode = false;
        if (this.changesSavedCallback) {
            this.changesSavedCallback();
        }
    }
    /**
     * @private
     * @return {?}
     */
    refreshLoggedInUser() {
        this.accountService.refreshLoggedInUser()
            .subscribe((/**
         * @param {?} user
         * @return {?}
         */
        user => {
            this.loadCurrentUserData();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.alertService.resetStickyMessage();
            this.alertService.showStickyMessage('Refresh failed', 'An error occured whilst refreshing logged in user information from the server', MessageSeverity.error, error);
        }));
    }
    /**
     * @return {?}
     */
    changePassword() {
        this.isChangePassword = true;
    }
    /**
     * @return {?}
     */
    unlockUser() {
        this.isSaving = true;
        this.alertService.startLoadingMessage('Unblocking user...');
        this.accountService.unblockUser(this.userEdit.id)
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.isSaving = false;
            this.userEdit.isLockedOut = false;
            this.alertService.stopLoadingMessage();
            this.alertService.showMessage('Success', 'User has been successfully unblocked', MessageSeverity.success);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.isSaving = false;
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Unblock Error', 'The below errors occured whilst unblocking the user:', MessageSeverity.error, error);
            this.alertService.showStickyMessage(error, null, MessageSeverity.error);
        }));
    }
    /**
     * @param {?=} replace
     * @return {?}
     */
    resetForm(replace = false) {
        this.isChangePassword = false;
        if (!replace) {
            this.form.reset();
        }
        else {
            this.formResetToggle = false;
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.formResetToggle = true;
            }));
        }
    }
    /**
     * @param {?} allRoles
     * @return {?}
     */
    newUser(allRoles) {
        this.isGeneralEditor = true;
        this.isNewUser = true;
        this.allRoles = [...allRoles];
        this.user = this.userEdit = new UserEdit();
        this.userEdit.isEnabled = true;
        this.edit();
        return this.userEdit;
    }
    /**
     * @param {?} user
     * @param {?} allRoles
     * @return {?}
     */
    editUser(user, allRoles) {
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
    }
    /**
     * @param {?} user
     * @param {?=} allRoles
     * @return {?}
     */
    displayUser(user, allRoles) {
        this.user = new User();
        Object.assign(this.user, user);
        this.deletePasswordFromUser(this.user);
        this.setRoles(user, allRoles);
        this.isEditMode = false;
    }
    /**
     * @private
     * @param {?} user
     * @param {?=} allRoles
     * @return {?}
     */
    setRoles(user, allRoles) {
        this.allRoles = allRoles ? [...allRoles] : [];
        if (user.roles) {
            for (const ur of user.roles) {
                if (!this.allRoles.some((/**
                 * @param {?} r
                 * @return {?}
                 */
                r => r.name == ur))) {
                    this.allRoles.unshift(new Role(ur));
                }
            }
        }
        if (allRoles == null || this.allRoles.length != allRoles.length) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                if (this.rolesSelector) {
                    this.rolesSelector.refresh();
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    get canViewAllRoles() {
        return this.accountService.userHasPermission(Permission.viewRolesPermission);
    }
    /**
     * @return {?}
     */
    get canAssignRoles() {
        return this.accountService.userHasPermission(Permission.assignRolesPermission);
    }
}
UserInfoComponent.decorators = [
    { type: Component, args: [{
                selector: 'user-info',
                template: "<div>\n  <form *ngIf=\"formResetToggle\" [attr.autocomplete]=\"isGeneralEditor ? 'NaN' : null\" name=\"userInfoForm\" #f=\"ngForm\" novalidate\n        (ngSubmit)=\"f.form.valid ? save() :\n\n          (!userName.valid && showErrorAlert('User name is required', 'Please enter a user name (minimum of 2 and maximum of 200 characters)'));\n\n          (userPassword && !userPassword.valid && showErrorAlert('Password is required', 'Please enter the current password'));\n\n          (email.errors?.required && showErrorAlert('Email is required', 'Please enter an email address (maximum of 200 characters)'));\n          (email.errors?.pattern && showErrorAlert('Invalid Email', 'Please enter a valid email address'));\n\n          (isChangePassword && isEditingSelf && !currentPassword.valid && showErrorAlert('Current password is required', 'Please enter the current password'));\n\n          ((isChangePassword || isNewUser) && !newPassword.valid && showErrorAlert('New password is required', 'Please enter the new password (minimum of 6 characters)'));\n\n          ((isChangePassword || isNewUser) && newPassword.valid && confirmPassword.errors?.required && showErrorAlert('Confirmation password is required', 'Please enter the confirmation password'));\n          ((isChangePassword || isNewUser) && newPassword.valid && confirmPassword.errors?.validateEqual && showErrorAlert('Passwword mismatch', 'New password and confirmation password do not match'));\n\n          (canAssignRoles && !isEditingSelf && !roles.valid && showErrorAlert('Roles is required', 'Please select a minimum of 1 role'));\">\n\n    <div class=\"form-group row\">\n      <label [class.col-lg-3]=\"isViewOnly\" [class.col-lg-2]=\"!isViewOnly\" class=\"col-form-label\" for=\"jobTitle-{{uniqueId}}\">{{'users.editor.JobTitle' | translate}}</label>\n      <div *ngIf=\"!isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <p class=\"form-control-plaintext\">{{user.jobTitle}}</p>\n      </div>\n      <div *ngIf=\"isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <input autofocus type=\"text\" attr.id=\"jobTitle-{{uniqueId}}\" name=\"jobTitle\" placeholder=\"Enter Job Title\" class=\"form-control\" [(ngModel)]=\"userEdit.jobTitle\" />\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div class=\"form-group row has-feedback-icon\">\n      <label [class.col-lg-3]=\"isViewOnly\" [class.col-lg-2]=\"!isViewOnly\" class=\"col-form-label\" for=\"userName-{{uniqueId}}\">{{'users.editor.UserName' | translate}}</label>\n      <div *ngIf=\"!isEditMode || isEditingSelf\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <p class=\"form-control-plaintext\">{{user.userName}}</p>\n      </div>\n      <div *ngIf=\"isEditMode && !isEditingSelf\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <input type=\"text\" attr.id=\"userName-{{uniqueId}}\" name=\"userName\" [attr.autocomplete]=\"isGeneralEditor ? 'new-password' : null\" placeholder=\"Enter user name\"\n               class=\"form-control\" [ngClass]=\"{'is-valid': f.submitted && userName.valid, 'is-invalid' : f.submitted && !userName.valid}\"\n               [(ngModel)]=\"userEdit.userName\" #userName=\"ngModel\" required minlength=\"2\" maxlength=\"200\" />\n        <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': userName.valid, 'fa-times' : !userName.valid}\" aria-hidden=\"true\"></i>\n        <span *ngIf=\"showValidationErrors && f.submitted && !userName.valid\" class=\"invalid-feedback\">\n          {{'users.editor.UserNameRequired' | translate}}\n        </span>\n      </div>\n    </div>\n\n    <div *ngIf=\"isEditMode && isEditingSelf && !isChangePassword && user.userName != userEdit.userName\" class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr class=\"password-separator-hr\" />\n      </div>\n    </div>\n    <div *ngIf=\"isEditMode && isEditingSelf && !isChangePassword && user.userName != userEdit.userName\" class=\"form-group row has-feedback-icon\">\n      <label class=\"col-form-label col-lg-2\" for=\"userPassword-{{uniqueId}}\">{{'users.editor.Password' | translate}}</label>\n      <div class=\"col-lg-10\">\n        <input type=\"password\" attr.id=\"userPassword-{{uniqueId}}\" name=\"userPassword\" [attr.autocomplete]=\"isGeneralEditor ? 'new-password' : null\" placeholder=\"Enter password\"\n               class=\"form-control\" [ngClass]=\"{'is-valid': f.submitted && userPassword.valid, 'is-invalid' : f.submitted && !userPassword.valid}\"\n               [(ngModel)]=\"userEdit.currentPassword\" #userPassword=\"ngModel\" required />\n        <small class=\"hint-sm\">{{'users.editor.PasswordHint' | translate}}</small>\n        <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': userPassword.valid, 'fa-times' : !userPassword.valid}\" aria-hidden=\"true\"></i>\n        <span *ngIf=\"showValidationErrors && f.submitted && !userPassword.valid\" class=\"invalid-feedback\">\n          {{'users.editor.CurrentPasswordRequired' | translate}}\n        </span>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div class=\"form-group row has-feedback-icon\">\n      <label [class.col-lg-3]=\"isViewOnly\" [class.col-lg-2]=\"!isViewOnly\" class=\"col-form-label\" for=\"email-{{uniqueId}}\">{{'users.editor.Email' | translate}}</label>\n      <div *ngIf=\"!isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <p class=\"form-control-plaintext\">{{user.email}}</p>\n      </div>\n      <div *ngIf=\"isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <input type=\"text\" attr.id=\"email-{{uniqueId}}\" name=\"email\" placeholder=\"Enter email address\" class=\"form-control\" [ngClass]=\"{'is-valid': f.submitted && email.valid, 'is-invalid' : f.submitted && !email.valid}\"\n               [(ngModel)]=\"userEdit.email\" #email=\"ngModel\" required maxlength=\"200\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\" />\n        <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': email.valid, 'fa-times' : !email.valid}\" aria-hidden=\"true\"></i>\n        <span *ngIf=\"showValidationErrors && f.submitted && email.errors?.required\" class=\"invalid-feedback\">\n          {{'users.editor.EmailRequired' | translate}}\n        </span>\n        <span *ngIf=\"showValidationErrors && f.submitted && email.errors?.pattern\" class=\"invalid-feedback\">\n          {{'users.editor.InvalidEmail' | translate}}\n        </span>\n      </div>\n    </div>\n\n    <div *ngIf=\"isEditMode\" class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div *ngIf=\"isEditMode\" class=\"form-group row\">\n      <label for=\"newPassword-{{uniqueId}}\" class=\"col-form-label col-lg-2\">{{'users.editor.Password' | translate}}</label>\n      <div *ngIf=\"!isChangePassword && !isNewUser\" class=\"col-lg-10\">\n        <button type=\"button\" (click)=\"changePassword()\" class=\"btn btn-link\">{{'users.editor.ChangePassword' | translate}}</button>\n      </div>\n\n      <div *ngIf=\"isChangePassword || isNewUser\" class=\"col-lg-10\">\n        <div class=\"password-well card card-body bg-light\">\n          <div *ngIf=\"isEditingSelf\" class=\"form-group row has-feedback-icon\">\n            <label class=\"col-form-label col-lg-3\" for=\"currentPassword-{{uniqueId}}\">{{'users.editor.CurrentPassword' | translate}}</label>\n            <div class=\"col-lg-9\">\n              <input type=\"password\" attr.id=\"currentPassword-{{uniqueId}}\" name=\"currentPassword\" [attr.autocomplete]=\"isGeneralEditor ? 'new-password' : null\" placeholder=\"Enter current password\" class=\"form-control\"\n                     [ngClass]=\"{'is-valid': f.submitted && currentPassword.valid, 'is-invalid' : f.submitted && !currentPassword.valid}\" [(ngModel)]=\"userEdit.currentPassword\" #currentPassword=\"ngModel\" required />\n              <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': currentPassword.valid, 'fa-times' : !currentPassword.valid}\" aria-hidden=\"true\"></i>\n              <span *ngIf=\"showValidationErrors && f.submitted && !currentPassword.valid\" class=\"invalid-feedback\">\n                {{'users.editor.CurrentPasswordRequired' | translate}}\n              </span>\n            </div>\n          </div>\n\n          <div *ngIf=\"!isNewUser\" class=\"row\">\n            <div class=\"col-lg-12\">\n              <hr class=\"password-separator-hr\" />\n            </div>\n          </div>\n\n          <div class=\"form-group row has-feedback-icon\">\n            <label class=\"col-form-label col-lg-3\" for=\"newPassword-{{uniqueId}}\">{{'users.editor.NewPassword' | translate}}</label>\n            <div class=\"col-lg-9\">\n              <input type=\"password\" attr.id=\"newPassword-{{uniqueId}}\" name=\"newPassword\" [attr.autocomplete]=\"isGeneralEditor ? 'new-password' : null\" placeholder=\"Enter new password\" class=\"form-control\"\n                     [ngClass]=\"{'is-valid': f.submitted && newPassword.valid, 'is-invalid' : f.submitted && !newPassword.valid}\" [(ngModel)]=\"userEdit.newPassword\" #newPassword=\"ngModel\"\n                     required minlength=\"6\" validateEqual=\"confirmPassword\" reverse=\"true\" />\n              <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': newPassword.valid, 'fa-times' : !newPassword.valid}\" aria-hidden=\"true\"></i>\n              <span *ngIf=\"showValidationErrors && f.submitted && !newPassword.valid\" class=\"invalid-feedback\">\n                {{'users.editor.NewPasswordRequired' | translate}}\n              </span>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <hr class=\"password-separator-hr\" />\n            </div>\n          </div>\n\n          <div class=\"form-group row has-feedback-icon\">\n            <label class=\"col-form-label col-lg-3\" for=\"confirmPassword-{{uniqueId}}\">{{'users.editor.ConfirmPassword' | translate}}</label>\n            <div class=\"col-lg-9\">\n              <input type=\"password\" attr.id=\"confirmPassword-{{uniqueId}}\" name=\"confirmPassword\" [attr.autocomplete]=\"isGeneralEditor ? 'new-password' : null\" placeholder=\"Confirm new password\" class=\"form-control\"\n                     [ngClass]=\"{'is-valid': f.submitted && confirmPassword.valid, 'is-invalid' : f.submitted && !confirmPassword.valid}\" [(ngModel)]=\"userEdit.confirmPassword\" #confirmPassword=\"ngModel\"\n                     required validateEqual=\"newPassword\" />\n              <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': confirmPassword.valid, 'fa-times' : !confirmPassword.valid}\" aria-hidden=\"true\"></i>\n              <span *ngIf=\"showValidationErrors && f.submitted && confirmPassword.errors?.required\" class=\"invalid-feedback\">\n                {{'users.editor.ConfirmationPasswordRequired' | translate}}\n              </span>\n              <span *ngIf=\"showValidationErrors && f.submitted && confirmPassword.errors?.validateEqual && !confirmPassword.errors?.required\" class=\"invalid-feedback\">\n                {{'users.editor.PasswordMismatch' | translate}}\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!--******************************************************************************************************-->\n\n    <div *ngIf=\"!isEditMode || canAssignRoles || isEditingSelf\" class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div *ngIf=\"!isEditMode || canAssignRoles || isEditingSelf\" class=\"form-group row has-feedback-icon\">\n      <label [class.col-lg-3]=\"isViewOnly\" [class.col-lg-2]=\"!isViewOnly\" class=\"col-form-label\" for=\"roles-user-info\">{{'users.editor.Roles' | translate}}</label>\n      <div *ngIf=\"!isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <p ngPreserveWhitespaces class=\"form-control-plaintext\">\n          <span *ngFor=\"let role of user.roles\">\n            <span title='{{getRoleByName(role)?.description}}' class=\"badge badge-pill badge-secondary\">{{role}}</span>\n          </span>\n        </p>\n      </div>\n      <div *ngIf=\"isEditMode && canAssignRoles && !isEditingSelf\" [ngClass]=\"{'is-valid': f.submitted && roles.valid, 'is-invalid' : f.submitted && !roles.valid}\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <select id=\"roles-user-info\" name=\"roles\" [(ngModel)]=\"userEdit.roles\" #roles=\"ngModel\" #rolesSelector=\"bootstrap-select\"\n                class=\"selectpicker form-control left-status\" bootstrapSelect required multiple data-live-search=\"true\" data-actions-box=\"false\" data-live-search-placeholder=\"Search...\" title=\"Select Roles\">\n          <option *ngFor=\"let role of allRoles\" attr.data-content=\"<span title='{{role.description}}' class='badge badge-pill badge-secondary'>{{role.name}}</span>\" attr.value=\"{{role.name}}\">\n            {{role.name}}\n          </option>\n        </select>\n        <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': roles.valid, 'fa-times' : !roles.valid}\" aria-hidden=\"true\"></i>\n        <span *ngIf=\"showValidationErrors && f.submitted && !roles.valid\" class=\"invalid-feedback\">\n          {{'users.editor.RoleRequired' | translate}}\n        </span>\n      </div>\n    </div>\n\n    <!--******************************************************************************************************-->\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label [class.col-lg-3]=\"isViewOnly\" [class.col-lg-2]=\"!isViewOnly\" class=\"col-form-label\" for=\"fullName-{{uniqueId}}\">{{'users.editor.FullName' | translate}}</label>\n      <div *ngIf=\"!isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <p class=\"form-control-plaintext\">{{user.fullName}}</p>\n      </div>\n      <div *ngIf=\"isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <input type=\"text\" attr.id=\"fullName-{{uniqueId}}\" name=\"fullName\" placeholder=\"Enter full name\" class=\"form-control\" [(ngModel)]=\"userEdit.fullName\" />\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label [class.col-lg-3]=\"isViewOnly\" [class.col-lg-2]=\"!isViewOnly\" class=\"col-form-label\" for=\"phoneNumber-{{uniqueId}}\">{{'users.editor.PhoneNumber' | translate}}</label>\n      <div *ngIf=\"!isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <p class=\"form-control-plaintext\">{{user.phoneNumber}}</p>\n      </div>\n      <div *ngIf=\"isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <input type=\"text\" attr.id=\"phoneNumber-{{uniqueId}}\" name=\"phoneNumber\" placeholder=\"Enter phone number\" class=\"form-control\" [(ngModel)]=\"userEdit.phoneNumber\" />\n      </div>\n    </div>\n\n    <div *ngIf=\"!isViewOnly\" class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.last-separator-hr]=\"!isEditMode\" [class.edit-last-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div *ngIf=\"!isViewOnly\" class=\"form-group row\">\n      <div class=\"col-sm-5\">\n        <div *ngIf=\"isGeneralEditor && isEditMode\" class=\"float-left\">\n          <div class=\"form-check user-enabled\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"idEnabled\" name=\"isEnabled\" [(ngModel)]=\"userEdit.isEnabled\">\n            <label for=\"idEnabled\" class=\"form-check-label\">{{'users.editor.Enabled' | translate}}</label>\n          </div>\n          <button *ngIf=\"userEdit.isLockedOut\" type=\"button\" (click)=\"unlockUser()\" class=\"btn btn-warning unblock-user\" [disabled]=\"isSaving\"><i class='fa fa-unlock-alt'></i> {{'users.editor.Unblock' | translate}}</button>\n        </div>\n      </div>\n      <div class=\"col-sm-7\">\n        <div ngPreserveWhitespaces class=\"float-right\">\n          <button *ngIf=\"!isEditMode && isGeneralEditor\" type=\"button\" (click)=\"close()\" class=\"btn btn-outline-secondary\"><i class='fa fa-close'></i> {{'users.editor.Close' | translate}}</button>\n          <button *ngIf=\"!isEditMode && !isGeneralEditor\" type=\"button\" (click)=\"edit()\" class=\"btn btn-outline-secondary\"><i class='fa fa-edit'></i> {{'users.editor.Edit' | translate}}</button>\n          <button *ngIf=\"isEditMode\" type=\"button\" (click)=\"cancel()\" class=\"btn btn-danger\" [disabled]=\"isSaving\"><i class='fa fa-times'></i> {{'users.editor.Cancel' | translate}}</button>\n          <button *ngIf=\"isEditMode\" type=\"submit\" class=\"btn btn-primary\" [disabled]=\"isSaving\">\n            <i *ngIf=\"!isSaving\" class='fa fa-save'></i><i *ngIf=\"isSaving\" class='fa fa-circle-o-notch fa-spin'></i> {{isSaving ? ('users.editor.Saving' | translate) : ('users.editor.Save' | translate)}}\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n  </form>\n</div>\n",
                styles: [".separator-hr{margin:0 5px;border-top-style:dashed}.edit-separator-hr{margin:10px 5px;border-top-style:dashed}.last-separator-hr{margin-top:5px}.edit-last-separator-hr{margin-top:15px}.password-separator-hr{margin:5px;border-style:none}.form-group{margin-top:0;margin-bottom:0}input.form-control{border-left-width:5px}.invalid-feedback{display:block}.password-well{padding:.5rem}.hint-sm{display:block}.form-check.user-enabled{display:inline-block}.unblock-user{margin-left:34px}@media (min-width:992px){.user-enabled{margin-left:40px}}"]
            }] }
];
/** @nocollapse */
UserInfoComponent.ctorParameters = () => [
    { type: AlertService },
    { type: AccountService }
];
UserInfoComponent.propDecorators = {
    isViewOnly: [{ type: Input }],
    isGeneralEditor: [{ type: Input }],
    form: [{ type: ViewChild, args: ['f', { static: false },] }],
    userName: [{ type: ViewChild, args: ['userName', { static: false },] }],
    userPassword: [{ type: ViewChild, args: ['userPassword', { static: false },] }],
    email: [{ type: ViewChild, args: ['email', { static: false },] }],
    currentPassword: [{ type: ViewChild, args: ['currentPassword', { static: false },] }],
    newPassword: [{ type: ViewChild, args: ['newPassword', { static: false },] }],
    confirmPassword: [{ type: ViewChild, args: ['confirmPassword', { static: false },] }],
    roles: [{ type: ViewChild, args: ['roles', { static: false },] }],
    rolesSelector: [{ type: ViewChild, args: ['rolesSelector', { static: false },] }]
};
if (false) {
    /** @type {?} */
    UserInfoComponent.prototype.isEditMode;
    /** @type {?} */
    UserInfoComponent.prototype.isNewUser;
    /** @type {?} */
    UserInfoComponent.prototype.isSaving;
    /** @type {?} */
    UserInfoComponent.prototype.isChangePassword;
    /** @type {?} */
    UserInfoComponent.prototype.isEditingSelf;
    /** @type {?} */
    UserInfoComponent.prototype.showValidationErrors;
    /** @type {?} */
    UserInfoComponent.prototype.uniqueId;
    /** @type {?} */
    UserInfoComponent.prototype.user;
    /** @type {?} */
    UserInfoComponent.prototype.userEdit;
    /** @type {?} */
    UserInfoComponent.prototype.allRoles;
    /** @type {?} */
    UserInfoComponent.prototype.formResetToggle;
    /** @type {?} */
    UserInfoComponent.prototype.changesSavedCallback;
    /** @type {?} */
    UserInfoComponent.prototype.changesFailedCallback;
    /** @type {?} */
    UserInfoComponent.prototype.changesCancelledCallback;
    /** @type {?} */
    UserInfoComponent.prototype.isViewOnly;
    /** @type {?} */
    UserInfoComponent.prototype.isGeneralEditor;
    /** @type {?} */
    UserInfoComponent.prototype.form;
    /** @type {?} */
    UserInfoComponent.prototype.userName;
    /** @type {?} */
    UserInfoComponent.prototype.userPassword;
    /** @type {?} */
    UserInfoComponent.prototype.email;
    /** @type {?} */
    UserInfoComponent.prototype.currentPassword;
    /** @type {?} */
    UserInfoComponent.prototype.newPassword;
    /** @type {?} */
    UserInfoComponent.prototype.confirmPassword;
    /** @type {?} */
    UserInfoComponent.prototype.roles;
    /** @type {?} */
    UserInfoComponent.prototype.rolesSelector;
    /**
     * @type {?}
     * @private
     */
    UserInfoComponent.prototype.alertService;
    /**
     * @type {?}
     * @private
     */
    UserInfoComponent.prototype.accountService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEUsT0FBTyxFQUNILGVBQWUsRUFDZixTQUFTLEVBQ1osTUFBTSxzQ0FBc0MsQ0FBQztBQUU5QyxPQUFPLEVBQ0gsWUFBWSxFQUNmLE1BQU0scUNBQXFDLENBQUM7QUFFN0MsT0FBTyxFQUNILFVBQVUsRUFDVixJQUFJLEVBQ1AsTUFBTSxzQkFBc0IsQ0FBQztBQUc5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDaEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQVEvQyxNQUFNLE9BQU8saUJBQWlCOzs7OztJQTBEMUIsWUFBb0IsWUFBMEIsRUFBVSxjQUE4QjtRQUFsRSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQXhEL0UsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUM3QixhQUFRLEdBQVcsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hDLFNBQUksR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRXhCLGFBQVEsR0FBVyxF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OztJQUVuQiw0Q0FDdUI7O0lBRXZCLGtDQUNhOztJQUViLDBDQUNxQjs7Ozs7SUFHVCx5Q0FBa0M7Ozs7O0lBQUUsMkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIE1lc3NhZ2VTZXZlcml0eSxcbiAgICBVdGlsaXRpZXNcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBBbGVydFNlcnZpY2Vcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtc2VydmljZXMtYWxwaGEnO1xuXG5pbXBvcnQge1xuICAgIFBlcm1pc3Npb24sXG4gICAgVXNlclxufSBmcm9tICdAcG9scHdhcmUvbmd4LW9hdXRoMic7XG5cblxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckVkaXQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdXNlci1lZGl0Lm1vZGVsJztcbmltcG9ydCB7IFJvbGUgfSBmcm9tICcuLi8uLi9tb2RlbHMvcm9sZS5tb2RlbCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd1c2VyLWluZm8nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi91c2VyLWluZm8uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3VzZXItaW5mby5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHB1YmxpYyBpc0VkaXRNb2RlID0gZmFsc2U7XG4gICAgcHVibGljIGlzTmV3VXNlciA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc1NhdmluZyA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc0NoYW5nZVBhc3N3b3JkID0gZmFsc2U7XG4gICAgcHVibGljIGlzRWRpdGluZ1NlbGYgPSBmYWxzZTtcbiAgICBwdWJsaWMgc2hvd1ZhbGlkYXRpb25FcnJvcnMgPSBmYWxzZTtcbiAgICBwdWJsaWMgdW5pcXVlSWQ6IHN0cmluZyA9IFV0aWxpdGllcy51bmlxdWVJZCgpO1xuICAgIHB1YmxpYyB1c2VyOiBVc2VyID0gbmV3IFVzZXIoKTtcbiAgICBwdWJsaWMgdXNlckVkaXQ6IFVzZXJFZGl0O1xuICAgIHB1YmxpYyBhbGxSb2xlczogUm9sZVtdID0gW107XG5cbiAgICBwdWJsaWMgZm9ybVJlc2V0VG9nZ2xlID0gdHJ1ZTtcblxuICAgIHB1YmxpYyBjaGFuZ2VzU2F2ZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBwdWJsaWMgY2hhbmdlc0ZhaWxlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBjaGFuZ2VzQ2FuY2VsbGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG5cbiAgICBASW5wdXQoKVxuICAgIGlzVmlld09ubHk6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIGlzR2VuZXJhbEVkaXRvciA9IGZhbHNlO1xuXG5cblxuXG5cbiAgICBAVmlld0NoaWxkKCdmJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIGZvcm07XG5cbiAgICAvLyBWaWV3Q2hpbGRzIFJlcXVpcmVkIGJlY2F1c2UgbmdJZiBoaWRlcyB0ZW1wbGF0ZSB2YXJpYWJsZXMgZnJvbSBnbG9iYWwgc2NvcGVcbiAgICBAVmlld0NoaWxkKCd1c2VyTmFtZScsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyB1c2VyTmFtZTtcblxuICAgIEBWaWV3Q2hpbGQoJ3VzZXJQYXNzd29yZCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyB1c2VyUGFzc3dvcmQ7XG5cbiAgICBAVmlld0NoaWxkKCdlbWFpbCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBlbWFpbDtcblxuICAgIEBWaWV3Q2hpbGQoJ2N1cnJlbnRQYXNzd29yZCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBjdXJyZW50UGFzc3dvcmQ7XG5cbiAgICBAVmlld0NoaWxkKCduZXdQYXNzd29yZCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBuZXdQYXNzd29yZDtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbmZpcm1QYXNzd29yZCcsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBjb25maXJtUGFzc3dvcmQ7XG5cbiAgICBAVmlld0NoaWxkKCdyb2xlcycsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyByb2xlcztcblxuICAgIEBWaWV3Q2hpbGQoJ3JvbGVzU2VsZWN0b3InLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgcm9sZXNTZWxlY3RvcjtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSwgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzR2VuZXJhbEVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5sb2FkQ3VycmVudFVzZXJEYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSBsb2FkQ3VycmVudFVzZXJEYXRhKCkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FuVmlld0FsbFJvbGVzKSB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmdldFVzZXJBbmRSb2xlcygpLnN1YnNjcmliZShyZXN1bHRzID0+IHRoaXMub25DdXJyZW50VXNlckRhdGFMb2FkU3VjY2Vzc2Z1bChyZXN1bHRzWzBdLCByZXN1bHRzWzFdKSwgZXJyb3IgPT4gdGhpcy5vbkN1cnJlbnRVc2VyRGF0YUxvYWRGYWlsZWQoZXJyb3IpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuZ2V0VXNlcigpLnN1YnNjcmliZSh1c2VyID0+IHRoaXMub25DdXJyZW50VXNlckRhdGFMb2FkU3VjY2Vzc2Z1bCh1c2VyLCB1c2VyLnJvbGVzLm1hcCh4ID0+IG5ldyBSb2xlKHgpKSksIGVycm9yID0+IHRoaXMub25DdXJyZW50VXNlckRhdGFMb2FkRmFpbGVkKGVycm9yKSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByaXZhdGUgb25DdXJyZW50VXNlckRhdGFMb2FkU3VjY2Vzc2Z1bCh1c2VyOiBVc2VyLCByb2xlczogUm9sZVtdKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgICB0aGlzLmFsbFJvbGVzID0gcm9sZXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkN1cnJlbnRVc2VyRGF0YUxvYWRGYWlsZWQoZXJyb3I6IGFueSkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ0xvYWQgRXJyb3InLCBgVW5hYmxlIHRvIHJldHJpZXZlIHVzZXIgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuXFxyXFxuRXJyb3JzOiBcIiR7VXRpbGl0aWVzLmdldEh0dHBSZXNwb25zZU1lc3NhZ2VzKGVycm9yKX1cImAsXG4gICAgICAgICAgICBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcblxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgIH1cblxuXG5cbiAgICBnZXRSb2xlQnlOYW1lKG5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxSb2xlcy5maW5kKChyKSA9PiByLm5hbWUgPT0gbmFtZSk7XG4gICAgfVxuXG5cblxuICAgIHNob3dFcnJvckFsZXJ0KGNhcHRpb246IHN0cmluZywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKGNhcHRpb24sIG1lc3NhZ2UsIE1lc3NhZ2VTZXZlcml0eS5lcnJvcik7XG4gICAgfVxuXG5cbiAgICBkZWxldGVQYXNzd29yZEZyb21Vc2VyKHVzZXI6IFVzZXJFZGl0IHwgVXNlcikge1xuICAgICAgICBjb25zdCB1c2VyRWRpdCA9IHVzZXIgYXMgVXNlckVkaXQ7XG5cbiAgICAgICAgZGVsZXRlIHVzZXJFZGl0LmN1cnJlbnRQYXNzd29yZDtcbiAgICAgICAgZGVsZXRlIHVzZXJFZGl0Lm5ld1Bhc3N3b3JkO1xuICAgICAgICBkZWxldGUgdXNlckVkaXQuY29uZmlybVBhc3N3b3JkO1xuICAgIH1cblxuXG4gICAgZWRpdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzR2VuZXJhbEVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5pc0VkaXRpbmdTZWxmID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudXNlckVkaXQgPSBuZXcgVXNlckVkaXQoKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy51c2VyRWRpdCwgdGhpcy51c2VyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy51c2VyRWRpdCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckVkaXQgPSBuZXcgVXNlckVkaXQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pc0VkaXRpbmdTZWxmID0gdGhpcy5hY2NvdW50U2VydmljZS5jdXJyZW50VXNlciA/IHRoaXMudXNlckVkaXQuaWQgPT0gdGhpcy5hY2NvdW50U2VydmljZS5jdXJyZW50VXNlci5pZCA6IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc0VkaXRNb2RlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNDaGFuZ2VQYXNzd29yZCA9IGZhbHNlO1xuICAgIH1cblxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0YXJ0TG9hZGluZ01lc3NhZ2UoJ1NhdmluZyBjaGFuZ2VzLi4uJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNOZXdVc2VyKSB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLm5ld1VzZXIodGhpcy51c2VyRWRpdCkuc3Vic2NyaWJlKHVzZXIgPT4gdGhpcy5zYXZlU3VjY2Vzc0hlbHBlcih1c2VyKSwgZXJyb3IgPT4gdGhpcy5zYXZlRmFpbGVkSGVscGVyKGVycm9yKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLnVwZGF0ZVVzZXIodGhpcy51c2VyRWRpdCkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHRoaXMuc2F2ZVN1Y2Nlc3NIZWxwZXIoKSwgZXJyb3IgPT4gdGhpcy5zYXZlRmFpbGVkSGVscGVyKGVycm9yKSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByaXZhdGUgc2F2ZVN1Y2Nlc3NIZWxwZXIodXNlcj86IFVzZXIpIHtcbiAgICAgICAgdGhpcy50ZXN0SXNSb2xlVXNlckNvdW50Q2hhbmdlZCh0aGlzLnVzZXIsIHRoaXMudXNlckVkaXQpO1xuXG4gICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMudXNlckVkaXQsIHVzZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5pc0NoYW5nZVBhc3N3b3JkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmRlbGV0ZVBhc3N3b3JkRnJvbVVzZXIodGhpcy51c2VyRWRpdCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy51c2VyLCB0aGlzLnVzZXJFZGl0KTtcbiAgICAgICAgdGhpcy51c2VyRWRpdCA9IG5ldyBVc2VyRWRpdCgpO1xuICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuXG5cbiAgICAgICAgaWYgKHRoaXMuaXNHZW5lcmFsRWRpdG9yKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc05ld1VzZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93TWVzc2FnZSgnU3VjY2VzcycsIGBVc2VyIFxcXCIke3RoaXMudXNlci51c2VyTmFtZX1cXFwiIHdhcyBjcmVhdGVkIHN1Y2Nlc3NmdWxseWAsIE1lc3NhZ2VTZXZlcml0eS5zdWNjZXNzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNFZGl0aW5nU2VsZikge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdTdWNjZXNzJywgYENoYW5nZXMgdG8gdXNlciBcXFwiJHt0aGlzLnVzZXIudXNlck5hbWV9XFxcIiB3YXMgc2F2ZWQgc3VjY2Vzc2Z1bGx5YCwgTWVzc2FnZVNldmVyaXR5LnN1Y2Nlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNFZGl0aW5nU2VsZikge1xuICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ1N1Y2Nlc3MnLCAnQ2hhbmdlcyB0byB5b3VyIFVzZXIgUHJvZmlsZSB3YXMgc2F2ZWQgc3VjY2Vzc2Z1bGx5JywgTWVzc2FnZVNldmVyaXR5LnN1Y2Nlc3MpO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoTG9nZ2VkSW5Vc2VyKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzRWRpdE1vZGUgPSBmYWxzZTtcblxuXG4gICAgICAgIGlmICh0aGlzLmNoYW5nZXNTYXZlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZXNTYXZlZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByaXZhdGUgc2F2ZUZhaWxlZEhlbHBlcihlcnJvcjogYW55KSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdTYXZlIEVycm9yJywgJ1RoZSBiZWxvdyBlcnJvcnMgb2NjdXJlZCB3aGlsc3Qgc2F2aW5nIHlvdXIgY2hhbmdlczonLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoZXJyb3IsIG51bGwsIE1lc3NhZ2VTZXZlcml0eS5lcnJvcik7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlc0ZhaWxlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZXNGYWlsZWRDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHByaXZhdGUgdGVzdElzUm9sZVVzZXJDb3VudENoYW5nZWQoY3VycmVudFVzZXI6IFVzZXIsIGVkaXRlZFVzZXI6IFVzZXIpIHtcblxuICAgICAgICBjb25zdCByb2xlc0FkZGVkID0gdGhpcy5pc05ld1VzZXIgPyBlZGl0ZWRVc2VyLnJvbGVzIDogZWRpdGVkVXNlci5yb2xlcy5maWx0ZXIocm9sZSA9PiBjdXJyZW50VXNlci5yb2xlcy5pbmRleE9mKHJvbGUpID09IC0xKTtcbiAgICAgICAgY29uc3Qgcm9sZXNSZW1vdmVkID0gdGhpcy5pc05ld1VzZXIgPyBbXSA6IGN1cnJlbnRVc2VyLnJvbGVzLmZpbHRlcihyb2xlID0+IGVkaXRlZFVzZXIucm9sZXMuaW5kZXhPZihyb2xlKSA9PSAtMSk7XG5cbiAgICAgICAgY29uc3QgbW9kaWZpZWRSb2xlcyA9IHJvbGVzQWRkZWQuY29uY2F0KHJvbGVzUmVtb3ZlZCk7XG5cbiAgICAgICAgaWYgKG1vZGlmaWVkUm9sZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYWNjb3VudFNlcnZpY2Uub25Sb2xlc1VzZXJDb3VudENoYW5nZWQobW9kaWZpZWRSb2xlcykpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNHZW5lcmFsRWRpdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJFZGl0ID0gdGhpcy51c2VyID0gbmV3IFVzZXJFZGl0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJFZGl0ID0gbmV3IFVzZXJFZGl0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG5cbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ0NhbmNlbGxlZCcsICdPcGVyYXRpb24gY2FuY2VsbGVkIGJ5IHVzZXInLCBNZXNzYWdlU2V2ZXJpdHkuZGVmYXVsdCk7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnJlc2V0U3RpY2t5TWVzc2FnZSgpO1xuXG4gICAgICAgIGlmICghdGhpcy5pc0dlbmVyYWxFZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFZGl0TW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlc0NhbmNlbGxlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZXNDYW5jZWxsZWRDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgdGhpcy51c2VyRWRpdCA9IHRoaXMudXNlciA9IG5ldyBVc2VyRWRpdCgpO1xuICAgICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG4gICAgICAgIHRoaXMuaXNFZGl0TW9kZSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLmNoYW5nZXNTYXZlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZXNTYXZlZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSByZWZyZXNoTG9nZ2VkSW5Vc2VyKCkge1xuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLnJlZnJlc2hMb2dnZWRJblVzZXIoKVxuICAgICAgICAgICAgLnN1YnNjcmliZSh1c2VyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRDdXJyZW50VXNlckRhdGEoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5yZXNldFN0aWNreU1lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ1JlZnJlc2ggZmFpbGVkJywgJ0FuIGVycm9yIG9jY3VyZWQgd2hpbHN0IHJlZnJlc2hpbmcgbG9nZ2VkIGluIHVzZXIgaW5mb3JtYXRpb24gZnJvbSB0aGUgc2VydmVyJywgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBjaGFuZ2VQYXNzd29yZCgpIHtcbiAgICAgICAgdGhpcy5pc0NoYW5nZVBhc3N3b3JkID0gdHJ1ZTtcbiAgICB9XG5cblxuICAgIHVubG9ja1VzZXIoKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCdVbmJsb2NraW5nIHVzZXIuLi4nKTtcblxuXG4gICAgICAgIHRoaXMuYWNjb3VudFNlcnZpY2UudW5ibG9ja1VzZXIodGhpcy51c2VyRWRpdC5pZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJFZGl0LmlzTG9ja2VkT3V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ1N1Y2Nlc3MnLCAnVXNlciBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgdW5ibG9ja2VkJywgTWVzc2FnZVNldmVyaXR5LnN1Y2Nlc3MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdVbmJsb2NrIEVycm9yJywgJ1RoZSBiZWxvdyBlcnJvcnMgb2NjdXJlZCB3aGlsc3QgdW5ibG9ja2luZyB0aGUgdXNlcjonLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoZXJyb3IsIG51bGwsIE1lc3NhZ2VTZXZlcml0eS5lcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICByZXNldEZvcm0ocmVwbGFjZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaXNDaGFuZ2VQYXNzd29yZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghcmVwbGFjZSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnJlc2V0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1SZXNldFRvZ2dsZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1SZXNldFRvZ2dsZSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgbmV3VXNlcihhbGxSb2xlczogUm9sZVtdKSB7XG4gICAgICAgIHRoaXMuaXNHZW5lcmFsRWRpdG9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc05ld1VzZXIgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuYWxsUm9sZXMgPSBbLi4uYWxsUm9sZXNdO1xuICAgICAgICB0aGlzLnVzZXIgPSB0aGlzLnVzZXJFZGl0ID0gbmV3IFVzZXJFZGl0KCk7XG4gICAgICAgIHRoaXMudXNlckVkaXQuaXNFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lZGl0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudXNlckVkaXQ7XG4gICAgfVxuXG4gICAgZWRpdFVzZXIodXNlcjogVXNlciwgYWxsUm9sZXM6IFJvbGVbXSkge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgdGhpcy5pc0dlbmVyYWxFZGl0b3IgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pc05ld1VzZXIgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5zZXRSb2xlcyh1c2VyLCBhbGxSb2xlcyk7XG4gICAgICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICAgICAgdGhpcy51c2VyRWRpdCA9IG5ldyBVc2VyRWRpdCgpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnVzZXIsIHVzZXIpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnVzZXJFZGl0LCB1c2VyKTtcbiAgICAgICAgICAgIHRoaXMuZWRpdCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51c2VyRWRpdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5ld1VzZXIoYWxsUm9sZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBkaXNwbGF5VXNlcih1c2VyOiBVc2VyLCBhbGxSb2xlcz86IFJvbGVbXSkge1xuXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy51c2VyLCB1c2VyKTtcbiAgICAgICAgdGhpcy5kZWxldGVQYXNzd29yZEZyb21Vc2VyKHRoaXMudXNlcik7XG4gICAgICAgIHRoaXMuc2V0Um9sZXModXNlciwgYWxsUm9sZXMpO1xuXG4gICAgICAgIHRoaXMuaXNFZGl0TW9kZSA9IGZhbHNlO1xuICAgIH1cblxuXG5cbiAgICBwcml2YXRlIHNldFJvbGVzKHVzZXI6IFVzZXIsIGFsbFJvbGVzPzogUm9sZVtdKSB7XG5cbiAgICAgICAgdGhpcy5hbGxSb2xlcyA9IGFsbFJvbGVzID8gWy4uLmFsbFJvbGVzXSA6IFtdO1xuXG4gICAgICAgIGlmICh1c2VyLnJvbGVzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVyIG9mIHVzZXIucm9sZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWxsUm9sZXMuc29tZShyID0+IHIubmFtZSA9PSB1cikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxSb2xlcy51bnNoaWZ0KG5ldyBSb2xlKHVyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFsbFJvbGVzID09IG51bGwgfHwgdGhpcy5hbGxSb2xlcy5sZW5ndGggIT0gYWxsUm9sZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yb2xlc1NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9sZXNTZWxlY3Rvci5yZWZyZXNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgZ2V0IGNhblZpZXdBbGxSb2xlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudFNlcnZpY2UudXNlckhhc1Blcm1pc3Npb24oUGVybWlzc2lvbi52aWV3Um9sZXNQZXJtaXNzaW9uKTtcbiAgICB9XG5cbiAgICBnZXQgY2FuQXNzaWduUm9sZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRTZXJ2aWNlLnVzZXJIYXNQZXJtaXNzaW9uKFBlcm1pc3Npb24uYXNzaWduUm9sZXNQZXJtaXNzaW9uKTtcbiAgICB9XG59XG4iXX0=