import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoctorAssociationComponent } from './admin-doctor-association.component';

describe('AdminDoctorAssociationComponent', () => {
  let component: AdminDoctorAssociationComponent;
  let fixture: ComponentFixture<AdminDoctorAssociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDoctorAssociationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDoctorAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
