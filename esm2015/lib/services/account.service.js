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
export class AccountService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DLE9BQU8sRUFDSCxXQUFXLEVBR2QsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFNN0QsMENBQXFHOzs7SUFBN0QscUNBQXlCOztJQUFDLHlDQUFpQzs7QUFHbkcsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBT3ZCLFlBQ1ksV0FBd0IsRUFDeEIsZUFBZ0M7UUFEaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBSnBDLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQXdCLENBQUM7SUFNNUQsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsTUFBZTtRQUNuQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFPLE1BQU0sQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLE1BQWU7UUFFM0IsT0FBTyxRQUFRLENBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQU8sTUFBTSxDQUFDLEVBQ2xELElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQVUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxJQUFhLEVBQUUsUUFBaUI7UUFFckMsT0FBTyxJQUFJLENBQUMs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Q0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUdELHVCQUF1QixDQUFDLEtBQXdCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDNUUsQ0FBQzs7OztJQUdELG9CQUFvQjtRQUNoQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQzs7OztJQUlELElBQUksV0FBVztRQUNYLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUM7SUFDNUMsQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNYLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7SUFDeEMsQ0FBQzs7QUE1S3NCLGlDQUFrQixHQUEwQixLQUFLLENBQUM7QUFDbEQsbUNBQW9CLEdBQTBCLFFBQVEsQ0FBQztBQUN2RCxvQ0FBcUIsR0FBMEIsUUFBUSxDQUFDOztZQUpsRixVQUFVOzs7O1lBYlAsV0FBVztZQUtOLGVBQWU7Ozs7SUFVcEIsa0NBQXlFOztJQUN6RSxvQ0FBOEU7O0lBQzlFLHFDQUErRTs7Ozs7SUFFL0UsdUNBQTREOzs7OztJQUd4RCxxQ0FBZ0M7Ozs7O0lBQ2hDLHlDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgZm9ya0pvaW4gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1lcmdlTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gICAgQXV0aFNlcnZpY2UsIFVzZXIsXG4gICAgUGVybWlzc2lvbixcbiAgICBQZXJtaXNzaW9uVmFsdWVzXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtb2F1dGgyJztcblxuaW1wb3J0IHsgQWNjb3VudEVuZHBvaW50IH0gZnJvbSAnLi9hY2NvdW50LWVuZHBvaW50LnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBSb2xlIH0gZnJvbSAnLi4vbW9kZWxzL3JvbGUubW9kZWwnO1xuaW1wb3J0IHsgVXNlckVkaXQgfSBmcm9tICcuLi9tb2RlbHMvdXNlci1lZGl0Lm1vZGVsJztcblxuZXhwb3J0IHR5cGUgUm9sZXNDaGFuZ2VkT3BlcmF0aW9uID0gJ2FkZCcgfCAnZGVsZXRlJyB8ICdtb2RpZnknO1xuZXhwb3J0IGludGVyZmFjZSBSb2xlc0NoYW5nZWRFdmVudEFyZyB7IHJvbGVzOiBSb2xlW10gfCBzdHJpbmdbXTsgb3BlcmF0aW9uOiBSb2xlc0NoYW5nZWRPcGVyYXRpb247IH1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjY291bnRTZXJ2aWNlIHtcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHJvbGVBZGRlZE9wZXJhdGlvbjogUm9sZXNDaGFuZ2VkT3BlcmF0aW9uID0gJ2FkZCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSByb2xlRGVsZXRlZE9wZXJhdGlvbjogUm9sZXNDaGFuZ2VkT3BlcmF0aW9uID0gJ2RlbGV0ZSc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSByb2xlTW9kaWZpZWRPcGVyYXRpb246IFJvbGVzQ2hhbmdlZE9wZXJhdGlvbiA9ICdtb2RpZnknO1xuXG4gICAgcHJpdmF0ZSBfcm9sZXNDaGFuZ2VkID0gbmV3IFN1YmplY3Q8Um9sZXNDaGFuZ2VkRXZlbnRBcmc+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgYWNjb3VudEVuZHBvaW50OiBBY2NvdW50RW5kcG9pbnQpIHtcblxuICAgIH1cblxuICAgIGdldFVzZXIodXNlcklkPzogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRVc2VyRW5kcG9pbnQ8VXNlcj4odXNlcklkKTtcbiAgICB9XG5cbiAgICBnZXRVc2VyQW5kUm9sZXModXNlcklkPzogc3RyaW5nKSB7XG5cbiAgICAgICAgcmV0dXJuIGZvcmtKb2luKFxuICAgICAgICAgICAgdGhpcy5hY2NvdW50RW5kcG9pbnQuZ2V0VXNlckVuZHBvaW50PFVzZXI+KHVzZXJJZCksXG4gICAgICAgICAgICB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRSb2xlc0VuZHBvaW50PFJvbGVbXT4oKSk7XG4gICAgfVxuXG4gICAgZ2V0VXNlcnMocGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50RW5kcG9pbnQuZ2V0VXNlcnNFbmRwb2ludDxVc2VyW10+KHBhZ2UsIHBhZ2VTaXplKTtcbiAgICB9XG5cbiAgICBnZXRVc2Vyc0FuZFJvbGVzKHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG5cbiAgICAgICAgcmV0dXJuIGZvcmtKb2luKFxuICAgICAgICAgICAgdGhpcy5hY2NvdW50RW5kcG9pbnQuZ2V0VXNlcnNFbmRwb2ludDxVc2VyW10+KHBhZ2UsIHBhZ2VTaXplKSxcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFJvbGVzRW5kcG9pbnQ8Um9sZVtdPigpKTtcbiAgICB9XG5cblxuICAgIHVwZGF0ZVVzZXIodXNlcjogVXNlckVkaXQpIHtcbiAgICAgICAgaWYgKHVzZXIuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRVcGRhdGVVc2VyRW5kcG9pbnQodXNlciwgdXNlci5pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50RW5kcG9pbnQuZ2V0VXNlckJ5VXNlck5hbWVFbmRwb2ludDxVc2VyPih1c2VyLnVzZXJOYW1lKS5waXBlKFxuICAgICAgICAgICAgICAgIG1lcmdlTWFwKGZvdW5kVXNlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXIuaWQgPSBmb3VuZFVzZXIuaWQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRVcGRhdGVVc2VyRW5kcG9pbnQodXNlciwgdXNlci5pZCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV3VXNlcih1c2VyOiBVc2VyRWRpdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50RW5kcG9pbnQuZ2V0TmV3VXNlckVuZHBvaW50PFVzZXI+KHVzZXIpO1xuICAgIH1cblxuXG4gICAgZ2V0VXNlclByZWZlcmVuY2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50RW5kcG9pbnQuZ2V0VXNlclByZWZlcmVuY2VzRW5kcG9pbnQ8c3RyaW5nPigpO1xuICAgIH1cblxuICAgIHVwZGF0ZVVzZXJQcmVmZXJlbmNlcyhjb25maWd1cmF0aW9uOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFVwZGF0ZVVzZXJQcmVmZXJlbmNlc0VuZHBvaW50KGNvbmZpZ3VyYXRpb24pO1xuICAgIH1cblxuXG4gICAgZGVsZXRlVXNlcih1c2VyT3JVc2VySWQ6IHN0cmluZyB8IFVzZXIpOiBPYnNlcnZhYmxlPFVzZXI+IHtcblxuICAgICAgICBpZiAodHlwZW9mIHVzZXJPclVzZXJJZCA9PT0gJ3N0cmluZycgfHwgdXNlck9yVXNlcklkIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50RW5kcG9pbnQuZ2V0RGVsZXRlVXNlckVuZHBvaW50PFVzZXI+KHVzZXJPclVzZXJJZCBhcyBzdHJpbmcpLnBpcGU8VXNlcj4oXG4gICAgICAgICAgICAgICAgdGFwKGRhdGEgPT4gdGhpcy5vblJvbGVzVXNlckNvdW50Q2hhbmdlZChkYXRhLnJvbGVzKSkpO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAodXNlck9yVXNlcklkLmlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlVXNlcih1c2VyT3JVc2VySWQuaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50RW5kcG9pbnQuZ2V0VXNlckJ5VXNlck5hbWVFbmRwb2ludDxVc2VyPih1c2VyT3JVc2VySWQudXNlck5hbWUpLnBpcGU8VXNlcj4oXG4gICAgICAgICAgICAgICAgICAgIG1lcmdlTWFwKHVzZXIgPT4gdGhpcy5kZWxldGVVc2VyKHVzZXIuaWQpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHVuYmxvY2tVc2VyKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRVbmJsb2NrVXNlckVuZHBvaW50KHVzZXJJZCk7XG4gICAgfVxuXG5cbiAgICB1c2VySGFzUGVybWlzc2lvbihwZXJtaXNzaW9uVmFsdWU6IFBlcm1pc3Npb25WYWx1ZXMpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVybWlzc2lvbnMuc29tZShwID0+IHAgPT0gcGVybWlzc2lvblZhbHVlKTtcbiAgICB9XG5cblxuICAgIHJlZnJlc2hMb2dnZWRJblVzZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5yZWZyZXNoTG9naW4oKTtcbiAgICB9XG5cbiAgICBnZXRSb2xlcyhwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRSb2xlc0VuZHBvaW50PFJvbGVbXT4ocGFnZSwgcGFnZVNpemUpO1xuICAgIH1cblxuXG4gICAgZ2V0Um9sZXNBbmRQZXJtaXNzaW9ucyhwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuXG4gICAgICAgIHJldHVybiBmb3JrSm9pbihcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFJvbGVzRW5kcG9pbnQ8Um9sZVtdPihwYWdlLCBwYWdlU2l6ZSksXG4gICAgICAgICAgICB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRQZXJtaXNzaW9uc0VuZHBvaW50PFBlcm1pc3Npb25bXT4oKSk7XG4gICAgfVxuXG5cbiAgICB1cGRhdGVSb2xlKHJvbGU6IFJvbGUpIHtcbiAgICAgICAgaWYgKHJvbGUuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRVcGRhdGVSb2xlRW5kcG9pbnQocm9sZSwgcm9sZS5pZCkucGlwZShcbiAgICAgICAgICAgICAgICB0YXAoZGF0YSA9PiB0aGlzLm9uUm9sZXNDaGFuZ2VkKFtyb2xlXSwgQWNjb3VudFNlcnZpY2Uucm9sZU1vZGlmaWVkT3BlcmF0aW9uKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFJvbGVCeVJvbGVOYW1lRW5kcG9pbnQ8Um9sZT4ocm9sZS5uYW1lKS5waXBlKFxuICAgICAgICAgICAgICAgIG1lcmdlTWFwKGZvdW5kUm9sZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGUuaWQgPSBmb3VuZFJvbGUuaWQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRVcGRhdGVSb2xlRW5kcG9pbnQocm9sZSwgcm9sZS5pZCk7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgdGFwKGRhdGEgPT4gdGhpcy5vblJvbGVzQ2hhbmdlZChbcm9sZV0sIEFjY291bnRTZXJ2aWNlLnJvbGVNb2RpZmllZE9wZXJhdGlvbikpKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgbmV3Um9sZShyb2xlOiBSb2xlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXROZXdSb2xlRW5kcG9pbnQ8Um9sZT4ocm9sZSkucGlwZTxSb2xlPihcbiAgICAgICAgICAgIHRhcChkYXRhID0+IHRoaXMub25Sb2xlc0NoYW5nZWQoW3JvbGVdLCBBY2NvdW50U2VydmljZS5yb2xlQWRkZWRPcGVyYXRpb24pKSk7XG4gICAgfVxuXG5cbiAgICBkZWxldGVSb2xlKHJvbGVPclJvbGVJZDogc3RyaW5nIHwgUm9sZSk6IE9ic2VydmFibGU8Um9sZT4ge1xuXG4gICAgICAgIGlmICh0eXBlb2Ygcm9sZU9yUm9sZUlkID09PSAnc3RyaW5nJyB8fCByb2xlT3JSb2xlSWQgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXREZWxldGVSb2xlRW5kcG9pbnQ8Um9sZT4ocm9sZU9yUm9sZUlkIGFzIHN0cmluZykucGlwZTxSb2xlPihcbiAgICAgICAgICAgICAgICB0YXAoZGF0YSA9PiB0aGlzLm9uUm9sZXNDaGFuZ2VkKFtkYXRhXSwgQWNjb3VudFNlcnZpY2Uucm9sZURlbGV0ZWRPcGVyYXRpb24pKSk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChyb2xlT3JSb2xlSWQuaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZWxldGVSb2xlKHJvbGVPclJvbGVJZC5pZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRSb2xlQnlSb2xlTmFtZUVuZHBvaW50PFJvbGU+KHJvbGVPclJvbGVJZC5uYW1lKS5waXBlPFJvbGU+KFxuICAgICAgICAgICAgICAgICAgICBtZXJnZU1hcChyb2xlID0+IHRoaXMuZGVsZXRlUm9sZShyb2xlLmlkKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UGVybWlzc2lvbnMoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFBlcm1pc3Npb25zRW5kcG9pbnQ8UGVybWlzc2lvbltdPigpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBvblJvbGVzQ2hhbmdlZChyb2xlczogUm9sZVtdIHwgc3RyaW5nW10sIG9wOiBSb2xlc0NoYW5nZWRPcGVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5fcm9sZXNDaGFuZ2VkLm5leHQoeyByb2xlcywgb3BlcmF0aW9uOiBvcCB9KTtcbiAgICB9XG5cblxuICAgIG9uUm9sZXNVc2VyQ291bnRDaGFuZ2VkKHJvbGVzOiBSb2xlW10gfCBzdHJpbmdbXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5vblJvbGVzQ2hhbmdlZChyb2xlcywgQWNjb3VudFNlcnZpY2Uucm9sZU1vZGlmaWVkT3BlcmF0aW9uKTtcbiAgICB9XG5cblxuICAgIGdldFJvbGVzQ2hhbmdlZEV2ZW50KCk6IE9ic2VydmFibGU8Um9sZXNDaGFuZ2VkRXZlbnRBcmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvbGVzQ2hhbmdlZC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cblxuXG4gICAgZ2V0IHBlcm1pc3Npb25zKCk6IFBlcm1pc3Npb25WYWx1ZXNbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLnVzZXJQZXJtaXNzaW9ucztcbiAgICB9XG5cbiAgICBnZXQgY3VycmVudFVzZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmN1cnJlbnRVc2VyO1xuICAgIH1cbn1cbiJdfQ==