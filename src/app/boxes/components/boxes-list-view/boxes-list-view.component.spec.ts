import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxesListViewComponent } from './boxes-list-view.component';

describe('BoxesListViewComponent', () => {
  let component: BoxesListViewComponent;
  let fixture: ComponentFixture<BoxesListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxesListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
