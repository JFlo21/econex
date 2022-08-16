import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensshirts5Component } from './mensshirts5.component';

describe('Mensshirts5Component', () => {
  let component: Mensshirts5Component;
  let fixture: ComponentFixture<Mensshirts5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensshirts5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensshirts5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
