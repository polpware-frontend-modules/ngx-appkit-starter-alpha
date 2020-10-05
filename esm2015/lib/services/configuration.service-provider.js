import { Injectable } from '@angular/core';
import { ConfigurationServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-appkit-services-alpha";
export class ConfigurationServiceProvider extends ConfigurationServiceAbstractProvider {
    constructor(impl) {
        super();
        this.impl = impl;
    }
    get() {
        return this.impl;
    }
}
/** @nocollapse */ ConfigurationServiceProvider.ɵfac = function ConfigurationServiceProvider_Factory(t) { return new (t || ConfigurationServiceProvider)(i0.ɵɵinject(i1.ConfigurationService)); };
/** @nocollapse */ ConfigurationServiceProvider.ɵprov = i0.ɵɵdefineInjectable({ token: ConfigurationServiceProvider, factory: ConfigurationServiceProvider.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ConfigurationServiceProvider, [{
        type: Injectable
    }], function () { return [{ type: i1.ConfigurationService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1hcHBraXQtc3RhcnRlci1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0gsb0NBQW9DLEVBRXZDLE1BQU0sc0NBQXNDLENBQUM7OztBQU85QyxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsb0NBQW9DO0lBRWxGLFlBQTZCLElBQTBCO1FBQ25ELEtBQUssRUFBRSxDQUFDO1FBRGlCLFNBQUksR0FBSixJQUFJLENBQXNCO0lBRXZELENBQUM7SUFFRCxHQUFHO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7OzJIQVJRLDRCQUE0Qjt1RkFBNUIsNEJBQTRCLFdBQTVCLDRCQUE0QjtrREFBNUIsNEJBQTRCO2NBRHhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gICAgQ29uZmlndXJhdGlvblNlcnZpY2VBYnN0cmFjdFByb3ZpZGVyLFxuICAgIElDb25maWd1cmF0aW9uU2VydmljZUNvbnRyYWN0XG59IGZyb20gJ0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYSc7XG5cbmltcG9ydCB7XG4gICAgQ29uZmlndXJhdGlvblNlcnZpY2Vcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtc2VydmljZXMtYWxwaGEnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvblNlcnZpY2VQcm92aWRlciBleHRlbmRzIENvbmZpZ3VyYXRpb25TZXJ2aWNlQWJzdHJhY3RQcm92aWRlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGltcGw6IENvbmZpZ3VyYXRpb25TZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0KCk6IElDb25maWd1cmF0aW9uU2VydmljZUNvbnRyYWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1wbDtcbiAgICB9XG59XG4iXX0=