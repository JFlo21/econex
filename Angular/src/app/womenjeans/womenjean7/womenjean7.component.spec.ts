import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenjean7Component } from './womenjean7.component';

describe('Womenjean7Component', () => {
  let component: Womenjean7Component;
  let fixture: ComponentFixture<Womenjean7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenjean7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenjean7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
