import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-book-appointment',
  imports : [FormsModule,NavbarComponent,FooterComponent],
  templateUrl: './book-appointment.component.html'
})
export class BookAppointmentComponent {
  doctors = ['Dr. Anjali Mehta', 'Dr. Rajesh Khanna'];
  timeSlots = ['10:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'];

  appointment = {
    doctor: '',
    date: '',
    time: '',
    fee: null
  };

  success = false;

  onBook() {
    if (this.appointment.doctor && this.appointment.date && this.appointment.time && this.appointment.fee) {
      console.log('Booking details:', this.appointment);
      this.success = true;
    }
  }
}
