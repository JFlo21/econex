import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmensshirtsComponent } from './allmensshirts.component';

describe('AllmensshirtsComponent', () => {
  let component: AllmensshirtsComponent;
  let fixture: ComponentFixture<AllmensshirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmensshirtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmensshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
