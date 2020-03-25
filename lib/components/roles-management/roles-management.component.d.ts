import { OnInit, AfterViewInit, TemplateRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AlertService, AppTranslationService } from '@polpware/ngx-appkit-services-alpha';
import { Permission } from '@polpware/ngx-oauth2';
import { AccountService } from '../../services/account.service';
import { Role } from '../../models/role.model';
import { RoleEditorComponent } from '../role-editor/role-editor.component';
export declare class RolesManagementComponent implements OnInit, AfterViewInit {
    private alertService;
    private translationService;
    private accountService;
    columns: any[];
    rows: Role[];
    rowsCache: Role[];
    allPermissions: Permission[];
    editedRole: Role;
    sourceRole: Role;
    editingRoleName: {
        name: string;
    };
    loadingIndicator: boolean;
    indexTemplate: TemplateRef<any>;
    actionsTemplate: TemplateRef<any>;
    editorModal: ModalDirective;
    roleEditor: RoleEditorComponent;
    constructor(alertService: AlertService, translationService: AppTranslationService, accountService: AccountService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    addNewRoleToList(): void;
    loadData(): void;
    onSearchChanged(value: string): void;
    onEditorModalHidden(): void;
    newRole(): void;
    editRole(row: Role): void;
    deleteRole(row: Role): void;
    deleteRoleHelper(row: Role): void;
    readonly canManageRoles: boolean;
}