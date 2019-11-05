import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMetaViewComponent } from './box-meta-view.component';

describe('BoxMetaViewComponent', () => {
  let component: BoxMetaViewComponent;
  let fixture: ComponentFixture<BoxMetaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxMetaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxMetaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
