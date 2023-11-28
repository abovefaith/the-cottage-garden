import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeliaComponent } from './celia.component';

describe('CeliaComponent', () => {
  let component: CeliaComponent;
  let fixture: ComponentFixture<CeliaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeliaComponent]
    });
    fixture = TestBed.createComponent(CeliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
