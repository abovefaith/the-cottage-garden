import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudleyComponent } from './audley.component';

describe('AudleyComponent', () => {
  let component: AudleyComponent;
  let fixture: ComponentFixture<AudleyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudleyComponent]
    });
    fixture = TestBed.createComponent(AudleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
