import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
export declare class AppTitleService {
    private titleService;
    private router;
    sub: Subscription;
    appName: string;
    constructor(titleService: Title, router: Router);
}
