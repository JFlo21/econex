import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensshoes9Component } from './mensshoes9.component';

describe('Mensshoes9Component', () => {
  let component: Mensshoes9Component;
  let fixture: ComponentFixture<Mensshoes9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensshoes9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensshoes9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
