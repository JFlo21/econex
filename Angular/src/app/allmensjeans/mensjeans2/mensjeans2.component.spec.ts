import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensjeans2Component } from './mensjeans2.component';

describe('Mensjeans2Component', () => {
  let component: Mensjeans2Component;
  let fixture: ComponentFixture<Mensjeans2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensjeans2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensjeans2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
