import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
})
export class LoginComponent {
    password: string;
    username: string;

    constructor(private router: Router) {
    }

    submit() {
        // Clearing the properties like this doesn't seem to help
        // this.username = null;
        // this.password = null;

        this.router.navigate(['/account']);
    }
}
