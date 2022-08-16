import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensjackets1Component } from './mensjackets1.component';

describe('Mensjackets1Component', () => {
  let component: Mensjackets1Component;
  let fixture: ComponentFixture<Mensjackets1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensjackets1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensjackets1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
