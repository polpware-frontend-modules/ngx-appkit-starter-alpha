/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/account-endpoint.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AuthService, EndpointBase } from '@polpware/ngx-oauth2';
import { ConfigurationService } from '@polpware/ngx-appkit-services-alpha';
export class AccountEndpoint extends EndpointBase {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1lbmRwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hY2NvdW50LWVuZHBvaW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVDLE9BQU8sRUFDSCxXQUFXLEVBQ1gsWUFBWSxFQUNmLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFJM0UsTUFBTSxPQUFPLGVBQWdCLFNBQVEsWUFBWTs7Ozs7O0lBcUI3QyxZQUFvQixjQUFvQyxFQUFFLElBQWdCLEVBQUUsV0FBd0I7UUFDaEcsS0FBSyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztRQURULG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQW5CdkMsY0FBUyxHQUFXLG9CQUFvQixDQUFDO1FBQ3pDLHVCQUFrQixHQUFXLDZCQUE2QixDQUFDO1FBQzNELG9CQUFlLEdBQVcsdUJBQXVCLENBQUM7UUFDbEQsK0JBQTBCLEdBQVcsbUNBQW1DLENBQUM7UUFDekUsb0JBQWUsR0FBVyw0QkFBNEIsQ0FBQztRQUN2RCxjQUFTLEdBQVcsb0JBQW9CLENBQUM7UUFDekMsdUJBQWtCLEdBQVcseUJBQXlCLENBQUM7UUFDdkQsb0JBQWUsR0FBVywwQkFBMEIsQ0FBQztJQWN0RSxDQUFDOzs7O0lBWkQsSUFBSSxRQUFRLEtBQUssT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7OztJ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b0NBQTBEOzs7OztJQUMxRCw2Q0FBd0U7Ozs7O0lBQ3hFLDBDQUFzRTs7Ozs7SUFZMUQseUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgICBBdXRoU2VydmljZSxcbiAgICBFbmRwb2ludEJhc2Vcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1vYXV0aDInO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvblNlcnZpY2UgfSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1zZXJ2aWNlcy1hbHBoYSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjY291bnRFbmRwb2ludCBleHRlbmRzIEVuZHBvaW50QmFzZSB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IF91c2Vyc1VybDogc3RyaW5nID0gJy9hcGkvYWNjb3VudC91c2Vycyc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfdXNlckJ5VXNlck5hbWVVcmw6IHN0cmluZyA9ICcvYXBpL2FjY291bnQvdXNlcnMvdXNlcm5hbWUnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX2N1cnJlbnRVc2VyVXJsOiBzdHJpbmcgPSAnL2FwaS9hY2NvdW50L3VzZXJzL21lJztcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jdXJyZW50VXNlclByZWZlcmVuY2VzVXJsOiBzdHJpbmcgPSAnL2FwaS9hY2NvdW50L3VzZXJzL21lL3ByZWZlcmVuY2VzJztcbiAgICBwcml2YXRlIHJlYWRvbmx5IF91bmJsb2NrVXNlclVybDogc3RyaW5nID0gJy9hcGkvYWNjb3VudC91c2Vycy91bmJsb2NrJztcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9yb2xlc1VybDogc3RyaW5nID0gJy9hcGkvYWNjb3VudC9yb2xlcyc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfcm9sZUJ5Um9sZU5hbWVVcmw6IHN0cmluZyA9ICcvYXBpL2FjY291bnQvcm9sZXMvbmFtZSc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfcGVybWlzc2lvbnNVcmw6IHN0cmluZyA9ICcvYXBpL2FjY291bnQvcGVybWlzc2lvbnMnO1xuXG4gICAgZ2V0IHVzZXJzVXJsKCkgeyByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9ucy5iYXNlVXJsICsgdGhpcy5fdXNlcnNVcmw7IH1cbiAgICBnZXQgdXNlckJ5VXNlck5hbWVVcmwoKSB7IHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25zLmJhc2VVcmwgKyB0aGlzLl91c2VyQnlVc2VyTmFtZVVybDsgfVxuICAgIGdldCBjdXJyZW50VXNlclVybCgpIHsgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbnMuYmFzZVVybCArIHRoaXMuX2N1cnJlbnRVc2VyVXJsOyB9XG4gICAgZ2V0IGN1cnJlbnRVc2VyUHJlZmVyZW5jZXNVcmwoKSB7IHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25zLmJhc2VVcmwgKyB0aGlzLl9jdXJyZW50VXNlclByZWZlcmVuY2VzVXJsOyB9XG4gICAgZ2V0IHVuYmxvY2tVc2VyVXJsKCkgeyByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9ucy5iYXNlVXJsICsgdGhpcy5fdW5ibG9ja1VzZXJVcmw7IH1cbiAgICBnZXQgcm9sZXNVcmwoKSB7IHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25zLmJhc2VVcmwgKyB0aGlzLl9yb2xlc1VybDsgfVxuICAgIGdldCByb2xlQnlSb2xlTmFtZVVybCgpIHsgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbnMuYmFzZVVybCArIHRoaXMuX3JvbGVCeVJvbGVOYW1lVXJsOyB9XG4gICAgZ2V0IHBlcm1pc3Npb25zVXJsKCkgeyByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9ucy5iYXNlVXJsICsgdGhpcy5fcGVybWlzc2lvbnNVcmw7IH1cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWd1cmF0aW9uczogQ29uZmlndXJhdGlvblNlcnZpY2UsIGh0dHA6IEh0dHBDbGllbnQsIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xuICAgICAgICBzdXBlcihodHRwLCBhdXRoU2VydmljZSk7XG4gICAgfVxuXG5cbiAgICBnZXRVc2VyRW5kcG9pbnQ8VD4odXNlcklkPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50VXJsID0gdXNlcklkID8gYCR7dGhpcy51c2Vyc1VybH0vJHt1c2VySWR9YCA6IHRoaXMuY3VycmVudFVzZXJVcmw7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VD4oZW5kcG9pbnRVcmwsIHRoaXMucmVxdWVzdEhlYWRlcnMpLnBpcGU8VD4oXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgKCkgPT4gdGhpcy5nZXRVc2VyRW5kcG9pbnQodXNlcklkKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG5cbiAgICBnZXRVc2VyQnlVc2VyTmFtZUVuZHBvaW50PFQ+KHVzZXJOYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnRVcmwgPSBgJHt0aGlzLnVzZXJCeVVzZXJOYW1lVXJsfS8ke3VzZXJOYW1lfWA7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VD4oZW5kcG9pbnRVcmwsIHRoaXMucmVxdWVzdEhlYWRlcnMpLnBpcGU8VD4oXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgKCkgPT4gdGhpcy5nZXRVc2VyQnlVc2VyTmFtZUVuZHBvaW50KHVzZXJOYW1lKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG5cbiAgICBnZXRVc2Vyc0VuZHBvaW50PFQ+KHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50VXJsID0gcGFnZSAmJiBwYWdlU2l6ZSA/IGAke3RoaXMudXNlcnNVcmx9LyR7cGFnZX0vJHtwYWdlU2l6ZX1gIDogdGhpcy51c2Vyc1VybDtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUPihlbmRwb2ludFVybCwgdGhpcy5yZXF1ZXN0SGVhZGVycykucGlwZTxUPihcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCAoKSA9PiB0aGlzLmdldFVzZXJzRW5kcG9pbnQocGFnZSwgcGFnZVNpemUpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cblxuICAgIGdldE5ld1VzZXJFbmRwb2ludDxUPih1c2VyT2JqZWN0OiBhbnkpOiBPYnNlcnZhYmxlPFQ+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VD4odGhpcy51c2Vyc1VybCwgSlNPTi5zdHJpbmdpZnkodXNlck9iamVjdCksIHRoaXMucmVxdWVzdEhlYWRlcnMpLnBpcGU8VD4oXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgKCkgPT4gdGhpcy5nZXROZXdVc2VyRW5kcG9pbnQodXNlck9iamVjdCkpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGdldFVwZGF0ZVVzZXJFbmRwb2ludDxUPih1c2VyT2JqZWN0OiBhbnksIHVzZXJJZD86IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBlbmRwb2ludFVybCA9IHVzZXJJZCA/IGAke3RoaXMudXNlcnNVcmx9LyR7dXNlcklkfWAgOiB0aGlzLmN1cnJlbnRVc2VyVXJsO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFQ+KGVuZHBvaW50VXJsLCBKU09OLnN0cmluZ2lmeSh1c2VyT2JqZWN0KSwgdGhpcy5yZXF1ZXN0SGVhZGVycykucGlwZTxUPihcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCAoKSA9PiB0aGlzLmdldFVwZGF0ZVVzZXJFbmRwb2ludCh1c2VyT2JqZWN0LCB1c2VySWQpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBnZXRQYXRjaFVwZGF0ZVVzZXJFbmRwb2ludDxUPihwYXRjaDoge30sIHVzZXJJZD86IHN0cmluZyk6IE9ic2VydmFibGU8VD47XG4gICAgZ2V0UGF0Y2hVcGRhdGVVc2VyRW5kcG9pbnQ8VD4odmFsdWU6IGFueSwgb3A6IHN0cmluZywgcGF0aDogc3RyaW5nLCBmcm9tPzogYW55LCB1c2VySWQ/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+O1xuICAgIGdldFBhdGNoVXBkYXRlVXNlckVuZHBvaW50PFQ+KHZhbHVlT3JQYXRjaDogYW55LCBvcE9yVXNlcklkPzogc3RyaW5nLCBwYXRoPzogc3RyaW5nLCBmcm9tPzogYW55LCB1c2VySWQ/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICAgICAgbGV0IGVuZHBvaW50VXJsOiBzdHJpbmc7XG4gICAgICAgIGxldCBwYXRjaERvY3VtZW50OiB7fTtcblxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgZW5kcG9pbnRVcmwgPSB1c2VySWQgPyBgJHt0aGlzLnVzZXJzVXJsfS8ke3VzZXJJZH1gIDogdGhpcy5jdXJyZW50VXNlclVybDtcbiAgICAgICAgICAgIHBhdGNoRG9jdW1lbnQgPSBmcm9tID9cbiAgICAgICAgICAgICAgICBbeyB2YWx1ZTogdmFsdWVPclBhdGNoLCBwYXRoLCBvcDogb3BPclVzZXJJZCwgZnJvbSB9XSA6XG4gICAgICAgICAgICAgICAgW3sgdmFsdWU6IHZhbHVlT3JQYXRjaCwgcGF0aCwgb3A6IG9wT3JVc2VySWQgfV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbmRwb2ludFVybCA9IG9wT3JVc2VySWQgPyBgJHt0aGlzLnVzZXJzVXJsfS8ke29wT3JVc2VySWR9YCA6IHRoaXMuY3VycmVudFVzZXJVcmw7XG4gICAgICAgICAgICBwYXRjaERvY3VtZW50ID0gdmFsdWVPclBhdGNoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaDxUPihlbmRwb2ludFVybCwgSlNPTi5zdHJpbmdpZnkocGF0Y2hEb2N1bWVudCksIHRoaXMucmVxdWVzdEhlYWRlcnMpLnBpcGU8VD4oXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgKCkgPT4gdGhpcy5nZXRQYXRjaFVwZGF0ZVVzZXJFbmRwb2ludCh2YWx1ZU9yUGF0Y2gsIG9wT3JVc2VySWQsIHBhdGgsIGZyb20sIHVzZXJJZCkpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuXG4gICAgZ2V0VXNlclByZWZlcmVuY2VzRW5kcG9pbnQ8VD4oKTogT2JzZXJ2YWJsZTxUPiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VD4odGhpcy5jdXJyZW50VXNlclByZWZlcmVuY2VzVXJsLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0VXNlclByZWZlcmVuY2VzRW5kcG9pbnQoKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZ2V0VXBkYXRlVXNlclByZWZlcmVuY2VzRW5kcG9pbnQ8VD4oY29uZmlndXJhdGlvbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFQ+KHRoaXMuY3VycmVudFVzZXJQcmVmZXJlbmNlc1VybCwgSlNPTi5zdHJpbmdpZnkoY29uZmlndXJhdGlvbiksIHRoaXMucmVxdWVzdEhlYWRlcnMpLnBpcGU8VD4oXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgKCkgPT4gdGhpcy5nZXRVcGRhdGVVc2VyUHJlZmVyZW5jZXNFbmRwb2ludChjb25maWd1cmF0aW9uKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZ2V0VW5ibG9ja1VzZXJFbmRwb2ludDxUPih1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBlbmRwb2ludFVybCA9IGAke3RoaXMudW5ibG9ja1VzZXJVcmx9LyR7dXNlcklkfWA7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8VD4oZW5kcG9pbnRVcmwsIG51bGwsIHRoaXMucmVxdWVzdEhlYWRlcnMpLnBpcGU8VD4oXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgKCkgPT4gdGhpcy5nZXRVbmJsb2NrVXNlckVuZHBvaW50KHVzZXJJZCkpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGdldERlbGV0ZVVzZXJFbmRwb2ludDxUPih1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBlbmRwb2ludFVybCA9IGAke3RoaXMudXNlcnNVcmx9LyR7dXNlcklkfWA7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8VD4oZW5kcG9pbnRVcmwsIHRoaXMucmVxdWVzdEhlYWRlcnMpLnBpcGU8VD4oXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgKCkgPT4gdGhpcy5nZXREZWxldGVVc2VyRW5kcG9pbnQodXNlcklkKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG5cblxuXG5cbiAgICBnZXRSb2xlRW5kcG9pbnQ8VD4ocm9sZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnRVcmwgPSBgJHt0aGlzLnJvbGVzVXJsfS8ke3JvbGVJZH1gO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFQ+KGVuZHBvaW50VXJsLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0Um9sZUVuZHBvaW50KHJvbGVJZCkpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuXG4gICAgZ2V0Um9sZUJ5Um9sZU5hbWVFbmRwb2ludDxUPihyb2xlTmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50VXJsID0gYCR7dGhpcy5yb2xlQnlSb2xlTmFtZVVybH0vJHtyb2xlTmFtZX1gO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFQ+KGVuZHBvaW50VXJsLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0Um9sZUJ5Um9sZU5hbWVFbmRwb2ludChyb2xlTmFtZSkpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuXG5cbiAgICBnZXRSb2xlc0VuZHBvaW50PFQ+KHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50VXJsID0gcGFnZSAmJiBwYWdlU2l6ZSA/IGAke3RoaXMucm9sZXNVcmx9LyR7cGFnZX0vJHtwYWdlU2l6ZX1gIDogdGhpcy5yb2xlc1VybDtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUPihlbmRwb2ludFVybCwgdGhpcy5yZXF1ZXN0SGVhZGVycykucGlwZTxUPihcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCAoKSA9PiB0aGlzLmdldFJvbGVzRW5kcG9pbnQocGFnZSwgcGFnZVNpemUpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBnZXROZXdSb2xlRW5kcG9pbnQ8VD4ocm9sZU9iamVjdDogYW55KTogT2JzZXJ2YWJsZTxUPiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFQ+KHRoaXMucm9sZXNVcmwsIEpTT04uc3RyaW5naWZ5KHJvbGVPYmplY3QpLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0TmV3Um9sZUVuZHBvaW50KHJvbGVPYmplY3QpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBnZXRVcGRhdGVSb2xlRW5kcG9pbnQ8VD4ocm9sZU9iamVjdDogYW55LCByb2xlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBlbmRwb2ludFVybCA9IGAke3RoaXMucm9sZXNVcmx9LyR7cm9sZUlkfWA7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQ8VD4oZW5kcG9pbnRVcmwsIEpTT04uc3RyaW5naWZ5KHJvbGVPYmplY3QpLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0VXBkYXRlUm9sZUVuZHBvaW50KHJvbGVPYmplY3QsIHJvbGVJZCkpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGdldERlbGV0ZVJvbGVFbmRwb2ludDxUPihyb2xlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBlbmRwb2ludFVybCA9IGAke3RoaXMucm9sZXNVcmx9LyR7cm9sZUlkfWA7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8VD4oZW5kcG9pbnRVcmwsIHRoaXMucmVxdWVzdEhlYWRlcnMpLnBpcGU8VD4oXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgKCkgPT4gdGhpcy5nZXREZWxldGVSb2xlRW5kcG9pbnQocm9sZUlkKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG5cbiAgICBnZXRQZXJtaXNzaW9uc0VuZHBvaW50PFQ+KCk6IE9ic2VydmFibGU8VD4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFQ+KHRoaXMucGVybWlzc2lvbnNVcmwsIHRoaXMucmVxdWVzdEhlYWRlcnMpLnBpcGU8VD4oXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgKCkgPT4gdGhpcy5nZXRQZXJtaXNzaW9uc0VuZHBvaW50KCkpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cbn1cbiJdfQ==