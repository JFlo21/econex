import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshoes5Component } from './womenshoes5.component';

describe('Womenshoes5Component', () => {
  let component: Womenshoes5Component;
  let fixture: ComponentFixture<Womenshoes5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshoes5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshoes5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
