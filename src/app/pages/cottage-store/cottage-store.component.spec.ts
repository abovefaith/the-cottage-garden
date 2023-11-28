import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CottageStoreComponent } from './cottage-store.component';

describe('CottageStoreComponent', () => {
  let component: CottageStoreComponent;
  let fixture: ComponentFixture<CottageStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CottageStoreComponent]
    });
    fixture = TestBed.createComponent(CottageStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
