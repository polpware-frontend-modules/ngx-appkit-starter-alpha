import { Utilities, ConfigurationServiceAbstractProvider, ThemeManagerAbstractProvider, TranslationServiceAbstractProvider, AlertServiceAbstractProvider, LocalStoreManagerServiceAbstractProvider, MessageSeverity, DialogType } from '@polpware/ngx-appkit-contracts-alpha';
import { User, EndpointBase, AuthService, Permission } from '@polpware/ngx-oauth2';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefinePipe, Pipe, ɵɵdirectiveInject, ElementRef, ɵɵdefineDirective, Directive, EventEmitter, Input, Output, NgZone, ɵɵinjectAttribute, ɵɵProvidersFeature, forwardRef, Attribute, ɵɵelement, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵclassProp, ɵɵattribute, ɵɵadvance, ɵɵtextInterpolate1, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵpipe, ɵɵtemplate, ɵɵpropertyInterpolate, ɵɵpipeBind1, ɵɵproperty, ɵɵdefineComponent, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵtemplateRefExtractor, Component, ViewChild, ɵɵreference, ɵɵtextInterpolate, ɵɵattributeInterpolate1, ɵɵpureFunction2, ɵɵpropertyInterpolate1, ɵɵattributeInterpolate2, ɵɵviewQuery, ɵɵpipeBind2, ɵɵpureFunction0, ɵɵattributeInterpolate4, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, Optional, SkipSelf } from '@angular/core';
import { ConfigurationService, ThemeManager, AppTranslationService, AlertService, LocalStoreManager } from '@polpware/ngx-appkit-services-alpha';
import { Subject, forkJoin, of, interval, fromEvent, merge } from 'rxjs';
import { catchError, mergeMap, tap, map, startWith, flatMap, filter, distinctUntilChanged } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { NavigationEnd, Router, ActivatedRoute, RouterLinkWithHref, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NG_VALIDATORS, DefaultValueAccessor, NgControlStatus, NgModel, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, SelectMultipleControlValueAccessor, NgSelectOption, ɵangular_packages_forms_forms_x, CheckboxControlValueAccessor, SelectControlValueAccessor, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatatableComponent, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TooltipDirective, TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgIf, NgClass, NgForOf, CommonModule } from '@angular/common';
import { TranslatePipe, TranslateModule } from '@ngx-translate/core';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import chart from 'chart.js';
import { BaseChartDirective, ChartsModule } from 'ng2-charts';
import { BsDropdownDirective, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AlertModule } from 'ngx-bootstrap/alert';

// =============================
class Notification {
    static Create(data) {
        const n = new Notification();
        Object.assign(n, data);
        if (n.date) {
            n.date = Utilities.parseDate(n.date);
        }
        return n;
    }
}

// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
class Role {
    constructor(name, description, permissions) {
        this.name = name;
        this.description = description;
        this.permissions = permissions;
    }
}

// =============================
class UserEdit extends User {
    constructor(currentPassword, newPassword, confirmPassword) {
        super();
        this.currentPassword = currentPassword;
        this.newPassword = newPassword;
        this.confirmPassword = confirmPassword;
    }
}

// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
var Gender;
(function (Gender) {
    Gender[Gender["None"] = 0] = "None";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Male"] = 2] = "Male";
})(Gender || (Gender = {}));

// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
class UserLogin {
    constructor(userName, password, rememberMe) {
        this.userName = userName;
        this.password = password;
        this.rememberMe = rememberMe;
    }
}

// =============================
const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [style({ opacity: 0 }), animate('0.4s ease-in', style({ opacity: 1 }))]),
    transition(':leave', [animate('0.4s 10ms ease-out', style({ opacity: 0 }))])
]);
function flyInOut(duration = 0.2) {
    return trigger('flyInOut', [
        state('in', style({ opacity: 1, transform: 'translateX(0)' })),
        transition('void => *', [style({ opacity: 0, transform: 'translateX(-100%)' }), animate(`${duration}s ease-in`)]),
        transition('* => void', [animate(`${duration}s 10ms ease-out`, style({ opacity: 0, transform: 'translateX(100%)' }))])
    ]);
}

class ConfigurationServiceProvider extends ConfigurationServiceAbstractProvider {
    constructor(impl) {
        super();
        this.impl = impl;
    }
    get() {
        return this.impl;
    }
}
/** @nocollapse */ ConfigurationServiceProvider.ɵfac = function ConfigurationServiceProvider_Factory(t) { return new (t || ConfigurationServiceProvider)(ɵɵinject(ConfigurationService)); };
/** @nocollapse */ ConfigurationServiceProvider.ɵprov = ɵɵdefineInjectable({ token: ConfigurationServiceProvider, factory: ConfigurationServiceProvider.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ConfigurationServiceProvider, [{
        type: Injectable
    }], function () { return [{ type: ConfigurationService }]; }, null); })();

class ThemeManagerProvider extends ThemeManagerAbstractProvider {
    constructor(impl) {
        super();
        this.impl = impl;
    }
    get() {
        return this.impl;
    }
}
/** @nocollapse */ ThemeManagerProvider.ɵfac = function ThemeManagerProvider_Factory(t) { return new (t || ThemeManagerProvider)(ɵɵinject(ThemeManager)); };
/** @nocollapse */ ThemeManagerProvider.ɵprov = ɵɵdefineInjectable({ token: ThemeManagerProvider, factory: ThemeManagerProvider.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ThemeManagerProvider, [{
        type: Injectable
    }], function () { return [{ type: ThemeManager }]; }, null); })();

// =============================
class AccountEndpoint extends EndpointBase {
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
    get usersUrl() { return this.configurations.baseUrl + this._usersUrl; }
    get userByUserNameUrl() { return this.configurations.baseUrl + this._userByUserNameUrl; }
    get currentUserUrl() { return this.configurations.baseUrl + this._currentUserUrl; }
    get currentUserPreferencesUrl() { return this.configurations.baseUrl + this._currentUserPreferencesUrl; }
    get unblockUserUrl() { return this.configurations.baseUrl + this._unblockUserUrl; }
    get rolesUrl() { return this.configurations.baseUrl + this._rolesUrl; }
    get roleByRoleNameUrl() { return this.configurations.baseUrl + this._roleByRoleNameUrl; }
    get permissionsUrl() { return this.configurations.baseUrl + this._permissionsUrl; }
    getUserEndpoint(userId) {
        const endpointUrl = userId ? `${this.usersUrl}/${userId}` : this.currentUserUrl;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError(error => {
            return this.handleError(error, () => this.getUserEndpoint(userId));
        }));
    }
    getUserByUserNameEndpoint(userName) {
        const endpointUrl = `${this.userByUserNameUrl}/${userName}`;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError(error => {
            return this.handleError(error, () => this.getUserByUserNameEndpoint(userName));
        }));
    }
    getUsersEndpoint(page, pageSize) {
        const endpointUrl = page && pageSize ? `${this.usersUrl}/${page}/${pageSize}` : this.usersUrl;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError(error => {
            return this.handleError(error, () => this.getUsersEndpoint(page, pageSize));
        }));
    }
    getNewUserEndpoint(userObject) {
        return this.http.post(this.usersUrl, JSON.stringify(userObject), this.requestHeaders).pipe(catchError(error => {
            return this.handleError(error, () => this.getNewUserEndpoint(userObject));
        }));
    }
    getUpdateUserEndpoint(userObject, userId) {
        const endpointUrl = userId ? `${this.usersUrl}/${userId}` : this.currentUserUrl;
        return this.http.put(endpointUrl, JSON.stringify(userObject), this.requestHeaders).pipe(catchError(error => {
            return this.handleError(error, () => this.getUpdateUserEndpoint(userObject, userId));
        }));
    }
    getPatchUpdateUserEndpoint(valueOrPatch, opOrUserId, path, from, userId) {
        let endpointUrl;
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
        return this.http.patch(endpointUrl, JSON.stringify(patchDocument), this.requestHeaders).pipe(catchError(error => {
            return this.handleError(error, () => this.getPatchUpdateUserEndpoint(valueOrPatch, opOrUserId, path, from, userId));
        }));
    }
    getUserPreferencesEndpoint() {
        return this.http.get(this.currentUserPreferencesUrl, this.requestHeaders).pipe(catchError(error => {
            return this.handleError(error, () => this.getUserPreferencesEndpoint());
        }));
    }
    getUpdateUserPreferencesEndpoint(configuration) {
        return this.http.put(this.currentUserPreferencesUrl, JSON.stringify(configuration), this.requestHeaders).pipe(catchError(error => {
            return this.handleError(error, () => this.getUpdateUserPreferencesEndpoint(configuration));
        }));
    }
    getUnblockUserEndpoint(userId) {
        const endpointUrl = `${this.unblockUserUrl}/${userId}`;
        return this.http.put(endpointUrl, null, this.requestHeaders).pipe(catchError(error => {
            return this.handleError(error, () => this.getUnblockUserEndpoint(userId));
        }));
    }
    getDeleteUserEndpoint(userId) {
        const endpointUrl = `${this.usersUrl}/${userId}`;
        return this.http.delete(endpointUrl, this.requestHeaders).pipe(catchError(error => {
            return this.handleError(error, () => this.getDeleteUserEndpoint(userId));
        }));
    }
    getRoleEndpoint(roleId) {
        const endpointUrl = `${this.rolesUrl}/${roleId}`;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError(error => {
            return this.handleError(error, () => this.getRoleEndpoint(roleId));
        }));
    }
    getRoleByRoleNameEndpoint(roleName) {
        const endpointUrl = `${this.roleByRoleNameUrl}/${roleName}`;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError(error => {
            return this.handleError(error, () => this.getRoleByRoleNameEndpoint(roleName));
        }));
    }
    getRolesEndpoint(page, pageSize) {
        const endpointUrl = page && pageSize ? `${this.rolesUrl}/${page}/${pageSize}` : this.rolesUrl;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError(error => {
            return this.handleError(error, () => this.getRolesEndpoint(page, pageSize));
        }));
    }
    getNewRoleEndpoint(roleObject) {
        return this.http.post(this.rolesUrl, JSON.stringify(roleObject), this.requestHeaders).pipe(catchError(error => {
            return this.handleError(error, () => this.getNewRoleEndpoint(roleObject));
        }));
    }
    getUpdateRoleEndpoint(roleObject, roleId) {
        const endpointUrl = `${this.rolesUrl}/${roleId}`;
        return this.http.put(endpointUrl, JSON.stringify(roleObject), this.requestHeaders).pipe(catchError(error => {
            return this.handleError(error, () => this.getUpdateRoleEndpoint(roleObject, roleId));
        }));
    }
    getDeleteRoleEndpoint(roleId) {
        const endpointUrl = `${this.rolesUrl}/${roleId}`;
        return this.http.delete(endpointUrl, this.requestHeaders).pipe(catchError(error => {
            return this.handleError(error, () => this.getDeleteRoleEndpoint(roleId));
        }));
    }
    getPermissionsEndpoint() {
        return this.http.get(this.permissionsUrl, this.requestHeaders).pipe(catchError(error => {
            return this.handleError(error, () => this.getPermissionsEndpoint());
        }));
    }
}
/** @nocollapse */ AccountEndpoint.ɵfac = function AccountEndpoint_Factory(t) { return new (t || AccountEndpoint)(ɵɵinject(ConfigurationService), ɵɵinject(HttpClient), ɵɵinject(AuthService)); };
/** @nocollapse */ AccountEndpoint.ɵprov = ɵɵdefineInjectable({ token: AccountEndpoint, factory: AccountEndpoint.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AccountEndpoint, [{
        type: Injectable
    }], function () { return [{ type: ConfigurationService }, { type: HttpClient }, { type: AuthService }]; }, null); })();

// =============================
class AccountService {
    constructor(authService, accountEndpoint) {
        this.authService = authService;
        this.accountEndpoint = accountEndpoint;
        this._rolesChanged = new Subject();
    }
    getUser(userId) {
        return this.accountEndpoint.getUserEndpoint(userId);
    }
    getUserAndRoles(userId) {
        return forkJoin(this.accountEndpoint.getUserEndpoint(userId), this.accountEndpoint.getRolesEndpoint());
    }
    getUsers(page, pageSize) {
        return this.accountEndpoint.getUsersEndpoint(page, pageSize);
    }
    getUsersAndRoles(page, pageSize) {
        return forkJoin(this.accountEndpoint.getUsersEndpoint(page, pageSize), this.accountEndpoint.getRolesEndpoint());
    }
    updateUser(user) {
        if (user.id) {
            return this.accountEndpoint.getUpdateUserEndpoint(user, user.id);
        }
        else {
            return this.accountEndpoint.getUserByUserNameEndpoint(user.userName).pipe(mergeMap(foundUser => {
                user.id = foundUser.id;
                return this.accountEndpoint.getUpdateUserEndpoint(user, user.id);
            }));
        }
    }
    newUser(user) {
        return this.accountEndpoint.getNewUserEndpoint(user);
    }
    getUserPreferences() {
        return this.accountEndpoint.getUserPreferencesEndpoint();
    }
    updateUserPreferences(configuration) {
        return this.accountEndpoint.getUpdateUserPreferencesEndpoint(configuration);
    }
    deleteUser(userOrUserId) {
        if (typeof userOrUserId === 'string' || userOrUserId instanceof String) {
            return this.accountEndpoint.getDeleteUserEndpoint(userOrUserId).pipe(tap(data => this.onRolesUserCountChanged(data.roles)));
        }
        else {
            if (userOrUserId.id) {
                return this.deleteUser(userOrUserId.id);
            }
            else {
                return this.accountEndpoint.getUserByUserNameEndpoint(userOrUserId.userName).pipe(mergeMap(user => this.deleteUser(user.id)));
            }
        }
    }
    unblockUser(userId) {
        return this.accountEndpoint.getUnblockUserEndpoint(userId);
    }
    userHasPermission(permissionValue) {
        return this.permissions.some(p => p == permissionValue);
    }
    refreshLoggedInUser() {
        return this.accountEndpoint.refreshLogin();
    }
    getRoles(page, pageSize) {
        return this.accountEndpoint.getRolesEndpoint(page, pageSize);
    }
    getRolesAndPermissions(page, pageSize) {
        return forkJoin(this.accountEndpoint.getRolesEndpoint(page, pageSize), this.accountEndpoint.getPermissionsEndpoint());
    }
    updateRole(role) {
        if (role.id) {
            return this.accountEndpoint.getUpdateRoleEndpoint(role, role.id).pipe(tap(data => this.onRolesChanged([role], AccountService.roleModifiedOperation)));
        }
        else {
            return this.accountEndpoint.getRoleByRoleNameEndpoint(role.name).pipe(mergeMap(foundRole => {
                role.id = foundRole.id;
                return this.accountEndpoint.getUpdateRoleEndpoint(role, role.id);
            }), tap(data => this.onRolesChanged([role], AccountService.roleModifiedOperation)));
        }
    }
    newRole(role) {
        return this.accountEndpoint.getNewRoleEndpoint(role).pipe(tap(data => this.onRolesChanged([role], AccountService.roleAddedOperation)));
    }
    deleteRole(roleOrRoleId) {
        if (typeof roleOrRoleId === 'string' || roleOrRoleId instanceof String) {
            return this.accountEndpoint.getDeleteRoleEndpoint(roleOrRoleId).pipe(tap(data => this.onRolesChanged([data], AccountService.roleDeletedOperation)));
        }
        else {
            if (roleOrRoleId.id) {
                return this.deleteRole(roleOrRoleId.id);
            }
            else {
                return this.accountEndpoint.getRoleByRoleNameEndpoint(roleOrRoleId.name).pipe(mergeMap(role => this.deleteRole(role.id)));
            }
        }
    }
    getPermissions() {
        return this.accountEndpoint.getPermissionsEndpoint();
    }
    onRolesChanged(roles, op) {
        this._rolesChanged.next({ roles, operation: op });
    }
    onRolesUserCountChanged(roles) {
        return this.onRolesChanged(roles, AccountService.roleModifiedOperation);
    }
    getRolesChangedEvent() {
        return this._rolesChanged.asObservable();
    }
    get permissions() {
        return this.authService.userPermissions;
    }
    get currentUser() {
        return this.authService.currentUser;
    }
}
AccountService.roleAddedOperation = 'add';
AccountService.roleDeletedOperation = 'delete';
AccountService.roleModifiedOperation = 'modify';
/** @nocollapse */ AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(ɵɵinject(AuthService), ɵɵinject(AccountEndpoint)); };
/** @nocollapse */ AccountService.ɵprov = ɵɵdefineInjectable({ token: AccountService, factory: AccountService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AccountService, [{
        type: Injectable
    }], function () { return [{ type: AuthService }, { type: AccountEndpoint }]; }, null); })();

// =============================
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
    getNotificationEndpoint(notificationId) {
        const notification = this.demoNotifications.find(val => val.id == notificationId);
        let response;
        if (notification) {
            response = this.createResponse(notification, 200);
        }
        else {
            response = this.createResponse(null, 404);
        }
        return of(response.body);
    }
    getNotificationsEndpoint(page, pageSize) {
        const notifications = this.demoNotifications;
        const response = this.createResponse(this.demoNotifications, 200);
        return of(response.body);
    }
    getUnreadNotificationsEndpoint(userId) {
        const unreadNotifications = this.demoNotifications.filter(val => !val.isRead);
        const response = this.createResponse(unreadNotifications, 200);
        return of(response.body);
    }
    getNewNotificationsEndpoint(lastNotificationDate) {
        const unreadNotifications = this.demoNotifications;
        const response = this.createResponse(unreadNotifications, 200);
        return of(response.body);
    }
    getPinUnpinNotificationEndpoint(notificationId, isPinned) {
        const notification = this.demoNotifications.find(val => val.id == notificationId);
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
    getReadUnreadNotificationEndpoint(notificationIds, isRead) {
        for (const notificationId of notificationIds) {
            const notification = this.demoNotifications.find(val => val.id == notificationId);
            if (notification) {
                notification.isRead = isRead;
            }
        }
        const response = this.createResponse(null, 204);
        return of(response.body);
    }
    getDeleteNotificationEndpoint(notificationId) {
        const notification = this.demoNotifications.find(val => val.id == notificationId);
        let response;
        if (notification) {
            this.demoNotifications = this.demoNotifications.filter(val => val.id != notificationId);
            response = this.createResponse(notification, 200);
        }
        else {
            response = this.createResponse(null, 404);
        }
        return of(response.body);
    }
    createResponse(body, status) {
        return new HttpResponse({ body, status });
    }
}
/** @nocollapse */ NotificationEndpoint.ɵfac = function NotificationEndpoint_Factory(t) { return new (t || NotificationEndpoint)(); };
/** @nocollapse */ NotificationEndpoint.ɵprov = ɵɵdefineInjectable({ token: NotificationEndpoint, factory: NotificationEndpoint.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NotificationEndpoint, [{
        type: Injectable
    }], null, null); })();

// =============================
class NotificationService {
    constructor(notificationEndpoint, authService) {
        this.notificationEndpoint = notificationEndpoint;
        this.authService = authService;
    }
    get currentUser() {
        return this.authService.currentUser;
    }
    get recentNotifications() {
        return this._recentNotifications;
    }
    set recentNotifications(notifications) {
        this._recentNotifications = notifications;
    }
    getNotification(notificationId) {
        return this.notificationEndpoint.getNotificationEndpoint(notificationId).pipe(map(response => Notification.Create(response)));
    }
    getNotifications(page, pageSize) {
        return this.notificationEndpoint.getNotificationsEndpoint(page, pageSize).pipe(map(response => {
            return this.getNotificationsFromResponse(response);
        }));
    }
    getUnreadNotifications(userId) {
        return this.notificationEndpoint.getUnreadNotificationsEndpoint(userId).pipe(map(response => this.getNotificationsFromResponse(response)));
    }
    getNewNotifications() {
        return this.notificationEndpoint.getNewNotificationsEndpoint(this.lastNotificationDate).pipe(map(response => this.processNewNotificationsFromResponse(response)));
    }
    getNewNotificationsPeriodically() {
        return interval(10000).pipe(startWith(0), flatMap(() => {
            return this.notificationEndpoint.getNewNotificationsEndpoint(this.lastNotificationDate).pipe(map(response => this.processNewNotificationsFromResponse(response)));
        }));
    }
    pinUnpinNotification(notificationOrNotificationId, isPinned) {
        if (typeof notificationOrNotificationId === 'number' || notificationOrNotificationId instanceof Number) {
            return this.notificationEndpoint.getPinUnpinNotificationEndpoint(notificationOrNotificationId, isPinned);
        }
        else {
            return this.pinUnpinNotification(notificationOrNotificationId.id);
        }
    }
    readUnreadNotification(notificationIds, isRead) {
        return this.notificationEndpoint.getReadUnreadNotificationEndpoint(notificationIds, isRead);
    }
    deleteNotification(notificationOrNotificationId) {
        if (typeof notificationOrNotificationId === 'number' || notificationOrNotificationId instanceof Number) { // Todo: Test me if its check is valid
            return this.notificationEndpoint.getDeleteNotificationEndpoint(notificationOrNotificationId).pipe(map(response => {
                this.recentNotifications = this.recentNotifications.filter(n => n.id != notificationOrNotificationId);
                return Notification.Create(response);
            }));
        }
        else {
            return this.deleteNotification(notificationOrNotificationId.id);
        }
    }
    processNewNotificationsFromResponse(response) {
        const notifications = this.getNotificationsFromResponse(response);
        for (const n of notifications) {
            if (n.date > this.lastNotificationDate) {
                this.lastNotificationDate = n.date;
            }
        }
        return notifications;
    }
    getNotificationsFromResponse(response) {
        const notifications = [];
        for (const i in response) {
            notifications[i] = Notification.Create(response[i]);
        }
        notifications.sort((a, b) => b.date.valueOf() - a.date.valueOf());
        notifications.sort((a, b) => (a.isPinned === b.isPinned) ? 0 : a.isPinned ? -1 : 1);
        this.recentNotifications = notifications;
        return notifications;
    }
}
/** @nocollapse */ NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(ɵɵinject(NotificationEndpoint), ɵɵinject(AuthService)); };
/** @nocollapse */ NotificationService.ɵprov = ɵɵdefineInjectable({ token: NotificationService, factory: NotificationService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NotificationService, [{
        type: Injectable
    }], function () { return [{ type: NotificationEndpoint }, { type: AuthService }]; }, null); })();

class TranslationServiceProvider extends TranslationServiceAbstractProvider {
    constructor(impl) {
        super();
        this.impl = impl;
    }
    get() {
        return this.impl;
    }
}
/** @nocollapse */ TranslationServiceProvider.ɵfac = function TranslationServiceProvider_Factory(t) { return new (t || TranslationServiceProvider)(ɵɵinject(AppTranslationService)); };
/** @nocollapse */ TranslationServiceProvider.ɵprov = ɵɵdefineInjectable({ token: TranslationServiceProvider, factory: TranslationServiceProvider.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TranslationServiceProvider, [{
        type: Injectable
    }], function () { return [{ type: AppTranslationService }]; }, null); })();

// =============================
class AppTitleService {
    constructor(titleService, router) {
        this.titleService = titleService;
        this.router = router;
        this.sub = this.router.events.pipe(filter(event => event instanceof NavigationEnd), map(_ => this.router.routerState.root), map(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), flatMap(route => route.data))
            .subscribe(data => {
            let title = data.title;
            if (title) {
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
        });
    }
}
/** @nocollapse */ AppTitleService.ɵfac = function AppTitleService_Factory(t) { return new (t || AppTitleService)(ɵɵinject(Title), ɵɵinject(Router)); };
/** @nocollapse */ AppTitleService.ɵprov = ɵɵdefineInjectable({ token: AppTitleService, factory: AppTitleService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AppTitleService, [{
        type: Injectable
    }], function () { return [{ type: Title }, { type: Router }]; }, null); })();

class AlertServiceProvider extends AlertServiceAbstractProvider {
    constructor(alertService) {
        super();
        this.alertService = alertService;
    }
    get() {
        return this.alertService;
    }
}
/** @nocollapse */ AlertServiceProvider.ɵfac = function AlertServiceProvider_Factory(t) { return new (t || AlertServiceProvider)(ɵɵinject(AlertService)); };
/** @nocollapse */ AlertServiceProvider.ɵprov = ɵɵdefineInjectable({ token: AlertServiceProvider, factory: AlertServiceProvider.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AlertServiceProvider, [{
        type: Injectable
    }], function () { return [{ type: AlertService }]; }, null); })();

class LocalStoreManagerProvider extends LocalStoreManagerServiceAbstractProvider {
    constructor(impl) {
        super();
        this.impl = impl;
    }
    get() {
        return this.impl;
    }
}
/** @nocollapse */ LocalStoreManagerProvider.ɵfac = function LocalStoreManagerProvider_Factory(t) { return new (t || LocalStoreManagerProvider)(ɵɵinject(LocalStoreManager)); };
/** @nocollapse */ LocalStoreManagerProvider.ɵprov = ɵɵdefineInjectable({ token: LocalStoreManagerProvider, factory: LocalStoreManagerProvider.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LocalStoreManagerProvider, [{
        type: Injectable
    }], function () { return [{ type: LocalStoreManager }]; }, null); })();

// =============================
class GroupByPipe {
    transform(value, field) {
        if (!value) {
            return value;
        }
        const groupedObj = value.reduce((prev, cur) => {
            if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
            }
            else {
                prev[cur[field]].push(cur);
            }
            return prev;
        }, {});
        return Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] }));
    }
}
/** @nocollapse */ GroupByPipe.ɵfac = function GroupByPipe_Factory(t) { return new (t || GroupByPipe)(); };
/** @nocollapse */ GroupByPipe.ɵpipe = ɵɵdefinePipe({ name: "groupBy", type: GroupByPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GroupByPipe, [{
        type: Pipe,
        args: [{ name: 'groupBy' }]
    }], null, null); })();

// =============================
class AutofocusDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        setTimeout(() => this.elementRef.nativeElement.focus(), 500);
    }
}
/** @nocollapse */ AutofocusDirective.ɵfac = function AutofocusDirective_Factory(t) { return new (t || AutofocusDirective)(ɵɵdirectiveInject(ElementRef)); };
/** @nocollapse */ AutofocusDirective.ɵdir = ɵɵdefineDirective({ type: AutofocusDirective, selectors: [["", "autofocus", ""]] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AutofocusDirective, [{
        type: Directive,
        args: [{
                selector: '[autofocus]'
            }]
    }], function () { return [{ type: ElementRef }]; }, null); })();

