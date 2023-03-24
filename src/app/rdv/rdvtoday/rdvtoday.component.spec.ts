import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvtodayComponent } from './rdvtoday.component';

describe('RdvtodayComponent', () => {
  let component: RdvtodayComponent;
  let fixture: ComponentFixture<RdvtodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvtodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvtodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
