import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshirts3Component } from './womenshirts3.component';

describe('Womenshirts3Component', () => {
  let component: Womenshirts3Component;
  let fixture: ComponentFixture<Womenshirts3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshirts3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshirts3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
