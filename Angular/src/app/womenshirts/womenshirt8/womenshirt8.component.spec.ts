import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshirt8Component } from './womenshirt8.component';

describe('Womenshirt8Component', () => {
  let component: Womenshirt8Component;
  let fixture: ComponentFixture<Womenshirt8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshirt8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshirt8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
