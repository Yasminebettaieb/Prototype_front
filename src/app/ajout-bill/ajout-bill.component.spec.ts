import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutBillComponent } from './ajout-bill.component';

describe('AjoutBillComponent', () => {
  let component: AjoutBillComponent;
  let fixture: ComponentFixture<AjoutBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
