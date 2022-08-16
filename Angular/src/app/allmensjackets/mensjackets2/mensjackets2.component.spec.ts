import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensjackets2Component } from './mensjackets2.component';

describe('Mensjackets2Component', () => {
  let component: Mensjackets2Component;
  let fixture: ComponentFixture<Mensjackets2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensjackets2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensjackets2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
