import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenjean2Component } from './womenjean2.component';

describe('Womenjean2Component', () => {
  let component: Womenjean2Component;
  let fixture: ComponentFixture<Womenjean2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenjean2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenjean2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
