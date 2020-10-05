import { Injectable } from '@angular/core';
import { ThemeManagerAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-appkit-services-alpha";
export class ThemeManagerProvider extends ThemeManagerAbstractProvider {
    constructor(impl) {
        super();
        this.impl = impl;
    }
    get() {
        return this.impl;
    }
}
/** @nocollapse */ ThemeManagerProvider.ɵfac = function ThemeManagerProvider_Factory(t) { return new (t || ThemeManagerProvider)(i0.ɵɵinject(i1.ThemeManager)); };
/** @nocollapse */ ThemeManagerProvider.ɵprov = i0.ɵɵdefineInjectable({ token: ThemeManagerProvider, factory: ThemeManagerProvider.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ThemeManagerProvider, [{
        type: Injectable
    }], function () { return [{ type: i1.ThemeManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtbWFuYWdlci5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdGhlbWUtbWFuYWdlci5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDSCw0QkFBNEIsRUFFL0IsTUFBTSxzQ0FBc0MsQ0FBQzs7O0FBTzlDLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSw0QkFBNEI7SUFFbEUsWUFBNkIsSUFBa0I7UUFDM0MsS0FBSyxFQUFFLENBQUM7UUFEaUIsU0FBSSxHQUFKLElBQUksQ0FBYztJQUUvQyxDQUFDO0lBRUQsR0FBRztRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDOzsyR0FSUSxvQkFBb0I7K0VBQXBCLG9CQUFvQixXQUFwQixvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQURoQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIFRoZW1lTWFuYWdlckFic3RyYWN0UHJvdmlkZXIsXG4gICAgSVRoZW1lTWFuYWdlckNvbnRyYWN0XG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgVGhlbWVNYW5hZ2VyXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXNlcnZpY2VzLWFscGhhJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRoZW1lTWFuYWdlclByb3ZpZGVyIGV4dGVuZHMgVGhlbWVNYW5hZ2VyQWJzdHJhY3RQcm92aWRlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGltcGw6IFRoZW1lTWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCgpOiBJVGhlbWVNYW5hZ2VyQ29udHJhY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5pbXBsO1xuICAgIH1cbn1cbiJdfQ==