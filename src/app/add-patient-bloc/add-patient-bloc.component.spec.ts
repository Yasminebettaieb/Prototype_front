import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientBlocComponent } from './add-patient-bloc.component';

describe('AddPatientBlocComponent', () => {
  let component: AddPatientBlocComponent;
  let fixture: ComponentFixture<AddPatientBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPatientBlocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