// =============================
class BootstrapDatepickerDirective {
    constructor(el) {
        this.el = el;
        this._isShown = false;
        this.options = {};
        this.ngModelChange = new EventEmitter();
        this.changedSubscription = fromEvent($(this.el.nativeElement), 'change').subscribe((e) => setTimeout(() => this.ngModelChange.emit(e.target.value)));
        this.shownSubscription = fromEvent($(this.el.nativeElement), 'show').subscribe((e) => this._isShown = true);
        this.hiddenSubscription = fromEvent($(this.el.nativeElement), 'hide').subscribe((e) => this._isShown = false);
    }
    get isShown() {
        return this._isShown;
    }
    set ngModel(value) {
        this.tryUpdate(value);
    }
    ngOnInit() {
        this.initialize(this.options);
    }
    ngOnDestroy() {
        this.destroy();
    }
    initialize(options) {
        $(this.el.nativeElement).datepicker(options);
    }
    destroy() {
        if (this.changedSubscription) {
            this.changedSubscription.unsubscribe();
            this.shownSubscription.unsubscribe();
            this.hiddenSubscription.unsubscribe();
        }
        $(this.el.nativeElement).datepicker('destroy');
    }
    show() {
        $(this.el.nativeElement).datepicker('show');
    }
    hide() {
        $(this.el.nativeElement).datepicker('hide');
    }
    toggle() {
        this.isShown ? this.hide() : this.show();
    }
    tryUpdate(value) {
        clearTimeout(this.updateTimeout);
        if (!$(this.el.nativeElement).is(':focus')) {
            this.update(value);
        }
        else {
            this.updateTimeout = setTimeout(() => {
                this.updateTimeout = null;
                this.tryUpdate(value);
            }, 100);
        }
    }
    update(value) {
        setTimeout(() => $(this.el.nativeElement).datepicker('update', value));
    }
    setDate(value) {
        setTimeout(() => $(this.el.nativeElement).datepicker('setDate', value));
    }
    setUTCDate(value) {
        setTimeout(() => $(this.el.nativeElement).datepicker('setUTCDate', value));
    }
    clearDates() {
        setTimeout(() => $(this.el.nativeElement).datepicker('clearDates'));
    }
    getDate() {
        $(this.el.nativeElement).datepicker('getDate');
    }
    getUTCDate() {
        $(this.el.nativeElement).datepicker('getUTCDate');
    }
}
/** @nocollapse */ BootstrapDatepickerDirective.ɵfac = function BootstrapDatepickerDirective_Factory(t) { return new (t || BootstrapDatepickerDirective)(ɵɵdirectiveInject(ElementRef)); };
/** @nocollapse */ BootstrapDatepickerDirective.ɵdir = ɵɵdefineDirective({ type: BootstrapDatepickerDirective, selectors: [["", "bootstrapDatepicker", ""]], inputs: { options: "options", ngModel: "ngModel" }, outputs: { ngModelChange: "ngModelChange" }, exportAs: ["bootstrap-datepicker"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BootstrapDatepickerDirective, [{
        type: Directive,
        args: [{
                selector: '[bootstrapDatepicker]',
                exportAs: 'bootstrap-datepicker'
            }]
    }], function () { return [{ type: ElementRef }]; }, { options: [{
            type: Input
        }], ngModel: [{
            type: Input
        }], ngModelChange: [{
            type: Output
        }] }); })();

// =============================
class BootstrapSelectDirective {
    constructor(el) {
        this.el = el;
        this.oldValues = '';
        this.ngModelChange = new EventEmitter();
        this.shown = new EventEmitter();
        this.hidden = new EventEmitter();
        this.changedSubscription = fromEvent($(this.el.nativeElement), 'changed.bs.select').subscribe((e) => setTimeout(() => {
            if (this.checkIsValuesChanged(this.selected)) {
                this.ngModelChange.emit(this.selected);
            }
        }));
        this.shownSubscription = fromEvent($(this.el.nativeElement), 'shown.bs.select').subscribe((e) => setTimeout(() => this.shown.emit()));
        this.hiddenSubscription = fromEvent($(this.el.nativeElement), 'hidden.bs.select').subscribe((e) => setTimeout(() => this.hidden.emit()));
    }
    set ngModel(values) {
        setTimeout(() => this.selected = values);
    }
    ngOnInit() {
        $(this.el.nativeElement).selectpicker();
        if (this.requiredAttribute) {
            $(this.el.nativeElement).selectpicker('setStyle', 'required', 'add');
        }
        setTimeout(() => {
            this.refresh();
            this.doValidation();
        });
    }
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
    checkIsValuesChanged(newValue) {
        return !(newValue == this.oldValues ||
            (newValue instanceof Array && newValue.length === this.oldValues.length && newValue.every((v, i) => v === this.oldValues[i])));
    }
    doValidation() {
        if (this.requiredAttribute) {
            $(this.el.nativeElement).selectpicker('setStyle', !this.valid ? 'ng-valid' : 'ng-invalid', 'remove');
            $(this.el.nativeElement).selectpicker('setStyle', this.valid ? 'ng-valid' : 'ng-invalid', 'add');
        }
    }
    get requiredAttribute() {
        return this.required === '' || this.required == 'true';
    }
    refresh() {
        setTimeout(() => {
            $(this.el.nativeElement).selectpicker('refresh');
        });
    }
    render() {
        setTimeout(() => {
            $(this.el.nativeElement).selectpicker('render');
        });
    }
    get valid() {
        return this.requiredAttribute ? this.selected && this.selected.length > 0 : true;
    }
    set selected(values) {
        if (!this.checkIsValuesChanged(values)) {
            return;
        }
        this.oldValues = this.selected;
        $(this.el.nativeElement).selectpicker('val', values);
        this.doValidation();
    }
    get selected() {
        return $(this.el.nativeElement).selectpicker('val');
    }
}
/** @nocollapse */ BootstrapSelectDirective.ɵfac = function BootstrapSelectDirective_Factory(t) { return new (t || BootstrapSelectDirective)(ɵɵdirectiveInject(ElementRef)); };
/** @nocollapse */ BootstrapSelectDirective.ɵdir = ɵɵdefineDirective({ type: BootstrapSelectDirective, selectors: [["", "bootstrapSelect", ""]], inputs: { required: "required", ngModel: "ngModel" }, outputs: { ngModelChange: "ngModelChange", shown: "shown", hidden: "hidden" }, exportAs: ["bootstrap-select"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BootstrapSelectDirective, [{
        type: Directive,
        args: [{
                selector: '[bootstrapSelect]',
                exportAs: 'bootstrap-select'
            }]
    }], function () { return [{ type: ElementRef }]; }, { required: [{
            type: Input
        }], ngModel: [{
            type: Input
        }], ngModelChange: [{
            type: Output
        }], shown: [{
            type: Output
        }], hidden: [{
            type: Output
        }] }); })();

// =============================
class BootstrapTabDirective {
    constructor(el, zone) {
        this.el = el;
        this.zone = zone;
        this.showBSTab = new EventEmitter();
        this.hideBSTab = new EventEmitter();
        this.tabShownSubscription = fromEvent($(this.el.nativeElement), 'show.bs.tab')
            .subscribe((e) => {
            this.runInZone(() => this.showBSTab.emit({ type: e.type, target: e.target, relatedTarget: e.relatedTarget }));
        });
        this.tabHiddenSubscription = fromEvent($(this.el.nativeElement), 'hidden.bs.tab')
            .subscribe((e) => {
            this.runInZone(() => this.hideBSTab.emit({ type: e.type, target: e.target, relatedTarget: e.relatedTarget }));
        });
    }
    ngOnDestroy() {
        this.tabShownSubscription.unsubscribe();
        this.tabHiddenSubscription.unsubscribe();
    }
    runInZone(delegate) {
        this.zone.run(() => {
            delegate();
        });
    }
    show(selector) {
        $(selector).tab('show');
    }
}
/** @nocollapse */ BootstrapTabDirective.ɵfac = function BootstrapTabDirective_Factory(t) { return new (t || BootstrapTabDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone)); };
/** @nocollapse */ BootstrapTabDirective.ɵdir = ɵɵdefineDirective({ type: BootstrapTabDirective, selectors: [["", "bootstrapTab", ""]], outputs: { showBSTab: "showBSTab", hideBSTab: "hideBSTab" }, exportAs: ["bootstrap-tab"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BootstrapTabDirective, [{
        type: Directive,
        args: [{
                selector: '[bootstrapTab]',
                exportAs: 'bootstrap-tab'
            }]
    }], function () { return [{ type: ElementRef }, { type: NgZone }]; }, { showBSTab: [{
            type: Output
        }], hideBSTab: [{
            type: Output
        }] }); })();

// =============================
class BootstrapToggleDirective {
    constructor(el) {
        this.el = el;
        this.ngModelChange = new EventEmitter();
        this.checkedSubscription = fromEvent($(this.el.nativeElement), 'change')
            .subscribe((e) => this.ngModelChange.emit(e.target.checked));
    }
    set ngModel(value) {
        this.toggle(value);
    }
    ngOnInit() {
        this.initialize();
    }
    ngOnDestroy() {
        this.destroy();
    }
    initialize(options) {
        $(this.el.nativeElement).bootstrapToggle(options);
    }
    destroy() {
        if (this.checkedSubscription) {
            this.checkedSubscription.unsubscribe();
        }
        $(this.el.nativeElement).bootstrapToggle('destroy');
    }
    toggleOn() {
        $(this.el.nativeElement).bootstrapToggle('on');
    }
    toggleOff() {
        $(this.el.nativeElement).bootstrapToggle('off');
    }
    toggle(value) {
        if (value == null) {
            $(this.el.nativeElement).bootstrapToggle('toggle');
        }
        else {
            $(this.el.nativeElement).prop('checked', value).change();
        }
    }
    enable() {
        $(this.el.nativeElement).bootstrapToggle('enable');
    }
    disable() {
        $(this.el.nativeElement).bootstrapToggle('disable');
    }
}
/** @nocollapse */ BootstrapToggleDirective.ɵfac = function BootstrapToggleDirective_Factory(t) { return new (t || BootstrapToggleDirective)(ɵɵdirectiveInject(ElementRef)); };
/** @nocollapse */ BootstrapToggleDirective.ɵdir = ɵɵdefineDirective({ type: BootstrapToggleDirective, selectors: [["", "bootstrapToggle", ""]], inputs: { ngModel: "ngModel" }, outputs: { ngModelChange: "ngModelChange" }, exportAs: ["bootstrap-toggle"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BootstrapToggleDirective, [{
        type: Directive,
        args: [{
                selector: '[bootstrapToggle]',
                exportAs: 'bootstrap-toggle'
            }]
    }], function () { return [{ type: ElementRef }]; }, { ngModel: [{
            type: Input
        }], ngModelChange: [{
            type: Output
        }] }); })();

// =============================
class EqualValidator {
    constructor(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    validate(c) {
        const other = c.root.get(this.validateEqual);
        if (!other) {
            return null;
        }
        return this.reverse === 'true' ? this.validateReverse(c, other) : this.validateNoReverse(c, other);
    }
    validateNoReverse(c, other) {
        return other.value === c.value ? null : { validateEqual: true };
    }
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
/** @nocollapse */ EqualValidator.ɵfac = function EqualValidator_Factory(t) { return new (t || EqualValidator)(ɵɵinjectAttribute('validateEqual'), ɵɵinjectAttribute('reverse')); };
/** @nocollapse */ EqualValidator.ɵdir = ɵɵdefineDirective({ type: EqualValidator, selectors: [["", "validateEqual", "", "formControlName", ""], ["", "validateEqual", "", "formControl", ""], ["", "validateEqual", "", "ngModel", ""]], features: [ɵɵProvidersFeature([
            { provide: NG_VALIDATORS, useExisting: forwardRef((() => EqualValidator)), multi: true }
        ])] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EqualValidator, [{
        type: Directive,
        args: [{
                selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef((() => EqualValidator)), multi: true }
                ]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Attribute,
                args: ['validateEqual']
            }] }, { type: undefined, decorators: [{
                type: Attribute,
                args: ['reverse']
            }] }]; }, null); })();

// =============================
class LastElementDirective {
    constructor() {
        this.lastFunction = new EventEmitter();
    }
    set lastElement(isLastElement) {
        if (isLastElement) {
            setTimeout(() => {
                this.lastFunction.emit();
            });
        }
    }
}
/** @nocollapse */ LastElementDirective.ɵfac = function LastElementDirective_Factory(t) { return new (t || LastElementDirective)(); };
/** @nocollapse */ LastElementDirective.ɵdir = ɵɵdefineDirective({ type: LastElementDirective, selectors: [["", "lastElement", ""]], inputs: { lastElement: "lastElement" }, outputs: { lastFunction: "lastFunction" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LastElementDirective, [{
        type: Directive,
        args: [{
                selector: '[lastElement]'
            }]
    }], null, { lastElement: [{
            type: Input
        }], lastFunction: [{
            type: Output
        }] }); })();

// =============================
const _c0 = ["statusHeaderTemplate"];
const _c1 = ["statusTemplate"];
const _c2 = ["dateTemplate"];
const _c3 = ["contentHeaderTemplate"];
const _c4 = ["contenBodytTemplate"];
const _c5 = ["actionsTemplate"];
function NotificationsViewerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 7);
} }
function NotificationsViewerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span");
} }
function NotificationsViewerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r12 = ctx.row;
    const value_r13 = ctx.value;
    const ctx_r5 = ɵɵnextContext();
    ɵɵclassProp("unread", !row_r12.isRead);
    ɵɵattribute("title", ctx_r5.getPrintedDate(value_r13));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r5.getPrintedDate(value_r13), " ");
} }
function NotificationsViewerComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r14 = ctx.row;
    const value_r15 = ctx.value;
    ɵɵclassProp("unread", !row_r14.isRead);
    ɵɵattribute("title", row_r14.body);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", value_r15, " ");
} }
function NotificationsViewerComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r16 = ctx.row;
    const value_r17 = ctx.value;
    ɵɵclassProp("unread", !row_r16.isRead);
    ɵɵattribute("title", row_r16.header);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", value_r17, " ");
} }
function NotificationsViewerComponent_ng_template_12_i_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 13);
} }
function NotificationsViewerComponent_ng_template_12_i_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 14);
} }
function NotificationsViewerComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 8);
    ɵɵlistener("click", function NotificationsViewerComponent_ng_template_12_Template_a_click_0_listener() { ɵɵrestoreView(_r22); const row_r18 = ctx.row; const ctx_r21 = ɵɵnextContext(); return ctx_r21.deleteNotification(row_r18); });
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "i", 9);
    ɵɵelementEnd();
    ɵɵelementStart(3, "a", 10);
    ɵɵlistener("click", function NotificationsViewerComponent_ng_template_12_Template_a_click_3_listener() { ɵɵrestoreView(_r22); const row_r18 = ctx.row; const ctx_r23 = ɵɵnextContext(); return ctx_r23.togglePin(row_r18); });
    ɵɵpipe(4, "translate");
    ɵɵtemplate(5, NotificationsViewerComponent_ng_template_12_i_5_Template, 1, 0, "i", 11);
    ɵɵtemplate(6, NotificationsViewerComponent_ng_template_12_i_6_Template, 1, 0, "i", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r18 = ctx.row;
    ɵɵpropertyInterpolate("tooltip", ɵɵpipeBind1(1, 4, "notifications.Delete"));
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("tooltip", ɵɵpipeBind1(4, 6, "notifications.Pin"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", row_r18.isPinned);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !row_r18.isPinned);
} }
class NotificationsViewerComponent {
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
    ngOnInit() {
        if (this.isViewOnly) {
            this.columns = [
                { prop: 'date', cellTemplate: this.dateTemplate, width: 100, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
                { prop: 'header', cellTemplate: this.contentHeaderTemplate, width: 200, resizeable: false, sortable: false, draggable: false },
            ];
        }
        else {
            const gT = (key) => this.translationService.getTranslation(key);
            this.columns = [
                { prop: '', name: '', width: 10, headerTemplate: this.statusHeaderTemplate, cellTemplate: this.statusTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
                { prop: 'date', name: gT('notifications.Date'), cellTemplate: this.dateTemplate, width: 30 },
                { prop: 'body', name: gT('notifications.Notification'), cellTemplate: this.contenBodytTemplate, width: 500 },
                { name: '', width: 80, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
            ];
        }
        this.initDataLoading();
    }
    ngOnDestroy() {
        if (this.dataLoadingSubscription) {
            this.dataLoadingSubscription.unsubscribe();
        }
    }
    initDataLoading() {
        if (this.isViewOnly && this.notificationService.recentNotifications) {
            this.rows = this.processResults(this.notificationService.recentNotifications);
            return;
        }
        this.loadingIndicator = true;
        const dataLoadTask = this.isViewOnly ? this.notificationService.getNewNotifications() : this.notificationService.getNewNotificationsPeriodically();
        this.dataLoadingSubscription = dataLoadTask
            .subscribe(notifications => {
            this.loadingIndicator = false;
            this.dataLoadingConsecutiveFailurs = 0;
            this.rows = this.processResults(notifications);
        }, error => {
            this.loadingIndicator = false;
            this.alertService.showMessage('Load Error', 'Loading new notifications from the server failed!', MessageSeverity.warn);
            this.alertService.logError(error);
            if (this.dataLoadingConsecutiveFailurs++ < 5) {
                setTimeout(() => this.initDataLoading(), 5000);
            }
            else {
                this.alertService.showStickyMessage('Load Error', 'Loading new notifications from the server failed!', MessageSeverity.error);
            }
        });
        if (this.isViewOnly) {
            this.dataLoadingSubscription = null;
        }
    }
    processResults(notifications) {
        if (this.isViewOnly) {
            notifications.sort((a, b) => {
                return b.date.valueOf() - a.date.valueOf();
            });
        }
        return notifications;
    }
    getPrintedDate(value) {
        if (value) {
            return Utilities.printTimeOnly(value) + ' on ' + Utilities.printDateOnly(value);
        }
    }
    deleteNotification(row) {
        this.alertService.showDialog('Are you sure you want to delete the notification \"' + row.header + '\"?', DialogType.confirm, () => this.deleteNotificationHelper(row));
    }
    deleteNotificationHelper(row) {
        this.alertService.startLoadingMessage('Deleting...');
        this.loadingIndicator = true;
        this.notificationService.deleteNotification(row)
            .subscribe(results => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.rows = this.rows.filter(item => item.id != row.id);
        }, error => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.alertService.showStickyMessage('Delete Error', `An error occured whilst deleting the notification.\r\nError: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        });
    }
    togglePin(row) {
        const pin = !row.isPinned;
        const opText = pin ? 'Pinning' : 'Unpinning';
        this.alertService.startLoadingMessage(opText + '...');
        this.loadingIndicator = true;
        this.notificationService.pinUnpinNotification(row, pin)
            .subscribe(results => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            row.isPinned = pin;
        }, error => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.alertService.showStickyMessage(opText + ' Error', `An error occured whilst ${opText} the notification.\r\nError: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        });
    }
    get canManageNotifications() {
        return this.accountService.userHasPermission(Permission.manageRolesPermission); // Todo: Consider creating separate permission for notifications
    }
}
/** @nocollapse */ NotificationsViewerComponent.ɵfac = function NotificationsViewerComponent_Factory(t) { return new (t || NotificationsViewerComponent)(ɵɵdirectiveInject(AlertService), ɵɵdirectiveInject(AppTranslationService), ɵɵdirectiveInject(AccountService), ɵɵdirectiveInject(NotificationService)); };
/** @nocollapse */ NotificationsViewerComponent.ɵcmp = ɵɵdefineComponent({ type: NotificationsViewerComponent, selectors: [["notifications-viewer"]], viewQuery: function NotificationsViewerComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true);
        ɵɵstaticViewQuery(_c1, true);
        ɵɵstaticViewQuery(_c2, true);
        ɵɵstaticViewQuery(_c3, true);
        ɵɵstaticViewQuery(_c4, true);
        ɵɵstaticViewQuery(_c5, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.statusHeaderTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.statusTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dateTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentHeaderTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contenBodytTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionsTemplate = _t.first);
    } }, inputs: { isViewOnly: "isViewOnly", verticalScrollbar: "verticalScrollbar" }, decls: 14, vars: 9, consts: [[1, "material", "colored-header", "sm", "table-hover", 3, "loadingIndicator", "rows", "rowHeight", "headerHeight", "footerHeight", "limit", "columns", "scrollbarV", "columnMode"], ["statusHeaderTemplate", ""], ["statusTemplate", ""], ["dateTemplate", ""], ["contentHeaderTemplate", ""], ["contenBodytTemplate", ""], ["actionsTemplate", ""], [1, "fa", "fa-bullhorn"], ["href", "javascript:;", "container", "body", 1, "btn", "btn-link", "btn-sm", 3, "tooltip", "click"], [1, "fa", "fa-times"], ["href", "javascript:;", "co", "", "container", "body", 1, "btn", "btn-link", "btn-sm", 3, "tooltip", "click"], ["class", "fa fa-thumb-tack", 4, "ngIf"], ["class", "fa fa-thumb-tack fa-rotate-90", 4, "ngIf"], [1, "fa", "fa-thumb-tack"], [1, "fa", "fa-thumb-tack", "fa-rotate-90"]], template: function NotificationsViewerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelement(1, "ngx-datatable", 0);
        ɵɵtemplate(2, NotificationsViewerComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(4, NotificationsViewerComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵtemplate(6, NotificationsViewerComponent_ng_template_6_Template, 2, 4, "ng-template", null, 3, ɵɵtemplateRefExtractor);
        ɵɵtemplate(8, NotificationsViewerComponent_ng_template_8_Template, 2, 4, "ng-template", null, 4, ɵɵtemplateRefExtractor);
        ɵɵtemplate(10, NotificationsViewerComponent_ng_template_10_Template, 2, 4, "ng-template", null, 5, ɵɵtemplateRefExtractor);
        ɵɵtemplate(12, NotificationsViewerComponent_ng_template_12_Template, 7, 8, "ng-template", null, 6, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("loadingIndicator", ctx.loadingIndicator)("rows", ctx.rows)("rowHeight", 35)("headerHeight", ctx.isViewOnly ? 0 : 35)("footerHeight", 35)("limit", 10)("columns", ctx.columns)("scrollbarV", ctx.verticalScrollbar)("columnMode", "force");
    } }, directives: [DatatableComponent, TooltipDirective, NgIf], pipes: [TranslatePipe], styles: [".unread[_ngcontent-%COMP%]{font-weight:700}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NotificationsViewerComponent, [{
        type: Component,
        args: [{
                selector: 'notifications-viewer',
                templateUrl: './notifications-viewer.component.html',
                styleUrls: ['./notifications-viewer.component.scss']
            }]
    }], function () { return [{ type: AlertService }, { type: AppTranslationService }, { type: AccountService }, { type: NotificationService }]; }, { isViewOnly: [{
            type: Input
        }], verticalScrollbar: [{
            type: Input
        }], statusHeaderTemplate: [{
            type: ViewChild,
            args: ['statusHeaderTemplate', { static: true }]
        }], statusTemplate: [{
            type: ViewChild,
            args: ['statusTemplate', { static: true }]
        }], dateTemplate: [{
            type: ViewChild,
            args: ['dateTemplate', { static: true }]
        }], contentHeaderTemplate: [{
            type: ViewChild,
            args: ['contentHeaderTemplate', { static: true }]
        }], contenBodytTemplate: [{
            type: ViewChild,
            args: ['contenBodytTemplate', { static: true }]
        }], actionsTemplate: [{
            type: ViewChild,
            args: ['actionsTemplate', { static: true }]
        }] }); })();

// =============================
const _c0$1 = ["searchInput"];
function SearchBoxComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 6);
    ɵɵlistener("click", function SearchBoxComponent_a_5_Template_a_click_0_listener() { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.clear(); });
    ɵɵelementEnd();
} }
class SearchBoxComponent {
    constructor() {
        this.placeholder = 'Search...';
        this.searchChange = new EventEmitter();
    }
    onValueChange(value) {
        setTimeout(() => this.searchChange.emit(value));
    }
    clear() {
        this.searchInput.nativeElement.value = '';
        this.onValueChange(this.searchInput.nativeElement.value);
    }
}
/** @nocollapse */ SearchBoxComponent.ɵfac = function SearchBoxComponent_Factory(t) { return new (t || SearchBoxComponent)(); };
/** @nocollapse */ SearchBoxComponent.ɵcmp = ɵɵdefineComponent({ type: SearchBoxComponent, selectors: [["search-box"]], viewQuery: function SearchBoxComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.searchInput = _t.first);
    } }, inputs: { placeholder: "placeholder" }, outputs: { searchChange: "searchChange" }, decls: 6, vars: 2, consts: [[1, "icon-addon", "addon-sm"], ["for", "searchInput", "title", "Search"], [1, "fa", "fa-search", "left-icon", "search-icon"], ["id", "searchInput", "type", "search", "ngModel", "", 1, "form-control", "left-icon", "right-icon", 3, "ngModelChange"], ["searchInput", ""], ["href", "javascript:;", "title", "Clear", "class", "fa fa-times-circle clear-input right-icon", 3, "click", 4, "ngIf"], ["href", "javascript:;", "title", "Clear", 1, "fa", "fa-times-circle", "clear-input", "right-icon", 3, "click"]], template: function SearchBoxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "label", 1);
        ɵɵelement(2, "i", 2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "input", 3, 4);
        ɵɵlistener("ngModelChange", function SearchBoxComponent_Template_input_ngModelChange_3_listener($event) { return ctx.onValueChange($event); });
        ɵɵelementEnd();
        ɵɵtemplate(5, SearchBoxComponent_a_5_Template, 1, 0, "a", 5);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(4);
        ɵɵadvance(3);
        ɵɵattribute("placeholder", ctx.placeholder);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", _r0.value);
    } }, directives: [DefaultValueAccessor, NgControlStatus, NgModel, NgIf], styles: [".search-icon[_ngcontent-%COMP%]{pointer-events:none}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SearchBoxComponent, [{
        type: Component,
        args: [{
                selector: 'search-box',
                templateUrl: './search-box.component.html',
                styleUrls: ['./search-box.component.scss']
            }]
    }], null, { placeholder: [{
            type: Input
        }], searchChange: [{
            type: Output
        }], searchInput: [{
            type: ViewChild,
            args: ['searchInput', { static: true }]
        }] }); })();

