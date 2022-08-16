import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenjacketsallpageComponent } from './womenjacketsallpage.component';

describe('WomenjacketsallpageComponent', () => {
  let component: WomenjacketsallpageComponent;
  let fixture: ComponentFixture<WomenjacketsallpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenjacketsallpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenjacketsallpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
