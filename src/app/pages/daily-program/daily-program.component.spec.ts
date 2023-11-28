import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyProgramComponent } from './daily-program.component';

describe('DailyProgramComponent', () => {
  let component: DailyProgramComponent;
  let fixture: ComponentFixture<DailyProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyProgramComponent]
    });
    fixture = TestBed.createComponent(DailyProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
