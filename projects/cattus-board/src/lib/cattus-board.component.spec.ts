import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CattusBoardComponent } from './cattus-board.component';

describe('CattusBoardComponent', () => {
  let component: CattusBoardComponent;
  let fixture: ComponentFixture<CattusBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CattusBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CattusBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