// =============================
const _c0$2 = ["f"];
const _c1$1 = ["userName"];
const _c2$1 = ["userPassword"];
const _c3$1 = ["email"];
const _c4$1 = ["currentPassword"];
const _c5$1 = ["newPassword"];
const _c6 = ["confirmPassword"];
const _c7 = ["roles"];
const _c8 = ["rolesSelector"];
function UserInfoComponent_form_1_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "p", 13);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassProp("col-lg-9", ctx_r2.isViewOnly)("col-lg-10", !ctx_r2.isViewOnly);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.user.jobTitle);
} }
function UserInfoComponent_form_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "input", 14);
    ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_7_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r21); const ctx_r20 = ɵɵnextContext(2); return ctx_r20.userEdit.jobTitle = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassProp("col-lg-9", ctx_r3.isViewOnly)("col-lg-10", !ctx_r3.isViewOnly);
    ɵɵadvance(1);
    ɵɵattributeInterpolate1("id", "jobTitle-", ctx_r3.uniqueId, "");
    ɵɵproperty("ngModel", ctx_r3.userEdit.jobTitle);
} }
function UserInfoComponent_form_1_div_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "p", 13);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵclassProp("col-lg-9", ctx_r4.isViewOnly)("col-lg-10", !ctx_r4.isViewOnly);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r4.user.userName);
} }
const _c9 = function (a0, a1) { return { "fa-check": a0, "fa-times": a1 }; };
function UserInfoComponent_form_1_div_16_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 19);
} if (rf & 2) {
    ɵɵnextContext();
    const _r22 = ɵɵreference(2);
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c9, _r22.valid, !_r22.valid));
} }
function UserInfoComponent_form_1_div_16_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "users.editor.UserNameRequired"), " ");
} }
const _c10 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
function UserInfoComponent_form_1_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "input", 15, 16);
    ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_16_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r26); const ctx_r25 = ɵɵnextContext(2); return ctx_r25.userEdit.userName = $event; });
    ɵɵelementEnd();
    ɵɵtemplate(3, UserInfoComponent_form_1_div_16_i_3_Template, 1, 4, "i", 17);
    ɵɵtemplate(4, UserInfoComponent_form_1_div_16_span_4_Template, 3, 3, "span", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r22 = ɵɵreference(2);
    ɵɵnextContext();
    const _r1 = ɵɵreference(1);
    const ctx_r5 = ɵɵnextContext();
    ɵɵclassProp("col-lg-9", ctx_r5.isViewOnly)("col-lg-10", !ctx_r5.isViewOnly);
    ɵɵadvance(1);
    ɵɵattributeInterpolate1("id", "userName-", ctx_r5.uniqueId, "");
    ɵɵproperty("ngClass", ɵɵpureFunction2(10, _c10, _r1.submitted && _r22.valid, _r1.submitted && !_r22.valid))("ngModel", ctx_r5.userEdit.userName);
    ɵɵattribute("autocomplete", ctx_r5.isGeneralEditor ? "new-password" : null);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r5.showValidationErrors && _r1.submitted);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.showValidationErrors && _r1.submitted && !_r22.valid);
} }
function UserInfoComponent_form_1_div_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵelementStart(1, "div", 7);
    ɵɵelement(2, "hr", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function UserInfoComponent_form_1_div_18_i_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 19);
} if (rf & 2) {
    ɵɵnextContext();
    const _r27 = ɵɵreference(6);
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c9, _r27.valid, !_r27.valid));
} }
function UserInfoComponent_form_1_div_18_span_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "users.editor.CurrentPasswordRequired"), " ");
} }
function UserInfoComponent_form_1_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r31 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8);
    ɵɵelementStart(1, "label", 22);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 23);
    ɵɵelementStart(5, "input", 24, 25);
    ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_18_Template_input_ngModelChange_5_listener($event) { ɵɵrestoreView(_r31); const ctx_r30 = ɵɵnextContext(2); return ctx_r30.userEdit.currentPassword = $event; });
    ɵɵelementEnd();
    ɵɵelementStart(7, "small", 26);
    ɵɵtext(8);
    ɵɵpipe(9, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(10, UserInfoComponent_form_1_div_18_i_10_Template, 1, 4, "i", 17);
    ɵɵtemplate(11, UserInfoComponent_form_1_div_18_span_11_Template, 3, 3, "span", 18);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r27 = ɵɵreference(6);
    ɵɵnextContext();
    const _r1 = ɵɵreference(1);
    const ctx_r7 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("for", "userPassword-", ctx_r7.uniqueId, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 9, "users.editor.Password"));
    ɵɵadvance(3);
    ɵɵattributeInterpolate1("id", "userPassword-", ctx_r7.uniqueId, "");
    ɵɵproperty("ngClass", ɵɵpureFunction2(13, _c10, _r1.submitted && _r27.valid, _r1.submitted && !_r27.valid))("ngModel", ctx_r7.userEdit.currentPassword);
    ɵɵattribute("autocomplete", ctx_r7.isGeneralEditor ? "new-password" : null);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(9, 11, "users.editor.PasswordHint"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r7.showValidationErrors && _r1.submitted);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.showValidationErrors && _r1.submitted && !_r27.valid);
} }
function UserInfoComponent_form_1_div_26_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "p", 13);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵclassProp("col-lg-9", ctx_r8.isViewOnly)("col-lg-10", !ctx_r8.isViewOnly);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r8.user.email);
} }
function UserInfoComponent_form_1_div_27_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 19);
} if (rf & 2) {
    ɵɵnextContext();
    const _r32 = ɵɵreference(2);
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c9, _r32.valid, !_r32.valid));
} }
function UserInfoComponent_form_1_div_27_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "users.editor.EmailRequired"), " ");
} }
function UserInfoComponent_form_1_div_27_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "users.editor.InvalidEmail"), " ");
} }
function UserInfoComponent_form_1_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r37 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "input", 27, 28);
    ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_27_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r37); const ctx_r36 = ɵɵnextContext(2); return ctx_r36.userEdit.email = $event; });
    ɵɵelementEnd();
    ɵɵtemplate(3, UserInfoComponent_form_1_div_27_i_3_Template, 1, 4, "i", 17);
    ɵɵtemplate(4, UserInfoComponent_form_1_div_27_span_4_Template, 3, 3, "span", 18);
    ɵɵtemplate(5, UserInfoComponent_form_1_div_27_span_5_Template, 3, 3, "span", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r32 = ɵɵreference(2);
    ɵɵnextContext();
    const _r1 = ɵɵreference(1);
    const ctx_r9 = ɵɵnextContext();
    ɵɵclassProp("col-lg-9", ctx_r9.isViewOnly)("col-lg-10", !ctx_r9.isViewOnly);
    ɵɵadvance(1);
    ɵɵattributeInterpolate1("id", "email-", ctx_r9.uniqueId, "");
    ɵɵproperty("ngClass", ɵɵpureFunction2(10, _c10, _r1.submitted && _r32.valid, _r1.submitted && !_r32.valid))("ngModel", ctx_r9.userEdit.email);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r9.showValidationErrors && _r1.submitted);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.showValidationErrors && _r1.submitted && (_r32.errors == null ? null : _r32.errors.required));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.showValidationErrors && _r1.submitted && (_r32.errors == null ? null : _r32.errors.pattern));
} }
function UserInfoComponent_form_1_div_28_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵelementStart(1, "div", 7);
    ɵɵelement(2, "hr");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵclassProp("separator-hr", !ctx_r10.isEditMode)("edit-separator-hr", ctx_r10.isEditMode);
} }
function UserInfoComponent_form_1_div_29_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r41 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 23);
    ɵɵelementStart(1, "button", 30);
    ɵɵlistener("click", function UserInfoComponent_form_1_div_29_div_4_Template_button_click_1_listener() { ɵɵrestoreView(_r41); const ctx_r40 = ɵɵnextContext(3); return ctx_r40.changePassword(); });
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 1, "users.editor.ChangePassword"));
} }
function UserInfoComponent_form_1_div_29_div_5_div_2_i_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 19);
} if (rf & 2) {
    ɵɵnextContext();
    const _r51 = ɵɵreference(6);
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c9, _r51.valid, !_r51.valid));
} }
function UserInfoComponent_form_1_div_29_div_5_div_2_span_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "users.editor.CurrentPasswordRequired"), " ");
} }
function UserInfoComponent_form_1_div_29_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r55 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8);
    ɵɵelementStart(1, "label", 32);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 33);
    ɵɵelementStart(5, "input", 38, 39);
    ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_29_div_5_div_2_Template_input_ngModelChange_5_listener($event) { ɵɵrestoreView(_r55); const ctx_r54 = ɵɵnextContext(4); return ctx_r54.userEdit.currentPassword = $event; });
    ɵɵelementEnd();
    ɵɵtemplate(7, UserInfoComponent_form_1_div_29_div_5_div_2_i_7_Template, 1, 4, "i", 17);
    ɵɵtemplate(8, UserInfoComponent_form_1_div_29_div_5_div_2_span_8_Template, 3, 3, "span", 18);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r51 = ɵɵreference(6);
    ɵɵnextContext(3);
    const _r1 = ɵɵreference(1);
    const ctx_r42 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("for", "currentPassword-", ctx_r42.uniqueId, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 8, "users.editor.CurrentPassword"));
    ɵɵadvance(3);
    ɵɵattributeInterpolate1("id", "currentPassword-", ctx_r42.uniqueId, "");
    ɵɵproperty("ngClass", ɵɵpureFunction2(10, _c10, _r1.submitted && _r51.valid, _r1.submitted && !_r51.valid))("ngModel", ctx_r42.userEdit.currentPassword);
    ɵɵattribute("autocomplete", ctx_r42.isGeneralEditor ? "new-password" : null);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r42.showValidationErrors && _r1.submitted);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r42.showValidationErrors && _r1.submitted && !_r51.valid);
} }
function UserInfoComponent_form_1_div_29_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵelementStart(1, "div", 7);
    ɵɵelement(2, "hr", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function UserInfoComponent_form_1_div_29_div_5_i_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 19);
} if (rf & 2) {
    ɵɵnextContext();
    const _r44 = ɵɵreference(10);
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c9, _r44.valid, !_r44.valid));
} }
function UserInfoComponent_form_1_div_29_div_5_span_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "users.editor.NewPasswordRequired"), " ");
} }
function UserInfoComponent_form_1_div_29_div_5_i_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 19);
} if (rf & 2) {
    ɵɵnextContext();
    const _r47 = ɵɵreference(22);
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c9, _r47.valid, !_r47.valid));
} }
function UserInfoComponent_form_1_div_29_div_5_span_24_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "users.editor.ConfirmationPasswordRequired"), " ");
} }
function UserInfoComponent_form_1_div_29_div_5_span_25_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "users.editor.PasswordMismatch"), " ");
} }
function UserInfoComponent_form_1_div_29_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r57 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 23);
    ɵɵelementStart(1, "div", 31);
    ɵɵtemplate(2, UserInfoComponent_form_1_div_29_div_5_div_2_Template, 9, 13, "div", 10);
    ɵɵtemplate(3, UserInfoComponent_form_1_div_29_div_5_div_3_Template, 3, 0, "div", 9);
    ɵɵelementStart(4, "div", 8);
    ɵɵelementStart(5, "label", 32);
    ɵɵtext(6);
    ɵɵpipe(7, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 33);
    ɵɵelementStart(9, "input", 34, 35);
    ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_29_div_5_Template_input_ngModelChange_9_listener($event) { ɵɵrestoreView(_r57); const ctx_r56 = ɵɵnextContext(3); return ctx_r56.userEdit.newPassword = $event; });
    ɵɵelementEnd();
    ɵɵtemplate(11, UserInfoComponent_form_1_div_29_div_5_i_11_Template, 1, 4, "i", 17);
    ɵɵtemplate(12, UserInfoComponent_form_1_div_29_div_5_span_12_Template, 3, 3, "span", 18);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(13, "div", 6);
    ɵɵelementStart(14, "div", 7);
    ɵɵelement(15, "hr", 21);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(16, "div", 8);
    ɵɵelementStart(17, "label", 32);
    ɵɵtext(18);
    ɵɵpipe(19, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(20, "div", 33);
    ɵɵelementStart(21, "input", 36, 37);
    ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_29_div_5_Template_input_ngModelChange_21_listener($event) { ɵɵrestoreView(_r57); const ctx_r58 = ɵɵnextContext(3); return ctx_r58.userEdit.confirmPassword = $event; });
    ɵɵelementEnd();
    ɵɵtemplate(23, UserInfoComponent_form_1_div_29_div_5_i_23_Template, 1, 4, "i", 17);
    ɵɵtemplate(24, UserInfoComponent_form_1_div_29_div_5_span_24_Template, 3, 3, "span", 18);
    ɵɵtemplate(25, UserInfoComponent_form_1_div_29_div_5_span_25_Template, 3, 3, "span", 18);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r44 = ɵɵreference(10);
    const _r47 = ɵɵreference(22);
    ɵɵnextContext(2);
    const _r1 = ɵɵreference(1);
    const ctx_r39 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r39.isEditingSelf);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r39.isNewUser);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate1("for", "newPassword-", ctx_r39.uniqueId, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(7, 19, "users.editor.NewPassword"));
    ɵɵadvance(3);
    ɵɵattributeInterpolate1("id", "newPassword-", ctx_r39.uniqueId, "");
    ɵɵproperty("ngClass", ɵɵpureFunction2(23, _c10, _r1.submitted && _r44.valid, _r1.submitted && !_r44.valid))("ngModel", ctx_r39.userEdit.newPassword);
    ɵɵattribute("autocomplete", ctx_r39.isGeneralEditor ? "new-password" : null);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r39.showValidationErrors && _r1.submitted);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r39.showValidationErrors && _r1.submitted && !_r44.valid);
    ɵɵadvance(5);
    ɵɵpropertyInterpolate1("for", "confirmPassword-", ctx_r39.uniqueId, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(19, 21, "users.editor.ConfirmPassword"));
    ɵɵadvance(3);
    ɵɵattributeInterpolate1("id", "confirmPassword-", ctx_r39.uniqueId, "");
    ɵɵproperty("ngClass", ɵɵpureFunction2(26, _c10, _r1.submitted && _r47.valid, _r1.submitted && !_r47.valid))("ngModel", ctx_r39.userEdit.confirmPassword);
    ɵɵattribute("autocomplete", ctx_r39.isGeneralEditor ? "new-password" : null);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r39.showValidationErrors && _r1.submitted);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r39.showValidationErrors && _r1.submitted && (_r47.errors == null ? null : _r47.errors.required));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r39.showValidationErrors && _r1.submitted && (_r47.errors == null ? null : _r47.errors.validateEqual) && !(_r47.errors == null ? null : _r47.errors.required));
} }
function UserInfoComponent_form_1_div_29_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelementStart(1, "label", 22);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(4, UserInfoComponent_form_1_div_29_div_4_Template, 4, 3, "div", 29);
    ɵɵtemplate(5, UserInfoComponent_form_1_div_29_div_5_Template, 26, 29, "div", 29);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("for", "newPassword-", ctx_r11.uniqueId, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 4, "users.editor.Password"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r11.isChangePassword && !ctx_r11.isNewUser);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r11.isChangePassword || ctx_r11.isNewUser);
} }
function UserInfoComponent_form_1_div_30_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵelementStart(1, "div", 7);
    ɵɵelement(2, "hr");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵclassProp("separator-hr", !ctx_r12.isEditMode)("edit-separator-hr", ctx_r12.isEditMode);
} }
function UserInfoComponent_form_1_div_31_div_4_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, "\n            ");
    ɵɵelementStart(2, "span", 43);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtext(4, "\n          ");
    ɵɵelementEnd();
} if (rf & 2) {
    const role_r62 = ctx.$implicit;
    const ctx_r61 = ɵɵnextContext(4);
    var tmp_0_0 = null;
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("title", (tmp_0_0 = ctx_r61.getRoleByName(role_r62)) == null ? null : tmp_0_0.description);
    ɵɵadvance(1);
    ɵɵtextInterpolate(role_r62);
} }
function UserInfoComponent_form_1_div_31_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "p", 13);
    ɵɵtext(2, "\n          ");
    ɵɵtemplate(3, UserInfoComponent_form_1_div_31_div_4_span_3_Template, 5, 2, "span", 42);
    ɵɵtext(4, "\n        ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r59 = ɵɵnextContext(3);
    ɵɵclassProp("col-lg-9", ctx_r59.isViewOnly)("col-lg-10", !ctx_r59.isViewOnly);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r59.user.roles);
} }
function UserInfoComponent_form_1_div_31_div_5_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const role_r68 = ctx.$implicit;
    ɵɵattributeInterpolate2("data-content", "<span title='", role_r68.description, "' class='badge badge-pill badge-secondary'>", role_r68.name, "</span>");
    ɵɵattribute("value", role_r68.name);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", role_r68.name, " ");
} }
function UserInfoComponent_form_1_div_31_div_5_i_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 19);
} if (rf & 2) {
    ɵɵnextContext();
    const _r63 = ɵɵreference(2);
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c9, _r63.valid, !_r63.valid));
} }
function UserInfoComponent_form_1_div_31_div_5_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "users.editor.RoleRequired"), " ");
} }
function UserInfoComponent_form_1_div_31_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r70 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 44);
    ɵɵelementStart(1, "select", 45, 46);
    ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_31_div_5_Template_select_ngModelChange_1_listener($event) { ɵɵrestoreView(_r70); const ctx_r69 = ɵɵnextContext(3); return ctx_r69.userEdit.roles = $event; });
    ɵɵtemplate(4, UserInfoComponent_form_1_div_31_div_5_option_4_Template, 2, 4, "option", 42);
    ɵɵelementEnd();
    ɵɵtemplate(5, UserInfoComponent_form_1_div_31_div_5_i_5_Template, 1, 4, "i", 17);
    ɵɵtemplate(6, UserInfoComponent_form_1_div_31_div_5_span_6_Template, 3, 3, "span", 18);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r63 = ɵɵreference(2);
    ɵɵnextContext(2);
    const _r1 = ɵɵreference(1);
    const ctx_r60 = ɵɵnextContext();
    ɵɵclassProp("col-lg-9", ctx_r60.isViewOnly)("col-lg-10", !ctx_r60.isViewOnly);
    ɵɵproperty("ngClass", ɵɵpureFunction2(9, _c10, _r1.submitted && _r63.valid, _r1.submitted && !_r63.valid));
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r60.userEdit.roles);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r60.allRoles);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r60.showValidationErrors && _r1.submitted);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r60.showValidationErrors && _r1.submitted && !_r63.valid);
} }
function UserInfoComponent_form_1_div_31_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵelementStart(1, "label", 40);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(4, UserInfoComponent_form_1_div_31_div_4_Template, 5, 5, "div", 5);
    ɵɵtemplate(5, UserInfoComponent_form_1_div_31_div_5_Template, 7, 12, "div", 41);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵclassProp("col-lg-3", ctx_r13.isViewOnly)("col-lg-2", !ctx_r13.isViewOnly);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 7, "users.editor.Roles"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r13.isEditMode);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r13.isEditMode && ctx_r13.canAssignRoles && !ctx_r13.isEditingSelf);
} }
function UserInfoComponent_form_1_div_39_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "p", 13);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(2);
    ɵɵclassProp("col-lg-9", ctx_r14.isViewOnly)("col-lg-10", !ctx_r14.isViewOnly);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r14.user.fullName);
} }
function UserInfoComponent_form_1_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r72 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "input", 47);
    ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_40_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r72); const ctx_r71 = ɵɵnextContext(2); return ctx_r71.userEdit.fullName = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵclassProp("col-lg-9", ctx_r15.isViewOnly)("col-lg-10", !ctx_r15.isViewOnly);
    ɵɵadvance(1);
    ɵɵattributeInterpolate1("id", "fullName-", ctx_r15.uniqueId, "");
    ɵɵproperty("ngModel", ctx_r15.userEdit.fullName);
} }
function UserInfoComponent_form_1_div_48_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "p", 13);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(2);
    ɵɵclassProp("col-lg-9", ctx_r16.isViewOnly)("col-lg-10", !ctx_r16.isViewOnly);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r16.user.phoneNumber);
} }
function UserInfoComponent_form_1_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r74 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "input", 48);
    ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_49_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r74); const ctx_r73 = ɵɵnextContext(2); return ctx_r73.userEdit.phoneNumber = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(2);
    ɵɵclassProp("col-lg-9", ctx_r17.isViewOnly)("col-lg-10", !ctx_r17.isViewOnly);
    ɵɵadvance(1);
    ɵɵattributeInterpolate1("id", "phoneNumber-", ctx_r17.uniqueId, "");
    ɵɵproperty("ngModel", ctx_r17.userEdit.phoneNumber);
} }
function UserInfoComponent_form_1_div_50_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵelementStart(1, "div", 7);
    ɵɵelement(2, "hr");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵclassProp("last-separator-hr", !ctx_r18.isEditMode)("edit-last-separator-hr", ctx_r18.isEditMode);
} }
function UserInfoComponent_form_1_div_51_div_2_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r82 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 61);
    ɵɵlistener("click", function UserInfoComponent_form_1_div_51_div_2_button_6_Template_button_click_0_listener() { ɵɵrestoreView(_r82); const ctx_r81 = ɵɵnextContext(4); return ctx_r81.unlockUser(); });
    ɵɵelement(1, "i", 62);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r80 = ɵɵnextContext(4);
    ɵɵproperty("disabled", ctx_r80.isSaving);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "users.editor.Unblock"), "");
} }
function UserInfoComponent_form_1_div_51_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r84 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 56);
    ɵɵelementStart(1, "div", 57);
    ɵɵelementStart(2, "input", 58);
    ɵɵlistener("ngModelChange", function UserInfoComponent_form_1_div_51_div_2_Template_input_ngModelChange_2_listener($event) { ɵɵrestoreView(_r84); const ctx_r83 = ɵɵnextContext(3); return ctx_r83.userEdit.isEnabled = $event; });
    ɵɵelementEnd();
    ɵɵelementStart(3, "label", 59);
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(6, UserInfoComponent_form_1_div_51_div_2_button_6_Template, 4, 4, "button", 60);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r75 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("ngModel", ctx_r75.userEdit.isEnabled);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 3, "users.editor.Enabled"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r75.userEdit.isLockedOut);
} }
function UserInfoComponent_form_1_div_51_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r86 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 63);
    ɵɵlistener("click", function UserInfoComponent_form_1_div_51_button_6_Template_button_click_0_listener() { ɵɵrestoreView(_r86); const ctx_r85 = ɵɵnextContext(3); return ctx_r85.close(); });
    ɵɵelement(1, "i", 64);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "users.editor.Close"), "");
} }
function UserInfoComponent_form_1_div_51_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r88 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 63);
    ɵɵlistener("click", function UserInfoComponent_form_1_div_51_button_8_Template_button_click_0_listener() { ɵɵrestoreView(_r88); const ctx_r87 = ɵɵnextContext(3); return ctx_r87.edit(); });
    ɵɵelement(1, "i", 65);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "users.editor.Edit"), "");
} }
function UserInfoComponent_form_1_div_51_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r90 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 66);
    ɵɵlistener("click", function UserInfoComponent_form_1_div_51_button_10_Template_button_click_0_listener() { ɵɵrestoreView(_r90); const ctx_r89 = ɵɵnextContext(3); return ctx_r89.cancel(); });
    ɵɵelement(1, "i", 67);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r78 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r78.isSaving);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "users.editor.Cancel"), "");
} }
function UserInfoComponent_form_1_div_51_button_12_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 71);
} }
function UserInfoComponent_form_1_div_51_button_12_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 72);
} }
function UserInfoComponent_form_1_div_51_button_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "button", 68);
    ɵɵtext(1, "\n            ");
    ɵɵtemplate(2, UserInfoComponent_form_1_div_51_button_12_i_2_Template, 1, 0, "i", 69);
    ɵɵtemplate(3, UserInfoComponent_form_1_div_51_button_12_i_3_Template, 1, 0, "i", 70);
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵpipe(6, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r79 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r79.isSaving);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r79.isSaving);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r79.isSaving);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r79.isSaving ? ɵɵpipeBind1(5, 4, "users.editor.Saving") : ɵɵpipeBind1(6, 6, "users.editor.Save"), "\n          ");
} }
function UserInfoComponent_form_1_div_51_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelementStart(1, "div", 49);
    ɵɵtemplate(2, UserInfoComponent_form_1_div_51_div_2_Template, 7, 5, "div", 50);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 51);
    ɵɵelementStart(4, "div", 52);
    ɵɵtext(5, "\n          ");
    ɵɵtemplate(6, UserInfoComponent_form_1_div_51_button_6_Template, 4, 3, "button", 53);
    ɵɵtext(7, "\n          ");
    ɵɵtemplate(8, UserInfoComponent_form_1_div_51_button_8_Template, 4, 3, "button", 53);
    ɵɵtext(9, "\n          ");
    ɵɵtemplate(10, UserInfoComponent_form_1_div_51_button_10_Template, 4, 4, "button", 54);
    ɵɵtext(11, "\n          ");
    ɵɵtemplate(12, UserInfoComponent_form_1_div_51_button_12_Template, 7, 8, "button", 55);
    ɵɵtext(13, "\n        ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r19.isGeneralEditor && ctx_r19.isEditMode);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", !ctx_r19.isEditMode && ctx_r19.isGeneralEditor);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r19.isEditMode && !ctx_r19.isGeneralEditor);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r19.isEditMode);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r19.isEditMode);
} }
function UserInfoComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r94 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 1, 2);
    ɵɵlistener("ngSubmit", function UserInfoComponent_form_1_Template_form_ngSubmit_0_listener() { ɵɵrestoreView(_r94); const _r1 = ɵɵreference(1); const ctx_r93 = ɵɵnextContext(); _r1.form.valid ? ctx_r93.save() : !ctx_r93.userName.valid && ctx_r93.showErrorAlert("User name is required", "Please enter a user name (minimum of 2 and maximum of 200 characters)"); ctx_r93.userPassword && !ctx_r93.userPassword.valid && ctx_r93.showErrorAlert("Password is required", "Please enter the current password"); (ctx_r93.email.errors == null ? null : ctx_r93.email.errors.required) && ctx_r93.showErrorAlert("Email is required", "Please enter an email address (maximum of 200 characters)"); (ctx_r93.email.errors == null ? null : ctx_r93.email.errors.pattern) && ctx_r93.showErrorAlert("Invalid Email", "Please enter a valid email address"); ctx_r93.isChangePassword && ctx_r93.isEditingSelf && !ctx_r93.currentPassword.valid && ctx_r93.showErrorAlert("Current password is required", "Please enter the current password"); (ctx_r93.isChangePassword || ctx_r93.isNewUser) && !ctx_r93.newPassword.valid && ctx_r93.showErrorAlert("New password is required", "Please enter the new password (minimum of 6 characters)"); (ctx_r93.isChangePassword || ctx_r93.isNewUser) && ctx_r93.newPassword.valid && (ctx_r93.confirmPassword.errors == null ? null : ctx_r93.confirmPassword.errors.required) && ctx_r93.showErrorAlert("Confirmation password is required", "Please enter the confirmation password"); (ctx_r93.isChangePassword || ctx_r93.isNewUser) && ctx_r93.newPassword.valid && (ctx_r93.confirmPassword.errors == null ? null : ctx_r93.confirmPassword.errors.validateEqual) && ctx_r93.showErrorAlert("Passwword mismatch", "New password and confirmation password do not match"); return ctx_r93.canAssignRoles && !ctx_r93.isEditingSelf && !ctx_r93.roles.valid && ctx_r93.showErrorAlert("Roles is required", "Please select a minimum of 1 role"); });
    ɵɵelementStart(2, "div", 3);
    ɵɵelementStart(3, "label", 4);
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(6, UserInfoComponent_form_1_div_6_Template, 3, 5, "div", 5);
    ɵɵtemplate(7, UserInfoComponent_form_1_div_7_Template, 2, 6, "div", 5);
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 6);
    ɵɵelementStart(9, "div", 7);
    ɵɵelement(10, "hr");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 8);
    ɵɵelementStart(12, "label", 4);
    ɵɵtext(13);
    ɵɵpipe(14, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(15, UserInfoComponent_form_1_div_15_Template, 3, 5, "div", 5);
    ɵɵtemplate(16, UserInfoComponent_form_1_div_16_Template, 5, 13, "div", 5);
    ɵɵelementEnd();
    ɵɵtemplate(17, UserInfoComponent_form_1_div_17_Template, 3, 0, "div", 9);
    ɵɵtemplate(18, UserInfoComponent_form_1_div_18_Template, 12, 16, "div", 10);
    ɵɵelementStart(19, "div", 6);
    ɵɵelementStart(20, "div", 7);
    ɵɵelement(21, "hr");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(22, "div", 8);
    ɵɵelementStart(23, "label", 4);
    ɵɵtext(24);
    ɵɵpipe(25, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(26, UserInfoComponent_form_1_div_26_Template, 3, 5, "div", 5);
    ɵɵtemplate(27, UserInfoComponent_form_1_div_27_Template, 6, 13, "div", 5);
    ɵɵelementEnd();
    ɵɵtemplate(28, UserInfoComponent_form_1_div_28_Template, 3, 4, "div", 9);
    ɵɵtemplate(29, UserInfoComponent_form_1_div_29_Template, 6, 6, "div", 11);
    ɵɵtemplate(30, UserInfoComponent_form_1_div_30_Template, 3, 4, "div", 9);
    ɵɵtemplate(31, UserInfoComponent_form_1_div_31_Template, 6, 9, "div", 10);
    ɵɵelementStart(32, "div", 6);
    ɵɵelementStart(33, "div", 7);
    ɵɵelement(34, "hr");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(35, "div", 3);
    ɵɵelementStart(36, "label", 4);
    ɵɵtext(37);
    ɵɵpipe(38, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(39, UserInfoComponent_form_1_div_39_Template, 3, 5, "div", 5);
    ɵɵtemplate(40, UserInfoComponent_form_1_div_40_Template, 2, 6, "div", 5);
    ɵɵelementEnd();
    ɵɵelementStart(41, "div", 6);
    ɵɵelementStart(42, "div", 7);
    ɵɵelement(43, "hr");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(44, "div", 3);
    ɵɵelementStart(45, "label", 4);
    ɵɵtext(46);
    ɵɵpipe(47, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(48, UserInfoComponent_form_1_div_48_Template, 3, 5, "div", 5);
    ɵɵtemplate(49, UserInfoComponent_form_1_div_49_Template, 2, 6, "div", 5);
    ɵɵelementEnd();
    ɵɵtemplate(50, UserInfoComponent_form_1_div_50_Template, 3, 4, "div", 9);
    ɵɵtemplate(51, UserInfoComponent_form_1_div_51_Template, 14, 5, "div", 11);
    ɵɵelement(52, "div", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("autocomplete", ctx_r0.isGeneralEditor ? "NaN" : null);
    ɵɵadvance(3);
    ɵɵclassProp("col-lg-3", ctx_r0.isViewOnly)("col-lg-2", !ctx_r0.isViewOnly);
    ɵɵpropertyInterpolate1("for", "jobTitle-", ctx_r0.uniqueId, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 65, "users.editor.JobTitle"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.isEditMode);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isEditMode);
    ɵɵadvance(3);
    ɵɵclassProp("separator-hr", !ctx_r0.isEditMode)("edit-separator-hr", ctx_r0.isEditMode);
    ɵɵadvance(2);
    ɵɵclassProp("col-lg-3", ctx_r0.isViewOnly)("col-lg-2", !ctx_r0.isViewOnly);
    ɵɵpropertyInterpolate1("for", "userName-", ctx_r0.uniqueId, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(14, 67, "users.editor.UserName"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.isEditMode || ctx_r0.isEditingSelf);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isEditMode && !ctx_r0.isEditingSelf);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isEditMode && ctx_r0.isEditingSelf && !ctx_r0.isChangePassword && ctx_r0.user.userName != ctx_r0.userEdit.userName);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isEditMode && ctx_r0.isEditingSelf && !ctx_r0.isChangePassword && ctx_r0.user.userName != ctx_r0.userEdit.userName);
    ɵɵadvance(3);
    ɵɵclassProp("separator-hr", !ctx_r0.isEditMode)("edit-separator-hr", ctx_r0.isEditMode);
    ɵɵadvance(2);
    ɵɵclassProp("col-lg-3", ctx_r0.isViewOnly)("col-lg-2", !ctx_r0.isViewOnly);
    ɵɵpropertyInterpolate1("for", "email-", ctx_r0.uniqueId, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(25, 69, "users.editor.Email"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.isEditMode);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isEditMode);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isEditMode);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isEditMode);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.isEditMode || ctx_r0.canAssignRoles || ctx_r0.isEditingSelf);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.isEditMode || ctx_r0.canAssignRoles || ctx_r0.isEditingSelf);
    ɵɵadvance(3);
    ɵɵclassProp("separator-hr", !ctx_r0.isEditMode)("edit-separator-hr", ctx_r0.isEditMode);
    ɵɵadvance(2);
    ɵɵclassProp("col-lg-3", ctx_r0.isViewOnly)("col-lg-2", !ctx_r0.isViewOnly);
    ɵɵpropertyInterpolate1("for", "fullName-", ctx_r0.uniqueId, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(38, 71, "users.editor.FullName"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.isEditMode);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isEditMode);
    ɵɵadvance(3);
    ɵɵclassProp("separator-hr", !ctx_r0.isEditMode)("edit-separator-hr", ctx_r0.isEditMode);
    ɵɵadvance(2);
    ɵɵclassProp("col-lg-3", ctx_r0.isViewOnly)("col-lg-2", !ctx_r0.isViewOnly);
    ɵɵpropertyInterpolate1("for", "phoneNumber-", ctx_r0.uniqueId, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(47, 73, "users.editor.PhoneNumber"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.isEditMode);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.isEditMode);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.isViewOnly);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.isViewOnly);
} }
class UserInfoComponent {
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
    ngOnInit() {
        if (!this.isGeneralEditor) {
            this.loadCurrentUserData();
        }
    }
    loadCurrentUserData() {
        this.alertService.startLoadingMessage();
        if (this.canViewAllRoles) {
            this.accountService.getUserAndRoles().subscribe(results => this.onCurrentUserDataLoadSuccessful(results[0], results[1]), error => this.onCurrentUserDataLoadFailed(error));
        }
        else {
            this.accountService.getUser().subscribe(user => this.onCurrentUserDataLoadSuccessful(user, user.roles.map(x => new Role(x))), error => this.onCurrentUserDataLoadFailed(error));
        }
    }
    onCurrentUserDataLoadSuccessful(user, roles) {
        this.alertService.stopLoadingMessage();
        this.user = user;
        this.allRoles = roles;
    }
    onCurrentUserDataLoadFailed(error) {
        this.alertService.stopLoadingMessage();
        this.alertService.showStickyMessage('Load Error', `Unable to retrieve user data from the server.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        this.user = new User();
    }
    getRoleByName(name) {
        return this.allRoles.find((r) => r.name == name);
    }
    showErrorAlert(caption, message) {
        this.alertService.showMessage(caption, message, MessageSeverity.error);
    }
    deletePasswordFromUser(user) {
        const userEdit = user;
        delete userEdit.currentPassword;
        delete userEdit.newPassword;
        delete userEdit.confirmPassword;
    }
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
    save() {
        this.isSaving = true;
        this.alertService.startLoadingMessage('Saving changes...');
        if (this.isNewUser) {
            this.accountService.newUser(this.userEdit).subscribe(user => this.saveSuccessHelper(user), error => this.saveFailedHelper(error));
        }
        else {
            this.accountService.updateUser(this.userEdit).subscribe(response => this.saveSuccessHelper(), error => this.saveFailedHelper(error));
        }
    }
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
    saveFailedHelper(error) {
        this.isSaving = false;
        this.alertService.stopLoadingMessage();
        this.alertService.showStickyMessage('Save Error', 'The below errors occured whilst saving your changes:', MessageSeverity.error, error);
        this.alertService.showStickyMessage(error, null, MessageSeverity.error);
        if (this.changesFailedCallback) {
            this.changesFailedCallback();
        }
    }
    testIsRoleUserCountChanged(currentUser, editedUser) {
        const rolesAdded = this.isNewUser ? editedUser.roles : editedUser.roles.filter(role => currentUser.roles.indexOf(role) == -1);
        const rolesRemoved = this.isNewUser ? [] : currentUser.roles.filter(role => editedUser.roles.indexOf(role) == -1);
        const modifiedRoles = rolesAdded.concat(rolesRemoved);
        if (modifiedRoles.length) {
            setTimeout(() => this.accountService.onRolesUserCountChanged(modifiedRoles));
        }
    }
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
    close() {
        this.userEdit = this.user = new UserEdit();
        this.showValidationErrors = false;
        this.resetForm();
        this.isEditMode = false;
        if (this.changesSavedCallback) {
            this.changesSavedCallback();
        }
    }
    refreshLoggedInUser() {
        this.accountService.refreshLoggedInUser()
            .subscribe(user => {
            this.loadCurrentUserData();
        }, error => {
            this.alertService.resetStickyMessage();
            this.alertService.showStickyMessage('Refresh failed', 'An error occured whilst refreshing logged in user information from the server', MessageSeverity.error, error);
        });
    }
    changePassword() {
        this.isChangePassword = true;
    }
    unlockUser() {
        this.isSaving = true;
        this.alertService.startLoadingMessage('Unblocking user...');
        this.accountService.unblockUser(this.userEdit.id)
            .subscribe(() => {
            this.isSaving = false;
            this.userEdit.isLockedOut = false;
            this.alertService.stopLoadingMessage();
            this.alertService.showMessage('Success', 'User has been successfully unblocked', MessageSeverity.success);
        }, error => {
            this.isSaving = false;
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Unblock Error', 'The below errors occured whilst unblocking the user:', MessageSeverity.error, error);
            this.alertService.showStickyMessage(error, null, MessageSeverity.error);
        });
    }
    resetForm(replace = false) {
        this.isChangePassword = false;
        if (!replace) {
            this.form.reset();
        }
        else {
            this.formResetToggle = false;
            setTimeout(() => {
                this.formResetToggle = true;
            });
        }
    }
    newUser(allRoles) {
        this.isGeneralEditor = true;
        this.isNewUser = true;
        this.allRoles = [...allRoles];
        this.user = this.userEdit = new UserEdit();
        this.userEdit.isEnabled = true;
        this.edit();
        return this.userEdit;
    }
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
    displayUser(user, allRoles) {
        this.user = new User();
        Object.assign(this.user, user);
        this.deletePasswordFromUser(this.user);
        this.setRoles(user, allRoles);
        this.isEditMode = false;
    }
    setRoles(user, allRoles) {
        this.allRoles = allRoles ? [...allRoles] : [];
        if (user.roles) {
            for (const ur of user.roles) {
                if (!this.allRoles.some(r => r.name == ur)) {
                    this.allRoles.unshift(new Role(ur));
                }
            }
        }
        if (allRoles == null || this.allRoles.length != allRoles.length) {
            setTimeout(() => {
                if (this.rolesSelector) {
                    this.rolesSelector.refresh();
                }
            });
        }
    }
    get canViewAllRoles() {
        return this.accountService.userHasPermission(Permission.viewRolesPermission);
    }
    get canAssignRoles() {
        return this.accountService.userHasPermission(Permission.assignRolesPermission);
    }
}
/** @nocollapse */ UserInfoComponent.ɵfac = function UserInfoComponent_Factory(t) { return new (t || UserInfoComponent)(ɵɵdirectiveInject(AlertService), ɵɵdirectiveInject(AccountService)); };
/** @nocollapse */ UserInfoComponent.ɵcmp = ɵɵdefineComponent({ type: UserInfoComponent, selectors: [["user-info"]], viewQuery: function UserInfoComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$2, true);
        ɵɵviewQuery(_c1$1, true);
        ɵɵviewQuery(_c2$1, true);
        ɵɵviewQuery(_c3$1, true);
        ɵɵviewQuery(_c4$1, true);
        ɵɵviewQuery(_c5$1, true);
        ɵɵviewQuery(_c6, true);
        ɵɵviewQuery(_c7, true);
        ɵɵviewQuery(_c8, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.form = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.userName = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.userPassword = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.email = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.currentPassword = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.newPassword = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.confirmPassword = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.roles = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rolesSelector = _t.first);
    } }, inputs: { isViewOnly: "isViewOnly", isGeneralEditor: "isGeneralEditor" }, decls: 2, vars: 1, consts: [["name", "userInfoForm", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["name", "userInfoForm", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", "row"], [1, "col-form-label", 3, "for"], [3, "col-lg-9", "col-lg-10", 4, "ngIf"], [1, "row"], [1, "col-lg-12"], [1, "form-group", "row", "has-feedback-icon"], ["class", "row", 4, "ngIf"], ["class", "form-group row has-feedback-icon", 4, "ngIf"], ["class", "form-group row", 4, "ngIf"], [1, "clearfix"], [1, "form-control-plaintext"], ["autofocus", "", "type", "text", "name", "jobTitle", "placeholder", "Enter Job Title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "userName", "placeholder", "Enter user name", "required", "", "minlength", "2", "maxlength", "200", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["userName", "ngModel"], ["class", "fa form-control-feedback", "aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "form-control-feedback", 3, "ngClass"], [1, "invalid-feedback"], [1, "password-separator-hr"], [1, "col-form-label", "col-lg-2", 3, "for"], [1, "col-lg-10"], ["type", "password", "name", "userPassword", "placeholder", "Enter password", "required", "", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["userPassword", "ngModel"], [1, "hint-sm"], ["type", "text", "name", "email", "placeholder", "Enter email address", "required", "", "maxlength", "200", "pattern", "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "col-lg-10", 4, "ngIf"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [1, "password-well", "card", "card-body", "bg-light"], [1, "col-form-label", "col-lg-3", 3, "for"], [1, "col-lg-9"], ["type", "password", "name", "newPassword", "placeholder", "Enter new password", "required", "", "minlength", "6", "validateEqual", "confirmPassword", "reverse", "true", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["newPassword", "ngModel"], ["type", "password", "name", "confirmPassword", "placeholder", "Confirm new password", "required", "", "validateEqual", "newPassword", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["confirmPassword", "ngModel"], ["type", "password", "name", "currentPassword", "placeholder", "Enter current password", "required", "", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["currentPassword", "ngModel"], ["for", "roles-user-info", 1, "col-form-label"], [3, "ngClass", "col-lg-9", "col-lg-10", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "badge", "badge-pill", "badge-secondary", 3, "title"], [3, "ngClass"], ["id", "roles-user-info", "name", "roles", "bootstrapSelect", "", "required", "", "multiple", "", "data-live-search", "true", "data-actions-box", "false", "data-live-search-placeholder", "Search...", "title", "Select Roles", 1, "selectpicker", "form-control", "left-status", 3, "ngModel", "ngModelChange"], ["roles", "ngModel", "rolesSelector", "bootstrap-select"], ["type", "text", "name", "fullName", "placeholder", "Enter full name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "phoneNumber", "placeholder", "Enter phone number", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-sm-5"], ["class", "float-left", 4, "ngIf"], [1, "col-sm-7"], [1, "float-right"], ["type", "button", "class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary", 3, "disabled", 4, "ngIf"], [1, "float-left"], [1, "form-check", "user-enabled"], ["type", "checkbox", "id", "idEnabled", "name", "isEnabled", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "idEnabled", 1, "form-check-label"], ["type", "button", "class", "btn btn-warning unblock-user", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-warning", "unblock-user", 3, "disabled", "click"], [1, "fa", "fa-unlock-alt"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-close"], [1, "fa", "fa-edit"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], [1, "fa", "fa-times"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "fa fa-save", 4, "ngIf"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], [1, "fa", "fa-save"], [1, "fa", "fa-circle-o-notch", "fa-spin"]], template: function UserInfoComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵtemplate(1, UserInfoComponent_form_1_Template, 53, 75, "form", 0);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.formResetToggle);
    } }, directives: [NgIf, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, DefaultValueAccessor, AutofocusDirective, NgControlStatus, NgModel, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgClass, PatternValidator, EqualValidator, NgForOf, SelectMultipleControlValueAccessor, BootstrapSelectDirective, NgSelectOption, ɵangular_packages_forms_forms_x, CheckboxControlValueAccessor], pipes: [TranslatePipe], styles: [".separator-hr[_ngcontent-%COMP%]{margin:0 5px;border-top-style:dashed}.edit-separator-hr[_ngcontent-%COMP%]{margin:10px 5px;border-top-style:dashed}.last-separator-hr[_ngcontent-%COMP%]{margin-top:5px}.edit-last-separator-hr[_ngcontent-%COMP%]{margin-top:15px}.password-separator-hr[_ngcontent-%COMP%]{margin:5px;border-style:none}.form-group[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}input.form-control[_ngcontent-%COMP%]{border-left-width:5px}.invalid-feedback[_ngcontent-%COMP%]{display:block}.password-well[_ngcontent-%COMP%]{padding:.5rem}.hint-sm[_ngcontent-%COMP%]{display:block}.form-check.user-enabled[_ngcontent-%COMP%]{display:inline-block}.unblock-user[_ngcontent-%COMP%]{margin-left:34px}@media (min-width:992px){.user-enabled[_ngcontent-%COMP%]{margin-left:40px}}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UserInfoComponent, [{
        type: Component,
        args: [{
                selector: 'user-info',
                templateUrl: './user-info.component.html',
                styleUrls: ['./user-info.component.scss']
            }]
    }], function () { return [{ type: AlertService }, { type: AccountService }]; }, { isViewOnly: [{
            type: Input
        }], isGeneralEditor: [{
            type: Input
        }], form: [{
            type: ViewChild,
            args: ['f', { static: false }]
        }], userName: [{
            type: ViewChild,
            args: ['userName', { static: false }]
        }], userPassword: [{
            type: ViewChild,
            args: ['userPassword', { static: false }]
        }], email: [{
            type: ViewChild,
            args: ['email', { static: false }]
        }], currentPassword: [{
            type: ViewChild,
            args: ['currentPassword', { static: false }]
        }], newPassword: [{
            type: ViewChild,
            args: ['newPassword', { static: false }]
        }], confirmPassword: [{
            type: ViewChild,
            args: ['confirmPassword', { static: false }]
        }], roles: [{
            type: ViewChild,
            args: ['roles', { static: false }]
        }], rolesSelector: [{
            type: ViewChild,
            args: ['rolesSelector', { static: false }]
        }] }); })();

// =============================
const _c0$3 = ["indexTemplate"];
const _c1$2 = ["userNameTemplate"];
const _c2$2 = ["rolesTemplate"];
const _c3$2 = ["actionsTemplate"];
const _c4$2 = ["editorModal"];
const _c5$2 = ["userEditor"];
function UsersManagementComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 23);
    ɵɵelementStart(1, "a", 24);
    ɵɵlistener("click", function UsersManagementComponent_li_9_Template_a_click_1_listener() { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(); return ctx_r13.newUser(); });
    ɵɵelement(2, "i", 25);
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 1, "users.management.NewUser"), " ");
} }
function UsersManagementComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "strong");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const value_r15 = ctx.value;
    ɵɵadvance(1);
    ɵɵtextInterpolate(value_r15);
} }
function UsersManagementComponent_ng_template_13_i_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 28);
} }
function UsersManagementComponent_ng_template_13_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 29);
} }
function UsersManagementComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, UsersManagementComponent_ng_template_13_i_1_Template, 1, 0, "i", 26);
    ɵɵtemplate(2, UsersManagementComponent_ng_template_13_i_2_Template, 1, 0, "i", 27);
    ɵɵtext(3);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r16 = ctx.row;
    const value_r17 = ctx.value;
    ɵɵclassProp("locked-out", row_r16.isLockedOut)("user-disabled", !row_r16.isEnabled);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", row_r16.isLockedOut);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !row_r16.isEnabled);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", value_r17, " ");
} }
function UsersManagementComponent_ng_template_15_span_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 31);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const role_r24 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(role_r24);
} }
function UsersManagementComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, UsersManagementComponent_ng_template_15_span_0_Template, 2, 1, "span", 30);
} if (rf & 2) {
    const value_r21 = ctx.value;
    ɵɵproperty("ngForOf", value_r21);
} }
function UsersManagementComponent_ng_template_17_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r31 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "a", 33);
    ɵɵlistener("click", function UsersManagementComponent_ng_template_17_div_0_Template_a_click_1_listener() { ɵɵrestoreView(_r31); const row_r25 = ɵɵnextContext().row; const ctx_r29 = ɵɵnextContext(); return ctx_r29.editUser(row_r25); });
    ɵɵelement(2, "i", 34);
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
    ɵɵtext(5, "| ");
    ɵɵelementStart(6, "a", 33);
    ɵɵlistener("click", function UsersManagementComponent_ng_template_17_div_0_Template_a_click_6_listener() { ɵɵrestoreView(_r31); const row_r25 = ɵɵnextContext().row; const ctx_r32 = ɵɵnextContext(); return ctx_r32.deleteUser(row_r25); });
    ɵɵelement(7, "i", 35);
    ɵɵtext(8);
    ɵɵpipe(9, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 2, "users.management.Edit"), "");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 4, "users.management.Delete"), "");
} }
function UsersManagementComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, UsersManagementComponent_ng_template_17_div_0_Template, 10, 6, "div", 32);
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r8.canManageUsers);
} }
function UsersManagementComponent_h4_24_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h4", 36);
    ɵɵelement(1, "i", 37);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "users.management.NewUser"), "");
} }
function UsersManagementComponent_h4_25_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h4", 36);
    ɵɵelement(1, "i", 38);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 1, "users.management.EditUser", ctx_r11.editingUserName), "");
} }
const _c6$1 = function () { return { backdrop: "static" }; };
class UsersManagementComponent {
    constructor(alertService, translationService, accountService) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.columns = [];
        this.rows = [];
        this.rowsCache = [];
        this.allRoles = [];
    }
    ngOnInit() {
        const gT = (key) => this.translationService.getTranslation(key);
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
    ngAfterViewInit() {
        this.userEditor.changesSavedCallback = () => {
            this.addNewUserToList();
            this.editorModal.hide();
        };
        this.userEditor.changesCancelledCallback = () => {
            this.editedUser = null;
            this.sourceUser = null;
            this.editorModal.hide();
        };
    }
    addNewUserToList() {
        if (this.sourceUser) {
            Object.assign(this.sourceUser, this.editedUser);
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
            const user = new User();
            Object.assign(user, this.editedUser);
            this.editedUser = null;
            let maxIndex = 0;
            for (const u of this.rowsCache) {
                if (u.index > maxIndex) {
                    maxIndex = u.index;
                }
            }
            user.index = maxIndex + 1;
            this.rowsCache.splice(0, 0, user);
            this.rows.splice(0, 0, user);
            this.rows = [...this.rows];
        }
    }
    loadData() {
        this.alertService.startLoadingMessage();
        this.loadingIndicator = true;
        if (this.canViewRoles) {
            this.accountService.getUsersAndRoles().subscribe(results => this.onDataLoadSuccessful(results[0], results[1]), error => this.onDataLoadFailed(error));
        }
        else {
            this.accountService.getUsers().subscribe(users => this.onDataLoadSuccessful(users, this.accountService.currentUser.roles.map(x => new Role(x))), error => this.onDataLoadFailed(error));
        }
    }
    onDataLoadSuccessful(users, roles) {
        this.alertService.stopLoadingMessage();
        this.loadingIndicator = false;
        users.forEach((user, index, users) => {
            user.index = index + 1;
        });
        this.rowsCache = [...users];
        this.rows = users;
        this.allRoles = roles;
    }
    onDataLoadFailed(error) {
        this.alertService.stopLoadingMessage();
        this.loadingIndicator = false;
        this.alertService.showStickyMessage('Load Error', `Unable to retrieve users from the server.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
    }
    onSearchChanged(value) {
        this.rows = this.rowsCache.filter(r => Utilities.searchArray(value, false, r.userName, r.fullName, r.email, r.phoneNumber, r.jobTitle, r.roles));
    }
    onEditorModalHidden() {
        this.editingUserName = null;
        this.userEditor.resetForm(true);
    }
    newUser() {
        this.editingUserName = null;
        this.sourceUser = null;
        this.editedUser = this.userEditor.newUser(this.allRoles);
        this.editorModal.show();
    }
    editUser(row) {
        this.editingUserName = { name: row.userName };
        this.sourceUser = row;
        this.editedUser = this.userEditor.editUser(row, this.allRoles);
        this.editorModal.show();
    }
    deleteUser(row) {
        this.alertService.showDialog('Are you sure you want to delete \"' + row.userName + '\"?', DialogType.confirm, () => this.deleteUserHelper(row));
    }
    deleteUserHelper(row) {
        this.alertService.startLoadingMessage('Deleting...');
        this.loadingIndicator = true;
        this.accountService.deleteUser(row)
            .subscribe(results => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.rowsCache = this.rowsCache.filter(item => item !== row);
            this.rows = this.rows.filter(item => item !== row);
        }, error => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.alertService.showStickyMessage('Delete Error', `An error occured whilst deleting the user.\r\nError: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        });
    }
    get canAssignRoles() {
        return this.accountService.userHasPermission(Permission.assignRolesPermission);
    }
    get canViewRoles() {
        return this.accountService.userHasPermission(Permission.viewRolesPermission);
    }
    get canManageUsers() {
        return this.accountService.userHasPermission(Permission.manageUsersPermission);
    }
}
/** @nocollapse */ UsersManagementComponent.ɵfac = function UsersManagementComponent_Factory(t) { return new (t || UsersManagementComponent)(ɵɵdirectiveInject(AlertService), ɵɵdirectiveInject(AppTranslationService), ɵɵdirectiveInject(AccountService)); };
/** @nocollapse */ UsersManagementComponent.ɵcmp = ɵɵdefineComponent({ type: UsersManagementComponent, selectors: [["users-management"]], viewQuery: function UsersManagementComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$3, true);
        ɵɵstaticViewQuery(_c1$2, true);
        ɵɵstaticViewQuery(_c2$2, true);
        ɵɵstaticViewQuery(_c3$2, true);
        ɵɵstaticViewQuery(_c4$2, true);
        ɵɵstaticViewQuery(_c5$2, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.indexTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.userNameTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rolesTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionsTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editorModal = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.userEditor = _t.first);
    } }, decls: 32, vars: 17, consts: [[1, "row", "control-box"], [1, "col-lg-8"], [1, "form-group", "search-box"], [3, "placeholder", "searchChange"], [1, "col-lg-4", "pr-lg-5"], [1, "nav", "flex-column", "flex-lg-row", "justify-content-end"], ["class", "nav-item toolbaritem", 4, "ngIf"], [1, "material", "colored-header", "sm", "table", "table-striped", "table-hover", 3, "loadingIndicator", "rows", "rowHeight", "headerHeight", "footerHeight", "columns", "scrollbarV", "columnMode"], ["indexTemplate", ""], ["userNameTemplate", ""], ["rolesTemplate", ""], ["actionsTemplate", ""], ["bsModal", "", "tabindex", "-1", 1, "modal", "fade", 3, "config", "onHidden"], ["editorModal", "bs-modal"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["class", "modal-title float-left", 4, "ngIf"], ["type", "button", "title", "Close", 1, "close", "float-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "isGeneralEditor"], ["userEditor", ""], [1, "nav-item", "toolbaritem"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "fa", "fa-plus-circle"], ["class", "fa fa-exclamation-triangle", 4, "ngIf"], ["class", "fa fa-exclamation", 4, "ngIf"], [1, "fa", "fa-exclamation-triangle"], [1, "fa", "fa-exclamation"], ["class", "user-role badge badge-pill badge-secondary", 4, "ngFor", "ngForOf"], [1, "user-role", "badge", "badge-pill", "badge-secondary"], [4, "ngIf"], ["href", "javascript:;", 1, "btn", "btn-link", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o"], ["aria-hidden", "true", 1, "fa", "fa-trash-o"], [1, "modal-title", "float-left"], [1, "fa", "fa-user-plus"], [1, "fa", "fa-user-circle-o"]], template: function UsersManagementComponent_Template(rf, ctx) { if (rf & 1) {
        const _r34 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "div", 0);
        ɵɵelementStart(2, "div", 1);
        ɵɵelementStart(3, "div", 2);
        ɵɵelementStart(4, "search-box", 3);
        ɵɵlistener("searchChange", function UsersManagementComponent_Template_search_box_searchChange_4_listener($event) { return ctx.onSearchChanged($event); });
        ɵɵpipe(5, "translate");
        ɵɵtext(6, ">");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 4);
        ɵɵelementStart(8, "ul", 5);
        ɵɵtemplate(9, UsersManagementComponent_li_9_Template, 5, 3, "li", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(10, "ngx-datatable", 7);
        ɵɵtemplate(11, UsersManagementComponent_ng_template_11_Template, 2, 1, "ng-template", null, 8, ɵɵtemplateRefExtractor);
        ɵɵtemplate(13, UsersManagementComponent_ng_template_13_Template, 4, 7, "ng-template", null, 9, ɵɵtemplateRefExtractor);
        ɵɵtemplate(15, UsersManagementComponent_ng_template_15_Template, 1, 1, "ng-template", null, 10, ɵɵtemplateRefExtractor);
        ɵɵtemplate(17, UsersManagementComponent_ng_template_17_Template, 1, 1, "ng-template", null, 11, ɵɵtemplateRefExtractor);
        ɵɵelementStart(19, "div", 12, 13);
        ɵɵlistener("onHidden", function UsersManagementComponent_Template_div_onHidden_19_listener() { return ctx.onEditorModalHidden(); });
        ɵɵelementStart(21, "div", 14);
        ɵɵelementStart(22, "div", 15);
        ɵɵelementStart(23, "div", 16);
        ɵɵtemplate(24, UsersManagementComponent_h4_24_Template, 4, 3, "h4", 17);
        ɵɵtemplate(25, UsersManagementComponent_h4_25_Template, 4, 4, "h4", 17);
        ɵɵelementStart(26, "button", 18);
        ɵɵlistener("click", function UsersManagementComponent_Template_button_click_26_listener() { ɵɵrestoreView(_r34); const _r9 = ɵɵreference(20); return _r9.hide(); });
        ɵɵelementStart(27, "span", 19);
        ɵɵtext(28, "\u00D7");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(29, "div", 20);
        ɵɵelement(30, "user-info", 21, 22);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(5, 14, "users.management.Search"));
        ɵɵadvance(5);
        ɵɵproperty("ngIf", ctx.canManageUsers && ctx.canAssignRoles);
        ɵɵadvance(1);
        ɵɵproperty("loadingIndicator", ctx.loadingIndicator)("rows", ctx.rows)("rowHeight", 35)("headerHeight", 35)("footerHeight", 35)("columns", ctx.columns)("scrollbarV", true)("columnMode", "force");
        ɵɵadvance(9);
        ɵɵproperty("config", ɵɵpureFunction0(16, _c6$1));
        ɵɵadvance(5);
        ɵɵproperty("ngIf", !ctx.editingUserName);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.editingUserName);
        ɵɵadvance(5);
        ɵɵproperty("isGeneralEditor", true);
    } }, directives: [SearchBoxComponent, NgIf, DatatableComponent, ModalDirective, UserInfoComponent, NgForOf], pipes: [TranslatePipe], styles: [".user-role[_ngcontent-%COMP%]{font-size:.8em!important;margin-right:1px}.control-box[_ngcontent-%COMP%]{margin-bottom:5px}.search-box[_ngcontent-%COMP%]{margin:0}.nav-item.toolbaritem[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-top:3px;padding-bottom:3px;min-width:100px}.user-disabled[_ngcontent-%COMP%]{color:#777;font-style:italic}.locked-out[_ngcontent-%COMP%]{background-color:#ff4500;color:#f5f5f5;width:100%;display:inline-block;padding-left:5px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UsersManagementComponent, [{
        type: Component,
        args: [{
                selector: 'users-management',
                templateUrl: './users-management.component.html',
                styleUrls: ['./users-management.component.scss']
            }]
    }], function () { return [{ type: AlertService }, { type: AppTranslationService }, { type: AccountService }]; }, { indexTemplate: [{
            type: ViewChild,
            args: ['indexTemplate', { static: true }]
        }], userNameTemplate: [{
            type: ViewChild,
            args: ['userNameTemplate', { static: true }]
        }], rolesTemplate: [{
            type: ViewChild,
            args: ['rolesTemplate', { static: true }]
        }], actionsTemplate: [{
            type: ViewChild,
            args: ['actionsTemplate', { static: true }]
        }], editorModal: [{
            type: ViewChild,
            args: ['editorModal', { static: true }]
        }], userEditor: [{
            type: ViewChild,
            args: ['userEditor', { static: true }]
        }] }); })();

// =============================
const _c0$4 = ["languageSelector"];
const _c1$3 = ["homePageSelector"];
function UserPreferencesComponent_option_57_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 49);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "preferences.Customers"));
} }
function UserPreferencesComponent_option_58_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 50);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "preferences.Products"));
} }
function UserPreferencesComponent_option_59_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 51);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "preferences.Orders"));
} }
function UserPreferencesComponent_div_77_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option");
    ɵɵpipe(1, "translate");
    ɵɵtext(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const theme_r7 = ctx.$implicit;
    ɵɵattributeInterpolate4("data-content", "<div class='theme-item' style='background-color: ", theme_r7.background, "; color: ", theme_r7.color, "'>", ɵɵpipeBind1(1, 5, "preferences." + theme_r7.name + "Theme"), "\n                <span class='small'>", theme_r7.isDark ? "(Dark)" : "", "</span></div>");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", theme_r7.id, " ");
} }
function UserPreferencesComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵelementStart(1, "select", 52);
    ɵɵlistener("ngModelChange", function UserPreferencesComponent_div_77_Template_select_ngModelChange_1_listener($event) { ɵɵrestoreView(_r9); const ctx_r8 = ɵɵnextContext(); return ctx_r8.configurations.themeId = $event; });
    ɵɵtemplate(2, UserPreferencesComponent_div_77_option_2_Template, 3, 7, "option", 53);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r5.configurations.themeId);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r5.themeManager.themes);
} }
class UserPreferencesComponent {
    constructor(alertService, translationService, accountService, themeManager, configurations) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.themeManager = themeManager;
        this.configurations = configurations;
        this.themeSelectorToggle = true;
    }
    ngOnInit() {
        this.languageChangedSubscription = this.translationService.languageChanged$.subscribe(data => {
            this.themeSelectorToggle = false;
            setTimeout(() => {
                this.languageSelector.refresh();
                this.homePageSelector.refresh();
                this.themeSelectorToggle = true;
            });
        });
    }
    ngOnDestroy() {
        this.languageChangedSubscription.unsubscribe();
    }
    reloadFromServer() {
        this.alertService.startLoadingMessage();
        this.accountService.getUserPreferences()
            .subscribe(results => {
            this.alertService.stopLoadingMessage();
            this.configurations.import(results);
            this.alertService.showMessage('Defaults loaded!', '', MessageSeverity.info);
        }, error => {
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Load Error', `Unable to retrieve user preferences from the server.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        });
    }
    setAsDefault() {
        this.alertService.showDialog('Are you sure you want to set the current configuration as your new defaults?', DialogType.confirm, () => this.setAsDefaultHelper(), () => this.alertService.showMessage('Operation Cancelled!', '', MessageSeverity.default));
    }
    setAsDefaultHelper() {
        this.alertService.startLoadingMessage('', 'Saving new defaults');
        this.accountService.updateUserPreferences(this.configurations.export())
            .subscribe(response => {
            this.alertService.stopLoadingMessage();
            this.alertService.showMessage('New Defaults', 'Account defaults updated successfully', MessageSeverity.success);
        }, error => {
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Save Error', `An error occured whilst saving configuration defaults.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        });
    }
    resetDefault() {
        this.alertService.showDialog('Are you sure you want to reset your defaults?', DialogType.confirm, () => this.resetDefaultHelper(), () => this.alertService.showMessage('Operation Cancelled!', '', MessageSeverity.default));
    }
    resetDefaultHelper() {
        this.alertService.startLoadingMessage('', 'Resetting defaults');
        this.accountService.updateUserPreferences(null)
            .subscribe(response => {
            this.alertService.stopLoadingMessage();
            this.configurations.import(null);
            this.alertService.showMessage('Defaults Reset', 'Account defaults reset completed successfully', MessageSeverity.success);
        }, error => {
            this.alertService.stopLoadingMessage();
            this.alertService.showStickyMessage('Save Error', `An error occured whilst resetting configuration defaults.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        });
    }
    get canViewCustomers() {
        return this.accountService.userHasPermission(Permission.viewUsersPermission); // eg. viewCustomersPermission
    }
    get canViewProducts() {
        return this.accountService.userHasPermission(Permission.viewUsersPermission); // eg. viewProductsPermission
    }
    get canViewOrders() {
        return true; // eg. viewOrdersPermission
    }
}
/** @nocollapse */ UserPreferencesComponent.ɵfac = function UserPreferencesComponent_Factory(t) { return new (t || UserPreferencesComponent)(ɵɵdirectiveInject(AlertService), ɵɵdirectiveInject(AppTranslationService), ɵɵdirectiveInject(AccountService), ɵɵdirectiveInject(ThemeManager), ɵɵdirectiveInject(ConfigurationService)); };
/** @nocollapse */ UserPreferencesComponent.ɵcmp = ɵɵdefineComponent({ type: UserPreferencesComponent, selectors: [["user-preferences"]], viewQuery: function UserPreferencesComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$4, true);
        ɵɵstaticViewQuery(_c1$3, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.languageSelector = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.homePageSelector = _t.first);
    } }, decls: 155, vars: 91, consts: [[1, "form-group", "row"], ["for", "refreshButton", 1, "col-sm-3", "col-form-label"], [1, "col-sm-4"], ["id", "refreshButton", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-refresh"], [1, "col-sm-5"], [1, "form-control-plaintext", "text-muted", "small"], [1, "row"], [1, "col-md-12"], [1, "separator-hr"], ["for", "language", 1, "col-sm-3", "col-form-label"], ["id", "language", "bootstrapSelect", "", 1, "selectpicker", "form-control", 3, "ngModel", "ngModelChange"], ["languageSelector", "bootstrap-select"], ["data-subtext", "(Default)", "value", "en"], ["value", "fr"], ["value", "de"], ["value", "pt"], ["value", "ar"], ["value", "ko"], ["for", "homePage", 1, "col-sm-3", "col-form-label"], ["id", "homePage", "bootstrapSelect", "", 1, "selectpicker", "form-control", 3, "ngModel", "ngModelChange"], ["homePageSelector", "bootstrap-select"], ["data-icon", "fa fa-tachometer", "data-subtext", "(Default)", "value", "/"], ["data-icon", "fa fa-handshake-o", "value", "/customers", 4, "ngIf"], ["data-icon", "fa fa-truck", "value", "/products", 4, "ngIf"], ["data-icon", "fa fa-shopping-cart", "value", "/orders", 4, "ngIf"], ["data-icon", "fa fa-info-circle", "value", "/about"], ["data-icon", "fa fa-cog", "value", "/settings"], ["for", "defaultTheme", 1, "col-sm-3", "col-form-label"], ["class", "col-sm-4", 4, "ngIf"], ["for", "dashboardStatistics", 1, "col-sm-3", "col-form-label"], [1, "checkbox"], ["name", "dashboardStatistics", "type", "checkbox", "bootstrapToggle", "", "data-size", "small", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "subseparator-hr"], ["for", "dashboardTodo", 1, "col-sm-3", "col-form-label"], ["name", "dashboardNotifications", "type", "checkbox", "bootstrapToggle", "", "data-size", "small", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "dashboardTodo", "type", "checkbox", "bootstrapToggle", "", "data-size", "small", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "dashboardBanner", 1, "col-sm-3", "col-form-label"], ["name", "dashboardBanner", "type", "checkbox", "bootstrapToggle", "", "data-size", "small", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "last-separator-hr"], [1, "col-sm-3"], [1, "col-sm-9"], [1, "row", "float-left"], [1, "col-sm-6", "col-reset-default"], ["type", "button", 1, "btn", "btn-success", 3, "click"], [1, "fa", "fa-circle-o-notch"], [1, "col-sm-6", "col-set-default"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-hdd-o"], ["data-icon", "fa fa-handshake-o", "value", "/customers"], ["data-icon", "fa fa-truck", "value", "/products"], ["data-icon", "fa fa-shopping-cart", "value", "/orders"], ["id", "defaultTheme", "bootstrapSelect", "", 1, "selectpicker", "theme-picker", "form-control", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"]], template: function UserPreferencesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "div", 0);
        ɵɵelementStart(2, "label", 1);
        ɵɵtext(3);
        ɵɵpipe(4, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 2);
        ɵɵelementStart(6, "button", 3);
        ɵɵlistener("click", function UserPreferencesComponent_Template_button_click_6_listener() { return ctx.reloadFromServer(); });
        ɵɵelement(7, "i", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "div", 5);
        ɵɵelementStart(9, "p", 6);
        ɵɵtext(10);
        ɵɵpipe(11, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "div", 7);
        ɵɵelementStart(13, "div", 8);
        ɵɵelement(14, "hr", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(15, "div", 0);
        ɵɵelementStart(16, "label", 10);
        ɵɵtext(17);
        ɵɵpipe(18, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(19, "div", 2);
        ɵɵelementStart(20, "select", 11, 12);
        ɵɵlistener("ngModelChange", function UserPreferencesComponent_Template_select_ngModelChange_20_listener($event) { return ctx.configurations.language = $event; });
        ɵɵelementStart(22, "option", 13);
        ɵɵtext(23);
        ɵɵpipe(24, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(25, "option", 14);
        ɵɵtext(26);
        ɵɵpipe(27, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(28, "option", 15);
        ɵɵtext(29);
        ɵɵpipe(30, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(31, "option", 16);
        ɵɵtext(32);
        ɵɵpipe(33, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(34, "option", 17);
        ɵɵtext(35);
        ɵɵpipe(36, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(37, "option", 18);
        ɵɵtext(38);
        ɵɵpipe(39, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(40, "div", 5);
        ɵɵelementStart(41, "p", 6);
        ɵɵtext(42);
        ɵɵpipe(43, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(44, "div", 7);
        ɵɵelementStart(45, "div", 8);
        ɵɵelement(46, "hr", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(47, "div", 0);
        ɵɵelementStart(48, "label", 19);
        ɵɵtext(49);
        ɵɵpipe(50, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(51, "div", 2);
        ɵɵelementStart(52, "select", 20, 21);
        ɵɵlistener("ngModelChange", function UserPreferencesComponent_Template_select_ngModelChange_52_listener($event) { return ctx.configurations.homeUrl = $event; });
        ɵɵelementStart(54, "option", 22);
        ɵɵtext(55);
        ɵɵpipe(56, "translate");
        ɵɵelementEnd();
        ɵɵtemplate(57, UserPreferencesComponent_option_57_Template, 3, 3, "option", 23);
        ɵɵtemplate(58, UserPreferencesComponent_option_58_Template, 3, 3, "option", 24);
        ɵɵtemplate(59, UserPreferencesComponent_option_59_Template, 3, 3, "option", 25);
        ɵɵelementStart(60, "option", 26);
        ɵɵtext(61);
        ɵɵpipe(62, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(63, "option", 27);
        ɵɵtext(64);
        ɵɵpipe(65, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(66, "div", 5);
        ɵɵelementStart(67, "p", 6);
        ɵɵtext(68);
        ɵɵpipe(69, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(70, "div", 7);
        ɵɵelementStart(71, "div", 8);
        ɵɵelement(72, "hr", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(73, "div", 0);
        ɵɵelementStart(74, "label", 28);
        ɵɵtext(75);
        ɵɵpipe(76, "translate");
        ɵɵelementEnd();
        ɵɵtemplate(77, UserPreferencesComponent_div_77_Template, 3, 2, "div", 29);
        ɵɵelementStart(78, "div", 5);
        ɵɵelementStart(79, "p", 6);
        ɵɵtext(80);
        ɵɵpipe(81, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(82, "div", 7);
        ɵɵelementStart(83, "div", 8);
        ɵɵelement(84, "hr", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(85, "div", 0);
        ɵɵelementStart(86, "label", 30);
        ɵɵtext(87);
        ɵɵpipe(88, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(89, "div", 2);
        ɵɵelementStart(90, "div", 31);
        ɵɵelementStart(91, "input", 32);
        ɵɵlistener("ngModelChange", function UserPreferencesComponent_Template_input_ngModelChange_91_listener($event) { return ctx.configurations.showDashboardStatistics = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(92, "div", 5);
        ɵɵelementStart(93, "p", 6);
        ɵɵtext(94);
        ɵɵpipe(95, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(96, "div", 7);
        ɵɵelementStart(97, "div", 8);
        ɵɵelement(98, "hr", 33);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(99, "div", 0);
        ɵɵelementStart(100, "label", 34);
        ɵɵtext(101);
        ɵɵpipe(102, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(103, "div", 2);
        ɵɵelementStart(104, "div", 31);
        ɵɵelementStart(105, "input", 35);
        ɵɵlistener("ngModelChange", function UserPreferencesComponent_Template_input_ngModelChange_105_listener($event) { return ctx.configurations.showDashboardNotifications = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(106, "div", 5);
        ɵɵelementStart(107, "p", 6);
        ɵɵtext(108);
        ɵɵpipe(109, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(110, "div", 7);
        ɵɵelementStart(111, "div", 8);
        ɵɵelement(112, "hr", 33);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(113, "div", 0);
        ɵɵelementStart(114, "label", 34);
        ɵɵtext(115);
        ɵɵpipe(116, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(117, "div", 2);
        ɵɵelementStart(118, "div", 31);
        ɵɵelementStart(119, "input", 36);
        ɵɵlistener("ngModelChange", function UserPreferencesComponent_Template_input_ngModelChange_119_listener($event) { return ctx.configurations.showDashboardTodo = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(120, "div", 5);
        ɵɵelementStart(121, "p", 6);
        ɵɵtext(122);
        ɵɵpipe(123, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(124, "div", 7);
        ɵɵelementStart(125, "div", 8);
        ɵɵelement(126, "hr", 33);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(127, "div", 0);
        ɵɵelementStart(128, "label", 37);
        ɵɵtext(129);
        ɵɵpipe(130, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(131, "div", 2);
        ɵɵelementStart(132, "div", 31);
        ɵɵelementStart(133, "input", 38);
        ɵɵlistener("ngModelChange", function UserPreferencesComponent_Template_input_ngModelChange_133_listener($event) { return ctx.configurations.showDashboardBanner = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(134, "div", 5);
        ɵɵelementStart(135, "p", 6);
        ɵɵtext(136);
        ɵɵpipe(137, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(138, "div", 7);
        ɵɵelementStart(139, "div", 8);
        ɵɵelement(140, "hr", 39);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(141, "div", 0);
        ɵɵelement(142, "div", 40);
        ɵɵelementStart(143, "div", 41);
        ɵɵelementStart(144, "div", 42);
        ɵɵelementStart(145, "div", 43);
        ɵɵelementStart(146, "button", 44);
        ɵɵlistener("click", function UserPreferencesComponent_Template_button_click_146_listener() { return ctx.resetDefault(); });
        ɵɵelement(147, "i", 45);
        ɵɵtext(148);
        ɵɵpipe(149, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(150, "div", 46);
        ɵɵelementStart(151, "button", 47);
        ɵɵlistener("click", function UserPreferencesComponent_Template_button_click_151_listener() { return ctx.setAsDefault(); });
        ɵɵelement(152, "i", 48);
        ɵɵtext(153);
        ɵɵpipe(154, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵtextInterpolate1("", ɵɵpipeBind1(4, 37, "preferences.ReloadPreferences"), " ");
        ɵɵadvance(7);
        ɵɵtextInterpolate(ɵɵpipeBind1(11, 39, "preferences.ReloadPreferencesHint"));
        ɵɵadvance(7);
        ɵɵtextInterpolate1("", ɵɵpipeBind1(18, 41, "preferences.Language"), " ");
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.configurations.language);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(24, 43, "preferences.English"));
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(27, 45, "preferences.French"));
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(30, 47, "preferences.German"));
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(33, 49, "preferences.Portuguese"));
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(36, 51, "preferences.Arabic"));
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(39, 53, "preferences.Korean"));
        ɵɵadvance(4);
        ɵɵtextInterpolate(ɵɵpipeBind1(43, 55, "preferences.LanguageHint"));
        ɵɵadvance(7);
        ɵɵtextInterpolate1("", ɵɵpipeBind1(50, 57, "preferences.HomePage"), " ");
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.configurations.homeUrl);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(56, 59, "preferences.Dashboard"));
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.canViewCustomers);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.canViewProducts);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.canViewOrders);
        ɵɵadvance(2);
        ɵɵtextInterpolate(ɵɵpipeBind1(62, 61, "preferences.About"));
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(65, 63, "preferences.Settings"));
        ɵɵadvance(4);
        ɵɵtextInterpolate(ɵɵpipeBind1(69, 65, "preferences.HomePageHint"));
        ɵɵadvance(7);
        ɵɵtextInterpolate1("", ɵɵpipeBind1(76, 67, "preferences.Theme"), " ");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.themeSelectorToggle);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(81, 69, "preferences.ThemeHint"));
        ɵɵadvance(7);
        ɵɵtextInterpolate1("", ɵɵpipeBind1(88, 71, "preferences.DashboardStatistics"), " ");
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.configurations.showDashboardStatistics);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(95, 73, "preferences.DashboardStatisticsHint"));
        ɵɵadvance(7);
        ɵɵtextInterpolate1("", ɵɵpipeBind1(102, 75, "preferences.DashboardNotifications"), " ");
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.configurations.showDashboardNotifications);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(109, 77, "preferences.DashboardNotificationsHint"));
        ɵɵadvance(7);
        ɵɵtextInterpolate1("", ɵɵpipeBind1(116, 79, "preferences.DashboardTodo"), " ");
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.configurations.showDashboardTodo);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(123, 81, "preferences.DashboardTodoHint"));
        ɵɵadvance(7);
        ɵɵtextInterpolate(ɵɵpipeBind1(130, 83, "preferences.DashboardBanner"));
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.configurations.showDashboardBanner);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(137, 85, "preferences.DashboardBannerHint"));
        ɵɵadvance(12);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(149, 87, "preferences.ResetDefault"), " ");
        ɵɵadvance(5);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(154, 89, "preferences.SetDefault"), " ");
    } }, directives: [SelectControlValueAccessor, BootstrapSelectDirective, NgControlStatus, NgModel, NgSelectOption, ɵangular_packages_forms_forms_x, NgIf, CheckboxControlValueAccessor, BootstrapToggleDirective, NgForOf], pipes: [TranslatePipe], styles: [".separator-hr[_ngcontent-%COMP%]{margin:7px 5px;border-top-style:dashed}.subseparator-hr[_ngcontent-%COMP%]{margin:7px 5px;border-top-style:none}.last-separator-hr[_ngcontent-%COMP%]{margin-top:7px}.form-group[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.form-control-plaintext[_ngcontent-%COMP%]{min-height:0}.checkbox[_ngcontent-%COMP%]{padding-top:0}.col-reset-default[_ngcontent-%COMP%]{padding-right:0}.col-set-default[_ngcontent-%COMP%]{padding-left:5px}.col-reset-default[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .col-set-default[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{min-width:150px}@media (min-width:768px){.col-form-label[_ngcontent-%COMP%]{padding-top:5px}}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(UserPreferencesComponent, [{
        type: Component,
        args: [{
                selector: 'user-preferences',
                templateUrl: './user-preferences.component.html',
                styleUrls: ['./user-preferences.component.scss']
            }]
    }], function () { return [{ type: AlertService }, { type: AppTranslationService }, { type: AccountService }, { type: ThemeManager }, { type: ConfigurationService }]; }, { languageSelector: [{
            type: ViewChild,
            args: ['languageSelector', { static: true }]
        }], homePageSelector: [{
            type: ViewChild,
            args: ['homePageSelector', { static: true }]
        }] }); })();

// =============================
const _c0$5 = ["f"];
const _c1$4 = function (a0, a1) { return { "fa-check": a0, "fa-times": a1 }; };
function RoleEditorComponent_form_1_i_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 27);
} if (rf & 2) {
    ɵɵnextContext();
    const _r2 = ɵɵreference(10);
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c1$4, _r2.valid, !_r2.valid));
} }
function RoleEditorComponent_form_1_span_21_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 28);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "roles.editor.RoleNameRequired"), " ");
} }
function RoleEditorComponent_form_1_ng_template_28_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 34);
    ɵɵelementStart(1, "input", 35);
    ɵɵlistener("ngModelChange", function RoleEditorComponent_form_1_ng_template_28_div_4_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r16); const permission_r14 = ctx.$implicit; const ctx_r15 = ɵɵnextContext(3); return (ctx_r15.selectedValues[permission_r14.value] = $event); });
    ɵɵelementEnd();
    ɵɵelementStart(2, "label", 36);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const permission_r14 = ctx.$implicit;
    const ctx_r12 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate1("name", "checkboxes-", permission_r14.value, "");
    ɵɵpropertyInterpolate1("id", "checkboxes-", permission_r14.value, "");
    ɵɵproperty("disabled", !ctx_r12.canManageRoles)("ngModel", ctx_r12.selectedValues[permission_r14.value]);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("tooltip", permission_r14.description);
    ɵɵpropertyInterpolate1("for", "checkboxes-", permission_r14.value, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate(permission_r14.name);
} }
function RoleEditorComponent_form_1_ng_template_28_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 26);
} }
function RoleEditorComponent_form_1_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 29);
    ɵɵelementStart(1, "label", 30);
    ɵɵlistener("click", function RoleEditorComponent_form_1_ng_template_28_Template_label_click_1_listener() { ɵɵrestoreView(_r18); const permissionGroup_r10 = ctx.$implicit; const ctx_r17 = ɵɵnextContext(2); return ctx_r17.toggleGroup(permissionGroup_r10.key); });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 31);
    ɵɵtemplate(4, RoleEditorComponent_form_1_ng_template_28_div_4_Template, 4, 7, "div", 32);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(5, RoleEditorComponent_form_1_ng_template_28_div_5_Template, 1, 0, "div", 33);
} if (rf & 2) {
    const permissionGroup_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    ɵɵadvance(2);
    ɵɵtextInterpolate(permissionGroup_r10.key);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", permissionGroup_r10.value);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (i_r11 + 1) % 2 === 0);
} }
function RoleEditorComponent_form_1_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 37);
    ɵɵelementStart(1, "a", 38);
    ɵɵlistener("click", function RoleEditorComponent_form_1_div_35_Template_a_click_1_listener() { ɵɵrestoreView(_r20); const ctx_r19 = ɵɵnextContext(2); return ctx_r19.selectAll(); });
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵtext(4, "|");
    ɵɵelementStart(5, "a", 38);
    ɵɵlistener("click", function RoleEditorComponent_form_1_div_35_Template_a_click_5_listener() { ɵɵrestoreView(_r20); const ctx_r21 = ɵɵnextContext(2); return ctx_r21.selectNone(); });
    ɵɵtext(6);
    ɵɵpipe(7, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "roles.editor.SelectAll"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(7, 4, "roles.editor.SelectNone"));
} }
function RoleEditorComponent_form_1_button_39_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 39);
    ɵɵlistener("click", function RoleEditorComponent_form_1_button_39_Template_button_click_0_listener() { ɵɵrestoreView(_r23); const ctx_r22 = ɵɵnextContext(2); return ctx_r22.cancel(); });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "roles.editor.Close"));
} }
function RoleEditorComponent_form_1_button_41_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 40);
    ɵɵlistener("click", function RoleEditorComponent_form_1_button_41_Template_button_click_0_listener() { ɵɵrestoreView(_r25); const ctx_r24 = ɵɵnextContext(2); return ctx_r24.cancel(); });
    ɵɵelement(1, "i", 41);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r8.isSaving);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "roles.editor.Cancel"), "");
} }
function RoleEditorComponent_form_1_button_43_i_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 45);
} }
function RoleEditorComponent_form_1_button_43_i_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 46);
} }
function RoleEditorComponent_form_1_button_43_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "button", 42);
    ɵɵtext(1, "\n            ");
    ɵɵtemplate(2, RoleEditorComponent_form_1_button_43_i_2_Template, 1, 0, "i", 43);
    ɵɵtemplate(3, RoleEditorComponent_form_1_button_43_i_3_Template, 1, 0, "i", 44);
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵpipe(6, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ctx_r9.isSaving);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r9.isSaving);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.isSaving);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r9.isSaving ? ɵɵpipeBind1(5, 4, "roles.editor.Saving") : ɵɵpipeBind1(6, 6, "roles.editor.Save"), "\n          ");
} }
const _c2$3 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
function RoleEditorComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 1, 2);
    ɵɵlistener("ngSubmit", function RoleEditorComponent_form_1_Template_form_ngSubmit_0_listener() { ɵɵrestoreView(_r29); const _r1 = ɵɵreference(1); const _r2 = ɵɵreference(10); const ctx_r28 = ɵɵnextContext(); return _r1.form.valid ? ctx_r28.save() : !_r2.valid && ctx_r28.showErrorAlert("Role name is required", "Please enter a role name (minimum of 2 and maximum of 200 characters)"); });
    ɵɵelementStart(2, "div", 3);
    ɵɵelementStart(3, "div", 4);
    ɵɵelementStart(4, "div", 5);
    ɵɵelementStart(5, "label", 6);
    ɵɵtext(6);
    ɵɵpipe(7, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 7);
    ɵɵelementStart(9, "input", 8, 9);
    ɵɵlistener("ngModelChange", function RoleEditorComponent_form_1_Template_input_ngModelChange_9_listener($event) { ɵɵrestoreView(_r29); const ctx_r30 = ɵɵnextContext(); return ctx_r30.roleEdit.name = $event; });
    ɵɵelementEnd();
    ɵɵtemplate(11, RoleEditorComponent_form_1_i_11_Template, 1, 4, "i", 10);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(12, "div", 11);
    ɵɵelementStart(13, "div", 12);
    ɵɵelementStart(14, "label", 13);
    ɵɵtext(15);
    ɵɵpipe(16, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(17, "div", 7);
    ɵɵelementStart(18, "input", 14);
    ɵɵlistener("ngModelChange", function RoleEditorComponent_form_1_Template_input_ngModelChange_18_listener($event) { ɵɵrestoreView(_r29); const ctx_r31 = ɵɵnextContext(); return ctx_r31.roleEdit.description = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(19, "div", 3);
    ɵɵelementStart(20, "div", 15);
    ɵɵtemplate(21, RoleEditorComponent_form_1_span_21_Template, 3, 3, "span", 16);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(22, "div", 3);
    ɵɵelementStart(23, "div", 15);
    ɵɵelement(24, "hr", 17);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(25, "div", 3);
    ɵɵelementStart(26, "div", 18);
    ɵɵelementStart(27, "div", 3);
    ɵɵtemplate(28, RoleEditorComponent_form_1_ng_template_28_Template, 6, 3, "ng-template", 19);
    ɵɵpipe(29, "groupBy");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(30, "div", 3);
    ɵɵelementStart(31, "div", 15);
    ɵɵelement(32, "hr", 20);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(33, "div", 12);
    ɵɵelementStart(34, "div", 4);
    ɵɵtemplate(35, RoleEditorComponent_form_1_div_35_Template, 8, 6, "div", 21);
    ɵɵelementEnd();
    ɵɵelementStart(36, "div", 11);
    ɵɵelementStart(37, "div", 22);
    ɵɵtext(38, "\n          ");
    ɵɵtemplate(39, RoleEditorComponent_form_1_button_39_Template, 3, 3, "button", 23);
    ɵɵtext(40, "\n          ");
    ɵɵtemplate(41, RoleEditorComponent_form_1_button_41_Template, 4, 4, "button", 24);
    ɵɵtext(42, "\n          ");
    ɵɵtemplate(43, RoleEditorComponent_form_1_button_43_Template, 7, 8, "button", 25);
    ɵɵtext(44, "\n        ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelement(45, "div", 26);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r1 = ɵɵreference(1);
    const _r2 = ɵɵreference(10);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(6);
    ɵɵtextInterpolate(ɵɵpipeBind1(7, 14, "roles.editor.Name"));
    ɵɵadvance(3);
    ɵɵproperty("disabled", !ctx_r0.canManageRoles)("ngClass", ɵɵpureFunction2(21, _c2$3, _r1.submitted && _r2.valid, _r1.submitted && !_r2.valid))("ngModel", ctx_r0.roleEdit.name);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.showValidationErrors && _r1.submitted);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(16, 16, "roles.editor.Description"));
    ɵɵadvance(3);
    ɵɵproperty("disabled", !ctx_r0.canManageRoles)("ngModel", ctx_r0.roleEdit.description);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r0.showValidationErrors && _r1.submitted && !_r2.valid);
    ɵɵadvance(7);
    ɵɵproperty("ngForOf", ɵɵpipeBind2(29, 18, ctx_r0.allPermissions, "groupName"));
    ɵɵadvance(7);
    ɵɵproperty("ngIf", ctx_r0.canManageRoles);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", !ctx_r0.canManageRoles);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.canManageRoles);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.canManageRoles);
} }
class RoleEditorComponent {
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
    showErrorAlert(caption, message) {
        this.alertService.showMessage(caption, message, MessageSeverity.error);
    }
    save() {
        this.isSaving = true;
        this.alertService.startLoadingMessage('Saving changes...');
        this.roleEdit.permissions = this.getSelectedPermissions();
        if (this.isNewRole) {
            this.accountService.newRole(this.roleEdit).subscribe(role => this.saveSuccessHelper(role), error => this.saveFailedHelper(error));
        }
        else {
            this.accountService.updateRole(this.roleEdit).subscribe(response => this.saveSuccessHelper(), error => this.saveFailedHelper(error));
        }
    }
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
        if (!this.isNewRole && this.accountService.currentUser.roles.some(r => r == this.editingRoleName)) {
            this.refreshLoggedInUser();
        }
        if (this.changesSavedCallback) {
            this.changesSavedCallback();
        }
    }
    refreshLoggedInUser() {
        this.accountService.refreshLoggedInUser()
            .subscribe(user => { }, error => {
            this.alertService.resetStickyMessage();
            this.alertService.showStickyMessage('Refresh failed', 'An error occured whilst refreshing logged in user information from the server', MessageSeverity.error, error);
        });
    }
    saveFailedHelper(error) {
        this.isSaving = false;
        this.alertService.stopLoadingMessage();
        this.alertService.showStickyMessage('Save Error', 'The below errors occured whilst saving your changes:', MessageSeverity.error, error);
        this.alertService.showStickyMessage(error, null, MessageSeverity.error);
        if (this.changesFailedCallback) {
            this.changesFailedCallback();
        }
    }
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
    selectAll() {
        this.allPermissions.forEach(p => this.selectedValues[p.value] = true);
    }
    selectNone() {
        this.allPermissions.forEach(p => this.selectedValues[p.value] = false);
    }
    toggleGroup(groupName) {
        let firstMemberValue;
        this.allPermissions.forEach(p => {
            if (p.groupName != groupName) {
                return;
            }
            if (firstMemberValue == null) {
                firstMemberValue = this.selectedValues[p.value] == true;
            }
            this.selectedValues[p.value] = !firstMemberValue;
        });
    }
    getSelectedPermissions() {
        return this.allPermissions.filter(p => this.selectedValues[p.value] == true);
    }
    resetForm(replace = false) {
        if (!replace) {
            this.form.reset();
        }
        else {
            this.formResetToggle = false;
            setTimeout(() => {
                this.formResetToggle = true;
            });
        }
    }
    newRole(allPermissions) {
        this.isNewRole = true;
        this.showValidationErrors = true;
        this.editingRoleName = null;
        this.allPermissions = allPermissions;
        this.selectedValues = {};
        this.roleEdit = new Role();
        return this.roleEdit;
    }
    editRole(role, allPermissions) {
        if (role) {
            this.isNewRole = false;
            this.showValidationErrors = true;
            this.editingRoleName = role.name;
            this.allPermissions = allPermissions;
            this.selectedValues = {};
            role.permissions.forEach(p => this.selectedValues[p.value] = true);
            this.roleEdit = new Role();
            Object.assign(this.roleEdit, role);
            return this.roleEdit;
        }
        else {
            return this.newRole(allPermissions);
        }
    }
    get canManageRoles() {
        return this.accountService.userHasPermission(Permission.manageRolesPermission);
    }
}
/** @nocollapse */ RoleEditorComponent.ɵfac = function RoleEditorComponent_Factory(t) { return new (t || RoleEditorComponent)(ɵɵdirectiveInject(AlertService), ɵɵdirectiveInject(AccountService)); };
/** @nocollapse */ RoleEditorComponent.ɵcmp = ɵɵdefineComponent({ type: RoleEditorComponent, selectors: [["role-editor"]], viewQuery: function RoleEditorComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$5, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.form = _t.first);
    } }, decls: 2, vars: 1, consts: [["name", "roleEditorForm", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["name", "roleEditorForm", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "row"], [1, "col-sm-5"], [1, "form-group", "row", "has-feedback-icon"], ["for", "roleName", 1, "col-form-label", "col-md-3"], [1, "col-md-9"], ["type", "text", "id", "roleName", "name", "roleName", "placeholder", "Enter role name", "required", "", "minlength", "2", "maxlength", "200", 1, "form-control", 3, "disabled", "ngClass", "ngModel", "ngModelChange"], ["roleName", "ngModel"], ["class", "fa form-control-feedback", "aria-hidden", "true", 3, "ngClass", 4, "ngIf"], [1, "col-sm-7"], [1, "form-group", "row"], ["for", "roleDescription", 1, "col-form-label", "col-md-3"], ["type", "text", "id", "roleDescription", "name", "roleDescription", "placeholder", "Enter role description", 1, "form-control", 3, "disabled", "ngModel", "ngModelChange"], [1, "col-md-12"], ["class", "invalid-feedback", 4, "ngIf"], [1, "edit-separator-hr"], [1, "col-sm-12", "card", "card-body", "bg-light", "well-sm", "permissionsRow"], ["ngFor", "", 3, "ngForOf"], [1, "edit-last-separator-hr"], ["class", "float-left", 4, "ngIf"], [1, "float-right"], ["type", "button", "class", "btn btn-outline-secondary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary", 3, "disabled", 4, "ngIf"], [1, "clearfix"], ["aria-hidden", "true", 1, "fa", "form-control-feedback", 3, "ngClass"], [1, "invalid-feedback"], [1, "form-group", "row", "col-sm-6", "permissionsColumn"], ["for", "checkboxes", 1, "col-md-5", "col-form-label", "group-name", 3, "click"], [1, "col-md-7"], ["class", "form-check", 4, "ngFor", "ngForOf"], ["class", "clearfix", 4, "ngIf"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "disabled", "name", "id", "ngModel", "ngModelChange"], [1, "form-check-label", 3, "tooltip", "for"], [1, "float-left"], ["href", "javascript:;", 1, "btn", "btn-link", 3, "click"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], [1, "fa", "fa-times"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "fa fa-save", 4, "ngIf"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], [1, "fa", "fa-save"], [1, "fa", "fa-circle-o-notch", "fa-spin"]], template: function RoleEditorComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵtemplate(1, RoleEditorComponent_form_1_Template, 46, 24, "form", 0);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.formResetToggle);
    } }, directives: [NgIf, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, DefaultValueAccessor, RequiredValidator, MinLengthValidator, MaxLengthValidator, NgClass, NgControlStatus, NgModel, NgForOf, CheckboxControlValueAccessor, TooltipDirective], pipes: [TranslatePipe, GroupByPipe], styles: [".separator-hr[_ngcontent-%COMP%]{margin:0 5px;border-top-style:dashed}.edit-separator-hr[_ngcontent-%COMP%]{margin:10px 5px;border-top-style:dashed}.last-separator-hr[_ngcontent-%COMP%]{margin-top:5px}.edit-last-separator-hr[_ngcontent-%COMP%]{margin-top:15px}.form-group[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}input.form-control[_ngcontent-%COMP%]{border-left-width:5px}.invalid-feedback[_ngcontent-%COMP%]{display:block}.group-name[_ngcontent-%COMP%]{padding-top:0;font-weight:500;padding-right:0}.permissionsColumn[_ngcontent-%COMP%]{margin-bottom:20px}.permissionsRow[_ngcontent-%COMP%]{margin:0 15px}.well-sm[_ngcontent-%COMP%]{padding:.5rem}@media (min-width:992px){.user-enabled[_ngcontent-%COMP%]{margin-left:40px}}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RoleEditorComponent, [{
        type: Component,
        args: [{
                selector: 'role-editor',
                templateUrl: './role-editor.component.html',
                styleUrls: ['./role-editor.component.scss']
            }]
    }], function () { return [{ type: AlertService }, { type: AccountService }]; }, { form: [{
            type: ViewChild,
            args: ['f', { static: false }]
        }] }); })();

// =============================
const _c0$6 = ["indexTemplate"];
const _c1$5 = ["actionsTemplate"];
const _c2$4 = ["editorModal"];
const _c3$3 = ["roleEditor"];
function RolesManagementComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 20);
    ɵɵelementStart(1, "a", 21);
    ɵɵlistener("click", function RolesManagementComponent_li_9_Template_a_click_1_listener() { ɵɵrestoreView(_r10); const ctx_r9 = ɵɵnextContext(); return ctx_r9.newRole(); });
    ɵɵelement(2, "i", 22);
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 1, "roles.management.NewRole"), " ");
} }
function RolesManagementComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "strong");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const value_r11 = ctx.value;
    ɵɵadvance(1);
    ɵɵtextInterpolate(value_r11);
} }
function RolesManagementComponent_ng_template_13_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 24);
    ɵɵlistener("click", function RolesManagementComponent_ng_template_13_a_0_Template_a_click_0_listener() { ɵɵrestoreView(_r20); const row_r12 = ɵɵnextContext().row; const ctx_r18 = ɵɵnextContext(); return ctx_r18.editRole(row_r12); });
    ɵɵelement(1, "i", 25);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "roles.management.Edit"), "");
} }
function RolesManagementComponent_ng_template_13_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 24);
    ɵɵlistener("click", function RolesManagementComponent_ng_template_13_a_1_Template_a_click_0_listener() { ɵɵrestoreView(_r23); const row_r12 = ɵɵnextContext().row; const ctx_r21 = ɵɵnextContext(); return ctx_r21.editRole(row_r12); });
    ɵɵelement(1, "i", 26);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "roles.management.Details"), "");
} }
function RolesManagementComponent_ng_template_13_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 24);
    ɵɵlistener("click", function RolesManagementComponent_ng_template_13_a_3_Template_a_click_0_listener() { ɵɵrestoreView(_r26); const row_r12 = ɵɵnextContext().row; const ctx_r24 = ɵɵnextContext(); return ctx_r24.deleteRole(row_r12); });
    ɵɵelement(1, "i", 27);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "roles.management.Delete"), "");
} }
function RolesManagementComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, RolesManagementComponent_ng_template_13_a_0_Template, 4, 3, "a", 23);
    ɵɵtemplate(1, RolesManagementComponent_ng_template_13_a_1_Template, 4, 3, "a", 23);
    ɵɵtext(2);
    ɵɵtemplate(3, RolesManagementComponent_ng_template_13_a_3_Template, 4, 3, "a", 23);
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r4.canManageRoles);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r4.canManageRoles);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r4.canManageRoles ? "|" : "", " ");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.canManageRoles);
} }
function RolesManagementComponent_h4_20_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h4", 28);
    ɵɵelement(1, "i", 29);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 1, "roles.management.RoleDetails", ctx_r6.editingRoleName), "");
} }
function RolesManagementComponent_h4_21_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h4", 28);
    ɵɵelement(1, "i", 29);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r7.editingRoleName ? ɵɵpipeBind2(3, 1, "roles.management.EditRole", ctx_r7.editingRoleName) : ɵɵpipeBind1(4, 4, "roles.management.NewRole"), "");
} }
const _c4$3 = function () { return { backdrop: "static" }; };
class RolesManagementComponent {
    constructor(alertService, translationService, accountService) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.columns = [];
        this.rows = [];
        this.rowsCache = [];
        this.allPermissions = [];
    }
    ngOnInit() {
        const gT = (key) => this.translationService.getTranslation(key);
        this.columns = [
            { prop: 'index', name: '#', width: 50, cellTemplate: this.indexTemplate, canAutoResize: false },
            { prop: 'name', name: gT('roles.management.Name'), width: 180 },
            { prop: 'description', name: gT('roles.management.Description'), width: 320 },
            { prop: 'usersCount', name: gT('roles.management.Users'), width: 50 },
            { name: '', width: 160, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
        ];
        this.loadData();
    }
    ngAfterViewInit() {
        this.roleEditor.changesSavedCallback = () => {
            this.addNewRoleToList();
            this.editorModal.hide();
        };
        this.roleEditor.changesCancelledCallback = () => {
            this.editedRole = null;
            this.sourceRole = null;
            this.editorModal.hide();
        };
    }
    addNewRoleToList() {
        if (this.sourceRole) {
            Object.assign(this.sourceRole, this.editedRole);
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
            const role = new Role();
            Object.assign(role, this.editedRole);
            this.editedRole = null;
            let maxIndex = 0;
            for (const r of this.rowsCache) {
                if (r.index > maxIndex) {
                    maxIndex = r.index;
                }
            }
            role.index = maxIndex + 1;
            this.rowsCache.splice(0, 0, role);
            this.rows.splice(0, 0, role);
            this.rows = [...this.rows];
        }
    }
    loadData() {
        this.alertService.startLoadingMessage();
        this.loadingIndicator = true;
        this.accountService.getRolesAndPermissions()
            .subscribe(results => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            const roles = results[0];
            const permissions = results[1];
            roles.forEach((role, index, roles) => {
                role.index = index + 1;
            });
            this.rowsCache = [...roles];
            this.rows = roles;
            this.allPermissions = permissions;
        }, error => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.alertService.showStickyMessage('Load Error', `Unable to retrieve roles from the server.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        });
    }
    onSearchChanged(value) {
        this.rows = this.rowsCache.filter(r => Utilities.searchArray(value, false, r.name, r.description));
    }
    onEditorModalHidden() {
        this.editingRoleName = null;
        this.roleEditor.resetForm(true);
    }
    newRole() {
        this.editingRoleName = null;
        this.sourceRole = null;
        this.editedRole = this.roleEditor.newRole(this.allPermissions);
        this.editorModal.show();
    }
    editRole(row) {
        this.editingRoleName = { name: row.name };
        this.sourceRole = row;
        this.editedRole = this.roleEditor.editRole(row, this.allPermissions);
        this.editorModal.show();
    }
    deleteRole(row) {
        this.alertService.showDialog('Are you sure you want to delete the \"' + row.name + '\" role?', DialogType.confirm, () => this.deleteRoleHelper(row));
    }
    deleteRoleHelper(row) {
        this.alertService.startLoadingMessage('Deleting...');
        this.loadingIndicator = true;
        this.accountService.deleteRole(row)
            .subscribe(results => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.rowsCache = this.rowsCache.filter(item => item !== row);
            this.rows = this.rows.filter(item => item !== row);
        }, error => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.alertService.showStickyMessage('Delete Error', `An error occured whilst deleting the role.\r\nError: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        });
    }
    get canManageRoles() {
        return this.accountService.userHasPermission(Permission.manageRolesPermission);
    }
}
/** @nocollapse */ RolesManagementComponent.ɵfac = function RolesManagementComponent_Factory(t) { return new (t || RolesManagementComponent)(ɵɵdirectiveInject(AlertService), ɵɵdirectiveInject(AppTranslationService), ɵɵdirectiveInject(AccountService)); };
/** @nocollapse */ RolesManagementComponent.ɵcmp = ɵɵdefineComponent({ type: RolesManagementComponent, selectors: [["roles-management"]], viewQuery: function RolesManagementComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$6, true);
        ɵɵstaticViewQuery(_c1$5, true);
        ɵɵstaticViewQuery(_c2$4, true);
        ɵɵstaticViewQuery(_c3$3, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.indexTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionsTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editorModal = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.roleEditor = _t.first);
    } }, decls: 28, vars: 16, consts: [[1, "row", "control-box"], [1, "col-lg-8"], [1, "form-group", "search-box"], [3, "placeholder", "searchChange"], [1, "col-lg-4", "pr-lg-5"], [1, "nav", "flex-column", "flex-lg-row", "justify-content-end"], ["class", "nav-item toolbaritem", 4, "ngIf"], [1, "material", "colored-header", "sm", "table", "table-striped", "table-hover", 3, "loadingIndicator", "rows", "rowHeight", "headerHeight", "footerHeight", "columns", "scrollbarV", "columnMode"], ["indexTemplate", ""], ["actionsTemplate", ""], ["bsModal", "", "tabindex", "-1", 1, "modal", "fade", 3, "config", "onHidden"], ["editorModal", "bs-modal"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["class", "modal-title float-left", 4, "ngIf"], ["type", "button", "title", "Close", 1, "close", "float-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["roleEditor", ""], [1, "nav-item", "toolbaritem"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "fa", "fa-plus-circle"], ["class", "btn btn-link btn-sm", "href", "javascript:;", 3, "click", 4, "ngIf"], ["href", "javascript:;", 1, "btn", "btn-link", "btn-sm", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil-square-o"], ["aria-hidden", "true", 1, "fa", "fa-eye"], ["aria-hidden", "true", 1, "fa", "fa-trash-o"], [1, "modal-title", "float-left"], [1, "fa", "fa-shield"]], template: function RolesManagementComponent_Template(rf, ctx) { if (rf & 1) {
        const _r27 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "div", 0);
        ɵɵelementStart(2, "div", 1);
        ɵɵelementStart(3, "div", 2);
        ɵɵelementStart(4, "search-box", 3);
        ɵɵlistener("searchChange", function RolesManagementComponent_Template_search_box_searchChange_4_listener($event) { return ctx.onSearchChanged($event); });
        ɵɵpipe(5, "translate");
        ɵɵtext(6, ">");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 4);
        ɵɵelementStart(8, "ul", 5);
        ɵɵtemplate(9, RolesManagementComponent_li_9_Template, 5, 3, "li", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(10, "ngx-datatable", 7);
        ɵɵtemplate(11, RolesManagementComponent_ng_template_11_Template, 2, 1, "ng-template", null, 8, ɵɵtemplateRefExtractor);
        ɵɵtemplate(13, RolesManagementComponent_ng_template_13_Template, 4, 4, "ng-template", null, 9, ɵɵtemplateRefExtractor);
        ɵɵelementStart(15, "div", 10, 11);
        ɵɵlistener("onHidden", function RolesManagementComponent_Template_div_onHidden_15_listener() { return ctx.onEditorModalHidden(); });
        ɵɵelementStart(17, "div", 12);
        ɵɵelementStart(18, "div", 13);
        ɵɵelementStart(19, "div", 14);
        ɵɵtemplate(20, RolesManagementComponent_h4_20_Template, 4, 4, "h4", 15);
        ɵɵtemplate(21, RolesManagementComponent_h4_21_Template, 5, 6, "h4", 15);
        ɵɵelementStart(22, "button", 16);
        ɵɵlistener("click", function RolesManagementComponent_Template_button_click_22_listener() { ɵɵrestoreView(_r27); const _r5 = ɵɵreference(16); return _r5.hide(); });
        ɵɵelementStart(23, "span", 17);
        ɵɵtext(24, "\u00D7");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(25, "div", 18);
        ɵɵelement(26, "role-editor", null, 19);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(5, 13, "roles.management.Search"));
        ɵɵadvance(5);
        ɵɵproperty("ngIf", ctx.canManageRoles);
        ɵɵadvance(1);
        ɵɵproperty("loadingIndicator", ctx.loadingIndicator)("rows", ctx.rows)("rowHeight", 35)("headerHeight", 35)("footerHeight", 35)("columns", ctx.columns)("scrollbarV", true)("columnMode", "force");
        ɵɵadvance(5);
        ɵɵproperty("config", ɵɵpureFunction0(15, _c4$3));
        ɵɵadvance(5);
        ɵɵproperty("ngIf", !ctx.canManageRoles);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.canManageRoles);
    } }, directives: [SearchBoxComponent, NgIf, DatatableComponent, ModalDirective, RoleEditorComponent], pipes: [TranslatePipe], styles: [".control-box[_ngcontent-%COMP%]{margin-bottom:5px}.search-box[_ngcontent-%COMP%]{margin:0}.nav-item.toolbaritem[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-top:3px;padding-bottom:3px;min-width:100px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RolesManagementComponent, [{
        type: Component,
        args: [{
                selector: 'roles-management',
                templateUrl: './roles-management.component.html',
                styleUrls: ['./roles-management.component.scss']
            }]
    }], function () { return [{ type: AlertService }, { type: AppTranslationService }, { type: AccountService }]; }, { indexTemplate: [{
            type: ViewChild,
            args: ['indexTemplate', { static: true }]
        }], actionsTemplate: [{
            type: ViewChild,
            args: ['actionsTemplate', { static: true }]
        }], editorModal: [{
            type: ViewChild,
            args: ['editorModal', { static: true }]
        }], roleEditor: [{
            type: ViewChild,
            args: ['roleEditor', { static: true }]
        }] }); })();

// =============================
const _c0$7 = ["statusHeaderTemplate"];
const _c1$6 = ["statusTemplate"];
const _c2$5 = ["nameTemplate"];
const _c3$4 = ["descriptionTemplate"];
const _c4$4 = ["actionsTemplate"];
const _c5$3 = ["editorModal"];
function TodoDemoComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 27);
} }
function TodoDemoComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 28);
    ɵɵelementStart(1, "input", 29);
    ɵɵlistener("ngModelChange", function TodoDemoComponent_ng_template_21_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r15); const row_r12 = ctx.row; return row_r12.completed = $event; });
    ɵɵelementEnd();
    ɵɵelement(2, "label", 30);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r12 = ctx.row;
    const value_r13 = ctx.value;
    ɵɵadvance(1);
    ɵɵattributeInterpolate1("name", "checkboxes-", value_r13, "");
    ɵɵproperty("ngModel", row_r12.completed);
} }
function TodoDemoComponent_ng_template_23_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 33);
    ɵɵlistener("dblclick", function TodoDemoComponent_ng_template_23_span_0_Template_span_dblclick_0_listener() { ɵɵrestoreView(_r21); const row_r16 = ɵɵnextContext().row; const ctx_r20 = ɵɵnextContext(); return (ctx_r20.editing[row_r16.$$index + "-name"] = true); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r23 = ɵɵnextContext();
    const row_r16 = ctx_r23.row;
    const value_r17 = ctx_r23.value;
    ɵɵclassProp("completed", row_r16.completed);
    ɵɵattributeInterpolate1("title", "Double click to edit - ", value_r17, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", value_r17, " ");
} }
function TodoDemoComponent_ng_template_23_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 34);
    ɵɵlistener("blur", function TodoDemoComponent_ng_template_23_input_1_Template_input_blur_0_listener($event) { ɵɵrestoreView(_r25); const ctx_r26 = ɵɵnextContext(); const value_r17 = ctx_r26.value; const row_r16 = ctx_r26.row; const ctx_r24 = ɵɵnextContext(); return ctx_r24.updateValue($event, "name", value_r17, row_r16); });
    ɵɵelementEnd();
} if (rf & 2) {
    const value_r17 = ɵɵnextContext().value;
    ɵɵproperty("value", value_r17);
} }
function TodoDemoComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, TodoDemoComponent_ng_template_23_span_0_Template, 2, 4, "span", 31);
    ɵɵtemplate(1, TodoDemoComponent_ng_template_23_input_1_Template, 1, 1, "input", 32);
} if (rf & 2) {
    const row_r16 = ctx.row;
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r5.editing[row_r16.$$index + "-name"]);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.editing[row_r16.$$index + "-name"]);
} }
function TodoDemoComponent_ng_template_25_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 33);
    ɵɵlistener("dblclick", function TodoDemoComponent_ng_template_25_span_0_Template_span_dblclick_0_listener() { ɵɵrestoreView(_r33); const row_r28 = ɵɵnextContext().row; const ctx_r32 = ɵɵnextContext(); return (ctx_r32.editing[row_r28.$$index + "-description"] = true); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r35 = ɵɵnextContext();
    const row_r28 = ctx_r35.row;
    const value_r29 = ctx_r35.value;
    ɵɵclassProp("completed", row_r28.completed);
    ɵɵattributeInterpolate1("title", "Double click to edit - ", value_r29, "");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", value_r29, " ");
} }
function TodoDemoComponent_ng_template_25_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 34);
    ɵɵlistener("blur", function TodoDemoComponent_ng_template_25_input_1_Template_input_blur_0_listener($event) { ɵɵrestoreView(_r37); const ctx_r38 = ɵɵnextContext(); const value_r29 = ctx_r38.value; const row_r28 = ctx_r38.row; const ctx_r36 = ɵɵnextContext(); return ctx_r36.updateValue($event, "description", value_r29, row_r28); });
    ɵɵelementEnd();
} if (rf & 2) {
    const value_r29 = ɵɵnextContext().value;
    ɵɵproperty("value", value_r29);
} }
function TodoDemoComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, TodoDemoComponent_ng_template_25_span_0_Template, 2, 4, "span", 31);
    ɵɵtemplate(1, TodoDemoComponent_ng_template_25_input_1_Template, 1, 1, "input", 32);
} if (rf & 2) {
    const row_r28 = ctx.row;
    const ctx_r7 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r7.editing[row_r28.$$index + "-description"]);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.editing[row_r28.$$index + "-description"]);
} }
function TodoDemoComponent_ng_template_27_i_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 40);
} }
function TodoDemoComponent_ng_template_27_i_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 41);
} }
function TodoDemoComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    const _r44 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 35);
    ɵɵlistener("click", function TodoDemoComponent_ng_template_27_Template_a_click_0_listener() { ɵɵrestoreView(_r44); const row_r40 = ctx.row; const ctx_r43 = ɵɵnextContext(); return ctx_r43.delete(row_r40); });
    ɵɵpipe(1, "translate");
    ɵɵelement(2, "i", 36);
    ɵɵelementEnd();
    ɵɵelementStart(3, "a", 37);
    ɵɵlistener("click", function TodoDemoComponent_ng_template_27_Template_a_click_3_listener() { const row_r40 = ctx.row; return row_r40.important = !row_r40.important; })("mouseover", function TodoDemoComponent_ng_template_27_Template_a_mouseover_3_listener() { const row_r40 = ctx.row; return row_r40.isMouseOver = true; })("mouseout", function TodoDemoComponent_ng_template_27_Template_a_mouseout_3_listener() { const row_r40 = ctx.row; return row_r40.isMouseOver = false; });
    ɵɵpipe(4, "translate");
    ɵɵtemplate(5, TodoDemoComponent_ng_template_27_i_5_Template, 1, 0, "i", 38);
    ɵɵtemplate(6, TodoDemoComponent_ng_template_27_i_6_Template, 1, 0, "i", 39);
    ɵɵelementEnd();
} if (rf & 2) {
    const row_r40 = ctx.row;
    ɵɵpropertyInterpolate("tooltip", ɵɵpipeBind1(1, 4, "todoDemo.management.Delete"));
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("tooltip", ɵɵpipeBind1(4, 6, "todoDemo.management.Important"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", row_r40.important || row_r40.isMouseOver);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !row_r40.important && !row_r40.isMouseOver);
} }
const _c6$2 = function (a0, a1) { return { "fa-check": a0, "fa-times": a1 }; };
function TodoDemoComponent_form_42_i_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 64);
} if (rf & 2) {
    ɵɵnextContext();
    const _r49 = ɵɵreference(8);
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c6$2, _r49.valid, !_r49.valid));
} }
function TodoDemoComponent_form_42_span_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 65);
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "todoDemo.editor.TaskNameRequired"), " ");
} }
const _c7$1 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
function TodoDemoComponent_form_42_Template(rf, ctx) { if (rf & 1) {
    const _r53 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 42, 43);
    ɵɵlistener("ngSubmit", function TodoDemoComponent_form_42_Template_form_ngSubmit_0_listener() { ɵɵrestoreView(_r53); const _r48 = ɵɵreference(1); const _r49 = ɵɵreference(8); const ctx_r52 = ɵɵnextContext(); return _r48.form.valid ? ctx_r52.save() : !_r49.valid && ctx_r52.showErrorAlert("Task name is required", "Please enter a name for the task"); });
    ɵɵelementStart(2, "div", 44);
    ɵɵelementStart(3, "label", 45);
    ɵɵtext(4);
    ɵɵpipe(5, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 46);
    ɵɵelementStart(7, "input", 47, 48);
    ɵɵlistener("ngModelChange", function TodoDemoComponent_form_42_Template_input_ngModelChange_7_listener($event) { ɵɵrestoreView(_r53); const ctx_r54 = ɵɵnextContext(); return ctx_r54.taskEdit.name = $event; });
    ɵɵelementEnd();
    ɵɵtemplate(9, TodoDemoComponent_form_42_i_9_Template, 1, 4, "i", 49);
    ɵɵtemplate(10, TodoDemoComponent_form_42_span_10_Template, 3, 3, "span", 50);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 51);
    ɵɵelementStart(12, "label", 52);
    ɵɵtext(13);
    ɵɵpipe(14, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(15, "div", 46);
    ɵɵelementStart(16, "input", 53);
    ɵɵlistener("ngModelChange", function TodoDemoComponent_form_42_Template_input_ngModelChange_16_listener($event) { ɵɵrestoreView(_r53); const ctx_r55 = ɵɵnextContext(); return ctx_r55.taskEdit.description = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(17, "div", 54);
    ɵɵelement(18, "label", 55);
    ɵɵelementStart(19, "div", 46);
    ɵɵelementStart(20, "div", 28);
    ɵɵelementStart(21, "input", 56);
    ɵɵlistener("ngModelChange", function TodoDemoComponent_form_42_Template_input_ngModelChange_21_listener($event) { ɵɵrestoreView(_r53); const ctx_r56 = ɵɵnextContext(); return ctx_r56.taskEdit.important = $event; });
    ɵɵelementEnd();
    ɵɵelementStart(22, "label", 57);
    ɵɵtext(23);
    ɵɵpipe(24, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(25, "div", 54);
    ɵɵelementStart(26, "div", 58);
    ɵɵelement(27, "hr", 59);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(28, "div", 60);
    ɵɵelementStart(29, "div", 61);
    ɵɵelementStart(30, "button", 62);
    ɵɵtext(31);
    ɵɵpipe(32, "translate");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelement(33, "div", 63);
    ɵɵelementEnd();
} if (rf & 2) {
    const _r48 = ɵɵreference(1);
    const _r49 = ɵɵreference(8);
    const ctx_r11 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(5, 10, "todoDemo.editor.Name"), ":");
    ɵɵadvance(3);
    ɵɵproperty("ngClass", ɵɵpureFunction2(18, _c7$1, _r48.submitted && _r49.valid, _r48.submitted && !_r49.valid))("ngModel", ctx_r11.taskEdit.name);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", _r48.submitted);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", _r48.submitted && !_r49.valid);
    ɵɵadvance(3);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(14, 12, "todoDemo.editor.Description"), ":");
    ɵɵadvance(3);
    ɵɵproperty("ngModel", ctx_r11.taskEdit.description);
    ɵɵadvance(5);
    ɵɵproperty("ngModel", ctx_r11.taskEdit.important);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(24, 14, "todoDemo.editor.Important"));
    ɵɵadvance(8);
    ɵɵtextInterpolate(ɵɵpipeBind1(32, 16, "todoDemo.editor.AddTask"));
} }
class TodoDemoComponent {
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
    get currentUserId() {
        if (this.authService.currentUser) {
            this._currentUserId = this.authService.currentUser.id;
        }
        return this._currentUserId;
    }
    set hideCompletedTasks(value) {
        if (value) {
            this.rows = this.rowsCache.filter(r => !r.completed);
        }
        else {
            this.rows = [...this.rowsCache];
        }
        this._hideCompletedTasks = value;
    }
    get hideCompletedTasks() {
        return this._hideCompletedTasks;
    }
    ngOnInit() {
        this.loadingIndicator = true;
        this.fetch((data) => {
            this.refreshDataIndexes(data);
            this.rows = data;
            this.rowsCache = [...data];
            this.isDataLoaded = true;
            setTimeout(() => { this.loadingIndicator = false; }, 1500);
        });
        const gT = (key) => this.translationService.getTranslation(key);
        this.columns = [
            { prop: 'completed', name: '', width: 30, headerTemplate: this.statusHeaderTemplate, cellTemplate: this.statusTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
            { prop: 'name', name: gT('todoDemo.management.Task'), cellTemplate: this.nameTemplate, width: 200 },
            { prop: 'description', name: gT('todoDemo.management.Description'), cellTemplate: this.descriptionTemplate, width: 500 },
            { name: '', width: 80, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
        ];
    }
    ngOnDestroy() {
        this.saveToDisk();
    }
    fetch(cb) {
        let data = this.getFromDisk();
        if (data == null) {
            setTimeout(() => {
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
            }, 1000);
        }
        else {
            cb(data);
        }
    }
    refreshDataIndexes(data) {
        let index = 0;
        for (const i of data) {
            i.$$index = index++;
        }
    }
    onSearchChanged(value) {
        this.rows = this.rowsCache.filter(r => Utilities.searchArray(value, false, r.name, r.description) || value == 'important' && r.important || value == 'not important' && !r.important);
    }
    showErrorAlert(caption, message) {
        this.alertService.showMessage(caption, message, MessageSeverity.error);
    }
    addTask() {
        this.formResetToggle = false;
        setTimeout(() => {
            this.formResetToggle = true;
            this.taskEdit = {};
            this.editorModal.show();
        });
    }
    save() {
        this.rowsCache.splice(0, 0, this.taskEdit);
        this.rows.splice(0, 0, this.taskEdit);
        this.refreshDataIndexes(this.rowsCache);
        this.rows = [...this.rows];
        this.saveToDisk();
        this.editorModal.hide();
    }
    updateValue(event, cell, cellValue, row) {
        this.editing[row.$$index + '-' + cell] = false;
        this.rows[row.$$index][cell] = event.target.value;
        this.rows = [...this.rows];
        this.saveToDisk();
    }
    delete(row) {
        this.alertService.showDialog('Are you sure you want to delete the task?', DialogType.confirm, () => this.deleteHelper(row));
    }
    deleteHelper(row) {
        this.rowsCache = this.rowsCache.filter(item => item !== row);
        this.rows = this.rows.filter(item => item !== row);
        this.saveToDisk();
    }
    getFromDisk() {
        return this.localStorage.getDataObject(`${TodoDemoComponent.DBKeyTodoDemo}:${this.currentUserId}`);
    }
    saveToDisk() {
        if (this.isDataLoaded) {
            this.localStorage.saveSyncedSessionData(this.rowsCache, `${TodoDemoComponent.DBKeyTodoDemo}:${this.currentUserId}`);
        }
    }
}
TodoDemoComponent.DBKeyTodoDemo = 'todo-demo.todo_list';
/** @nocollapse */ TodoDemoComponent.ɵfac = function TodoDemoComponent_Factory(t) { return new (t || TodoDemoComponent)(ɵɵdirectiveInject(AlertService), ɵɵdirectiveInject(AppTranslationService), ɵɵdirectiveInject(LocalStoreManager), ɵɵdirectiveInject(AuthService)); };
/** @nocollapse */ TodoDemoComponent.ɵcmp = ɵɵdefineComponent({ type: TodoDemoComponent, selectors: [["todo-demo"]], viewQuery: function TodoDemoComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$7, true);
        ɵɵstaticViewQuery(_c1$6, true);
        ɵɵstaticViewQuery(_c2$5, true);
        ɵɵstaticViewQuery(_c3$4, true);
        ɵɵstaticViewQuery(_c4$4, true);
        ɵɵstaticViewQuery(_c5$3, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.statusHeaderTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.statusTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nameTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.descriptionTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.actionsTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editorModal = _t.first);
    } }, inputs: { verticalScrollbar: "verticalScrollbar" }, decls: 43, vars: 23, consts: [[1, "row", "control-box"], [1, "col-lg-8"], [1, "form-group", "search-box"], [3, "placeholder", "searchChange"], [1, "col-lg-4"], [1, "nav", "flex-column", "flex-lg-row"], [1, "nav-item", "toolbaritem"], ["href", "javascript:;", 1, "nav-link", 3, "click"], [1, "fa", "fa-eye-slash"], [1, "fa", "fa-plus"], [1, "material", "colored-header", "sm", "table-hover", 3, "loadingIndicator", "rows", "rowHeight", "headerHeight", "footerHeight", "columns", "scrollbarV", "columnMode"], ["statusHeaderTemplate", ""], ["statusTemplate", ""], ["nameTemplate", ""], ["descriptionTemplate", ""], ["actionsTemplate", ""], ["bsModal", "", "tabindex", "-1", 1, "modal", "fade"], ["editorModal", "bs-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "float-left"], [1, "fa", "fa-tasks"], ["type", "button", "title", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["name", "taskEditorForm", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], [1, "fa", "fa-check-square-o"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelChange"], [1, "form-check-label"], ["class", "inline-label", 3, "completed", "dblclick", 4, "ngIf"], ["class", "inline-editor", "autofocus", "", "type", "text", 3, "value", "blur", 4, "ngIf"], [1, "inline-label", 3, "dblclick"], ["autofocus", "", "type", "text", 1, "inline-editor", 3, "value", "blur"], ["href", "javascript:;", "container", "body", 1, "btn", "btn-link", "btn-sm", 3, "tooltip", "click"], [1, "fa", "fa-times"], ["href", "javascript:;", "container", "body", 1, "btn", "btn-link", "btn-sm", 3, "tooltip", "click", "mouseover", "mouseout"], ["class", "fa fa-bookmark", 4, "ngIf"], ["class", "fa fa-bookmark-o", 4, "ngIf"], [1, "fa", "fa-bookmark"], [1, "fa", "fa-bookmark-o"], ["name", "taskEditorForm", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", "row", "has-feedback-icon"], ["for", "taskName", 1, "col-form-label", "col-md-3"], [1, "col-md-9"], ["autofocus", "", "type", "text", "id", "taskName", "name", "taskName", "placeholder", "Enter task name", "required", "", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["taskName", "ngModel"], ["class", "fa form-control-feedback", "aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], [1, "form-group", "row", "description-form-group"], ["for", "taskDescription", 1, "col-form-label", "col-md-3"], ["type", "text", "id", "taskDescription", "name", "taskDescription", "placeholder", "Enter task description", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col-form-label", "col-md-3"], ["id", "isImportant", "name", "isImportant", "type", "checkbox", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "isImportant", 1, "form-check-label"], [1, "col-md-12"], [1, "edit-last-separator-hr"], [1, "form-group", "actionBtn-form-group"], [1, "float-right"], ["type", "submit", 1, "btn", "btn-primary"], [1, "clearfix"], ["aria-hidden", "true", 1, "fa", "form-control-feedback", 3, "ngClass"], [1, "invalid-feedback"]], template: function TodoDemoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r57 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "div", 0);
        ɵɵelementStart(2, "div", 1);
        ɵɵelementStart(3, "div", 2);
        ɵɵelementStart(4, "search-box", 3);
        ɵɵlistener("searchChange", function TodoDemoComponent_Template_search_box_searchChange_4_listener($event) { return ctx.onSearchChanged($event); });
        ɵɵpipe(5, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "div", 4);
        ɵɵelementStart(7, "ul", 5);
        ɵɵelementStart(8, "li", 6);
        ɵɵelementStart(9, "a", 7);
        ɵɵlistener("click", function TodoDemoComponent_Template_a_click_9_listener() { return ctx.hideCompletedTasks = !ctx.hideCompletedTasks; });
        ɵɵelement(10, "i", 8);
        ɵɵtext(11);
        ɵɵpipe(12, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(13, "li", 6);
        ɵɵelementStart(14, "a", 7);
        ɵɵlistener("click", function TodoDemoComponent_Template_a_click_14_listener() { return ctx.addTask(); });
        ɵɵelement(15, "i", 9);
        ɵɵtext(16);
        ɵɵpipe(17, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(18, "ngx-datatable", 10);
        ɵɵtemplate(19, TodoDemoComponent_ng_template_19_Template, 1, 0, "ng-template", null, 11, ɵɵtemplateRefExtractor);
        ɵɵtemplate(21, TodoDemoComponent_ng_template_21_Template, 3, 2, "ng-template", null, 12, ɵɵtemplateRefExtractor);
        ɵɵtemplate(23, TodoDemoComponent_ng_template_23_Template, 2, 2, "ng-template", null, 13, ɵɵtemplateRefExtractor);
        ɵɵtemplate(25, TodoDemoComponent_ng_template_25_Template, 2, 2, "ng-template", null, 14, ɵɵtemplateRefExtractor);
        ɵɵtemplate(27, TodoDemoComponent_ng_template_27_Template, 7, 8, "ng-template", null, 15, ɵɵtemplateRefExtractor);
        ɵɵelementStart(29, "div", 16, 17);
        ɵɵelementStart(31, "div", 18);
        ɵɵelementStart(32, "div", 19);
        ɵɵelementStart(33, "div", 20);
        ɵɵelementStart(34, "h4", 21);
        ɵɵelement(35, "i", 22);
        ɵɵtext(36);
        ɵɵpipe(37, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(38, "button", 23);
        ɵɵlistener("click", function TodoDemoComponent_Template_button_click_38_listener() { ɵɵrestoreView(_r57); const _r10 = ɵɵreference(30); return _r10.hide(); });
        ɵɵelementStart(39, "span", 24);
        ɵɵtext(40, "\u00D7");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(41, "div", 25);
        ɵɵtemplate(42, TodoDemoComponent_form_42_Template, 34, 21, "form", 26);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(5, 15, "todoDemo.management.Search"));
        ɵɵadvance(4);
        ɵɵclassProp("active", ctx.hideCompletedTasks);
        ɵɵadvance(3);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 17, "todoDemo.management.HideCompleted"), "");
        ɵɵadvance(5);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(17, 19, "todoDemo.management.AddTask"), "");
        ɵɵadvance(2);
        ɵɵproperty("loadingIndicator", ctx.loadingIndicator)("rows", ctx.rows)("rowHeight", 35)("headerHeight", 35)("footerHeight", 35)("columns", ctx.columns)("scrollbarV", ctx.verticalScrollbar)("columnMode", "force");
        ɵɵadvance(18);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(37, 21, "todoDemo.editor.NewTask"), "");
        ɵɵadvance(6);
        ɵɵproperty("ngIf", ctx.formResetToggle);
    } }, directives: [SearchBoxComponent, DatatableComponent, ModalDirective, NgIf, CheckboxControlValueAccessor, NgControlStatus, NgModel, AutofocusDirective, TooltipDirective, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, DefaultValueAccessor, RequiredValidator, NgClass], pipes: [TranslatePipe], styles: ["input.form-control[_ngcontent-%COMP%]{border-left-width:5px}.control-box[_ngcontent-%COMP%]{margin-bottom:5px}.search-box[_ngcontent-%COMP%]{margin:0}.nav-item.toolbaritem[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-top:3px;padding-bottom:3px;min-width:100px;font-weight:700}.completed[_ngcontent-%COMP%]{text-decoration:line-through}.form-check[_ngcontent-%COMP%]{margin:0}.inline-label[_ngcontent-%COMP%]{width:100%;min-height:1rem;display:inline-block}.inline-editor[_ngcontent-%COMP%]{width:100%}.description-form-group[_ngcontent-%COMP%]{margin-bottom:5px}.actionBtn-form-group[_ngcontent-%COMP%]{margin:0}.edit-last-separator-hr[_ngcontent-%COMP%]{margin:10px 0}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TodoDemoComponent, [{
        type: Component,
        args: [{
                selector: 'todo-demo',
                templateUrl: './todo-demo.component.html',
                styleUrls: ['./todo-demo.component.scss']
            }]
    }], function () { return [{ type: AlertService }, { type: AppTranslationService }, { type: LocalStoreManager }, { type: AuthService }]; }, { verticalScrollbar: [{
            type: Input
        }], statusHeaderTemplate: [{
            type: ViewChild,
            args: ['statusHeaderTemplate', { static: true }]
        }], statusTemplate: [{
            type: ViewChild,
            args: ['statusTemplate', { static: true }]
        }], nameTemplate: [{
            type: ViewChild,
            args: ['nameTemplate', { static: true }]
        }], descriptionTemplate: [{
            type: ViewChild,
            args: ['descriptionTemplate', { static: true }]
        }], actionsTemplate: [{
            type: ViewChild,
            args: ['actionsTemplate', { static: true }]
        }], editorModal: [{
            type: ViewChild,
            args: ['editorModal', { static: true }]
        }] }); })();

function StatisticsDemoComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const label_r2 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(label_r2);
} }
function StatisticsDemoComponent_tr_12_td_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const j_r6 = ctx.index;
    const d_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(d_r3 && d_r3.data[j_r6]);
} }
function StatisticsDemoComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵelementStart(1, "th");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, StatisticsDemoComponent_tr_12_td_3_Template, 2, 1, "td", 8);
    ɵɵelementEnd();
} if (rf & 2) {
    const d_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(d_r3 && d_r3.label.split(" ").pop());
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.chartLabels);
} }

class StatisticsDemoComponent {
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
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
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
    ngOnInit() {
        this.timerReference = setInterval(() => this.randomize(), 5000);
        const initialWidth$ = of(window.innerWidth);
        const resizedWidth$ = fromEvent(window, 'resize').pipe(map((event) => event.target.innerWidth));
        this.windowWidth$ = merge(initialWidth$, resizedWidth$).pipe(distinctUntilChanged());
        this.windowWidthSub = this.windowWidth$.subscribe(width => this.chartLegend = width < 600 ? false : true);
    }
    ngOnDestroy() {
        clearInterval(this.timerReference);
        this.windowWidthSub.unsubscribe();
    }
    randomize() {
        const _chartData = new Array(this.chartData.length);
        for (let i = 0; i < this.chartData.length; i++) {
            _chartData[i] = { data: new Array(this.chartData[i].data.length), label: this.chartData[i].label };
            for (let j = 0; j < this.chartData[i].data.length; j++) {
                _chartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.chartData = _chartData;
    }
    changeChartType(type) {
        this.chartType = type;
    }
    showMessage(msg) {
        this.alertService.showMessage('Demo', msg, MessageSeverity.info);
    }
    showDialog(msg) {
        this.alertService.showDialog(msg, DialogType.prompt, (val) => this.configure(true, val), () => this.configure(false));
    }
    configure(response, value) {
        if (response) {
            this.alertService.showStickyMessage('Simulating...', '', MessageSeverity.wait);
            setTimeout(() => {
                this.alertService.resetStickyMessage();
                this.alertService.showMessage('Demo', `Your settings was successfully configured to \"${value}\"`, MessageSeverity.success);
            }, 2000);
        }
        else {
            this.alertService.showMessage('Demo', 'Operation cancelled by user', MessageSeverity.default);
        }
    }
    chartClicked(e) {
        console.log(e);
    }
    chartHovered(e) {
        console.log(e);
    }
}
/** @nocollapse */ StatisticsDemoComponent.ɵfac = function StatisticsDemoComponent_Factory(t) { return new (t || StatisticsDemoComponent)(ɵɵdirectiveInject(AlertService)); };
/** @nocollapse */ StatisticsDemoComponent.ɵcmp = ɵɵdefineComponent({ type: StatisticsDemoComponent, selectors: [["statistics-demo"]], decls: 42, vars: 20, consts: [[1, "row", "statistics-container"], [1, "col-md-6"], [1, "chart-container"], ["baseChart", "", "width", "600", "height", "250", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"], [1, "d-none", "d-sm-block", "table-responsive"], [1, "table", "table-sm"], [1, "border-top-0"], ["class", "border-top-0", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "refresh-btn", 3, "click"], ["dropdown", "", 1, "chart-type-container"], ["id", "chartType", "type", "button", "data-toggle", "dropdown", 1, "dropdown-toggle"], [1, "fa", "fa-bar-chart"], [1, "dropdown-menu"], ["href", "javascript:;", 1, "dropdown-item", 3, "click"], [1, "dropdown-divider"], [3, "click"], [1, "fa", "fa-bars"], [1, "fa", "fa-cogs"]], template: function StatisticsDemoComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "canvas", 3);
        ɵɵlistener("chartHover", function StatisticsDemoComponent_Template_canvas_chartHover_3_listener($event) { return ctx.chartHovered($event); })("chartClick", function StatisticsDemoComponent_Template_canvas_chartClick_3_listener($event) { return ctx.chartClicked($event); });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "div", 1);
        ɵɵelementStart(5, "div", 4);
        ɵɵelementStart(6, "table", 5);
        ɵɵelementStart(7, "thead");
        ɵɵelementStart(8, "tr");
        ɵɵelement(9, "th", 6);
        ɵɵtemplate(10, StatisticsDemoComponent_th_10_Template, 2, 1, "th", 7);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(11, "tbody");
        ɵɵtemplate(12, StatisticsDemoComponent_tr_12_Template, 4, 2, "tr", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(13, "button", 9);
        ɵɵlistener("click", function StatisticsDemoComponent_Template_button_click_13_listener() { ctx.randomize(); return ctx.showMessage("Manual refresh!"); });
        ɵɵtext(14, "REFSH");
        ɵɵelementEnd();
        ɵɵelementStart(15, "div", 10);
        ɵɵelementStart(16, "button", 11);
        ɵɵelement(17, "i", 12);
        ɵɵelementEnd();
        ɵɵelementStart(18, "ul", 13);
        ɵɵelementStart(19, "li");
        ɵɵelementStart(20, "a", 14);
        ɵɵlistener("click", function StatisticsDemoComponent_Template_a_click_20_listener() { return ctx.changeChartType("bar"); });
        ɵɵtext(21, "Bar Chart");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(22, "li");
        ɵɵelementStart(23, "a", 14);
        ɵɵlistener("click", function StatisticsDemoComponent_Template_a_click_23_listener() { return ctx.changeChartType("pie"); });
        ɵɵtext(24, "Pie Chart");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(25, "li");
        ɵɵelementStart(26, "a", 14);
        ɵɵlistener("click", function StatisticsDemoComponent_Template_a_click_26_listener() { return ctx.changeChartType("doughnut"); });
        ɵɵtext(27, "Doughnut Chart");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(28, "li");
        ɵɵelementStart(29, "a", 14);
        ɵɵlistener("click", function StatisticsDemoComponent_Template_a_click_29_listener() { return ctx.changeChartType("polarArea"); });
        ɵɵtext(30, "Polar Area Chart");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(31, "li");
        ɵɵelementStart(32, "a", 14);
        ɵɵlistener("click", function StatisticsDemoComponent_Template_a_click_32_listener() { return ctx.changeChartType("radar"); });
        ɵɵtext(33, "Radar Chart");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(34, "li", 15);
        ɵɵelementStart(35, "li");
        ɵɵelementStart(36, "a", 14);
        ɵɵlistener("click", function StatisticsDemoComponent_Template_a_click_36_listener() { return ctx.changeChartType("line"); });
        ɵɵtext(37, "Line Chart");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(38, "button", 16);
        ɵɵlistener("click", function StatisticsDemoComponent_Template_button_click_38_listener() { return ctx.showMessage("You've clicked on the menu"); });
        ɵɵelement(39, "i", 17);
        ɵɵelementEnd();
        ɵɵelementStart(40, "button", 16);
        ɵɵlistener("click", function StatisticsDemoComponent_Template_button_click_40_listener() { return ctx.showDialog("Enter some value to do serious configuration..."); });
        ɵɵelement(41, "i", 18);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("datasets", ctx.chartData)("labels", ctx.chartLabels)("options", ctx.chartOptions)("colors", ctx.chartColors)("legend", ctx.chartLegend)("chartType", ctx.chartType);
        ɵɵadvance(7);
        ɵɵproperty("ngForOf", ctx.chartLabels);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.chartData);
        ɵɵadvance(7);
        ɵɵclassProp("active", ctx.chartType == "bar");
        ɵɵadvance(3);
        ɵɵclassProp("active", ctx.chartType == "pie");
        ɵɵadvance(3);
        ɵɵclassProp("active", ctx.chartType == "doughnut");
        ɵɵadvance(3);
        ɵɵclassProp("active", ctx.chartType == "polarArea");
        ɵɵadvance(3);
        ɵɵclassProp("active", ctx.chartType == "radar");
        ɵɵadvance(4);
        ɵɵclassProp("active", ctx.chartType == "line");
    } }, directives: [BaseChartDirective, NgForOf, BsDropdownDirective], styles: [".statistics-container[_ngcontent-%COMP%]{font-size:.875rem}.chart-container[_ngcontent-%COMP%]{display:block}.refresh-btn[_ngcontent-%COMP%]{margin-right:10px}.chart-type-container[_ngcontent-%COMP%]{display:inline-block}.chart-type-container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:#e8e8e8}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StatisticsDemoComponent, [{
        type: Component,
        args: [{
                selector: 'statistics-demo',
                templateUrl: './statistics-demo.component.html',
                styleUrls: ['./statistics-demo.component.scss']
            }]
    }], function () { return [{ type: AlertService }]; }, null); })();

