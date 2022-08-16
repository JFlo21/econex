import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenjacket1Component } from './womenjacket1.component';

describe('Womenjacket1Component', () => {
  let component: Womenjacket1Component;
  let fixture: ComponentFixture<Womenjacket1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenjacket1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenjacket1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
