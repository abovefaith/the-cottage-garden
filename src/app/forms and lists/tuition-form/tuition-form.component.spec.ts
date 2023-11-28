import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuitionFormComponent } from './tuition-form.component';

describe('TuitionFormComponent', () => {
  let component: TuitionFormComponent;
  let fixture: ComponentFixture<TuitionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TuitionFormComponent]
    });
    fixture = TestBed.createComponent(TuitionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
