import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensjackets6Component } from './mensjackets6.component';

describe('Mensjackets6Component', () => {
  let component: Mensjackets6Component;
  let fixture: ComponentFixture<Mensjackets6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensjackets6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensjackets6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