// =============================
const _c0$8 = ["tab"];
function SettingsComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵelement(1, "user-info");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵproperty("@fadeInOut", undefined);
} }
function SettingsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵelement(1, "user-preferences");
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵproperty("@fadeInOut", undefined);
} }
const _c1$7 = function () { return []; };
class SettingsComponent {
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
    ngOnInit() {
        this.fragmentSubscription = this.route.fragment.subscribe(anchor => this.showContent(anchor));
    }
    ngOnDestroy() {
        this.fragmentSubscription.unsubscribe();
    }
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
    isFragmentEquals(fragment1, fragment2) {
        if (fragment1 == null) {
            fragment1 = '';
        }
        if (fragment2 == null) {
            fragment2 = '';
        }
        return fragment1.toLowerCase() == fragment2.toLowerCase();
    }
    onShowTab(event) {
        const activeTab = event.target.hash.split('#', 2).pop();
        this.isProfileActivated = activeTab == this.profileTab;
        this.isPreferencesActivated = activeTab == this.preferencesTab;
        this.isUsersActivated = activeTab == this.usersTab;
        this.isRolesActivated = activeTab == this.rolesTab;
        this.router.navigate([], { fragment: activeTab });
    }
    get canViewUsers() {
        return this.accountService.userHasPermission(Permission.viewUsersPermission);
    }
    get canViewRoles() {
        return this.accountService.userHasPermission(Permission.viewRolesPermission);
    }
}
/** @nocollapse */ SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ActivatedRoute), ɵɵdirectiveInject(AccountService)); };
/** @nocollapse */ SettingsComponent.ɵcmp = ɵɵdefineComponent({ type: SettingsComponent, selectors: [["settings"]], viewQuery: function SettingsComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$8, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tab = _t.first);
    } }, decls: 33, vars: 22, consts: [[1, "container", "settings-page"], [1, "pageHeader"], ["aria-hidden", "true", 1, "fa", "fa-cog", "fa-lg", "page-caption"], [1, "d-sm-flex", "flex-row"], ["bootstrapTab", "", "role", "navigation", 1, "nav", "nav-tabs", "nav-tabs--vertical", "nav-tabs--left", 3, "showBSTab"], ["tab", "bootstrap-tab"], [1, "nav-item"], ["id", "profileTab", "fragment", "profile", "data-target", "#profile", "href", "#profile", "data-toggle", "tab", "role", "tab", "aria-controls", "profile", 1, "nav-link", "active", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-user-circle-o", "fa-fw"], ["id", "preferencesTab", "fragment", "preferences", "data-target", "#preferences", "href", "#preferences", "data-toggle", "tab", "role", "tab", "aria-controls", "preferences", 1, "nav-link", 3, "routerLink"], ["aria-hidden", "true", 1, "fa", "fa-sliders", "fa-fw"], [1, "tab-content", "w-100"], ["id", "profile", "role", "tabpanel", 1, "tab-pane", "show", "active"], [1, "separator-hr"], ["class", "content-container pl-lg-2", 4, "ngIf"], ["id", "preferences", "role", "tabpanel", 1, "tab-pane"], [1, "content-container", "pl-lg-2"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "header", 1);
        ɵɵelementStart(2, "h3");
        ɵɵelement(3, "i", 2);
        ɵɵtext(4);
        ɵɵpipe(5, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "div");
        ɵɵelementStart(7, "div", 3);
        ɵɵelementStart(8, "ul", 4, 5);
        ɵɵlistener("showBSTab", function SettingsComponent_Template_ul_showBSTab_8_listener($event) { return ctx.onShowTab($event); });
        ɵɵelementStart(10, "li", 6);
        ɵɵelementStart(11, "a", 7);
        ɵɵelement(12, "i", 8);
        ɵɵtext(13);
        ɵɵpipe(14, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(15, "li", 6);
        ɵɵelementStart(16, "a", 9);
        ɵɵelement(17, "i", 10);
        ɵɵtext(18);
        ɵɵpipe(19, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(20, "div", 11);
        ɵɵelementStart(21, "div", 12);
        ɵɵelementStart(22, "h4");
        ɵɵtext(23);
        ɵɵpipe(24, "translate");
        ɵɵelementEnd();
        ɵɵelement(25, "hr", 13);
        ɵɵtemplate(26, SettingsComponent_div_26_Template, 2, 1, "div", 14);
        ɵɵelementEnd();
        ɵɵelementStart(27, "div", 15);
        ɵɵelementStart(28, "h4");
        ɵɵtext(29);
        ɵɵpipe(30, "translate");
        ɵɵelementEnd();
        ɵɵelement(31, "hr", 13);
        ɵɵtemplate(32, SettingsComponent_div_32_Template, 2, 1, "div", 14);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 10, "pageHeader.Settings"), "");
        ɵɵadvance(2);
        ɵɵproperty("@fadeInOut", undefined);
        ɵɵadvance(5);
        ɵɵproperty("routerLink", ɵɵpureFunction0(20, _c1$7));
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(14, 12, "settings.tab.Profile"), " ");
        ɵɵadvance(3);
        ɵɵproperty("routerLink", ɵɵpureFunction0(21, _c1$7));
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(19, 14, "settings.tab.Preferences"), " ");
        ɵɵadvance(5);
        ɵɵtextInterpolate(ɵɵpipeBind1(24, 16, "settings.header.UserProfile"));
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.isProfileActivated);
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(30, 18, "settings.header.UserPreferences"));
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.isPreferencesActivated);
    } }, directives: [BootstrapTabDirective, RouterLinkWithHref, NgIf, UserInfoComponent, UserPreferencesComponent], pipes: [TranslatePipe], styles: [".separator-hr[_ngcontent-%COMP%]{margin-top:0;margin-bottom:10px}[hidden][_ngcontent-%COMP%]{display:none}"], data: { animation: [fadeInOut] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SettingsComponent, [{
        type: Component,
        args: [{
                selector: 'settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss'],
                animations: [fadeInOut]
            }]
    }], function () { return [{ type: Router }, { type: ActivatedRoute }, { type: AccountService }]; }, { tab: [{
            type: ViewChild,
            args: ['tab', { static: true }]
        }] }); })();

