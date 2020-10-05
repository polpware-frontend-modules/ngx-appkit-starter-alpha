// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class GroupByPipe {
    transform(value, field) {
        if (!value) {
            return value;
        }
        const groupedObj = value.reduce((prev, cur) => {
            if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
            }
            else {
                prev[cur[field]].push(cur);
            }
            return prev;
        }, {});
        return Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] }));
    }
}
/** @nocollapse */ GroupByPipe.ɵfac = function GroupByPipe_Factory(t) { return new (t || GroupByPipe)(); };
/** @nocollapse */ GroupByPipe.ɵpipe = i0.ɵɵdefinePipe({ name: "groupBy", type: GroupByPipe, pure: true });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GroupByPipe, [{
        type: Pipe,
        args: [{ name: 'groupBy' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtYnkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvZ3JvdXAtYnkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixnQ0FBZ0M7QUFFaEMsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBS3BELE1BQU0sT0FBTyxXQUFXO0lBRXBCLFNBQVMsQ0FBQyxLQUFpQixFQUFFLEtBQWE7UUFFdEMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM1QjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1lBRUQsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRVAsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDOzt5RkFuQlEsV0FBVztnRkFBWCxXQUFXO2tEQUFYLFdBQVc7Y0FEdkIsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cblxuQFBpcGUoeyBuYW1lOiAnZ3JvdXBCeScgfSlcbmV4cG9ydCBjbGFzcyBHcm91cEJ5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBBcnJheTxhbnk+LCBmaWVsZDogc3RyaW5nKTogQXJyYXk8YW55PiB7XG5cbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ3JvdXBlZE9iaiA9IHZhbHVlLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXByZXZbY3VyW2ZpZWxkXV0pIHtcbiAgICAgICAgICAgICAgICBwcmV2W2N1cltmaWVsZF1dID0gW2N1cl07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByZXZbY3VyW2ZpZWxkXV0ucHVzaChjdXIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgfSwge30pO1xuXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhncm91cGVkT2JqKS5tYXAoa2V5ID0+ICh7IGtleSwgdmFsdWU6IGdyb3VwZWRPYmpba2V5XSB9KSk7XG4gICAgfVxufVxuIl19