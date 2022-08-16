import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentcompletepageComponent } from './paymentcompletepage.component';

describe('PaymentcompletepageComponent', () => {
  let component: PaymentcompletepageComponent;
  let fixture: ComponentFixture<PaymentcompletepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentcompletepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentcompletepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
