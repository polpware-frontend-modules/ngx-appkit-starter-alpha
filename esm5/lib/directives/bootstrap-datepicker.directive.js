/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/bootstrap-datepicker.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
var BootstrapDatepickerDirective = /** @class */ (function () {
    function BootstrapDatepickerDirective(el) {
        var _this = this;
        this.el = el;
        this._isShown = false;
        this.options = {};
        this.ngModelChange = new EventEmitter();
        this.changedSubscription = fromEvent($(this.el.nativeElement), 'change').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return setTimeout((/**
         * @return {?}
         */
        function () { return _this.ngModelChange.emit(e.target.value); })); }));
        this.shownSubscription = fromEvent($(this.el.nativeElement), 'show').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this._isShown = true; }));
        this.hiddenSubscription = fromEvent($(this.el.nativeElement), 'hide').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this._isShown = false; }));
    }
    Object.defineProperty(BootstrapDatepickerDirective.prototype, "isShown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapDatepickerDirective.prototype, "ngModel", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.tryUpdate(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BootstrapDatepickerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initialize(this.options);
    };
    /**
     * @return {?}
     */
    BootstrapDatepickerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy();
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    BootstrapDatepickerDirective.prototype.initialize = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        $(this.el.nativeElement).datepicker(options);
    };
    /**
     * @return {?}
     */
    BootstrapDatepickerDirective.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.changedSubscription) {
            this.changedSubscription.unsubscribe();
            this.shownSubscription.unsubscribe();
            this.hiddenSubscription.unsubscribe();
        }
        $(this.el.nativeElement).datepicker('destroy');
    };
    /**
     * @return {?}
     */
    BootstrapDatepickerDirective.prototype.show = /**
     * @return {?}
     */
    function () {
        $(this.el.nativeElement).datepicker('show');
    };
    /**
     * @return {?}
     */
    BootstrapDatepickerDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        $(this.el.nativeElement).datepicker('hide');
    };
    /**
     * @return {?}
     */
    BootstrapDatepickerDirective.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.isShown ? this.hide() : this.show();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    BootstrapDatepickerDirective.prototype.tryUpdate = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        clearTimeout(this.updateTimeout);
        if (!$(this.el.nativeElement).is(':focus')) {
            this.update(value);
        }
        else {
            this.updateTimeout = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.updateTimeout = null;
                _this.tryUpdate(value);
            }), 100);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BootstrapDatepickerDirective.prototype.update = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return $(_this.el.nativeElement).datepicker('update', value); }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BootstrapDatepickerDirective.prototype.setDate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return $(_this.el.nativeElement).datepicker('setDate', value); }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BootstrapDatepickerDirective.prototype.setUTCDate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return $(_this.el.nativeElement).datepicker('setUTCDate', value); }));
    };
    /**
     * @return {?}
     */
    BootstrapDatepickerDirective.prototype.clearDates = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return $(_this.el.nativeElement).datepicker('clearDates'); }));
    };
    /**
     * @return {?}
     */
    BootstrapDatepickerDirective.prototype.getDate = /**
     * @return {?}
     */
    function () {
        $(this.el.nativeElement).datepicker('getDate');
    };
    /**
     * @return {?}
     */
    BootstrapDatepickerDirective.prototype.getUTCDate = /**
     * @return {?}
     */
    function () {
        $(this.el.nativeElement).datepicker('getUTCDate');
    };
    BootstrapDatepickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bootstrapDatepicker]',
                    exportAs: 'bootstrap-datepicker'
                },] }
    ];
    /** @nocollapse */
    BootstrapDatepickerDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    BootstrapDatepickerDirective.propDecorators = {
        options: [{ type: Input }],
        ngModel: [{ type: Input }],
        ngModelChange: [{ type: Output }]
    };
    return BootstrapDatepickerDirective;
}());
export { BootstrapDatepickerDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BootstrapDatepickerDirective.prototype._isShown;
    /**
     * @type {?}
     * @private
     */
    BootstrapDatepickerDirective.prototype.updateTimeout;
    /**
     * @type {?}
     * @private
     */
    BootstrapDatepickerDirective.prototype.changedSubscription;
    /**
     * @type {?}
     * @private
     */
    BootstrapDatepickerDirective.prototype.shownSubscription;
    /**
     * @type {?}
     * @private
     */
    BootstrapDatepickerDirective.prototype.hiddenSubscription;
    /** @type {?} */
    BootstrapDatepickerDirective.prototype.options;
    /** @type {?} */
    BootstrapDatepickerDirective.prototype.ngModelChange;
    /**
     * @type {?}
     * @private
     */
    BootstrapDatepickerDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLWRhdGVwaWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUE0QixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFLM0Q7SUE2Qkksc0NBQW9CLEVBQWM7UUFBbEMsaUJBSUM7UUFKbUIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQXZCMUIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQVd6QixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBU2Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSS9CLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsQ0FBTSxJQUFLLE9BQUEsVUFBVTs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQXZDLENBQXVDLEVBQUMsRUFBekQsQ0FBeUQsRUFBQyxDQUFDO1FBQzFKLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsQ0FBTSxJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQXBCLENBQW9C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QXJIWSw0QkFBNEI7Ozs7OztJQUVyQyxnREFBeUI7Ozs7O0lBQ3pCLHFEQUFzQjs7Ozs7SUFDdEIsMkRBQTBDOzs7OztJQUMxQyx5REFBd0M7Ozs7O0lBQ3hDLDBEQUF5Qzs7SUFNekMsK0NBQ2E7O0lBUWIscURBQ21DOzs7OztJQUd2QiwwQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2Jvb3RzdHJhcERhdGVwaWNrZXJdJyxcbiAgICBleHBvcnRBczogJ2Jvb3RzdHJhcC1kYXRlcGlja2VyJ1xufSlcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBEYXRlcGlja2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcHJpdmF0ZSBfaXNTaG93biA9IGZhbHNlO1xuICAgIHByaXZhdGUgdXBkYXRlVGltZW91dDtcbiAgICBwcml2YXRlIGNoYW5nZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIHNob3duU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBoaWRkZW5TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIGdldCBpc1Nob3duKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTaG93bjtcbiAgICB9XG5cbiAgICBASW5wdXQoKVxuICAgIG9wdGlvbnMgPSB7fTtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IG5nTW9kZWwodmFsdWUpIHtcbiAgICAgICAgdGhpcy50cnlVcGRhdGUodmFsdWUpO1xuICAgIH1cblxuXG4gICAgQE91dHB1dCgpXG4gICAgbmdNb2RlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmNoYW5nZWRTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQoJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLCAnY2hhbmdlJykuc3Vic2NyaWJlKChlOiBhbnkpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5uZ01vZGVsQ2hhbmdlLmVtaXQoZS50YXJnZXQudmFsdWUpKSk7XG4gICAgICAgIHRoaXMuc2hvd25TdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQoJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLCAnc2hvdycpLnN1YnNjcmliZSgoZTogYW55KSA9PiB0aGlzLl9pc1Nob3duID0gdHJ1ZSk7XG4gICAgICAgIHRoaXMuaGlkZGVuU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KCQodGhpcy5lbC5uYXRpdmVFbGVtZW50KSwgJ2hpZGUnKS5zdWJzY3JpYmUoKGU6IGFueSkgPT4gdGhpcy5faXNTaG93biA9IGZhbHNlKTtcbiAgICB9XG5cblxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSh0aGlzLm9wdGlvbnMpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG5cblxuXG5cbiAgICBpbml0aWFsaXplKG9wdGlvbnM/OiBhbnkpIHtcbiAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmRhdGVwaWNrZXIob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlZFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aGlzLnNob3duU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB0aGlzLmhpZGRlblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmRhdGVwaWNrZXIoJ2Rlc3Ryb3knKTtcbiAgICB9XG5cblxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmRhdGVwaWNrZXIoJ3Nob3cnKTtcbiAgICB9XG5cblxuICAgIGhpZGUoKSB7XG4gICAgICAgICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5kYXRlcGlja2VyKCdoaWRlJyk7XG4gICAgfVxuXG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuaXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KCk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHRyeVVwZGF0ZSh2YWx1ZSkge1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnVwZGF0ZVRpbWVvdXQpO1xuXG4gICAgICAgIGlmICghJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmlzKCc6Zm9jdXMnKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUodmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLnRyeVVwZGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKHZhbHVlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmRhdGVwaWNrZXIoJ3VwZGF0ZScsIHZhbHVlKSk7XG4gICAgfVxuXG5cbiAgICBzZXREYXRlKHZhbHVlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmRhdGVwaWNrZXIoJ3NldERhdGUnLCB2YWx1ZSkpO1xuICAgIH1cblxuXG4gICAgc2V0VVRDRGF0ZSh2YWx1ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5kYXRlcGlja2VyKCdzZXRVVENEYXRlJywgdmFsdWUpKTtcbiAgICB9XG5cblxuICAgIGNsZWFyRGF0ZXMoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmRhdGVwaWNrZXIoJ2NsZWFyRGF0ZXMnKSk7XG4gICAgfVxuXG5cbiAgICBnZXREYXRlKCkge1xuICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuZGF0ZXBpY2tlcignZ2V0RGF0ZScpO1xuICAgIH1cblxuXG4gICAgZ2V0VVRDRGF0ZSgpIHtcbiAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmRhdGVwaWNrZXIoJ2dldFVUQ0RhdGUnKTtcbiAgICB9XG59XG4iXX0=