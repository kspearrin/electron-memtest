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
        let usernameBuffer = Buffer.from(this.username, 'utf8');
        let passwordBuffer = Buffer.from(this.password, 'utf8');

        // Do some Node stuff with the buffers...

        // Now done with the buffers. Clearing the properties like this
        // doesn't seem to help.
        usernameBuffer = null;
        passwordBuffer = null;

        this.router.navigate(['/account']);
    }
}
