import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyInforFormComponent } from './family-infor-form.component';

describe('FamilyInforFormComponent', () => {
  let component: FamilyInforFormComponent;
  let fixture: ComponentFixture<FamilyInforFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilyInforFormComponent]
    });
    fixture = TestBed.createComponent(FamilyInforFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
