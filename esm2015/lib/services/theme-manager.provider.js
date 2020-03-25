/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/theme-manager.provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ThemeManagerAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import { ThemeManager } from '@polpware/ngx-appkit-services-alpha';
export class ThemeManagerProvider extends ThemeManagerAbstractProvider {
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
ThemeManagerProvider.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ThemeManagerProvider.ctorParameters = () => [
    { type: ThemeManager }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ThemeManagerProvider.prototype.impl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtbWFuYWdlci5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdGhlbWUtbWFuYWdlci5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNILDRCQUE0QixFQUUvQixNQUFNLHNDQUFzQyxDQUFDO0FBRTlDLE9BQU8sRUFDSCxZQUFZLEVBQ2YsTUFBTSxxQ0FBcUMsQ0FBQztBQUc3QyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsNEJBQTRCOzs7O0lBRWxFLFlBQTZCLElBQWtCO1FBQzNDLEtBQUssRUFBRSxDQUFDO1FBRGlCLFNBQUksR0FBSixJQUFJLENBQWM7SUFFL0MsQ0FBQzs7OztJQUVELEdBQUc7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7O1lBVEosVUFBVTs7OztZQUhQLFlBQVk7Ozs7Ozs7SUFNQSxvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgVGhlbWVNYW5hZ2VyQWJzdHJhY3RQcm92aWRlcixcbiAgICBJVGhlbWVNYW5hZ2VyQ29udHJhY3Rcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBUaGVtZU1hbmFnZXJcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtc2VydmljZXMtYWxwaGEnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGhlbWVNYW5hZ2VyUHJvdmlkZXIgZXh0ZW5kcyBUaGVtZU1hbmFnZXJBYnN0cmFjdFByb3ZpZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW1wbDogVGhlbWVNYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0KCk6IElUaGVtZU1hbmFnZXJDb250cmFjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmltcGw7XG4gICAgfVxufVxuIl19