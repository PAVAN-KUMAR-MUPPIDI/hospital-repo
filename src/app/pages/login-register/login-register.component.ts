import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  isLogin: boolean = true;

  loginData = {
    email: '',
    password: ''
  };

  registerData = {
    email: '',
    password: ''
  };

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  onLogin() {
    console.log('Login data:', this.loginData);
  }

  onRegister() {
    console.log('Register data:', this.registerData);
  }
}
