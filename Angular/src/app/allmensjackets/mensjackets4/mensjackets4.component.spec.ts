import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensjackets4Component } from './mensjackets4.component';

describe('Mensjackets4Component', () => {
  let component: Mensjackets4Component;
  let fixture: ComponentFixture<Mensjackets4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensjackets4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensjackets4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
