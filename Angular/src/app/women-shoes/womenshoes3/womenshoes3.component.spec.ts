import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshoes3Component } from './womenshoes3.component';

describe('Womenshoes3Component', () => {
  let component: Womenshoes3Component;
  let fixture: ComponentFixture<Womenshoes3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshoes3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshoes3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
