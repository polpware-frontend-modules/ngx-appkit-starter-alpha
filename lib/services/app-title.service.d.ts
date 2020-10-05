import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class AppTitleService {
    private titleService;
    private router;
    sub: Subscription;
    appName: string;
    constructor(titleService: Title, router: Router);
    static ɵfac: i0.ɵɵFactoryDef<AppTitleService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AppTitleService>;
}
