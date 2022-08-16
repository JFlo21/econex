import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensshoes6Component } from './mensshoes6.component';

describe('Mensshoes6Component', () => {
  let component: Mensshoes6Component;
  let fixture: ComponentFixture<Mensshoes6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensshoes6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensshoes6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
