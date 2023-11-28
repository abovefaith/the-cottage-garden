import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OralOptOutFormComponent } from './oral-opt-out-form.component';

describe('OralOptOutFormComponent', () => {
  let component: OralOptOutFormComponent;
  let fixture: ComponentFixture<OralOptOutFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OralOptOutFormComponent]
    });
    fixture = TestBed.createComponent(OralOptOutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
