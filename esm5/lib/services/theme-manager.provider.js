/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/theme-manager.provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ThemeManagerAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import { ThemeManager } from '@polpware/ngx-appkit-services-alpha';
var ThemeManagerProvider = /** @class */ (function (_super) {
    tslib_1.__extends(ThemeManagerProvider, _super);
    function ThemeManagerProvider(impl) {
        var _this = _super.call(this) || this;
        _this.impl = impl;
        return _this;
    }
    /**
     * @return {?}
     */
    ThemeManagerProvider.prototype.get = /**
     * @return {?}
     */
    function () {
        return this.impl;
    };
    ThemeManagerProvider.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ThemeManagerProvider.ctorParameters = function () { return [
        { type: ThemeManager }
    ]; };
    return ThemeManagerProvider;
}(ThemeManagerAbstractProvider));
export { ThemeManagerProvider };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ThemeManagerProvider.prototype.impl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtbWFuYWdlci5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdGhlbWUtbWFuYWdlci5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDSCw0QkFBNEIsRUFFL0IsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5QyxPQUFPLEVBQ0gsWUFBWSxFQUNmLE1BQU0scUNBQXFDLENBQUM7QUFFN0M7SUFDMEMsZ0RBQTRCO0lBRWxFLDhCQUE2QixJQUFrQjtRQUEvQyxZQUNJLGlCQUFPLFNBQ1Y7UUFGNEIsVUFBSSxHQUFKLElBQUksQ0FBYzs7SUFFL0MsQ0FBQzs7OztJQUVELGtDQUFHOzs7SUFBSDtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDOztnQkFUSixVQUFVOzs7O2dCQUhQLFlBQVk7O0lBYWhCLDJCQUFDO0NBQUEsQUFWRCxDQUMwQyw0QkFBNEIsR0FTckU7U0FUWSxvQkFBb0I7Ozs7OztJQUVqQixvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgVGhlbWVNYW5hZ2VyQWJzdHJhY3RQcm92aWRlcixcbiAgICBJVGhlbWVNYW5hZ2VyQ29udHJhY3Rcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBUaGVtZU1hbmFnZXJcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtc2VydmljZXMtYWxwaGEnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGhlbWVNYW5hZ2VyUHJvdmlkZXIgZXh0ZW5kcyBUaGVtZU1hbmFnZXJBYnN0cmFjdFByb3ZpZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW1wbDogVGhlbWVNYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0KCk6IElUaGVtZU1hbmFnZXJDb250cmFjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmltcGw7XG4gICAgfVxufVxuIl19