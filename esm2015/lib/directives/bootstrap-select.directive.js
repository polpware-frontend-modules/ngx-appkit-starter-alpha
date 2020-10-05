// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import * as i0 from "@angular/core";
export class BootstrapSelectDirective {
    constructor(el) {
        this.el = el;
        this.oldValues = '';
        this.ngModelChange = new EventEmitter();
        this.shown = new EventEmitter();
        this.hidden = new EventEmitter();
        this.changedSubscription = fromEvent($(this.el.nativeElement), 'changed.bs.select').subscribe((e) => setTimeout(() => {
            if (this.checkIsValuesChanged(this.selected)) {
                this.ngModelChange.emit(this.selected);
            }
        }));
        this.shownSubscription = fromEvent($(this.el.nativeElement), 'shown.bs.select').subscribe((e) => setTimeout(() => this.shown.emit()));
        this.hiddenSubscription = fromEvent($(this.el.nativeElement), 'hidden.bs.select').subscribe((e) => setTimeout(() => this.hidden.emit()));
    }
    set ngModel(values) {
        setTimeout(() => this.selected = values);
    }
    ngOnInit() {
        $(this.el.nativeElement).selectpicker();
        if (this.requiredAttribute) {
            $(this.el.nativeElement).selectpicker('setStyle', 'required', 'add');
        }
        setTimeout(() => {
            this.refresh();
            this.doValidation();
        });
    }
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
    checkIsValuesChanged(newValue) {
        return !(newValue == this.oldValues ||
            (newValue instanceof Array && newValue.length === this.oldValues.length && newValue.every((v, i) => v === this.oldValues[i])));
    }
    doValidation() {
        if (this.requiredAttribute) {
            $(this.el.nativeElement).selectpicker('setStyle', !this.valid ? 'ng-valid' : 'ng-invalid', 'remove');
            $(this.el.nativeElement).selectpicker('setStyle', this.valid ? 'ng-valid' : 'ng-invalid', 'add');
        }
    }
    get requiredAttribute() {
        return this.required === '' || this.required == 'true';
    }
    refresh() {
        setTimeout(() => {
            $(this.el.nativeElement).selectpicker('refresh');
        });
    }
    render() {
        setTimeout(() => {
            $(this.el.nativeElement).selectpicker('render');
        });
    }
    get valid() {
        return this.requiredAttribute ? this.selected && this.selected.length > 0 : true;
    }
    set selected(values) {
        if (!this.checkIsValuesChanged(values)) {
            return;
        }
        this.oldValues = this.selected;
        $(this.el.nativeElement).selectpicker('val', values);
        this.doValidation();
    }
    get selected() {
        return $(this.el.nativeElement).selectpicker('val');
    }
}
/** @nocollapse */ BootstrapSelectDirective.ɵfac = function BootstrapSelectDirective_Factory(t) { return new (t || BootstrapSelectDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
/** @nocollapse */ BootstrapSelectDirective.ɵdir = i0.ɵɵdefineDirective({ type: BootstrapSelectDirective, selectors: [["", "bootstrapSelect", ""]], inputs: { required: "required", ngModel: "ngModel" }, outputs: { ngModelChange: "ngModelChange", shown: "shown", hidden: "hidden" }, exportAs: ["bootstrap-select"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BootstrapSelectDirective, [{
        type: Directive,
        args: [{
                selector: '[bootstrapSelect]',
                exportAs: 'bootstrap-select'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { required: [{
            type: Input
        }], ngModel: [{
            type: Input
        }], ngModelChange: [{
            type: Output
        }], shown: [{
            type: Output
        }], hidden: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLXNlbGVjdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvYm9vdHN0cmFwLXNlbGVjdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBRWhDLE9BQU8sRUFBRSxTQUFTLEVBQXlCLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUNqSCxPQUFPLEVBQTRCLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFTM0QsTUFBTSxPQUFPLHdCQUF3QjtJQTJCakMsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUF6QjFCLGNBQVMsR0FBc0IsRUFBRSxDQUFDO1FBZ0IxQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHbkMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHM0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJeEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUN0SCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMxQztRQUNMLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDSixJQUFJLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxD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d0JBQXdCO2dGQUF4Qix3QkFBd0I7a0RBQXhCLHdCQUF3QjtjQUpwQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLGtCQUFrQjthQUMvQjs7a0JBU0ksS0FBSzs7a0JBR0wsS0FBSzs7a0JBTUwsTUFBTTs7a0JBR04sTUFBTTs7a0JBR04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBBdHRyaWJ1dGUsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tib290c3RyYXBTZWxlY3RdJyxcbiAgICBleHBvcnRBczogJ2Jvb3RzdHJhcC1zZWxlY3QnXG59KVxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcFNlbGVjdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHByaXZhdGUgb2xkVmFsdWVzOiBzdHJpbmcgfCBzdHJpbmdbXSA9ICcnO1xuXG4gICAgcHJpdmF0ZSBjaGFuZ2VkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSBzaG93blN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgaGlkZGVuU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBASW5wdXQoKVxuICAgIHJlcXVpcmVkOiBzdHJpbmc7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBuZ01vZGVsKHZhbHVlczogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNlbGVjdGVkID0gdmFsdWVzKTtcbiAgICB9XG5cblxuICAgIEBPdXRwdXQoKVxuICAgIG5nTW9kZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAT3V0cHV0KClcbiAgICBzaG93biA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIGhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmNoYW5nZWRTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQoJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLCAnY2hhbmdlZC5icy5zZWxlY3QnKS5zdWJzY3JpYmUoKGU6IGFueSkgPT4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja0lzVmFsdWVzQ2hhbmdlZCh0aGlzLnNlbGVjdGVkKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMuc2hvd25TdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQoJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLCAnc2hvd24uYnMuc2VsZWN0Jykuc3Vic2NyaWJlKChlOiBhbnkpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zaG93bi5lbWl0KCkpKTtcbiAgICAgICAgdGhpcy5oaWRkZW5TdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQoJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLCAnaGlkZGVuLmJzLnNlbGVjdCcpLnN1YnNjcmliZSgoZTogYW55KSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaGlkZGVuLmVtaXQoKSkpO1xuICAgIH1cblxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5zZWxlY3RwaWNrZXIoKTtcblxuICAgICAgICBpZiAodGhpcy5yZXF1aXJlZEF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLnNlbGVjdHBpY2tlcignc2V0U3R5bGUnLCAncmVxdWlyZWQnLCAnYWRkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5kb1ZhbGlkYXRpb24oKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlZFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zaG93blN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zaG93blN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGlkZGVuU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGRlblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLnNlbGVjdHBpY2tlcignZGVzdHJveScpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tJc1ZhbHVlc0NoYW5nZWQobmV3VmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgICAgIHJldHVybiAhKG5ld1ZhbHVlID09IHRoaXMub2xkVmFsdWVzIHx8XG4gICAgICAgICAgICAobmV3VmFsdWUgaW5zdGFuY2VvZiBBcnJheSAmJiBuZXdWYWx1ZS5sZW5ndGggPT09IHRoaXMub2xkVmFsdWVzLmxlbmd0aCAmJiBuZXdWYWx1ZS5ldmVyeSgodiwgaSkgPT4gdiA9PT0gdGhpcy5vbGRWYWx1ZXNbaV0pKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb1ZhbGlkYXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnJlcXVpcmVkQXR0cmlidXRlKSB7XG4gICAgICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuc2VsZWN0cGlja2VyKCdzZXRTdHlsZScsICF0aGlzLnZhbGlkID8gJ25nLXZhbGlkJyA6ICduZy1pbnZhbGlkJywgJ3JlbW92ZScpO1xuICAgICAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLnNlbGVjdHBpY2tlcignc2V0U3R5bGUnLCB0aGlzLnZhbGlkID8gJ25nLXZhbGlkJyA6ICduZy1pbnZhbGlkJywgJ2FkZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgcmVxdWlyZWRBdHRyaWJ1dGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVpcmVkID09PSAnJyB8fCB0aGlzLnJlcXVpcmVkID09ICd0cnVlJztcbiAgICB9XG5cblxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLnNlbGVjdHBpY2tlcigncmVmcmVzaCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLnNlbGVjdHBpY2tlcigncmVuZGVyJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZ2V0IHZhbGlkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1aXJlZEF0dHJpYnV0ZSA/IHRoaXMuc2VsZWN0ZWQgJiYgdGhpcy5zZWxlY3RlZC5sZW5ndGggPiAwIDogdHJ1ZTtcbiAgICB9XG5cblxuICAgIHNldCBzZWxlY3RlZCh2YWx1ZXM6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrSXNWYWx1ZXNDaGFuZ2VkKHZhbHVlcykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub2xkVmFsdWVzID0gdGhpcy5zZWxlY3RlZDtcbiAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLnNlbGVjdHBpY2tlcigndmFsJywgdmFsdWVzKTtcbiAgICAgICAgdGhpcy5kb1ZhbGlkYXRpb24oKTtcbiAgICB9XG5cblxuICAgIGdldCBzZWxlY3RlZCgpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgICAgIHJldHVybiAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuc2VsZWN0cGlja2VyKCd2YWwnKTtcbiAgICB9XG59XG4iXX0=