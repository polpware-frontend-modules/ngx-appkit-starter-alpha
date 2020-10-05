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
import * as i0 from "@angular/core";
export class NgxAppkitStarterAlphaModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('NgxAppkitStarterAlphaModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot() {
        return {
            ngModule: NgxAppkitStarterAlphaModule,
            providers: []
        };
    }
}
/** @nocollapse */ NgxAppkitStarterAlphaModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxAppkitStarterAlphaModule });
/** @nocollapse */ NgxAppkitStarterAlphaModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxAppkitStarterAlphaModule_Factory(t) { return new (t || NgxAppkitStarterAlphaModule)(i0.ɵɵinject(NgxAppkitStarterAlphaModule, 12)); }, providers: [
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
    ], imports: [[
            DependencyModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxAppkitStarterAlphaModule, { declarations: [EqualValidator,
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
        NotFoundComponent], imports: [DependencyModule], exports: [EqualValidator,
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
        NotFoundComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxAppkitStarterAlphaModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], function () { return [{ type: NgxAppkitStarterAlphaModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJsaWIvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ2tCLFFBQVEsRUFDN0IsUUFBUSxFQUFFLFFBQVEsRUFDckIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNILDRCQUE0QixFQUM1Qiw0QkFBNEIsRUFDNUIsb0NBQW9DLEVBQ3BDLHdDQUF3QyxFQUN4QyxrQ0FBa0MsRUFDckMsTUFBTSxzQ0FBc0MsQ0FBQztBQUU5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUU5RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9C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QixpQkFBaUI7aUJBQ3BCO2dCQUNELFNBQVMsRUFBRTtvQkFDUCxXQUFXO29CQUNYLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixvQkFBb0I7b0JBQ3BCLGNBQWM7b0JBQ2QsZUFBZTtvQkFFZixvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIsNEJBQTRCO29CQUM1Qix5QkFBeUI7b0JBQ3pCLDBCQUEwQjtvQkFFMUIsRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFO29CQUN6RSxFQUFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUU7b0JBQ3pFLEVBQUUsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBRTtvQkFDekYsRUFBRSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFFO29CQUMxRixFQUFFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxRQUFRLEVBQUUsMEJBQTBCLEVBQUU7aUJBQ3hGO2dCQUNELGVBQWUsRUFBRTtvQkFDYixjQUFjO2lCQUNqQjthQUNKO3NDQUVxRCwyQkFBMkI7c0JBQWhFLFFBQVE7O3NCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLFxuICAgIE9wdGlvbmFsLCBTa2lwU2VsZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgICBBbGVydFNlcnZpY2VBYnN0cmFjdFByb3ZpZGVyLFxuICAgIFRoZW1lTWFuYWdlckFic3RyYWN0UHJvdmlkZXIsXG4gICAgQ29uZmlndXJhdGlvblNlcnZpY2VBYnN0cmFjdFByb3ZpZGVyLFxuICAgIExvY2FsU3RvcmVNYW5hZ2VyU2VydmljZUFic3RyYWN0UHJvdmlkZXIsXG4gICAgVHJhbnNsYXRpb25TZXJ2aWNlQWJzdHJhY3RQcm92aWRlclxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1jb250cmFjdHMtYWxwaGEnO1xuXG5pbXBvcnQgeyBEZXBlbmRlbmN5TW9kdWxlIH0gZnJvbSAnLi9kZXBlbmRlbmN5Lm1vZHVsZSc7XG5cbmltcG9ydCB7IEFsZXJ0U2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9hbGVydC5zZXJ2aWNlLXByb3ZpZGVyJztcbmltcG9ydCB7IFRoZW1lTWFuYWdlclByb3ZpZGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy90aGVtZS1tYW5hZ2VyLnByb3ZpZGVyJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25TZXJ2aWNlUHJvdmlkZXIgfSBmcm9tICcuL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZS1wcm92aWRlcic7XG5pbXBvcnQgeyBBcHBUaXRsZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FwcC10aXRsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZVByb3ZpZGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy90cmFuc2xhdGlvbi5zZXJ2aWNlLXByb3ZpZGVyJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkVuZHBvaW50IH0gZnJvbSAnLi9zZXJ2aWNlcy9ub3RpZmljYXRpb24tZW5kcG9pbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYWNjb3VudC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjY291bnRFbmRwb2ludCB9IGZyb20gJy4vc2VydmljZXMvYWNjb3VudC1lbmRwb2ludC5zZXJ2aWNlJztcbmltcG9ydCB7IExvY2FsU3RvcmVNYW5hZ2VyUHJvdmlkZXIgfSBmcm9tICcuL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2UtbWFuYWdlci5zZXJ2aWNlLXByb3ZpZGVyJztcblxuaW1wb3J0IHsgRXF1YWxWYWxpZGF0b3IgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMYXN0RWxlbWVudERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9sYXN0LWVsZW1lbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEF1dG9mb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9hdXRvZm9jdXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJvb3RzdHJhcFRhYkRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9ib290c3RyYXAtdGFiLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBCb290c3RyYXBUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvYm9vdHN0cmFwLXRvZ2dsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQm9vdHN0cmFwU2VsZWN0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2Jvb3RzdHJhcC1zZWxlY3QuZGlyZWN0aXZlJztcbmltcG9ydCB7IEJvb3RzdHJhcERhdGVwaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvYm9vdHN0cmFwLWRhdGVwaWNrZXIuZGlyZWN0aXZlJztcblxuaW1wb3J0IHsgR3JvdXBCeVBpcGUgfSBmcm9tICcuL3BpcGVzL2dyb3VwLWJ5LnBpcGUnO1xuXG5pbXBvcnQgeyBUb2RvRGVtb0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90b2RvLWRlbW8vdG9kby1kZW1vLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGF0aXN0aWNzRGVtb0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdGF0aXN0aWNzLWRlbW8vc3RhdGlzdGljcy1kZW1vLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zVmlld2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25vdGlmaWNhdGlvbnMtdmlld2VyL25vdGlmaWNhdGlvbnMtdmlld2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hCb3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2VhcmNoLWJveC9zZWFyY2gtYm94LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VySW5mb0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyUHJlZmVyZW5jZXNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXNlci1wcmVmZXJlbmNlcy91c2VyLXByZWZlcmVuY2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2Vyc01hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXNlcnMtbWFuYWdlbWVudC91c2Vycy1tYW5hZ2VtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb2xlc01hbmFnZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcm9sZXMtbWFuYWdlbWVudC9yb2xlcy1tYW5hZ2VtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb2xlRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JvbGUtZWRpdG9yL3JvbGUtZWRpdG9yLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4vcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuXG4gICAgICAgIEVxdWFsVmFsaWRhdG9yLFxuICAgICAgICBMYXN0RWxlbWVudERpcmVjdGl2ZSxcbiAgICAgICAgQXV0b2ZvY3VzRGlyZWN0aXZlLFxuICAgICAgICBCb290c3RyYXBUYWJEaXJlY3RpdmUsXG4gICAgICAgIEJvb3RzdHJhcFRvZ2dsZURpcmVjdGl2ZSxcbiAgICAgICAgQm9vdHN0cmFwU2VsZWN0RGlyZWN0aXZlLFxuICAgICAgICBCb290c3RyYXBEYXRlcGlja2VyRGlyZWN0aXZlLFxuXG4gICAgICAgIEdyb3VwQnlQaXBlLFxuXG4gICAgICAgIFVzZXJzTWFuYWdlbWVudENvbXBvbmVudCxcbiAgICAgICAgVXNlckluZm9Db21wb25lbnQsXG4gICAgICAgIFVzZXJQcmVmZXJlbmNlc0NvbXBvbmVudCxcbiAgICAgICAgUm9sZXNNYW5hZ2VtZW50Q29tcG9uZW50LFxuICAgICAgICBSb2xlRWRpdG9yQ29tcG9uZW50LFxuICAgICAgICBOb3RpZmljYXRpb25zVmlld2VyQ29tcG9uZW50LFxuICAgICAgICBTZWFyY2hCb3hDb21wb25lbnQsXG4gICAgICAgIFN0YXRpc3RpY3NEZW1vQ29tcG9uZW50LFxuICAgICAgICBUb2RvRGVtb0NvbXBvbmVudCxcblxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgU2V0dGluZ3NDb21wb25lbnQsXG4gICAgICAgIE5vdEZvdW5kQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIERlcGVuZGVuY3lNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgRXF1YWxWYWxpZGF0b3IsXG4gICAgICAgIExhc3RFbGVtZW50RGlyZWN0aXZlLFxuICAgICAgICBBdXRvZm9jdXNEaXJlY3RpdmUsXG4gICAgICAgIEJvb3RzdHJhcFRhYkRpcmVjdGl2ZSxcbiAgICAgICAgQm9vdHN0cmFwVG9nZ2xlRGlyZWN0aXZlLFxuICAgICAgICBCb290c3RyYXBTZWxlY3REaXJlY3RpdmUsXG4gICAgICAgIEJvb3RzdHJhcERhdGVwaWNrZXJEaXJlY3RpdmUsXG5cbiAgICAgICAgR3JvdXBCeVBpcGUsXG5cbiAgICAgICAgVXNlcnNNYW5hZ2VtZW50Q29tcG9uZW50LFxuICAgICAgICBVc2VySW5mb0NvbXBvbmVudCxcbiAgICAgICAgVXNlclByZWZlcmVuY2VzQ29tcG9uZW50LFxuICAgICAgICBSb2xlc01hbmFnZW1lbnRDb21wb25lbnQsXG4gICAgICAgIFJvbGVFZGl0b3JDb21wb25lbnQsXG4gICAgICAgIE5vdGlmaWNhdGlvbnNWaWV3ZXJDb21wb25lbnQsXG4gICAgICAgIFNlYXJjaEJveENvbXBvbmVudCxcbiAgICAgICAgU3RhdGlzdGljc0RlbW9Db21wb25lbnQsXG4gICAgICAgIFRvZG9EZW1vQ29tcG9uZW50LFxuXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxuICAgICAgICBTZXR0aW5nc0NvbXBvbmVudCxcbiAgICAgICAgTm90Rm91bmRDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICAvLyBTZXJ2aWNlc1xuICAgICAgICBBcHBUaXRsZVNlcnZpY2UsXG4gICAgICAgIE5vdGlmaWNhdGlvblNlcnZpY2UsXG4gICAgICAgIE5vdGlmaWNhdGlvbkVuZHBvaW50LFxuICAgICAgICBBY2NvdW50U2VydmljZSxcbiAgICAgICAgQWNjb3VudEVuZHBvaW50LFxuXG4gICAgICAgIEFsZXJ0U2VydmljZVByb3ZpZGVyLFxuICAgICAgICBUaGVtZU1hbmFnZXJQcm92aWRlcixcbiAgICAgICAgQ29uZmlndXJhdGlvblNlcnZpY2VQcm92aWRlcixcbiAgICAgICAgTG9jYWxTdG9yZU1hbmFnZXJQcm92aWRlcixcbiAgICAgICAgVHJhbnNsYXRpb25TZXJ2aWNlUHJvdmlkZXIsXG5cbiAgICAgICAgeyBwcm92aWRlOiBBbGVydFNlcnZpY2VBYnN0cmFjdFByb3ZpZGVyLCB1c2VDbGFzczogQWxlcnRTZXJ2aWNlUHJvdmlkZXIgfSxcbiAgICAgICAgeyBwcm92aWRlOiBUaGVtZU1hbmFnZXJBYnN0cmFjdFByb3ZpZGVyLCB1c2VDbGFzczogVGhlbWVNYW5hZ2VyUHJvdmlkZXIgfSxcbiAgICAgICAgeyBwcm92aWRlOiBDb25maWd1cmF0aW9uU2VydmljZUFic3RyYWN0UHJvdmlkZXIsIHVzZUNsYXNzOiBDb25maWd1cmF0aW9uU2VydmljZVByb3ZpZGVyIH0sXG4gICAgICAgIHsgcHJvdmlkZTogTG9jYWxTdG9yZU1hbmFnZXJTZXJ2aWNlQWJzdHJhY3RQcm92aWRlciwgdXNlQ2xhc3M6IExvY2FsU3RvcmVNYW5hZ2VyUHJvdmlkZXIgfSxcbiAgICAgICAgeyBwcm92aWRlOiBUcmFuc2xhdGlvblNlcnZpY2VBYnN0cmFjdFByb3ZpZGVyLCB1c2VDbGFzczogVHJhbnNsYXRpb25TZXJ2aWNlUHJvdmlkZXIgfVxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIExvZ2luQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hBcHBraXRTdGFydGVyQWxwaGFNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogTmd4QXBwa2l0U3RhcnRlckFscGhhTW9kdWxlKSB7XG4gICAgICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnTmd4QXBwa2l0U3RhcnRlckFscGhhTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBOZ3hBcHBraXRTdGFydGVyQWxwaGFNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19