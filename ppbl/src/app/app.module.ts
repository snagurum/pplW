import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PwdComponent } from './pwd/pwd.component';
import { PasswordsComponent } from './passwords/passwords.component';
import { SiteService } from './service/site.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PwdComponent,
    PasswordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
