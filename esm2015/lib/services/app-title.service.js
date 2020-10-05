// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Injectable } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter, map, flatMap } from 'rxjs/operators';
import { Utilities } from '@polpware/ngx-appkit-contracts-alpha';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/router";
export class AppTitleService {
    constructor(titleService, router) {
        this.titleService = titleService;
        this.router = router;
        this.sub = this.router.events.pipe(filter(event => event instanceof NavigationEnd), map(_ => this.router.routerState.root), map(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), flatMap(route => route.data))
            .subscribe(data => {
            let title = data.title;
            if (title) {
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
        });
    }
}
/** @nocollapse */ AppTitleService.ɵfac = function AppTitleService_Factory(t) { return new (t || AppTitleService)(i0.ɵɵinject(i1.Title), i0.ɵɵinject(i2.Router)); };
/** @nocollapse */ AppTitleService.ɵprov = i0.ɵɵdefineInjectable({ token: AppTitleService, factory: AppTitleService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppTitleService, [{
        type: Injectable
    }], function () { return [{ type: i1.Title }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXRpdGxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FwcC10aXRsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQztBQUNoQyw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLGdDQUFnQztBQUVoQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBVSxhQUFhLEVBQWtCLE1BQU0saUJBQWlCLENBQUM7QUFFeEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBSWpFLE1BQU0sT0FBTyxlQUFlO0lBS3hCLFlBQW9CLFlBQW1CLEVBQVUsTUFBYztRQUEzQyxpQkFBWSxHQUFaLFlBQVksQ0FBTztRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDM0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQzlCLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssWUFBWSxhQUFhLENBQUMsRUFDL0MsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQ3RDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNSLE9BQU8sS0FBSyxDQUFDLFVBQVUsRUFBRTtnQkFDckIsS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7YUFDNUI7WUFFRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUMsRUFDRixPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUIsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUV2QixJQUFJLEtBQUssRUFBRTtnQkFDUCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRS9DLElBQUksUUFBUSxFQUFFO29CQUNWLEtBQUssSUFBSSxLQUFLLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDcEQ7YUFDSjtZQUVELElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3ZCLEtBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNqQztpQkFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3JCLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3hCO1lBRUQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDckM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7O2lHQXRDUSxlQUFlOzBFQUFmLGVBQWUsV0FBZixlQUFlO2tEQUFmLGVBQWU7Y0FEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uRW5kLCBQUklNQVJZX09VVExFVCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBmbGF0TWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgVXRpbGl0aWVzIH0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwVGl0bGVTZXJ2aWNlIHtcblxuICAgIHN1YjogU3Vic2NyaXB0aW9uO1xuICAgIGFwcE5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGl0bGVTZXJ2aWNlOiBUaXRsZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGVyLmV2ZW50cy5waXBlKFxuICAgICAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG4gICAgICAgICAgICBtYXAoXyA9PiB0aGlzLnJvdXRlci5yb3V0ZXJTdGF0ZS5yb290KSxcbiAgICAgICAgICAgIG1hcChyb3V0ZSA9PiB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHJvdXRlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgPSByb3V0ZS5maXJzdENoaWxkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZmxhdE1hcChyb3V0ZSA9PiByb3V0ZS5kYXRhKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gZGF0YS50aXRsZTtcblxuICAgICAgICAgICAgICAgIGlmICh0aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmFnbWVudCA9IHRoaXMucm91dGVyLnVybC5zcGxpdCgnIycpWzFdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmcmFnbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgKz0gJyB8ICcgKyBVdGlsaXRpZXMudG9UaXRsZUNhc2UoZnJhZ21lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlICYmIHRoaXMuYXBwTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZSArPSAnIC0gJyArIHRoaXMuYXBwTmFtZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYXBwTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IHRoaXMuYXBwTmFtZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aXRsZVNlcnZpY2Uuc2V0VGl0bGUodGl0bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19