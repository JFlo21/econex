import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Womenjean4Component } from './womenjean4.component';

describe('Womenjean4Component', () => {
  let component: Womenjean4Component;
  let fixture: ComponentFixture<Womenjean4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Womenjean4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Womenjean4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
