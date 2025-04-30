import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Router }  from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    this.router.navigate(['/login']);
  }
}
