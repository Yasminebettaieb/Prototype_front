import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceptionnisteLayoutComponent } from './receptionniste-layout.component';
describe('ReceptionnisteLayoutComponent', () => {
  let component: ReceptionnisteLayoutComponent;
  let fixture: ComponentFixture<ReceptionnisteLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReceptionnisteLayoutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionnisteLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
