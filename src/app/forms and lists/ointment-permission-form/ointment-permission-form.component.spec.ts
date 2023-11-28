import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OintmentPermissionFormComponent } from './ointment-permission-form.component';

describe('OintmentPermissionFormComponent', () => {
  let component: OintmentPermissionFormComponent;
  let fixture: ComponentFixture<OintmentPermissionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OintmentPermissionFormComponent]
    });
    fixture = TestBed.createComponent(OintmentPermissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
