import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensshirts7Component } from './mensshirts7.component';

describe('Mensshirts7Component', () => {
  let component: Mensshirts7Component;
  let fixture: ComponentFixture<Mensshirts7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensshirts7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensshirts7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
