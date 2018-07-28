import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardpanelComponent } from './leaderboardpanel.component';

describe('LeaderboardpanelComponent', () => {
  let component: LeaderboardpanelComponent;
  let fixture: ComponentFixture<LeaderboardpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
