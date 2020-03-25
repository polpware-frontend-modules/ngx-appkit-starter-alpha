/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/local-storage-manager.service-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LocalStoreManagerServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import { LocalStoreManager } from '@polpware/ngx-appkit-services-alpha';
var LocalStoreManagerProvider = /** @class */ (function (_super) {
    tslib_1.__extends(LocalStoreManagerProvider, _super);
    function LocalStoreManagerProvider(impl) {
        var _this = _super.call(this) || this;
        _this.impl = impl;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalStoreManagerProvider.prototype.get = /**
     * @return {?}
     */
    function () {
        return this.impl;
    };
    LocalStoreManagerProvider.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalStoreManagerProvider.ctorParameters = function () { return [
        { type: LocalStoreManager }
    ]; };
    return LocalStoreManagerProvider;
}(LocalStoreManagerServiceAbstractProvider));
export { LocalStoreManagerProvider };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStoreManagerProvider.prototype.impl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS1tYW5hZ2VyLnNlcnZpY2UtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2UtbWFuYWdlci5zZXJ2aWNlLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNILHdDQUF3QyxFQUUzQyxNQUFNLHNDQUFzQyxDQUFDO0FBRTlDLE9BQU8sRUFDSCxpQkFBaUIsRUFDcEIsTUFBTSxxQ0FBcUMsQ0FBQztBQUU3QztJQUMrQyxxREFBd0M7SUFFbkYsbUNBQTZCLElBQXVCO1FBQXBELFlBQ0ksaUJBQU8sU0FDVjtRQUY0QixVQUFJLEdBQUosSUFBSSxDQUFtQjs7SUFFcEQsQ0FBQzs7OztJQUVELHVDQUFHOzs7SUFBSDtRQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDOztnQkFUSixVQUFVOzs7O2dCQUhQLGlCQUFpQjs7SUFhckIsZ0NBQUM7Q0FBQSxBQVZELENBQytDLHdDQUF3QyxHQVN0RjtTQVRZLHlCQUF5Qjs7Ozs7O0lBRXRCLHlDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBMb2NhbFN0b3JlTWFuYWdlclNlcnZpY2VBYnN0cmFjdFByb3ZpZGVyLFxuICAgIElMb2NhbFN0b3JlTWFuYWdlckNvbnRyYWN0XG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgTG9jYWxTdG9yZU1hbmFnZXJcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtc2VydmljZXMtYWxwaGEnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yZU1hbmFnZXJQcm92aWRlciBleHRlbmRzIExvY2FsU3RvcmVNYW5hZ2VyU2VydmljZUFic3RyYWN0UHJvdmlkZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbXBsOiBMb2NhbFN0b3JlTWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCgpOiBJTG9jYWxTdG9yZU1hbmFnZXJDb250cmFjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmltcGw7XG4gICAgfVxufVxuIl19