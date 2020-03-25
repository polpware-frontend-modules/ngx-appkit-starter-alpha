/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/last-element.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Directive, Input, Output, EventEmitter } from '@angular/core';
export class LastElementDirective {
    constructor() {
        this.lastFunction = new EventEmitter();
    }
    /**
     * @param {?} isLastElement
     * @return {?}
     */
    set lastElement(isLastElement) {
        if (isLastElement) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.lastFunction.emit();
            }));
        }
    }
}
LastElementDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lastElement]'
            },] }
];
LastElementDirective.propDecorators = {
    lastElement: [{ type: Input }],
    lastFunction: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    LastElementDirective.prototype.lastFunction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdC1lbGVtZW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9sYXN0LWVsZW1lbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNdkUsTUFBTSxPQUFPLG9CQUFvQjtJQUhqQztRQWVJLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUN0QyxDQUFDOzs7OztJQVpHLElBQ0ksV0FBVyxDQUFDLGFBQXNCO1FBRWxDLElBQUksYUFBYSxFQUFFO1lBQ2YsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDN0IsQ0FBQyxFQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7OztZQVpKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZUFBZTthQUM1Qjs7OzBCQUVJLEtBQUs7MkJBVUwsTUFBTTs7OztJQUFQLDRDQUNrQyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tsYXN0RWxlbWVudF0nXG59KVxuZXhwb3J0IGNsYXNzIExhc3RFbGVtZW50RGlyZWN0aXZlIHtcbiAgICBASW5wdXQoKVxuICAgIHNldCBsYXN0RWxlbWVudChpc0xhc3RFbGVtZW50OiBib29sZWFuKSB7XG5cbiAgICAgICAgaWYgKGlzTGFzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdEZ1bmN0aW9uLmVtaXQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgbGFzdEZ1bmN0aW9uID0gbmV3IEV2ZW50RW1pdHRlcigpO1xufVxuIl19