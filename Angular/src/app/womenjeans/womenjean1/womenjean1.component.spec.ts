import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenjean1Component } from './womenjean1.component';

describe('Womenjean1Component', () => {
  let component: Womenjean1Component;
  let fixture: ComponentFixture<Womenjean1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenjean1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenjean1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
