import { AlertServiceAbstractProvider, IAlertServiceContract } from '@polpware/ngx-appkit-contracts-alpha';
import { AlertService } from '@polpware/ngx-appkit-services-alpha';
export declare class AlertServiceProvider extends AlertServiceAbstractProvider {
    private readonly alertService;
    constructor(alertService: AlertService);
    get(): IAlertServiceContract;
}
