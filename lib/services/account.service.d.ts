import { Observable } from 'rxjs';
import { AuthService, User, Permission, PermissionValues } from '@polpware/ngx-oauth2';
import { AccountEndpoint } from './account-endpoint.service';
import { Role } from '../models/role.model';
import { UserEdit } from '../models/user-edit.model';
import * as i0 from "@angular/core";
export declare type RolesChangedOperation = 'add' | 'delete' | 'modify';
export interface RolesChangedEventArg {
    roles: Role[] | string[];
    operation: RolesChangedOperation;
}
export declare class AccountService {
    private authService;
    private accountEndpoint;
    static readonly roleAddedOperation: RolesChangedOperation;
    static readonly roleDeletedOperation: RolesChangedOperation;
    static readonly roleModifiedOperation: RolesChangedOperation;
    private _rolesChanged;
    constructor(authService: AuthService, accountEndpoint: AccountEndpoint);
    getUser(userId?: string): Observable<User>;
    getUserAndRoles(userId?: string): Observable<[User, Role[]]>;
    getUsers(page?: number, pageSize?: number): Observable<User[]>;
    getUsersAndRoles(page?: number, pageSize?: number): Observable<[User[], Role[]]>;
    updateUser(user: UserEdit): Observable<unknown>;
    newUser(user: UserEdit): Observable<User>;
    getUserPreferences(): Observable<string>;
    updateUserPreferences(configuration: string): Observable<unknown>;
    deleteUser(userOrUserId: string | User): Observable<User>;
    unblockUser(userId: string): Observable<unknown>;
    userHasPermission(permissionValue: PermissionValues): boolean;
    refreshLoggedInUser(): any;
    getRoles(page?: number, pageSize?: number): Observable<Role[]>;
    getRolesAndPermissions(page?: number, pageSize?: number): Observable<[Role[], Permission[]]>;
    updateRole(role: Role): Observable<unknown>;
    newRole(role: Role): Observable<Role>;
    deleteRole(roleOrRoleId: string | Role): Observable<Role>;
    getPermissions(): Observable<Permission[]>;
    private onRolesChanged;
    onRolesUserCountChanged(roles: Role[] | string[]): void;
    getRolesChangedEvent(): Observable<RolesChangedEventArg>;
    get permissions(): PermissionValues[];
    get currentUser(): User;
    static ɵfac: i0.ɵɵFactoryDef<AccountService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AccountService>;
}
