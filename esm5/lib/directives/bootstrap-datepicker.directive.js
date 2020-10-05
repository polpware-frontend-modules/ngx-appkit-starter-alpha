// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import * as i0 from "@angular/core";
var BootstrapDatepickerDirective = /** @class */ (function () {
    function BootstrapDatepickerDirective(el) {
        var _this = this;
        this.el = el;
        this._isShown = false;
        this.options = {};
        this.ngModelChange = new EventEmitter();
        this.changedSubscription = fromEvent($(this.el.nativeElement), 'change').subscribe(function (e) { return setTimeout(function () { return _this.ngModelChange.emit(e.target.value); }); });
        this.shownSubscription = fromEvent($(this.el.nativeElement), 'show').subscribe(function (e) { return _this._isShown = true; });
        this.hiddenSubscription = fromEvent($(this.el.nativeElement), 'hide').subscribe(function (e) { return _this._isShown = false; });
    }
    Object.defineProperty(BootstrapDatepickerDirective.prototype, "isShown", {
        get: function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BootstrapDatepickerDirective.prototype, "ngModel", {
        set: function (value) {
            this.tryUpdate(value);
        },
        enumerable: true,
        configurable: true
    });
    BootstrapDatepickerDirective.prototype.ngOnInit = function () {
        this.initialize(this.options);
    };
    BootstrapDatepickerDirective.prototype.ngOnDestroy = function () {
        this.destroy();
    };
    BootstrapDatepickerDirective.prototype.initialize = function (options) {
        $(this.el.nativeElement).datepicker(options);
    };
    BootstrapDatepickerDirective.prototype.destroy = function () {
        if (this.changedSubscription) {
            this.changedSubscription.unsubscribe();
            this.shownSubscription.unsubscribe();
            this.hiddenSubscription.unsubscribe();
        }
        $(this.el.nativeElement).datepicker('destroy');
    };
    BootstrapDatepickerDirective.prototype.show = function () {
        $(this.el.nativeElement).datepicker('show');
    };
    BootstrapDatepickerDirective.prototype.hide = function () {
        $(this.el.nativeElement).datepicker('hide');
    };
    BootstrapDatepickerDirective.prototype.toggle = function () {
        this.isShown ? this.hide() : this.show();
    };
    BootstrapDatepickerDirective.prototype.tryUpdate = function (value) {
        var _this = this;
        clearTimeout(this.updateTimeout);
        if (!$(this.el.nativeElement).is(':focus')) {
            this.update(value);
        }
        else {
            this.updateTimeout = setTimeout(function () {
                _this.updateTimeout = null;
                _this.tryUpdate(value);
            }, 100);
        }
    };
    BootstrapDatepickerDirective.prototype.update = function (value) {
        var _this = this;
        setTimeout(function () { return $(_this.el.nativeElement).datepicker('update', value); });
    };
    BootstrapDatepickerDirective.prototype.setDate = function (value) {
        var _this = this;
        setTimeout(function () { return $(_this.el.nativeElement).datepicker('setDate', value); });
    };
    BootstrapDatepickerDirective.prototype.setUTCDate = function (value) {
        var _this = this;
        setTimeout(function () { return $(_this.el.nativeElement).datepicker('setUTCDate', value); });
    };
    BootstrapDatepickerDirective.prototype.clearDates = function () {
        var _this = this;
        setTimeout(function () { return $(_this.el.nativeElement).datepicker('clearDates'); });
    };
    BootstrapDatepickerDirective.prototype.getDate = function () {
        $(this.el.nativeElement).datepicker('getDate');
    };
    BootstrapDatepickerDirective.prototype.getUTCDate = function () {
        $(this.el.nativeElement).datepicker('getUTCDate');
    };
    /** @nocollapse */ BootstrapDatepickerDirective.ɵfac = function BootstrapDatepickerDirective_Factory(t) { return new (t || BootstrapDatepickerDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ BootstrapDatepickerDirective.ɵdir = i0.ɵɵdefineDirective({ type: BootstrapDatepickerDirective, selectors: [["", "bootstrapDatepicker", ""]], inputs: { options: "options", ngModel: "ngModel" }, outputs: { ngModelChange: "ngModelChange" }, exportAs: ["bootstrap-datepicker"] });
    return BootstrapDatepickerDirective;
}());
export { BootstrapDatepickerDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BootstrapDatepickerDirective, [{
        type: Directive,
        args: [{
                selector: '[bootstrapDatepicker]',
                exportAs: 'bootstrap-datepicker'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { options: [{
            type: Input
        }], ngModel: [{
            type: Input
        }], ngModelChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLWRhdGVwaWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmVzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixnQ0FBZ0M7QUFFaEMsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUE0QixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSzNEO0lBNkJJLHNDQUFvQixFQUFjO1FBQWxDLGlCQUlDO1FBSm1CLE9BQUUsR0FBRixFQUFFLENBQVk7UUF2QjFCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFXekIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQVNiLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUkvQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLENBQU0sSUFBSyxPQUFBLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyxFQUF6RCxDQUF5RCxDQUFDLENBQUM7UUFDMUosSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxLQUFJLENBQUMs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PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbYm9vdHN0cmFwRGF0ZXBpY2tlcl0nLFxuICAgIGV4cG9ydEFzOiAnYm9vdHN0cmFwLWRhdGVwaWNrZXInXG59KVxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcERhdGVwaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBwcml2YXRlIF9pc1Nob3duID0gZmFsc2U7XG4gICAgcHJpdmF0ZSB1cGRhdGVUaW1lb3V0O1xuICAgIHByaXZhdGUgY2hhbmdlZFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHByaXZhdGUgc2hvd25TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIGhpZGRlblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gICAgZ2V0IGlzU2hvd24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1Nob3duO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgb3B0aW9ucyA9IHt9O1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgbmdNb2RlbCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnRyeVVwZGF0ZSh2YWx1ZSk7XG4gICAgfVxuXG5cbiAgICBAT3V0cHV0KClcbiAgICBuZ01vZGVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZFN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCgkKHRoaXMuZWwubmF0aXZlRWxlbWVudCksICdjaGFuZ2UnKS5zdWJzY3JpYmUoKGU6IGFueSkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLm5nTW9kZWxDaGFuZ2UuZW1pdChlLnRhcmdldC52YWx1ZSkpKTtcbiAgICAgICAgdGhpcy5zaG93blN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCgkKHRoaXMuZWwubmF0aXZlRWxlbWVudCksICdzaG93Jykuc3Vic2NyaWJlKChlOiBhbnkpID0+IHRoaXMuX2lzU2hvd24gPSB0cnVlKTtcbiAgICAgICAgdGhpcy5oaWRkZW5TdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQoJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLCAnaGlkZScpLnN1YnNjcmliZSgoZTogYW55KSA9PiB0aGlzLl9pc1Nob3duID0gZmFsc2UpO1xuICAgIH1cblxuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKHRoaXMub3B0aW9ucyk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cblxuXG5cblxuICAgIGluaXRpYWxpemUob3B0aW9ucz86IGFueSkge1xuICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuZGF0ZXBpY2tlcihvcHRpb25zKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5jaGFuZ2VkU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZGVuU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuZGF0ZXBpY2tlcignZGVzdHJveScpO1xuICAgIH1cblxuXG5cbiAgICBzaG93KCkge1xuICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuZGF0ZXBpY2tlcignc2hvdycpO1xuICAgIH1cblxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmRhdGVwaWNrZXIoJ2hpZGUnKTtcbiAgICB9XG5cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgdHJ5VXBkYXRlKHZhbHVlKSB7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudXBkYXRlVGltZW91dCk7XG5cbiAgICAgICAgaWYgKCEkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuaXMoJzpmb2N1cycpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMudHJ5VXBkYXRlKHZhbHVlKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUodmFsdWUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuZGF0ZXBpY2tlcigndXBkYXRlJywgdmFsdWUpKTtcbiAgICB9XG5cblxuICAgIHNldERhdGUodmFsdWUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuZGF0ZXBpY2tlcignc2V0RGF0ZScsIHZhbHVlKSk7XG4gICAgfVxuXG5cbiAgICBzZXRVVENEYXRlKHZhbHVlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLmRhdGVwaWNrZXIoJ3NldFVUQ0RhdGUnLCB2YWx1ZSkpO1xuICAgIH1cblxuXG4gICAgY2xlYXJEYXRlcygpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuZGF0ZXBpY2tlcignY2xlYXJEYXRlcycpKTtcbiAgICB9XG5cblxuICAgIGdldERhdGUoKSB7XG4gICAgICAgICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5kYXRlcGlja2VyKCdnZXREYXRlJyk7XG4gICAgfVxuXG5cbiAgICBnZXRVVENEYXRlKCkge1xuICAgICAgICAkKHRoaXMuZWwubmF0aXZlRWxlbWVudCkuZGF0ZXBpY2tlcignZ2V0VVRDRGF0ZScpO1xuICAgIH1cbn1cbiJdfQ==