import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { LookupComponent } from './lookup/lookup.component';
import { LocalDBService } from './localdb.service';
import { BldgResultComponent } from './bldgresult/bldgresult.component';
import { BldgtransportService } from './bldgtransport.service';
import { LoginComponent } from './login/login.component';
import {LogonService} from './logon.service';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [

  { path: 'welcome', component: WelcomeComponent },
  { path: 'lookup', component: LookupComponent },
  { path: 'bldgresult', component: BldgResultComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newuser', component: NewUserComponent },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: '/welcome',

  }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    LookupComponent,
    BldgResultComponent,
    LoginComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [LocalDBService, BldgtransportService, LogonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
