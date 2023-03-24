import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionnisteComponent } from './receptionniste.component';

describe('ReceptionnisteComponent', () => {
  let component: ReceptionnisteComponent;
  let fixture: ComponentFixture<ReceptionnisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionnisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionnisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
