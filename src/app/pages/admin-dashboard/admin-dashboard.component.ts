import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  imports: [NgFor],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  // Simulated admin hospital data
  hospitalName = 'Apollo Hospital';
  location = 'Hyderabad';

  doctors = [
    { name: 'Dr. Anjali Mehta', department: 'Cardiology', consultations: 10, revenue: 8000 },
    { name: 'Dr. Raj Khanna', department: 'Orthopedics', consultations: 8, revenue: 6400 },
    { name: 'Dr. Priya Singh', department: 'Pediatrics', consultations: 6, revenue: 5400 }
  ];

get departmentKeys(): string[] {
  return Object.keys(this.revenueByDepartment);
}

  get totalConsultations(): number {
    return this.doctors.reduce((acc, doc) => acc + doc.consultations, 0);
  }

  get totalRevenue(): number {
    return this.doctors.reduce((acc, doc) => acc + doc.revenue, 0);
  }

  get revenueByDepartment(): { [key: string]: number } {
    const deptRevenue: { [key: string]: number } = {};
    this.doctors.forEach(doc => {
      deptRevenue[doc.department] = (deptRevenue[doc.department] || 0) + doc.revenue;
    });
    return deptRevenue;
  }
}
