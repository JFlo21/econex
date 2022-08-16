import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshoes4Component } from './womenshoes4.component';

describe('Womenshoes4Component', () => {
  let component: Womenshoes4Component;
  let fixture: ComponentFixture<Womenshoes4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshoes4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshoes4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
