/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/notification-endpoint.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
export class NotificationEndpoint {
    constructor() {
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
    getNotificationEndpoint(notificationId) {
        /** @type {?} */
        const notification = this.demoNotifications.find((/**
         * @param {?} val
         * @return {?}
         */
        val => val.id == notificationId));
        /** @type {?} */
        let response;
        if (notification) {
            response = this.createResponse(notification, 200);
        }
        else {
            response = this.createResponse(null, 404);
        }
        return of(response.body);
    }
    /**
     * @template T
     * @param {?} page
     * @param {?} pageSize
     * @return {?}
     */
    getNotificationsEndpoint(page, pageSize) {
        /** @type {?} */
        const notifications = this.demoNotifications;
        /** @type {?} */
        const response = this.createResponse(this.demoNotifications, 200);
        return of(response.body);
    }
    /**
     * @template T
     * @param {?=} userId
     * @return {?}
     */
    getUnreadNotificationsEndpoint(userId) {
        /** @type {?} */
        const unreadNotifications = this.demoNotifications.filter((/**
         * @param {?} val
         * @return {?}
         */
        val => !val.isRead));
        /** @type {?} */
        const response = this.createResponse(unreadNotifications, 200);
        return of(response.body);
    }
    /**
     * @template T
     * @param {?=} lastNotificationDate
     * @return {?}
     */
    getNewNotificationsEndpoint(lastNotificationDate) {
        /** @type {?} */
        const unreadNotifications = this.demoNotifications;
        /** @type {?} */
        const response = this.createResponse(unreadNotifications, 200);
        return of(response.body);
    }
    /**
     * @template T
     * @param {?} notificationId
     * @param {?=} isPinned
     * @return {?}
     */
    getPinUnpinNotificationEndpoint(notificationId, isPinned) {
        /** @type {?} */
        const notification = this.demoNotifications.find((/**
         * @param {?} val
         * @return {?}
         */
        val => val.id == notificationId));
        /** @type {?} */
        let response;
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
    }
    /**
     * @template T
     * @param {?} notificationIds
     * @param {?} isRead
     * @return {?}
     */
    getReadUnreadNotificationEndpoint(notificationIds, isRead) {
        for (const notificationId of notificationIds) {
            /** @type {?} */
            const notification = this.demoNotifications.find((/**
             * @param {?} val
             * @return {?}
             */
            val => val.id == notificationId));
            if (notification) {
                notification.isRead = isRead;
            }
        }
        /** @type {?} */
        const response = this.createResponse(null, 204);
        return of(response.body);
    }
    /**
     * @template T
     * @param {?} notificationId
     * @return {?}
     */
    getDeleteNotificationEndpoint(notificationId) {
        /** @type {?} */
        const notification = this.demoNotifications.find((/**
         * @param {?} val
         * @return {?}
         */
        val => val.id == notificationId));
        /** @type {?} */
        let response;
        if (notification) {
            this.demoNotifications = this.demoNotifications.filter((/**
             * @param {?} val
             * @return {?}
             */
            val => val.id != notificationId));
            response = this.createResponse(notification, 200);
        }
        else {
            response = this.createResponse(null, 404);
        }
        return of(response.body);
    }
    /**
     * @private
     * @template T
     * @param {?} body
     * @param {?} status
     * @return {?}
     */
    createResponse(body, status) {
        return new HttpResponse({ body, status });
    }
}
NotificationEndpoint.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NotificationEndpoint.prototype.demoNotifications;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWVuZHBvaW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL25vdGlmaWNhdGlvbi1lbmRwb2ludC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFNdEMsTUFBTSxPQUFPLG9CQUFvQjtJQURqQztRQUdZLHNCQUFpQixHQUFHO1lBQ3hCO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsTUFBTSxFQUFFLElBQUk7Z0JBQ1osUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLDZCQUE2QjthQUN0QztTQUNKLENBQUM7SUErR04sQ0FBQzs7Ozs7O0lBM0dHLHVCQUF1QixDQUFJLGNBQXNCOztjQUV2QyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUk7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksY0FBYyxFQUFDOztZQUM3RSxRQUF5QjtRQUU3QixJQUFJLFlBQVksRUFBRTtZQUNkLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFJLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN4RDthQUFNO1lBQ0gsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUksSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7Ozs7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LGNBQWMsQ0FBSSxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDeEQ7YUFBTTtZQUNILFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFJLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNoRDtRQUVELE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7Ozs7OztJQUlPLGNBQWMsQ0FBSSxJQUFJLEVBQUUsTUFBYztRQUMxQyxPQUFPLElBQUksWUFBWSxDQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7O1lBMUhKLFVBQVU7Ozs7Ozs7SUFHUCxpREFTRSIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbkVuZHBvaW50IHtcblxuICAgIHByaXZhdGUgZGVtb05vdGlmaWNhdGlvbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgaGVhZGVyOiAnV2VsY29tZScsXG4gICAgICAgICAgICBib2R5OiAnWW91IGFyZSAuLi4nLFxuICAgICAgICAgICAgaXNSZWFkOiB0cnVlLFxuICAgICAgICAgICAgaXNQaW5uZWQ6IHRydWUsXG4gICAgICAgICAgICBkYXRlOiAnMjAxOS0wNS0yOFQxNjoyOToxMy41ODc3OTU4J1xuICAgICAgICB9XG4gICAgXTtcblxuXG5cbiAgICBnZXROb3RpZmljYXRpb25FbmRwb2ludDxUPihub3RpZmljYXRpb25JZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxUPiB7XG5cbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gdGhpcy5kZW1vTm90aWZpY2F0aW9ucy5maW5kKHZhbCA9PiB2YWwuaWQgPT0gbm90aWZpY2F0aW9uSWQpO1xuICAgICAgICBsZXQgcmVzcG9uc2U6IEh0dHBSZXNwb25zZTxUPjtcblxuICAgICAgICBpZiAobm90aWZpY2F0aW9uKSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuY3JlYXRlUmVzcG9uc2U8VD4obm90aWZpY2F0aW9uLCAyMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLmNyZWF0ZVJlc3BvbnNlPFQ+KG51bGwsIDQwNCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2YocmVzcG9uc2UuYm9keSk7XG4gICAgfVxuXG5cblxuICAgIGdldE5vdGlmaWNhdGlvbnNFbmRwb2ludDxUPihwYWdlOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIpOiBPYnNlcnZhYmxlPFQ+IHtcblxuICAgICAgICBjb25zdCBub3RpZmljYXRpb25zID0gdGhpcy5kZW1vTm90aWZpY2F0aW9ucztcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLmNyZWF0ZVJlc3BvbnNlPFQ+KHRoaXMuZGVtb05vdGlmaWNhdGlvbnMsIDIwMCk7XG5cbiAgICAgICAgcmV0dXJuIG9mKHJlc3BvbnNlLmJvZHkpO1xuICAgIH1cblxuXG5cbiAgICBnZXRVbnJlYWROb3RpZmljYXRpb25zRW5kcG9pbnQ8VD4odXNlcklkPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG5cbiAgICAgICAgY29uc3QgdW5yZWFkTm90aWZpY2F0aW9ucyA9IHRoaXMuZGVtb05vdGlmaWNhdGlvbnMuZmlsdGVyKHZhbCA9PiAhdmFsLmlzUmVhZCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy5jcmVhdGVSZXNwb25zZTxUPih1bnJlYWROb3RpZmljYXRpb25zLCAyMDApO1xuXG4gICAgICAgIHJldHVybiBvZihyZXNwb25zZS5ib2R5KTtcbiAgICB9XG5cblxuXG4gICAgZ2V0TmV3Tm90aWZpY2F0aW9uc0VuZHBvaW50PFQ+KGxhc3ROb3RpZmljYXRpb25EYXRlPzogRGF0ZSk6IE9ic2VydmFibGU8VD4ge1xuXG4gICAgICAgIGNvbnN0IHVucmVhZE5vdGlmaWNhdGlvbnMgPSB0aGlzLmRlbW9Ob3RpZmljYXRpb25zO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMuY3JlYXRlUmVzcG9uc2U8VD4odW5yZWFkTm90aWZpY2F0aW9ucywgMjAwKTtcblxuICAgICAgICByZXR1cm4gb2YocmVzcG9uc2UuYm9keSk7XG4gICAgfVxuXG5cblxuICAgIGdldFBpblVucGluTm90aWZpY2F0aW9uRW5kcG9pbnQ8VD4obm90aWZpY2F0aW9uSWQ6IG51bWJlciwgaXNQaW5uZWQ/OiBib29sZWFuLCApOiBPYnNlcnZhYmxlPFQ+IHtcblxuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSB0aGlzLmRlbW9Ob3RpZmljYXRpb25zLmZpbmQodmFsID0+IHZhbC5pZCA9PSBub3RpZmljYXRpb25JZCk7XG4gICAgICAgIGxldCByZXNwb25zZTogSHR0cFJlc3BvbnNlPFQ+O1xuXG4gICAgICAgIGlmIChub3RpZmljYXRpb24pIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5jcmVhdGVSZXNwb25zZTxUPihudWxsLCAyMDQpO1xuXG4gICAgICAgICAgICBpZiAoaXNQaW5uZWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlzUGlubmVkID0gIW5vdGlmaWNhdGlvbi5pc1Bpbm5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm90aWZpY2F0aW9uLmlzUGlubmVkID0gaXNQaW5uZWQ7XG4gICAgICAgICAgICBub3RpZmljYXRpb24uaXNSZWFkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5jcmVhdGVSZXNwb25zZTxUPihudWxsLCA0MDQpO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gb2YocmVzcG9uc2UuYm9keSk7XG4gICAgfVxuXG5cblxuICAgIGdldFJlYWRVbnJlYWROb3RpZmljYXRpb25FbmRwb2ludDxUPihub3RpZmljYXRpb25JZHM6IG51bWJlcltdLCBpc1JlYWQ6IGJvb2xlYW4sICk6IE9ic2VydmFibGU8VD4ge1xuXG4gICAgICAgIGZvciAoY29uc3Qgbm90aWZpY2F0aW9uSWQgb2Ygbm90aWZpY2F0aW9uSWRzKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IHRoaXMuZGVtb05vdGlmaWNhdGlvbnMuZmluZCh2YWwgPT4gdmFsLmlkID09IG5vdGlmaWNhdGlvbklkKTtcblxuICAgICAgICAgICAgaWYgKG5vdGlmaWNhdGlvbikge1xuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5pc1JlYWQgPSBpc1JlYWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMuY3JlYXRlUmVzcG9uc2U8VD4obnVsbCwgMjA0KTtcbiAgICAgICAgcmV0dXJuIG9mKHJlc3BvbnNlLmJvZHkpO1xuICAgIH1cblxuXG5cbiAgICBnZXREZWxldGVOb3RpZmljYXRpb25FbmRwb2ludDxUPihub3RpZmljYXRpb25JZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxUPiB7XG5cbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gdGhpcy5kZW1vTm90aWZpY2F0aW9ucy5maW5kKHZhbCA9PiB2YWwuaWQgPT0gbm90aWZpY2F0aW9uSWQpO1xuICAgICAgICBsZXQgcmVzcG9uc2U6IEh0dHBSZXNwb25zZTxUPjtcblxuICAgICAgICBpZiAobm90aWZpY2F0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmRlbW9Ob3RpZmljYXRpb25zID0gdGhpcy5kZW1vTm90aWZpY2F0aW9ucy5maWx0ZXIodmFsID0+IHZhbC5pZCAhPSBub3RpZmljYXRpb25JZCk7XG4gICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuY3JlYXRlUmVzcG9uc2U8VD4obm90aWZpY2F0aW9uLCAyMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLmNyZWF0ZVJlc3BvbnNlPFQ+KG51bGwsIDQwNCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2YocmVzcG9uc2UuYm9keSk7XG4gICAgfVxuXG5cblxuICAgIHByaXZhdGUgY3JlYXRlUmVzcG9uc2U8VD4oYm9keSwgc3RhdHVzOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2U8VD4oeyBib2R5LCBzdGF0dXMgfSk7XG4gICAgfVxufVxuIl19