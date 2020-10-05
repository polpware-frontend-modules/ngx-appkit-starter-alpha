// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class LastElementDirective {
    constructor() {
        this.lastFunction = new EventEmitter();
    }
    set lastElement(isLastElement) {
        if (isLastElement) {
            setTimeout(() => {
                this.lastFunction.emit();
            });
        }
    }
}
/** @nocollapse */ LastElementDirective.ɵfac = function LastElementDirective_Factory(t) { return new (t || LastElementDirective)(); };
/** @nocollapse */ LastElementDirective.ɵdir = i0.ɵɵdefineDirective({ type: LastElementDirective, selectors: [["", "lastElement", ""]], inputs: { lastElement: "lastElement" }, outputs: { lastFunction: "lastFunction" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LastElementDirective, [{
        type: Directive,
        args: [{
                selector: '[lastElement]'
            }]
    }], null, { lastElement: [{
            type: Input
        }], lastFunction: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdC1lbGVtZW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9sYXN0LWVsZW1lbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQztBQUNoQyw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLGdDQUFnQztBQUVoQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU12RSxNQUFNLE9BQU8sb0JBQW9CO0lBSGpDO1FBZUksaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0tBQ3JDO0lBWkcsSUFDSSxXQUFXLENBQUMsYUFBc0I7UUFFbEMsSUFBSSxhQUFhLEVBQUU7WUFDZixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7OzJHQVRRLG9CQUFvQjs0RUFBcEIsb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FIaEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxlQUFlO2FBQzVCOztrQkFFSSxLQUFLOztrQkFVTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2xhc3RFbGVtZW50XSdcbn0pXG5leHBvcnQgY2xhc3MgTGFzdEVsZW1lbnREaXJlY3RpdmUge1xuICAgIEBJbnB1dCgpXG4gICAgc2V0IGxhc3RFbGVtZW50KGlzTGFzdEVsZW1lbnQ6IGJvb2xlYW4pIHtcblxuICAgICAgICBpZiAoaXNMYXN0RWxlbWVudCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0RnVuY3Rpb24uZW1pdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBsYXN0RnVuY3Rpb24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG59XG4iXX0=