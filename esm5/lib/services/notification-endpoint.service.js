import { __values } from "tslib";
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
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
    NotificationEndpoint.prototype.getNotificationEndpoint = function (notificationId) {
        var notification = this.demoNotifications.find(function (val) { return val.id == notificationId; });
        var response;
        if (notification) {
            response = this.createResponse(notification, 200);
        }
        else {
            response = this.createResponse(null, 404);
        }
        return of(response.body);
    };
    NotificationEndpoint.prototype.getNotificationsEndpoint = function (page, pageSize) {
        var notifications = this.demoNotifications;
        var response = this.createResponse(this.demoNotifications, 200);
        return of(response.body);
    };
    NotificationEndpoint.prototype.getUnreadNotificationsEndpoint = function (userId) {
        var unreadNotifications = this.demoNotifications.filter(function (val) { return !val.isRead; });
        var response = this.createResponse(unreadNotifications, 200);
        return of(response.body);
    };
    NotificationEndpoint.prototype.getNewNotificationsEndpoint = function (lastNotificationDate) {
        var unreadNotifications = this.demoNotifications;
        var response = this.createResponse(unreadNotifications, 200);
        return of(response.body);
    };
    NotificationEndpoint.prototype.getPinUnpinNotificationEndpoint = function (notificationId, isPinned) {
        var notification = this.demoNotifications.find(function (val) { return val.id == notificationId; });
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
    NotificationEndpoint.prototype.getReadUnreadNotificationEndpoint = function (notificationIds, isRead) {
        var e_1, _a;
        var _loop_1 = function (notificationId) {
            var notification = this_1.demoNotifications.find(function (val) { return val.id == notificationId; });
            if (notification) {
                notification.isRead = isRead;
            }
        };
        var this_1 = this;
        try {
            for (var notificationIds_1 = __values(notificationIds), notificationIds_1_1 = notificationIds_1.next(); !notificationIds_1_1.done; notificationIds_1_1 = notificationIds_1.next()) {
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
        var response = this.createResponse(null, 204);
        return of(response.body);
    };
    NotificationEndpoint.prototype.getDeleteNotificationEndpoint = function (notificationId) {
        var notification = this.demoNotifications.find(function (val) { return val.id == notificationId; });
        var response;
        if (notification) {
            this.demoNotifications = this.demoNotifications.filter(function (val) { return val.id != notificationId; });
            response = this.createResponse(notification, 200);
        }
        else {
            response = this.createResponse(null, 404);
        }
        return of(response.body);
    };
    NotificationEndpoint.prototype.createResponse = function (body, status) {
        return new HttpResponse({ body: body, status: status });
    };
    /** @nocollapse */ NotificationEndpoint.ɵfac = function NotificationEndpoint_Factory(t) { return new (t || NotificationEndpoint)(); };
    /** @nocollapse */ NotificationEndpoint.ɵprov = i0.ɵɵdefineInjectable({ token: NotificationEndpoint, factory: NotificationEndpoint.ɵfac });
    return NotificationEndpoint;
}());
export { NotificationEndpoint };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NotificationEndpoint, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWVuZHBvaW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL25vdGlmaWNhdGlvbi1lbmRwb2ludC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQixnQ0FBZ0M7QUFFaEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLdEM7SUFBQTtRQUdZLHNCQUFpQixHQUFHO1lBQ3hCO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsTUFBTSxFQUFFLElBQUk7Z0JBQ1osUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLDZCQUE2QjthQUN0QztTQUNKLENBQUM7S0ErR0w7SUEzR0csc0RBQXVCLEdBQXZCLFVBQTJCLGNBQXNCO1FBRTdDLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsRUFBRSxJQUFJLGNBQWMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1FBQ2xGLElBQUksUUFBeUIsQ0FBQztRQUU5QixJQUFJLFlBQVksRUFBRTtZQUNkLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFJLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN4RDthQUFNO1lBQ0gsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUksSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsT0FBTyxF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SUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEVBQUUsSUFBSSxjQUFjLEVBQXhCLENBQXdCLENBQUMsQ0FBQztRQUNsRixJQUFJLFFBQXlCLENBQUM7UUFFOUIsSUFBSSxZQUFZLEVBQUU7WUFDZCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxFQUFFLElBQUksY0FBYyxFQUF4QixDQUF3QixDQUFDLENBQUM7WUFDeEYsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUksWUFBWSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3hEO2FBQU07WUFDSCxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBSSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUlPLDZDQUFjLEdBQXRCLFVBQTBCLElBQUksRUFBRSxNQUFjO1FBQzFDLE9BQU8sSUFBSSxZQUFZLENBQUksRUFBRSxJQUFJLE1BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQzsrR0F6SFEsb0JBQW9CO21GQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9COytCQWJqQztDQXVJQyxBQTNIRCxJQTJIQztTQTFIWSxvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQURoQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEVtYWlsOiBpbmZvQGViZW5tb25uZXkuY29tXG4vLyB3d3cuZWJlbm1vbm5leS5jb20vdGVtcGxhdGVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uRW5kcG9pbnQge1xuXG4gICAgcHJpdmF0ZSBkZW1vTm90aWZpY2F0aW9ucyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBoZWFkZXI6ICdXZWxjb21lJyxcbiAgICAgICAgICAgIGJvZHk6ICdZb3UgYXJlIC4uLicsXG4gICAgICAgICAgICBpc1JlYWQ6IHRydWUsXG4gICAgICAgICAgICBpc1Bpbm5lZDogdHJ1ZSxcbiAgICAgICAgICAgIGRhdGU6ICcyMDE5LTA1LTI4VDE2OjI5OjEzLjU4Nzc5NTgnXG4gICAgICAgIH1cbiAgICBdO1xuXG5cblxuICAgIGdldE5vdGlmaWNhdGlvbkVuZHBvaW50PFQ+KG5vdGlmaWNhdGlvbklkOiBudW1iZXIpOiBPYnNlcnZhYmxlPFQ+IHtcblxuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSB0aGlzLmRlbW9Ob3RpZmljYXRpb25zLmZpbmQodmFsID0+IHZhbC5pZCA9PSBub3RpZmljYXRpb25JZCk7XG4gICAgICAgIGxldCByZXNwb25zZTogSHR0cFJlc3BvbnNlPFQ+O1xuXG4gICAgICAgIGlmIChub3RpZmljYXRpb24pIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5jcmVhdGVSZXNwb25zZTxUPihub3RpZmljYXRpb24sIDIwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuY3JlYXRlUmVzcG9uc2U8VD4obnVsbCwgNDA0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvZihyZXNwb25zZS5ib2R5KTtcbiAgICB9XG5cblxuXG4gICAgZ2V0Tm90aWZpY2F0aW9uc0VuZHBvaW50PFQ+KHBhZ2U6IG51bWJlciwgcGFnZVNpemU6IG51bWJlcik6IE9ic2VydmFibGU8VD4ge1xuXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbnMgPSB0aGlzLmRlbW9Ob3RpZmljYXRpb25zO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMuY3JlYXRlUmVzcG9uc2U8VD4odGhpcy5kZW1vTm90aWZpY2F0aW9ucywgMjAwKTtcblxuICAgICAgICByZXR1cm4gb2YocmVzcG9uc2UuYm9keSk7XG4gICAgfVxuXG5cblxuICAgIGdldFVucmVhZE5vdGlmaWNhdGlvbnNFbmRwb2ludDxUPih1c2VySWQ/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcblxuICAgICAgICBjb25zdCB1bnJlYWROb3RpZmljYXRpb25zID0gdGhpcy5kZW1vTm90aWZpY2F0aW9ucy5maWx0ZXIodmFsID0+ICF2YWwuaXNSZWFkKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLmNyZWF0ZVJlc3BvbnNlPFQ+KHVucmVhZE5vdGlmaWNhdGlvbnMsIDIwMCk7XG5cbiAgICAgICAgcmV0dXJuIG9mKHJlc3BvbnNlLmJvZHkpO1xuICAgIH1cblxuXG5cbiAgICBnZXROZXdOb3RpZmljYXRpb25zRW5kcG9pbnQ8VD4obGFzdE5vdGlmaWNhdGlvbkRhdGU/OiBEYXRlKTogT2JzZXJ2YWJsZTxUPiB7XG5cbiAgICAgICAgY29uc3QgdW5yZWFkTm90aWZpY2F0aW9ucyA9IHRoaXMuZGVtb05vdGlmaWNhdGlvbnM7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy5jcmVhdGVSZXNwb25zZTxUPih1bnJlYWROb3RpZmljYXRpb25zLCAyMDApO1xuXG4gICAgICAgIHJldHVybiBvZihyZXNwb25zZS5ib2R5KTtcbiAgICB9XG5cblxuXG4gICAgZ2V0UGluVW5waW5Ob3RpZmljYXRpb25FbmRwb2ludDxUPihub3RpZmljYXRpb25JZDogbnVtYmVyLCBpc1Bpbm5lZD86IGJvb2xlYW4sICk6IE9ic2VydmFibGU8VD4ge1xuXG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbiA9IHRoaXMuZGVtb05vdGlmaWNhdGlvbnMuZmluZCh2YWwgPT4gdmFsLmlkID09IG5vdGlmaWNhdGlvbklkKTtcbiAgICAgICAgbGV0IHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8VD47XG5cbiAgICAgICAgaWYgKG5vdGlmaWNhdGlvbikge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLmNyZWF0ZVJlc3BvbnNlPFQ+KG51bGwsIDIwNCk7XG5cbiAgICAgICAgICAgIGlmIChpc1Bpbm5lZCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaXNQaW5uZWQgPSAhbm90aWZpY2F0aW9uLmlzUGlubmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub3RpZmljYXRpb24uaXNQaW5uZWQgPSBpc1Bpbm5lZDtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbi5pc1JlYWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSB0aGlzLmNyZWF0ZVJlc3BvbnNlPFQ+KG51bGwsIDQwNCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiBvZihyZXNwb25zZS5ib2R5KTtcbiAgICB9XG5cblxuXG4gICAgZ2V0UmVhZFVucmVhZE5vdGlmaWNhdGlvbkVuZHBvaW50PFQ+KG5vdGlmaWNhdGlvbklkczogbnVtYmVyW10sIGlzUmVhZDogYm9vbGVhbiwgKTogT2JzZXJ2YWJsZTxUPiB7XG5cbiAgICAgICAgZm9yIChjb25zdCBub3RpZmljYXRpb25JZCBvZiBub3RpZmljYXRpb25JZHMpIHtcblxuICAgICAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9uID0gdGhpcy5kZW1vTm90aWZpY2F0aW9ucy5maW5kKHZhbCA9PiB2YWwuaWQgPT0gbm90aWZpY2F0aW9uSWQpO1xuXG4gICAgICAgICAgICBpZiAobm90aWZpY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLmlzUmVhZCA9IGlzUmVhZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy5jcmVhdGVSZXNwb25zZTxUPihudWxsLCAyMDQpO1xuICAgICAgICByZXR1cm4gb2YocmVzcG9uc2UuYm9keSk7XG4gICAgfVxuXG5cblxuICAgIGdldERlbGV0ZU5vdGlmaWNhdGlvbkVuZHBvaW50PFQ+KG5vdGlmaWNhdGlvbklkOiBudW1iZXIpOiBPYnNlcnZhYmxlPFQ+IHtcblxuICAgICAgICBjb25zdCBub3RpZmljYXRpb24gPSB0aGlzLmRlbW9Ob3RpZmljYXRpb25zLmZpbmQodmFsID0+IHZhbC5pZCA9PSBub3RpZmljYXRpb25JZCk7XG4gICAgICAgIGxldCByZXNwb25zZTogSHR0cFJlc3BvbnNlPFQ+O1xuXG4gICAgICAgIGlmIChub3RpZmljYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZGVtb05vdGlmaWNhdGlvbnMgPSB0aGlzLmRlbW9Ob3RpZmljYXRpb25zLmZpbHRlcih2YWwgPT4gdmFsLmlkICE9IG5vdGlmaWNhdGlvbklkKTtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gdGhpcy5jcmVhdGVSZXNwb25zZTxUPihub3RpZmljYXRpb24sIDIwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHRoaXMuY3JlYXRlUmVzcG9uc2U8VD4obnVsbCwgNDA0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvZihyZXNwb25zZS5ib2R5KTtcbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXNwb25zZTxUPihib2R5LCBzdGF0dXM6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gbmV3IEh0dHBSZXNwb25zZTxUPih7IGJvZHksIHN0YXR1cyB9KTtcbiAgICB9XG59XG4iXX0=