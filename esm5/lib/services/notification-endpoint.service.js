/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/notification-endpoint.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
var NotificationEndpoint = /** @class */ (function () {
    function NotificationEndpoint() {
        this.demoNotifications = [
            {
                id: 1,
                header: 'Welcome',
                body: 'You are ...',
                isRead: true,
                isPinned: true,
                date: '2019-05-28T16:29:13.5877958'
            }
        ];
    }
    /**
     * @template T
     * @param {?} notificationId
     * @return {?}
     */
    NotificationEndpoint.prototype.getNotificationEndpoint = /**
     * @template T
     * @param {?} notificationId
     * @return {?}
     */
    function (notificationId) {
        /** @type {?} */
        var notification = this.demoNotifications.find((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return val.id == notificationId; }));
        /** @type {?} */
        var response;
        if (notification) {
            response = this.createResponse(notification, 200);
        }
        else {
            response = this.createResponse(null, 404);
        }
        return of(response.body);
    };
    /**
     * @template T
     * @param {?} page
     * @param {?} pageSize
     * @return {?}
     */
    NotificationEndpoint.prototype.getNotificationsEndpoint = /**
     * @template T
     * @param {?} page
     * @param {?} pageSize
     * @return {?}
     */
    function (page, pageSize) {
        /** @type {?} */
        var notifications = this.demoNotifications;
        /** @type {?} */
        var response = this.createResponse(this.demoNotifications, 200);
        return of(response.body);
    };
    /**
     * @template T
     * @param {?=} userId
     * @return {?}
     */
    NotificationEndpoint.prototype.getUnreadNotificationsEndpoint = /**
     * @template T
     * @param {?=} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var unreadNotifications = this.demoNotifications.filter((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return !val.isRead; }));
        /** @type {?} */
        var response = this.createResponse(unreadNotifications, 200);
        return of(response.body);
    };
    /**
     * @template T
     * @param {?=} lastNotificationDate
     * @return {?}
     */
    NotificationEndpoint.prototype.getNewNotificationsEndpoint = /**
     * @template T
     * @param {?=} lastNotificationDate
     * @return {?}
     */
    function (lastNotificationDate) {
        /** @type {?} */
        var unreadNotifications = this.demoNotifications;
        /** @type {?} */
        var response = this.createResponse(unreadNotifications, 200);
        return of(response.body);
    };
    /**
     * @template T
     * @param {?} notificationId
     * @param {?=} isPinned
     * @return {?}
     */
    NotificationEndpoint.prototype.getPinUnpinNotificationEndpoint = /**
     * @template T
     * @param {?} notificationId
     * @param {?=} isPinned
     * @return {?}
     */
    function (notificationId, isPinned) {
        /** @type {?} */
        var notification = this.demoNotifications.find((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return val.id == notificationId; }));
        /** @type {?} */
        var response;
        if (notification) {
            response = this.createResponse(null, 204);
            if (isPinned == null) {
                isPinned = !notification.isPinned;
            }
            notification.isPinned = isPinned;
            notification.isRead = true;
        }
        else {
            response = this.createResponse(null, 404);
        }
        return of(response.body);
    };
    /**
     * @template T
     * @param {?} notificationIds
     * @param {?} isRead
     * @return {?}
     */
    NotificationEndpoint.prototype.getReadUnreadNotificationEndpoint = /**
     * @template T
     * @param {?} notificationIds
     * @param {?} isRead
     * @return {?}
     */
    function (notificationIds, isRead) {
        var e_1, _a;
        var _loop_1 = function (notificationId) {
            /** @type {?} */
            var notification = this_1.demoNotifications.find((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return val.id == notificationId; }));
            if (notification) {
                notification.isRead = isRead;
            }
        };
        var this_1 = this;
        try {
            for (var notificationIds_1 = tslib_1.__values(notificationIds), notificationIds_1_1 = notificationIds_1.next(); !notificationIds_1_1.done; notificationIds_1_1 = notificationIds_1.next()) {
                var notificationId = notificationIds_1_1.value;
                _loop_1(notificationId);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (notificationIds_1_1 && !notificationIds_1_1.done && (_a = notificationIds_1.return)) _a.call(notificationIds_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        /** @type {?} */
        var response = this.createResponse(null, 204);
        return of(response.body);
    };
    /**
     * @template T
     * @param {?} notificationId
     * @return {?}
     */
    NotificationEndpoint.prototype.getDeleteNotificationEndpoint = /**
     * @template T
     * @param {?} notificationId
     * @return {?}
     */
    function (notificationId) {
        /** @type {?} */
        var notification = this.demoNotifications.find((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return val.id == notificationId; }));
        /** @type {?} */
        var response;
        if (notification) {
            this.demoNotifications = this.demoNotifications.filter((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return val.id != notificationId; }));
            response = this.createResponse(notification, 200);
        }
        else {
            response = this.createResponse(null, 404);
        }
        return of(response.body);
    };
    /**
     * @private
     * @template T
     * @param {?} body
     * @param {?} status
     * @return {?}
     */
    NotificationEndpoint.prototype.createResponse = /**
     * @private
     * @template T
     * @param {?} body
     * @param {?} status
     * @return {?}
     */
    function (body, status) {
        return new HttpResponse({ body: body, status: status });
    };
    NotificationEndpoint.decorators = [
        { type: Injectable }
    ];
    return NotificationEndpoint;
}());
export { NotificationEndpoint };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NotificationEndpoint.prototype.demoNotifications;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWVuZHBvaW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL25vdGlmaWNhdGlvbi1lbmRwb2ludC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBS3RDO0lBQUE7UUFHWSxzQkFBaUIsR0FBRztZQUN4QjtnQkFDSSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxNQUFNLEVBQUUsU0FBUztnQkFDakIsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLE1BQU0sRUFBRSxJQUFJO2dCQUNaLFFBQVEsRUFBRSxJQUFJO2dCQUNkLElBQUksRUFBRSw2QkFBNkI7YUFDdEM7U0FDSixDQUFDO0lBK0dOLENBQUM7Ozs7OztJQTNHRyxzREFBdUI7Ozs7O0lBQXZCLFVBQTJCLGNBQXNCOztZQUV2QyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxFQUFFLElBQUksY0FBYyxFQUF4QixDQUF3QixFQUFDOztZQUM3RSxRQUF5QjtRQUU3QixJQUFJLFlBQVksRUFBRTtZQUNkLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFJLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN4RDthQUFNO1lBQ0gsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUksSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7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LEVBQUM7O1lBQzdFLFFBQXlCO1FBRTdCLElBQUksWUFBWSxFQUFFO1lBQ2QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsRUFBRSxJQUFJLGNBQWMsRUFBeEIsQ0FBd0IsRUFBQyxDQUFDO1lBQ3hGLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFJLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN4RDthQUFNO1lBQ0gsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUksSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7Ozs7O0lBSU8sNkNBQWM7Ozs7Ozs7SUFBdEIsVUFBMEIsSUFBSSxFQUFFLE1BQWM7UUFDMUMsT0FBTyxJQUFJLFlBQVksQ0FBSSxFQUFFLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDOztnQkExSEosVUFBVTs7SUEySFgsMkJBQUM7Q0FBQSxBQTNIRCxJQTJIQztTQTFIWSxvQkFBb0I7Ozs7OztJQUU3QixpREFTRSIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbkVuZHBvaW50IHtcblxuICAgIHByaXZhdGUgZGVtb05vdGlmaWNhdGlvbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgaGVhZGVyOiAnV2VsY29tZScsXG4gICAgICAgICAgICBib2R5OiAnWW91IGFyZSAuLi4nLFxuICAgICAgICAgICAgaXNSZWFkOiB0cnVlLFxuICAgICAgICAgICAgaXNQaW5uZWQ6IHRydWUsXG4gICAgICAgICAgICBkYXRlOiAnMjAxOS0wNS0yOFQxNjoyOToxMy41ODc3OTU4J1xuICAgICAgICB9XG4gICAgXTtcblxuXG5cbiAgICBnZXROb3RpZmljYXRpb25FbmRwb2ludDxUPihub3RpZmljYXRpb25JZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxUPiB7XG5cbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gdGhpcy5kZW1vTm90aWZpY2F0aW9ucy5maW5kKHZhbCA9PiB2YWwuaWQgPT0gbm90aWZpY2F0aW9uSWQpO1xuICAgICAgICBsZXQgcmVzcG9uc2U6IEh0dHBSZXNwb25zZTxUPjtcblxuICAgICAgICBpZiAobm90aWZpY2F0aW9uKSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuY3JlYXRlUmVzcG9uc2U8VD4obm90aWZpY2F0aW9uLCAyMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLmNyZWF0ZVJlc3BvbnNlPFQ+KG51bGwsIDQwNCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2YocmVzcG9uc2UuYm9keSk7XG4gICAgfVxuXG5cblxuICAgIGdldE5vdGlmaWNhdGlvbnNFbmRwb2ludDxUPihwYWdlOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIpOiBPYnNlcnZhYmxlPFQ+IHtcblxuICAgICAgICBjb25zdCBub3RpZmljYXRpb25zID0gdGhpcy5kZW1vTm90aWZpY2F0aW9ucztcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLmNyZWF0ZVJlc3BvbnNlPFQ+KHRoaXMuZGVtb05vdGlmaWNhdGlvbnMsIDIwMCk7XG5cbiAgICAgICAgcmV0dXJuIG9mKHJlc3BvbnNlLmJvZHkpO1xuICAgIH1cblxuXG5cbiAgICBnZXRVbnJlYWROb3RpZmljYXRpb25zRW5kcG9pbnQ8VD4odXNlcklkPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG5cbiAgICAgICAgY29uc3QgdW5yZWFkTm90aWZpY2F0aW9ucyA9IHRoaXMuZGVtb05vdGlmaWNhdGlvbnMuZmlsdGVyKHZhbCA9PiAhdmFsLmlzUmVhZCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy5jcmVhdGVSZXNwb25zZTxUPih1bnJlYWROb3RpZmljYXRpb25zLCAyMDApO1xuXG4gICAgICAgIHJldHVybiBvZihyZXNwb25zZS5ib2R5KTtcbiAgICB9XG5cblxuXG4gICAgZ2V0TmV3Tm90aWZpY2F0aW9uc0VuZHBvaW50PFQ+KGxhc3ROb3RpZmljYXRpb25EYXRlPzogRGF0ZSk6IE9ic2VydmFibGU8VD4ge1xuXG4gICAgICAgIGNvbnN0IHVucmVhZE5vdGlmaWNhdGlvbnMgPSB0aGlzLmRlbW9Ob3RpZmljYXRpb25zO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMuY3JlYXRlUmVzcG9uc2U8VD4odW5yZWFkTm90aWZpY2F0aW9ucywgMjAwKTtcblxuICAgICAgICByZXR1cm4gb2YocmVzcG9uc2UuYm9keSk7XG4gICAgfVxuXG5cblxuICAgIGdldFBpblVucGluTm90aWZpY2F0aW9uRW5kcG9pbnQ8VD4obm90aWZpY2F0aW9uSWQ6IG51bWJlciwgaXNQaW5uZWQ/OiBib29sZWFuLCApOiBPYnNlcnZhYmxlPFQ+IHtcblxuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSB0aGlzLmRlbW9Ob3RpZmljYXRpb25zLmZpbmQodmFsID0+IHZhbC5pZCA9PSBub3RpZmljYXRpb25JZCk7XG4gICAgICAgIGxldCByZXNwb25zZTogSHR0cFJlc3BvbnNlPFQ+O1xuXG4gICAgICAgIGlmIChub3RpZmljYXRpb24pIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5jcmVhdGVSZXNwb25zZTxUPihudWxsLCAyMDQpO1xuXG4gICAgICAgICAgICBpZiAoaXNQaW5uZWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlzUGlubmVkID0gIW5vdGlmaWNhdGlvbi5pc1Bpbm5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm90aWZpY2F0aW9uLmlzUGlubmVkID0gaXNQaW5uZWQ7XG4gICAgICAgICAgICBub3RpZmljYXRpb24uaXNSZWFkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5jcmVhdGVSZXNwb25zZTxUPihudWxsLCA0MDQpO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gb2YocmVzcG9uc2UuYm9keSk7XG4gICAgfVxuXG5cblxuICAgIGdldFJlYWRVbnJlYWROb3RpZmljYXRpb25FbmRwb2ludDxUPihub3RpZmljYXRpb25JZHM6IG51bWJlcltdLCBpc1JlYWQ6IGJvb2xlYW4sICk6IE9ic2VydmFibGU8VD4ge1xuXG4gICAgICAgIGZvciAoY29uc3Qgbm90aWZpY2F0aW9uSWQgb2Ygbm90aWZpY2F0aW9uSWRzKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IHRoaXMuZGVtb05vdGlmaWNhdGlvbnMuZmluZCh2YWwgPT4gdmFsLmlkID09IG5vdGlmaWNhdGlvbklkKTtcblxuICAgICAgICAgICAgaWYgKG5vdGlmaWNhdGlvbikge1xuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5pc1JlYWQgPSBpc1JlYWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMuY3JlYXRlUmVzcG9uc2U8VD4obnVsbCwgMjA0KTtcbiAgICAgICAgcmV0dXJuIG9mKHJlc3BvbnNlLmJvZHkpO1xuICAgIH1cblxuXG5cbiAgICBnZXREZWxldGVOb3RpZmljYXRpb25FbmRwb2ludDxUPihub3RpZmljYXRpb25JZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxUPiB7XG5cbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gdGhpcy5kZW1vTm90aWZpY2F0aW9ucy5maW5kKHZhbCA9PiB2YWwuaWQgPT0gbm90aWZpY2F0aW9uSWQpO1xuICAgICAgICBsZXQgcmVzcG9uc2U6IEh0dHBSZXNwb25zZTxUPjtcblxuICAgICAgICBpZiAobm90aWZpY2F0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmRlbW9Ob3RpZmljYXRpb25zID0gdGhpcy5kZW1vTm90aWZpY2F0aW9ucy5maWx0ZXIodmFsID0+IHZhbC5pZCAhPSBub3RpZmljYXRpb25JZCk7XG4gICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuY3JlYXRlUmVzcG9uc2U8VD4obm90aWZpY2F0aW9uLCAyMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLmNyZWF0ZVJlc3BvbnNlPFQ+KG51bGwsIDQwNCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2YocmVzcG9uc2UuYm9keSk7XG4gICAgfVxuXG5cblxuICAgIHByaXZhdGUgY3JlYXRlUmVzcG9uc2U8VD4oYm9keSwgc3RhdHVzOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2U8VD4oeyBib2R5LCBzdGF0dXMgfSk7XG4gICAgfVxufVxuIl19