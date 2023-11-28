import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurricullumComponent } from './curricullum.component';

describe('CurricullumComponent', () => {
  let component: CurricullumComponent;
  let fixture: ComponentFixture<CurricullumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurricullumComponent]
    });
    fixture = TestBed.createComponent(CurricullumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
