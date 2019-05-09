import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentserveyComponent } from './studentservey.component';

describe('StudentserveyComponent', () => {
  let component: StudentserveyComponent;
  let fixture: ComponentFixture<StudentserveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentserveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentserveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
