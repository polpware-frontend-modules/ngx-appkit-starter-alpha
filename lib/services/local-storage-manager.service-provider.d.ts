import { LocalStoreManagerServiceAbstractProvider, ILocalStoreManagerContract } from '@polpware/ngx-appkit-contracts-alpha';
import { LocalStoreManager } from '@polpware/ngx-appkit-services-alpha';
export declare class LocalStoreManagerProvider extends LocalStoreManagerServiceAbstractProvider {
    private readonly impl;
    constructor(impl: LocalStoreManager);
    get(): ILocalStoreManagerContract;
}
