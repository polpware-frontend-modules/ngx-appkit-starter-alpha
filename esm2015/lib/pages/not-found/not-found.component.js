// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@ngx-translate/core";
export class NotFoundComponent {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NotFoundComponent, [{
        type: Component,
        args: [{
                selector: 'not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss'],
                animations: [fadeInOut]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQudHMiLCJsaWIvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixnQ0FBZ0M7QUFFaEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFRdEQsTUFBTSxPQUFPLGlCQUFpQjs7cUdBQWpCLGlCQUFpQjt5RUFBakIsaUJBQWlCO1FDZDlCLGlDQUNJO1FBQUEsMEJBQUk7UUFBQSx1QkFBOEU7UUFBQyxZQUFxQzs7UUFBQSxpQkFBSztRQUNqSSxpQkFBUztRQUVULDhCQUNJO1FBQUEsOEJBQ0k7UUFBQSw4QkFBNEI7UUFBQSx1QkFBd0M7UUFBQyxZQUE4Qjs7UUFBQSxpQkFBTTtRQUN6RywrQkFBMEM7UUFBQSxhQUF1Qzs7UUFBQSxpQkFBTTtRQUN2Riw0QkFBSztRQUFBLDZCQUEwQztRQUFBLHdCQUEwQjtRQUFDLGFBQXFDOztRQUFBLGlCQUFJO1FBQUEsaUJBQU07UUFDN0gsaUJBQU07UUFDVixpQkFBTTs7UUFUaUYsZUFBcUM7UUFBckMsMkVBQXFDO1FBR3ZILGVBQVk7UUFBWixzQ0FBWTtRQUU0RCxlQUE4QjtRQUE5QixxRUFBOEI7UUFDekQsZUFBdUM7UUFBdkMsb0VBQXVDO1FBQ1AsZUFBcUM7UUFBckMsNkVBQXFDO3VPREl2RyxDQUFDLFNBQVMsQ0FBQztrREFFZCxpQkFBaUI7Y0FON0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDekMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZhZGVJbk91dCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25vdC1mb3VuZCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25vdC1mb3VuZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgYW5pbWF0aW9uczogW2ZhZGVJbk91dF1cbn0pXG5leHBvcnQgY2xhc3MgTm90Rm91bmRDb21wb25lbnQge1xufVxuIiwiPGhlYWRlciBjbGFzcz1cInBhZ2VIZWFkZXJcIj5cbiAgICA8aDM+PGkgY2xhc3M9XCJmYSBmYS1leGNsYW1hdGlvbi1jaXJjbGUgZmEtbGcgcGFnZS1jYXB0aW9uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiB7eydwYWdlSGVhZGVyLk5vdEZvdW5kJyB8IHRyYW5zbGF0ZX19PC9oMz5cbjwvaGVhZGVyPlxuXG48ZGl2IFtAZmFkZUluT3V0XSBjbGFzcz1cImQtZmxleCBoLTc1XCI+XG4gICAgPGRpdiBjbGFzcz1cIm0tYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbi1jb250YWluZXJcIj48aSBjbGFzcz0nZmEgZmEtZXhjbGFtYXRpb24tY2lyY2xlJz48L2k+IHt7J25vdEZvdW5kLjQwNCcgfCB0cmFuc2xhdGV9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1tdXRlZCBlcnJvci1kZXNjcmlwdGlvblwiPnt7J25vdEZvdW5kLnBhZ2VOb3RGb3VuZCcgfCB0cmFuc2xhdGV9fTwvZGl2PlxuICAgICAgICA8ZGl2PjxhIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgcm91dGVyTGluaz1cIi9cIj48aSBjbGFzcz0nZmEgZmEtaG9tZSc+PC9pPiB7eydub3RGb3VuZC5iYWNrVG9Ib21lJyB8IHRyYW5zbGF0ZX19PC9hPjwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXX0=