// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(elementRef) {
        this.elementRef = elementRef;
    }
    AutofocusDirective.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.elementRef.nativeElement.focus(); }, 500);
    };
    /** @nocollapse */ AutofocusDirective.ɵfac = function AutofocusDirective_Factory(t) { return new (t || AutofocusDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ AutofocusDirective.ɵdir = i0.ɵɵdefineDirective({ type: AutofocusDirective, selectors: [["", "autofocus", ""]] });
    return AutofocusDirective;
}());
export { AutofocusDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AutofocusDirective, [{
        type: Directive,
        args: [{
                selector: '[autofocus]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2ZvY3VzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9hdXRvZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQztBQUNoQyw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLGdDQUFnQztBQUVoQyxPQUFPLEVBQUUsU0FBUyxFQUFzQixNQUFNLGVBQWUsQ0FBQzs7QUFHOUQ7SUFJSSw0QkFBbUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFJLENBQUM7SUFFOUMscUNBQVEsR0FBUjtRQUFBLGlCQUVDO1FBREcsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBckMsQ0FBcUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNqRSxDQUFDOzJHQUxRLGtCQUFrQjs4RUFBbEIsa0JBQWtCOzZCQVgvQjtDQWlCQyxBQVRELElBU0M7U0FOWSxrQkFBa0I7a0RBQWxCLGtCQUFrQjtjQUg5QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGFBQWE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbYXV0b2ZvY3VzXSdcbn0pXG5leHBvcnQgY2xhc3MgQXV0b2ZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpLCA1MDApO1xuICAgIH1cbn1cbiJdfQ==