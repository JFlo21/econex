import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menshats6Component } from './menshats6.component';

describe('Menshats6Component', () => {
  let component: Menshats6Component;
  let fixture: ComponentFixture<Menshats6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menshats6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Menshats6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});