/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/notifications-viewer/notifications-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, TemplateRef, ViewChild, Input } from '@angular/core';
import { DialogType, MessageSeverity, Utilities } from '@polpware/ngx-appkit-contracts-alpha';
import { AlertService, AppTranslationService } from '@polpware/ngx-appkit-services-alpha';
import { Permission } from '@polpware/ngx-oauth2';
import { NotificationService } from '../../services/notification.service';
import { AccountService } from '../../services/account.service';
export class NotificationsViewerComponent {
    /**
     * @param {?} alertService
     * @param {?} translationService
     * @param {?} accountService
     * @param {?} notificationService
     */
    constructor(alertService, translationService, accountService, notificationService) {
        this.alertService = alertService;
        this.translationService = translationService;
        this.accountService = accountService;
        this.notificationService = notificationService;
        this.columns = [];
        this.rows = [];
        this.dataLoadingConsecutiveFailurs = 0;
        this.verticalScrollbar = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isViewOnly) {
            this.columns = [
                { prop: 'date', cellTemplate: this.dateTemplate, width: 100, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
                { prop: 'header', cellTemplate: this.contentHeaderTemplate, width: 200, resizeable: false, sortable: false, draggable: false },
            ];
        }
        else {
            /** @type {?} */
            const gT = (/**
             * @param {?} key
             * @return {?}
             */
            (key) => this.translationService.getTranslation(key));
            this.columns = [
                { prop: '', name: '', width: 10, headerTemplate: this.statusHeaderTemplate, cellTemplate: this.statusTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
                { prop: 'date', name: gT('notifications.Date'), cellTemplate: this.dateTemplate, width: 30 },
                { prop: 'body', name: gT('notifications.Notification'), cellTemplate: this.contenBodytTemplate, width: 500 },
                { name: '', width: 80, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
            ];
        }
        this.initDataLoading();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.dataLoadingSubscription) {
            this.dataLoadingSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    initDataLoading() {
        if (this.isViewOnly && this.notificationService.recentNotifications) {
            this.rows = this.processResults(this.notificationService.recentNotifications);
            return;
        }
        this.loadingIndicator = true;
        /** @type {?} */
        const dataLoadTask = this.isViewOnly ? this.notificationService.getNewNotifications() : this.notificationService.getNewNotificationsPeriodically();
        this.dataLoadingSubscription = dataLoadTask
            .subscribe((/**
         * @param {?} notifications
         * @return {?}
         */
        notifications => {
            this.loadingIndicator = false;
            this.dataLoadingConsecutiveFailurs = 0;
            this.rows = this.processResults(notifications);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.loadingIndicator = false;
            this.alertService.showMessage('Load Error', 'Loading new notifications from the server failed!', MessageSeverity.warn);
            this.alertService.logError(error);
            if (this.dataLoadingConsecutiveFailurs++ < 5) {
                setTimeout((/**
                 * @return {?}
                 */
                () => this.initDataLoading()), 5000);
            }
            else {
                this.alertService.showStickyMessage('Load Error', 'Loading new notifications from the server failed!', MessageSeverity.error);
            }
        }));
        if (this.isViewOnly) {
            this.dataLoadingSubscription = null;
        }
    }
    /**
     * @private
     * @param {?} notifications
     * @return {?}
     */
    processResults(notifications) {
        if (this.isViewOnly) {
            notifications.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                return b.date.valueOf() - a.date.valueOf();
            }));
        }
        return notifications;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getPrintedDate(value) {
        if (value) {
            return Utilities.printTimeOnly(value) + ' on ' + Utilities.printDateOnly(value);
        }
    }
    /**
     * @param {?} row
     * @return {?}
     */
    deleteNotification(row) {
        this.alertService.showDialog('Are you sure you want to delete the notification \"' + row.header + '\"?', DialogType.confirm, (/**
         * @return {?}
         */
        () => this.deleteNotificationHelper(row)));
    }
    /**
     * @param {?} row
     * @return {?}
     */
    deleteNotificationHelper(row) {
        this.alertService.startLoadingMessage('Deleting...');
        this.loadingIndicator = true;
        this.notificationService.deleteNotification(row)
            .subscribe((/**
         * @param {?} results
         * @return {?}
         */
        results => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.rows = this.rows.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => item.id != row.id));
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.alertService.showStickyMessage('Delete Error', `An error occured whilst deleting the notification.\r\nError: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        }));
    }
    /**
     * @param {?} row
     * @return {?}
     */
    togglePin(row) {
        /** @type {?} */
        const pin = !row.isPinned;
        /** @type {?} */
        const opText = pin ? 'Pinning' : 'Unpinning';
        this.alertService.startLoadingMessage(opText + '...');
        this.loadingIndicator = true;
        this.notificationService.pinUnpinNotification(row, pin)
            .subscribe((/**
         * @param {?} results
         * @return {?}
         */
        results => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            row.isPinned = pin;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.alertService.showStickyMessage(opText + ' Error', `An error occured whilst ${opText} the notification.\r\nError: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        }));
    }
    /**
     * @return {?}
     */
    get canManageNotifications() {
        return this.accountService.userHasPermission(Permission.manageRolesPermission); // Todo: Consider creating separate permission for notifications
    }
}
NotificationsViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'notifications-viewer',
                template: "<div>\n    <ngx-datatable class=\"material colored-header sm table-hover\"\n                   [loadingIndicator]=\"loadingIndicator\"\n                   [rows]=\"rows\"\n                   [rowHeight]=\"35\"\n                   [headerHeight]=\"isViewOnly ? 0 : 35\"\n                   [footerHeight]=\"35\"\n                   [limit]=\"10\"\n                   [columns]=\"columns\"\n                   [scrollbarV]=\"verticalScrollbar\"\n                   [columnMode]=\"'force'\">\n    </ngx-datatable>\n\n    <ng-template #statusHeaderTemplate>\n        <i class=\"fa fa-bullhorn\"></i>\n    </ng-template>\n\n    <ng-template #statusTemplate>\n        <span></span>\n    </ng-template>\n\n    <ng-template #dateTemplate let-row=\"row\" let-value=\"value\">\n        <span [class.unread]=\"!row.isRead\" attr.title=\"{{getPrintedDate(value)}}\">\n            {{getPrintedDate(value)}}\n        </span>\n    </ng-template>\n\n    <ng-template #contentHeaderTemplate let-row=\"row\" let-value=\"value\">\n        <span [class.unread]=\"!row.isRead\" attr.title=\"{{row.body}}\">\n            {{value}}\n        </span>\n    </ng-template>\n\n    <ng-template #contenBodytTemplate let-row=\"row\" let-value=\"value\">\n        <span [class.unread]=\"!row.isRead\" attr.title=\"{{row.header}}\">\n            {{value}}\n        </span>\n    </ng-template>\n\n\n    <ng-template #actionsTemplate let-row=\"row\">\n        <a class=\"btn btn-link btn-sm\" href=\"javascript:;\" tooltip=\"{{'notifications.Delete' | translate}}\" container=\"body\" (click)=\"deleteNotification(row)\"><i class=\"fa fa-times\"></i></a>\n        <a class=\"btn btn-link btn-sm\" href=\"javascript:;\" tooltip=\"{{'notifications.Pin' | translate}}\" co container=\"body\" (click)=\"togglePin(row)\">\n            <i *ngIf=\"row.isPinned\" class=\"fa fa-thumb-tack\"></i>\n            <i *ngIf=\"!row.isPinned\" class=\"fa fa-thumb-tack fa-rotate-90\"></i>\n        </a>\n    </ng-template>\n</div>",
                styles: [".unread{font-weight:700}"]
            }] }
];
/** @nocollapse */
NotificationsViewerComponent.ctorParameters = () => [
    { type: AlertService },
    { type: AppTranslationService },
    { type: AccountService },
    { type: NotificationService }
];
NotificationsViewerComponent.propDecorators = {
    isViewOnly: [{ type: Input }],
    verticalScrollbar: [{ type: Input }],
    statusHeaderTemplate: [{ type: ViewChild, args: ['statusHeaderTemplate', { static: true },] }],
    statusTemplate: [{ type: ViewChild, args: ['statusTemplate', { static: true },] }],
    dateTemplate: [{ type: ViewChild, args: ['dateTemplate', { static: true },] }],
    contentHeaderTemplate: [{ type: ViewChild, args: ['contentHeaderTemplate', { static: true },] }],
    contenBodytTemplate: [{ type: ViewChild, args: ['contenBodytTemplate', { static: true },] }],
    actionsTemplate: [{ type: ViewChild, args: ['actionsTemplate', { static: true },] }]
};
if (false) {
    /** @type {?} */
    NotificationsViewerComponent.prototype.columns;
    /** @type {?} */
    NotificationsViewerComponent.prototype.rows;
    /** @type {?} */
    NotificationsViewerComponent.prototype.loadingIndicator;
    /** @type {?} */
    NotificationsViewerComponent.prototype.dataLoadingConsecutiveFailurs;
    /** @type {?} */
    NotificationsViewerComponent.prototype.dataLoadingSubscription;
    /** @type {?} */
    NotificationsViewerComponent.prototype.isViewOnly;
    /** @type {?} */
    NotificationsViewerComponent.prototype.verticalScrollbar;
    /** @type {?} */
    NotificationsViewerComponent.prototype.statusHeaderTemplate;
    /** @type {?} */
    NotificationsViewerComponent.prototype.statusTemplate;
    /** @type {?} */
    NotificationsViewerComponent.prototype.dateTemplate;
    /** @type {?} */
    NotificationsViewerComponent.prototype.contentHeaderTemplate;
    /** @type {?} */
    NotificationsViewerComponent.prototype.contenBodytTemplate;
    /** @type {?} */
    NotificationsViewerComponent.prototype.actionsTemplate;
    /**
     * @type {?}
     * @private
     */
    NotificationsViewerComponent.prototype.alertService;
    /**
     * @type {?}
     * @private
     */
    NotificationsViewerComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    NotificationsViewerComponent.prototype.accountService;
    /**
     * @type {?}
     * @private
     */
    NotificationsViewerComponent.prototype.notificationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL25vdGlmaWNhdGlvbnMtdmlld2VyL25vdGlmaWNhdGlvbnMtdmlld2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixXQUFXLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RixPQUFPLEVBQ0gsVUFBVSxFQUFnQixlQUFlLEVBQ3pDLFNBQVMsRUFDWixNQUFNLHNDQUFzQyxDQUFDO0FBRTlDLE9BQU8sRUFDSCxZQUFZLEVBQ1oscUJBQXFCLEVBQ3hCLE1BQU0scUNBQXFDLENBQUM7QUFFN0MsT0FBTyxFQUNILFVBQVUsRUFDYixNQUFNLHNCQUFzQixDQUFDO0FBRzlCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQVNoRSxNQUFNLE9BQU8sNEJBQTRCOzs7Ozs7O0lBa0NyQyxZQUFvQixZQUEwQixFQUFVLGtCQUF5QyxFQUFVLGNBQThCLEVBQVUsbUJBQXdDO1FBQXZLLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUF1QjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFqQzNMLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFDcEIsU0FBSSxHQUFtQixFQUFFLENBQUM7UUFHMUIsa0NBQTZCLEdBQUcsQ0FBQyxDQUFDO1FBUWxDLHNCQUFpQixHQUFHLEtBQUssQ0FBQztJQXNCMUIsQ0FBQzs7OztJQUdELFFBQVE7UUFFSixJQUFJLElBQUks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QkFDUCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyx3OERBQW9EOzthQUV2RDs7OztZQWxCRyxZQUFZO1lBQ1oscUJBQXFCO1lBU2hCLGNBQWM7WUFEZCxtQkFBbUI7Ozt5QkFtQnZCLEtBQUs7Z0NBR0wsS0FBSzttQ0FJTCxTQUFTLFNBQUMsc0JBQXNCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzZCQUdsRCxTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUc1QyxTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtvQ0FHMUMsU0FBUyxTQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtrQ0FHbkQsU0FBUyxTQUFDLHFCQUFxQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs4QkFHakQsU0FBUyxTQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQTlCOUMsK0NBQW9COztJQUNwQiw0Q0FBMEI7O0lBQzFCLHdEQUEwQjs7SUFFMUIscUVBQWtDOztJQUNsQywrREFBNkI7O0lBRzdCLGtEQUNvQjs7SUFFcEIseURBQzBCOztJQUcxQiw0REFDdUM7O0lBRXZDLHNEQUNpQzs7SUFFakMsb0RBQytCOztJQUUvQiw2REFDd0M7O0lBRXhDLDJEQUNzQzs7SUFFdEMsdURBQ2tDOzs7OztJQUV0QixvREFBa0M7Ozs7O0lBQUUsMERBQWlEOzs7OztJQUFFLHNEQUFzQzs7Ozs7SUFBRSwyREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgRGlhbG9nVHlwZSwgQWxlcnRDb21tYW5kLCBNZXNzYWdlU2V2ZXJpdHksXG4gICAgVXRpbGl0aWVzXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgQWxlcnRTZXJ2aWNlLFxuICAgIEFwcFRyYW5zbGF0aW9uU2VydmljZVxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1zZXJ2aWNlcy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgUGVybWlzc2lvblxufSBmcm9tICdAcG9scHdhcmUvbmd4LW9hdXRoMic7XG5cblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWNjb3VudC5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9ub3RpZmljYXRpb24ubW9kZWwnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm90aWZpY2F0aW9ucy12aWV3ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ub3RpZmljYXRpb25zLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbm90aWZpY2F0aW9ucy12aWV3ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zVmlld2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIGNvbHVtbnM6IGFueVtdID0gW107XG4gICAgcm93czogTm90aWZpY2F0aW9uW10gPSBbXTtcbiAgICBsb2FkaW5nSW5kaWNhdG9yOiBib29sZWFuO1xuXG4gICAgZGF0YUxvYWRpbmdDb25zZWN1dGl2ZUZhaWx1cnMgPSAwO1xuICAgIGRhdGFMb2FkaW5nU3Vic2NyaXB0aW9uOiBhbnk7XG5cblxuICAgIEBJbnB1dCgpXG4gICAgaXNWaWV3T25seTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgdmVydGljYWxTY3JvbGxiYXIgPSBmYWxzZTtcblxuXG4gICAgQFZpZXdDaGlsZCgnc3RhdHVzSGVhZGVyVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHN0YXR1c0hlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnc3RhdHVzVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHN0YXR1c1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnZGF0ZVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBkYXRlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdjb250ZW50SGVhZGVyVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGNvbnRlbnRIZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbnRlbkJvZHl0VGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGNvbnRlbkJvZHl0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdhY3Rpb25zVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGFjdGlvbnNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsIHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBBcHBUcmFuc2xhdGlvblNlcnZpY2UsIHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlLCBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UpIHtcbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIGlmICh0aGlzLmlzVmlld09ubHkpIHtcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucyA9IFtcbiAgICAgICAgICAgICAgICB7IHByb3A6ICdkYXRlJywgY2VsbFRlbXBsYXRlOiB0aGlzLmRhdGVUZW1wbGF0ZSwgd2lkdGg6IDEwMCwgcmVzaXplYWJsZTogZmFsc2UsIGNhbkF1dG9SZXNpemU6IGZhbHNlLCBzb3J0YWJsZTogZmFsc2UsIGRyYWdnYWJsZTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICB7IHByb3A6ICdoZWFkZXInLCBjZWxsVGVtcGxhdGU6IHRoaXMuY29udGVudEhlYWRlclRlbXBsYXRlLCB3aWR0aDogMjAwLCByZXNpemVhYmxlOiBmYWxzZSwgc29ydGFibGU6IGZhbHNlLCBkcmFnZ2FibGU6IGZhbHNlIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZ1QgPSAoa2V5OiBzdHJpbmcpID0+IHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGtleSk7XG5cbiAgICAgICAgICAgIHRoaXMuY29sdW1ucyA9IFtcbiAgICAgICAgICAgICAgICB7IHByb3A6ICcnLCBuYW1lOiAnJywgd2lkdGg6IDEwLCBoZWFkZXJUZW1wbGF0ZTogdGhpcy5zdGF0dXNIZWFkZXJUZW1wbGF0ZSwgY2VsbFRlbXBsYXRlOiB0aGlzLnN0YXR1c1RlbXBsYXRlLCByZXNpemVhYmxlOiBmYWxzZSwgY2FuQXV0b1Jlc2l6ZTogZmFsc2UsIHNvcnRhYmxlOiBmYWxzZSwgZHJhZ2dhYmxlOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgIHsgcHJvcDogJ2RhdGUnLCBuYW1lOiBnVCgnbm90aWZpY2F0aW9ucy5EYXRlJyksIGNlbGxUZW1wbGF0ZTogdGhpcy5kYXRlVGVtcGxhdGUsIHdpZHRoOiAzMCB9LFxuICAgICAgICAgICAgICAgIHsgcHJvcDogJ2JvZHknLCBuYW1lOiBnVCgnbm90aWZpY2F0aW9ucy5Ob3RpZmljYXRpb24nKSwgY2VsbFRlbXBsYXRlOiB0aGlzLmNvbnRlbkJvZHl0VGVtcGxhdGUsIHdpZHRoOiA1MDAgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICcnLCB3aWR0aDogODAsIGNlbGxUZW1wbGF0ZTogdGhpcy5hY3Rpb25zVGVtcGxhdGUsIHJlc2l6ZWFibGU6IGZhbHNlLCBjYW5BdXRvUmVzaXplOiBmYWxzZSwgc29ydGFibGU6IGZhbHNlLCBkcmFnZ2FibGU6IGZhbHNlIH1cbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuaW5pdERhdGFMb2FkaW5nKCk7XG4gICAgfVxuXG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YUxvYWRpbmdTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YUxvYWRpbmdTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBpbml0RGF0YUxvYWRpbmcoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNWaWV3T25seSAmJiB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UucmVjZW50Tm90aWZpY2F0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5wcm9jZXNzUmVzdWx0cyh0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UucmVjZW50Tm90aWZpY2F0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGRhdGFMb2FkVGFzayA9IHRoaXMuaXNWaWV3T25seSA/IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5nZXROZXdOb3RpZmljYXRpb25zKCkgOiB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuZ2V0TmV3Tm90aWZpY2F0aW9uc1BlcmlvZGljYWxseSgpO1xuXG4gICAgICAgIHRoaXMuZGF0YUxvYWRpbmdTdWJzY3JpcHRpb24gPSBkYXRhTG9hZFRhc2tcbiAgICAgICAgICAgIC5zdWJzY3JpYmUobm90aWZpY2F0aW9ucyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhTG9hZGluZ0NvbnNlY3V0aXZlRmFpbHVycyA9IDA7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLnByb2Nlc3NSZXN1bHRzKG5vdGlmaWNhdGlvbnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdMb2FkIEVycm9yJywgJ0xvYWRpbmcgbmV3IG5vdGlmaWNhdGlvbnMgZnJvbSB0aGUgc2VydmVyIGZhaWxlZCEnLCBNZXNzYWdlU2V2ZXJpdHkud2Fybik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmxvZ0Vycm9yKGVycm9yKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhTG9hZGluZ0NvbnNlY3V0aXZlRmFpbHVycysrIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXREYXRhTG9hZGluZygpLCA1MDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdMb2FkIEVycm9yJywgJ0xvYWRpbmcgbmV3IG5vdGlmaWNhdGlvbnMgZnJvbSB0aGUgc2VydmVyIGZhaWxlZCEnLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIGlmICh0aGlzLmlzVmlld09ubHkpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YUxvYWRpbmdTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHByb2Nlc3NSZXN1bHRzKG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbltdKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNWaWV3T25seSkge1xuICAgICAgICAgICAgbm90aWZpY2F0aW9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIuZGF0ZS52YWx1ZU9mKCkgLSBhLmRhdGUudmFsdWVPZigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9ucztcbiAgICB9XG5cblxuXG4gICAgZ2V0UHJpbnRlZERhdGUodmFsdWU6IERhdGUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gVXRpbGl0aWVzLnByaW50VGltZU9ubHkodmFsdWUpICsgJyBvbiAnICsgVXRpbGl0aWVzLnByaW50RGF0ZU9ubHkodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBkZWxldGVOb3RpZmljYXRpb24ocm93OiBOb3RpZmljYXRpb24pIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd0RpYWxvZygnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgbm90aWZpY2F0aW9uIFxcXCInICsgcm93LmhlYWRlciArICdcXFwiPycsIERpYWxvZ1R5cGUuY29uZmlybSwgKCkgPT4gdGhpcy5kZWxldGVOb3RpZmljYXRpb25IZWxwZXIocm93KSk7XG4gICAgfVxuXG5cbiAgICBkZWxldGVOb3RpZmljYXRpb25IZWxwZXIocm93OiBOb3RpZmljYXRpb24pIHtcblxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCdEZWxldGluZy4uLicpO1xuICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5kZWxldGVOb3RpZmljYXRpb24ocm93KVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IHRoaXMucm93cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9IHJvdy5pZCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdEZWxldGUgRXJyb3InLCBgQW4gZXJyb3Igb2NjdXJlZCB3aGlsc3QgZGVsZXRpbmcgdGhlIG5vdGlmaWNhdGlvbi5cXHJcXG5FcnJvcjogXCIke1V0aWxpdGllcy5nZXRIdHRwUmVzcG9uc2VNZXNzYWdlcyhlcnJvcil9XCJgLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICB0b2dnbGVQaW4ocm93OiBOb3RpZmljYXRpb24pIHtcblxuICAgICAgICBjb25zdCBwaW4gPSAhcm93LmlzUGlubmVkO1xuICAgICAgICBjb25zdCBvcFRleHQgPSBwaW4gPyAnUGlubmluZycgOiAnVW5waW5uaW5nJztcblxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKG9wVGV4dCArICcuLi4nKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UucGluVW5waW5Ob3RpZmljYXRpb24ocm93LCBwaW4pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgcm93LmlzUGlubmVkID0gcGluO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZShvcFRleHQgKyAnIEVycm9yJywgYEFuIGVycm9yIG9jY3VyZWQgd2hpbHN0ICR7b3BUZXh0fSB0aGUgbm90aWZpY2F0aW9uLlxcclxcbkVycm9yOiBcIiR7VXRpbGl0aWVzLmdldEh0dHBSZXNwb25zZU1lc3NhZ2VzKGVycm9yKX1cImAsXG4gICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGdldCBjYW5NYW5hZ2VOb3RpZmljYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50U2VydmljZS51c2VySGFzUGVybWlzc2lvbihQZXJtaXNzaW9uLm1hbmFnZVJvbGVzUGVybWlzc2lvbik7IC8vIFRvZG86IENvbnNpZGVyIGNyZWF0aW5nIHNlcGFyYXRlIHBlcm1pc3Npb24gZm9yIG5vdGlmaWNhdGlvbnNcbiAgICB9XG5cbn1cbiJdfQ==