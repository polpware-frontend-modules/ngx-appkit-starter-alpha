import { ElementRef, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BootstrapToggleDirective implements OnInit, OnDestroy {
    private el;
    private checkedSubscription;
    set ngModel(value: any);
    ngModelChange: EventEmitter<any>;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    initialize(options?: any): void;
    destroy(): void;
    toggleOn(): void;
    toggleOff(): void;
    toggle(value?: boolean): void;
    enable(): void;
    disable(): void;
    static ɵfac: i0.ɵɵFactoryDef<BootstrapToggleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BootstrapToggleDirective, "[bootstrapToggle]", ["bootstrap-toggle"], { "ngModel": "ngModel"; }, { "ngModelChange": "ngModelChange"; }, never>;
}
