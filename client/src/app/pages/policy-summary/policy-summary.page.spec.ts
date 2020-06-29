import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolicySummaryPage } from './policy-summary.page';

describe('PolicySummaryPage', () => {
  let component: PolicySummaryPage;
  let fixture: ComponentFixture<PolicySummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicySummaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolicySummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
