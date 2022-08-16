import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensshirts4Component } from './mensshirts4.component';

describe('Mensshirts4Component', () => {
  let component: Mensshirts4Component;
  let fixture: ComponentFixture<Mensshirts4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensshirts4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensshirts4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
