import { ElementRef, EventEmitter, OnInit, OnDestroy } from '@angular/core';
export declare class BootstrapSelectDirective implements OnInit, OnDestroy {
    private el;
    private oldValues;
    private changedSubscription;
    private shownSubscription;
    private hiddenSubscription;
    required: string;
    ngModel: string | string[];
    ngModelChange: EventEmitter<any>;
    shown: EventEmitter<any>;
    hidden: EventEmitter<any>;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private checkIsValuesChanged;
    private doValidation;
    private readonly requiredAttribute;
    refresh(): void;
    render(): void;
    readonly valid: boolean;
    selected: string | string[];
}
