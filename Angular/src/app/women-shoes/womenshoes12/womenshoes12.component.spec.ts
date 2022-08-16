import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshoes12Component } from './womenshoes12.component';

describe('Womenshoes12Component', () => {
  let component: Womenshoes12Component;
  let fixture: ComponentFixture<Womenshoes12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshoes12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshoes12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
