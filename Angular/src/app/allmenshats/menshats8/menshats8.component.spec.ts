import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menshats8Component } from './menshats8.component';

describe('Menshats8Component', () => {
  let component: Menshats8Component;
  let fixture: ComponentFixture<Menshats8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menshats8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Menshats8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});