import { ConfigurationServiceAbstractProvider, IConfigurationServiceContract } from '@polpware/ngx-appkit-contracts-alpha';
import { ConfigurationService } from '@polpware/ngx-appkit-services-alpha';
export declare class ConfigurationServiceProvider extends ConfigurationServiceAbstractProvider {
    private readonly impl;
    constructor(impl: ConfigurationService);
    get(): IConfigurationServiceContract;
}
