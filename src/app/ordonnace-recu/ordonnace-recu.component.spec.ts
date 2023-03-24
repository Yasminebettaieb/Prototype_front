import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdonnaceRecuComponent } from './ordonnace-recu.component';

describe('OrdonnaceRecuComponent', () => {
  let component: OrdonnaceRecuComponent;
  let fixture: ComponentFixture<OrdonnaceRecuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdonnaceRecuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdonnaceRecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
