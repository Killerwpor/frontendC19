import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalContactSearchComponent } from './global-contact-search.component';

describe('GlobalContactSearchComponent', () => {
  let component: GlobalContactSearchComponent;
  let fixture: ComponentFixture<GlobalContactSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalContactSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalContactSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
