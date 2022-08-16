import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menshats2Component } from './menshats2.component';

describe('Menshats2Component', () => {
  let component: Menshats2Component;
  let fixture: ComponentFixture<Menshats2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menshats2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Menshats2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
