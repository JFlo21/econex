import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensshoes8Component } from './mensshoes8.component';

describe('Mensshoes8Component', () => {
  let component: Mensshoes8Component;
  let fixture: ComponentFixture<Mensshoes8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensshoes8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensshoes8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
