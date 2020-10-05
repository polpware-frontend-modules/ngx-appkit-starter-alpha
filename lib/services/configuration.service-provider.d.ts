import { ConfigurationServiceAbstractProvider, IConfigurationServiceContract } from '@polpware/ngx-appkit-contracts-alpha';
import { ConfigurationService } from '@polpware/ngx-appkit-services-alpha';
import * as i0 from "@angular/core";
export declare class ConfigurationServiceProvider extends ConfigurationServiceAbstractProvider {
    private readonly impl;
    constructor(impl: ConfigurationService);
    get(): IConfigurationServiceContract;
    static ɵfac: i0.ɵɵFactoryDef<ConfigurationServiceProvider, never>;
    static ɵprov: i0.ɵɵInjectableDef<ConfigurationServiceProvider>;
}
