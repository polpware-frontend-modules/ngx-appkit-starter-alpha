/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/statistics-demo/statistics-demo.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component } from '@angular/core';
import { fromEvent, of, merge } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { DialogType, MessageSeverity } from '@polpware/ngx-appkit-contracts-alpha';
import { AlertService } from '@polpware/ngx-appkit-services-alpha';
require('chart.js');
export class StatisticsDemoComponent {
    /**
     * @param {?} alertService
     */
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
                // grey
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                // dark grey
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                // something else
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.timerReference = setInterval((/**
         * @return {?}
         */
        () => this.randomize()), 5000);
        /** @type {?} */
        const initialWidth$ = of(window.innerWidth);
        /** @type {?} */
        const resizedWidth$ = fromEvent(window, 'resize').pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        (event) => (/** @type {?} */ (event.target.innerWidth)))));
        this.windowWidth$ = merge(initialWidth$, resizedWidth$).pipe(distinctUntilChanged());
        this.windowWidthSub = this.windowWidth$.subscribe((/**
         * @param {?} width
         * @return {?}
         */
        width => this.chartLegend = width < 600 ? false : true));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        clearInterval(this.timerReference);
        this.windowWidthSub.unsubscribe();
    }
    /**
     * @return {?}
     */
    randomize() {
        /** @type {?} */
        const _chartData = new Array(this.chartData.length);
        for (let i = 0; i < this.chartData.length; i++) {
            _chartData[i] = { data: new Array(this.chartData[i].data.length), label: this.chartData[i].label };
            for (let j = 0; j < this.chartData[i].data.length; j++) {
                _chartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.chartData = _chartData;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    changeChartType(type) {
        this.chartType = type;
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    showMessage(msg) {
        this.alertService.showMessage('Demo', msg, MessageSeverity.info);
    }
    /**
     * @param {?} msg
     * @return {?}
     */
    showDialog(msg) {
        this.alertService.showDialog(msg, DialogType.prompt, (/**
         * @param {?} val
         * @return {?}
         */
        (val) => this.configure(true, val)), (/**
         * @return {?}
         */
        () => this.configure(false)));
    }
    /**
     * @param {?} response
     * @param {?=} value
     * @return {?}
     */
    configure(response, value) {
        if (response) {
            this.alertService.showStickyMessage('Simulating...', '', MessageSeverity.wait);
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.alertService.resetStickyMessage();
                this.alertService.showMessage('Demo', `Your settings was successfully configured to \"${value}\"`, MessageSeverity.success);
            }), 2000);
        }
        else {
            this.alertService.showMessage('Demo', 'Operation cancelled by user', MessageSeverity.default);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    chartClicked(e) {
        console.log(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    chartHovered(e) {
        console.log(e);
    }
}
StatisticsDemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'statistics-demo',
                template: "<div class=\"row statistics-container\">\n  <div class=\"col-md-6\">\n    <div class=\"chart-container\">\n      <canvas baseChart width=\"600\" height=\"250\"\n              [datasets]=\"chartData\"\n              [labels]=\"chartLabels\"\n              [options]=\"chartOptions\"\n              [colors]=\"chartColors\"\n              [legend]=\"chartLegend\"\n              [chartType]=\"chartType\"\n              (chartHover)=\"chartHovered($event)\"\n              (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"d-none d-sm-block table-responsive\">\n      <table class=\"table table-sm\">\n        <thead>\n          <tr>\n            <th class=\"border-top-0\"></th>\n            <th class=\"border-top-0\" *ngFor=\"let label of chartLabels\">{{label}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let d of chartData\">\n            <th>{{d && d.label.split(' ').pop()}}</th>\n            <td *ngFor=\"let label of chartLabels; let j=index\">{{d && d.data[j]}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <button class=\"refresh-btn\" (click)=\"randomize();showMessage('Manual refresh!');\">REFSH</button>\n    <div class=\"chart-type-container\" dropdown>\n      <button id=\"chartType\" type=\"button\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-bar-chart\"></i></button>\n      <ul class=\"dropdown-menu\">\n        <li [class.active]=\"chartType == 'bar'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('bar')\" href=\"javascript:;\">Bar Chart</a>\n        </li>\n        <li [class.active]=\"chartType == 'pie'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('pie')\" href=\"javascript:;\">Pie Chart</a>\n        </li>\n        <li [class.active]=\"chartType == 'doughnut'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('doughnut')\" href=\"javascript:;\">Doughnut Chart</a>\n        </li>\n        <li [class.active]=\"chartType == 'polarArea'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('polarArea')\" href=\"javascript:;\">Polar Area Chart</a>\n        </li>\n        <li [class.active]=\"chartType == 'radar'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('radar')\" href=\"javascript:;\">Radar Chart</a>\n        </li>\n        <li class=\"dropdown-divider\"></li>\n        <li [class.active]=\"chartType == 'line'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('line')\" href=\"javascript:;\">Line Chart</a>\n        </li>\n      </ul>\n    </div>\n    <button (click)=\"showMessage('You\\'ve clicked on the menu')\"><i class=\"fa fa-bars\"></i></button>\n    <button (click)=\"showDialog('Enter some value to do serious configuration...')\"><i class=\"fa fa-cogs\"></i></button>\n  </div>\n</div>\n",
                styles: [".statistics-container{font-size:.875rem}.chart-container{display:block}.refresh-btn{margin-right:10px}.chart-type-container{display:inline-block}.chart-type-container .active{background-color:#e8e8e8}"]
            }] }
];
/** @nocollapse */
StatisticsDemoComponent.ctorParameters = () => [
    { type: AlertService }
];
if (false) {
    /** @type {?} */
    StatisticsDemoComponent.prototype.chartData;
    /** @type {?} */
    StatisticsDemoComponent.prototype.chartLabels;
    /** @type {?} */
    StatisticsDemoComponent.prototype.chartOptions;
    /** @type {?} */
    StatisticsDemoComponent.prototype.chartColors;
    /** @type {?} */
    StatisticsDemoComponent.prototype.chartLegend;
    /** @type {?} */
    StatisticsDemoComponent.prototype.chartType;
    /** @type {?} */
    StatisticsDemoComponent.prototype.timerReference;
    /** @type {?} */
    StatisticsDemoComponent.prototype.windowWidth$;
    /** @type {?} */
    StatisticsDemoComponent.prototype.windowWidthSub;
    /**
     * @type {?}
     * @private
     */
    StatisticsDemoComponent.prototype.alertService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy1kZW1vLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zdGF0aXN0aWNzLWRlbW8vc3RhdGlzdGljcy1kZW1vLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQTRCLFNBQVMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRCxPQUFPLEVBQ0gsVUFBVSxFQUFFLGVBQWUsRUFDOUIsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5QyxPQUFPLEVBQ0gsWUFBWSxFQUNmLE1BQU0scUNBQXFDLENBQUM7QUFHN0MsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBU3BCLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFrRGhDLFlBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBaEQ5QyxjQUFTLEdBQUc7WUFDUixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtZQUNyRCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtZQUNyRCxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUs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O1lBRS9FLFVBQVU7OztZQUFDLEdBQUcsRUFBRTtnQkFFWixJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxrREFBa0QsS0FBSyxJQUFJLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hJLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztTQUNaO2FBQU07WUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsNkJBQTZCLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pHO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsQ0FBQztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsQ0FBQztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7O1lBNUhKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQiw4MUZBQStDOzthQUVsRDs7OztZQVpHLFlBQVk7Ozs7SUFlWiw0Q0FJRTs7SUFDRiw4Q0FBeUQ7O0lBQ3pELCtDQU9FOztJQUNGLDhDQXlCRTs7SUFDRiw4Q0FBbUI7O0lBQ25CLDRDQUFtQjs7SUFFbkIsaURBQW9COztJQUNwQiwrQ0FBaUM7O0lBQ2pDLGlEQUE2Qjs7Ozs7SUFHakIsK0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIE9ic2VydmFibGUsIGZyb21FdmVudCwgb2YsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICAgIERpYWxvZ1R5cGUsIE1lc3NhZ2VTZXZlcml0eVxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1jb250cmFjdHMtYWxwaGEnO1xuXG5pbXBvcnQge1xuICAgIEFsZXJ0U2VydmljZVxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1zZXJ2aWNlcy1hbHBoYSc7XG5cblxucmVxdWlyZSgnY2hhcnQuanMnKTtcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc3RhdGlzdGljcy1kZW1vJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc3RhdGlzdGljcy1kZW1vLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zdGF0aXN0aWNzLWRlbW8uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGF0aXN0aWNzRGVtb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGNoYXJ0RGF0YSA9IFtcbiAgICAgICAgeyBkYXRhOiBbNjUsIDU5LCA4MCwgODEsIDU2LCA1NV0sIGxhYmVsOiAnU2VyaWVzIEEnIH0sXG4gICAgICAgIHsgZGF0YTogWzI4LCA0OCwgNDAsIDE5LCA4NiwgMjddLCBsYWJlbDogJ1NlcmllcyBCJyB9LFxuICAgICAgICB7IGRhdGE6IFsxOCwgNDgsIDc3LCA5LCAxMDAsIDI3XSwgbGFiZWw6ICdTZXJpZXMgQycgfVxuICAgIF07XG4gICAgY2hhcnRMYWJlbHMgPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJ107XG4gICAgY2hhcnRPcHRpb25zID0ge1xuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgICAgICBmb250U2l6ZTogMTYsXG4gICAgICAgICAgICB0ZXh0OiAnSW1wb3J0YW50IFN0dWZmJ1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGFydENvbG9ycyA9IFtcbiAgICAgICAgeyAvLyBncmV5XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDE0OCwxNTksMTc3LDAuMiknLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDE0OCwxNTksMTc3LDEpJyxcbiAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAncmdiYSgxNDgsMTU5LDE3NywxKScsXG4gICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDE0OCwxNTksMTc3LDAuOCknXG4gICAgICAgIH0sXG4gICAgICAgIHsgLy8gZGFyayBncmV5XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDc3LDgzLDk2LDAuMiknLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDc3LDgzLDk2LDEpJyxcbiAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAncmdiYSg3Nyw4Myw5NiwxKScsXG4gICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDc3LDgzLDk2LDEpJ1xuICAgICAgICB9LFxuICAgICAgICB7IC8vIHNvbWV0aGluZyBlbHNlXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDEyOCwxMjgsMTI4LDAuMiknLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDEyOCwxMjgsMTI4LDEpJyxcbiAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAncmdiYSgxMjgsMTI4LDEyOCwxKScsXG4gICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICdyZ2JhKDEyOCwxMjgsMTI4LDAuOCknXG4gICAgICAgIH1cbiAgICBdO1xuICAgIGNoYXJ0TGVnZW5kID0gdHJ1ZTtcbiAgICBjaGFydFR5cGUgPSAnbGluZSc7XG5cbiAgICB0aW1lclJlZmVyZW5jZTogYW55O1xuICAgIHdpbmRvd1dpZHRoJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICAgIHdpbmRvd1dpZHRoU3ViOiBTdWJzY3JpcHRpb247XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UpIHtcblxuICAgIH1cblxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMudGltZXJSZWZlcmVuY2UgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnJhbmRvbWl6ZSgpLCA1MDAwKTtcblxuICAgICAgICBjb25zdCBpbml0aWFsV2lkdGgkID0gb2Yod2luZG93LmlubmVyV2lkdGgpO1xuICAgICAgICBjb25zdCByZXNpemVkV2lkdGgkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUobWFwKChldmVudDogYW55KSA9PiBldmVudC50YXJnZXQuaW5uZXJXaWR0aCBhcyBudW1iZXIpKTtcbiAgICAgICAgdGhpcy53aW5kb3dXaWR0aCQgPSBtZXJnZShpbml0aWFsV2lkdGgkLCByZXNpemVkV2lkdGgkKS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuXG4gICAgICAgIHRoaXMud2luZG93V2lkdGhTdWIgPSB0aGlzLndpbmRvd1dpZHRoJC5zdWJzY3JpYmUod2lkdGggPT4gdGhpcy5jaGFydExlZ2VuZCA9IHdpZHRoIDwgNjAwID8gZmFsc2UgOiB0cnVlKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyUmVmZXJlbmNlKTtcbiAgICAgICAgdGhpcy53aW5kb3dXaWR0aFN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuXG5cbiAgICByYW5kb21pemUoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IF9jaGFydERhdGEgPSBuZXcgQXJyYXkodGhpcy5jaGFydERhdGEubGVuZ3RoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoYXJ0RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2NoYXJ0RGF0YVtpXSA9IHsgZGF0YTogbmV3IEFycmF5KHRoaXMuY2hhcnREYXRhW2ldLmRhdGEubGVuZ3RoKSwgbGFiZWw6IHRoaXMuY2hhcnREYXRhW2ldLmxhYmVsIH07XG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jaGFydERhdGFbaV0uZGF0YS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIF9jaGFydERhdGFbaV0uZGF0YVtqXSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMDApICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoYXJ0RGF0YSA9IF9jaGFydERhdGE7XG4gICAgfVxuXG4gICAgY2hhbmdlQ2hhcnRUeXBlKHR5cGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNoYXJ0VHlwZSA9IHR5cGU7XG4gICAgfVxuXG4gICAgc2hvd01lc3NhZ2UobXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ0RlbW8nLCBtc2csIE1lc3NhZ2VTZXZlcml0eS5pbmZvKTtcbiAgICB9XG5cbiAgICBzaG93RGlhbG9nKG1zZzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dEaWFsb2cobXNnLCBEaWFsb2dUeXBlLnByb21wdCwgKHZhbCkgPT4gdGhpcy5jb25maWd1cmUodHJ1ZSwgdmFsKSwgKCkgPT4gdGhpcy5jb25maWd1cmUoZmFsc2UpKTtcbiAgICB9XG5cbiAgICBjb25maWd1cmUocmVzcG9uc2U6IGJvb2xlYW4sIHZhbHVlPzogc3RyaW5nKSB7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG5cbiAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdTaW11bGF0aW5nLi4uJywgJycsIE1lc3NhZ2VTZXZlcml0eS53YWl0KTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5yZXNldFN0aWNreU1lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93TWVzc2FnZSgnRGVtbycsIGBZb3VyIHNldHRpbmdzIHdhcyBzdWNjZXNzZnVsbHkgY29uZmlndXJlZCB0byBcXFwiJHt2YWx1ZX1cXFwiYCwgTWVzc2FnZVNldmVyaXR5LnN1Y2Nlc3MpO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93TWVzc2FnZSgnRGVtbycsICdPcGVyYXRpb24gY2FuY2VsbGVkIGJ5IHVzZXInLCBNZXNzYWdlU2V2ZXJpdHkuZGVmYXVsdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFydENsaWNrZWQoZSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG5cbiAgICBjaGFydEhvdmVyZWQoZSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG59XG4iXX0=