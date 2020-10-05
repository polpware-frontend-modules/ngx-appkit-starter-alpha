// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import * as i0 from "@angular/core";
export class EqualValidator {
    constructor(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    validate(c) {
        const other = c.root.get(this.validateEqual);
        if (!other) {
            return null;
        }
        return this.reverse === 'true' ? this.validateReverse(c, other) : this.validateNoReverse(c, other);
    }
    validateNoReverse(c, other) {
        return other.value === c.value ? null : { validateEqual: true };
    }
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
/** @nocollapse */ EqualValidator.ɵfac = function EqualValidator_Factory(t) { return new (t || EqualValidator)(i0.ɵɵinjectAttribute('validateEqual'), i0.ɵɵinjectAttribute('reverse')); };
/** @nocollapse */ EqualValidator.ɵdir = i0.ɵɵdefineDirective({ type: EqualValidator, selectors: [["", "validateEqual", "", "formControlName", ""], ["", "validateEqual", "", "formControl", ""], ["", "validateEqual", "", "ngModel", ""]], features: [i0.ɵɵProvidersFeature([
            { provide: NG_VALIDATORS, useExisting: forwardRef((() => EqualValidator)), multi: true }
        ])] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EqualValidator, [{
        type: Directive,
        args: [{
                selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef((() => EqualValidator)), multi: true }
                ]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Attribute,
                args: ['validateEqual']
            }] }, { type: undefined, decorators: [{
                type: Attribute,
                args: ['reverse']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9lcXVhbC12YWxpZGF0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQztBQUNoQyw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLGdDQUFnQztBQUVoQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUE4QixhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFVM0UsTUFBTSxPQUFPLGNBQWM7SUFDdkIsWUFBZ0QsYUFBcUIsRUFDM0IsT0FBZTtRQURULGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBQzNCLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFDekQsQ0FBQztJQUVELFFBQVEsQ0FBQyxDQUFrQjtRQUN2QixNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBRU8saUJBQWlCLENBQUMsQ0FBa0IsRUFBRSxLQUFzQjtRQUNoRSxPQUFPLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUNwRSxDQUFDO0lBRU8sZUFBZSxDQUFDLENBQWtCLEVBQUUsS0FBc0I7UUFDOUQsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDekIsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNkLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0JBRWxDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtvQkFDdkMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDekI7YUFDSjtTQUNKO2FBQU07WUFDSCxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDNUM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDOzsrRkFqQ1EsY0FBYyx1QkFDQyxlQUFlLHdCQUNmLFNBQVM7c0VBRnhCLGNBQWMsMExBSlo7WUFDUCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLEVBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1NBQ3pGO2tEQUVRLGNBQWM7Y0FOMUIsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSx3RkFBd0Y7Z0JBQ2xHLFNBQVMsRUFBRTtvQkFDUCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLEVBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2lCQUN6RjthQUNKOztzQkFFaUIsU0FBUzt1QkFBQyxlQUFlOztzQkFDekIsU0FBUzt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIEF0dHJpYnV0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t2YWxpZGF0ZUVxdWFsXVtmb3JtQ29udHJvbE5hbWVdLFt2YWxpZGF0ZUVxdWFsXVtmb3JtQ29udHJvbF0sW3ZhbGlkYXRlRXF1YWxdW25nTW9kZWxdJyxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBOR19WQUxJREFUT1JTLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFcXVhbFZhbGlkYXRvciksIG11bHRpOiB0cnVlIH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEVxdWFsVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgICBjb25zdHJ1Y3RvciggQEF0dHJpYnV0ZSgndmFsaWRhdGVFcXVhbCcpIHB1YmxpYyB2YWxpZGF0ZUVxdWFsOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgIEBBdHRyaWJ1dGUoJ3JldmVyc2UnKSBwdWJsaWMgcmV2ZXJzZTogc3RyaW5nKSB7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgICAgIGNvbnN0IG90aGVyID0gYy5yb290LmdldCh0aGlzLnZhbGlkYXRlRXF1YWwpO1xuXG4gICAgICAgIGlmICghb3RoZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmV2ZXJzZSA9PT0gJ3RydWUnID8gdGhpcy52YWxpZGF0ZVJldmVyc2UoYywgb3RoZXIpIDogdGhpcy52YWxpZGF0ZU5vUmV2ZXJzZShjLCBvdGhlcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZU5vUmV2ZXJzZShjOiBBYnN0cmFjdENvbnRyb2wsIG90aGVyOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcbiAgICAgICAgcmV0dXJuIG90aGVyLnZhbHVlID09PSBjLnZhbHVlID8gbnVsbCA6IHsgdmFsaWRhdGVFcXVhbDogdHJ1ZSB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgdmFsaWRhdGVSZXZlcnNlKGM6IEFic3RyYWN0Q29udHJvbCwgb3RoZXI6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgICAgICBpZiAoYy52YWx1ZSA9PT0gb3RoZXIudmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChvdGhlci5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgb3RoZXIuZXJyb3JzLnZhbGlkYXRlRXF1YWw7XG5cbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMob3RoZXIuZXJyb3JzKS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBvdGhlci5zZXRFcnJvcnMobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3RoZXIuc2V0RXJyb3JzKHsgdmFsaWRhdGVFcXVhbDogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiJdfQ==