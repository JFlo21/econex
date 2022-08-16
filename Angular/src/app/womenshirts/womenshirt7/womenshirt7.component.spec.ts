import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshirt7Component } from './womenshirt7.component';

describe('Womenshirt7Component', () => {
  let component: Womenshirt7Component;
  let fixture: ComponentFixture<Womenshirt7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshirt7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshirt7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
