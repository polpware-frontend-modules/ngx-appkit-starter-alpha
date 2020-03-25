import { OnInit, AfterViewInit, TemplateRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AlertService, AppTranslationService } from '@polpware/ngx-appkit-services-alpha';
import { User } from '@polpware/ngx-oauth2';
import { AccountService } from '../../services/account.service';
import { Role } from '../../models/role.model';
import { UserEdit } from '../../models/user-edit.model';
import { UserInfoComponent } from '../user-info/user-info.component';
export declare class UsersManagementComponent implements OnInit, AfterViewInit {
    private alertService;
    private translationService;
    private accountService;
    columns: any[];
    rows: User[];
    rowsCache: User[];
    editedUser: UserEdit;
    sourceUser: UserEdit;
    editingUserName: {
        name: string;
    };
    loadingIndicator: boolean;
    allRoles: Role[];
    indexTemplate: TemplateRef<any>;
    userNameTemplate: TemplateRef<any>;
    rolesTemplate: TemplateRef<any>;
    actionsTemplate: TemplateRef<any>;
    editorModal: ModalDirective;
    userEditor: UserInfoComponent;
    constructor(alertService: AlertService, translationService: AppTranslationService, accountService: AccountService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    addNewUserToList(): void;
    loadData(): void;
    onDataLoadSuccessful(users: User[], roles: Role[]): void;
    onDataLoadFailed(error: any): void;
    onSearchChanged(value: string): void;
    onEditorModalHidden(): void;
    newUser(): void;
    editUser(row: UserEdit): void;
    deleteUser(row: UserEdit): void;
    deleteUserHelper(row: UserEdit): void;
    readonly canAssignRoles: boolean;
    readonly canViewRoles: boolean;
    readonly canManageUsers: boolean;
}