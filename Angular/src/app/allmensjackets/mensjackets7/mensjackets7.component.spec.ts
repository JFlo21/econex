import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensjackets7Component } from './mensjackets7.component';

describe('Mensjackets7Component', () => {
  let component: Mensjackets7Component;
  let fixture: ComponentFixture<Mensjackets7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensjackets7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensjackets7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
