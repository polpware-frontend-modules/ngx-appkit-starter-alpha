import { PipeTransform } from '@angular/core';
export declare class GroupByPipe implements PipeTransform {
    transform(value: Array<any>, field: string): Array<any>;
}
