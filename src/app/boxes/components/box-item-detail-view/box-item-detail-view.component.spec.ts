import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxItemDetailViewComponent } from './box-item-detail-view.component';

describe('BoxItemDetailViewComponent', () => {
  let component: BoxItemDetailViewComponent;
  let fixture: ComponentFixture<BoxItemDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxItemDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxItemDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
