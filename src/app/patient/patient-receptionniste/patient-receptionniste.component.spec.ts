import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientReceptionnisteComponent } from './patient-receptionniste.component';

describe('PatientReceptionnisteComponent', () => {
  let component: PatientReceptionnisteComponent;
  let fixture: ComponentFixture<PatientReceptionnisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientReceptionnisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientReceptionnisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
