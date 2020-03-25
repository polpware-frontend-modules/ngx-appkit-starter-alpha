/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/account.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Injectable } from '@angular/core';
import { Subject, forkJoin } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { AuthService } from '@polpware/ngx-oauth2';
import { AccountEndpoint } from './account-endpoint.service';
/**
 * @record
 */
export function RolesChangedEventArg() { }
if (false) {
    /** @type {?} */
    RolesChangedEventArg.prototype.roles;
    /** @type {?} */
    RolesChangedEventArg.prototype.operation;
}
var AccountService = /** @class */ (function () {
    function AccountService(authService, accountEndpoint) {
        this.authService = authService;
        this.accountEndpoint = accountEndpoint;
        this._rolesChanged = new Subject();
    }
    /**
     * @param {?=} userId
     * @return {?}
     */
    AccountService.prototype.getUser = /**
     * @param {?=} userId
     * @return {?}
     */
    function (userId) {
        return this.accountEndpoint.getUserEndpoint(userId);
    };
    /**
     * @param {?=} userId
     * @return {?}
     */
    AccountService.prototype.getUserAndRoles = /**
     * @param {?=} userId
     * @return {?}
     */
    function (userId) {
        return forkJoin(this.accountEndpoint.getUserEndpoint(userId), this.accountEndpoint.getRolesEndpoint());
    };
    /**
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    AccountService.prototype.getUsers = /**
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (page, pageSize) {
        return this.accountEndpoint.getUsersEndpoint(page, pageSize);
    };
    /**
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    AccountService.prototype.getUsersAndRoles = /**
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (page, pageSize) {
        return forkJoin(this.accountEndpoint.getUsersEndpoint(page, pageSize), this.accountEndpoint.getRolesEndpoint());
    };
    /**
     * @param {?} user
     * @return {?}
     */
    AccountService.prototype.updateUser = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        var _this = this;
        if (user.id) {
            return this.accountEndpoint.getUpdateUserEndpoint(user, user.id);
        }
        else {
            return this.accountEndpoint.getUserByUserNameEndpoint(user.userName).pipe(mergeMap((/**
             * @param {?} foundUser
             * @return {?}
             */
            function (foundUser) {
                user.id = foundUser.id;
                return _this.accountEndpoint.getUpdateUserEndpoint(user, user.id);
            })));
        }
    };
    /**
     * @param {?} user
     * @return {?}
     */
    AccountService.prototype.newUser = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        return this.accountEndpoint.getNewUserEndpoint(user);
    };
    /**
     * @return {?}
     */
    AccountService.prototype.getUserPreferences = /**
     * @return {?}
     */
    function () {
        return this.accountEndpoint.getUserPreferencesEndpoint();
    };
    /**
     * @param {?} configuration
     * @return {?}
     */
    AccountService.prototype.updateUserPreferences = /**
     * @param {?} configuration
     * @return {?}
     */
    function (configuration) {
        return this.accountEndpoint.getUpdateUserPreferencesEndpoint(configuration);
    };
    /**
     * @param {?} userOrUserId
     * @return {?}
     */
    AccountService.prototype.deleteUser = /**
     * @param {?} userOrUserId
     * @return {?}
     */
    function (userOrUserId) {
        var _this = this;
        if (typeof userOrUserId === 'string' || userOrUserId instanceof String) {
            return this.accountEndpoint.getDeleteUserEndpoint((/** @type {?} */ (userOrUserId))).pipe(tap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return _this.onRolesUserCountChanged(data.roles); })));
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
                function (user) { return _this.deleteUser(user.id); })));
            }
        }
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    AccountService.prototype.unblockUser = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        return this.accountEndpoint.getUnblockUserEndpoint(userId);
    };
    /**
     * @param {?} permissionValue
     * @return {?}
     */
    AccountService.prototype.userHasPermission = /**
     * @param {?} permissionValue
     * @return {?}
     */
    function (permissionValue) {
        return this.permissions.some((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return p == permissionValue; }));
    };
    /**
     * @return {?}
     */
    AccountService.prototype.refreshLoggedInUser = /**
     * @return {?}
     */
    function () {
        return this.accountEndpoint.refreshLogin();
    };
    /**
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    AccountService.prototype.getRoles = /**
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (page, pageSize) {
        return this.accountEndpoint.getRolesEndpoint(page, pageSize);
    };
    /**
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    AccountService.prototype.getRolesAndPermissions = /**
     * @param {?=} page
     * @param {?=} pageSize
     * @return {?}
     */
    function (page, pageSize) {
        return forkJoin(this.accountEndpoint.getRolesEndpoint(page, pageSize), this.accountEndpoint.getPermissionsEndpoint());
    };
    /**
     * @param {?} role
     * @return {?}
     */
    AccountService.prototype.updateRole = /**
     * @param {?} role
     * @return {?}
     */
    function (role) {
        var _this = this;
        if (role.id) {
            return this.accountEndpoint.getUpdateRoleEndpoint(role, role.id).pipe(tap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return _this.onRolesChanged([role], AccountService.roleModifiedOperation); })));
        }
        else {
            return this.accountEndpoint.getRoleByRoleNameEndpoint(role.name).pipe(mergeMap((/**
             * @param {?} foundRole
             * @return {?}
             */
            function (foundRole) {
                role.id = foundRole.id;
                return _this.accountEndpoint.getUpdateRoleEndpoint(role, role.id);
            })), tap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return _this.onRolesChanged([role], AccountService.roleModifiedOperation); })));
        }
    };
    /**
     * @param {?} role
     * @return {?}
     */
    AccountService.prototype.newRole = /**
     * @param {?} role
     * @return {?}
     */
    function (role) {
        var _this = this;
        return this.accountEndpoint.getNewRoleEndpoint(role).pipe(tap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return _this.onRolesChanged([role], AccountService.roleAddedOperation); })));
    };
    /**
     * @param {?} roleOrRoleId
     * @return {?}
     */
    AccountService.prototype.deleteRole = /**
     * @param {?} roleOrRoleId
     * @return {?}
     */
    function (roleOrRoleId) {
        var _this = this;
        if (typeof roleOrRoleId === 'string' || roleOrRoleId instanceof String) {
            return this.accountEndpoint.getDeleteRoleEndpoint((/** @type {?} */ (roleOrRoleId))).pipe(tap((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return _this.onRolesChanged([data], AccountService.roleDeletedOperation); })));
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
                function (role) { return _this.deleteRole(role.id); })));
            }
        }
    };
    /**
     * @return {?}
     */
    AccountService.prototype.getPermissions = /**
     * @return {?}
     */
    function () {
        return this.accountEndpoint.getPermissionsEndpoint();
    };
    /**
     * @private
     * @param {?} roles
     * @param {?} op
     * @return {?}
     */
    AccountService.prototype.onRolesChanged = /**
     * @private
     * @param {?} roles
     * @param {?} op
     * @return {?}
     */
    function (roles, op) {
        this._rolesChanged.next({ roles: roles, operation: op });
    };
    /**
     * @param {?} roles
     * @return {?}
     */
    AccountService.prototype.onRolesUserCountChanged = /**
     * @param {?} roles
     * @return {?}
     */
    function (roles) {
        return this.onRolesChanged(roles, AccountService.roleModifiedOperation);
    };
    /**
     * @return {?}
     */
    AccountService.prototype.getRolesChangedEvent = /**
     * @return {?}
     */
    function () {
        return this._rolesChanged.asObservable();
    };
    Object.defineProperty(AccountService.prototype, "permissions", {
        get: /**
         * @return {?}
         */
        function () {
            return this.authService.userPermissions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountService.prototype, "currentUser", {
        get: /**
         * @return {?}
         */
        function () {
            return this.authService.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    AccountService.roleAddedOperation = 'add';
    AccountService.roleDeletedOperation = 'delete';
    AccountService.roleModifiedOperation = 'modify';
    AccountService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AccountService.ctorParameters = function () { return [
        { type: AuthService },
        { type: AccountEndpoint }
    ]; };
    return AccountService;
}());
export { AccountService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DLE9BQU8sRUFDSCxXQUFXLEVBR2QsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFNN0QsMENBQXFHOzs7SUFBN0QscUNBQXlCOztJQUFDLHlDQUFpQzs7QUFFbkc7SUFRSSx3QkFDWSxXQUF3QixFQUN4QixlQUFnQztRQURoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFKcEMsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBd0IsQ0FBQztJQU01RCxDQUFDOzs7OztJQUVELGdDQUFPOzs7O0lBQVAsVUFBUSxNQUFlO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQU8sTUFBTSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCx3Q0FBZTs7OztJQUFmLFVBQWdCLE1BQWU7UUFFM0IsT0FBTyxRQUFRLENBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQU8sTUFBTSxDQUFDLEVBQ2xELElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQVUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7OztJQUVELGlDQUFROzs7OztJQUFSLFVBQVMsSUFBYSxFQUFFLFFBQWlCO1FBRXJDLE9BQU8s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QUN2QixrQ0FBeUU7O0lBQ3pFLG9DQUE4RTs7SUFDOUUscUNBQStFOzs7OztJQUUvRSx1Q0FBNEQ7Ozs7O0lBR3hELHFDQUFnQzs7Ozs7SUFDaEMseUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBmb3JrSm9pbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWVyZ2VNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgICBBdXRoU2VydmljZSwgVXNlcixcbiAgICBQZXJtaXNzaW9uLFxuICAgIFBlcm1pc3Npb25WYWx1ZXNcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1vYXV0aDInO1xuXG5pbXBvcnQgeyBBY2NvdW50RW5kcG9pbnQgfSBmcm9tICcuL2FjY291bnQtZW5kcG9pbnQuc2VydmljZSc7XG5cbmltcG9ydCB7IFJvbGUgfSBmcm9tICcuLi9tb2RlbHMvcm9sZS5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyRWRpdCB9IGZyb20gJy4uL21vZGVscy91c2VyLWVkaXQubW9kZWwnO1xuXG5leHBvcnQgdHlwZSBSb2xlc0NoYW5nZWRPcGVyYXRpb24gPSAnYWRkJyB8ICdkZWxldGUnIHwgJ21vZGlmeSc7XG5leHBvcnQgaW50ZXJmYWNlIFJvbGVzQ2hhbmdlZEV2ZW50QXJnIHsgcm9sZXM6IFJvbGVbXSB8IHN0cmluZ1tdOyBvcGVyYXRpb246IFJvbGVzQ2hhbmdlZE9wZXJhdGlvbjsgfVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWNjb3VudFNlcnZpY2Uge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgcm9sZUFkZGVkT3BlcmF0aW9uOiBSb2xlc0NoYW5nZWRPcGVyYXRpb24gPSAnYWRkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHJvbGVEZWxldGVkT3BlcmF0aW9uOiBSb2xlc0NoYW5nZWRPcGVyYXRpb24gPSAnZGVsZXRlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHJvbGVNb2RpZmllZE9wZXJhdGlvbjogUm9sZXNDaGFuZ2VkT3BlcmF0aW9uID0gJ21vZGlmeSc7XG5cbiAgICBwcml2YXRlIF9yb2xlc0NoYW5nZWQgPSBuZXcgU3ViamVjdDxSb2xlc0NoYW5nZWRFdmVudEFyZz4oKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhY2NvdW50RW5kcG9pbnQ6IEFjY291bnRFbmRwb2ludCkge1xuXG4gICAgfVxuXG4gICAgZ2V0VXNlcih1c2VySWQ/OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFVzZXJFbmRwb2ludDxVc2VyPih1c2VySWQpO1xuICAgIH1cblxuICAgIGdldFVzZXJBbmRSb2xlcyh1c2VySWQ/OiBzdHJpbmcpIHtcblxuICAgICAgICByZXR1cm4gZm9ya0pvaW4oXG4gICAgICAgICAgICB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRVc2VyRW5kcG9pbnQ8VXNlcj4odXNlcklkKSxcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFJvbGVzRW5kcG9pbnQ8Um9sZVtdPigpKTtcbiAgICB9XG5cbiAgICBnZXRVc2VycyhwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRVc2Vyc0VuZHBvaW50PFVzZXJbXT4ocGFnZSwgcGFnZVNpemUpO1xuICAgIH1cblxuICAgIGdldFVzZXJzQW5kUm9sZXMocGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcblxuICAgICAgICByZXR1cm4gZm9ya0pvaW4oXG4gICAgICAgICAgICB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRVc2Vyc0VuZHBvaW50PFVzZXJbXT4ocGFnZSwgcGFnZVNpemUpLFxuICAgICAgICAgICAgdGhpcy5hY2NvdW50RW5kcG9pbnQuZ2V0Um9sZXNFbmRwb2ludDxSb2xlW10+KCkpO1xuICAgIH1cblxuXG4gICAgdXBkYXRlVXNlcih1c2VyOiBVc2VyRWRpdCkge1xuICAgICAgICBpZiAodXNlci5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFVwZGF0ZVVzZXJFbmRwb2ludCh1c2VyLCB1c2VyLmlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRVc2VyQnlVc2VyTmFtZUVuZHBvaW50PFVzZXI+KHVzZXIudXNlck5hbWUpLnBpcGUoXG4gICAgICAgICAgICAgICAgbWVyZ2VNYXAoZm91bmRVc2VyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlci5pZCA9IGZvdW5kVXNlci5pZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFVwZGF0ZVVzZXJFbmRwb2ludCh1c2VyLCB1c2VyLmlkKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdVc2VyKHVzZXI6IFVzZXJFZGl0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXROZXdVc2VyRW5kcG9pbnQ8VXNlcj4odXNlcik7XG4gICAgfVxuXG5cbiAgICBnZXRVc2VyUHJlZmVyZW5jZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRVc2VyUHJlZmVyZW5jZXNFbmRwb2ludDxzdHJpbmc+KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVXNlclByZWZlcmVuY2VzKGNvbmZpZ3VyYXRpb246IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50RW5kcG9pbnQuZ2V0VXBkYXRlVXNlclByZWZlcmVuY2VzRW5kcG9pbnQoY29uZmlndXJhdGlvbik7XG4gICAgfVxuXG5cbiAgICBkZWxldGVVc2VyKHVzZXJPclVzZXJJZDogc3RyaW5nIHwgVXNlcik6IE9ic2VydmFibGU8VXNlcj4ge1xuXG4gICAgICAgIGlmICh0eXBlb2YgdXNlck9yVXNlcklkID09PSAnc3RyaW5nJyB8fCB1c2VyT3JVc2VySWQgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXREZWxldGVVc2VyRW5kcG9pbnQ8VXNlcj4odXNlck9yVXNlcklkIGFzIHN0cmluZykucGlwZTxVc2VyPihcbiAgICAgICAgICAgICAgICB0YXAoZGF0YSA9PiB0aGlzLm9uUm9sZXNVc2VyQ291bnRDaGFuZ2VkKGRhdGEucm9sZXMpKSk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmICh1c2VyT3JVc2VySWQuaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZWxldGVVc2VyKHVzZXJPclVzZXJJZC5pZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRVc2VyQnlVc2VyTmFtZUVuZHBvaW50PFVzZXI+KHVzZXJPclVzZXJJZC51c2VyTmFtZSkucGlwZTxVc2VyPihcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2VNYXAodXNlciA9PiB0aGlzLmRlbGV0ZVVzZXIodXNlci5pZCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdW5ibG9ja1VzZXIodXNlcklkOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFVuYmxvY2tVc2VyRW5kcG9pbnQodXNlcklkKTtcbiAgICB9XG5cblxuICAgIHVzZXJIYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25WYWx1ZTogUGVybWlzc2lvblZhbHVlcyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wZXJtaXNzaW9ucy5zb21lKHAgPT4gcCA9PSBwZXJtaXNzaW9uVmFsdWUpO1xuICAgIH1cblxuXG4gICAgcmVmcmVzaExvZ2dlZEluVXNlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LnJlZnJlc2hMb2dpbigpO1xuICAgIH1cblxuICAgIGdldFJvbGVzKHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFJvbGVzRW5kcG9pbnQ8Um9sZVtdPihwYWdlLCBwYWdlU2l6ZSk7XG4gICAgfVxuXG5cbiAgICBnZXRSb2xlc0FuZFBlcm1pc3Npb25zKHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG5cbiAgICAgICAgcmV0dXJuIGZvcmtKb2luKFxuICAgICAgICAgICAgdGhpcy5hY2NvdW50RW5kcG9pbnQuZ2V0Um9sZXNFbmRwb2ludDxSb2xlW10+KHBhZ2UsIHBhZ2VTaXplKSxcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFBlcm1pc3Npb25zRW5kcG9pbnQ8UGVybWlzc2lvbltdPigpKTtcbiAgICB9XG5cblxuICAgIHVwZGF0ZVJvbGUocm9sZTogUm9sZSkge1xuICAgICAgICBpZiAocm9sZS5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFVwZGF0ZVJvbGVFbmRwb2ludChyb2xlLCByb2xlLmlkKS5waXBlKFxuICAgICAgICAgICAgICAgIHRhcChkYXRhID0+IHRoaXMub25Sb2xlc0NoYW5nZWQoW3JvbGVdLCBBY2NvdW50U2VydmljZS5yb2xlTW9kaWZpZWRPcGVyYXRpb24pKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50RW5kcG9pbnQuZ2V0Um9sZUJ5Um9sZU5hbWVFbmRwb2ludDxSb2xlPihyb2xlLm5hbWUpLnBpcGUoXG4gICAgICAgICAgICAgICAgbWVyZ2VNYXAoZm91bmRSb2xlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZS5pZCA9IGZvdW5kUm9sZS5pZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFVwZGF0ZVJvbGVFbmRwb2ludChyb2xlLCByb2xlLmlkKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB0YXAoZGF0YSA9PiB0aGlzLm9uUm9sZXNDaGFuZ2VkKFtyb2xlXSwgQWNjb3VudFNlcnZpY2Uucm9sZU1vZGlmaWVkT3BlcmF0aW9uKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBuZXdSb2xlKHJvbGU6IFJvbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldE5ld1JvbGVFbmRwb2ludDxSb2xlPihyb2xlKS5waXBlPFJvbGU+KFxuICAgICAgICAgICAgdGFwKGRhdGEgPT4gdGhpcy5vblJvbGVzQ2hhbmdlZChbcm9sZV0sIEFjY291bnRTZXJ2aWNlLnJvbGVBZGRlZE9wZXJhdGlvbikpKTtcbiAgICB9XG5cblxuICAgIGRlbGV0ZVJvbGUocm9sZU9yUm9sZUlkOiBzdHJpbmcgfCBSb2xlKTogT2JzZXJ2YWJsZTxSb2xlPiB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByb2xlT3JSb2xlSWQgPT09ICdzdHJpbmcnIHx8IHJvbGVPclJvbGVJZCBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldERlbGV0ZVJvbGVFbmRwb2ludDxSb2xlPihyb2xlT3JSb2xlSWQgYXMgc3RyaW5nKS5waXBlPFJvbGU+KFxuICAgICAgICAgICAgICAgIHRhcChkYXRhID0+IHRoaXMub25Sb2xlc0NoYW5nZWQoW2RhdGFdLCBBY2NvdW50U2VydmljZS5yb2xlRGVsZXRlZE9wZXJhdGlvbikpKTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKHJvbGVPclJvbGVJZC5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZVJvbGUocm9sZU9yUm9sZUlkLmlkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFJvbGVCeVJvbGVOYW1lRW5kcG9pbnQ8Um9sZT4ocm9sZU9yUm9sZUlkLm5hbWUpLnBpcGU8Um9sZT4oXG4gICAgICAgICAgICAgICAgICAgIG1lcmdlTWFwKHJvbGUgPT4gdGhpcy5kZWxldGVSb2xlKHJvbGUuaWQpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQZXJtaXNzaW9ucygpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50RW5kcG9pbnQuZ2V0UGVybWlzc2lvbnNFbmRwb2ludDxQZXJtaXNzaW9uW10+KCk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIG9uUm9sZXNDaGFuZ2VkKHJvbGVzOiBSb2xlW10gfCBzdHJpbmdbXSwgb3A6IFJvbGVzQ2hhbmdlZE9wZXJhdGlvbikge1xuICAgICAgICB0aGlzLl9yb2xlc0NoYW5nZWQubmV4dCh7IHJvbGVzLCBvcGVyYXRpb246IG9wIH0pO1xuICAgIH1cblxuXG4gICAgb25Sb2xlc1VzZXJDb3VudENoYW5nZWQocm9sZXM6IFJvbGVbXSB8IHN0cmluZ1tdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uUm9sZXNDaGFuZ2VkKHJvbGVzLCBBY2NvdW50U2VydmljZS5yb2xlTW9kaWZpZWRPcGVyYXRpb24pO1xuICAgIH1cblxuXG4gICAgZ2V0Um9sZXNDaGFuZ2VkRXZlbnQoKTogT2JzZXJ2YWJsZTxSb2xlc0NoYW5nZWRFdmVudEFyZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm9sZXNDaGFuZ2VkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuXG5cbiAgICBnZXQgcGVybWlzc2lvbnMoKTogUGVybWlzc2lvblZhbHVlc1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UudXNlclBlcm1pc3Npb25zO1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50VXNlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuY3VycmVudFVzZXI7XG4gICAgfVxufVxuIl19