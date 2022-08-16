import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshoes6Component } from './womenshoes6.component';

describe('Womenshoes6Component', () => {
  let component: Womenshoes6Component;
  let fixture: ComponentFixture<Womenshoes6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshoes6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshoes6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
