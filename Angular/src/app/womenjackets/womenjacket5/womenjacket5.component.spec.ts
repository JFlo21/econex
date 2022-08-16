import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenjacket5Component } from './womenjacket5.component';

describe('Womenjacket5Component', () => {
  let component: Womenjacket5Component;
  let fixture: ComponentFixture<Womenjacket5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenjacket5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenjacket5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
