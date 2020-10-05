import { OnInit, OnDestroy } from '@angular/core';
import { AlertService, AppTranslationService, ConfigurationService, ThemeManager } from '@polpware/ngx-appkit-services-alpha';
import { BootstrapSelectDirective } from '../../directives/bootstrap-select.directive';
import { AccountService } from '../../services/account.service';
import * as i0 from "@angular/core";
export declare class UserPreferencesComponent implements OnInit, OnDestroy {
    private alertService;
    private translationService;
    private accountService;
    themeManager: ThemeManager;
    configurations: ConfigurationService;
    themeSelectorToggle: boolean;
    languageChangedSubscription: any;
    languageSelector: BootstrapSelectDirective;
    homePageSelector: BootstrapSelectDirective;
    constructor(alertService: AlertService, translationService: AppTranslationService, accountService: AccountService, themeManager: ThemeManager, configurations: ConfigurationService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    reloadFromServer(): void;
    setAsDefault(): void;
    setAsDefaultHelper(): void;
    resetDefault(): void;
    resetDefaultHelper(): void;
    get canViewCustomers(): boolean;
    get canViewProducts(): boolean;
    get canViewOrders(): boolean;
    static ɵfac: i0.ɵɵFactoryDef<UserPreferencesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<UserPreferencesComponent, "user-preferences", never, {}, {}, never, never>;
}
