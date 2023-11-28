import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayOutdoorsComponent } from './play-outdoors.component';

describe('PlayOutdoorsComponent', () => {
  let component: PlayOutdoorsComponent;
  let fixture: ComponentFixture<PlayOutdoorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayOutdoorsComponent]
    });
    fixture = TestBed.createComponent(PlayOutdoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
