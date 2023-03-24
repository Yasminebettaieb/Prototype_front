import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeAdministateurComponent } from './conge-administateur.component';

describe('CongeAdministateurComponent', () => {
  let component: CongeAdministateurComponent;
  let fixture: ComponentFixture<CongeAdministateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongeAdministateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeAdministateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
