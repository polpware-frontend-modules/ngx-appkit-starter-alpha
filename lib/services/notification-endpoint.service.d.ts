import { Observable } from 'rxjs';
export declare class NotificationEndpoint {
    private demoNotifications;
    getNotificationEndpoint<T>(notificationId: number): Observable<T>;
    getNotificationsEndpoint<T>(page: number, pageSize: number): Observable<T>;
    getUnreadNotificationsEndpoint<T>(userId?: string): Observable<T>;
    getNewNotificationsEndpoint<T>(lastNotificationDate?: Date): Observable<T>;
    getPinUnpinNotificationEndpoint<T>(notificationId: number, isPinned?: boolean): Observable<T>;
    getReadUnreadNotificationEndpoint<T>(notificationIds: number[], isRead: boolean): Observable<T>;
    getDeleteNotificationEndpoint<T>(notificationId: number): Observable<T>;
    private createResponse;
}
