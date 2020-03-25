/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/translation.service-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { TranslationServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import { AppTranslationService } from '@polpware/ngx-appkit-services-alpha';
var TranslationServiceProvider = /** @class */ (function (_super) {
    tslib_1.__extends(TranslationServiceProvider, _super);
    function TranslationServiceProvider(impl) {
        var _this = _super.call(this) || this;
        _this.impl = impl;
        return _this;
    }
    /**
     * @return {?}
     */
    TranslationServiceProvider.prototype.get = /**
     * @return {?}
     */
    function () {
        return this.impl;
    };
    TranslationServiceProvider.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TranslationServiceProvider.ctorParameters = function () { return [
        { type: AppTranslationService }
    ]; };
    return TranslationServiceProvider;
}(TranslationServiceAbstractProvider));
export { TranslationServiceProvider };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslationServiceProvider.prototype.impl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvdHJhbnNsYXRpb24uc2VydmljZS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDSCxrQ0FBa0MsRUFFckMsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5QyxPQUFPLEVBQ0gscUJBQXFCLEVBQ3hCLE1BQU0scUNBQXFDLENBQUM7QUFFN0M7SUFDZ0Qsc0RBQWtDO0lBRTlFLG9DQUE2QixJQUEyQjtRQUF4RCxZQUNJLGlCQUFPLFNBQ1Y7UUFGNEIsVUFBSSxHQUFKLElBQUksQ0FBdUI7O0lBRXhELENBQUM7Ozs7SUFFRCx3Q0FBRzs7O0lBQUg7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7Z0JBVEosVUFBVTs7OztnQkFIUCxxQkFBcUI7O0lBYXpCLGlDQUFDO0NBQUEsQUFWRCxDQUNnRCxrQ0FBa0MsR0FTakY7U0FUWSwwQkFBMEI7Ozs7OztJQUV2QiwwQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgVHJhbnNsYXRpb25TZXJ2aWNlQWJzdHJhY3RQcm92aWRlcixcbiAgICBJVHJhbnNsYXRpb25TZXJ2aWNlQ29udHJhY3Rcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBBcHBUcmFuc2xhdGlvblNlcnZpY2Vcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtc2VydmljZXMtYWxwaGEnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25TZXJ2aWNlUHJvdmlkZXIgZXh0ZW5kcyBUcmFuc2xhdGlvblNlcnZpY2VBYnN0cmFjdFByb3ZpZGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaW1wbDogQXBwVHJhbnNsYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0KCk6IElUcmFuc2xhdGlvblNlcnZpY2VDb250cmFjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmltcGw7XG4gICAgfVxufVxuIl19