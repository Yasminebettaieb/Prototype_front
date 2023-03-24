import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordviewerComponent } from './wordviewer.component';

describe('WordviewerComponent', () => {
  let component: WordviewerComponent;
  let fixture: ComponentFixture<WordviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
