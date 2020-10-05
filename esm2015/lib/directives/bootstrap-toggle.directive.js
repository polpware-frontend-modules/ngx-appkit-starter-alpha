// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import * as i0 from "@angular/core";
export class BootstrapToggleDirective {
    constructor(el) {
        this.el = el;
        this.ngModelChange = new EventEmitter();
        this.checkedSubscription = fromEvent($(this.el.nativeElement), 'change')
            .subscribe((e) => this.ngModelChange.emit(e.target.checked));
    }
    set ngModel(value) {
        this.toggle(value);
    }
    ngOnInit() {
        this.initialize();
    }
    ngOnDestroy() {
        this.destroy();
    }
    initialize(options) {
        $(this.el.nativeElement).bootstrapToggle(options);
    }
    destroy() {
        if (this.checkedSubscription) {
            this.checkedSubscription.unsubscribe();
        }
        $(this.el.nativeElement).bootstrapToggle('destroy');
    }
    toggleOn() {
        $(this.el.nativeElement).bootstrapToggle('on');
    }
    toggleOff() {
        $(this.el.nativeElement).bootstrapToggle('off');
    }
    toggle(value) {
        if (value == null) {
            $(this.el.nativeElement).bootstrapToggle('toggle');
        }
        else {
            $(this.el.nativeElement).prop('checked', value).change();
        }
    }
    enable() {
        $(this.el.nativeElement).bootstrapToggle('enable');
    }
    disable() {
        $(this.el.nativeElement).bootstrapToggle('disable');
    }
}
/** @nocollapse */ BootstrapToggleDirective.ɵfac = function BootstrapToggleDirective_Factory(t) { return new (t || BootstrapToggleDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
/** @nocollapse */ BootstrapToggleDirective.ɵdir = i0.ɵɵdefineDirective({ type: BootstrapToggleDirective, selectors: [["", "bootstrapToggle", ""]], inputs: { ngModel: "ngModel" }, outputs: { ngModelChange: "ngModelChange" }, exportAs: ["bootstrap-toggle"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BootstrapToggleDirective, [{
        type: Directive,
        args: [{
                selector: '[bootstrapToggle]',
                exportAs: 'bootstrap-toggle'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { ngModel: [{
            type: Input
        }], ngModelChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvYm9vdHN0cmFwLXRvZ2dsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBRWhDLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBNEIsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQVMzRCxNQUFNLE9BQU8sd0JBQXdCO0lBYWpDLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBSGxDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUkvQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLFFBQVEsQ0FBQzthQUNuRSxTQUFTLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBWkQsSUFDSSxPQUFPLENBQUMsS0FBSztRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQVlELFFBQVE7UUFDSixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUdELFVBQVUsQ0FBQyxPQUFhO1FBQ3BCLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsT0FBTztRQUNILElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzFCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMxQztRQUVELENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsUUFBUTtRQUNKLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsU0FBUztRQUNMLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWU7UUFDbEIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3REO2FBQU07WUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzVEO0lBQ0wsQ0FBQztJQUVELE1BQU07UUFDRixDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELE9BQU87UUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7bUhBOURRLHdCQUF3QjtnRkFBeEIsd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FKcEMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSxrQkFBa0I7YUFDL0I7O2tCQUtJLEtBQUs7O2tCQUtMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2Jvb3RzdHJhcFRvZ2dsZV0nLFxuICAgIGV4cG9ydEFzOiAnYm9vdHN0cmFwLXRvZ2dsZSdcbn0pXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgcHJpdmF0ZSBjaGVja2VkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBuZ01vZGVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBAT3V0cHV0KClcbiAgICBuZ01vZGVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZFN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCgkKHRoaXMuZWwubmF0aXZlRWxlbWVudCksICdjaGFuZ2UnKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZTogYW55KSA9PiB0aGlzLm5nTW9kZWxDaGFuZ2UuZW1pdChlLnRhcmdldC5jaGVja2VkKSk7XG4gICAgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cblxuXG4gICAgaW5pdGlhbGl6ZShvcHRpb25zPzogYW55KSB7XG4gICAgICAgICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5ib290c3RyYXBUb2dnbGUob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuYm9vdHN0cmFwVG9nZ2xlKCdkZXN0cm95Jyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlT24oKSB7XG4gICAgICAgICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5ib290c3RyYXBUb2dnbGUoJ29uJyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlT2ZmKCkge1xuICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuYm9vdHN0cmFwVG9nZ2xlKCdvZmYnKTtcbiAgICB9XG5cbiAgICB0b2dnbGUodmFsdWU/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuYm9vdHN0cmFwVG9nZ2xlKCd0b2dnbGUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5wcm9wKCdjaGVja2VkJywgdmFsdWUpLmNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5hYmxlKCkge1xuICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuYm9vdHN0cmFwVG9nZ2xlKCdlbmFibGUnKTtcbiAgICB9XG5cbiAgICBkaXNhYmxlKCkge1xuICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuYm9vdHN0cmFwVG9nZ2xlKCdkaXNhYmxlJyk7XG4gICAgfVxufVxuIl19