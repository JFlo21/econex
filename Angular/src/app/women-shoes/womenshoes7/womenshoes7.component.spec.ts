import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshoes7Component } from './womenshoes7.component';

describe('Womenshoes7Component', () => {
  let component: Womenshoes7Component;
  let fixture: ComponentFixture<Womenshoes7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshoes7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshoes7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
