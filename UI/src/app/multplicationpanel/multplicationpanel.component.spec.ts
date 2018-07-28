import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultplicationpanelComponent } from './multplicationpanel.component';

describe('MultplicationpanelComponent', () => {
  let component: MultplicationpanelComponent;
  let fixture: ComponentFixture<MultplicationpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultplicationpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultplicationpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
