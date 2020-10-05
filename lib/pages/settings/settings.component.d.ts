import { OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BootstrapTabDirective } from '../../directives/bootstrap-tab.directive';
import { AccountService } from '../../services/account.service';
import * as i0 from "@angular/core";
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
    get canViewUsers(): boolean;
    get canViewRoles(): boolean;
    static ɵfac: i0.ɵɵFactoryDef<SettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SettingsComponent, "settings", never, {}, {}, never, never>;
}
