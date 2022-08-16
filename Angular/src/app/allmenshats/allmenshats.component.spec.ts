import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmenshatsComponent } from './allmenshats.component';

describe('AllmenshatsComponent', () => {
  let component: AllmenshatsComponent;
  let fixture: ComponentFixture<AllmenshatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmenshatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmenshatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
