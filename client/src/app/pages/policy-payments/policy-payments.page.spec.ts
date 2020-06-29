import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolicyPaymentsPage } from './policy-payments.page';

describe('PolicyPaymentsPage', () => {
  let component: PolicyPaymentsPage;
  let fixture: ComponentFixture<PolicyPaymentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyPaymentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolicyPaymentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
