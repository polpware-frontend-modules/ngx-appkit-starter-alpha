import { ElementRef, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BootstrapSelectDirective implements OnInit, OnDestroy {
    private el;
    private oldValues;
    private changedSubscription;
    private shownSubscription;
    private hiddenSubscription;
    required: string;
    set ngModel(values: string | string[]);
    ngModelChange: EventEmitter<any>;
    shown: EventEmitter<any>;
    hidden: EventEmitter<any>;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private checkIsValuesChanged;
    private doValidation;
    private get requiredAttribute();
    refresh(): void;
    render(): void;
    get valid(): boolean;
    set selected(values: string | string[]);
    get selected(): string | string[];
    static ɵfac: i0.ɵɵFactoryDef<BootstrapSelectDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BootstrapSelectDirective, "[bootstrapSelect]", ["bootstrap-select"], { "required": "required"; "ngModel": "ngModel"; }, { "ngModelChange": "ngModelChange"; "shown": "shown"; "hidden": "hidden"; }, never>;
}
