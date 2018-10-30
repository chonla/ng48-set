import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BnkGirlsComponent } from './components/bnk-girls/bnk-girls.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { BnkFormComponent } from './components/bnk-form/bnk-form.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { EditComponent } from './components/edit/edit.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Route[] = [
  {
    'path': '',
    'redirectTo': '/members',
    'pathMatch': 'full'
  },
  {
    'path': 'members',
    'component': BnkGirlsComponent
  },
  {
    'path': 'instagram/:id',
    'component': InstagramComponent
  },
  {
    'path': 'form',
    'component': BnkFormComponent,
    'canActivate': [AuthGuard]
  },
  {
    'path': 'login',
    'component': LoginComponent
  },
  {
    'path': 'dashboard',
    'component': DashboardComponent,
    'canActivate': [AuthGuard]
  },
  {
    'path': 'edit/:id',
    'component': EditComponent,
    'canActivate': [AuthGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BnkGirlsComponent,
    InstagramComponent,
    BnkFormComponent,
    LoginComponent,
    DashboardComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
