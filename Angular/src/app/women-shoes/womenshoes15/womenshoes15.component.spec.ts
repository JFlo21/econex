import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshoes15Component } from './womenshoes15.component';

describe('Womenshoes15Component', () => {
  let component: Womenshoes15Component;
  let fixture: ComponentFixture<Womenshoes15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshoes15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshoes15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
