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
export class BootstrapDatepickerDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this._isShown = false;
        this.options = {};
        this.ngModelChange = new EventEmitter();
        this.changedSubscription = fromEvent($(this.el.nativeElement), 'change').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => setTimeout((/**
         * @return {?}
         */
        () => this.ngModelChange.emit(e.target.value)))));
        this.shownSubscription = fromEvent($(this.el.nativeElement), 'show').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => this._isShown = true));
        this.hiddenSubscription = fromEvent($(this.el.nativeElement), 'hide').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => this._isShown = false));
    }
    /**
     * @return {?}
     */
    get isShown() {
        return this._isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ngModel(value) {
        this.tryUpdate(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initialize(this.options);
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
        $(this.el.nativeElement).datepicker(options);
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.changedSubscription) {
            this.changedSubscription.unsubscribe();
            this.shownSubscription.unsubscribe();
            this.hiddenSubscription.unsubscribe();
        }
        $(this.el.nativeElement).datepicker('destroy');
    }
    /**
     * @return {?}
     */
    show() {
        $(this.el.nativeElement).datepicker('show');
    }
    /**
     * @return {?}
     */
    hide() {
        $(this.el.nativeElement).datepicker('hide');
    }
    /**
     * @return {?}
     */
    toggle() {
        this.isShown ? this.hide() : this.show();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    tryUpdate(value) {
        clearTimeout(this.updateTimeout);
        if (!$(this.el.nativeElement).is(':focus')) {
            this.update(value);
        }
        else {
            this.updateTimeout = setTimeout((/**
             * @return {?}
             */
            () => {
                this.updateTimeout = null;
                this.tryUpdate(value);
            }), 100);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    update(value) {
        setTimeout((/**
         * @return {?}
         */
        () => $(this.el.nativeElement).datepicker('update', value)));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDate(value) {
        setTimeout((/**
         * @return {?}
         */
        () => $(this.el.nativeElement).datepicker('setDate', value)));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setUTCDate(value) {
        setTimeout((/**
         * @return {?}
         */
        () => $(this.el.nativeElement).datepicker('setUTCDate', value)));
    }
    /**
     * @return {?}
     */
    clearDates() {
        setTimeout((/**
         * @return {?}
         */
        () => $(this.el.nativeElement).datepicker('clearDates')));
    }
    /**
     * @return {?}
     */
    getDate() {
        $(this.el.nativeElement).datepicker('getDate');
    }
    /**
     * @return {?}
     */
    getUTCDate() {
        $(this.el.nativeElement).datepicker('getUTCDate');
    }
}
BootstrapDatepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bootstrapDatepicker]',
                exportAs: 'bootstrap-datepicker'
            },] }
];
/** @nocollapse */
BootstrapDatepickerDirective.ctorParameters = () => [
    { type: ElementRef }
];
BootstrapDatepickerDirective.propDecorators = {
    options: [{ type: Input }],
    ngModel: [{ type: Input }],
    ngModelChange: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLWRhdGVwaWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUE0QixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFTM0QsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQXlCckMsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUF2QjFCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFXekIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQVNiLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUkvQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsVUFBVTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBQyxFQUFDLENBQUM7UUFDMUosSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFDLENBQUM7UUFD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RUFBQyxDQUFDO0lBQzVFLENBQUM7Ozs7O0lBR0QsVUFBVSxDQUFDLEtBQUs7UUFDWixVQUFVOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFDLENBQUM7SUFDL0UsQ0FBQzs7OztJQUdELFVBQVU7UUFDTixVQUFVOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUMsQ0FBQztJQUN4RSxDQUFDOzs7O0lBR0QsT0FBTztRQUNILENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBR0QsVUFBVTtRQUNOLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7WUF4SEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRSxzQkFBc0I7YUFDbkM7Ozs7WUFUbUIsVUFBVTs7O3NCQXNCekIsS0FBSztzQkFHTCxLQUFLOzRCQU1MLE1BQU07Ozs7Ozs7SUFuQlAsZ0RBQXlCOzs7OztJQUN6QixxREFBc0I7Ozs7O0lBQ3RCLDJEQUEwQzs7Ozs7SUFDMUMseURBQXdDOzs7OztJQUN4QywwREFBeUM7O0lBTXpDLCtDQUNhOztJQVFiLHFEQUNtQzs7Ozs7SUFHdkIsMENBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tib290c3RyYXBEYXRlcGlja2VyXScsXG4gICAgZXhwb3J0QXM6ICdib290c3RyYXAtZGF0ZXBpY2tlcidcbn0pXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwRGF0ZXBpY2tlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHByaXZhdGUgX2lzU2hvd24gPSBmYWxzZTtcbiAgICBwcml2YXRlIHVwZGF0ZVRpbWVvdXQ7XG4gICAgcHJpdmF0ZSBjaGFuZ2VkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBzaG93blN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgaGlkZGVuU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBnZXQgaXNTaG93bigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2hvd247XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBvcHRpb25zID0ge307XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBuZ01vZGVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudHJ5VXBkYXRlKHZhbHVlKTtcbiAgICB9XG5cblxuICAgIEBPdXRwdXQoKVxuICAgIG5nTW9kZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VkU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KCQodGhpcy5lbC5uYXRpdmVFbGVtZW50KSwgJ2NoYW5nZScpLnN1YnNjcmliZSgoZTogYW55KSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KGUudGFyZ2V0LnZhbHVlKSkpO1xuICAgICAgICB0aGlzLnNob3duU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KCQodGhpcy5lbC5uYXRpdmVFbGVtZW50KSwgJ3Nob3cnKS5zdWJzY3JpYmUoKGU6IGFueSkgPT4gdGhpcy5faXNTaG93biA9IHRydWUpO1xuICAgICAgICB0aGlzLmhpZGRlblN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCgkKHRoaXMuZWwubmF0aXZlRWxlbWVudCksICdoaWRlJykuc3Vic2NyaWJlKChlOiBhbnkpID0+IHRoaXMuX2lzU2hvd24gPSBmYWxzZSk7XG4gICAgfVxuXG5cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemUodGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuXG5cblxuXG4gICAgaW5pdGlhbGl6ZShvcHRpb25zPzogYW55KSB7XG4gICAgICAgICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5kYXRlcGlja2VyKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYW5nZWRTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5zaG93blN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5oaWRkZW5TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5kYXRlcGlja2VyKCdkZXN0cm95Jyk7XG4gICAgfVxuXG5cblxuICAgIHNob3coKSB7XG4gICAgICAgICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5kYXRlcGlja2VyKCdzaG93Jyk7XG4gICAgfVxuXG5cbiAgICBoaWRlKCkge1xuICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuZGF0ZXBpY2tlcignaGlkZScpO1xuICAgIH1cblxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLmlzU2hvd24gPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdygpO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSB0cnlVcGRhdGUodmFsdWUpIHtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy51cGRhdGVUaW1lb3V0KTtcblxuICAgICAgICBpZiAoISQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5pcygnOmZvY3VzJykpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy50cnlVcGRhdGUodmFsdWUpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSh2YWx1ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5kYXRlcGlja2VyKCd1cGRhdGUnLCB2YWx1ZSkpO1xuICAgIH1cblxuXG4gICAgc2V0RGF0ZSh2YWx1ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5kYXRlcGlja2VyKCdzZXREYXRlJywgdmFsdWUpKTtcbiAgICB9XG5cblxuICAgIHNldFVUQ0RhdGUodmFsdWUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuZGF0ZXBpY2tlcignc2V0VVRDRGF0ZScsIHZhbHVlKSk7XG4gICAgfVxuXG5cbiAgICBjbGVhckRhdGVzKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5kYXRlcGlja2VyKCdjbGVhckRhdGVzJykpO1xuICAgIH1cblxuXG4gICAgZ2V0RGF0ZSgpIHtcbiAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmRhdGVwaWNrZXIoJ2dldERhdGUnKTtcbiAgICB9XG5cblxuICAgIGdldFVUQ0RhdGUoKSB7XG4gICAgICAgICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5kYXRlcGlja2VyKCdnZXRVVENEYXRlJyk7XG4gICAgfVxufVxuIl19