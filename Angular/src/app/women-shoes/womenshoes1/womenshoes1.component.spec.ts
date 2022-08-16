import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshoes1Component } from './womenshoes1.component';

describe('Womenshoes1Component', () => {
  let component: Womenshoes1Component;
  let fixture: ComponentFixture<Womenshoes1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshoes1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshoes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
