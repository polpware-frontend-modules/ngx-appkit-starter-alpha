/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/configuration.service-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ConfigurationServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import { ConfigurationService } from '@polpware/ngx-appkit-services-alpha';
var ConfigurationServiceProvider = /** @class */ (function (_super) {
    tslib_1.__extends(ConfigurationServiceProvider, _super);
    function ConfigurationServiceProvider(impl) {
        var _this = _super.call(this) || this;
        _this.impl = impl;
        return _this;
    }
    /**
     * @return {?}
     */
    ConfigurationServiceProvider.prototype.get = /**
     * @return {?}
     */
    function () {
        return this.impl;
    };
    ConfigurationServiceProvider.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ConfigurationServiceProvider.ctorParameters = function () { return [
        { type: ConfigurationService }
    ]; };
    return ConfigurationServiceProvider;
}(ConfigurationServiceAbstractProvider));
export { ConfigurationServiceProvider };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigurationServiceProvider.prototype.impl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0gsb0NBQW9DLEVBRXZDLE1BQU0sc0NBQXNDLENBQUM7QUFFOUMsT0FBTyxFQUNILG9CQUFvQixFQUN2QixNQUFNLHFDQUFxQyxDQUFDO0FBRTdDO0lBQ2tELHdEQUFvQztJQUVsRixzQ0FBNkIsSUFBMEI7UUFBdkQsWUFDSSxpQkFBTyxTQUNWO1FBRjRCLFVBQUksR0FBSixJQUFJLENBQXNCOztJQUV2RCxDQUFDOzs7O0lBRUQsMENBQUc7OztJQUFIO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7O2dCQVRKLFVBQVU7Ozs7Z0JBSFAsb0JBQW9COztJQWF4QixtQ0FBQztDQUFBLEFBVkQsQ0FDa0Qsb0NBQW9DLEdBU3JGO1NBVFksNEJBQTRCOzs7Ozs7SUFFekIsNENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIENvbmZpZ3VyYXRpb25TZXJ2aWNlQWJzdHJhY3RQcm92aWRlcixcbiAgICBJQ29uZmlndXJhdGlvblNlcnZpY2VDb250cmFjdFxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1jb250cmFjdHMtYWxwaGEnO1xuXG5pbXBvcnQge1xuICAgIENvbmZpZ3VyYXRpb25TZXJ2aWNlXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXNlcnZpY2VzLWFscGhhJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb25TZXJ2aWNlUHJvdmlkZXIgZXh0ZW5kcyBDb25maWd1cmF0aW9uU2VydmljZUFic3RyYWN0UHJvdmlkZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbXBsOiBDb25maWd1cmF0aW9uU2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCgpOiBJQ29uZmlndXJhdGlvblNlcnZpY2VDb250cmFjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmltcGw7XG4gICAgfVxufVxuIl19