import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshirts2Component } from './womenshirts2.component';

describe('Womenshirts2Component', () => {
  let component: Womenshirts2Component;
  let fixture: ComponentFixture<Womenshirts2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshirts2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshirts2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
