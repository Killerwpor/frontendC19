import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalListContactsComponent } from './global-list-contacts.component';

describe('GlobalListContactsComponent', () => {
  let component: GlobalListContactsComponent;
  let fixture: ComponentFixture<GlobalListContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalListContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalListContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
