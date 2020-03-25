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
var LastElementDirective = /** @class */ (function () {
    function LastElementDirective() {
        this.lastFunction = new EventEmitter();
    }
    Object.defineProperty(LastElementDirective.prototype, "lastElement", {
        set: /**
         * @param {?} isLastElement
         * @return {?}
         */
        function (isLastElement) {
            var _this = this;
            if (isLastElement) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.lastFunction.emit();
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    LastElementDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[lastElement]'
                },] }
    ];
    LastElementDirective.propDecorators = {
        lastElement: [{ type: Input }],
        lastFunction: [{ type: Output }]
    };
    return LastElementDirective;
}());
export { LastElementDirective };
if (false) {
    /** @type {?} */
    LastElementDirective.prototype.lastFunction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFzdC1lbGVtZW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9sYXN0LWVsZW1lbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkU7SUFBQTtRQWVJLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBWkcsc0JBQ0ksNkNBQVc7Ozs7O1FBRGYsVUFDZ0IsYUFBc0I7WUFEdEMsaUJBUUM7WUFMRyxJQUFJLGFBQWEsRUFBRTtnQkFDZixVQUFVOzs7Z0JBQUM7b0JBQ1AsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQyxFQUFDLENBQUM7YUFDTjtRQUNMLENBQUM7OztPQUFBOztnQkFaSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7aUJBQzVCOzs7OEJBRUksS0FBSzsrQkFVTCxNQUFNOztJQUVYLDJCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FiWSxvQkFBb0I7OztJQVc3Qiw0Q0FDa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbbGFzdEVsZW1lbnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBMYXN0RWxlbWVudERpcmVjdGl2ZSB7XG4gICAgQElucHV0KClcbiAgICBzZXQgbGFzdEVsZW1lbnQoaXNMYXN0RWxlbWVudDogYm9vbGVhbikge1xuXG4gICAgICAgIGlmIChpc0xhc3RFbGVtZW50KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RGdW5jdGlvbi5lbWl0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBPdXRwdXQoKVxuICAgIGxhc3RGdW5jdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbn1cbiJdfQ==