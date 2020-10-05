// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
var _c0 = ["searchInput"];
function SearchBoxComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵlistener("click", function SearchBoxComponent_a_5_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r3); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.clear(); });
    i0.ɵɵelementEnd();
} }
var SearchBoxComponent = /** @class */ (function () {
    function SearchBoxComponent() {
        this.placeholder = 'Search...';
        this.searchChange = new EventEmitter();
    }
    SearchBoxComponent.prototype.onValueChange = function (value) {
        var _this = this;
        setTimeout(function () { return _this.searchChange.emit(value); });
    };
    SearchBoxComponent.prototype.clear = function () {
        this.searchInput.nativeElement.value = '';
        this.onValueChange(this.searchInput.nativeElement.value);
    };
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
            var _r0 = i0.ɵɵreference(4);
            i0.ɵɵadvance(3);
            i0.ɵɵattribute("placeholder", ctx.placeholder);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", _r0.value);
        } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.NgIf], styles: [".search-icon[_ngcontent-%COMP%]{pointer-events:none}"] });
    return SearchBoxComponent;
}());
export { SearchBoxComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixnQ0FBZ0M7QUFFaEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNGMUYsNEJBQXVJO0lBQXhFLHdLQUFpQjtJQUFtRCxpQkFBSTs7QURJM0k7SUFBQTtRQVFJLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBRzFCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztLQWU3QztJQVRHLDBDQUFhLEdBQWIsVUFBYyxLQUFhO1FBQTNCLGlCQUVDO1FBREcsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFHRCxrQ0FBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7MkdBcEJRLGtCQUFrQjs4RUFBbEIsa0JBQWtCOzs7Ozs7WUNaL0IsOEJBQ0k7WUFBQSxnQ0FBd0M7WUFBQSx1QkFBa0Q7WUFBQSxpQkFBUTtZQUNsRyxtQ0FDQTtZQUQ4RCxvSEFBaUIseUJBQXFCLElBQUM7WUFBckcsaUJBQ0E7WUFBQSwrREFBbUk7WUFDdkksaUJBQU07OztZQUZvRyxlQUFnQztZQUFoQyw4Q0FBZ0M7WUFDbkksZUFBeUI7WUFBekIsZ0NBQXlCOzs2QkRIaEM7Q0FpQ0MsQUExQkQsSUEwQkM7U0FyQlksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FMOUIsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUsNkJBQTZCO2dCQUMxQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUM3Qzs7a0JBR0ksS0FBSzs7a0JBR0wsTUFBTTs7a0JBR04sU0FBUzttQkFBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2VhcmNoLWJveCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC1ib3guY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3NlYXJjaC1ib3guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hCb3hDb21wb25lbnQge1xuXG4gICAgQElucHV0KClcbiAgICBwbGFjZWhvbGRlciA9ICdTZWFyY2guLi4nO1xuXG4gICAgQE91dHB1dCgpXG4gICAgc2VhcmNoQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgICBAVmlld0NoaWxkKCdzZWFyY2hJbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgc2VhcmNoSW5wdXQ6IEVsZW1lbnRSZWY7XG5cblxuICAgIG9uVmFsdWVDaGFuZ2UodmFsdWU6IHN0cmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VhcmNoQ2hhbmdlLmVtaXQodmFsdWUpKTtcbiAgICB9XG5cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLnNlYXJjaElucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKHRoaXMuc2VhcmNoSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSk7XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImljb24tYWRkb24gYWRkb24tc21cIj5cbiAgICA8bGFiZWwgZm9yPVwic2VhcmNoSW5wdXRcIiB0aXRsZT1cIlNlYXJjaFwiPjxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoIGxlZnQtaWNvbiBzZWFyY2gtaWNvblwiPjwvaT48L2xhYmVsPlxuICAgIDxpbnB1dCBpZD1cInNlYXJjaElucHV0XCIgI3NlYXJjaElucHV0IHR5cGU9XCJzZWFyY2hcIiBuZ01vZGVsPVwiXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25WYWx1ZUNoYW5nZSgkZXZlbnQpXCIgW2F0dHIucGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIiBjbGFzcz1cImZvcm0tY29udHJvbCBsZWZ0LWljb24gcmlnaHQtaWNvblwiPlxuICAgIDxhICpuZ0lmPVwic2VhcmNoSW5wdXQudmFsdWVcIiBocmVmPVwiamF2YXNjcmlwdDo7XCIgdGl0bGU9XCJDbGVhclwiIChjbGljayk9XCJjbGVhcigpXCIgY2xhc3M9XCJmYSBmYS10aW1lcy1jaXJjbGUgY2xlYXItaW5wdXQgcmlnaHQtaWNvblwiPjwvYT5cbjwvZGl2PiJdfQ==