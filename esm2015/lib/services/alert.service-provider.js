import { Injectable } from '@angular/core';
import { AlertServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-appkit-services-alpha";
export class AlertServiceProvider extends AlertServiceAbstractProvider {
    constructor(alertService) {
        super();
        this.alertService = alertService;
    }
    get() {
        return this.alertService;
    }
}
/** @nocollapse */ AlertServiceProvider.ɵfac = function AlertServiceProvider_Factory(t) { return new (t || AlertServiceProvider)(i0.ɵɵinject(i1.AlertService)); };
/** @nocollapse */ AlertServiceProvider.ɵprov = i0.ɵɵdefineInjectable({ token: AlertServiceProvider, factory: AlertServiceProvider.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AlertServiceProvider, [{
        type: Injectable
    }], function () { return [{ type: i1.AlertService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYWxlcnQuc2VydmljZS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDSCw0QkFBNEIsRUFFL0IsTUFBTSxzQ0FBc0MsQ0FBQzs7O0FBTzlDLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSw0QkFBNEI7SUFFbEUsWUFBNkIsWUFBMEI7UUFDbkQsS0FBSyxFQUFFLENBQUM7UUFEaUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFFdkQsQ0FBQztJQUVELEdBQUc7UUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQzs7MkdBUlEsb0JBQW9COytFQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FEaEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBBbGVydFNlcnZpY2VBYnN0cmFjdFByb3ZpZGVyLFxuICAgIElBbGVydFNlcnZpY2VDb250cmFjdFxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1jb250cmFjdHMtYWxwaGEnO1xuXG5pbXBvcnQge1xuICAgIEFsZXJ0U2VydmljZVxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1zZXJ2aWNlcy1hbHBoYSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbGVydFNlcnZpY2VQcm92aWRlciBleHRlbmRzIEFsZXJ0U2VydmljZUFic3RyYWN0UHJvdmlkZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCgpOiBJQWxlcnRTZXJ2aWNlQ29udHJhY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGVydFNlcnZpY2U7XG4gICAgfVxufVxuIl19