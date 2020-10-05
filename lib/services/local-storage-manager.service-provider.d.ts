import { LocalStoreManagerServiceAbstractProvider, ILocalStoreManagerContract } from '@polpware/ngx-appkit-contracts-alpha';
import { LocalStoreManager } from '@polpware/ngx-appkit-services-alpha';
import * as i0 from "@angular/core";
export declare class LocalStoreManagerProvider extends LocalStoreManagerServiceAbstractProvider {
    private readonly impl;
    constructor(impl: LocalStoreManager);
    get(): ILocalStoreManagerContract;
    static ɵfac: i0.ɵɵFactoryDef<LocalStoreManagerProvider, never>;
    static ɵprov: i0.ɵɵInjectableDef<LocalStoreManagerProvider>;
}
