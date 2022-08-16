import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshirts1Component } from './womenshirts1.component';

describe('Womenshirts1Component', () => {
  let component: Womenshirts1Component;
  let fixture: ComponentFixture<Womenshirts1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshirts1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshirts1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
