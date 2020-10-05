// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Utilities } from '@polpware/ngx-appkit-contracts-alpha';
var Notification = /** @class */ (function () {
    function Notification() {
    }
    Notification.Create = function (data) {
        var n = new Notification();
        Object.assign(n, data);
        if (n.date) {
            n.date = Utilities.parseDate(n.date);
        }
        return n;
    };
    return Notification;
}());
export { Notification };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvbm90aWZpY2F0aW9uLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQztBQUNoQyw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLGdDQUFnQztBQUVoQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHakU7SUFBQTtJQW9CQSxDQUFDO0lBVmlCLG1CQUFNLEdBQXBCLFVBQXFCLElBQVE7UUFDekIsSUFBTSxDQUFDLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV2QixJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDUixDQUFDLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBVdGlsaXRpZXMgfSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1jb250cmFjdHMtYWxwaGEnO1xuXG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb24ge1xuXG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgaGVhZGVyOiBzdHJpbmc7XG4gICAgcHVibGljIGJvZHk6IHN0cmluZztcbiAgICBwdWJsaWMgaXNSZWFkOiBib29sZWFuO1xuICAgIHB1YmxpYyBpc1Bpbm5lZDogYm9vbGVhbjtcbiAgICBwdWJsaWMgZGF0ZTogRGF0ZTtcblxuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlKGRhdGE6IHt9KSB7XG4gICAgICAgIGNvbnN0IG4gPSBuZXcgTm90aWZpY2F0aW9uKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24obiwgZGF0YSk7XG5cbiAgICAgICAgaWYgKG4uZGF0ZSkge1xuICAgICAgICAgICAgbi5kYXRlID0gVXRpbGl0aWVzLnBhcnNlRGF0ZShuLmRhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG47XG4gICAgfVxufVxuIl19