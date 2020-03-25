/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/equal-validator.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
var EqualValidator = /** @class */ (function () {
    function EqualValidator(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    EqualValidator.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var other = c.root.get(this.validateEqual);
        if (!other) {
            return null;
        }
        return this.reverse === 'true' ? this.validateReverse(c, other) : this.validateNoReverse(c, other);
    };
    /**
     * @private
     * @param {?} c
     * @param {?} other
     * @return {?}
     */
    EqualValidator.prototype.validateNoReverse = /**
     * @private
     * @param {?} c
     * @param {?} other
     * @return {?}
     */
    function (c, other) {
        return other.value === c.value ? null : { validateEqual: true };
    };
    /**
     * @private
     * @param {?} c
     * @param {?} other
     * @return {?}
     */
    EqualValidator.prototype.validateReverse = /**
     * @private
     * @param {?} c
     * @param {?} other
     * @return {?}
     */
    function (c, other) {
        if (c.value === other.value) {
            if (other.errors) {
                delete other.errors.validateEqual;
                if (Object.keys(other.errors).length == 0) {
                    other.setErrors(null);
                }
            }
        }
        else {
            other.setErrors({ validateEqual: true });
        }
        return null;
    };
    EqualValidator.decorators = [
        { type: Directive, args: [{
                    selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return EqualValidator; })), multi: true }
                    ]
                },] }
    ];
    /** @nocollapse */
    EqualValidator.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Attribute, args: ['validateEqual',] }] },
        { type: String, decorators: [{ type: Attribute, args: ['reverse',] }] }
    ]; };
    return EqualValidator;
}());
export { EqualValidator };
if (false) {
    /** @type {?} */
    EqualValidator.prototype.validateEqual;
    /** @type {?} */
    EqualValidator.prototype.reverse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9lcXVhbC12YWxpZGF0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQThCLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTNFO0lBT0ksd0JBQWdELGFBQXFCLEVBQzNCLE9BQWU7UUFEVCxrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQUMzQixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQ3pELENBQUM7Ozs7O0lBRUQsaUNBQVE7Ozs7SUFBUixVQUFTLENBQWtCOztZQUNqQixLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUU1QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7Ozs7Ozs7SUFFTywwQ0FBaUI7Ozs7OztJQUF6QixVQUEwQixDQUFrQixFQUFFLEtBQXNCO1FBQ2hFLE9BQU8sS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3BFLENBQUM7Ozs7Ozs7SUFFTyx3Q0FBZTs7Ozs7O0lBQXZCLFVBQXdCLENBQWtCLEVBQUUsS0FBc0I7UUFDOUQsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDekIsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNkLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0JBRWxDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtvQkFDdkMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDekI7YUFDSjtTQUNKO2FBQU07WUFDSCxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDNUM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOztnQkF2Q0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx3RkFBd0Y7b0JBQ2xHLFNBQVMsRUFBRTt3QkFDUCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsY0FBYyxFQUFkLENBQWMsRUFBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7cUJBQ3pGO2lCQUNKOzs7OzZDQUVpQixTQUFTLFNBQUMsZUFBZTs2Q0FDekIsU0FBUyxTQUFDLFNBQVM7O0lBZ0NyQyxxQkFBQztDQUFBLEFBeENELElBd0NDO1NBbENZLGNBQWM7OztJQUNWLHVDQUF3RDs7SUFDeEQsaUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIEF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t2YWxpZGF0ZUVxdWFsXVtmb3JtQ29udHJvbE5hbWVdLFt2YWxpZGF0ZUVxdWFsXVtmb3JtQ29udHJvbF0sW3ZhbGlkYXRlRXF1YWxdW25nTW9kZWxdJyxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFcXVhbFZhbGlkYXRvciksIG11bHRpOiB0cnVlIH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEVxdWFsVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgICBjb25zdHJ1Y3RvciggQEF0dHJpYnV0ZSgndmFsaWRhdGVFcXVhbCcpIHB1YmxpYyB2YWxpZGF0ZUVxdWFsOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgIEBBdHRyaWJ1dGUoJ3JldmVyc2UnKSBwdWJsaWMgcmV2ZXJzZTogc3RyaW5nKSB7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgICAgIGNvbnN0IG90aGVyID0gYy5yb290LmdldCh0aGlzLnZhbGlkYXRlRXF1YWwpO1xuXG4gICAgICAgIGlmICghb3RoZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmV2ZXJzZSA9PT0gJ3RydWUnID8gdGhpcy52YWxpZGF0ZVJldmVyc2UoYywgb3RoZXIpIDogdGhpcy52YWxpZGF0ZU5vUmV2ZXJzZShjLCBvdGhlcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZU5vUmV2ZXJzZShjOiBBYnN0cmFjdENvbnRyb2wsIG90aGVyOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcbiAgICAgICAgcmV0dXJuIG90aGVyLnZhbHVlID09PSBjLnZhbHVlID8gbnVsbCA6IHsgdmFsaWRhdGVFcXVhbDogdHJ1ZSB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgdmFsaWRhdGVSZXZlcnNlKGM6IEFic3RyYWN0Q29udHJvbCwgb3RoZXI6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgICAgICBpZiAoYy52YWx1ZSA9PT0gb3RoZXIudmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChvdGhlci5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgb3RoZXIuZXJyb3JzLnZhbGlkYXRlRXF1YWw7XG5cbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMob3RoZXIuZXJyb3JzKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBvdGhlci5zZXRFcnJvcnMobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3RoZXIuc2V0RXJyb3JzKHsgdmFsaWRhdGVFcXVhbDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiJdfQ==