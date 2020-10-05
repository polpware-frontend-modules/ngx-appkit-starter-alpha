// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import * as i0 from "@angular/core";
var BootstrapToggleDirective = /** @class */ (function () {
    function BootstrapToggleDirective(el) {
        var _this = this;
        this.el = el;
        this.ngModelChange = new EventEmitter();
        this.checkedSubscription = fromEvent($(this.el.nativeElement), 'change')
            .subscribe(function (e) { return _this.ngModelChange.emit(e.target.checked); });
    }
    Object.defineProperty(BootstrapToggleDirective.prototype, "ngModel", {
        set: function (value) {
            this.toggle(value);
        },
        enumerable: true,
        configurable: true
    });
    BootstrapToggleDirective.prototype.ngOnInit = function () {
        this.initialize();
    };
    BootstrapToggleDirective.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    BootstrapToggleDirective.prototype.initialize = function (options) {
        $(this.el.nativeElement).bootstrapToggle(options);
    };
    BootstrapToggleDirective.prototype.destroy = function () {
        if (this.checkedSubscription) {
            this.checkedSubscription.unsubscribe();
        }
        $(this.el.nativeElement).bootstrapToggle('destroy');
    };
    BootstrapToggleDirective.prototype.toggleOn = function () {
        $(this.el.nativeElement).bootstrapToggle('on');
    };
    BootstrapToggleDirective.prototype.toggleOff = function () {
        $(this.el.nativeElement).bootstrapToggle('off');
    };
    BootstrapToggleDirective.prototype.toggle = function (value) {
        if (value == null) {
            $(this.el.nativeElement).bootstrapToggle('toggle');
        }
        else {
            $(this.el.nativeElement).prop('checked', value).change();
        }
    };
    BootstrapToggleDirective.prototype.enable = function () {
        $(this.el.nativeElement).bootstrapToggle('enable');
    };
    BootstrapToggleDirective.prototype.disable = function () {
        $(this.el.nativeElement).bootstrapToggle('disable');
    };
    /** @nocollapse */ BootstrapToggleDirective.ɵfac = function BootstrapToggleDirective_Factory(t) { return new (t || BootstrapToggleDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ BootstrapToggleDirective.ɵdir = i0.ɵɵdefineDirective({ type: BootstrapToggleDirective, selectors: [["", "bootstrapToggle", ""]], inputs: { ngModel: "ngModel" }, outputs: { ngModelChange: "ngModelChange" }, exportAs: ["bootstrap-toggle"] });
    return BootstrapToggleDirective;
}());
export { BootstrapToggleDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvYm9vdHN0cmFwLXRvZ2dsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBRWhDLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBNEIsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUszRDtJQWlCSSxrQ0FBb0IsRUFBYztRQUFsQyxpQkFHQztRQUhtQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBSGxDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUkvQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLFFBQVEsQ0FBQzthQUNuRSxTQUFTLENBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUF6QyxDQUF5QyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQVpELHNCQUNJLDZDQUFPO2FBRFgsVUFDWSxLQUFLO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQVlELDJDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDhDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUdELDZDQUFVLEdBQVYsVUFBVyxPQUFhO1FBQ3BCLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsMENBQU8sR0FBUDtRQUNJLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzFCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMxQztRQUVELENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUNJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsNENBQVMsR0FBVDtRQUNJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQseUNBQU0sR0FBTixVQUFPLEtBQWU7UUFDbEIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2YsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3REO2FBQU07WUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzVEO0lBQ0wsQ0FBQztJQUVELHlDQUFNLEdBQU47UUFDSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELDBDQUFPLEdBQVA7UUFDSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEQsQ0FBQzt1SEE5RFEsd0JBQXdCO29GQUF4Qix3QkFBd0I7bUNBZnJDO0NBOEVDLEFBbkVELElBbUVDO1NBL0RZLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBSnBDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsa0JBQWtCO2FBQy9COztrQkFLSSxLQUFLOztrQkFLTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cblxuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tib290c3RyYXBUb2dnbGVdJyxcbiAgICBleHBvcnRBczogJ2Jvb3RzdHJhcC10b2dnbGUnXG59KVxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcFRvZ2dsZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHByaXZhdGUgY2hlY2tlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgbmdNb2RlbCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgbmdNb2RlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgICAgICB0aGlzLmNoZWNrZWRTdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQoJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLCAnY2hhbmdlJylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IGFueSkgPT4gdGhpcy5uZ01vZGVsQ2hhbmdlLmVtaXQoZS50YXJnZXQuY2hlY2tlZCkpO1xuICAgIH1cblxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG5cblxuICAgIGluaXRpYWxpemUob3B0aW9ucz86IGFueSkge1xuICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuYm9vdHN0cmFwVG9nZ2xlKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWRTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmJvb3RzdHJhcFRvZ2dsZSgnZGVzdHJveScpO1xuICAgIH1cblxuICAgIHRvZ2dsZU9uKCkge1xuICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuYm9vdHN0cmFwVG9nZ2xlKCdvbicpO1xuICAgIH1cblxuICAgIHRvZ2dsZU9mZigpIHtcbiAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmJvb3RzdHJhcFRvZ2dsZSgnb2ZmJyk7XG4gICAgfVxuXG4gICAgdG9nZ2xlKHZhbHVlPzogYm9vbGVhbikge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmJvb3RzdHJhcFRvZ2dsZSgndG9nZ2xlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkucHJvcCgnY2hlY2tlZCcsIHZhbHVlKS5jaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZSgpIHtcbiAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmJvb3RzdHJhcFRvZ2dsZSgnZW5hYmxlJyk7XG4gICAgfVxuXG4gICAgZGlzYWJsZSgpIHtcbiAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmJvb3RzdHJhcFRvZ2dsZSgnZGlzYWJsZScpO1xuICAgIH1cbn1cbiJdfQ==