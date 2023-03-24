import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvReceptionnisteComponent } from './rdv-receptionniste.component';

describe('RdvReceptionnisteComponent', () => {
  let component: RdvReceptionnisteComponent;
  let fixture: ComponentFixture<RdvReceptionnisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvReceptionnisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvReceptionnisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
