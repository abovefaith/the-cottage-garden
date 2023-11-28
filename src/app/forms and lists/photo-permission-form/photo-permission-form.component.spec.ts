import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPermissionFormComponent } from './photo-permission-form.component';

describe('PhotoPermissionFormComponent', () => {
  let component: PhotoPermissionFormComponent;
  let fixture: ComponentFixture<PhotoPermissionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotoPermissionFormComponent]
    });
    fixture = TestBed.createComponent(PhotoPermissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
