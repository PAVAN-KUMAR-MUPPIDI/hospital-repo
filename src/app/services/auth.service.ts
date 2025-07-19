import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:3000/patients';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.get<any[]>(`${this.baseUrl}?email=${email}&password=${password}`);
  }

  register(email: string, password: string) {
    return this.http.post<any>(this.baseUrl, { email, password });
  }

  setSession(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }

  isLoggedIn() {
    return !!localStorage.getItem('user');
  }

  logout() {
    localStorage.removeItem('user');
  }
}
