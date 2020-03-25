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
var GroupByPipe = /** @class */ (function () {
    function GroupByPipe() {
    }
    /**
     * @param {?} value
     * @param {?} field
     * @return {?}
     */
    GroupByPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} field
     * @return {?}
     */
    function (value, field) {
        if (!value) {
            return value;
        }
        /** @type {?} */
        var groupedObj = value.reduce((/**
         * @param {?} prev
         * @param {?} cur
         * @return {?}
         */
        function (prev, cur) {
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
        function (key) { return ({ key: key, value: groupedObj[key] }); }));
    };
    GroupByPipe.decorators = [
        { type: Pipe, args: [{ name: 'groupBy' },] }
    ];
    return GroupByPipe;
}());
export { GroupByPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtYnkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvZ3JvdXAtYnkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUlwRDtJQUFBO0lBcUJBLENBQUM7Ozs7OztJQWxCRywrQkFBUzs7Ozs7SUFBVCxVQUFVLEtBQWlCLEVBQUUsS0FBYTtRQUV0QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsT0FBTyxLQUFLLENBQUM7U0FDaEI7O1lBRUssVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNOzs7OztRQUFDLFVBQUMsSUFBSSxFQUFFLEdBQUc7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM5QjtZQUVELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUMsR0FBRSxFQUFFLENBQUM7UUFFTixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFqQyxDQUFpQyxFQUFDLENBQUM7SUFDakYsQ0FBQzs7Z0JBcEJKLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7O0lBcUJ6QixrQkFBQztDQUFBLEFBckJELElBcUJDO1NBcEJZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5cbkBQaXBlKHsgbmFtZTogJ2dyb3VwQnknIH0pXG5leHBvcnQgY2xhc3MgR3JvdXBCeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICAgIHRyYW5zZm9ybSh2YWx1ZTogQXJyYXk8YW55PiwgZmllbGQ6IHN0cmluZyk6IEFycmF5PGFueT4ge1xuXG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdyb3VwZWRPYmogPSB2YWx1ZS5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge1xuICAgICAgICAgICAgaWYgKCFwcmV2W2N1cltmaWVsZF1dKSB7XG4gICAgICAgICAgICAgICAgcHJldltjdXJbZmllbGRdXSA9IFtjdXJdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcmV2W2N1cltmaWVsZF1dLnB1c2goY3VyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgIH0sIHt9KTtcblxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZ3JvdXBlZE9iaikubWFwKGtleSA9PiAoeyBrZXksIHZhbHVlOiBncm91cGVkT2JqW2tleV0gfSkpO1xuICAgIH1cbn1cbiJdfQ==