// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _c0 = ["searchInput"];
function SearchBoxComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵlistener("click", function SearchBoxComponent_a_5_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.clear(); });
    i0.ɵɵelementEnd();
} }
export class SearchBoxComponent {
    constructor() {
        this.placeholder = 'Search...';
        this.searchChange = new EventEmitter();
    }
    onValueChange(value) {
        setTimeout(() => this.searchChange.emit(value));
    }
    clear() {
        this.searchInput.nativeElement.value = '';
        this.onValueChange(this.searchInput.nativeElement.value);
    }
}
/** @nocollapse */ SearchBoxComponent.ɵfac = function SearchBoxComponent_Factory(t) { return new (t || SearchBoxComponent)(); };
/** @nocollapse */ SearchBoxComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SearchBoxComponent, selectors: [["search-box"]], viewQuery: function SearchBoxComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchInput = _t.first);
    } }, inputs: { placeholder: "placeholder" }, outputs: { searchChange: "searchChange" }, decls: 6, vars: 2, consts: [[1, "icon-addon", "addon-sm"], ["for", "searchInput", "title", "Search"], [1, "fa", "fa-search", "left-icon", "search-icon"], ["id", "searchInput", "type", "search", "ngModel", "", 1, "form-control", "left-icon", "right-icon", 3, "ngModelChange"], ["searchInput", ""], ["href", "javascript:;", "title", "Clear", "class", "fa fa-times-circle clear-input right-icon", 3, "click", 4, "ngIf"], ["href", "javascript:;", "title", "Clear", 1, "fa", "fa-times-circle", "clear-input", "right-icon", 3, "click"]], template: function SearchBoxComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "label", 1);
        i0.ɵɵelement(2, "i", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 3, 4);
        i0.ɵɵlistener("ngModelChange", function SearchBoxComponent_Template_input_ngModelChange_3_listener($event) { return ctx.onValueChange($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, SearchBoxComponent_a_5_Template, 1, 0, "a", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(4);
        i0.ɵɵadvance(3);
        i0.ɵɵattribute("placeholder", ctx.placeholder);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", _r0.value);
    } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.NgIf], styles: [".search-icon[_ngcontent-%COMP%]{pointer-events:none}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SearchBoxComponent, [{
        type: Component,
        args: [{
                selector: 'search-box',
                templateUrl: './search-box.component.html',
                styleUrls: ['./search-box.component.scss']
            }]
    }], null, { placeholder: [{
            type: Input
        }], searchChange: [{
            type: Output
        }], searchInput: [{
            type: ViewChild,
            args: ['searchInput', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixnQ0FBZ0M7QUFFaEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNGMUYsNEJBQXVJO0lBQXhFLDBLQUFpQjtJQUFtRCxpQkFBSTs7QURTM0ksTUFBTSxPQUFPLGtCQUFrQjtJQUwvQjtRQVFJLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBRzFCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztLQWU3QztJQVRHLGFBQWEsQ0FBQyxLQUFhO1FBQ3ZCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFHRCxLQUFLO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7O3VHQXBCUSxrQkFBa0I7MEVBQWxCLGtCQUFrQjs7Ozs7O1FDWi9CLDhCQUNJO1FBQUEsZ0NBQXdDO1FBQUEsdUJBQWtEO1FBQUEsaUJBQVE7UUFDbEcsbUNBQ0E7UUFEOEQsb0hBQWlCLHlCQUFxQixJQUFDO1FBQXJHLGlCQUNBO1FBQUEsK0RBQW1JO1FBQ3ZJLGlCQUFNOzs7UUFGb0csZUFBZ0M7UUFBaEMsOENBQWdDO1FBQ25JLGVBQXlCO1FBQXpCLGdDQUF5Qjs7a0REU25CLGtCQUFrQjtjQUw5QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzdDOztrQkFHSSxLQUFLOztrQkFHTCxNQUFNOztrQkFHTixTQUFTO21CQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzZWFyY2gtYm94JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWJveC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEJveENvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHBsYWNlaG9sZGVyID0gJ1NlYXJjaC4uLic7XG5cbiAgICBAT3V0cHV0KClcbiAgICBzZWFyY2hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIEBWaWV3Q2hpbGQoJ3NlYXJjaElucHV0JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBzZWFyY2hJbnB1dDogRWxlbWVudFJlZjtcblxuXG4gICAgb25WYWx1ZUNoYW5nZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZWFyY2hDaGFuZ2UuZW1pdCh2YWx1ZSkpO1xuICAgIH1cblxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2UodGhpcy5zZWFyY2hJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlKTtcbiAgICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiaWNvbi1hZGRvbiBhZGRvbi1zbVwiPlxuICAgIDxsYWJlbCBmb3I9XCJzZWFyY2hJbnB1dFwiIHRpdGxlPVwiU2VhcmNoXCI+PGkgY2xhc3M9XCJmYSBmYS1zZWFyY2ggbGVmdC1pY29uIHNlYXJjaC1pY29uXCI+PC9pPjwvbGFiZWw+XG4gICAgPGlucHV0IGlkPVwic2VhcmNoSW5wdXRcIiAjc2VhcmNoSW5wdXQgdHlwZT1cInNlYXJjaFwiIG5nTW9kZWw9XCJcIiAobmdNb2RlbENoYW5nZSk9XCJvblZhbHVlQ2hhbmdlKCRldmVudClcIiBbYXR0ci5wbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGxlZnQtaWNvbiByaWdodC1pY29uXCI+XG4gICAgPGEgKm5nSWY9XCJzZWFyY2hJbnB1dC52YWx1ZVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiB0aXRsZT1cIkNsZWFyXCIgKGNsaWNrKT1cImNsZWFyKClcIiBjbGFzcz1cImZhIGZhLXRpbWVzLWNpcmNsZSBjbGVhci1pbnB1dCByaWdodC1pY29uXCI+PC9hPlxuPC9kaXY+Il19