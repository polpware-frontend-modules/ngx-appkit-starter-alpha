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
var StatisticsDemoComponent = /** @class */ (function () {
    function StatisticsDemoComponent(alertService) {
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
    StatisticsDemoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.timerReference = setInterval((/**
         * @return {?}
         */
        function () { return _this.randomize(); }), 5000);
        /** @type {?} */
        var initialWidth$ = of(window.innerWidth);
        /** @type {?} */
        var resizedWidth$ = fromEvent(window, 'resize').pipe(map((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return (/** @type {?} */ (event.target.innerWidth)); })));
        this.windowWidth$ = merge(initialWidth$, resizedWidth$).pipe(distinctUntilChanged());
        this.windowWidthSub = this.windowWidth$.subscribe((/**
         * @param {?} width
         * @return {?}
         */
        function (width) { return _this.chartLegend = width < 600 ? false : true; }));
    };
    /**
     * @return {?}
     */
    StatisticsDemoComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        clearInterval(this.timerReference);
        this.windowWidthSub.unsubscribe();
    };
    /**
     * @return {?}
     */
    StatisticsDemoComponent.prototype.randomize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var _chartData = new Array(this.chartData.length);
        for (var i = 0; i < this.chartData.length; i++) {
            _chartData[i] = { data: new Array(this.chartData[i].data.length), label: this.chartData[i].label };
            for (var j = 0; j < this.chartData[i].data.length; j++) {
                _chartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.chartData = _chartData;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    StatisticsDemoComponent.prototype.changeChartType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        this.chartType = type;
    };
    /**
     * @param {?} msg
     * @return {?}
     */
    StatisticsDemoComponent.prototype.showMessage = /**
     * @param {?} msg
     * @return {?}
     */
    function (msg) {
        this.alertService.showMessage('Demo', msg, MessageSeverity.info);
    };
    /**
     * @param {?} msg
     * @return {?}
     */
    StatisticsDemoComponent.prototype.showDialog = /**
     * @param {?} msg
     * @return {?}
     */
    function (msg) {
        var _this = this;
        this.alertService.showDialog(msg, DialogType.prompt, (/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return _this.configure(true, val); }), (/**
         * @return {?}
         */
        function () { return _this.configure(false); }));
    };
    /**
     * @param {?} response
     * @param {?=} value
     * @return {?}
     */
    StatisticsDemoComponent.prototype.configure = /**
     * @param {?} response
     * @param {?=} value
     * @return {?}
     */
    function (response, value) {
        var _this = this;
        if (response) {
            this.alertService.showStickyMessage('Simulating...', '', MessageSeverity.wait);
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.alertService.resetStickyMessage();
                _this.alertService.showMessage('Demo', "Your settings was successfully configured to \"" + value + "\"", MessageSeverity.success);
            }), 2000);
        }
        else {
            this.alertService.showMessage('Demo', 'Operation cancelled by user', MessageSeverity.default);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    StatisticsDemoComponent.prototype.chartClicked = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        console.log(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    StatisticsDemoComponent.prototype.chartHovered = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        console.log(e);
    };
    StatisticsDemoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'statistics-demo',
                    template: "<div class=\"row statistics-container\">\n  <div class=\"col-md-6\">\n    <div class=\"chart-container\">\n      <canvas baseChart width=\"600\" height=\"250\"\n              [datasets]=\"chartData\"\n              [labels]=\"chartLabels\"\n              [options]=\"chartOptions\"\n              [colors]=\"chartColors\"\n              [legend]=\"chartLegend\"\n              [chartType]=\"chartType\"\n              (chartHover)=\"chartHovered($event)\"\n              (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"d-none d-sm-block table-responsive\">\n      <table class=\"table table-sm\">\n        <thead>\n          <tr>\n            <th class=\"border-top-0\"></th>\n            <th class=\"border-top-0\" *ngFor=\"let label of chartLabels\">{{label}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let d of chartData\">\n            <th>{{d && d.label.split(' ').pop()}}</th>\n            <td *ngFor=\"let label of chartLabels; let j=index\">{{d && d.data[j]}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <button class=\"refresh-btn\" (click)=\"randomize();showMessage('Manual refresh!');\">REFSH</button>\n    <div class=\"chart-type-container\" dropdown>\n      <button id=\"chartType\" type=\"button\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-bar-chart\"></i></button>\n      <ul class=\"dropdown-menu\">\n        <li [class.active]=\"chartType == 'bar'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('bar')\" href=\"javascript:;\">Bar Chart</a>\n        </li>\n        <li [class.active]=\"chartType == 'pie'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('pie')\" href=\"javascript:;\">Pie Chart</a>\n        </li>\n        <li [class.active]=\"chartType == 'doughnut'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('doughnut')\" href=\"javascript:;\">Doughnut Chart</a>\n        </li>\n        <li [class.active]=\"chartType == 'polarArea'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('polarArea')\" href=\"javascript:;\">Polar Area Chart</a>\n        </li>\n        <li [class.active]=\"chartType == 'radar'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('radar')\" href=\"javascript:;\">Radar Chart</a>\n        </li>\n        <li class=\"dropdown-divider\"></li>\n        <li [class.active]=\"chartType == 'line'\">\n          <a class=\"dropdown-item\" (click)=\"changeChartType('line')\" href=\"javascript:;\">Line Chart</a>\n        </li>\n      </ul>\n    </div>\n    <button (click)=\"showMessage('You\\'ve clicked on the menu')\"><i class=\"fa fa-bars\"></i></button>\n    <button (click)=\"showDialog('Enter some value to do serious configuration...')\"><i class=\"fa fa-cogs\"></i></button>\n  </div>\n</div>\n",
                    styles: [".statistics-container{font-size:.875rem}.chart-container{display:block}.refresh-btn{margin-right:10px}.chart-type-container{display:inline-block}.chart-type-container .active{background-color:#e8e8e8}"]
                }] }
    ];
    /** @nocollapse */
    StatisticsDemoComponent.ctorParameters = function () { return [
        { type: AlertService }
    ]; };
    return StatisticsDemoComponent;
}());
export { StatisticsDemoComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlzdGljcy1kZW1vLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zdGF0aXN0aWNzLWRlbW8vc3RhdGlzdGljcy1kZW1vLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQTRCLFNBQVMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRCxPQUFPLEVBQ0gsVUFBVSxFQUFFLGVBQWUsRUFDOUIsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5QyxPQUFPLEVBQ0gsWUFBWSxFQUNmLE1BQU0scUNBQXFDLENBQUM7QUFHN0MsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBSXBCO0lBdURJLGlDQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQWhEOUMsY0FBUyxHQUFHO1lBQ1IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7WUFDckQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7WUFDckQsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7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QztRQVpHLElBQUksUUFBUSxFQUFFO1lBRVYsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUUvRSxVQUFVOzs7WUFBQztnQkFFUCxLQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxvREFBa0QsS0FBSyxPQUFJLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hJLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztTQUNaO2FBQU07WUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsNkJBQTZCLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2pHO0lBQ0wsQ0FBQzs7Ozs7SUFFRCw4Q0FBWTs7OztJQUFaLFVBQWEsQ0FBQztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFRCw4Q0FBWTs7OztJQUFaLFVBQWEsQ0FBQztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7Z0JBNUhKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiw4MUZBQStDOztpQkFFbEQ7Ozs7Z0JBWkcsWUFBWTs7SUFxSWhCLDhCQUFDO0NBQUEsQUE3SEQsSUE2SEM7U0F4SFksdUJBQXVCOzs7SUFFaEMsNENBSUU7O0lBQ0YsOENBQXlEOztJQUN6RCwrQ0FPRTs7SUFDRiw4Q0F5QkU7O0lBQ0YsOENBQW1COztJQUNuQiw0Q0FBbUI7O0lBRW5CLGlEQUFvQjs7SUFDcEIsK0NBQWlDOztJQUNqQyxpREFBNkI7Ozs7O0lBR2pCLCtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBPYnNlcnZhYmxlLCBmcm9tRXZlbnQsIG9mLCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgICBEaWFsb2dUeXBlLCBNZXNzYWdlU2V2ZXJpdHlcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBBbGVydFNlcnZpY2Vcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtc2VydmljZXMtYWxwaGEnO1xuXG5cbnJlcXVpcmUoJ2NoYXJ0LmpzJyk7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3N0YXRpc3RpY3MtZGVtbycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3N0YXRpc3RpY3MtZGVtby5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc3RhdGlzdGljcy1kZW1vLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RhdGlzdGljc0RlbW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBjaGFydERhdGEgPSBbXG4gICAgICAgIHsgZGF0YTogWzY1LCA1OSwgODAsIDgxLCA1NiwgNTVdLCBsYWJlbDogJ1NlcmllcyBBJyB9LFxuICAgICAgICB7IGRhdGE6IFsyOCwgNDgsIDQwLCAxOSwgODYsIDI3XSwgbGFiZWw6ICdTZXJpZXMgQicgfSxcbiAgICAgICAgeyBkYXRhOiBbMTgsIDQ4LCA3NywgOSwgMTAwLCAyN10sIGxhYmVsOiAnU2VyaWVzIEMnIH1cbiAgICBdO1xuICAgIGNoYXJ0TGFiZWxzID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1biddO1xuICAgIGNoYXJ0T3B0aW9ucyA9IHtcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICAgICAgdGV4dDogJ0ltcG9ydGFudCBTdHVmZidcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hhcnRDb2xvcnMgPSBbXG4gICAgICAgIHsgLy8gZ3JleVxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxNDgsMTU5LDE3NywwLjIpJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgxNDgsMTU5LDE3NywxKScsXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTQ4LDE1OSwxNzcsMSknLFxuICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSgxNDgsMTU5LDE3NywwLjgpJ1xuICAgICAgICB9LFxuICAgICAgICB7IC8vIGRhcmsgZ3JleVxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3Nyw4Myw5NiwwLjIpJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg3Nyw4Myw5NiwxKScsXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzcsODMsOTYsMSknLFxuICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSg3Nyw4Myw5NiwxKSdcbiAgICAgICAgfSxcbiAgICAgICAgeyAvLyBzb21ldGhpbmcgZWxzZVxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxMjgsMTI4LDEyOCwwLjIpJyxcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgxMjgsMTI4LDEyOCwxKScsXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTI4LDEyOCwxMjgsMSknLFxuICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAncmdiYSgxMjgsMTI4LDEyOCwwLjgpJ1xuICAgICAgICB9XG4gICAgXTtcbiAgICBjaGFydExlZ2VuZCA9IHRydWU7XG4gICAgY2hhcnRUeXBlID0gJ2xpbmUnO1xuXG4gICAgdGltZXJSZWZlcmVuY2U6IGFueTtcbiAgICB3aW5kb3dXaWR0aCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICB3aW5kb3dXaWR0aFN1YjogU3Vic2NyaXB0aW9uO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsZXJ0U2VydmljZTogQWxlcnRTZXJ2aWNlKSB7XG5cbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnRpbWVyUmVmZXJlbmNlID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5yYW5kb21pemUoKSwgNTAwMCk7XG5cbiAgICAgICAgY29uc3QgaW5pdGlhbFdpZHRoJCA9IG9mKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICAgICAgY29uc3QgcmVzaXplZFdpZHRoJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKG1hcCgoZXZlbnQ6IGFueSkgPT4gZXZlbnQudGFyZ2V0LmlubmVyV2lkdGggYXMgbnVtYmVyKSk7XG4gICAgICAgIHRoaXMud2luZG93V2lkdGgkID0gbWVyZ2UoaW5pdGlhbFdpZHRoJCwgcmVzaXplZFdpZHRoJCkucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcblxuICAgICAgICB0aGlzLndpbmRvd1dpZHRoU3ViID0gdGhpcy53aW5kb3dXaWR0aCQuc3Vic2NyaWJlKHdpZHRoID0+IHRoaXMuY2hhcnRMZWdlbmQgPSB3aWR0aCA8IDYwMCA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lclJlZmVyZW5jZSk7XG4gICAgICAgIHRoaXMud2luZG93V2lkdGhTdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cblxuXG4gICAgcmFuZG9taXplKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBfY2hhcnREYXRhID0gbmV3IEFycmF5KHRoaXMuY2hhcnREYXRhLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGFydERhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9jaGFydERhdGFbaV0gPSB7IGRhdGE6IG5ldyBBcnJheSh0aGlzLmNoYXJ0RGF0YVtpXS5kYXRhLmxlbmd0aCksIGxhYmVsOiB0aGlzLmNoYXJ0RGF0YVtpXS5sYWJlbCB9O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuY2hhcnREYXRhW2ldLmRhdGEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBfY2hhcnREYXRhW2ldLmRhdGFbal0gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwKSArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFydERhdGEgPSBfY2hhcnREYXRhO1xuICAgIH1cblxuICAgIGNoYW5nZUNoYXJ0VHlwZSh0eXBlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jaGFydFR5cGUgPSB0eXBlO1xuICAgIH1cblxuICAgIHNob3dNZXNzYWdlKG1zZzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdEZW1vJywgbXNnLCBNZXNzYWdlU2V2ZXJpdHkuaW5mbyk7XG4gICAgfVxuXG4gICAgc2hvd0RpYWxvZyhtc2c6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93RGlhbG9nKG1zZywgRGlhbG9nVHlwZS5wcm9tcHQsICh2YWwpID0+IHRoaXMuY29uZmlndXJlKHRydWUsIHZhbCksICgpID0+IHRoaXMuY29uZmlndXJlKGZhbHNlKSk7XG4gICAgfVxuXG4gICAgY29uZmlndXJlKHJlc3BvbnNlOiBib29sZWFuLCB2YWx1ZT86IHN0cmluZykge1xuXG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuXG4gICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZSgnU2ltdWxhdGluZy4uLicsICcnLCBNZXNzYWdlU2V2ZXJpdHkud2FpdCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UucmVzZXRTdGlja3lNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ0RlbW8nLCBgWW91ciBzZXR0aW5ncyB3YXMgc3VjY2Vzc2Z1bGx5IGNvbmZpZ3VyZWQgdG8gXFxcIiR7dmFsdWV9XFxcImAsIE1lc3NhZ2VTZXZlcml0eS5zdWNjZXNzKTtcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ0RlbW8nLCAnT3BlcmF0aW9uIGNhbmNlbGxlZCBieSB1c2VyJywgTWVzc2FnZVNldmVyaXR5LmRlZmF1bHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhcnRDbGlja2VkKGUpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxuXG4gICAgY2hhcnRIb3ZlcmVkKGUpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfVxufVxuIl19