import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app/app.component';

const routes: Route[] = [
  {
    path: 'login',
    loadComponent: () =>
      import('./app/login/login.component').then(m => m.LoginComponent)
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
});
