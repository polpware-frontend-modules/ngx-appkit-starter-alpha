import { ThemeManagerAbstractProvider, IThemeManagerContract } from '@polpware/ngx-appkit-contracts-alpha';
import { ThemeManager } from '@polpware/ngx-appkit-services-alpha';
export declare class ThemeManagerProvider extends ThemeManagerAbstractProvider {
    private readonly impl;
    constructor(impl: ThemeManager);
    get(): IThemeManagerContract;
}
