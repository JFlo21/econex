import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenjacket7Component } from './womenjacket7.component';

describe('Womenjacket7Component', () => {
  let component: Womenjacket7Component;
  let fixture: ComponentFixture<Womenjacket7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenjacket7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenjacket7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
