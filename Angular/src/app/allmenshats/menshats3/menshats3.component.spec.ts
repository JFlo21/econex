import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menshats3Component } from './menshats3.component';

describe('Menshats3Component', () => {
  let component: Menshats3Component;
  let fixture: ComponentFixture<Menshats3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menshats3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Menshats3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});