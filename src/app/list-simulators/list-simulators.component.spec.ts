import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSimulatorsComponent } from './list-simulators.component';

describe('ListSimulatorsComponent', () => {
  let component: ListSimulatorsComponent;
  let fixture: ComponentFixture<ListSimulatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSimulatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSimulatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
