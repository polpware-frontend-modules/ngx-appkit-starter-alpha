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
var AppTitleService = /** @class */ (function () {
    function AppTitleService(titleService, router) {
        var _this = this;
        this.titleService = titleService;
        this.router = router;
        this.sub = this.router.events.pipe(filter(function (event) { return event instanceof NavigationEnd; }), map(function (_) { return _this.router.routerState.root; }), map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), flatMap(function (route) { return route.data; }))
            .subscribe(function (data) {
            var title = data.title;
            if (title) {
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
        });
    }
    /** @nocollapse */ AppTitleService.ɵfac = function AppTitleService_Factory(t) { return new (t || AppTitleService)(i0.ɵɵinject(i1.Title), i0.ɵɵinject(i2.Router)); };
    /** @nocollapse */ AppTitleService.ɵprov = i0.ɵɵdefineInjectable({ token: AppTitleService, factory: AppTitleService.ɵfac });
    return AppTitleService;
}());
export { AppTitleService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppTitleService, [{
        type: Injectable
    }], function () { return [{ type: i1.Title }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXRpdGxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2FwcC10aXRsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQztBQUNoQyw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLGdDQUFnQztBQUVoQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBVSxhQUFhLEVBQWtCLE1BQU0saUJBQWlCLENBQUM7QUFFeEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBR2pFO0lBTUkseUJBQW9CLFlBQW1CLEVBQVUsTUFBYztRQUEvRCxpQkFpQ0M7UUFqQ21CLGlCQUFZLEdBQVosWUFBWSxDQUFPO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUMzRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDOUIsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxZQUFZLGFBQWEsRUFBOUIsQ0FBOEIsQ0FBQyxFQUMvQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQTVCLENBQTRCLENBQUMsRUFDdEMsR0FBRyxDQUFDLFVBQUEsS0FBSztZQUNMLE9BQU8sS0FBSyxDQUFDLFVBQVUsRUFBRTtnQkFDckIsS0FBSyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7YUFDNUI7WUFFRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUMsRUFDRixPQUFPLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsSUFBSSxFQUFWLENBQVUsQ0FBQyxDQUFDO2FBQzVCLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDWCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBRXZCLElBQUksS0FBSyxFQUFFO2dCQUNQLElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFL0MsSUFBSSxRQUFRLEVBQUU7b0JBQ1YsS0FBSyxJQUFJLEtBQUssR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUNwRDthQUNKO1lBRUQsSUFBSSxLQUFLLElBQUksS0FBSSxDQUFDLE9BQU8sRUFBRTtnQkFDdkIsS0FBSyxJQUFJLEtBQUssR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDO2FBQ2pDO2lCQUFNLElBQUksS0FBSSxDQUFDLE9BQU8sRUFBRTtnQkFDckIsS0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUM7YUFDeEI7WUFFRCxJQUFJLEtBQUssRUFBRTtnQkFDUCxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztxR0F0Q1EsZUFBZTs4RUFBZixlQUFlLFdBQWYsZUFBZTswQkFmNUI7Q0F1REMsQUF6Q0QsSUF5Q0M7U0F4Q1ksZUFBZTtrREFBZixlQUFlO2NBRDNCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCwgUFJJTUFSWV9PVVRMRVQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgZmxhdE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IFV0aWxpdGllcyB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcFRpdGxlU2VydmljZSB7XG5cbiAgICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgICBhcHBOYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpdGxlU2VydmljZTogVGl0bGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICAgICAgICAgIGZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuICAgICAgICAgICAgbWFwKF8gPT4gdGhpcy5yb3V0ZXIucm91dGVyU3RhdGUucm9vdCksXG4gICAgICAgICAgICBtYXAocm91dGUgPT4ge1xuICAgICAgICAgICAgICAgIHdoaWxlIChyb3V0ZS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlID0gcm91dGUuZmlyc3RDaGlsZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGZsYXRNYXAocm91dGUgPT4gcm91dGUuZGF0YSkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IGRhdGEudGl0bGU7XG5cbiAgICAgICAgICAgICAgICBpZiAodGl0bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhZ21lbnQgPSB0aGlzLnJvdXRlci51cmwuc3BsaXQoJyMnKVsxXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZnJhZ21lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlICs9ICcgfCAnICsgVXRpbGl0aWVzLnRvVGl0bGVDYXNlKGZyYWdtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aXRsZSAmJiB0aGlzLmFwcE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgKz0gJyAtICcgKyB0aGlzLmFwcE5hbWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFwcE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSB0aGlzLmFwcE5hbWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGVTZXJ2aWNlLnNldFRpdGxlKHRpdGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==