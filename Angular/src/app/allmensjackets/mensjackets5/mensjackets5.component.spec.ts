import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensjackets5Component } from './mensjackets5.component';

describe('Mensjackets5Component', () => {
  let component: Mensjackets5Component;
  let fixture: ComponentFixture<Mensjackets5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensjackets5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensjackets5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
