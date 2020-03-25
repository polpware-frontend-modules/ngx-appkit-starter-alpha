import { AlertService } from '@polpware/ngx-appkit-services-alpha';
import { Permission } from '@polpware/ngx-oauth2';
import { AccountService } from '../../services/account.service';
import { Role } from '../../models/role.model';
export declare class RoleEditorComponent {
    private alertService;
    private accountService;
    private isNewRole;
    isSaving: boolean;
    showValidationErrors: boolean;
    roleEdit: Role;
    allPermissions: Permission[];
    selectedValues: {
        [key: string]: boolean;
    };
    private editingRoleName;
    formResetToggle: boolean;
    changesSavedCallback: () => void;
    changesFailedCallback: () => void;
    changesCancelledCallback: () => void;
    private form;
    constructor(alertService: AlertService, accountService: AccountService);
    showErrorAlert(caption: string, message: string): void;
    save(): void;
    private saveSuccessHelper;
    private refreshLoggedInUser;
    private saveFailedHelper;
    cancel(): void;
    selectAll(): void;
    selectNone(): void;
    toggleGroup(groupName: string): void;
    private getSelectedPermissions;
    resetForm(replace?: boolean): void;
    newRole(allPermissions: Permission[]): Role;
    editRole(role: Role, allPermissions: Permission[]): Role;
    readonly canManageRoles: boolean;
}
