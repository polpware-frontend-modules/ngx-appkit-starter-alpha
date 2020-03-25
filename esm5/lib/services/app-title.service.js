/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/app-title.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map, flatMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { Utilities } from '@polpware/ngx-appkit-contracts-alpha';
var AppTitleService = /** @class */ (function () {
    function AppTitleService(titleService, router) {
        var _this = this;
        this.titleService = titleService;
        this.router = router;
        this.sub = this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event instanceof NavigationEnd; })), map((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return _this.router.routerState.root; })), map((/**
         * @param {?} route
         * @return {?}
         */
        function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })), flatMap((/**
         * @param {?} route
         * @return {?}
         */
        function (route) { return route.data; })))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var title = data.title;
            if (title) {
                /** @type {?} */
                var fragment = _this.router.url.split('#')[1];
                if (fragment) {
                    title += ' | ' + Utilities.toTitleCase(fragment);
                }
            }
            if (title && _this.appName) {
                title += ' - ' + _this.appName;
            }
            else if (_this.appName) {
                title = _this.appName;
            }
            if (title) {
                _this.titleService.setTitle(title);
            }
        }));
    }
    AppTitleService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AppTitleService.ctorParameters = function () { return [
        { type: Title },
        { type: Router }
    ]; };
    return AppTitleService;
}());
export { AppTitleService };
if (false) {
    /** @type {?} */
    AppTitleService.prototype.sub;
    /** @type {?} */
    AppTitleService.prototype.appName;
    /**
     * @type {?}
     * @private
     */
    AppTitleService.prototype.titleService;
    /**
     * @type {?}
     * @private
     */
    AppTitleService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXRpdGxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FwcC10aXRsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQWtCLE1BQU0saUJBQWlCLENBQUM7QUFFeEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWxELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUdqRTtJQU1JLHlCQUFvQixZQUFtQixFQUFVLE1BQWM7UUFBL0QsaUJBaUNDO1FBakNtQixpQkFBWSxHQUFaLFlBQVksQ0FBTztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDM0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQzlCLE1BQU07Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssWUFBWSxhQUFhLEVBQTlCLENBQThCLEVBQUMsRUFDL0MsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUE1QixDQUE0QixFQUFDLEVBQ3RDLEdBQUc7Ozs7UUFBQyxVQUFBLEtBQUs7WUFDTCxPQUFPLEtBQUssQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JCLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO2FBQzVCO1lBRUQsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQyxFQUFDLEVBQ0YsT0FBTzs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVLEVBQUMsQ0FBQzthQUM1QixTQUFTOzs7O1FBQUMsVUFBQSxJQUFJOztnQkFDUCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7WUFFdEIsSUFBSSxLQUFLLEVBQUU7O29CQUNELFFBQVEsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUU5QyxJQUFJLFFBQVEsRUFBRTtvQkFDVixLQUFLLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3BEO2FBQ0o7WUFFRCxJQUFJLEtBQUssSUFBSSxLQUFJLENBQUMsT0FBTyxFQUFFO2dCQUN2QixLQUFLLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUM7YUFDakM7aUJBQU0sSUFBSSxLQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNyQixLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQzthQUN4QjtZQUVELElBQUksS0FBSyxFQUFFO2dCQUNQLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDWCxDQUFDOztnQkF2Q0osVUFBVTs7OztnQkFMRixLQUFLO2dCQUhMLE1BQU07O0lBaURmLHNCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0F4Q1ksZUFBZTs7O0lBRXhCLDhCQUFrQjs7SUFDbEIsa0NBQWdCOzs7OztJQUVKLHVDQUEyQjs7Ozs7SUFBRSxpQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCwgUFJJTUFSWV9PVVRMRVQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgZmxhdE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IFV0aWxpdGllcyB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcFRpdGxlU2VydmljZSB7XG5cbiAgICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgICBhcHBOYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICAgICAgICAgIGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuICAgICAgICAgICAgbWFwKF8gPT4gdGhpcy5yb3V0ZXIucm91dGVyU3RhdGUucm9vdCksXG4gICAgICAgICAgICBtYXAocm91dGUgPT4ge1xuICAgICAgICAgICAgICAgIHdoaWxlIChyb3V0ZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlID0gcm91dGUuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZsYXRNYXAocm91dGUgPT4gcm91dGUuZGF0YSkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IGRhdGEudGl0bGU7XG5cbiAgICAgICAgICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSB0aGlzLnJvdXRlci51cmwuc3BsaXQoJyMnKVsxXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZnJhZ21lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlICs9ICcgfCAnICsgVXRpbGl0aWVzLnRvVGl0bGVDYXNlKGZyYWdtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aXRsZSAmJiB0aGlzLmFwcE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgKz0gJyAtICcgKyB0aGlzLmFwcE5hbWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFwcE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSB0aGlzLmFwcE5hbWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKHRpdGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==