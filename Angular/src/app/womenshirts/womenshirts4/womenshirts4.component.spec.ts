import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshirts4Component } from './womenshirts4.component';

describe('Womenshirts4Component', () => {
  let component: Womenshirts4Component;
  let fixture: ComponentFixture<Womenshirts4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshirts4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshirts4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
