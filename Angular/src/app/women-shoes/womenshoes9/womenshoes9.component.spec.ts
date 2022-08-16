import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshoes9Component } from './womenshoes9.component';

describe('Womenshoes9Component', () => {
  let component: Womenshoes9Component;
  let fixture: ComponentFixture<Womenshoes9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshoes9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshoes9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
