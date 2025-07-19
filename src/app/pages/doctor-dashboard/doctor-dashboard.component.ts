import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-dashboard',
  imports: [],
  templateUrl: './doctor-dashboard.component.html',
  styleUrl: './doctor-dashboard.component.css'
})
export class DoctorDashboardComponent {

  // Dummy consultation data for a doctor
  consultations = [
    {
      hospital: 'Apollo Hospital',
      date: '2025-07-15',
      fee: 800
    },
    {
      hospital: 'CityCare Clinic',
      date: '2025-07-16',
      fee: 600
    },
    {
      hospital: 'Apollo Hospital',
      date: '2025-07-18',
      fee: 800
    }
  ];

  // Calculate total consultations
  get totalConsultations(): number {
    return this.consultations.length;
  }

  // Calculate total earnings (Doctor gets 60%)
  get totalEarnings(): number {
    return this.consultations.reduce((acc, c) => acc + (c.fee * 0.6), 0);
  }

  // Group earnings per hospital
  get earningsByHospital(): { [key: string]: number } {
    const earnings: { [key: string]: number } = {};
    this.consultations.forEach(c => {
      const earned = c.fee * 0.6;
      if (earnings[c.hospital]) {
        earnings[c.hospital] += earned;
      } else {
        earnings[c.hospital] = earned;
      }
    });
    return earnings;
  }
}
