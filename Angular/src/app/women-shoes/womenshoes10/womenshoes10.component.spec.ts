import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshoes10Component } from './womenshoes10.component';

describe('Womenshoes10Component', () => {
  let component: Womenshoes10Component;
  let fixture: ComponentFixture<Womenshoes10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshoes10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshoes10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
