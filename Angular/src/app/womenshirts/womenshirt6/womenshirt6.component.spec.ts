import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshirt6Component } from './womenshirt6.component';

describe('Womenshirt6Component', () => {
  let component: Womenshirt6Component;
  let fixture: ComponentFixture<Womenshirt6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshirt6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshirt6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
