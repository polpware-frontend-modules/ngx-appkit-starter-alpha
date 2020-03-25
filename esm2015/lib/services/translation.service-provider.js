/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/translation.service-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { TranslationServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import { AppTranslationService } from '@polpware/ngx-appkit-services-alpha';
export class TranslationServiceProvider extends TranslationServiceAbstractProvider {
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
TranslationServiceProvider.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TranslationServiceProvider.ctorParameters = () => [
    { type: AppTranslationService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslationServiceProvider.prototype.impl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdHJhbnNsYXRpb24uc2VydmljZS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNILGtDQUFrQyxFQUVyQyxNQUFNLHNDQUFzQyxDQUFDO0FBRTlDLE9BQU8sRUFDSCxxQkFBcUIsRUFDeEIsTUFBTSxxQ0FBcUMsQ0FBQztBQUc3QyxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsa0NBQWtDOzs7O0lBRTlFLFlBQTZCLElBQTJCO1FBQ3BELEtBQUssRUFBRSxDQUFDO1FBRGlCLFNBQUksR0FBSixJQUFJLENBQXVCO0lBRXhELENBQUM7Ozs7SUFFRCxHQUFHO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7OztZQVRKLFVBQVU7Ozs7WUFIUCxxQkFBcUI7Ozs7Ozs7SUFNVCwwQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgVHJhbnNsYXRpb25TZXJ2aWNlQWJzdHJhY3RQcm92aWRlcixcbiAgICBJVHJhbnNsYXRpb25TZXJ2aWNlQ29udHJhY3Rcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBBcHBUcmFuc2xhdGlvblNlcnZpY2Vcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtc2VydmljZXMtYWxwaGEnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25TZXJ2aWNlUHJvdmlkZXIgZXh0ZW5kcyBUcmFuc2xhdGlvblNlcnZpY2VBYnN0cmFjdFByb3ZpZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW1wbDogQXBwVHJhbnNsYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0KCk6IElUcmFuc2xhdGlvblNlcnZpY2VDb250cmFjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmltcGw7XG4gICAgfVxufVxuIl19