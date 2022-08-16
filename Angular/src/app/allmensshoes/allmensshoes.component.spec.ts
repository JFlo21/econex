import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmensshoesComponent } from './allmensshoes.component';

describe('AllmensshoesComponent', () => {
  let component: AllmensshoesComponent;
  let fixture: ComponentFixture<AllmensshoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmensshoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmensshoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
