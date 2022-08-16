import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshoes2Component } from './womenshoes2.component';

describe('Womenshoes2Component', () => {
  let component: Womenshoes2Component;
  let fixture: ComponentFixture<Womenshoes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshoes2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshoes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
