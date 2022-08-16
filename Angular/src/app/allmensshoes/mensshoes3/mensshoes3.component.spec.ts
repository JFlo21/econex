import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensshoes3Component } from './mensshoes3.component';

describe('Mensshoes3Component', () => {
  let component: Mensshoes3Component;
  let fixture: ComponentFixture<Mensshoes3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensshoes3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensshoes3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
