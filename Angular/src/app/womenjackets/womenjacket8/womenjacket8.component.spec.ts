import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenjacket8Component } from './womenjacket8.component';

describe('Womenjacket8Component', () => {
  let component: Womenjacket8Component;
  let fixture: ComponentFixture<Womenjacket8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenjacket8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenjacket8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
