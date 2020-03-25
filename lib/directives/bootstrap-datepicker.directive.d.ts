import { ElementRef, EventEmitter, OnInit, OnDestroy } from '@angular/core';
export declare class BootstrapDatepickerDirective implements OnInit, OnDestroy {
    private el;
    private _isShown;
    private updateTimeout;
    private changedSubscription;
    private shownSubscription;
    private hiddenSubscription;
    readonly isShown: boolean;
    options: {};
    ngModel: any;
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
}
