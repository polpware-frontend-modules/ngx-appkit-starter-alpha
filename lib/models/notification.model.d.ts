export declare class Notification {
    id: number;
    header: string;
    body: string;
    isRead: boolean;
    isPinned: boolean;
    date: Date;
    static Create(data: {}): Notification;
}
