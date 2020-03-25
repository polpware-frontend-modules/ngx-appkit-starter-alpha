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
export class AppTitleService {
    /**
     * @param {?} titleService
     * @param {?} router
     */
    constructor(titleService, router) {
        this.titleService = titleService;
        this.router = router;
        this.sub = this.router.events.pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof NavigationEnd)), map((/**
         * @param {?} _
         * @return {?}
         */
        _ => this.router.routerState.root)), map((/**
         * @param {?} route
         * @return {?}
         */
        route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })), flatMap((/**
         * @param {?} route
         * @return {?}
         */
        route => route.data)))
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            /** @type {?} */
            let title = data.title;
            if (title) {
                /** @type {?} */
                const fragment = this.router.url.split('#')[1];
                if (fragment) {
                    title += ' | ' + Utilities.toTitleCase(fragment);
                }
            }
            if (title && this.appName) {
                title += ' - ' + this.appName;
            }
            else if (this.appName) {
                title = this.appName;
            }
            if (title) {
                this.titleService.setTitle(title);
            }
        }));
    }
}
AppTitleService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AppTitleService.ctorParameters = () => [
    { type: Title },
    { type: Router }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXRpdGxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FwcC10aXRsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQWtCLE1BQU0saUJBQWlCLENBQUM7QUFFeEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWxELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUlqRSxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFLeEIsWUFBb0IsWUFBbUIsRUFBVSxNQUFjO1FBQTNDLGlCQUFZLEdBQVosWUFBWSxDQUFPO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUMzRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDOUIsTUFBTTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxZQUFZLGFBQWEsRUFBQyxFQUMvQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUMsRUFDdEMsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1IsT0FBTyxLQUFLLENBQUMsVUFBVSxFQUFFO2dCQUNyQixLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQzthQUM1QjtZQUVELE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUMsRUFBQyxFQUNGLE9BQU87Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsQ0FBQzthQUM1QixTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7O2dCQUNWLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSztZQUV0QixJQUFJLEtBQUssRUFBRTs7c0JBQ0QsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTlDLElBQUksUUFBUSxFQUFFO29CQUNWLEtBQUssSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDcEQ7YUFDSjtZQUVELElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3ZCLEtBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNqQztpQkFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3JCLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3hCO1lBRUQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDckM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNYLENBQUM7OztZQXZDSixVQUFVOzs7O1lBTEYsS0FBSztZQUhMLE1BQU07Ozs7SUFXWCw4QkFBa0I7O0lBQ2xCLGtDQUFnQjs7Ozs7SUFFSix1Q0FBMkI7Ozs7O0lBQUUsaUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQsIFBSSU1BUllfT1VUTEVUIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIGZsYXRNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBVdGlsaXRpZXMgfSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1jb250cmFjdHMtYWxwaGEnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcHBUaXRsZVNlcnZpY2Uge1xuXG4gICAgc3ViOiBTdWJzY3JpcHRpb247XG4gICAgYXBwTmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0aXRsZVNlcnZpY2U6IFRpdGxlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZXIuZXZlbnRzLnBpcGUoXG4gICAgICAgICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcbiAgICAgICAgICAgIG1hcChfID0+IHRoaXMucm91dGVyLnJvdXRlclN0YXRlLnJvb3QpLFxuICAgICAgICAgICAgbWFwKHJvdXRlID0+IHtcbiAgICAgICAgICAgICAgICB3aGlsZSAocm91dGUuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSA9IHJvdXRlLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBmbGF0TWFwKHJvdXRlID0+IHJvdXRlLmRhdGEpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBkYXRhLnRpdGxlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYWdtZW50ID0gdGhpcy5yb3V0ZXIudXJsLnNwbGl0KCcjJylbMV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyYWdtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSArPSAnIHwgJyArIFV0aWxpdGllcy50b1RpdGxlQ2FzZShmcmFnbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGl0bGUgJiYgdGhpcy5hcHBOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlICs9ICcgLSAnICsgdGhpcy5hcHBOYW1lO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hcHBOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0gdGhpcy5hcHBOYW1lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpdGxlU2VydmljZS5zZXRUaXRsZSh0aXRsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=