// =============================
class NotFoundComponent {
}
/** @nocollapse */ NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
/** @nocollapse */ NotFoundComponent.ɵcmp = ɵɵdefineComponent({ type: NotFoundComponent, selectors: [["not-found"]], decls: 19, vars: 13, consts: [[1, "pageHeader"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-circle", "fa-lg", "page-caption"], [1, "d-flex", "h-75"], [1, "m-auto"], [1, "icon-container"], [1, "fa", "fa-exclamation-circle"], [1, "text-muted", "error-description"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "fa", "fa-home"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "header", 0);
        ɵɵelementStart(1, "h3");
        ɵɵelement(2, "i", 1);
        ɵɵtext(3);
        ɵɵpipe(4, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 2);
        ɵɵelementStart(6, "div", 3);
        ɵɵelementStart(7, "div", 4);
        ɵɵelement(8, "i", 5);
        ɵɵtext(9);
        ɵɵpipe(10, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(11, "div", 6);
        ɵɵtext(12);
        ɵɵpipe(13, "translate");
        ɵɵelementEnd();
        ɵɵelementStart(14, "div");
        ɵɵelementStart(15, "a", 7);
        ɵɵelement(16, "i", 8);
        ɵɵtext(17);
        ɵɵpipe(18, "translate");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 5, "pageHeader.NotFound"), "");
        ɵɵadvance(2);
        ɵɵproperty("@fadeInOut", undefined);
        ɵɵadvance(4);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 7, "notFound.404"), "");
        ɵɵadvance(3);
        ɵɵtextInterpolate(ɵɵpipeBind1(13, 9, "notFound.pageNotFound"));
        ɵɵadvance(5);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 11, "notFound.backToHome"), "");
    } }, directives: [RouterLinkWithHref], pipes: [TranslatePipe], styles: [".icon-container[_ngcontent-%COMP%]{font-size:5rem}.error-description[_ngcontent-%COMP%]{font-size:1.5rem;padding-bottom:10px}"], data: { animation: [fadeInOut] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NotFoundComponent, [{
        type: Component,
        args: [{
                selector: 'not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss'],
                animations: [fadeInOut]
            }]
    }], null, null); })();

