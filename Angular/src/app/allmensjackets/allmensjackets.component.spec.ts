import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmensjacketsComponent } from './allmensjackets.component';

describe('AllmensjacketsComponent', () => {
  let component: AllmensjacketsComponent;
  let fixture: ComponentFixture<AllmensjacketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmensjacketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmensjacketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
