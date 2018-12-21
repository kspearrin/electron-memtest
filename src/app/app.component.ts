import {
    Component,
    ComponentFactoryResolver,
    NgZone,
    OnInit,
    SecurityContext,
    Type,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    styles: [],
    template: `
        <router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
