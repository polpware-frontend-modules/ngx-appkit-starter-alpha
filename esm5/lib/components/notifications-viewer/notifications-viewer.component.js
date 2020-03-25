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
var NotificationsViewerComponent = /** @class */ (function () {
    function NotificationsViewerComponent(alertService, translationService, accountService, notificationService) {
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
    NotificationsViewerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isViewOnly) {
            this.columns = [
                { prop: 'date', cellTemplate: this.dateTemplate, width: 100, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
                { prop: 'header', cellTemplate: this.contentHeaderTemplate, width: 200, resizeable: false, sortable: false, draggable: false },
            ];
        }
        else {
            /** @type {?} */
            var gT = (/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return _this.translationService.getTranslation(key); });
            this.columns = [
                { prop: '', name: '', width: 10, headerTemplate: this.statusHeaderTemplate, cellTemplate: this.statusTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
                { prop: 'date', name: gT('notifications.Date'), cellTemplate: this.dateTemplate, width: 30 },
                { prop: 'body', name: gT('notifications.Notification'), cellTemplate: this.contenBodytTemplate, width: 500 },
                { name: '', width: 80, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
            ];
        }
        this.initDataLoading();
    };
    /**
     * @return {?}
     */
    NotificationsViewerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.dataLoadingSubscription) {
            this.dataLoadingSubscription.unsubscribe();
        }
    };
    /**
     * @return {?}
     */
    NotificationsViewerComponent.prototype.initDataLoading = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isViewOnly && this.notificationService.recentNotifications) {
            this.rows = this.processResults(this.notificationService.recentNotifications);
            return;
        }
        this.loadingIndicator = true;
        /** @type {?} */
        var dataLoadTask = this.isViewOnly ? this.notificationService.getNewNotifications() : this.notificationService.getNewNotificationsPeriodically();
        this.dataLoadingSubscription = dataLoadTask
            .subscribe((/**
         * @param {?} notifications
         * @return {?}
         */
        function (notifications) {
            _this.loadingIndicator = false;
            _this.dataLoadingConsecutiveFailurs = 0;
            _this.rows = _this.processResults(notifications);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.loadingIndicator = false;
            _this.alertService.showMessage('Load Error', 'Loading new notifications from the server failed!', MessageSeverity.warn);
            _this.alertService.logError(error);
            if (_this.dataLoadingConsecutiveFailurs++ < 5) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.initDataLoading(); }), 5000);
            }
            else {
                _this.alertService.showStickyMessage('Load Error', 'Loading new notifications from the server failed!', MessageSeverity.error);
            }
        }));
        if (this.isViewOnly) {
            this.dataLoadingSubscription = null;
        }
    };
    /**
     * @private
     * @param {?} notifications
     * @return {?}
     */
    NotificationsViewerComponent.prototype.processResults = /**
     * @private
     * @param {?} notifications
     * @return {?}
     */
    function (notifications) {
        if (this.isViewOnly) {
            notifications.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
                return b.date.valueOf() - a.date.valueOf();
            }));
        }
        return notifications;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NotificationsViewerComponent.prototype.getPrintedDate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value) {
            return Utilities.printTimeOnly(value) + ' on ' + Utilities.printDateOnly(value);
        }
    };
    /**
     * @param {?} row
     * @return {?}
     */
    NotificationsViewerComponent.prototype.deleteNotification = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to delete the notification \"' + row.header + '\"?', DialogType.confirm, (/**
         * @return {?}
         */
        function () { return _this.deleteNotificationHelper(row); }));
    };
    /**
     * @param {?} row
     * @return {?}
     */
    NotificationsViewerComponent.prototype.deleteNotificationHelper = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        var _this = this;
        this.alertService.startLoadingMessage('Deleting...');
        this.loadingIndicator = true;
        this.notificationService.deleteNotification(row)
            .subscribe((/**
         * @param {?} results
         * @return {?}
         */
        function (results) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.rows = _this.rows.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.id != row.id; }));
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.alertService.showStickyMessage('Delete Error', "An error occured whilst deleting the notification.\r\nError: \"" + Utilities.getHttpResponseMessages(error) + "\"", MessageSeverity.error, error);
        }));
    };
    /**
     * @param {?} row
     * @return {?}
     */
    NotificationsViewerComponent.prototype.togglePin = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        var _this = this;
        /** @type {?} */
        var pin = !row.isPinned;
        /** @type {?} */
        var opText = pin ? 'Pinning' : 'Unpinning';
        this.alertService.startLoadingMessage(opText + '...');
        this.loadingIndicator = true;
        this.notificationService.pinUnpinNotification(row, pin)
            .subscribe((/**
         * @param {?} results
         * @return {?}
         */
        function (results) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            row.isPinned = pin;
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.alertService.showStickyMessage(opText + ' Error', "An error occured whilst " + opText + " the notification.\r\nError: \"" + Utilities.getHttpResponseMessages(error) + "\"", MessageSeverity.error, error);
        }));
    };
    Object.defineProperty(NotificationsViewerComponent.prototype, "canManageNotifications", {
        get: /**
         * @return {?}
         */
        function () {
            return this.accountService.userHasPermission(Permission.manageRolesPermission); // Todo: Consider creating separate permission for notifications
        },
        enumerable: true,
        configurable: true
    });
    NotificationsViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'notifications-viewer',
                    template: "<div>\n    <ngx-datatable class=\"material colored-header sm table-hover\"\n                   [loadingIndicator]=\"loadingIndicator\"\n                   [rows]=\"rows\"\n                   [rowHeight]=\"35\"\n                   [headerHeight]=\"isViewOnly ? 0 : 35\"\n                   [footerHeight]=\"35\"\n                   [limit]=\"10\"\n                   [columns]=\"columns\"\n                   [scrollbarV]=\"verticalScrollbar\"\n                   [columnMode]=\"'force'\">\n    </ngx-datatable>\n\n    <ng-template #statusHeaderTemplate>\n        <i class=\"fa fa-bullhorn\"></i>\n    </ng-template>\n\n    <ng-template #statusTemplate>\n        <span></span>\n    </ng-template>\n\n    <ng-template #dateTemplate let-row=\"row\" let-value=\"value\">\n        <span [class.unread]=\"!row.isRead\" attr.title=\"{{getPrintedDate(value)}}\">\n            {{getPrintedDate(value)}}\n        </span>\n    </ng-template>\n\n    <ng-template #contentHeaderTemplate let-row=\"row\" let-value=\"value\">\n        <span [class.unread]=\"!row.isRead\" attr.title=\"{{row.body}}\">\n            {{value}}\n        </span>\n    </ng-template>\n\n    <ng-template #contenBodytTemplate let-row=\"row\" let-value=\"value\">\n        <span [class.unread]=\"!row.isRead\" attr.title=\"{{row.header}}\">\n            {{value}}\n        </span>\n    </ng-template>\n\n\n    <ng-template #actionsTemplate let-row=\"row\">\n        <a class=\"btn btn-link btn-sm\" href=\"javascript:;\" tooltip=\"{{'notifications.Delete' | translate}}\" container=\"body\" (click)=\"deleteNotification(row)\"><i class=\"fa fa-times\"></i></a>\n        <a class=\"btn btn-link btn-sm\" href=\"javascript:;\" tooltip=\"{{'notifications.Pin' | translate}}\" co container=\"body\" (click)=\"togglePin(row)\">\n            <i *ngIf=\"row.isPinned\" class=\"fa fa-thumb-tack\"></i>\n            <i *ngIf=\"!row.isPinned\" class=\"fa fa-thumb-tack fa-rotate-90\"></i>\n        </a>\n    </ng-template>\n</div>",
                    styles: [".unread{font-weight:700}"]
                }] }
    ];
    /** @nocollapse */
    NotificationsViewerComponent.ctorParameters = function () { return [
        { type: AlertService },
        { type: AppTranslationService },
        { type: AccountService },
        { type: NotificationService }
    ]; };
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
    return NotificationsViewerComponent;
}());
export { NotificationsViewerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL25vdGlmaWNhdGlvbnMtdmlld2VyL25vdGlmaWNhdGlvbnMtdmlld2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixXQUFXLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1RixPQUFPLEVBQ0gsVUFBVSxFQUFnQixlQUFlLEVBQ3pDLFNBQVMsRUFDWixNQUFNLHNDQUFzQyxDQUFDO0FBRTlDLE9BQU8sRUFDSCxZQUFZLEVBQ1oscUJBQXFCLEVBQ3hCLE1BQU0scUNBQXFDLENBQUM7QUFFN0MsT0FBTyxFQUNILFVBQVUsRUFDYixNQUFNLHNCQUFzQixDQUFDO0FBRzlCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUloRTtJQXVDSSxzQ0FBb0IsWUFBMEIsRUFBVSxrQkFBeUMsRUFBVSxjQUE4QixFQUFVLG1CQUF3QztRQUF2SyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBakMzTCxZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBRzFCLGtDQUE2QixHQUFHLENBQUMsQ0FBQztRQVFsQyxzQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFzQjFCLENBQUM7Ozs7SUFHRCwrQ0FBUTs7O0lBQVI7UUFBQSxpQkFvQkM7UUFsQkcsSUFBSSxJQUFJLENB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PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgRGlhbG9nVHlwZSwgQWxlcnRDb21tYW5kLCBNZXNzYWdlU2V2ZXJpdHksXG4gICAgVXRpbGl0aWVzXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgQWxlcnRTZXJ2aWNlLFxuICAgIEFwcFRyYW5zbGF0aW9uU2VydmljZVxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1zZXJ2aWNlcy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgUGVybWlzc2lvblxufSBmcm9tICdAcG9scHdhcmUvbmd4LW9hdXRoMic7XG5cblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWNjb3VudC5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9ub3RpZmljYXRpb24ubW9kZWwnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm90aWZpY2F0aW9ucy12aWV3ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ub3RpZmljYXRpb25zLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbm90aWZpY2F0aW9ucy12aWV3ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zVmlld2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIGNvbHVtbnM6IGFueVtdID0gW107XG4gICAgcm93czogTm90aWZpY2F0aW9uW10gPSBbXTtcbiAgICBsb2FkaW5nSW5kaWNhdG9yOiBib29sZWFuO1xuXG4gICAgZGF0YUxvYWRpbmdDb25zZWN1dGl2ZUZhaWx1cnMgPSAwO1xuICAgIGRhdGFMb2FkaW5nU3Vic2NyaXB0aW9uOiBhbnk7XG5cblxuICAgIEBJbnB1dCgpXG4gICAgaXNWaWV3T25seTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgdmVydGljYWxTY3JvbGxiYXIgPSBmYWxzZTtcblxuXG4gICAgQFZpZXdDaGlsZCgnc3RhdHVzSGVhZGVyVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHN0YXR1c0hlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnc3RhdHVzVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHN0YXR1c1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnZGF0ZVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBkYXRlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdjb250ZW50SGVhZGVyVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGNvbnRlbnRIZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbnRlbkJvZHl0VGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGNvbnRlbkJvZHl0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdhY3Rpb25zVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGFjdGlvbnNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsIHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBBcHBUcmFuc2xhdGlvblNlcnZpY2UsIHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlLCBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UpIHtcbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIGlmICh0aGlzLmlzVmlld09ubHkpIHtcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucyA9IFtcbiAgICAgICAgICAgICAgICB7IHByb3A6ICdkYXRlJywgY2VsbFRlbXBsYXRlOiB0aGlzLmRhdGVUZW1wbGF0ZSwgd2lkdGg6IDEwMCwgcmVzaXplYWJsZTogZmFsc2UsIGNhbkF1dG9SZXNpemU6IGZhbHNlLCBzb3J0YWJsZTogZmFsc2UsIGRyYWdnYWJsZTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICB7IHByb3A6ICdoZWFkZXInLCBjZWxsVGVtcGxhdGU6IHRoaXMuY29udGVudEhlYWRlclRlbXBsYXRlLCB3aWR0aDogMjAwLCByZXNpemVhYmxlOiBmYWxzZSwgc29ydGFibGU6IGZhbHNlLCBkcmFnZ2FibGU6IGZhbHNlIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZ1QgPSAoa2V5OiBzdHJpbmcpID0+IHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGtleSk7XG5cbiAgICAgICAgICAgIHRoaXMuY29sdW1ucyA9IFtcbiAgICAgICAgICAgICAgICB7IHByb3A6ICcnLCBuYW1lOiAnJywgd2lkdGg6IDEwLCBoZWFkZXJUZW1wbGF0ZTogdGhpcy5zdGF0dXNIZWFkZXJUZW1wbGF0ZSwgY2VsbFRlbXBsYXRlOiB0aGlzLnN0YXR1c1RlbXBsYXRlLCByZXNpemVhYmxlOiBmYWxzZSwgY2FuQXV0b1Jlc2l6ZTogZmFsc2UsIHNvcnRhYmxlOiBmYWxzZSwgZHJhZ2dhYmxlOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgIHsgcHJvcDogJ2RhdGUnLCBuYW1lOiBnVCgnbm90aWZpY2F0aW9ucy5EYXRlJyksIGNlbGxUZW1wbGF0ZTogdGhpcy5kYXRlVGVtcGxhdGUsIHdpZHRoOiAzMCB9LFxuICAgICAgICAgICAgICAgIHsgcHJvcDogJ2JvZHknLCBuYW1lOiBnVCgnbm90aWZpY2F0aW9ucy5Ob3RpZmljYXRpb24nKSwgY2VsbFRlbXBsYXRlOiB0aGlzLmNvbnRlbkJvZHl0VGVtcGxhdGUsIHdpZHRoOiA1MDAgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICcnLCB3aWR0aDogODAsIGNlbGxUZW1wbGF0ZTogdGhpcy5hY3Rpb25zVGVtcGxhdGUsIHJlc2l6ZWFibGU6IGZhbHNlLCBjYW5BdXRvUmVzaXplOiBmYWxzZSwgc29ydGFibGU6IGZhbHNlLCBkcmFnZ2FibGU6IGZhbHNlIH1cbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuaW5pdERhdGFMb2FkaW5nKCk7XG4gICAgfVxuXG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YUxvYWRpbmdTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YUxvYWRpbmdTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBpbml0RGF0YUxvYWRpbmcoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNWaWV3T25seSAmJiB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UucmVjZW50Tm90aWZpY2F0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5wcm9jZXNzUmVzdWx0cyh0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UucmVjZW50Tm90aWZpY2F0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGRhdGFMb2FkVGFzayA9IHRoaXMuaXNWaWV3T25seSA/IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5nZXROZXdOb3RpZmljYXRpb25zKCkgOiB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuZ2V0TmV3Tm90aWZpY2F0aW9uc1BlcmlvZGljYWxseSgpO1xuXG4gICAgICAgIHRoaXMuZGF0YUxvYWRpbmdTdWJzY3JpcHRpb24gPSBkYXRhTG9hZFRhc2tcbiAgICAgICAgICAgIC5zdWJzY3JpYmUobm90aWZpY2F0aW9ucyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhTG9hZGluZ0NvbnNlY3V0aXZlRmFpbHVycyA9IDA7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLnByb2Nlc3NSZXN1bHRzKG5vdGlmaWNhdGlvbnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdMb2FkIEVycm9yJywgJ0xvYWRpbmcgbmV3IG5vdGlmaWNhdGlvbnMgZnJvbSB0aGUgc2VydmVyIGZhaWxlZCEnLCBNZXNzYWdlU2V2ZXJpdHkud2Fybik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmxvZ0Vycm9yKGVycm9yKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhTG9hZGluZ0NvbnNlY3V0aXZlRmFpbHVycysrIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXREYXRhTG9hZGluZygpLCA1MDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdMb2FkIEVycm9yJywgJ0xvYWRpbmcgbmV3IG5vdGlmaWNhdGlvbnMgZnJvbSB0aGUgc2VydmVyIGZhaWxlZCEnLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIGlmICh0aGlzLmlzVmlld09ubHkpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YUxvYWRpbmdTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHByb2Nlc3NSZXN1bHRzKG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbltdKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNWaWV3T25seSkge1xuICAgICAgICAgICAgbm90aWZpY2F0aW9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIuZGF0ZS52YWx1ZU9mKCkgLSBhLmRhdGUudmFsdWVPZigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9ucztcbiAgICB9XG5cblxuXG4gICAgZ2V0UHJpbnRlZERhdGUodmFsdWU6IERhdGUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gVXRpbGl0aWVzLnByaW50VGltZU9ubHkodmFsdWUpICsgJyBvbiAnICsgVXRpbGl0aWVzLnByaW50RGF0ZU9ubHkodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBkZWxldGVOb3RpZmljYXRpb24ocm93OiBOb3RpZmljYXRpb24pIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd0RpYWxvZygnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgbm90aWZpY2F0aW9uIFxcXCInICsgcm93LmhlYWRlciArICdcXFwiPycsIERpYWxvZ1R5cGUuY29uZmlybSwgKCkgPT4gdGhpcy5kZWxldGVOb3RpZmljYXRpb25IZWxwZXIocm93KSk7XG4gICAgfVxuXG5cbiAgICBkZWxldGVOb3RpZmljYXRpb25IZWxwZXIocm93OiBOb3RpZmljYXRpb24pIHtcblxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCdEZWxldGluZy4uLicpO1xuICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5kZWxldGVOb3RpZmljYXRpb24ocm93KVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IHRoaXMucm93cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9IHJvdy5pZCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdEZWxldGUgRXJyb3InLCBgQW4gZXJyb3Igb2NjdXJlZCB3aGlsc3QgZGVsZXRpbmcgdGhlIG5vdGlmaWNhdGlvbi5cXHJcXG5FcnJvcjogXCIke1V0aWxpdGllcy5nZXRIdHRwUmVzcG9uc2VNZXNzYWdlcyhlcnJvcil9XCJgLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICB0b2dnbGVQaW4ocm93OiBOb3RpZmljYXRpb24pIHtcblxuICAgICAgICBjb25zdCBwaW4gPSAhcm93LmlzUGlubmVkO1xuICAgICAgICBjb25zdCBvcFRleHQgPSBwaW4gPyAnUGlubmluZycgOiAnVW5waW5uaW5nJztcblxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKG9wVGV4dCArICcuLi4nKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UucGluVW5waW5Ob3RpZmljYXRpb24ocm93LCBwaW4pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgcm93LmlzUGlubmVkID0gcGluO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZShvcFRleHQgKyAnIEVycm9yJywgYEFuIGVycm9yIG9jY3VyZWQgd2hpbHN0ICR7b3BUZXh0fSB0aGUgbm90aWZpY2F0aW9uLlxcclxcbkVycm9yOiBcIiR7VXRpbGl0aWVzLmdldEh0dHBSZXNwb25zZU1lc3NhZ2VzKGVycm9yKX1cImAsXG4gICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGdldCBjYW5NYW5hZ2VOb3RpZmljYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50U2VydmljZS51c2VySGFzUGVybWlzc2lvbihQZXJtaXNzaW9uLm1hbmFnZVJvbGVzUGVybWlzc2lvbik7IC8vIFRvZG86IENvbnNpZGVyIGNyZWF0aW5nIHNlcGFyYXRlIHBlcm1pc3Npb24gZm9yIG5vdGlmaWNhdGlvbnNcbiAgICB9XG5cbn1cbiJdfQ==