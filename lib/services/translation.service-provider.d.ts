import { TranslationServiceAbstractProvider, ITranslationServiceContract } from '@polpware/ngx-appkit-contracts-alpha';
import { AppTranslationService } from '@polpware/ngx-appkit-services-alpha';
import * as i0 from "@angular/core";
export declare class TranslationServiceProvider extends TranslationServiceAbstractProvider {
    private readonly impl;
    constructor(impl: AppTranslationService);
    get(): ITranslationServiceContract;
    static ɵfac: i0.ɵɵFactoryDef<TranslationServiceProvider, never>;
    static ɵprov: i0.ɵɵInjectableDef<TranslationServiceProvider>;
}
