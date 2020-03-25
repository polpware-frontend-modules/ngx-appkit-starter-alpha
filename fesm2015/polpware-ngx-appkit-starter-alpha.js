import { Utilities, ConfigurationServiceAbstractProvider, ThemeManagerAbstractProvider, TranslationServiceAbstractProvider, AlertServiceAbstractProvider, LocalStoreManagerServiceAbstractProvider, MessageSeverity, DialogType } from '@polpware/ngx-appkit-contracts-alpha';
import { User, EndpointBase, AuthService, Permission } from '@polpware/ngx-oauth2';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Injectable, Pipe, Component, Input, ViewChild, EventEmitter, Directive, ElementRef, Output, NgZone, NgModule, forwardRef, Attribute, Optional, SkipSelf } from '@angular/core';
import { ConfigurationService, ThemeManager, AppTranslationService, AlertService, LocalStoreManager } from '@polpware/ngx-appkit-services-alpha';
import { Subject, forkJoin, of, interval, fromEvent, merge } from 'rxjs';
import { catchError, mergeMap, tap, map, startWith, flatMap, filter, distinctUntilChanged } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { NavigationEnd, Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, NG_VALIDATORS } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TranslateModule } from '@ngx-translate/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartsModule } from 'ng2-charts';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/notification.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Notification {
    /**
     * @param {?} data
     * @return {?}
     */
    static Create(data) {
        /** @type {?} */
        const n = new Notification();
        Object.assign(n, data);
        if (n.date) {
            n.date = Utilities.parseDate(n.date);
        }
        return n;
    }
}
if (false) {
    /** @type {?} */
    Notification.prototype.id;
    /** @type {?} */
    Notification.prototype.header;
    /** @type {?} */
    Notification.prototype.body;
    /** @type {?} */
    Notification.prototype.isRead;
    /** @type {?} */
    Notification.prototype.isPinned;
    /** @type {?} */
    Notification.prototype.date;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/role.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
class Role {
    /**
     * @param {?=} name
     * @param {?=} description
     * @param {?=} permissions
     */
    constructor(name, description, permissions) {
        this.name = name;
        this.description = description;
        this.permissions = permissions;
    }
}
if (false) {
    /** @type {?} */
    Role.prototype.id;
    /** @type {?} */
    Role.prototype.name;
    /** @type {?} */
    Role.prototype.description;
    /** @type {?} */
    Role.prototype.usersCount;
    /** @type {?} */
    Role.prototype.permissions;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/user-edit.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserEdit extends User {
    /**
     * @param {?=} currentPassword
     * @param {?=} newPassword
     * @param {?=} confirmPassword
     */
    constructor(currentPassword, newPassword, confirmPassword) {
        super();
        this.currentPassword = currentPassword;
        this.newPassword = newPassword;
        this.confirmPassword = confirmPassword;
    }
}
if (false) {
    /** @type {?} */
    UserEdit.prototype.currentPassword;
    /** @type {?} */
    UserEdit.prototype.newPassword;
    /** @type {?} */
    UserEdit.prototype.confirmPassword;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/enums.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
/** @enum {number} */
const Gender = {
    None: 0,
    Female: 1,
    Male: 2,
};
Gender[Gender.None] = 'None';
Gender[Gender.Female] = 'Female';
Gender[Gender.Male] = 'Male';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/user-login.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
class UserLogin {
    /**
     * @param {?=} userName
     * @param {?=} password
     * @param {?=} rememberMe
     */
    constructor(userName, password, rememberMe) {
        this.userName = userName;
        this.password = password;
        this.rememberMe = rememberMe;
    }
}
if (false) {
    /** @type {?} */
    UserLogin.prototype.userName;
    /** @type {?} */
    UserLogin.prototype.password;
    /** @type {?} */
    UserLogin.prototype.rememberMe;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [style({ opacity: 0 }), animate('0.4s ease-in', style({ opacity: 1 }))]),
    transition(':leave', [animate('0.4s 10ms ease-out', style({ opacity: 0 }))])
]);
/**
 * @param {?=} duration
 * @return {?}
 */
function flyInOut(duration = 0.2) {
    return trigger('flyInOut', [
        state('in', style({ opacity: 1, transform: 'translateX(0)' })),
        transition('void => *', [style({ opacity: 0, transform: 'translateX(-100%)' }), animate(`${duration}s ease-in`)]),
        transition('* => void', [animate(`${duration}s 10ms ease-out`, style({ opacity: 0, transform: 'translateX(100%)' }))])
    ]);
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/configuration.service-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigurationServiceProvider extends ConfigurationServiceAbstractProvider {
    /**
     * @param {?} impl
     */
    constructor(impl) {
        super();
        this.impl = impl;
    }
    /**
     * @return {?}
     */
    get() {
        return this.impl;
    }
}
ConfigurationServiceProvider.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigurationServiceProvider.ctorParameters = () => [
    { type: ConfigurationService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigurationServiceProvider.prototype.impl;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/theme-manager.provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ThemeManagerProvider extends ThemeManagerAbstractProvider {
    /**
     * @param {?} impl
     */
    constructor(impl) {
        super();
        this.impl = impl;
    }
    /**
     * @return {?}
     */
    get() {
        return this.impl;
    }
}
ThemeManagerProvider.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ThemeManagerProvider.ctorParameters = () => [
    { type: ThemeManager }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ThemeManagerProvider.prototype.impl;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/account-endpoint.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AccountEndpoint extends EndpointBase {
    /**
     * @param {?} configurations
     * @param {?} http
     * @param {?} authService
     */
    constructor(configurations, http, authService) {
        super(http, authService);
        this.configurations = configurations;
        this._usersUrl = '/api/account/users';
        this._userByUserNameUrl = '/api/account/users/username';
        this._currentUserUrl = '/api/account/users/me';
        this._currentUserPreferencesUrl = '/api/account/users/me/preferences';
        this._unblockUserUrl = '/api/account/users/unblock';
        this._rolesUrl = '/api/account/roles';
        this._roleByRoleNameUrl = '/api/account/roles/name';
        this._permissionsUrl = '/api/account/permissions';
    }
    /**
     * @return {?}
     */
    get usersUrl() { return this.configurations.baseUrl + this._usersUrl; }
    /**
     * @return {?}
     */
    get userByUserNameUrl() { return this.configurations.baseUrl + this._userByUserNameUrl; }
    /**
     * @return {?}
     */
    get currentUserUrl() { return this.configurations.baseUrl + this._currentUserUrl; }
    /**
     * @return {?}
     */
    get currentUserPreferencesUrl() { return this.configurations.baseUrl + this._currentUserPreferencesUrl; }
    /**
     * @return {?}
     */
    get unblockUserUrl() { return this.configurations.baseUrl + this._unblockUserUrl; }
    /**
     * @return {?}
     */
    get rolesUrl() { return this.configurations.baseUrl + this._rolesUrl; }
    /**
     * @return {?}
     */
    get roleByRoleNameUrl() { return this.configurations.baseUrl + this._roleByRoleNameUrl; }
    /**
     * @return {?}
     */
    get permissionsUrl() { return this.configurations.baseUrl + this._permissionsUrl; }
    /**
     * @template T
     * @param {?=} userId
     * @return {?}
     */
    getUserEndpoint(userId) {
        /** @type {?} */
        const endpointUrl = userId ? `${this.usersUrl}/${userId}` : this.currentUserUrl;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return this.handleError(error, (/**
             * @return {?}
             */
            () => this.getUserEndpoint(userId)));
        })));
    }
    /**
     * @template T
     * @param {?} userName
     * @return {?}
     */
    getUserByUserNameEndpoint(userName) {
        /** @type {?} */
        const endpointUrl = `${this.userByUserNameUrl}/${userName}`;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return this.handleError(error, (/**
             * @return {?}
             */
            () => this.getUserByUserNameEndpoint(userName)));
        })));
    }
    /**
     * @template T
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    getUsersEndpoint(page, pageSize) {
        /** @type {?} */
        const endpointUrl = page && pageSize ? `${this.usersUrl}/${page}/${pageSize}` : this.usersUrl;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return this.handleError(error, (/**
             * @return {?}
             */
            () => this.getUsersEndpoint(page, pageSize)));
        })));
    }
    /**
     * @template T
     * @param {?} userObject
     * @return {?}
     */
    getNewUserEndpoint(userObject) {
        return this.http.post(this.usersUrl, JSON.stringify(userObject), this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return this.handleError(error, (/**
             * @return {?}
             */
            () => this.getNewUserEndpoint(userObject)));
        })));
    }
    /**
     * @template T
     * @param {?} userObject
     * @param {?=} userId
     * @return {?}
     */
    getUpdateUserEndpoint(userObject, userId) {
        /** @type {?} */
        const endpointUrl = userId ? `${this.usersUrl}/${userId}` : this.currentUserUrl;
        return this.http.put(endpointUrl, JSON.stringify(userObject), this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return this.handleError(error, (/**
             * @return {?}
             */
            () => this.getUpdateUserEndpoint(userObject, userId)));
        })));
    }
    /**
     * @template T
     * @param {?} valueOrPatch
     * @param {?=} opOrUserId
     * @param {?=} path
     * @param {?=} from
     * @param {?=} userId
     * @return {?}
     */
    getPatchUpdateUserEndpoint(valueOrPatch, opOrUserId, path, from, userId) {
        /** @type {?} */
        let endpointUrl;
        /** @type {?} */
        let patchDocument;
        if (path) {
            endpointUrl = userId ? `${this.usersUrl}/${userId}` : this.currentUserUrl;
            patchDocument = from ?
                [{ value: valueOrPatch, path, op: opOrUserId, from }] :
                [{ value: valueOrPatch, path, op: opOrUserId }];
        }
        else {
            endpointUrl = opOrUserId ? `${this.usersUrl}/${opOrUserId}` : this.currentUserUrl;
            patchDocument = valueOrPatch;
        }
        return this.http.patch(endpointUrl, JSON.stringify(patchDocument), this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return this.handleError(error, (/**
             * @return {?}
             */
            () => this.getPatchUpdateUserEndpoint(valueOrPatch, opOrUserId, path, from, userId)));
        })));
    }
    /**
     * @template T
     * @return {?}
     */
    getUserPreferencesEndpoint() {
        return this.http.get(this.currentUserPreferencesUrl, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return this.handleError(error, (/**
             * @return {?}
             */
            () => this.getUserPreferencesEndpoint()));
        })));
    }
    /**
     * @template T
     * @param {?} configuration
     * @return {?}
     */
    getUpdateUserPreferencesEndpoint(configuration) {
        return this.http.put(this.currentUserPreferencesUrl, JSON.stringify(configuration), this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return this.handleError(error, (/**
             * @return {?}
             */
            () => this.getUpdateUserPreferencesEndpoint(configuration)));
        })));
    }
    /**
     * @template T
     * @param {?} userId
     * @return {?}
     */
    getUnblockUserEndpoint(userId) {
        /** @type {?} */
        const endpointUrl = `${this.unblockUserUrl}/${userId}`;
        return this.http.put(endpointUrl, null, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return this.handleError(error, (/**
             * @return {?}
             */
            () => this.getUnblockUserEndpoint(userId)));
        })));
    }
    /**
     * @template T
     * @param {?} userId
     * @return {?}
     */
    getDeleteUserEndpoint(userId) {
        /** @type {?} */
        const endpointUrl = `${this.usersUrl}/${userId}`;
        return this.http.delete(endpointUrl, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return this.handleError(error, (/**
             * @return {?}
             */
            () => this.getDeleteUserEndpoint(userId)));
        })));
    }
    /**
     * @template T
     * @param {?} roleId
     * @return {?}
     */
    getRoleEndpoint(roleId) {
        /** @type {?} */
        const endpointUrl = `${this.rolesUrl}/${roleId}`;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return this.handleError(error, (/**
             * @return {?}
             */
            () => this.getRoleEndpoint(roleId)));
        })));
    }
    /**
     * @template T
     * @param {?} roleName
     * @return {?}
     */
    getRoleByRoleNameEndpoint(roleName) {
        /** @type {?} */
        const endpointUrl = `${this.roleByRoleNameUrl}/${roleName}`;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return this.handleError(error, (/**
             * @return {?}
             */
            () => this.getRoleByRoleNameEndpoint(roleName)));
        })));
    }
    /**
     * @template T
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    getRolesEndpoint(page, pageSize) {
        /** @type {?} */
        const endpointUrl = page && pageSize ? `${this.rolesUrl}/${page}/${pageSize}` : this.rolesUrl;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return this.handleError(error, (/**
             * @return {?}
             */
            () => this.getRolesEndpoint(page, pageSize)));
        })));
    }
    /**
     * @template T
     * @param {?} roleObject
     * @return {?}
     */
    getNewRoleEndpoint(roleObject) {
        return this.http.post(this.rolesUrl, JSON.stringify(roleObject), this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return this.handleError(error, (/**
             * @return {?}
             */
            () => this.getNewRoleEndpoint(roleObject)));
        })));
    }
    /**
     * @template T
     * @param {?} roleObject
     * @param {?} roleId
     * @return {?}
     */
    getUpdateRoleEndpoint(roleObject, roleId) {
        /** @type {?} */
        const endpointUrl = `${this.rolesUrl}/${roleId}`;
        return this.http.put(endpointUrl, JSON.stringify(roleObject), this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return this.handleError(error, (/**
             * @return {?}
             */
            () => this.getUpdateRoleEndpoint(roleObject, roleId)));
        })));
    }
    /**
     * @template T
     * @param {?} roleId
     * @return {?}
     */
    getDeleteRoleEndpoint(roleId) {
        /** @type {?} */
        const endpointUrl = `${this.rolesUrl}/${roleId}`;
        return this.http.delete(endpointUrl, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return this.handleError(error, (/**
             * @return {?}
             */
            () => this.getDeleteRoleEndpoint(roleId)));
        })));
    }
    /**
     * @template T
     * @return {?}
     */
    getPermissionsEndpoint() {
        return this.http.get(this.permissionsUrl, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return this.handleError(error, (/**
             * @return {?}
             */
            () => this.getPermissionsEndpoint()));
        })));
    }
}
AccountEndpoint.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AccountEndpoint.ctorParameters = () => [
    { type: ConfigurationService },
    { type: HttpClient },
    { type: AuthService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AccountEndpoint.prototype._usersUrl;
    /**
     * @type {?}
     * @private
     */
    AccountEndpoint.prototype._userByUserNameUrl;
    /**
     * @type {?}
     * @private
     */
    AccountEndpoint.prototype._currentUserUrl;
    /**
     * @type {?}
     * @private
     */
    AccountEndpoint.prototype._currentUserPreferencesUrl;
    /**
     * @type {?}
     * @private
     */
    AccountEndpoint.prototype._unblockUserUrl;
    /**
     * @type {?}
     * @private
     */
    AccountEndpoint.prototype._rolesUrl;
    /**
     * @type {?}
     * @private
     */
    AccountEndpoint.prototype._roleByRoleNameUrl;
    /**
     * @type {?}
     * @private
     */
    AccountEndpoint.prototype._permissionsUrl;
    /**
     * @type {?}
     * @private
     */
    AccountEndpoint.prototype.configurations;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/account.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function RolesChangedEventArg() { }
if (false) {
    /** @type {?} */
    RolesChangedEventArg.prototype.roles;
    /** @type {?} */
    RolesChangedEventArg.prototype.operation;
}
class AccountService {
    /**
     * @param {?} authService
     * @param {?} accountEndpoint
     */
    constructor(authService, accountEndpoint) {
        this.authService = authService;
        this.accountEndpoint = accountEndpoint;
        this._rolesChanged = new Subject();
    }
    /**
     * @param {?=} userId
     * @return {?}
     */
    getUser(userId) {
        return this.accountEndpoint.getUserEndpoint(userId);
    }
    /**
     * @param {?=} userId
     * @return {?}
     */
    getUserAndRoles(userId) {
        return forkJoin(this.accountEndpoint.getUserEndpoint(userId), this.accountEndpoint.getRolesEndpoint());
    }
    /**
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    getUsers(page, pageSize) {
        return this.accountEndpoint.getUsersEndpoint(page, pageSize);
    }
    /**
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    getUsersAndRoles(page, pageSize) {
        return forkJoin(this.accountEndpoint.getUsersEndpoint(page, pageSize), this.accountEndpoint.getRolesEndpoint());
    }
    /**
     * @param {?} user
     * @return {?}
     */
    updateUser(user) {
        if (user.id) {
            return this.accountEndpoint.getUpdateUserEndpoint(user, user.id);
        }
        else {
            return this.accountEndpoint.getUserByUserNameEndpoint(user.userName).pipe(mergeMap((/**
             * @param {?} foundUser
             * @return {?}
             */
            foundUser => {
                user.id = foundUser.id;
                return this.accountEndpoint.getUpdateUserEndpoint(user, user.id);
            })));
        }
    }
    /**
     * @param {?} user
     * @return {?}
     */
    newUser(user) {
        return this.accountEndpoint.getNewUserEndpoint(user);
    }
    /**
     * @return {?}
     */
    getUserPreferences() {
        return this.accountEndpoint.getUserPreferencesEndpoint();
    }
    /**
     * @param {?} configuration
     * @return {?}
     */
    updateUserPreferences(configuration) {
        return this.accountEndpoint.getUpdateUserPreferencesEndpoint(configuration);
    }
    /**
     * @param {?} userOrUserId
     * @return {?}
     */
    deleteUser(userOrUserId) {
        if (typeof userOrUserId === 'string' || userOrUserId instanceof String) {
            return this.accountEndpoint.getDeleteUserEndpoint((/** @type {?} */ (userOrUserId))).pipe(tap((/**
             * @param {?} data
             * @return {?}
             */
            data => this.onRolesUserCountChanged(data.roles))));
        }
        else {
            if (userOrUserId.id) {
                return this.deleteUser(userOrUserId.id);
            }
            else {
                return this.accountEndpoint.getUserByUserNameEndpoint(userOrUserId.userName).pipe(mergeMap((/**
                 * @param {?} user
                 * @return {?}
                 */
                user => this.deleteUser(user.id))));
            }
        }
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    unblockUser(userId) {
        return this.accountEndpoint.getUnblockUserEndpoint(userId);
    }
    /**
     * @param {?} permissionValue
     * @return {?}
     */
    userHasPermission(permissionValue) {
        return this.permissions.some((/**
         * @param {?} p
         * @return {?}
         */
        p => p == permissionValue));
    }
    /**
     * @return {?}
     */
    refreshLoggedInUser() {
        return this.accountEndpoint.refreshLogin();
    }
    /**
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    getRoles(page, pageSize) {
        return this.accountEndpoint.getRolesEndpoint(page, pageSize);
    }
    /**
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    getRolesAndPermissions(page, pageSize) {
        return forkJoin(this.accountEndpoint.getRolesEndpoint(page, pageSize), this.accountEndpoint.getPermissionsEndpoint());
    }
    /**
     * @param {?} role
     * @return {?}
     */
    updateRole(role) {
        if (role.id) {
            return this.accountEndpoint.getUpdateRoleEndpoint(role, role.id).pipe(tap((/**
             * @param {?} data
             * @return {?}
             */
            data => this.onRolesChanged([role], AccountService.roleModifiedOperation))));
        }
        else {
            return this.accountEndpoint.getRoleByRoleNameEndpoint(role.name).pipe(mergeMap((/**
             * @param {?} foundRole
             * @return {?}
             */
            foundRole => {
                role.id = foundRole.id;
                return this.accountEndpoint.getUpdateRoleEndpoint(role, role.id);
            })), tap((/**
             * @param {?} data
             * @return {?}
             */
            data => this.onRolesChanged([role], AccountService.roleModifiedOperation))));
        }
    }
    /**
     * @param {?} role
     * @return {?}
     */
    newRole(role) {
        return this.accountEndpoint.getNewRoleEndpoint(role).pipe(tap((/**
         * @param {?} data
         * @return {?}
         */
        data => this.onRolesChanged([role], AccountService.roleAddedOperation))));
    }
    /**
     * @param {?} roleOrRoleId
     * @return {?}
     */
    deleteRole(roleOrRoleId) {
        if (typeof roleOrRoleId === 'string' || roleOrRoleId instanceof String) {
            return this.accountEndpoint.getDeleteRoleEndpoint((/** @type {?} */ (roleOrRoleId))).pipe(tap((/**
             * @param {?} data
             * @return {?}
             */
            data => this.onRolesChanged([data], AccountService.roleDeletedOperation))));
        }
        else {
            if (roleOrRoleId.id) {
                return this.deleteRole(roleOrRoleId.id);
            }
            else {
                return this.accountEndpoint.getRoleByRoleNameEndpoint(roleOrRoleId.name).pipe(mergeMap((/**
                 * @param {?} role
                 * @return {?}
                 */
                role => this.deleteRole(role.id))));
            }
        }
    }
    /**
     * @return {?}
     */
    getPermissions() {
        return this.accountEndpoint.getPermissionsEndpoint();
    }
    /**
     * @private
     * @param {?} roles
     * @param {?} op
     * @return {?}
     */
    onRolesChanged(roles, op) {
        this._rolesChanged.next({ roles, operation: op });
    }
    /**
     * @param {?} roles
     * @return {?}
     */
    onRolesUserCountChanged(roles) {
        return this.onRolesChanged(roles, AccountService.roleModifiedOperation);
    }
    /**
     * @return {?}
     */
    getRolesChangedEvent() {
        return this._rolesChanged.asObservable();
    }
    /**
     * @return {?}
     */
    get permissions() {
        return this.authService.userPermissions;
    }
    /**
     * @return {?}
     */
    get currentUser() {
        return this.authService.currentUser;
    }
}
AccountService.roleAddedOperation = 'add';
AccountService.roleDeletedOperation = 'delete';
AccountService.roleModifiedOperation = 'modify';
AccountService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AccountService.ctorParameters = () => [
    { type: AuthService },
    { type: AccountEndpoint }
];
if (false) {
    /** @type {?} */
    AccountService.roleAddedOperation;
    /** @type {?} */
    AccountService.roleDeletedOperation;
    /** @type {?} */
    AccountService.roleModifiedOperation;
    /**
     * @type {?}
     * @private
     */
    AccountService.prototype._rolesChanged;
    /**
     * @type {?}
     * @private
     */
    AccountService.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    AccountService.prototype.accountEndpoint;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/notification-endpoint.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotificationEndpoint {
    constructor() {
        this.demoNotifications = [
            {
                id: 1,
                header: 'Welcome',
                body: 'You are ...',
                isRead: true,
                isPinned: true,
                date: '2019-05-28T16:29:13.5877958'
            }
        ];
    }
    /**
     * @template T
     * @param {?} notificationId
     * @return {?}
     */
    getNotificationEndpoint(notificationId) {
        /** @type {?} */
        const notification = this.demoNotifications.find((/**
         * @param {?} val
         * @return {?}
         */
        val => val.id == notificationId));
        /** @type {?} */
        let response;
        if (notification) {
            response = this.createResponse(notification, 200);
        }
        else {
            response = this.createResponse(null, 404);
        }
        return of(response.body);
    }
    /**
     * @template T
     * @param {?} page
     * @param {?} pageSize
     * @return {?}
     */
    getNotificationsEndpoint(page, pageSize) {
        /** @type {?} */
        const notifications = this.demoNotifications;
        /** @type {?} */
        const response = this.createResponse(this.demoNotifications, 200);
        return of(response.body);
    }
    /**
     * @template T
     * @param {?=} userId
     * @return {?}
     */
    getUnreadNotificationsEndpoint(userId) {
        /** @type {?} */
        const unreadNotifications = this.demoNotifications.filter((/**
         * @param {?} val
         * @return {?}
         */
        val => !val.isRead));
        /** @type {?} */
        const response = this.createResponse(unreadNotifications, 200);
        return of(response.body);
    }
    /**
     * @template T
     * @param {?=} lastNotificationDate
     * @return {?}
     */
    getNewNotificationsEndpoint(lastNotificationDate) {
        /** @type {?} */
        const unreadNotifications = this.demoNotifications;
        /** @type {?} */
        const response = this.createResponse(unreadNotifications, 200);
        return of(response.body);
    }
    /**
     * @template T
     * @param {?} notificationId
     * @param {?=} isPinned
     * @return {?}
     */
    getPinUnpinNotificationEndpoint(notificationId, isPinned) {
        /** @type {?} */
        const notification = this.demoNotifications.find((/**
         * @param {?} val
         * @return {?}
         */
        val => val.id == notificationId));
        /** @type {?} */
        let response;
        if (notification) {
            response = this.createResponse(null, 204);
            if (isPinned == null) {
                isPinned = !notification.isPinned;
            }
            notification.isPinned = isPinned;
            notification.isRead = true;
        }
        else {
            response = this.createResponse(null, 404);
        }
        return of(response.body);
    }
    /**
     * @template T
     * @param {?} notificationIds
     * @param {?} isRead
     * @return {?}
     */
    getReadUnreadNotificationEndpoint(notificationIds, isRead) {
        for (const notificationId of notificationIds) {
            /** @type {?} */
            const notification = this.demoNotifications.find((/**
             * @param {?} val
             * @return {?}
             */
            val => val.id == notificationId));
            if (notification) {
                notification.isRead = isRead;
            }
        }
        /** @type {?} */
        const response = this.createResponse(null, 204);
        return of(response.body);
    }
    /**
     * @template T
     * @param {?} notificationId
     * @return {?}
     */
    getDeleteNotificationEndpoint(notificationId) {
        /** @type {?} */
        const notification = this.demoNotifications.find((/**
         * @param {?} val
         * @return {?}
         */
        val => val.id == notificationId));
        /** @type {?} */
        let response;
        if (notification) {
            this.demoNotifications = this.demoNotifications.filter((/**
             * @param {?} val
             * @return {?}
             */
            val => val.id != notificationId));
            response = this.createResponse(notification, 200);
        }
        else {
            response = this.createResponse(null, 404);
        }
        return of(response.body);
    }
    /**
     * @private
     * @template T
     * @param {?} body
     * @param {?} status
     * @return {?}
     */
    createResponse(body, status) {
        return new HttpResponse({ body, status });
    }
}
NotificationEndpoint.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NotificationEndpoint.prototype.demoNotifications;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/notification.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotificationService {
    /**
     * @param {?} notificationEndpoint
     * @param {?} authService
     */
    constructor(notificationEndpoint, authService) {
        this.notificationEndpoint = notificationEndpoint;
        this.authService = authService;
    }
    /**
     * @return {?}
     */
    get currentUser() {
        return this.authService.currentUser;
    }
    /**
     * @return {?}
     */
    get recentNotifications() {
        return this._recentNotifications;
    }
    /**
     * @param {?} notifications
     * @return {?}
     */
    set recentNotifications(notifications) {
        this._recentNotifications = notifications;
    }
    /**
     * @param {?=} notificationId
     * @return {?}
     */
    getNotification(notificationId) {
        return this.notificationEndpoint.getNotificationEndpoint(notificationId).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => Notification.Create(response))));
    }
    /**
     * @param {?} page
     * @param {?} pageSize
     * @return {?}
     */
    getNotifications(page, pageSize) {
        return this.notificationEndpoint.getNotificationsEndpoint(page, pageSize).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            return this.getNotificationsFromResponse(response);
        })));
    }
    /**
     * @param {?=} userId
     * @return {?}
     */
    getUnreadNotifications(userId) {
        return this.notificationEndpoint.getUnreadNotificationsEndpoint(userId).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => this.getNotificationsFromResponse(response))));
    }
    /**
     * @return {?}
     */
    getNewNotifications() {
        return this.notificationEndpoint.getNewNotificationsEndpoint(this.lastNotificationDate).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => this.processNewNotificationsFromResponse(response))));
    }
    /**
     * @return {?}
     */
    getNewNotificationsPeriodically() {
        return interval(10000).pipe(startWith(0), flatMap((/**
         * @return {?}
         */
        () => {
            return this.notificationEndpoint.getNewNotificationsEndpoint(this.lastNotificationDate).pipe(map((/**
             * @param {?} response
             * @return {?}
             */
            response => this.processNewNotificationsFromResponse(response))));
        })));
    }
    /**
     * @param {?} notificationOrNotificationId
     * @param {?=} isPinned
     * @return {?}
     */
    pinUnpinNotification(notificationOrNotificationId, isPinned) {
        if (typeof notificationOrNotificationId === 'number' || notificationOrNotificationId instanceof Number) {
            return this.notificationEndpoint.getPinUnpinNotificationEndpoint((/** @type {?} */ (notificationOrNotificationId)), isPinned);
        }
        else {
            return this.pinUnpinNotification(notificationOrNotificationId.id);
        }
    }
    /**
     * @param {?} notificationIds
     * @param {?} isRead
     * @return {?}
     */
    readUnreadNotification(notificationIds, isRead) {
        return this.notificationEndpoint.getReadUnreadNotificationEndpoint(notificationIds, isRead);
    }
    /**
     * @param {?} notificationOrNotificationId
     * @return {?}
     */
    deleteNotification(notificationOrNotificationId) {
        if (typeof notificationOrNotificationId === 'number' || notificationOrNotificationId instanceof Number) { // Todo: Test me if its check is valid
            return this.notificationEndpoint.getDeleteNotificationEndpoint((/** @type {?} */ (notificationOrNotificationId))).pipe(map((/**
             * @param {?} response
             * @return {?}
             */
            response => {
                this.recentNotifications = this.recentNotifications.filter((/**
                 * @param {?} n
                 * @return {?}
                 */
                n => n.id != notificationOrNotificationId));
                return Notification.Create(response);
            })));
        }
        else {
            return this.deleteNotification(notificationOrNotificationId.id);
        }
    }
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    processNewNotificationsFromResponse(response) {
        /** @type {?} */
        const notifications = this.getNotificationsFromResponse(response);
        for (const n of notifications) {
            if (n.date > this.lastNotificationDate) {
                this.lastNotificationDate = n.date;
            }
        }
        return notifications;
    }
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    getNotificationsFromResponse(response) {
        /** @type {?} */
        const notifications = [];
        for (const i in response) {
            notifications[i] = Notification.Create(response[i]);
        }
        notifications.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => b.date.valueOf() - a.date.valueOf()));
        notifications.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => (a.isPinned === b.isPinned) ? 0 : a.isPinned ? -1 : 1));
        this.recentNotifications = notifications;
        return notifications;
    }
}
NotificationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NotificationService.ctorParameters = () => [
    { type: NotificationEndpoint },
    { type: AuthService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NotificationService.prototype.lastNotificationDate;
    /**
     * @type {?}
     * @private
     */
    NotificationService.prototype._recentNotifications;
    /**
     * @type {?}
     * @private
     */
    NotificationService.prototype.notificationEndpoint;
    /**
     * @type {?}
     * @private
     */
    NotificationService.prototype.authService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/translation.service-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslationServiceProvider extends TranslationServiceAbstractProvider {
    /**
     * @param {?} impl
     */
    constructor(impl) {
        super();
        this.impl = impl;
    }
    /**
     * @return {?}
     */
    get() {
        return this.impl;
    }
}
TranslationServiceProvider.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TranslationServiceProvider.ctorParameters = () => [
    { type: AppTranslationService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslationServiceProvider.prototype.impl;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/app-title.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AppTitleService {
    /**
     * @param {?} titleService
     * @param {?} router
     */
    constructor(titleService, router) {
        this.titleService = titleService;
        this.router = router;
        this.sub = this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof NavigationEnd)), map((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.router.routerState.root)), map((/**
         * @param {?} route
         * @return {?}
         */
        route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })), flatMap((/**
         * @param {?} route
         * @return {?}
         */
        route => route.data)))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            /** @type {?} */
            let title = data.title;
            if (title) {
                /** @type {?} */
                const fragment = this.router.url.split('#')[1];
                if (fragment) {
                    title += ' | ' + Utilities.toTitleCase(fragment);
                }
            }
            if (title && this.appName) {
                title += ' - ' + this.appName;
            }
            else if (this.appName) {
                title = this.appName;
            }
            if (title) {
                this.titleService.setTitle(title);
            }
        }));
    }
}
AppTitleService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AppTitleService.ctorParameters = () => [
    { type: Title },
    { type: Router }
];
if (false) {
    /** @type {?} */
    AppTitleService.prototype.sub;
    /** @type {?} */
    AppTitleService.prototype.appName;
    /**
     * @type {?}
     * @private
     */
    AppTitleService.prototype.titleService;
    /**
     * @type {?}
     * @private
     */
    AppTitleService.prototype.router;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/alert.service-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertServiceProvider extends AlertServiceAbstractProvider {
    /**
     * @param {?} alertService
     */
    constructor(alertService) {
        super();
        this.alertService = alertService;
    }
    /**
     * @return {?}
     */
    get() {
        return this.alertService;
    }
}
AlertServiceProvider.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AlertServiceProvider.ctorParameters = () => [
    { type: AlertService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AlertServiceProvider.prototype.alertService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/local-storage-manager.service-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LocalStoreManagerProvider extends LocalStoreManagerServiceAbstractProvider {
    /**
     * @param {?} impl
     */
    constructor(impl) {
        super();
        this.impl = impl;
    }
    /**
     * @return {?}
     */
    get() {
        return this.impl;
    }
}
LocalStoreManagerProvider.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalStoreManagerProvider.ctorParameters = () => [
    { type: LocalStoreManager }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStoreManagerProvider.prototype.impl;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/group-by.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GroupByPipe {
    /**
     * @param {?} value
     * @param {?} field
     * @return {?}
     */
    transform(value, field) {
        if (!value) {
            return value;
        }
        /** @type {?} */
        const groupedObj = value.reduce((/**
         * @param {?} prev
         * @param {?} cur
         * @return {?}
         */
        (prev, cur) => {
            if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
            }
            else {
                prev[cur[field]].push(cur);
            }
            return prev;
        }), {});
        return Object.keys(groupedObj).map((/**
         * @param {?} key
         * @return {?}
         */
        key => ({ key, value: groupedObj[key] })));
    }
}
GroupByPipe.decorators = [
    { type: Pipe, args: [{ name: 'groupBy' },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/notifications-viewer/notifications-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotificationsViewerComponent {
    /**
     * @param {?} alertService
     * @param {?} translationService
     * @param {?} accountService
     * @param {?} notificationService
     */
    constructor(alertService, translationService, accountService, notificationService) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.notificationService = notificationService;
        this.columns = [];
        this.rows = [];
        this.dataLoadingConsecutiveFailurs = 0;
        this.verticalScrollbar = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isViewOnly) {
            this.columns = [
                { prop: 'date', cellTemplate: this.dateTemplate, width: 100, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
                { prop: 'header', cellTemplate: this.contentHeaderTemplate, width: 200, resizeable: false, sortable: false, draggable: false },
            ];
        }
        else {
            /** @type {?} */
            const gT = (/**
             * @param {?} key
             * @return {?}
             */
            (key) => this.translationService.getTranslation(key));
            this.columns = [
                { prop: '', name: '', width: 10, headerTemplate: this.statusHeaderTemplate, cellTemplate: this.statusTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
                { prop: 'date', name: gT('notifications.Date'), cellTemplate: this.dateTemplate, width: 30 },
                { prop: 'body', name: gT('notifications.Notification'), cellTemplate: this.contenBodytTemplate, width: 500 },
                { name: '', width: 80, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
            ];
        }
        this.initDataLoading();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.dataLoadingSubscription) {
            this.dataLoadingSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    initDataLoading() {
        if (this.isViewOnly && this.notificationService.recentNotifications) {
            this.rows = this.processResults(this.notificationService.recentNotifications);
            return;
        }
        this.loadingIndicator = true;
        /** @type {?} */
        const dataLoadTask = this.isViewOnly ? this.notificationService.getNewNotifications() : this.notificationService.getNewNotificationsPeriodically();
        this.dataLoadingSubscription = dataLoadTask
            .subscribe((/**
         * @param {?} notifications
         * @return {?}
         */
        notifications => {
            this.loadingIndicator = false;
            this.dataLoadingConsecutiveFailurs = 0;
            this.rows = this.processResults(notifications);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.loadingIndicator = false;
            this.alertService.showMessage('Load Error', 'Loading new notifications from the server failed!', MessageSeverity.warn);
            this.alertService.logError(error);
            if (this.dataLoadingConsecutiveFailurs++ < 5) {
                setTimeout((/**
                 * @return {?}
                 */
                () => this.initDataLoading()), 5000);
            }
            else {
                this.alertService.showStickyMessage('Load Error', 'Loading new notifications from the server failed!', MessageSeverity.error);
            }
        }));
        if (this.isViewOnly) {
            this.dataLoadingSubscription = null;
        }
    }
    /**
     * @private
     * @param {?} notifications
     * @return {?}
     */
    processResults(notifications) {
        if (this.isViewOnly) {
            notifications.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                return b.date.valueOf() - a.date.valueOf();
            }));
        }
        return notifications;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getPrintedDate(value) {
        if (value) {
            return Utilities.printTimeOnly(value) + ' on ' + Utilities.printDateOnly(value);
        }
    }
    /**
     * @param {?} row
     * @return {?}
     */
    deleteNotification(row) {
        this.alertService.showDialog('Are you sure you want to delete the notification \"' + row.header + '\"?', DialogType.confirm, (/**
         * @return {?}
         */
        () => this.deleteNotificationHelper(row)));
    }
    /**
     * @param {?} row
     * @return {?}
     */
    deleteNotificationHelper(row) {
        this.alertService.startLoadingMessage('Deleting...');
        this.loadingIndicator = true;
        this.notificationService.deleteNotification(row)
            .subscribe((/**
         * @param {?} results
         * @return {?}
         */
        results => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.rows = this.rows.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.id != row.id));
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.alertService.showStickyMessage('Delete Error', `An error occured whilst deleting the notification.\r\nError: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        }));
    }
    /**
     * @param {?} row
     * @return {?}
     */
    togglePin(row) {
        /** @type {?} */
        const pin = !row.isPinned;
        /** @type {?} */
        const opText = pin ? 'Pinning' : 'Unpinning';
        this.alertService.startLoadingMessage(opText + '...');
        this.loadingIndicator = true;
        this.notificationService.pinUnpinNotification(row, pin)
            .subscribe((/**
         * @param {?} results
         * @return {?}
         */
        results => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            row.isPinned = pin;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.alertService.showStickyMessage(opText + ' Error', `An error occured whilst ${opText} the notification.\r\nError: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        }));
    }
    /**
     * @return {?}
     */
    get canManageNotifications() {
        return this.accountService.userHasPermission(Permission.manageRolesPermission); // Todo: Consider creating separate permission for notifications
    }
}
NotificationsViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'notifications-viewer',
                template: "<div>\n    <ngx-datatable class=\"material colored-header sm table-hover\"\n                   [loadingIndicator]=\"loadingIndicator\"\n                   [rows]=\"rows\"\n                   [rowHeight]=\"35\"\n                   [headerHeight]=\"isViewOnly ? 0 : 35\"\n                   [footerHeight]=\"35\"\n                   [limit]=\"10\"\n                   [columns]=\"columns\"\n                   [scrollbarV]=\"verticalScrollbar\"\n                   [columnMode]=\"'force'\">\n    </ngx-datatable>\n\n    <ng-template #statusHeaderTemplate>\n        <i class=\"fa fa-bullhorn\"></i>\n    </ng-template>\n\n    <ng-template #statusTemplate>\n        <span></span>\n    </ng-template>\n\n    <ng-template #dateTemplate let-row=\"row\" let-value=\"value\">\n        <span [class.unread]=\"!row.isRead\" attr.title=\"{{getPrintedDate(value)}}\">\n            {{getPrintedDate(value)}}\n        </span>\n    </ng-template>\n\n    <ng-template #contentHeaderTemplate let-row=\"row\" let-value=\"value\">\n        <span [class.unread]=\"!row.isRead\" attr.title=\"{{row.body}}\">\n            {{value}}\n        </span>\n    </ng-template>\n\n    <ng-template #contenBodytTemplate let-row=\"row\" let-value=\"value\">\n        <span [class.unread]=\"!row.isRead\" attr.title=\"{{row.header}}\">\n            {{value}}\n        </span>\n    </ng-template>\n\n\n    <ng-template #actionsTemplate let-row=\"row\">\n        <a class=\"btn btn-link btn-sm\" href=\"javascript:;\" tooltip=\"{{'notifications.Delete' | translate}}\" container=\"body\" (click)=\"deleteNotification(row)\"><i class=\"fa fa-times\"></i></a>\n        <a class=\"btn btn-link btn-sm\" href=\"javascript:;\" tooltip=\"{{'notifications.Pin' | translate}}\" co container=\"body\" (click)=\"togglePin(row)\">\n            <i *ngIf=\"row.isPinned\" class=\"fa fa-thumb-tack\"></i>\n            <i *ngIf=\"!row.isPinned\" class=\"fa fa-thumb-tack fa-rotate-90\"></i>\n        </a>\n    </ng-template>\n</div>",
                styles: [".unread{font-weight:700}"]
            }] }
];
/** @nocollapse */
NotificationsViewerComponent.ctorParameters = () => [
    { type: AlertService },
    { type: AppTranslationService },
    { type: AccountService },
    { type: NotificationService }
];
NotificationsViewerComponent.propDecorators = {
    isViewOnly: [{ type: Input }],
    verticalScrollbar: [{ type: Input }],
    statusHeaderTemplate: [{ type: ViewChild, args: ['statusHeaderTemplate', { static: true },] }],
    statusTemplate: [{ type: ViewChild, args: ['statusTemplate', { static: true },] }],
    dateTemplate: [{ type: ViewChild, args: ['dateTemplate', { static: true },] }],
    contentHeaderTemplate: [{ type: ViewChild, args: ['contentHeaderTemplate', { static: true },] }],
    contenBodytTemplate: [{ type: ViewChild, args: ['contenBodytTemplate', { static: true },] }],
    actionsTemplate: [{ type: ViewChild, args: ['actionsTemplate', { static: true },] }]
};
if (false) {
    /** @type {?} */
    NotificationsViewerComponent.prototype.columns;
    /** @type {?} */
    NotificationsViewerComponent.prototype.rows;
    /** @type {?} */
    NotificationsViewerComponent.prototype.loadingIndicator;
    /** @type {?} */
    NotificationsViewerComponent.prototype.dataLoadingConsecutiveFailurs;
    /** @type {?} */
    NotificationsViewerComponent.prototype.dataLoadingSubscription;
    /** @type {?} */
    NotificationsViewerComponent.prototype.isViewOnly;
    /** @type {?} */
    NotificationsViewerComponent.prototype.verticalScrollbar;
    /** @type {?} */
    NotificationsViewerComponent.prototype.statusHeaderTemplate;
    /** @type {?} */
    NotificationsViewerComponent.prototype.statusTemplate;
    /** @type {?} */
    NotificationsViewerComponent.prototype.dateTemplate;
    /** @type {?} */
    NotificationsViewerComponent.prototype.contentHeaderTemplate;
    /** @type {?} */
    NotificationsViewerComponent.prototype.contenBodytTemplate;
    /** @type {?} */
    NotificationsViewerComponent.prototype.actionsTemplate;
    /**
     * @type {?}
     * @private
     */
    NotificationsViewerComponent.prototype.alertService;
    /**
     * @type {?}
     * @private
     */
    NotificationsViewerComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    NotificationsViewerComponent.prototype.accountService;
    /**
     * @type {?}
     * @private
     */
    NotificationsViewerComponent.prototype.notificationService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/user-info/user-info.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserInfoComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/users-management/users-management.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UsersManagementComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/bootstrap-select.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BootstrapSelectDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.oldValues = '';
        this.ngModelChange = new EventEmitter();
        this.shown = new EventEmitter();
        this.hidden = new EventEmitter();
        this.changedSubscription = fromEvent($(this.el.nativeElement), 'changed.bs.select').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.checkIsValuesChanged(this.selected)) {
                this.ngModelChange.emit(this.selected);
            }
        }))));
        this.shownSubscription = fromEvent($(this.el.nativeElement), 'shown.bs.select').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => setTimeout((/**
         * @return {?}
         */
        () => this.shown.emit()))));
        this.hiddenSubscription = fromEvent($(this.el.nativeElement), 'hidden.bs.select').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => setTimeout((/**
         * @return {?}
         */
        () => this.hidden.emit()))));
    }
    /**
     * @param {?} values
     * @return {?}
     */
    set ngModel(values) {
        setTimeout((/**
         * @return {?}
         */
        () => this.selected = values));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        $(this.el.nativeElement).selectpicker();
        if (this.requiredAttribute) {
            $(this.el.nativeElement).selectpicker('setStyle', 'required', 'add');
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.refresh();
            this.doValidation();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.changedSubscription) {
            this.changedSubscription.unsubscribe();
        }
        if (this.shownSubscription) {
            this.shownSubscription.unsubscribe();
        }
        if (this.hiddenSubscription) {
            this.hiddenSubscription.unsubscribe();
        }
        $(this.el.nativeElement).selectpicker('destroy');
    }
    /**
     * @private
     * @param {?} newValue
     * @return {?}
     */
    checkIsValuesChanged(newValue) {
        return !(newValue == this.oldValues ||
            (newValue instanceof Array && newValue.length === this.oldValues.length && newValue.every((/**
             * @param {?} v
             * @param {?} i
             * @return {?}
             */
            (v, i) => v === this.oldValues[i]))));
    }
    /**
     * @private
     * @return {?}
     */
    doValidation() {
        if (this.requiredAttribute) {
            $(this.el.nativeElement).selectpicker('setStyle', !this.valid ? 'ng-valid' : 'ng-invalid', 'remove');
            $(this.el.nativeElement).selectpicker('setStyle', this.valid ? 'ng-valid' : 'ng-invalid', 'add');
        }
    }
    /**
     * @private
     * @return {?}
     */
    get requiredAttribute() {
        return this.required === '' || this.required == 'true';
    }
    /**
     * @return {?}
     */
    refresh() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            $(this.el.nativeElement).selectpicker('refresh');
        }));
    }
    /**
     * @return {?}
     */
    render() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            $(this.el.nativeElement).selectpicker('render');
        }));
    }
    /**
     * @return {?}
     */
    get valid() {
        return this.requiredAttribute ? this.selected && this.selected.length > 0 : true;
    }
    /**
     * @param {?} values
     * @return {?}
     */
    set selected(values) {
        if (!this.checkIsValuesChanged(values)) {
            return;
        }
        this.oldValues = this.selected;
        $(this.el.nativeElement).selectpicker('val', values);
        this.doValidation();
    }
    /**
     * @return {?}
     */
    get selected() {
        return $(this.el.nativeElement).selectpicker('val');
    }
}
BootstrapSelectDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bootstrapSelect]',
                exportAs: 'bootstrap-select'
            },] }
];
/** @nocollapse */
BootstrapSelectDirective.ctorParameters = () => [
    { type: ElementRef }
];
BootstrapSelectDirective.propDecorators = {
    required: [{ type: Input }],
    ngModel: [{ type: Input }],
    ngModelChange: [{ type: Output }],
    shown: [{ type: Output }],
    hidden: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    BootstrapSelectDirective.prototype.oldValues;
    /**
     * @type {?}
     * @private
     */
    BootstrapSelectDirective.prototype.changedSubscription;
    /**
     * @type {?}
     * @private
     */
    BootstrapSelectDirective.prototype.shownSubscription;
    /**
     * @type {?}
     * @private
     */
    BootstrapSelectDirective.prototype.hiddenSubscription;
    /** @type {?} */
    BootstrapSelectDirective.prototype.required;
    /** @type {?} */
    BootstrapSelectDirective.prototype.ngModelChange;
    /** @type {?} */
    BootstrapSelectDirective.prototype.shown;
    /** @type {?} */
    BootstrapSelectDirective.prototype.hidden;
    /**
     * @type {?}
     * @private
     */
    BootstrapSelectDirective.prototype.el;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/user-preferences/user-preferences.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UserPreferencesComponent {
    /**
     * @param {?} alertService
     * @param {?} translationService
     * @param {?} accountService
     * @param {?} themeManager
     * @param {?} configurations
     */
    constructor(alertService, translationService, accountService, themeManager, configurations) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.themeManager = themeManager;
        this.configurations = configurations;
        this.themeSelectorToggle = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.languageChangedSubscription = this.translationService.languageChanged$.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.themeSelectorToggle = false;
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.languageSelector.refresh();
                this.homePageSelector.refresh();
                this.themeSelectorToggle = true;
            }));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.languageChangedSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    reloadFromServer() {
        this.alertService.startLoadingMessage();
        this.accountService.getUserPreferences()
            .subscribe((/**
         * @param {?} results
         * @return {?}
         */
        results => {
            this.alertService.stopLoadingMessage();
            this.configurations.import(results);
            this.alertService.showMessage('Defaults loaded!', '', MessageSeverity.info);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Load Error', `Unable to retrieve user preferences from the server.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        }));
    }
    /**
     * @return {?}
     */
    setAsDefault() {
        this.alertService.showDialog('Are you sure you want to set the current configuration as your new defaults?', DialogType.confirm, (/**
         * @return {?}
         */
        () => this.setAsDefaultHelper()), (/**
         * @return {?}
         */
        () => this.alertService.showMessage('Operation Cancelled!', '', MessageSeverity.default)));
    }
    /**
     * @return {?}
     */
    setAsDefaultHelper() {
        this.alertService.startLoadingMessage('', 'Saving new defaults');
        this.accountService.updateUserPreferences(this.configurations.export())
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            this.alertService.stopLoadingMessage();
            this.alertService.showMessage('New Defaults', 'Account defaults updated successfully', MessageSeverity.success);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Save Error', `An error occured whilst saving configuration defaults.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        }));
    }
    /**
     * @return {?}
     */
    resetDefault() {
        this.alertService.showDialog('Are you sure you want to reset your defaults?', DialogType.confirm, (/**
         * @return {?}
         */
        () => this.resetDefaultHelper()), (/**
         * @return {?}
         */
        () => this.alertService.showMessage('Operation Cancelled!', '', MessageSeverity.default)));
    }
    /**
     * @return {?}
     */
    resetDefaultHelper() {
        this.alertService.startLoadingMessage('', 'Resetting defaults');
        this.accountService.updateUserPreferences(null)
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            this.alertService.stopLoadingMessage();
            this.configurations.import(null);
            this.alertService.showMessage('Defaults Reset', 'Account defaults reset completed successfully', MessageSeverity.success);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Save Error', `An error occured whilst resetting configuration defaults.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        }));
    }
    /**
     * @return {?}
     */
    get canViewCustomers() {
        return this.accountService.userHasPermission(Permission.viewUsersPermission); // eg. viewCustomersPermission
    }
    /**
     * @return {?}
     */
    get canViewProducts() {
        return this.accountService.userHasPermission(Permission.viewUsersPermission); // eg. viewProductsPermission
    }
    /**
     * @return {?}
     */
    get canViewOrders() {
        return true; // eg. viewOrdersPermission
    }
}
UserPreferencesComponent.decorators = [
    { type: Component, args: [{
                selector: 'user-preferences',
                template: "<div>\n    <div class=\"form-group row\">\n        <label for=\"refreshButton\" class=\"col-sm-3 col-form-label\">{{'preferences.ReloadPreferences' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <button id=\"refreshButton\" class=\"btn btn-outline-secondary\" (click)=\"reloadFromServer()\">\n                <i class=\"fa fa-refresh\"></i>\n            </button>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.ReloadPreferencesHint' | translate}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"separator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label for=\"language\" class=\"col-sm-3 col-form-label\">{{'preferences.Language' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <select id=\"language\" [(ngModel)]=\"configurations.language\" #languageSelector=\"bootstrap-select\" bootstrapSelect class=\"selectpicker form-control\">\n                <option data-subtext=\"(Default)\" value=\"en\">{{'preferences.English' | translate}}</option>\n                <option value=\"fr\">{{'preferences.French' | translate}}</option>\n                <option value=\"de\">{{'preferences.German' | translate}}</option>\n                <option value=\"pt\">{{'preferences.Portuguese' | translate}}</option>\n                <option value=\"ar\">{{'preferences.Arabic' | translate}}</option>\n                <option value=\"ko\">{{'preferences.Korean' | translate}}</option>\n            </select>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.LanguageHint' | translate}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"separator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label for=\"homePage\" class=\"col-sm-3 col-form-label\">{{'preferences.HomePage' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <select id=\"homePage\" [(ngModel)]=\"configurations.homeUrl\" #homePageSelector=\"bootstrap-select\" bootstrapSelect class=\"selectpicker form-control\">\n                <option data-icon=\"fa fa-tachometer\" data-subtext=\"(Default)\" value=\"/\">{{'preferences.Dashboard' | translate}}</option>\n                <option *ngIf=\"canViewCustomers\" data-icon=\"fa fa-handshake-o\" value=\"/customers\">{{'preferences.Customers' | translate}}</option>\n                <option *ngIf=\"canViewProducts\" data-icon=\"fa fa-truck\" value=\"/products\">{{'preferences.Products' | translate}}</option>\n                <option *ngIf=\"canViewOrders\" data-icon=\"fa fa-shopping-cart\" value=\"/orders\">{{'preferences.Orders' | translate}}</option>\n                <option data-icon=\"fa fa-info-circle\" value=\"/about\">{{'preferences.About' | translate}}</option>\n                <option data-icon=\"fa fa-cog\" value=\"/settings\">{{'preferences.Settings' | translate}}</option>\n            </select>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.HomePageHint' | translate}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"separator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label for=\"defaultTheme\" class=\"col-sm-3 col-form-label\">{{'preferences.Theme' | translate}} </label>\n        <div *ngIf=\"themeSelectorToggle\" class=\"col-sm-4\">\n            <select id=\"defaultTheme\" [(ngModel)]=\"configurations.themeId\" bootstrapSelect class=\"selectpicker theme-picker form-control\">\n                <option *ngFor=\"let theme of themeManager.themes\"\n                attr.data-content=\"<div class='theme-item' style='background-color: {{theme.background}}; color: {{theme.color}}'>{{'preferences.' + theme.name + 'Theme' | translate}}\n                <span class='small'>{{theme.isDark ? '(Dark)' : ''}}</span></div>\">\n                {{theme.id}}\n                </option>\n            </select>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.ThemeHint' | translate}}</p>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"separator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"dashboardStatistics\">{{'preferences.DashboardStatistics' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <div class=\"checkbox\">\n                <input name=\"dashboardStatistics\" [(ngModel)]=\"configurations.showDashboardStatistics\" class=\"form-control\" type=\"checkbox\" bootstrapToggle data-size=\"small\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.DashboardStatisticsHint' | translate}}</p>\n        </div>\n    </div>\n    <!--  -->\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"subseparator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"dashboardTodo\">{{'preferences.DashboardNotifications' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <div class=\"checkbox\">\n                <input name=\"dashboardNotifications\" [(ngModel)]=\"configurations.showDashboardNotifications\" class=\"form-control\" type=\"checkbox\" bootstrapToggle data-size=\"small\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.DashboardNotificationsHint' | translate}}</p>\n        </div>\n    </div>\n    <!--  -->\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"subseparator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"dashboardTodo\">{{'preferences.DashboardTodo' | translate}} </label>\n        <div class=\"col-sm-4\">\n            <div class=\"checkbox\">\n                <input name=\"dashboardTodo\" [(ngModel)]=\"configurations.showDashboardTodo\" class=\"form-control\" type=\"checkbox\" bootstrapToggle data-size=\"small\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.DashboardTodoHint' | translate}}</p>\n        </div>\n    </div>\n    <!--  -->\n\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"subseparator-hr\" />\n        </div>\n    </div>\n\n    <div class=\"form-group row\">\n        <label class=\"col-sm-3 col-form-label\" for=\"dashboardBanner\">{{'preferences.DashboardBanner' | translate}}</label>\n        <div class=\"col-sm-4\">\n            <div class=\"checkbox\">\n                <input name=\"dashboardBanner\" [(ngModel)]=\"configurations.showDashboardBanner\" class=\"form-control\" type=\"checkbox\" bootstrapToggle data-size=\"small\">\n            </div>\n        </div>\n        <div class=\"col-sm-5\">\n            <p class=\"form-control-plaintext text-muted small\">{{'preferences.DashboardBannerHint' | translate}}</p>\n        </div>\n    </div>\n    <!--  -->\n\n\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <hr class=\"last-separator-hr\" />\n        </div>\n    </div>\n    <div class=\"form-group row\">\n        <div class=\"col-sm-3\">\n\n        </div>\n        <div class=\"col-sm-9\">\n            <div class=\"row float-left\">\n                <div class=\"col-sm-6 col-reset-default\">\n                    <button type=\"button\" (click)=\"resetDefault()\" class=\"btn btn-success\">\n                        <i class='fa fa-circle-o-notch'></i> {{'preferences.ResetDefault' | translate}}\n                    </button>\n                </div>\n                <div class=\"col-sm-6 col-set-default\">\n                    <button type=\"button\" (click)=\"setAsDefault()\" class=\"btn btn-primary\">\n                        <i class='fa fa-hdd-o'></i> {{'preferences.SetDefault' | translate}}\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n",
                styles: [".separator-hr{margin:7px 5px;border-top-style:dashed}.subseparator-hr{margin:7px 5px;border-top-style:none}.last-separator-hr{margin-top:7px}.form-group{margin-top:0;margin-bottom:0}.form-control-plaintext{min-height:0}.checkbox{padding-top:0}.col-reset-default{padding-right:0}.col-set-default{padding-left:5px}.col-reset-default .btn,.col-set-default .btn{min-width:150px}@media (min-width:768px){.col-form-label{padding-top:5px}}"]
            }] }
];
/** @nocollapse */
UserPreferencesComponent.ctorParameters = () => [
    { type: AlertService },
    { type: AppTranslationService },
    { type: AccountService },
    { type: ThemeManager },
    { type: ConfigurationService }
];
UserPreferencesComponent.propDecorators = {
    languageSelector: [{ type: ViewChild, args: ['languageSelector', { static: true },] }],
    homePageSelector: [{ type: ViewChild, args: ['homePageSelector', { static: true },] }]
};
if (false) {
    /** @type {?} */
    UserPreferencesComponent.prototype.themeSelectorToggle;
    /** @type {?} */
    UserPreferencesComponent.prototype.languageChangedSubscription;
    /** @type {?} */
    UserPreferencesComponent.prototype.languageSelector;
    /** @type {?} */
    UserPreferencesComponent.prototype.homePageSelector;
    /**
     * @type {?}
     * @private
     */
    UserPreferencesComponent.prototype.alertService;
    /**
     * @type {?}
     * @private
     */
    UserPreferencesComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    UserPreferencesComponent.prototype.accountService;
    /** @type {?} */
    UserPreferencesComponent.prototype.themeManager;
    /** @type {?} */
    UserPreferencesComponent.prototype.configurations;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/role-editor/role-editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RoleEditorComponent {
    /**
     * @param {?} alertService
     * @param {?} accountService
     */
    constructor(alertService, accountService) {
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
    showErrorAlert(caption, message) {
        this.alertService.showMessage(caption, message, MessageSeverity.error);
    }
    /**
     * @return {?}
     */
    save() {
        this.isSaving = true;
        this.alertService.startLoadingMessage('Saving changes...');
        this.roleEdit.permissions = this.getSelectedPermissions();
        if (this.isNewRole) {
            this.accountService.newRole(this.roleEdit).subscribe((/**
             * @param {?} role
             * @return {?}
             */
            role => this.saveSuccessHelper(role)), (/**
             * @param {?} error
             * @return {?}
             */
            error => this.saveFailedHelper(error)));
        }
        else {
            this.accountService.updateRole(this.roleEdit).subscribe((/**
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
     * @param {?=} role
     * @return {?}
     */
    saveSuccessHelper(role) {
        if (role) {
            Object.assign(this.roleEdit, role);
        }
        this.isSaving = false;
        this.alertService.stopLoadingMessage();
        this.showValidationErrors = false;
        if (this.isNewRole) {
            this.alertService.showMessage('Success', `Role \"${this.roleEdit.name}\" was created successfully`, MessageSeverity.success);
        }
        else {
            this.alertService.showMessage('Success', `Changes to role \"${this.roleEdit.name}\" was saved successfully`, MessageSeverity.success);
        }
        this.roleEdit = new Role();
        this.resetForm();
        if (!this.isNewRole && this.accountService.currentUser.roles.some((/**
         * @param {?} r
         * @return {?}
         */
        r => r == this.editingRoleName))) {
            this.refreshLoggedInUser();
        }
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
        user => { }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.alertService.resetStickyMessage();
            this.alertService.showStickyMessage('Refresh failed', 'An error occured whilst refreshing logged in user information from the server', MessageSeverity.error, error);
        }));
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
     * @return {?}
     */
    cancel() {
        this.roleEdit = new Role();
        this.showValidationErrors = false;
        this.resetForm();
        this.alertService.showMessage('Cancelled', 'Operation cancelled by user', MessageSeverity.default);
        this.alertService.resetStickyMessage();
        if (this.changesCancelledCallback) {
            this.changesCancelledCallback();
        }
    }
    /**
     * @return {?}
     */
    selectAll() {
        this.allPermissions.forEach((/**
         * @param {?} p
         * @return {?}
         */
        p => this.selectedValues[p.value] = true));
    }
    /**
     * @return {?}
     */
    selectNone() {
        this.allPermissions.forEach((/**
         * @param {?} p
         * @return {?}
         */
        p => this.selectedValues[p.value] = false));
    }
    /**
     * @param {?} groupName
     * @return {?}
     */
    toggleGroup(groupName) {
        /** @type {?} */
        let firstMemberValue;
        this.allPermissions.forEach((/**
         * @param {?} p
         * @return {?}
         */
        p => {
            if (p.groupName != groupName) {
                return;
            }
            if (firstMemberValue == null) {
                firstMemberValue = this.selectedValues[p.value] == true;
            }
            this.selectedValues[p.value] = !firstMemberValue;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getSelectedPermissions() {
        return this.allPermissions.filter((/**
         * @param {?} p
         * @return {?}
         */
        p => this.selectedValues[p.value] == true));
    }
    /**
     * @param {?=} replace
     * @return {?}
     */
    resetForm(replace = false) {
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
     * @param {?} allPermissions
     * @return {?}
     */
    newRole(allPermissions) {
        this.isNewRole = true;
        this.showValidationErrors = true;
        this.editingRoleName = null;
        this.allPermissions = allPermissions;
        this.selectedValues = {};
        this.roleEdit = new Role();
        return this.roleEdit;
    }
    /**
     * @param {?} role
     * @param {?} allPermissions
     * @return {?}
     */
    editRole(role, allPermissions) {
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
            p => this.selectedValues[p.value] = true));
            this.roleEdit = new Role();
            Object.assign(this.roleEdit, role);
            return this.roleEdit;
        }
        else {
            return this.newRole(allPermissions);
        }
    }
    /**
     * @return {?}
     */
    get canManageRoles() {
        return this.accountService.userHasPermission(Permission.manageRolesPermission);
    }
}
RoleEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'role-editor',
                template: "<div>\n  <form *ngIf=\"formResetToggle\" name=\"roleEditorForm\" #f=\"ngForm\" novalidate\n        (ngSubmit)=\"f.form.valid ? save() :\n          (!roleName.valid && showErrorAlert('Role name is required', 'Please enter a role name (minimum of 2 and maximum of 200 characters)'));\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-5\">\n        <div class=\"form-group row has-feedback-icon\">\n          <label class=\"col-form-label col-md-3\" for=\"roleName\">{{'roles.editor.Name' | translate}}</label>\n          <div class=\"col-md-9\">\n            <input [disabled]=\"!canManageRoles\" type=\"text\" id=\"roleName\" name=\"roleName\" placeholder=\"Enter role name\" class=\"form-control\"\n                   [ngClass]=\"{'is-valid': f.submitted && roleName.valid, 'is-invalid' : f.submitted && !roleName.valid}\" [(ngModel)]=\"roleEdit.name\" #roleName=\"ngModel\" required minlength=\"2\" maxlength=\"200\" />\n            <i *ngIf=\"showValidationErrors && f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': roleName.valid, 'fa-times' : !roleName.valid}\" aria-hidden=\"true\"></i>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-7\">\n        <div class=\"form-group row\">\n          <label class=\"col-form-label col-md-3\" for=\"roleDescription\">{{'roles.editor.Description' | translate}}</label>\n          <div class=\"col-md-9\">\n            <input [disabled]=\"!canManageRoles\" type=\"text\" id=\"roleDescription\" name=\"roleDescription\" placeholder=\"Enter role description\" class=\"form-control\" [(ngModel)]=\"roleEdit.description\" />\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <span *ngIf=\"showValidationErrors && f.submitted && !roleName.valid\" class=\"invalid-feedback\">\n          {{'roles.editor.RoleNameRequired' | translate}}\n        </span>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <hr class=\"edit-separator-hr\" />\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-12 card card-body bg-light well-sm permissionsRow\">\n        <div class=\"row\">\n\n          <ng-template ngFor let-permissionGroup [ngForOf]=\"allPermissions | groupBy: 'groupName'\" let-i=\"index\">\n            <div class=\"form-group row col-sm-6 permissionsColumn\">\n              <label class=\"col-md-5 col-form-label group-name\" for=\"checkboxes\" (click)=\"toggleGroup(permissionGroup.key)\">{{permissionGroup.key}}</label>\n              <div class=\"col-md-7\">\n                <div class=\"form-check\" *ngFor=\"let permission of permissionGroup.value\">\n                  <input [disabled]=\"!canManageRoles\" name=\"checkboxes-{{permission.value}}\" id=\"checkboxes-{{permission.value}}\" type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"selectedValues[permission.value]\">\n                  <label class=\"form-check-label\" tooltip=\"{{permission.description}}\" for=\"checkboxes-{{permission.value}}\">{{permission.name}}</label>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"(i + 1) % 2 === 0\" class=\"clearfix\"></div>\n          </ng-template>\n\n        </div>\n      </div>\n\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <hr class=\"edit-last-separator-hr\" />\n      </div>\n    </div>\n\n\n    <div class=\"form-group row\">\n      <div class=\"col-sm-5\">\n        <div *ngIf=\"canManageRoles\" class=\"float-left\">\n          <a (click)=\"selectAll()\" href=\"javascript:;\" class=\"btn btn-link\">{{'roles.editor.SelectAll' | translate}}</a>|<a (click)=\"selectNone()\" href=\"javascript:;\" class=\"btn btn-link\">{{'roles.editor.SelectNone' | translate}}</a>\n        </div>\n      </div>\n\n      <div class=\"col-sm-7\">\n        <div ngPreserveWhitespaces class=\"float-right\">\n          <button *ngIf=\"!canManageRoles\" type=\"button\" (click)=\"cancel()\" class=\"btn btn-outline-secondary\">{{'roles.editor.Close' | translate}}</button>\n          <button *ngIf=\"canManageRoles\" type=\"button\" (click)=\"cancel()\" class=\"btn btn-danger\" [disabled]=\"isSaving\"><i class='fa fa-times'></i> {{'roles.editor.Cancel' | translate}}</button>\n          <button *ngIf=\"canManageRoles\" type=\"submit\" class=\"btn btn-primary\" [disabled]=\"isSaving\">\n            <i *ngIf=\"!isSaving\" class='fa fa-save'></i><i *ngIf=\"isSaving\" class='fa fa-circle-o-notch fa-spin'></i> {{isSaving ? ('roles.editor.Saving' | translate) : ('roles.editor.Save' | translate)}}\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n  </form>\n</div>\n",
                styles: [".separator-hr{margin:0 5px;border-top-style:dashed}.edit-separator-hr{margin:10px 5px;border-top-style:dashed}.last-separator-hr{margin-top:5px}.edit-last-separator-hr{margin-top:15px}.form-group{margin-top:0;margin-bottom:0}input.form-control{border-left-width:5px}.invalid-feedback{display:block}.group-name{padding-top:0;font-weight:500;padding-right:0}.permissionsColumn{margin-bottom:20px}.permissionsRow{margin:0 15px}.well-sm{padding:.5rem}@media (min-width:992px){.user-enabled{margin-left:40px}}"]
            }] }
];
/** @nocollapse */
RoleEditorComponent.ctorParameters = () => [
    { type: AlertService },
    { type: AccountService }
];
RoleEditorComponent.propDecorators = {
    form: [{ type: ViewChild, args: ['f', { static: false },] }]
};
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/roles-management/roles-management.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RolesManagementComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/todo-demo/todo-demo.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TodoDemoComponent {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/search-box/search-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchBoxComponent {
    constructor() {
        this.placeholder = 'Search...';
        this.searchChange = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onValueChange(value) {
        setTimeout((/**
         * @return {?}
         */
        () => this.searchChange.emit(value)));
    }
    /**
     * @return {?}
     */
    clear() {
        this.searchInput.nativeElement.value = '';
        this.onValueChange(this.searchInput.nativeElement.value);
    }
}
SearchBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'search-box',
                template: "<div class=\"icon-addon addon-sm\">\n    <label for=\"searchInput\" title=\"Search\"><i class=\"fa fa-search left-icon search-icon\"></i></label>\n    <input id=\"searchInput\" #searchInput type=\"search\" ngModel=\"\" (ngModelChange)=\"onValueChange($event)\" [attr.placeholder]=\"placeholder\" class=\"form-control left-icon right-icon\">\n    <a *ngIf=\"searchInput.value\" href=\"javascript:;\" title=\"Clear\" (click)=\"clear()\" class=\"fa fa-times-circle clear-input right-icon\"></a>\n</div>",
                styles: [".search-icon{pointer-events:none}"]
            }] }
];
SearchBoxComponent.propDecorators = {
    placeholder: [{ type: Input }],
    searchChange: [{ type: Output }],
    searchInput: [{ type: ViewChild, args: ['searchInput', { static: true },] }]
};
if (false) {
    /** @type {?} */
    SearchBoxComponent.prototype.placeholder;
    /** @type {?} */
    SearchBoxComponent.prototype.searchChange;
    /** @type {?} */
    SearchBoxComponent.prototype.searchInput;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/statistics-demo/statistics-demo.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
require('chart.js');
class StatisticsDemoComponent {
    /**
     * @param {?} alertService
     */
    constructor(alertService) {
        this.alertService = alertService;
        this.chartData = [
            { data: [65, 59, 80, 81, 56, 55], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27], label: 'Series C' }
        ];
        this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        this.chartOptions = {
            responsive: true,
            title: {
                display: false,
                fontSize: 16,
                text: 'Important Stuff'
            }
        };
        this.chartColors = [
            {
                // grey
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                // dark grey
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                // something else
                backgroundColor: 'rgba(128,128,128,0.2)',
                borderColor: 'rgba(128,128,128,1)',
                pointBackgroundColor: 'rgba(128,128,128,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(128,128,128,0.8)'
            }
        ];
        this.chartLegend = true;
        this.chartType = 'line';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.timerReference = setInterval((/**
         * @return {?}
         */
        () => this.randomize()), 5000);
        /** @type {?} */
        const initialWidth$ = of(window.innerWidth);
        /** @type {?} */
        const resizedWidth$ = fromEvent(window, 'resize').pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => (/** @type {?} */ (event.target.innerWidth)))));
        this.windowWidth$ = merge(initialWidth$, resizedWidth$).pipe(distinctUntilChanged());
        this.windowWidthSub = this.windowWidth$.subscribe((/**
         * @param {?} width
         * @return {?}
         */
        width => this.chartLegend = width < 600 ? false : true));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        clearInterval(this.timerReference);
        this.windowWidthSub.unsubscribe();
    }
    /**
     * @return {?}
     */
    randomize() {
        /** @type {?} */
        const _chartData = new Array(this.chartData.length);
        for (let i = 0; i < this.chartData.length; i++) {
            _chartData[i] = { data: new Array(this.chartData[i].data.length), label: this.chartData[i].label };
            for (let j = 0; j < this.chartData[i].data.length; j++) {
                _chartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.chartData = _chartData;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    changeChartType(type) {
        this.chartType = type;
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    showMessage(msg) {
        this.alertService.showMessage('Demo', msg, MessageSeverity.info);
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    showDialog(msg) {
        this.alertService.showDialog(msg, DialogType.prompt, (/**
         * @param {?} val
         * @return {?}
         */
        (val) => this.configure(true, val)), (/**
         * @return {?}
         */
        () => this.configure(false)));
    }
    /**
     * @param {?} response
     * @param {?=} value
     * @return {?}
     */
    configure(response, value) {
        if (response) {
            this.alertService.showStickyMessage('Simulating...', '', MessageSeverity.wait);
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.alertService.resetStickyMessage();
                this.alertService.showMessage('Demo', `Your settings was successfully configured to \"${value}\"`, MessageSeverity.success);
            }), 2000);
        }
        else {
            this.alertService.showMessage('Demo', 'Operation cancelled by user', MessageSeverity.default);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    chartClicked(e) {
        console.log(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    chartHovered(e) {
        console.log(e);
    }
}
StatisticsDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'statistics-demo',
                template: "<div class=\"row statistics-container\">\n  <div class=\"col-md-6\">\n    <div class=\"chart-container\">\n      <canvas baseChart width=\"600\" height=\"250\"\n              [datasets]=\"chartData\"\n              [labels]=\"chartLabels\"\n              [options]=\"chartOptions\"\n              [colors]=\"chartColors\"\n              [legend]=\"chartLegend\"\n              [chartType]=\"chartType\"\n              (chartHover)=\"chartHovered($event)\"\n              (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"d-none d-sm-block table-responsive\">\n      <table class=\"table table-sm\">\n        <thead>\n          <tr>\n            <th class=\"border-top-0\"></th>\n            <th class=\"border-top-0\" *ngFor=\"let label of chartLabels\">{{label}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let d of chartData\">\n            <th>{{d && d.label.split(' ').pop()}}</th>\n            <td *ngFor=\"let label of chartLabels; let j=index\">{{d && d.data[j]}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <button class=\"refresh-btn\" (click)=\"randomize();showMessage('Manual refresh!');\">REFSH</button>\n    <div class=\"chart-type-container\" dropdown>\n      <button id=\"chartType\" type=\"button\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-bar-chart\"></i></button>\n      <ul class=\"dropdown-menu\">\n        <li [class.active]=\"chartType == 'bar'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('bar')\" href=\"javascript:;\">Bar Chart</a>\n        </li>\n        <li [class.active]=\"chartType == 'pie'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('pie')\" href=\"javascript:;\">Pie Chart</a>\n        </li>\n        <li [class.active]=\"chartType == 'doughnut'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('doughnut')\" href=\"javascript:;\">Doughnut Chart</a>\n        </li>\n        <li [class.active]=\"chartType == 'polarArea'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('polarArea')\" href=\"javascript:;\">Polar Area Chart</a>\n        </li>\n        <li [class.active]=\"chartType == 'radar'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('radar')\" href=\"javascript:;\">Radar Chart</a>\n        </li>\n        <li class=\"dropdown-divider\"></li>\n        <li [class.active]=\"chartType == 'line'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('line')\" href=\"javascript:;\">Line Chart</a>\n        </li>\n      </ul>\n    </div>\n    <button (click)=\"showMessage('You\\'ve clicked on the menu')\"><i class=\"fa fa-bars\"></i></button>\n    <button (click)=\"showDialog('Enter some value to do serious configuration...')\"><i class=\"fa fa-cogs\"></i></button>\n  </div>\n</div>\n",
                styles: [".statistics-container{font-size:.875rem}.chart-container{display:block}.refresh-btn{margin-right:10px}.chart-type-container{display:inline-block}.chart-type-container .active{background-color:#e8e8e8}"]
            }] }
];
/** @nocollapse */
StatisticsDemoComponent.ctorParameters = () => [
    { type: AlertService }
];
if (false) {
    /** @type {?} */
    StatisticsDemoComponent.prototype.chartData;
    /** @type {?} */
    StatisticsDemoComponent.prototype.chartLabels;
    /** @type {?} */
    StatisticsDemoComponent.prototype.chartOptions;
    /** @type {?} */
    StatisticsDemoComponent.prototype.chartColors;
    /** @type {?} */
    StatisticsDemoComponent.prototype.chartLegend;
    /** @type {?} */
    StatisticsDemoComponent.prototype.chartType;
    /** @type {?} */
    StatisticsDemoComponent.prototype.timerReference;
    /** @type {?} */
    StatisticsDemoComponent.prototype.windowWidth$;
    /** @type {?} */
    StatisticsDemoComponent.prototype.windowWidthSub;
    /**
     * @type {?}
     * @private
     */
    StatisticsDemoComponent.prototype.alertService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/bootstrap-tab.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function eventArg() { }
if (false) {
    /** @type {?} */
    eventArg.prototype.type;
    /** @type {?} */
    eventArg.prototype.target;
    /** @type {?} */
    eventArg.prototype.relatedTarget;
}
class BootstrapTabDirective {
    /**
     * @param {?} el
     * @param {?} zone
     */
    constructor(el, zone) {
        this.el = el;
        this.zone = zone;
        this.showBSTab = new EventEmitter();
        this.hideBSTab = new EventEmitter();
        this.tabShownSubscription = fromEvent($(this.el.nativeElement), 'show.bs.tab')
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            this.runInZone((/**
             * @return {?}
             */
            () => this.showBSTab.emit({ type: e.type, target: e.target, relatedTarget: e.relatedTarget })));
        }));
        this.tabHiddenSubscription = fromEvent($(this.el.nativeElement), 'hidden.bs.tab')
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            this.runInZone((/**
             * @return {?}
             */
            () => this.hideBSTab.emit({ type: e.type, target: e.target, relatedTarget: e.relatedTarget })));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.tabShownSubscription.unsubscribe();
        this.tabHiddenSubscription.unsubscribe();
    }
    /**
     * @private
     * @param {?} delegate
     * @return {?}
     */
    runInZone(delegate) {
        this.zone.run((/**
         * @return {?}
         */
        () => {
            delegate();
        }));
    }
    /**
     * @param {?} selector
     * @return {?}
     */
    show(selector) {
        $(selector).tab('show');
    }
}
BootstrapTabDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bootstrapTab]',
                exportAs: 'bootstrap-tab'
            },] }
];
/** @nocollapse */
BootstrapTabDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
BootstrapTabDirective.propDecorators = {
    showBSTab: [{ type: Output }],
    hideBSTab: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    BootstrapTabDirective.prototype.showBSTab;
    /** @type {?} */
    BootstrapTabDirective.prototype.hideBSTab;
    /**
     * @type {?}
     * @private
     */
    BootstrapTabDirective.prototype.tabShownSubscription;
    /**
     * @type {?}
     * @private
     */
    BootstrapTabDirective.prototype.tabHiddenSubscription;
    /**
     * @type {?}
     * @private
     */
    BootstrapTabDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    BootstrapTabDirective.prototype.zone;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pages/settings/settings.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SettingsComponent {
    /**
     * @param {?} router
     * @param {?} route
     * @param {?} accountService
     */
    constructor(router, route, accountService) {
        this.router = router;
        this.route = route;
        this.accountService = accountService;
        this.isProfileActivated = true;
        this.isPreferencesActivated = false;
        this.isUsersActivated = false;
        this.isRolesActivated = false;
        this.profileTab = 'profile';
        this.preferencesTab = 'preferences';
        this.usersTab = 'users';
        this.rolesTab = 'roles';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.fragmentSubscription = this.route.fragment.subscribe((/**
         * @param {?} anchor
         * @return {?}
         */
        anchor => this.showContent(anchor)));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.fragmentSubscription.unsubscribe();
    }
    /**
     * @param {?} anchor
     * @return {?}
     */
    showContent(anchor) {
        if (anchor) {
            anchor = anchor.toLowerCase();
        }
        if ((this.isFragmentEquals(anchor, this.usersTab) && !this.canViewUsers) ||
            (this.isFragmentEquals(anchor, this.rolesTab) && !this.canViewRoles)) {
            return;
        }
        this.tab.show(`#${anchor || this.profileTab}Tab`);
    }
    /**
     * @param {?} fragment1
     * @param {?} fragment2
     * @return {?}
     */
    isFragmentEquals(fragment1, fragment2) {
        if (fragment1 == null) {
            fragment1 = '';
        }
        if (fragment2 == null) {
            fragment2 = '';
        }
        return fragment1.toLowerCase() == fragment2.toLowerCase();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onShowTab(event) {
        /** @type {?} */
        const activeTab = event.target.hash.split('#', 2).pop();
        this.isProfileActivated = activeTab == this.profileTab;
        this.isPreferencesActivated = activeTab == this.preferencesTab;
        this.isUsersActivated = activeTab == this.usersTab;
        this.isRolesActivated = activeTab == this.rolesTab;
        this.router.navigate([], { fragment: activeTab });
    }
    /**
     * @return {?}
     */
    get canViewUsers() {
        return this.accountService.userHasPermission(Permission.viewUsersPermission);
    }
    /**
     * @return {?}
     */
    get canViewRoles() {
        return this.accountService.userHasPermission(Permission.viewRolesPermission);
    }
}
SettingsComponent.decorators = [
    { type: Component, args: [{
                selector: 'settings',
                template: "<div class=\"container settings-page\">\n    <header class=\"pageHeader\">\n        <h3><i class=\"fa fa-cog fa-lg page-caption\" aria-hidden=\"true\"></i> {{'pageHeader.Settings' | translate}}</h3>\n    </header>\n\n    <div [@fadeInOut]>\n        <div class=\"d-sm-flex flex-row\">\n            <ul bootstrapTab #tab=\"bootstrap-tab\" (showBSTab)=\"onShowTab($event)\" class=\"nav nav-tabs nav-tabs--vertical nav-tabs--left\" role=\"navigation\">\n                <li class=\"nav-item\">\n                    <a id=\"profileTab\" [routerLink]=\"[]\" fragment=\"profile\" data-target=\"#profile\" href=\"#profile\" class=\"nav-link active\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"profile\">\n                        <i class=\"fa fa-user-circle-o fa-fw\" aria-hidden=\"true\"></i> {{'settings.tab.Profile' | translate}}\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a id=\"preferencesTab\" [routerLink]=\"[]\" fragment=\"preferences\" data-target=\"#preferences\" href=\"#preferences\" class=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"preferences\">\n                        <i class=\"fa fa-sliders fa-fw\" aria-hidden=\"true\"></i> {{'settings.tab.Preferences' | translate}}\n                    </a>\n                </li>\n            </ul>\n            <div class=\"tab-content w-100\">\n                <div class=\"tab-pane show active\" id=\"profile\" role=\"tabpanel\">\n                    <h4>{{'settings.header.UserProfile' | translate}}</h4>\n                    <hr class=\"separator-hr\" />\n                    <div [@fadeInOut] *ngIf=\"isProfileActivated\" class=\"content-container pl-lg-2\">\n                        <user-info></user-info>\n                    </div>\n\n                </div>\n                <div class=\"tab-pane\" id=\"preferences\" role=\"tabpanel\">\n                    <h4>{{'settings.header.UserPreferences' | translate}}</h4>\n                    <hr class=\"separator-hr\" />\n                    <div [@fadeInOut] *ngIf=\"isPreferencesActivated\" class=\"content-container pl-lg-2\">\n                        <user-preferences></user-preferences>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n",
                animations: [fadeInOut],
                styles: [".separator-hr{margin-top:0;margin-bottom:10px}[hidden]{display:none}"]
            }] }
];
/** @nocollapse */
SettingsComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: AccountService }
];
SettingsComponent.propDecorators = {
    tab: [{ type: ViewChild, args: ['tab', { static: true },] }]
};
if (false) {
    /** @type {?} */
    SettingsComponent.prototype.isProfileActivated;
    /** @type {?} */
    SettingsComponent.prototype.isPreferencesActivated;
    /** @type {?} */
    SettingsComponent.prototype.isUsersActivated;
    /** @type {?} */
    SettingsComponent.prototype.isRolesActivated;
    /** @type {?} */
    SettingsComponent.prototype.fragmentSubscription;
    /** @type {?} */
    SettingsComponent.prototype.profileTab;
    /** @type {?} */
    SettingsComponent.prototype.preferencesTab;
    /** @type {?} */
    SettingsComponent.prototype.usersTab;
    /** @type {?} */
    SettingsComponent.prototype.rolesTab;
    /** @type {?} */
    SettingsComponent.prototype.tab;
    /**
     * @type {?}
     * @private
     */
    SettingsComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    SettingsComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    SettingsComponent.prototype.accountService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pages/not-found/not-found.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotFoundComponent {
}
NotFoundComponent.decorators = [
    { type: Component, args: [{
                selector: 'not-found',
                template: "<header class=\"pageHeader\">\n    <h3><i class=\"fa fa-exclamation-circle fa-lg page-caption\" aria-hidden=\"true\"></i> {{'pageHeader.NotFound' | translate}}</h3>\n</header>\n\n<div [@fadeInOut] class=\"d-flex h-75\">\n    <div class=\"m-auto\">\n        <div class=\"icon-container\"><i class='fa fa-exclamation-circle'></i> {{'notFound.404' | translate}}</div>\n        <div class=\"text-muted error-description\">{{'notFound.pageNotFound' | translate}}</div>\n        <div><a class=\"btn btn-primary\" routerLink=\"/\"><i class='fa fa-home'></i> {{'notFound.backToHome' | translate}}</a></div>\n    </div>\n</div>\n",
                animations: [fadeInOut],
                styles: [".icon-container{font-size:5rem}.error-description{font-size:1.5rem;padding-bottom:10px}"]
            }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pages/login/login.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginComponent {
    /**
     * @param {?} alertService
     * @param {?} authService
     * @param {?} configurations
     */
    constructor(alertService, authService, configurations) {
        this.alertService = alertService;
        this.authService = authService;
        this.configurations = configurations;
        this.userLogin = new UserLogin();
        this.isLoading = false;
        this.formResetToggle = true;
        this.isModal = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.userLogin.rememberMe = this.authService.rememberMe;
        if (this.getShouldRedirect()) {
            this.authService.redirectLoginUser();
        }
        else {
            this.loginStatusSubscription = this.authService.getLoginStatusEvent().subscribe((/**
             * @param {?} isLoggedIn
             * @return {?}
             */
            isLoggedIn => {
                if (this.getShouldRedirect()) {
                    this.authService.redirectLoginUser();
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.loginStatusSubscription) {
            this.loginStatusSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    getShouldRedirect() {
        return !this.isModal && this.authService.isLoggedIn && !this.authService.isSessionExpired;
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
    closeModal() {
        if (this.modalClosedCallback) {
            this.modalClosedCallback();
        }
    }
    /**
     * @return {?}
     */
    login() {
        this.isLoading = true;
        this.alertService.startLoadingMessage('', 'Attempting login...');
        this.authService.loginWithPassword(this.userLogin.userName, this.userLogin.password, this.userLogin.rememberMe)
            .subscribe((/**
         * @param {?} user
         * @return {?}
         */
        user => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.alertService.stopLoadingMessage();
                this.isLoading = false;
                this.reset();
                if (!this.isModal) {
                    this.alertService.showMessage('Login', `Welcome ${user.userName}!`, MessageSeverity.success);
                }
                else {
                    this.alertService.showMessage('Login', `Session for ${user.userName} restored!`, MessageSeverity.success);
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.alertService.showStickyMessage('Session Restored', 'Please try your last operation again', MessageSeverity.default);
                    }), 500);
                    this.closeModal();
                }
            }), 500);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.alertService.stopLoadingMessage();
            if (Utilities.checkNoNetwork(error)) {
                this.alertService.showStickyMessage(Utilities.noNetworkMessageCaption, Utilities.noNetworkMessageDetail, MessageSeverity.error, error);
                this.offerAlternateHost();
            }
            else {
                /** @type {?} */
                const errorMessage = Utilities.getHttpResponseMessage(error);
                if (errorMessage) {
                    this.alertService.showStickyMessage('Unable to login', this.mapLoginErrorMessage(errorMessage), MessageSeverity.error, error);
                }
                else {
                    this.alertService.showStickyMessage('Unable to login', 'An error occured whilst logging in, please try again later.\nError: ' + Utilities.getResponseBody(error), MessageSeverity.error, error);
                }
            }
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.isLoading = false;
            }), 500);
        }));
    }
    /**
     * @return {?}
     */
    offerAlternateHost() {
        if (Utilities.checkIsLocalHost(location.origin) && Utilities.checkIsLocalHost(this.configurations.baseUrl)) {
            this.alertService.showDialog('Dear Developer!\nIt appears your backend Web API service is not running...\n' +
                'Would you want to temporarily switch to the online Demo API below?(Or specify another)', DialogType.prompt, (/**
             * @param {?} value
             * @return {?}
             */
            (value) => {
                this.configurations.baseUrl = value;
                this.configurations.tokenUrl = value;
                this.alertService.showStickyMessage('API Changed!', 'The target Web API has been changed to: ' + value, MessageSeverity.warn);
            }), null, null, null, this.configurations.fallbackBaseUrl);
        }
    }
    /**
     * @param {?} error
     * @return {?}
     */
    mapLoginErrorMessage(error) {
        if (error == 'invalid_username_or_password') {
            return 'Invalid username or password';
        }
        if (error == 'invalid_grant') {
            return 'This account has been disabled';
        }
        return error;
    }
    /**
     * @return {?}
     */
    reset() {
        this.formResetToggle = false;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.formResetToggle = true;
        }));
    }
}
LoginComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-login',
                template: "<div class=\"d-flex h-90\">\n  <div class=\"login-container m-auto\">\n    <div class=\"card boxshadow\">\n      <div class=\"card-header bg-primary dark text-white clearfix\">\n        <i class=\"fa fa-lock\" aria-hidden=\"true\"></i> Login\n        <button *ngIf=\"isModal\" type=\"button\" class=\"close float-right text-light\" aria-label=\"Close\" (click)=\"closeModal()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"col-md-8 offset-md-2\">\n          <form *ngIf=\"formResetToggle\" class=\"login\" name=\"loginForm\" #f=\"ngForm\" novalidate\n                (ngSubmit)=\"f.form.valid ? login() :\n                          (!username.valid && showErrorAlert('Username is required', 'Please enter a valid username'));\n                          (!password.valid && showErrorAlert('Password is required', 'Please enter a valid password'))\">\n            <div class=\"form-group row has-feedback-icon\">\n              <label class=\"col-form-label col-md-3\" for=\"login-username\">Username:</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" id=\"login-username\" name=\"username\" placeholder=\"Enter username\" autocomplete=\"username\" class=\"form-control\" [ngClass]=\"{'is-valid': f.submitted && username.valid, 'is-invalid' : f.submitted && !username.valid}\"\n                       [(ngModel)]=\"userLogin.userName\" #username=\"ngModel\" required />\n                <i *ngIf=\"f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': username.valid, 'fa-times' : !username.valid}\" aria-hidden=\"true\"></i>\n                <span class=\"invalid-feedback\" *ngIf=\"f.submitted && !username.valid\">\n                  Username is required\n                </span>\n              </div>\n            </div>\n            <div class=\"form-group row has-feedback-icon\">\n              <label class=\"col-form-label col-md-3\" for=\"login-password\">Password:</label>\n              <div class=\"col-md-9\">\n                <input type=\"password\" id=\"login-password\" name=\"password\" placeholder=\"Enter password\" autocomplete=\"current-password\" class=\"form-control\" [ngClass]=\"{'is-valid': f.submitted && password.valid, 'is-invalid' : f.submitted && !password.valid}\"\n                       [(ngModel)]=\"userLogin.password\" #password=\"ngModel\" required />\n                <i *ngIf=\"f.submitted\" class=\"fa form-control-feedback\" [ngClass]=\"{'fa-check': password.valid, 'fa-times' : !password.valid}\" aria-hidden=\"true\"></i>\n                <span class=\"invalid-feedback\" *ngIf=\"f.submitted && !password.valid\">\n                  Password is required\n                </span>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"offset-md-3 col-md-9\">\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" class=\"form-check-input\" id=\"login-rememberme\" name=\"rememberMe\" [(ngModel)]=\"userLogin.rememberMe\">\n                  <label class=\"form-check-label\" for=\"login-rememberme\">Remember me</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"offset-md-3 col-md-9\">\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"isLoading\">\n                  <i *ngIf=\"isLoading\" class='fa fa-circle-o-notch fa-spin'></i> {{isLoading ? 'Logging in...' : 'Login'}}\n                </button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".boxshadow{position:relative;box-shadow:1px 2px 4px rgba(0,0,0,.5);padding:10px;background:#fff}.boxshadow::after{content:\"\";position:absolute;z-index:-1;box-shadow:0 15px 20px rgba(0,0,0,.3);width:70%;left:15%;height:100px;bottom:0}.cardshadow{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.last-control-group{margin-bottom:-.75rem}.h-90{height:90%}@media (min-width:768px){.login-container{width:700px}}@media (min-width:1200px){.login-container{width:730px}}"]
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: AlertService },
    { type: AuthService },
    { type: ConfigurationService }
];
LoginComponent.propDecorators = {
    isModal: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LoginComponent.prototype.userLogin;
    /** @type {?} */
    LoginComponent.prototype.isLoading;
    /** @type {?} */
    LoginComponent.prototype.formResetToggle;
    /** @type {?} */
    LoginComponent.prototype.modalClosedCallback;
    /** @type {?} */
    LoginComponent.prototype.loginStatusSubscription;
    /** @type {?} */
    LoginComponent.prototype.isModal;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.alertService;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    LoginComponent.prototype.configurations;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/dependency.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DependencyModule {
}
DependencyModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [],
                exports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    RouterModule,
                    // Bootstrap, Note that we have imported them in the
                    // core modules (and they are only imported once)
                    BsDropdownModule,
                    TabsModule,
                    PaginationModule,
                    ModalModule,
                    AccordionModule,
                    PopoverModule,
                    TooltipModule,
                    CarouselModule,
                    AlertModule,
                    TranslateModule,
                    NgxDatatableModule,
                    ChartsModule
                ],
                providers: [],
                entryComponents: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/equal-validator.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EqualValidator {
    /**
     * @param {?} validateEqual
     * @param {?} reverse
     */
    constructor(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        /** @type {?} */
        const other = c.root.get(this.validateEqual);
        if (!other) {
            return null;
        }
        return this.reverse === 'true' ? this.validateReverse(c, other) : this.validateNoReverse(c, other);
    }
    /**
     * @private
     * @param {?} c
     * @param {?} other
     * @return {?}
     */
    validateNoReverse(c, other) {
        return other.value === c.value ? null : { validateEqual: true };
    }
    /**
     * @private
     * @param {?} c
     * @param {?} other
     * @return {?}
     */
    validateReverse(c, other) {
        if (c.value === other.value) {
            if (other.errors) {
                delete other.errors.validateEqual;
                if (Object.keys(other.errors).length == 0) {
                    other.setErrors(null);
                }
            }
        }
        else {
            other.setErrors({ validateEqual: true });
        }
        return null;
    }
}
EqualValidator.decorators = [
    { type: Directive, args: [{
                selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => EqualValidator)), multi: true }
                ]
            },] }
];
/** @nocollapse */
EqualValidator.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['validateEqual',] }] },
    { type: String, decorators: [{ type: Attribute, args: ['reverse',] }] }
];
if (false) {
    /** @type {?} */
    EqualValidator.prototype.validateEqual;
    /** @type {?} */
    EqualValidator.prototype.reverse;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/last-element.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LastElementDirective {
    constructor() {
        this.lastFunction = new EventEmitter();
    }
    /**
     * @param {?} isLastElement
     * @return {?}
     */
    set lastElement(isLastElement) {
        if (isLastElement) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.lastFunction.emit();
            }));
        }
    }
}
LastElementDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lastElement]'
            },] }
];
LastElementDirective.propDecorators = {
    lastElement: [{ type: Input }],
    lastFunction: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    LastElementDirective.prototype.lastFunction;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/autofocus.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AutofocusDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        setTimeout((/**
         * @return {?}
         */
        () => this.elementRef.nativeElement.focus()), 500);
    }
}
AutofocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[autofocus]'
            },] }
];
/** @nocollapse */
AutofocusDirective.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /** @type {?} */
    AutofocusDirective.prototype.elementRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/bootstrap-toggle.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BootstrapToggleDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.ngModelChange = new EventEmitter();
        this.checkedSubscription = fromEvent($(this.el.nativeElement), 'change')
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => this.ngModelChange.emit(e.target.checked)));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ngModel(value) {
        this.toggle(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initialize();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy();
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    initialize(options) {
        $(this.el.nativeElement).bootstrapToggle(options);
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.checkedSubscription) {
            this.checkedSubscription.unsubscribe();
        }
        $(this.el.nativeElement).bootstrapToggle('destroy');
    }
    /**
     * @return {?}
     */
    toggleOn() {
        $(this.el.nativeElement).bootstrapToggle('on');
    }
    /**
     * @return {?}
     */
    toggleOff() {
        $(this.el.nativeElement).bootstrapToggle('off');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    toggle(value) {
        if (value == null) {
            $(this.el.nativeElement).bootstrapToggle('toggle');
        }
        else {
            $(this.el.nativeElement).prop('checked', value).change();
        }
    }
    /**
     * @return {?}
     */
    enable() {
        $(this.el.nativeElement).bootstrapToggle('enable');
    }
    /**
     * @return {?}
     */
    disable() {
        $(this.el.nativeElement).bootstrapToggle('disable');
    }
}
BootstrapToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bootstrapToggle]',
                exportAs: 'bootstrap-toggle'
            },] }
];
/** @nocollapse */
BootstrapToggleDirective.ctorParameters = () => [
    { type: ElementRef }
];
BootstrapToggleDirective.propDecorators = {
    ngModel: [{ type: Input }],
    ngModelChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    BootstrapToggleDirective.prototype.checkedSubscription;
    /** @type {?} */
    BootstrapToggleDirective.prototype.ngModelChange;
    /**
     * @type {?}
     * @private
     */
    BootstrapToggleDirective.prototype.el;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/bootstrap-datepicker.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BootstrapDatepickerDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this._isShown = false;
        this.options = {};
        this.ngModelChange = new EventEmitter();
        this.changedSubscription = fromEvent($(this.el.nativeElement), 'change').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => setTimeout((/**
         * @return {?}
         */
        () => this.ngModelChange.emit(e.target.value)))));
        this.shownSubscription = fromEvent($(this.el.nativeElement), 'show').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => this._isShown = true));
        this.hiddenSubscription = fromEvent($(this.el.nativeElement), 'hide').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => this._isShown = false));
    }
    /**
     * @return {?}
     */
    get isShown() {
        return this._isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ngModel(value) {
        this.tryUpdate(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initialize(this.options);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy();
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    initialize(options) {
        $(this.el.nativeElement).datepicker(options);
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.changedSubscription) {
            this.changedSubscription.unsubscribe();
            this.shownSubscription.unsubscribe();
            this.hiddenSubscription.unsubscribe();
        }
        $(this.el.nativeElement).datepicker('destroy');
    }
    /**
     * @return {?}
     */
    show() {
        $(this.el.nativeElement).datepicker('show');
    }
    /**
     * @return {?}
     */
    hide() {
        $(this.el.nativeElement).datepicker('hide');
    }
    /**
     * @return {?}
     */
    toggle() {
        this.isShown ? this.hide() : this.show();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    tryUpdate(value) {
        clearTimeout(this.updateTimeout);
        if (!$(this.el.nativeElement).is(':focus')) {
            this.update(value);
        }
        else {
            this.updateTimeout = setTimeout((/**
             * @return {?}
             */
            () => {
                this.updateTimeout = null;
                this.tryUpdate(value);
            }), 100);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    update(value) {
        setTimeout((/**
         * @return {?}
         */
        () => $(this.el.nativeElement).datepicker('update', value)));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDate(value) {
        setTimeout((/**
         * @return {?}
         */
        () => $(this.el.nativeElement).datepicker('setDate', value)));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setUTCDate(value) {
        setTimeout((/**
         * @return {?}
         */
        () => $(this.el.nativeElement).datepicker('setUTCDate', value)));
    }
    /**
     * @return {?}
     */
    clearDates() {
        setTimeout((/**
         * @return {?}
         */
        () => $(this.el.nativeElement).datepicker('clearDates')));
    }
    /**
     * @return {?}
     */
    getDate() {
        $(this.el.nativeElement).datepicker('getDate');
    }
    /**
     * @return {?}
     */
    getUTCDate() {
        $(this.el.nativeElement).datepicker('getUTCDate');
    }
}
BootstrapDatepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bootstrapDatepicker]',
                exportAs: 'bootstrap-datepicker'
            },] }
];
/** @nocollapse */
BootstrapDatepickerDirective.ctorParameters = () => [
    { type: ElementRef }
];
BootstrapDatepickerDirective.propDecorators = {
    options: [{ type: Input }],
    ngModel: [{ type: Input }],
    ngModelChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    BootstrapDatepickerDirective.prototype._isShown;
    /**
     * @type {?}
     * @private
     */
    BootstrapDatepickerDirective.prototype.updateTimeout;
    /**
     * @type {?}
     * @private
     */
    BootstrapDatepickerDirective.prototype.changedSubscription;
    /**
     * @type {?}
     * @private
     */
    BootstrapDatepickerDirective.prototype.shownSubscription;
    /**
     * @type {?}
     * @private
     */
    BootstrapDatepickerDirective.prototype.hiddenSubscription;
    /** @type {?} */
    BootstrapDatepickerDirective.prototype.options;
    /** @type {?} */
    BootstrapDatepickerDirective.prototype.ngModelChange;
    /**
     * @type {?}
     * @private
     */
    BootstrapDatepickerDirective.prototype.el;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-appkit-starter-alpha.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxAppkitStarterAlphaModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('NgxAppkitStarterAlphaModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NgxAppkitStarterAlphaModule,
            providers: []
        };
    }
}
NgxAppkitStarterAlphaModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    EqualValidator,
                    LastElementDirective,
                    AutofocusDirective,
                    BootstrapTabDirective,
                    BootstrapToggleDirective,
                    BootstrapSelectDirective,
                    BootstrapDatepickerDirective,
                    GroupByPipe,
                    UsersManagementComponent,
                    UserInfoComponent,
                    UserPreferencesComponent,
                    RolesManagementComponent,
                    RoleEditorComponent,
                    NotificationsViewerComponent,
                    SearchBoxComponent,
                    StatisticsDemoComponent,
                    TodoDemoComponent,
                    LoginComponent,
                    SettingsComponent,
                    NotFoundComponent
                ],
                imports: [
                    DependencyModule
                ],
                exports: [
                    EqualValidator,
                    LastElementDirective,
                    AutofocusDirective,
                    BootstrapTabDirective,
                    BootstrapToggleDirective,
                    BootstrapSelectDirective,
                    BootstrapDatepickerDirective,
                    GroupByPipe,
                    UsersManagementComponent,
                    UserInfoComponent,
                    UserPreferencesComponent,
                    RolesManagementComponent,
                    RoleEditorComponent,
                    NotificationsViewerComponent,
                    SearchBoxComponent,
                    StatisticsDemoComponent,
                    TodoDemoComponent,
                    LoginComponent,
                    SettingsComponent,
                    NotFoundComponent
                ],
                providers: [
                    // Services
                    AppTitleService,
                    NotificationService,
                    NotificationEndpoint,
                    AccountService,
                    AccountEndpoint,
                    AlertServiceProvider,
                    ThemeManagerProvider,
                    ConfigurationServiceProvider,
                    LocalStoreManagerProvider,
                    TranslationServiceProvider,
                    { provide: AlertServiceAbstractProvider, useClass: AlertServiceProvider },
                    { provide: ThemeManagerAbstractProvider, useClass: ThemeManagerProvider },
                    { provide: ConfigurationServiceAbstractProvider, useClass: ConfigurationServiceProvider },
                    { provide: LocalStoreManagerServiceAbstractProvider, useClass: LocalStoreManagerProvider },
                    { provide: TranslationServiceAbstractProvider, useClass: TranslationServiceProvider }
                ],
                entryComponents: [
                    LoginComponent
                ]
            },] }
];
/** @nocollapse */
NgxAppkitStarterAlphaModule.ctorParameters = () => [
    { type: NgxAppkitStarterAlphaModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: polpware-ngx-appkit-starter-alpha.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AccountEndpoint, AccountService, AlertServiceProvider, AppTitleService, ConfigurationServiceProvider, DependencyModule, Gender, GroupByPipe, LocalStoreManagerProvider, LoginComponent, NgxAppkitStarterAlphaModule, NotFoundComponent, Notification, NotificationEndpoint, NotificationService, NotificationsViewerComponent, Role, RoleEditorComponent, RolesManagementComponent, SearchBoxComponent, SettingsComponent, StatisticsDemoComponent, ThemeManagerProvider, TodoDemoComponent, TranslationServiceProvider, UserEdit, UserInfoComponent, UserLogin, UserPreferencesComponent, UsersManagementComponent, fadeInOut, flyInOut, EqualValidator as ɵa, LastElementDirective as ɵb, AutofocusDirective as ɵc, BootstrapTabDirective as ɵd, BootstrapToggleDirective as ɵe, BootstrapSelectDirective as ɵf, BootstrapDatepickerDirective as ɵg };
//# sourceMappingURL=polpware-ngx-appkit-starter-alpha.js.map
