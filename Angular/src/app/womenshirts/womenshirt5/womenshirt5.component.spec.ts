import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshirt5Component } from './womenshirt5.component';

describe('Womenshirt5Component', () => {
  let component: Womenshirt5Component;
  let fixture: ComponentFixture<Womenshirt5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshirt5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshirt5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
