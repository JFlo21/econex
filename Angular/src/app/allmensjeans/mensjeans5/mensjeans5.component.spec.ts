import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensjeans5Component } from './mensjeans5.component';

describe('Mensjeans5Component', () => {
  let component: Mensjeans5Component;
  let fixture: ComponentFixture<Mensjeans5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensjeans5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensjeans5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
