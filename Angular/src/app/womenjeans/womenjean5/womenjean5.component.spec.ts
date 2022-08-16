import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenjean5Component } from './womenjean5.component';

describe('Womenjean5Component', () => {
  let component: Womenjean5Component;
  let fixture: ComponentFixture<Womenjean5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenjean5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenjean5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
