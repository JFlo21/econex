import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenjacket3Component } from './womenjacket3.component';

describe('Womenjacket3Component', () => {
  let component: Womenjacket3Component;
  let fixture: ComponentFixture<Womenjacket3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenjacket3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenjacket3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
