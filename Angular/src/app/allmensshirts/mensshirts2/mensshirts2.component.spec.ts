import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensshirts2Component } from './mensshirts2.component';

describe('Mensshirts2Component', () => {
  let component: Mensshirts2Component;
  let fixture: ComponentFixture<Mensshirts2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensshirts2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensshirts2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
