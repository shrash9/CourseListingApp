import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule] 
})
export class AppComponent {
  title = 'course-listing-app';

  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('userToken');
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
