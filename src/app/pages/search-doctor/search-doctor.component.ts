import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-search-doctor',
  standalone: true,
  imports: [CommonModule, FormsModule,NavbarComponent,FooterComponent,], 
  templateUrl: './search-doctor.component.html',
})
export class SearchDoctorComponent {

  search = {
    specialization: '',
    hospital: '',
    date: ''
  };

  searchAttempted = false;

  specializations = ['Cardiology', 'Orthopedics', 'Pediatrics'];
  hospitals = ['Apollo Hospital', 'CityCare Clinic'];

  doctors = [
    {
      name: 'Dr. Anjali Mehta',
      specialization: 'Cardiology',
      hospital: 'Apollo Hospital',
      date: '2025-07-21',
      time: '10:00 AM',
      fee: 500
    },
    {
      name: 'Dr. Rajesh Khanna',
      specialization: 'Orthopedics',
      hospital: 'CityCare Clinic',
      date: '2025-07-21',
      time: '02:00 PM',
      fee: 700
    }
  ];

  filteredDoctors: any[] = [];


  onSearch() {
    this.searchAttempted = true;
    this.filteredDoctors = this.doctors.filter(d =>
      d.specialization === this.search.specialization &&
      d.hospital === this.search.hospital &&
      d.date === this.search.date
    );
  }
}