// =============================
function LoginComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("click", function LoginComponent_button_6_Template_button_click_0_listener() { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.closeModal(); });
    ɵɵelementStart(1, "span", 10);
    ɵɵtext(2, "\u00D7");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
const _c0$9 = function (a0, a1) { return { "fa-check": a0, "fa-times": a1 }; };
function LoginComponent_form_9_i_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 30);
} if (rf & 2) {
    ɵɵnextContext();
    const _r5 = ɵɵreference(7);
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c0$9, _r5.valid, !_r5.valid));
} }
function LoginComponent_form_9_span_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 31);
    ɵɵtext(1, " Username is required ");
    ɵɵelementEnd();
} }
function LoginComponent_form_9_i_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 30);
} if (rf & 2) {
    ɵɵnextContext();
    const _r8 = ɵɵreference(15);
    ɵɵproperty("ngClass", ɵɵpureFunction2(1, _c0$9, _r8.valid, !_r8.valid));
} }
function LoginComponent_form_9_span_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 31);
    ɵɵtext(1, " Password is required ");
    ɵɵelementEnd();
} }
function LoginComponent_form_9_i_27_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "i", 32);
} }
const _c1$8 = function (a0, a1) { return { "is-valid": a0, "is-invalid": a1 }; };
function LoginComponent_form_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 11, 12);
    ɵɵlistener("ngSubmit", function LoginComponent_form_9_Template_form_ngSubmit_0_listener() { ɵɵrestoreView(_r13); const _r4 = ɵɵreference(1); const _r5 = ɵɵreference(7); const _r8 = ɵɵreference(15); const ctx_r12 = ɵɵnextContext(); _r4.form.valid ? ctx_r12.login() : !_r5.valid && ctx_r12.showErrorAlert("Username is required", "Please enter a valid username"); return !_r8.valid && ctx_r12.showErrorAlert("Password is required", "Please enter a valid password"); });
    ɵɵelementStart(2, "div", 13);
    ɵɵelementStart(3, "label", 14);
    ɵɵtext(4, "Username:");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 15);
    ɵɵelementStart(6, "input", 16, 17);
    ɵɵlistener("ngModelChange", function LoginComponent_form_9_Template_input_ngModelChange_6_listener($event) { ɵɵrestoreView(_r13); const ctx_r14 = ɵɵnextContext(); return ctx_r14.userLogin.userName = $event; });
    ɵɵelementEnd();
    ɵɵtemplate(8, LoginComponent_form_9_i_8_Template, 1, 4, "i", 18);
    ɵɵtemplate(9, LoginComponent_form_9_span_9_Template, 2, 0, "span", 19);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 13);
    ɵɵelementStart(11, "label", 20);
    ɵɵtext(12, "Password:");
    ɵɵelementEnd();
    ɵɵelementStart(13, "div", 15);
    ɵɵelementStart(14, "input", 21, 22);
    ɵɵlistener("ngModelChange", function LoginComponent_form_9_Template_input_ngModelChange_14_listener($event) { ɵɵrestoreView(_r13); const ctx_r15 = ɵɵnextContext(); return ctx_r15.userLogin.password = $event; });
    ɵɵelementEnd();
    ɵɵtemplate(16, LoginComponent_form_9_i_16_Template, 1, 4, "i", 18);
    ɵɵtemplate(17, LoginComponent_form_9_span_17_Template, 2, 0, "span", 19);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(18, "div", 23);
    ɵɵelementStart(19, "div", 24);
    ɵɵelementStart(20, "div", 25);
    ɵɵelementStart(21, "input", 26);
    ɵɵlistener("ngModelChange", function LoginComponent_form_9_Template_input_ngModelChange_21_listener($event) { ɵɵrestoreView(_r13); const ctx_r16 = ɵɵnextContext(); return ctx_r16.userLogin.rememberMe = $event; });
    ɵɵelementEnd();
    ɵɵelementStart(22, "label", 27);
    ɵɵtext(23, "Remember me");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(24, "div", 23);
    ɵɵelementStart(25, "div", 24);
    ɵɵelementStart(26, "button", 28);
    ɵɵtemplate(27, LoginComponent_form_9_i_27_Template, 1, 0, "i", 29);
    ɵɵtext(28);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r4 = ɵɵreference(1);
    const _r5 = ɵɵreference(7);
    const _r8 = ɵɵreference(15);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(6);
    ɵɵproperty("ngClass", ɵɵpureFunction2(12, _c1$8, _r4.submitted && _r5.valid, _r4.submitted && !_r5.valid))("ngModel", ctx_r1.userLogin.userName);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", _r4.submitted);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", _r4.submitted && !_r5.valid);
    ɵɵadvance(5);
    ɵɵproperty("ngClass", ɵɵpureFunction2(15, _c1$8, _r4.submitted && _r8.valid, _r4.submitted && !_r8.valid))("ngModel", ctx_r1.userLogin.password);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", _r4.submitted);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", _r4.submitted && !_r8.valid);
    ɵɵadvance(4);
    ɵɵproperty("ngModel", ctx_r1.userLogin.rememberMe);
    ɵɵadvance(5);
    ɵɵproperty("disabled", ctx_r1.isLoading);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.isLoading);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r1.isLoading ? "Logging in..." : "Login", " ");
} }
class LoginComponent {
    constructor(alertService, authService, configurations) {
        this.alertService = alertService;
        this.authService = authService;
        this.configurations = configurations;
        this.userLogin = new UserLogin();
        this.isLoading = false;
        this.formResetToggle = true;
        this.isModal = false;
    }
    ngOnInit() {
        this.userLogin.rememberMe = this.authService.rememberMe;
        if (this.getShouldRedirect()) {
            this.authService.redirectLoginUser();
        }
        else {
            this.loginStatusSubscription = this.authService.getLoginStatusEvent().subscribe(isLoggedIn => {
                if (this.getShouldRedirect()) {
                    this.authService.redirectLoginUser();
                }
            });
        }
    }
    ngOnDestroy() {
        if (this.loginStatusSubscription) {
            this.loginStatusSubscription.unsubscribe();
        }
    }
    getShouldRedirect() {
        return !this.isModal && this.authService.isLoggedIn && !this.authService.isSessionExpired;
    }
    showErrorAlert(caption, message) {
        this.alertService.showMessage(caption, message, MessageSeverity.error);
    }
    closeModal() {
        if (this.modalClosedCallback) {
            this.modalClosedCallback();
        }
    }
    login() {
        this.isLoading = true;
        this.alertService.startLoadingMessage('', 'Attempting login...');
        this.authService.loginWithPassword(this.userLogin.userName, this.userLogin.password, this.userLogin.rememberMe)
            .subscribe(user => {
            setTimeout(() => {
                this.alertService.stopLoadingMessage();
                this.isLoading = false;
                this.reset();
                if (!this.isModal) {
                    this.alertService.showMessage('Login', `Welcome ${user.userName}!`, MessageSeverity.success);
                }
                else {
                    this.alertService.showMessage('Login', `Session for ${user.userName} restored!`, MessageSeverity.success);
                    setTimeout(() => {
                        this.alertService.showStickyMessage('Session Restored', 'Please try your last operation again', MessageSeverity.default);
                    }, 500);
                    this.closeModal();
                }
            }, 500);
        }, error => {
            this.alertService.stopLoadingMessage();
            if (Utilities.checkNoNetwork(error)) {
                this.alertService.showStickyMessage(Utilities.noNetworkMessageCaption, Utilities.noNetworkMessageDetail, MessageSeverity.error, error);
                this.offerAlternateHost();
            }
            else {
                const errorMessage = Utilities.getHttpResponseMessage(error);
                if (errorMessage) {
                    this.alertService.showStickyMessage('Unable to login', this.mapLoginErrorMessage(errorMessage), MessageSeverity.error, error);
                }
                else {
                    this.alertService.showStickyMessage('Unable to login', 'An error occured whilst logging in, please try again later.\nError: ' + Utilities.getResponseBody(error), MessageSeverity.error, error);
                }
            }
            setTimeout(() => {
                this.isLoading = false;
            }, 500);
        });
    }
    offerAlternateHost() {
        if (Utilities.checkIsLocalHost(location.origin) && Utilities.checkIsLocalHost(this.configurations.baseUrl)) {
            this.alertService.showDialog('Dear Developer!\nIt appears your backend Web API service is not running...\n' +
                'Would you want to temporarily switch to the online Demo API below?(Or specify another)', DialogType.prompt, (value) => {
                this.configurations.baseUrl = value;
                this.configurations.tokenUrl = value;
                this.alertService.showStickyMessage('API Changed!', 'The target Web API has been changed to: ' + value, MessageSeverity.warn);
            }, null, null, null, this.configurations.fallbackBaseUrl);
        }
    }
    mapLoginErrorMessage(error) {
        if (error == 'invalid_username_or_password') {
            return 'Invalid username or password';
        }
        if (error == 'invalid_grant') {
            return 'This account has been disabled';
        }
        return error;
    }
    reset() {
        this.formResetToggle = false;
        setTimeout(() => {
            this.formResetToggle = true;
        });
    }
}
/** @nocollapse */ LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(ɵɵdirectiveInject(AlertService), ɵɵdirectiveInject(AuthService), ɵɵdirectiveInject(ConfigurationService)); };
/** @nocollapse */ LoginComponent.ɵcmp = ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], inputs: { isModal: "isModal" }, decls: 10, vars: 2, consts: [[1, "d-flex", "h-90"], [1, "login-container", "m-auto"], [1, "card", "boxshadow"], [1, "card-header", "bg-primary", "dark", "text-white", "clearfix"], ["aria-hidden", "true", 1, "fa", "fa-lock"], ["type", "button", "class", "close float-right text-light", "aria-label", "Close", 3, "click", 4, "ngIf"], [1, "card-body"], [1, "col-md-8", "offset-md-2"], ["class", "login", "name", "loginForm", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "close", "float-right", "text-light", 3, "click"], ["aria-hidden", "true"], ["name", "loginForm", "novalidate", "", 1, "login", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group", "row", "has-feedback-icon"], ["for", "login-username", 1, "col-form-label", "col-md-3"], [1, "col-md-9"], ["type", "text", "id", "login-username", "name", "username", "placeholder", "Enter username", "autocomplete", "username", "required", "", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "fa form-control-feedback", "aria-hidden", "true", 3, "ngClass", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "login-password", 1, "col-form-label", "col-md-3"], ["type", "password", "id", "login-password", "name", "password", "placeholder", "Enter password", "autocomplete", "current-password", "required", "", 1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "form-group", "row"], [1, "offset-md-3", "col-md-9"], [1, "form-check"], ["type", "checkbox", "id", "login-rememberme", "name", "rememberMe", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "login-rememberme", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "fa fa-circle-o-notch fa-spin", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "form-control-feedback", 3, "ngClass"], [1, "invalid-feedback"], [1, "fa", "fa-circle-o-notch", "fa-spin"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵelement(4, "i", 4);
        ɵɵtext(5, " Login ");
        ɵɵtemplate(6, LoginComponent_button_6_Template, 3, 0, "button", 5);
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 6);
        ɵɵelementStart(8, "div", 7);
        ɵɵtemplate(9, LoginComponent_form_9_Template, 29, 18, "form", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(6);
        ɵɵproperty("ngIf", ctx.isModal);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.formResetToggle);
    } }, directives: [NgIf, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, DefaultValueAccessor, RequiredValidator, NgClass, NgControlStatus, NgModel, CheckboxControlValueAccessor], styles: [".boxshadow[_ngcontent-%COMP%]{position:relative;box-shadow:1px 2px 4px rgba(0,0,0,.5);padding:10px;background:#fff}.boxshadow[_ngcontent-%COMP%]::after{content:\"\";position:absolute;z-index:-1;box-shadow:0 15px 20px rgba(0,0,0,.3);width:70%;left:15%;height:100px;bottom:0}.cardshadow[_ngcontent-%COMP%]{box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.last-control-group[_ngcontent-%COMP%]{margin-bottom:-.75rem}.h-90[_ngcontent-%COMP%]{height:90%}@media (min-width:768px){.login-container[_ngcontent-%COMP%]{width:700px}}@media (min-width:1200px){.login-container[_ngcontent-%COMP%]{width:730px}}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: AlertService }, { type: AuthService }, { type: ConfigurationService }]; }, { isModal: [{
            type: Input
        }] }); })();

