import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeChefserviceComponent } from './conge-chefservice.component';

describe('CongeChefserviceComponent', () => {
  let component: CongeChefserviceComponent;
  let fixture: ComponentFixture<CongeChefserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongeChefserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeChefserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
