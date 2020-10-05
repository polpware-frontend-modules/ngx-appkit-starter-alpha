import { __values } from "tslib";
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { map, flatMap, startWith } from 'rxjs/operators';
import { Notification } from '../models/notification.model';
import * as i0 from "@angular/core";
import * as i1 from "./notification-endpoint.service";
import * as i2 from "@polpware/ngx-oauth2";
var NotificationService = /** @class */ (function () {
    function NotificationService(notificationEndpoint, authService) {
        this.notificationEndpoint = notificationEndpoint;
        this.authService = authService;
    }
    Object.defineProperty(NotificationService.prototype, "currentUser", {
        get: function () {
            return this.authService.currentUser;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NotificationService.prototype, "recentNotifications", {
        get: function () {
            return this._recentNotifications;
        },
        set: function (notifications) {
            this._recentNotifications = notifications;
        },
        enumerable: true,
        configurable: true
    });
    NotificationService.prototype.getNotification = function (notificationId) {
        return this.notificationEndpoint.getNotificationEndpoint(notificationId).pipe(map(function (response) { return Notification.Create(response); }));
    };
    NotificationService.prototype.getNotifications = function (page, pageSize) {
        var _this = this;
        return this.notificationEndpoint.getNotificationsEndpoint(page, pageSize).pipe(map(function (response) {
            return _this.getNotificationsFromResponse(response);
        }));
    };
    NotificationService.prototype.getUnreadNotifications = function (userId) {
        var _this = this;
        return this.notificationEndpoint.getUnreadNotificationsEndpoint(userId).pipe(map(function (response) { return _this.getNotificationsFromResponse(response); }));
    };
    NotificationService.prototype.getNewNotifications = function () {
        var _this = this;
        return this.notificationEndpoint.getNewNotificationsEndpoint(this.lastNotificationDate).pipe(map(function (response) { return _this.processNewNotificationsFromResponse(response); }));
    };
    NotificationService.prototype.getNewNotificationsPeriodically = function () {
        var _this = this;
        return interval(10000).pipe(startWith(0), flatMap(function () {
            return _this.notificationEndpoint.getNewNotificationsEndpoint(_this.lastNotificationDate).pipe(map(function (response) { return _this.processNewNotificationsFromResponse(response); }));
        }));
    };
    NotificationService.prototype.pinUnpinNotification = function (notificationOrNotificationId, isPinned) {
        if (typeof notificationOrNotificationId === 'number' || notificationOrNotificationId instanceof Number) {
            return this.notificationEndpoint.getPinUnpinNotificationEndpoint(notificationOrNotificationId, isPinned);
        }
        else {
            return this.pinUnpinNotification(notificationOrNotificationId.id);
        }
    };
    NotificationService.prototype.readUnreadNotification = function (notificationIds, isRead) {
        return this.notificationEndpoint.getReadUnreadNotificationEndpoint(notificationIds, isRead);
    };
    NotificationService.prototype.deleteNotification = function (notificationOrNotificationId) {
        var _this = this;
        if (typeof notificationOrNotificationId === 'number' || notificationOrNotificationId instanceof Number) { // Todo: Test me if its check is valid
            return this.notificationEndpoint.getDeleteNotificationEndpoint(notificationOrNotificationId).pipe(map(function (response) {
                _this.recentNotifications = _this.recentNotifications.filter(function (n) { return n.id != notificationOrNotificationId; });
                return Notification.Create(response);
            }));
        }
        else {
            return this.deleteNotification(notificationOrNotificationId.id);
        }
    };
    NotificationService.prototype.processNewNotificationsFromResponse = function (response) {
        var e_1, _a;
        var notifications = this.getNotificationsFromResponse(response);
        try {
            for (var notifications_1 = __values(notifications), notifications_1_1 = notifications_1.next(); !notifications_1_1.done; notifications_1_1 = notifications_1.next()) {
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
    NotificationService.prototype.getNotificationsFromResponse = function (response) {
        var notifications = [];
        for (var i in response) {
            notifications[i] = Notification.Create(response[i]);
        }
        notifications.sort(function (a, b) { return b.date.valueOf() - a.date.valueOf(); });
        notifications.sort(function (a, b) { return (a.isPinned === b.isPinned) ? 0 : a.isPinned ? -1 : 1; });
        this.recentNotifications = notifications;
        return notifications;
    };
    /** @nocollapse */ NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(i0.ɵɵinject(i1.NotificationEndpoint), i0.ɵɵinject(i2.AuthService)); };
    /** @nocollapse */ NotificationService.ɵprov = i0.ɵɵdefineInjectable({ token: NotificationService, factory: NotificationService.ɵfac });
    return NotificationService;
}());
export { NotificationService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NotificationService, [{
        type: Injectable
    }], function () { return [{ type: i1.NotificationEndpoint }, { type: i2.AuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixnQ0FBZ0M7QUFFaEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXpELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7OztBQUU1RDtJQW9CSSw2QkFBb0Isb0JBQTBDLEVBQVUsV0FBd0I7UUFBNUUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBRWhHLENBQUM7SUFoQkQsc0JBQUksNENBQVc7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxvREFBbUI7YUFBdkI7WUFDSSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUNyQyxDQUFDO2FBRUQsVUFBd0IsYUFBNkI7WUFDakQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGFBQWEsQ0FBQztRQUM5QyxDQUFDOzs7T0FKQTtJQWFELDZDQUFlLEdBQWYsVUFBZ0IsY0FBdUI7UUFFbkMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUN6RSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEs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QUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFyRCxDQUFxRCxDQUFDLENBQUM7UUFFcEYsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGFBQWEsQ0FBQztRQUV6QyxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDOzZHQTdIUSxtQkFBbUI7a0ZBQW5CLG1CQUFtQixXQUFuQixtQkFBbUI7OEJBZGhDO0NBNElDLEFBL0hELElBK0hDO1NBOUhZLG1CQUFtQjtrREFBbkIsbUJBQW1CO2NBRC9CLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGludGVydmFsIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGZsYXRNYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIFVzZXIgfSBmcm9tICdAcG9scHdhcmUvbmd4LW9hdXRoMic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25FbmRwb2ludCB9IGZyb20gJy4vbm90aWZpY2F0aW9uLWVuZHBvaW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL25vdGlmaWNhdGlvbi5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25TZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgbGFzdE5vdGlmaWNhdGlvbkRhdGU6IERhdGU7XG4gICAgcHJpdmF0ZSBfcmVjZW50Tm90aWZpY2F0aW9uczogTm90aWZpY2F0aW9uW107XG5cbiAgICBnZXQgY3VycmVudFVzZXIoKTogVXNlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmN1cnJlbnRVc2VyO1xuICAgIH1cblxuICAgIGdldCByZWNlbnROb3RpZmljYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVjZW50Tm90aWZpY2F0aW9ucztcbiAgICB9XG5cbiAgICBzZXQgcmVjZW50Tm90aWZpY2F0aW9ucyhub3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25bXSkge1xuICAgICAgICB0aGlzLl9yZWNlbnROb3RpZmljYXRpb25zID0gbm90aWZpY2F0aW9ucztcbiAgICB9XG5cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb25FbmRwb2ludDogTm90aWZpY2F0aW9uRW5kcG9pbnQsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XG5cbiAgICB9XG5cblxuICAgIGdldE5vdGlmaWNhdGlvbihub3RpZmljYXRpb25JZD86IG51bWJlcikge1xuXG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbkVuZHBvaW50LmdldE5vdGlmaWNhdGlvbkVuZHBvaW50KG5vdGlmaWNhdGlvbklkKS5waXBlKFxuICAgICAgICAgICAgbWFwKHJlc3BvbnNlID0+IE5vdGlmaWNhdGlvbi5DcmVhdGUocmVzcG9uc2UpKSk7XG4gICAgfVxuXG5cbiAgICBnZXROb3RpZmljYXRpb25zKHBhZ2U6IG51bWJlciwgcGFnZVNpemU6IG51bWJlcikge1xuXG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbkVuZHBvaW50LmdldE5vdGlmaWNhdGlvbnNFbmRwb2ludChwYWdlLCBwYWdlU2l6ZSkucGlwZShcbiAgICAgICAgICAgIG1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Tm90aWZpY2F0aW9uc0Zyb21SZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG5cbiAgICBnZXRVbnJlYWROb3RpZmljYXRpb25zKHVzZXJJZD86IHN0cmluZykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbkVuZHBvaW50LmdldFVucmVhZE5vdGlmaWNhdGlvbnNFbmRwb2ludCh1c2VySWQpLnBpcGUoXG4gICAgICAgICAgICBtYXAocmVzcG9uc2UgPT4gdGhpcy5nZXROb3RpZmljYXRpb25zRnJvbVJlc3BvbnNlKHJlc3BvbnNlKSkpO1xuICAgIH1cblxuXG4gICAgZ2V0TmV3Tm90aWZpY2F0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uRW5kcG9pbnQuZ2V0TmV3Tm90aWZpY2F0aW9uc0VuZHBvaW50KHRoaXMubGFzdE5vdGlmaWNhdGlvbkRhdGUpLnBpcGUoXG4gICAgICAgICAgICBtYXAocmVzcG9uc2UgPT4gdGhpcy5wcm9jZXNzTmV3Tm90aWZpY2F0aW9uc0Zyb21SZXNwb25zZShyZXNwb25zZSkpKTtcbiAgICB9XG5cblxuICAgIGdldE5ld05vdGlmaWNhdGlvbnNQZXJpb2RpY2FsbHkoKSB7XG4gICAgICAgIHJldHVybiBpbnRlcnZhbCgxMDAwMCkucGlwZShcbiAgICAgICAgICAgIHN0YXJ0V2l0aCgwKSxcbiAgICAgICAgICAgIGZsYXRNYXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbkVuZHBvaW50LmdldE5ld05vdGlmaWNhdGlvbnNFbmRwb2ludCh0aGlzLmxhc3ROb3RpZmljYXRpb25EYXRlKS5waXBlKFxuICAgICAgICAgICAgICAgICAgICBtYXAocmVzcG9uc2UgPT4gdGhpcy5wcm9jZXNzTmV3Tm90aWZpY2F0aW9uc0Zyb21SZXNwb25zZShyZXNwb25zZSkpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cblxuXG5cbiAgICBwaW5VbnBpbk5vdGlmaWNhdGlvbihub3RpZmljYXRpb25Pck5vdGlmaWNhdGlvbklkOiBudW1iZXIgfCBOb3RpZmljYXRpb24sIGlzUGlubmVkPzogYm9vbGVhbik6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBub3RpZmljYXRpb25Pck5vdGlmaWNhdGlvbklkID09PSAnbnVtYmVyJyB8fCBub3RpZmljYXRpb25Pck5vdGlmaWNhdGlvbklkIGluc3RhbmNlb2YgTnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb25FbmRwb2ludC5nZXRQaW5VbnBpbk5vdGlmaWNhdGlvbkVuZHBvaW50KG5vdGlmaWNhdGlvbk9yTm90aWZpY2F0aW9uSWQgYXMgbnVtYmVyLCBpc1Bpbm5lZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5waW5VbnBpbk5vdGlmaWNhdGlvbihub3RpZmljYXRpb25Pck5vdGlmaWNhdGlvbklkLmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVhZFVucmVhZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb25JZHM6IG51bWJlcltdLCBpc1JlYWQ6IGJvb2xlYW4pOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbkVuZHBvaW50LmdldFJlYWRVbnJlYWROb3RpZmljYXRpb25FbmRwb2ludChub3RpZmljYXRpb25JZHMsIGlzUmVhZCk7XG4gICAgfVxuXG5cblxuXG4gICAgZGVsZXRlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk9yTm90aWZpY2F0aW9uSWQ6IG51bWJlciB8IE5vdGlmaWNhdGlvbik6IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uPiB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBub3RpZmljYXRpb25Pck5vdGlmaWNhdGlvbklkID09PSAnbnVtYmVyJyB8fCBub3RpZmljYXRpb25Pck5vdGlmaWNhdGlvbklkIGluc3RhbmNlb2YgTnVtYmVyKSB7IC8vIFRvZG86IFRlc3QgbWUgaWYgaXRzIGNoZWNrIGlzIHZhbGlkXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb25FbmRwb2ludC5nZXREZWxldGVOb3RpZmljYXRpb25FbmRwb2ludChub3RpZmljYXRpb25Pck5vdGlmaWNhdGlvbklkIGFzIG51bWJlcikucGlwZShcbiAgICAgICAgICAgICAgICBtYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2VudE5vdGlmaWNhdGlvbnMgPSB0aGlzLnJlY2VudE5vdGlmaWNhdGlvbnMuZmlsdGVyKG4gPT4gbi5pZCAhPSBub3RpZmljYXRpb25Pck5vdGlmaWNhdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE5vdGlmaWNhdGlvbi5DcmVhdGUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb25Pck5vdGlmaWNhdGlvbklkLmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuICAgIHByaXZhdGUgcHJvY2Vzc05ld05vdGlmaWNhdGlvbnNGcm9tUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9ucyA9IHRoaXMuZ2V0Tm90aWZpY2F0aW9uc0Zyb21SZXNwb25zZShyZXNwb25zZSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBuIG9mIG5vdGlmaWNhdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChuLmRhdGUgPiB0aGlzLmxhc3ROb3RpZmljYXRpb25EYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0Tm90aWZpY2F0aW9uRGF0ZSA9IG4uZGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub3RpZmljYXRpb25zO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBnZXROb3RpZmljYXRpb25zRnJvbVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbltdID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCBpIGluIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBub3RpZmljYXRpb25zW2ldID0gTm90aWZpY2F0aW9uLkNyZWF0ZShyZXNwb25zZVtpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBub3RpZmljYXRpb25zLnNvcnQoKGEsIGIpID0+IGIuZGF0ZS52YWx1ZU9mKCkgLSBhLmRhdGUudmFsdWVPZigpKTtcbiAgICAgICAgbm90aWZpY2F0aW9ucy5zb3J0KChhLCBiKSA9PiAoYS5pc1Bpbm5lZCA9PT0gYi5pc1Bpbm5lZCkgPyAwIDogYS5pc1Bpbm5lZCA/IC0xIDogMSk7XG5cbiAgICAgICAgdGhpcy5yZWNlbnROb3RpZmljYXRpb25zID0gbm90aWZpY2F0aW9ucztcblxuICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9ucztcbiAgICB9XG59XG4iXX0=