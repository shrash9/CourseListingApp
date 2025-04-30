import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app/app.component';

const routes: Route[] = [
  {
    path: 'login',
    loadComponent: () =>
      import('./app/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./app/signup/signup.component').then(m => m.SignupComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./app/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'courses/:id',
    loadComponent: () =>
      import('./app/course-details/course-details.component').then(m => m.CourseDetailsComponent)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule)
  ]
});
