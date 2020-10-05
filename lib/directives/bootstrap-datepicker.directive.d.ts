import { ElementRef, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BootstrapDatepickerDirective implements OnInit, OnDestroy {
    private el;
    private _isShown;
    private updateTimeout;
    private changedSubscription;
    private shownSubscription;
    private hiddenSubscription;
    get isShown(): boolean;
    options: {};
    set ngModel(value: any);
    ngModelChange: EventEmitter<any>;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    initialize(options?: any): void;
    destroy(): void;
    show(): void;
    hide(): void;
    toggle(): void;
    private tryUpdate;
    update(value: any): void;
    setDate(value: any): void;
    setUTCDate(value: any): void;
    clearDates(): void;
    getDate(): void;
    getUTCDate(): void;
    static ɵfac: i0.ɵɵFactoryDef<BootstrapDatepickerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BootstrapDatepickerDirective, "[bootstrapDatepicker]", ["bootstrap-datepicker"], { "options": "options"; "ngModel": "ngModel"; }, { "ngModelChange": "ngModelChange"; }, never>;
}
