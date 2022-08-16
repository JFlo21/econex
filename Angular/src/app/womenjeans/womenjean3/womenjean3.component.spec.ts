import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenjean3Component } from './womenjean3.component';

describe('Womenjean3Component', () => {
  let component: Womenjean3Component;
  let fixture: ComponentFixture<Womenjean3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenjean3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenjean3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
