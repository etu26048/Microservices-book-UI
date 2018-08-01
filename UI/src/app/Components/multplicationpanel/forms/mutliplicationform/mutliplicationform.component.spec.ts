import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutliplicationformComponent } from './mutliplicationform.component';

describe('MutliplicationformComponent', () => {
  let component: MutliplicationformComponent;
  let fixture: ComponentFixture<MutliplicationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutliplicationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutliplicationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
