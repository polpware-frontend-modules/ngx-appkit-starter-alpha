/*
 * Public API Surface of ngx-appkit-starter-alpha
 */
export * from './lib/models/notification.model';
export * from './lib/models/role.model';
export * from './lib/models/user-edit.model';
export * from './lib/models/enums';
export * from './lib/models/user-login.model';
export * from './lib/services/animations';
export * from './lib/services/configuration.service-provider';
export * from './lib/services/theme-manager.provider';
export * from './lib/services/account.service';
export * from './lib/services/notification.service';
export * from './lib/services/translation.service-provider';
export * from './lib/services/app-title.service';
export * from './lib/services/account-endpoint.service';
export * from './lib/services/alert.service-provider';
export * from './lib/services/notification-endpoint.service';
export * from './lib/services/local-storage-manager.service-provider';
export * from './lib/pipes/group-by.pipe';
export * from './lib/directives/autofocus.directive';
export * from './lib/directives/bootstrap-datepicker.directive';
export * from './lib/directives/bootstrap-select.directive';
export * from './lib/directives/bootstrap-tab.directive';
export * from './lib/directives/bootstrap-toggle.directive';
export * from './lib/directives/equal-validator.directive';
export * from './lib/directives/last-element.directive';
export * from './lib/components/notifications-viewer/notifications-viewer.component';
export * from './lib/components/users-management/users-management.component';
export * from './lib/components/user-preferences/user-preferences.component';
export * from './lib/components/roles-management/roles-management.component';
export * from './lib/components/role-editor/role-editor.component';
export * from './lib/components/user-info/user-info.component';
export * from './lib/components/todo-demo/todo-demo.component';
export * from './lib/components/search-box/search-box.component';
export * from './lib/components/statistics-demo/statistics-demo.component';
export * from './lib/pages/settings/settings.component';
export * from './lib/pages/not-found/not-found.component';
export * from './lib/pages/login/login.component';
export * from './lib/ngx-appkit-starter-alpha.module';
export * from './lib/dependency.module';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEvIiwic291cmNlcyI6WyJwdWJsaWMtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBRUgsY0FBYyxpQ0FBaUMsQ0FBQztBQUNoRCxjQUFjLHlCQUF5QixDQUFDO0FBQ3hDLGNBQWMsOEJBQThCLENBQUM7QUFDN0MsY0FBYyxvQkFBb0IsQ0FBQztBQUNuQyxjQUFjLCtCQUErQixDQUFDO0FBRTlDLGNBQWMsMkJBQTJCLENBQUM7QUFDMUMsY0FBYywrQ0FBK0MsQ0FBQztBQUM5RCxjQUFjLHVDQUF1QyxDQUFDO0FBQ3RELGNBQWMsZ0NBQWdDLENBQUM7QUFDL0MsY0FBYyxxQ0FBcUMsQ0FBQztBQUNwRCxjQUFjLDZDQUE2QyxDQUFDO0FBQzVELGNBQWMsa0NBQWtDLENBQUM7QUFDakQsY0FBYyx5Q0FBeUMsQ0FBQztBQUN4RCxjQUFjLHVDQUF1QyxDQUFDO0FBQ3RELGNBQWMsOENBQThDLENBQUM7QUFDN0QsY0FBYyx1REFBdUQsQ0FBQztBQUV0RSxjQUFjLDJCQUEyQixDQUFDO0FBRTFDLGNBQWMsc0NBQXNDLENBQUM7QUFDckQsY0FBYyxpREFBaUQsQ0FBQztBQUNoRSxjQUFjLDZDQUE2QyxDQUFDO0FBQzVELGNBQWMsMENBQTBDLENBQUM7QUFDekQsY0FBYyw2Q0FBNkMsQ0FBQztBQUM1RCxjQUFjLDRDQUE0QyxDQUFDO0FBQzNELGNBQWMseUNBQXlDLENBQUM7QUFFeEQsY0FBYyxzRUFBc0UsQ0FBQztBQUNyRixjQUFjLDhEQUE4RCxDQUFDO0FBQzdFLGNBQWMsOERBQThELENBQUM7QUFDN0UsY0FBYyw4REFBOEQsQ0FBQztBQUM3RSxjQUFjLG9EQUFvRCxDQUFDO0FBQ25FLGNBQWMsZ0RBQWdELENBQUM7QUFDL0QsY0FBYyxnREFBZ0QsQ0FBQztBQUMvRCxjQUFjLGtEQUFrRCxDQUFDO0FBQ2pFLGNBQWMsNERBQTRELENBQUM7QUFFM0UsY0FBYyx5Q0FBeUMsQ0FBQztBQUN4RCxjQUFjLDJDQUEyQyxDQUFDO0FBQzFELGNBQWMsbUNBQW1DLENBQUM7QUFFbEQsY0FBYyx1Q0FBdUMsQ0FBQztBQUN0RCxjQUFjLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFB1YmxpYyBBUEkgU3VyZmFjZSBvZiBuZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGFcbiAqL1xuXG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbHMvbm90aWZpY2F0aW9uLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy9yb2xlLm1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy91c2VyLWVkaXQubW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWxzL2VudW1zJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVscy91c2VyLWxvZ2luLm1vZGVsJztcblxuZXhwb3J0ICogZnJvbSAnLi9saWIvc2VydmljZXMvYW5pbWF0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UtcHJvdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvc2VydmljZXMvdGhlbWUtbWFuYWdlci5wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9zZXJ2aWNlcy9hY2NvdW50LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvc2VydmljZXMvbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvc2VydmljZXMvdHJhbnNsYXRpb24uc2VydmljZS1wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9zZXJ2aWNlcy9hcHAtdGl0bGUuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9zZXJ2aWNlcy9hY2NvdW50LWVuZHBvaW50LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvc2VydmljZXMvYWxlcnQuc2VydmljZS1wcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9zZXJ2aWNlcy9ub3RpZmljYXRpb24tZW5kcG9pbnQuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9zZXJ2aWNlcy9sb2NhbC1zdG9yYWdlLW1hbmFnZXIuc2VydmljZS1wcm92aWRlcic7XG5cbmV4cG9ydCAqIGZyb20gJy4vbGliL3BpcGVzL2dyb3VwLWJ5LnBpcGUnO1xuXG5leHBvcnQgKiBmcm9tICcuL2xpYi9kaXJlY3RpdmVzL2F1dG9mb2N1cy5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvZGlyZWN0aXZlcy9ib290c3RyYXAtZGF0ZXBpY2tlci5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvZGlyZWN0aXZlcy9ib290c3RyYXAtc2VsZWN0LmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9kaXJlY3RpdmVzL2Jvb3RzdHJhcC10YWIuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2RpcmVjdGl2ZXMvYm9vdHN0cmFwLXRvZ2dsZS5kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvZGlyZWN0aXZlcy9lcXVhbC12YWxpZGF0b3IuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2RpcmVjdGl2ZXMvbGFzdC1lbGVtZW50LmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCAqIGZyb20gJy4vbGliL2NvbXBvbmVudHMvbm90aWZpY2F0aW9ucy12aWV3ZXIvbm90aWZpY2F0aW9ucy12aWV3ZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2NvbXBvbmVudHMvdXNlcnMtbWFuYWdlbWVudC91c2Vycy1tYW5hZ2VtZW50LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9jb21wb25lbnRzL3VzZXItcHJlZmVyZW5jZXMvdXNlci1wcmVmZXJlbmNlcy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvY29tcG9uZW50cy9yb2xlcy1tYW5hZ2VtZW50L3JvbGVzLW1hbmFnZW1lbnQuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2NvbXBvbmVudHMvcm9sZS1lZGl0b3Ivcm9sZS1lZGl0b3IuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2NvbXBvbmVudHMvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvY29tcG9uZW50cy90b2RvLWRlbW8vdG9kby1kZW1vLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9jb21wb25lbnRzL3NlYXJjaC1ib3gvc2VhcmNoLWJveC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvY29tcG9uZW50cy9zdGF0aXN0aWNzLWRlbW8vc3RhdGlzdGljcy1kZW1vLmNvbXBvbmVudCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vbGliL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9wYWdlcy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuXG5leHBvcnQgKiBmcm9tICcuL2xpYi9uZ3gtYXBwa2l0LXN0YXJ0ZXItYWxwaGEubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2RlcGVuZGVuY3kubW9kdWxlJztcbiJdfQ==