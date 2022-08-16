import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menshats5Component } from './menshats5.component';

describe('Menshats5Component', () => {
  let component: Menshats5Component;
  let fixture: ComponentFixture<Menshats5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menshats5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Menshats5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
