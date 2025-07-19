import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-appointment-history',
  imports : [NgIf,NgFor,NavbarComponent,FooterComponent,FormsModule],
  templateUrl: './appointment-history.component.html'
})
export class AppointmentHistoryComponent {
  appointments = [
    {
      date: '2025-07-01',
      doctor: 'Dr. Anjali Mehta',
      hospital: 'Apollo Hospital',
      department: 'Cardiology',
      fee: 500
    },
    {
      date: '2025-07-05',
      doctor: 'Dr. Rajesh Khanna',
      hospital: 'CityCare Clinic',
      department: 'Orthopedics',
      fee: 700
    }
  ];
}
