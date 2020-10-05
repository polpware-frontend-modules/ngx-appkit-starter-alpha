import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService, EndpointBase } from '@polpware/ngx-oauth2';
import { ConfigurationService } from '@polpware/ngx-appkit-services-alpha';
import * as i0 from "@angular/core";
export declare class AccountEndpoint extends EndpointBase {
    private configurations;
    private readonly _usersUrl;
    private readonly _userByUserNameUrl;
    private readonly _currentUserUrl;
    private readonly _currentUserPreferencesUrl;
    private readonly _unblockUserUrl;
    private readonly _rolesUrl;
    private readonly _roleByRoleNameUrl;
    private readonly _permissionsUrl;
    get usersUrl(): string;
    get userByUserNameUrl(): string;
    get currentUserUrl(): string;
    get currentUserPreferencesUrl(): string;
    get unblockUserUrl(): string;
    get rolesUrl(): string;
    get roleByRoleNameUrl(): string;
    get permissionsUrl(): string;
    constructor(configurations: ConfigurationService, http: HttpClient, authService: AuthService);
    getUserEndpoint<T>(userId?: string): Observable<T>;
    getUserByUserNameEndpoint<T>(userName: string): Observable<T>;
    getUsersEndpoint<T>(page?: number, pageSize?: number): Observable<T>;
    getNewUserEndpoint<T>(userObject: any): Observable<T>;
    getUpdateUserEndpoint<T>(userObject: any, userId?: string): Observable<T>;
    getPatchUpdateUserEndpoint<T>(patch: {}, userId?: string): Observable<T>;
    getPatchUpdateUserEndpoint<T>(value: any, op: string, path: string, from?: any, userId?: string): Observable<T>;
    getUserPreferencesEndpoint<T>(): Observable<T>;
    getUpdateUserPreferencesEndpoint<T>(configuration: string): Observable<T>;
    getUnblockUserEndpoint<T>(userId: string): Observable<T>;
    getDeleteUserEndpoint<T>(userId: string): Observable<T>;
    getRoleEndpoint<T>(roleId: string): Observable<T>;
    getRoleByRoleNameEndpoint<T>(roleName: string): Observable<T>;
    getRolesEndpoint<T>(page?: number, pageSize?: number): Observable<T>;
    getNewRoleEndpoint<T>(roleObject: any): Observable<T>;
    getUpdateRoleEndpoint<T>(roleObject: any, roleId: string): Observable<T>;
    getDeleteRoleEndpoint<T>(roleId: string): Observable<T>;
    getPermissionsEndpoint<T>(): Observable<T>;
    static ɵfac: i0.ɵɵFactoryDef<AccountEndpoint, never>;
    static ɵprov: i0.ɵɵInjectableDef<AccountEndpoint>;
}
