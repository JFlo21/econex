import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensshirts6Component } from './mensshirts6.component';

describe('Mensshirts6Component', () => {
  let component: Mensshirts6Component;
  let fixture: ComponentFixture<Mensshirts6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensshirts6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensshirts6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
