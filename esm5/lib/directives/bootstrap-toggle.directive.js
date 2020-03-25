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
var BootstrapToggleDirective = /** @class */ (function () {
    function BootstrapToggleDirective(el) {
        var _this = this;
        this.el = el;
        this.ngModelChange = new EventEmitter();
        this.checkedSubscription = fromEvent($(this.el.nativeElement), 'change')
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.ngModelChange.emit(e.target.checked); }));
    }
    Object.defineProperty(BootstrapToggleDirective.prototype, "ngModel", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.toggle(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BootstrapToggleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initialize();
    };
    /**
     * @return {?}
     */
    BootstrapToggleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy();
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    BootstrapToggleDirective.prototype.initialize = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        $(this.el.nativeElement).bootstrapToggle(options);
    };
    /**
     * @return {?}
     */
    BootstrapToggleDirective.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.checkedSubscription) {
            this.checkedSubscription.unsubscribe();
        }
        $(this.el.nativeElement).bootstrapToggle('destroy');
    };
    /**
     * @return {?}
     */
    BootstrapToggleDirective.prototype.toggleOn = /**
     * @return {?}
     */
    function () {
        $(this.el.nativeElement).bootstrapToggle('on');
    };
    /**
     * @return {?}
     */
    BootstrapToggleDirective.prototype.toggleOff = /**
     * @return {?}
     */
    function () {
        $(this.el.nativeElement).bootstrapToggle('off');
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    BootstrapToggleDirective.prototype.toggle = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value == null) {
            $(this.el.nativeElement).bootstrapToggle('toggle');
        }
        else {
            $(this.el.nativeElement).prop('checked', value).change();
        }
    };
    /**
     * @return {?}
     */
    BootstrapToggleDirective.prototype.enable = /**
     * @return {?}
     */
    function () {
        $(this.el.nativeElement).bootstrapToggle('enable');
    };
    /**
     * @return {?}
     */
    BootstrapToggleDirective.prototype.disable = /**
     * @return {?}
     */
    function () {
        $(this.el.nativeElement).bootstrapToggle('disable');
    };
    BootstrapToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bootstrapToggle]',
                    exportAs: 'bootstrap-toggle'
                },] }
    ];
    /** @nocollapse */
    BootstrapToggleDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    BootstrapToggleDirective.propDecorators = {
        ngModel: [{ type: Input }],
        ngModelChange: [{ type: Output }]
    };
    return BootstrapToggleDirective;
}());
export { BootstrapToggleDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvYm9vdHN0cmFwLXRvZ2dsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBNEIsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSzNEO0lBaUJJLGtDQUFvQixFQUFjO1FBQWxDLGlCQUdDO1FBSG1CLE9BQUUsR0FBRixFQUFFLENBQVk7UUFIbEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSS9CLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsUUFBUSxDQUFDO2FBQ25FLFNBQVM7Ozs7UUFBQyxVQUFDLENBQU0sSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQXpDLENBQXlDLEVBQUMsQ0FBQztJQUMxRSxDQUFDO0lBWkQsc0JBQ0ksNkNBQU87Ozs7O1FBRFgsVUFDWSxLQUFLO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTs7OztJQVlELDJDQUFROzs7SUFBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsOENBQVc7OztJQUFYO1FBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBR0QsNkNBQVU7Ozs7SUFBVixVQUFXLE9BQWE7UUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCwwQ0FBTzs7O0lBQVA7UUFDSSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUMxQixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDMUM7UUFFRCxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsNENBQVM7OztJQUFUO1FBQ0ksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRUQseUNBQU07Ozs7SUFBTixVQUFPLEtBQWU7UUFDbEIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3REO2FBQU07WUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzVEO0lBQ0wsQ0FBQzs7OztJQUVELHlDQUFNOzs7SUFBTjtRQUNJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsMENBQU87OztJQUFQO1FBQ0ksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7O2dCQWxFSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGtCQUFrQjtpQkFDL0I7Ozs7Z0JBVG1CLFVBQVU7OzswQkFjekIsS0FBSztnQ0FLTCxNQUFNOztJQXNEWCwrQkFBQztDQUFBLEFBbkVELElBbUVDO1NBL0RZLHdCQUF3Qjs7Ozs7O0lBRWpDLHVEQUEwQzs7SUFPMUMsaURBQ21DOzs7OztJQUd2QixzQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2Jvb3RzdHJhcFRvZ2dsZV0nLFxuICAgIGV4cG9ydEFzOiAnYm9vdHN0cmFwLXRvZ2dsZSdcbn0pXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcHJpdmF0ZSBjaGVja2VkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBuZ01vZGVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBuZ01vZGVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZFN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCgkKHRoaXMuZWwubmF0aXZlRWxlbWVudCksICdjaGFuZ2UnKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZTogYW55KSA9PiB0aGlzLm5nTW9kZWxDaGFuZ2UuZW1pdChlLnRhcmdldC5jaGVja2VkKSk7XG4gICAgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cblxuXG4gICAgaW5pdGlhbGl6ZShvcHRpb25zPzogYW55KSB7XG4gICAgICAgICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5ib290c3RyYXBUb2dnbGUob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuYm9vdHN0cmFwVG9nZ2xlKCdkZXN0cm95Jyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlT24oKSB7XG4gICAgICAgICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5ib290c3RyYXBUb2dnbGUoJ29uJyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlT2ZmKCkge1xuICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuYm9vdHN0cmFwVG9nZ2xlKCdvZmYnKTtcbiAgICB9XG5cbiAgICB0b2dnbGUodmFsdWU/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuYm9vdHN0cmFwVG9nZ2xlKCd0b2dnbGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5wcm9wKCdjaGVja2VkJywgdmFsdWUpLmNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlKCkge1xuICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuYm9vdHN0cmFwVG9nZ2xlKCdlbmFibGUnKTtcbiAgICB9XG5cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuYm9vdHN0cmFwVG9nZ2xlKCdkaXNhYmxlJyk7XG4gICAgfVxufVxuIl19