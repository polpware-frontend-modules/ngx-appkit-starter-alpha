import { Observable } from 'rxjs';
import { AuthService, User } from '@polpware/ngx-oauth2';
import { NotificationEndpoint } from './notification-endpoint.service';
import { Notification } from '../models/notification.model';
export declare class NotificationService {
    private notificationEndpoint;
    private authService;
    private lastNotificationDate;
    private _recentNotifications;
    readonly currentUser: User;
    recentNotifications: Notification[];
    constructor(notificationEndpoint: NotificationEndpoint, authService: AuthService);
    getNotification(notificationId?: number): Observable<Notification>;
    getNotifications(page: number, pageSize: number): Observable<Notification[]>;
    getUnreadNotifications(userId?: string): Observable<Notification[]>;
    getNewNotifications(): Observable<Notification[]>;
    getNewNotificationsPeriodically(): Observable<Notification[]>;
    pinUnpinNotification(notificationOrNotificationId: number | Notification, isPinned?: boolean): Observable<any>;
    readUnreadNotification(notificationIds: number[], isRead: boolean): Observable<any>;
    deleteNotification(notificationOrNotificationId: number | Notification): Observable<Notification>;
    private processNewNotificationsFromResponse;
    private getNotificationsFromResponse;
}
