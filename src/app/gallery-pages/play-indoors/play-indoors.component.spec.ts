import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayIndoorsComponent } from './play-indoors.component';

describe('PlayIndoorsComponent', () => {
  let component: PlayIndoorsComponent;
  let fixture: ComponentFixture<PlayIndoorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayIndoorsComponent]
    });
    fixture = TestBed.createComponent(PlayIndoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
