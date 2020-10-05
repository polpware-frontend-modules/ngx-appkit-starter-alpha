// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
var GroupByPipe = /** @class */ (function () {
    function GroupByPipe() {
    }
    GroupByPipe.prototype.transform = function (value, field) {
        if (!value) {
            return value;
        }
        var groupedObj = value.reduce(function (prev, cur) {
            if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
            }
            else {
                prev[cur[field]].push(cur);
            }
            return prev;
        }, {});
        return Object.keys(groupedObj).map(function (key) { return ({ key: key, value: groupedObj[key] }); });
    };
    /** @nocollapse */ GroupByPipe.ɵfac = function GroupByPipe_Factory(t) { return new (t || GroupByPipe)(); };
    /** @nocollapse */ GroupByPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "groupBy", type: GroupByPipe, pure: true });
    return GroupByPipe;
}());
export { GroupByPipe };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GroupByPipe, [{
        type: Pipe,
        args: [{ name: 'groupBy' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtYnkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvZ3JvdXAtYnkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixnQ0FBZ0M7QUFFaEMsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBSXBEO0lBQUE7S0FxQkM7SUFsQkcsK0JBQVMsR0FBVCxVQUFVLEtBQWlCLEVBQUUsS0FBYTtRQUV0QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLEdBQUc7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM5QjtZQUVELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVQLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxDQUFDLEVBQUUsR0FBRyxLQUFBLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQztJQUNqRixDQUFDOzZGQW5CUSxXQUFXO29GQUFYLFdBQVc7c0JBVnhCO0NBOEJDLEFBckJELElBcUJDO1NBcEJZLFdBQVc7a0RBQVgsV0FBVztjQUR2QixJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuXG5AUGlwZSh7IG5hbWU6ICdncm91cEJ5JyB9KVxuZXhwb3J0IGNsYXNzIEdyb3VwQnlQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgICB0cmFuc2Zvcm0odmFsdWU6IEFycmF5PGFueT4sIGZpZWxkOiBzdHJpbmcpOiBBcnJheTxhbnk+IHtcblxuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBncm91cGVkT2JqID0gdmFsdWUucmVkdWNlKChwcmV2LCBjdXIpID0+IHtcbiAgICAgICAgICAgIGlmICghcHJldltjdXJbZmllbGRdXSkge1xuICAgICAgICAgICAgICAgIHByZXZbY3VyW2ZpZWxkXV0gPSBbY3VyXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJldltjdXJbZmllbGRdXS5wdXNoKGN1cik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICB9LCB7fSk7XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGdyb3VwZWRPYmopLm1hcChrZXkgPT4gKHsga2V5LCB2YWx1ZTogZ3JvdXBlZE9ialtrZXldIH0pKTtcbiAgICB9XG59XG4iXX0=