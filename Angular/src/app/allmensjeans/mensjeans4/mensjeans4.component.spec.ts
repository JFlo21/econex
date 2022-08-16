import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensjeans4Component } from './mensjeans4.component';

describe('Mensjeans4Component', () => {
  let component: Mensjeans4Component;
  let fixture: ComponentFixture<Mensjeans4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensjeans4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensjeans4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
