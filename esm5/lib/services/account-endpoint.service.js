/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/account-endpoint.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AuthService, EndpointBase } from '@polpware/ngx-oauth2';
import { ConfigurationService } from '@polpware/ngx-appkit-services-alpha';
var AccountEndpoint = /** @class */ (function (_super) {
    tslib_1.__extends(AccountEndpoint, _super);
    function AccountEndpoint(configurations, http, authService) {
        var _this = _super.call(this, http, authService) || this;
        _this.configurations = configurations;
        _this._usersUrl = '/api/account/users';
        _this._userByUserNameUrl = '/api/account/users/username';
        _this._currentUserUrl = '/api/account/users/me';
        _this._currentUserPreferencesUrl = '/api/account/users/me/preferences';
        _this._unblockUserUrl = '/api/account/users/unblock';
        _this._rolesUrl = '/api/account/roles';
        _this._roleByRoleNameUrl = '/api/account/roles/name';
        _this._permissionsUrl = '/api/account/permissions';
        return _this;
    }
    Object.defineProperty(AccountEndpoint.prototype, "usersUrl", {
        get: /**
         * @return {?}
         */
        function () { return this.configurations.baseUrl + this._usersUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "userByUserNameUrl", {
        get: /**
         * @return {?}
         */
        function () { return this.configurations.baseUrl + this._userByUserNameUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "currentUserUrl", {
        get: /**
         * @return {?}
         */
        function () { return this.configurations.baseUrl + this._currentUserUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "currentUserPreferencesUrl", {
        get: /**
         * @return {?}
         */
        function () { return this.configurations.baseUrl + this._currentUserPreferencesUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "unblockUserUrl", {
        get: /**
         * @return {?}
         */
        function () { return this.configurations.baseUrl + this._unblockUserUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "rolesUrl", {
        get: /**
         * @return {?}
         */
        function () { return this.configurations.baseUrl + this._rolesUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "roleByRoleNameUrl", {
        get: /**
         * @return {?}
         */
        function () { return this.configurations.baseUrl + this._roleByRoleNameUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "permissionsUrl", {
        get: /**
         * @return {?}
         */
        function () { return this.configurations.baseUrl + this._permissionsUrl; },
        enumerable: true,
        configurable: true
    });
    /**
     * @template T
     * @param {?=} userId
     * @return {?}
     */
    AccountEndpoint.prototype.getUserEndpoint = /**
     * @template T
     * @param {?=} userId
     * @return {?}
     */
    function (userId) {
        var _this = this;
        /** @type {?} */
        var endpointUrl = userId ? this.usersUrl + "/" + userId : this.currentUserUrl;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.handleError(error, (/**
             * @return {?}
             */
            function () { return _this.getUserEndpoint(userId); }));
        })));
    };
    /**
     * @template T
     * @param {?} userName
     * @return {?}
     */
    AccountEndpoint.prototype.getUserByUserNameEndpoint = /**
     * @template T
     * @param {?} userName
     * @return {?}
     */
    function (userName) {
        var _this = this;
        /** @type {?} */
        var endpointUrl = this.userByUserNameUrl + "/" + userName;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.handleError(error, (/**
             * @return {?}
             */
            function () { return _this.getUserByUserNameEndpoint(userName); }));
        })));
    };
    /**
     * @template T
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    AccountEndpoint.prototype.getUsersEndpoint = /**
     * @template T
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (page, pageSize) {
        var _this = this;
        /** @type {?} */
        var endpointUrl = page && pageSize ? this.usersUrl + "/" + page + "/" + pageSize : this.usersUrl;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.handleError(error, (/**
             * @return {?}
             */
            function () { return _this.getUsersEndpoint(page, pageSize); }));
        })));
    };
    /**
     * @template T
     * @param {?} userObject
     * @return {?}
     */
    AccountEndpoint.prototype.getNewUserEndpoint = /**
     * @template T
     * @param {?} userObject
     * @return {?}
     */
    function (userObject) {
        var _this = this;
        return this.http.post(this.usersUrl, JSON.stringify(userObject), this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.handleError(error, (/**
             * @return {?}
             */
            function () { return _this.getNewUserEndpoint(userObject); }));
        })));
    };
    /**
     * @template T
     * @param {?} userObject
     * @param {?=} userId
     * @return {?}
     */
    AccountEndpoint.prototype.getUpdateUserEndpoint = /**
     * @template T
     * @param {?} userObject
     * @param {?=} userId
     * @return {?}
     */
    function (userObject, userId) {
        var _this = this;
        /** @type {?} */
        var endpointUrl = userId ? this.usersUrl + "/" + userId : this.currentUserUrl;
        return this.http.put(endpointUrl, JSON.stringify(userObject), this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.handleError(error, (/**
             * @return {?}
             */
            function () { return _this.getUpdateUserEndpoint(userObject, userId); }));
        })));
    };
    /**
     * @template T
     * @param {?} valueOrPatch
     * @param {?=} opOrUserId
     * @param {?=} path
     * @param {?=} from
     * @param {?=} userId
     * @return {?}
     */
    AccountEndpoint.prototype.getPatchUpdateUserEndpoint = /**
     * @template T
     * @param {?} valueOrPatch
     * @param {?=} opOrUserId
     * @param {?=} path
     * @param {?=} from
     * @param {?=} userId
     * @return {?}
     */
    function (valueOrPatch, opOrUserId, path, from, userId) {
        var _this = this;
        /** @type {?} */
        var endpointUrl;
        /** @type {?} */
        var patchDocument;
        if (path) {
            endpointUrl = userId ? this.usersUrl + "/" + userId : this.currentUserUrl;
            patchDocument = from ?
                [{ value: valueOrPatch, path: path, op: opOrUserId, from: from }] :
                [{ value: valueOrPatch, path: path, op: opOrUserId }];
        }
        else {
            endpointUrl = opOrUserId ? this.usersUrl + "/" + opOrUserId : this.currentUserUrl;
            patchDocument = valueOrPatch;
        }
        return this.http.patch(endpointUrl, JSON.stringify(patchDocument), this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.handleError(error, (/**
             * @return {?}
             */
            function () { return _this.getPatchUpdateUserEndpoint(valueOrPatch, opOrUserId, path, from, userId); }));
        })));
    };
    /**
     * @template T
     * @return {?}
     */
    AccountEndpoint.prototype.getUserPreferencesEndpoint = /**
     * @template T
     * @return {?}
     */
    function () {
        var _this = this;
        return this.http.get(this.currentUserPreferencesUrl, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.handleError(error, (/**
             * @return {?}
             */
            function () { return _this.getUserPreferencesEndpoint(); }));
        })));
    };
    /**
     * @template T
     * @param {?} configuration
     * @return {?}
     */
    AccountEndpoint.prototype.getUpdateUserPreferencesEndpoint = /**
     * @template T
     * @param {?} configuration
     * @return {?}
     */
    function (configuration) {
        var _this = this;
        return this.http.put(this.currentUserPreferencesUrl, JSON.stringify(configuration), this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.handleError(error, (/**
             * @return {?}
             */
            function () { return _this.getUpdateUserPreferencesEndpoint(configuration); }));
        })));
    };
    /**
     * @template T
     * @param {?} userId
     * @return {?}
     */
    AccountEndpoint.prototype.getUnblockUserEndpoint = /**
     * @template T
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        var _this = this;
        /** @type {?} */
        var endpointUrl = this.unblockUserUrl + "/" + userId;
        return this.http.put(endpointUrl, null, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.handleError(error, (/**
             * @return {?}
             */
            function () { return _this.getUnblockUserEndpoint(userId); }));
        })));
    };
    /**
     * @template T
     * @param {?} userId
     * @return {?}
     */
    AccountEndpoint.prototype.getDeleteUserEndpoint = /**
     * @template T
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        var _this = this;
        /** @type {?} */
        var endpointUrl = this.usersUrl + "/" + userId;
        return this.http.delete(endpointUrl, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.handleError(error, (/**
             * @return {?}
             */
            function () { return _this.getDeleteUserEndpoint(userId); }));
        })));
    };
    /**
     * @template T
     * @param {?} roleId
     * @return {?}
     */
    AccountEndpoint.prototype.getRoleEndpoint = /**
     * @template T
     * @param {?} roleId
     * @return {?}
     */
    function (roleId) {
        var _this = this;
        /** @type {?} */
        var endpointUrl = this.rolesUrl + "/" + roleId;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.handleError(error, (/**
             * @return {?}
             */
            function () { return _this.getRoleEndpoint(roleId); }));
        })));
    };
    /**
     * @template T
     * @param {?} roleName
     * @return {?}
     */
    AccountEndpoint.prototype.getRoleByRoleNameEndpoint = /**
     * @template T
     * @param {?} roleName
     * @return {?}
     */
    function (roleName) {
        var _this = this;
        /** @type {?} */
        var endpointUrl = this.roleByRoleNameUrl + "/" + roleName;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.handleError(error, (/**
             * @return {?}
             */
            function () { return _this.getRoleByRoleNameEndpoint(roleName); }));
        })));
    };
    /**
     * @template T
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    AccountEndpoint.prototype.getRolesEndpoint = /**
     * @template T
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (page, pageSize) {
        var _this = this;
        /** @type {?} */
        var endpointUrl = page && pageSize ? this.rolesUrl + "/" + page + "/" + pageSize : this.rolesUrl;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.handleError(error, (/**
             * @return {?}
             */
            function () { return _this.getRolesEndpoint(page, pageSize); }));
        })));
    };
    /**
     * @template T
     * @param {?} roleObject
     * @return {?}
     */
    AccountEndpoint.prototype.getNewRoleEndpoint = /**
     * @template T
     * @param {?} roleObject
     * @return {?}
     */
    function (roleObject) {
        var _this = this;
        return this.http.post(this.rolesUrl, JSON.stringify(roleObject), this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.handleError(error, (/**
             * @return {?}
             */
            function () { return _this.getNewRoleEndpoint(roleObject); }));
        })));
    };
    /**
     * @template T
     * @param {?} roleObject
     * @param {?} roleId
     * @return {?}
     */
    AccountEndpoint.prototype.getUpdateRoleEndpoint = /**
     * @template T
     * @param {?} roleObject
     * @param {?} roleId
     * @return {?}
     */
    function (roleObject, roleId) {
        var _this = this;
        /** @type {?} */
        var endpointUrl = this.rolesUrl + "/" + roleId;
        return this.http.put(endpointUrl, JSON.stringify(roleObject), this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.handleError(error, (/**
             * @return {?}
             */
            function () { return _this.getUpdateRoleEndpoint(roleObject, roleId); }));
        })));
    };
    /**
     * @template T
     * @param {?} roleId
     * @return {?}
     */
    AccountEndpoint.prototype.getDeleteRoleEndpoint = /**
     * @template T
     * @param {?} roleId
     * @return {?}
     */
    function (roleId) {
        var _this = this;
        /** @type {?} */
        var endpointUrl = this.rolesUrl + "/" + roleId;
        return this.http.delete(endpointUrl, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.handleError(error, (/**
             * @return {?}
             */
            function () { return _this.getDeleteRoleEndpoint(roleId); }));
        })));
    };
    /**
     * @template T
     * @return {?}
     */
    AccountEndpoint.prototype.getPermissionsEndpoint = /**
     * @template T
     * @return {?}
     */
    function () {
        var _this = this;
        return this.http.get(this.permissionsUrl, this.requestHeaders).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return _this.handleError(error, (/**
             * @return {?}
             */
            function () { return _this.getPermissionsEndpoint(); }));
        })));
    };
    AccountEndpoint.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AccountEndpoint.ctorParameters = function () { return [
        { type: ConfigurationService },
        { type: HttpClient },
        { type: AuthService }
    ]; };
    return AccountEndpoint;
}(EndpointBase));
export { AccountEndpoint };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1lbmRwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hY2NvdW50LWVuZHBvaW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQ0gsV0FBVyxFQUNYLFlBQVksRUFDZixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRzNFO0lBQ3FDLDJDQUFZO0lBcUI3Qyx5QkFBb0IsY0FBb0MsRUFBRSxJQUFnQixFQUFFLFdBQXdCO1FBQXBHLFlBQ0ksa0JBQU0sSUFBSSxFQUFFLFdBQVcsQ0FBQyxTQUMzQjtRQUZtQixvQkFBYyxHQUFkLGNBQWMsQ0FBc0I7UUFuQnZDLGVBQVMsR0FBVyxvQkFBb0IsQ0FBQztRQUN6Qyx3QkFBa0IsR0FBVyw2QkFBNkIsQ0FBQztRQUMzRCxxQkFBZSxHQUFXLHVCQUF1QixDQUFDO1FBQ2xELGdDQUEwQixHQUFXLG1DQUFtQyxDQUFDO1FBQ3pFLHFCQUFlLEdBQVcsNEJBQTRCLENBQUM7UUFDdkQsZUFBUyxHQUFXLG9CQUFvQixDQUFDO1FBQ3pDLHdCQUFrQixHQUFXLHlCQUF5QixDQUFDO1FBQ3ZELHFCQUFlLEdBQVcsMEJBQTBCLENBQUM7O0lBY3RFLENBQUM7SUFaRCxzQkFBSSxxQ0FBUTs7OztRQUFaLGNBQWlCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lB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UUFBQSxpQkFNQztRQUpHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUNsRSxVQUFVOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ1osT0FBTyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUs7OztZQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFBN0IsQ0FBNkIsRUFBQyxDQUFDO1FBQ3hFLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDWixDQUFDOztnQkFyTUosVUFBVTs7OztnQkFIRixvQkFBb0I7Z0JBUnBCLFVBQVU7Z0JBS2YsV0FBVzs7SUE0TWYsc0JBQUM7Q0FBQSxBQXRNRCxDQUNxQyxZQUFZLEdBcU1oRDtTQXJNWSxlQUFlOzs7Ozs7SUFFeEIsb0NBQTBEOzs7OztJQUMxRCw2Q0FBNEU7Ozs7O0lBQzVFLDBDQUFtRTs7Ozs7SUFDbkUscURBQTBGOzs7OztJQUMxRiwwQ0FBd0U7Ozs7O0lBQ3hFLG9DQUEwRDs7Ozs7SUFDMUQsNkNBQXdFOzs7OztJQUN4RSwwQ0FBc0U7Ozs7O0lBWTFELHlDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gICAgQXV0aFNlcnZpY2UsXG4gICAgRW5kcG9pbnRCYXNlXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtb2F1dGgyJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtc2VydmljZXMtYWxwaGEnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY2NvdW50RW5kcG9pbnQgZXh0ZW5kcyBFbmRwb2ludEJhc2Uge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBfdXNlcnNVcmw6IHN0cmluZyA9ICcvYXBpL2FjY291bnQvdXNlcnMnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3VzZXJCeVVzZXJOYW1lVXJsOiBzdHJpbmcgPSAnL2FwaS9hY2NvdW50L3VzZXJzL3VzZXJuYW1lJztcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jdXJyZW50VXNlclVybDogc3RyaW5nID0gJy9hcGkvYWNjb3VudC91c2Vycy9tZSc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfY3VycmVudFVzZXJQcmVmZXJlbmNlc1VybDogc3RyaW5nID0gJy9hcGkvYWNjb3VudC91c2Vycy9tZS9wcmVmZXJlbmNlcyc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfdW5ibG9ja1VzZXJVcmw6IHN0cmluZyA9ICcvYXBpL2FjY291bnQvdXNlcnMvdW5ibG9jayc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfcm9sZXNVcmw6IHN0cmluZyA9ICcvYXBpL2FjY291bnQvcm9sZXMnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3JvbGVCeVJvbGVOYW1lVXJsOiBzdHJpbmcgPSAnL2FwaS9hY2NvdW50L3JvbGVzL25hbWUnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3Blcm1pc3Npb25zVXJsOiBzdHJpbmcgPSAnL2FwaS9hY2NvdW50L3Blcm1pc3Npb25zJztcblxuICAgIGdldCB1c2Vyc1VybCgpIHsgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbnMuYmFzZVVybCArIHRoaXMuX3VzZXJzVXJsOyB9XG4gICAgZ2V0IHVzZXJCeVVzZXJOYW1lVXJsKCkgeyByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9ucy5iYXNlVXJsICsgdGhpcy5fdXNlckJ5VXNlck5hbWVVcmw7IH1cbiAgICBnZXQgY3VycmVudFVzZXJVcmwoKSB7IHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25zLmJhc2VVcmwgKyB0aGlzLl9jdXJyZW50VXNlclVybDsgfVxuICAgIGdldCBjdXJyZW50VXNlclByZWZlcmVuY2VzVXJsKCkgeyByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9ucy5iYXNlVXJsICsgdGhpcy5fY3VycmVudFVzZXJQcmVmZXJlbmNlc1VybDsgfVxuICAgIGdldCB1bmJsb2NrVXNlclVybCgpIHsgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbnMuYmFzZVVybCArIHRoaXMuX3VuYmxvY2tVc2VyVXJsOyB9XG4gICAgZ2V0IHJvbGVzVXJsKCkgeyByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9ucy5iYXNlVXJsICsgdGhpcy5fcm9sZXNVcmw7IH1cbiAgICBnZXQgcm9sZUJ5Um9sZU5hbWVVcmwoKSB7IHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25zLmJhc2VVcmwgKyB0aGlzLl9yb2xlQnlSb2xlTmFtZVVybDsgfVxuICAgIGdldCBwZXJtaXNzaW9uc1VybCgpIHsgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbnMuYmFzZVVybCArIHRoaXMuX3Blcm1pc3Npb25zVXJsOyB9XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlndXJhdGlvbnM6IENvbmZpZ3VyYXRpb25TZXJ2aWNlLCBodHRwOiBIdHRwQ2xpZW50LCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoaHR0cCwgYXV0aFNlcnZpY2UpO1xuICAgIH1cblxuXG4gICAgZ2V0VXNlckVuZHBvaW50PFQ+KHVzZXJJZD86IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBlbmRwb2ludFVybCA9IHVzZXJJZCA/IGAke3RoaXMudXNlcnNVcmx9LyR7dXNlcklkfWAgOiB0aGlzLmN1cnJlbnRVc2VyVXJsO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFQ+KGVuZHBvaW50VXJsLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0VXNlckVuZHBvaW50KHVzZXJJZCkpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuXG4gICAgZ2V0VXNlckJ5VXNlck5hbWVFbmRwb2ludDxUPih1c2VyTmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50VXJsID0gYCR7dGhpcy51c2VyQnlVc2VyTmFtZVVybH0vJHt1c2VyTmFtZX1gO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFQ+KGVuZHBvaW50VXJsLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0VXNlckJ5VXNlck5hbWVFbmRwb2ludCh1c2VyTmFtZSkpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuXG4gICAgZ2V0VXNlcnNFbmRwb2ludDxUPihwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcik6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBlbmRwb2ludFVybCA9IHBhZ2UgJiYgcGFnZVNpemUgPyBgJHt0aGlzLnVzZXJzVXJsfS8ke3BhZ2V9LyR7cGFnZVNpemV9YCA6IHRoaXMudXNlcnNVcmw7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VD4oZW5kcG9pbnRVcmwsIHRoaXMucmVxdWVzdEhlYWRlcnMpLnBpcGU8VD4oXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgKCkgPT4gdGhpcy5nZXRVc2Vyc0VuZHBvaW50KHBhZ2UsIHBhZ2VTaXplKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG5cbiAgICBnZXROZXdVc2VyRW5kcG9pbnQ8VD4odXNlck9iamVjdDogYW55KTogT2JzZXJ2YWJsZTxUPiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFQ+KHRoaXMudXNlcnNVcmwsIEpTT04uc3RyaW5naWZ5KHVzZXJPYmplY3QpLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0TmV3VXNlckVuZHBvaW50KHVzZXJPYmplY3QpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBnZXRVcGRhdGVVc2VyRW5kcG9pbnQ8VD4odXNlck9iamVjdDogYW55LCB1c2VySWQ/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnRVcmwgPSB1c2VySWQgPyBgJHt0aGlzLnVzZXJzVXJsfS8ke3VzZXJJZH1gIDogdGhpcy5jdXJyZW50VXNlclVybDtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxUPihlbmRwb2ludFVybCwgSlNPTi5zdHJpbmdpZnkodXNlck9iamVjdCksIHRoaXMucmVxdWVzdEhlYWRlcnMpLnBpcGU8VD4oXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgKCkgPT4gdGhpcy5nZXRVcGRhdGVVc2VyRW5kcG9pbnQodXNlck9iamVjdCwgdXNlcklkKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZ2V0UGF0Y2hVcGRhdGVVc2VyRW5kcG9pbnQ8VD4ocGF0Y2g6IHt9LCB1c2VySWQ/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+O1xuICAgIGdldFBhdGNoVXBkYXRlVXNlckVuZHBvaW50PFQ+KHZhbHVlOiBhbnksIG9wOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgZnJvbT86IGFueSwgdXNlcklkPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPjtcbiAgICBnZXRQYXRjaFVwZGF0ZVVzZXJFbmRwb2ludDxUPih2YWx1ZU9yUGF0Y2g6IGFueSwgb3BPclVzZXJJZD86IHN0cmluZywgcGF0aD86IHN0cmluZywgZnJvbT86IGFueSwgdXNlcklkPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgICAgIGxldCBlbmRwb2ludFVybDogc3RyaW5nO1xuICAgICAgICBsZXQgcGF0Y2hEb2N1bWVudDoge307XG5cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIGVuZHBvaW50VXJsID0gdXNlcklkID8gYCR7dGhpcy51c2Vyc1VybH0vJHt1c2VySWR9YCA6IHRoaXMuY3VycmVudFVzZXJVcmw7XG4gICAgICAgICAgICBwYXRjaERvY3VtZW50ID0gZnJvbSA/XG4gICAgICAgICAgICAgICAgW3sgdmFsdWU6IHZhbHVlT3JQYXRjaCwgcGF0aCwgb3A6IG9wT3JVc2VySWQsIGZyb20gfV0gOlxuICAgICAgICAgICAgICAgIFt7IHZhbHVlOiB2YWx1ZU9yUGF0Y2gsIHBhdGgsIG9wOiBvcE9yVXNlcklkIH1dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW5kcG9pbnRVcmwgPSBvcE9yVXNlcklkID8gYCR7dGhpcy51c2Vyc1VybH0vJHtvcE9yVXNlcklkfWAgOiB0aGlzLmN1cnJlbnRVc2VyVXJsO1xuICAgICAgICAgICAgcGF0Y2hEb2N1bWVudCA9IHZhbHVlT3JQYXRjaDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2g8VD4oZW5kcG9pbnRVcmwsIEpTT04uc3RyaW5naWZ5KHBhdGNoRG9jdW1lbnQpLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0UGF0Y2hVcGRhdGVVc2VyRW5kcG9pbnQodmFsdWVPclBhdGNoLCBvcE9yVXNlcklkLCBwYXRoLCBmcm9tLCB1c2VySWQpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cblxuICAgIGdldFVzZXJQcmVmZXJlbmNlc0VuZHBvaW50PFQ+KCk6IE9ic2VydmFibGU8VD4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFQ+KHRoaXMuY3VycmVudFVzZXJQcmVmZXJlbmNlc1VybCwgdGhpcy5yZXF1ZXN0SGVhZGVycykucGlwZTxUPihcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCAoKSA9PiB0aGlzLmdldFVzZXJQcmVmZXJlbmNlc0VuZHBvaW50KCkpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGdldFVwZGF0ZVVzZXJQcmVmZXJlbmNlc0VuZHBvaW50PFQ+KGNvbmZpZ3VyYXRpb246IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxUPih0aGlzLmN1cnJlbnRVc2VyUHJlZmVyZW5jZXNVcmwsIEpTT04uc3RyaW5naWZ5KGNvbmZpZ3VyYXRpb24pLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0VXBkYXRlVXNlclByZWZlcmVuY2VzRW5kcG9pbnQoY29uZmlndXJhdGlvbikpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGdldFVuYmxvY2tVc2VyRW5kcG9pbnQ8VD4odXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnRVcmwgPSBgJHt0aGlzLnVuYmxvY2tVc2VyVXJsfS8ke3VzZXJJZH1gO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFQ+KGVuZHBvaW50VXJsLCBudWxsLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0VW5ibG9ja1VzZXJFbmRwb2ludCh1c2VySWQpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBnZXREZWxldGVVc2VyRW5kcG9pbnQ8VD4odXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnRVcmwgPSBgJHt0aGlzLnVzZXJzVXJsfS8ke3VzZXJJZH1gO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPFQ+KGVuZHBvaW50VXJsLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0RGVsZXRlVXNlckVuZHBvaW50KHVzZXJJZCkpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuXG5cblxuXG4gICAgZ2V0Um9sZUVuZHBvaW50PFQ+KHJvbGVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50VXJsID0gYCR7dGhpcy5yb2xlc1VybH0vJHtyb2xlSWR9YDtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUPihlbmRwb2ludFVybCwgdGhpcy5yZXF1ZXN0SGVhZGVycykucGlwZTxUPihcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCAoKSA9PiB0aGlzLmdldFJvbGVFbmRwb2ludChyb2xlSWQpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cblxuICAgIGdldFJvbGVCeVJvbGVOYW1lRW5kcG9pbnQ8VD4ocm9sZU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBlbmRwb2ludFVybCA9IGAke3RoaXMucm9sZUJ5Um9sZU5hbWVVcmx9LyR7cm9sZU5hbWV9YDtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUPihlbmRwb2ludFVybCwgdGhpcy5yZXF1ZXN0SGVhZGVycykucGlwZTxUPihcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCAoKSA9PiB0aGlzLmdldFJvbGVCeVJvbGVOYW1lRW5kcG9pbnQocm9sZU5hbWUpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cblxuXG4gICAgZ2V0Um9sZXNFbmRwb2ludDxUPihwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcik6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBlbmRwb2ludFVybCA9IHBhZ2UgJiYgcGFnZVNpemUgPyBgJHt0aGlzLnJvbGVzVXJsfS8ke3BhZ2V9LyR7cGFnZVNpemV9YCA6IHRoaXMucm9sZXNVcmw7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VD4oZW5kcG9pbnRVcmwsIHRoaXMucmVxdWVzdEhlYWRlcnMpLnBpcGU8VD4oXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgKCkgPT4gdGhpcy5nZXRSb2xlc0VuZHBvaW50KHBhZ2UsIHBhZ2VTaXplKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZ2V0TmV3Um9sZUVuZHBvaW50PFQ+KHJvbGVPYmplY3Q6IGFueSk6IE9ic2VydmFibGU8VD4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxUPih0aGlzLnJvbGVzVXJsLCBKU09OLnN0cmluZ2lmeShyb2xlT2JqZWN0KSwgdGhpcy5yZXF1ZXN0SGVhZGVycykucGlwZTxUPihcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCAoKSA9PiB0aGlzLmdldE5ld1JvbGVFbmRwb2ludChyb2xlT2JqZWN0KSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZ2V0VXBkYXRlUm9sZUVuZHBvaW50PFQ+KHJvbGVPYmplY3Q6IGFueSwgcm9sZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnRVcmwgPSBgJHt0aGlzLnJvbGVzVXJsfS8ke3JvbGVJZH1gO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFQ+KGVuZHBvaW50VXJsLCBKU09OLnN0cmluZ2lmeShyb2xlT2JqZWN0KSwgdGhpcy5yZXF1ZXN0SGVhZGVycykucGlwZTxUPihcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCAoKSA9PiB0aGlzLmdldFVwZGF0ZVJvbGVFbmRwb2ludChyb2xlT2JqZWN0LCByb2xlSWQpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBnZXREZWxldGVSb2xlRW5kcG9pbnQ8VD4ocm9sZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnRVcmwgPSBgJHt0aGlzLnJvbGVzVXJsfS8ke3JvbGVJZH1gO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPFQ+KGVuZHBvaW50VXJsLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0RGVsZXRlUm9sZUVuZHBvaW50KHJvbGVJZCkpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuXG4gICAgZ2V0UGVybWlzc2lvbnNFbmRwb2ludDxUPigpOiBPYnNlcnZhYmxlPFQ+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUPih0aGlzLnBlcm1pc3Npb25zVXJsLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0UGVybWlzc2lvbnNFbmRwb2ludCgpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG59XG4iXX0=