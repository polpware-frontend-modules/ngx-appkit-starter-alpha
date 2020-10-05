// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@ngx-translate/core";
var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    /** @nocollapse */ NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
    /** @nocollapse */ NotFoundComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NotFoundComponent, selectors: [["not-found"]], decls: 19, vars: 13, consts: [[1, "pageHeader"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-circle", "fa-lg", "page-caption"], [1, "d-flex", "h-75"], [1, "m-auto"], [1, "icon-container"], [1, "fa", "fa-exclamation-circle"], [1, "text-muted", "error-description"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "fa", "fa-home"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0);
            i0.ɵɵelementStart(1, "h3");
            i0.ɵɵelement(2, "i", 1);
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 2);
            i0.ɵɵelementStart(6, "div", 3);
            i0.ɵɵelementStart(7, "div", 4);
            i0.ɵɵelement(8, "i", 5);
            i0.ɵɵtext(9);
            i0.ɵɵpipe(10, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 6);
            i0.ɵɵtext(12);
            i0.ɵɵpipe(13, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div");
            i0.ɵɵelementStart(15, "a", 7);
            i0.ɵɵelement(16, "i", 8);
            i0.ɵɵtext(17);
            i0.ɵɵpipe(18, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 5, "pageHeader.NotFound"), "");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("@fadeInOut", undefined);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(10, 7, "notFound.404"), "");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(13, 9, "notFound.pageNotFound"));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(18, 11, "notFound.backToHome"), "");
        } }, directives: [i1.RouterLinkWithHref], pipes: [i2.TranslatePipe], styles: [".icon-container[_ngcontent-%COMP%]{font-size:5rem}.error-description[_ngcontent-%COMP%]{font-size:1.5rem;padding-bottom:10px}"], data: { animation: [fadeInOut] } });
    return NotFoundComponent;
}());
export { NotFoundComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NotFoundComponent, [{
        type: Component,
        args: [{
                selector: 'not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss'],
                animations: [fadeInOut]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQudHMiLCJsaWIvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixnQ0FBZ0M7QUFFaEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFFdEQ7SUFBQTtLQU9DO3lHQURZLGlCQUFpQjs2RUFBakIsaUJBQWlCO1lDZDlCLGlDQUNJO1lBQUEsMEJBQUk7WUFBQSx1QkFBOEU7WUFBQyxZQUFxQzs7WUFBQSxpQkFBSztZQUNqSSxpQkFBUztZQUVULDhCQUNJO1lBQUEsOEJBQ0k7WUFBQSw4QkFBNEI7WUFBQSx1QkFBd0M7WUFBQyxZQUE4Qjs7WUFBQSxpQkFBTTtZQUN6RywrQkFBMEM7WUFBQSxhQUF1Qzs7WUFBQSxpQkFBTTtZQUN2Riw0QkFBSztZQUFBLDZCQUEwQztZQUFBLHdCQUEwQjtZQUFDLGFBQXFDOztZQUFBLGlCQUFJO1lBQUEsaUJBQU07WUFDN0gsaUJBQU07WUFDVixpQkFBTTs7WUFUaUYsZUFBcUM7WUFBckMsMkVBQXFDO1lBR3ZILGVBQVk7WUFBWixzQ0FBWTtZQUU0RCxlQUE4QjtZQUE5QixxRUFBOEI7WUFDekQsZUFBdUM7WUFBdkMsb0VBQXVDO1lBQ1AsZUFBcUM7WUFBckMsNkVBQXFDOzJPREl2RyxDQUFDLFNBQVMsQ0FBQzs0QkFaM0I7Q0FlQyxBQVBELElBT0M7U0FEWSxpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQU43QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2dCQUN6QyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUM7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFkZUluT3V0IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm90LWZvdW5kJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbm90LWZvdW5kLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MnXSxcbiAgICBhbmltYXRpb25zOiBbZmFkZUluT3V0XVxufSlcbmV4cG9ydCBjbGFzcyBOb3RGb3VuZENvbXBvbmVudCB7XG59XG4iLCI8aGVhZGVyIGNsYXNzPVwicGFnZUhlYWRlclwiPlxuICAgIDxoMz48aSBjbGFzcz1cImZhIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZSBmYS1sZyBwYWdlLWNhcHRpb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IHt7J3BhZ2VIZWFkZXIuTm90Rm91bmQnIHwgdHJhbnNsYXRlfX08L2gzPlxuPC9oZWFkZXI+XG5cbjxkaXYgW0BmYWRlSW5PdXRdIGNsYXNzPVwiZC1mbGV4IGgtNzVcIj5cbiAgICA8ZGl2IGNsYXNzPVwibS1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiPjxpIGNsYXNzPSdmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGUnPjwvaT4ge3snbm90Rm91bmQuNDA0JyB8IHRyYW5zbGF0ZX19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LW11dGVkIGVycm9yLWRlc2NyaXB0aW9uXCI+e3snbm90Rm91bmQucGFnZU5vdEZvdW5kJyB8IHRyYW5zbGF0ZX19PC9kaXY+XG4gICAgICAgIDxkaXY+PGEgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiByb3V0ZXJMaW5rPVwiL1wiPjxpIGNsYXNzPSdmYSBmYS1ob21lJz48L2k+IHt7J25vdEZvdW5kLmJhY2tUb0hvbWUnIHwgdHJhbnNsYXRlfX08L2E+PC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==