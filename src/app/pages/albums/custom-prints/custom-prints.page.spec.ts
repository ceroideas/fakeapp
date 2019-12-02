import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPrintsPage } from './custom-prints.page';

describe('CustomPrintsPage', () => {
  let component: CustomPrintsPage;
  let fixture: ComponentFixture<CustomPrintsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPrintsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPrintsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
