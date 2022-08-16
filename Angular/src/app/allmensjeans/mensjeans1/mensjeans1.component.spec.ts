import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensjeans1Component } from './mensjeans1.component';

describe('Mensjeans1Component', () => {
  let component: Mensjeans1Component;
  let fixture: ComponentFixture<Mensjeans1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensjeans1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensjeans1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
