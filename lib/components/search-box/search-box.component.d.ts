import { ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SearchBoxComponent {
    placeholder: string;
    searchChange: EventEmitter<string>;
    searchInput: ElementRef;
    onValueChange(value: string): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDef<SearchBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SearchBoxComponent, "search-box", never, { "placeholder": "placeholder"; }, { "searchChange": "searchChange"; }, never, never>;
}
