import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensshoes4Component } from './mensshoes4.component';

describe('Mensshoes4Component', () => {
  let component: Mensshoes4Component;
  let fixture: ComponentFixture<Mensshoes4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensshoes4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensshoes4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
