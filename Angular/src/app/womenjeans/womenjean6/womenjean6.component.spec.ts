import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenjean6Component } from './womenjean6.component';

describe('Womenjean6Component', () => {
  let component: Womenjean6Component;
  let fixture: ComponentFixture<Womenjean6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenjean6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenjean6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
