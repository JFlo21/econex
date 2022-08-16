import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensjackets3Component } from './mensjackets3.component';

describe('Mensjackets3Component', () => {
  let component: Mensjackets3Component;
  let fixture: ComponentFixture<Mensjackets3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensjackets3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensjackets3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
