import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensjeans6Component } from './mensjeans6.component';

describe('Mensjeans6Component', () => {
  let component: Mensjeans6Component;
  let fixture: ComponentFixture<Mensjeans6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensjeans6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensjeans6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
