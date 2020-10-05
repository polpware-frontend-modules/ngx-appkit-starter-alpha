import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AlertServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-appkit-services-alpha";
var AlertServiceProvider = /** @class */ (function (_super) {
    __extends(AlertServiceProvider, _super);
    function AlertServiceProvider(alertService) {
        var _this = _super.call(this) || this;
        _this.alertService = alertService;
        return _this;
    }
    AlertServiceProvider.prototype.get = function () {
        return this.alertService;
    };
    /** @nocollapse */ AlertServiceProvider.ɵfac = function AlertServiceProvider_Factory(t) { return new (t || AlertServiceProvider)(i0.ɵɵinject(i1.AlertService)); };
    /** @nocollapse */ AlertServiceProvider.ɵprov = i0.ɵɵdefineInjectable({ token: AlertServiceProvider, factory: AlertServiceProvider.ɵfac });
    return AlertServiceProvider;
}(AlertServiceAbstractProvider));
export { AlertServiceProvider };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertServiceProvider, [{
        type: Injectable
    }], function () { return [{ type: i1.AlertService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYWxlcnQuc2VydmljZS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0gsNEJBQTRCLEVBRS9CLE1BQU0sc0NBQXNDLENBQUM7OztBQU05QztJQUMwQyx3Q0FBNEI7SUFFbEUsOEJBQTZCLFlBQTBCO1FBQXZELFlBQ0ksaUJBQU8sU0FDVjtRQUY0QixrQkFBWSxHQUFaLFlBQVksQ0FBYzs7SUFFdkQsQ0FBQztJQUVELGtDQUFHLEdBQUg7UUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQzsrR0FSUSxvQkFBb0I7bUZBQXBCLG9CQUFvQixXQUFwQixvQkFBb0I7K0JBWmpDO0NBcUJDLEFBVkQsQ0FDMEMsNEJBQTRCLEdBU3JFO1NBVFksb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FEaEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBBbGVydFNlcnZpY2VBYnN0cmFjdFByb3ZpZGVyLFxuICAgIElBbGVydFNlcnZpY2VDb250cmFjdFxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1jb250cmFjdHMtYWxwaGEnO1xuXG5pbXBvcnQge1xuICAgIEFsZXJ0U2VydmljZVxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1zZXJ2aWNlcy1hbHBoYSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbGVydFNlcnZpY2VQcm92aWRlciBleHRlbmRzIEFsZXJ0U2VydmljZUFic3RyYWN0UHJvdmlkZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCgpOiBJQWxlcnRTZXJ2aWNlQ29udHJhY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGVydFNlcnZpY2U7XG4gICAgfVxufVxuIl19