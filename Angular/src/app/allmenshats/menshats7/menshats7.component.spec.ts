import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menshats7Component } from './menshats7.component';

describe('Menshats7Component', () => {
  let component: Menshats7Component;
  let fixture: ComponentFixture<Menshats7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menshats7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Menshats7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
