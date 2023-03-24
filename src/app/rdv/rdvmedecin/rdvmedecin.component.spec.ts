import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvmedecinComponent } from './rdvmedecin.component';

describe('RdvmedecinComponent', () => {
  let component: RdvmedecinComponent;
  let fixture: ComponentFixture<RdvmedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdvmedecinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvmedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
