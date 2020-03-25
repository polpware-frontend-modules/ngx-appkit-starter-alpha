/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/notification.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { map, flatMap, startWith } from 'rxjs/operators';
import { AuthService } from '@polpware/ngx-oauth2';
import { NotificationEndpoint } from './notification-endpoint.service';
import { Notification } from '../models/notification.model';
var NotificationService = /** @class */ (function () {
    function NotificationService(notificationEndpoint, authService) {
        this.notificationEndpoint = notificationEndpoint;
        this.authService = authService;
    }
    Object.defineProperty(NotificationService.prototype, "currentUser", {
        get: /**
         * @return {?}
         */
        function () {
            return this.authService.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationService.prototype, "recentNotifications", {
        get: /**
         * @return {?}
         */
        function () {
            return this._recentNotifications;
        },
        set: /**
         * @param {?} notifications
         * @return {?}
         */
        function (notifications) {
            this._recentNotifications = notifications;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} notificationId
     * @return {?}
     */
    NotificationService.prototype.getNotification = /**
     * @param {?=} notificationId
     * @return {?}
     */
    function (notificationId) {
        return this.notificationEndpoint.getNotificationEndpoint(notificationId).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return Notification.Create(response); })));
    };
    /**
     * @param {?} page
     * @param {?} pageSize
     * @return {?}
     */
    NotificationService.prototype.getNotifications = /**
     * @param {?} page
     * @param {?} pageSize
     * @return {?}
     */
    function (page, pageSize) {
        var _this = this;
        return this.notificationEndpoint.getNotificationsEndpoint(page, pageSize).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            return _this.getNotificationsFromResponse(response);
        })));
    };
    /**
     * @param {?=} userId
     * @return {?}
     */
    NotificationService.prototype.getUnreadNotifications = /**
     * @param {?=} userId
     * @return {?}
     */
    function (userId) {
        var _this = this;
        return this.notificationEndpoint.getUnreadNotificationsEndpoint(userId).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return _this.getNotificationsFromResponse(response); })));
    };
    /**
     * @return {?}
     */
    NotificationService.prototype.getNewNotifications = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.notificationEndpoint.getNewNotificationsEndpoint(this.lastNotificationDate).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        function (response) { return _this.processNewNotificationsFromResponse(response); })));
    };
    /**
     * @return {?}
     */
    NotificationService.prototype.getNewNotificationsPeriodically = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return interval(10000).pipe(startWith(0), flatMap((/**
         * @return {?}
         */
        function () {
            return _this.notificationEndpoint.getNewNotificationsEndpoint(_this.lastNotificationDate).pipe(map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) { return _this.processNewNotificationsFromResponse(response); })));
        })));
    };
    /**
     * @param {?} notificationOrNotificationId
     * @param {?=} isPinned
     * @return {?}
     */
    NotificationService.prototype.pinUnpinNotification = /**
     * @param {?} notificationOrNotificationId
     * @param {?=} isPinned
     * @return {?}
     */
    function (notificationOrNotificationId, isPinned) {
        if (typeof notificationOrNotificationId === 'number' || notificationOrNotificationId instanceof Number) {
            return this.notificationEndpoint.getPinUnpinNotificationEndpoint((/** @type {?} */ (notificationOrNotificationId)), isPinned);
        }
        else {
            return this.pinUnpinNotification(notificationOrNotificationId.id);
        }
    };
    /**
     * @param {?} notificationIds
     * @param {?} isRead
     * @return {?}
     */
    NotificationService.prototype.readUnreadNotification = /**
     * @param {?} notificationIds
     * @param {?} isRead
     * @return {?}
     */
    function (notificationIds, isRead) {
        return this.notificationEndpoint.getReadUnreadNotificationEndpoint(notificationIds, isRead);
    };
    /**
     * @param {?} notificationOrNotificationId
     * @return {?}
     */
    NotificationService.prototype.deleteNotification = /**
     * @param {?} notificationOrNotificationId
     * @return {?}
     */
    function (notificationOrNotificationId) {
        var _this = this;
        if (typeof notificationOrNotificationId === 'number' || notificationOrNotificationId instanceof Number) { // Todo: Test me if its check is valid
            return this.notificationEndpoint.getDeleteNotificationEndpoint((/** @type {?} */ (notificationOrNotificationId))).pipe(map((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                _this.recentNotifications = _this.recentNotifications.filter((/**
                 * @param {?} n
                 * @return {?}
                 */
                function (n) { return n.id != notificationOrNotificationId; }));
                return Notification.Create(response);
            })));
        }
        else {
            return this.deleteNotification(notificationOrNotificationId.id);
        }
    };
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    NotificationService.prototype.processNewNotificationsFromResponse = /**
     * @private
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var e_1, _a;
        /** @type {?} */
        var notifications = this.getNotificationsFromResponse(response);
        try {
            for (var notifications_1 = tslib_1.__values(notifications), notifications_1_1 = notifications_1.next(); !notifications_1_1.done; notifications_1_1 = notifications_1.next()) {
                var n = notifications_1_1.value;
                if (n.date > this.lastNotificationDate) {
                    this.lastNotificationDate = n.date;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (notifications_1_1 && !notifications_1_1.done && (_a = notifications_1.return)) _a.call(notifications_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return notifications;
    };
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    NotificationService.prototype.getNotificationsFromResponse = /**
     * @private
     * @param {?} response
     * @return {?}
     */
    function (response) {
        /** @type {?} */
        var notifications = [];
        for (var i in response) {
            notifications[i] = Notification.Create(response[i]);
        }
        notifications.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return b.date.valueOf() - a.date.valueOf(); }));
        notifications.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return (a.isPinned === b.isPinned) ? 0 : a.isPinned ? -1 : 1; }));
        this.recentNotifications = notifications;
        return notifications;
    };
    NotificationService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NotificationService.ctorParameters = function () { return [
        { type: NotificationEndpoint },
        { type: AuthService }
    ]; };
    return NotificationService;
}());
export { NotificationService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NotificationService.prototype.lastNotificationDate;
    /**
     * @type {?}
     * @private
     */
    NotificationService.prototype._recentNotifications;
    /**
     * @type {?}
     * @private
     */
    NotificationService.prototype.notificationEndpoint;
    /**
     * @type {?}
     * @private
     */
    NotificationService.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsT0FBTyxFQUFFLFdBQVcsRUFBUSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUU1RDtJQW9CSSw2QkFBb0Isb0JBQTBDLEVBQVUsV0FBd0I7UUFBNUUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBRWhHLENBQUM7SUFoQkQsc0JBQUksNENBQVc7Ozs7UUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvREFBbUI7Ozs7UUFBdkI7WUFDSSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUNyQyxDQUFDOzs7OztRQUVELFVBQXdCLGFBQTZCO1lBQ2pELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxhQUFhLENBQUM7UUFDOUMsQ0FBQzs7O09BSkE7Ozs7O0lBYUQsNkNBQWU7Ozs7SUFBZixVQUFnQixjQUF1QjtRQUVuQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENB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YUFBYSxDQUFDLElBQUk7Ozs7O1FBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFyRCxDQUFxRCxFQUFDLENBQUM7UUFFcEYsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGFBQWEsQ0FBQztRQUV6QyxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDOztnQkE5SEosVUFBVTs7OztnQkFIRixvQkFBb0I7Z0JBRHBCLFdBQVc7O0lBbUlwQiwwQkFBQztDQUFBLEFBL0hELElBK0hDO1NBOUhZLG1CQUFtQjs7Ozs7O0lBRTVCLG1EQUFtQzs7Ozs7SUFDbkMsbURBQTZDOzs7OztJQWdCakMsbURBQWtEOzs7OztJQUFFLDBDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgZmxhdE1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSwgVXNlciB9IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtb2F1dGgyJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkVuZHBvaW50IH0gZnJvbSAnLi9ub3RpZmljYXRpb24tZW5kcG9pbnQuc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuLi9tb2RlbHMvbm90aWZpY2F0aW9uLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBsYXN0Tm90aWZpY2F0aW9uRGF0ZTogRGF0ZTtcbiAgICBwcml2YXRlIF9yZWNlbnROb3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25bXTtcblxuICAgIGdldCBjdXJyZW50VXNlcigpOiBVc2VyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuY3VycmVudFVzZXI7XG4gICAgfVxuXG4gICAgZ2V0IHJlY2VudE5vdGlmaWNhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWNlbnROb3RpZmljYXRpb25zO1xuICAgIH1cblxuICAgIHNldCByZWNlbnROb3RpZmljYXRpb25zKG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbltdKSB7XG4gICAgICAgIHRoaXMuX3JlY2VudE5vdGlmaWNhdGlvbnMgPSBub3RpZmljYXRpb25zO1xuICAgIH1cblxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vdGlmaWNhdGlvbkVuZHBvaW50OiBOb3RpZmljYXRpb25FbmRwb2ludCwgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcblxuICAgIH1cblxuXG4gICAgZ2V0Tm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbklkPzogbnVtYmVyKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uRW5kcG9pbnQuZ2V0Tm90aWZpY2F0aW9uRW5kcG9pbnQobm90aWZpY2F0aW9uSWQpLnBpcGUoXG4gICAgICAgICAgICBtYXAocmVzcG9uc2UgPT4gTm90aWZpY2F0aW9uLkNyZWF0ZShyZXNwb25zZSkpKTtcbiAgICB9XG5cblxuICAgIGdldE5vdGlmaWNhdGlvbnMocGFnZTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uRW5kcG9pbnQuZ2V0Tm90aWZpY2F0aW9uc0VuZHBvaW50KHBhZ2UsIHBhZ2VTaXplKS5waXBlKFxuICAgICAgICAgICAgbWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXROb3RpZmljYXRpb25zRnJvbVJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cblxuICAgIGdldFVucmVhZE5vdGlmaWNhdGlvbnModXNlcklkPzogc3RyaW5nKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uRW5kcG9pbnQuZ2V0VW5yZWFkTm90aWZpY2F0aW9uc0VuZHBvaW50KHVzZXJJZCkucGlwZShcbiAgICAgICAgICAgIG1hcChyZXNwb25zZSA9PiB0aGlzLmdldE5vdGlmaWNhdGlvbnNGcm9tUmVzcG9uc2UocmVzcG9uc2UpKSk7XG4gICAgfVxuXG5cbiAgICBnZXROZXdOb3RpZmljYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb25FbmRwb2ludC5nZXROZXdOb3RpZmljYXRpb25zRW5kcG9pbnQodGhpcy5sYXN0Tm90aWZpY2F0aW9uRGF0ZSkucGlwZShcbiAgICAgICAgICAgIG1hcChyZXNwb25zZSA9PiB0aGlzLnByb2Nlc3NOZXdOb3RpZmljYXRpb25zRnJvbVJlc3BvbnNlKHJlc3BvbnNlKSkpO1xuICAgIH1cblxuXG4gICAgZ2V0TmV3Tm90aWZpY2F0aW9uc1BlcmlvZGljYWxseSgpIHtcbiAgICAgICAgcmV0dXJuIGludGVydmFsKDEwMDAwKS5waXBlKFxuICAgICAgICAgICAgc3RhcnRXaXRoKDApLFxuICAgICAgICAgICAgZmxhdE1hcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uRW5kcG9pbnQuZ2V0TmV3Tm90aWZpY2F0aW9uc0VuZHBvaW50KHRoaXMubGFzdE5vdGlmaWNhdGlvbkRhdGUpLnBpcGUoXG4gICAgICAgICAgICAgICAgICAgIG1hcChyZXNwb25zZSA9PiB0aGlzLnByb2Nlc3NOZXdOb3RpZmljYXRpb25zRnJvbVJlc3BvbnNlKHJlc3BvbnNlKSkpO1xuICAgICAgICAgICAgfSkpO1xuICAgIH1cblxuXG5cblxuICAgIHBpblVucGluTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk9yTm90aWZpY2F0aW9uSWQ6IG51bWJlciB8IE5vdGlmaWNhdGlvbiwgaXNQaW5uZWQ/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgICAgICBpZiAodHlwZW9mIG5vdGlmaWNhdGlvbk9yTm90aWZpY2F0aW9uSWQgPT09ICdudW1iZXInIHx8IG5vdGlmaWNhdGlvbk9yTm90aWZpY2F0aW9uSWQgaW5zdGFuY2VvZiBOdW1iZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbkVuZHBvaW50LmdldFBpblVucGluTm90aWZpY2F0aW9uRW5kcG9pbnQobm90aWZpY2F0aW9uT3JOb3RpZmljYXRpb25JZCBhcyBudW1iZXIsIGlzUGlubmVkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBpblVucGluTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk9yTm90aWZpY2F0aW9uSWQuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZWFkVW5yZWFkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbklkczogbnVtYmVyW10sIGlzUmVhZDogYm9vbGVhbik6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uRW5kcG9pbnQuZ2V0UmVhZFVucmVhZE5vdGlmaWNhdGlvbkVuZHBvaW50KG5vdGlmaWNhdGlvbklkcywgaXNSZWFkKTtcbiAgICB9XG5cblxuXG5cbiAgICBkZWxldGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uT3JOb3RpZmljYXRpb25JZDogbnVtYmVyIHwgTm90aWZpY2F0aW9uKTogT2JzZXJ2YWJsZTxOb3RpZmljYXRpb24+IHtcblxuICAgICAgICBpZiAodHlwZW9mIG5vdGlmaWNhdGlvbk9yTm90aWZpY2F0aW9uSWQgPT09ICdudW1iZXInIHx8IG5vdGlmaWNhdGlvbk9yTm90aWZpY2F0aW9uSWQgaW5zdGFuY2VvZiBOdW1iZXIpIHsgLy8gVG9kbzogVGVzdCBtZSBpZiBpdHMgY2hlY2sgaXMgdmFsaWRcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbkVuZHBvaW50LmdldERlbGV0ZU5vdGlmaWNhdGlvbkVuZHBvaW50KG5vdGlmaWNhdGlvbk9yTm90aWZpY2F0aW9uSWQgYXMgbnVtYmVyKS5waXBlKFxuICAgICAgICAgICAgICAgIG1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjZW50Tm90aWZpY2F0aW9ucyA9IHRoaXMucmVjZW50Tm90aWZpY2F0aW9ucy5maWx0ZXIobiA9PiBuLmlkICE9IG5vdGlmaWNhdGlvbk9yTm90aWZpY2F0aW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTm90aWZpY2F0aW9uLkNyZWF0ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVsZXRlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk9yTm90aWZpY2F0aW9uSWQuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG4gICAgcHJpdmF0ZSBwcm9jZXNzTmV3Tm90aWZpY2F0aW9uc0Zyb21SZXNwb25zZShyZXNwb25zZSkge1xuICAgICAgICBjb25zdCBub3RpZmljYXRpb25zID0gdGhpcy5nZXROb3RpZmljYXRpb25zRnJvbVJlc3BvbnNlKHJlc3BvbnNlKTtcblxuICAgICAgICBmb3IgKGNvbnN0IG4gb2Ygbm90aWZpY2F0aW9ucykge1xuICAgICAgICAgICAgaWYgKG4uZGF0ZSA+IHRoaXMubGFzdE5vdGlmaWNhdGlvbkRhdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3ROb3RpZmljYXRpb25EYXRlID0gbi5kYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vdGlmaWNhdGlvbnM7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGdldE5vdGlmaWNhdGlvbnNGcm9tUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uczogTm90aWZpY2F0aW9uW10gPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbnNbaV0gPSBOb3RpZmljYXRpb24uQ3JlYXRlKHJlc3BvbnNlW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vdGlmaWNhdGlvbnMuc29ydCgoYSwgYikgPT4gYi5kYXRlLnZhbHVlT2YoKSAtIGEuZGF0ZS52YWx1ZU9mKCkpO1xuICAgICAgICBub3RpZmljYXRpb25zLnNvcnQoKGEsIGIpID0+IChhLmlzUGlubmVkID09PSBiLmlzUGlubmVkKSA/IDAgOiBhLmlzUGlubmVkID8gLTEgOiAxKTtcblxuICAgICAgICB0aGlzLnJlY2VudE5vdGlmaWNhdGlvbnMgPSBub3RpZmljYXRpb25zO1xuXG4gICAgICAgIHJldHVybiBub3RpZmljYXRpb25zO1xuICAgIH1cbn1cbiJdfQ==