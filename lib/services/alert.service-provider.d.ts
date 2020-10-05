import { AlertServiceAbstractProvider, IAlertServiceContract } from '@polpware/ngx-appkit-contracts-alpha';
import { AlertService } from '@polpware/ngx-appkit-services-alpha';
import * as i0 from "@angular/core";
export declare class AlertServiceProvider extends AlertServiceAbstractProvider {
    private readonly alertService;
    constructor(alertService: AlertService);
    get(): IAlertServiceContract;
    static ɵfac: i0.ɵɵFactoryDef<AlertServiceProvider, never>;
    static ɵprov: i0.ɵɵInjectableDef<AlertServiceProvider>;
}
