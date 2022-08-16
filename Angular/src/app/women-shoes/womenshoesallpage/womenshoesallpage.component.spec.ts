import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenshoesallpageComponent } from './womenshoesallpage.component';

describe('WomenshoesallpageComponent', () => {
  let component: WomenshoesallpageComponent;
  let fixture: ComponentFixture<WomenshoesallpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenshoesallpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenshoesallpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
