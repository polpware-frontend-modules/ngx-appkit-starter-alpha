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
var BootstrapSelectDirective = /** @class */ (function () {
    function BootstrapSelectDirective(el) {
        var _this = this;
        this.el = el;
        this.oldValues = '';
        this.ngModelChange = new EventEmitter();
        this.shown = new EventEmitter();
        this.hidden = new EventEmitter();
        this.changedSubscription = fromEvent($(this.el.nativeElement), 'changed.bs.select').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.checkIsValuesChanged(_this.selected)) {
                _this.ngModelChange.emit(_this.selected);
            }
        })); }));
        this.shownSubscription = fromEvent($(this.el.nativeElement), 'shown.bs.select').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return setTimeout((/**
         * @return {?}
         */
        function () { return _this.shown.emit(); })); }));
        this.hiddenSubscription = fromEvent($(this.el.nativeElement), 'hidden.bs.select').subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return setTimeout((/**
         * @return {?}
         */
        function () { return _this.hidden.emit(); })); }));
    }
    Object.defineProperty(BootstrapSelectDirective.prototype, "ngModel", {
        set: /**
         * @param {?} values
         * @return {?}
         */
        function (values) {
            var _this = this;
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.selected = values; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BootstrapSelectDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        $(this.el.nativeElement).selectpicker();
        if (this.requiredAttribute) {
            $(this.el.nativeElement).selectpicker('setStyle', 'required', 'add');
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.refresh();
            _this.doValidation();
        }));
    };
    /**
     * @return {?}
     */
    BootstrapSelectDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @private
     * @param {?} newValue
     * @return {?}
     */
    BootstrapSelectDirective.prototype.checkIsValuesChanged = /**
     * @private
     * @param {?} newValue
     * @return {?}
     */
    function (newValue) {
        var _this = this;
        return !(newValue == this.oldValues ||
            (newValue instanceof Array && newValue.length === this.oldValues.length && newValue.every((/**
             * @param {?} v
             * @param {?} i
             * @return {?}
             */
            function (v, i) { return v === _this.oldValues[i]; }))));
    };
    /**
     * @private
     * @return {?}
     */
    BootstrapSelectDirective.prototype.doValidation = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.requiredAttribute) {
            $(this.el.nativeElement).selectpicker('setStyle', !this.valid ? 'ng-valid' : 'ng-invalid', 'remove');
            $(this.el.nativeElement).selectpicker('setStyle', this.valid ? 'ng-valid' : 'ng-invalid', 'add');
        }
    };
    Object.defineProperty(BootstrapSelectDirective.prototype, "requiredAttribute", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.required === '' || this.required == 'true';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BootstrapSelectDirective.prototype.refresh = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            $(_this.el.nativeElement).selectpicker('refresh');
        }));
    };
    /**
     * @return {?}
     */
    BootstrapSelectDirective.prototype.render = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            $(_this.el.nativeElement).selectpicker('render');
        }));
    };
    Object.defineProperty(BootstrapSelectDirective.prototype, "valid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.requiredAttribute ? this.selected && this.selected.length > 0 : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapSelectDirective.prototype, "selected", {
        get: /**
         * @return {?}
         */
        function () {
            return $(this.el.nativeElement).selectpicker('val');
        },
        set: /**
         * @param {?} values
         * @return {?}
         */
        function (values) {
            if (!this.checkIsValuesChanged(values)) {
                return;
            }
            this.oldValues = this.selected;
            $(this.el.nativeElement).selectpicker('val', values);
            this.doValidation();
        },
        enumerable: true,
        configurable: true
    });
    BootstrapSelectDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bootstrapSelect]',
                    exportAs: 'bootstrap-select'
                },] }
    ];
    /** @nocollapse */
    BootstrapSelectDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    BootstrapSelectDirective.propDecorators = {
        required: [{ type: Input }],
        ngModel: [{ type: Input }],
        ngModelChange: [{ type: Output }],
        shown: [{ type: Output }],
        hidden: [{ type: Output }]
    };
    return BootstrapSelectDirective;
}());
export { BootstrapSelectDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLXNlbGVjdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvYm9vdHN0cmFwLXNlbGVjdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBYSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ2pILE9BQU8sRUFBNEIsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSzNEO0lBK0JJLGtDQUFvQixFQUFjO1FBQWxDLGlCQVFDO1FBUm1CLE9BQUUsR0FBRixFQUFFLENBQVk7UUF6QjFCLGNBQVMsR0FBc0IsRUFBRSxDQUFDO1FBZ0IxQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbkMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHM0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJeEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLENBQU0sSUFBSyxPQUFBLFVBQVU7OztRQUFDO1lBQ2pILElBQUksS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDMUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzFDO1FBQ0wsQ0FBQyxFQUFDLEVBSndHLENBSXhHLEVBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFB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O1lBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9CLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUM7OztPQUFBOztnQkFwSEosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSxrQkFBa0I7aUJBQy9COzs7O2dCQVQ4QixVQUFVOzs7MkJBa0JwQyxLQUFLOzBCQUdMLEtBQUs7Z0NBTUwsTUFBTTt3QkFHTixNQUFNO3lCQUdOLE1BQU07O0lBK0ZYLCtCQUFDO0NBQUEsQUExSEQsSUEwSEM7U0F0SFksd0JBQXdCOzs7Ozs7SUFFakMsNkNBQTBDOzs7OztJQUUxQyx1REFBMEM7Ozs7O0lBQzFDLHFEQUF3Qzs7Ozs7SUFDeEMsc0RBQXlDOztJQUV6Qyw0Q0FDaUI7O0lBUWpCLGlEQUNtQzs7SUFFbkMseUNBQzJCOztJQUUzQiwwQ0FDNEI7Ozs7O0lBR2hCLHNDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBBdHRyaWJ1dGUsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tib290c3RyYXBTZWxlY3RdJyxcbiAgICBleHBvcnRBczogJ2Jvb3RzdHJhcC1zZWxlY3QnXG59KVxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcFNlbGVjdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHByaXZhdGUgb2xkVmFsdWVzOiBzdHJpbmcgfCBzdHJpbmdbXSA9ICcnO1xuXG4gICAgcHJpdmF0ZSBjaGFuZ2VkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBzaG93blN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgaGlkZGVuU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBASW5wdXQoKVxuICAgIHJlcXVpcmVkOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBuZ01vZGVsKHZhbHVlczogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNlbGVjdGVkID0gdmFsdWVzKTtcbiAgICB9XG5cblxuICAgIEBPdXRwdXQoKVxuICAgIG5nTW9kZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KClcbiAgICBzaG93biA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIGhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmNoYW5nZWRTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQoJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLCAnY2hhbmdlZC5icy5zZWxlY3QnKS5zdWJzY3JpYmUoKGU6IGFueSkgPT4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja0lzVmFsdWVzQ2hhbmdlZCh0aGlzLnNlbGVjdGVkKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuc2hvd25TdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQoJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLCAnc2hvd24uYnMuc2VsZWN0Jykuc3Vic2NyaWJlKChlOiBhbnkpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zaG93bi5lbWl0KCkpKTtcbiAgICAgICAgdGhpcy5oaWRkZW5TdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQoJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLCAnaGlkZGVuLmJzLnNlbGVjdCcpLnN1YnNjcmliZSgoZTogYW55KSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaGlkZGVuLmVtaXQoKSkpO1xuICAgIH1cblxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5zZWxlY3RwaWNrZXIoKTtcblxuICAgICAgICBpZiAodGhpcy5yZXF1aXJlZEF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLnNlbGVjdHBpY2tlcignc2V0U3R5bGUnLCAncmVxdWlyZWQnLCAnYWRkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5kb1ZhbGlkYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlZFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zaG93blN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zaG93blN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGlkZGVuU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGRlblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLnNlbGVjdHBpY2tlcignZGVzdHJveScpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tJc1ZhbHVlc0NoYW5nZWQobmV3VmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgICAgIHJldHVybiAhKG5ld1ZhbHVlID09IHRoaXMub2xkVmFsdWVzIHx8XG4gICAgICAgICAgICAobmV3VmFsdWUgaW5zdGFuY2VvZiBBcnJheSAmJiBuZXdWYWx1ZS5sZW5ndGggPT09IHRoaXMub2xkVmFsdWVzLmxlbmd0aCAmJiBuZXdWYWx1ZS5ldmVyeSgodiwgaSkgPT4gdiA9PT0gdGhpcy5vbGRWYWx1ZXNbaV0pKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb1ZhbGlkYXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnJlcXVpcmVkQXR0cmlidXRlKSB7XG4gICAgICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuc2VsZWN0cGlja2VyKCdzZXRTdHlsZScsICF0aGlzLnZhbGlkID8gJ25nLXZhbGlkJyA6ICduZy1pbnZhbGlkJywgJ3JlbW92ZScpO1xuICAgICAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLnNlbGVjdHBpY2tlcignc2V0U3R5bGUnLCB0aGlzLnZhbGlkID8gJ25nLXZhbGlkJyA6ICduZy1pbnZhbGlkJywgJ2FkZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgcmVxdWlyZWRBdHRyaWJ1dGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVpcmVkID09PSAnJyB8fCB0aGlzLnJlcXVpcmVkID09ICd0cnVlJztcbiAgICB9XG5cblxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLnNlbGVjdHBpY2tlcigncmVuZGVyJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1aXJlZEF0dHJpYnV0ZSA/IHRoaXMuc2VsZWN0ZWQgJiYgdGhpcy5zZWxlY3RlZC5sZW5ndGggPiAwIDogdHJ1ZTtcbiAgICB9XG5cblxuICAgIHNldCBzZWxlY3RlZCh2YWx1ZXM6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrSXNWYWx1ZXNDaGFuZ2VkKHZhbHVlcykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub2xkVmFsdWVzID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLnNlbGVjdHBpY2tlcigndmFsJywgdmFsdWVzKTtcbiAgICAgICAgdGhpcy5kb1ZhbGlkYXRpb24oKTtcbiAgICB9XG5cblxuICAgIGdldCBzZWxlY3RlZCgpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuc2VsZWN0cGlja2VyKCd2YWwnKTtcbiAgICB9XG59XG4iXX0=