import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiographieComponent } from './radiographie.component';

describe('RadiographieComponent', () => {
  let component: RadiographieComponent;
  let fixture: ComponentFixture<RadiographieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiographieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiographieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
