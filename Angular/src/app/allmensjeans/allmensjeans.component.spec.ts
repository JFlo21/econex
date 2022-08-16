import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmensjeansComponent } from './allmensjeans.component';

describe('AllmensjeansComponent', () => {
  let component: AllmensjeansComponent;
  let fixture: ComponentFixture<AllmensjeansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmensjeansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmensjeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
