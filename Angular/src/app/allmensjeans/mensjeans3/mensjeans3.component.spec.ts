import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensjeans3Component } from './mensjeans3.component';

describe('Mensjeans3Component', () => {
  let component: Mensjeans3Component;
  let fixture: ComponentFixture<Mensjeans3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensjeans3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensjeans3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
