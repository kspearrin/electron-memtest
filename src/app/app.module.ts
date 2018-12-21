import 'core-js';
import 'zone.js/dist/zone';

import { AppRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AccountComponent } from './pages/account.component';
import { LoginComponent } from './pages/login.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        AccountComponent,
        LoginComponent,
    ],
    entryComponents: [
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
