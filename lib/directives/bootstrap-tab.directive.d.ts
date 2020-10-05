import { ElementRef, EventEmitter, OnDestroy, NgZone } from '@angular/core';
import * as i0 from "@angular/core";
interface eventArg {
    type: string;
    target: Element;
    relatedTarget: Element;
}
export declare class BootstrapTabDirective implements OnDestroy {
    private el;
    private zone;
    showBSTab: EventEmitter<eventArg>;
    hideBSTab: EventEmitter<eventArg>;
    private tabShownSubscription;
    private tabHiddenSubscription;
    constructor(el: ElementRef, zone: NgZone);
    ngOnDestroy(): void;
    private runInZone;
    show(selector: string): void;
    static ɵfac: i0.ɵɵFactoryDef<BootstrapTabDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BootstrapTabDirective, "[bootstrapTab]", ["bootstrap-tab"], {}, { "showBSTab": "showBSTab"; "hideBSTab": "hideBSTab"; }, never>;
}
export {};
