import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { TranslationServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-appkit-services-alpha";
var TranslationServiceProvider = /** @class */ (function (_super) {
    __extends(TranslationServiceProvider, _super);
    function TranslationServiceProvider(impl) {
        var _this = _super.call(this) || this;
        _this.impl = impl;
        return _this;
    }
    TranslationServiceProvider.prototype.get = function () {
        return this.impl;
    };
    /** @nocollapse */ TranslationServiceProvider.ɵfac = function TranslationServiceProvider_Factory(t) { return new (t || TranslationServiceProvider)(i0.ɵɵinject(i1.AppTranslationService)); };
    /** @nocollapse */ TranslationServiceProvider.ɵprov = i0.ɵɵdefineInjectable({ token: TranslationServiceProvider, factory: TranslationServiceProvider.ɵfac });
    return TranslationServiceProvider;
}(TranslationServiceAbstractProvider));
export { TranslationServiceProvider };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TranslationServiceProvider, [{
        type: Injectable
    }], function () { return [{ type: i1.AppTranslationService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdHJhbnNsYXRpb24uc2VydmljZS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0gsa0NBQWtDLEVBRXJDLE1BQU0sc0NBQXNDLENBQUM7OztBQU05QztJQUNnRCw4Q0FBa0M7SUFFOUUsb0NBQTZCLElBQTJCO1FBQXhELFlBQ0ksaUJBQU8sU0FDVjtRQUY0QixVQUFJLEdBQUosSUFBSSxDQUF1Qjs7SUFFeEQsQ0FBQztJQUVELHdDQUFHLEdBQUg7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQzsySEFSUSwwQkFBMEI7eUZBQTFCLDBCQUEwQixXQUExQiwwQkFBMEI7cUNBWnZDO0NBcUJDLEFBVkQsQ0FDZ0Qsa0NBQWtDLEdBU2pGO1NBVFksMEJBQTBCO2tEQUExQiwwQkFBMEI7Y0FEdEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBUcmFuc2xhdGlvblNlcnZpY2VBYnN0cmFjdFByb3ZpZGVyLFxuICAgIElUcmFuc2xhdGlvblNlcnZpY2VDb250cmFjdFxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1jb250cmFjdHMtYWxwaGEnO1xuXG5pbXBvcnQge1xuICAgIEFwcFRyYW5zbGF0aW9uU2VydmljZVxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1zZXJ2aWNlcy1hbHBoYSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvblNlcnZpY2VQcm92aWRlciBleHRlbmRzIFRyYW5zbGF0aW9uU2VydmljZUFic3RyYWN0UHJvdmlkZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbXBsOiBBcHBUcmFuc2xhdGlvblNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBnZXQoKTogSVRyYW5zbGF0aW9uU2VydmljZUNvbnRyYWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1wbDtcbiAgICB9XG59XG4iXX0=