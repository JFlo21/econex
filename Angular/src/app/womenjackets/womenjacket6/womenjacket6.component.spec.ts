import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenjacket6Component } from './womenjacket6.component';

describe('Womenjacket6Component', () => {
  let component: Womenjacket6Component;
  let fixture: ComponentFixture<Womenjacket6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenjacket6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenjacket6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
