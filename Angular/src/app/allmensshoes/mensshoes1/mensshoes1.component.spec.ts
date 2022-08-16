import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensshoes1Component } from './mensshoes1.component';

describe('Mensshoes1Component', () => {
  let component: Mensshoes1Component;
  let fixture: ComponentFixture<Mensshoes1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensshoes1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensshoes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
