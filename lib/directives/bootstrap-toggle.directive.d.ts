import { ElementRef, EventEmitter, OnInit, OnDestroy } from '@angular/core';
export declare class BootstrapToggleDirective implements OnInit, OnDestroy {
    private el;
    private checkedSubscription;
    ngModel: any;
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
}
