/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/group-by.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Pipe } from '@angular/core';
export class GroupByPipe {
    /**
     * @param {?} value
     * @param {?} field
     * @return {?}
     */
    transform(value, field) {
        if (!value) {
            return value;
        }
        /** @type {?} */
        const groupedObj = value.reduce((/**
         * @param {?} prev
         * @param {?} cur
         * @return {?}
         */
        (prev, cur) => {
            if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
            }
            else {
                prev[cur[field]].push(cur);
            }
            return prev;
        }), {});
        return Object.keys(groupedObj).map((/**
         * @param {?} key
         * @return {?}
         */
        key => ({ key, value: groupedObj[key] })));
    }
}
GroupByPipe.decorators = [
    { type: Pipe, args: [{ name: 'groupBy' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtYnkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvZ3JvdXAtYnkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRCxNQUFNLE9BQU8sV0FBVzs7Ozs7O0lBRXBCLFNBQVMsQ0FBQyxLQUFpQixFQUFFLEtBQWE7UUFFdEMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLE9BQU8sS0FBSyxDQUFDO1NBQ2hCOztjQUVLLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM1QjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1lBRUQsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxHQUFFLEVBQUUsQ0FBQztRQUVOLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFDakYsQ0FBQzs7O1lBcEJKLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5cbkBQaXBlKHsgbmFtZTogJ2dyb3VwQnknIH0pXG5leHBvcnQgY2xhc3MgR3JvdXBCeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIHRyYW5zZm9ybSh2YWx1ZTogQXJyYXk8YW55PiwgZmllbGQ6IHN0cmluZyk6IEFycmF5PGFueT4ge1xuXG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdyb3VwZWRPYmogPSB2YWx1ZS5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge1xuICAgICAgICAgICAgaWYgKCFwcmV2W2N1cltmaWVsZF1dKSB7XG4gICAgICAgICAgICAgICAgcHJldltjdXJbZmllbGRdXSA9IFtjdXJdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmV2W2N1cltmaWVsZF1dLnB1c2goY3VyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgIH0sIHt9KTtcblxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZ3JvdXBlZE9iaikubWFwKGtleSA9PiAoeyBrZXksIHZhbHVlOiBncm91cGVkT2JqW2tleV0gfSkpO1xuICAgIH1cbn1cbiJdfQ==