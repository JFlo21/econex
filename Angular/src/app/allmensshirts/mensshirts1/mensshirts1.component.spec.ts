import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensshirts1Component } from './mensshirts1.component';

describe('Mensshirts1Component', () => {
  let component: Mensshirts1Component;
  let fixture: ComponentFixture<Mensshirts1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensshirts1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensshirts1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
