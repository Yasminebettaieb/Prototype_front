import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirEdtComponent } from './voir-edt.component';

describe('VoirEdtComponent', () => {
  let component: VoirEdtComponent;
  let fixture: ComponentFixture<VoirEdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirEdtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirEdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
