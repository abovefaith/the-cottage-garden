import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalTableauComponent } from './seasonal-tableau.component';

describe('SeasonalTableauComponent', () => {
  let component: SeasonalTableauComponent;
  let fixture: ComponentFixture<SeasonalTableauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeasonalTableauComponent]
    });
    fixture = TestBed.createComponent(SeasonalTableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
