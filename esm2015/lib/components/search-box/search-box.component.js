/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/search-box/search-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
export class SearchBoxComponent {
    constructor() {
        this.placeholder = 'Search...';
        this.searchChange = new EventEmitter();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onValueChange(value) {
        setTimeout((/**
         * @return {?}
         */
        () => this.searchChange.emit(value)));
    }
    /**
     * @return {?}
     */
    clear() {
        this.searchInput.nativeElement.value = '';
        this.onValueChange(this.searchInput.nativeElement.value);
    }
}
SearchBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'search-box',
                template: "<div class=\"icon-addon addon-sm\">\n    <label for=\"searchInput\" title=\"Search\"><i class=\"fa fa-search left-icon search-icon\"></i></label>\n    <input id=\"searchInput\" #searchInput type=\"search\" ngModel=\"\" (ngModelChange)=\"onValueChange($event)\" [attr.placeholder]=\"placeholder\" class=\"form-control left-icon right-icon\">\n    <a *ngIf=\"searchInput.value\" href=\"javascript:;\" title=\"Clear\" (click)=\"clear()\" class=\"fa fa-times-circle clear-input right-icon\"></a>\n</div>",
                styles: [".search-icon{pointer-events:none}"]
            }] }
];
SearchBoxComponent.propDecorators = {
    placeholder: [{ type: Input }],
    searchChange: [{ type: Output }],
    searchInput: [{ type: ViewChild, args: ['searchInput', { static: true },] }]
};
if (false) {
    /** @type {?} */
    SearchBoxComponent.prototype.placeholder;
    /** @type {?} */
    SearchBoxComponent.prototype.searchChange;
    /** @type {?} */
    SearchBoxComponent.prototype.searchInput;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPOUYsTUFBTSxPQUFPLGtCQUFrQjtJQUwvQjtRQVFJLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBRzFCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQWU5QyxDQUFDOzs7OztJQVRHLGFBQWEsQ0FBQyxLQUFhO1FBQ3ZCLFVBQVU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUdELEtBQUs7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7O1lBekJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsK2ZBQTBDOzthQUU3Qzs7OzBCQUdJLEtBQUs7MkJBR0wsTUFBTTswQkFHTixTQUFTLFNBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQU4xQyx5Q0FDMEI7O0lBRTFCLDBDQUMwQzs7SUFFMUMseUNBQ3dCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2VhcmNoLWJveCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NlYXJjaC1ib3guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnQge1xuXG4gICAgQElucHV0KClcbiAgICBwbGFjZWhvbGRlciA9ICdTZWFyY2guLi4nO1xuXG4gICAgQE91dHB1dCgpXG4gICAgc2VhcmNoQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgICBAVmlld0NoaWxkKCdzZWFyY2hJbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgc2VhcmNoSW5wdXQ6IEVsZW1lbnRSZWY7XG5cblxuICAgIG9uVmFsdWVDaGFuZ2UodmFsdWU6IHN0cmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VhcmNoQ2hhbmdlLmVtaXQodmFsdWUpKTtcbiAgICB9XG5cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnNlYXJjaElucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKHRoaXMuc2VhcmNoSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSk7XG4gICAgfVxufVxuIl19