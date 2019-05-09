import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersurveyComponent } from './customersurvey.component';

describe('CustomersurveyComponent', () => {
  let component: CustomersurveyComponent;
  let fixture: ComponentFixture<CustomersurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
