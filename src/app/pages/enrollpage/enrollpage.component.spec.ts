import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollpageComponent } from './enrollpage.component';

describe('EnrollpageComponent', () => {
  let component: EnrollpageComponent;
  let fixture: ComponentFixture<EnrollpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnrollpageComponent]
    });
    fixture = TestBed.createComponent(EnrollpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
