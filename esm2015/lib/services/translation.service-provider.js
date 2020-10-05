import { Injectable } from '@angular/core';
import { TranslationServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-appkit-services-alpha";
export class TranslationServiceProvider extends TranslationServiceAbstractProvider {
    constructor(impl) {
        super();
        this.impl = impl;
    }
    get() {
        return this.impl;
    }
}
/** @nocollapse */ TranslationServiceProvider.ɵfac = function TranslationServiceProvider_Factory(t) { return new (t || TranslationServiceProvider)(i0.ɵɵinject(i1.AppTranslationService)); };
/** @nocollapse */ TranslationServiceProvider.ɵprov = i0.ɵɵdefineInjectable({ token: TranslationServiceProvider, factory: TranslationServiceProvider.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TranslationServiceProvider, [{
        type: Injectable
    }], function () { return [{ type: i1.AppTranslationService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdHJhbnNsYXRpb24uc2VydmljZS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDSCxrQ0FBa0MsRUFFckMsTUFBTSxzQ0FBc0MsQ0FBQzs7O0FBTzlDLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxrQ0FBa0M7SUFFOUUsWUFBNkIsSUFBMkI7UUFDcEQsS0FBSyxFQUFFLENBQUM7UUFEaUIsU0FBSSxHQUFKLElBQUksQ0FBdUI7SUFFeEQsQ0FBQztJQUVELEdBQUc7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7dUhBUlEsMEJBQTBCO3FGQUExQiwwQkFBMEIsV0FBMUIsMEJBQTBCO2tEQUExQiwwQkFBMEI7Y0FEdEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBUcmFuc2xhdGlvblNlcnZpY2VBYnN0cmFjdFByb3ZpZGVyLFxuICAgIElUcmFuc2xhdGlvblNlcnZpY2VDb250cmFjdFxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1jb250cmFjdHMtYWxwaGEnO1xuXG5pbXBvcnQge1xuICAgIEFwcFRyYW5zbGF0aW9uU2VydmljZVxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1zZXJ2aWNlcy1hbHBoYSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvblNlcnZpY2VQcm92aWRlciBleHRlbmRzIFRyYW5zbGF0aW9uU2VydmljZUFic3RyYWN0UHJvdmlkZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbXBsOiBBcHBUcmFuc2xhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXQoKTogSVRyYW5zbGF0aW9uU2VydmljZUNvbnRyYWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1wbDtcbiAgICB9XG59XG4iXX0=