import { OnInit, OnDestroy } from '@angular/core';
import { AlertService, AppTranslationService, ConfigurationService, ThemeManager } from '@polpware/ngx-appkit-services-alpha';
import { BootstrapSelectDirective } from '../../directives/bootstrap-select.directive';
import { AccountService } from '../../services/account.service';
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
    readonly canViewCustomers: boolean;
    readonly canViewProducts: boolean;
    readonly canViewOrders: boolean;
}
