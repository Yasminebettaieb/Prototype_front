import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDiagnostiqueComponent } from './view-diagnostique.component';

describe('ViewDiagnostiqueComponent', () => {
  let component: ViewDiagnostiqueComponent;
  let fixture: ComponentFixture<ViewDiagnostiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDiagnostiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDiagnostiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
