import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEdtComponent } from './update-edt.component';

describe('UpdateEdtComponent', () => {
  let component: UpdateEdtComponent;
  let fixture: ComponentFixture<UpdateEdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEdtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
