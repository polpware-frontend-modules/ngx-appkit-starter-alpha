// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Injectable } from '@angular/core';
import { Subject, forkJoin } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-oauth2";
import * as i2 from "./account-endpoint.service";
var AccountService = /** @class */ (function () {
    function AccountService(authService, accountEndpoint) {
        this.authService = authService;
        this.accountEndpoint = accountEndpoint;
        this._rolesChanged = new Subject();
    }
    AccountService.prototype.getUser = function (userId) {
        return this.accountEndpoint.getUserEndpoint(userId);
    };
    AccountService.prototype.getUserAndRoles = function (userId) {
        return forkJoin(this.accountEndpoint.getUserEndpoint(userId), this.accountEndpoint.getRolesEndpoint());
    };
    AccountService.prototype.getUsers = function (page, pageSize) {
        return this.accountEndpoint.getUsersEndpoint(page, pageSize);
    };
    AccountService.prototype.getUsersAndRoles = function (page, pageSize) {
        return forkJoin(this.accountEndpoint.getUsersEndpoint(page, pageSize), this.accountEndpoint.getRolesEndpoint());
    };
    AccountService.prototype.updateUser = function (user) {
        var _this = this;
        if (user.id) {
            return this.accountEndpoint.getUpdateUserEndpoint(user, user.id);
        }
        else {
            return this.accountEndpoint.getUserByUserNameEndpoint(user.userName).pipe(mergeMap(function (foundUser) {
                user.id = foundUser.id;
                return _this.accountEndpoint.getUpdateUserEndpoint(user, user.id);
            }));
        }
    };
    AccountService.prototype.newUser = function (user) {
        return this.accountEndpoint.getNewUserEndpoint(user);
    };
    AccountService.prototype.getUserPreferences = function () {
        return this.accountEndpoint.getUserPreferencesEndpoint();
    };
    AccountService.prototype.updateUserPreferences = function (configuration) {
        return this.accountEndpoint.getUpdateUserPreferencesEndpoint(configuration);
    };
    AccountService.prototype.deleteUser = function (userOrUserId) {
        var _this = this;
        if (typeof userOrUserId === 'string' || userOrUserId instanceof String) {
            return this.accountEndpoint.getDeleteUserEndpoint(userOrUserId).pipe(tap(function (data) { return _this.onRolesUserCountChanged(data.roles); }));
        }
        else {
            if (userOrUserId.id) {
                return this.deleteUser(userOrUserId.id);
            }
            else {
                return this.accountEndpoint.getUserByUserNameEndpoint(userOrUserId.userName).pipe(mergeMap(function (user) { return _this.deleteUser(user.id); }));
            }
        }
    };
    AccountService.prototype.unblockUser = function (userId) {
        return this.accountEndpoint.getUnblockUserEndpoint(userId);
    };
    AccountService.prototype.userHasPermission = function (permissionValue) {
        return this.permissions.some(function (p) { return p == permissionValue; });
    };
    AccountService.prototype.refreshLoggedInUser = function () {
        return this.accountEndpoint.refreshLogin();
    };
    AccountService.prototype.getRoles = function (page, pageSize) {
        return this.accountEndpoint.getRolesEndpoint(page, pageSize);
    };
    AccountService.prototype.getRolesAndPermissions = function (page, pageSize) {
        return forkJoin(this.accountEndpoint.getRolesEndpoint(page, pageSize), this.accountEndpoint.getPermissionsEndpoint());
    };
    AccountService.prototype.updateRole = function (role) {
        var _this = this;
        if (role.id) {
            return this.accountEndpoint.getUpdateRoleEndpoint(role, role.id).pipe(tap(function (data) { return _this.onRolesChanged([role], AccountService.roleModifiedOperation); }));
        }
        else {
            return this.accountEndpoint.getRoleByRoleNameEndpoint(role.name).pipe(mergeMap(function (foundRole) {
                role.id = foundRole.id;
                return _this.accountEndpoint.getUpdateRoleEndpoint(role, role.id);
            }), tap(function (data) { return _this.onRolesChanged([role], AccountService.roleModifiedOperation); }));
        }
    };
    AccountService.prototype.newRole = function (role) {
        var _this = this;
        return this.accountEndpoint.getNewRoleEndpoint(role).pipe(tap(function (data) { return _this.onRolesChanged([role], AccountService.roleAddedOperation); }));
    };
    AccountService.prototype.deleteRole = function (roleOrRoleId) {
        var _this = this;
        if (typeof roleOrRoleId === 'string' || roleOrRoleId instanceof String) {
            return this.accountEndpoint.getDeleteRoleEndpoint(roleOrRoleId).pipe(tap(function (data) { return _this.onRolesChanged([data], AccountService.roleDeletedOperation); }));
        }
        else {
            if (roleOrRoleId.id) {
                return this.deleteRole(roleOrRoleId.id);
            }
            else {
                return this.accountEndpoint.getRoleByRoleNameEndpoint(roleOrRoleId.name).pipe(mergeMap(function (role) { return _this.deleteRole(role.id); }));
            }
        }
    };
    AccountService.prototype.getPermissions = function () {
        return this.accountEndpoint.getPermissionsEndpoint();
    };
    AccountService.prototype.onRolesChanged = function (roles, op) {
        this._rolesChanged.next({ roles: roles, operation: op });
    };
    AccountService.prototype.onRolesUserCountChanged = function (roles) {
        return this.onRolesChanged(roles, AccountService.roleModifiedOperation);
    };
    AccountService.prototype.getRolesChangedEvent = function () {
        return this._rolesChanged.asObservable();
    };
    Object.defineProperty(AccountService.prototype, "permissions", {
        get: function () {
            return this.authService.userPermissions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountService.prototype, "currentUser", {
        get: function () {
            return this.authService.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    AccountService.roleAddedOperation = 'add';
    AccountService.roleDeletedOperation = 'delete';
    AccountService.roleModifiedOperation = 'modify';
    /** @nocollapse */ AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.AccountEndpoint)); };
    /** @nocollapse */ AccountService.ɵprov = i0.ɵɵdefineInjectable({ token: AccountService, factory: AccountService.ɵfac });
    return AccountService;
}());
export { AccountService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AccountService, [{
        type: Injectable
    }], function () { return [{ type: i1.AuthService }, { type: i2.AccountEndpoint }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBRWhDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQWdCL0M7SUFRSSx3QkFDWSxXQUF3QixFQUN4QixlQUFnQztRQURoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFKcEMsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBd0IsQ0FBQztJQU01RCxDQUFDO0lBRUQsZ0NBQU8sR0FBUCxVQUFRLE1BQWU7UUFDbkIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBTyxNQUFNLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsd0NBQWUsR0FBZixVQUFnQixNQUFlO1FBRTNCLE9BQU8sUUFBUSxDQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFPLE1BQU0sQ0FBQyxFQUNsRCxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFVLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsaUNBQVEsR0FBUixVQUFTLElBQWEsRUFBRSxRQUFpQjtRQUVyQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQVMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCx5Q0FBZ0IsR0FBaEIsVUFBaUIsSUFBYSxFQUFFLFFBQWlCO1FBRTdDLE9BQU8sUUFBUSxDQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQVMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFVLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBR0QsbUNBQVUsR0FBVixVQUFXLElBQWM7UUFBekIsaUJBVUM7UUFURyxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNwRTthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLHlCQUF5QixDQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQzNFLFFBQVEsQ0FBQyxVQUFBLFNBQVM7Z0JBQ2QsSUFBSSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDO2dCQUN2QixPQUFPLEtBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ1g7SUFDTCxDQUFDO0lBRUQsZ0NBQU8sR0FBUCxVQUFRLElBQWM7UUFDbEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFPLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFHRCwyQ0FBa0IsR0FBbEI7UUFDSSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsMEJBQTBCLEVBQVUsQ0FBQztJQUNyRSxDQUFDO0lBRUQsOENBQXFCLEdBQXJCLFVBQXNCLGFBQXFCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQ0FBZ0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBR0QsbUNBQVUsR0FBVixVQUFXLFlBQTJCO1FBQXRDLGlCQWNDO1FBWkcsSUFBSSxPQUFPLFlBQVksS0FBSyxRQUFRLElBQUksWUFBWSxZQUFZLE1BQU0sRUFBRTtZQUNwRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQU8sWUFBc0IsQ0FBQyxDQUFDLElBQUksQ0FDaEYsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUVILElBQUksWUFBWSxDQUFDLEVBQUUsRUFBRTtnQkFDakIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDSCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMseUJBQXlCLENBQU8sWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDbkYsUUFBUSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQyxDQUFDO2FBQ25EO1NBQ0o7SUFDTCxDQUFDO0lBR0Qsb0NBQVcsR0FBWCxVQUFZLE1BQWM7UUFDdEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFHRCwwQ0FBaUIsR0FBakIsVUFBa0IsZUFBaUM7UUFDL0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxlQUFlLEVBQXBCLENBQW9CLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBR0QsNENBQW1CLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsSUFBYSxFQUFFLFFBQWlCO1FBRXJDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBUyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUdELCtDQUFzQixHQUF0QixVQUF1QixJQUFhLEVBQUUsUUFBaUI7UUFFbkQsT0FBTyxRQUFRLENBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBUyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQzdELElBQUksQ0FBQyxlQUFlLENBQUMsc0JBQXNCLEVBQWdCLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBR0QsbUNBQVUsR0FBVixVQUFXLElBQVU7UUFBckIsaUJBWUM7UUFYRyxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2pFLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLENBQUMscUJBQXFCLENBQUMsRUFBakUsQ0FBaUUsQ0FBQyxDQUFDLENBQUM7U0FDdkY7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyx5QkFBeUIsQ0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUN2RSxRQUFRLENBQUMsVUFBQSxTQUFTO2dCQUNkLElBQUksQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQztnQkFDdkIsT0FBTyxLQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDckUsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFqRSxDQUFpRSxDQUFDLENBQUMsQ0FBQztTQUN2RjtJQUNMLENBQUM7SUFHRCxnQ0FBTyxHQUFQLFVBQVEsSUFBVTtRQUFsQixpQkFHQztRQUZHLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBTyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQzNELEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLENBQUMsa0JBQWtCLENBQUMsRUFBOUQsQ0FBOEQsQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUdELG1DQUFVLEdBQVYsVUFBVyxZQUEyQjtRQUF0QyxpQkFjQztRQVpHLElBQUksT0FBTyxZQUFZLEtBQUssUUFBUSxJQUFJLFlBQVksWUFBWSxNQUFNLEVBQUU7WUFDcEUsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFPLFlBQXNCLENBQUMsQ0FBQyxJQUFJLENBQ2hGLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLENBQUMsb0JBQW9CLENBQUMsRUFBaEUsQ0FBZ0UsQ0FBQyxDQUFDLENBQUM7U0FDdEY7YUFBTTtZQUVILElBQUksWUFBWSxDQUFDLEVBQUUsRUFBRTtnQkFDakIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDSCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMseUJBQXlCLENBQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDL0UsUUFBUSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQyxDQUFDO2FBQ25EO1NBQ0o7SUFDTCxDQUFDO0lBRUQsdUNBQWMsR0FBZDtRQUVJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsRUFBZ0IsQ0FBQztJQUN2RSxDQUFDO0lBR08sdUNBQWMsR0FBdEIsVUFBdUIsS0FBd0IsRUFBRSxFQUF5QjtRQUN0RSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFHRCxnREFBdUIsR0FBdkIsVUFBd0IsS0FBd0I7UUFDNUMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBR0QsNkNBQW9CLEdBQXBCO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFJRCxzQkFBSSx1Q0FBVzthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBNUtzQixpQ0FBa0IsR0FBMEIsS0FBSyxDQUFDO0lBQ2xELG1DQUFvQixHQUEwQixRQUFRLENBQUM7SUFDdkQsb0NBQXFCLEdBQTBCLFFBQVEsQ0FBQzttR0FIdEUsY0FBYzs2RUFBZCxjQUFjLFdBQWQsY0FBYzt5QkF4QjNCO0NBc01DLEFBL0tELElBK0tDO1NBOUtZLGNBQWM7a0RBQWQsY0FBYztjQUQxQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBmb3JrSm9pbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWVyZ2VNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgICBBdXRoU2VydmljZSwgVXNlcixcbiAgICBQZXJtaXNzaW9uLFxuICAgIFBlcm1pc3Npb25WYWx1ZXNcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1vYXV0aDInO1xuXG5pbXBvcnQgeyBBY2NvdW50RW5kcG9pbnQgfSBmcm9tICcuL2FjY291bnQtZW5kcG9pbnQuc2VydmljZSc7XG5cbmltcG9ydCB7IFJvbGUgfSBmcm9tICcuLi9tb2RlbHMvcm9sZS5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyRWRpdCB9IGZyb20gJy4uL21vZGVscy91c2VyLWVkaXQubW9kZWwnO1xuXG5leHBvcnQgdHlwZSBSb2xlc0NoYW5nZWRPcGVyYXRpb24gPSAnYWRkJyB8ICdkZWxldGUnIHwgJ21vZGlmeSc7XG5leHBvcnQgaW50ZXJmYWNlIFJvbGVzQ2hhbmdlZEV2ZW50QXJnIHsgcm9sZXM6IFJvbGVbXSB8IHN0cmluZ1tdOyBvcGVyYXRpb246IFJvbGVzQ2hhbmdlZE9wZXJhdGlvbjsgfVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWNjb3VudFNlcnZpY2Uge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgcm9sZUFkZGVkT3BlcmF0aW9uOiBSb2xlc0NoYW5nZWRPcGVyYXRpb24gPSAnYWRkJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHJvbGVEZWxldGVkT3BlcmF0aW9uOiBSb2xlc0NoYW5nZWRPcGVyYXRpb24gPSAnZGVsZXRlJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IHJvbGVNb2RpZmllZE9wZXJhdGlvbjogUm9sZXNDaGFuZ2VkT3BlcmF0aW9uID0gJ21vZGlmeSc7XG5cbiAgICBwcml2YXRlIF9yb2xlc0NoYW5nZWQgPSBuZXcgU3ViamVjdDxSb2xlc0NoYW5nZWRFdmVudEFyZz4oKTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBhY2NvdW50RW5kcG9pbnQ6IEFjY291bnRFbmRwb2ludCkge1xuXG4gICAgfVxuXG4gICAgZ2V0VXNlcih1c2VySWQ/OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFVzZXJFbmRwb2ludDxVc2VyPih1c2VySWQpO1xuICAgIH1cblxuICAgIGdldFVzZXJBbmRSb2xlcyh1c2VySWQ/OiBzdHJpbmcpIHtcblxuICAgICAgICByZXR1cm4gZm9ya0pvaW4oXG4gICAgICAgICAgICB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRVc2VyRW5kcG9pbnQ8VXNlcj4odXNlcklkKSxcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFJvbGVzRW5kcG9pbnQ8Um9sZVtdPigpKTtcbiAgICB9XG5cbiAgICBnZXRVc2VycyhwYWdlPzogbnVtYmVyLCBwYWdlU2l6ZT86IG51bWJlcikge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRVc2Vyc0VuZHBvaW50PFVzZXJbXT4ocGFnZSwgcGFnZVNpemUpO1xuICAgIH1cblxuICAgIGdldFVzZXJzQW5kUm9sZXMocGFnZT86IG51bWJlciwgcGFnZVNpemU/OiBudW1iZXIpIHtcblxuICAgICAgICByZXR1cm4gZm9ya0pvaW4oXG4gICAgICAgICAgICB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRVc2Vyc0VuZHBvaW50PFVzZXJbXT4ocGFnZSwgcGFnZVNpemUpLFxuICAgICAgICAgICAgdGhpcy5hY2NvdW50RW5kcG9pbnQuZ2V0Um9sZXNFbmRwb2ludDxSb2xlW10+KCkpO1xuICAgIH1cblxuXG4gICAgdXBkYXRlVXNlcih1c2VyOiBVc2VyRWRpdCkge1xuICAgICAgICBpZiAodXNlci5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFVwZGF0ZVVzZXJFbmRwb2ludCh1c2VyLCB1c2VyLmlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRVc2VyQnlVc2VyTmFtZUVuZHBvaW50PFVzZXI+KHVzZXIudXNlck5hbWUpLnBpcGUoXG4gICAgICAgICAgICAgICAgbWVyZ2VNYXAoZm91bmRVc2VyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlci5pZCA9IGZvdW5kVXNlci5pZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFVwZGF0ZVVzZXJFbmRwb2ludCh1c2VyLCB1c2VyLmlkKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZXdVc2VyKHVzZXI6IFVzZXJFZGl0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXROZXdVc2VyRW5kcG9pbnQ8VXNlcj4odXNlcik7XG4gICAgfVxuXG5cbiAgICBnZXRVc2VyUHJlZmVyZW5jZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRVc2VyUHJlZmVyZW5jZXNFbmRwb2ludDxzdHJpbmc+KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVXNlclByZWZlcmVuY2VzKGNvbmZpZ3VyYXRpb246IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50RW5kcG9pbnQuZ2V0VXBkYXRlVXNlclByZWZlcmVuY2VzRW5kcG9pbnQoY29uZmlndXJhdGlvbik7XG4gICAgfVxuXG5cbiAgICBkZWxldGVVc2VyKHVzZXJPclVzZXJJZDogc3RyaW5nIHwgVXNlcik6IE9ic2VydmFibGU8VXNlcj4ge1xuXG4gICAgICAgIGlmICh0eXBlb2YgdXNlck9yVXNlcklkID09PSAnc3RyaW5nJyB8fCB1c2VyT3JVc2VySWQgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXREZWxldGVVc2VyRW5kcG9pbnQ8VXNlcj4odXNlck9yVXNlcklkIGFzIHN0cmluZykucGlwZTxVc2VyPihcbiAgICAgICAgICAgICAgICB0YXAoZGF0YSA9PiB0aGlzLm9uUm9sZXNVc2VyQ291bnRDaGFuZ2VkKGRhdGEucm9sZXMpKSk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmICh1c2VyT3JVc2VySWQuaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZWxldGVVc2VyKHVzZXJPclVzZXJJZC5pZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFjY291bnRFbmRwb2ludC5nZXRVc2VyQnlVc2VyTmFtZUVuZHBvaW50PFVzZXI+KHVzZXJPclVzZXJJZC51c2VyTmFtZSkucGlwZTxVc2VyPihcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2VNYXAodXNlciA9PiB0aGlzLmRlbGV0ZVVzZXIodXNlci5pZCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgdW5ibG9ja1VzZXIodXNlcklkOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFVuYmxvY2tVc2VyRW5kcG9pbnQodXNlcklkKTtcbiAgICB9XG5cblxuICAgIHVzZXJIYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25WYWx1ZTogUGVybWlzc2lvblZhbHVlcyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5wZXJtaXNzaW9ucy5zb21lKHAgPT4gcCA9PSBwZXJtaXNzaW9uVmFsdWUpO1xuICAgIH1cblxuXG4gICAgcmVmcmVzaExvZ2dlZEluVXNlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LnJlZnJlc2hMb2dpbigpO1xuICAgIH1cblxuICAgIGdldFJvbGVzKHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFJvbGVzRW5kcG9pbnQ8Um9sZVtdPihwYWdlLCBwYWdlU2l6ZSk7XG4gICAgfVxuXG5cbiAgICBnZXRSb2xlc0FuZFBlcm1pc3Npb25zKHBhZ2U/OiBudW1iZXIsIHBhZ2VTaXplPzogbnVtYmVyKSB7XG5cbiAgICAgICAgcmV0dXJuIGZvcmtKb2luKFxuICAgICAgICAgICAgdGhpcy5hY2NvdW50RW5kcG9pbnQuZ2V0Um9sZXNFbmRwb2ludDxSb2xlW10+KHBhZ2UsIHBhZ2VTaXplKSxcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFBlcm1pc3Npb25zRW5kcG9pbnQ8UGVybWlzc2lvbltdPigpKTtcbiAgICB9XG5cblxuICAgIHVwZGF0ZVJvbGUocm9sZTogUm9sZSkge1xuICAgICAgICBpZiAocm9sZS5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFVwZGF0ZVJvbGVFbmRwb2ludChyb2xlLCByb2xlLmlkKS5waXBlKFxuICAgICAgICAgICAgICAgIHRhcChkYXRhID0+IHRoaXMub25Sb2xlc0NoYW5nZWQoW3JvbGVdLCBBY2NvdW50U2VydmljZS5yb2xlTW9kaWZpZWRPcGVyYXRpb24pKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50RW5kcG9pbnQuZ2V0Um9sZUJ5Um9sZU5hbWVFbmRwb2ludDxSb2xlPihyb2xlLm5hbWUpLnBpcGUoXG4gICAgICAgICAgICAgICAgbWVyZ2VNYXAoZm91bmRSb2xlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm9sZS5pZCA9IGZvdW5kUm9sZS5pZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFVwZGF0ZVJvbGVFbmRwb2ludChyb2xlLCByb2xlLmlkKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICB0YXAoZGF0YSA9PiB0aGlzLm9uUm9sZXNDaGFuZ2VkKFtyb2xlXSwgQWNjb3VudFNlcnZpY2Uucm9sZU1vZGlmaWVkT3BlcmF0aW9uKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBuZXdSb2xlKHJvbGU6IFJvbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldE5ld1JvbGVFbmRwb2ludDxSb2xlPihyb2xlKS5waXBlPFJvbGU+KFxuICAgICAgICAgICAgdGFwKGRhdGEgPT4gdGhpcy5vblJvbGVzQ2hhbmdlZChbcm9sZV0sIEFjY291bnRTZXJ2aWNlLnJvbGVBZGRlZE9wZXJhdGlvbikpKTtcbiAgICB9XG5cblxuICAgIGRlbGV0ZVJvbGUocm9sZU9yUm9sZUlkOiBzdHJpbmcgfCBSb2xlKTogT2JzZXJ2YWJsZTxSb2xlPiB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByb2xlT3JSb2xlSWQgPT09ICdzdHJpbmcnIHx8IHJvbGVPclJvbGVJZCBpbnN0YW5jZW9mIFN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldERlbGV0ZVJvbGVFbmRwb2ludDxSb2xlPihyb2xlT3JSb2xlSWQgYXMgc3RyaW5nKS5waXBlPFJvbGU+KFxuICAgICAgICAgICAgICAgIHRhcChkYXRhID0+IHRoaXMub25Sb2xlc0NoYW5nZWQoW2RhdGFdLCBBY2NvdW50U2VydmljZS5yb2xlRGVsZXRlZE9wZXJhdGlvbikpKTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKHJvbGVPclJvbGVJZC5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZVJvbGUocm9sZU9yUm9sZUlkLmlkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudEVuZHBvaW50LmdldFJvbGVCeVJvbGVOYW1lRW5kcG9pbnQ8Um9sZT4ocm9sZU9yUm9sZUlkLm5hbWUpLnBpcGU8Um9sZT4oXG4gICAgICAgICAgICAgICAgICAgIG1lcmdlTWFwKHJvbGUgPT4gdGhpcy5kZWxldGVSb2xlKHJvbGUuaWQpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQZXJtaXNzaW9ucygpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50RW5kcG9pbnQuZ2V0UGVybWlzc2lvbnNFbmRwb2ludDxQZXJtaXNzaW9uW10+KCk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIG9uUm9sZXNDaGFuZ2VkKHJvbGVzOiBSb2xlW10gfCBzdHJpbmdbXSwgb3A6IFJvbGVzQ2hhbmdlZE9wZXJhdGlvbikge1xuICAgICAgICB0aGlzLl9yb2xlc0NoYW5nZWQubmV4dCh7IHJvbGVzLCBvcGVyYXRpb246IG9wIH0pO1xuICAgIH1cblxuXG4gICAgb25Sb2xlc1VzZXJDb3VudENoYW5nZWQocm9sZXM6IFJvbGVbXSB8IHN0cmluZ1tdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uUm9sZXNDaGFuZ2VkKHJvbGVzLCBBY2NvdW50U2VydmljZS5yb2xlTW9kaWZpZWRPcGVyYXRpb24pO1xuICAgIH1cblxuXG4gICAgZ2V0Um9sZXNDaGFuZ2VkRXZlbnQoKTogT2JzZXJ2YWJsZTxSb2xlc0NoYW5nZWRFdmVudEFyZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm9sZXNDaGFuZ2VkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuXG5cbiAgICBnZXQgcGVybWlzc2lvbnMoKTogUGVybWlzc2lvblZhbHVlc1tdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UudXNlclBlcm1pc3Npb25zO1xuICAgIH1cblxuICAgIGdldCBjdXJyZW50VXNlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuY3VycmVudFVzZXI7XG4gICAgfVxufVxuIl19