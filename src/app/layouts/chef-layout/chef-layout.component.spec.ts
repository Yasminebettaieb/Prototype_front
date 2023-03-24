import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefLayoutComponent } from './chef-layout.component';

describe('AdminLayoutComponent', () => {
  let component: ChefLayoutComponent;
  let fixture: ComponentFixture<ChefLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChefLayoutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
