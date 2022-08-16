import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menshats1Component } from './menshats1.component';

describe('Menshats1Component', () => {
  let component: Menshats1Component;
  let fixture: ComponentFixture<Menshats1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menshats1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Menshats1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});