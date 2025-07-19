import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { PatientDashboardComponent } from './pages/patient-dashboard/patient-dashboard.component';
import { SearchDoctorComponent } from './pages/search-doctor/search-doctor.component';
import { BookAppointmentComponent } from './pages/book-appointment/book-appointment.component';
import { AppointmentHistoryComponent } from './pages/appointment-history/appointment-history.component';
import { DoctorDashboardComponent } from './pages/doctor-dashboard/doctor-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login-register', pathMatch: 'full' },
  { path: 'login-register', component: LoginRegisterComponent },
  { path: 'patient-dashboard', component: PatientDashboardComponent },
  { path: 'search-doctor', component: SearchDoctorComponent },
  { path: 'book-appointment', component: BookAppointmentComponent },
  { path: 'appointment-history', component: AppointmentHistoryComponent  },
  { path: 'doctor-dashboard', component: DoctorDashboardComponent  },
  { path: 'admin-dashboard', component: AdminDashboardComponent  },
];

export const appRouter = provideRouter(routes);
