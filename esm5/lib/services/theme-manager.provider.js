import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { ThemeManagerAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-appkit-services-alpha";
var ThemeManagerProvider = /** @class */ (function (_super) {
    __extends(ThemeManagerProvider, _super);
    function ThemeManagerProvider(impl) {
        var _this = _super.call(this) || this;
        _this.impl = impl;
        return _this;
    }
    ThemeManagerProvider.prototype.get = function () {
        return this.impl;
    };
    /** @nocollapse */ ThemeManagerProvider.ɵfac = function ThemeManagerProvider_Factory(t) { return new (t || ThemeManagerProvider)(i0.ɵɵinject(i1.ThemeManager)); };
    /** @nocollapse */ ThemeManagerProvider.ɵprov = i0.ɵɵdefineInjectable({ token: ThemeManagerProvider, factory: ThemeManagerProvider.ɵfac });
    return ThemeManagerProvider;
}(ThemeManagerAbstractProvider));
export { ThemeManagerProvider };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ThemeManagerProvider, [{
        type: Injectable
    }], function () { return [{ type: i1.ThemeManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtbWFuYWdlci5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdGhlbWUtbWFuYWdlci5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0gsNEJBQTRCLEVBRS9CLE1BQU0sc0NBQXNDLENBQUM7OztBQU05QztJQUMwQyx3Q0FBNEI7SUFFbEUsOEJBQTZCLElBQWtCO1FBQS9DLFlBQ0ksaUJBQU8sU0FDVjtRQUY0QixVQUFJLEdBQUosSUFBSSxDQUFjOztJQUUvQyxDQUFDO0lBRUQsa0NBQUcsR0FBSDtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDOytHQVJRLG9CQUFvQjttRkFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQjsrQkFaakM7Q0FxQkMsQUFWRCxDQUMwQyw0QkFBNEIsR0FTckU7U0FUWSxvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQURoQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIFRoZW1lTWFuYWdlckFic3RyYWN0UHJvdmlkZXIsXG4gICAgSVRoZW1lTWFuYWdlckNvbnRyYWN0XG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgVGhlbWVNYW5hZ2VyXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXNlcnZpY2VzLWFscGhhJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRoZW1lTWFuYWdlclByb3ZpZGVyIGV4dGVuZHMgVGhlbWVNYW5hZ2VyQWJzdHJhY3RQcm92aWRlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGltcGw6IFRoZW1lTWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCgpOiBJVGhlbWVNYW5hZ2VyQ29udHJhY3Qge1xuICAgICAgICByZXR1cm4gdGhpcy5pbXBsO1xuICAgIH1cbn1cbiJdfQ==