import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewordonnanceComponent } from './viewordonnance.component';

describe('ViewordonnanceComponent', () => {
  let component: ViewordonnanceComponent;
  let fixture: ComponentFixture<ViewordonnanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewordonnanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewordonnanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
