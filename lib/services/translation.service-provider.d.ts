import { TranslationServiceAbstractProvider, ITranslationServiceContract } from '@polpware/ngx-appkit-contracts-alpha';
import { AppTranslationService } from '@polpware/ngx-appkit-services-alpha';
export declare class TranslationServiceProvider extends TranslationServiceAbstractProvider {
    private readonly impl;
    constructor(impl: AppTranslationService);
    get(): ITranslationServiceContract;
}
