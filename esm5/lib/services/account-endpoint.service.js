import { __extends } from "tslib";
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { EndpointBase } from '@polpware/ngx-oauth2';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-appkit-services-alpha";
import * as i2 from "@angular/common/http";
import * as i3 from "@polpware/ngx-oauth2";
var AccountEndpoint = /** @class */ (function (_super) {
    __extends(AccountEndpoint, _super);
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
        get: function () { return this.configurations.baseUrl + this._usersUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "userByUserNameUrl", {
        get: function () { return this.configurations.baseUrl + this._userByUserNameUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "currentUserUrl", {
        get: function () { return this.configurations.baseUrl + this._currentUserUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "currentUserPreferencesUrl", {
        get: function () { return this.configurations.baseUrl + this._currentUserPreferencesUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "unblockUserUrl", {
        get: function () { return this.configurations.baseUrl + this._unblockUserUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "rolesUrl", {
        get: function () { return this.configurations.baseUrl + this._rolesUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "roleByRoleNameUrl", {
        get: function () { return this.configurations.baseUrl + this._roleByRoleNameUrl; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountEndpoint.prototype, "permissionsUrl", {
        get: function () { return this.configurations.baseUrl + this._permissionsUrl; },
        enumerable: true,
        configurable: true
    });
    AccountEndpoint.prototype.getUserEndpoint = function (userId) {
        var _this = this;
        var endpointUrl = userId ? this.usersUrl + "/" + userId : this.currentUserUrl;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError(function (error) {
            return _this.handleError(error, function () { return _this.getUserEndpoint(userId); });
        }));
    };
    AccountEndpoint.prototype.getUserByUserNameEndpoint = function (userName) {
        var _this = this;
        var endpointUrl = this.userByUserNameUrl + "/" + userName;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError(function (error) {
            return _this.handleError(error, function () { return _this.getUserByUserNameEndpoint(userName); });
        }));
    };
    AccountEndpoint.prototype.getUsersEndpoint = function (page, pageSize) {
        var _this = this;
        var endpointUrl = page && pageSize ? this.usersUrl + "/" + page + "/" + pageSize : this.usersUrl;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError(function (error) {
            return _this.handleError(error, function () { return _this.getUsersEndpoint(page, pageSize); });
        }));
    };
    AccountEndpoint.prototype.getNewUserEndpoint = function (userObject) {
        var _this = this;
        return this.http.post(this.usersUrl, JSON.stringify(userObject), this.requestHeaders).pipe(catchError(function (error) {
            return _this.handleError(error, function () { return _this.getNewUserEndpoint(userObject); });
        }));
    };
    AccountEndpoint.prototype.getUpdateUserEndpoint = function (userObject, userId) {
        var _this = this;
        var endpointUrl = userId ? this.usersUrl + "/" + userId : this.currentUserUrl;
        return this.http.put(endpointUrl, JSON.stringify(userObject), this.requestHeaders).pipe(catchError(function (error) {
            return _this.handleError(error, function () { return _this.getUpdateUserEndpoint(userObject, userId); });
        }));
    };
    AccountEndpoint.prototype.getPatchUpdateUserEndpoint = function (valueOrPatch, opOrUserId, path, from, userId) {
        var _this = this;
        var endpointUrl;
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
        return this.http.patch(endpointUrl, JSON.stringify(patchDocument), this.requestHeaders).pipe(catchError(function (error) {
            return _this.handleError(error, function () { return _this.getPatchUpdateUserEndpoint(valueOrPatch, opOrUserId, path, from, userId); });
        }));
    };
    AccountEndpoint.prototype.getUserPreferencesEndpoint = function () {
        var _this = this;
        return this.http.get(this.currentUserPreferencesUrl, this.requestHeaders).pipe(catchError(function (error) {
            return _this.handleError(error, function () { return _this.getUserPreferencesEndpoint(); });
        }));
    };
    AccountEndpoint.prototype.getUpdateUserPreferencesEndpoint = function (configuration) {
        var _this = this;
        return this.http.put(this.currentUserPreferencesUrl, JSON.stringify(configuration), this.requestHeaders).pipe(catchError(function (error) {
            return _this.handleError(error, function () { return _this.getUpdateUserPreferencesEndpoint(configuration); });
        }));
    };
    AccountEndpoint.prototype.getUnblockUserEndpoint = function (userId) {
        var _this = this;
        var endpointUrl = this.unblockUserUrl + "/" + userId;
        return this.http.put(endpointUrl, null, this.requestHeaders).pipe(catchError(function (error) {
            return _this.handleError(error, function () { return _this.getUnblockUserEndpoint(userId); });
        }));
    };
    AccountEndpoint.prototype.getDeleteUserEndpoint = function (userId) {
        var _this = this;
        var endpointUrl = this.usersUrl + "/" + userId;
        return this.http.delete(endpointUrl, this.requestHeaders).pipe(catchError(function (error) {
            return _this.handleError(error, function () { return _this.getDeleteUserEndpoint(userId); });
        }));
    };
    AccountEndpoint.prototype.getRoleEndpoint = function (roleId) {
        var _this = this;
        var endpointUrl = this.rolesUrl + "/" + roleId;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError(function (error) {
            return _this.handleError(error, function () { return _this.getRoleEndpoint(roleId); });
        }));
    };
    AccountEndpoint.prototype.getRoleByRoleNameEndpoint = function (roleName) {
        var _this = this;
        var endpointUrl = this.roleByRoleNameUrl + "/" + roleName;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError(function (error) {
            return _this.handleError(error, function () { return _this.getRoleByRoleNameEndpoint(roleName); });
        }));
    };
    AccountEndpoint.prototype.getRolesEndpoint = function (page, pageSize) {
        var _this = this;
        var endpointUrl = page && pageSize ? this.rolesUrl + "/" + page + "/" + pageSize : this.rolesUrl;
        return this.http.get(endpointUrl, this.requestHeaders).pipe(catchError(function (error) {
            return _this.handleError(error, function () { return _this.getRolesEndpoint(page, pageSize); });
        }));
    };
    AccountEndpoint.prototype.getNewRoleEndpoint = function (roleObject) {
        var _this = this;
        return this.http.post(this.rolesUrl, JSON.stringify(roleObject), this.requestHeaders).pipe(catchError(function (error) {
            return _this.handleError(error, function () { return _this.getNewRoleEndpoint(roleObject); });
        }));
    };
    AccountEndpoint.prototype.getUpdateRoleEndpoint = function (roleObject, roleId) {
        var _this = this;
        var endpointUrl = this.rolesUrl + "/" + roleId;
        return this.http.put(endpointUrl, JSON.stringify(roleObject), this.requestHeaders).pipe(catchError(function (error) {
            return _this.handleError(error, function () { return _this.getUpdateRoleEndpoint(roleObject, roleId); });
        }));
    };
    AccountEndpoint.prototype.getDeleteRoleEndpoint = function (roleId) {
        var _this = this;
        var endpointUrl = this.rolesUrl + "/" + roleId;
        return this.http.delete(endpointUrl, this.requestHeaders).pipe(catchError(function (error) {
            return _this.handleError(error, function () { return _this.getDeleteRoleEndpoint(roleId); });
        }));
    };
    AccountEndpoint.prototype.getPermissionsEndpoint = function () {
        var _this = this;
        return this.http.get(this.permissionsUrl, this.requestHeaders).pipe(catchError(function (error) {
            return _this.handleError(error, function () { return _this.getPermissionsEndpoint(); });
        }));
    };
    /** @nocollapse */ AccountEndpoint.ɵfac = function AccountEndpoint_Factory(t) { return new (t || AccountEndpoint)(i0.ɵɵinject(i1.ConfigurationService), i0.ɵɵinject(i2.HttpClient), i0.ɵɵinject(i3.AuthService)); };
    /** @nocollapse */ AccountEndpoint.ɵprov = i0.ɵɵdefineInjectable({ token: AccountEndpoint, factory: AccountEndpoint.ɵfac });
    return AccountEndpoint;
}(EndpointBase));
export { AccountEndpoint };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AccountEndpoint, [{
        type: Injectable
    }], function () { return [{ type: i1.ConfigurationService }, { type: i2.HttpClient }, { type: i3.AuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC1lbmRwb2ludC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hY2NvdW50LWVuZHBvaW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdDQUFnQztBQUNoQyw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLGdDQUFnQztBQUVoQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBRUgsWUFBWSxFQUNmLE1BQU0sc0JBQXNCLENBQUM7Ozs7O0FBSTlCO0lBQ3FDLG1DQUFZO0lBcUI3Qyx5QkFBb0IsY0FBb0MsRUFBRSxJQUFnQixFQUFFLFdBQXdCO1FBQXBHLFlBQ0ksa0JBQU0sSUFBSSxFQUFFLFdBQVcsQ0FBQyxTQUMzQjtRQUZtQixvQkFBYyxHQUFkLGNBQWMsQ0FBc0I7UUFuQnZDLGVBQVMsR0FBVyxvQkFBb0IsQ0FBQztRQUN6Qyx3QkFBa0IsR0FBVyw2QkFBNkIsQ0FBQztRQUMzRCxxQkFBZSxHQUFXLHVCQUF1QixDQUFDO1FBQ2xELGdDQUEwQixHQUFXLG1DQUFtQyxDQUFDO1FBQ3pFLHFCQUFlLEdBQVcsNEJBQTRCLENBQUM7UUFDdkQsZUFBUyxHQUFXLG9CQUFvQixDQUFDO1FBQ3pDLHdCQUFrQixHQUFXLHlCQUF5QixDQUFDO1FBQ3ZELHFCQUFlLEdBQVcsMEJBQTBCLENBQUM7O0lBY3RFLENBQUM7SUFaRCxzQkFBSSxxQ0FBUTthQUFaLGNBQWlCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBQ3ZFLHNCQUFJLDhDQUFpQjthQUFyQixjQUEwQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMs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QixDQUE2QixDQUFDLENBQUM7UUFDeEUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNaLENBQUM7cUdBcE1RLGVBQWU7OEVBQWYsZUFBZSxXQUFmLGVBQWU7MEJBbEI1QjtDQXVOQyxBQXRNRCxDQUNxQyxZQUFZLEdBcU1oRDtTQXJNWSxlQUFlO2tEQUFmLGVBQWU7Y0FEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gICAgQXV0aFNlcnZpY2UsXG4gICAgRW5kcG9pbnRCYXNlXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtb2F1dGgyJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlIH0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtc2VydmljZXMtYWxwaGEnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBY2NvdW50RW5kcG9pbnQgZXh0ZW5kcyBFbmRwb2ludEJhc2Uge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBfdXNlcnNVcmw6IHN0cmluZyA9ICcvYXBpL2FjY291bnQvdXNlcnMnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3VzZXJCeVVzZXJOYW1lVXJsOiBzdHJpbmcgPSAnL2FwaS9hY2NvdW50L3VzZXJzL3VzZXJuYW1lJztcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jdXJyZW50VXNlclVybDogc3RyaW5nID0gJy9hcGkvYWNjb3VudC91c2Vycy9tZSc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfY3VycmVudFVzZXJQcmVmZXJlbmNlc1VybDogc3RyaW5nID0gJy9hcGkvYWNjb3VudC91c2Vycy9tZS9wcmVmZXJlbmNlcyc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfdW5ibG9ja1VzZXJVcmw6IHN0cmluZyA9ICcvYXBpL2FjY291bnQvdXNlcnMvdW5ibG9jayc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfcm9sZXNVcmw6IHN0cmluZyA9ICcvYXBpL2FjY291bnQvcm9sZXMnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3JvbGVCeVJvbGVOYW1lVXJsOiBzdHJpbmcgPSAnL2FwaS9hY2NvdW50L3JvbGVzL25hbWUnO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgX3Blcm1pc3Npb25zVXJsOiBzdHJpbmcgPSAnL2FwaS9hY2NvdW50L3Blcm1pc3Npb25zJztcblxuICAgIGdldCB1c2Vyc1VybCgpIHsgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbnMuYmFzZVVybCArIHRoaXMuX3VzZXJzVXJsOyB9XG4gICAgZ2V0IHVzZXJCeVVzZXJOYW1lVXJsKCkgeyByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9ucy5iYXNlVXJsICsgdGhpcy5fdXNlckJ5VXNlck5hbWVVcmw7IH1cbiAgICBnZXQgY3VycmVudFVzZXJVcmwoKSB7IHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25zLmJhc2VVcmwgKyB0aGlzLl9jdXJyZW50VXNlclVybDsgfVxuICAgIGdldCBjdXJyZW50VXNlclByZWZlcmVuY2VzVXJsKCkgeyByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9ucy5iYXNlVXJsICsgdGhpcy5fY3VycmVudFVzZXJQcmVmZXJlbmNlc1VybDsgfVxuICAgIGdldCB1bmJsb2NrVXNlclVybCgpIHsgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbnMuYmFzZVVybCArIHRoaXMuX3VuYmxvY2tVc2VyVXJsOyB9XG4gICAgZ2V0IHJvbGVzVXJsKCkgeyByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9ucy5iYXNlVXJsICsgdGhpcy5fcm9sZXNVcmw7IH1cbiAgICBnZXQgcm9sZUJ5Um9sZU5hbWVVcmwoKSB7IHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb25zLmJhc2VVcmwgKyB0aGlzLl9yb2xlQnlSb2xlTmFtZVVybDsgfVxuICAgIGdldCBwZXJtaXNzaW9uc1VybCgpIHsgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbnMuYmFzZVVybCArIHRoaXMuX3Blcm1pc3Npb25zVXJsOyB9XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlndXJhdGlvbnM6IENvbmZpZ3VyYXRpb25TZXJ2aWNlLCBodHRwOiBIdHRwQ2xpZW50LCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoaHR0cCwgYXV0aFNlcnZpY2UpO1xuICAgIH1cblxuXG4gICAgZ2V0VXNlckVuZHBvaW50PFQ+KHVzZXJJZD86IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBlbmRwb2ludFVybCA9IHVzZXJJZCA/IGAke3RoaXMudXNlcnNVcmx9LyR7dXNlcklkfWAgOiB0aGlzLmN1cnJlbnRVc2VyVXJsO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFQ+KGVuZHBvaW50VXJsLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0VXNlckVuZHBvaW50KHVzZXJJZCkpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuXG4gICAgZ2V0VXNlckJ5VXNlck5hbWVFbmRwb2ludDxUPih1c2VyTmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50VXJsID0gYCR7dGhpcy51c2VyQnlVc2VyTmFtZVVybH0vJHt1c2VyTmFtZX1gO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFQ+KGVuZHBvaW50VXJsLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0VXNlckJ5VXNlck5hbWVFbmRwb2ludCh1c2VyTmFtZSkpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuXG4gICAgZ2V0VXNlcnNFbmRwb2ludDxUPihwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcik6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBlbmRwb2ludFVybCA9IHBhZ2UgJiYgcGFnZVNpemUgPyBgJHt0aGlzLnVzZXJzVXJsfS8ke3BhZ2V9LyR7cGFnZVNpemV9YCA6IHRoaXMudXNlcnNVcmw7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VD4oZW5kcG9pbnRVcmwsIHRoaXMucmVxdWVzdEhlYWRlcnMpLnBpcGU8VD4oXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgKCkgPT4gdGhpcy5nZXRVc2Vyc0VuZHBvaW50KHBhZ2UsIHBhZ2VTaXplKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG5cbiAgICBnZXROZXdVc2VyRW5kcG9pbnQ8VD4odXNlck9iamVjdDogYW55KTogT2JzZXJ2YWJsZTxUPiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFQ+KHRoaXMudXNlcnNVcmwsIEpTT04uc3RyaW5naWZ5KHVzZXJPYmplY3QpLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0TmV3VXNlckVuZHBvaW50KHVzZXJPYmplY3QpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBnZXRVcGRhdGVVc2VyRW5kcG9pbnQ8VD4odXNlck9iamVjdDogYW55LCB1c2VySWQ/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnRVcmwgPSB1c2VySWQgPyBgJHt0aGlzLnVzZXJzVXJsfS8ke3VzZXJJZH1gIDogdGhpcy5jdXJyZW50VXNlclVybDtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxUPihlbmRwb2ludFVybCwgSlNPTi5zdHJpbmdpZnkodXNlck9iamVjdCksIHRoaXMucmVxdWVzdEhlYWRlcnMpLnBpcGU8VD4oXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgKCkgPT4gdGhpcy5nZXRVcGRhdGVVc2VyRW5kcG9pbnQodXNlck9iamVjdCwgdXNlcklkKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZ2V0UGF0Y2hVcGRhdGVVc2VyRW5kcG9pbnQ8VD4ocGF0Y2g6IHt9LCB1c2VySWQ/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+O1xuICAgIGdldFBhdGNoVXBkYXRlVXNlckVuZHBvaW50PFQ+KHZhbHVlOiBhbnksIG9wOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgZnJvbT86IGFueSwgdXNlcklkPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPjtcbiAgICBnZXRQYXRjaFVwZGF0ZVVzZXJFbmRwb2ludDxUPih2YWx1ZU9yUGF0Y2g6IGFueSwgb3BPclVzZXJJZD86IHN0cmluZywgcGF0aD86IHN0cmluZywgZnJvbT86IGFueSwgdXNlcklkPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgICAgIGxldCBlbmRwb2ludFVybDogc3RyaW5nO1xuICAgICAgICBsZXQgcGF0Y2hEb2N1bWVudDoge307XG5cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIGVuZHBvaW50VXJsID0gdXNlcklkID8gYCR7dGhpcy51c2Vyc1VybH0vJHt1c2VySWR9YCA6IHRoaXMuY3VycmVudFVzZXJVcmw7XG4gICAgICAgICAgICBwYXRjaERvY3VtZW50ID0gZnJvbSA/XG4gICAgICAgICAgICAgICAgW3sgdmFsdWU6IHZhbHVlT3JQYXRjaCwgcGF0aCwgb3A6IG9wT3JVc2VySWQsIGZyb20gfV0gOlxuICAgICAgICAgICAgICAgIFt7IHZhbHVlOiB2YWx1ZU9yUGF0Y2gsIHBhdGgsIG9wOiBvcE9yVXNlcklkIH1dO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW5kcG9pbnRVcmwgPSBvcE9yVXNlcklkID8gYCR7dGhpcy51c2Vyc1VybH0vJHtvcE9yVXNlcklkfWAgOiB0aGlzLmN1cnJlbnRVc2VyVXJsO1xuICAgICAgICAgICAgcGF0Y2hEb2N1bWVudCA9IHZhbHVlT3JQYXRjaDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2g8VD4oZW5kcG9pbnRVcmwsIEpTT04uc3RyaW5naWZ5KHBhdGNoRG9jdW1lbnQpLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0UGF0Y2hVcGRhdGVVc2VyRW5kcG9pbnQodmFsdWVPclBhdGNoLCBvcE9yVXNlcklkLCBwYXRoLCBmcm9tLCB1c2VySWQpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cblxuICAgIGdldFVzZXJQcmVmZXJlbmNlc0VuZHBvaW50PFQ+KCk6IE9ic2VydmFibGU8VD4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFQ+KHRoaXMuY3VycmVudFVzZXJQcmVmZXJlbmNlc1VybCwgdGhpcy5yZXF1ZXN0SGVhZGVycykucGlwZTxUPihcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCAoKSA9PiB0aGlzLmdldFVzZXJQcmVmZXJlbmNlc0VuZHBvaW50KCkpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGdldFVwZGF0ZVVzZXJQcmVmZXJlbmNlc0VuZHBvaW50PFQ+KGNvbmZpZ3VyYXRpb246IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxUPih0aGlzLmN1cnJlbnRVc2VyUHJlZmVyZW5jZXNVcmwsIEpTT04uc3RyaW5naWZ5KGNvbmZpZ3VyYXRpb24pLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0VXBkYXRlVXNlclByZWZlcmVuY2VzRW5kcG9pbnQoY29uZmlndXJhdGlvbikpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGdldFVuYmxvY2tVc2VyRW5kcG9pbnQ8VD4odXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnRVcmwgPSBgJHt0aGlzLnVuYmxvY2tVc2VyVXJsfS8ke3VzZXJJZH1gO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFQ+KGVuZHBvaW50VXJsLCBudWxsLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0VW5ibG9ja1VzZXJFbmRwb2ludCh1c2VySWQpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBnZXREZWxldGVVc2VyRW5kcG9pbnQ8VD4odXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnRVcmwgPSBgJHt0aGlzLnVzZXJzVXJsfS8ke3VzZXJJZH1gO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPFQ+KGVuZHBvaW50VXJsLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0RGVsZXRlVXNlckVuZHBvaW50KHVzZXJJZCkpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuXG5cblxuXG4gICAgZ2V0Um9sZUVuZHBvaW50PFQ+KHJvbGVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgICAgIGNvbnN0IGVuZHBvaW50VXJsID0gYCR7dGhpcy5yb2xlc1VybH0vJHtyb2xlSWR9YDtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUPihlbmRwb2ludFVybCwgdGhpcy5yZXF1ZXN0SGVhZGVycykucGlwZTxUPihcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCAoKSA9PiB0aGlzLmdldFJvbGVFbmRwb2ludChyb2xlSWQpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cblxuICAgIGdldFJvbGVCeVJvbGVOYW1lRW5kcG9pbnQ8VD4ocm9sZU5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBlbmRwb2ludFVybCA9IGAke3RoaXMucm9sZUJ5Um9sZU5hbWVVcmx9LyR7cm9sZU5hbWV9YDtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUPihlbmRwb2ludFVybCwgdGhpcy5yZXF1ZXN0SGVhZGVycykucGlwZTxUPihcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCAoKSA9PiB0aGlzLmdldFJvbGVCeVJvbGVOYW1lRW5kcG9pbnQocm9sZU5hbWUpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cblxuXG4gICAgZ2V0Um9sZXNFbmRwb2ludDxUPihwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcik6IE9ic2VydmFibGU8VD4ge1xuICAgICAgICBjb25zdCBlbmRwb2ludFVybCA9IHBhZ2UgJiYgcGFnZVNpemUgPyBgJHt0aGlzLnJvbGVzVXJsfS8ke3BhZ2V9LyR7cGFnZVNpemV9YCA6IHRoaXMucm9sZXNVcmw7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VD4oZW5kcG9pbnRVcmwsIHRoaXMucmVxdWVzdEhlYWRlcnMpLnBpcGU8VD4oXG4gICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFcnJvcihlcnJvciwgKCkgPT4gdGhpcy5nZXRSb2xlc0VuZHBvaW50KHBhZ2UsIHBhZ2VTaXplKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZ2V0TmV3Um9sZUVuZHBvaW50PFQ+KHJvbGVPYmplY3Q6IGFueSk6IE9ic2VydmFibGU8VD4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxUPih0aGlzLnJvbGVzVXJsLCBKU09OLnN0cmluZ2lmeShyb2xlT2JqZWN0KSwgdGhpcy5yZXF1ZXN0SGVhZGVycykucGlwZTxUPihcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCAoKSA9PiB0aGlzLmdldE5ld1JvbGVFbmRwb2ludChyb2xlT2JqZWN0KSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgZ2V0VXBkYXRlUm9sZUVuZHBvaW50PFQ+KHJvbGVPYmplY3Q6IGFueSwgcm9sZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnRVcmwgPSBgJHt0aGlzLnJvbGVzVXJsfS8ke3JvbGVJZH1gO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucHV0PFQ+KGVuZHBvaW50VXJsLCBKU09OLnN0cmluZ2lmeShyb2xlT2JqZWN0KSwgdGhpcy5yZXF1ZXN0SGVhZGVycykucGlwZTxUPihcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVycm9yKGVycm9yLCAoKSA9PiB0aGlzLmdldFVwZGF0ZVJvbGVFbmRwb2ludChyb2xlT2JqZWN0LCByb2xlSWQpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBnZXREZWxldGVSb2xlRW5kcG9pbnQ8VD4ocm9sZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnRVcmwgPSBgJHt0aGlzLnJvbGVzVXJsfS8ke3JvbGVJZH1gO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPFQ+KGVuZHBvaW50VXJsLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0RGVsZXRlUm9sZUVuZHBvaW50KHJvbGVJZCkpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuXG4gICAgZ2V0UGVybWlzc2lvbnNFbmRwb2ludDxUPigpOiBPYnNlcnZhYmxlPFQ+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUPih0aGlzLnBlcm1pc3Npb25zVXJsLCB0aGlzLnJlcXVlc3RIZWFkZXJzKS5waXBlPFQ+KFxuICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IsICgpID0+IHRoaXMuZ2V0UGVybWlzc2lvbnNFbmRwb2ludCgpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG59XG4iXX0=