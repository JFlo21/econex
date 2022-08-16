import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensshoes2Component } from './mensshoes2.component';

describe('Mensshoes2Component', () => {
  let component: Mensshoes2Component;
  let fixture: ComponentFixture<Mensshoes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensshoes2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensshoes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
