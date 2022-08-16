import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshoes8Component } from './womenshoes8.component';

describe('Womenshoes8Component', () => {
  let component: Womenshoes8Component;
  let fixture: ComponentFixture<Womenshoes8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshoes8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshoes8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
