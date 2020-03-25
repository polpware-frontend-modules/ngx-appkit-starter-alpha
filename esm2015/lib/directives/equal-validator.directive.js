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
export class EqualValidator {
    /**
     * @param {?} validateEqual
     * @param {?} reverse
     */
    constructor(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        /** @type {?} */
        const other = c.root.get(this.validateEqual);
        if (!other) {
            return null;
        }
        return this.reverse === 'true' ? this.validateReverse(c, other) : this.validateNoReverse(c, other);
    }
    /**
     * @private
     * @param {?} c
     * @param {?} other
     * @return {?}
     */
    validateNoReverse(c, other) {
        return other.value === c.value ? null : { validateEqual: true };
    }
    /**
     * @private
     * @param {?} c
     * @param {?} other
     * @return {?}
     */
    validateReverse(c, other) {
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
    }
}
EqualValidator.decorators = [
    { type: Directive, args: [{
                selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => EqualValidator)), multi: true }
                ]
            },] }
];
/** @nocollapse */
EqualValidator.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['validateEqual',] }] },
    { type: String, decorators: [{ type: Attribute, args: ['reverse',] }] }
];
if (false) {
    /** @type {?} */
    EqualValidator.prototype.validateEqual;
    /** @type {?} */
    EqualValidator.prototype.reverse;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9lcXVhbC12YWxpZGF0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQThCLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBVTNFLE1BQU0sT0FBTyxjQUFjOzs7OztJQUN2QixZQUFnRCxhQUFxQixFQUMzQixPQUFlO1FBRFQsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUN6RCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxDQUFrQjs7Y0FDakIsS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFFNUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2RyxDQUFDOzs7Ozs7O0lBRU8saUJBQWlCLENBQUMsQ0FBa0IsRUFBRSxLQUFzQjtRQUNoRSxPQUFPLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNwRSxDQUFDOzs7Ozs7O0lBRU8sZUFBZSxDQUFDLENBQWtCLEVBQUUsS0FBc0I7UUFDOUQsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDekIsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNkLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0JBRWxDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtvQkFDdkMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDekI7YUFDSjtTQUNKO2FBQU07WUFDSCxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDNUM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzs7WUF2Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx3RkFBd0Y7Z0JBQ2xHLFNBQVMsRUFBRTtvQkFDUCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLEVBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2lCQUN6RjthQUNKOzs7O3lDQUVpQixTQUFTLFNBQUMsZUFBZTt5Q0FDekIsU0FBUyxTQUFDLFNBQVM7Ozs7SUFEcEIsdUNBQXdEOztJQUN4RCxpQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3IsIEFic3RyYWN0Q29udHJvbCwgTkdfVkFMSURBVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuXG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3ZhbGlkYXRlRXF1YWxdW2Zvcm1Db250cm9sTmFtZV0sW3ZhbGlkYXRlRXF1YWxdW2Zvcm1Db250cm9sXSxbdmFsaWRhdGVFcXVhbF1bbmdNb2RlbF0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEVxdWFsVmFsaWRhdG9yKSwgbXVsdGk6IHRydWUgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRXF1YWxWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCBAQXR0cmlidXRlKCd2YWxpZGF0ZUVxdWFsJykgcHVibGljIHZhbGlkYXRlRXF1YWw6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgQEF0dHJpYnV0ZSgncmV2ZXJzZScpIHB1YmxpYyByZXZlcnNlOiBzdHJpbmcpIHtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcbiAgICAgICAgY29uc3Qgb3RoZXIgPSBjLnJvb3QuZ2V0KHRoaXMudmFsaWRhdGVFcXVhbCk7XG5cbiAgICAgICAgaWYgKCFvdGhlcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXZlcnNlID09PSAndHJ1ZScgPyB0aGlzLnZhbGlkYXRlUmV2ZXJzZShjLCBvdGhlcikgOiB0aGlzLnZhbGlkYXRlTm9SZXZlcnNlKGMsIG90aGVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHZhbGlkYXRlTm9SZXZlcnNlKGM6IEFic3RyYWN0Q29udHJvbCwgb3RoZXI6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgICAgICByZXR1cm4gb3RoZXIudmFsdWUgPT09IGMudmFsdWUgPyBudWxsIDogeyB2YWxpZGF0ZUVxdWFsOiB0cnVlIH07XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZVJldmVyc2UoYzogQWJzdHJhY3RDb250cm9sLCBvdGhlcjogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgICAgIGlmIChjLnZhbHVlID09PSBvdGhlci52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKG90aGVyLmVycm9ycykge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvdGhlci5lcnJvcnMudmFsaWRhdGVFcXVhbDtcblxuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhvdGhlci5lcnJvcnMpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyLnNldEVycm9ycyhudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdGhlci5zZXRFcnJvcnMoeyB2YWxpZGF0ZUVxdWFsOiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuIl19