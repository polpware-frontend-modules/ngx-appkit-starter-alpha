/**
 * @fileoverview added by tsickle
 * Generated from: lib/directives/bootstrap-tab.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Directive, ElementRef, Output, EventEmitter, NgZone } from '@angular/core';
import { fromEvent } from 'rxjs';
/**
 * @record
 */
function eventArg() { }
if (false) {
    /** @type {?} */
    eventArg.prototype.type;
    /** @type {?} */
    eventArg.prototype.target;
    /** @type {?} */
    eventArg.prototype.relatedTarget;
}
var BootstrapTabDirective = /** @class */ (function () {
    function BootstrapTabDirective(el, zone) {
        var _this = this;
        this.el = el;
        this.zone = zone;
        this.showBSTab = new EventEmitter();
        this.hideBSTab = new EventEmitter();
        this.tabShownSubscription = fromEvent($(this.el.nativeElement), 'show.bs.tab')
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.runInZone((/**
             * @return {?}
             */
            function () { return _this.showBSTab.emit({ type: e.type, target: e.target, relatedTarget: e.relatedTarget }); }));
        }));
        this.tabHiddenSubscription = fromEvent($(this.el.nativeElement), 'hidden.bs.tab')
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.runInZone((/**
             * @return {?}
             */
            function () { return _this.hideBSTab.emit({ type: e.type, target: e.target, relatedTarget: e.relatedTarget }); }));
        }));
    }
    /**
     * @return {?}
     */
    BootstrapTabDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tabShownSubscription.unsubscribe();
        this.tabHiddenSubscription.unsubscribe();
    };
    /**
     * @private
     * @param {?} delegate
     * @return {?}
     */
    BootstrapTabDirective.prototype.runInZone = /**
     * @private
     * @param {?} delegate
     * @return {?}
     */
    function (delegate) {
        this.zone.run((/**
         * @return {?}
         */
        function () {
            delegate();
        }));
    };
    /**
     * @param {?} selector
     * @return {?}
     */
    BootstrapTabDirective.prototype.show = /**
     * @param {?} selector
     * @return {?}
     */
    function (selector) {
        $(selector).tab('show');
    };
    BootstrapTabDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bootstrapTab]',
                    exportAs: 'bootstrap-tab'
                },] }
    ];
    /** @nocollapse */
    BootstrapTabDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BootstrapTabDirective.propDecorators = {
        showBSTab: [{ type: Output }],
        hideBSTab: [{ type: Output }]
    };
    return BootstrapTabDirective;
}());
export { BootstrapTabDirective };
if (false) {
    /** @type {?} */
    BootstrapTabDirective.prototype.showBSTab;
    /** @type {?} */
    BootstrapTabDirective.prototype.hideBSTab;
    /**
     * @type {?}
     * @private
     */
    BootstrapTabDirective.prototype.tabShownSubscription;
    /**
     * @type {?}
     * @private
     */
    BootstrapTabDirective.prototype.tabHiddenSubscription;
    /**
     * @type {?}
     * @private
     */
    BootstrapTabDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    BootstrapTabDirective.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLXRhYi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvYm9vdHN0cmFwLXRhYi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUE0QixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFLM0QsdUJBQTZFOzs7SUFBeEQsd0JBQWE7O0lBQUMsMEJBQWdCOztJQUFDLGlDQUF1Qjs7QUFFM0U7SUFpQkksK0JBQW9CLEVBQWMsRUFBVSxJQUFZO1FBQXhELGlCQVdDO1FBWG1CLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBVHhELGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBR3pDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBUXJDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsYUFBYSxDQUFDO2FBQ3pFLFNBQVM7Ozs7UUFBQyxVQUFDLENBQU07WUFDZCxLQUFJLENBQUMsU0FBUzs7O1lBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUF2RixDQUF1RixFQUFDLENBQUM7UUFDbEgsQ0FBQyxFQUFDLENBQUM7UUFFUCxJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLGVBQWUsQ0FBQzthQUM1RSxTQUFTOzs7O1FBQUMsVUFBQyxDQUFNO1lBQ2QsS0FBSSxDQUFDLFNBQVM7OztZQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBdkYsQ0FBdUYsRUFBQyxDQUFDO1FBQ2xILENBQUMsRUFBQyxDQUFDO0lBQ1gsQ0FBQzs7OztJQUdELDJDQUFXOzs7SUFBWDtRQUNJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0MsQ0FBQzs7Ozs7O0lBR08seUNBQVM7Ozs7O0lBQWpCLFVBQWtCLFFBQW1CO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1FBQUM7WUFDVixRQUFRLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFHRCxvQ0FBSTs7OztJQUFKLFVBQUssUUFBZ0I7UUFDakIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDOztnQkE5Q0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxlQUFlO2lCQUM1Qjs7OztnQkFYbUIsVUFBVTtnQkFBbUMsTUFBTTs7OzRCQWVsRSxNQUFNOzRCQUdOLE1BQU07O0lBcUNYLDRCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0EzQ1kscUJBQXFCOzs7SUFHOUIsMENBQ3lDOztJQUV6QywwQ0FDeUM7Ozs7O0lBRXpDLHFEQUEyQzs7Ozs7SUFDM0Msc0RBQTRDOzs7OztJQUdoQyxtQ0FBc0I7Ozs7O0lBQUUscUNBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcblxuXG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbmludGVyZmFjZSBldmVudEFyZyB7IHR5cGU6IHN0cmluZzsgdGFyZ2V0OiBFbGVtZW50OyByZWxhdGVkVGFyZ2V0OiBFbGVtZW50OyB9XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2Jvb3RzdHJhcFRhYl0nLFxuICAgIGV4cG9ydEFzOiAnYm9vdHN0cmFwLXRhYidcbn0pXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwVGFiRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuXG4gICAgQE91dHB1dCgpXG4gICAgc2hvd0JTVGFiID0gbmV3IEV2ZW50RW1pdHRlcjxldmVudEFyZz4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIGhpZGVCU1RhYiA9IG5ldyBFdmVudEVtaXR0ZXI8ZXZlbnRBcmc+KCk7XG5cbiAgICBwcml2YXRlIHRhYlNob3duU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgcHJpdmF0ZSB0YWJIaWRkZW5TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHtcblxuICAgICAgICB0aGlzLnRhYlNob3duU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KCQodGhpcy5lbC5uYXRpdmVFbGVtZW50KSwgJ3Nob3cuYnMudGFiJylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucnVuSW5ab25lKCgpID0+IHRoaXMuc2hvd0JTVGFiLmVtaXQoeyB0eXBlOiBlLnR5cGUsIHRhcmdldDogZS50YXJnZXQsIHJlbGF0ZWRUYXJnZXQ6IGUucmVsYXRlZFRhcmdldCB9KSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRhYkhpZGRlblN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCgkKHRoaXMuZWwubmF0aXZlRWxlbWVudCksICdoaWRkZW4uYnMudGFiJylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucnVuSW5ab25lKCgpID0+IHRoaXMuaGlkZUJTVGFiLmVtaXQoeyB0eXBlOiBlLnR5cGUsIHRhcmdldDogZS50YXJnZXQsIHJlbGF0ZWRUYXJnZXQ6IGUucmVsYXRlZFRhcmdldCB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnRhYlNob3duU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMudGFiSGlkZGVuU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHJ1bkluWm9uZShkZWxlZ2F0ZTogKCkgPT4gYW55KSB7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgZGVsZWdhdGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBzaG93KHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgICAgICAgJChzZWxlY3RvcikudGFiKCdzaG93Jyk7XG4gICAgfVxufVxuIl19