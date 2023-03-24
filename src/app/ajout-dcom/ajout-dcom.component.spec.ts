import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDcomComponent } from './ajout-dcom.component';

describe('AjoutDcomComponent', () => {
  let component: AjoutDcomComponent;
  let fixture: ComponentFixture<AjoutDcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutDcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
