import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensshoes10Component } from './mensshoes10.component';

describe('Mensshoes10Component', () => {
  let component: Mensshoes10Component;
  let fixture: ComponentFixture<Mensshoes10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensshoes10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensshoes10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
