import { Injectable } from '@angular/core';
import { LocalStoreManagerServiceAbstractProvider } from '@polpware/ngx-appkit-contracts-alpha';
import * as i0 from "@angular/core";
import * as i1 from "@polpware/ngx-appkit-services-alpha";
export class LocalStoreManagerProvider extends LocalStoreManagerServiceAbstractProvider {
    constructor(impl) {
        super();
        this.impl = impl;
    }
    get() {
        return this.impl;
    }
}
/** @nocollapse */ LocalStoreManagerProvider.ɵfac = function LocalStoreManagerProvider_Factory(t) { return new (t || LocalStoreManagerProvider)(i0.ɵɵinject(i1.LocalStoreManager)); };
/** @nocollapse */ LocalStoreManagerProvider.ɵprov = i0.ɵɵdefineInjectable({ token: LocalStoreManagerProvider, factory: LocalStoreManagerProvider.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LocalStoreManagerProvider, [{
        type: Injectable
    }], function () { return [{ type: i1.LocalStoreManager }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RvcmFnZS1tYW5hZ2VyLnNlcnZpY2UtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWFwcGtpdC1zdGFydGVyLWFscGhhLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2xvY2FsLXN0b3JhZ2UtbWFuYWdlci5zZXJ2aWNlLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNILHdDQUF3QyxFQUUzQyxNQUFNLHNDQUFzQyxDQUFDOzs7QUFPOUMsTUFBTSxPQUFPLHlCQUEwQixTQUFRLHdDQUF3QztJQUVuRixZQUE2QixJQUF1QjtRQUNoRCxLQUFLLEVBQUUsQ0FBQztRQURpQixTQUFJLEdBQUosSUFBSSxDQUFtQjtJQUVwRCxDQUFDO0lBRUQsR0FBRztRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDOztxSEFSUSx5QkFBeUI7b0ZBQXpCLHlCQUF5QixXQUF6Qix5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQURyQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICAgIExvY2FsU3RvcmVNYW5hZ2VyU2VydmljZUFic3RyYWN0UHJvdmlkZXIsXG4gICAgSUxvY2FsU3RvcmVNYW5hZ2VyQ29udHJhY3Rcbn0gZnJvbSAnQHBvbHB3YXJlL25neC1hcHBraXQtY29udHJhY3RzLWFscGhhJztcblxuaW1wb3J0IHtcbiAgICBMb2NhbFN0b3JlTWFuYWdlclxufSBmcm9tICdAcG9scHdhcmUvbmd4LWFwcGtpdC1zZXJ2aWNlcy1hbHBoYSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JlTWFuYWdlclByb3ZpZGVyIGV4dGVuZHMgTG9jYWxTdG9yZU1hbmFnZXJTZXJ2aWNlQWJzdHJhY3RQcm92aWRlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGltcGw6IExvY2FsU3RvcmVNYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZ2V0KCk6IElMb2NhbFN0b3JlTWFuYWdlckNvbnRyYWN0IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1wbDtcbiAgICB9XG59XG4iXX0=