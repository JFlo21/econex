import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenjean8Component } from './womenjean8.component';

describe('Womenjean8Component', () => {
  let component: Womenjean8Component;
  let fixture: ComponentFixture<Womenjean8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenjean8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenjean8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
