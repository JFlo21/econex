import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenjeansallpageComponent } from './womenjeansallpage.component';

describe('WomenjeansallpageComponent', () => {
  let component: WomenjeansallpageComponent;
  let fixture: ComponentFixture<WomenjeansallpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenjeansallpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenjeansallpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
