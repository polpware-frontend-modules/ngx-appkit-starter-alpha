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
export class BootstrapTabDirective {
    /**
     * @param {?} el
     * @param {?} zone
     */
    constructor(el, zone) {
        this.el = el;
        this.zone = zone;
        this.showBSTab = new EventEmitter();
        this.hideBSTab = new EventEmitter();
        this.tabShownSubscription = fromEvent($(this.el.nativeElement), 'show.bs.tab')
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            this.runInZone((/**
             * @return {?}
             */
            () => this.showBSTab.emit({ type: e.type, target: e.target, relatedTarget: e.relatedTarget })));
        }));
        this.tabHiddenSubscription = fromEvent($(this.el.nativeElement), 'hidden.bs.tab')
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            this.runInZone((/**
             * @return {?}
             */
            () => this.hideBSTab.emit({ type: e.type, target: e.target, relatedTarget: e.relatedTarget })));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.tabShownSubscription.unsubscribe();
        this.tabHiddenSubscription.unsubscribe();
    }
    /**
     * @private
     * @param {?} delegate
     * @return {?}
     */
    runInZone(delegate) {
        this.zone.run((/**
         * @return {?}
         */
        () => {
            delegate();
        }));
    }
    /**
     * @param {?} selector
     * @return {?}
     */
    show(selector) {
        $(selector).tab('show');
    }
}
BootstrapTabDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bootstrapTab]',
                exportAs: 'bootstrap-tab'
            },] }
];
/** @nocollapse */
BootstrapTabDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
BootstrapTabDirective.propDecorators = {
    showBSTab: [{ type: Output }],
    hideBSTab: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLXRhYi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvYm9vdHN0cmFwLXRhYi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUE0QixTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFLM0QsdUJBQTZFOzs7SUFBeEQsd0JBQWE7O0lBQUMsMEJBQWdCOztJQUFDLGlDQUF1Qjs7QUFNM0UsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFhOUIsWUFBb0IsRUFBYyxFQUFVLElBQVk7UUFBcEMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFUeEQsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFHekMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFRckMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxhQUFhLENBQUM7YUFDekUsU0FBUzs7OztRQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVM7OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFDLENBQUM7UUFDbEgsQ0FBQyxFQUFDLENBQUM7UUFFUCxJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLGVBQWUsQ0FBQzthQUM1RSxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUzs7O1lBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUNsSCxDQUFDLEVBQUMsQ0FBQztJQUNYLENBQUM7Ozs7SUFHRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7SUFHTyxTQUFTLENBQUMsUUFBbUI7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7UUFBQyxHQUFHLEVBQUU7WUFDZixRQUFRLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFHRCxJQUFJLENBQUMsUUFBZ0I7UUFDakIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUE5Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxlQUFlO2FBQzVCOzs7O1lBWG1CLFVBQVU7WUFBbUMsTUFBTTs7O3dCQWVsRSxNQUFNO3dCQUdOLE1BQU07Ozs7SUFIUCwwQ0FDeUM7O0lBRXpDLDBDQUN5Qzs7Ozs7SUFFekMscURBQTJDOzs7OztJQUMzQyxzREFBNEM7Ozs7O0lBR2hDLG1DQUFzQjs7Ozs7SUFBRSxxQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5cbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuaW50ZXJmYWNlIGV2ZW50QXJnIHsgdHlwZTogc3RyaW5nOyB0YXJnZXQ6IEVsZW1lbnQ7IHJlbGF0ZWRUYXJnZXQ6IEVsZW1lbnQ7IH1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbYm9vdHN0cmFwVGFiXScsXG4gICAgZXhwb3J0QXM6ICdib290c3RyYXAtdGFiJ1xufSlcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBUYWJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cbiAgICBAT3V0cHV0KClcbiAgICBzaG93QlNUYWIgPSBuZXcgRXZlbnRFbWl0dGVyPGV2ZW50QXJnPigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgaGlkZUJTVGFiID0gbmV3IEV2ZW50RW1pdHRlcjxldmVudEFyZz4oKTtcblxuICAgIHByaXZhdGUgdGFiU2hvd25TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIHRhYkhpZGRlblN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuXG4gICAgICAgIHRoaXMudGFiU2hvd25TdWJzY3JpcHRpb24gPSBmcm9tRXZlbnQoJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLCAnc2hvdy5icy50YWInKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5JblpvbmUoKCkgPT4gdGhpcy5zaG93QlNUYWIuZW1pdCh7IHR5cGU6IGUudHlwZSwgdGFyZ2V0OiBlLnRhcmdldCwgcmVsYXRlZFRhcmdldDogZS5yZWxhdGVkVGFyZ2V0IH0pKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGFiSGlkZGVuU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KCQodGhpcy5lbC5uYXRpdmVFbGVtZW50KSwgJ2hpZGRlbi5icy50YWInKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5JblpvbmUoKCkgPT4gdGhpcy5oaWRlQlNUYWIuZW1pdCh7IHR5cGU6IGUudHlwZSwgdGFyZ2V0OiBlLnRhcmdldCwgcmVsYXRlZFRhcmdldDogZS5yZWxhdGVkVGFyZ2V0IH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudGFiU2hvd25TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy50YWJIaWRkZW5TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgcnVuSW5ab25lKGRlbGVnYXRlOiAoKSA9PiBhbnkpIHtcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICBkZWxlZ2F0ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHNob3coc2VsZWN0b3I6IHN0cmluZykge1xuICAgICAgICAkKHNlbGVjdG9yKS50YWIoJ3Nob3cnKTtcbiAgICB9XG59XG4iXX0=