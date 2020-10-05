import { OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { AlertService } from '@polpware/ngx-appkit-services-alpha';
import * as i0 from "@angular/core";
export declare class StatisticsDemoComponent implements OnInit, OnDestroy {
    private alertService;
    chartData: {
        data: number[];
        label: string;
    }[];
    chartLabels: string[];
    chartOptions: {
        responsive: boolean;
        title: {
            display: boolean;
            fontSize: number;
            text: string;
        };
    };
    chartColors: {
        backgroundColor: string;
        borderColor: string;
        pointBackgroundColor: string;
        pointBorderColor: string;
        pointHoverBackgroundColor: string;
        pointHoverBorderColor: string;
    }[];
    chartLegend: boolean;
    chartType: string;
    timerReference: any;
    windowWidth$: Observable<number>;
    windowWidthSub: Subscription;
    constructor(alertService: AlertService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    randomize(): void;
    changeChartType(type: string): void;
    showMessage(msg: string): void;
    showDialog(msg: string): void;
    configure(response: boolean, value?: string): void;
    chartClicked(e: any): void;
    chartHovered(e: any): void;
    static ɵfac: i0.ɵɵFactoryDef<StatisticsDemoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<StatisticsDemoComponent, "statistics-demo", never, {}, {}, never, never>;
}
