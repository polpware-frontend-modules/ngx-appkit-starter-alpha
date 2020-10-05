import { OnInit, OnDestroy } from '@angular/core';
import { AlertService, ConfigurationService } from '@polpware/ngx-appkit-services-alpha';
import { AuthService } from '@polpware/ngx-oauth2';
import { UserLogin } from '../../models/user-login.model';
import * as i0 from "@angular/core";
export declare class LoginComponent implements OnInit, OnDestroy {
    private alertService;
    private authService;
    private configurations;
    userLogin: UserLogin;
    isLoading: boolean;
    formResetToggle: boolean;
    modalClosedCallback: () => void;
    loginStatusSubscription: any;
    isModal: boolean;
    constructor(alertService: AlertService, authService: AuthService, configurations: ConfigurationService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getShouldRedirect(): boolean;
    showErrorAlert(caption: string, message: string): void;
    closeModal(): void;
    login(): void;
    offerAlternateHost(): void;
    mapLoginErrorMessage(error: string): string;
    reset(): void;
    static ɵfac: i0.ɵɵFactoryDef<LoginComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LoginComponent, "app-login", never, { "isModal": "isModal"; }, {}, never, never>;
}
