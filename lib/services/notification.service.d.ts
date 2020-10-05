import { Observable } from 'rxjs';
import { AuthService, User } from '@polpware/ngx-oauth2';
import { NotificationEndpoint } from './notification-endpoint.service';
import { Notification } from '../models/notification.model';
import * as i0 from "@angular/core";
export declare class NotificationService {
    private notificationEndpoint;
    private authService;
    private lastNotificationDate;
    private _recentNotifications;
    get currentUser(): User;
    get recentNotifications(): Notification[];
    set recentNotifications(notifications: Notification[]);
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
    static ɵfac: i0.ɵɵFactoryDef<NotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDef<NotificationService>;
}
