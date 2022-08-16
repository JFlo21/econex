import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenjacket4Component } from './womenjacket4.component';

describe('Womenjacket4Component', () => {
  let component: Womenjacket4Component;
  let fixture: ComponentFixture<Womenjacket4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenjacket4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenjacket4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
