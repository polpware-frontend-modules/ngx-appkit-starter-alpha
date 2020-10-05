import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { ConfigurationServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-appkit-services-alpha";
var ConfigurationServiceProvider = /** @class */ (function (_super) {
    __extends(ConfigurationServiceProvider, _super);
    function ConfigurationServiceProvider(impl) {
        var _this = _super.call(this) || this;
        _this.impl = impl;
        return _this;
    }
    ConfigurationServiceProvider.prototype.get = function () {
        return this.impl;
    };
    /** @nocollapse */ ConfigurationServiceProvider.ɵfac = function ConfigurationServiceProvider_Factory(t) { return new (t || ConfigurationServiceProvider)(i0.ɵɵinject(i1.ConfigurationService)); };
    /** @nocollapse */ ConfigurationServiceProvider.ɵprov = i0.ɵɵdefineInjectable({ token: ConfigurationServiceProvider, factory: ConfigurationServiceProvider.ɵfac });
    return ConfigurationServiceProvider;
}(ConfigurationServiceAbstractProvider));
export { ConfigurationServiceProvider };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ConfigurationServiceProvider, [{
        type: Injectable
    }], function () { return [{ type: i1.ConfigurationService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNILG9DQUFvQyxFQUV2QyxNQUFNLHNDQUFzQyxDQUFDOzs7QUFNOUM7SUFDa0QsZ0RBQW9DO0lBRWxGLHNDQUE2QixJQUEwQjtRQUF2RCxZQUNJLGlCQUFPLFNBQ1Y7UUFGNEIsVUFBSSxHQUFKLElBQUksQ0FBc0I7O0lBRXZELENBQUM7SUFFRCwwQ0FBRyxHQUFIO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7K0hBUlEsNEJBQTRCOzJGQUE1Qiw0QkFBNEIsV0FBNUIsNEJBQTRCO3VDQVp6QztDQXFCQyxBQVZELENBQ2tELG9DQUFvQyxHQVNyRjtTQVRZLDRCQUE0QjtrREFBNUIsNEJBQTRCO2NBRHhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgQ29uZmlndXJhdGlvblNlcnZpY2VBYnN0cmFjdFByb3ZpZGVyLFxuICAgIElDb25maWd1cmF0aW9uU2VydmljZUNvbnRyYWN0XG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgQ29uZmlndXJhdGlvblNlcnZpY2Vcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtc2VydmljZXMtYWxwaGEnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvblNlcnZpY2VQcm92aWRlciBleHRlbmRzIENvbmZpZ3VyYXRpb25TZXJ2aWNlQWJzdHJhY3RQcm92aWRlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGltcGw6IENvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0KCk6IElDb25maWd1cmF0aW9uU2VydmljZUNvbnRyYWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1wbDtcbiAgICB9XG59XG4iXX0=