import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensshoes7Component } from './mensshoes7.component';

describe('Mensshoes7Component', () => {
  let component: Mensshoes7Component;
  let fixture: ComponentFixture<Mensshoes7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensshoes7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensshoes7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
