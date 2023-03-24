import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpchoicesComponent } from './view-empchoices.component';

describe('ViewEmpchoicesComponent', () => {
  let component: ViewEmpchoicesComponent;
  let fixture: ComponentFixture<ViewEmpchoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmpchoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEmpchoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
