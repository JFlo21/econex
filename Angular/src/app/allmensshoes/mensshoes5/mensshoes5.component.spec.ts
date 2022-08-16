import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensshoes5Component } from './mensshoes5.component';

describe('Mensshoes5Component', () => {
  let component: Mensshoes5Component;
  let fixture: ComponentFixture<Mensshoes5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensshoes5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensshoes5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
