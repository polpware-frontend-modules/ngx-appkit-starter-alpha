// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
import { Component, ViewChild, Input } from '@angular/core';
import { DialogType, MessageSeverity, Utilities } from '@polpware/ngx-appkit-contracts-alpha';
import { Permission } from '@polpware/ngx-oauth2';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-appkit-services-alpha";
import * as i2 from "../../services/account.service";
import * as i3 from "../../services/notification.service";
import * as i4 from "@swimlane/ngx-datatable";
import * as i5 from "ngx-bootstrap/tooltip";
import * as i6 from "@angular/common";
import * as i7 from "@ngx-translate/core";
const _c0 = ["statusHeaderTemplate"];
const _c1 = ["statusTemplate"];
const _c2 = ["dateTemplate"];
const _c3 = ["contentHeaderTemplate"];
const _c4 = ["contenBodytTemplate"];
const _c5 = ["actionsTemplate"];
function NotificationsViewerComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 7);
} }
function NotificationsViewerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span");
} }
function NotificationsViewerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r12 = ctx.row;
    const value_r13 = ctx.value;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("unread", !row_r12.isRead);
    i0.ɵɵattribute("title", ctx_r5.getPrintedDate(value_r13));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.getPrintedDate(value_r13), " ");
} }
function NotificationsViewerComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r14 = ctx.row;
    const value_r15 = ctx.value;
    i0.ɵɵclassProp("unread", !row_r14.isRead);
    i0.ɵɵattribute("title", row_r14.body);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", value_r15, " ");
} }
function NotificationsViewerComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r16 = ctx.row;
    const value_r17 = ctx.value;
    i0.ɵɵclassProp("unread", !row_r16.isRead);
    i0.ɵɵattribute("title", row_r16.header);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", value_r17, " ");
} }
function NotificationsViewerComponent_ng_template_12_i_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 13);
} }
function NotificationsViewerComponent_ng_template_12_i_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 14);
} }
function NotificationsViewerComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵlistener("click", function NotificationsViewerComponent_ng_template_12_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r22); const row_r18 = ctx.row; const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.deleteNotification(row_r18); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "i", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 10);
    i0.ɵɵlistener("click", function NotificationsViewerComponent_ng_template_12_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r22); const row_r18 = ctx.row; const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.togglePin(row_r18); });
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵtemplate(5, NotificationsViewerComponent_ng_template_12_i_5_Template, 1, 0, "i", 11);
    i0.ɵɵtemplate(6, NotificationsViewerComponent_ng_template_12_i_6_Template, 1, 0, "i", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r18 = ctx.row;
    i0.ɵɵpropertyInterpolate("tooltip", i0.ɵɵpipeBind1(1, 4, "notifications.Delete"));
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("tooltip", i0.ɵɵpipeBind1(4, 6, "notifications.Pin"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", row_r18.isPinned);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r18.isPinned);
} }
export class NotificationsViewerComponent {
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
    ngOnInit() {
        if (this.isViewOnly) {
            this.columns = [
                { prop: 'date', cellTemplate: this.dateTemplate, width: 100, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
                { prop: 'header', cellTemplate: this.contentHeaderTemplate, width: 200, resizeable: false, sortable: false, draggable: false },
            ];
        }
        else {
            const gT = (key) => this.translationService.getTranslation(key);
            this.columns = [
                { prop: '', name: '', width: 10, headerTemplate: this.statusHeaderTemplate, cellTemplate: this.statusTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
                { prop: 'date', name: gT('notifications.Date'), cellTemplate: this.dateTemplate, width: 30 },
                { prop: 'body', name: gT('notifications.Notification'), cellTemplate: this.contenBodytTemplate, width: 500 },
                { name: '', width: 80, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
            ];
        }
        this.initDataLoading();
    }
    ngOnDestroy() {
        if (this.dataLoadingSubscription) {
            this.dataLoadingSubscription.unsubscribe();
        }
    }
    initDataLoading() {
        if (this.isViewOnly && this.notificationService.recentNotifications) {
            this.rows = this.processResults(this.notificationService.recentNotifications);
            return;
        }
        this.loadingIndicator = true;
        const dataLoadTask = this.isViewOnly ? this.notificationService.getNewNotifications() : this.notificationService.getNewNotificationsPeriodically();
        this.dataLoadingSubscription = dataLoadTask
            .subscribe(notifications => {
            this.loadingIndicator = false;
            this.dataLoadingConsecutiveFailurs = 0;
            this.rows = this.processResults(notifications);
        }, error => {
            this.loadingIndicator = false;
            this.alertService.showMessage('Load Error', 'Loading new notifications from the server failed!', MessageSeverity.warn);
            this.alertService.logError(error);
            if (this.dataLoadingConsecutiveFailurs++ < 5) {
                setTimeout(() => this.initDataLoading(), 5000);
            }
            else {
                this.alertService.showStickyMessage('Load Error', 'Loading new notifications from the server failed!', MessageSeverity.error);
            }
        });
        if (this.isViewOnly) {
            this.dataLoadingSubscription = null;
        }
    }
    processResults(notifications) {
        if (this.isViewOnly) {
            notifications.sort((a, b) => {
                return b.date.valueOf() - a.date.valueOf();
            });
        }
        return notifications;
    }
    getPrintedDate(value) {
        if (value) {
            return Utilities.printTimeOnly(value) + ' on ' + Utilities.printDateOnly(value);
        }
    }
    deleteNotification(row) {
        this.alertService.showDialog('Are you sure you want to delete the notification \"' + row.header + '\"?', DialogType.confirm, () => this.deleteNotificationHelper(row));
    }
    deleteNotificationHelper(row) {
        this.alertService.startLoadingMessage('Deleting...');
        this.loadingIndicator = true;
        this.notificationService.deleteNotification(row)
            .subscribe(results => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.rows = this.rows.filter(item => item.id != row.id);
        }, error => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.alertService.showStickyMessage('Delete Error', `An error occured whilst deleting the notification.\r\nError: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        });
    }
    togglePin(row) {
        const pin = !row.isPinned;
        const opText = pin ? 'Pinning' : 'Unpinning';
        this.alertService.startLoadingMessage(opText + '...');
        this.loadingIndicator = true;
        this.notificationService.pinUnpinNotification(row, pin)
            .subscribe(results => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            row.isPinned = pin;
        }, error => {
            this.alertService.stopLoadingMessage();
            this.loadingIndicator = false;
            this.alertService.showStickyMessage(opText + ' Error', `An error occured whilst ${opText} the notification.\r\nError: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
        });
    }
    get canManageNotifications() {
        return this.accountService.userHasPermission(Permission.manageRolesPermission); // Todo: Consider creating separate permission for notifications
    }
}
/** @nocollapse */ NotificationsViewerComponent.ɵfac = function NotificationsViewerComponent_Factory(t) { return new (t || NotificationsViewerComponent)(i0.ɵɵdirectiveInject(i1.AlertService), i0.ɵɵdirectiveInject(i1.AppTranslationService), i0.ɵɵdirectiveInject(i2.AccountService), i0.ɵɵdirectiveInject(i3.NotificationService)); };
/** @nocollapse */ NotificationsViewerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NotificationsViewerComponent, selectors: [["notifications-viewer"]], viewQuery: function NotificationsViewerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
        i0.ɵɵstaticViewQuery(_c1, true);
        i0.ɵɵstaticViewQuery(_c2, true);
        i0.ɵɵstaticViewQuery(_c3, true);
        i0.ɵɵstaticViewQuery(_c4, true);
        i0.ɵɵstaticViewQuery(_c5, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.statusHeaderTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.statusTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dateTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentHeaderTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contenBodytTemplate = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.actionsTemplate = _t.first);
    } }, inputs: { isViewOnly: "isViewOnly", verticalScrollbar: "verticalScrollbar" }, decls: 14, vars: 9, consts: [[1, "material", "colored-header", "sm", "table-hover", 3, "loadingIndicator", "rows", "rowHeight", "headerHeight", "footerHeight", "limit", "columns", "scrollbarV", "columnMode"], ["statusHeaderTemplate", ""], ["statusTemplate", ""], ["dateTemplate", ""], ["contentHeaderTemplate", ""], ["contenBodytTemplate", ""], ["actionsTemplate", ""], [1, "fa", "fa-bullhorn"], ["href", "javascript:;", "container", "body", 1, "btn", "btn-link", "btn-sm", 3, "tooltip", "click"], [1, "fa", "fa-times"], ["href", "javascript:;", "co", "", "container", "body", 1, "btn", "btn-link", "btn-sm", 3, "tooltip", "click"], ["class", "fa fa-thumb-tack", 4, "ngIf"], ["class", "fa fa-thumb-tack fa-rotate-90", 4, "ngIf"], [1, "fa", "fa-thumb-tack"], [1, "fa", "fa-thumb-tack", "fa-rotate-90"]], template: function NotificationsViewerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelement(1, "ngx-datatable", 0);
        i0.ɵɵtemplate(2, NotificationsViewerComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(4, NotificationsViewerComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(6, NotificationsViewerComponent_ng_template_6_Template, 2, 4, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(8, NotificationsViewerComponent_ng_template_8_Template, 2, 4, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(10, NotificationsViewerComponent_ng_template_10_Template, 2, 4, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(12, NotificationsViewerComponent_ng_template_12_Template, 7, 8, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("loadingIndicator", ctx.loadingIndicator)("rows", ctx.rows)("rowHeight", 35)("headerHeight", ctx.isViewOnly ? 0 : 35)("footerHeight", 35)("limit", 10)("columns", ctx.columns)("scrollbarV", ctx.verticalScrollbar)("columnMode", "force");
    } }, directives: [i4.DatatableComponent, i5.TooltipDirective, i6.NgIf], pipes: [i7.TranslatePipe], styles: [".unread[_ngcontent-%COMP%]{font-weight:700}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NotificationsViewerComponent, [{
        type: Component,
        args: [{
                selector: 'notifications-viewer',
                templateUrl: './notifications-viewer.component.html',
                styleUrls: ['./notifications-viewer.component.scss']
            }]
    }], function () { return [{ type: i1.AlertService }, { type: i1.AppTranslationService }, { type: i2.AccountService }, { type: i3.NotificationService }]; }, { isViewOnly: [{
            type: Input
        }], verticalScrollbar: [{
            type: Input
        }], statusHeaderTemplate: [{
            type: ViewChild,
            args: ['statusHeaderTemplate', { static: true }]
        }], statusTemplate: [{
            type: ViewChild,
            args: ['statusTemplate', { static: true }]
        }], dateTemplate: [{
            type: ViewChild,
            args: ['dateTemplate', { static: true }]
        }], contentHeaderTemplate: [{
            type: ViewChild,
            args: ['contentHeaderTemplate', { static: true }]
        }], contenBodytTemplate: [{
            type: ViewChild,
            args: ['contenBodytTemplate', { static: true }]
        }], actionsTemplate: [{
            type: ViewChild,
            args: ['actionsTemplate', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL25vdGlmaWNhdGlvbnMtdmlld2VyL25vdGlmaWNhdGlvbnMtdmlld2VyLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL25vdGlmaWNhdGlvbnMtdmlld2VyL25vdGlmaWNhdGlvbnMtdmlld2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQztBQUNoQyw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLGdDQUFnQztBQUVoQyxPQUFPLEVBQUUsU0FBUyxFQUFrQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVGLE9BQU8sRUFDSCxVQUFVLEVBQWdCLGVBQWUsRUFDekMsU0FBUyxFQUNaLE1BQU0sc0NBQXNDLENBQUM7QUFPOUMsT0FBTyxFQUNILFVBQVUsRUFDYixNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lDTHRCLHVCQUE4Qjs7O0lBSTlCLHVCQUFhOzs7SUFJYiw0QkFDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBTzs7Ozs7SUFGRCx5Q0FBNEI7SUFBQyx5REFBc0M7SUFDckUsZUFDSjtJQURJLGlFQUNKOzs7SUFJQSw0QkFDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBTzs7OztJQUZELHlDQUE0QjtJQUFDLHFDQUF5QjtJQUN4RCxlQUNKO0lBREksMENBQ0o7OztJQUlBLDRCQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFPOzs7O0lBRkQseUNBQTRCO0lBQUMsdUNBQTJCO0lBQzFELGVBQ0o7SUFESSwwQ0FDSjs7O0lBT0ksd0JBQXFEOzs7SUFDckQsd0JBQW1FOzs7O0lBSHZFLDRCQUF1SjtJQUFsQywrT0FBaUM7O0lBQUMsdUJBQTJCO0lBQUEsaUJBQUk7SUFDdEwsNkJBQ0k7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RUFBRTs7a0JBRzVDLFNBQVM7bUJBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRzFDLFNBQVM7bUJBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFHbkQsU0FBUzttQkFBQyxxQkFBcUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUdqRCxTQUFTO21CQUFDLGlCQUFpQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFbWFpbDogaW5mb0BlYmVubW9ubmV5LmNvbVxuLy8gd3d3LmViZW5tb25uZXkuY29tL3RlbXBsYXRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBEaWFsb2dUeXBlLCBBbGVydENvbW1hbmQsIE1lc3NhZ2VTZXZlcml0eSxcbiAgICBVdGlsaXRpZXNcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBBbGVydFNlcnZpY2UsXG4gICAgQXBwVHJhbnNsYXRpb25TZXJ2aWNlXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXNlcnZpY2VzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBQZXJtaXNzaW9uXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtb2F1dGgyJztcblxuXG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL25vdGlmaWNhdGlvbi5tb2RlbCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdub3RpZmljYXRpb25zLXZpZXdlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25vdGlmaWNhdGlvbnMtdmlld2VyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9ub3RpZmljYXRpb25zLXZpZXdlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnNWaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgY29sdW1uczogYW55W10gPSBbXTtcbiAgICByb3dzOiBOb3RpZmljYXRpb25bXSA9IFtdO1xuICAgIGxvYWRpbmdJbmRpY2F0b3I6IGJvb2xlYW47XG5cbiAgICBkYXRhTG9hZGluZ0NvbnNlY3V0aXZlRmFpbHVycyA9IDA7XG4gICAgZGF0YUxvYWRpbmdTdWJzY3JpcHRpb246IGFueTtcblxuXG4gICAgQElucHV0KClcbiAgICBpc1ZpZXdPbmx5OiBib29sZWFuO1xuXG4gICAgQElucHV0KClcbiAgICB2ZXJ0aWNhbFNjcm9sbGJhciA9IGZhbHNlO1xuXG5cbiAgICBAVmlld0NoaWxkKCdzdGF0dXNIZWFkZXJUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgc3RhdHVzSGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdzdGF0dXNUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgc3RhdHVzVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdkYXRlVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGRhdGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbnRlbnRIZWFkZXJUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgY29udGVudEhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnY29udGVuQm9keXRUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgY29udGVuQm9keXRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2FjdGlvbnNUZW1wbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pXG4gICAgYWN0aW9uc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbGVydFNlcnZpY2U6IEFsZXJ0U2VydmljZSwgcHJpdmF0ZSB0cmFuc2xhdGlvblNlcnZpY2U6IEFwcFRyYW5zbGF0aW9uU2VydmljZSwgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UsIHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogTm90aWZpY2F0aW9uU2VydmljZSkge1xuICAgIH1cblxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNWaWV3T25seSkge1xuICAgICAgICAgICAgdGhpcy5jb2x1bW5zID0gW1xuICAgICAgICAgICAgICAgIHsgcHJvcDogJ2RhdGUnLCBjZWxsVGVtcGxhdGU6IHRoaXMuZGF0ZVRlbXBsYXRlLCB3aWR0aDogMTAwLCByZXNpemVhYmxlOiBmYWxzZSwgY2FuQXV0b1Jlc2l6ZTogZmFsc2UsIHNvcnRhYmxlOiBmYWxzZSwgZHJhZ2dhYmxlOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgIHsgcHJvcDogJ2hlYWRlcicsIGNlbGxUZW1wbGF0ZTogdGhpcy5jb250ZW50SGVhZGVyVGVtcGxhdGUsIHdpZHRoOiAyMDAsIHJlc2l6ZWFibGU6IGZhbHNlLCBzb3J0YWJsZTogZmFsc2UsIGRyYWdnYWJsZTogZmFsc2UgfSxcbiAgICAgICAgICAgIF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBnVCA9IChrZXk6IHN0cmluZykgPT4gdGhpcy50cmFuc2xhdGlvblNlcnZpY2UuZ2V0VHJhbnNsYXRpb24oa2V5KTtcblxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zID0gW1xuICAgICAgICAgICAgICAgIHsgcHJvcDogJycsIG5hbWU6ICcnLCB3aWR0aDogMTAsIGhlYWRlclRlbXBsYXRlOiB0aGlzLnN0YXR1c0hlYWRlclRlbXBsYXRlLCBjZWxsVGVtcGxhdGU6IHRoaXMuc3RhdHVzVGVtcGxhdGUsIHJlc2l6ZWFibGU6IGZhbHNlLCBjYW5BdXRvUmVzaXplOiBmYWxzZSwgc29ydGFibGU6IGZhbHNlLCBkcmFnZ2FibGU6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgeyBwcm9wOiAnZGF0ZScsIG5hbWU6IGdUKCdub3RpZmljYXRpb25zLkRhdGUnKSwgY2VsbFRlbXBsYXRlOiB0aGlzLmRhdGVUZW1wbGF0ZSwgd2lkdGg6IDMwIH0sXG4gICAgICAgICAgICAgICAgeyBwcm9wOiAnYm9keScsIG5hbWU6IGdUKCdub3RpZmljYXRpb25zLk5vdGlmaWNhdGlvbicpLCBjZWxsVGVtcGxhdGU6IHRoaXMuY29udGVuQm9keXRUZW1wbGF0ZSwgd2lkdGg6IDUwMCB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogJycsIHdpZHRoOiA4MCwgY2VsbFRlbXBsYXRlOiB0aGlzLmFjdGlvbnNUZW1wbGF0ZSwgcmVzaXplYWJsZTogZmFsc2UsIGNhbkF1dG9SZXNpemU6IGZhbHNlLCBzb3J0YWJsZTogZmFsc2UsIGRyYWdnYWJsZTogZmFsc2UgfVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdGhpcy5pbml0RGF0YUxvYWRpbmcoKTtcbiAgICB9XG5cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5kYXRhTG9hZGluZ1N1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5kYXRhTG9hZGluZ1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGluaXREYXRhTG9hZGluZygpIHtcblxuICAgICAgICBpZiAodGhpcy5pc1ZpZXdPbmx5ICYmIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5yZWNlbnROb3RpZmljYXRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLnByb2Nlc3NSZXN1bHRzKHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5yZWNlbnROb3RpZmljYXRpb25zKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgZGF0YUxvYWRUYXNrID0gdGhpcy5pc1ZpZXdPbmx5ID8gdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmdldE5ld05vdGlmaWNhdGlvbnMoKSA6IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5nZXROZXdOb3RpZmljYXRpb25zUGVyaW9kaWNhbGx5KCk7XG5cbiAgICAgICAgdGhpcy5kYXRhTG9hZGluZ1N1YnNjcmlwdGlvbiA9IGRhdGFMb2FkVGFza1xuICAgICAgICAgICAgLnN1YnNjcmliZShub3RpZmljYXRpb25zID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFMb2FkaW5nQ29uc2VjdXRpdmVGYWlsdXJzID0gMDtcblxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IHRoaXMucHJvY2Vzc1Jlc3VsdHMobm90aWZpY2F0aW9ucyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd01lc3NhZ2UoJ0xvYWQgRXJyb3InLCAnTG9hZGluZyBuZXcgbm90aWZpY2F0aW9ucyBmcm9tIHRoZSBzZXJ2ZXIgZmFpbGVkIScsIE1lc3NhZ2VTZXZlcml0eS53YXJuKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2UubG9nRXJyb3IoZXJyb3IpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFMb2FkaW5nQ29uc2VjdXRpdmVGYWlsdXJzKysgPCA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5pdERhdGFMb2FkaW5nKCksIDUwMDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ0xvYWQgRXJyb3InLCAnTG9hZGluZyBuZXcgbm90aWZpY2F0aW9ucyBmcm9tIHRoZSBzZXJ2ZXIgZmFpbGVkIScsIE1lc3NhZ2VTZXZlcml0eS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgaWYgKHRoaXMuaXNWaWV3T25seSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhTG9hZGluZ1N1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHByaXZhdGUgcHJvY2Vzc1Jlc3VsdHMobm90aWZpY2F0aW9uczogTm90aWZpY2F0aW9uW10pIHtcblxuICAgICAgICBpZiAodGhpcy5pc1ZpZXdPbmx5KSB7XG4gICAgICAgICAgICBub3RpZmljYXRpb25zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYi5kYXRlLnZhbHVlT2YoKSAtIGEuZGF0ZS52YWx1ZU9mKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub3RpZmljYXRpb25zO1xuICAgIH1cblxuXG5cbiAgICBnZXRQcmludGVkRGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBVdGlsaXRpZXMucHJpbnRUaW1lT25seSh2YWx1ZSkgKyAnIG9uICcgKyBVdGlsaXRpZXMucHJpbnREYXRlT25seSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGRlbGV0ZU5vdGlmaWNhdGlvbihyb3c6IE5vdGlmaWNhdGlvbikge1xuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93RGlhbG9nKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBub3RpZmljYXRpb24gXFxcIicgKyByb3cuaGVhZGVyICsgJ1xcXCI/JywgRGlhbG9nVHlwZS5jb25maXJtLCAoKSA9PiB0aGlzLmRlbGV0ZU5vdGlmaWNhdGlvbkhlbHBlcihyb3cpKTtcbiAgICB9XG5cblxuICAgIGRlbGV0ZU5vdGlmaWNhdGlvbkhlbHBlcihyb3c6IE5vdGlmaWNhdGlvbikge1xuXG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0YXJ0TG9hZGluZ01lc3NhZ2UoJ0RlbGV0aW5nLi4uJyk7XG4gICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmRlbGV0ZU5vdGlmaWNhdGlvbihyb3cpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5yb3dzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT0gcm93LmlkKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd1N0aWNreU1lc3NhZ2UoJ0RlbGV0ZSBFcnJvcicsIGBBbiBlcnJvciBvY2N1cmVkIHdoaWxzdCBkZWxldGluZyB0aGUgbm90aWZpY2F0aW9uLlxcclxcbkVycm9yOiBcIiR7VXRpbGl0aWVzLmdldEh0dHBSZXNwb25zZU1lc3NhZ2VzKGVycm9yKX1cImAsXG4gICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHRvZ2dsZVBpbihyb3c6IE5vdGlmaWNhdGlvbikge1xuXG4gICAgICAgIGNvbnN0IHBpbiA9ICFyb3cuaXNQaW5uZWQ7XG4gICAgICAgIGNvbnN0IG9wVGV4dCA9IHBpbiA/ICdQaW5uaW5nJyA6ICdVbnBpbm5pbmcnO1xuXG4gICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0YXJ0TG9hZGluZ01lc3NhZ2Uob3BUZXh0ICsgJy4uLicpO1xuICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5waW5VbnBpbk5vdGlmaWNhdGlvbihyb3csIHBpbilcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICByb3cuaXNQaW5uZWQgPSBwaW47XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKG9wVGV4dCArICcgRXJyb3InLCBgQW4gZXJyb3Igb2NjdXJlZCB3aGlsc3QgJHtvcFRleHR9IHRoZSBub3RpZmljYXRpb24uXFxyXFxuRXJyb3I6IFwiJHtVdGlsaXRpZXMuZ2V0SHR0cFJlc3BvbnNlTWVzc2FnZXMoZXJyb3IpfVwiYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXZlcml0eS5lcnJvciwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZ2V0IGNhbk1hbmFnZU5vdGlmaWNhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY291bnRTZXJ2aWNlLnVzZXJIYXNQZXJtaXNzaW9uKFBlcm1pc3Npb24ubWFuYWdlUm9sZXNQZXJtaXNzaW9uKTsgLy8gVG9kbzogQ29uc2lkZXIgY3JlYXRpbmcgc2VwYXJhdGUgcGVybWlzc2lvbiBmb3Igbm90aWZpY2F0aW9uc1xuICAgIH1cblxufVxuIiwiPGRpdj5cbiAgICA8bmd4LWRhdGF0YWJsZSBjbGFzcz1cIm1hdGVyaWFsIGNvbG9yZWQtaGVhZGVyIHNtIHRhYmxlLWhvdmVyXCJcbiAgICAgICAgICAgICAgICAgICBbbG9hZGluZ0luZGljYXRvcl09XCJsb2FkaW5nSW5kaWNhdG9yXCJcbiAgICAgICAgICAgICAgICAgICBbcm93c109XCJyb3dzXCJcbiAgICAgICAgICAgICAgICAgICBbcm93SGVpZ2h0XT1cIjM1XCJcbiAgICAgICAgICAgICAgICAgICBbaGVhZGVySGVpZ2h0XT1cImlzVmlld09ubHkgPyAwIDogMzVcIlxuICAgICAgICAgICAgICAgICAgIFtmb290ZXJIZWlnaHRdPVwiMzVcIlxuICAgICAgICAgICAgICAgICAgIFtsaW1pdF09XCIxMFwiXG4gICAgICAgICAgICAgICAgICAgW2NvbHVtbnNdPVwiY29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgW3Njcm9sbGJhclZdPVwidmVydGljYWxTY3JvbGxiYXJcIlxuICAgICAgICAgICAgICAgICAgIFtjb2x1bW5Nb2RlXT1cIidmb3JjZSdcIj5cbiAgICA8L25neC1kYXRhdGFibGU+XG5cbiAgICA8bmctdGVtcGxhdGUgI3N0YXR1c0hlYWRlclRlbXBsYXRlPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWJ1bGxob3JuXCI+PC9pPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctdGVtcGxhdGUgI3N0YXR1c1RlbXBsYXRlPlxuICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxuZy10ZW1wbGF0ZSAjZGF0ZVRlbXBsYXRlIGxldC1yb3c9XCJyb3dcIiBsZXQtdmFsdWU9XCJ2YWx1ZVwiPlxuICAgICAgICA8c3BhbiBbY2xhc3MudW5yZWFkXT1cIiFyb3cuaXNSZWFkXCIgYXR0ci50aXRsZT1cInt7Z2V0UHJpbnRlZERhdGUodmFsdWUpfX1cIj5cbiAgICAgICAgICAgIHt7Z2V0UHJpbnRlZERhdGUodmFsdWUpfX1cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctdGVtcGxhdGUgI2NvbnRlbnRIZWFkZXJUZW1wbGF0ZSBsZXQtcm93PVwicm93XCIgbGV0LXZhbHVlPVwidmFsdWVcIj5cbiAgICAgICAgPHNwYW4gW2NsYXNzLnVucmVhZF09XCIhcm93LmlzUmVhZFwiIGF0dHIudGl0bGU9XCJ7e3Jvdy5ib2R5fX1cIj5cbiAgICAgICAgICAgIHt7dmFsdWV9fVxuICAgICAgICA8L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxuZy10ZW1wbGF0ZSAjY29udGVuQm9keXRUZW1wbGF0ZSBsZXQtcm93PVwicm93XCIgbGV0LXZhbHVlPVwidmFsdWVcIj5cbiAgICAgICAgPHNwYW4gW2NsYXNzLnVucmVhZF09XCIhcm93LmlzUmVhZFwiIGF0dHIudGl0bGU9XCJ7e3Jvdy5oZWFkZXJ9fVwiPlxuICAgICAgICAgICAge3t2YWx1ZX19XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG5cbiAgICA8bmctdGVtcGxhdGUgI2FjdGlvbnNUZW1wbGF0ZSBsZXQtcm93PVwicm93XCI+XG4gICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiB0b29sdGlwPVwie3snbm90aWZpY2F0aW9ucy5EZWxldGUnIHwgdHJhbnNsYXRlfX1cIiBjb250YWluZXI9XCJib2R5XCIgKGNsaWNrKT1cImRlbGV0ZU5vdGlmaWNhdGlvbihyb3cpXCI+PGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT48L2E+XG4gICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbVwiIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiB0b29sdGlwPVwie3snbm90aWZpY2F0aW9ucy5QaW4nIHwgdHJhbnNsYXRlfX1cIiBjbyBjb250YWluZXI9XCJib2R5XCIgKGNsaWNrKT1cInRvZ2dsZVBpbihyb3cpXCI+XG4gICAgICAgICAgICA8aSAqbmdJZj1cInJvdy5pc1Bpbm5lZFwiIGNsYXNzPVwiZmEgZmEtdGh1bWItdGFja1wiPjwvaT5cbiAgICAgICAgICAgIDxpICpuZ0lmPVwiIXJvdy5pc1Bpbm5lZFwiIGNsYXNzPVwiZmEgZmEtdGh1bWItdGFjayBmYS1yb3RhdGUtOTBcIj48L2k+XG4gICAgICAgIDwvYT5cbiAgICA8L25nLXRlbXBsYXRlPlxuPC9kaXY+Il19