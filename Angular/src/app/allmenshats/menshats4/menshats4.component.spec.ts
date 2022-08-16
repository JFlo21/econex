import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menshats4Component } from './menshats4.component';

describe('Menshats4Component', () => {
  let component: Menshats4Component;
  let fixture: ComponentFixture<Menshats4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menshats4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Menshats4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});