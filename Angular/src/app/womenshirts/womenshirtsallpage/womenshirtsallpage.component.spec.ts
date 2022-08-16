import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenshirtsallpageComponent } from './womenshirtsallpage.component';

describe('WomenshirtsallpageComponent', () => {
  let component: WomenshirtsallpageComponent;
  let fixture: ComponentFixture<WomenshirtsallpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenshirtsallpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenshirtsallpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
