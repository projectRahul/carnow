import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { NotifierModule } from "angular-notifier";

/**Service **/
import { RegisterloginService } from './registerlogin.service';
import { CookieService } from 'ngx-cookie-service';
import { LogoutComponent } from './logout.component';
/******/
import { AppAccountModule } from './account/app-account.module';
import { PnfComponent } from './pnf/pnf.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderFooterComponent,
    LogoutComponent,
    PnfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotifierModule,  
    AppAccountModule  
  ],
  providers: [RegisterloginService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
