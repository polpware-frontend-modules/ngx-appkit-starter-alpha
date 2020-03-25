import { OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BootstrapTabDirective } from '../../directives/bootstrap-tab.directive';
import { AccountService } from '../../services/account.service';
export declare class SettingsComponent implements OnInit, OnDestroy {
    private router;
    private route;
    private accountService;
    isProfileActivated: boolean;
    isPreferencesActivated: boolean;
    isUsersActivated: boolean;
    isRolesActivated: boolean;
    fragmentSubscription: any;
    readonly profileTab = "profile";
    readonly preferencesTab = "preferences";
    readonly usersTab = "users";
    readonly rolesTab = "roles";
    tab: BootstrapTabDirective;
    constructor(router: Router, route: ActivatedRoute, accountService: AccountService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    showContent(anchor: string): void;
    isFragmentEquals(fragment1: string, fragment2: string): boolean;
    onShowTab(event: any): void;
    readonly canViewUsers: boolean;
    readonly canViewRoles: boolean;
}
