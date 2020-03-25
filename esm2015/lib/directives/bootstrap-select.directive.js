/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/bootstrap-select.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
export class BootstrapSelectDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.oldValues = '';
        this.ngModelChange = new EventEmitter();
        this.shown = new EventEmitter();
        this.hidden = new EventEmitter();
        this.changedSubscription = fromEvent($(this.el.nativeElement), 'changed.bs.select').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.checkIsValuesChanged(this.selected)) {
                this.ngModelChange.emit(this.selected);
            }
        }))));
        this.shownSubscription = fromEvent($(this.el.nativeElement), 'shown.bs.select').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => setTimeout((/**
         * @return {?}
         */
        () => this.shown.emit()))));
        this.hiddenSubscription = fromEvent($(this.el.nativeElement), 'hidden.bs.select').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => setTimeout((/**
         * @return {?}
         */
        () => this.hidden.emit()))));
    }
    /**
     * @param {?} values
     * @return {?}
     */
    set ngModel(values) {
        setTimeout((/**
         * @return {?}
         */
        () => this.selected = values));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        $(this.el.nativeElement).selectpicker();
        if (this.requiredAttribute) {
            $(this.el.nativeElement).selectpicker('setStyle', 'required', 'add');
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.refresh();
            this.doValidation();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.changedSubscription) {
            this.changedSubscription.unsubscribe();
        }
        if (this.shownSubscription) {
            this.shownSubscription.unsubscribe();
        }
        if (this.hiddenSubscription) {
            this.hiddenSubscription.unsubscribe();
        }
        $(this.el.nativeElement).selectpicker('destroy');
    }
    /**
     * @private
     * @param {?} newValue
     * @return {?}
     */
    checkIsValuesChanged(newValue) {
        return !(newValue == this.oldValues ||
            (newValue instanceof Array && newValue.length === this.oldValues.length && newValue.every((/**
             * @param {?} v
             * @param {?} i
             * @return {?}
             */
            (v, i) => v === this.oldValues[i]))));
    }
    /**
     * @private
     * @return {?}
     */
    doValidation() {
        if (this.requiredAttribute) {
            $(this.el.nativeElement).selectpicker('setStyle', !this.valid ? 'ng-valid' : 'ng-invalid', 'remove');
            $(this.el.nativeElement).selectpicker('setStyle', this.valid ? 'ng-valid' : 'ng-invalid', 'add');
        }
    }
    /**
     * @private
     * @return {?}
     */
    get requiredAttribute() {
        return this.required === '' || this.required == 'true';
    }
    /**
     * @return {?}
     */
    refresh() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            $(this.el.nativeElement).selectpicker('refresh');
        }));
    }
    /**
     * @return {?}
     */
    render() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            $(this.el.nativeElement).selectpicker('render');
        }));
    }
    /**
     * @return {?}
     */
    get valid() {
        return this.requiredAttribute ? this.selected && this.selected.length > 0 : true;
    }
    /**
     * @param {?} values
     * @return {?}
     */
    set selected(values) {
        if (!this.checkIsValuesChanged(values)) {
            return;
        }
        this.oldValues = this.selected;
        $(this.el.nativeElement).selectpicker('val', values);
        this.doValidation();
    }
    /**
     * @return {?}
     */
    get selected() {
        return $(this.el.nativeElement).selectpicker('val');
    }
}
BootstrapSelectDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bootstrapSelect]',
                exportAs: 'bootstrap-select'
            },] }
];
/** @nocollapse */
BootstrapSelectDirective.ctorParameters = () => [
    { type: ElementRef }
];
BootstrapSelectDirective.propDecorators = {
    required: [{ type: Input }],
    ngModel: [{ type: Input }],
    ngModelChange: [{ type: Output }],
    shown: [{ type: Output }],
    hidden: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    BootstrapSelectDirective.prototype.oldValues;
    /**
     * @type {?}
     * @private
     */
    BootstrapSelectDirective.prototype.changedSubscription;
    /**
     * @type {?}
     * @private
     */
    BootstrapSelectDirective.prototype.shownSubscription;
    /**
     * @type {?}
     * @private
     */
    BootstrapSelectDirective.prototype.hiddenSubscription;
    /** @type {?} */
    BootstrapSelectDirective.prototype.required;
    /** @type {?} */
    BootstrapSelectDirective.prototype.ngModelChange;
    /** @type {?} */
    BootstrapSelectDirective.prototype.shown;
    /** @type {?} */
    BootstrapSelectDirective.prototype.hidden;
    /**
     * @type {?}
     * @private
     */
    BootstrapSelectDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLXNlbGVjdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvYm9vdHN0cmFwLXNlbGVjdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBYSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sRUFBNEIsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBUzNELE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUEyQmpDLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBekIxQixjQUFTLEdBQXNCLEVBQUUsQ0FBQztRQWdCMUMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR25DLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzNCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSXhCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUN0SCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMxQztRQUNMLENBQUMsRUFBQyxFQUFDLENBQUM7UUFDSixJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFB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S0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7O1lBekhKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsa0JBQWtCO2FBQy9COzs7O1lBVDhCLFVBQVU7Ozt1QkFrQnBDLEtBQUs7c0JBR0wsS0FBSzs0QkFNTCxNQUFNO29CQUdOLE1BQU07cUJBR04sTUFBTTs7Ozs7OztJQXJCUCw2Q0FBMEM7Ozs7O0lBRTFDLHVEQUEwQzs7Ozs7SUFDMUMscURBQXdDOzs7OztJQUN4QyxzREFBeUM7O0lBRXpDLDRDQUNpQjs7SUFRakIsaURBQ21DOztJQUVuQyx5Q0FDMkI7O0lBRTNCLDBDQUM0Qjs7Ozs7SUFHaEIsc0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEF0dHJpYnV0ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2Jvb3RzdHJhcFNlbGVjdF0nLFxuICAgIGV4cG9ydEFzOiAnYm9vdHN0cmFwLXNlbGVjdCdcbn0pXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwU2VsZWN0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcHJpdmF0ZSBvbGRWYWx1ZXM6IHN0cmluZyB8IHN0cmluZ1tdID0gJyc7XG5cbiAgICBwcml2YXRlIGNoYW5nZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIHNob3duU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBoaWRkZW5TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcmVxdWlyZWQ6IHN0cmluZztcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IG5nTW9kZWwodmFsdWVzOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZXMpO1xuICAgIH1cblxuXG4gICAgQE91dHB1dCgpXG4gICAgbmdNb2RlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHNob3duID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgaGlkZGVuID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZFN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCgkKHRoaXMuZWwubmF0aXZlRWxlbWVudCksICdjaGFuZ2VkLmJzLnNlbGVjdCcpLnN1YnNjcmliZSgoZTogYW55KSA9PiBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrSXNWYWx1ZXNDaGFuZ2VkKHRoaXMuc2VsZWN0ZWQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZ01vZGVsQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5zaG93blN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCgkKHRoaXMuZWwubmF0aXZlRWxlbWVudCksICdzaG93bi5icy5zZWxlY3QnKS5zdWJzY3JpYmUoKGU6IGFueSkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLnNob3duLmVtaXQoKSkpO1xuICAgICAgICB0aGlzLmhpZGRlblN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCgkKHRoaXMuZWwubmF0aXZlRWxlbWVudCksICdoaWRkZW4uYnMuc2VsZWN0Jykuc3Vic2NyaWJlKChlOiBhbnkpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oaWRkZW4uZW1pdCgpKSk7XG4gICAgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLnNlbGVjdHBpY2tlcigpO1xuXG4gICAgICAgIGlmICh0aGlzLnJlcXVpcmVkQXR0cmlidXRlKSB7XG4gICAgICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuc2VsZWN0cGlja2VyKCdzZXRTdHlsZScsICdyZXF1aXJlZCcsICdhZGQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgICAgICB0aGlzLmRvVmFsaWRhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5jaGFuZ2VkU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNob3duU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNob3duU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oaWRkZW5TdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZGVuU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuc2VsZWN0cGlja2VyKCdkZXN0cm95Jyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0lzVmFsdWVzQ2hhbmdlZChuZXdWYWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICAgICAgcmV0dXJuICEobmV3VmFsdWUgPT0gdGhpcy5vbGRWYWx1ZXMgfHxcbiAgICAgICAgICAgIChuZXdWYWx1ZSBpbnN0YW5jZW9mIEFycmF5ICYmIG5ld1ZhbHVlLmxlbmd0aCA9PT0gdGhpcy5vbGRWYWx1ZXMubGVuZ3RoICYmIG5ld1ZhbHVlLmV2ZXJ5KCh2LCBpKSA9PiB2ID09PSB0aGlzLm9sZFZhbHVlc1tpXSkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRvVmFsaWRhdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucmVxdWlyZWRBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5zZWxlY3RwaWNrZXIoJ3NldFN0eWxlJywgIXRoaXMudmFsaWQgPyAnbmctdmFsaWQnIDogJ25nLWludmFsaWQnLCAncmVtb3ZlJyk7XG4gICAgICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuc2VsZWN0cGlja2VyKCdzZXRTdHlsZScsIHRoaXMudmFsaWQgPyAnbmctdmFsaWQnIDogJ25nLWludmFsaWQnLCAnYWRkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCByZXF1aXJlZEF0dHJpYnV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWlyZWQgPT09ICcnIHx8IHRoaXMucmVxdWlyZWQgPT0gJ3RydWUnO1xuICAgIH1cblxuXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuc2VsZWN0cGlja2VyKCdyZWZyZXNoJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuc2VsZWN0cGlja2VyKCdyZW5kZXInKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBnZXQgdmFsaWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVpcmVkQXR0cmlidXRlID8gdGhpcy5zZWxlY3RlZCAmJiB0aGlzLnNlbGVjdGVkLmxlbmd0aCA+IDAgOiB0cnVlO1xuICAgIH1cblxuXG4gICAgc2V0IHNlbGVjdGVkKHZhbHVlczogc3RyaW5nIHwgc3RyaW5nW10pIHtcblxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJc1ZhbHVlc0NoYW5nZWQodmFsdWVzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbGRWYWx1ZXMgPSB0aGlzLnNlbGVjdGVkO1xuICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuc2VsZWN0cGlja2VyKCd2YWwnLCB2YWx1ZXMpO1xuICAgICAgICB0aGlzLmRvVmFsaWRhdGlvbigpO1xuICAgIH1cblxuXG4gICAgZ2V0IHNlbGVjdGVkKCk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICAgICAgcmV0dXJuICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5zZWxlY3RwaWNrZXIoJ3ZhbCcpO1xuICAgIH1cbn1cbiJdfQ==