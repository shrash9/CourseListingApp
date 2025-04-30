import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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

  onSubmit(): void {
    console.log('Signing up with', this.fullName, this.email);
    alert(`Signed up ${this.fullName} (${this.email})`);
  }
}
