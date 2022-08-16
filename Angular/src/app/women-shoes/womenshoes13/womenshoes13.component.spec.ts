import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshoes13Component } from './womenshoes13.component';

describe('Womenshoes13Component', () => {
  let component: Womenshoes13Component;
  let fixture: ComponentFixture<Womenshoes13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshoes13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshoes13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