class DependencyModule {
}
/** @nocollapse */ DependencyModule.ɵmod = ɵɵdefineNgModule({ type: DependencyModule });
/** @nocollapse */ DependencyModule.ɵinj = ɵɵdefineInjector({ factory: function DependencyModule_Factory(t) { return new (t || DependencyModule)(); }, providers: [], imports: [[],
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
        ChartsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(DependencyModule, { exports: [CommonModule,
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
        ChartsModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(DependencyModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

class NgxAppkitStarterAlphaModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('NgxAppkitStarterAlphaModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot() {
        return {
            ngModule: NgxAppkitStarterAlphaModule,
            providers: []
        };
    }
}
/** @nocollapse */ NgxAppkitStarterAlphaModule.ɵmod = ɵɵdefineNgModule({ type: NgxAppkitStarterAlphaModule });
/** @nocollapse */ NgxAppkitStarterAlphaModule.ɵinj = ɵɵdefineInjector({ factory: function NgxAppkitStarterAlphaModule_Factory(t) { return new (t || NgxAppkitStarterAlphaModule)(ɵɵinject(NgxAppkitStarterAlphaModule, 12)); }, providers: [
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
    ], imports: [[
            DependencyModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgxAppkitStarterAlphaModule, { declarations: [EqualValidator,
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
        NotFoundComponent], imports: [DependencyModule], exports: [EqualValidator,
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
        NotFoundComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxAppkitStarterAlphaModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], function () { return [{ type: NgxAppkitStarterAlphaModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

/*
 * Public API Surface of ngx-appkit-starter-alpha
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccountEndpoint, AccountService, AlertServiceProvider, AppTitleService, AutofocusDirective, BootstrapDatepickerDirective, BootstrapSelectDirective, BootstrapTabDirective, BootstrapToggleDirective, ConfigurationServiceProvider, DependencyModule, EqualValidator, Gender, GroupByPipe, LastElementDirective, LocalStoreManagerProvider, LoginComponent, NgxAppkitStarterAlphaModule, NotFoundComponent, Notification, NotificationEndpoint, NotificationService, NotificationsViewerComponent, Role, RoleEditorComponent, RolesManagementComponent, SearchBoxComponent, SettingsComponent, StatisticsDemoComponent, ThemeManagerProvider, TodoDemoComponent, TranslationServiceProvider, UserEdit, UserInfoComponent, UserLogin, UserPreferencesComponent, UsersManagementComponent, fadeInOut, flyInOut };
//# sourceMappingURL=polpware-ngx-appkit-starter-alpha.js.map
