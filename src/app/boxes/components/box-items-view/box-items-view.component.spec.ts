import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxItemsViewComponent } from './box-items-view.component';

describe('BoxItemsViewComponent', () => {
  let component: BoxItemsViewComponent;
  let fixture: ComponentFixture<BoxItemsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxItemsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxItemsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
