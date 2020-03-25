/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/user-info/user-info.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(alertService, accountService) {
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
    UserInfoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.isGeneralEditor) {
            this.loadCurrentUserData();
        }
    };
    /**
     * @private
     * @return {?}
     */
    UserInfoComponent.prototype.loadCurrentUserData = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.alertService.startLoadingMessage();
        if (this.canViewAllRoles) {
            this.accountService.getUserAndRoles().subscribe((/**
             * @param {?} results
             * @return {?}
             */
            function (results) { return _this.onCurrentUserDataLoadSuccessful(results[0], results[1]); }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return _this.onCurrentUserDataLoadFailed(error); }));
        }
        else {
            this.accountService.getUser().subscribe((/**
             * @param {?} user
             * @return {?}
             */
            function (user) { return _this.onCurrentUserDataLoadSuccessful(user, user.roles.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return new Role(x); }))); }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return _this.onCurrentUserDataLoadFailed(error); }));
        }
    };
    /**
     * @private
     * @param {?} user
     * @param {?} roles
     * @return {?}
     */
    UserInfoComponent.prototype.onCurrentUserDataLoadSuccessful = /**
     * @private
     * @param {?} user
     * @param {?} roles
     * @return {?}
     */
    function (user, roles) {
        this.alertService.stopLoadingMessage();
        this.user = user;
        this.allRoles = roles;
    };
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    UserInfoComponent.prototype.onCurrentUserDataLoadFailed = /**
     * @private
     * @param {?} error
     * @return {?}
     */
    function (error) {
        this.alertService.stopLoadingMessage();
        this.alertService.showStickyMessage('Load Error', "Unable to retrieve user data from the server.\r\nErrors: \"" + Utilities.getHttpResponseMessages(error) + "\"", MessageSeverity.error, error);
        this.user = new User();
    };
    /**
     * @param {?} name
     * @return {?}
     */
    UserInfoComponent.prototype.getRoleByName = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.allRoles.find((/**
         * @param {?} r
         * @return {?}
         */
        function (r) { return r.name == name; }));
    };
    /**
     * @param {?} caption
     * @param {?} message
     * @return {?}
     */
    UserInfoComponent.prototype.showErrorAlert = /**
     * @param {?} caption
     * @param {?} message
     * @return {?}
     */
    function (caption, message) {
        this.alertService.showMessage(caption, message, MessageSeverity.error);
    };
    /**
     * @param {?} user
     * @return {?}
     */
    UserInfoComponent.prototype.deletePasswordFromUser = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        /** @type {?} */
        var userEdit = (/** @type {?} */ (user));
        delete userEdit.currentPassword;
        delete userEdit.newPassword;
        delete userEdit.confirmPassword;
    };
    /**
     * @return {?}
     */
    UserInfoComponent.prototype.edit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    UserInfoComponent.prototype.save = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isSaving = true;
        this.alertService.startLoadingMessage('Saving changes...');
        if (this.isNewUser) {
            this.accountService.newUser(this.userEdit).subscribe((/**
             * @param {?} user
             * @return {?}
             */
            function (user) { return _this.saveSuccessHelper(user); }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return _this.saveFailedHelper(error); }));
        }
        else {
            this.accountService.updateUser(this.userEdit).subscribe((/**
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
     * @param {?=} user
     * @return {?}
     */
    UserInfoComponent.prototype.saveSuccessHelper = /**
     * @private
     * @param {?=} user
     * @return {?}
     */
    function (user) {
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
                this.alertService.showMessage('Success', "User \"" + this.user.userName + "\" was created successfully", MessageSeverity.success);
            }
            else if (!this.isEditingSelf) {
                this.alertService.showMessage('Success', "Changes to user \"" + this.user.userName + "\" was saved successfully", MessageSeverity.success);
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
    };
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    UserInfoComponent.prototype.saveFailedHelper = /**
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
     * @private
     * @param {?} currentUser
     * @param {?} editedUser
     * @return {?}
     */
    UserInfoComponent.prototype.testIsRoleUserCountChanged = /**
     * @private
     * @param {?} currentUser
     * @param {?} editedUser
     * @return {?}
     */
    function (currentUser, editedUser) {
        var _this = this;
        /** @type {?} */
        var rolesAdded = this.isNewUser ? editedUser.roles : editedUser.roles.filter((/**
         * @param {?} role
         * @return {?}
         */
        function (role) { return currentUser.roles.indexOf(role) == -1; }));
        /** @type {?} */
        var rolesRemoved = this.isNewUser ? [] : currentUser.roles.filter((/**
         * @param {?} role
         * @return {?}
         */
        function (role) { return editedUser.roles.indexOf(role) == -1; }));
        /** @type {?} */
        var modifiedRoles = rolesAdded.concat(rolesRemoved);
        if (modifiedRoles.length) {
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.accountService.onRolesUserCountChanged(modifiedRoles); }));
        }
    };
    /**
     * @return {?}
     */
    UserInfoComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    UserInfoComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.userEdit = this.user = new UserEdit();
        this.showValidationErrors = false;
        this.resetForm();
        this.isEditMode = false;
        if (this.changesSavedCallback) {
            this.changesSavedCallback();
        }
    };
    /**
     * @private
     * @return {?}
     */
    UserInfoComponent.prototype.refreshLoggedInUser = /**
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
        function (user) {
            _this.loadCurrentUserData();
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.alertService.resetStickyMessage();
            _this.alertService.showStickyMessage('Refresh failed', 'An error occured whilst refreshing logged in user information from the server', MessageSeverity.error, error);
        }));
    };
    /**
     * @return {?}
     */
    UserInfoComponent.prototype.changePassword = /**
     * @return {?}
     */
    function () {
        this.isChangePassword = true;
    };
    /**
     * @return {?}
     */
    UserInfoComponent.prototype.unlockUser = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isSaving = true;
        this.alertService.startLoadingMessage('Unblocking user...');
        this.accountService.unblockUser(this.userEdit.id)
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.isSaving = false;
            _this.userEdit.isLockedOut = false;
            _this.alertService.stopLoadingMessage();
            _this.alertService.showMessage('Success', 'User has been successfully unblocked', MessageSeverity.success);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.isSaving = false;
            _this.alertService.stopLoadingMessage();
            _this.alertService.showStickyMessage('Unblock Error', 'The below errors occured whilst unblocking the user:', MessageSeverity.error, error);
            _this.alertService.showStickyMessage(error, null, MessageSeverity.error);
        }));
    };
    /**
     * @param {?=} replace
     * @return {?}
     */
    UserInfoComponent.prototype.resetForm = /**
     * @param {?=} replace
     * @return {?}
     */
    function (replace) {
        var _this = this;
        if (replace === void 0) { replace = false; }
        this.isChangePassword = false;
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
     * @param {?} allRoles
     * @return {?}
     */
    UserInfoComponent.prototype.newUser = /**
     * @param {?} allRoles
     * @return {?}
     */
    function (allRoles) {
        this.isGeneralEditor = true;
        this.isNewUser = true;
        this.allRoles = tslib_1.__spread(allRoles);
        this.user = this.userEdit = new UserEdit();
        this.userEdit.isEnabled = true;
        this.edit();
        return this.userEdit;
    };
    /**
     * @param {?} user
     * @param {?} allRoles
     * @return {?}
     */
    UserInfoComponent.prototype.editUser = /**
     * @param {?} user
     * @param {?} allRoles
     * @return {?}
     */
    function (user, allRoles) {
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
    };
    /**
     * @param {?} user
     * @param {?=} allRoles
     * @return {?}
     */
    UserInfoComponent.prototype.displayUser = /**
     * @param {?} user
     * @param {?=} allRoles
     * @return {?}
     */
    function (user, allRoles) {
        this.user = new User();
        Object.assign(this.user, user);
        this.deletePasswordFromUser(this.user);
        this.setRoles(user, allRoles);
        this.isEditMode = false;
    };
    /**
     * @private
     * @param {?} user
     * @param {?=} allRoles
     * @return {?}
     */
    UserInfoComponent.prototype.setRoles = /**
     * @private
     * @param {?} user
     * @param {?=} allRoles
     * @return {?}
     */
    function (user, allRoles) {
        var e_1, _a;
        var _this = this;
        this.allRoles = allRoles ? tslib_1.__spread(allRoles) : [];
        if (user.roles) {
            var _loop_1 = function (ur) {
                if (!this_1.allRoles.some((/**
                 * @param {?} r
                 * @return {?}
                 */
                function (r) { return r.name == ur; }))) {
                    this_1.allRoles.unshift(new Role(ur));
                }
            };
            var this_1 = this;
            try {
                for (var _b = tslib_1.__values(user.roles), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var ur = _c.value;
                    _loop_1(ur);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (allRoles == null || this.allRoles.length != allRoles.length) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this.rolesSelector) {
                    _this.rolesSelector.refresh();
                }
            }));
        }
    };
    Object.defineProperty(UserInfoComponent.prototype, "canViewAllRoles", {
        get: /**
         * @return {?}
         */
        function () {
            return this.accountService.userHasPermission(Permission.viewRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserInfoComponent.prototype, "canAssignRoles", {
        get: /**
         * @return {?}
         */
        function () {
            return this.accountService.userHasPermission(Permission.assignRolesPermission);
        },
        enumerable: true,
        configurable: true
    });
    UserInfoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'user-info',
                    template: "<div>\n  <form *ngIf=\"formResetToggle\" [attr.autocomplete]=\"isGeneralEditor ? 'NaN' : null\" name=\"userInfoForm\" #f=\"ngForm\" novalidate\n        (ngSubmit)=\"f.form.valid ? save() :\n\n          (!userName.valid && showErrorAlert('User name is required', 'Please enter a user name (minimum of 2 and maximum of 200 characters)'));\n\n          (userPassword && !userPassword.valid && showErrorAlert('Password is required', 'Please enter the current password'));\n\n          (email.errors?.required && showErrorAlert('Email is required', 'Please enter an email address (maximum of 200 characters)'));\n          (email.errors?.pattern && showErrorAlert('Invalid Email', 'Please enter a valid email address'));\n\n          (isChangePassword && isEditingSelf && !currentPassword.valid && showErrorAlert('Current password is required', 'Please enter the current password'));\n\n          ((isChangePassword || isNewUser) && !newPassword.valid && showErrorAlert('New password is required', 'Please enter the new password (minimum of 6 characters)'));\n\n          ((isChangePassword || isNewUser) && newPassword.valid && confirmPassword.errors?.required && showErrorAlert('Confirmation password is required', 'Please enter the confirmation password'));\n          ((isChangePassword || isNewUser) && newPassword.valid && confirmPassword.errors?.validateEqual && showErrorAlert('Passwword mismatch', 'New password and confirmation password do not match'));\n\n          (canAssignRoles && !isEditingSelf && !roles.valid && showErrorAlert('Roles is required', 'Please select a minimum of 1 role'));\">\n\n    <div class=\"form-group row\">\n      <label [class.col-lg-3]=\"isViewOnly\" [class.col-lg-2]=\"!isViewOnly\" class=\"col-form-label\" for=\"jobTitle-{{uniqueId}}\">{{'users.editor.JobTitle' | translate}}</label>\n      <div *ngIf=\"!isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <p class=\"form-control-plaintext\">{{user.jobTitle}}</p>\n      </div>\n      <div *ngIf=\"isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <input autofocus type=\"text\" attr.id=\"jobTitle-{{uniqueId}}\" name=\"jobTitle\" placeholder=\"Enter Job Title\" class=\"form-control\" [(ngModel)]=\"userEdit.jobTitle\" />\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div class=\"form-group row has-feedback-icon\">\n      <label [class.col-lg-3]=\"isViewOnly\" [class.col-lg-2]=\"!isViewOnly\" class=\"col-form-label\" for=\"userName-{{uniqueId}}\">{{'users.editor.UserName' | translate}}</label>\n      <div *ngIf=\"!isEditMode || isEditingSelf\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <p class=\"form-control-plaintext\">{{user.userName}}</p>\n      </div>\n      <div *ngIf=\"isEditMode && !isEditingSelf\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <input type=\"text\" attr.id=\"userName-{{uniqueId}}\" name=\"userName\" [attr.autocomplete]=\"isGeneralEditor ? 'new-password' : null\" placeholder=\"Enter user name\"\n               class=\"form-control\" [ngClass]=\"{'is-valid': f.submitted && userName.valid, 'is-invalid' : f.submitted && !userName.valid}\"\n               [(ngModel)]=\"userEdit.userName\" #userName=\"ngModel\" required minlength=\"2\" maxlength=\"200\" />\n        <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': userName.valid, 'fa-times' : !userName.valid}\" aria-hidden=\"true\"></i>\n        <span *ngIf=\"showValidationErrors && f.submitted && !userName.valid\" class=\"invalid-feedback\">\n          {{'users.editor.UserNameRequired' | translate}}\n        </span>\n      </div>\n    </div>\n\n    <div *ngIf=\"isEditMode && isEditingSelf && !isChangePassword && user.userName != userEdit.userName\" class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr class=\"password-separator-hr\" />\n      </div>\n    </div>\n    <div *ngIf=\"isEditMode && isEditingSelf && !isChangePassword && user.userName != userEdit.userName\" class=\"form-group row has-feedback-icon\">\n      <label class=\"col-form-label col-lg-2\" for=\"userPassword-{{uniqueId}}\">{{'users.editor.Password' | translate}}</label>\n      <div class=\"col-lg-10\">\n        <input type=\"password\" attr.id=\"userPassword-{{uniqueId}}\" name=\"userPassword\" [attr.autocomplete]=\"isGeneralEditor ? 'new-password' : null\" placeholder=\"Enter password\"\n               class=\"form-control\" [ngClass]=\"{'is-valid': f.submitted && userPassword.valid, 'is-invalid' : f.submitted && !userPassword.valid}\"\n               [(ngModel)]=\"userEdit.currentPassword\" #userPassword=\"ngModel\" required />\n        <small class=\"hint-sm\">{{'users.editor.PasswordHint' | translate}}</small>\n        <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': userPassword.valid, 'fa-times' : !userPassword.valid}\" aria-hidden=\"true\"></i>\n        <span *ngIf=\"showValidationErrors && f.submitted && !userPassword.valid\" class=\"invalid-feedback\">\n          {{'users.editor.CurrentPasswordRequired' | translate}}\n        </span>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div class=\"form-group row has-feedback-icon\">\n      <label [class.col-lg-3]=\"isViewOnly\" [class.col-lg-2]=\"!isViewOnly\" class=\"col-form-label\" for=\"email-{{uniqueId}}\">{{'users.editor.Email' | translate}}</label>\n      <div *ngIf=\"!isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <p class=\"form-control-plaintext\">{{user.email}}</p>\n      </div>\n      <div *ngIf=\"isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <input type=\"text\" attr.id=\"email-{{uniqueId}}\" name=\"email\" placeholder=\"Enter email address\" class=\"form-control\" [ngClass]=\"{'is-valid': f.submitted && email.valid, 'is-invalid' : f.submitted && !email.valid}\"\n               [(ngModel)]=\"userEdit.email\" #email=\"ngModel\" required maxlength=\"200\" pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\" />\n        <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': email.valid, 'fa-times' : !email.valid}\" aria-hidden=\"true\"></i>\n        <span *ngIf=\"showValidationErrors && f.submitted && email.errors?.required\" class=\"invalid-feedback\">\n          {{'users.editor.EmailRequired' | translate}}\n        </span>\n        <span *ngIf=\"showValidationErrors && f.submitted && email.errors?.pattern\" class=\"invalid-feedback\">\n          {{'users.editor.InvalidEmail' | translate}}\n        </span>\n      </div>\n    </div>\n\n    <div *ngIf=\"isEditMode\" class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div *ngIf=\"isEditMode\" class=\"form-group row\">\n      <label for=\"newPassword-{{uniqueId}}\" class=\"col-form-label col-lg-2\">{{'users.editor.Password' | translate}}</label>\n      <div *ngIf=\"!isChangePassword && !isNewUser\" class=\"col-lg-10\">\n        <button type=\"button\" (click)=\"changePassword()\" class=\"btn btn-link\">{{'users.editor.ChangePassword' | translate}}</button>\n      </div>\n\n      <div *ngIf=\"isChangePassword || isNewUser\" class=\"col-lg-10\">\n        <div class=\"password-well card card-body bg-light\">\n          <div *ngIf=\"isEditingSelf\" class=\"form-group row has-feedback-icon\">\n            <label class=\"col-form-label col-lg-3\" for=\"currentPassword-{{uniqueId}}\">{{'users.editor.CurrentPassword' | translate}}</label>\n            <div class=\"col-lg-9\">\n              <input type=\"password\" attr.id=\"currentPassword-{{uniqueId}}\" name=\"currentPassword\" [attr.autocomplete]=\"isGeneralEditor ? 'new-password' : null\" placeholder=\"Enter current password\" class=\"form-control\"\n                     [ngClass]=\"{'is-valid': f.submitted && currentPassword.valid, 'is-invalid' : f.submitted && !currentPassword.valid}\" [(ngModel)]=\"userEdit.currentPassword\" #currentPassword=\"ngModel\" required />\n              <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': currentPassword.valid, 'fa-times' : !currentPassword.valid}\" aria-hidden=\"true\"></i>\n              <span *ngIf=\"showValidationErrors && f.submitted && !currentPassword.valid\" class=\"invalid-feedback\">\n                {{'users.editor.CurrentPasswordRequired' | translate}}\n              </span>\n            </div>\n          </div>\n\n          <div *ngIf=\"!isNewUser\" class=\"row\">\n            <div class=\"col-lg-12\">\n              <hr class=\"password-separator-hr\" />\n            </div>\n          </div>\n\n          <div class=\"form-group row has-feedback-icon\">\n            <label class=\"col-form-label col-lg-3\" for=\"newPassword-{{uniqueId}}\">{{'users.editor.NewPassword' | translate}}</label>\n            <div class=\"col-lg-9\">\n              <input type=\"password\" attr.id=\"newPassword-{{uniqueId}}\" name=\"newPassword\" [attr.autocomplete]=\"isGeneralEditor ? 'new-password' : null\" placeholder=\"Enter new password\" class=\"form-control\"\n                     [ngClass]=\"{'is-valid': f.submitted && newPassword.valid, 'is-invalid' : f.submitted && !newPassword.valid}\" [(ngModel)]=\"userEdit.newPassword\" #newPassword=\"ngModel\"\n                     required minlength=\"6\" validateEqual=\"confirmPassword\" reverse=\"true\" />\n              <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': newPassword.valid, 'fa-times' : !newPassword.valid}\" aria-hidden=\"true\"></i>\n              <span *ngIf=\"showValidationErrors && f.submitted && !newPassword.valid\" class=\"invalid-feedback\">\n                {{'users.editor.NewPasswordRequired' | translate}}\n              </span>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <hr class=\"password-separator-hr\" />\n            </div>\n          </div>\n\n          <div class=\"form-group row has-feedback-icon\">\n            <label class=\"col-form-label col-lg-3\" for=\"confirmPassword-{{uniqueId}}\">{{'users.editor.ConfirmPassword' | translate}}</label>\n            <div class=\"col-lg-9\">\n              <input type=\"password\" attr.id=\"confirmPassword-{{uniqueId}}\" name=\"confirmPassword\" [attr.autocomplete]=\"isGeneralEditor ? 'new-password' : null\" placeholder=\"Confirm new password\" class=\"form-control\"\n                     [ngClass]=\"{'is-valid': f.submitted && confirmPassword.valid, 'is-invalid' : f.submitted && !confirmPassword.valid}\" [(ngModel)]=\"userEdit.confirmPassword\" #confirmPassword=\"ngModel\"\n                     required validateEqual=\"newPassword\" />\n              <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': confirmPassword.valid, 'fa-times' : !confirmPassword.valid}\" aria-hidden=\"true\"></i>\n              <span *ngIf=\"showValidationErrors && f.submitted && confirmPassword.errors?.required\" class=\"invalid-feedback\">\n                {{'users.editor.ConfirmationPasswordRequired' | translate}}\n              </span>\n              <span *ngIf=\"showValidationErrors && f.submitted && confirmPassword.errors?.validateEqual && !confirmPassword.errors?.required\" class=\"invalid-feedback\">\n                {{'users.editor.PasswordMismatch' | translate}}\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!--******************************************************************************************************-->\n\n    <div *ngIf=\"!isEditMode || canAssignRoles || isEditingSelf\" class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div *ngIf=\"!isEditMode || canAssignRoles || isEditingSelf\" class=\"form-group row has-feedback-icon\">\n      <label [class.col-lg-3]=\"isViewOnly\" [class.col-lg-2]=\"!isViewOnly\" class=\"col-form-label\" for=\"roles-user-info\">{{'users.editor.Roles' | translate}}</label>\n      <div *ngIf=\"!isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <p ngPreserveWhitespaces class=\"form-control-plaintext\">\n          <span *ngFor=\"let role of user.roles\">\n            <span title='{{getRoleByName(role)?.description}}' class=\"badge badge-pill badge-secondary\">{{role}}</span>\n          </span>\n        </p>\n      </div>\n      <div *ngIf=\"isEditMode && canAssignRoles && !isEditingSelf\" [ngClass]=\"{'is-valid': f.submitted && roles.valid, 'is-invalid' : f.submitted && !roles.valid}\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <select id=\"roles-user-info\" name=\"roles\" [(ngModel)]=\"userEdit.roles\" #roles=\"ngModel\" #rolesSelector=\"bootstrap-select\"\n                class=\"selectpicker form-control left-status\" bootstrapSelect required multiple data-live-search=\"true\" data-actions-box=\"false\" data-live-search-placeholder=\"Search...\" title=\"Select Roles\">\n          <option *ngFor=\"let role of allRoles\" attr.data-content=\"<span title='{{role.description}}' class='badge badge-pill badge-secondary'>{{role.name}}</span>\" attr.value=\"{{role.name}}\">\n            {{role.name}}\n          </option>\n        </select>\n        <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': roles.valid, 'fa-times' : !roles.valid}\" aria-hidden=\"true\"></i>\n        <span *ngIf=\"showValidationErrors && f.submitted && !roles.valid\" class=\"invalid-feedback\">\n          {{'users.editor.RoleRequired' | translate}}\n        </span>\n      </div>\n    </div>\n\n    <!--******************************************************************************************************-->\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label [class.col-lg-3]=\"isViewOnly\" [class.col-lg-2]=\"!isViewOnly\" class=\"col-form-label\" for=\"fullName-{{uniqueId}}\">{{'users.editor.FullName' | translate}}</label>\n      <div *ngIf=\"!isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <p class=\"form-control-plaintext\">{{user.fullName}}</p>\n      </div>\n      <div *ngIf=\"isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <input type=\"text\" attr.id=\"fullName-{{uniqueId}}\" name=\"fullName\" placeholder=\"Enter full name\" class=\"form-control\" [(ngModel)]=\"userEdit.fullName\" />\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.separator-hr]=\"!isEditMode\" [class.edit-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label [class.col-lg-3]=\"isViewOnly\" [class.col-lg-2]=\"!isViewOnly\" class=\"col-form-label\" for=\"phoneNumber-{{uniqueId}}\">{{'users.editor.PhoneNumber' | translate}}</label>\n      <div *ngIf=\"!isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <p class=\"form-control-plaintext\">{{user.phoneNumber}}</p>\n      </div>\n      <div *ngIf=\"isEditMode\" [class.col-lg-9]=\"isViewOnly\" [class.col-lg-10]=\"!isViewOnly\">\n        <input type=\"text\" attr.id=\"phoneNumber-{{uniqueId}}\" name=\"phoneNumber\" placeholder=\"Enter phone number\" class=\"form-control\" [(ngModel)]=\"userEdit.phoneNumber\" />\n      </div>\n    </div>\n\n    <div *ngIf=\"!isViewOnly\" class=\"row\">\n      <div class=\"col-lg-12\">\n        <hr [class.last-separator-hr]=\"!isEditMode\" [class.edit-last-separator-hr]=\"isEditMode\" />\n      </div>\n    </div>\n\n    <div *ngIf=\"!isViewOnly\" class=\"form-group row\">\n      <div class=\"col-sm-5\">\n        <div *ngIf=\"isGeneralEditor && isEditMode\" class=\"float-left\">\n          <div class=\"form-check user-enabled\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"idEnabled\" name=\"isEnabled\" [(ngModel)]=\"userEdit.isEnabled\">\n            <label for=\"idEnabled\" class=\"form-check-label\">{{'users.editor.Enabled' | translate}}</label>\n          </div>\n          <button *ngIf=\"userEdit.isLockedOut\" type=\"button\" (click)=\"unlockUser()\" class=\"btn btn-warning unblock-user\" [disabled]=\"isSaving\"><i class='fa fa-unlock-alt'></i> {{'users.editor.Unblock' | translate}}</button>\n        </div>\n      </div>\n      <div class=\"col-sm-7\">\n        <div ngPreserveWhitespaces class=\"float-right\">\n          <button *ngIf=\"!isEditMode && isGeneralEditor\" type=\"button\" (click)=\"close()\" class=\"btn btn-outline-secondary\"><i class='fa fa-close'></i> {{'users.editor.Close' | translate}}</button>\n          <button *ngIf=\"!isEditMode && !isGeneralEditor\" type=\"button\" (click)=\"edit()\" class=\"btn btn-outline-secondary\"><i class='fa fa-edit'></i> {{'users.editor.Edit' | translate}}</button>\n          <button *ngIf=\"isEditMode\" type=\"button\" (click)=\"cancel()\" class=\"btn btn-danger\" [disabled]=\"isSaving\"><i class='fa fa-times'></i> {{'users.editor.Cancel' | translate}}</button>\n          <button *ngIf=\"isEditMode\" type=\"submit\" class=\"btn btn-primary\" [disabled]=\"isSaving\">\n            <i *ngIf=\"!isSaving\" class='fa fa-save'></i><i *ngIf=\"isSaving\" class='fa fa-circle-o-notch fa-spin'></i> {{isSaving ? ('users.editor.Saving' | translate) : ('users.editor.Save' | translate)}}\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n  </form>\n</div>\n",
                    styles: [".separator-hr{margin:0 5px;border-top-style:dashed}.edit-separator-hr{margin:10px 5px;border-top-style:dashed}.last-separator-hr{margin-top:5px}.edit-last-separator-hr{margin-top:15px}.password-separator-hr{margin:5px;border-style:none}.form-group{margin-top:0;margin-bottom:0}input.form-control{border-left-width:5px}.invalid-feedback{display:block}.password-well{padding:.5rem}.hint-sm{display:block}.form-check.user-enabled{display:inline-block}.unblock-user{margin-left:34px}@media (min-width:992px){.user-enabled{margin-left:40px}}"]
                }] }
    ];
    /** @nocollapse */
    UserInfoComponent.ctorParameters = function () { return [
        { type: AlertService },
        { type: AccountService }
    ]; };
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
    return UserInfoComponent;
}());
export { UserInfoComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBFLE9BQU8sRUFDSCxlQUFlLEVBQ2YsU0FBUyxFQUNaLE1BQU0sc0NBQXNDLENBQUM7QUFFOUMsT0FBTyxFQUNILFlBQVksRUFDZixNQUFNLHFDQUFxQyxDQUFDO0FBRTdDLE9BQU8sRUFDSCxVQUFVLEVBQ1YsSUFBSSxFQUNQLE1BQU0sc0JBQXNCLENBQUM7QUFHOUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHL0M7SUErREksMkJBQW9CLFlBQTBCLEVBQVUsY0FBOEI7UUFBbEUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUF4RC9FLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0Qix5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDN0IsYUFBUSxHQUFXLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QyxTQUFJLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUV4QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXRCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBVTlCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBb0N4QixDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDOUI7SUFDTCxDQUFDOzs7OztJQUlPLCtDQUFtQjs7OztJQUEzQjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBRXhDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQywrQkFBK0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQTVELENBQTREOzs7O1lBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsMkJBQTJCLENBQUMsS0FBSyxDQUFDLEVBQXZDLENBQXVDLEVBQUMsQ0FBQztTQUM5SzthQUFNO1lBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsK0JBQStCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQVgsQ0FBVyxFQUFDLENBQUMsRUFBNUUsQ0FBNEU7Ozs7WUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQywyQkFBMkIsQ0FBQyxLQUFLLENBQUMsRUFBdkMsQ0FBdUMsRUFBQyxDQUFDO1NBQ25MO0lBQ0wsQ0FBQzs7Ozs7OztJQUdPLDJEQUErQjs7Ozs7O0lBQXZDLFVBQXdDLElBQVUsRUFBRSxLQUFhO1FBQzdELElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFFTyx1REFBMkI7Ozs7O0lBQW5DLFVBQW9DLEtBQVU7UUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLGdFQUE2RCxTQUFTLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLE9BQUcsRUFDdEosZUFBZSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFJRCx5Q0FBYTs7OztJQUFiLFVBQWMsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQWQsQ0FBYyxFQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7O0lBSUQsMENBQWM7Ozs7O0lBQWQsVUFBZSxPQUFlLEVBQUUsT0FBZTtRQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7OztJQUdELGtEQUFzQjs7OztJQUF0QixVQUF1QixJQUFxQjs7WUFDbEMsUUFBUSxHQUFHLG1CQUFBLElBQUksRUFBWTtRQUVqQyxPQUFPLFFBQVEsQ0FBQyxlQUFlLENBQUM7UUFDaEMsT0FBTyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQzVCLE9BQU8sUUFBUSxDQUFDLGVBQWUsQ0FBQztJQUNwQyxDQUFDOzs7O0lBR0QsZ0NBQUk7OztJQUFKO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7YUFDbEM7WUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUN6SDtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztJQUNsQyxDQUFDOzs7O0lBR0QsZ0NBQUk7OztJQUFKO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFM0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQTVCLENBQTRCOzs7O1lBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQTVCLENBQTRCLEVBQUMsQ0FBQztTQUNySTthQUFNO1lBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUF4QixDQUF3Qjs7OztZQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUE1QixDQUE0QixFQUFDLENBQUM7U0FDeEk7SUFDTCxDQUFDOzs7Ozs7SUFHTyw2Q0FBaUI7Ozs7O0lBQXpCLFVBQTBCLElBQVc7UUFDakMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTFELElBQUksSUFBSSxFQUFFO1lBQ04sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztRQUVsQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUdqQixJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsWUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsZ0NBQTZCLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hJO2lCQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsdUJBQXFCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSw4QkFBMkIsRUFBRSxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDekk7U0FDSjtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUscURBQXFELEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pILElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzlCO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFHeEIsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDM0IsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDL0I7SUFDTCxDQUFDOzs7Ozs7SUFHTyw0Q0FBZ0I7Ozs7O0lBQXhCLFVBQXlCLEtBQVU7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLHNEQUFzRCxFQUFFLGVBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEksSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4RSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM1QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUNoQztJQUNMLENBQUM7Ozs7Ozs7SUFJTyxzREFBMEI7Ozs7OztJQUFsQyxVQUFtQyxXQUFpQixFQUFFLFVBQWdCO1FBQXRFLGlCQVVDOztZQVJTLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFyQyxDQUFxQyxFQUFDOztZQUN2SCxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFwQyxDQUFvQyxFQUFDOztZQUUzRyxhQUFhLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFFckQsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFO1lBQ3RCLFVBQVU7OztZQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLGFBQWEsQ0FBQyxFQUExRCxDQUEwRCxFQUFDLENBQUM7U0FDaEY7SUFDTCxDQUFDOzs7O0lBSUQsa0NBQU07OztJQUFOO1FBQ0ksSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1NBQzlDO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7U0FDbEM7UUFFRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsNkJBQTZCLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25HLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUV2QyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUMzQjtRQUVELElBQUksSUFBSSxDQUFDLHdCQUF3QixFQUFFO1lBQy9CLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1NBQ25DO0lBQ0wsQ0FBQzs7OztJQUdELGlDQUFLOzs7SUFBTDtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzNCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQzs7Ozs7SUFJTywrQ0FBbUI7Ozs7SUFBM0I7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUU7YUFDcEMsU0FBUzs7OztRQUFDLFVBQUEsSUFBSTtZQUNYLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQy9CLENBQUM7Ozs7UUFDRyxVQUFBLEtBQUs7WUFDRCxLQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDdkMsS0FBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSwrRUFBK0UsRUFBRSxlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pLLENBQUMsRUFBQyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUdELDBDQUFjOzs7SUFBZDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUFDakMsQ0FBQzs7OztJQUdELHNDQUFVOzs7SUFBVjtRQUFBLGlCQWtCQztRQWpCRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFHNUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7YUFDNUMsU0FBUzs7O1FBQUM7WUFDUCxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN0QixLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDbEMsS0FBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxzQ0FBc0MsRUFBRSxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUcsQ0FBQzs7OztRQUNHLFVBQUEsS0FBSztZQUNELEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUN2QyxLQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxzREFBc0QsRUFBRSxlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzNJLEtBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUUsQ0FBQyxFQUFDLENBQUM7SUFDZixDQUFDOzs7OztJQUdELHFDQUFTOzs7O0lBQVQsVUFBVSxPQUFlO1FBQXpCLGlCQVlDO1FBWlMsd0JBQUEsRUFBQSxlQUFlO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFOUIsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBRTdCLFVBQVU7OztZQUFDO2dCQUNQLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLENBQUMsRUFBQyxDQUFDO1NBQ047SUFDTCxDQUFDOzs7OztJQUdELG1DQUFPOzs7O0lBQVAsVUFBUSxRQUFnQjtRQUNwQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV0QixJQUFJLENBQUMsUUFBUSxvQkFBTyxRQUFRLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRVosT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVELG9DQUFROzs7OztJQUFSLFVBQVMsSUFBVSxFQUFFLFFBQWdCO1FBQ2pDLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFFdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUMvQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVaLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN4QjthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQzs7Ozs7O0lBR0QsdUNBQVc7Ozs7O0lBQVgsVUFBWSxJQUFVLEVBQUUsUUFBaUI7UUFFckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7Ozs7SUFJTyxvQ0FBUTs7Ozs7O0lBQWhCLFVBQWlCLElBQVUsRUFBRSxRQUFpQjs7UUFBOUMsaUJBbUJDO1FBakJHLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsa0JBQUssUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFOUMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO29DQUNELEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLE9BQUssUUFBUSxDQUFDLElBQUk7Ozs7Z0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBWixDQUFZLEVBQUMsRUFBRTtvQkFDeEMsT0FBSyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZDOzs7O2dCQUhMLEtBQWlCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsS0FBSyxDQUFBLGdCQUFBO29CQUF0QixJQUFNLEVBQUUsV0FBQTs0QkFBRixFQUFFO2lCQUlaOzs7Ozs7Ozs7U0FDSjtRQUVELElBQUksUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQzdELFVBQVU7OztZQUFDO2dCQUNQLElBQUksS0FBSSxDQUFDLGFBQWEsRUFBRTtvQkFDcEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDaEM7WUFDTCxDQUFDLEVBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUlELHNCQUFJLDhDQUFlOzs7O1FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNkNBQWM7Ozs7UUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkYsQ0FBQzs7O09BQUE7O2dCQTVYSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLDY4akJBQXlDOztpQkFFNUM7Ozs7Z0JBbEJHLFlBQVk7Z0JBU1AsY0FBYzs7OzZCQTZCbEIsS0FBSztrQ0FHTCxLQUFLO3VCQU9MLFNBQVMsU0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzJCQUloQyxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTsrQkFHdkMsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7d0JBRzNDLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2tDQUdwQyxTQUFTLFNBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzhCQUc5QyxTQUFTLFNBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtrQ0FHMUMsU0FBUyxTQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTt3QkFHOUMsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0NBR3BDLFNBQVMsU0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQWtVakQsd0JBQUM7Q0FBQSxBQTdYRCxJQTZYQztTQXhYWSxpQkFBaUI7OztJQUUxQix1Q0FBMEI7O0lBQzFCLHNDQUF5Qjs7SUFDekIscUNBQXdCOztJQUN4Qiw2Q0FBZ0M7O0lBQ2hDLDBDQUE2Qjs7SUFDN0IsaURBQW9DOztJQUNwQyxxQ0FBK0M7O0lBQy9DLGlDQUErQjs7SUFDL0IscUNBQTBCOztJQUMxQixxQ0FBNkI7O0lBRTdCLDRDQUE4Qjs7SUFFOUIsaURBQXdDOztJQUN4QyxrREFBeUM7O0lBQ3pDLHFEQUE0Qzs7SUFFNUMsdUNBQ29COztJQUVwQiw0Q0FDd0I7O0lBTXhCLGlDQUNZOztJQUdaLHFDQUNnQjs7SUFFaEIseUNBQ29COztJQUVwQixrQ0FDYTs7SUFFYiw0Q0FDdUI7O0lBRXZCLHdDQUNtQjs7SUFFbkIsNENBQ3VCOztJQUV2QixrQ0FDYTs7SUFFYiwwQ0FDcUI7Ozs7O0lBR1QseUNBQWtDOzs7OztJQUFFLDJDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBNZXNzYWdlU2V2ZXJpdHksXG4gICAgVXRpbGl0aWVzXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgQWxlcnRTZXJ2aWNlXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXNlcnZpY2VzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBQZXJtaXNzaW9uLFxuICAgIFVzZXJcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1vYXV0aDInO1xuXG5cbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWNjb3VudC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJFZGl0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXItZWRpdC5tb2RlbCc7XG5pbXBvcnQgeyBSb2xlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3JvbGUubW9kZWwnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndXNlci1pbmZvJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdXNlci1pbmZvLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi91c2VyLWluZm8uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVc2VySW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgaXNFZGl0TW9kZSA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc05ld1VzZXIgPSBmYWxzZTtcbiAgICBwdWJsaWMgaXNTYXZpbmcgPSBmYWxzZTtcbiAgICBwdWJsaWMgaXNDaGFuZ2VQYXNzd29yZCA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc0VkaXRpbmdTZWxmID0gZmFsc2U7XG4gICAgcHVibGljIHNob3dWYWxpZGF0aW9uRXJyb3JzID0gZmFsc2U7XG4gICAgcHVibGljIHVuaXF1ZUlkOiBzdHJpbmcgPSBVdGlsaXRpZXMudW5pcXVlSWQoKTtcbiAgICBwdWJsaWMgdXNlcjogVXNlciA9IG5ldyBVc2VyKCk7XG4gICAgcHVibGljIHVzZXJFZGl0OiBVc2VyRWRpdDtcbiAgICBwdWJsaWMgYWxsUm9sZXM6IFJvbGVbXSA9IFtdO1xuXG4gICAgcHVibGljIGZvcm1SZXNldFRvZ2dsZSA9IHRydWU7XG5cbiAgICBwdWJsaWMgY2hhbmdlc1NhdmVkQ2FsbGJhY2s6ICgpID0+IHZvaWQ7XG4gICAgcHVibGljIGNoYW5nZXNGYWlsZWRDYWxsYmFjazogKCkgPT4gdm9pZDtcbiAgICBwdWJsaWMgY2hhbmdlc0NhbmNlbGxlZENhbGxiYWNrOiAoKSA9PiB2b2lkO1xuXG4gICAgQElucHV0KClcbiAgICBpc1ZpZXdPbmx5OiBib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICBpc0dlbmVyYWxFZGl0b3IgPSBmYWxzZTtcblxuXG5cblxuXG4gICAgQFZpZXdDaGlsZCgnZicsIHsgc3RhdGljOiBmYWxzZSB9KVxuICAgIHB1YmxpYyBmb3JtO1xuXG4gICAgLy8gVmlld0NoaWxkcyBSZXF1aXJlZCBiZWNhdXNlIG5nSWYgaGlkZXMgdGVtcGxhdGUgdmFyaWFibGVzIGZyb20gZ2xvYmFsIHNjb3BlXG4gICAgQFZpZXdDaGlsZCgndXNlck5hbWUnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgdXNlck5hbWU7XG5cbiAgICBAVmlld0NoaWxkKCd1c2VyUGFzc3dvcmQnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgdXNlclBhc3N3b3JkO1xuXG4gICAgQFZpZXdDaGlsZCgnZW1haWwnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgZW1haWw7XG5cbiAgICBAVmlld0NoaWxkKCdjdXJyZW50UGFzc3dvcmQnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgY3VycmVudFBhc3N3b3JkO1xuXG4gICAgQFZpZXdDaGlsZCgnbmV3UGFzc3dvcmQnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgbmV3UGFzc3dvcmQ7XG5cbiAgICBAVmlld0NoaWxkKCdjb25maXJtUGFzc3dvcmQnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgY29uZmlybVBhc3N3b3JkO1xuXG4gICAgQFZpZXdDaGlsZCgncm9sZXMnLCB7IHN0YXRpYzogZmFsc2UgfSlcbiAgICBwdWJsaWMgcm9sZXM7XG5cbiAgICBAVmlld0NoaWxkKCdyb2xlc1NlbGVjdG9yJywgeyBzdGF0aWM6IGZhbHNlIH0pXG4gICAgcHVibGljIHJvbGVzU2VsZWN0b3I7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsIHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0dlbmVyYWxFZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZEN1cnJlbnRVc2VyRGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHByaXZhdGUgbG9hZEN1cnJlbnRVc2VyRGF0YSgpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RhcnRMb2FkaW5nTWVzc2FnZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLmNhblZpZXdBbGxSb2xlcykge1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5nZXRVc2VyQW5kUm9sZXMoKS5zdWJzY3JpYmUocmVzdWx0cyA9PiB0aGlzLm9uQ3VycmVudFVzZXJEYXRhTG9hZFN1Y2Nlc3NmdWwocmVzdWx0c1swXSwgcmVzdWx0c1sxXSksIGVycm9yID0+IHRoaXMub25DdXJyZW50VXNlckRhdGFMb2FkRmFpbGVkKGVycm9yKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLmdldFVzZXIoKS5zdWJzY3JpYmUodXNlciA9PiB0aGlzLm9uQ3VycmVudFVzZXJEYXRhTG9hZFN1Y2Nlc3NmdWwodXNlciwgdXNlci5yb2xlcy5tYXAoeCA9PiBuZXcgUm9sZSh4KSkpLCBlcnJvciA9PiB0aGlzLm9uQ3VycmVudFVzZXJEYXRhTG9hZEZhaWxlZChlcnJvcikpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIG9uQ3VycmVudFVzZXJEYXRhTG9hZFN1Y2Nlc3NmdWwodXNlcjogVXNlciwgcm9sZXM6IFJvbGVbXSkge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgdGhpcy5hbGxSb2xlcyA9IHJvbGVzO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25DdXJyZW50VXNlckRhdGFMb2FkRmFpbGVkKGVycm9yOiBhbnkpIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdMb2FkIEVycm9yJywgYFVuYWJsZSB0byByZXRyaWV2ZSB1c2VyIGRhdGEgZnJvbSB0aGUgc2VydmVyLlxcclxcbkVycm9yczogXCIke1V0aWxpdGllcy5nZXRIdHRwUmVzcG9uc2VNZXNzYWdlcyhlcnJvcil9XCJgLFxuICAgICAgICAgICAgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG5cbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICB9XG5cblxuXG4gICAgZ2V0Um9sZUJ5TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsUm9sZXMuZmluZCgocikgPT4gci5uYW1lID09IG5hbWUpO1xuICAgIH1cblxuXG5cbiAgICBzaG93RXJyb3JBbGVydChjYXB0aW9uOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93TWVzc2FnZShjYXB0aW9uLCBtZXNzYWdlLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IpO1xuICAgIH1cblxuXG4gICAgZGVsZXRlUGFzc3dvcmRGcm9tVXNlcih1c2VyOiBVc2VyRWRpdCB8IFVzZXIpIHtcbiAgICAgICAgY29uc3QgdXNlckVkaXQgPSB1c2VyIGFzIFVzZXJFZGl0O1xuXG4gICAgICAgIGRlbGV0ZSB1c2VyRWRpdC5jdXJyZW50UGFzc3dvcmQ7XG4gICAgICAgIGRlbGV0ZSB1c2VyRWRpdC5uZXdQYXNzd29yZDtcbiAgICAgICAgZGVsZXRlIHVzZXJFZGl0LmNvbmZpcm1QYXNzd29yZDtcbiAgICB9XG5cblxuICAgIGVkaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0dlbmVyYWxFZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFZGl0aW5nU2VsZiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnVzZXJFZGl0ID0gbmV3IFVzZXJFZGl0KCk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMudXNlckVkaXQsIHRoaXMudXNlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudXNlckVkaXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJFZGl0ID0gbmV3IFVzZXJFZGl0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaXNFZGl0aW5nU2VsZiA9IHRoaXMuYWNjb3VudFNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLnVzZXJFZGl0LmlkID09IHRoaXMuYWNjb3VudFNlcnZpY2UuY3VycmVudFVzZXIuaWQgOiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNFZGl0TW9kZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcnMgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQ2hhbmdlUGFzc3dvcmQgPSBmYWxzZTtcbiAgICB9XG5cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCdTYXZpbmcgY2hhbmdlcy4uLicpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzTmV3VXNlcikge1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5uZXdVc2VyKHRoaXMudXNlckVkaXQpLnN1YnNjcmliZSh1c2VyID0+IHRoaXMuc2F2ZVN1Y2Nlc3NIZWxwZXIodXNlciksIGVycm9yID0+IHRoaXMuc2F2ZUZhaWxlZEhlbHBlcihlcnJvcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS51cGRhdGVVc2VyKHRoaXMudXNlckVkaXQpLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLnNhdmVTdWNjZXNzSGVscGVyKCksIGVycm9yID0+IHRoaXMuc2F2ZUZhaWxlZEhlbHBlcihlcnJvcikpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHNhdmVTdWNjZXNzSGVscGVyKHVzZXI/OiBVc2VyKSB7XG4gICAgICAgIHRoaXMudGVzdElzUm9sZVVzZXJDb3VudENoYW5nZWQodGhpcy51c2VyLCB0aGlzLnVzZXJFZGl0KTtcblxuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnVzZXJFZGl0LCB1c2VyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMuaXNDaGFuZ2VQYXNzd29yZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3JzID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5kZWxldGVQYXNzd29yZEZyb21Vc2VyKHRoaXMudXNlckVkaXQpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMudXNlciwgdGhpcy51c2VyRWRpdCk7XG4gICAgICAgIHRoaXMudXNlckVkaXQgPSBuZXcgVXNlckVkaXQoKTtcbiAgICAgICAgdGhpcy5yZXNldEZvcm0oKTtcblxuXG4gICAgICAgIGlmICh0aGlzLmlzR2VuZXJhbEVkaXRvcikge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNOZXdVc2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ1N1Y2Nlc3MnLCBgVXNlciBcXFwiJHt0aGlzLnVzZXIudXNlck5hbWV9XFxcIiB3YXMgY3JlYXRlZCBzdWNjZXNzZnVsbHlgLCBNZXNzYWdlU2V2ZXJpdHkuc3VjY2Vzcyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzRWRpdGluZ1NlbGYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93TWVzc2FnZSgnU3VjY2VzcycsIGBDaGFuZ2VzIHRvIHVzZXIgXFxcIiR7dGhpcy51c2VyLnVzZXJOYW1lfVxcXCIgd2FzIHNhdmVkIHN1Y2Nlc3NmdWxseWAsIE1lc3NhZ2VTZXZlcml0eS5zdWNjZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzRWRpdGluZ1NlbGYpIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdTdWNjZXNzJywgJ0NoYW5nZXMgdG8geW91ciBVc2VyIFByb2ZpbGUgd2FzIHNhdmVkIHN1Y2Nlc3NmdWxseScsIE1lc3NhZ2VTZXZlcml0eS5zdWNjZXNzKTtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaExvZ2dlZEluVXNlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc0VkaXRNb2RlID0gZmFsc2U7XG5cblxuICAgICAgICBpZiAodGhpcy5jaGFuZ2VzU2F2ZWRDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VzU2F2ZWRDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHNhdmVGYWlsZWRIZWxwZXIoZXJyb3I6IGFueSkge1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZSgnU2F2ZSBFcnJvcicsICdUaGUgYmVsb3cgZXJyb3JzIG9jY3VyZWQgd2hpbHN0IHNhdmluZyB5b3VyIGNoYW5nZXM6JywgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKGVycm9yLCBudWxsLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IpO1xuXG4gICAgICAgIGlmICh0aGlzLmNoYW5nZXNGYWlsZWRDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VzRmFpbGVkQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBwcml2YXRlIHRlc3RJc1JvbGVVc2VyQ291bnRDaGFuZ2VkKGN1cnJlbnRVc2VyOiBVc2VyLCBlZGl0ZWRVc2VyOiBVc2VyKSB7XG5cbiAgICAgICAgY29uc3Qgcm9sZXNBZGRlZCA9IHRoaXMuaXNOZXdVc2VyID8gZWRpdGVkVXNlci5yb2xlcyA6IGVkaXRlZFVzZXIucm9sZXMuZmlsdGVyKHJvbGUgPT4gY3VycmVudFVzZXIucm9sZXMuaW5kZXhPZihyb2xlKSA9PSAtMSk7XG4gICAgICAgIGNvbnN0IHJvbGVzUmVtb3ZlZCA9IHRoaXMuaXNOZXdVc2VyID8gW10gOiBjdXJyZW50VXNlci5yb2xlcy5maWx0ZXIocm9sZSA9PiBlZGl0ZWRVc2VyLnJvbGVzLmluZGV4T2Yocm9sZSkgPT0gLTEpO1xuXG4gICAgICAgIGNvbnN0IG1vZGlmaWVkUm9sZXMgPSByb2xlc0FkZGVkLmNvbmNhdChyb2xlc1JlbW92ZWQpO1xuXG4gICAgICAgIGlmIChtb2RpZmllZFJvbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFjY291bnRTZXJ2aWNlLm9uUm9sZXNVc2VyQ291bnRDaGFuZ2VkKG1vZGlmaWVkUm9sZXMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzR2VuZXJhbEVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy51c2VyRWRpdCA9IHRoaXMudXNlciA9IG5ldyBVc2VyRWRpdCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51c2VyRWRpdCA9IG5ldyBVc2VyRWRpdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuXG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdDYW5jZWxsZWQnLCAnT3BlcmF0aW9uIGNhbmNlbGxlZCBieSB1c2VyJywgTWVzc2FnZVNldmVyaXR5LmRlZmF1bHQpO1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5yZXNldFN0aWNreU1lc3NhZ2UoKTtcblxuICAgICAgICBpZiAoIXRoaXMuaXNHZW5lcmFsRWRpdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmlzRWRpdE1vZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNoYW5nZXNDYW5jZWxsZWRDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VzQ2FuY2VsbGVkQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMudXNlckVkaXQgPSB0aGlzLnVzZXIgPSBuZXcgVXNlckVkaXQoKTtcbiAgICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9ycyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xuICAgICAgICB0aGlzLmlzRWRpdE1vZGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5jaGFuZ2VzU2F2ZWRDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VzU2F2ZWRDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHByaXZhdGUgcmVmcmVzaExvZ2dlZEluVXNlcigpIHtcbiAgICAgICAgdGhpcy5hY2NvdW50U2VydmljZS5yZWZyZXNoTG9nZ2VkSW5Vc2VyKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodXNlciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQ3VycmVudFVzZXJEYXRhKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UucmVzZXRTdGlja3lNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdSZWZyZXNoIGZhaWxlZCcsICdBbiBlcnJvciBvY2N1cmVkIHdoaWxzdCByZWZyZXNoaW5nIGxvZ2dlZCBpbiB1c2VyIGluZm9ybWF0aW9uIGZyb20gdGhlIHNlcnZlcicsIE1lc3NhZ2VTZXZlcml0eS5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgY2hhbmdlUGFzc3dvcmQoKSB7XG4gICAgICAgIHRoaXMuaXNDaGFuZ2VQYXNzd29yZCA9IHRydWU7XG4gICAgfVxuXG5cbiAgICB1bmxvY2tVc2VyKCkge1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RhcnRMb2FkaW5nTWVzc2FnZSgnVW5ibG9ja2luZyB1c2VyLi4uJyk7XG5cblxuICAgICAgICB0aGlzLmFjY291bnRTZXJ2aWNlLnVuYmxvY2tVc2VyKHRoaXMudXNlckVkaXQuaWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyRWRpdC5pc0xvY2tlZE91dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdTdWNjZXNzJywgJ1VzZXIgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHVuYmxvY2tlZCcsIE1lc3NhZ2VTZXZlcml0eS5zdWNjZXNzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZSgnVW5ibG9jayBFcnJvcicsICdUaGUgYmVsb3cgZXJyb3JzIG9jY3VyZWQgd2hpbHN0IHVuYmxvY2tpbmcgdGhlIHVzZXI6JywgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKGVycm9yLCBudWxsLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgcmVzZXRGb3JtKHJlcGxhY2UgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmlzQ2hhbmdlUGFzc3dvcmQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIXJlcGxhY2UpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb3JtUmVzZXRUb2dnbGUgPSBmYWxzZTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtUmVzZXRUb2dnbGUgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG5ld1VzZXIoYWxsUm9sZXM6IFJvbGVbXSkge1xuICAgICAgICB0aGlzLmlzR2VuZXJhbEVkaXRvciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNOZXdVc2VyID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmFsbFJvbGVzID0gWy4uLmFsbFJvbGVzXTtcbiAgICAgICAgdGhpcy51c2VyID0gdGhpcy51c2VyRWRpdCA9IG5ldyBVc2VyRWRpdCgpO1xuICAgICAgICB0aGlzLnVzZXJFZGl0LmlzRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZWRpdCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJFZGl0O1xuICAgIH1cblxuICAgIGVkaXRVc2VyKHVzZXI6IFVzZXIsIGFsbFJvbGVzOiBSb2xlW10pIHtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaXNHZW5lcmFsRWRpdG9yID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNOZXdVc2VyID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0Um9sZXModXNlciwgYWxsUm9sZXMpO1xuICAgICAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXNlckVkaXQgPSBuZXcgVXNlckVkaXQoKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy51c2VyLCB1c2VyKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy51c2VyRWRpdCwgdXNlcik7XG4gICAgICAgICAgICB0aGlzLmVkaXQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlckVkaXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uZXdVc2VyKGFsbFJvbGVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZGlzcGxheVVzZXIodXNlcjogVXNlciwgYWxsUm9sZXM/OiBSb2xlW10pIHtcblxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMudXNlciwgdXNlcik7XG4gICAgICAgIHRoaXMuZGVsZXRlUGFzc3dvcmRGcm9tVXNlcih0aGlzLnVzZXIpO1xuICAgICAgICB0aGlzLnNldFJvbGVzKHVzZXIsIGFsbFJvbGVzKTtcblxuICAgICAgICB0aGlzLmlzRWRpdE1vZGUgPSBmYWxzZTtcbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSBzZXRSb2xlcyh1c2VyOiBVc2VyLCBhbGxSb2xlcz86IFJvbGVbXSkge1xuXG4gICAgICAgIHRoaXMuYWxsUm9sZXMgPSBhbGxSb2xlcyA/IFsuLi5hbGxSb2xlc10gOiBbXTtcblxuICAgICAgICBpZiAodXNlci5yb2xlcykge1xuICAgICAgICAgICAgZm9yIChjb25zdCB1ciBvZiB1c2VyLnJvbGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFsbFJvbGVzLnNvbWUociA9PiByLm5hbWUgPT0gdXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUm9sZXMudW5zaGlmdChuZXcgUm9sZSh1cikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbGxSb2xlcyA9PSBudWxsIHx8IHRoaXMuYWxsUm9sZXMubGVuZ3RoICE9IGFsbFJvbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm9sZXNTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvbGVzU2VsZWN0b3IucmVmcmVzaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGdldCBjYW5WaWV3QWxsUm9sZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRTZXJ2aWNlLnVzZXJIYXNQZXJtaXNzaW9uKFBlcm1pc3Npb24udmlld1JvbGVzUGVybWlzc2lvbik7XG4gICAgfVxuXG4gICAgZ2V0IGNhbkFzc2lnblJvbGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50U2VydmljZS51c2VySGFzUGVybWlzc2lvbihQZXJtaXNzaW9uLmFzc2lnblJvbGVzUGVybWlzc2lvbik7XG4gICAgfVxufVxuIl19