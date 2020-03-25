/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/local-storage-manager.service-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LocalStoreManagerServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import { LocalStoreManager } from '@polpware/ngx-appkit-services-alpha';
export class LocalStoreManagerProvider extends LocalStoreManagerServiceAbstractProvider {
    /**
     * @param {?} impl
     */
    constructor(impl) {
        super();
        this.impl = impl;
    }
    /**
     * @return {?}
     */
    get() {
        return this.impl;
    }
}
LocalStoreManagerProvider.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalStoreManagerProvider.ctorParameters = () => [
    { type: LocalStoreManager }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStoreManagerProvider.prototype.impl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS1tYW5hZ2VyLnNlcnZpY2UtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2UtbWFuYWdlci5zZXJ2aWNlLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0gsd0NBQXdDLEVBRTNDLE1BQU0sc0NBQXNDLENBQUM7QUFFOUMsT0FBTyxFQUNILGlCQUFpQixFQUNwQixNQUFNLHFDQUFxQyxDQUFDO0FBRzdDLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSx3Q0FBd0M7Ozs7SUFFbkYsWUFBNkIsSUFBdUI7UUFDaEQsS0FBSyxFQUFFLENBQUM7UUFEaUIsU0FBSSxHQUFKLElBQUksQ0FBbUI7SUFFcEQsQ0FBQzs7OztJQUVELEdBQUc7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7O1lBVEosVUFBVTs7OztZQUhQLGlCQUFpQjs7Ozs7OztJQU1MLHlDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBMb2NhbFN0b3JlTWFuYWdlclNlcnZpY2VBYnN0cmFjdFByb3ZpZGVyLFxuICAgIElMb2NhbFN0b3JlTWFuYWdlckNvbnRyYWN0XG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgTG9jYWxTdG9yZU1hbmFnZXJcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtc2VydmljZXMtYWxwaGEnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTdG9yZU1hbmFnZXJQcm92aWRlciBleHRlbmRzIExvY2FsU3RvcmVNYW5hZ2VyU2VydmljZUFic3RyYWN0UHJvdmlkZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbXBsOiBMb2NhbFN0b3JlTWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCgpOiBJTG9jYWxTdG9yZU1hbmFnZXJDb250cmFjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmltcGw7XG4gICAgfVxufVxuIl19