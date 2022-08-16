import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshoes14Component } from './womenshoes14.component';

describe('Womenshoes14Component', () => {
  let component: Womenshoes14Component;
  let fixture: ComponentFixture<Womenshoes14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshoes14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshoes14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
