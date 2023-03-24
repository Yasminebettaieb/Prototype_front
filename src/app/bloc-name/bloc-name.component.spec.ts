import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocNameComponent } from './bloc-name.component';

describe('BlocNameComponent', () => {
  let component: BlocNameComponent;
  let fixture: ComponentFixture<BlocNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
