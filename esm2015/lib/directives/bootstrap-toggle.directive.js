/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/bootstrap-toggle.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
export class BootstrapToggleDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.ngModelChange = new EventEmitter();
        this.checkedSubscription = fromEvent($(this.el.nativeElement), 'change')
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => this.ngModelChange.emit(e.target.checked)));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ngModel(value) {
        this.toggle(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initialize();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy();
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    initialize(options) {
        $(this.el.nativeElement).bootstrapToggle(options);
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.checkedSubscription) {
            this.checkedSubscription.unsubscribe();
        }
        $(this.el.nativeElement).bootstrapToggle('destroy');
    }
    /**
     * @return {?}
     */
    toggleOn() {
        $(this.el.nativeElement).bootstrapToggle('on');
    }
    /**
     * @return {?}
     */
    toggleOff() {
        $(this.el.nativeElement).bootstrapToggle('off');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    toggle(value) {
        if (value == null) {
            $(this.el.nativeElement).bootstrapToggle('toggle');
        }
        else {
            $(this.el.nativeElement).prop('checked', value).change();
        }
    }
    /**
     * @return {?}
     */
    enable() {
        $(this.el.nativeElement).bootstrapToggle('enable');
    }
    /**
     * @return {?}
     */
    disable() {
        $(this.el.nativeElement).bootstrapToggle('disable');
    }
}
BootstrapToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bootstrapToggle]',
                exportAs: 'bootstrap-toggle'
            },] }
];
/** @nocollapse */
BootstrapToggleDirective.ctorParameters = () => [
    { type: ElementRef }
];
BootstrapToggleDirective.propDecorators = {
    ngModel: [{ type: Input }],
    ngModelChange: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    BootstrapToggleDirective.prototype.checkedSubscription;
    /** @type {?} */
    BootstrapToggleDirective.prototype.ngModelChange;
    /**
     * @type {?}
     * @private
     */
    BootstrapToggleDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvYm9vdHN0cmFwLXRvZ2dsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBNEIsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBUzNELE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFhakMsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFIbEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSS9CLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsUUFBUSxDQUFDO2FBQ25FLFNBQVM7Ozs7UUFBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDO0lBQzFFLENBQUM7Ozs7O0lBWkQsSUFDSSxPQUFPLENBQUMsS0FBSztRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7OztJQVlELFFBQVE7UUFDSixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFHRCxVQUFVLENBQUMsT0FBYTtRQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUVELE9BQU87UUFDSCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUMxQixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDMUM7UUFFRCxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELFFBQVE7UUFDSixDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7OztJQUVELFNBQVM7UUFDTCxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBZTtRQUNsQixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDZixDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEQ7YUFBTTtZQUNILENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDNUQ7SUFDTCxDQUFDOzs7O0lBRUQsTUFBTTtRQUNGLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsT0FBTztRQUNILENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7WUFsRUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSxrQkFBa0I7YUFDL0I7Ozs7WUFUbUIsVUFBVTs7O3NCQWN6QixLQUFLOzRCQUtMLE1BQU07Ozs7Ozs7SUFQUCx1REFBMEM7O0lBTzFDLGlEQUNtQzs7Ozs7SUFHdkIsc0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tib290c3RyYXBUb2dnbGVdJyxcbiAgICBleHBvcnRBczogJ2Jvb3RzdHJhcC10b2dnbGUnXG59KVxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcFRvZ2dsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHByaXZhdGUgY2hlY2tlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgbmdNb2RlbCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgbmdNb2RlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmNoZWNrZWRTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQoJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLCAnY2hhbmdlJylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IGFueSkgPT4gdGhpcy5uZ01vZGVsQ2hhbmdlLmVtaXQoZS50YXJnZXQuY2hlY2tlZCkpO1xuICAgIH1cblxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG5cblxuICAgIGluaXRpYWxpemUob3B0aW9ucz86IGFueSkge1xuICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuYm9vdHN0cmFwVG9nZ2xlKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWRTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmJvb3RzdHJhcFRvZ2dsZSgnZGVzdHJveScpO1xuICAgIH1cblxuICAgIHRvZ2dsZU9uKCkge1xuICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuYm9vdHN0cmFwVG9nZ2xlKCdvbicpO1xuICAgIH1cblxuICAgIHRvZ2dsZU9mZigpIHtcbiAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmJvb3RzdHJhcFRvZ2dsZSgnb2ZmJyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlKHZhbHVlPzogYm9vbGVhbikge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmJvb3RzdHJhcFRvZ2dsZSgndG9nZ2xlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkucHJvcCgnY2hlY2tlZCcsIHZhbHVlKS5jaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmJvb3RzdHJhcFRvZ2dsZSgnZW5hYmxlJyk7XG4gICAgfVxuXG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmJvb3RzdHJhcFRvZ2dsZSgnZGlzYWJsZScpO1xuICAgIH1cbn1cbiJdfQ==