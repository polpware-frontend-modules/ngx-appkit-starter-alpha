/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/notification.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Utilities } from '@polpware/ngx-appkit-contracts-alpha';
export class Notification {
    /**
     * @param {?} data
     * @return {?}
     */
    static Create(data) {
        /** @type {?} */
        const n = new Notification();
        Object.assign(n, data);
        if (n.date) {
            n.date = Utilities.parseDate(n.date);
        }
        return n;
    }
}
if (false) {
    /** @type {?} */
    Notification.prototype.id;
    /** @type {?} */
    Notification.prototype.header;
    /** @type {?} */
    Notification.prototype.body;
    /** @type {?} */
    Notification.prototype.isRead;
    /** @type {?} */
    Notification.prototype.isPinned;
    /** @type {?} */
    Notification.prototype.date;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvbm90aWZpY2F0aW9uLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUdqRSxNQUFNLE9BQU8sWUFBWTs7Ozs7SUFVZCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQVE7O2NBQ25CLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRTtRQUM1QixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV2QixJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDUixDQUFDLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0NBQ0o7OztJQWpCRywwQkFBa0I7O0lBQ2xCLDhCQUFzQjs7SUFDdEIsNEJBQW9COztJQUNwQiw4QkFBdUI7O0lBQ3ZCLGdDQUF5Qjs7SUFDekIsNEJBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBVdGlsaXRpZXMgfSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1jb250cmFjdHMtYWxwaGEnO1xuXG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb24ge1xuXG5cbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgaGVhZGVyOiBzdHJpbmc7XG4gICAgcHVibGljIGJvZHk6IHN0cmluZztcbiAgICBwdWJsaWMgaXNSZWFkOiBib29sZWFuO1xuICAgIHB1YmxpYyBpc1Bpbm5lZDogYm9vbGVhbjtcbiAgICBwdWJsaWMgZGF0ZTogRGF0ZTtcblxuICAgIHB1YmxpYyBzdGF0aWMgQ3JlYXRlKGRhdGE6IHt9KSB7XG4gICAgICAgIGNvbnN0IG4gPSBuZXcgTm90aWZpY2F0aW9uKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24obiwgZGF0YSk7XG5cbiAgICAgICAgaWYgKG4uZGF0ZSkge1xuICAgICAgICAgICAgbi5kYXRlID0gVXRpbGl0aWVzLnBhcnNlRGF0ZShuLmRhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG47XG4gICAgfVxufVxuIl19