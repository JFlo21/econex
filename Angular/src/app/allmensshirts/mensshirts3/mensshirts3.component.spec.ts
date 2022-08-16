import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensshirts3Component } from './mensshirts3.component';

describe('Mensshirts3Component', () => {
  let component: Mensshirts3Component;
  let fixture: ComponentFixture<Mensshirts3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensshirts3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensshirts3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
