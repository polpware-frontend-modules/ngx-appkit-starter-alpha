// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component } from '@angular/core';
import { fromEvent, of, merge } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { DialogType, MessageSeverity } from '@polpware/ngx-appkit-contracts-alpha';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-appkit-services-alpha";
import * as i2 from "ng2-charts";
import * as i3 from "@angular/common";
import * as i4 from "ngx-bootstrap/dropdown";
function StatisticsDemoComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const label_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(label_r2);
} }
function StatisticsDemoComponent_tr_12_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const j_r6 = ctx.index;
    const d_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(d_r3 && d_r3.data[j_r6]);
} }
function StatisticsDemoComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "th");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, StatisticsDemoComponent_tr_12_td_3_Template, 2, 1, "td", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const d_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(d_r3 && d_r3.label.split(" ").pop());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.chartLabels);
} }
require('chart.js');
export class StatisticsDemoComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.chartData = [
            { data: [65, 59, 80, 81, 56, 55], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27], label: 'Series C' }
        ];
        this.chartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        this.chartOptions = {
            responsive: true,
            title: {
                display: false,
                fontSize: 16,
                text: 'Important Stuff'
            }
        };
        this.chartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(128,128,128,0.2)',
                borderColor: 'rgba(128,128,128,1)',
                pointBackgroundColor: 'rgba(128,128,128,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(128,128,128,0.8)'
            }
        ];
        this.chartLegend = true;
        this.chartType = 'line';
    }
    ngOnInit() {
        this.timerReference = setInterval(() => this.randomize(), 5000);
        const initialWidth$ = of(window.innerWidth);
        const resizedWidth$ = fromEvent(window, 'resize').pipe(map((event) => event.target.innerWidth));
        this.windowWidth$ = merge(initialWidth$, resizedWidth$).pipe(distinctUntilChanged());
        this.windowWidthSub = this.windowWidth$.subscribe(width => this.chartLegend = width < 600 ? false : true);
    }
    ngOnDestroy() {
        clearInterval(this.timerReference);
        this.windowWidthSub.unsubscribe();
    }
    randomize() {
        const _chartData = new Array(this.chartData.length);
        for (let i = 0; i < this.chartData.length; i++) {
            _chartData[i] = { data: new Array(this.chartData[i].data.length), label: this.chartData[i].label };
            for (let j = 0; j < this.chartData[i].data.length; j++) {
                _chartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.chartData = _chartData;
    }
    changeChartType(type) {
        this.chartType = type;
    }
    showMessage(msg) {
        this.alertService.showMessage('Demo', msg, MessageSeverity.info);
    }
    showDialog(msg) {
        this.alertService.showDialog(msg, DialogType.prompt, (val) => this.configure(true, val), () => this.configure(false));
    }
    configure(response, value) {
        if (response) {
            this.alertService.showStickyMessage('Simulating...', '', MessageSeverity.wait);
            setTimeout(() => {
                this.alertService.resetStickyMessage();
                this.alertService.showMessage('Demo', `Your settings was successfully configured to \"${value}\"`, MessageSeverity.success);
            }, 2000);
        }
        else {
            this.alertService.showMessage('Demo', 'Operation cancelled by user', MessageSeverity.default);
        }
    }
    chartClicked(e) {
        console.log(e);
    }
    chartHovered(e) {
        console.log(e);
    }
}
/** @nocollapse */ StatisticsDemoComponent.ɵfac = function StatisticsDemoComponent_Factory(t) { return new (t || StatisticsDemoComponent)(i0.ɵɵdirectiveInject(i1.AlertService)); };
/** @nocollapse */ StatisticsDemoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: StatisticsDemoComponent, selectors: [["statistics-demo"]], decls: 42, vars: 20, consts: [[1, "row", "statistics-container"], [1, "col-md-6"], [1, "chart-container"], ["baseChart", "", "width", "600", "height", "250", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"], [1, "d-none", "d-sm-block", "table-responsive"], [1, "table", "table-sm"], [1, "border-top-0"], ["class", "border-top-0", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "refresh-btn", 3, "click"], ["dropdown", "", 1, "chart-type-container"], ["id", "chartType", "type", "button", "data-toggle", "dropdown", 1, "dropdown-toggle"], [1, "fa", "fa-bar-chart"], [1, "dropdown-menu"], ["href", "javascript:;", 1, "dropdown-item", 3, "click"], [1, "dropdown-divider"], [3, "click"], [1, "fa", "fa-bars"], [1, "fa", "fa-cogs"]], template: function StatisticsDemoComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "canvas", 3);
        i0.ɵɵlistener("chartHover", function StatisticsDemoComponent_Template_canvas_chartHover_3_listener($event) { return ctx.chartHovered($event); })("chartClick", function StatisticsDemoComponent_Template_canvas_chartClick_3_listener($event) { return ctx.chartClicked($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 1);
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelementStart(6, "table", 5);
        i0.ɵɵelementStart(7, "thead");
        i0.ɵɵelementStart(8, "tr");
        i0.ɵɵelement(9, "th", 6);
        i0.ɵɵtemplate(10, StatisticsDemoComponent_th_10_Template, 2, 1, "th", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "tbody");
        i0.ɵɵtemplate(12, StatisticsDemoComponent_tr_12_Template, 4, 2, "tr", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 9);
        i0.ɵɵlistener("click", function StatisticsDemoComponent_Template_button_click_13_listener() { ctx.randomize(); return ctx.showMessage("Manual refresh!"); });
        i0.ɵɵtext(14, "REFSH");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 10);
        i0.ɵɵelementStart(16, "button", 11);
        i0.ɵɵelement(17, "i", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "ul", 13);
        i0.ɵɵelementStart(19, "li");
        i0.ɵɵelementStart(20, "a", 14);
        i0.ɵɵlistener("click", function StatisticsDemoComponent_Template_a_click_20_listener() { return ctx.changeChartType("bar"); });
        i0.ɵɵtext(21, "Bar Chart");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "li");
        i0.ɵɵelementStart(23, "a", 14);
        i0.ɵɵlistener("click", function StatisticsDemoComponent_Template_a_click_23_listener() { return ctx.changeChartType("pie"); });
        i0.ɵɵtext(24, "Pie Chart");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "li");
        i0.ɵɵelementStart(26, "a", 14);
        i0.ɵɵlistener("click", function StatisticsDemoComponent_Template_a_click_26_listener() { return ctx.changeChartType("doughnut"); });
        i0.ɵɵtext(27, "Doughnut Chart");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "li");
        i0.ɵɵelementStart(29, "a", 14);
        i0.ɵɵlistener("click", function StatisticsDemoComponent_Template_a_click_29_listener() { return ctx.changeChartType("polarArea"); });
        i0.ɵɵtext(30, "Polar Area Chart");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "li");
        i0.ɵɵelementStart(32, "a", 14);
        i0.ɵɵlistener("click", function StatisticsDemoComponent_Template_a_click_32_listener() { return ctx.changeChartType("radar"); });
        i0.ɵɵtext(33, "Radar Chart");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(34, "li", 15);
        i0.ɵɵelementStart(35, "li");
        i0.ɵɵelementStart(36, "a", 14);
        i0.ɵɵlistener("click", function StatisticsDemoComponent_Template_a_click_36_listener() { return ctx.changeChartType("line"); });
        i0.ɵɵtext(37, "Line Chart");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(38, "button", 16);
        i0.ɵɵlistener("click", function StatisticsDemoComponent_Template_button_click_38_listener() { return ctx.showMessage("You've clicked on the menu"); });
        i0.ɵɵelement(39, "i", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "button", 16);
        i0.ɵɵlistener("click", function StatisticsDemoComponent_Template_button_click_40_listener() { return ctx.showDialog("Enter some value to do serious configuration..."); });
        i0.ɵɵelement(41, "i", 18);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("datasets", ctx.chartData)("labels", ctx.chartLabels)("options", ctx.chartOptions)("colors", ctx.chartColors)("legend", ctx.chartLegend)("chartType", ctx.chartType);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngForOf", ctx.chartLabels);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.chartData);
        i0.ɵɵadvance(7);
        i0.ɵɵclassProp("active", ctx.chartType == "bar");
        i0.ɵɵadvance(3);
        i0.ɵɵclassProp("active", ctx.chartType == "pie");
        i0.ɵɵadvance(3);
        i0.ɵɵclassProp("active", ctx.chartType == "doughnut");
        i0.ɵɵadvance(3);
        i0.ɵɵclassProp("active", ctx.chartType == "polarArea");
        i0.ɵɵadvance(3);
        i0.ɵɵclassProp("active", ctx.chartType == "radar");
        i0.ɵɵadvance(4);
        i0.ɵɵclassProp("active", ctx.chartType == "line");
    } }, directives: [i2.BaseChartDirective, i3.NgForOf, i4.BsDropdownDirective], styles: [".statistics-container[_ngcontent-%COMP%]{font-size:.875rem}.chart-container[_ngcontent-%COMP%]{display:block}.refresh-btn[_ngcontent-%COMP%]{margin-right:10px}.chart-type-container[_ngcontent-%COMP%]{display:inline-block}.chart-type-container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background-color:#e8e8e8}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StatisticsDemoComponent, [{
        type: Component,
        args: [{
                selector: 'statistics-demo',
                templateUrl: './statistics-demo.component.html',
                styleUrls: ['./statistics-demo.component.scss']
            }]
    }], function () { return [{ type: i1.AlertService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy1kZW1vLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zdGF0aXN0aWNzLWRlbW8vc3RhdGlzdGljcy1kZW1vLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3N0YXRpc3RpY3MtZGVtby9zdGF0aXN0aWNzLWRlbW8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDLDZCQUE2QjtBQUM3QiwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBRWhDLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBNEIsU0FBUyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFDSCxVQUFVLEVBQUUsZUFBZSxFQUM5QixNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7O0lDU2xDLDZCQUEyRDtJQUFBLFlBQVM7SUFBQSxpQkFBSzs7O0lBQWQsZUFBUztJQUFULDhCQUFTOzs7SUFNcEUsMEJBQW1EO0lBQUEsWUFBa0I7SUFBQSxpQkFBSzs7OztJQUF2QixlQUFrQjtJQUFsQiw2Q0FBa0I7OztJQUZ2RSwwQkFDRTtJQUFBLDBCQUFJO0lBQUEsWUFBaUM7SUFBQSxpQkFBSztJQUMxQyw0RUFBbUQ7SUFDckQsaUJBQUs7Ozs7SUFGQyxlQUFpQztJQUFqQyx5REFBaUM7SUFDakMsZUFBOEM7SUFBOUMsNENBQThDOztBRFI5RCxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFTcEIsTUFBTSxPQUFPLHVCQUF1QjtJQWtEaEMsWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFoRDlDLGNBQVMsR0FB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LDRCQUE2QixDQUFDLElBQUM7UUFBQyx5QkFBMEI7UUFBQSxpQkFBUztRQUNoRyxtQ0FBZ0Y7UUFBeEUscUdBQVMsZUFBVyxpREFBaUQsQ0FBQyxJQUFDO1FBQUMseUJBQTBCO1FBQUEsaUJBQVM7UUFDckgsaUJBQU07UUFDUixpQkFBTTs7UUF2RFEsZUFBc0I7UUFBdEIsd0NBQXNCLDJCQUFBLDZCQUFBLDJCQUFBLDJCQUFBLDRCQUFBO1FBZ0JDLGVBQWlDO1FBQWpDLHlDQUFpQztRQUl4RCxlQUEyQjtRQUEzQix1Q0FBMkI7UUFXN0IsZUFBbUM7UUFBbkMsZ0RBQW1DO1FBR25DLGVBQW1DO1FBQW5DLGdEQUFtQztRQUduQyxlQUF3QztRQUF4QyxxREFBd0M7UUFHeEMsZUFBeUM7UUFBekMsc0RBQXlDO1FBR3pDLGVBQXFDO1FBQXJDLGtEQUFxQztRQUlyQyxlQUFvQztRQUFwQyxpREFBb0M7O2tERHhCbkMsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNsRCIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBPYnNlcnZhYmxlLCBmcm9tRXZlbnQsIG9mLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgICBEaWFsb2dUeXBlLCBNZXNzYWdlU2V2ZXJpdHlcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBBbGVydFNlcnZpY2Vcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtc2VydmljZXMtYWxwaGEnO1xuXG5cbnJlcXVpcmUoJ2NoYXJ0LmpzJyk7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3N0YXRpc3RpY3MtZGVtbycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3N0YXRpc3RpY3MtZGVtby5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc3RhdGlzdGljcy1kZW1vLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RhdGlzdGljc0RlbW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBjaGFydERhdGEgPSBbXG4gICAgICAgIHsgZGF0YTogWzY1LCA1OSwgODAsIDgxLCA1NiwgNTVdLCBsYWJlbDogJ1NlcmllcyBBJyB9LFxuICAgICAgICB7IGRhdGE6IFsyOCwgNDgsIDQwLCAxOSwgODYsIDI3XSwgbGFiZWw6ICdTZXJpZXMgQicgfSxcbiAgICAgICAgeyBkYXRhOiBbMTgsIDQ4LCA3NywgOSwgMTAwLCAyN10sIGxhYmVsOiAnU2VyaWVzIEMnIH1cbiAgICBdO1xuICAgIGNoYXJ0TGFiZWxzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1biddO1xuICAgIGNoYXJ0T3B0aW9ucyA9IHtcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICAgICAgdGV4dDogJ0ltcG9ydGFudCBTdHVmZidcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hhcnRDb2xvcnMgPSBbXG4gICAgICAgIHsgLy8gZ3JleVxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxNDgsMTU5LDE3NywwLjIpJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgxNDgsMTU5LDE3NywxKScsXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTQ4LDE1OSwxNzcsMSknLFxuICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSgxNDgsMTU5LDE3NywwLjgpJ1xuICAgICAgICB9LFxuICAgICAgICB7IC8vIGRhcmsgZ3JleVxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3Nyw4Myw5NiwwLjIpJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg3Nyw4Myw5NiwxKScsXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzcsODMsOTYsMSknLFxuICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSg3Nyw4Myw5NiwxKSdcbiAgICAgICAgfSxcbiAgICAgICAgeyAvLyBzb21ldGhpbmcgZWxzZVxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxMjgsMTI4LDEyOCwwLjIpJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgxMjgsMTI4LDEyOCwxKScsXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTI4LDEyOCwxMjgsMSknLFxuICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSgxMjgsMTI4LDEyOCwwLjgpJ1xuICAgICAgICB9XG4gICAgXTtcbiAgICBjaGFydExlZ2VuZCA9IHRydWU7XG4gICAgY2hhcnRUeXBlID0gJ2xpbmUnO1xuXG4gICAgdGltZXJSZWZlcmVuY2U6IGFueTtcbiAgICB3aW5kb3dXaWR0aCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICB3aW5kb3dXaWR0aFN1YjogU3Vic2NyaXB0aW9uO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlKSB7XG5cbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnRpbWVyUmVmZXJlbmNlID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5yYW5kb21pemUoKSwgNTAwMCk7XG5cbiAgICAgICAgY29uc3QgaW5pdGlhbFdpZHRoJCA9IG9mKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICAgICAgY29uc3QgcmVzaXplZFdpZHRoJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKG1hcCgoZXZlbnQ6IGFueSkgPT4gZXZlbnQudGFyZ2V0LmlubmVyV2lkdGggYXMgbnVtYmVyKSk7XG4gICAgICAgIHRoaXMud2luZG93V2lkdGgkID0gbWVyZ2UoaW5pdGlhbFdpZHRoJCwgcmVzaXplZFdpZHRoJCkucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcblxuICAgICAgICB0aGlzLndpbmRvd1dpZHRoU3ViID0gdGhpcy53aW5kb3dXaWR0aCQuc3Vic2NyaWJlKHdpZHRoID0+IHRoaXMuY2hhcnRMZWdlbmQgPSB3aWR0aCA8IDYwMCA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lclJlZmVyZW5jZSk7XG4gICAgICAgIHRoaXMud2luZG93V2lkdGhTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cblxuXG4gICAgcmFuZG9taXplKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBfY2hhcnREYXRhID0gbmV3IEFycmF5KHRoaXMuY2hhcnREYXRhLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGFydERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9jaGFydERhdGFbaV0gPSB7IGRhdGE6IG5ldyBBcnJheSh0aGlzLmNoYXJ0RGF0YVtpXS5kYXRhLmxlbmd0aCksIGxhYmVsOiB0aGlzLmNoYXJ0RGF0YVtpXS5sYWJlbCB9O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY2hhcnREYXRhW2ldLmRhdGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBfY2hhcnREYXRhW2ldLmRhdGFbal0gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwKSArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFydERhdGEgPSBfY2hhcnREYXRhO1xuICAgIH1cblxuICAgIGNoYW5nZUNoYXJ0VHlwZSh0eXBlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jaGFydFR5cGUgPSB0eXBlO1xuICAgIH1cblxuICAgIHNob3dNZXNzYWdlKG1zZzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdEZW1vJywgbXNnLCBNZXNzYWdlU2V2ZXJpdHkuaW5mbyk7XG4gICAgfVxuXG4gICAgc2hvd0RpYWxvZyhtc2c6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93RGlhbG9nKG1zZywgRGlhbG9nVHlwZS5wcm9tcHQsICh2YWwpID0+IHRoaXMuY29uZmlndXJlKHRydWUsIHZhbCksICgpID0+IHRoaXMuY29uZmlndXJlKGZhbHNlKSk7XG4gICAgfVxuXG4gICAgY29uZmlndXJlKHJlc3BvbnNlOiBib29sZWFuLCB2YWx1ZT86IHN0cmluZykge1xuXG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuXG4gICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZSgnU2ltdWxhdGluZy4uLicsICcnLCBNZXNzYWdlU2V2ZXJpdHkud2FpdCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UucmVzZXRTdGlja3lNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ0RlbW8nLCBgWW91ciBzZXR0aW5ncyB3YXMgc3VjY2Vzc2Z1bGx5IGNvbmZpZ3VyZWQgdG8gXFxcIiR7dmFsdWV9XFxcImAsIE1lc3NhZ2VTZXZlcml0eS5zdWNjZXNzKTtcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ0RlbW8nLCAnT3BlcmF0aW9uIGNhbmNlbGxlZCBieSB1c2VyJywgTWVzc2FnZVNldmVyaXR5LmRlZmF1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhcnRDbGlja2VkKGUpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuXG4gICAgY2hhcnRIb3ZlcmVkKGUpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInJvdyBzdGF0aXN0aWNzLWNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY2hhcnQtY29udGFpbmVyXCI+XG4gICAgICA8Y2FudmFzIGJhc2VDaGFydCB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjI1MFwiXG4gICAgICAgICAgICAgIFtkYXRhc2V0c109XCJjaGFydERhdGFcIlxuICAgICAgICAgICAgICBbbGFiZWxzXT1cImNoYXJ0TGFiZWxzXCJcbiAgICAgICAgICAgICAgW29wdGlvbnNdPVwiY2hhcnRPcHRpb25zXCJcbiAgICAgICAgICAgICAgW2NvbG9yc109XCJjaGFydENvbG9yc1wiXG4gICAgICAgICAgICAgIFtsZWdlbmRdPVwiY2hhcnRMZWdlbmRcIlxuICAgICAgICAgICAgICBbY2hhcnRUeXBlXT1cImNoYXJ0VHlwZVwiXG4gICAgICAgICAgICAgIChjaGFydEhvdmVyKT1cImNoYXJ0SG92ZXJlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgKGNoYXJ0Q2xpY2spPVwiY2hhcnRDbGlja2VkKCRldmVudClcIj48L2NhbnZhcz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgIDxkaXYgY2xhc3M9XCJkLW5vbmUgZC1zbS1ibG9jayB0YWJsZS1yZXNwb25zaXZlXCI+XG4gICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1zbVwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwiYm9yZGVyLXRvcC0wXCI+PC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cImJvcmRlci10b3AtMFwiICpuZ0Zvcj1cImxldCBsYWJlbCBvZiBjaGFydExhYmVsc1wiPnt7bGFiZWx9fTwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgZCBvZiBjaGFydERhdGFcIj5cbiAgICAgICAgICAgIDx0aD57e2QgJiYgZC5sYWJlbC5zcGxpdCgnICcpLnBvcCgpfX08L3RoPlxuICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBsYWJlbCBvZiBjaGFydExhYmVsczsgbGV0IGo9aW5kZXhcIj57e2QgJiYgZC5kYXRhW2pdfX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gY2xhc3M9XCJyZWZyZXNoLWJ0blwiIChjbGljayk9XCJyYW5kb21pemUoKTtzaG93TWVzc2FnZSgnTWFudWFsIHJlZnJlc2ghJyk7XCI+UkVGU0g8L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzPVwiY2hhcnQtdHlwZS1jb250YWluZXJcIiBkcm9wZG93bj5cbiAgICAgIDxidXR0b24gaWQ9XCJjaGFydFR5cGVcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkcm9wZG93bi10b2dnbGVcIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+PGkgY2xhc3M9XCJmYSBmYS1iYXItY2hhcnRcIj48L2k+PC9idXR0b24+XG4gICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgIDxsaSBbY2xhc3MuYWN0aXZlXT1cImNoYXJ0VHlwZSA9PSAnYmFyJ1wiPlxuICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIChjbGljayk9XCJjaGFuZ2VDaGFydFR5cGUoJ2JhcicpXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiPkJhciBDaGFydDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIFtjbGFzcy5hY3RpdmVdPVwiY2hhcnRUeXBlID09ICdwaWUnXCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgKGNsaWNrKT1cImNoYW5nZUNoYXJ0VHlwZSgncGllJylcIiBocmVmPVwiamF2YXNjcmlwdDo7XCI+UGllIENoYXJ0PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgW2NsYXNzLmFjdGl2ZV09XCJjaGFydFR5cGUgPT0gJ2RvdWdobnV0J1wiPlxuICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIChjbGljayk9XCJjaGFuZ2VDaGFydFR5cGUoJ2RvdWdobnV0JylcIiBocmVmPVwiamF2YXNjcmlwdDo7XCI+RG91Z2hudXQgQ2hhcnQ8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBbY2xhc3MuYWN0aXZlXT1cImNoYXJ0VHlwZSA9PSAncG9sYXJBcmVhJ1wiPlxuICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIChjbGljayk9XCJjaGFuZ2VDaGFydFR5cGUoJ3BvbGFyQXJlYScpXCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiPlBvbGFyIEFyZWEgQ2hhcnQ8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBbY2xhc3MuYWN0aXZlXT1cImNoYXJ0VHlwZSA9PSAncmFkYXInXCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgKGNsaWNrKT1cImNoYW5nZUNoYXJ0VHlwZSgncmFkYXInKVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIj5SYWRhciBDaGFydDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlclwiPjwvbGk+XG4gICAgICAgIDxsaSBbY2xhc3MuYWN0aXZlXT1cImNoYXJ0VHlwZSA9PSAnbGluZSdcIj5cbiAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIiAoY2xpY2spPVwiY2hhbmdlQ2hhcnRUeXBlKCdsaW5lJylcIiBocmVmPVwiamF2YXNjcmlwdDo7XCI+TGluZSBDaGFydDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwic2hvd01lc3NhZ2UoJ1lvdVxcJ3ZlIGNsaWNrZWQgb24gdGhlIG1lbnUnKVwiPjxpIGNsYXNzPVwiZmEgZmEtYmFyc1wiPjwvaT48L2J1dHRvbj5cbiAgICA8YnV0dG9uIChjbGljayk9XCJzaG93RGlhbG9nKCdFbnRlciBzb21lIHZhbHVlIHRvIGRvIHNlcmlvdXMgY29uZmlndXJhdGlvbi4uLicpXCI+PGkgY2xhc3M9XCJmYSBmYS1jb2dzXCI+PC9pPjwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19