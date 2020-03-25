/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-appkit-starter-alpha.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AlertServiceAbstractProvider, ThemeManagerAbstractProvider, ConfigurationServiceAbstractProvider, LocalStoreManagerServiceAbstractProvider, TranslationServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import { DependencyModule } from './dependency.module';
import { AlertServiceProvider } from './services/alert.service-provider';
import { ThemeManagerProvider } from './services/theme-manager.provider';
import { ConfigurationServiceProvider } from './services/configuration.service-provider';
import { AppTitleService } from './services/app-title.service';
import { TranslationServiceProvider } from './services/translation.service-provider';
import { NotificationService } from './services/notification.service';
import { NotificationEndpoint } from './services/notification-endpoint.service';
import { AccountService } from './services/account.service';
import { AccountEndpoint } from './services/account-endpoint.service';
import { LocalStoreManagerProvider } from './services/local-storage-manager.service-provider';
import { EqualValidator } from './directives/equal-validator.directive';
import { LastElementDirective } from './directives/last-element.directive';
import { AutofocusDirective } from './directives/autofocus.directive';
import { BootstrapTabDirective } from './directives/bootstrap-tab.directive';
import { BootstrapToggleDirective } from './directives/bootstrap-toggle.directive';
import { BootstrapSelectDirective } from './directives/bootstrap-select.directive';
import { BootstrapDatepickerDirective } from './directives/bootstrap-datepicker.directive';
import { GroupByPipe } from './pipes/group-by.pipe';
import { TodoDemoComponent } from './components/todo-demo/todo-demo.component';
import { StatisticsDemoComponent } from './components/statistics-demo/statistics-demo.component';
import { NotificationsViewerComponent } from './components/notifications-viewer/notifications-viewer.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserPreferencesComponent } from './components/user-preferences/user-preferences.component';
import { UsersManagementComponent } from './components/users-management/users-management.component';
import { RolesManagementComponent } from './components/roles-management/roles-management.component';
import { RoleEditorComponent } from './components/role-editor/role-editor.component';
import { LoginComponent } from './pages/login/login.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
var NgxAppkitStarterAlphaModule = /** @class */ (function () {
    function NgxAppkitStarterAlphaModule(parentModule) {
        if (parentModule) {
            throw new Error('NgxAppkitStarterAlphaModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @return {?}
     */
    NgxAppkitStarterAlphaModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: NgxAppkitStarterAlphaModule,
            providers: []
        };
    };
    NgxAppkitStarterAlphaModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        EqualValidator,
                        LastElementDirective,
                        AutofocusDirective,
                        BootstrapTabDirective,
                        BootstrapToggleDirective,
                        BootstrapSelectDirective,
                        BootstrapDatepickerDirective,
                        GroupByPipe,
                        UsersManagementComponent,
                        UserInfoComponent,
                        UserPreferencesComponent,
                        RolesManagementComponent,
                        RoleEditorComponent,
                        NotificationsViewerComponent,
                        SearchBoxComponent,
                        StatisticsDemoComponent,
                        TodoDemoComponent,
                        LoginComponent,
                        SettingsComponent,
                        NotFoundComponent
                    ],
                    imports: [
                        DependencyModule
                    ],
                    exports: [
                        EqualValidator,
                        LastElementDirective,
                        AutofocusDirective,
                        BootstrapTabDirective,
                        BootstrapToggleDirective,
                        BootstrapSelectDirective,
                        BootstrapDatepickerDirective,
                        GroupByPipe,
                        UsersManagementComponent,
                        UserInfoComponent,
                        UserPreferencesComponent,
                        RolesManagementComponent,
                        RoleEditorComponent,
                        NotificationsViewerComponent,
                        SearchBoxComponent,
                        StatisticsDemoComponent,
                        TodoDemoComponent,
                        LoginComponent,
                        SettingsComponent,
                        NotFoundComponent
                    ],
                    providers: [
                        // Services
                        AppTitleService,
                        NotificationService,
                        NotificationEndpoint,
                        AccountService,
                        AccountEndpoint,
                        AlertServiceProvider,
                        ThemeManagerProvider,
                        ConfigurationServiceProvider,
                        LocalStoreManagerProvider,
                        TranslationServiceProvider,
                        { provide: AlertServiceAbstractProvider, useClass: AlertServiceProvider },
                        { provide: ThemeManagerAbstractProvider, useClass: ThemeManagerProvider },
                        { provide: ConfigurationServiceAbstractProvider, useClass: ConfigurationServiceProvider },
                        { provide: LocalStoreManagerServiceAbstractProvider, useClass: LocalStoreManagerProvider },
                        { provide: TranslationServiceAbstractProvider, useClass: TranslationServiceProvider }
                    ],
                    entryComponents: [
                        LoginComponent
                    ]
                },] }
    ];
    /** @nocollapse */
    NgxAppkitStarterAlphaModule.ctorParameters = function () { return [
        { type: NgxAppkitStarterAlphaModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return NgxAppkitStarterAlphaModule;
}());
export { NgxAppkitStarterAlphaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDa0IsUUFBUSxFQUM3QixRQUFRLEVBQUUsUUFBUSxFQUNyQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0gsNEJBQTRCLEVBQzVCLDRCQUE0QixFQUM1QixvQ0FBb0MsRUFDcEMsd0NBQXdDLEVBQ3hDLGtDQUFrQyxFQUNyQyxNQUFNLHNDQUFzQyxDQUFDO0FBRTlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRTlGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN4RSxPQUFPLEVB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QkFBNEI7d0JBQzVCLHlCQUF5Qjt3QkFDekIsMEJBQTBCO3dCQUUxQixFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUU7d0JBQ3pFLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRTt3QkFDekUsRUFBRSxPQUFPLEVBQUUsb0NBQW9DLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFFO3dCQUN6RixFQUFFLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxRQUFRLEVBQUUseUJBQXlCLEVBQUU7d0JBQzFGLEVBQUUsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLFFBQVEsRUFBRSwwQkFBMEIsRUFBRTtxQkFDeEY7b0JBQ0QsZUFBZSxFQUFFO3dCQUNiLGNBQWM7cUJBQ2pCO2lCQUNKOzs7O2dCQUVxRCwyQkFBMkIsdUJBQWhFLFFBQVEsWUFBSSxRQUFROztJQWFyQyxrQ0FBQztDQUFBLEFBN0ZELElBNkZDO1NBZFksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSxcbiAgICBPcHRpb25hbCwgU2tpcFNlbGZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgQWxlcnRTZXJ2aWNlQWJzdHJhY3RQcm92aWRlcixcbiAgICBUaGVtZU1hbmFnZXJBYnN0cmFjdFByb3ZpZGVyLFxuICAgIENvbmZpZ3VyYXRpb25TZXJ2aWNlQWJzdHJhY3RQcm92aWRlcixcbiAgICBMb2NhbFN0b3JlTWFuYWdlclNlcnZpY2VBYnN0cmFjdFByb3ZpZGVyLFxuICAgIFRyYW5zbGF0aW9uU2VydmljZUFic3RyYWN0UHJvdmlkZXJcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW1wb3J0IHsgRGVwZW5kZW5jeU1vZHVsZSB9IGZyb20gJy4vZGVwZW5kZW5jeS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBbGVydFNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4vc2VydmljZXMvYWxlcnQuc2VydmljZS1wcm92aWRlcic7XG5pbXBvcnQgeyBUaGVtZU1hbmFnZXJQcm92aWRlciB9IGZyb20gJy4vc2VydmljZXMvdGhlbWUtbWFuYWdlci5wcm92aWRlcic7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UtcHJvdmlkZXInO1xuaW1wb3J0IHsgQXBwVGl0bGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hcHAtdGl0bGUuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2VQcm92aWRlciB9IGZyb20gJy4vc2VydmljZXMvdHJhbnNsYXRpb24uc2VydmljZS1wcm92aWRlcic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25FbmRwb2ludCB9IGZyb20gJy4vc2VydmljZXMvbm90aWZpY2F0aW9uLWVuZHBvaW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FjY291bnQuc2VydmljZSc7XG5pbXBvcnQgeyBBY2NvdW50RW5kcG9pbnQgfSBmcm9tICcuL3NlcnZpY2VzL2FjY291bnQtZW5kcG9pbnQuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JlTWFuYWdlclByb3ZpZGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9sb2NhbC1zdG9yYWdlLW1hbmFnZXIuc2VydmljZS1wcm92aWRlcic7XG5cbmltcG9ydCB7IEVxdWFsVmFsaWRhdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2VxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTGFzdEVsZW1lbnREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbGFzdC1lbGVtZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBdXRvZm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvYXV0b2ZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCb290c3RyYXBUYWJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvYm9vdHN0cmFwLXRhYi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQm9vdHN0cmFwVG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Jvb3RzdHJhcC10b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJvb3RzdHJhcFNlbGVjdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9ib290c3RyYXAtc2VsZWN0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCb290c3RyYXBEYXRlcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCB7IEdyb3VwQnlQaXBlIH0gZnJvbSAnLi9waXBlcy9ncm91cC1ieS5waXBlJztcblxuaW1wb3J0IHsgVG9kb0RlbW9Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9kby1kZW1vL3RvZG8tZGVtby5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RhdGlzdGljc0RlbW9Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3RhdGlzdGljcy1kZW1vL3N0YXRpc3RpY3MtZGVtby5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1ZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ub3RpZmljYXRpb25zLXZpZXdlci9ub3RpZmljYXRpb25zLXZpZXdlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoQm94Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlckluZm9Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlclByZWZlcmVuY2VzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VzZXItcHJlZmVyZW5jZXMvdXNlci1wcmVmZXJlbmNlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVXNlcnNNYW5hZ2VtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VzZXJzLW1hbmFnZW1lbnQvdXNlcnMtbWFuYWdlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm9sZXNNYW5hZ2VtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JvbGVzLW1hbmFnZW1lbnQvcm9sZXMtbWFuYWdlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm9sZUVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yb2xlLWVkaXRvci9yb2xlLWVkaXRvci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTm90Rm91bmRDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcblxuICAgICAgICBFcXVhbFZhbGlkYXRvcixcbiAgICAgICAgTGFzdEVsZW1lbnREaXJlY3RpdmUsXG4gICAgICAgIEF1dG9mb2N1c0RpcmVjdGl2ZSxcbiAgICAgICAgQm9vdHN0cmFwVGFiRGlyZWN0aXZlLFxuICAgICAgICBCb290c3RyYXBUb2dnbGVEaXJlY3RpdmUsXG4gICAgICAgIEJvb3RzdHJhcFNlbGVjdERpcmVjdGl2ZSxcbiAgICAgICAgQm9vdHN0cmFwRGF0ZXBpY2tlckRpcmVjdGl2ZSxcblxuICAgICAgICBHcm91cEJ5UGlwZSxcblxuICAgICAgICBVc2Vyc01hbmFnZW1lbnRDb21wb25lbnQsXG4gICAgICAgIFVzZXJJbmZvQ29tcG9uZW50LFxuICAgICAgICBVc2VyUHJlZmVyZW5jZXNDb21wb25lbnQsXG4gICAgICAgIFJvbGVzTWFuYWdlbWVudENvbXBvbmVudCxcbiAgICAgICAgUm9sZUVkaXRvckNvbXBvbmVudCxcbiAgICAgICAgTm90aWZpY2F0aW9uc1ZpZXdlckNvbXBvbmVudCxcbiAgICAgICAgU2VhcmNoQm94Q29tcG9uZW50LFxuICAgICAgICBTdGF0aXN0aWNzRGVtb0NvbXBvbmVudCxcbiAgICAgICAgVG9kb0RlbW9Db21wb25lbnQsXG5cbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIFNldHRpbmdzQ29tcG9uZW50LFxuICAgICAgICBOb3RGb3VuZENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBEZXBlbmRlbmN5TW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEVxdWFsVmFsaWRhdG9yLFxuICAgICAgICBMYXN0RWxlbWVudERpcmVjdGl2ZSxcbiAgICAgICAgQXV0b2ZvY3VzRGlyZWN0aXZlLFxuICAgICAgICBCb290c3RyYXBUYWJEaXJlY3RpdmUsXG4gICAgICAgIEJvb3RzdHJhcFRvZ2dsZURpcmVjdGl2ZSxcbiAgICAgICAgQm9vdHN0cmFwU2VsZWN0RGlyZWN0aXZlLFxuICAgICAgICBCb290c3RyYXBEYXRlcGlja2VyRGlyZWN0aXZlLFxuXG4gICAgICAgIEdyb3VwQnlQaXBlLFxuXG4gICAgICAgIFVzZXJzTWFuYWdlbWVudENvbXBvbmVudCxcbiAgICAgICAgVXNlckluZm9Db21wb25lbnQsXG4gICAgICAgIFVzZXJQcmVmZXJlbmNlc0NvbXBvbmVudCxcbiAgICAgICAgUm9sZXNNYW5hZ2VtZW50Q29tcG9uZW50LFxuICAgICAgICBSb2xlRWRpdG9yQ29tcG9uZW50LFxuICAgICAgICBOb3RpZmljYXRpb25zVmlld2VyQ29tcG9uZW50LFxuICAgICAgICBTZWFyY2hCb3hDb21wb25lbnQsXG4gICAgICAgIFN0YXRpc3RpY3NEZW1vQ29tcG9uZW50LFxuICAgICAgICBUb2RvRGVtb0NvbXBvbmVudCxcblxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgU2V0dGluZ3NDb21wb25lbnQsXG4gICAgICAgIE5vdEZvdW5kQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLy8gU2VydmljZXNcbiAgICAgICAgQXBwVGl0bGVTZXJ2aWNlLFxuICAgICAgICBOb3RpZmljYXRpb25TZXJ2aWNlLFxuICAgICAgICBOb3RpZmljYXRpb25FbmRwb2ludCxcbiAgICAgICAgQWNjb3VudFNlcnZpY2UsXG4gICAgICAgIEFjY291bnRFbmRwb2ludCxcblxuICAgICAgICBBbGVydFNlcnZpY2VQcm92aWRlcixcbiAgICAgICAgVGhlbWVNYW5hZ2VyUHJvdmlkZXIsXG4gICAgICAgIENvbmZpZ3VyYXRpb25TZXJ2aWNlUHJvdmlkZXIsXG4gICAgICAgIExvY2FsU3RvcmVNYW5hZ2VyUHJvdmlkZXIsXG4gICAgICAgIFRyYW5zbGF0aW9uU2VydmljZVByb3ZpZGVyLFxuXG4gICAgICAgIHsgcHJvdmlkZTogQWxlcnRTZXJ2aWNlQWJzdHJhY3RQcm92aWRlciwgdXNlQ2xhc3M6IEFsZXJ0U2VydmljZVByb3ZpZGVyIH0sXG4gICAgICAgIHsgcHJvdmlkZTogVGhlbWVNYW5hZ2VyQWJzdHJhY3RQcm92aWRlciwgdXNlQ2xhc3M6IFRoZW1lTWFuYWdlclByb3ZpZGVyIH0sXG4gICAgICAgIHsgcHJvdmlkZTogQ29uZmlndXJhdGlvblNlcnZpY2VBYnN0cmFjdFByb3ZpZGVyLCB1c2VDbGFzczogQ29uZmlndXJhdGlvblNlcnZpY2VQcm92aWRlciB9LFxuICAgICAgICB7IHByb3ZpZGU6IExvY2FsU3RvcmVNYW5hZ2VyU2VydmljZUFic3RyYWN0UHJvdmlkZXIsIHVzZUNsYXNzOiBMb2NhbFN0b3JlTWFuYWdlclByb3ZpZGVyIH0sXG4gICAgICAgIHsgcHJvdmlkZTogVHJhbnNsYXRpb25TZXJ2aWNlQWJzdHJhY3RQcm92aWRlciwgdXNlQ2xhc3M6IFRyYW5zbGF0aW9uU2VydmljZVByb3ZpZGVyIH1cbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBMb2dpbkNvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4QXBwa2l0U3RhcnRlckFscGhhTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IE5neEFwcGtpdFN0YXJ0ZXJBbHBoYU1vZHVsZSkge1xuICAgICAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ05neEFwcGtpdFN0YXJ0ZXJBbHBoYU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogTmd4QXBwa2l0U3RhcnRlckFscGhhTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==