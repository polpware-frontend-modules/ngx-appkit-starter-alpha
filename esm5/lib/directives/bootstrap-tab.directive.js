// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Directive, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import * as i0 from "@angular/core";
var BootstrapTabDirective = /** @class */ (function () {
    function BootstrapTabDirective(el, zone) {
        var _this = this;
        this.el = el;
        this.zone = zone;
        this.showBSTab = new EventEmitter();
        this.hideBSTab = new EventEmitter();
        this.tabShownSubscription = fromEvent($(this.el.nativeElement), 'show.bs.tab')
            .subscribe(function (e) {
            _this.runInZone(function () { return _this.showBSTab.emit({ type: e.type, target: e.target, relatedTarget: e.relatedTarget }); });
        });
        this.tabHiddenSubscription = fromEvent($(this.el.nativeElement), 'hidden.bs.tab')
            .subscribe(function (e) {
            _this.runInZone(function () { return _this.hideBSTab.emit({ type: e.type, target: e.target, relatedTarget: e.relatedTarget }); });
        });
    }
    BootstrapTabDirective.prototype.ngOnDestroy = function () {
        this.tabShownSubscription.unsubscribe();
        this.tabHiddenSubscription.unsubscribe();
    };
    BootstrapTabDirective.prototype.runInZone = function (delegate) {
        this.zone.run(function () {
            delegate();
        });
    };
    BootstrapTabDirective.prototype.show = function (selector) {
        $(selector).tab('show');
    };
    /** @nocollapse */ BootstrapTabDirective.ɵfac = function BootstrapTabDirective_Factory(t) { return new (t || BootstrapTabDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    /** @nocollapse */ BootstrapTabDirective.ɵdir = i0.ɵɵdefineDirective({ type: BootstrapTabDirective, selectors: [["", "bootstrapTab", ""]], outputs: { showBSTab: "showBSTab", hideBSTab: "hideBSTab" }, exportAs: ["bootstrap-tab"] });
    return BootstrapTabDirective;
}());
export { BootstrapTabDirective };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BootstrapTabDirective, [{
        type: Directive,
        args: [{
                selector: '[bootstrapTab]',
                exportAs: 'bootstrap-tab'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }]; }, { showBSTab: [{
            type: Output
        }], hideBSTab: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLXRhYi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvYm9vdHN0cmFwLXRhYi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBRWhDLE9BQU8sRUFBRSxTQUFTLEVBQWMsTUFBTSxFQUFFLFlBQVksRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUE0QixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBTzNEO0lBaUJJLCtCQUFvQixFQUFjLEVBQVUsSUFBWTtRQUF4RCxpQkFXQztRQVhtQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQVR4RCxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUd6QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQVFyQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLGFBQWEsQ0FBQzthQUN6RSxTQUFTLENBQUMsVUFBQyxDQUFNO1lBQ2QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQXZGLENBQXVGLENBQUMsQ0FBQztRQUNsSCxDQUFDLENBQUMsQ0FBQztRQUVQLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsZUFBZSxDQUFDO2FBQzVFLFNBQVMsQ0FBQyxVQUFDLENBQU07WUFDZCxLQUFJLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBdkYsQ0FBdUYsQ0FBQyxDQUFDO1FBQ2xILENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUdELDJDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFHTyx5Q0FBUyxHQUFqQixVQUFrQixRQUFtQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNWLFFBQVEsRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR0Qsb0NBQUksR0FBSixVQUFLLFFBQWdCO1FBQ2pCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztpSEExQ1EscUJBQXFCO2lGQUFyQixxQkFBcUI7Z0NBakJsQztDQTREQyxBQS9DRCxJQStDQztTQTNDWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUpqQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLGVBQWU7YUFDNUI7O2tCQUlJLE1BQU07O2tCQUdOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuaW50ZXJmYWNlIGV2ZW50QXJnIHsgdHlwZTogc3RyaW5nOyB0YXJnZXQ6IEVsZW1lbnQ7IHJlbGF0ZWRUYXJnZXQ6IEVsZW1lbnQ7IH1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbYm9vdHN0cmFwVGFiXScsXG4gICAgZXhwb3J0QXM6ICdib290c3RyYXAtdGFiJ1xufSlcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBUYWJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cbiAgICBAT3V0cHV0KClcbiAgICBzaG93QlNUYWIgPSBuZXcgRXZlbnRFbWl0dGVyPGV2ZW50QXJnPigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgaGlkZUJTVGFiID0gbmV3IEV2ZW50RW1pdHRlcjxldmVudEFyZz4oKTtcblxuICAgIHByaXZhdGUgdGFiU2hvd25TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIHRhYkhpZGRlblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuXG4gICAgICAgIHRoaXMudGFiU2hvd25TdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQoJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLCAnc2hvdy5icy50YWInKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5JblpvbmUoKCkgPT4gdGhpcy5zaG93QlNUYWIuZW1pdCh7IHR5cGU6IGUudHlwZSwgdGFyZ2V0OiBlLnRhcmdldCwgcmVsYXRlZFRhcmdldDogZS5yZWxhdGVkVGFyZ2V0IH0pKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGFiSGlkZGVuU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KCQodGhpcy5lbC5uYXRpdmVFbGVtZW50KSwgJ2hpZGRlbi5icy50YWInKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5JblpvbmUoKCkgPT4gdGhpcy5oaWRlQlNUYWIuZW1pdCh7IHR5cGU6IGUudHlwZSwgdGFyZ2V0OiBlLnRhcmdldCwgcmVsYXRlZFRhcmdldDogZS5yZWxhdGVkVGFyZ2V0IH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudGFiU2hvd25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy50YWJIaWRkZW5TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgcnVuSW5ab25lKGRlbGVnYXRlOiAoKSA9PiBhbnkpIHtcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICBkZWxlZ2F0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHNob3coc2VsZWN0b3I6IHN0cmluZykge1xuICAgICAgICAkKHNlbGVjdG9yKS50YWIoJ3Nob3cnKTtcbiAgICB9XG59XG4iXX0=