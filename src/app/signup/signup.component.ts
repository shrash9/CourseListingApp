import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  errorMessage = '';
  successMessage = '';

  constructor(private router: Router, private http: HttpClient) {}

  checkUserExists(email: string): Observable<any> {
    return this.http.post('http://localhost:3000/api/check-user-exists', { email });
  }

  onSubmit(): void {
    this.errorMessage = '';
    this.successMessage = '';

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      return;
    }

    this.checkUserExists(this.email).subscribe(
      (response) => {
        const user = { fullName: this.fullName, email: this.email, password: this.password };

        this.http.post('http://localhost:3000/api/register', user).subscribe(
          (res) => {
            this.successMessage = 'User registered successfully';

            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 3000);
          },
          (err) => {
            console.error('Registration error:', err);
            this.errorMessage = err.error.message || 'Error registering user. Please try again.';
          }
        );
      },
      (error) => {
        if (error.status === 400) {
          this.errorMessage = 'User already exists';
        } else {
          console.error('User check error:', error);
          this.errorMessage = 'Something went wrong. Please try again later.';
        }
      }
    );
  }
}
