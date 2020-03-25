import { ElementRef, EventEmitter } from '@angular/core';
export declare class SearchBoxComponent {
    placeholder: string;
    searchChange: EventEmitter<string>;
    searchInput: ElementRef;
    onValueChange(value: string): void;
    clear(): void;
}
