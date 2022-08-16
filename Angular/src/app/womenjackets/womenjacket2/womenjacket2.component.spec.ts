import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenjacket2Component } from './womenjacket2.component';

describe('Womenjacket2Component', () => {
  let component: Womenjacket2Component;
  let fixture: ComponentFixture<Womenjacket2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenjacket2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenjacket2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
