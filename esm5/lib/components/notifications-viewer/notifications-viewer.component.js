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
var _c0 = ["statusHeaderTemplate"];
var _c1 = ["statusTemplate"];
var _c2 = ["dateTemplate"];
var _c3 = ["contentHeaderTemplate"];
var _c4 = ["contenBodytTemplate"];
var _c5 = ["actionsTemplate"];
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
    var row_r12 = ctx.row;
    var value_r13 = ctx.value;
    var ctx_r5 = i0.ɵɵnextContext();
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
    var row_r14 = ctx.row;
    var value_r15 = ctx.value;
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
    var row_r16 = ctx.row;
    var value_r17 = ctx.value;
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
    var _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵlistener("click", function NotificationsViewerComponent_ng_template_12_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r22); var row_r18 = ctx.row; var ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.deleteNotification(row_r18); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "i", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 10);
    i0.ɵɵlistener("click", function NotificationsViewerComponent_ng_template_12_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r22); var row_r18 = ctx.row; var ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.togglePin(row_r18); });
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵtemplate(5, NotificationsViewerComponent_ng_template_12_i_5_Template, 1, 0, "i", 11);
    i0.ɵɵtemplate(6, NotificationsViewerComponent_ng_template_12_i_6_Template, 1, 0, "i", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r18 = ctx.row;
    i0.ɵɵpropertyInterpolate("tooltip", i0.ɵɵpipeBind1(1, 4, "notifications.Delete"));
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("tooltip", i0.ɵɵpipeBind1(4, 6, "notifications.Pin"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", row_r18.isPinned);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r18.isPinned);
} }
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
    NotificationsViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isViewOnly) {
            this.columns = [
                { prop: 'date', cellTemplate: this.dateTemplate, width: 100, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
                { prop: 'header', cellTemplate: this.contentHeaderTemplate, width: 200, resizeable: false, sortable: false, draggable: false },
            ];
        }
        else {
            var gT = function (key) { return _this.translationService.getTranslation(key); };
            this.columns = [
                { prop: '', name: '', width: 10, headerTemplate: this.statusHeaderTemplate, cellTemplate: this.statusTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false },
                { prop: 'date', name: gT('notifications.Date'), cellTemplate: this.dateTemplate, width: 30 },
                { prop: 'body', name: gT('notifications.Notification'), cellTemplate: this.contenBodytTemplate, width: 500 },
                { name: '', width: 80, cellTemplate: this.actionsTemplate, resizeable: false, canAutoResize: false, sortable: false, draggable: false }
            ];
        }
        this.initDataLoading();
    };
    NotificationsViewerComponent.prototype.ngOnDestroy = function () {
        if (this.dataLoadingSubscription) {
            this.dataLoadingSubscription.unsubscribe();
        }
    };
    NotificationsViewerComponent.prototype.initDataLoading = function () {
        var _this = this;
        if (this.isViewOnly && this.notificationService.recentNotifications) {
            this.rows = this.processResults(this.notificationService.recentNotifications);
            return;
        }
        this.loadingIndicator = true;
        var dataLoadTask = this.isViewOnly ? this.notificationService.getNewNotifications() : this.notificationService.getNewNotificationsPeriodically();
        this.dataLoadingSubscription = dataLoadTask
            .subscribe(function (notifications) {
            _this.loadingIndicator = false;
            _this.dataLoadingConsecutiveFailurs = 0;
            _this.rows = _this.processResults(notifications);
        }, function (error) {
            _this.loadingIndicator = false;
            _this.alertService.showMessage('Load Error', 'Loading new notifications from the server failed!', MessageSeverity.warn);
            _this.alertService.logError(error);
            if (_this.dataLoadingConsecutiveFailurs++ < 5) {
                setTimeout(function () { return _this.initDataLoading(); }, 5000);
            }
            else {
                _this.alertService.showStickyMessage('Load Error', 'Loading new notifications from the server failed!', MessageSeverity.error);
            }
        });
        if (this.isViewOnly) {
            this.dataLoadingSubscription = null;
        }
    };
    NotificationsViewerComponent.prototype.processResults = function (notifications) {
        if (this.isViewOnly) {
            notifications.sort(function (a, b) {
                return b.date.valueOf() - a.date.valueOf();
            });
        }
        return notifications;
    };
    NotificationsViewerComponent.prototype.getPrintedDate = function (value) {
        if (value) {
            return Utilities.printTimeOnly(value) + ' on ' + Utilities.printDateOnly(value);
        }
    };
    NotificationsViewerComponent.prototype.deleteNotification = function (row) {
        var _this = this;
        this.alertService.showDialog('Are you sure you want to delete the notification \"' + row.header + '\"?', DialogType.confirm, function () { return _this.deleteNotificationHelper(row); });
    };
    NotificationsViewerComponent.prototype.deleteNotificationHelper = function (row) {
        var _this = this;
        this.alertService.startLoadingMessage('Deleting...');
        this.loadingIndicator = true;
        this.notificationService.deleteNotification(row)
            .subscribe(function (results) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.rows = _this.rows.filter(function (item) { return item.id != row.id; });
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.alertService.showStickyMessage('Delete Error', "An error occured whilst deleting the notification.\r\nError: \"" + Utilities.getHttpResponseMessages(error) + "\"", MessageSeverity.error, error);
        });
    };
    NotificationsViewerComponent.prototype.togglePin = function (row) {
        var _this = this;
        var pin = !row.isPinned;
        var opText = pin ? 'Pinning' : 'Unpinning';
        this.alertService.startLoadingMessage(opText + '...');
        this.loadingIndicator = true;
        this.notificationService.pinUnpinNotification(row, pin)
            .subscribe(function (results) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            row.isPinned = pin;
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            _this.loadingIndicator = false;
            _this.alertService.showStickyMessage(opText + ' Error', "An error occured whilst " + opText + " the notification.\r\nError: \"" + Utilities.getHttpResponseMessages(error) + "\"", MessageSeverity.error, error);
        });
    };
    Object.defineProperty(NotificationsViewerComponent.prototype, "canManageNotifications", {
        get: function () {
            return this.accountService.userHasPermission(Permission.manageRolesPermission); // Todo: Consider creating separate permission for notifications
        },
        enumerable: true,
        configurable: true
    });
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
    return NotificationsViewerComponent;
}());
export { NotificationsViewerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL25vdGlmaWNhdGlvbnMtdmlld2VyL25vdGlmaWNhdGlvbnMtdmlld2VyLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL25vdGlmaWNhdGlvbnMtdmlld2VyL25vdGlmaWNhdGlvbnMtdmlld2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdDQUFnQztBQUNoQyw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CLGdDQUFnQztBQUVoQyxPQUFPLEVBQUUsU0FBUyxFQUFrQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVGLE9BQU8sRUFDSCxVQUFVLEVBQWdCLGVBQWUsRUFDekMsU0FBUyxFQUNaLE1BQU0sc0NBQXNDLENBQUM7QUFPOUMsT0FBTyxFQUNILFVBQVUsRUFDYixNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lDTHRCLHVCQUE4Qjs7O0lBSTlCLHVCQUFhOzs7SUFJYiw0QkFDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBTzs7Ozs7SUFGRCx5Q0FBNEI7SUFBQyx5REFBc0M7SUFDckUsZUFDSjtJQURJLGlFQUNKOzs7SUFJQSw0QkFDSTtJQUFBLFlBQ0o7SUFBQSxpQkFBTzs7OztJQUZELHlDQUE0QjtJQUFDLHFDQUF5QjtJQUN4RCxlQUNKO0lBREksMENBQ0o7OztJQUlBLDRCQUNJO0lBQUEsWUFDSjtJQUFBLGlCQUFPOzs7O0lBRkQseUNBQTRCO0lBQUMsdUNBQTJCO0lBQzFELGVBQ0o7SUFESSwwQ0FDSjs7O0lBT0ksd0JBQXFEOzs7SUFDckQsd0JBQW1FOzs7O0lBSHZFLDRCQUF1SjtJQUFsQywyT0FBaUM7O0lBQUMsdUJBQTJCO0lBQUEsaUJBQUk7SUFDdEwsNkJBQ0k7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QUM7YUFDdkQ7O2tCQVVJLEtBQUs7O2tCQUdMLEtBQUs7O2tCQUlMLFNBQVM7bUJBQUMsc0JBQXNCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFHbEQsU0FBUzttQkFBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUc1QyxTQUFTO21CQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUcxQyxTQUFTO21CQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBR25ELFNBQVM7bUJBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFHakQsU0FBUzttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRW1haWw6IGluZm9AZWJlbm1vbm5leS5jb21cbi8vIHd3dy5lYmVubW9ubmV5LmNvbS90ZW1wbGF0ZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgRGlhbG9nVHlwZSwgQWxlcnRDb21tYW5kLCBNZXNzYWdlU2V2ZXJpdHksXG4gICAgVXRpbGl0aWVzXG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgQWxlcnRTZXJ2aWNlLFxuICAgIEFwcFRyYW5zbGF0aW9uU2VydmljZVxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1zZXJ2aWNlcy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgUGVybWlzc2lvblxufSBmcm9tICdAcG9scHdhcmUvbmd4LW9hdXRoMic7XG5cblxuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEFjY291bnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYWNjb3VudC5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9ub3RpZmljYXRpb24ubW9kZWwnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbm90aWZpY2F0aW9ucy12aWV3ZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ub3RpZmljYXRpb25zLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbm90aWZpY2F0aW9ucy12aWV3ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zVmlld2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIGNvbHVtbnM6IGFueVtdID0gW107XG4gICAgcm93czogTm90aWZpY2F0aW9uW10gPSBbXTtcbiAgICBsb2FkaW5nSW5kaWNhdG9yOiBib29sZWFuO1xuXG4gICAgZGF0YUxvYWRpbmdDb25zZWN1dGl2ZUZhaWx1cnMgPSAwO1xuICAgIGRhdGFMb2FkaW5nU3Vic2NyaXB0aW9uOiBhbnk7XG5cblxuICAgIEBJbnB1dCgpXG4gICAgaXNWaWV3T25seTogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgdmVydGljYWxTY3JvbGxiYXIgPSBmYWxzZTtcblxuXG4gICAgQFZpZXdDaGlsZCgnc3RhdHVzSGVhZGVyVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHN0YXR1c0hlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnc3RhdHVzVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIHN0YXR1c1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZCgnZGF0ZVRlbXBsYXRlJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgICBkYXRlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdjb250ZW50SGVhZGVyVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGNvbnRlbnRIZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIEBWaWV3Q2hpbGQoJ2NvbnRlbkJvZHl0VGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGNvbnRlbkJvZHl0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgICBAVmlld0NoaWxkKCdhY3Rpb25zVGVtcGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICAgIGFjdGlvbnNUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWxlcnRTZXJ2aWNlOiBBbGVydFNlcnZpY2UsIHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBBcHBUcmFuc2xhdGlvblNlcnZpY2UsIHByaXZhdGUgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlLCBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UpIHtcbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIGlmICh0aGlzLmlzVmlld09ubHkpIHtcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucyA9IFtcbiAgICAgICAgICAgICAgICB7IHByb3A6ICdkYXRlJywgY2VsbFRlbXBsYXRlOiB0aGlzLmRhdGVUZW1wbGF0ZSwgd2lkdGg6IDEwMCwgcmVzaXplYWJsZTogZmFsc2UsIGNhbkF1dG9SZXNpemU6IGZhbHNlLCBzb3J0YWJsZTogZmFsc2UsIGRyYWdnYWJsZTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICB7IHByb3A6ICdoZWFkZXInLCBjZWxsVGVtcGxhdGU6IHRoaXMuY29udGVudEhlYWRlclRlbXBsYXRlLCB3aWR0aDogMjAwLCByZXNpemVhYmxlOiBmYWxzZSwgc29ydGFibGU6IGZhbHNlLCBkcmFnZ2FibGU6IGZhbHNlIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZ1QgPSAoa2V5OiBzdHJpbmcpID0+IHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldFRyYW5zbGF0aW9uKGtleSk7XG5cbiAgICAgICAgICAgIHRoaXMuY29sdW1ucyA9IFtcbiAgICAgICAgICAgICAgICB7IHByb3A6ICcnLCBuYW1lOiAnJywgd2lkdGg6IDEwLCBoZWFkZXJUZW1wbGF0ZTogdGhpcy5zdGF0dXNIZWFkZXJUZW1wbGF0ZSwgY2VsbFRlbXBsYXRlOiB0aGlzLnN0YXR1c1RlbXBsYXRlLCByZXNpemVhYmxlOiBmYWxzZSwgY2FuQXV0b1Jlc2l6ZTogZmFsc2UsIHNvcnRhYmxlOiBmYWxzZSwgZHJhZ2dhYmxlOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgIHsgcHJvcDogJ2RhdGUnLCBuYW1lOiBnVCgnbm90aWZpY2F0aW9ucy5EYXRlJyksIGNlbGxUZW1wbGF0ZTogdGhpcy5kYXRlVGVtcGxhdGUsIHdpZHRoOiAzMCB9LFxuICAgICAgICAgICAgICAgIHsgcHJvcDogJ2JvZHknLCBuYW1lOiBnVCgnbm90aWZpY2F0aW9ucy5Ob3RpZmljYXRpb24nKSwgY2VsbFRlbXBsYXRlOiB0aGlzLmNvbnRlbkJvZHl0VGVtcGxhdGUsIHdpZHRoOiA1MDAgfSxcbiAgICAgICAgICAgICAgICB7IG5hbWU6ICcnLCB3aWR0aDogODAsIGNlbGxUZW1wbGF0ZTogdGhpcy5hY3Rpb25zVGVtcGxhdGUsIHJlc2l6ZWFibGU6IGZhbHNlLCBjYW5BdXRvUmVzaXplOiBmYWxzZSwgc29ydGFibGU6IGZhbHNlLCBkcmFnZ2FibGU6IGZhbHNlIH1cbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRoaXMuaW5pdERhdGFMb2FkaW5nKCk7XG4gICAgfVxuXG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YUxvYWRpbmdTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YUxvYWRpbmdTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBpbml0RGF0YUxvYWRpbmcoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNWaWV3T25seSAmJiB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UucmVjZW50Tm90aWZpY2F0aW9ucykge1xuICAgICAgICAgICAgdGhpcy5yb3dzID0gdGhpcy5wcm9jZXNzUmVzdWx0cyh0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UucmVjZW50Tm90aWZpY2F0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGRhdGFMb2FkVGFzayA9IHRoaXMuaXNWaWV3T25seSA/IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5nZXROZXdOb3RpZmljYXRpb25zKCkgOiB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UuZ2V0TmV3Tm90aWZpY2F0aW9uc1BlcmlvZGljYWxseSgpO1xuXG4gICAgICAgIHRoaXMuZGF0YUxvYWRpbmdTdWJzY3JpcHRpb24gPSBkYXRhTG9hZFRhc2tcbiAgICAgICAgICAgIC5zdWJzY3JpYmUobm90aWZpY2F0aW9ucyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhTG9hZGluZ0NvbnNlY3V0aXZlRmFpbHVycyA9IDA7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSB0aGlzLnByb2Nlc3NSZXN1bHRzKG5vdGlmaWNhdGlvbnMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dNZXNzYWdlKCdMb2FkIEVycm9yJywgJ0xvYWRpbmcgbmV3IG5vdGlmaWNhdGlvbnMgZnJvbSB0aGUgc2VydmVyIGZhaWxlZCEnLCBNZXNzYWdlU2V2ZXJpdHkud2Fybik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLmxvZ0Vycm9yKGVycm9yKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhTG9hZGluZ0NvbnNlY3V0aXZlRmFpbHVycysrIDwgNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXREYXRhTG9hZGluZygpLCA1MDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdMb2FkIEVycm9yJywgJ0xvYWRpbmcgbmV3IG5vdGlmaWNhdGlvbnMgZnJvbSB0aGUgc2VydmVyIGZhaWxlZCEnLCBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIGlmICh0aGlzLmlzVmlld09ubHkpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YUxvYWRpbmdTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHByb2Nlc3NSZXN1bHRzKG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbltdKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNWaWV3T25seSkge1xuICAgICAgICAgICAgbm90aWZpY2F0aW9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGIuZGF0ZS52YWx1ZU9mKCkgLSBhLmRhdGUudmFsdWVPZigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm90aWZpY2F0aW9ucztcbiAgICB9XG5cblxuXG4gICAgZ2V0UHJpbnRlZERhdGUodmFsdWU6IERhdGUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gVXRpbGl0aWVzLnByaW50VGltZU9ubHkodmFsdWUpICsgJyBvbiAnICsgVXRpbGl0aWVzLnByaW50RGF0ZU9ubHkodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBkZWxldGVOb3RpZmljYXRpb24ocm93OiBOb3RpZmljYXRpb24pIHtcbiAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc2hvd0RpYWxvZygnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgbm90aWZpY2F0aW9uIFxcXCInICsgcm93LmhlYWRlciArICdcXFwiPycsIERpYWxvZ1R5cGUuY29uZmlybSwgKCkgPT4gdGhpcy5kZWxldGVOb3RpZmljYXRpb25IZWxwZXIocm93KSk7XG4gICAgfVxuXG5cbiAgICBkZWxldGVOb3RpZmljYXRpb25IZWxwZXIocm93OiBOb3RpZmljYXRpb24pIHtcblxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKCdEZWxldGluZy4uLicpO1xuICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5kZWxldGVOb3RpZmljYXRpb24ocm93KVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXN1bHRzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdG9wTG9hZGluZ01lc3NhZ2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IHRoaXMucm93cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9IHJvdy5pZCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydFNlcnZpY2Uuc3RvcExvYWRpbmdNZXNzYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnNob3dTdGlja3lNZXNzYWdlKCdEZWxldGUgRXJyb3InLCBgQW4gZXJyb3Igb2NjdXJlZCB3aGlsc3QgZGVsZXRpbmcgdGhlIG5vdGlmaWNhdGlvbi5cXHJcXG5FcnJvcjogXCIke1V0aWxpdGllcy5nZXRIdHRwUmVzcG9uc2VNZXNzYWdlcyhlcnJvcil9XCJgLFxuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNldmVyaXR5LmVycm9yLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICB0b2dnbGVQaW4ocm93OiBOb3RpZmljYXRpb24pIHtcblxuICAgICAgICBjb25zdCBwaW4gPSAhcm93LmlzUGlubmVkO1xuICAgICAgICBjb25zdCBvcFRleHQgPSBwaW4gPyAnUGlubmluZycgOiAnVW5waW5uaW5nJztcblxuICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zdGFydExvYWRpbmdNZXNzYWdlKG9wVGV4dCArICcuLi4nKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nSW5kaWNhdG9yID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2UucGluVW5waW5Ob3RpZmljYXRpb24ocm93LCBwaW4pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdHMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0luZGljYXRvciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgcm93LmlzUGlubmVkID0gcGluO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnRTZXJ2aWNlLnN0b3BMb2FkaW5nTWVzc2FnZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdJbmRpY2F0b3IgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0U2VydmljZS5zaG93U3RpY2t5TWVzc2FnZShvcFRleHQgKyAnIEVycm9yJywgYEFuIGVycm9yIG9jY3VyZWQgd2hpbHN0ICR7b3BUZXh0fSB0aGUgbm90aWZpY2F0aW9uLlxcclxcbkVycm9yOiBcIiR7VXRpbGl0aWVzLmdldEh0dHBSZXNwb25zZU1lc3NhZ2VzKGVycm9yKX1cImAsXG4gICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2V2ZXJpdHkuZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGdldCBjYW5NYW5hZ2VOb3RpZmljYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50U2VydmljZS51c2VySGFzUGVybWlzc2lvbihQZXJtaXNzaW9uLm1hbmFnZVJvbGVzUGVybWlzc2lvbik7IC8vIFRvZG86IENvbnNpZGVyIGNyZWF0aW5nIHNlcGFyYXRlIHBlcm1pc3Npb24gZm9yIG5vdGlmaWNhdGlvbnNcbiAgICB9XG5cbn1cbiIsIjxkaXY+XG4gICAgPG5neC1kYXRhdGFibGUgY2xhc3M9XCJtYXRlcmlhbCBjb2xvcmVkLWhlYWRlciBzbSB0YWJsZS1ob3ZlclwiXG4gICAgICAgICAgICAgICAgICAgW2xvYWRpbmdJbmRpY2F0b3JdPVwibG9hZGluZ0luZGljYXRvclwiXG4gICAgICAgICAgICAgICAgICAgW3Jvd3NdPVwicm93c1wiXG4gICAgICAgICAgICAgICAgICAgW3Jvd0hlaWdodF09XCIzNVwiXG4gICAgICAgICAgICAgICAgICAgW2hlYWRlckhlaWdodF09XCJpc1ZpZXdPbmx5ID8gMCA6IDM1XCJcbiAgICAgICAgICAgICAgICAgICBbZm9vdGVySGVpZ2h0XT1cIjM1XCJcbiAgICAgICAgICAgICAgICAgICBbbGltaXRdPVwiMTBcIlxuICAgICAgICAgICAgICAgICAgIFtjb2x1bW5zXT1cImNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgIFtzY3JvbGxiYXJWXT1cInZlcnRpY2FsU2Nyb2xsYmFyXCJcbiAgICAgICAgICAgICAgICAgICBbY29sdW1uTW9kZV09XCInZm9yY2UnXCI+XG4gICAgPC9uZ3gtZGF0YXRhYmxlPlxuXG4gICAgPG5nLXRlbXBsYXRlICNzdGF0dXNIZWFkZXJUZW1wbGF0ZT5cbiAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1idWxsaG9yblwiPjwvaT5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPG5nLXRlbXBsYXRlICNzdGF0dXNUZW1wbGF0ZT5cbiAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctdGVtcGxhdGUgI2RhdGVUZW1wbGF0ZSBsZXQtcm93PVwicm93XCIgbGV0LXZhbHVlPVwidmFsdWVcIj5cbiAgICAgICAgPHNwYW4gW2NsYXNzLnVucmVhZF09XCIhcm93LmlzUmVhZFwiIGF0dHIudGl0bGU9XCJ7e2dldFByaW50ZWREYXRlKHZhbHVlKX19XCI+XG4gICAgICAgICAgICB7e2dldFByaW50ZWREYXRlKHZhbHVlKX19XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPG5nLXRlbXBsYXRlICNjb250ZW50SGVhZGVyVGVtcGxhdGUgbGV0LXJvdz1cInJvd1wiIGxldC12YWx1ZT1cInZhbHVlXCI+XG4gICAgICAgIDxzcGFuIFtjbGFzcy51bnJlYWRdPVwiIXJvdy5pc1JlYWRcIiBhdHRyLnRpdGxlPVwie3tyb3cuYm9keX19XCI+XG4gICAgICAgICAgICB7e3ZhbHVlfX1cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8bmctdGVtcGxhdGUgI2NvbnRlbkJvZHl0VGVtcGxhdGUgbGV0LXJvdz1cInJvd1wiIGxldC12YWx1ZT1cInZhbHVlXCI+XG4gICAgICAgIDxzcGFuIFtjbGFzcy51bnJlYWRdPVwiIXJvdy5pc1JlYWRcIiBhdHRyLnRpdGxlPVwie3tyb3cuaGVhZGVyfX1cIj5cbiAgICAgICAgICAgIHt7dmFsdWV9fVxuICAgICAgICA8L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuXG4gICAgPG5nLXRlbXBsYXRlICNhY3Rpb25zVGVtcGxhdGUgbGV0LXJvdz1cInJvd1wiPlxuICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tbGluayBidG4tc21cIiBocmVmPVwiamF2YXNjcmlwdDo7XCIgdG9vbHRpcD1cInt7J25vdGlmaWNhdGlvbnMuRGVsZXRlJyB8IHRyYW5zbGF0ZX19XCIgY29udGFpbmVyPVwiYm9keVwiIChjbGljayk9XCJkZWxldGVOb3RpZmljYXRpb24ocm93KVwiPjxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+PC9hPlxuICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tbGluayBidG4tc21cIiBocmVmPVwiamF2YXNjcmlwdDo7XCIgdG9vbHRpcD1cInt7J25vdGlmaWNhdGlvbnMuUGluJyB8IHRyYW5zbGF0ZX19XCIgY28gY29udGFpbmVyPVwiYm9keVwiIChjbGljayk9XCJ0b2dnbGVQaW4ocm93KVwiPlxuICAgICAgICAgICAgPGkgKm5nSWY9XCJyb3cuaXNQaW5uZWRcIiBjbGFzcz1cImZhIGZhLXRodW1iLXRhY2tcIj48L2k+XG4gICAgICAgICAgICA8aSAqbmdJZj1cIiFyb3cuaXNQaW5uZWRcIiBjbGFzcz1cImZhIGZhLXRodW1iLXRhY2sgZmEtcm90YXRlLTkwXCI+PC9pPlxuICAgICAgICA8L2E+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbjwvZGl2PiJdfQ==