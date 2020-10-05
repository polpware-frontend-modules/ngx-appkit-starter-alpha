// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class AutofocusDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        setTimeout(() => this.elementRef.nativeElement.focus(), 500);
    }
}
/** @nocollapse */ AutofocusDirective.ɵfac = function AutofocusDirective_Factory(t) { return new (t || AutofocusDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
/** @nocollapse */ AutofocusDirective.ɵdir = i0.ɵɵdefineDirective({ type: AutofocusDirective, selectors: [["", "autofocus", ""]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AutofocusDirective, [{
        type: Directive,
        args: [{
                selector: '[autofocus]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2ZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9hdXRvZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQztBQUNoQyw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLGdDQUFnQztBQUVoQyxPQUFPLEVBQUUsU0FBUyxFQUFzQixNQUFNLGVBQWUsQ0FBQzs7QUFNOUQsTUFBTSxPQUFPLGtCQUFrQjtJQUMzQixZQUFtQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUksQ0FBQztJQUU5QyxRQUFRO1FBQ0osVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7O3VHQUxRLGtCQUFrQjswRUFBbEIsa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FIOUIsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxhQUFhO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2F1dG9mb2N1c10nXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9mb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKSwgNTAwKTtcbiAgICB9XG59XG4iXX0=