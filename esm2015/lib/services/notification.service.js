/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/notification.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class NotificationService {
    /**
     * @param {?} notificationEndpoint
     * @param {?} authService
     */
    constructor(notificationEndpoint, authService) {
        this.notificationEndpoint = notificationEndpoint;
        this.authService = authService;
    }
    /**
     * @return {?}
     */
    get currentUser() {
        return this.authService.currentUser;
    }
    /**
     * @return {?}
     */
    get recentNotifications() {
        return this._recentNotifications;
    }
    /**
     * @param {?} notifications
     * @return {?}
     */
    set recentNotifications(notifications) {
        this._recentNotifications = notifications;
    }
    /**
     * @param {?=} notificationId
     * @return {?}
     */
    getNotification(notificationId) {
        return this.notificationEndpoint.getNotificationEndpoint(notificationId).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => Notification.Create(response))));
    }
    /**
     * @param {?} page
     * @param {?} pageSize
     * @return {?}
     */
    getNotifications(page, pageSize) {
        return this.notificationEndpoint.getNotificationsEndpoint(page, pageSize).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            return this.getNotificationsFromResponse(response);
        })));
    }
    /**
     * @param {?=} userId
     * @return {?}
     */
    getUnreadNotifications(userId) {
        return this.notificationEndpoint.getUnreadNotificationsEndpoint(userId).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => this.getNotificationsFromResponse(response))));
    }
    /**
     * @return {?}
     */
    getNewNotifications() {
        return this.notificationEndpoint.getNewNotificationsEndpoint(this.lastNotificationDate).pipe(map((/**
         * @param {?} response
         * @return {?}
         */
        response => this.processNewNotificationsFromResponse(response))));
    }
    /**
     * @return {?}
     */
    getNewNotificationsPeriodically() {
        return interval(10000).pipe(startWith(0), flatMap((/**
         * @return {?}
         */
        () => {
            return this.notificationEndpoint.getNewNotificationsEndpoint(this.lastNotificationDate).pipe(map((/**
             * @param {?} response
             * @return {?}
             */
            response => this.processNewNotificationsFromResponse(response))));
        })));
    }
    /**
     * @param {?} notificationOrNotificationId
     * @param {?=} isPinned
     * @return {?}
     */
    pinUnpinNotification(notificationOrNotificationId, isPinned) {
        if (typeof notificationOrNotificationId === 'number' || notificationOrNotificationId instanceof Number) {
            return this.notificationEndpoint.getPinUnpinNotificationEndpoint((/** @type {?} */ (notificationOrNotificationId)), isPinned);
        }
        else {
            return this.pinUnpinNotification(notificationOrNotificationId.id);
        }
    }
    /**
     * @param {?} notificationIds
     * @param {?} isRead
     * @return {?}
     */
    readUnreadNotification(notificationIds, isRead) {
        return this.notificationEndpoint.getReadUnreadNotificationEndpoint(notificationIds, isRead);
    }
    /**
     * @param {?} notificationOrNotificationId
     * @return {?}
     */
    deleteNotification(notificationOrNotificationId) {
        if (typeof notificationOrNotificationId === 'number' || notificationOrNotificationId instanceof Number) { // Todo: Test me if its check is valid
            return this.notificationEndpoint.getDeleteNotificationEndpoint((/** @type {?} */ (notificationOrNotificationId))).pipe(map((/**
             * @param {?} response
             * @return {?}
             */
            response => {
                this.recentNotifications = this.recentNotifications.filter((/**
                 * @param {?} n
                 * @return {?}
                 */
                n => n.id != notificationOrNotificationId));
                return Notification.Create(response);
            })));
        }
        else {
            return this.deleteNotification(notificationOrNotificationId.id);
        }
    }
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    processNewNotificationsFromResponse(response) {
        /** @type {?} */
        const notifications = this.getNotificationsFromResponse(response);
        for (const n of notifications) {
            if (n.date > this.lastNotificationDate) {
                this.lastNotificationDate = n.date;
            }
        }
        return notifications;
    }
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    getNotificationsFromResponse(response) {
        /** @type {?} */
        const notifications = [];
        for (const i in response) {
            notifications[i] = Notification.Create(response[i]);
        }
        notifications.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => b.date.valueOf() - a.date.valueOf()));
        notifications.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => (a.isPinned === b.isPinned) ? 0 : a.isPinned ? -1 : 1));
        this.recentNotifications = notifications;
        return notifications;
    }
}
NotificationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NotificationService.ctorParameters = () => [
    { type: NotificationEndpoint },
    { type: AuthService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUtBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFRLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRzVELE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBbUI1QixZQUFvQixvQkFBMEMsRUFBVSxXQUF3QjtRQUE1RSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFFaEcsQ0FBQzs7OztJQWhCRCxJQUFJLFdBQVc7UUFDWCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxJQUFJLG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELElBQUksbUJBQW1CLENBQUMsYUFBNkI7UUFDakQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGFBQWEsQ0FBQztJQUM5QyxDQUFDOzs7OztJQVNELGVBQWUsQ0FBQyxjQUF1QjtRQUVuQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyx1QkFBdUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQ3pFLEdB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UUFFekMsT0FBTyxhQUFhLENBQUM7SUFDekIsQ0FBQzs7O1lBOUhKLFVBQVU7Ozs7WUFIRixvQkFBb0I7WUFEcEIsV0FBVzs7Ozs7OztJQU9oQixtREFBbUM7Ozs7O0lBQ25DLG1EQUE2Qzs7Ozs7SUFnQmpDLG1EQUFrRDs7Ozs7SUFBRSwwQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGludGVydmFsIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGZsYXRNYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIFVzZXIgfSBmcm9tICdAcG9scHdhcmUvbmd4LW9hdXRoMic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25FbmRwb2ludCB9IGZyb20gJy4vbm90aWZpY2F0aW9uLWVuZHBvaW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL25vdGlmaWNhdGlvbi5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25TZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgbGFzdE5vdGlmaWNhdGlvbkRhdGU6IERhdGU7XG4gICAgcHJpdmF0ZSBfcmVjZW50Tm90aWZpY2F0aW9uczogTm90aWZpY2F0aW9uW107XG5cbiAgICBnZXQgY3VycmVudFVzZXIoKTogVXNlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmN1cnJlbnRVc2VyO1xuICAgIH1cblxuICAgIGdldCByZWNlbnROb3RpZmljYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVjZW50Tm90aWZpY2F0aW9ucztcbiAgICB9XG5cbiAgICBzZXQgcmVjZW50Tm90aWZpY2F0aW9ucyhub3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25bXSkge1xuICAgICAgICB0aGlzLl9yZWNlbnROb3RpZmljYXRpb25zID0gbm90aWZpY2F0aW9ucztcbiAgICB9XG5cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb25FbmRwb2ludDogTm90aWZpY2F0aW9uRW5kcG9pbnQsIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XG5cbiAgICB9XG5cblxuICAgIGdldE5vdGlmaWNhdGlvbihub3RpZmljYXRpb25JZD86IG51bWJlcikge1xuXG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbkVuZHBvaW50LmdldE5vdGlmaWNhdGlvbkVuZHBvaW50KG5vdGlmaWNhdGlvbklkKS5waXBlKFxuICAgICAgICAgICAgbWFwKHJlc3BvbnNlID0+IE5vdGlmaWNhdGlvbi5DcmVhdGUocmVzcG9uc2UpKSk7XG4gICAgfVxuXG5cbiAgICBnZXROb3RpZmljYXRpb25zKHBhZ2U6IG51bWJlciwgcGFnZVNpemU6IG51bWJlcikge1xuXG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbkVuZHBvaW50LmdldE5vdGlmaWNhdGlvbnNFbmRwb2ludChwYWdlLCBwYWdlU2l6ZSkucGlwZShcbiAgICAgICAgICAgIG1hcChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Tm90aWZpY2F0aW9uc0Zyb21SZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgfVxuXG5cbiAgICBnZXRVbnJlYWROb3RpZmljYXRpb25zKHVzZXJJZD86IHN0cmluZykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbkVuZHBvaW50LmdldFVucmVhZE5vdGlmaWNhdGlvbnNFbmRwb2ludCh1c2VySWQpLnBpcGUoXG4gICAgICAgICAgICBtYXAocmVzcG9uc2UgPT4gdGhpcy5nZXROb3RpZmljYXRpb25zRnJvbVJlc3BvbnNlKHJlc3BvbnNlKSkpO1xuICAgIH1cblxuXG4gICAgZ2V0TmV3Tm90aWZpY2F0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZpY2F0aW9uRW5kcG9pbnQuZ2V0TmV3Tm90aWZpY2F0aW9uc0VuZHBvaW50KHRoaXMubGFzdE5vdGlmaWNhdGlvbkRhdGUpLnBpcGUoXG4gICAgICAgICAgICBtYXAocmVzcG9uc2UgPT4gdGhpcy5wcm9jZXNzTmV3Tm90aWZpY2F0aW9uc0Zyb21SZXNwb25zZShyZXNwb25zZSkpKTtcbiAgICB9XG5cblxuICAgIGdldE5ld05vdGlmaWNhdGlvbnNQZXJpb2RpY2FsbHkoKSB7XG4gICAgICAgIHJldHVybiBpbnRlcnZhbCgxMDAwMCkucGlwZShcbiAgICAgICAgICAgIHN0YXJ0V2l0aCgwKSxcbiAgICAgICAgICAgIGZsYXRNYXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbkVuZHBvaW50LmdldE5ld05vdGlmaWNhdGlvbnNFbmRwb2ludCh0aGlzLmxhc3ROb3RpZmljYXRpb25EYXRlKS5waXBlKFxuICAgICAgICAgICAgICAgICAgICBtYXAocmVzcG9uc2UgPT4gdGhpcy5wcm9jZXNzTmV3Tm90aWZpY2F0aW9uc0Zyb21SZXNwb25zZShyZXNwb25zZSkpKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICB9XG5cblxuXG5cbiAgICBwaW5VbnBpbk5vdGlmaWNhdGlvbihub3RpZmljYXRpb25Pck5vdGlmaWNhdGlvbklkOiBudW1iZXIgfCBOb3RpZmljYXRpb24sIGlzUGlubmVkPzogYm9vbGVhbik6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBub3RpZmljYXRpb25Pck5vdGlmaWNhdGlvbklkID09PSAnbnVtYmVyJyB8fCBub3RpZmljYXRpb25Pck5vdGlmaWNhdGlvbklkIGluc3RhbmNlb2YgTnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb25FbmRwb2ludC5nZXRQaW5VbnBpbk5vdGlmaWNhdGlvbkVuZHBvaW50KG5vdGlmaWNhdGlvbk9yTm90aWZpY2F0aW9uSWQgYXMgbnVtYmVyLCBpc1Bpbm5lZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5waW5VbnBpbk5vdGlmaWNhdGlvbihub3RpZmljYXRpb25Pck5vdGlmaWNhdGlvbklkLmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVhZFVucmVhZE5vdGlmaWNhdGlvbihub3RpZmljYXRpb25JZHM6IG51bWJlcltdLCBpc1JlYWQ6IGJvb2xlYW4pOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbkVuZHBvaW50LmdldFJlYWRVbnJlYWROb3RpZmljYXRpb25FbmRwb2ludChub3RpZmljYXRpb25JZHMsIGlzUmVhZCk7XG4gICAgfVxuXG5cblxuXG4gICAgZGVsZXRlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk9yTm90aWZpY2F0aW9uSWQ6IG51bWJlciB8IE5vdGlmaWNhdGlvbik6IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uPiB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBub3RpZmljYXRpb25Pck5vdGlmaWNhdGlvbklkID09PSAnbnVtYmVyJyB8fCBub3RpZmljYXRpb25Pck5vdGlmaWNhdGlvbklkIGluc3RhbmNlb2YgTnVtYmVyKSB7IC8vIFRvZG86IFRlc3QgbWUgaWYgaXRzIGNoZWNrIGlzIHZhbGlkXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb25FbmRwb2ludC5nZXREZWxldGVOb3RpZmljYXRpb25FbmRwb2ludChub3RpZmljYXRpb25Pck5vdGlmaWNhdGlvbklkIGFzIG51bWJlcikucGlwZShcbiAgICAgICAgICAgICAgICBtYXAocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2VudE5vdGlmaWNhdGlvbnMgPSB0aGlzLnJlY2VudE5vdGlmaWNhdGlvbnMuZmlsdGVyKG4gPT4gbi5pZCAhPSBub3RpZmljYXRpb25Pck5vdGlmaWNhdGlvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE5vdGlmaWNhdGlvbi5DcmVhdGUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb25Pck5vdGlmaWNhdGlvbklkLmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cblxuICAgIHByaXZhdGUgcHJvY2Vzc05ld05vdGlmaWNhdGlvbnNGcm9tUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3Qgbm90aWZpY2F0aW9ucyA9IHRoaXMuZ2V0Tm90aWZpY2F0aW9uc0Zyb21SZXNwb25zZShyZXNwb25zZSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBuIG9mIG5vdGlmaWNhdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChuLmRhdGUgPiB0aGlzLmxhc3ROb3RpZmljYXRpb25EYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0Tm90aWZpY2F0aW9uRGF0ZSA9IG4uZGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub3RpZmljYXRpb25zO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBnZXROb3RpZmljYXRpb25zRnJvbVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbltdID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCBpIGluIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBub3RpZmljYXRpb25zW2ldID0gTm90aWZpY2F0aW9uLkNyZWF0ZShyZXNwb25zZVtpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBub3RpZmljYXRpb25zLnNvcnQoKGEsIGIpID0+IGIuZGF0ZS52YWx1ZU9mKCkgLSBhLmRhdGUudmFsdWVPZigpKTtcbiAgICAgICAgbm90aWZpY2F0aW9ucy5zb3J0KChhLCBiKSA9PiAoYS5pc1Bpbm5lZCA9PT0gYi5pc1Bpbm5lZCkgPyAwIDogYS5pc1Bpbm5lZCA/IC0xIDogMSk7XG5cbiAgICAgICAgdGhpcy5yZWNlbnROb3RpZmljYXRpb25zID0gbm90aWZpY2F0aW9ucztcblxuICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9ucztcbiAgICB9XG59XG4iXX0=