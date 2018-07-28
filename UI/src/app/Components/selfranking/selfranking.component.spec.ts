import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfrankingComponent } from './selfranking.component';

describe('SelfrankingComponent', () => {
  let component: SelfrankingComponent;
  let fixture: ComponentFixture<SelfrankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfrankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfrankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
