import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewoneitemComponent } from './viewoneitem.component';

describe('ViewoneitemComponent', () => {
  let component: ViewoneitemComponent;
  let fixture: ComponentFixture<ViewoneitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewoneitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewoneitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
