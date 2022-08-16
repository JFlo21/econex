import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshoes11Component } from './womenshoes11.component';

describe('Womenshoes11Component', () => {
  let component: Womenshoes11Component;
  let fixture: ComponentFixture<Womenshoes11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshoes11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshoes11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
