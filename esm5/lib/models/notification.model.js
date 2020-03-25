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
var Notification = /** @class */ (function () {
    function Notification() {
    }
    /**
     * @param {?} data
     * @return {?}
     */
    Notification.Create = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvbm90aWZpY2F0aW9uLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUdqRTtJQUFBO0lBb0JBLENBQUM7Ozs7O0lBVmlCLG1CQUFNOzs7O0lBQXBCLFVBQXFCLElBQVE7O1lBQ25CLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRTtRQUM1QixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV2QixJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUU7WUFDUixDQUFDLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDOzs7O0lBakJHLDBCQUFrQjs7SUFDbEIsOEJBQXNCOztJQUN0Qiw0QkFBb0I7O0lBQ3BCLDhCQUF1Qjs7SUFDdkIsZ0NBQXlCOztJQUN6Qiw0QkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IFV0aWxpdGllcyB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cblxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbiB7XG5cblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBoZWFkZXI6IHN0cmluZztcbiAgICBwdWJsaWMgYm9keTogc3RyaW5nO1xuICAgIHB1YmxpYyBpc1JlYWQ6IGJvb2xlYW47XG4gICAgcHVibGljIGlzUGlubmVkOiBib29sZWFuO1xuICAgIHB1YmxpYyBkYXRlOiBEYXRlO1xuXG4gICAgcHVibGljIHN0YXRpYyBDcmVhdGUoZGF0YToge30pIHtcbiAgICAgICAgY29uc3QgbiA9IG5ldyBOb3RpZmljYXRpb24oKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihuLCBkYXRhKTtcblxuICAgICAgICBpZiAobi5kYXRlKSB7XG4gICAgICAgICAgICBuLmRhdGUgPSBVdGlsaXRpZXMucGFyc2VEYXRlKG4uZGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbjtcbiAgICB9XG59XG4iXX0=