import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenshoes16Component } from './womenshoes16.component';

describe('Womenshoes16Component', () => {
  let component: Womenshoes16Component;
  let fixture: ComponentFixture<Womenshoes16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenshoes16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenshoes16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
