import { ThemeManagerAbstractProvider, IThemeManagerContract } from '@polpware/ngx-appkit-contracts-alpha';
import { ThemeManager } from '@polpware/ngx-appkit-services-alpha';
import * as i0 from "@angular/core";
export declare class ThemeManagerProvider extends ThemeManagerAbstractProvider {
    private readonly impl;
    constructor(impl: ThemeManager);
    get(): IThemeManagerContract;
    static ɵfac: i0.ɵɵFactoryDef<ThemeManagerProvider, never>;
    static ɵprov: i0.ɵɵInjectableDef<ThemeManagerProvider>;
}
