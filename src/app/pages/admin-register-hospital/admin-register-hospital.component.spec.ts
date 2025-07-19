import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegisterHospitalComponent } from './admin-register-hospital.component';

describe('AdminRegisterHospitalComponent', () => {
  let component: AdminRegisterHospitalComponent;
  let fixture: ComponentFixture<AdminRegisterHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRegisterHospitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRegisterHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
