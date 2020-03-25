/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/configuration.service-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ConfigurationServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import { ConfigurationService } from '@polpware/ngx-appkit-services-alpha';
export class ConfigurationServiceProvider extends ConfigurationServiceAbstractProvider {
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
ConfigurationServiceProvider.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigurationServiceProvider.ctorParameters = () => [
    { type: ConfigurationService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigurationServiceProvider.prototype.impl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDSCxvQ0FBb0MsRUFFdkMsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5QyxPQUFPLEVBQ0gsb0JBQW9CLEVBQ3ZCLE1BQU0scUNBQXFDLENBQUM7QUFHN0MsTUFBTSxPQUFPLDRCQUE2QixTQUFRLG9DQUFvQzs7OztJQUVsRixZQUE2QixJQUEwQjtRQUNuRCxLQUFLLEVBQUUsQ0FBQztRQURpQixTQUFJLEdBQUosSUFBSSxDQUFzQjtJQUV2RCxDQUFDOzs7O0lBRUQsR0FBRztRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDOzs7WUFUSixVQUFVOzs7O1lBSFAsb0JBQW9COzs7Ozs7O0lBTVIsNENBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIENvbmZpZ3VyYXRpb25TZXJ2aWNlQWJzdHJhY3RQcm92aWRlcixcbiAgICBJQ29uZmlndXJhdGlvblNlcnZpY2VDb250cmFjdFxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1jb250cmFjdHMtYWxwaGEnO1xuXG5pbXBvcnQge1xuICAgIENvbmZpZ3VyYXRpb25TZXJ2aWNlXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXNlcnZpY2VzLWFscGhhJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb25TZXJ2aWNlUHJvdmlkZXIgZXh0ZW5kcyBDb25maWd1cmF0aW9uU2VydmljZUFic3RyYWN0UHJvdmlkZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbXBsOiBDb25maWd1cmF0aW9uU2VydmljZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGdldCgpOiBJQ29uZmlndXJhdGlvblNlcnZpY2VDb250cmFjdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmltcGw7XG4gICAgfVxufVxuIl19